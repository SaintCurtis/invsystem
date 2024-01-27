import { Plus } from 'lucide-react'
import React from 'react'

export default function SubmitButton({isLoading, title}) {
  return (
    <div className="sm:col-span-1">
          {isLoading ? (
             <button
              disabled
              type="button"
              className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
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
              Saving {title} Please wait...
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              <Plus className="w-5 h-5 mr-2" />
              <span>Save {title}</span>
            </button>
          )}
        </div>
  )
}
