import React from 'react'
import { useFetchGitfs } from '../hooks/useFetchGifts'
// import { useState,useEffect } from 'react'
// import { getGift } from '../helpers/GetGifts'
import { ColeccionGiftItem } from './ColeccionGiftItem'

export const ColeccionGift = ({category}) => {
   
  // const [imagenes,setImagenes]= useState([])

  const {data:imagenes,loading}=useFetchGitfs(category)
  
  

  return (
    <>
  <h3>{category}</h3>
   {loading &&<p className="animate__animated animate__flash ">cargando</p>}
    <div className='card-conteiner '>
             {
                 imagenes.map(imgs=>{
                     return <ColeccionGiftItem 
                     
                     key={imgs.id} 
                     {...imgs}
                     />
                 })
             }
             
 
    </div>
    </>
  )
}
