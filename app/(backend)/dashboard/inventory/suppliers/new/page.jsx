"use client"

import { makePostRequest } from '@/lib/apiRequest';
import SubmitButton from '@/components/FormInput/SubmitButton';
import TextAreaInput from '@/components/FormInput/TextAreaInput';
import TextInput from '@/components/FormInput/TextInput';
import FormHeader from '@/components/dashboard/FormHeader';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function NewSupplier() {
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
    makePostRequest(setLoading,"api/supplier",data,"Supplier",reset);
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title="New supplier" href="/dashboard/inventory/suppliers" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Suppliers Name"
          name="title"
          register={register}
          errors={errors}
          options = {selectOptions}
          className='w-full'
          />
        <TextInput
          label="Suppliers Phone"
          name="phone"
          register={register}
          errors={errors}
          className='w-full'
          />
        <TextInput
          label="Suppliers Email"
          name="email"
          type="email"
          register={register}
          errors={errors}
          className='w-full'
          />
        <TextInput
          label="Suppliers Address"
          name="address"
          register={register}
          errors={errors}
          className='w-full'
          />
        
        <TextInput
          label="Suppliers Contact Person"
          name="contactPerson"
          register={register}
          errors={errors}
          className='w-full'
          />
          <TextInput
          label="Supplier Code"
          name="supplierCode"
          register={register}
          errors={errors}
          className='w-full'
          />
          <TextInput
          label="Supplier TIN"
          name="taxID"
          register={register}
          errors={errors}
          />
          <TextAreaInput
          label="Supplier Payment Terms"
          name="paymentTerms"
          register={register}
          errors={errors}
          />
          <TextAreaInput
          label="Notes"
          name="notes"
          register={register}
          errors={errors}
          />
          
          
        </div>
        <SubmitButton isLoading={loading} title="Supplier" />
      </form>
      {/* Header */}
      {/* Header */}
    </div>
  );
}
