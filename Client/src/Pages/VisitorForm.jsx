// import React, { useState } from 'react';
// import { Search } from '@mui/icons-material';
// import InputTypeText from '../CommonComponents/InputFieldFormComponent';
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const VisitorForm = () => {
//   //console.clear();
//   console.log('welcome to submit page kinly add your visiting data.')
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     visitDate: '',
//     purpose: '',
//     host: '',
//     document: null,
//     subscribe: false,
//   });

//   const InitialValue = {
//     //Visitor Perosnla Details
//     VisitorName : '',
//     VisitorContactno :'' ,
//     VisitorEmailId :'' ,
//     ComingFrom :'',
//     Material :'',

//     PurposeofVisit :'',
//     PersonToVisit:'',
//     StartDate :'',
//     EndDate:'',
//     ExpectedTimeToEntry:'',
//     ExpectedTimeToExit : '',// in future you can extend
//     Duration : '', //based on start and end date

//     photo :'',
//     document:'',
//     ValidTill :'',
    
//     VisitingType :'',
//   }

  

//   const validationSchemas = [
//     Yup.object({
//       visitorName: Yup.string().required("Visitor Name is required"),
//       VisitorEmailId: Yup.string().email("Invalid email format").required("Visitor Email is required"),
//       visitorContactNo: Yup.string().required("Visitor Contact No is required"),
//       ComingFrom: Yup.string().required("Visitor Name is required"),
//       Material : Yup.string().required("Visitor Name is required"),
//     }),
//     Yup.object({
//       PurposeofVisit : Yup.string().required("Purpose To Visit is required"),
//       PersonToVisit : Yup.string().required('Person to Meet is Required'),
//       startDate : Yup.string().required("Date and Time of Visit is required"),
//       EndDate : Yup.string().required('End Date is required')
      
    
//     })
//   ];


//   const [step, setStep] = useState(1); // To track the current step

//   const handleChange = (e) => {
//     const { id, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, document: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert('Form submitted!');
//   };

//   const handleReset = () => {
//     setFormData({
//       fullName: '',
//       email: '',
//       phone: '',
//       visitDate: '',
//       purpose: '',
//       host: '',
//       document: null,
//       subscribe: false,
//     });
//     setStep(1);  
//   };

//   const steps = ["Personal info", "Visiting Details", "Final Document"];

 
//   const isPersonalDetailsComplete = formData.fullName && formData.email && formData.phone;
 
//   const isVisitingDetailsComplete = formData.visitDate && formData.purpose && formData.host;

//   return (
//     <div className="container mx-auto my-5">
//       <div className="flex justify-center">
//         <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        
//         <h2 className="text-xl font-bold text-center mb-8 text-primary">Visitor Submission Form</h2>

//           <form onSubmit={handleSubmit} onReset={handleReset}>
//             {/* Step 1: Personal Details */}
//             {step === 1 && (
//               <div className="mb-6 border p-4 rounded-lg">
//                 <div className="bg-[#FF8C00] text-white p-2 rounded-lg mb-4">
//                   <h5 className="text-xl font-bold">Personal Details</h5>
//                 </div>
//                 <div className="space-y-4">
//                   {/* Full Name */}
//                   <div>
//                     <label htmlFor="fullName" className="block text-[#FF8C00]">Full Name</label>
//                     <input
//                       type="text"
//                       id="fullName"
//                       value={formData.fullName}
//                       onChange={handleChange}
//                       className="w-full p-3 border border-[#e0e0e0] rounded-md"
//                       placeholder="Enter your full name"
//                     />
//                   </div>

//                   {/* Email */}
//                   <div>
//                     <label htmlFor="email" className="block text-[#FF8C00]">Email address</label>
//                     <input
//                       type="email"
//                       id="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full p-3 border border-[#e0e0e0] rounded-md"
//                       placeholder="Enter your email"
//                     />
//                   </div>

//                   {/* Phone Number */}
//                   <div>
//                     <label htmlFor="phone" className="block text-[#FF8C00]">Phone Number</label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full p-3 border border-[#e0e0e0] rounded-md"
//                       placeholder="Enter your phone number"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-6">
//                   <button
//                     type="button"
//                     onClick={() => setStep(2)} // Go to next step
//                     disabled={!isPersonalDetailsComplete}
//                     className={`px-4 py-2 text-white rounded-md ${isPersonalDetailsComplete ? 'bg-[#FF8C00]' : 'bg-gray-500 cursor-not-allowed'}`}
//                   >
//                     Next
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Step 2: Visiting Details */}
//             {step === 2 && (
//               <div className="mb-6 border p-4 rounded-lg">
//                 <div className="bg-[#FF8C00] text-white p-2 rounded-lg mb-4">
//                   <h5 className="text-xl font-bold">Visiting Details</h5>
//                 </div>
//                 <div className="space-y-4">
//                   {/* Date of Visit */}
//                   <div>
//                     <label htmlFor="visitDate" className="block text-[#FF8C00]">Date of Visit</label>
//                     <input
//                       type="date"
//                       id="visitDate"
//                       value={formData.visitDate}
//                       onChange={handleChange}
//                       className="w-full p-3 border border-[#e0e0e0] rounded-md"
//                     />
//                   </div>

