import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import axios from 'axios';

const ViewItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/view')
      .then(res => setItems(res.data))
      .catch(err => {
        console.error("Failed to fetch items:", err);
        setItems([]); // fallback
      });
  }, []);

  return (
    <div>
      <Nav />
      <div className="container mt-5">
        <h2 className="text-center mb-4"><strong>All Found Items</strong></h2>
        <div className="row g-4">
          {items.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className="card mb-3 shadow">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.imageUrl || "https://via.placeholder.com/300x200?text=No+Image"}
                      className="img-fluid rounded-start"
                      alt={item.itemName}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/150";
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.itemName}</h5>
                      <p><strong>Description:</strong> {item.description}</p>
                      <p><strong>Location:</strong> {item.location}</p>
                      <p><strong>Found On:</strong> {item.foundDate}</p>
                      <p><strong>Reporter:</strong> {item.reporterName}</p>
                      <p><strong>Contact:</strong> {item.contact}</p>
                      <button className="btn btn-primary btn-sm mt-2">Claim Item</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <p className="text-center text-muted">No items found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewItems;
