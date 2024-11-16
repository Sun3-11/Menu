import { Roll } from "react-reveal";

const Categories = ({ filterbyCategory, language }) => {
  const categories = language === "ar" ? ["الكل", "افطار", "غداء", "عشاء"] : ["All", "Breakfast", "Lunch", "Dinner"];

  return (
    <div className="mt-6 flex justify-center space-x-4 rtl:space-x-reverse">
      {categories.map((category, index) => (
        <Roll>
        <button
          key={index}
          onClick={() => filterbyCategory(category)}
          className="px-4 py-2 text-lg font-medium border-2 border-amber-500 hover:bg-amber-600 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          {category}
        </button>
        </Roll>
      ))}
    </div>
  );
};

export default Categories;
