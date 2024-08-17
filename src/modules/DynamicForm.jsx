import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Form } from './Form';

const DynamicForm = () => {
   const [formData, setFormData ] = useState([]);

    useEffect(() =>{
      axios.get('http://localhost:9000/api/excel/getFormFields')
        .then((response) => {
          console.log('Data sent successfully:', response.data.Data);
          setFormData(response.data.Data);
        })
        .catch((error) => {
          console.error('Error sending data:', error);
        });
    }, [])
  
  return (
    <div>
        {formData.length > 0 ? (
          <Form formData={formData} action="create" />
        ): (
          <h1>Please Uplaod excel</h1>
        )}
      
    </div>
  )
}


export default DynamicForm