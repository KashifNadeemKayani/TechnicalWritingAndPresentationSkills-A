// import React, { useState } from 'react';
// import { FaDownload, FaFilePdf } from 'react-icons/fa';
// import './Portfolio.css';

// const Portfolio = () => {
//   const [task1Expanded, setTask1Expanded] = useState(false);
//   const [task2Expanded, setTask2Expanded] = useState(false);
//   const [showPdfTask1, setShowPdfTask1] = useState(false);
//   const [showPdfTask2, setShowPdfTask2] = useState(false);

//   const task1Pdf = '/pdfs/aa.pdf'; // Path to the PDF in the public folder
//   const task2Pdf = '/pdfs/ab.pdf'; // Path to the PDF in the public folder

//   const task1Reflections = [
//     { question: 'What did I learn from Task 1?', answer: 'In Task 1, I learned how to create a clear and user-centric guide for setting up a router, simplifying complex terms and breaking down steps into a logical sequence.' },
//     { question: 'What challenges did I face, and how did I overcome them?', answer: 'The main challenge was simplifying technical terminology. I used analogies and clear explanations to make complex terms understandable.' },
//     { question: 'How has my writing improved through Task 1?', answer: 'My writing improved in terms of clarity and precision, focusing on step-by-step instructions and user-friendly language.' },
//   ];

//   const task2Reflections = [
//     { question: 'What did I learn from Task 2?', answer: 'In Task 2, I learned how to structure content for easy navigation, allowing users to access specific sections without needing to follow a strict order.' },
//     { question: 'What challenges did I face, and how did I overcome them?', answer: 'The main challenge was creating a non-linear structure. I organized content into sections with a clear table of contents to aid navigation.' },
//     { question: 'How has my writing improved through Task 2?', answer: 'This task taught me to balance conciseness with clarity, helping me refine my instructions to be brief yet informative.' },
//   ];

//   return (
//     <div className="portfolio-container">
//       <h1 className="portfolio-title">Reflective Portfolio</h1>

//       <section className="section">
//         <div className="section-title">
//           <h2>Task 1: Router Setup Guide</h2>
//           <div className="button-container">
//             <button
//               className="button"
//               onClick={() => setShowPdfTask1(!showPdfTask1)}
//             >
//               <FaFilePdf /> {showPdfTask1 ? 'Hide PDF' : 'View PDF'}
//             </button>
//             <a href={task1Pdf} download className="button">
//               <FaDownload /> Download PDF
//             </a>
//           </div>
//         </div>

//         {showPdfTask1 && (
//           <div className="pdf-viewer">
//             <iframe
//               src={task1Pdf}
//               title="Task 1 Documentation"
//               width="100%"
//               height="500px"
//             ></iframe>
//           </div>
//         )}

//         <div className="accordion-content">
//           <button
//             className="button"
//             onClick={() => setTask1Expanded(!task1Expanded)}
//           >
//             {task1Expanded ? 'Hide Reflections' : 'Show Reflections'}
//           </button>
//           {task1Expanded &&
//             task1Reflections.map((reflection, index) => (
//               <div key={index}>
//                 <h3>{reflection.question}</h3>
//                 <p>{reflection.answer}</p>
//               </div>
//             ))}
//         </div>
//       </section>

//       <section className="section">
//         <div className="section-title">
//           <h2>Task 2: Mobile Phone User Guide</h2>
//           <div className="button-container">
//             <button
//               className="button"
//               onClick={() => setShowPdfTask2(!showPdfTask2)}
//             >
//               <FaFilePdf /> {showPdfTask2 ? 'Hide PDF' : 'View PDF'}
//             </button>
//             <a href={task2Pdf} download className="button">
//               <FaDownload /> Download PDF
//             </a>
//           </div>
//         </div>

//         {showPdfTask2 && (
//           <div className="pdf-viewer">
//             <iframe
//               src={task2Pdf}
//               title="Task 2 Documentation"
//               width="100%"
//               height="500px"
//             ></iframe>
//           </div>
//         )}

//         <div className="accordion-content">
//           <button
//             className="button"
//             onClick={() => setTask2Expanded(!task2Expanded)}
//           >
//             {task2Expanded ? 'Hide Reflections' : 'Show Reflections'}
//           </button>
//           {task2Expanded &&
//             task2Reflections.map((reflection, index) => (
//               <div key={index}>
//                 <h3>{reflection.question}</h3>
//                 <p>{reflection.answer}</p>
//               </div>
//             ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Portfolio;



import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import previewImage from '../../public/pdfs/abc.jpg';

import previewImage1 from '../../public/pdfs/abcs.jpg';
import './Portfolio.css';

