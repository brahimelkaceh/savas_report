import { configureStore } from "@reduxjs/toolkit";
import UserDropReducer from "./slices/UserDrop";
import ShowModalReducer from "./slices/ShowModal";
import DisabledInputReducer from "./slices/DisabledInput";
import LeftBarReducer from "./slices/LeftBar";
import SiteDataReducer from "./slices/SiteData";
import SearchBarReducer from "./slices/SearchBar";
import LoginReducer from "./slices/Login";
import ShowBatimentCatReducer from "./slices/ShowBatimentCat";
import ShowBatimentFormsReducer from "./slices/ShowBatimentForms";
import ShowfieldsReducer from "./slices/Showfields";
import ModificationHeaderReducer from "./slices/ModificationHeader";
// import BatsDataReducer from "./slices/BatsData";

const store = configureStore({
  reducer: {
    userDrop: UserDropReducer,
    showModal: ShowModalReducer,
    disabledInput: DisabledInputReducer,
    toggleLeftBar: LeftBarReducer,
    openSearchBar: SearchBarReducer,
    loginForm: LoginReducer,
    ShowBatimentCat: ShowBatimentCatReducer,
    toggleFieldStatus: ShowfieldsReducer,
    ShowBatimentForms: ShowBatimentFormsReducer,
    modificationHeader: ModificationHeaderReducer,
    getSiteData: SiteDataReducer,
    // getBatsData: BatsDataReducer,
  },
});

export default store;
