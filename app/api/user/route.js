import db from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {name, email,password} = await request.json();

        //Check if user email already exists
        const userExist = await db.user.findUnique({
            where: { email },
        });
        if (userExist) {
            return NextResponse.json(
                {
                    message: "User already exists",
                    user: null
        },
        { status: 409}
            )
}
const hashedPassword = await hash(password, 10);
const newUser = await db.user.create({
    data:{
        name,
        email,
        hashedPassword,
    },
});
return NextResponse.json(newUser);
} catch (error) {
    console.log(error);
    return NextResponse.json({ error});
}
}
