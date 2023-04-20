import { useEffect, useState } from "react";
import Title from "./components/Title/Title";
import TodoList from "./components/TodoList.js/TodoList";


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Watch the next Marvel Movie',
      status: "New",
      priority: "Low",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      completed:false
    },
    {
      id: 2,
      title: 'Record the next Video',
      status: "In progress",
      priority: "High",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      completed:false
    },
    {
      id: 3,
      title: 'Wash the dishes',
      status: "Finalized",
      priority: "Medium",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      completed:true
    },
    {
      id: 4,
      title: 'Study 2 hours',
      status: "Finalized",
      priority: "High",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem ex. Duis a dolor dictum, venenatis mi non, tincidunt mi. Aenean augue orci, porta vitae bibendum vitae, convallis non libero. Suspendisse quis ligula eget urna vehicula ultricies.",
      completed:true
    }
  ])

  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState(todos)

  const addTodo = ( input ) =>{
    const {title, status, priority, description} = input
    const lastId = todos.length > 0 ? todos[todos.length - 1].id :1;

    const newTodo = {
      id: lastId + 1,
      title,
      status,
      priority,
      description,
      completed:false
    }

    const todoList = [...todos]
    todoList.push(newTodo)
    setTodos(todoList)
  }
  const handleSetComplete = (id) => {
    const updatedList = todos.map(todo => {
      if(todo.id === id){
        return { ...todo, status:"Finalized", completed: !todo.completed}
      }
      return todo
    })
    setTodos(updatedList)
  }

  const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id)
    setTodos(updatedList)
  }

  const showAllTodos = () => {
    setActiveFilter("all")
  }
  const showNewTodos = () =>{
    setActiveFilter("new")
  }
  const showActiveTodos = () =>{
    setActiveFilter("in progress")
  }

  const showCompleted = () =>{
    setActiveFilter("finalized")
  }

  const handleClearCompleted = () =>{
    const updatedList = todos.filter(todo => !todo.completed)
    setTodos(updatedList)
  }

  useEffect(() => {
    if(activeFilter==="new"){
      const newTodos = todos.filter(todo => todo.status === "New")
      setFilteredTodos(newTodos)
    }else if(activeFilter==="in progress"){
      const activeTodos = todos.filter(todo => todo.status === "In progress")
      setFilteredTodos(activeTodos)
    }else if(activeFilter === "finalized"){
      const completedTodos = todos.filter(todo => todo.status === "Finalized")
      setFilteredTodos(completedTodos)
    }else if(activeFilter==="all"){
      setFilteredTodos(todos)
    }
  }, [activeFilter,todos])
  
  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
              <Title  addTodo={addTodo} todos={todos}/>
              <TodoList
                todos={todos}
                setTodos={setTodos}
                activeFilter={activeFilter}
                filteredTodos={filteredTodos} 
                showAllTodos={showAllTodos}
                showNewTodos={showNewTodos}
                showActiveTodos={showActiveTodos}
                showCompleted={showCompleted}
                handleSetComplete={handleSetComplete} 
                handleDelete={handleDelete}
                handleClearCompleted={handleClearCompleted}
            />              
      </div>
    </div>
  );
}

export default App;
