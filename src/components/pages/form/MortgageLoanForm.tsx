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

export type MortgageFormProps = {
  id: number;
  employment_type: string;
  employer_name: string;
  monthly_salary: string;
  total_work_experience: string;
  loanAmount: string;
  annualTerm: string;
  no_of_years_profession: string;
  property_type: string;
  otherProperty: string;
};

const MortgageLoanForm = ({ id }: { id: number }) => {
  const [isLoanFormValid, setIsLoanFormValid] = useState<boolean>(false);
  const [formFields, setFormFields] = useState<MortgageFormProps>({
    id: id,
    employment_type: "",
    employer_name: "",
    monthly_salary: "",
    total_work_experience: "",
    loanAmount: "",
    annualTerm: "",
    no_of_years_profession: "",
    property_type: "",
    otherProperty: "",
  });
  const [errors, setErrors] = useState({
    employer_name: false,
    employment_type: false,
    monthly_salary: false,
    total_work_experience: false,
    loanAmount: false,
    annualTerm: false,
    no_of_years_profession: false,
    property_type: false,
    otherProperty: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    let value = "";
    if (name === "loanAmount" || name === "monthly_salary") {
      value = e.target.value.replace(/\D/g, "");
    } else {
      value = e.target.value;
    }

    if (name === "employment_type") {
      setFormFields({
        id: id,
        employment_type: value,
        employer_name: "",
        monthly_salary: "",
        total_work_experience: "",
        loanAmount: "",
        annualTerm: "",
        no_of_years_profession: "",
        property_type: "",
        otherProperty: "",
      });
    } else {
      setFormFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }));
    }

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
      employment_type: formFields.employment_type === "",
      employer_name:
        formFields.employment_type === "salaried" &&
        formFields.employer_name === "",
      monthly_salary:
        formFields.employment_type === "salaried" &&
        formFields.monthly_salary === "",
      total_work_experience:
        formFields.employment_type === "salaried" &&
        formFields.total_work_experience === "",
      annualTerm:
        formFields.employment_type === "self employed" &&
        formFields.annualTerm === "",
      no_of_years_profession:
        formFields.employment_type === "self employed" &&
        formFields.no_of_years_profession === "",
      loanAmount: formFields.loanAmount === "",
      property_type: formFields.property_type === "",
      otherProperty:
        formFields.property_type === "others" &&
        formFields.otherProperty === "",
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
              <Box>
                <Typography className="mt-2 mb-2 text-black fw-800 ">
                  Employement Type
                </Typography>
                <RadioGroup
                  aria-labelledby="annual-term-radio-buttons-group"
                  name="employment_type"
                  value={formFields.employment_type}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="salaried"
                    control={<Radio />}
                    label="Salaried"
                  />
                  <FormControlLabel
                    value="self employed"
                    control={<Radio />}
                    label="Self Employed"
                  />
                </RadioGroup>
                {errors.employment_type && (
                  <Typography color="error" variant="caption">
                    Employement is required
                  </Typography>
                )}
              </Box>
              {formFields.employment_type === "salaried" ? (
                <>
                  <TextField
                    name="employer_name"
                    error={errors.employer_name}
                    helperText={
                      errors.employer_name ? "Company Name is required" : ""
                    }
                    id="outlined-basic"
                    label="Company Name"
                    className="pt-1 mt-2"
                    variant="outlined"
                    value={formFields.employer_name}
                    onChange={handleInputChange}
                  />
                  <TextField
                    name="monthly_salary"
                    error={errors.monthly_salary}
                    helperText={
                      errors.monthly_salary ? "Monthly Salary is required" : ""
                    }
                    id="outlined-basic"
                    label="Monthly Salary"
                    className="pt-1 mt-2"
                    variant="outlined"
                    value={formFields.monthly_salary}
                    onChange={handleInputChange}
                  />
                  <TextField
                    name="total_work_experience"
                    error={errors.total_work_experience}
                    helperText={
                      errors.total_work_experience
                        ? "Total Work Experience is required"
                        : ""
                    }
                    id="outlined-basic"
                    label="Total Work Experience "
                    className="pt-1 mt-2"
                    variant="outlined"
                    placeholder="3 years and 5 months"
                    value={formFields.total_work_experience}
                    onChange={handleInputChange}
                  />
                </>
              ) : (
                <>
                  <TextField
                    name="annualTerm"
                    error={errors.annualTerm}
                    helperText={
                      errors.annualTerm
                        ? "Annual Term Over Per Year is required"
                        : ""
                    }
                    id="outlined-basic"
                    label="Annual Term Over Per Year"
                    className="pt-1 mt-2"
                    variant="outlined"
                    value={formFields.annualTerm}
                    onChange={handleInputChange}
                  />
                  <TextField
                    name="no_of_years_profession"
                    error={errors.no_of_years_profession}
                    helperText={
                      errors.no_of_years_profession
                        ? "No of Years in Business is required"
                        : ""
                    }
                    id="outlined-basic"
                    label="No of Years in Business"
                    className="pt-1 mt-2"
                    variant="outlined"
                    placeholder="3 years and 5 months"
                    value={formFields.no_of_years_profession}
                    onChange={handleInputChange}
                  />
                </>
              )}

              <Box>
                <Typography className="mt-2 mb-2 text-black fw-800 ">
                  Type of Property
                </Typography>
                <RadioGroup
                  aria-labelledby="annual-term-radio-buttons-group"
                  name="property_type"
                  value={formFields.property_type}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="residential"
                    control={<Radio />}
                    label="Residential"
                  />
                  <FormControlLabel
                    value="commercial"
                    control={<Radio />}
                    label="Commercial"
                  />
                  <FormControlLabel
                    value="industrial"
                    control={<Radio />}
                    label="Industrial"
                  />
                  <FormControlLabel
                    value="approved vacant land"
                    control={<Radio />}
                    label="Approved vacant land"
                  />
                  <FormControlLabel
                    value="marriage hall"
                    control={<Radio />}
                    label="Marriage hall"
                  />
                  <FormControlLabel
                    value="warehouse"
                    control={<Radio />}
                    label="Warehouse"
                  />
                  <FormControlLabel
                    value="others"
                    control={<Radio />}
                    label="Others"
                  />
                </RadioGroup>
                {errors.employment_type && (
                  <Typography color="error" variant="caption">
                    Property Type is required
                  </Typography>
                )}
              </Box>
              {formFields.property_type === "others" && (
                <TextField
                  name="otherProperty"
                  error={errors.otherProperty}
                  helperText={
                    errors.otherProperty ? "Other Property is required" : ""
                  }
                  id="outlined-basic"
                  label="Other Property"
                  className="pt-1 mt-2"
                  variant="outlined"
                  value={formFields.otherProperty}
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

export default MortgageLoanForm;
