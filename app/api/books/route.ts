import { NextResponse } from "next/server";

let books : {id:number; title:string; author:string}[]=[];


export async function GET () {
    return NextResponse.json(books);
} 

export async function POST (request:Request) {
    const newBook = await request.json();
    books.push ({id:Date.now(), ...newBook});
    return NextResponse.json({message:"Book added sucessfully", books});
}

export async  function PUT (requset:Request){
    const updateBook = await requset.json();
    books = books.map(book => (book.id === updateBook.id ? updateBook :  book));
    return NextResponse.json({message:"Book update Sucessfully", books})
}
export async  function Delete (requset:Request){
    const {id} = await requset.json();
    books = books.filter(book => book.id !== id);

    return NextResponse.json({ message:"Book Delete Sucessfully", books})
}
