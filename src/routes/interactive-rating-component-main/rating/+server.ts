import { json } from '@sveltejs/kit'

// export async function POST({ request}){
//     console.log('here');

//     const { rating } = await request.json()
//     console.log(rating);
//     return json({rating})

// }

export const POST = async ({ request }) => {
    const { rating } = await request.json()
    let received: boolean
    if (1 <= rating && rating <= 5)
        received = true;
    else
        received = false
    return new Response(JSON.stringify({ received }))
}