
import { useState,useEffect } from "react"
import { getGift } from "../helpers/getGifts"


export const useFetchGitfs=(category)=>{
    const [state,setState]=useState({
        data:[],
        loading:true
    })
    
    useEffect( () => {
        //aca con el get gift llamo al componente que tiene el proceso donde voy a buscar la url de la api para poder mostrarla
         getGift(category)
        .then(img =>{
            
            setTimeout(()=>{ 

                console.log(img)
                setState({
                    data:img,
                    loading: false
                }) 

            },);
            
        })
        
    },[category]) 

    return state;
}



