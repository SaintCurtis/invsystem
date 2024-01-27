"use client"

import SelectInput from '@/components/FormInput/SelectInput';
import SubmitButton from '@/components/FormInput/SubmitButton';
import TextAreaInput from '@/components/FormInput/TextAreaInput';
import TextInput from '@/components/FormInput/TextInput';
import FormHeader from '@/components/dashboard/FormHeader';
import { makePostRequest } from '@/lib/apiRequest';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function NewWarehouse() {
  const selectOptions = [
    {
      label: "Headquarters",
      value: "headquarters"
    },
    {
      label: "Branch",
      value: "branch"
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
   makePostRequest(setLoading,"api/warehouse",data,"Warehouse",reset)
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Warehouse" href="/dashboard/inventory" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
<SelectInput 
name="type"
label="Select the warehouse type"
register={register} className='w-full'
options={selectOptions}
/>
        <TextInput
          label="Warehouse Title"
          name="title"
          register={register}
          errors={errors}
          options = {selectOptions}
          className='w-full'
          />
          <TextInput
          label="Warehouse Location"
          name="location"
          register={register}
          errors={errors}
          />
          <TextAreaInput
          label="Warehouse Description"
          name="description"
          register={register}
          errors={errors}
          />
          
          
        </div>
        <SubmitButton isLoading={loading} title="Warehouse" />
      </form>
      {/* Header */}
      {/* Header */}
    </div>
  );
}
