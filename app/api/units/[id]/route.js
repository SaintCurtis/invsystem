import { NextResponse } from "next/server";
import  db from "@/lib/db";

export async function GET(request,{params: {id}}){
    try {
        const unit = await db.unit.findUnique({
            where:{
             id,
             },
        })
      return NextResponse.json(unit);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:" Failed to fetch the unit"
        },{
            status: 500,
        })
    }
}
export async function PUT(request,{params: {id}}){
    try {
        const {title,abbreviation} = await request.json()
        const unit = await db.unit.update({
            where:{
             id
             },
             data: {
                title,abbreviation
             },
        })
        console.log(unit)
      return NextResponse.json(unit);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:" Failed to Update the unit"
        },{
            status: 500,
        })
    }
}