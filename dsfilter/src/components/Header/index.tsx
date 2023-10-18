import { useContext } from "react";
import "./styles.css";
import { ContextProductCount } from "../../services/context-product";

export function Header() {
 
  const {contextProductCount} = useContext(ContextProductCount);

  return (
    <>
      <div className="nav">
        <div className="nav dsf-container">
          <div>
            <h1>DSFilter</h1>
          </div>
          <div>
            <span>{contextProductCount} produto(s)</span>
          </div>
        </div>
      </div>
    </>
  );
}
