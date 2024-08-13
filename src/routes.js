import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DynamicForm from './modules/DynamicForm';
import ExcelToJson from './modules/ExcelToJson';
import { lazy, Suspense } from "react";


const Router = (props) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Pages are loading...</div>}>
        {/* <ErrorBoundary> */}
          <Routes>
            <Route
              path="/"
              element={
                <ExcelToJson/>
              }
            >
              <Route path="/dynamicForm" element={<DynamicForm />} />
            </Route>
          </Routes>
        {/* </ErrorBoundary> */}
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;