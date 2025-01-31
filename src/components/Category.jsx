import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../store/categorySlice.js";
import { setRecommend } from "../store/flowersSlice.js";
import { category_list } from "../data/category/category.js";

function Category() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );
  const cartItems = useSelector((state) => state.cart);

  const handleSelectedCategory = (category) => {
    dispatch(setCategory(category));
    dispatch(setRecommend(category));
  };

  return (
    <div className="flex flex-col justify-center px-4 md:px-8 lg:px-16">
      <h3 className="text-gray-700 text-2xl font-bold leading-9 text-center md:text-left">
        Select Category
      </h3>
      <hr className="w-[90px] h-[5px] bg-red-400 border-none my-4 mb-8 mx-auto md:mx-0" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
        {category_list.map((item, index) => {
          const isSelected = selectedCategory === item.category_name;
          const isInCart = cartItems[item.category_name];
          return (
            <div
              onClick={() => handleSelectedCategory(item.category_name)}
              key={index}
              className="relative w-full max-w-[150px] md:max-w-[180px] h-40 py-8 px-4 bg-red-100 rounded-2xl flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform shadow-md"
            >
              <div className="w-[64px] h-[64px]">
                <img
                  src={item.category_img}
                  alt={item.category_name}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-sm md:text-md font-semibold text-center text-red-700 mt-2">
                {item.category_name}
              </p>
              {(isSelected || isInCart) && (
                <img
                  src={item.category_status}
                  alt="checked_icon"
                  width={21}
                  height={21}
                  className="absolute top-3 right-3"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
