import styles from './styles/app.module.scss';


function App() {
  return (
    <>
    <h1 className={styles.title}>Hello there</h1>
    <p className={styles.text}>
      This is some text and now I am 
      <span className={styles.quote}> quoting something in italic because it&apos;s inline.</span>
      <span className={styles.bigger}> This is bigger text.</span>
    </p>
    </>
  );
}

export default App;
