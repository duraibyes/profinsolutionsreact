import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ThankyouForm from "./ThankyouForm";

export type PersonalFormProps = {
  id: number;
  employer_name: string;
  monthly_salary_range: string;
  loanAmount: string;
  have_other_loans: string;
  other_loan_emi_amount: string;
};

const PersonalLoanForm = ({ id }: { id: number }) => {
  const [isLoanFormValid, setIsLoanFormValid] = useState<boolean>(false);
  const [formFields, setFormFields] = useState<PersonalFormProps>({
    id: id,
    employer_name: "",
    monthly_salary_range: "",
    loanAmount: "",
    have_other_loans: "no",
    other_loan_emi_amount: "",
  });
  const [errors, setErrors] = useState({
    employer_name: false,
    monthly_salary_range: false,
    loanAmount: false,
    have_other_loans: false,
    other_loan_emi_amount: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    let value = "";
    if (name === "loanAmount" || name === 'other_loan_emi_amount') {
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
      employer_name: formFields.employer_name === "",
      monthly_salary_range: formFields.monthly_salary_range === "",
      loanAmount: formFields.loanAmount === "",
      have_other_loans: formFields.have_other_loans === '',
      other_loan_emi_amount: formFields.have_other_loans === 'yes' && formFields.other_loan_emi_amount === '',
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
                name="employer_name"
                error={errors.employer_name}
                helperText={errors.employer_name ? "Employer is required" : ""}
                id="outlined-basic"
                label="Employer Name"
                className="pt-1 mb-2"
                variant="outlined"
                value={formFields.employer_name}
                onChange={handleInputChange}
              />
              <Box>
                <Typography className="mt-2 mb-2 text-black fw-800 ">
                  Monthly Salary
                </Typography>
                <RadioGroup
                  aria-labelledby="annual-term-radio-buttons-group"
                  name="monthly_salary_range"
                  value={formFields.monthly_salary_range}
                  onChange={handleSelectChange}
                >
                  <FormControlLabel
                    value="Less than 30k"
                    control={<Radio />}
                    label="Less Than 30k"
                  />
                  <FormControlLabel
                    value="30k to 50k"
                    control={<Radio />}
                    label="30k to 50k"
                  />
                  <FormControlLabel
                    value="50k and above"
                    control={<Radio />}
                    label="50k and above"
                  />
                </RadioGroup>
                {errors.monthly_salary_range && (
                  <Typography color="error" variant="caption">
                    Monthly Salary is Required
                  </Typography>
                )}
              </Box>

              <Box>
                <Typography className="mt-2 mb-2 text-black fw-800 ">
                  Do you have any other loans ?
                </Typography>
                <RadioGroup
                  aria-labelledby="annual-term-radio-buttons-group"
                  name="have_other_loans"
                  value={formFields?.have_other_loans || 'no'}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.have_other_loans && (
                  <Typography color="error" variant="caption">
                    Other Loans is required
                  </Typography>
                )}
              </Box>
              {formFields.have_other_loans === "yes" && (
                <TextField
                  name="other_loan_emi_amount"
                  error={errors.other_loan_emi_amount}
                  helperText={
                    errors.other_loan_emi_amount
                      ? "Other Loan EMI Amount is required"
                      : ""
                  }
                  id="outlined-basic"
                  label="Other Loan EMI Amount"
                  className="pt-1 mt-2"
                  variant="outlined"
                  value={formFields.other_loan_emi_amount}
                  onChange={handleInputChange}
                />
              )}

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

export default PersonalLoanForm;
