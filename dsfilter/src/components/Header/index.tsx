import "./styles.css";

export function Header() {
  const productCount = 6;

  return (
    <>
      <div className="nav">
        <div className="nav dsf-container">
          <div>
            <h1>DSFilter</h1>
          </div>
          <div>
            <span>{productCount} produto(s)</span>
          </div>
        </div>
      </div>
    </>
  );
}
