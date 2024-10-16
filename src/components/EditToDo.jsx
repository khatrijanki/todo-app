import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

const EditToDo = ({ task, editTask, showModal}) => {
    const [taskData, setTaskData] = useState([])

    const [show, setShow] = useState(showModal)
    const handleClose = () => setShow(false)

    //fetches the task data
    useEffect(() => {
        const fetchData = () => {
            setTaskData(task)
        }

        fetchData()
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target
    
        setTaskData((prev) => {
            return {...prev, [name]: value}
        })
        console.log(taskData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        editTask(taskData, taskData.id)
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Form className="edit_form" id="edit_form" onSubmit={handleSubmit}>
                    <div>
                        <Form.Label>Task</Form.Label>
                        <Form.Control 
                            className="edit_task_input" 
                            type="text" 
                            name="task" 
                            value={taskData.task}
                            onChange={handleChange} />

                        <Form.Label>Status</Form.Label>
                        <Form.Select 
                            className="edit_form_select" 
                            onChange={handleChange} 
                            value={taskData.status}
                            name="status" 
                            required > 
                            <option value='' hidden></option>
                            <option value='todo'>To-Do</option>
                            <option value='inprogress'>In Progress</option>
                            <option value='completed'>Completed</option>
                        </Form.Select>

                        <div className="form_btns">
                            <Button className="form_btn" onClick={handleClose}>Close</Button>
                            <Button type="submit" className="btn btn-primary" onClick={handleClose}>Update</Button>
                        </div>
                    </div>
                </Form>
            </Modal>
        </div>
    )
}

export default EditToDo