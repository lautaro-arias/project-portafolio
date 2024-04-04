import { NextRequest ,NextResponse } from "next/server";
import { sendEmail } from "./email";
import { DataForm } from "../../modules/interface/allInterface";

export const POST = async (req:NextRequest,res:NextResponse) => {
    const formData:DataForm = await req.json();
    try {
        await sendEmail(formData)
        console.log("Estoy en router",formData)
        return NextResponse.json({
            status:(200),
            message:"Datos resividos",formData,
        })
    }
    catch (error) {
        console.log("error in route")
        return NextResponse.json({
            status:(400),
            message:"Error al resivir datos"
            
        })
    }
};