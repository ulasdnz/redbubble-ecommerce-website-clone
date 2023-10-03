"use client"
import React, {useState, useEffect} from 'react'
import fs from "fs"

const language = () => {
    const [language, setLanguage] = useState("turkish")

    useEffect(()=>{

    },[language])
    
  return (
    <div className="relative w-7 h-7 -ml-3 mr-2">
    <div className='cursor-pointer'><svg fill="#000000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5-l</title><path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path><path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path></g></svg></div>
    <div className='absolute top-8 -left-6 text-center z-10 w-20 h-20 bg-white border-2 border-solid border-black'>
        <div className='my-2'>
            
            EN</div>
        <div>TR</div>
    </div>
    </div>
  )
}

export default language