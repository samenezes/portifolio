import styles from './Home.module.css'
import img from '../../assets/undraw_drink_coffee_jdqb.svg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section className={styles.home}>
                <div className={styles.apresentacao}>
                    <p>
                        Olá, sou <br/>
                        <span>Érico Augusto</span> <br/>
                        Dev Full Stack
                    </p>
                    <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                        Saiba mais sobre mim
                    </Link>
                </div>
                <figure>
                    <img className={styles.img_home} src={img} alt="Imagem de Home" />
                </figure>
            </section>
        </>
    )
}
export default Home