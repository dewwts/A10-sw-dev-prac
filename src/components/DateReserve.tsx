"use client";

import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { Dayjs } from "dayjs";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function DateReserve() {
  const [date, setDate] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="grid gap-6 md:grid-cols-2">
        <DatePicker label="Date" value={date} onChange={setDate} />
        <TextField name="Name-Lastname" label="Name-Lastname" variant="standard" fullWidth />
        <TextField name="Contact-Number" label="Contact-Number" variant="standard" fullWidth />
        <FormControl variant="standard" fullWidth>
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select labelId="venue-label" id="venue" name="venue" label="Venue" defaultValue="">
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>
      </div>
    </LocalizationProvider>
  );
}
