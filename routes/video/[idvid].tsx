import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import axios from "npm:axios";
import jwt from "npm:jsonwebtoken";
import { getCookies, setCookie } from "$std/http/cookie.ts";
import VideosComp from "../../components/viddeoscomp.tsx"


export const handler: Handlers = {
  async GET(req, ctx) {
    try {
      const cooquie= getCookies(req.headers)
      const authtok=cooquie["auth"]
      const decodedToken = jwt.decode(authtok);
    const respuesta= await axios.get(`https://videoapp-api.deno.dev/video/${decodedToken.id}/${ctx.params.idvid}`)
    const data= respuesta.data;
    const iduser=decodedToken.id;
    const name= decodedToken.name;
      return await ctx.render({data,iduser,name});
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

export default function Greet(props: PageProps) {
  return(
    <VideosComp
    video={props.data.data}
    iduser={props.data.iduser}
    name={props.data.name}/>)
}
