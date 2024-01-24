import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editModal: {
    show: false,
    id: null,
    data: null,
  },
  notificationModal: {
    show: false,
    id: null,
    data: null,
  },
  addModal: {
    show: false,
    id: null,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showEditModal(state, action) {
      state.editModal.show = true;
      state.editModal.id = action.payload.id;
      state.editModal.data = action.payload.data;
    },
    hideEditModal(state) {
      state.editModal.show = false;
      state.editModal.id = null;
      state.editModal.data = null;
    },
    showNotificationModal(state, action) {
      state.notificationModal.show = true;
      state.notificationModal.id = action.payload.id;
      state.notificationModal.data = action.payload.data;
    },
    hideNotificationModal(state) {
      state.notificationModal.show = false;
      state.notificationModal.id = null;
      state.notificationModal.data = null;
    },
    showAddModal(state, action) {
      state.addModal.show = true;
      state.addModal.id = action.payload.id;
    },
    hideAddModal(state) {
      state.addModal.show = false;
      state.addModal.id = null;
    },
  },
});

export const {
  showEditModal,
  hideEditModal,
  hideNotificationModal,
  showNotificationModal,
  showAddModal,
  hideAddModal,
} = modalSlice.actions;

export default modalSlice.reducer;
