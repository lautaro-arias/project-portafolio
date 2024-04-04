import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export async function sendEmail(formData:any): Promise<void> {
    console.log("estoy entrando in email")

    try {
        const config = { 
            host: process.env.MAIL_HOST,
            port: 587,
            auth : { 
                user:process.env.MAIL_USERNAME,
                pass:process.env.MAIL_PASSWORD,
            }
        }
        
        const mailOptions = {
            from:process.env.MAIL_USERNAME,
            to: "ariass00006@gmail.com",
            subject:`${formData.name} ${formData.lastname}`,
            html:` 
            <div> 
                    <div class="card w-96 bg-neutral text-neutral-content border ">
                            <div class="card-body items-center text-center">
                                <h3 class="card-title">Contacto: ${formData.email} / ${formData.phone}</h3>
                                <p>${formData.message}</p>
                            </div>
                    </div>
            </div> 
            ` 
        };

        const transport =  nodemailer.createTransport(config);
        const mail = await transport.sendMail(mailOptions);
        
        console.log("in email mail:", mail )
    } catch (error) {
        throw new Error(`Error al enviar el correo: ${error}`);
    }
}