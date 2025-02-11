import React, { useState } from "react";
import {
  Drawer,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
//import { DatePicker } from "@mui/x-date-pickers";

const Filter = ({ open, onClose, onApply }) => {
  const [status, setStatus] = useState("");
  const [employee, setEmployee] = useState("");
  const [date, setDate] = useState(null);

  const handleApply = () => {
    onApply({ status, employee, date });
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div style={{ width: 300, padding: 20 }}>
        <h3>Apply Filters</h3>

        {/* Status Dropdown */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="checkin">Check-in</MenuItem>
            <MenuItem value="checkout">Check-out</MenuItem>
            <MenuItem value="all">All</MenuItem>
          </Select>
        </FormControl>

        {/* Employee Dropdown */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Employee</InputLabel>
          <Select value={employee} onChange={(e) => setEmployee(e.target.value)}>
            <MenuItem value="emp1">Employee 1</MenuItem>
            <MenuItem value="emp2">Employee 2</MenuItem>
          </Select>
        </FormControl>

        {/* Date Range Picker */}
        {/* <DatePicker
          label="Select Date"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
        /> */}

        {/* Buttons */}
        <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between" }}>
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleApply} variant="contained" color="primary">
            Apply
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default Filter;
