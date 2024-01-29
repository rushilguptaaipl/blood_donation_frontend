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

const Emergency = () => {
  const [formData, setFormData] = useState({
    registerar_name: "",
    patient_name: "",
    contact: "",
    city: "",
    gender: "",
    blood_group: "",
    email: "",
    age: "",
    hospital: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {

    formData.contact = Number(formData.contact)
    formData.age = Number(formData.age)
    console.log(formData);
    e.preventDefault();
    axios
      .post("http://3.27.149.171/createEmergency", formData)
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
        registerar_name: "",
        patient_name: "",
        contact: "",
        city: "",
        gender: "",
        blood_group: "",
        email: "",
        age: "",
        hospital: "",
    });
  };

  return (
    <>
      <h2>Add Emergency</h2>
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

       

        <Button variant="outlined" type="submit">
          Submit
        </Button>

      </form>
    </>
  );
};

export default Emergency;
