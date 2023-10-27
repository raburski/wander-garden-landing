import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './styles.module.css'

const MotionLink = motion(Link)

const WHILE_HOVER = {scale:1.04}
const WHILE_TAP = {scale:0.96}

export default function PillLink({ icon, children, whileHover, whileTap, separatorClassName, small, to, className, style, ...props }) {
    const PillIcon = icon
    return (
        <MotionLink
            className={[styles.link, className].join(' ')}
            whileHover={whileHover || WHILE_HOVER}
            whileTap={whileTap || WHILE_TAP}
            {...props}
        >
            {PillIcon ? <div className={styles.linkIcon}><PillIcon /></div> : null}
            {children ? <div className={styles.linkSeparator}/> : null}
            {children}
        </MotionLink>
    )
}