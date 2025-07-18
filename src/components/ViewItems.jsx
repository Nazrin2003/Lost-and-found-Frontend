import React from 'react'
import Nav from './Nav'

const ViewItems = () => {
  // Sample items (replace this with fetched data later)
  const items = [
    {
      itemName: "Water Bottle",
      description: "Blue steel water bottle with FISAT logo",
      foundDate: "2025-07-15",
      location: "Library",
      imageUrl: "https://via.placeholder.com/150",
      reporterName: "Anjali",
      contact: "anjali@example.com"
    },
    {
      itemName: "Wallet",
      description: "Black leather wallet with student ID inside",
      foundDate: "2025-07-16",
      location: "Cafeteria",
      imageUrl: "https://via.placeholder.com/150",
      reporterName: "Rahul",
      contact: "rahul@example.com"
    },
    {
      itemName: "Calculator",
      description: "Casio scientific calculator",
      foundDate: "2025-07-17",
      location: "Classroom B3",
      imageUrl: "https://via.placeholder.com/150",
      reporterName: "Neha",
      contact: "neha@example.com"
    }
  ]

  return (
    <div>
      <Nav />

      <div className="container mt-5">
        <h2 className="text-center mb-4"><strong>All Found Items</strong></h2>
        <div className="row g-4">
          {items.map((item, index) => (
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6" key={index}>
              <div className="card mb-3 shadow" style={{ maxWidth: '100%' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.imageUrl || "https://via.placeholder.com/150"}
                      className="img-fluid rounded-start"
                      alt={item.itemName}
                      onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loop if fallback also fails
                        e.target.src = "https://via.placeholder.com/150"; // Fallback dummy image
                      }}
                    />

                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.itemName}</h5>
                      <p className="card-text"><strong>Description:</strong> {item.description}</p>
                      <p className="card-text"><strong>Location:</strong> {item.location}</p>
                      <p className="card-text"><strong>Found On:</strong> {item.foundDate}</p>
                      <p className="card-text"><strong>Reported By:</strong> {item.reporterName}</p>
                      <p className="card-text"><strong>Contact:</strong> {item.contact}</p>
                      <button className="btn btn-primary btn-sm mt-2">Claim Item</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ViewItems
