'use client';

import React, { useRef } from 'react';
import { TodoList } from '../components/TodoList';
import { CopilotKit } from '@copilotkit/react-core';
import { CopilotPopup } from '@copilotkit/react-ui';
import '@copilotkit/react-ui/styles.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Dashboard: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    const input = contentRef.current;

    if (input) {
      const canvas = await html2canvas(input);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, (pdfWidth * imgHeight) / imgWidth);
      heightLeft -= pdfHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        heightLeft -= pdfHeight;
      }

      pdf.save('todolist.pdf');
    }
  };

  return (
    <div className="border border-violet-800 rounded-md max-w-2xl mx-auto p-4 mt-4 dark:border-white">
      <h1 className="text-2xl text-violet-800 font-bold mb-4 dark:text-white">
        Create a to-do list
      </h1>
      <CopilotKit runtimeUrl="/api/copilotkit">
        <div ref={contentRef} className="bg-white p-4 rounded-md shadow-md dark:bg-transparent">
          <TodoList />
          <CopilotPopup
            instructions={
              'Help the user manage a todo list. If the user provides a high level goal, ' +
              'break it down into a few specific tasks and add them to the list'
            }
            defaultOpen={true}
            labels={{
              title: 'Welcome to Todo.AI! 🚀',
              initial:
                'Hi you! 👋 I can help you manage your todo list and provide a comprehensive plan.',
            }}
            clickOutsideToClose={false}
          />
        </div>
      </CopilotKit>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleDownloadPdf}
          className="bg-violet-800 text-white py-2 px-4 rounded-md"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
