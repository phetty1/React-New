import React from "react";

const FruitCard = ({ namee, price, weight }) => {
  return (
    <div>
        <br />
      <div className="w-[200px] bg-gray-50 text-center rounded-lg shadow">
        <p>ຊື່:{namee}</p>
        <p>ລາຄາ: {price} kip</p>
        <p>ນ້ຳໜັກ: {weight}kg</p>
      </div>
    </div>
  );
};

export default FruitCard;
