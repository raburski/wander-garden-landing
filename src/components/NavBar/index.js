import Link from 'next/link'
import styles from './styles.module.css'
import PillLink from '@/components/PillLink'
import { LuPalmtree } from 'react-icons/lu'

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <Link href="/">[LOGO]</Link>
            <PillLink href="https://app.wander.garden" icon={LuPalmtree}>Open the garden</PillLink>
        </div>
    )
}