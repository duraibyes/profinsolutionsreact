import { Grid, Typography } from "@mui/material";

const WelcomeSection = () => {
  return (
    <Grid container className="main-section">
      <Grid item xs={12} className="text-center">
        <Typography className="text-primary text-center w-800 fs-32">
            Welcome Guest,
        </Typography>
        <Typography className="text-black fs-24 fw-800">
            Get the Smarter Loan from comfort place
        </Typography>
        <Typography>
        Unlock Best Personal Loan Offers suitable for your needs from 30+ Lenders
        </Typography>
      </Grid>
    </Grid>
  );
};

export default WelcomeSection;
