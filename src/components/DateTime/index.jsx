import { formatRelative } from 'date-fns'
import { it } from 'date-fns/locale'

const DateTime = (props) => {
    return (
        <p>
            <small>
                {formatRelative(new Date(props.data), new Date(), { addSuffix: true, locale: it })}
            </small>
        </p>
    )
}

export { DateTime };