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
    <div className="flex flex-col justify-center">
      <h3 className="text-gray-700 text-2xl font-bold leading-9"> </h3>Select
      Category
      <hr className="w-[90px] h-[5px] bg-red-400 border-none my-4 mb-8" />
      <div className="flex justify-start gap-6 flex-wrap">
        {category_list.map((item, index) => {
          const isSelected = selectedCategory === item.category_name;
          const isInCart = cartItems[item.category_name];
          return (
            <div
              onClick={() => handleSelectedCategory(item.category_name)}
              key={index}
              className={
                "relative w-40 h-40 py-8 px-6 gap-4 bg-red-100 rounded-2xl flex flex-col justify-center items-center reltive cursor-pointer hover:scale-105 duration-200 hover:shadow-category duration-100 ease-linear"
              }
            >
              <div className="w-[74px] h-[74px]">
                <img src={item.category_img} alt={item.category_name} />
              </div>
              <p className="text-md font-semibold text-center text-red-700">
                {item.category_name}
              </p>
              {(isSelected || isInCart) && (
                <img
                  src={item.category_status}
                  alt="checked_icon"
                  width={21}
                  height={21}
                  className="absolute top-3 right-3 block"
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
