import styles from './Sobre.module.css'
import avatar from './images/avatar.png'
import html from '../../assets/icons8-html.svg' 
import css from '../../assets/icons8-css.svg'
import react from '../../assets/icons8-react-100.png'
import sql from '../../assets/icons8-sql-48.png'
import js from '../../assets/js.png'
import kotlin from '../../assets/kotlin.png'
import swift from '../../assets/swift.png'
import php from '../../assets/php.png'
import ts from '../../assets/ts.png'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Érico Augusto</span> <br />
                    <strong>Dev Full Stack</strong> </p>

                    <p>Estou estudando no colégio Cotemig para me tornar um Téncnico em Informática com foco em <br/> Desenvolvimento Web e Mobile.</p>

                    <p>Gosto do Desenvolvimento pois por meio dele crio soluções e resolvo problemas, como se fosse <br/> a forma própria de criar!</p>

                    <p>Espero continuar me desnvolvendo bastante nesta área tão abrangente.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do JavaScript" />
                    <img src={sql} alt="Ícone do sql" />
                    <img src={php} alt="Ícone do php" />
                    <img src={ts} alt="Ícone do typescript" />
                    <img src={react} alt="Ícone do react" />
                    <img src={kotlin} alt="Ícone do Kotlin" />
                    <img src={swift} alt="Ícone do Swift" />
                </div>
            </div>

        </section>
    )
}

export default Sobre