import { Box, Typography } from "@mui/material";
import ListIcon from "../../../assets/send-message 5.svg";

const LoanBulletList = () => {
  return (
    <Box className=" flex w-100 flex-row flex-wrap py-20" sx={{ gap: "10px" }}>
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
  );
};

export default LoanBulletList;
