"use client"

import ImageInput from '@/components/FormInput/ImageInput';
import SelectInput from '@/components/FormInput/SelectInput';
import SubmitButton from '@/components/FormInput/SubmitButton';
import TextAreaInput from '@/components/FormInput/TextAreaInput';
import TextInput from '@/components/FormInput/TextInput';
import FormHeader from '@/components/dashboard/FormHeader';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function NewItem() {
  const [imageUrl, setImageUrl] = useState("")
  const categories = [
    {
      label: 'Electronics',
      value: 'gjhrjejfre'
    },
    {
      label: 'Mechanical',
      value: 'gjhrjejfre'
    },
  ]
  const units = [
    {
      label: "Kg",
      value: "ruewytweyy"
    },
    {
      label: "Pcs",
      value: "regfewfjtyer"
    },
  ]
  const brands = [
    {
      label: 'TVS',
      value: 'gjhrjejfre'
    },
    {
      label: 'Shiroro',
      value: 'gjhrjejfre'
    },
    {
      label: 'Honda',
      value: 'gjhrjejfre'
    },
  ]
  const warehouses = [
    {
      label: "Headquarters",
      value: "ruewytweyy"
    },
    {
      label: "Branch",
      value: "regfewfjtyer"
    },
  ]
  const suppliers = [
    {
      label: 'Supplier A',
      value: 'gjhrjejfre'
    },
    {
      label: 'Supplier B',
      value: 'gjhrjejfre'
    },
    {
      label: 'Supplier C',
      value: 'gjhrjejfre'
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
    data.imageUrl = imageUrl;
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3000";
  
    try {
      const response = await fetch(`${baseUrl}/api/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      // Check if the response is JSON
      const responseBody = await response.json();
  
      console.log('Response:', responseBody);
  
      if (response.ok) {
        console.log(response);
        setLoading(false);
        reset();
      } else {
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Item" href="/dashboard/inventory" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Item Title"
          name="title"
          register={register}
          errors={errors}
          className='w-full'
          />
          <SelectInput 
          name="categoryId"
          label="Select the item category"
          register={register}
          className='w-full'
          options={categories}
/>
          <TextInput
          label="Item SKU"
          name="sku"
          register={register}
          errors={errors}
          className='w-full'
          />
          <TextInput
          label="Item Barcode"
          name="barcode"
          register={register}
          errors={errors}
          className='w-full'
          />
          <TextInput
          label="Item Quantity"
          name="qty"
          register={register}
          errors={errors}
          className='w-full'
          />
          <SelectInput 
          name="unitId"
          label="Select the Item Unit"
          register={register}
          className='w-full'
          options={units}
/>
          <SelectInput 
          name="brandId"
          label="Select the Item Brand"
          register={register}
          className='w-full'
          options={brands}
/>
<TextInput
          label="Buying Price"
          name="buyingPrice"
          register={register}
          errors={errors}
          type='number'
          className='w-full'
          />
<TextInput
          label="Selling Price"
          name="sellingPrice"
          register={register}
          errors={errors}
          type='number'
          className='w-full'
          />
          <SelectInput 
          name="supplierId"
          label="Select the Item Supplier"
          register={register}
          className='w-full'
          options={suppliers}
/>
<TextInput
          label="Re-Order Point"
          name="reOrderPoint"
          register={register}
          errors={errors}
          type='number'
          className='w-full'
          />
          <SelectInput 
          name="warehouseId"
          label="Select the Item Warehouse"
          register={register}
          className='w-full'
          options={warehouses}
/>
<TextInput
          label="Item Weight in Kgs"
          name="weight"
          register={register}
          errors={errors}
          type='number'
          className='w-full'
          />
<TextInput
          label="Item Dimensions in cm (e.g 20 x 30 x 45)"
          name="dimensions"
          register={register}
          errors={errors}
          className='w-full'
          />
<TextInput
          label="Item Tax Rate in %"
          name="taxRate"
          type='number'
          register={register}
          errors={errors}
          className='w-full'
          />
<TextAreaInput
          label="Item Description"
          name="description"
          register={register}
          errors={errors}
          />
<TextAreaInput
          label="Item Notes"
          name="notes"
          register={register}
          errors={errors}
          />
          <ImageInput label='Item Image' imageUrl={imageUrl} setImageUrl = {setImageUrl} endpoint="imageUploader"/>
        </div>
        <SubmitButton isLoading={loading} title="Item" />
      </form>
    </div>
  );
}
