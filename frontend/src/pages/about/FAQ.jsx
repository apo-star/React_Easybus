import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const FAQ = () => {
  return (
    <Container sx={{ marginY: "100px", mx: "auto" }}>
      <Grid
        container
        spacing={{ xs: 0, md: 5 }}
        justifyContent="center"
        sx={{ m: "4" }}
      >
        <Grid item sm={12} md={6} sx={{ p: "40px" }}>
          <Typography
            variant="p"
            sx={{ textTransform: "uppercase", fontWeight: "bold" }}
            color="primary"
          >
            Answers to
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: "20px" }}>
            Frequently Asked Questions
          </Typography>

          {[
            {
              question: "What is the policy of EasyBus on Cancelling a Ticket?",
              answer: `If a user cancels his/her ticket before 24 hours of departure time, 
              the user will get back 70% of fair. After that time, it's 50%.`,
            },
            {
              question: "What is the policy of EasyBus on Cancelling a Ticket?",
              answer: `If a user cancels his/her ticket before 24 hours of departure time, 
              the user will get back 70% of fair. After that time, it's 50%.`,
            },
            {
              question: "What is the policy of EasyBus on Cancelling a Ticket?",
              answer: `If a user cancels his/her ticket before 24 hours of departure time, 
              the user will get back 70% of fair. After that time, it's 50%.`,
            },
          ].map(({ question, answer }, index) => (
            <Accordion
              disableGutters
              key={question}
              sx={{
                my: "16px",
                boxShadow: "0 0",
                border: "0",
                color: "#571336",
                backgroundColor: "#ddd",
                "&.Mui-expanded": {
                  backgroundColor: "#500D30",
                  color: "white",
                },
              }}
            >
              <AccordionSummary
                aria-controls={`faq${index}-content`}
                id={`faq${index}`}
              >
                <Typography sx={{ fontWeight: "bold" }}>{question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            backgroundImage: "url('/faq.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            p: "0",
            height: {
              xs: "300px",
              md: "auto",
            },
            width: {
              xs: "100%",
              md: "auto",
            },
          }}
        ></Grid>
      </Grid>
    </Container>
  );
};

export default FAQ;
