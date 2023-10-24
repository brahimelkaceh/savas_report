import { useFormik } from "formik";
import validationSchema from "./ValidationSchema";
const formik = useFormik({
  initialValues: {
    batiment: "",
    mort: "",
    prod_normal: "",
    prod_dj: "",
    prod_blanc: "",
    prod_casse: "",
    prod_feles: "",
    prod_elimne: "",

    alimentDist: "",
    eauDist: "",
    pmo: "",
    poidVif: "",
    homog: "",
    formule: "",
    temperatureMin: "",
    temperatureMax: "",
    temperatureMinExt: "",
    temperatureMaxExt: "",
    lightOn: "",
    lightOff: "",
    flashOn: "",
    flashOff: "",
    intensite: "",
    aspectPoulette: 0,
    coloration: 0,
    qty_shell: 0,
    fientes: 0,
  },
  validationSchema,
  onSubmit: (values) => {
    console.log(JSON.stringify(values, null, 2));
    console.log(values);
  },
});

export default formik;
