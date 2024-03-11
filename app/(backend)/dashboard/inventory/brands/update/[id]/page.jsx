import React from 'react'
import Newbrand from '../../new/page'
import { getData } from '@/lib/getData'

export default async function Update({params:{id}}) {
  const data = await getData(`brands/${id}`);
  console.log(data)  
    return ( 
        <Newbrand initialData={data} isUpdate={true}/>
  )
}
 