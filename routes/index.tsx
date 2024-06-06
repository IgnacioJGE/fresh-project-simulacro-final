import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Handlers } from "$fresh/server.ts";
import jwt from "npm:jsonwebtoken";
import { getCookies, setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
   GET(req, ctx) {
    try {
      const cooquie= getCookies(req.headers)
      const authtok=cooquie["auth"]
      const decodedToken = jwt.decode(authtok);
      const headers = new Headers();

      headers.set("location", "/videos");
      return new Response(null, {
        status: 303, // See Other
        headers,
      }); 
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

export default function Home() {

}
