import React, { useState } from 'react';

const SubmissionTab = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const maxSize = 5 * 1024 * 1024; // 5MB

    // File type validation
    const allowedTypes = ["application/pdf"];
    const invalidFiles = files.filter((file) => !allowedTypes.includes(file.type));

    if (invalidFiles.length > 0) {
      setErrorMessage("Invalid file type. Only PDF files are allowed.");
      return;
    }

    // File size validation
    const oversizedFiles = files.filter((file) => file.size > maxSize);

    if (oversizedFiles.length > 0) {
      setErrorMessage("File size exceeds the limit of 5MB.");
      return;
    }

    setErrorMessage("");
    setSelectedFiles(files);
  };

  const handleRemoveFile = (index) => {
    setSelectedFiles(prevFiles => prevFiles.filter((file, i) => i !== index));
  };

  const handleViewFile = (file) => {
    window.open(URL.createObjectURL(file));
  };

  return (
    <div>
      <div className="FileUpload">
        <h1>Birth Certificate</h1>
        {errorMessage && <p>{errorMessage}</p>}
        <form>
          <label htmlFor="file-upload">Select files to upload:</label>
          <input
            id="file-upload"
            type="file"
            multiple
            onChange={handleFileChange}
          />
        </form>
        <div className="SelectedFiles">
        <h2>Selected files:</h2>
        <ul>
          {selectedFiles.map((file, index) => (
            <li key={index}>
              <span>{file.name}</span>
              <button onClick={() => handleViewFile(file)}>View</button>
              <button onClick={() => handleRemoveFile(index)}>Remove</button>
            </li>
          ))}
        </ul>
        </div>
      </div>
      
      <div className="FileUpload">
        <h1>Form 137</h1>
        {errorMessage && <p>{errorMessage}</p>}
        <form>
          <label htmlFor="file-upload">Select files to upload:</label>
          <input
            id="file-upload"
            type="file"
            multiple
            onChange={handleFileChange}
          />
        </form>
        <div className="SelectedFiles">
        <h2>Selected files:</h2>
        <ul>
          {selectedFiles.map((file, index) => (
            <li key={index}>
              <span>{file.name}</span>
              <button onClick={() => handleViewFile(file)}>View</button>
              <button onClick={() => handleRemoveFile(index)}>Remove</button>
            </li>
          ))}
        </ul>
        </div>
      </div>
    
      <div className="FileUpload">
        <h1>Form 138</h1>
        {errorMessage && <p>{errorMessage}</p>}
        <form>
          <label htmlFor="file-upload">Select files to upload:</label>
          <input
            id="file-upload"
            type="file"
            multiple
            onChange={handleFileChange}
          />
        </form>
        <div className="SelectedFiles">
        <h2>Selected files:</h2>
        <ul>
          {selectedFiles.map((file, index) => (
            <li key={index}>
              <span>{file.name}</span>
              <button onClick={() => handleViewFile(file)}>View</button>
              <button onClick={() => handleRemoveFile(index)}>Remove</button>
            </li>
          ))}
        </ul>
        </div>
      </div>
     
      <div className="FileUpload">
        <h1>Certificate of Good Moral</h1>
        {errorMessage && <p>{errorMessage}</p>}
        <form>
          <label htmlFor="file-upload">Select files to upload:</label>
          <input
            id="file-upload"
            type="file"
            multiple
            onChange={handleFileChange}
          />
        </form>
        <div className="SelectedFiles">
        <h2>Selected files:</h2>
        <ul>
          {selectedFiles.map((file, index) => (
            <li key={index}>
              <span>{file.name}</span>
              <button onClick={() => handleViewFile(file)}>View</button>
              <button onClick={() => handleRemoveFile(index)}>Remove</button>
            </li>
          ))}
        </ul>
        </div>
      </div>
      
      <div className="FileUpload">
        <h1>Senior High School Diploma </h1>
        {errorMessage && <p>{errorMessage}</p>}
        <form>
          <label htmlFor="file-upload">Select files to upload:</label>
          <input
            id="file-upload"
            type="file"
            multiple
            onChange={handleFileChange}
          />
        </form>
        <div className="SelectedFiles">
        <h2>Selected files:</h2>
        <ul>
          {selectedFiles.map((file, index) => (
            <li key={index}>
              <span>{file.name}</span>
              <button onClick={() => handleViewFile(file)}>View</button>
              <button onClick={() => handleRemoveFile(index)}>Remove</button>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default SubmissionTab;