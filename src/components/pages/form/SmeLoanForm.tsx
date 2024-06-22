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
  id: number;
};

export type SmeFormProps = {
  id: number;
  company: string;
  company_type: string;
  yearEstablish: string;
  loanAmount: string;
  secured: string;
};

const SmeLoanForm: React.FC<Props> = ({ id }) => {
  const [formFields, setFormFields] = useState<SmeFormProps>({
    id: id,
    company: "",
    company_type: "",
    yearEstablish: "",
    loanAmount: "",
    secured: "",
  });
  const [isLoanFormValid, setIsLoanFormValid] = useState<boolean>(false);
  const [errors, setErrors] = useState({
    company: false,
    yearEstablish: false,
    company_type: false,
    loanAmount: false,
    secured: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    let value = "";
    if (name === "loanAmount") {
      value = e.target.value.replace(/\D/g, "");
    } else {
      value = e.target.value;
    }
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      company: formFields.company === "",
      yearEstablish: formFields.yearEstablish === "",
      company_type: formFields.company_type === "",
      loanAmount: formFields.loanAmount === "",
      secured: formFields.secured === "",
    };

    setErrors(newErrors);

    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsLoanFormValid(true);
    } else {
      console.log("Form is invalid. Please fill in all fields.");
    }
  };

  const currentYear = new Date().getFullYear();
  const last20Years = Array.from({ length: 20 }, (v, i) => currentYear - i);

  return (
    <Box className="mt-8 pt-5 flex justify-center">
      <Box
        className="p-40 loan-form"
        sx={{ background: "white", width: "500px" }}
      >
        {!isLoanFormValid ? (
          <>
            <Typography className="text-black fw-900 fs-20">
              Submit the below form
            </Typography>

            <FormControl className="w-100 mt-2">
              <TextField
                name="company"
                error={errors.company}
                helperText={errors.company ? "Company is required" : ""}
                id="outlined-basic"
                label="Company"
                className="pt-1 mb-2"
                variant="outlined"
                value={formFields.company}
                onChange={handleInputChange}
              />
              <FormControl fullWidth className="mt-3">
                <InputLabel id="year-establish-label">
                  Year Of Establishment
                </InputLabel>
                <Select
                  name="yearEstablish"
                  error={errors.yearEstablish}
                  labelId="year-establish-label"
                  id="year-establish"
                  value={formFields.yearEstablish}
                  label="Year of Establishment"
                  onChange={handleSelectChange}
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
                  Type of Industry
                </Typography>
                <RadioGroup
                  aria-labelledby="annual-term-radio-buttons-group"
                  name="company_type"
                  value={formFields.company_type}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="Manufacture"
                    control={<Radio />}
                    label="Manufacture"
                  />
                  <FormControlLabel
                    value="Service"
                    control={<Radio />}
                    label="Service"
                  />
                  <FormControlLabel
                    value="Trading"
                    control={<Radio />}
                    label="Trading"
                  />
                </RadioGroup>
                {errors.company_type && (
                  <Typography color="error" variant="caption">
                    Industry type is required
                  </Typography>
                )}
              </Box>

              <Box>
                <Typography className="mt-2 mb-2 text-black fw-800 ">
                  Looking For
                </Typography>
                <RadioGroup
                  aria-labelledby="annual-term-radio-buttons-group"
                  name="secured"
                  value={formFields.secured}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="Secured"
                    control={<Radio />}
                    label="Secured"
                  />
                  <FormControlLabel
                    value="UnSecured"
                    control={<Radio />}
                    label="UnSecured"
                  />
                </RadioGroup>
                {errors.secured && (
                  <Typography color="error" variant="caption">
                    Looking for is required
                  </Typography>
                )}
              </Box>
              <TextField
                name="loanAmount"
                error={errors.loanAmount}
                helperText={errors.loanAmount ? "Loan Amount is required" : ""}
                id="outlined-basic"
                label="Loan Amount"
                className="pt-1 mt-2"
                variant="outlined"
                value={formFields.loanAmount}
                onChange={handleInputChange}
              />
              <Button className="primary-button mt-6" onClick={handleSubmit}>
                Get Quote
              </Button>
            </FormControl>
          </>
        ) : (
          <ThankyouForm formFields={formFields} />
        )}
      </Box>
    </Box>
  );
};

export default SmeLoanForm;
