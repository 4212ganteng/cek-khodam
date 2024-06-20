'use client'
import React from 'react'
import { useKhodam } from '../hooks/useKhodam'

const CustomInput = () => {
    const { setUser, handleSubmit } = useKhodam()
    return (
        <form className="flex mb-24">

            <label htmlFor="simple-search" className="sr-only">Search</label>
            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required
                onChange={(e) => setUser(e.target.value)}
            />

            <button className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}>

                Search
            </button>
        </form>
    )
}

export default CustomInput