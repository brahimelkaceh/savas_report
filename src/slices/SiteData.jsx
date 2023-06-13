import { createSlice } from "@reduxjs/toolkit";

const SiteDataSlice = createSlice({
  name: "SiteData",
  initialState: {
    siteId: "",
    siteName: "",
    sitePhone: "",
    region: "",
    batName: "",
    batId: "",
    batType: "",
    batSite: "",
  },
  reducers: {
    getSiteData: (state, action) => {
      state.siteId = action.payload;
    },
    getSiteName: (state, action) => {
      state.siteName = action.payload;
    },
    getSitePhone: (state, action) => {
      state.sitePhone = action.payload;
    },
    getSiteRegion: (state, action) => {
      state.region = action.payload;
    },
    getBatName: (state, action) => {
      state.batName = action.payload;
    },
    getBatId: (state, action) => {
      state.batId = action.payload;
    },
    getBatType: (state, action) => {
      state.batType = action.payload;
    },
    getBatSite: (state, action) => {
      state.batSite = action.payload;
    },
  },
});
export const {
  getSiteData,
  getSiteName,
  getSitePhone,
  getSiteRegion,
  getBatName,
  getBatId,
  getBatType,
  getBatSite,
} = SiteDataSlice.actions;
export default SiteDataSlice.reducer;
