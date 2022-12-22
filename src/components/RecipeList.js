import { Link, Navigate } from "react-router-dom";
import { useTheme } from "../hooks/UseTheme";
import Trashcan from "../assets/trashcan.svg";
import EditIcon from "../assets/edit-icon.svg";
import { useNavigate } from "react-router-dom";

//styles
import "./RecipeList.css";
import { projectFirestore } from "../firebase/config";

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme();
  let navigate = useNavigate();
  if (recipes.length === 0) {
    return <div className="error">No recipes to Load...</div>;
  }
  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
          <img
            className="delete"
            src={Trashcan}
            alt="deleteButton"
            onClick={() => handleClick(recipe.id)}
          />
          <img
            src={EditIcon}
            alt="editButton"
            className="edit"
            onClick={() => handleEdit(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
