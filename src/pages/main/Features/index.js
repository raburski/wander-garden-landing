import Contained from '@/components/Contained'
import styles from './styles.module.css'
import Tile from '@/components/Tile'

export default function Features() {
    return (
        <div className={styles.container}>
            <Contained className={styles.content}>
                <h2>What does it do?</h2>
                <div className={styles.tiles}>
                    <Tile image="/shots/timeline.png" imageClassName={styles.image}>Timeline</Tile>
                    <Tile image="/shots/badges.png" imageClassName={styles.image}>Badges</Tile>
                    <Tile image="/shots/data.png" imageClassName={styles.image}>Data in one place</Tile>
                    <Tile image="/shots/map.png" imageClassName={styles.image}>Map</Tile>
                </div>
            </Contained>
        </div>
    )
}