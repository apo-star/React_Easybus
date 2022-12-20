import { Box, Typography,TextField,Button,} from "@mui/material";


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  return (
    <Box>
      <Box sx={{width:"100%",height:"243px"}}></Box>
      <Box>
        <Box marginTop={1} sx={{ textAlign:"center"}}>
          <Typography variant="p">CONTACT US NOW</Typography>
          <Typography variant="h5">Write a Message</Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center"}}>
          <form onSubmit={handleSubmit}>
            <Box sx={{marginBottom:"10px"}}>
              <TextField sx={{marginRight:"10px"}} name="name" id="outlined" placeholder="Your Name" variant="outlined" />
              <TextField sx={{marginRight:"10px"}} id="outlined-basic" placeholder="Your Email" variant="outlined" />
            </Box>
            <Box sx={{marginBottom:"10px",width:"100%"}}>
              <TextField sx={{marginRight:"10px"}} id="outlined-basic" placeholder="Subject" variant="outlined" />
              <TextField sx={{marginRight:"10px"}} id="outlined-basic" placeholder="Your Mobile" variant="outlined" />
            </Box>
            <Box  sx={{display:"flex",justifyContent:"center",marginBottom:"10px"}}>
              <TextField id="outlined-basic" placeholder="Message" variant="outlined" />
            </Box>
            <Box  sx={{display:"flex",justifyContent:"center"}}>
              <Button type="submit" variant="contained">Submit</Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
