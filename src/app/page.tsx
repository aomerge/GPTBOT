'use client'
import Chat from "./chat"

// This is the component that will be rendered on the client
export default function home () 
{
  return(
    <main className='grid place-content-center h-screen'>
      Nuestra primera aplicacion con chat gpt
      <Chat/>
    </main>
  )
}
