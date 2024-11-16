import { Zoom } from "react-reveal";

// eslint-disable-next-line react/prop-types
const ItemCard = ({ image, name, mealType, description, price }) => {
  return (
    <Zoom >
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden m-4">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <span className="text-sm text-gray-600">{mealType}</span>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-900">${price}</span>
        </div>
      </div>
    </div>
    </Zoom>
  );
};

export default ItemCard;
