import styles from './styles.module.css'

export default function Panel({ className, ...props }) {
    return <div className={[styles.panel, className].join(' ')} {...props}/>   
}