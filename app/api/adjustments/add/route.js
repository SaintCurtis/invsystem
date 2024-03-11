import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST (request){
    try {
        const {
            addStockQty,
            receivingWarehouseId,
            notes,
            referenceNumber,
            itemId,
            supplierId
        }=await request.json();

        //Get the item
        const itemToUpdate = await db.item.findUnique({
            where:{
                id:itemId
            }
        })
        //Current Item Qty
        const currentItemQty = itemToUpdate.quantity;
        const newQty = parseInt(currentItemQty) + parseInt(addStockQty)
          
        //Modify the item to the new qty
        const updatedItem = await db.item.update({
            where:{
                id :itemId,
                },
                data: {
                   quantity:newQty,
                },
        });
        //get the warehouse
        const warehouse = await db.warehouse.findUnique({
            where: {
                id:receivingWarehouseId
            }
        })
//get the current stock of the warehouse
        const currentWarehouseStock = warehouse.stockQty;
        const newStockQty = parseInt(currentWarehouseStock) + parseInt(addStockQty)
//update the stock on the warehouse
        const updatedWarehouse = await db.warehouse.update({
            where: {
                id: receivingWarehouseId,
            },
            data:{
                stockQty: newStockQty
            }
        })
        console.log(updatedItem);
        
        const adjustment = await db.addStockAdjustment.create({
            data:{
                itemId,
                referenceNumber,
                addStockQty:parseInt(addStockQty),
                receivingWarehouseId,
                notes,
                supplierId
            }
        });

        //Affect the warehouse
        return NextResponse.json(adjustment);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:" Failed to create an adjustment"
        },{
            status: 500,
        })
    }
}
export async function GET(request){
    try {
        const adjustments = await db.addStockAdjustment.findMany({
            orderBy:{
             createdAt: 'desc' //latest warehouse
             },
        })
      return NextResponse.json(adjustments);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:" Failed to fetch the adjustments"
        },{
            status: 500,
        })
    }
}
export async function DELETE(request){
    try {
        const id = request.nextUrl.searchParams.get("id")
        const  deletedAdjustment = await db.addStockAdjustment.delete({
            where: {
                id,
            }
        })
      return NextResponse.json(deletedAdjustment);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:" Failed to delete the adjustment"
        },{
            status: 500,
        })
    }
}