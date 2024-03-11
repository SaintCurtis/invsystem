import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST (request){
    try {
        const {title,location,type,description}=await request.json();
        const warehouses = await db.warehouse.create({
            data:{title,location,warehouseType:type, description}
        });
        console.log(warehouses);
        return NextResponse.json(warehouses);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:" Failed to create a warehouse"
        },{
            status: 500,
        })
    }
}

export async function GET(request){
    try {
        const warehouses = await db.warehouse.findMany({
            orderBy:{
                createdAt: 'desc' //latest warehouse
            },
            include: {
                items: true,
            }
        })
      return NextResponse.json(warehouses);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:" Failed to fetch a warehouse"
        },{
            status: 500,
        })
    }
}

export async function DELETE(request){
    try {
        const id = request.nextUrl.searchParams.get("id")
        const  deletedWarehouse = await db.warehouse.delete({
            where: {
                id,
            },
        })
      return NextResponse.json(deletedWarehouse);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:" Failed to delete warehouse"
        },{
            status: 500,
        })
    }
}