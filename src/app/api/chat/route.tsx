// imporrtacion de librerias
import { Configuration, OpenAIApi} from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'

// le indicamos a vercel que este archivo es una api
export const runtime = 'edge'

// --> edge: tiene mejor rendimiento pero no puede acceder a variables de entorno, tambien tiene un tiempo de ejecucion de milisegundos
// --> default: tiene peor rendimiento pero puede acceder a variables de entorno, tiene un tiempo de ejecucion de segundos

// creacion de cliente de api de openai
const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config)

// generacion de ruta de prueba
export async function GET (req: Request) 
{
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true, 
        messages:[
            {
                role: 'system',
                content: 'comportate como mi abuela regañandome por no hacer la tarea'
            },
            {
                role: 'user',
                content: 'no quiero hacer la tarea'
            }
        ],
        max_tokens: 150,
        temperature: 0.9,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
    })
    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response)

    // Respond with the stream
    return new StreamingTextResponse(stream)    
}
export async function POST (req: Request) 
{
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true, 
        messages:[
            {
                role: 'system',
                content: 'comportate como mi abuela regañandome por no hacer la tarea'
            },
            {
                role: 'user',
                content: 'no quiero hacer la tarea'
            }
        ],
        max_tokens: 150,
        temperature: 0.9,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
    })
    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response)

    // Respond with the stream
    return new StreamingTextResponse(stream)    
}

/* export async function POST(req: Request) {
    const { prompt } = await req.json();
   
    // Ask OpenAI for a streaming completion given the prompt
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      stream: true,
      temperature: 0.6,
      prompt: `Create three slogans for a business with unique features.   
        Business: Bookstore with cats
        Slogans: "Purr-fect Pages", "Books and Whiskers", "Novels and Nuzzles"
        Business: Gym with rock climbing
        Slogans: "Peak Performance", "Reach New Heights", "Climb Your Way Fit"
        Business: ${prompt}
        Slogans:`,
    });
    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);
    // Respond with the stream
    return new StreamingTextResponse(stream);
  } */