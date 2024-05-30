import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import HomeBanner from "../../assets/homebanner.svg";
import ListIcon from "../../assets/send-message 5.svg";

const Home = () => {
  return (
    <Grid container className="p-20">
      <Grid item xs={12} md={7} className="py-40">
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
        <Box className="py-20 flex">
          <FormControl
          className="otp-input"
            sx={{
              m: 1,
              margin: "0px",
              borderLeft: "5px solid var(--button-color1)",
            }}
            variant="outlined"
          >
            <OutlinedInput
              sx={{ borderRadius: "0" }}
              id="outlined-adornment-weight"
              startAdornment={
                <InputAdornment position="end">+91 - </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
          <Button className="get-otp-btn" sx={{ borderRadius: "0" }}>
            Get OTP
          </Button>
        </Box>
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
          <Box className=" flex w-100 flex-row flex-wrap py-20" sx={{gap: '10px'}}>
            <Box className="flex items-center w-45">
                <img src={ListIcon} className="pr-10 w-25px" />
                <Typography> Bussiness Loan</Typography>
            </Box>
            <Box className="flex items-center w-45">
                <img src={ListIcon} className="pr-10 w-25px" />
                <Typography> Mortgage Loan</Typography>
            </Box>
            <Box className="flex items-center w-45">
                <img src={ListIcon} className="pr-10 w-25px" />
                <Typography> Professional Loan</Typography>
            </Box>
            <Box className="flex items-center w-45">
                <img src={ListIcon} className="pr-10 w-25px" />
                <Typography> Medical Equipment Loan</Typography>
            </Box>
            <Box className="flex items-center w-45">
                <img src={ListIcon} className="pr-10 w-25px" />
                <Typography> Personal Loan</Typography>
            </Box>
            <Box className="flex items-center w-45">
                <img src={ListIcon} className="pr-10 w-25px" />
                <Typography> Industry Machinery Loan</Typography>
            </Box>
            <Box className="flex items-center w-45">
                <img src={ListIcon} className="pr-10 w-25px" />
                <Typography> Home Loan</Typography>
            </Box>
            <Box className="flex items-center w-45">
                <img src={ListIcon} className="pr-10 w-25px" />
                <Typography> SME Loan</Typography>
            </Box>

          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={5} className="py-40 px-30">
        <Box>
          <img src={HomeBanner} style={{ width: "100%" }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
