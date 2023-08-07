import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TravelAgent.css";

function TravelAgent() {
  const [travelDetails, setTravelDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [newTravelDetail, setNewTravelDetail] = useState({
    planTitle: "",
    planDescription: "",
    location: "",
    country: "",
    planImage: "",
    planPrice: "",
    benefits: "",
  });
  //   const [travelAgents, setTravelAgents] = useState([]);
  //   const [newTravelAgent, setNewTravelAgent] = useState({
  //     AgentName: '',
  //     IsApproved: false,
  //     MobileNumber: '',
  //     AgentImage: ''
  //   });

  useEffect(() => {
    fetchTravelDetails();
    //fetchTravelAgents();
  }, []);

  const fetchTravelDetails = () => {
    axios
      .get("https://localhost:7078/api/TourPackage")
      .then((response) => {
        console.log(response.data);
        setTravelDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Failed to fetch travel details");
      });
  };

  const addTravelDetail = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('planImage', newTravelDetail.planImage);
    formData.append('planTitle', newTravelDetail.planTitle);
    formData.append('planDescription', newTravelDetail.planDescription);
    formData.append('planPrice', newTravelDetail.planPrice);
    formData.append('location', newTravelDetail.location);
    formData.append('country', newTravelDetail.country);
    formData.append('benefits', newTravelDetail.benefits);

    axios
      .post("https://localhost:7078/api/TourPackage", newTravelDetail)
      .then((res) => {
        console.log(res);
        setNewTravelDetail({
          planTitle: "",
          planDescription: "",
          planImage: "", // Add planImage property
          planPrice: "",
          location: "",
          country: "",
          benefits: ""
        });
        fetchTravelDetails();
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Failed to add travel detail");
      });
  };

  const editTravelDetail = (planId, updatedDetail) => {
    axios
      .put(
        `https://localhost:7078/api/TourPackage/${planId}`,
        updatedDetail
      )
      .then((res) => {
        console.log(res);
        fetchTravelDetails();
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Failed to update travel detail");
      });
  };

  //   const fetchTravelAgents = () => {
  //     axios
  //       .get('https://localhost:7045/api/TravelAgent')
  //       .then(response => {
  //         console.log(response.data);
  //         setTravelAgents(response.data);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //         setErrorMessage('Failed to fetch travel agents');
  //       });
  //   };

  return (
    <div className="container">
        <div className="heading-container">
      <h1>Crafting Unforgettable Adventures: Enrich Tour Packages with this Form</h1>
      </div>
      <div>
        <form onSubmit={addTravelDetail}>
          <div className="form-group">
            <label htmlFor="planTitle">Plan Title</label>
            <input
              type="text"
              className="form-control"
              id="planTitle"
              value={newTravelDetail.planTitle}
              onChange={(e) =>
                setNewTravelDetail({
                  ...newTravelDetail,
                  planTitle: e.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="planDescription">Plan Description</label>
            <textarea
              className="form-control"
              id="planDescription"
              value={newTravelDetail.planDescription}
              onChange={(e) =>
                setNewTravelDetail({
                  ...newTravelDetail,
                  planDescription: e.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              value={newTravelDetail.location}
              onChange={(e) =>
                setNewTravelDetail({
                  ...newTravelDetail,
                  location: e.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              className="form-control"
              id="country"
              value={newTravelDetail.country}
              onChange={(e) =>
                setNewTravelDetail({
                  ...newTravelDetail,
                  country: e.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="planImage">Plan Image URL</label>
            <input
              type="text"
              className="form-control"
              id="planImage"
              value={newTravelDetail.planImage}
              onChange={(e) =>
                setNewTravelDetail({
                  ...newTravelDetail,
                  planImage: e.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="planPrice">Plan Price</label>
            <input
              type="text"
              className="form-control"
              id="planPrice"
              value={newTravelDetail.planPrice}
              onChange={(e) =>
                setNewTravelDetail({
                  ...newTravelDetail,
                  planPrice: e.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="benefits">Additional Benefits</label>
            <input
              type="text"
              className="form-control"
              id="benefits"
              value={newTravelDetail.benefits}
              onChange={(e) =>
                setNewTravelDetail({
                  ...newTravelDetail,
                  benefits: e.target.value,
                })
              }
            />
          </div>
          <button type="submit" className="btnn btn-primary">
            Add Travel Detail
          </button>
        </form>
      </div>
      <div className="row">
        {travelDetails.map((travel) => (
          <div className="col-md-4 mb-4" key={travel.id}>
            <div className="cards">
              <div className="cards-body">
              <div className="img-container">
              {travel.planImage && (
                  <img
                    src={travel.planImage}
                    alt={travel.planTitle}
                    className="img-fluid"
                  />
                )}
                </div>
                <h5 className="cards-title">{travel.planTitle}</h5>
                <p className="cards-text">{travel.planDescription}</p>
                <p className="cards-text">Location: {travel.location}</p>
                <p className="cards-text">Country: {travel.country}</p>
                <p className="cards-text">Benefits: {travel.benefits}</p>
                <p className="cards-text">Price: {travel.planPrice}</p>
                <button
                  className="btnn btnn-success btn-sm mr-2"
                  onClick={() =>
                    editTravelDetail(travel.id, {
                      ...travel,
                      planTitle: "Updated Title",
                    })
                  }
                >
                  Edit Title
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelAgent;