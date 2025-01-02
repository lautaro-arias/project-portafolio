"use client";
import { ChangeEvent, useState } from "react";
import { DataForm } from "../interface/allInterface";
import dotenv from 'dotenv';
dotenv.config();

export default function UseFormPost() {
  const [isOk, setIsOk] = useState(false);
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

  const url = process.env.NEXT_PUBLIC_API_URL;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!url) {
      console.error("URL no configurada");
      return;
    }

    e.preventDefault();
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsOk(true);

        setTimeout(() => {
          setIsOk(false);
        }, 5000);
      } else {
        //console.error("Error al enviar datos");
      }
    } catch (error) {
      //console.error("Error de red:", error);
    }
  };

  return {
    formData,
    isOk,
    handleInputChange,
    handleSubmit,
  };
}
