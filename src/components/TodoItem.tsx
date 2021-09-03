import React from 'react';

type Props = {
  index: number;
  todo: string
  handleRemoveById: (index: number) => void
}

export const TodoItem = ({ index, todo, handleRemoveById }:Props) => {
  return(
    <>
      <button 
        data-testid={`button-remove-${index}`} 
        onClick={ () => handleRemoveById(index)}
      >
          delete
      </button>
      <li>{todo}</li>
    </>
  )
};