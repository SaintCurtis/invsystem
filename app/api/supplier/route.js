import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST (request){
    try {
        const {title,phone,email,address,contactPerson,supplierCode,taxID,paymentTerms,notes}=await request.json();
        const suppliers =await db.supplier.create({
            data:{title,phone,email,address,contactPerson,supplierCode,taxID,paymentTerms,notes}
        });
        console.log(suppliers);
        return NextResponse.json(suppliers);
    } catch (error) {
        console.log(error)
        return NextResponse.json({ 
            error,
            message:"Failed to create a supplier"
        },{
            status: 500,
        })
    }
}

export async function GET(request){
    try {
        const suppliers = await db.supplier.findMany({
            orderBy:{
             createdAt: 'desc' //latest warehouse
             },
        })
      return NextResponse.json(suppliers);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:" Failed to fetch the supplier"
        },{
            status: 500,
        })
    }
}

export async function DELETE(request){
    try {
        const id = request.nextUrl.searchParams.get("id")
        const  deletedSupplier = await db.supplier.delete({
            where: {
                id,
            }
        })
      return NextResponse.json(deletedSupplier);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:" Failed to delete supplier"
        },{
            status: 500,
        })
    }
}