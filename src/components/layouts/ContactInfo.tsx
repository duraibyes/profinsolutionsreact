import { Grid, Typography } from "@mui/material";

const ContactInfo = () => {
  return (
    <Grid container className="main-section">
      <Grid item xs={12} className="py-30 px-20">
        <Typography className="contact-text1 text-black" sx={{fontWeight:800, fontSize: '30px',padding: '20px 40px', textAlign:'center'}}>
            Please contact us for more information on our services. We look forward to helping you find the best.
        </Typography>
        <Typography className="contact-text2" sx={{padding:'0px 25px', textAlign:'center'}}>
        If you’re looking for a reliable and experienced loan service provider company, look no further than Profin. 
        Contact us today to learn more about our services and how we can help you with your loan needs.
        </Typography>
        <Typography className="text-primary text-underlined text-center py-10" sx={{fontWeight:700}}>
        Let’s Talk
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ContactInfo;
