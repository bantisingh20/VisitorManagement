
import React from 'react';
import { BrowserRouter as Router, useRoutes ,Route,Navigate,Routes} from 'react-router-dom';
import { Layout } from './CommonComponents/VisitorHeader';
import VisitorSearch from './Pages/VisitorSearch';
import VisitorForm from './Pages/VisitorForm';
import VisitorVideo from './Pages/VisitorVideo';
import QuizPage from './Pages/VisitorQuiz';
import ParentComponent from './Pages/IN_Out';

 
const routes = [
  { path: '/',  element: <Navigate to="/visitor/visitor-search" />  },
  { path: 'visitor',  element: <Layout />,
    children: [ 
      { path: 'visitor-search',  element: <VisitorSearch />   } ,
      { path: 'Submit-visitor-form',  element: <VisitorForm />   },
      { path: 'Visitor-Video', element : <VisitorVideo /> },
      { path: 'Visitor-Video-Quiz-Question', element :<QuizPage /> },
      { path: 'Visitor-Details', element :<QuizPage /> },
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
