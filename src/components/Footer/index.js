import Link from 'next/link'
import styles from './styles.module.css'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { MdOutlinePrivacyTip } from 'react-icons/md'
import Contained from '../Contained'

const DISCORD_URL = 'https://discord.gg/9FGuWdpMq4'
const TWITTER_LINK = 'https://twitter.com/wandergarden_'

export default function Footer() {
    return (
        <div className={styles.navbar}>
            <Contained className={styles.content}>
                <div className={styles.links}>
                    <Link href={DISCORD_URL} target='_blank' className={styles.link}><FaDiscord className={styles.linkIcon}/> Discord</Link>
                    <Link href={TWITTER_LINK} target='_blank' className={styles.link}><FaTwitter className={styles.linkIcon}/> Twitter</Link>
                    <Link href="/privacy" className={styles.link}><MdOutlinePrivacyTip className={styles.linkIcon}/> Privacy Policy</Link>
                </div>
                <div>
                    Made in 🇵🇱 by <Link href="http://raburski.com">raburski</Link>
                </div>
            </Contained>
        </div>
    )
}