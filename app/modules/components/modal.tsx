import React from 'react';

const ModalContact = () => {
return (
    <div className="rounded-2xl border border-blue-100 w-96  fixed top-2 right-1  bg-white p-4  shadow-xl sm:p-6 lg:p-8" role="alert">
        <div className="flex items-center gap-4 ">
                <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"  fillRule="evenodd" />
                    </svg>
                </span>
                <p className="font-medium sm:text-lg">Felicidades</p>
            </div>
        <p className="mt-4 text-gray-500">
                Tu solicitud ha sido recibida correctamente <br/>¡Te contactaremos a la brevedad!.
            </p>
    </div>
)
}
export default ModalContact;