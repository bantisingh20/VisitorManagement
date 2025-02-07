import React,{useState} from 'react';
import FormikFormComponent from '../CommonComponents/FormikFormComponent';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const SubmitVisitorForm = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        visitDate: '', 
        comingfrom : '',
    });

    const handleReset = () => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          visitDate: '',
          comingfrom: '', 
        });
     
    };

    const handleSubmit = (values) => {
        console.log(values); 
        alert('Form submitted!');
    };

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

 
    const validationSchema = Yup.object({
        fullName: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'), 
        // phone : Yup.number().max(9)
        // .typeError("That doesn't look like a phone number")
        // .positive("A phone number can't start with a minus")
        // .integer("A phone number can't include a decimal point") 
        // .required('A phone number is required'),
        phone :Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        comingfrom: Yup.string().required('Coming From is required'), 
        visitDate: Yup.date().required('Date of birth is required'),        
    });

  const FormFields = [
    { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name', validation: { required: true } },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email', validation: { required: true }},
    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number', validation: { required: true } },
    { name: 'visitDate', label: 'Date of Visit', type: 'date', placeholder: 'Select Date of Visit', validation: { required: true } },
    { name: 'comingfrom', label: 'Coming From', type: 'text', placeholder: 'Enter Coming From', validation: { required: true } },
  ];

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Welcome</h2>
      <p className="text-gray-600 text-center mb-6">We're delighted to have you with us. Kindly fill in the following information.</p>
      
      <FormikFormComponent 
       initialValues={formData}
       validationSchema={validationSchema}
       fields={FormFields}
       onSubmit={handleSubmit}
      />

      {/* <form className="space-y-4">
        <div>
          <label className="text-left block text-gray-700 font-semibold">Name</label>
          <input type="text" className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300" placeholder="Enter your name" />
        </div>

        <div>
          <label className="text-left block text-gray-700 font-semibold">Email ID</label>
          <input type="email" className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300" placeholder="Enter your email" />
        </div>

        <div>
          <label className="text-left block text-gray-700 font-semibold">Contact No</label>
          <input type="tel" className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300" placeholder="Enter your contact number" />
        </div>

        <div>
          <label className="text-left block text-gray-700 font-semibold">Coming From</label>
          <input type="text" className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300" placeholder="Enter your company/organization" />
        </div>

        <div>
          <label className="text-left block text-gray-700 font-semibold">Date of Visit</label>
          <input type="date" className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-blue-300" />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Submit
        </button>
      </form> */}
    </div>
  );
};

export default SubmitVisitorForm;