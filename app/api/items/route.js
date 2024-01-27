import { NextResponse } from "next/server";

export async function POST (request){
        try {
            const {title, categoryId,sku,barcode,qty,unitId,brandId,buyingPrice,sellingPrice,supplierId,reOrderPoint,warehouseId,weight,dimensions,taxRate,description,notes,imageUrl}=await request.json();
            const item =await db.unit.create({
                data:{
                    title, categoryId,sku,barcode,qty,unitId,brandId,buyingPrice,sellingPrice,supplierId,reOrderPoint,warehouseId,weight,dimensions,taxRate,description,notes,imageUrl}
            });
            console.log(item);
        return NextResponse.json(data);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:" Failed to create an item"
        },{
            status: 500,
        })
    }
}