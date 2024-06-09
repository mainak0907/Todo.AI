'use client';

import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadPdf: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = () => {
    const input = contentRef.current;

    if (input) {
      html2canvas(input).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('todolist.pdf');
      });
    }
  };

  return (
    <div>
      <div ref={contentRef} id="content">
        {/* This will be replaced by the actual content in the Dashboard component */}
      </div>
      <button onClick={handleDownloadPdf}>Download as PDF</button>
    </div>
  );
};

export default DownloadPdf;
