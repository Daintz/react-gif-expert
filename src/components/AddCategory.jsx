import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

   //Hook UseState
  //Es una función que cre internamente una variable donde podremos almacenar el estado de nuestro componente. Acepta un valor inicial para esa variable y devuelve un array con dos elementos, el valor de la variable y la funcion para modificarla
  //En este caso el valor de la variable es (inputValue) y la funcion para modificarla es(onInputChange) que establece un valor en la variable a travez de (setInputValue) 
  const [ inputValue, setInputValue ] = useState('')


  //Esta funcion sirve para mostrar en el <input /> lo que se escribe adentro de este
  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  };

  //Esta función sirve para 
  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;

    // setCategories((categories) => [ inputValue, ...categories ]);
    onNewCategory( inputValue.trim() );
    setInputValue('');
  };


  return (
    <form onSubmit={ onSubmit }>
      <input 
        type='text'
        placeholder='Buscar Gifs'
        value={ inputValue }
        onChange={ onInputChange } 
      />
    </form>

  );
};
