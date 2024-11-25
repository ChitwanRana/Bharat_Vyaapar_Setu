import React, { useState } from "react";
import Loader from "../Loader/Loader"
import styles from "./DocumentCompliance.module.css";

const DocumentCompliance = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      setFile(null);
    } else {
      setError("");
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please upload a valid PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("document", file);

    setLoading(true); // Start loading

    try {
      const response = await fetch(
        "https://bharat-vyaapar-setu-e522.onrender.com/api/check-compliance",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Failed to upload file. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Document Compliance Checker</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="fileUpload" className={styles.label}>
            Upload your PDF:
          </label>
          <input
            id="fileUpload"
            type="file"
            onChange={handleFileChange}
            className={styles.fileInput}
            required
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.button} disabled={!file || loading}>
            {loading ? "Processing..." : "Check Compliance"}
          </button>
        </form>

        {loading && <Loader />}

        {results && !loading && (
          <div className={styles.results}>
            <h2 className={results.compliant ? styles.success : styles.failure}>
              {results.compliant
                ? "Compliant Document"
                : "Non-Compliant Document"}
            </h2>
            {results.issues && (
              <ul className={styles.issueList}>
                {results.issues.map((issue, index) => (
                  <li key={index} className={styles.issue}>
                    {issue}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default DocumentCompliance;
