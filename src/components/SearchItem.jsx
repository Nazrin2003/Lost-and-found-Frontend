import React from 'react';
import Nav from './Nav';

const SearchItem = () => {
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
        <div className="row g-4 px-3 py-3">
          <center><h2 style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "20px",
            color: "#dc3545", // 'danger' color
            fontWeight: "bold"
          }}>SEARCH ITEMS</h2></center>

          <div className="col-12">
            <label htmlFor="item" className="form-label" style={{ fontWeight: '600' }}>
              Enter item name
            </label>
            <input type="text" className="form-control" placeholder="Eg: Water Bottle, Phone..." />
          </div>

          <div className="col-12 text-center">
            <button className="btn btn-success px-4 py-2 mt-3" style={{ fontWeight: 'bold' }}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
