import React from "react";

import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";

const Filter = ({ categories, selectedCategories, setSelectedCategories }) => {
  const theme = useTheme();
  const getStyles = (category) => {
    return {
      fontWeight: selectedCategories.includes(category)
        ? theme.typography.fontWeightBold
        : theme.typography.fontWeightRegular,
    };
  };

  return (
    <FormControl sx={{ display: "flex", width: 400, mx: "auto", mb: 6 }}>
      <InputLabel
        id="demo-multiple-chip-label"
        sx={{ backgroundColor: "white" }}
      >
        Select Categories
      </InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        autoWidth
        value={selectedCategories}
        onChange={(event) => setSelectedCategories(event.target.value)}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value.toUpperCase()} />
            ))}
          </Box>
        )}
      >
        {categories.map((category, index) => (
          <MenuItem key={index} value={category} style={getStyles(category)}>
            {category.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Filter;
