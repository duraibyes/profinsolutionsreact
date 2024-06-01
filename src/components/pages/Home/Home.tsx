import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import HomeBanner from "../../../assets/homebanner.svg";

import HomeInputSection from "./HomeInputSection";
import LoanBulletList from "./LoanBulletList";
import About from "../about/About";
import { useState } from "react";

const Home = () => {

  const [mobileNo, setMobileNo] = useState<string>('');

  return (
    <>
    <Grid container className="main-section">
      <Grid item xs={12} md={7} className="py-40 pl-20">
        <Typography
          sx={{ fontSize: "35px", color: "black !important", fontWeight: 600 }}
        >
          Get the <span className="text-primary">Smarter Loan</span> from the
          comfort place
        </Typography>
        <Typography className="py-10" sx={{ fontSize: "17px" }}>
          Unlock Best Personal Loan Offers suitable for your needs from 30+
          Lenders
        </Typography>
        <HomeInputSection setMobileNo={setMobileNo} mobileNo={mobileNo} />
        <Box className="loan-bullet-list">
          <Typography
            sx={{
              fontSize: "28px",
              color: "black !important",
              fontWeight: 600,
            }}
          >
            Unlock Best Personal Loan Offers suitable for your needs from 30+
            Lenders
          </Typography>
          <LoanBulletList />
        </Box>
      </Grid>
      <Grid item xs={12} md={5} className="py-40 px-30">
        <Box>
          <img src={HomeBanner} style={{ width: "100%" }} />
        </Box>
      </Grid>
    </Grid>
    <About />
    </>
  );
};

export default Home;
