"use client"

import SelectInput from '@/components/FormInput/SelectInput';
import SubmitButton from '@/components/FormInput/SubmitButton';
import TextAreaInput from '@/components/FormInput/TextAreaInput';
import TextInput from '@/components/FormInput/TextInput';
import { makePostRequest } from '@/lib/apiRequest';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function TransferInventoryForm({items,warehouses}) {

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
    makePostRequest(setLoading,"api/adjustments/transfer",data,"TransferStockAdjustment",reset);
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
        label="Reference Number"
        name="referenceNumber"
        register={register}
        type='number'
        errors={errors}
        className='w-full'
        />
        <SelectInput 
          name="itemId" 
          label="Select the Item"
          register={register}
          className='w-full'
          options={items}
          />
        <TextInput
          label="Enter Quantity of Stock to Transfer"
          name="transferStockQty"
          register={register}
          type='number'
          errors={errors}
          />
          <SelectInput 
          name="givingWarehouseId" 
          label="Select the Warehouse that will give the stock"
          register={register}
          className='w-full'
          options={warehouses}
          />
          <SelectInput 
          name="receivingWarehouseId" 
          label="Select the Warehouse that will receive the stock"
          register={register}
          className='w-full'
          options={warehouses}
          />
          <TextAreaInput
          label="Adjustments Notes"
          name="notes"
          register={register}
          errors={errors}
          />
          
          
        </div>
        <SubmitButton isLoading={loading} title="Adjustments" />
      </form>
    </div>
  );
}
