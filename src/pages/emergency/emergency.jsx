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
import "./emergency.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer"

const Emergency = () => {
  const initialFormDate = {
    registerar_name: "",
    patient_name: "",
    contact: "",
    city: "",
    gender: "",
    blood_group: "",
    email: "",
    age: "",
    hospital: "",
  };

  const [formData, setFormData] = useState(initialFormDate);

  // handle change in form
  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "age") value = Number(value);
    if (name === "contact") value = Number(value);

    return setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle the submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.contact.toString().trim().length !== 10) {
      return swal({
        title: "Contact must have 10 letters",
        icon: "error",
      });
    }

    axios
      .post("http://localhost:3000/createEmergency", formData)
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
    return setFormData(initialFormDate);
  };

  return (
    <>
      <Navbar title = "SUBMIT EMERGENCY"/>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          label="registerar_name"
          className="inputField"
          onChange={handleChange}
          placeholder="registerar name"
          name="registerar_name"
          value={formData.registerar_name}
        />
        <input
          type="text"
          label="patient_name"
          className="inputField"
          onChange={handleChange}
          placeholder="patient name"
          name="patient_name"
          value={formData.patient_name}
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
          label="city"
          className="inputField"
          onChange={handleChange}
          placeholder="city"
          name="city"
          value={formData.city}
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
        <input
          type="text"
          label="age"
          className="inputField"
          onChange={handleChange}
          placeholder="age"
          name="age"
          value={formData.age}
        />
        <input
          type="text"
          label="hospital"
          className="inputField"
          onChange={handleChange}
          placeholder="hospital"
          name="hospital"
          value={formData.hospital}
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

        <Button variant="outlined" type="submit" className="submit_btn">
          Submit
        </Button>
      </form>
      <Footer/>
    </>
  );
};

export default Emergency;
