import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import {
  setFlowers,
  setRecommend,
  openModal,
  closeModal,
} from "../store/flowersSlice";
import ProductModal from "./ProductModal";
import { IoIosArrowDropright } from "react-icons/io";

function ProductRecommend() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );
  const recommend = useSelector((state) => state.flowers.recommend);

  // تحميل بيانات المنتجات عند فتح الصفحة
  useEffect(() => {
    dispatch(setFlowers());
  }, [dispatch]);

  // تحديث التوصيات بناءً على الفئة المختارة بعد تحميل البيانات
  useEffect(() => {
    if (recommend.length === 0) {
      dispatch(setRecommend(selectedCategory));
    }
  }, [dispatch, selectedCategory, recommend.length]);

  const handleOpenModal = (id) => {
    dispatch(openModal(id));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h3 className="text-2xl font-bold leading-9 text-gray-800 text-center md:text-left">
        Choose your flower
      </h3>
      <hr className="w-20 h-1 bg-red-400 border-none mt-2 mb-6 mx-auto md:mx-0" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 place-items-center">
        {recommend.map(
          (item) =>
            (selectedCategory === "all" ||
              selectedCategory.toLowerCase() === item.category) && (
              <ProductItem
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.image}
                price={item.price}
                handleOpenModal={handleOpenModal}
              />
            )
        )}
      </div>
      <div className="flex justify-center mt-6">
        <Link
          to="/products"
          className="flex gap-2 md:gap-4 justify-center items-center py-3 md:py-4 px-6 rounded-xl w-full md:w-[60%] bg-red-100 hover:bg-red-200 transition-colors duration-200"
        >
          <p className="text-lg md:text-xl font-medium text-red-500">
            View All Products
          </p>
          <IoIosArrowDropright size={25} className="text-red-500" />
        </Link>
      </div>
      <ProductModal handleCloseModal={handleCloseModal} />
    </div>
  );
}

export default ProductRecommend;
