import { Box, Grid, Typography } from "@mui/material";
import AboutImg from "../../../assets/Group 14.svg";

const About = () => {
  return (
    <Grid container className="section-color1 main-section">
      <Grid item xs={12} md={6} className="py-30">
        <Box className="flex items-center justify-center">
          <img src={AboutImg} className="w-80" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} className="flex items-center">
        <Box className="about-text-section">
          <Typography className="text-primary" sx={{ fontSize: "24px" }}>
            About Company
          </Typography>
          <Typography
            sx={{
              color: "black !important",
              fontWeight: 700,
              fontSize: "30px",
            }}
          >
            Loan - The Place wh ere your need meets the want
          </Typography>
          <Typography>
            The premier loan service provider with two decades of experience. We
            are headquartered in Chennai, Tamil Nadu, India and provide tailor
            made loans solutions to our clients that best meets their needs. Our
            team of loan professionals understands the importance of finding the
            right loan for each customer and we strive to provide the best
            customer experience possible.
          </Typography>
          <Box className="flex py-20" sx={{gap:'10px'}}>
            <Box className="about-card">
              <Typography className="text-primary1" >1000+</Typography>
              <Typography className="text-black">
                Satisfied Customers
              </Typography>
            </Box>
            <Box className="about-card">
              <Typography className="text-primary1">20+</Typography>
              <Typography className="text-black">
                Years of Experience
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
