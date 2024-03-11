"use client"
import Loading from '@/app/loading';
import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

export default function DeleteBtn({id, endpoint}) {
    const [Loading, setLoading]=useState(false)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const router = useRouter();
    // const confirmed = confirm('Are you sure you want to delete?')
    async function handleDelete(){
        setLoading(true)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
           const res = await fetch(`${baseUrl}/api/${endpoint}?id=${id}`,
            {
                method: 'DELETE'
            });
            if(res.ok){
                router.refresh()
                setLoading(false)
               toast.success("Deleted Successfully")
            }
           
        }
        else{
            setLoading(false)
        }
      });
    }
  return (
    <>
    {Loading ? (
             <button
              disabled
              type="button"
              className="text-white mt-4 bg-red-200 hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-[0.5rem] px-5 py-2.5 text-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
              </svg>
              Deleting Please wait...
            </button>
          ) : (
        <button onClick={handleDelete} className="font-medium text-red-600 dark:text-red-500 flex items-center space-x-1">
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
          )}
    </>
    
                  
  )
}
