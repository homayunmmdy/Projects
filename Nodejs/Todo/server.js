import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware to parse JSON bodies
app.use(express.json());

let todos = [
  { id: 1, task: "Build To do list" },
  { id: 2, task: "Build clock app" },
];

app.get("/todos" , (req,res) => {
    res.json(todos)
})

app.post("/todos" , (req,res) => {
    const {task} = req.body;
    const newTask = {id : todos.length + 1 , task};
    todos.push(newTask);
    res.status(201).json(newTask)
})

app.put("/todos/:id" , (req,res) => {
    const {id} = req.params;
    const {task} = req.body;
    const index = todos.findIndex(todo => todo.id === parseInt(id));
    if ( index !== -1) {
        todos[index] = {...todos[index] , task: task || todos[index].task}
        res.json(todos[index])
    }else {
        res.status(404).json({message: "Todo not found"})
    }
})

app.delete("/todos/:id" , (req,res) => {
    const {id} = req.params;
    const {task} = req.body;
    const index = todos.findIndex(todo => todo.id === parseInt(id));
    if ( index !== -1) {
        todos.splice(index,1);
        res.json({message: "To do deleted successfuly"})
    }else {
        res.status(404).json({message: "Todo not found"})
    }
})

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT} `)
})