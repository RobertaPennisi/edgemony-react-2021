import styles from './MessagePreview.module.scss'
import { DateTime } from '../DateTime'

const MessagePreview = (props) => {
    const data = props.data || {
        text: 'finish the fight', 
        date: new Date(), 
        sender: 'Master Chief'
    }

    return (
        <div className={styles.message}>
            <h5>{data.sender}</h5>
            {data.date ? <DateTime data={data.date} /> : <></>}
            <p>{data.text}</p>
        </div>
    )
}

export {MessagePreview}