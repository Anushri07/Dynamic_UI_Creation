// import axios from 'axios';
// import { useState } from 'react';
// import PropTypes from 'prop-types';

// export const Form = ({ formData }) => {
//   const [formValues, setFormValues] = useState({});
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleOnSubmit();
//   };

//   const handleOnSubmit = () => {
//     axios.post('http://localhost:9000/api/user/create', formValues)
//       .then((response) => {
//         setFormValues({});
//         setError('');
//       })
//       .catch((error) => {
//         console.error('Error sending data:', error);
//         setError('Error sending data. Please try again.');
//       });
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
//             onChange={handleInputChange}
//             value={formValues[element.field] || ''}
//           />
//         );
//       case 'calendar':
//         return (
//           <input
//             type="date"
//             name={element.field}
//             required={element.isRequired}
//             onChange={handleInputChange}
//             value={formValues[element.field] || ''}
//           />
//         );
//       case 'radio':
//         return (
//           <div>
//             <input
//               type="radio"
//               name={element.field}
//               required={element.isRequired}
//               value="Male"
//               onChange={handleInputChange}
//               checked={formValues[element.field] === 'Male'}
//             />{' '}
//             Male
//             <input
//               type="radio"
//               name={element.field}
//               required={element.isRequired}
//               value="Female"
//               onChange={handleInputChange}
//               checked={formValues[element.field] === 'Female'}
//             />{' '}
//             Female
//           </div>
//         );
//       case 'button':
//         return <button type="submit">Submit</button>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {formData.map((element, index) => (
//           <div key={index}>
//             <label>{element.field}</label>
//             {renderElement(element)}
//           </div>
//         ))}
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </form>
//     </div>
//   );
// };

// Form.propTypes = {
//   formData: PropTypes.arrayOf(
//     PropTypes.shape({
//       type: PropTypes.string.isRequired,
//       field: PropTypes.string.isRequired,
//       isRequired: PropTypes.bool,
//       size: PropTypes.number,
//     })
//   ).isRequired,
//   action: PropTypes.string.isRequired,
// };

import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.css'; // Import the CSS file for styling

export const Form = ({ formData }) => {
  const [formValues, setFormValues] = useState({});
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit();
  };

  const handleOnSubmit = () => {
    axios.post('http://localhost:9000/api/user/create', formValues)
      .then((response) => {
        setFormValues({});
        setError('');
      })
      .catch((error) => {
        console.error('Error sending data:', error);
        setError('Error sending data. Please try again.');
      });
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
            onChange={handleInputChange}
            value={formValues[element.field] || ''}
            className="form-input"
          />
        );
      case 'calendar':
        return (
          <input
            type="date"
            name={element.field}
            required={element.isRequired}
            onChange={handleInputChange}
            value={formValues[element.field] || ''}
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
                onChange={handleInputChange}
                checked={formValues[element.field] === 'Male'}
              />{' '}
              Male
            </label>
            <label>
              <input
                type="radio"
                name={element.field}
                required={element.isRequired}
                value="Female"
                onChange={handleInputChange}
                checked={formValues[element.field] === 'Female'}
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

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        {formData.map((element, index) => (
          <div key={index} className="form-group">
            <label className="form-label">{element.field}</label>
            {renderElement(element)}
          </div>
        ))}
        {error && <p className="form-error">{error}</p>}
      </form>
    </div>
  );
};

Form.propTypes = {
  formData: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
      isRequired: PropTypes.bool,
      size: PropTypes.number,
    })
  ).isRequired,
};
