import { Box, Typography, TextField, Button } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <Box>
      <Box sx={{ width: "100%", height: "243px" }}></Box>
      <Box>
        <Box marginTop={1} sx={{ textAlign: "center" }}>
          <Typography variant="p">CONTACT US NOW</Typography>
          <Typography variant="h5">Write a Message</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ marginBottom: "10px", marginTop: "15px" }}>
              <TextField sx={{ marginRight: "10px", width: { xs: "300px", lg: "400px" }, marginBottom: "15px" }} label="Your Name" name="name" id="outlined" placeholder="Your Name" variant="outlined" /><br />
              <TextField sx={{ marginRight: "10px", width: { xs: "300px", lg: "400px" }, marginBottom: "15px" }} id="outlined-basic" label="Your Email" placeholder="Your Email" variant="outlined" />
            </Box>
            <Box sx={{ marginBottom: "10px" }}>
              <TextField sx={{ marginRight: "10px", width: { xs: "300px", lg: "400px" }, marginBottom: "15px" }} id="outlined-basic" label="Subject" placeholder="Subject" variant="outlined" /> <br />
              <TextField sx={{ marginRight: "10px", width: { xs: "300px", lg: "400px" }, marginBottom: "15px" }} id="outlined-basic" label="Your Mobile" placeholder="Your Mobile" variant="outlined" /><br />
            </Box>
            <Box sx={{ marginBottom: "10px" }}>
              <TextareaAutosize style={{ width: 300, height: 100 }} name="Message" id="outlined-basic" label="Message" placeholder="Message" variant="outlined" />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button type="submit" variant="contained">Submit</Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
