import Videoscom from "../components/videoscomp.tsx"
import axios from "npm:axios"
import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies, setCookie } from "$std/http/cookie.ts";
import jwt from "npm:jsonwebtoken";

export const handler: Handlers = {
  async  GET(req, ctx) {
    try {
      const cooquie= getCookies(req.headers)
const authtok=cooquie["auth"]
const decodedToken = jwt.decode(authtok);
const respuesta = await axios.get(`https://videoapp-api.deno.dev/videos/${decodedToken.id}`)
const data= respuesta.data
const iduser= decodedToken.id;
const name= decodedToken.name;

    return ctx.render({data,iduser,name})
    } catch (error) {
      
      const headers = new Headers();

      headers.set("location", "/login");
      return new Response(null, {
        status: 303, // See Other
        headers,
      });
    }

  },
  
};


export default function Videos(props:PageProps){
    return(<Videoscom
    videos={props.data.data}
    iduser={props.data.iduser}
    name={props.data.name}
    />)

}