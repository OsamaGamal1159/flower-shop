import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { setFlowers, openModal, closeModal } from "../store/flowersSlice";
import ProductModal from "./ProductModal";

function ProductCard() {
  const dispatch = useDispatch();
  const flowers = useSelector((state) => state.flowers.flowers);
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  useEffect(() => {
    dispatch(setFlowers());
  }, [dispatch]);

  const handleOpenModal = (id) => {
    dispatch(openModal(id));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16">
      <h3 className="text-2xl font-bold leading-9 text-gray-800 text-center mb-4 sm:mb-6 md:mb-8">
        Choose your flower
      </h3>
      <hr className="w-[90px] h-[5px] bg-red-400 border-none mt-2 mb-6 mx-auto" />

      {/* Grid for mobile, with larger gaps and padding for bigger screens */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 place-items-center md:gap-10">
        {flowers.map((item) => {
          if (
            selectedCategory === "all" ||
            selectedCategory.toLowerCase() === item.category
          ) {
            return (
              <div
                className="w-full max-w-[140px] sm:max-w-[160px] md:w-[180px] lg:w-[200px] p-2 sm:p-4 md:p-5 lg:p-6"
                key={item.id}
              >
                <ProductItem
                  id={item.id}
                  name={item.name}
                  img={item.image}
                  price={item.price}
                  handleOpenModal={handleOpenModal}
                />
              </div>
            );
          }
        })}
      </div>

      <ProductModal handleCloseModal={handleCloseModal} />
    </div>
  );
}

export default ProductCard;
