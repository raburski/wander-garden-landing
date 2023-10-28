import Contained from '@/components/Contained'
import styles from './styles.module.css'
import FeaturePanel from './FeaturePanel'

export default function Features() {
    return (
        <div className={styles.container}>
            <Contained className={styles.content}>
                <h2>What does it do?</h2>
                <div className={styles.features}>
                    <FeaturePanel image="/shots/timeline.png" title="Timeline">
                        Your trips visualised as a simple list.
                        <br/><br/>
                        See details of each of your stays. Booking, AirBnB or Agoda and your Swarm checkins.
                    </FeaturePanel>
                    <FeaturePanel image="/shots/badges.png" title="Badges">
                        Collect them while travelling!
                        <br/><br/>
                        Stay motivated by trying to claim as many as you can.
                    </FeaturePanel>
                    <FeaturePanel image="/shots/data.png" title="Data">
                        Everything stored in your browser only.
                        <br/><br/>
                        Your data never leaves your computer. We don't need access to any of it for your garden to work.
                    </FeaturePanel>
                    <FeaturePanel image="/shots/map.png" title="Map">
                        Virtual scratchcard that updates automatically.
                        <br/><br/>
                        Where are your missing spots?
                    </FeaturePanel>
                </div>
            </Contained>
        </div>
    )
}