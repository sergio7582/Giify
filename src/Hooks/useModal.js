import {useState,useEffect} from "react";

export function useModal({idGif}){

    const [openModal,setOpenModal] = useState(false)

    useEffect(() => {
        console.log(idGif)
        if(idGif != undefined){
            setOpenModal(true)
        }else{
            setOpenModal(false)
        }        
    },[idGif])

    return{openModal}
}