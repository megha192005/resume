// Requires html2pdf.js: <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>


document.querySelector('.pdf-btn').addEventListener('click', downloadPDF);
function downloadPDF() {
  const element = document.getElementById('resume-content');

  const opt = {
    margin:       0.5,
    filename:     'Resume-Megha-Ghatge.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
    pagebreak:    { mode: ['css', 'legacy'] }   // ⭐ THE IMPORTANT PART
  };

  html2pdf().set(opt).from(element).save();
}


