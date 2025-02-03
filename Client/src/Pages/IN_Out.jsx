import React from 'react';
import * as Yup from 'yup';
import FormikFormComponent from '../CommonComponents/FormikFormComponent';
 
const ParentComponent = () => {
  const initialValues = {
    name: '',
    email: '',
    age: '',
    password: '',
    country: '',
    gender: '',
    bio: '',
    interests: [],
    profilePicture: null,
    dob: '',
    time: '',
    favoriteColor: '#000000',
    slider: 50,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    age: Yup.number().required('Age is required').positive('Age must be a positive number').integer('Age must be an integer'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    country: Yup.string().required('Country is required'),
    gender: Yup.string().required('Gender is required'),
    interests: Yup.array().min(1, 'Select at least one interest').required('Interests are required'),
    profilePicture: Yup.mixed().required('Profile picture is required'),
    dob: Yup.date().required('Date of birth is required'),
    time: Yup.string().required('Time is required'),
    favoriteColor: Yup.string().required('Favorite color is required'),
    slider: Yup.number().min(0).max(100).required('Slider value is required'),
  });

  const fields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name', validation: { required: true } },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', validation: { required: true } },
    { name: 'age', label: 'Age', type: 'number', placeholder: 'Enter your age', validation: { required: true } },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password', validation: { required: true } },
    {
      name: 'country',
      label: 'Country',
      type: 'select',
      options: [
        { value: '', label: 'Select your country' },
        { value: 'usa', label: 'USA' },
        { value: 'canada', label: 'Canada' },
      ],
      validation: { required: true },
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'radio',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
      ],
      validation: { required: true },
    },
    {
      name: 'interests',
      label: 'Interests',
      type: 'checkbox',
      options: [
        { value: 'sports', label: 'Sports' },
        { value: 'music', label: 'Music' },
        { value: 'travel', label: 'Travel' },
      ],
      validation: { required: true },
      document: 'Please select one or more interests.',
    },
    { name: 'bio', label: 'Bio', type: 'textarea', placeholder: 'Tell us about yourself', validation: { required: false } },
    { name: 'profilePicture', label: 'Profile Picture', type: 'file', validation: { required: true }, document: 'Upload a profile picture.' },
    { name: 'dob', label: 'Date of Birth', type: 'date', validation: { required: true } },
    { name: 'time', label: 'Preferred Time', type: 'time', validation: { required: true } },
    { name: 'favoriteColor', label: 'Favorite Color', type: 'color', validation: { required: true } },
    { name: 'slider', label: 'Slider (0-100)', type: 'range', validation: { required: true }, document: 'Choose a value between 0 and 100.' },
  ];

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <div className="">
      <h1 className="">Dynamic Form Example</h1>
      <FormikFormComponent
        initialValues={initialValues}
        validationSchema={validationSchema}
        fields={fields}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
export default ParentComponent;
