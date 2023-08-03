import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  batiment: Yup.string().required("Batiment is required"),
  mort: Yup.number()
    .required("Mortalité is required")
    .positive("the number must be positive"),
  prod_normal: Yup.number()
    .required("Normaux is required")
    .positive("the number must be positive"),
  prod_dj: Yup.number()
    .required("Double jaune is required")
    .positive("the number must be positive"),
  prod_blanc: Yup.number()
    .required("Blanc is required")
    .positive("the number must be positive"),
  prod_casse: Yup.number()
    .required("Casse is required")
    .positive("the number must be positive"),
  prod_feles: Yup.number()
    .required("feles is required")
    .positive("the number must be positive"),
  prod_elimne: Yup.number()
    .required("eliminé is required")
    .positive("the number must be positive"),
  alimentDist: Yup.number()
    .required("aliment dist is required")
    .positive("the number must be positive"),
  eauDist: Yup.number()
    .required("Eau dist is required")
    .positive("the number must be positive"),
  pmo: Yup.number()
    .required("Poid moyen Oeuf is required")
    .positive("the number must be positive"),
  poidVif: Yup.number()
    .required("Poid vif is required")
    .positive("the number must be positive"),
  homog: Yup.number()
    .required("homogineité is required")
    .positive("the number must be positive"),
  formule: Yup.string(),
  temperatureMin: Yup.number()
    .required("Temp int min is required")
    .positive("the number must be positive"),
  temperatureMax: Yup.number()
    .required("Temp int max is required")
    .positive("the number must be positive"),
  temperatureMinExt: Yup.number()
    .required("Temp ext min is required")
    .positive("the number must be positive"),
  temperatureMaxExt: Yup.number()
    .required("Temp ext max is required")
    .positive("the number must be positive"),
  lightOn: Yup.string().required("light on  is required"),
  lightOff: Yup.string().required("light off  is required"),
  flashOn: Yup.string().required("flash on  is required"),
  flashOff: Yup.string().required("flash off  is required"),
  intensite: Yup.number()
    .required("intensité is required")
    .positive("the number must be positive"),
  aspectPoulette: Yup.number()
    .required("Aspect Poulette is required")
    .min(1, "Aspect Poulette is required")
    .max(5, "Rating must not exceed 5"),
  coloration: Yup.number()
    .required("Coloration is Required")
    .min(1, "Coloration is Required")
    .max(5, "Rating must be at most 5"),
  qty_shell: Yup.number()
    .required("qty_shell is required")
    .min(1, "qty_shell  is required")
    .max(5, "qty_shell not exceed 5"),
  fientes: Yup.number()
    .required("Fientes is required")
    .min(1, "Fientes is required")
    .max(5, "Rating must not exceed 5"),
  observ: Yup.string(),
});
export default validationSchema;
