import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const DynamicForm = ({formData}) => {
  const [formValues, setFormValues] = useState({})


  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formValues)
  }


  const renderElement = (element) => {
    switch (element.elementType.toLowerCase()) {
      case 'textbox':
        return (
          <input
            type="text"
            name={element.field}
            required={element.isRequired}
            size={element.size}
            onChange={handleInputChange}
          />
        )
      case 'calendar':
        return (
          <input
            type="date"
            name={element.field}
            required={element.isRequired}
            onChange={handleInputChange}
          />
        )
      case 'radio':
        return (
          <div>
            <input
              type="radio"
              name={element.field}
              required={element.isRequired}
              value="Male"
              onChange={handleInputChange}
            />{' '}
            Male
            <input
              type="radio"
              name={element.field}
              required={element.isRequired}
              value="Female"
              onChange={handleInputChange}
            />{' '}
            Female
          </div>
        )
      case 'button':
        return <button type="submit">Submit</button>
      default:
        return null
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      {formData.map((element, index) => (
        <div key={index}>
          <label>{element.field}</label>
          {renderElement(element)}
        </div>
      ))}
    </form>
  )
}


// Usage
// Assuming the JSON data from Excel is stored in formData variable



// Render the DynamicForm component with formData
const App = () => {
    const formData = [
        {field: 'userName', elementType: 'Textbox', size: 100, isRequired: true},
        {field: 'fullName', elementType: 'Textbox', size: 100, isRequired: true},
        {field: 'dob', elementType: 'Calendar', size: '-', isRequired: true},
        {field: 'gender', elementType: 'Radio', size: 100, isRequired: true},
        {field: 'address', elementType: 'Textbox', size: 500, isRequired: false},
        {field: 'submit', elementType: 'Button', size: '-', isRequired: false},
      ]
  return (
    <div>
      <DynamicForm formData={formData} />
    </div>
  )
}


export default App


ReactDOM.render(<App />, document.getElementById('root'))