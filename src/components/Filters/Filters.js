import React from 'react'
import{ FiltersContainer, ItemsLeft, FilterButtonContainer,FilterButton} from './Filters.components'

export default function Filters ({
  activeFilter,
  total,
  showAllTodos,
  showNewTodos,
  showActiveTodos,
  showCompleted,
  handleClearCompleted})  {
  return (
   <FiltersContainer>
    <ItemsLeft total={total}/>
    <FilterButtonContainer>
      <FilterButton action={() => showAllTodos()} active={activeFilter} filter="All"/>
        <FilterButton action={() => showNewTodos()} active={activeFilter} filter="New"/>
        <FilterButton action={() => showActiveTodos()} active={activeFilter} filter="In Progress"/>
        <FilterButton action={() => showCompleted()} active={activeFilter} filter="Finalized"/>
    </FilterButtonContainer>
    <button className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out" onClick={()=> handleClearCompleted()}>
        Clear Completed
      </button>
   </FiltersContainer>
  )
}
