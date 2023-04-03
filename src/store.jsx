import { configureStore } from "@reduxjs/toolkit";
import UserDropReducer from "./slices/UserDrop";
import ShowModalReducer from "./slices/ShowModal";
import DisabledInputReducer from "./slices/DisabledInput";
import LeftBarReducer from "./slices/LeftBar";
import SearchBarReducer from "./slices/SearchBar";
import LoginReducer from "./slices/Login";

const store = configureStore({
  reducer: {
    userDrop: UserDropReducer,
    showModal: ShowModalReducer,
    disabledInput: DisabledInputReducer,
    toggleLeftBar: LeftBarReducer,
    openSearchBar: SearchBarReducer,
    loginForm: LoginReducer,
  },
});

export default store;
