import { Link } from "react-router-dom";
import { useTheme } from "../hooks/UseTheme";

// styles
import "./Navbar.css";
import Searchbar from "./Searchbar";

export default function Navbar() {
  const { color, changeColor } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav
        onClick={() =>
          color === "#58249c" ? changeColor("pink") : changeColor("#58249c")
        }
      >
        <Link to="/" className="brand">
          <h1>Cooking Time</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
