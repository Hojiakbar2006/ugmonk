import { acCurrentCatalog } from "../../Redux/CurrentCatalog";
import "./Catalog.css";
import { useDispatch, useSelector } from "react-redux";

export function Catalog() {
  const dispatch = useDispatch()
  const currentCatalog = useSelector((state) => state.currentCatalog);
  const catalog = ["All", "Most view", "Best Sellers", "Clothings", "Objects"];
  return (
    <div className="catalog">
      {catalog.map((name, index) => {
        return (
          <button
            className={currentCatalog === name ? "active" : ""}
            key={index}
            onClick={() => dispatch(acCurrentCatalog(name))}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}
