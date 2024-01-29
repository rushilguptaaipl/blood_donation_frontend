import React from "react"
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import swal from "sweetalert";
import axios from "axios";
import { useState } from "react";
import "./donation.css"

const Donation = () =>{

    const [formData , setFormData] = useState({
    name: "",
    city: "",
    contact: "",
    email: "",
    gender: "",
    blood_group: "",
    DOB: "",
    disease: "",
    })

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
          .post("http://3.27.149.171/", formData)
          .then((response) => {
            swal({
              title: response.data.message,
              icon: "success",
            })
          })
          .catch((error) => {
            console.log(error);
          });
      };


    return (
        <>
         <h2>Add Donar</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-controlled"
          label="Name"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />

        <TextField
          id="outlined-controlled"
          label="City"
          value={formData.city}
          name="city"
          onChange={handleChange}
        />

        <TextField
          id="outlined-controlled"
          name="contact"
          label="Contact"
          value={formData.contact}
          onChange={handleChange}
        />

        <TextField
          id="outlined-controlled"
          label="Contact"
          name="email"
          value={formData.email}
          onChange={handleChange}
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
    )
}

export default Donation