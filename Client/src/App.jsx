
import React from 'react';
import { BrowserRouter as Router, useRoutes ,Route,Navigate,Routes} from 'react-router-dom';
import { Layout } from './CommonComponents/VisitorHeader';
import VisitorSearch from './Pages/VisitorSearch';
import VisitorForm from './Pages/VisitorForm';
import ParentComponent from './Pages/IN_Out';
import LoginPage from './Pages/HomePage';
import { ReceptionistDashboard } from './Pages/ReceptionistDashboard';
import { EmployeeDashboard } from './Pages/EmployeeDashboard';
import SubmitVisitorForm from './Pages/SubmitVisitorForm';

 
const routes = [
  { path: '/',  element: <Navigate to="/home" />  },
  { path:'/home' ,element : <LoginPage /> },
  { path:'/Receptionist-dashboard' ,element : <ReceptionistDashboard /> },
  { path:'/Employee-dashboard' ,element : <EmployeeDashboard /> },
  { path:'/Visitor-dashboard' ,element : <SubmitVisitorForm /> },
  { path: 'visitor',  element: <Layout />,
    children: [ 
      { path: 'visitor-search',  element: <VisitorSearch />   } ,
      { path: 'Submit-visitor-form',  element: <VisitorForm />   }, 
      { path: 'test', element :<ParentComponent /> }
      ]
  }
];

function App() {
  const routesElement = useRoutes(routes);   
 console.log('app page');
  return (
     
    <>
        {routesElement}
    </>
  );
}

export default App;
