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
          {results.length > 0 && (
            <div className="col-12 mt-4">
              <h5>Results:</h5>
              {results.map((item, index) => (
                <div key={index} className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">{item.itemName}</h5>
                    <p className="card-text"><strong>Description:</strong> {item.description}</p>
                    <p className="card-text"><strong>Found Date:</strong> {item.foundDate}</p>
                    <p className="card-text"><strong>Location:</strong> {item.location}</p>
                    <p className="card-text"><strong>Reporter:</strong> {item.reporterName} - {item.contact}</p>
                    {item.imageUrl && <img src={item.imageUrl} alt="Found item" className="img-fluid" style={{ maxHeight: "200px" }} />}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
