//styles
import { useState } from "react";
import "./Searchbar.css";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [term, setTerm] = useState("");
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // ?q=
    navigate(`/search?q=${term}`);
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Searchbar;
