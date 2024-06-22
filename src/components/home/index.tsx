'use client'
import { Accordion } from 'flowbite-react'
import { CustomAccordion } from './components/Accordion'
import CustomInput from './components/CustomInput'
import { useKhodam } from './hooks/useKhodam'

const HomePage = () => {
    const { myKhodam, handleSubmit, setUser } = useKhodam()

    return (
        <div className=" ">



            <CustomInput onchange={(e) => setUser(e.target.value)} handleSubmit={handleSubmit} />

            {myKhodam.name && myKhodam.name != 'Kosong' ? (

                <div className='max-h-fit overflow-y-auto'>

                    <CustomAccordion userName={myKhodam.userName} description={myKhodam.description} name={myKhodam.name} />
                </div>

            ) : myKhodam.name === 'Kosong' ? (
                <Accordion>
                    <Accordion.Panel>

                        <Accordion.Content className="my-10">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                {myKhodam.userName} kamu tidak memiliki khodam
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>

                </Accordion>
            ) : null}


        </div>
    )
}

export default HomePage