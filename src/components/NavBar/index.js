import Link from 'next/link'
import styles from './styles.module.css'
import PillLink from '@/components/PillLink'
import { LuPalmtree } from 'react-icons/lu'
import Contained from '../Contained'

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <Contained className={styles.contained}>
                <Link href="/">[LOGO]</Link>
                <PillLink href="https://app.wander.garden" icon={LuPalmtree}>Open the garden</PillLink>
            </Contained>
        </div>
    )
}