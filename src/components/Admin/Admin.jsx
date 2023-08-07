import './Admin.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "reactstrap";
import { Redirect } from "react-router-dom"; // Add this import
import { Link } from "react-router-dom";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Button,
} from "reactstrap";

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      travelAgents: [],
      selectedImage: null,
    };
  }

  componentDidMount() {
    this.fetchTravelAgents();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  fetchTravelAgents = () => {
    axios
      .get("https://localhost:7078/api/TravelAgent")
      .then((response) => {
        this.setState({
          travelAgents: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  toggleIsApproved = (travelAgentId, isApproved) => {
    const newIsApproved = isApproved === "Pending" ? "Approved" : "Pending";

    axios
      .put(`https://localhost:7078/api/TravelAgent/${travelAgentId}`, {
        IsApproved: newIsApproved,
      })
      .then(() => {
        this.fetchTravelAgents();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  handleImageSelect = (event) => {
    this.setState({
      selectedImage: event.target.files[0],
    });
  };

  uploadImage = () => {
    const formData = new FormData();
    formData.append("image", this.state.selectedImage);

    axios
      .post("https://localhost:7078/api/ImgGallery", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        this.fetchImageGallery(); // Refresh the image gallery after upload
        this.setState({ selectedImage: null }); // Clear the selected image
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
        <div className="container">
            <div className="heading-container">
            <h1>Travel Agents</h1>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>TravelAgentId</th>
                  <th>Agent Name</th>
                  <th>IsApproved</th>
                  <th>Mobile number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.travelAgents.map((agent) => (
                  <tr key={agent.travelAgentId}>
                    <td>{agent.travelAgentId}</td>
                    <td>{agent.agentName}</td>
                    <td>
                      {agent.isApproved === "Approved" ? (
                        <span className="text-success">{agent.isApproved}</span>
                      ) : (
                        <span className="text-warning">{agent.isApproved}</span>
                      )}
                    </td>
                    <td>{agent.mobileNumber}</td>
                    <td>
                      <Button
                        color="info"
                        size="sm"
                        onClick={() =>
                          this.toggleIsApproved(
                            agent.travelAgentId,
                            agent.isApproved
                          )
                        }
                      >
                        Toggle
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="form-group">
              <label htmlFor="image">Upload Image</label>
              <Input
                type="file"
                id="image"
                onChange={this.handleImageSelect}
                accept="image/*"
              />
            </div>
            <Button color="primary" onClick={this.uploadImage}>
              Upload Image
            </Button>
        </div>
    );
  }
}

export default Admin;
