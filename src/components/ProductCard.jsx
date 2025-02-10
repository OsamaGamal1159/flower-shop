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
    <div className="px-4 md:px-8 lg:px-16">
      <h3 className="text-2xl font-bold leading-9 text-gray-800 text-center md:text-left">
        Choose your flower
      </h3>
      <hr className="w-20 h-1 bg-red-400 border-none mt-2 mb-6 mx-auto md:mx-0" />

      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 place-items-center">
          {flowers.map((item) => {
            if (
              selectedCategory === "all" ||
              selectedCategory.toLowerCase() === item.category
            ) {
              return (
                <div
                  className="w-full max-w-[140px] sm:max-w-[160px] md:w-[180px] lg:w-[200px] p-2 sm:p-4"
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
    </div>
  );
}

export default ProductCard;
