import React from 'react'
import Nav from './Nav'

const Home = () => {
  const styles = {
    bannerContainer: {
      position: 'relative',
      textAlign: 'center',
      color: 'white',
    },
    bannerImage: {
      width: '100%',
      maxHeight: '400px',
      objectFit: 'cover',
      filter: 'brightness(0.5)',
    },
    bannerText: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontFamily: 'Poppins, sans-serif',
      textShadow: '2px 2px 6px #000',
    },
    heading: {
      fontSize: '3rem',
      fontWeight: 'bold',
    },
    paragraph: {
      fontSize: '1.5rem',
    },
    footer: {
      textAlign: 'center',
      marginTop: '4rem',
      padding: '1rem',
      backgroundColor: '#333',
      color: 'white',
    },
    section: {
      backgroundColor: '#f9fafb',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
    },
    sectionTitle: {
      color: '#2c3e50',
      textAlign: 'center',
      fontSize: '30px',
      marginBottom: '20px',
    },
    sectionText: {
      fontSize: '17px',
      color: '#444',
      lineHeight: '1.6',
      maxWidth: '800px',
      margin: '0 auto 20px auto',
      textAlign: 'center',
    },
    quote: {
      fontSize: '16px',
      color: '#2c3e50',
      marginTop: '30px',
      textAlign: 'center',
      fontStyle: 'italic',
    },
  }

  return (
    <div>
      <Nav />

      {/* Banner */}
      <div style={styles.bannerContainer}>
        <img
          src="https://media.aia.gr/assets/aiaportal/media/root/traveller/lost-and-found/lost-and-found-baggage-athens-international-airport.png"
          alt="Lost and Found"
          style={styles.bannerImage}
        />
        <div style={styles.bannerText}>
          <h1 style={styles.heading}>Welcome to Lost and Found Portal</h1>
          <p style={styles.paragraph}>Easily report and search for lost items.</p>
        </div>
      </div>

      {/* Description Section */}
      <div style={styles.section}>
        <h2
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "20px",
            color: "#dc3545", // 'danger' color
            fontWeight: "bold"
          }}
        >
          <strong>About</strong>
        </h2>


        <p style={styles.sectionText}>
          This platform helps students and staff quickly report found items or search for lost belongings.
          From wallets and ID cards to phones and books — everything matters!
        </p>

        <p style={styles.sectionText}>
          ➤ <strong>Found something?</strong> Add it with a description so the owner can find it.<br />
          ➤ <strong>Lost something?</strong> Search using keywords to check if it's been reported.<br />
          ➤ <strong>Fast & Anonymous:</strong> No login needed — just post and help the community.
        </p>

        <p style={styles.quote}>
          "One campus. One community. Helping each other — one lost item at a time."
        </p>
      </div>

      {/* Feature Cards Section */}
      <div className="container mt-4 mb-5">
        <h2
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "20px",
            color: "#dc3545", // 'danger' color
            fontWeight: "bold"
          }}
        >
          <strong>Quick Action</strong>
        </h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">📌 Report Found Item</h5>
                <p className="card-text">
                  Submit details about any item you found to help its owner retrieve it.
                </p>
                <a href="/add" className="btn btn-primary">Report Now</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">🔍 Search Lost Items</h5>
                <p className="card-text">
                  Look through the database for any item you’ve lost recently.
                </p>
                <a href="/search" className="btn btn-success">Search</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">📋 View All Items</h5>
                <p className="card-text">
                  See a list of all reported found items in one place.
                </p>
                <a href="/view" className="btn btn-dark">View All</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "40px", backgroundColor: "#f8f9fa" }}>
        <h2
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "20px",
            color: "#dc3545", // 'danger' color
            fontWeight: "bold"
          }}
        >
          <strong>Portal Features</strong>
        </h2>


        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {/* Card 1 */}
          <div className="card text-bg-dark" style={{ width: "300px", borderRadius: "10px", overflow: "hidden" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1063/1063347.png"
              className="card-img"
              alt="Easy Reporting"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-img-overlay" style={{ background: "rgba(0, 0, 0, 0.6)" }}>
              <h5 className="card-title">Report Lost Items</h5>
              <p className="card-text">Easily submit details of lost items in seconds.</p>
              <p className="card-text"><small>Last updated 2 mins ago</small></p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card text-bg-dark" style={{ width: "300px", borderRadius: "10px", overflow: "hidden" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpF61fMnjw0IJ8fVN7MjdJyMdgBdKsbUSFg&s"
              className="card-img"
              alt="Search Items"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-img-overlay" style={{ background: "rgba(0, 0, 0, 0.6)" }}>
              <h5 className="card-title">Search Found Items</h5>
              <p className="card-text">Browse or filter through found items posted by others.</p>
              <p className="card-text"><small>Last updated 5 mins ago</small></p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card text-bg-dark" style={{ width: "300px", borderRadius: "10px", overflow: "hidden" }}>
            <img
              src="data:image/jpeg;base64,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"
              className="card-img"
              alt="Secure Contact"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-img-overlay" style={{ background: "rgba(0, 0, 0, 0.6)" }}>
              <h5 className="card-title">Safe Communication</h5>
              <p className="card-text">Only verified users can connect to return items safely.</p>
              <p className="card-text"><small>Last updated 10 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <footer style={styles.footer}>
        <p className="mb-0">&copy; 2025 Lost and Found Portal | FISAT</p>
      </footer>
    </div>
  )
}

export default Home
