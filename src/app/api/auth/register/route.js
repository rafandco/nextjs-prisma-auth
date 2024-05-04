import { NextResponse } from "next/server" 
import db from "@/app/libs/db"

export async function POST(request) { 
    const data = await request.json()

    console.log(data)

    const emailFound = await db.user.findUnique({
        where: {
           email: data.email,
       }
    })
    
    if (emailFound) {
        return NextResponse.json({
            message: "Email already exists"
        }, {
            status: 400
        })
    }

    const userFound = await db.user.findUnique({
        where: {
            username: data.username,
        }
    })

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