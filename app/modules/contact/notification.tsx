import React from 'react'

export default function Notification() {
    return (
        <div className="flex flex-row mb-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50">
            <div
                className="succsess-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-gray-950 px-[10px]"
            >
                <div className="flex gap-2">
                    <div className="text-[#2b9875] border border-white bg-gray-950 backdrop-blur-xl p-1 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m4.5 12.75 6 6 9-13.5"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <p className="text-white">Email enviado con exito:)</p>
                        <p className="text-gray-500">Gracias por su tiempo</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
