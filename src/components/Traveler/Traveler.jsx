import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Traveler.css";

function Traveler() {
  const navigate = useNavigate();

  const [travelDetails, setTravelDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [priceRange, setPriceRange] = useState([0, Infinity]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://localhost:7078/api/TourPackage")
      .then((response) => {
        console.log(response.data);
        const updatedTravelDetails = response.data.map((travel) => ({
          planTitle: travel.planTitle,
          planDescription: travel.planDescription,
          planPrice: travel.planPrice,
          planImage: travel.planImage,
          location: travel.location,
          country: travel.country,
          benefits: travel.benefits,
        }));
        setTravelDetails(updatedTravelDetails);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Failed to fetch travel details");
      });
  };

  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };

  const handlePriceChange = (e) => {
    const minPrice = parseInt(e.target.value.split(",")[0]);
    const maxPrice = parseInt(e.target.value.split(",")[1]);

    setPriceRange([minPrice, maxPrice]);
  };

  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem("token");
    // Redirect to the login page
    navigate("/login");
  };

  const filteredTravelDetails = travelDetails.filter((travel) => {
    let price = 0;

    // Handling different formats of planPrice
    if (typeof travel.planPrice === "number") {
      price = travel.planPrice; // Assuming planPrice is already in a numeric format (e.g., 20000)
    } else if (typeof travel.planPrice === "string") {
      const numericPrice = parseInt(travel.planPrice.replace(/[^0-9]/g, ""));
      price = isNaN(numericPrice) ? 0 : numericPrice;
    }

    const isPriceInRange = price >= priceRange[0] && price <= priceRange[1];

    if (filterStatus === "all") {
      return isPriceInRange;
    } else {
      return travel.planTitle.includes(filterStatus) && isPriceInRange;
    }
  });

  return (
    <div className="traveler-container" id="background">
      <div className="container mt-4">
        <div className="heading-container">
          <h1>Delve into Exquisite Journeys</h1>
        </div>

        <div className="form-groupp mt-4">
          <label className="mr-2">Explore by Interest:</label>
          <select
            className="form-controll"
            value={filterStatus}
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Adventure Tours">Adventure Tours</option>
            <option value="Wildlife and Safari Tours">
              Wildlife and Safari Tours
            </option>
            <option value="Beach and Island Tours">
              Beach and Island Tours
            </option>
            <option value="Culinary Tours">Culinary Tours</option>
            <option value="Cruise Tours">Cruise Tours</option>
            <option value="Honeymoon Tours">Honeymoon Tours</option>
            <option value="Solo Travel Tours">Solo Travel Tours</option>
          </select>
        </div>

        <div className="form-groupp">
          <label className="mr-2">Filter by Price Range:</label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="20000"
            step="1000"
            value={`${priceRange[0]},${priceRange[1]}`}
            onChange={(e) => handlePriceChange(e)}
          />
          <span className="price-range-label">
            ₹{priceRange[0]} - ₹
            {priceRange[1] === Infinity ? "∞" : priceRange[1]}
          </span>
        </div>

        <div className="row mt-4">
          {filteredTravelDetails.map((travel) => (
            <div className="col-md-4 mb-4" key={travel.id}>
              <div className="cardss">
                <div className="cardss-body">
                  <div className="img-containerr">
                    {travel.planImage && (
                      <img
                        src={travel.planImage}
                        alt={travel.planTitle}
                        className="img-fluid"
                      />
                    )}
                  </div>
                  <h5 className="cardss-title">{travel.planTitle}</h5>
                  <p className="cardss-text">
                    Description: {travel.planDescription}
                  </p>
                  <p className="cardss-text">Location: {travel.location}</p>
                  <p className="cardss-text">Country: {travel.country}</p>
                  <p className="cardss-text">Benefits: {travel.benefits}</p>
                  <p className="cardss-text">Price: ₹{travel.planPrice}</p>
                  <button
                    className="btnnn btnnn-danger btn-block mt-3"
                    onClick={() => navigate("/bill")}
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {errorMessage && (
          <div className="alert alert-danger mt-4" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default Traveler;
