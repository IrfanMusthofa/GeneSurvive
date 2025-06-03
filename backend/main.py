from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import joblib

app = FastAPI()

# Allow CORS (for FE)
app.add_middleware(
    CORSMiddleware,
    # allow_origins=["genesurvive-frontend.up.railway.app"], 
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to the Naive Bayes Prediction API!"}

# Load Naive Bayes model
model = joblib.load("naive_bayes_model.pkl")

@app.post("/predict_csv")
async def predict_csv(file: UploadFile = File(...)):
    try:
        df = pd.read_csv(file.file)
        if df.empty:
            raise HTTPException(status_code=400, detail="CSV is empty.")
        if df.shape[1] != model.n_features_in_:
            raise HTTPException(
                status_code=400,
                detail=f"CSV must have {model.n_features_in_} columns."
            )

        predictions = model.predict(df)
        probabilities = model.predict_proba(df).tolist()

        return {
            "predictions": predictions.tolist(),
            "probabilities": probabilities
        }

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
