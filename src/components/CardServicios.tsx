const CardServicios = () => {
  return (
    <div className="legal-card">
      {/* Encabezado con íconos simulados */}
      <div className="legal-card-header">
        <div className="icon law-icon">LAW</div>
        <div className="icon check-icon">✔</div>
      </div>

      {/* Título */}
      <h3 className="legal-card-title">
        Derecho Constitucional y<br />
        Procesal Constitucional
      </h3>

      {/* Lista de puntos */}
      <ul className="legal-card-list">
        <li>Garantías jurisdiccionales</li>
        <li>Medidas cautelares y constitucionales</li>
        <li>Amicus Curiae</li>
      </ul>
    </div>
  );
};

export default CardServicios;
