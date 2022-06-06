import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { ColeccionGift } from "./components/ColeccionGift";
export const Gift = ()=>{
   // const categorias = ['one piece','naruto','piano']

    const[categorias,setCategorias]= useState([''])
    /*const handleAdd = () => {
        setCategorias([...categorias,'one punch man']);
        //aca usamos espread operator 
        //setCategorias(cate=>[...cate ,'one punch man']);
        //el set puede devolver un callback , el primer cate indica el valor de el estado anterior y
        // el segundo argunmento que es ([...cate ,'one punch man']) el el nuevo valor del estado
    }*/
    return (
        
        <div>
            <h2>holanda gift</h2>
            <AddCategory PropCategorias={setCategorias}/>
            <hr></hr>
            
            <ol>
                {
                  categorias.map(categorias=>{
                    return(
                    <ColeccionGift 
                    key={categorias}
                    category={categorias} />
                  )})
                }
            </ol>
        </div>
    )
}