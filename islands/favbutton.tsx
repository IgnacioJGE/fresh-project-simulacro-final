import axios from "npm:axios";
import { useState } from "preact/hooks";

type favprops={
    iduser:string,
    idvid:string,
    favorito:boolean,
}



export default function Buttonfav(favprops:favprops){
    const [fav,setFav]=useState<boolean>(favprops.favorito)
    const [texto,setTexto]=useState<string>();
    async function hadleclick(){
        if(fav){
            setTexto("🤍 Add to Favorites")
            setFav(!fav)
            const respuesta= await axios.post(`https://videoapp-api.deno.dev/fav/${favprops.iduser}/${favprops.idvid}`)
        }else{
            setTexto("❤️ Remove from Favorites")
            setFav(!fav)
            const respuesta= await axios.post(`https://videoapp-api.deno.dev/fav/${favprops.iduser}/${favprops.idvid}`)
        }
    }
    if(fav){
        setTexto("❤️ Remove from Favorites")
    }else{
        setTexto("🤍 Add to Favorites")
    }
return(
    <button class="fav-button" onClick={()=>hadleclick()} >{texto}</button>

)



}