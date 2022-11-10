import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClouseModal}></div>;
};

const Modal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h1>{props.title}</h1>
      </header>
      <div className={styles.content}>
        <p>{props.massage}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onClouseModal}>Закрыть</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  const modalRootElement = document.querySelector("#modal");
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClouseModal={props.onClouseModal} />,
        document.getElementById("backdrop")
      )}
      {ReactDom.createPortal(
        <Modal
          title={props.title}
          massage={props.massage}
          onClouseModal={props.onClouseModal}
        />,
        modalRootElement
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
