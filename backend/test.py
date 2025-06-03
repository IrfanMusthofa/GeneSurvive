import pandas as pd
import joblib

# Load Logistic Regression model
model = joblib.load("logistic_model.pkl")

# Load sample input CSV (375 PCA features per row)
df = pd.read_csv("sample_input.csv", header=None)

# Validate shape
assert df.shape[1] == model.n_features_in_, f"Expected {model.n_features_in_} features, got {df.shape[1]}"

# Predict
predictions = model.predict(df)
probabilities = model.predict_proba(df)

# Output
for i, (pred, prob) in enumerate(zip(predictions, probabilities)):
    print(f"Patient {i+1}:")
    print(f"  Predicted Class    : {'Survived' if pred == 1 else 'Did Not Survive'}")
    print(f"  Probabilities      : Survive={prob[1]:.4f}, Not Survive={prob[0]:.4f}")
    print()