const Portfolio = () => {
  const [task1ExpandedIndex, setTask1ExpandedIndex] = useState(-1);
  const [task2ExpandedIndex, setTask2ExpandedIndex] = useState(-1);

  const task1Pdf = '/pdfs/TBWA1.pdf';
  const task2Pdf = '/pdfs/TBWA2.pdf';
  // const previewImage = '/pdfs/abc.jpg';
  // const previewImage1 = '/pdfs/abcs.jpg';

  const task1Reflections = [
    { question: 'What did I learn from Task 1?', answer: 'In completing the technical documentation for setting up the router, I learnt the importance of clarity and precision in technical writing. The purpose of the assignment was to make the setup process simple enough for anyone to understand. It taught me to prefer clear language and simple explanations, especially when explaining steps.I realized that providing explanations for terms like "SSID," "network key," and "IP configuration" was essential to making the document understandable. Additionally, I learnt how essential visual aids can be in guiding the reader, as images and diagrams would enhance understanding and reduce the chances of error during the setup process.' },
    { question: 'What challenges did I face, and how did I overcome them?', answer: 'A key challenge was simplifying the technical terminology without compromising accuracy. Many networking terms are unfamiliar to the average user, and I wanted to make sure that these terms were clearly defined without using additional technical terms. To address this, I defined terms where necessary and used analogies where possible to make concepts more relevant. Another challenge was structuring the document in a logical, step-by-step format that would make the process easy to follow. I included numbered steps and screenshots of each stage in the setup, to provide visual cues. This helped to break down the process and make it easier for the user.' },
    { question: 'How has my writing improved throughout the course', answer: 'Throughout this course, I have improved in both my technical writing and presentation skills. Initially, I struggled with both areas, my English was weak and my presentation skills were poor. I had little understanding of non-verbal communication, such as posture, gestures, and how to engage an audience effectively. However, this course has greatly enhanced my ability to present confidently on stage. I now understand how to position myself in front of an audience and use non-verbal cues to capture their attention. Additionally, I became more familiar with the technical writing, learning to distinguish it from non-technical writing. Overall, this course has been invaluable in boosting my confidence and refining my communication skills, both in writing and presentations.' },
  ];

  const task2Reflections = [
    { question: 'What did I learn from Task 2?', answer: 'I learned how to approach documentation in a more modular and user-centric way. Unlike the linear process in Task 1, which focused on step-by-step procedures like router setup, this task required explaining various features and functionalities that users could explore independently. I gained experience in organizing a guide with a clear structure, allowing users to quickly navigate to the information they need without reading the entire document. ' },
    { question: 'What challenges did I face, and how did I overcome them?', answer: 'A primary challenge was designing the document so that users could quickly locate the specific instructions they needed. Unlike Task 1, which followed a single path, this guide had to accommodate multiple topics and allow users to jump to the sections relevant to them. To overcome this, I created a well-organized table of contents and used clear headings and subheadings. Another challenge was ensuring consistency in tone and clarity to make each instruction easy to understand. I focused on using simple language, formatting each section in a similar style and included screenshots of the phone’s screen, to enhance user experience.' },
    { question: 'How has my writing improved throughout the course', answer: 'Throughout this course, I have improved in both my technical writing and presentation skills. Initially, I struggled with both areas, my English was weak and my presentation skills were poor. I had little understanding of non-verbal communication, such as posture, gestures, and how to engage an audience effectively. However, this course has greatly enhanced my ability to present confidently on stage. I now understand how to position myself in front of an audience and use non-verbal cues to capture their attention. Additionally, I became more familiar with the technical writing, learning to distinguish it from non-technical writing. Overall, this course has been invaluable in boosting my confidence and refining my communication skills, both in writing and presentations.' },
  ];

  // Toggle functions to expand/collapse reflections
  const toggleTask1Question = (index) => {
    setTask1ExpandedIndex(task1ExpandedIndex === index ? -1 : index);
  };

  const toggleTask2Question = (index) => {
    setTask2ExpandedIndex(task2ExpandedIndex === index ? -1 : index);
  };

  return (
    <div className="portfolio-container">
      <section className="section">
        <div className="section-title">
          <h2>Task 1: Router Setup Guide</h2>
          <div className="button-container">
            <a href={task1Pdf} download>
              <button className="button">
                <FaDownload /> Download PDF
              </button>
            </a>
            <a href={task1Pdf} target="_blank" rel="noopener noreferrer">
              <button className="button view-button">
                View Now
              </button>
            </a>
          </div>
        </div>
        <div className="task-container">
          <div className="pdf-preview">
            <img src={previewImage} alt="Task 1 Preview" />
          </div>
          <div className="reflections">
            {task1Reflections.map((reflection, index) => (
              <div key={index} className="reflection">
                <button className="accordion" onClick={() => toggleTask1Question(index)}>
                  {reflection.question}
                </button>
                {task1ExpandedIndex === index && <p>{reflection.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Task 2: Mobile Phone User Guide</h2>
          <div className="button-container">
            <a href={task2Pdf} download>
              <button className="button">
                <FaDownload /> Download PDF
              </button>
            </a>
            <a href={task2Pdf} target="_blank" rel="noopener noreferrer">
              <button className="button view-button">
                View Now
              </button>
            </a>
          </div>
        </div>
        <div className="task-container">
          <div className="pdf-preview">
            <img src={previewImage1} alt="Task 2 Preview" />
          </div>
          <div className="reflections">
            {task2Reflections.map((reflection, index) => (
              <div key={index} className="reflection">
                <button className="accordion" onClick={() => toggleTask2Question(index)}>
                  {reflection.question}
                </button>
                {task2ExpandedIndex === index && <p>{reflection.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
