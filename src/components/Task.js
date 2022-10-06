import {FaTimes} from 'react-icons/fa'

const Task = ({info, onDelete, onToggle}) => {
    return (

        <div className={`task ${info.reminder?'reminder':''}`}
            onDoubleClick={() => onToggle(info.id)}
        >
            <h3>My Task: {info.text} 
                <FaTimes 
                    style={{color:'red', cursor: 'pointer'}} 
                    onClick={() => onDelete(info.id)}
                />
            </h3>
            <p>{info.day}</p>
            
        </div>
    )
}

export default Task