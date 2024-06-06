import Logcomp from "../components/logcomp.tsx"
import axios from "npm:axios"
import { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies, setCookie } from "$std/http/cookie.ts";
import jwt from "npm:jsonwebtoken";

export const handler: Handlers = {
   GET(req, ctx) {
    const fail:boolean=false;
    return ctx.render({fail})
  },
  async POST(req, ctx) {
    try {
        const form = await req.formData();
        const email = form.get("email")?.toString();
        const password = form.get("password")?.toString();
        
        const respuesta= await axios.post("https://videoapp-api.deno.dev/checkuser",{
            email:email,
            password:password,
        })
        console.log(email)

        const data=respuesta.data;
        const JWT_SECRET = Deno.env.get("JWT_SECRET");
        if (!JWT_SECRET) {
          throw new Error("JWT_SECRET is not set in the environment");
        }
        const token = jwt.sign(
            {
              email,
              id: data.id,
              name: data.name,
            },
            Deno.env.get("JWT_SECRET"),
            {
              expiresIn: "24h",
            },
          ); 
        const headers = new Headers();
        setCookie(headers, {
            name: "auth",
            value: token,
            sameSite: "Lax", // this is important to prevent CSRF attacks
            path: "/",
            secure: true,
          });
        headers.set("location", "/videos");
        return new Response(null, {
          status: 303, // See Other
          headers,
        });
    } catch (error) {
      console.log("vaya mierdon colega")
        const fail:boolean=true;
        return ctx.render({fail})
    }
  }
};


export default function Login(props:PageProps){
    const fallo:boolean=props.data.fail||false;
return(
    <Logcomp
    fail={fallo}/>
)
}