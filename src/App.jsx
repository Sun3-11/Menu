import { useState } from "react";
import Categories from "./component/Category";
import Header from "./component/Header";
import ItemsList from "./component/ItemsList";
import Navbar from "./component/Navbar";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState(""); 
  const [language, setLanguage] = useState("ar");

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "ar" ? "en" : "ar"));
  };

  return (
    <div>
      <Navbar language={language} toggleLanguage={toggleLanguage} setSearchQuery={setSearchQuery} />
      <div className="container mx-auto p-4 bg-gray-100">
        <Header language={language} />
        <Categories filterbyCategory={filterByCategory} language={language} />
        <ItemsList selectedCategory={selectedCategory} searchQuery={searchQuery} language={language} />
      </div>
      <footer className="text-center mt-4">{language === "ar" ? "مطعم kkkkkk" : "Restaurant kkkkkk"}</footer>
    </div>
  );
};

export default App;
