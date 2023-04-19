import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function downloadPDF() {
  const input = document.getElementById("teacherLicense");
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("l", "mm", [canvas.width, canvas.height]);
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height, "", "FAST");
    pdf.save("download.pdf");
  });
}

export default downloadPDF;
