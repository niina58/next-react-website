import styles from 'styles/hero.module.css'
import Image from 'next/image'
import cube from 'image/cube.jpg'

export default function Hero({ title, subtitle, imageOn = false }) {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.teext}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
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
        </div>
    )
}
