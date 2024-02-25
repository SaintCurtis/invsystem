import { data } from "autoprefixer";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST (request){
        try {
            const itemData = await request.json();

            const item =await db.item.create({
                data:{
                    title:itemData.title,
                    categoryId:itemData.categoryId,
                    sku:itemData.sku,
                    barcode:itemData.barcode,
                    quantity:parseInt(itemData.qty),
                    unitId:itemData.unitId,
                    brandId:itemData.brandId,
                    buyingPrice:parseFloat(itemData.buyingPrice),
                    sellingPrice:parseFloat(itemData.sellingPrice),
                    supplierId:itemData.supplierId,
                    reOrderPoint:parseInt(itemData.reOrderPoint),
                    warehouseId:itemData.warehouseId,
                    weight:parseFloat(itemData.weight),
                    dimensions:itemData.dimensions,
                    taxRate:parseFloat(itemData.taxRate),
                    description:itemData.description,
                    notes:itemData.notes,
                    imageUrl:itemData.imageUrl
                }
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

export async function GET(request){
    try {
        const items = await db.item.findMany({
            orderBy:{
             createdAt: 'desc' //latest warehouse
             },
             include: {
                category: true,
                supplier: true,
             }
        })
      return NextResponse.json(items);
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:" Failed to fetch the item"
        },{
            status: 500,
        })
    }
}