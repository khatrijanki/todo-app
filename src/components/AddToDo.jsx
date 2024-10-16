import '../index.css'

const AddToDo = ({ task, handleDelete, handleEdit, setActiveCard }) => {
    return(
        <div className='tasks' key={task.id} draggable onDragStart={() => setActiveCard(task.id)} onDragEnd={() => setActiveCard(null)}>
                <p className='task' id="tasks">{task.task}</p>
            <div className='task_menu'>
                <i className="bi bi-pencil edit_icon" onClick={() => handleEdit(task.id)}></i>
                <i className="bi bi-trash delete_icon" onClick={() => handleDelete(task.id)} alt='delete Icon' ></i>
            </div>
        </div>
    )
}

export default AddToDo