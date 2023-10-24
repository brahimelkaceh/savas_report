import DownloadIcon from "@mui/icons-material/Download";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
function DownloadBtn() {
  const [isActive, setIsActive] = useState(false);

  const generatePDF = () => {
    const chartDiv = document.getElementById("chartDiv"); // Replace 'chartDiv' with the actual ID of your chart div
    html2canvas(chartDiv)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("landscape", "mm", "a4");
        const width = pdf.internal.pageSize.getWidth();
        const height = (canvas.height * width) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, width, height);
        console.log(isActive);
        pdf.save("chart.pdf");
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
      });
  };
  return (
    <div
      className={`${isActive ? "disabled" : "actions"}`}
      // className="disabled"
      id="dowonload-btn"
    >
      <button className="download download-btn" onClick={generatePDF}>
        <span>télécharger la courbe</span>
        <DownloadIcon />
      </button>
    </div>
  );
}

export default DownloadBtn;
