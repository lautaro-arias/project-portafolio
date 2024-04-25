import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
const Pdf = () => {
  return (
    <div>
        <object
        data='public/CURRICULUM .pdf' 
        type="application/pdf"
        width="100%"
        height="100%"
        >
        </object>
    </div>
  )
}

export default Pdf