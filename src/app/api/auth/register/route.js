import { NextResponse } from "next/server" 
import db from "@/app/libs/db"

export async function POST(request) { 
    const data = await request.json()

    console.log(data)
    const emailFound = db.user.findUnique({
        where: {
           email: data.email,
       }
    })
        const userFound = db.user.findUnique({
        where: {
           uusername: data.username,
       }
    })
    
    if (emailFound) {
        return NextResponse.json({
            message: "Email already exists"
        }, {
            status: 400
        })
    }
    
    if (userFound) {
        return NextResponse.json({
            message: "User already exists"
        }, {
            status: 400
        })
    }

    const newUser = await db.user.create({data})

    return NextResponse.json(newUser)
}