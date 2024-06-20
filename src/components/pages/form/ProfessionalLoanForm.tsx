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
import ThankyouForm from "./ThankyouForm";
import { useState } from "react";

export type ProfessionalFormProps = {
  id: number;
  profession: string;
  profession_name: string;
  no_of_years_profession: string;
  loanAmount: string;
};

const ProfessionalLoanForm = ({ id }: { id: number }) => {
  const [isLoanFormValid, setIsLoanFormValid] = useState<boolean>(false);
  const [formFields, setFormFields] = useState<ProfessionalFormProps>({
    id: id,
    profession: "",
    no_of_years_profession: "",
    loanAmount: "",
    profession_name: ""
  });
  const [errors, setErrors] = useState({
    no_of_years_profession: false,
    profession: false,
    loanAmount: false,
    profession_name: false,
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
      no_of_years_profession: formFields.profession === 'other' && formFields.no_of_years_profession === "",
      profession: formFields.profession === "",
      loanAmount: formFields.loanAmount === "",
      profession_name: formFields.profession === 'other' && formFields.profession_name === ""
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
                  Profession
                </Typography>
                <RadioGroup
                  aria-labelledby="annual-term-radio-buttons-group"
                  name="profession"
                  value={formFields.profession}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="doctor"
                    control={<Radio />}
                    label="Doctor"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Others"
                  />
                </RadioGroup>
                {errors.profession && (
                  <Typography color="error" variant="caption">
                    Profession is required
                  </Typography>
                )}
              </Box>
              {formFields.profession === "other" && (
                <>
                  <TextField
                    name="profession_name"
                    error={errors.profession_name}
                    helperText={errors.profession_name ? "Profession is required" : ""}
                    id="outlined-basic"
                    label="Profession Name"
                    className="pt-1 mb-2"
                    variant="outlined"
                    value={formFields.profession_name}
                    onChange={handleInputChange}
                  />
                  <Box>
                    <Typography className="mt-2 mb-2 text-black fw-800 ">
                      No of years in Profession
                    </Typography>
                    <RadioGroup
                      aria-labelledby="annual-term-radio-buttons-group"
                      name="no_of_years_profession"
                      value={formFields.no_of_years_profession}
                      onChange={handleSelectChange}
                    >
                      <FormControlLabel
                        value="Less than 5 Years"
                        control={<Radio />}
                        label="Less Than 5 Years"
                      />
                      <FormControlLabel
                        value="5 Years and above"
                        control={<Radio />}
                        label="5 Years and above"
                      />
                    </RadioGroup>
                    {errors.no_of_years_profession && (
                      <Typography color="error" variant="caption">
                        No of years in Profession
                      </Typography>
                    )}
                  </Box>
                </>
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

export default ProfessionalLoanForm;
