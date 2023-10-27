import PillLink from '@/components/PillLink'
import styles from './styles.module.css'
import { LuPalmtree } from 'react-icons/lu'

const WHILE_HOVER = {scale:1.8}
const WHILE_TAP = {scale:1.5}
const INITIAL = {scale:1.6}

export default function OpenTheGarden() {
    return (
        <div className={styles.container}>
            <div className={styles.heroText}>
                <PillLink
                    href="https://app.wander.garden"
                    whileHover={WHILE_HOVER}
                    whileTap={WHILE_TAP}
                    initial={INITIAL}
                    icon={LuPalmtree}
                >Open the garden</PillLink>
            </div>
        </div>
    )
}