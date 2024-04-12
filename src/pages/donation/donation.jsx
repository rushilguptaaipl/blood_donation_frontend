import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import swal from "sweetalert";
import axios from "axios";
import { useState } from "react";
import "./donation.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer"

const Donation = () => {
  const initialFormData = {
    name: "",
    city: "",
    contact: "",
    email: "",
    gender: "",
    blood_group: "",
    DOB: "",
    disease: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = async (e) => {
    let { name, value } = e.target;

    if (name === "DOB") {
      const userDob = new Date(value);
      const currentDate = new Date();
      const eighteenYearsAgo = new Date(
        currentDate.getFullYear() - 18,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      if (userDob >= eighteenYearsAgo) {
        setFormData({ ...formData, DOB: "" });
        return swal({
          title: "Age must be greater than 18 years",
          icon: "error",
        });
      }
    }

    if (name === "disease") {
      if (value === "true") value = true;
      else value = false;
    }

    if (name === "contact") {
      value = Number(value);
    }

    return setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.contact.toString().trim().length !== 10) {
      return swal({
        title: "Contact must have 10 letters",
        icon: "error",
      });
    }

    axios
      .post("http://localhost:3000/createDonation", formData)
      .then((response) => {
        swal({
          title: response.data.message,
          icon: "success",
        });
      })
      .catch((error) => {
        swal({
          title: error.response.data.message,
          icon: "error",
        });
        console.log(error);
      });
    return setFormData(initialFormData);
  };

  return (
    <>
      <Navbar title = "SUBMIT YOUR DETAILS"/>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          label="Name"
          className="inputField"
          onChange={handleChange}
          placeholder="Name"
          name="name"
          value={formData.name}
          required
        />
        <input
          type="text"
          label="City"
          className="inputField"
          onChange={handleChange}
          placeholder="City"
          name="city"
          value={formData.city}
        />
        <input
          type="text"
          label="Contact"
          className="inputField"
          onChange={handleChange}
          placeholder="Contact"
          name="contact"
          value={formData.contact || ""}
        />
        <input
          type="text"
          label="Email"
          className="inputField"
          onChange={handleChange}
          placeholder="Email"
          name="email"
          value={formData.email}
        />

        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="FEMALE"
            name="gender"
            control={<Radio />}
            label="Female"
            checked={formData.gender === "FEMALE"}
            onChange={handleChange}
          />
          <FormControlLabel
            value="MALE"
            name="gender"
            control={<Radio />}
            label="Male"
            checked={formData.gender === "MALE"}
            onChange={handleChange}
          />
        </RadioGroup>

        <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.blood_group}
          label="blood_group"
          onChange={handleChange}
          name="blood_group"
        >
          <MenuItem value={"A+"}>A+</MenuItem>
          <MenuItem value={"A-"}>A-</MenuItem>
          <MenuItem value={"B+"}>B+</MenuItem>
          <MenuItem value={"B-"}>B-</MenuItem>
          <MenuItem value={"AB+"}>AB+</MenuItem>
          <MenuItem value={"AB-"}>AB-</MenuItem>
          <MenuItem value={"O+"}>O+</MenuItem>
          <MenuItem value={"O-"}>O-</MenuItem>
        </Select>

        <label>
          Date of Birth:
          <input
            type="date"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
            className="birthDate"
          />
        </label>

        <FormLabel id="demo-radio-buttons-group-label">
          Any Previous Disease?
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            name="disease"
            value={true}
            checked={formData.disease === true}
            onChange={handleChange}
            control={<Radio />}
            label="yes"
          />
          <FormControlLabel
            control={<Radio />}
            label="no"
            name="disease"
            value={false}
            checked={formData.disease === false}
            onChange={handleChange}
          />
        </RadioGroup>

        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
      <Footer/>
    </>
  );
};

export default Donation;
