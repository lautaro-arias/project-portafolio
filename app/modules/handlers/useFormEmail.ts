"use client";
import { ChangeEvent, useState } from "react";
import { DataForm } from "../interface/allInterface";
import dotenv from 'dotenv';
dotenv.config();

export default function UseFormPost() {
  const [isOk, setIsOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<DataForm>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = () => {
    setLoading(true);
  };

  const url = process.env.NEXT_PUBLIC_API_URL as string;
  function existUrl (){
    if (!url) {
      throw new Error("URL no configurada");
    }
  }

  async function PostEmail() {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`Error al enviar email: ${response.statusText}`);
      }
  
      responseOk();
    } catch (error) {
      console.error("Error en la solicitud:", error);
      throw error;
    }
  }
  function responseOk() {
    setLoading(false);
    setIsOk(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  
    setTimeout(() => setIsOk(false), 6000)
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      existUrl();
      await PostEmail();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return {
    formData,
    isOk,
    handleInputChange,
    handleSubmit,
    handleClick,
    loading
  };
}
