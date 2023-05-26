import React from "react";
import styles from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = ({ close, show }) => (
  <div
    className={`${styles.backDrop} ${show && styles.showBackDrop}`}
    onClick={close}
  ></div>
);

const Overlay = ({ children, show }) => (
  <div className={`${styles.overlay} ${show && styles.showOverlay}`}>
    {children}
  </div>
);

const Model = ({ children, show, closeModal }) => {
  return (
    <>
      {ReactDom.createPortal(
        <>
          <Backdrop close={closeModal} show={show} />
          <Overlay show={show}>{children}</Overlay>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Model;
