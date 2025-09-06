import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsDownload } from "react-icons/bs";
import pdf from "./Resumee.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css'; 
import 'react-pdf/dist/Page/TextLayer.css';
import worker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
pdfjs.GlobalWorkerOptions.workerSrc = worker;


const Resume = () => {
  const { t } = useTranslation()
  const[wid, setwid]=useState(window.innerWidth);

  const handleResize=()=>{
    setwid(window.innerWidth);
  }

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);

  return (
    <div className='ResumePage'>
      <Document file={pdf} className="resumeview">
          <Page pageNumber= {1} scale={wid<700 ? ( wid>475? 0.7: 0.5): 1}/>
      </Document>

      <a href={pdf} target='_blank' download="Mkamba's Resume">
        <button className='downloadCV' type='button'>
          <h3><BsDownload/>&nbsp; {t('DownloadCV')}</h3>
        </button>
      </a>

    </div>
  )
}

export default Resume
