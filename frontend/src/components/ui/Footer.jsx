import { Button, Grid, Link, TextareaAutosize, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import { OutlinedInput } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <Box sx={{py:"55px",backgroundColor:"#171921", color:"#ffffff"}}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box>
                                <Typography
                                 fontSize={22} 
                                 fontWeight={600}>
                                  Online to make your journey even more memorable access or meet
                                </Typography>
                                <Box sx={{display:"flex",gap:2,mt:5}}>
                                    <FacebookOutlinedIcon></FacebookOutlinedIcon>
                                    <TwitterIcon></TwitterIcon>
                                    <InstagramIcon></InstagramIcon>
                                    <LinkedInIcon></LinkedInIcon>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography 
                              fontSize={22} 
                              fontWeight={600} 
                              marginBottom={3}>
                                Explore
                            </Typography>
                            <Box sx={{
                            display:"flex",
                            flexDirection:"column",
                            gap:1,
                            fontSize:"16px",
                            fontWeight:"500",
                           }}>
                                <Link to="/about" color={"#cbccd0"} underline={"none"}>About us</Link>
                                <Link to="/awards" color={"#cbccd0"} underline={"none"}>Awards</Link>
                                <Link to="/alerts" color={"#cbccd0"} underline={"none"}>Travel alerts</Link>
                                <Link to="/sponsorship" color={"#cbccd0"} underline={"none"}>Sponsorship</Link>
                                <Link to="/pressRelease" color={"#cbccd0"} underline={"none"}>Press release</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Typography 
                          fontSize={22} 
                          fontWeight={600} 
                          marginBottom={3}>
                            Privacy
                          </Typography>
                          <Box sx={{
                            display:"flex",
                            flexDirection:"column",
                            gap:1,
                            fontSize:"16px",
                            fontWeight:"500",
                            color:"#ffffff"}}>
                                <Link to="/about" color={"#cbccd0"} underline={"none"}>Bus fees</Link>
                                <Link to="/awards" color={"#cbccd0"} underline={"none"}>Bus guides</Link>
                                <Link to="/alerts" color={"#cbccd0"} underline={"none"}>Bus guides</Link>
                                <Link to="/sponsorship" color={"#cbccd0"} underline={"none"}>Low fare tips</Link>
                                <Link to="/pressRelease" color={"#cbccd0"} underline={"none"}>Beyond</Link>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                          <Typography fontSize={22} fontWeight={600} marginBottom={3}>Contacts</Typography>
                          <Typography >PO Box W75 Street lan West new queens</Typography>
                          <Typography variant='h5' color={"#FFA903"} fontWeight={600}>+1 246 333 - 0079</Typography>
                          <Typography variant='p' color={"#FFA903"}>easyBus@company.com</Typography>
                          <Box sx={{display:'flex',mt:2}}>
                              <OutlinedInput
                               sx={{border:"1px solid #ffffff",color:"#ffffff"}}
                                placeholder={"Enter your email"}></OutlinedInput>
                              <Button variant="contained">
                              <SendIcon color={'#ffffff'}></SendIcon>
                              </Button>
                          </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{
              py:3,
              backgroundColor:"#13171d"
              }}>
                <Container fontWeight={600}>
                   <Grid container>
                      <Grid item md={6}>
                          <Typography 
                            color={"#ffffff"}
                            display={"flex"}
                            >
                              Copyright © 2022.All Rights Reserved By 
                              <Typography color={"#FFA903"} marginLeft={1}>EasyBus</Typography>
                          </Typography>
                        </Grid>
                        <Grid item md={6}>
                          <Box 
                          sx={{
                            textAlign:"right"
                          }}
                            >
                            <img src="https://i.ibb.co/5hq7j7j/payment.png" alt="cart" />
                          </Box>
                        </Grid>
                   </Grid>
                </Container>
              </Box>
        </footer>
    );
};

export default Footer;