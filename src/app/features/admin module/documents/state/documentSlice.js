import { createSlice } from "@reduxjs/toolkit";

let documentSlice = createSlice({
  name: "document",
  initialState: {
    document: JSON.parse(localStorage.getItem("document")) || [],
    isLoading: false,
  },
  reducers: {
    addDocument: (state, action) => {
    let document =   state.document.push(action.payload)
      localStorage.setItem("document", JSON.stringify(state.document));
     
    },
    removeDocument: (state, action) => {
      state.document = state.document.filter(
        (elem) => elem.id !== action.payload.id,
      );

      localStorage.setItem("document", JSON.stringify(state.document));
    },
  },
});

export const { addDocument, removeDocument } = documentSlice.actions;
export default documentSlice.reducer;
