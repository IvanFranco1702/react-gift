import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({PropCategorias}) => {

    const [valorInput, setInputValue] = useState('')
    const cambioInput =(e)=>{
        setInputValue(e.target.value)
    }
    const cambioSubmit = (e)=>{
        e.preventDefault()
       // console.log('holaaa')
       if(valorInput.trim().length>2){
         PropCategorias(cate=>[valorInput,...cate  ])
       }
      
    }

  return (
    
        <form onSubmit={cambioSubmit}>
            <h2>añadiendo</h2>
            <input 
            type="text"
            value={valorInput}
            onChange={cambioInput}
            />
        </form>
    
  )
}


AddCategory.propTypes={
  PropCategorias: PropTypes.func.isRequired
}