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

const Donation = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    contact: "",
    email: "",
    gender: "",
    blood_group: "",
    DOB: "",
    disease: "",
  });

  const handleChange = (e) => {
    if (e?.$isDayjsObject) {
      return setFormData({ ...formData, DOB: `${e.$y}-${e.$M}-${e.$D}` });
    }
    const { name, value } = e.target;
    if (name === "disease") {
      if (value === "true") {
        setFormData({ ...formData, disease: true });
      } else {
        setFormData({ ...formData, disease: false });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.disease === true) {
      formData.disease = true;
    } else {
      formData.disease = false;
    }
    axios
      .post("http://3.27.149.171/createDonation", formData)
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
    setFormData({
      name: "",
      city: "",
      contact: "",
      email: "",
      gender: "",
      blood_group: "",
      DOB: "",
      disease: "",
    });
  };

  return (
    <>
      <h2>Add Donar</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          label="Name"
          className="inputField"
          onChange={handleChange}
          placeholder="Name"
          name="name"
          value={formData.name}
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
          value={formData.contact}
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
            value="F"
            name="gender"
            control={<Radio />}
            label="Female"
            checked={formData.gender === "F"}
            onChange={handleChange}
          />
          <FormControlLabel
            value="M"
            name="gender"
            control={<Radio />}
            label="Male"
            checked={formData.gender === "M"}
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
            value="true"
            checked={formData.disease === true}
            onChange={handleChange}
            control={<Radio />}
            label="yes"
          />
          <FormControlLabel
            control={<Radio />}
            label="no"
            name="disease"
            value="false"
            checked={formData.disease === false}
            onChange={handleChange}
          />
        </RadioGroup>

        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default Donation;
