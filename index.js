import express from "express"
import bodyParser from "body-parser";

const app = express();
const port = 10000;

app.use(express.json());       
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) =>{
    res.render("index.ejs")
})

const todos = [{
    todoTask: "Sleep",
},
{
    todoTask: "Cook",
},
{
    todoTask: "Coffee",
}
];

app.get("/personal", (req, res) =>{
    res.render("personal.ejs", {
        data: todos,
    })
})

app.post("/submit", (req, res) => {
    const inputTodoTask = req.body.todoTask;
    todos.push({
        todoTask: inputTodoTask
    });
    res.render("personal.ejs", {
        data: todos,
    });
});
//////////////////////////////////////////////////--------WORK-------///////////////////////////////////////////////
const todoWork = [{
    todoWorkTask: "Code",
},
{
    todoWorkTask: "Website Development",
}];

app.get("/work", (req, res) =>{
    res.render("work.ejs", {
        workData: todoWork,
    })
})



app.post("/submitWork", (req, res) => {
    const inputWorkTodoTask = req.body.todoWorkTask;
 
    todoWork.push({
        todoWorkTask: inputWorkTodoTask
    });
    
    res.render("work.ejs", {
        workData: todoWork,
    });
});





app.listen(port, () =>{
    console.log(`Server up and running on port ${3000}`)
})
