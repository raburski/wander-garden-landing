import Contained from '@/components/Contained'
import styles from './styles.module.css'
import Tile from '@/components/Tile'

export default function HowItWorks() {
    return (
        <div className={styles.container}>
            <Contained className={styles.content}>
                <h2>How it works?</h2>
                <div className={styles.tiles}>
                    <Tile image="/3d/puzzle.png" drop="1">Install extension</Tile>
                    <Tile image="/3d/telescope.png" drop="2">Capture stays</Tile>
                    <Tile image="/3d/glass.png" drop="3">Explore timeline</Tile>
                </div>
            </Contained>
        </div>
    )
}