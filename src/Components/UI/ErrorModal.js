import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onClouseModal}></div>
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
    </div>
  );
};
export default ErrorModal;
