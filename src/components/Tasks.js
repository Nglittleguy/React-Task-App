import Task from "./Task"

const Tasks = ({taskArr, onDelete, onToggle}) => {
    return (
        <div>
            {taskArr.map((t) => (
                        <Task 
                            key={t.id} 
                            info={t} 
                            onDelete={onDelete}
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    )
}

export default Tasks

