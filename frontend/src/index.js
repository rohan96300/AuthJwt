import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/bootstrap.custom.css'
import App from './App';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index={true} path='/' element={<HomeScreen />} />
    <Route path='/signin' element={<SignInScreen />} />
  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
