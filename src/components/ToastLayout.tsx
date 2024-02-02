"use client";

import react from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactNode;
};

const ToastLayout = (props: Props) => {
  return (
    <>
      <div>{props.children}</div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};

export default ToastLayout;
