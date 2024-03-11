import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST (request){
    try {
        const {
            transferStockQty,
            itemId,
            givingWarehouseId,
            receivingWarehouseId,
            notes,
            referenceNumber
        }=await request.json();
        const item = await db.item.findUnique({
            where: {
                id:itemId
            }
        })
        
        //giving warehouse
        const givingWarehouse = await db.warehouse.findUnique({
            where:{
                id:givingWarehouseId
            }
        })
        //Get current Stock
        const currentGivingWarehouseStock = givingWarehouse.stockQty;

        if(parseInt(currentGivingWarehouseStock) > parseInt(transferStockQty)) {
            const newStockForGivingWarehouse = parseInt(currentGivingWarehouseStock) - parseInt(transferStockQty)
        //Update Stock
        const updatedGivingWarehouse = await db.warehouse.update({
                where: {
                    id: givingWarehouseId
                },
                data: {
                    stockQty:newStockForGivingWarehouse,
                    // items:item
                }
            })
    
        //Get the receiving warehouse
        const receivingWarehouse = await db.warehouse.findUnique({
            where:{
                id:receivingWarehouseId
            }
        })
        //Get current Stock
        const currentReceivingWarehouseStock = receivingWarehouse.stockQty
        const newStockForReceivingWarehouse = parseInt(currentReceivingWarehouseStock) + parseInt(transferStockQty)
        //Update Stock
        const updatedReceivingWarehouse = await db.warehouse.update({
            where: {
                id: receivingWarehouseId
            },
            data: {
                stockQty:newStockForReceivingWarehouse
            }
        })

        //Update the item in both warehouses

        //ite

            const adjustment = await db.transferStockAdjustment.create({
                data:{transferStockQty:parseInt(transferStockQty),itemId,givingWarehouseId,receivingWarehouseId,notes,referenceNumber}
            }
        )
            console.log(adjustment);
            return NextResponse.json(adjustment);
        
        }else {
            return NextResponse.json({
                data:null,
                message:"Giving warehouse has  no enoough stock",
            },{status:409})
        }
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
        const adjustments = await db.transferStockAdjustment.findMany({
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
        const  deletedAdjustment = await db.transferStockAdjustment.delete({
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