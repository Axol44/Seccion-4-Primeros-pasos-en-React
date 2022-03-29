import React, { useState } from 'react'

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(['One punch', 'Atack on titan', 'Ao haru ride']);

  const handleAdd = () => {
    //Se puede tanto como destructurar como recibir un callback 
    //setcategories([...categories, 'sakura']) 
    setcategories(cats => [...cats, 'Mononoke']) 
  }

  return (
    <>
      <h2> GifExpertApp </h2>
      <hr />
      <button onClick={ handleAdd } > Agregar </button>

      <ol>
        {
          categories.map( category => {
            return <li key={ category }> { category } </li>
          })
        }
      </ol>
    
    </>
  )
}
