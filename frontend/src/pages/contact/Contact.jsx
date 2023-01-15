import { Box, Typography, TextField, Button } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import "./contact.css";
import { NavLink } from "react-router-dom";
import useDocTitle from "../../hooks/useDocTitle";
import { useCreateNewContact } from "../../hooks/useContactsData";

const Contact = () => {
  useDocTitle("Contact");
  const { mutate, isLoading } = useCreateNewContact();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;
    const data = {
      name: name,
      email: email,
      phoneNo: phone,
      message: message,
    };
    mutate(data);
    e.target.reset();
  };

  return (
    <Box marginTop={9} marginBottom={5}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          className="contact-bg"
          sx={{
            width: "100%",
            height: "243px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ textAlign: "center", fontWeight: "bold", color: "#fff" }}
              variant="h5"
            >
              Contact Us
            </Typography>
            <Box>
              <NavLink to="/" className="link">
                Home
              </NavLink>{" "}
              <span>| </span>
              <NavLink to="/contact" className="link">
                Contact Us
              </NavLink>
            </Box>
          </Box>
        </Box>
        <Box marginTop={2}>
          <Box marginTop={1} sx={{ textAlign: "center" }}>
            <Typography sx={{ fontSize: "12px" }} variant="p">
              CONTACT US NOW
            </Typography>
            <Typography variant="h5">Write a Message</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <form onSubmit={handleSubmit}>
              <Box sx={{ marginBottom: "10px", marginTop: "15px" }}>
                <TextField
                  required
                  sx={{
                    marginRight: "10px",
                    width: { xs: "300px", lg: "450px", md: "450px" },
                    marginBottom: "15px",
                  }}
                  label="Your Name"
                  name="name"
                  id="outlined"
                  placeholder="Your Name"
                  variant="outlined"
                />
                <br />
                <TextField
                  required
                  sx={{
                    marginRight: "10px",
                    width: { xs: "300px", lg: "450px", md: "450px" },
                    marginBottom: "15px",
                  }}
                  id="outlined-basic"
                  name="email"
                  label="Your Email"
                  placeholder="Your Email"
                  variant="outlined"
                />
              </Box>
              <Box sx={{ marginBottom: "10px" }}>
                <TextField
                  required
                  sx={{
                    marginRight: "10px",
                    width: { xs: "300px", lg: "450px", md: "450px" },
                    marginBottom: "15px",
                  }}
                  id="outlined-basic"
                  label="Your Mobile"
                  placeholder="Your Mobile"
                  name="phone"
                  variant="outlined"
                />
                <br />
              </Box>
              <Box sx={{ marginBottom: "10px" }}>
                <TextareaAutosize
                  required
                  minRows={1}
                  className="text-area"
                  style={{ height: 100 }}
                  name="message"
                  id="outlined-basic"
                  placeholder="Message"
                  variant="outlined"
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
