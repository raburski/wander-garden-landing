import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'

export default function Hero(){
    return (
        <div className={styles.container}>
            <div className={styles.heroText}>
                Your travel history.<br/>
                Easy and private.
            </div>
            <Image src="/3d/hat.png" width={417} height={202}/>
        </div>
    )
}