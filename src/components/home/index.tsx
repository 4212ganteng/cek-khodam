'use client'
import React from 'react'
import { CustomAccordion } from './components/Accordion'
import CustomInput from './components/CustomInput'
import { useKhodam } from './hooks/useKhodam'

const HomePage = () => {
    const { myKhodam, user } = useKhodam()
    console.log(user);
    return (
        <div className=" ">



            <CustomInput />

            <CustomAccordion />


        </div>
    )
}

export default HomePage