import {React, useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form} from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const ToDoForm = ({ newTodo }) => {

    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo"
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setTaskData((prev) => {
            return {...prev, id: uuidv4(), [name]: value, isEditing: false}
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        newTodo((prev) => {
            return [...prev, taskData]
        })

        console.log(taskData)

        setTaskData({
            task: "",
            status: ""
        })
        document.getElementById("myForm").reset();   
    }


    return (
        <Form className="myForm" id="myForm" onSubmit={handleSubmit}>
            <div>
                <Form.Control className="form_input" type="text" name="task" onChange={handleChange} placeholder="What is the task Today?"/>

                <Form.Select className="form_select" onChange={handleChange} name="status" required > 
                    <option value='' hidden>Status</option>
                    <option value='todo'>To-Do</option>
                    <option value='inprogress'>In Progress</option>
                    <option value='completed'>Completed</option>
                </Form.Select>

                <div className="form_btn">
                    <Button type="submit" className="btn btn-primary">Add</Button>
                </div>
            </div>
        </Form>
    )
}

export default ToDoForm