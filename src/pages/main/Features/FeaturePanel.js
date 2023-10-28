import Image from 'next/image'
import Panel from '@/components/Panel'
import styles from './styles.module.css'

export default function FeaturePanel({ image, title, children }) {
    return (
        <Panel className={styles.panel}>
            <Image src={image} width={180} height={180} className={styles.image}/>
            <div className={styles.panelContent}>
                <h3>{title}</h3>
                <div className={styles.panelText}>
                    {children}
                </div>
            </div>
        </Panel>
    )
}