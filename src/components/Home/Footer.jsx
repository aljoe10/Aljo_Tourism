import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <span
          className="material-symbols-outlined"
          style={{ color: "white", fontSize: "6rem" }}
        >
          flight_takeoff
        </span>
      </div>
      <div className={styles.links}>
        <div className={styles.linkset}>
          <h1 className={styles.heading}>About Us</h1>
          <p className={styles.subheading}>
            <a href="#">How it works</a>
          </p>
        </div>

        <div className={styles.linkset}>
          <h1 className={styles.heading} style = {{marginBottom: "1rem"}}>Customer Support</h1>
          <button className="btn btn-warning" onClick = {() => {window.location = "/contact"}}>
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '0.5rem'}} />
          Send us a message
          </button>
        </div>

        <div className={styles.linkset}>
          <h1 className={styles.heading}>Social Media</h1>
          <p className={styles.subheading}>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} size="lg"/>
              </a>
          </p>
          <p className={styles.subheading}>
            <a href="https://www.linkedin.com/feed/">
              <FontAwesomeIcon icon={faLinkedin} size="lg"/>
              </a>
          </p>
          <p className={styles.subheading}>
            <a href="https://www.facebook.com/your_facebook_page"> 
            <FontAwesomeIcon icon={faFacebook} size="lg"/>
            </a>
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <h4 className={styles.subheading}>Copyright {new Date().getFullYear()}</h4>
      </div>
    </div>
  );
};

export { Footer };
