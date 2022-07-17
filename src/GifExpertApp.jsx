import { useState } from "react";
import { GifGrid, AddCategory } from './components'

//C:\Users\danic\OneDrive\Escritorio\React\04-gif-expert-app
export const GifExpertApp = () => {

  //Hook UseState
  //Es una función que cre internamente una variable donde podremos almacenar el estado de nuestro componente. Acepta un valor inicial para esa variable y devuelve un array con dos elementos, el valor de la variable y la funcion para modificarla
  //En este caso el valor de la variable es (categories) y la funcion para modificarla es(onAddCategory) que se ejecuta atra vez de (setCategories) 
  const [categories, setCategories] = useState([ 'One Punch' ]);

  //Esta funcion agrega una categoria que recibe como parametro(newCategory) el nombre de la categoria
  const onAddCategory = ( newCategory ) => {

    if( categories.includes(newCategory) ) return;

    // console.log( newCategory );
    // categories.push(newCategory);
    //Esto agrega la categoria (...categories hace un clon de los valores que ya habian anteriormente)
    setCategories([ newCategory, ...categories ]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        // setCategories={ setCategories }
        //Esta función flecha manda un valor a la función onAddCategory que envia value a la función
        onNewCategory={ (value) => onAddCategory(value) }
      />

      {/* Esto recorre el Array y muestra lo que hay dentro de este */}
      { 
        categories.map( category => (
          <GifGrid 
          key={ category } 
          category={ category }
          />
        ))
      }
      {/* <li>ABC</li> */}

    </>
  )
};
