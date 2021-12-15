import styles from './MessagePreview.module.scss'

const MessagePreview = (props) => {
    const data = props.data || {
        text: 'finish the fight', 
        date: new Date(), 
        sender: 'Master Chief'
    }

    return (
        <div className={styles.message}>
            <h5>{data.sender}</h5>
            <p><small>{data.date.toLocaleDateString()} - {data.date.toLocaleTimeString()}</small></p>
            <p>{data.text}</p>
        </div>
    )
}

export {MessagePreview}