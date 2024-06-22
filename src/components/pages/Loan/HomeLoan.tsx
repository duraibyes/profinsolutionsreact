import { Box, Grid, Typography } from "@mui/material"
import { LoanCategoryProps } from "../../../services/LoanCategoryApi"
import Bg1 from "../../../assets/business-loan.jpg";
import rating from "../../../assets/rating.svg";
import thumbsup from "../../../assets/thumbs-up.svg";
import customerServiceIcon from "../../../assets/customer-service.svg";
import WarrantyIcon from "../../../assets/warranty.svg";
import HomeLoanForm from "../form/HomeLoanForm"

const HomeLoan = ({ info }: { info: LoanCategoryProps }) => {
  return (
    <Grid
      container
      className="bg-tab"
      sx={{
        backgroundImage: `url(${Bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid item xs={12} md={6} className="p-40">
        <Typography className="text-primary fs-24 fw-900">
          About the Loan
        </Typography>
        <Typography className="text-black fw-900 fs-30 pt-5">
          Home Loan - The Place where your need meets the want
        </Typography>
        <Typography className="pt-10">
          We are a reliable partner for clients as our loan processing services
          are transparent, secure, and accurate. Our team of experts provides
          tailored advice and guidance to ensure that clients get the best loan
          product suited to their needs. We have a team of experienced
          professionals who are highly knowledgeable and can offer comprehensive
          advice regarding loan processing. We have a wide network of banks /
          NBFC’s, which allows us to provide clients with the best loan terms
          and interest rates. We provide real-time updates regarding the status
          of their loan application. We suggest the available flexible repayment
          options to suit the requirements of our clients. We take the time to
          understand each client’s needs and provide them with the best loan
          option. We take pride in our commitment to excellence and our
          dedication to providing exceptional customer service. We are proud to
          offer the highest quality loan processing solutions to our clients.
        </Typography>
        <Box className="flex gap-5 pt-20">
          <Box>
            <Box className="flex items-center gap-1 py-10">
              <img src={rating} />
              <Typography> Two Decades of Experience </Typography>
            </Box>
            <Box className="flex items-center gap-1 py-10">
              <img src={thumbsup} />
              <Typography>Loan Specialists </Typography>
            </Box>
          </Box>
          <Box>
            <Box className="flex items-center gap-1 py-10">
              <img src={customerServiceIcon} />
              <Typography>Excellence Support</Typography>
            </Box>
            <Box className="flex items-center gap-1 py-10">
              <img src={WarrantyIcon} />
              <Typography> Satisfied Guaranteed </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <HomeLoanForm id={info?.id} />
      </Grid>
    </Grid>
  )
}

export default HomeLoan