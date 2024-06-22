import { Box, Grid, Typography } from "@mui/material";
import ProfessionalLoanForm from "../form/ProfessionalLoanForm";
import Bg1 from "../../../assets/professional-loan.jpg";
import rating from "../../../assets/rating.svg";
import thumbsup from "../../../assets/thumbs-up.svg";
import customerServiceIcon from "../../../assets/customer-service.svg";
import WarrantyIcon from "../../../assets/warranty.svg";
import { LoanCategoryProps } from "../../../services/LoanCategoryApi";

const ProfessionalLoan = ({ info }: { info: LoanCategoryProps }) => {
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
          Professional Loan
        </Typography>
        <Typography className="pt-10">
          Professional Loans are a type of loan designed specifically for
          professionals. These loans are typically offered by banks and other
          financial institutions, and they provide a way for professionals to
          meet their educational, professional and personal expenses.
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
        <ProfessionalLoanForm id={info?.id} />
      </Grid>
    </Grid>
  );
};

export default ProfessionalLoan;
