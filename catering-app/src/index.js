import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DecoreApp from './DecoreApp';
import LoginComp from './component/LoginComp';
import RegisterComp from './component/RegisterComp';
import AccountHome from './component/Accounts/AccountHome';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

<React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route index element={<App/>} />
        <Route path="/" element={<App />} />
        <Route path="/caterers" element={<App />} />
        <Route path="/decor" element={<DecoreApp />} />
        <Route path="/login" element={<LoginComp />} />
        <Route path="/register" element={<RegisterComp />} />
        <Route path="/account" element={<AccountHome />} />
      </Routes>
    </BrowserRouter>

</React.StrictMode>
);

reportWebVitals();
