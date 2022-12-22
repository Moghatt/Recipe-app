import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useTheme } from "../../hooks/UseTheme";
import { projectFirestore } from "../../firebase/config";

// styles
import "./Recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore
      .collection("recipes")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError("Could not find that recipe");
        }
      });
    return () => unsub();
  }, [id]);

  // const [form, setForm] = useState(false);
  // const handleClick = () => {
  //   setForm(true);
  // projectFirestore.collection("recipes").doc(id).update({
  //   title: "Somthing completely difrrent",
  // });
  // };
  // const [input, setInput] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const title = { title: input };
  //   console.log(title);
  // };
  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          {/* <button onClick={handleClick}>Update me</button> */}
        </>
      )}
      {/* {form && (
        <form onSubmit={handleSubmit}>
          <label>
            title:
            <input type="text" value={input} onChange={handleChange} />
          </label>
          <button>submit</button>
        </form>
      )} */}
    </div>
  );
}
