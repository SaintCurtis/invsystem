import { NextResponse } from "next/server";

export async function POST (request){
    try {

        const data = await request.json();
            // title,
            // categoryId,
            // sku,
            // barcode,
            // qty,
            // unitId,
            // brandId,
            // supplierId,
            // reOrderPoint,
            // itemId,
            // imageUrl,
            // weight,
            // dimensions,
            // sellingPrice,
            // buyingPrice,
            // taxRate,
            // notes,
            // description
        console.log(data);
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