import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function Inputs({ addTodo, setShowModal, mode, todo, todos, setTodos }) {
  const editMode = mode === 'edit' ? true : false
  const [input, setInput] = useState({
    title: editMode ? todo.title : "",
    status: editMode ? todo.status : "",
    priority: editMode ? todo.priority : "",
    description: editMode ? todo.description : "",
    completed: false
  })
  const enabled =
    input.title.length > 0 &&
    input.status.length > 0 &&
    input.priority.length > 0 &&
    input.description.length > 0

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = function (e) {
    e.preventDefault()
    addTodo(input)
    setInput({
      title: "",
      status: "",
      priority: "",
      description: "",
      completed: false
    })
  }

  const handleUpdateTodo = (e) => {
    e.preventDefault()
    const editedTodos = todos?.map(t => (
      t.id === todo.id ?
        { ...t, title: input.title, status: input.status, priority: input.priority, description: input.description } : t
    ))
    setTodos(editedTodos)
    setShowModal(false)
    setInput({
      title: "",
      status: "",
      priority: "",
      description: "",
      completed: false
    })
  }

  return (
    <div className="backdrop-blur-3xl fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-hidden h-full w-full  ">
      <button className='p-3' onClick={() => setShowModal(false)}><AiOutlineCloseCircle size="2em" /></button>
      <div className="flex h-screen justify-center items-center ">
        <form onSubmit={editMode ? handleUpdateTodo : handleSubmit}>
          <input
            placeholder='Title'
            name="title"
            type="text"
            className='mb-3 focus:shadow-lg font-inter focus:shadow-blue-800 pl-12 w-full py-4  bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out'
            onChange={handleInputChange}
            value={input.title}
          />
          <select
            onChange={handleInputChange}
            name="status"
            className='mb-3 focus:shadow-lg font-inter focus:shadow-blue-800 pl-12 w-full py-4  bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out'
            value={input.status}
          >
            <option value="" disabled selected >Status</option>
            <option value="New">New</option>
            <option value="In progress">In Progress</option>
            <option value="Finalized">Finalized</option>
          </select>
          <select
            onChange={handleInputChange}
            name="priority"
            className='mb-3 focus:shadow-lg font-inter focus:shadow-blue-800 pl-12 w-full py-4  bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out'
            value={input.priority}
          >
            <option value="" disabled selected>Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <input
            placeholder='Description'
            name="description"
            type='text'
            className='mb-3 focus:shadow-lg font-inter focus:shadow-blue-800 pl-12 w-full py-4  bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out'
            onChange={handleInputChange}
            value={input.description}
          />
          <button type="submit" className="bg-blue-800 w-full rounded-xl outline-none transition-all duration-300 ease-in-out p-5" disabled={!enabled}>{editMode ? "Update Task" : "Create task"}</button>
        </form>

      </div>
    </div>
  )
}
