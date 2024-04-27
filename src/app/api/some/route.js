import { NextResponse } from "next/server"

export function get() {
    return NextResponse.json("Hello world!")
}