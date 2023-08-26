import styles from './Contato.module.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'


function Contatos() {
    return (
        <>
            <section className={styles.contatos}>
                <h2>Contatos</h2>

                <h3>Entre em contato</h3>
                <p>Para que possamos conversar mais sobre</p>

                <div className={styles.icones}>
                        
                        <a href='mailto:ericoaugustosstj@gmail.com' target='_blank' rel='noopener noreferrer'>
                            <GoMail className={styles.icone} />
                        </a>

                        <a href='' target='_blank' rel='noopener noreferrer'>
                            <BsGithub className={styles.icone} />
                        </a>

                        <a href='' target='_blank' rel='noopener noreferrer'>
                            <BsLinkedin className={styles.icone} />
                        </a>

                </div>

            </section>
        </>
    )
}

export default Contatos
