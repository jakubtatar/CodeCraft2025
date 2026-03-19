class chore{
    constructor(text, completed){
        this.text = text
        this.completed = completed
    }
}

const inputField = document.getElementById("taskInput")
const addButton = document.getElementById("addBtn")
const clearButton = document.getElementById("clearBtn")
const taskList = document.getElementById("taskList")
const counter = document.getElementById("counter")

let tasks = [];
let taskCounter = 0

loadTasksFromStorage()

function addTask() {
    if (inputField.value !== "") {

        let task = new chore(inputField.value, false)
        tasks.push(task)

        let li = document.createElement("li")

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"

        let span = document.createElement("span")
        span.textContent = task.text

        let removebutton = document.createElement("button")
        removebutton.textContent = "X"
        removebutton.className = "red-button"

        checkbox.addEventListener("change", function(){
            if (checkbox.checked){
                span.style.textDecoration = "line-through"
                task.completed = true
            } else {
                span.style.textDecoration = "none"
                task.completed = false
            }
        })

        removebutton.addEventListener("click", function(e){
            if (e.target.tagName !== "INPUT"){
                li.remove()

                let index = tasks.indexOf(task)
                if (index > -1) {
                    tasks.splice(index, 1)
                    taskCounter--
                    counter.textContent = "Currently you have " + taskCounter + " tasks!"
                }
            }
        })

        li.appendChild(checkbox)
        li.appendChild(span)
        li.appendChild(removebutton)
        taskList.appendChild(li)
        taskCounter++

        localStorage.setItem(taskCounter, JSON.stringify(tasks))

        inputField.value = ""
        counter.textContent = "Currently you have " + taskCounter + " tasks!"
        console.log("LS: " + localStorage.getItem(tasks))

    }
    console.log(tasks)
}

addButton.addEventListener("click", addTask)

inputField.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask()
    }
})

function loadTasksFromStorage() {
    let storedTasks = localStorage.getItem("tasks")

    if (storedTasks) {
        tasks = JSON.parse(storedTasks)

        tasks.forEach(task => {
            let li = document.createElement("li")

            let checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.checked = task.completed

            let span = document.createElement("span")
            span.textContent = task.text

            if (task.completed) {
                span.style.textDecoration = "line-through"
            }

            let removebutton = document.createElement("button")
            removebutton.textContent = "X"

            checkbox.addEventListener("change", function () {
                task.completed = checkbox.checked
                span.style.textDecoration = checkbox.checked ? "line-through" : "none"

                localStorage.setItem("tasks", JSON.stringify(tasks))
            })

            removebutton.addEventListener("click", function () {
                li.remove()

                let index = tasks.indexOf(task)
                if (index > -1) {
                    tasks.splice(index, 1)
                    taskCounter--
                    counter.textContent = "Currently you have " + taskCounter + " tasks!"
                    localStorage.setItem("tasks", JSON.stringify(tasks))
                }
            })

            li.appendChild(checkbox)
            li.appendChild(span)
            li.appendChild(removebutton)
            taskList.appendChild(li)
        })

        taskCounter = tasks.length
        counter.textContent = "Currently you have " + taskCounter + " tasks!"
    }
}

clearButton.addEventListener("click", function(){
    localStorage.clear()
    location.reload()
})