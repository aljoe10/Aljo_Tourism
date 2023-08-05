import styles from './Home.module.css';
import {Face} from './Face';
import { Footer } from './Footer';
import CardGrid from '../Gallery_Card/Gallery';

const Home = () => {
    return(
        <div className={styles.home}>
            <Face/>
            <CardGrid/>
            <Footer/>
        </div>
    );
}

export {Home};