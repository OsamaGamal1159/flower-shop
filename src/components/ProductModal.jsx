import React from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

function ProductModal({ handleCloseModal }) {
  const isModalOpen = useSelector((state) => state.flowers.isModalOpen);
  const selectedFlower = useSelector((state) => state.flowers.selectedFlower);

  if (!isModalOpen || !selectedFlower) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="relative flex flex-col bg-white w-full max-w-2xl md:max-w-3xl lg:max-w-4xl p-5 rounded-lg shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
          onClick={handleCloseModal}
        >
          <IoMdClose size={30} />
        </button>
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 text-center">
          Detail Product
        </h1>
        <hr className="w-20 h-1 bg-red-400 border-none my-3 mx-auto" />
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div
            className="w-full max-w-[250px] h-[250px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${selectedFlower.image})` }}
          ></div>
          <div className="flex flex-col gap-3 text-center md:text-left">
            <p className="text-lg md:text-xl font-bold text-gray-700">
              {selectedFlower.name}
            </p>
            <p className="text-sm md:text-base text-gray-700">
              <span className="font-semibold">Description:</span>{" "}
              {selectedFlower.description}
            </p>
            <p className="text-sm md:text-base text-gray-700">
              <span className="font-semibold">Details:</span>{" "}
              {selectedFlower.details}
            </p>
            <p className="text-lg md:text-2xl font-bold text-red-500 bg-red-100 p-3 rounded-lg">
              Price: ${selectedFlower.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
