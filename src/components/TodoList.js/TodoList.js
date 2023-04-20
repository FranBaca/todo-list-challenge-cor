import React from 'react'
import Filters from "../Filters/Filters"
import Todo from '../Todo/Todo'

export default function TodoList({
  todos,
  setTodos,
  activeFilter,
  filteredTodos,
  showAllTodos,
  showNewTodos,
  showActiveTodos,
  showCompleted,
  handleSetComplete,
  handleDelete,
  handleClearCompleted }) {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      {
        filteredTodos?.map((todo) => {
          return (
            <Todo key={todo.id} todo={todo} handleSetComplete={handleSetComplete} handleDelete={handleDelete} todos={todos} setTodos={setTodos} />
          )
        })
      }
      <Filters
        activeFilter={activeFilter}
        total={filteredTodos.length}
        showAllTodos={showAllTodos}
        showNewTodos={showNewTodos}
        showActiveTodos={showActiveTodos}
        showCompleted={showCompleted}
        handleClearCompleted={handleClearCompleted}
      />
    </div>
  )
}
