import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineCheckCircle, AiOutlineEdit } from "react-icons/ai"
import Inputs from '../Inputs/ModalInputs'

export default function Todo({ todo, handleSetComplete, handleDelete, todos, setTodos }) {
  const { id, title, status, priority, description, completed } = todo
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="flex items-center p-4 bg-gray-700 border-b border-solid border-gray-600">
      <div className="flex items-center">
        {  status === "Finalized"|| 
          completed ? (
            <AiOutlineCheckCircle size="2em" className="cursor-pointer transition-all duration-300 ease-in" />
          ) : (<span className='border-solid border border-gray-500 rounded-full p-3 cursor-pointer' onClick={() => handleSetComplete(id)}></span>)

        }
      </div>
      <div className="flex justify-between flex-col ml-3 w-full">
        <div className="flex justify-between mb-3 ml-3">
          <p>Priority: {priority}</p>
          <p>Status: {status}</p>
          <button onClick={() => setShowModal(true)}><AiOutlineEdit size="1.5em" /></button>
          <button onClick={() => handleDelete(id)} ><AiOutlineClose className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" /></button>
        </div>
        <div className="flex flex-col ml-3">
          <h4 className={"font-bold mt-2 " + (completed && "line-through")}>
            {title}
          </h4>
          <hr />
          <p className="mt-1">
            {description}
          </p>
        </div>
      </div>
      {showModal && <Inputs mode={"edit"} setShowModal={setShowModal} todo={todo} todos={todos} setTodos={setTodos} />}
    </div>
  )
}
