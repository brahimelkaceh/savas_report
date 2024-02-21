import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  batiment: Yup.string().required("Batiment is required"),
  mort: Yup.number(),
  hensEliminated: Yup.number(),
  prod_normal: Yup.number(),
  prod_dj: Yup.number(),
  prod_blanc: Yup.number(),
  prod_casse: Yup.number(),
  prod_feles: Yup.number(),
  prod_elimne: Yup.number(),
  alimentDist: Yup.number(),
  eauDist: Yup.number(),
  pmo: Yup.number(),
  poidVif: Yup.number(),
  homog: Yup.number(),
  formule: Yup.string(),
  temperatureMin: Yup.number(),
  temperatureMax: Yup.number(),
  temperatureMinExt: Yup.number(),
  temperatureMaxExt: Yup.number(),
  lightOn: Yup.string(),
  lightOff: Yup.string(),
  flashOn: Yup.string(),
  flashOff: Yup.string(),
  flashDuration: Yup.string(),
  lightDuration: Yup.string(),
  intensite: Yup.number(),
  coloration: Yup.number(),
  qty_shell: Yup.number(),
  // fientes: Yup.string(),
  // aspectPoulette: Yup.string(),
  observ: Yup.string(),
});
export default validationSchema;
