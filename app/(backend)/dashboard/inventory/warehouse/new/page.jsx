"use client"
import SubmitButton from '@/components/FormInput/SubmitButton';
import TextInput from '@/components/FormInput/TextInput';
import FormHeader from '@/components/dashboard/FormHeader';
import { makePostRequest, makePutRequest } from '@/lib/apiRequest';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function NewWarehouse({ initialData = {}, isUpdate = false }) {
  const selectOptions = [
    {
      label: "Headquarters",
      value: "headquarters"
    },
    {
      label: "Branch",
      value: "branch"
    },
  ];
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  const [loading, setLoading] = useState(false);

  function redirect() {
    router.replace("/dashboard/inventory/warehouse");
  }

  async function onSubmit(data) {
    console.log(data);
    if (isUpdate) {
      // Update request
      makePutRequest(
        setLoading,
        `api/warehouse/${initialData.id}`,
        data,
        "Warehouse",
        redirect,
        reset
      );
    } else {
      makePostRequest(setLoading, "api/warehouse", data, "Warehouse", reset);
    }
  }

  return (
    <div>
      {/* Header */}
      <FormHeader
        title={isUpdate ? "Update Warehouse" : "New Warehouse"}
        href="/dashboard/inventory/warehouse"
      />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Warehouse Title"
            name="title"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="Warehouse Location"
            name="location"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="Warehouse Description"
            name="description"
            register={register}
            errors={errors}
            className='w-full'
          />
          <div className="relative">
            <label htmlFor="warehouseType" className="block text-sm font-medium text-gray-700">
              Warehouse Type
            </label>
            <select
              id="warehouseType"
              {...register("warehouseType")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              {selectOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <SubmitButton isLoading={loading} title={isUpdate ? "Updated Warehouse" : "New Warehouse"} />
      </form>
    </div>
  );
}
