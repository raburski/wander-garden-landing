import Contained from "@/components/Contained"
import styles from './styles.module.css'

const POLICY_COPY = `
Developer: Marcin Raburski
Last Updated: 01.11.2023

Data Collection
Wander Garden automatically collects information about your trips. This data is collected for the purpose of presenting your travel information in a cohesive form within the web app.

Data Storage
The data collected by Wander Garden is stored locally on your browser. We do not store your data on external servers or in the cloud.

Data Sharing
We do not share your trip data with any third parties. Your data is kept private and is not shared with anyone.

User Consent
By using the Wander Garden Chrome extension, you consent to the automated collection of information about your trips. If you do not wish to provide this data, please refrain from using the extension.

Cookies and Tracking
Wander Garden Extension does not use cookies or tracking technologies. Wander Garden Website only tracks user visits.

User Rights
You have the right to clean your data at any time. The website provides you with the freedom to manage and delete your trip data as you see fit.

Contact Information
If you have any privacy-related concerns or questions, you can contact us through our Discord channel using the link in the footer of this website.

`

export default function Policy() {
    return (
        <Contained className={styles.contained}>
            <h2>Privacy Policy for Wander Garden Chrome Extension and Wander Garden Website</h2>
            <span className={styles.policy}>
                {POLICY_COPY}
            </span>
        </Contained>
    )
}