import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ScrollText, X } from "lucide-react";
import { Button } from "./ui";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur effect */}
          <motion.div
            className="fixed inset-0 backdrop-blur-md bg-opacity-20 z-50 flex items-center justify-center p-4 mr-4"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl relative z-50 overflow-hidden border border-gray-100"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white transition-colors text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[70vh] overflow-y-auto mb-6">
                {children}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function ServiceModal({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex">
      <Button
        variant="link"
        className="text-purple-700 font-medium cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        View More <ArrowRight className="ml-1 h-4 w-4" />
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={data.name}
      >
        <div className="space-y-8 w-full">
          {data.description.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-gray-900 text-xl font-semibold mb-3 flex items-center">
                <div className="w-1.5 h-6 bg-orange-500 rounded-full mr-2"></div>
                {item.contentName}
              </div>
              <ul className="space-y-3 w-full pl-1">
                {item.content.map((content, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center rounded-lg p-2 hover:bg-gray-50"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.05 }}
                  >
                    <div className="bg-green-100 p-1 rounded-full mt-0.5 mr-3 flex-shrink-0">
                      <ScrollText className="h-6 w-6 text-green-600" />
                    </div>
                    <div
                      className="text-gray-700 hover:underline cursor-pointer"
                      onClick={() =>
                        navigate("/document", {
                          state: {
                            pdfUrl: content.link,
                            title: content.name,
                          },
                        })
                      }
                    >
                      {content.name}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
