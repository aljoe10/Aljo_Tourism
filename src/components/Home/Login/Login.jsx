import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login} style = {{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(3, 1fr)"}}>
      <div className={styles.loginCard}>
        <div className={styles.top}>
          <div className={styles.backdrop}>
            <h1 className={styles.heading}>SIGN IN</h1>
          </div>
        </div>

        <div className={styles.bottom}>
            <div className={styles.entry}>
            <h2 className={styles.label}>Username</h2>
            <input type = "text" placeholder = "Enter Username" className={styles.loginInput}></input>
            </div>

            <div className={styles.entry} style = {{marginTop: "3rem"}}>
            <h2 className={styles.label}>Password</h2>
            <input type = "password" placeholder = "Enter Password" className={styles.loginInput}></input>
            </div>

            <div className={styles.buttons}>
                <button className = {styles.loginBtn}>Login</button>
            </div>

            <div className = {styles.linkOptions}>
                <p className = {styles.register} style = {{color: "black"}}>Register</p>
                <p className = {styles.register}><Link to = '/' style = {{color: "black"}}>Home</Link></p>
                </div>
        </div>
      </div>
    </div>
  );
};

export { Login };
