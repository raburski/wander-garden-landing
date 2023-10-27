import Link from 'next/link'
import styles from './styles.module.css'
import PillLink from '@/components/PillLink'
import { LuPalmtree } from 'react-icons/lu'
import Contained from '../Contained'
import Image from 'next/image'

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <Contained className={styles.contained}>
                <Link href="/" className={styles.logo}>
                    <Image src="/garden.svg" width={36} height={36} className={styles.logoImage}/>
                    Wander Garden
                </Link>
                <PillLink href="https://app.wander.garden" icon={LuPalmtree}>Open the garden</PillLink>
            </Contained>
        </div>
    )
}