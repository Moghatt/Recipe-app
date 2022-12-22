import { BrowserRouter, Routes, Route } from "react-router-dom";

// page components
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import Edit from "./pages/edit/Edit";
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";

// styles
import "./App.css";
import { useTheme } from "./hooks/UseTheme";

// https://api.spoonacular.com/recipes/complexSearch?apiKey=add3f493ca074a2bacbe4958eceefdaf&query=pasta

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
