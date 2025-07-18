import React, { useState } from 'react';
import Nav from './Nav';

const SearchItem = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    fetch(`http://localhost:4000/search/${searchQuery}`)
      .then(res => res.json())
      .then(data => {
        setResults(data);
      })
      .catch(error => {
        console.error("Search failed", error);
      });
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpF61fMnjw0IJ8fVN7MjdJyMdgBdKsbUSFg&s")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingBottom: '80px'
      }}
    >
      <Nav />
      <div
        className="container rounded shadow-lg"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '40px',
          marginTop: '40px',
          borderRadius: '15px',
          maxWidth: '700px',
          paddingTop: '60px'
        }}
      >
        <center><h2 style={{ color: "#dc3545", fontWeight: "bold" }}>SEARCH ITEMS</h2></center>

        <div className="row g-4 px-3 py-3">
          <div className="col-12">
            <label htmlFor="item" className="form-label" style={{ fontWeight: '600' }}>
              Enter item name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Eg: Water Bottle, Phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="col-12 text-center">
            <button className="btn btn-success px-4 py-2 mt-3" onClick={handleSearch}>
              Search
            </button>
          </div>

          {/* Display search results */}
         {results.map((item, index) => (
  <div key={index} className="card mb-4 shadow-sm border-0">
    <div className="row g-0">
      <div className="col-md-4 d-flex align-items-center justify-content-center p-2">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt="Found item"
            className="img-fluid rounded"
            style={{ maxHeight: "180px", maxWidth: "100%", objectFit: "cover" }}
          />
        ) : (
          <div className="text-muted">No Image</div>
        )}
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title fw-bold text-primary">{item.itemName}</h5>
          <p className="card-text mb-1"><strong>Description:</strong> {item.description}</p>
          <p className="card-text mb-1"><strong>Found Date:</strong> {item.foundDate}</p>
          <p className="card-text mb-1"><strong>Location:</strong> {item.location}</p>
          <p className="card-text mb-2"><strong>Reporter:</strong> {item.reporterName} - {item.contact}</p>
          <button className="btn btn-outline-success btn-sm">Claim Item</button>
        </div>
      </div>
    </div>
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default SearchItem;
