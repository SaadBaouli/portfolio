import { useState } from "react";

const CVButton = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      alert("⚠️ Merci de sélectionner un fichier PDF uniquement.");
    }
  };

  
  const handleDownload = () => {
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      const link = document.createElement("a");
      link.href = url;
      link.download = selectedFile.name;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="text-center my-8">
      <input
        type="file"
        accept="application/pdf"
        id="cv-upload"
        className="hidden"
        onChange={handleFileChange}
      />

      
      <label htmlFor="cv-upload">
        <div
          className="bg-secondary text-white px-6 py-3 rounded shadow 
                     hover:bg-primary transition cursor-pointer inline-block"
        >
          {selectedFile ? "Changer mon CV" : "Télécharger mon CV"}
        </div>
      </label>

      {selectedFile && (
        <button
          onClick={handleDownload}
          className="ml-4 bg-secondary text-white px-6 py-3 rounded shadow 
                     hover:bg-primary transition"
        >
          Télécharger mon CV
        </button>
      )}
    </div>
  );
};

export default CVButton;
