"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn} from "next-auth/react"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const router =useRouter()
    const [loading, setLoading] = useState(false);
   console.log(loading);
   async function onSubmit(data) {
    try {
        console.log(data.email, data.password)
        setLoading(true);
        const loginData = await signIn("credentials",{
            ...data,
            redirect: false,
        });

        if (loginData) {
            setLoading(false);
            router.push("/dashboard/home/overview");
        }
    } catch (error) {
        setLoading(false);
        console.error("Network Error:", error);
        toast.error("It seems something is wrong with your mobile network");
    }
}

return (
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-6"
    >
        <div>
            <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Your email
            </label>
            <input
            {...register("email", { required: true})}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="name@company.com"
                required=""
                />
            {errors.email && (
                <small className="text-red-600 text-sm">This field is required</small>
            )}
        </div>
        <div>
            <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Password
            </label>
            <input
                type="password"
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="************"
                {...register("password", { required: true })}
            />
            {errors.password && (
                <small className="text-red-600 text-sm">This field is required</small>
            )}
        </div>
        {loading ? (
            <button
                disabled
                type="button"
                className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-purple-800 inline-flex items-center"
            >
                <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 mr-3 text-white animate-spinner"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                />
                Loading...
            </button>
        ) : (
            <button
                type="submit"
                className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-purple-800 inline-flex items-center"
            >
                Sign In
            </button>
        )}
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <a 
                href="/login"
                className="font-medium text-purple-600 hover:underline dark:text-purple-500"
            >
                Sign Up
            </a>
        </p>
    </form>
);
}
