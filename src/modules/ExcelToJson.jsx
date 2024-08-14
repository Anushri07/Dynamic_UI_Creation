import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import axios from 'axios';


const ExcelToJson = () => {
  const [jsonData, setJsonData] = useState(null);


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(firstSheet);
      setJsonData(json);
    };
    reader.readAsArrayBuffer(file);
  };


  const downloadJsonFile = () => {
    const jsonBlob = new Blob([JSON.stringify(jsonData, null, 2)], {
      type: 'application/json',
    });
    saveAs(jsonBlob, 'data.json');
  };


  const sendToBackend = () => {
    axios.post('http://localhost:9000/api/user/upload-json', jsonData)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };


  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      {jsonData && (
        <div>
          {/* <pre>{JSON.stringify(jsonData, null, 2)}</pre> */}
          <button onClick={downloadJsonFile}>Download JSON</button>
          <button onClick={sendToBackend}>Send to Backend</button>
        </div>
      )}
    </div>
  );
};


export default ExcelToJson;


