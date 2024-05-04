import { NextResponse } from "next/server" 
import db from "@/app/libs/db"
import bcrypt from "bcrypt" 

export async function POST(request) { 
    try {
            const data = await request.json()

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

    const hashedPassword = await bcrypt.hash(data.password, 10)
    const newUser = await db.user.create({data: {
            email: data.email,
            username: data.username,
            password: hashedPassword
    }}    
    )
    
    const {password:_, ...user} = newUser

    return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({
            message: error.message,
        },
            {
            status: 500,
        })
    }
}