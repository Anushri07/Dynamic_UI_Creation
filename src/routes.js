import { BrowserRouter, Routes, Route } from "react-router-dom";
import DynamicForm from './modules/DynamicForm';
import ExcelToJson from './modules/ExcelToJson';
import { lazy, Suspense } from "react";

// If your components are large and you want to lazy load them
// const DynamicForm = lazy(() => import('./modules/DynamicForm'));
// const ExcelToJson = lazy(() => import('./modules/ExcelToJson'));

const Router = (props) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Pages are loading...</div>}>
        <Routes>
          <Route path="/" element={<ExcelToJson />} />
          <Route path="/dynamicForm" element={<DynamicForm />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
