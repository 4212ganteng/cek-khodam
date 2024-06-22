'use client'

interface CustominputProps {
    onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomInput: React.FC<CustominputProps> = ({ onchange, handleSubmit }) => {

    return (
        <form className="text-center ">
            <div className="mb-4">

                <label htmlFor="simple-search" className="sr-only">Search</label>
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan nama Kamu..." required
                    onChange={onchange}
                />
            </div>

            <div>


                <button className="py-2.5 px-4 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}>

                    Cek Khodam
                </button>
            </div>
        </form>
    )
}

export default CustomInput