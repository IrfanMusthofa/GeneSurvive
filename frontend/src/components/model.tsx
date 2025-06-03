"use client";
import { useState, ChangeEvent } from "react";

export default function HomePredictionBox() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Silakan pilih file CSV terlebih dahulu.");

    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/predict_csv`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setResult(data);
    } catch (err) {
      alert("Prediksi gagal dilakukan.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const renderInterpretation = (prediction: number, prob: number[]) => {
    const confidence = (Math.max(...prob) * 100).toFixed(2) + "%";
    let message = "";
    switch (prediction) {
      case 2:
        message =
          "Kabar baik! Kamu memiliki peluang hidup yang tinggi. Tetap jaga kesehatan dan rutin berkonsultasi dengan dokter.";
        break;
      case 1:
        message =
          "Kondisimu menunjukkan bahwa penyebab risiko bukan dari kanker. Tetap semangat, jalani hidup sehat, dan pantau kondisi secara berkala.";
        break;
      case 0:
        message =
          "Hasil menunjukkan adanya risiko. Tapi dengan pengobatan dan dukungan, banyak pasien bisa menjalani hidup yang baik. Jangan menyerah, tetap semangat!";
        break;
      default:
        message = "Interpretasi tidak tersedia.";
    }
    return `${message} (Keyakinan model: ${confidence})`;
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-pink-300 shadow-md border-2 border-pink-400">
      <h3 className="text-2xl font-bold text-pink-600 mb-4 text-center">
        Coba Prediksi
      </h3>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="w-full text-sm bg-gray-50 border-2 border-pink-400 rounded px-4 py-2 mb-4"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="w-full px-6 py-2 bg-pink-400 text-white rounded hover:bg-pink-600"
      >
        {loading ? "Memproses..." : "Unggah & Prediksi"}
      </button>

      {result && (
        <div className="mt-6 max-h-128 overflow-y-auto pr-2">
          <h4 className="text-lg font-semibold text-pink-600 mb-2">
            Hasil Prediksi
          </h4>
          {result.predictions?.map((pred: number, idx: number) => (
            <div
              key={idx}
              className="bg-pink-50 border-2 border-pink-400 p-4 rounded mb-3 text-sm"
            >
              <p className="font-semibold text-pink-600">Pasien #{idx + 1}:</p>
              <p className="text-gray-700 mt-1">
                {renderInterpretation(pred, result.probabilities?.[idx] || [])}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
