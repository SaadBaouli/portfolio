const CVButton = () => {
  return (
    <div className="text-center my-8">
      <a
        href="/cv.pdf" // place ton CV ici dans le dossier /public
        download
        className="bg-secondary text-white px-6 py-3 rounded shadow hover:bg-primary transition"
      >
        Télécharger mon CV
      </a>
    </div>
  );
};

export default CVButton;
