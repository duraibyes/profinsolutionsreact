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
  
  export type MachineryFormProps = {
    id: number;
    company: string;
    annualTerm: string;
    yearEstablish: string;
    loanAmount: string;
    machinery_type: string;
  };
  
  const IndustryMachinaryLoanForm: React.FC<Props> = ({ id }) => {
    const [formFields, setFormFields] = useState<MachineryFormProps>({
      id: id,
      company: "",
      annualTerm: "",
      yearEstablish: "",
      loanAmount: "",
      machinery_type: "",
    });
    const [isLoanFormValid, setIsLoanFormValid] = useState<boolean>(false);
    const [errors, setErrors] = useState({
      company: false,
      yearEstablish: false,
      annualTerm: false,
      loanAmount: false,
      machinery_type: false,
    });
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name } = e.target;
      let value = ''
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
        annualTerm: formFields.annualTerm === "",
        loanAmount: formFields.loanAmount === "",
        machinery_type: formFields.machinery_type === "",
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
                    Annual Turn Over
                  </Typography>
                  <RadioGroup
                    aria-labelledby="annual-term-radio-buttons-group"
                    name="annualTerm"
                    value={formFields.annualTerm}
                    onChange={handleInputChange}
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
                  name="machinery_type"
                  error={errors.machinery_type}
                  helperText={errors.machinery_type ? "Machinery Type is required" : ""}
                  id="outlined-basic"
                  label="Machinery Type"
                  className="pt-1 mt-2"
                  variant="outlined"
                  value={formFields.machinery_type}
                  onChange={handleInputChange}
                />
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
  
  export default IndustryMachinaryLoanForm;
  