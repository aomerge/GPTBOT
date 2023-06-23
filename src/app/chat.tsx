"use client"
import { useChat } from 'ai/react';

function pvt ()
{
    console.log('el submit funciona');
}
// This is the component that will be rendered on the client
export default function Chat ()
{
    const { messages, input, handleInputChange, handleSubmit} = useChat()
    return(
        <div className='flex flex-col max-w-xl px-8 max-auto'>
            {
                messages.map((message) => 
                {
                    return(
                        <div key={message.id}>
                            <p>{message.role === 'user'? '🧑': '👨🏼‍🦳'}</p>
                            <p>{message.content}</p>
                        </div>
                    )
                })
            }
            <form onSubmit={handleSubmit}>
                <label htmlFor=""> Escribe a la abuela para que te regañe </label>
                <input 
                className="bg-slate-950 w-full max-w-md bottom-0 border rounded mb-8 shadow-xl p-2"
                type="text" 
                name='content' 
                value={input} 
                onChange={handleInputChange}  />
            </form>
        </div>
    )
}