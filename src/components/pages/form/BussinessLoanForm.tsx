import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

type Props = {
  activeTab: number;
};
const BussinessLoanForm = ({ activeTab }: { activeTab: number }) => {
  const [annualTerm, setAnnualTerm] = useState<string>("");
  const handleAnnualTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAnnualTerm((event.target as HTMLInputElement).value);
  };

  return (
    <Box className="mt-8 pt-5 flex justify-center">
      <Box className="p-40 loan-form" sx={{ background: "white", width:'500px' }}>
        <Typography className="text-black fw-900 fs-20">
          Submit the below form
        </Typography>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Annual Term
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={annualTerm}
            onChange={handleAnnualTermChange}
          >
            <FormControlLabel
              value="Less than 1 crore"
              control={<Radio />}
              label="Less Than 1 Crore"
            />
            <FormControlLabel
              value="1 Crore to 3 Crore"
              control={<Radio />}
              label="1 Crore to 3 Crore"
            />
            <FormControlLabel
              value="3 Crore and above"
              control={<Radio />}
              label="3 Crore and above"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default BussinessLoanForm;
