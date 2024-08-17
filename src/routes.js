import { BrowserRouter, Routes, Route } from "react-router-dom";
import DynamicForm from './modules/DynamicForm';
import ExcelToJson from './modules/ExcelToJson';
import { Suspense } from "react";
import Navbar from "./modules/NavBar";
import List from "./modules/List";
import EditUserModal from "./modules/EditUserModal";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Pages are loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<ExcelToJson />} />
          <Route path="/dynamicForm" element={<DynamicForm />} />
          <Route path="/list" element={<List />} />
          <Route path="/edit/:id" element={<EditUserModal/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
