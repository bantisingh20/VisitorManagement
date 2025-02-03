import React, { useState ,useRef} from 'react';
import {  Field,  ErrorMessage } from 'formik';

const InputTypeText = ({label,type,id,name,placeholder,star}) =>{
    return(
        <>
         <label className="block text-left text-sm font-semibold mb-1" htmlFor="visitorName">
            {label} {star &&<span className="text-red-500">*</span> }
          </label>
            <Field type={type} id={id} name={name}
              className="block w-full p-2 border border-gray-300 rounded-md"
              placeholder={placeholder}
            />
            <ErrorMessage name={name} component="div" className=" font-bold text-red-500 text-xs mt-1" />
        </>
    );
}

const InputTypeSelect = ({label,type,id,name,placeholder}) =>{
  return(
      <>
       <label className="block text-sm font-semibold mb-1" htmlFor="visitorName">
          {label} <span className="text-red-500">*</span>
        </label>
          <Field  as="select" id={id} name={name}
            className="block w-full p-2 border border-gray-300 rounded-md"
            placeholder={placeholder}
          />
          <ErrorMessage name={name} component="div" className=" font-bold text-red-500 text-xs mt-1" />
      </>
  );
}
export default InputTypeText;