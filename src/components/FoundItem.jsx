import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

const FoundItems = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    foundDate: '',
    location: '',
    imageUrl: '',
    reporterName: '',
    contact: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/add', formData);
      alert('Item submitted successfully!');
      console.log(res.data)
      setFormData({
        itemName: '',
        description: '',
        foundDate: '',
        location: '',
        imageUrl: '',
        reporterName: '',
        contact: ''
      });
    } catch (err) {
      console.error('Error submitting item:', err)
      alert('Failed to submit item.')
    }
  }

  return (
    <div
      style={{
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3DMX0zgZRmEmQlOADqSd3ZBVNTivrtcaM8Q&s")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        fontFamily: 'Segoe UI, sans-serif'
      }}
    >
      <Nav />
      <div
        className="container mt-5"
        style={{
          background: 'rgba(255, 255, 255, 0.85)',
          borderRadius: '16px',
          padding: '30px',
          maxWidth: '700px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h2 className="mb-4 text-center text-danger">REPORT A FOUND ITEM</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Item Name</label>
            <input type="text" className="form-control" name="itemName" value={formData.itemName} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea className="form-control" rows="3" name="description" value={formData.description} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Found Date</label>
            <input type="date" className="form-control" name="foundDate" value={formData.foundDate} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Location</label>
            <input type="text" className="form-control" name="location" value={formData.location} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Image URL (optional)</label>
            <input type="file" className="form-control" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Your Name</label>
            <input type="text" className="form-control" name="reporterName" value={formData.reporterName} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Contact Info</label>
            <input type="text" className="form-control" name="contact" value={formData.contact} onChange={handleChange} required />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success px-4 py-2">Submit Item</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FoundItems;
