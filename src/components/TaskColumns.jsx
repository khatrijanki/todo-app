import React from "react"
import Col from "react-bootstrap/Col"
import AddToDo from "./AddToDo"
import EditToDo from "./EditToDo"
import DropArea from "./DropArea"

const TaskColumns = ({ title, tasks, status, handleDelete, handleEdit, editTask, setActiveCard, onDrop }) => {

    return (
        <Col>
            <section className="task_column" >
                <div className="task-header">
                    <h5>{ title }</h5>
                </div>
                <DropArea onDrop={() => onDrop(status, 0)} />
                {
                    tasks.map((task, index) => 
                        task.isEditing ? <EditToDo key={task.id} task={task} editTask={editTask} showModal={task.isEditing}/> :
                        task.status === status &&
                        <React.Fragment key={task.id}>
                            <AddToDo 
                                key={task.id} 
                                task={task} 
                                handleDelete={handleDelete} 
                                handleEdit={handleEdit}
                                setActiveCard={setActiveCard}
                            />
                            <DropArea onDrop={() => onDrop(status, index +1)}/>
                        </React.Fragment>
                )}
            </section>
        </Col>
    )
}

export default TaskColumns