import React from "react";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

const Filter = ({ categories, selectedCategories, setSelectedCategories }) => {
  return (
    <Stack justifyContent="center" direction="row" spacing={1} sx={{ my: 3 }}>
      {categories.map((cat, index) => (
        <Chip
          clickable
          key={index}
          label={cat.toUpperCase()}
          color={selectedCategories.includes(cat) ? "primary" : "default"}
          onClick={() => {
            const set = new Set(selectedCategories);
            if (set.has(cat)) {
              set.delete(cat);
            } else {
              set.add(cat);
            }
            setSelectedCategories([...set]);
          }}
        />
      ))}
    </Stack>
  );
};

export default Filter;