//                   {/* Purpose of Visit */}
//                   <div>
//                     <label htmlFor="purpose" className="block text-[#FF8C00]">Purpose of Visit</label>
//                     <input
//                       type="text"
//                       id="purpose"
//                       value={formData.purpose}
//                       onChange={handleChange}
//                       className="w-full p-3 border border-[#e0e0e0] rounded-md"
//                       placeholder="Enter purpose of visit"
//                     />
//                   </div>

//                   {/* Host Name */}
//                   <div>
//                     <label htmlFor="host" className="block text-[#FF8C00]">Host Name</label>
//                     <input
//                       type="text"
//                       id="host"
//                       value={formData.host}
//                       onChange={handleChange}
//                       className="w-full p-3 border border-[#e0e0e0] rounded-md"
//                       placeholder="Enter the host's name"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-6">
//                   <button
//                     type="button"
//                     onClick={() => setStep(1)} // Go back to previous step
//                     className="px-4 py-2 text-white bg-gray-500 rounded-md"
//                   >
//                     Back
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setStep(3)} // Go to next step
//                     disabled={!isVisitingDetailsComplete}
//                     className={`px-4 py-2 text-white rounded-md ${isVisitingDetailsComplete ? 'bg-[#FF8C00]' : 'bg-gray-500 cursor-not-allowed'}`}
//                   >
//                     Next
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Step 3: Document Upload */}
//             {step === 3 && (
//               <div className="mb-6 border p-4 rounded-lg">
//                 <div className="bg-[#FF8C00] text-white p-2 rounded-lg mb-4">
//                   <h5 className="text-xl font-bold">Documents</h5>
//                 </div>
//                 <div className="space-y-4">
//                   {/* Document Upload */}
//                   <div>
//                     <label htmlFor="document" className="block text-[#FF8C00]">Upload Document</label>
//                     <input
//                       type="file"
//                       id="document"
//                       onChange={handleFileChange}
//                       className="w-full p-3 border border-[#e0e0e0] rounded-md"
//                     />
//                   </div>

//                   {/* Subscribe Checkbox */}
//                   <div className="flex items-center space-x-2">
//                     <input
//                       type="checkbox"
//                       id="subscribe"
//                       checked={formData.subscribe}
//                       onChange={handleChange}
//                       className="h-4 w-4"
//                     />
//                     <label htmlFor="subscribe" className="text-[#10B981]">Subscribe to our newsletter</label>
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-6">
//                   <button
//                     type="button"
//                     onClick={() => setStep(2)} // Go back to previous step
//                     className="px-4 py-2 text-white bg-gray-500 rounded-md"
//                   >
//                     Back
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 text-white bg-[#FF8C00] rounded-md"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             )}
//           </form>

//           {/* Footer */}
//           {/* <div className="text-center text-[#9e9e9e] mt-8">
//             <p>Thank you for submitting!</p>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisitorForm;


import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormikFormComponent from '../CommonComponents/FormikFormComponent';
 

const VisitorForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    visitDate: '',
    purpose: '',
    host: '',
    document: null,
    subscribe: false,
  });

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      visitDate: '',
      purpose: '',
      host: '',
      document: null,
      subscribe: false,
    });
    setStep(1);  
  };

  const handleSubmit = (values) => {
    console.log(values); // handle form submission logic here
    alert('Form submitted!');
  };

  const steps = ["Personal info", "Visiting Details", "Final Document"];
  const [step, setStep] = useState(1);

  const InitialValue = 
    {
      //Visitor Perosnla Details
      VisitorName : '',
      VisitorContactno :'' ,
      VisitorEmailId :'' ,
      ComingFrom :'',
      Material :'',
    }
    
    const validationSchemas = Yup.object({
      visitorName: Yup.string().required("Visitor Name is required"),
      VisitorEmailId: Yup.string().email("Invalid email format").required("Visitor Email is required"),
      visitorContactNo: Yup.string().required("Visitor Contact No is required"),
      ComingFrom: Yup.string().required("Visitor Name is required"),
      Material : Yup.string().required("Visitor Name is required"),
      VisitingFromDate : Yup.string().required("Visiting Date is required"),
      VisitingToDate : Yup.string().required("Visiting End Date is required"),
    });

  // Fields for each step
  const personalInfoFields = [
    { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name', validation: Yup.string().required('Full Name is required') },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email', validation: Yup.string().email('Invalid email format').required('Email is required') },
    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number', validation: Yup.string().required('Phone Number is required') },
  ];

  return (
    <div className="container mx-auto my-5">
      <div className="flex justify-center">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-center mb-8 text-primary">Visitor Submission Form</h2>

          <div className="mb-6 border p-4 rounded-lg">
                <div className="bg-[#FF8C00] text-white p-2 rounded-lg mb-4">
                  <h5 className="text-xl font-bold">Personal Details</h5>
                </div>
                <FormikFormComponent
                  initialValues={formData}
                  validationSchema={Yup.object({
                    fullName: Yup.string().required("Full Name is required"),
                    email: Yup.string().email("Invalid email format").required("Email is required"),
                    phone: Yup.string().required("Phone Number is required"),
                  })}
                  fields={personalInfoFields}
                  onSubmit={handleSubmit}
                />
                 
              </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorForm;
