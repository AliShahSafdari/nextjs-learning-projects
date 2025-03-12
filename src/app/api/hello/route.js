export async function GET() {
    try {
        throw new Error("خطا")
        return new Response(
            JSON.stringify({message:"سلام خوش امدید"}),{status: 200}
        )
    } catch (error) {
        console.log(error)
        return new Response(
            JSON.stringify({message:"عملیات با شکست مواجه شد"}), {status:500}
        )
    }
    
}