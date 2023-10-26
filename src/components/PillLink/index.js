import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './styles.module.css'

const MotionLink = motion(Link)

const WHILE_HOVER = {scale:1.02}
const WHILE_TAP = {scale:0.98}

export default function PillLink({ icon, children, separatorClassName, small, to, style, ...props }) {
    const PillIcon = icon
    return (
        <MotionLink
            className={styles.link}
        
          whileHover={WHILE_HOVER}
          whileTap={WHILE_TAP}
          {...props}
        >
            {PillIcon ? <div className={styles.linkIcon}><PillIcon /></div> : null}
            {children ? <div className={styles.linkSeparator}/> : null}
            {children}
        </MotionLink>
    )
}