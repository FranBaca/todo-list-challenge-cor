import React, { useState } from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai"
import Inputs from '../Inputs/ModalInputs'

export default function Title({ addTodo }) {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <h1 className='text-5xl font-anton font-bold tracking-widest'>Todo App</h1>
      <p className="font-anton">Created by Francisco Baca©🐮</p>
      <button className="mt-4 flex flex-row items-center" onClick={() => setShowModal(true)}>
        <AiOutlinePlusCircle size="2em" />
        <h3 className="ml-1 flex items-center justify-center text-md font-anton tracking-widest">
          Add Todo
        </h3>
      </button>
      {showModal && <Inputs mode={"create"} setShowModal={setShowModal} addTodo={addTodo} />}
    </div>
  )
}
