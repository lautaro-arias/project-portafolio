'use client'
import { ChangeEvent, useState } from "react";
import { DataForm } from "../interface/allInterface";

const UseFormContact = () => {
  const [isOk,setIsOk] = useState (false)
  const [formData, setFormData] = useState<DataForm>({
    name: '',
    lastname:'',
    phone: '' ,
    email: '',
    message:'',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendmail", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsOk(true)
        
        setTimeout(() => {
          setIsOk(false);
        }, 5000);

      } else {
        console.error('Error al enviar datos');
      }
    } catch (error) {
      console.error('Error de red:', error);

    }
  }; 


  return {
    formData,
    isOk,
    handleInputChange,
    handleSubmit,
  }
}
export default UseFormContact;