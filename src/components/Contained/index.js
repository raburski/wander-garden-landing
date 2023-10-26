import styles from './styles.module.css'

export default function Contained({ children, className }) {
    return (
        <div className={[className, styles.contained].join(' ')}>
            {children}
        </div>
    )
}