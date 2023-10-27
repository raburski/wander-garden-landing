import Image from 'next/image'
import Panel from '@/components/Panel'
import styles from './styles.module.css'

export default function Tile({ image, drop, children, imageClassName }) {
    return (
        <Panel className={styles.tile}>
            {drop ? <div className={styles.drop}>{drop}</div> : null}
            <Image src={image} width={180} height={180} className={imageClassName}/>
            <div className={styles.tileText}>
                {children}
            </div>
        </Panel>
    )
}