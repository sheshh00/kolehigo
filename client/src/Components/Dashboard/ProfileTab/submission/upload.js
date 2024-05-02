import React, { useState } from "react";

const SubmissionTab = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const maxSize = 5 * 1024 * 1024; // 5MB

    // File type validation
    const allowedTypes = ["image/jpeg", "image/png"];
    const invalidFiles = files.filter((file) => !allowedTypes.includes(file.type));

    if (invalidFiles.length > 0) {
      setErrorMessage("Invalid file type. Only JPEG and PNG files are allowed.");
      setSelectedFiles([]);
      return;
    }

    // File size validation
    const oversizedFiles = files.filter((file) => file.size > maxSize);

    if (oversizedFiles.length > 0) {
      setErrorMessage("File size exceeds the limit of 5MB.");
      setSelectedFiles([]);
      return;
    }

    setErrorMessage("");
    setSelectedFiles(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g. send files to server or display selected files)

    // Reset selected files
    setSelectedFiles([]);
  };

  return (
    <div>
      <h2>Submission and Upload Documents</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-upload">Select files to upload:</label>
        <input
          id="file-upload"
          type="file"
          multiple
          onChange={handleFileChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h3>Selected files:</h3>
      <ul>
        {selectedFiles.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubmissionTab;
