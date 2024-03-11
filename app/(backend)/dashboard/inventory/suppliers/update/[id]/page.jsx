import React from 'react'
import { getData } from '@/lib/getData'
import NewSupplier from '../../new/page';

export default async function Update({params:{id}}) {
  const data = await getData(`supplier/${id}`);
  console.log(data)
    return ( 
        <NewSupplier initialData={data} isUpdate={true}/>
  )
}
