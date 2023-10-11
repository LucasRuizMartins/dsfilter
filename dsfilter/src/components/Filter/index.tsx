import "./styles.css";

export function Filter() {
  return (
    <>
      <div className="dsf-container">
        <div className="filter-card">
          <div>
            {" "}
            <input type="text" className="input-filter" placeholder="Preço minimo"/>
          </div>
          <div>
            {" "}
            <input type="text" className="input-filter" placeholder="Preço máximo" />
          </div>
          <div className="filter-btn">Filtrar</div>
        </div>
      </div>
    </>
  );
}
