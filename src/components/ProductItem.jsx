import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom"; // ✅ لاستخدام التنقل
import Add_Icon from "../assets/add-icon.svg";
import Remove_Icon from "../assets/remove-icon.svg";

function ProductItem({ id, name, img, price, oldPrice }) {
  // إضافة oldPrice
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cart);
  const navigate = useNavigate(); // ✅ التنقل للصفحة الجديدة

  // ✅ التنقل عند الضغط على المنتج
  const handleNavigateToDetails = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="flex flex-col justify-start items-center w-[160px] sm:w-[200px] h-[260px] sm:h-[300px] rounded-2xl gap-3 sm:gap-4 bg-white shadow-box hover:scale-105 duration-200 mx-1 sm:mx-2">
      <div
        className="w-full h-[150px] sm:h-[170px] bg-cover bg-center bg-no-repeat rounded-t-lg cursor-pointer"
        style={{ backgroundImage: `url(${img})` }}
        onClick={handleNavigateToDetails} // ✅ التنقل عند الضغط على الصورة
      ></div>
      <div className="flex flex-col h-[90px] sm:h-[100px] items-start w-full gap-2 text-gray-800 px-3 sm:px-4">
        <p className="text-sm sm:text-lg font-medium">{name}</p>
        <div className="flex flex-col items-start gap-1 sm:gap-2">
          <p className="text-sm sm:text-lg font-medium line-through text-gray-500">
            {price + 200} EGP
          </p>
          <h3 className="text-md sm:text-2xl font-bold text-red-500">
            {price} EGP
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
