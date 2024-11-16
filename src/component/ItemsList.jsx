import ItemCard from './ItemCard';
import meal1 from '../assets/meal1.jpg';
import meal2 from '../assets/meal2.jpg';
import meal3 from '../assets/meal3.jpg';
import meal4 from '../assets/meal4.jpg';
import meal5 from '../assets/meal5.jpg';

const ItemsList = ({ selectedCategory, searchQuery, language }) => {
  const items = [
    {
      image: meal1,
      name: language === 'ar' ? 'طبق الإفطار' : 'Breakfast Plate',
      mealType: language ==='ar' ? 'افطار': 'Breakfast',
      description: language === 'ar' ? 'وجبة إفطار شهية تحتوي على البيض والخبز والعصير.' : 'A delicious breakfast with eggs, bread, and juice.',
      price: 15.99,
    },
    {
      image: meal2,
      name: language === 'ar' ? 'طبق الغداء' : 'Lunch Plate',
      mealType: language ==='ar' ? 'غداء': 'Lunch',
      description: language === 'ar' ? 'وجبة غداء مميزة تحتوي على اللحم والخضروات.' : 'A special lunch with meat and vegetables.',
      price: 25.99,
    },
    {
      image: meal3,
      name: language === 'ar' ? 'طبق العشاء' : 'Dinner Plate',
      mealType: language ==='ar' ? 'عشاء': 'Dinner',
      description: language === 'ar' ? 'وجبة عشاء لذيذة تحتوي على الأسماك والأرز.' : 'A tasty dinner with fish and rice.',
      price: 20.99,
    },
    {
      image: meal4,
      name: language === 'ar' ? 'طبق السلطة' : 'Salad Plate',
      mealType: language ==='ar' ? 'غداء': 'Lunch',
      description: language === 'ar' ? 'سلطة طازجة تحتوي على الخضروات والصلصة الخاصة.' : 'Fresh salad with vegetables and special dressing.',
      price: 12.99,
    },
    {
      image: meal5,
      name: language === 'ar' ? 'طبق السلطة' : 'Salad Plate',
      mealType: language ==='ar' ? 'غداء': 'Lunch',
      description: language === 'ar' ? 'سلطة طازجة تحتوي على الخضروات والصلصة الخاصة.' : 'Fresh salad with vegetables and special dressing.',
      price: 12.99,
    },
  ];

  // filter items
  const filteredItems = items
    .filter(item => selectedCategory === "الكل" || item.mealType === selectedCategory)
    .filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {filteredItems.map((item, index) => (
        <ItemCard
          key={index}
          image={item.image}
          name={item.name}
          mealType={item.mealType}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ItemsList;
