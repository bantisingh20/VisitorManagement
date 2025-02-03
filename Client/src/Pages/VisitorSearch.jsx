import React, { useState } from 'react';
import { Button, Box, Card, Typography, CircularProgress } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import { Search } from '@mui/icons-material';
import InputTypeText from '../CommonComponents/InputFieldFormComponent';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const VisitorSearch = () => {
  const navigate = useNavigate();
  const [visitorDetails, setVisitorDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isNewVisitor, setIsNewVisitor] = useState(false);

  const handleSearch = async (values) => {
    console.log(values);
    setLoading(true);
    setTimeout(() => {
      if (values.ContactNo === '1234567890') {
        setVisitorDetails('click here');
        setIsNewVisitor(false);
      } else {
        setVisitorDetails(null);
        setIsNewVisitor(true);
      }
      setLoading(false);
    }, 1000);
  };

  const handleCreateNewVisitor = () => {
    navigate('/visitor/Submit-visitor-form')
    console.log('Creating new visitor with number:');
  };

  const initialValues = { 
    ContactNo: '', 
  };

  const validationSchema = Yup.object({ 
    ContactNo: Yup.string()
      .matches(/^\d{10}$/, 'Contact number must be 10 digits')
      .required('Contact No is required'),
  });

  return (
    <>
      <div className="flex items-center justify-center py-8">
        <div className="w-full sm:w-96 bg-gradient-to-r from-gray-50 via-gray-200 to-gray-100 p-6 rounded-lg shadow-lg">

          {/* Header Section */}
          <div className="bg-gradient-to-r from-green-400 via-skyblue-400 to-green-400 p-4 rounded-t-lg">
            <h5 
              className="text-center bg-clip-text bg-gradient-to-r from-green-400 via-skyblue-400 to-green-400 font-semibold text-xl">
              Ronch Polymer Brindavan Beverages
            </h5>
          </div>

          {/* Formik Form */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSearch}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="space-y-6">
                  {/* Contact Number Input */}
                  <div className="mb-4">
                    <InputTypeText 
                      type="tel" 
                      placeholder="Enter Your Contact No" 
                      label="Enter Your Contact No." 
                      id="ContactNo" 
                      name="ContactNo" 
                    />
                  </div>

                  {/* Search Button */}
                  <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit" 
                    disabled={loading} 
                    className="w-full py-2 bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Search className="mr-2" /> Search
                  </Button>
                </div>
              </Form>
            )}
          </Formik>

          {/* Loading Indicator */}
          {loading && (
            <Box className="flex justify-center mt-4">
              <CircularProgress />
            </Box>
          )}

          {/* Visitor Details or New Visitor Card */}
          {visitorDetails && !isNewVisitor ? (
            <Card className="mt-6 p-4 shadow-md rounded-md">
              <Button
                variant="contained"
                color="primary"
                className="mt-4 w-full bg-sky-500 hover:bg-sky-600 text-white"
                onClick={() => console.log('Renew Card')}
              >
                Click here to View
              </Button>
            </Card>
          ) : isNewVisitor ? (
            <Card className="mt-6 p-4 shadow-md rounded-md">
              <Typography variant="h6" className="font-semibold text-gray-800">New Visitor</Typography>
              
              <Button
                variant="contained"
                color="secondary"
                className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white"
                onClick={handleCreateNewVisitor}
              >
                Create New Card
              </Button>
            </Card>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default VisitorSearch;
