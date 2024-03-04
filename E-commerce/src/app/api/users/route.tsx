import { NextRequest, NextResponse } from "next/server";

// GET - Getting all the data 
export function GET(request : NextRequest) {
    return NextResponse.json([
        {id : 1 , name : "Alex"},
        {id : 2 , name : "Homayoun"},
        {id : 3 , name : "Sara"}
    ])
}
// POST - Creating data
export async function POST(request : NextRequest) {
    //Get the data from body
    const body = await request.json();
    if (!body.name)
       return NextResponse.json({error : "Name is required"} , {status : 404} )
    return NextResponse.json({id: 1 , name: body.name} , {status : 201});
}

