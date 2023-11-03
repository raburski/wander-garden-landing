import Contained from "@/components/Contained"
import styles from './styles.module.css'

const DEMO_COPY = `This link would normally take you to your booking.

`

export default function Demo() {
    return (
        <Contained className={styles.contained}>
            <h2>Demo stay</h2>
            <span className={styles.demo}>
                {DEMO_COPY}
            </span>
        </Contained>
    )
}