import { createSlice } from "@reduxjs/toolkit";
import { flowers } from "../data/flowers";

const initialState = {
  recommend: [],
  flowers: [],
  isModalOpen: false,
  selectedFlower: null,
};

export const flowersSlice = createSlice({
  name: "flowers",
  initialState,
  reducers: {
    setFlowers(state) {
      state.flowers = flowers;
    },
    setRecommend(state, action) {
      const category = action.payload;
      if (state.flowers.length === 0) return; // تأكد من وجود بيانات قبل التصفية

      state.recommend =
        category && category.toLowerCase() !== "all"
          ? state.flowers
              .filter(
                (flower) =>
                  flower.category.toLowerCase() === category.toLowerCase()
              )
              .slice(0, 10)
          : state.flowers.slice(0, 10);
    },
    openModal(state, action) {
      state.isModalOpen = true;
      state.selectedFlower =
        state.flowers.find((flower) => flower.id === action.payload) || null;
    },
    closeModal(state) {
      state.isModalOpen = false;
      state.selectedFlower = null;
    },
  },
});

export const { setRecommend, setFlowers, openModal, closeModal } =
  flowersSlice.actions;
export default flowersSlice.reducer;
