import { useState } from "react";

const Navbar = ({ language, toggleLanguage, setSearchQuery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState(""); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setSearchQuery(event.target.value); 
  };

  return (
    <nav
      className={`bg-gray-800 p-4 ${language === "ar" ? "text-right" : "text-left"} ${language === "ar" ? "rtl" : "ltr"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-orange-400 text-xl">
          {language === "ar" ? "مطعم جديد" : "New Restaurant"}
        </h1>
        <div className={`hidden md:flex ${language === "ar" ? "flex-row-reverse" : "flex-row"}`}>
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange} 
            placeholder={language === "ar" ? "بحث..." : "Search..."}
            className={`p-2 rounded-${language === "ar" ? "r" : "l"}-lg focus:outline-none`}
          />
          <button
            className={`bg-yellow-500 text-white p-2 rounded-${language === "ar" ? "l" : "r"}-lg`}
          >
            {language === "ar" ? "بحث" : "Search"}
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleLanguage} className="text-white">
            {language === "ar" ? "EN" : "AR"}
          </button>
          <button onClick={toggleMenu} className="md:hidden text-white">
            {isOpen ? "×" : "☰"}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder={language === "ar" ? "بحث..." : "Search..."}
            className="p-2 rounded-lg focus:outline-none w-full"
          />
          <button className="bg-pink-600 text-white p-2 rounded-lg w-full mt-2">
            {language === "ar" ? "بحث" : "Search"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
