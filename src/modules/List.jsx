import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./List.css";

const List = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/user/getAll"
        );
        setItems(response.data.Data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/api/user/delete/${id}`);
      setItems(items.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleEditClick = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <h2>List</h2>
      <table className="items-table">
        <thead>
          <tr>
            {items.length > 0 &&
              Object.keys(items[0].user).map((key) => <th key={key}>{key}</th>)}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              {Object.entries(item.user).map(([key, value]) => (
                <td key={key}>{value}</td>
              ))}
              <td>
                <button onClick={() => handleEditClick(item._id)}>Edit</button>
                <button onClick={() => deleteItem(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
