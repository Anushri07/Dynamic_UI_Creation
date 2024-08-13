import React from 'react';
import Routes from './routes.js'

function App() {
  const formData = [/*... your form data */];


  return (
    <div>
      <h1>Dynamic Form</h1>
      <Routes />
      {/* <DynamicForm formData={formData} /> */}
    </div>
  );
}


export default App;
