import { Box, Grid, Typography } from "@mui/material";
import PhoneIcon from "../../assets/9024698_phone_call_light_icon.svg";
import MailIcon from "../../assets/185078_mail_email_icon.svg";

const Footer = () => {
  return (
    <Grid container spacing={2} sx={{borderTop:'3px solid #ddd', margin: '25px 0px', padding:'25px 0px'}}>
      <Grid item xs={12} md={6}>
        <Box className='items-center px-20'
          sx={{
            display: { xs: "flex", md: "flex" },
            justifyContent: { xs: "center", md: "end" },
          }}
        >
          <img src={PhoneIcon} style={{width:'50px',marginRight:'8px'}} />
          <Typography className="footer-text"  sx={{fontSize:'22px'}}>+91 - 9876543210</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box className='items-center px-20'
          sx={{
            display: { xs: "flex", md: "flex" },
            justifyContent: { xs: "center", md: "start" },
          }}
        >
          <img src={MailIcon}  style={{width:'50px',marginRight:'8px'}} />
          <Typography className="footer-text" sx={{fontSize:'22px'}}>profinsolutions@gmail.com</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography className="text-center footer-text" sx={{marginTop:'15px'}} >
          ©2022 - Profin Solutions. All Rights Reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
