import styles from 'styles/hero.module.css'

export default function Hero({ title, subtitle, imageOn = false }) {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            {imageOn && <figure> [画像] </figure>}
        </div>
    )
}
