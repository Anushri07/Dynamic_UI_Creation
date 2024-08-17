// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const EditUserModal = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [formData, setFormData ] = useState([]);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:9000/api/user/${id}`);
//         const data = response.data.Data.user;
//         setUserData({
//          ...data,
//         });
//         setLoading(false);
//       } catch (error) {
//         setError('Failed to fetch user data');
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [id]);

//   useEffect(() =>{
//     axios.get('http://localhost:9000/api/excel/getFormFields')
//       .then((response) => {
//         console.log('Data sent successfully:', response.data.Data);
//         setFormData(response.data.Data);
//       })
//       .catch((error) => {
//         console.error('Error sending data:', error);
//       });
//   }, [])

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setUserData(prevData => ({
//       ...prevData,
//       [name]: type === 'radio' ? (checked ? value : prevData[name]) : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:9000/api/user/edit/${id}`, userData);
//       navigate('/list'); // Redirect to the list page after update
//     } catch (error) {
//       setError('Error updating user data');
//     }
//   };

//   const renderElement = (element) => {
//     switch (element.type.toLowerCase()) {
//       case 'textbox':
//         return (
//           <input
//             type="text"
//             name={element.field}
//             required={element.isRequired}
//             size={element.size}
//             value={userData[element.field] || ''}
//             onChange={handleInputChange}
//           />
//         );
//       case 'calendar':
//         return (
//           <input
//             type="date"
//             name={element.field}
//             required={element.isRequired}
//             value={userData[element.field] || ''}
//             onChange={handleInputChange}
//           />
//         );
//       case 'radio':
//         return (
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 name={element.field}
//                 required={element.isRequired}
//                 value="Male"
//                 checked={userData[element.field] === 'Male'}
//                 onChange={handleInputChange}
//               />{' '}
//               Male
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name={element.field}
//                 required={element.isRequired}
//                 value="Female"
//                 checked={userData[element.field] === 'Female'}
//                 onChange={handleInputChange}
//               />{' '}
//               Female
//             </label>
//           </div>
//         );
//       case 'button':
//         return <button type="submit">Submit</button>;
//       default:
//         return null;
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="modal">
//       <form onSubmit={handleSubmit}>
//         {formData.map((element, index) => (
//           <div key={index}>
//             <label>{element.field}</label>
//             {renderElement(element)}
//           </div>
//         ))}
//       </form>
//     </div>
//   );
// };

// export default EditUserModal;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EditUserModal.css'; // Import the CSS file for styling

const EditUserModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData ] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/api/user/${id}`);
        const data = response.data.Data.user;
        setUserData({
          ...data,
        });
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  useEffect(() => {
    axios.get('http://localhost:9000/api/excel/getFormFields')
      .then((response) => {
        setFormData(response.data.Data);
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  }, [])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: type === 'radio' ? (checked ? value : prevData[name]) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9000/api/user/edit/${id}`, userData);
      navigate('/list'); // Redirect to the list page after update
    } catch (error) {
      setError('Error updating user data');
    }
  };

  const renderElement = (element) => {
    switch (element.type.toLowerCase()) {
      case 'textbox':
        return (
          <input
            type="text"
            name={element.field}
            required={element.isRequired}
            size={element.size}
            value={userData[element.field] || ''}
            onChange={handleInputChange}
            className="form-input"
          />
        );
      case 'calendar':
        return (
          <input
            type="date"
            name={element.field}
            required={element.isRequired}
            value={userData[element.field] || ''}
            onChange={handleInputChange}
            className="form-input"
          />
        );
      case 'radio':
        return (
          <div className="form-radio-group">
            <label>
              <input
                type="radio"
                name={element.field}
                required={element.isRequired}
                value="Male"
                checked={userData[element.field] === 'Male'}
                onChange={handleInputChange}
              />{' '}
              Male
            </label>
            <label>
              <input
                type="radio"
                name={element.field}
                required={element.isRequired}
                value="Female"
                checked={userData[element.field] === 'Female'}
                onChange={handleInputChange}
              />{' '}
              Female
            </label>
          </div>
        );
      case 'button':
        return <button type="submit" className="form-submit-button">Submit</button>;
      default:
        return null;
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="form">
        {formData.map((element, index) => (
          <div key={index} className="form-group">
            <label className="form-label">{element.field}</label>
            {renderElement(element)}
          </div>
        ))}
      </form>
    </div>
  );
};

export default EditUserModal;
