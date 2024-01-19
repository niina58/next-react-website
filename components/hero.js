import styles from 'styles/hero.module.css'
<<<<<<< HEAD
import Imsge from 'next/image'
import cube from 'images/cube.jpg'
=======
import Image from 'next/image'
import cube from 'image/cube.jpg'
>>>>>>> 0b653301fbfbc800fd54dace18ddf4760dd9e913

export default function Hero({ title, subtitle, imageOn = false }) {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.teext}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
<<<<<<< HEAD
            {imageOn && (
                <figure className={styles.image}>
                    <Image
                        src={cube}
                        alt=""
                        layout="responsive"
                        sizes="(min-width: 1152px) 576px, (min-width: 768) 50vw, 100vw"
                        priority
                        placeholder="blur"
                    />
                </figure>
            )}
=======
            {imageOn &&(
                <figure> 
                    <Image src={cube} alt="" layout="responsive" />
                </figure>
                )}
>>>>>>> 0b653301fbfbc800fd54dace18ddf4760dd9e913
        </div>
    )
}
