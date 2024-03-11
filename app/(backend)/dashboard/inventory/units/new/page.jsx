"use client"

import SubmitButton from '@/components/FormInput/SubmitButton';
import TextAreaInput from '@/components/FormInput/TextAreaInput';
import TextInput from '@/components/FormInput/TextInput';
import FormHeader from '@/components/dashboard/FormHeader';
import { makePostRequest, makePutRequest } from '@/lib/apiRequest';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function NewUnit({initialData={}, isUpdate=false}) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData// Provide default values for your form fields
  });
  
  const [loading, setLoading] = useState(false);
  function redirect() {
    router.push("/dashboard/inventory/units")
  }
  async function onSubmit(data) {
    console.log(data)
    
    if(isUpdate){
      //Update request
makePutRequest(
  setLoading,
  `api/units/${initialData.id}`,
  data,
  "Unit",
  redirect,
  reset
  );
    }else{
      makePostRequest(setLoading,"api/units",data,"Unit",reset)
    }
    
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate?"Update Unit":"New Unit"} href="/dashboard/inventory/units" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
          label="Unit Title"
          name="title"
          register={register}
          errors={errors}
          className='w-full'
          />
          <TextInput
          label="Unit Abbreviation"
          name="abbreviation"
          register={register}
          errors={errors}
          className='w-full'
          />
          
        </div>
        <SubmitButton isLoading={loading} title={isUpdate?"Updated Unit":"New Unit"} />
      </form>
      {/* Header */}
      {/* Header */}
    </div>
  );
}
