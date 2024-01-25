"use client"

import SelectInput from '@/components/FormInput/SelectInput';
import SubmitButton from '@/components/FormInput/SubmitButton';
import TextAreaInput from '@/components/FormInput/TextAreaInput';
import TextInput from '@/components/FormInput/TextInput';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function AddInventoryForm() {
  const Branches = [
    {
      label: "Headquarters",
      value: "hfkjbdfbher"
    },
    {
      label: "Branch",
      value: "egyeyvxhvgds"
    },
  ]
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { title: '' }, // Provide default values for your form fields
  });
  
  const [loading, setLoading] = useState(false);
  async function onSubmit(data) {
    console.log(data)
    setLoading(true);
    const baseUrl = "http://localhost:3000"
    try {
      const response = await fetch(`${baseUrl}/api/adjustments/add`,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      console.log(response)
      if(response.ok){
        console.log(response)
        setLoading(false)
        reset();
      }
      
    } catch (error) {
      console.error('Error:',error)
      
    }
  }
  return (
    <div>
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Enter Quantity of Stock to Add"
          name="addStockQty"
          register={register}
          type='number'
          errors={errors}
          className='w-full'
          />
          <SelectInput 
          name="receivingWarehouseId" 
          label="Select the Warehouse to receive stock"
          register={register}
          className='w-full'
          options={Branches}
          />
          <TextAreaInput
          label="Adjustments Notes"
          name="notes"
          register={register}
          errors={errors}
          />
          
          
        </div>
        <SubmitButton isLoading={loading} title=" Add stock" />
      </form>
    </div>
  );
}
