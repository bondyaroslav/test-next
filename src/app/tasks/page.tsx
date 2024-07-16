'use client'
import {useEffect, useState} from "react"
import {getAllTasks} from "@/services/getTasks"
import {Task} from "@/types/Task"
import {Button, TextField} from "@mui/material"

const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllTasks().then(setTasks).finally(() => setLoading(false))
    }, [])

    return (
        <section>
            {loading ? <p>loading</p>
            :
                <>
                    <ul>
                        {tasks.map((task: Task) => (
                            <p key={task.id}>{task.id}</p>
                        ))}
                    </ul>
                    <div>
                        <TextField type="text"/>
                        <Button>add</Button>
                    </div>
                </>
            }
        </section>
    )
}

export default Tasks