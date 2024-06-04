import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ThankyouForm from "./ThankyouForm";

type Props = {
  activeTab: number;
};
const BussinessLoanForm = ({ activeTab }: Props) => {
  const [company, setCompany] = useState<string>("");
  const [annualTerm, setAnnualTerm] = useState<string>("");
  const [yearEstablish, setYearEstablish] = useState<string>("");
  const [loanAmount, setLoanAmount] = useState<string>("");
  const [isLoanFormValid, setIsLoanFormValid] = useState<boolean>(false);
  const [errors, setErrors] = useState({
    company: false,
    yearEstablish: false,
    annualTerm: false,
    loanAmount: false,
  });

  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value);
    setErrors({ ...errors, company: false });
  };

  const handleAnnualTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAnnualTerm(event.target.value);
    setErrors({ ...errors, annualTerm: false });
  };

  const handleLoanAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.replace(/\D/g, "");
    setLoanAmount(value);
    setErrors({ ...errors, loanAmount: false });
  };

  const handleYearEstablishChange = (event: SelectChangeEvent) => {
    setYearEstablish(event.target.value as string);
    setErrors({ ...errors, yearEstablish: false });
  };

  const validateForm = () => {
    const newErrors = {
      company: company === "",
      yearEstablish: yearEstablish === "",
      annualTerm: annualTerm === "",
      loanAmount: loanAmount === "",
    };

    setErrors(newErrors);

    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Submit form logic here
      console.log("Form is valid. Submitting form...");
      setIsLoanFormValid(true);
    } else {
      console.log("Form is invalid. Please fill in all fields.");
    }
  };

  // Get the current year
  const currentYear = new Date().getFullYear();
  // Generate an array of the last 20 years
  const last20Years = Array.from({ length: 20 }, (v, i) => currentYear - i);
  return (
    <Box className="mt-8 pt-5 flex justify-center">
      <Box
        className="p-40 loan-form"
        sx={{ background: "white", width: "500px" }}
      >
        {
          !isLoanFormValid ? (
            <>
          <Typography className="text-black fw-900 fs-20">
            Submit the below form
          </Typography>

          <FormControl className="w-100 mt-2">
            <TextField
              error={errors.company}
              helperText={errors.company ? "Company is required" : ""}
              id="outlined-basic"
              label="Company"
              className="pt-1 mb-2"
              variant="outlined"
              value={company}
              onChange={handleCompanyChange}
            />
            <FormControl fullWidth className="mt-3">
              <InputLabel id="demo-simple-select-label">
                Year Of Establishment
              </InputLabel>
              <Select
                error={errors.yearEstablish}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={yearEstablish}
                label="Year of Establishment"
                onChange={handleYearEstablishChange}
              >
                {last20Years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box>
              <Typography className="mt-2 mb-2 text-black fw-800 ">
                Annual Term
              </Typography>
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
              {errors.annualTerm && (
                <Typography color="error" variant="caption">
                  Annual Term is required
                </Typography>
              )}
            </Box>
            <TextField
              error={errors.loanAmount}
              helperText={errors.loanAmount ? "Loan Amount is required" : ""}
              id="outlined-basic"
              label="Loan Amount"
              className="pt-1 mt-2"
              variant="outlined"
              value={loanAmount}
              onChange={handleLoanAmountChange}
            />
            <Button className="primary-button mt-6" onClick={handleSubmit}>
              Get Quote
            </Button>
          </FormControl>
        </>
          ) : (
            <>
              <ThankyouForm />
            </>
          )
        }
        
      </Box>
    </Box>
  );
};

export default BussinessLoanForm;
