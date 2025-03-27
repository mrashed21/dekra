import { motion } from "framer-motion";
import React, { useState } from "react";
import { LuArrowDownRight } from "react-icons/lu";
const Faq = () => {
  const faqs = [
    {
      question: "Why work with a hiring agency?",
      answer:
        "Working with hiring companies is just one way of increasing your chances of finding the job you want. Hiring agencies often act as an “intermediary” that identifies you and connects you to the employment needs expressed by employers. Often, employers choose to advertise open positions through agencies to relieve their business system of the time-consuming process of recruiting and selecting the right person.",
    },
    {
      question: "What happens after I apply for a job via a DEKRA job ad?",
      answer:
        "Recruitment consultants review candidate applications and CVs and check the extent to which the candidate's experience meets the job requirements specified by the client. Shortlisted candidates are invited to an interview with a consultant. After that, depending on the assessment of knowledge and motivation for the job, they are recommended or not recommended to the client. Sometimes, at this stage, due to the client's specific requirements, it is necessary to take part in a psychological assessment or check for particular knowledge. After DEKRA, the client takes over and conducts further rounds of interviews and job negotiations. If the candidate accepts the job offer and starts working, i.e. at the end of the recruitment process, the agency informs the other candidates about the outcome of the selection. The CVs of the candidates are automatically stored in the DEKRA database until the end of the current job selection, and the CVs of those candidates who have given their consent to retain the data are stored for up to 5 years.",
    },
    {
      question: "Can I email my CV directly to DEKRA?",
      answer:
        "If you send your CV to one of the contact email addresses, you will be redirected to the DEKRA career page, where it is necessary to register and open a profile. The procedure is exceptionally straightforward and fast. The agency uses specialized business software to manage candidate databases and numerous selection processes so they are made more efficient. Logging in via the link on the career page is also essential for informing oneself about the use of personal data and for giving consent to the use of your data.",
    },
    {
      question:
        "Does the temporary employment agency take a commission from agency workers?",
      answer:
        "The Agency does not charge and cannot charge a commission to the employee according to the Labor Law Art. 44. and EU directives.",
    },
    {
      question: "Does the agency cover travel expenses for the interview?",
      answer:
        "DEKRA does not cover the cost of transportation that may be incurred when arriving or traveling for an interview with an agency or a potential employer. Sometimes employers cover the cost of transportation for candidates if they are expected to travel to attend the final rounds of interviews, but the first rounds of interviews are usually not covered by the travel allowance.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-[#eee]">
      <div className="container mx-auto flex justify-between gap-12 py-16">
        <div className="w-full lg:w-1/3">
          <h1 className="text-3xl font-extrabold text-primary ml-5 ">
            Frequently asked questions
          </h1>
          <div className="border-b border-2 border-primary mt-10 w-[220px] ml-5"></div>
        </div>
        {/* faq */}
        <div className="w-full lg:w-2/3">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-4 border-[#b6b4b4]">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-lg font-bold text-primary cursor-pointer"
              >
                {faq.question}
                {openIndex === index ? (
                  <LuArrowDownRight className="ml-1 transition-transform duration-300 ease-in-out -rotate-90" />
                ) : (
                  <LuArrowDownRight className="" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-gray-700"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
