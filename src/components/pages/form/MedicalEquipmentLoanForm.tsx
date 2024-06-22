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

export type MedicalFormProps = {
  id: number;
  company_type: string;
  company_name: string;
  yearEstablish: string;
  loanAmount: string;
};

const MedicalEquipmentLoanForm: React.FC<Props> = ({ id }) => {
  const [formFields, setFormFields] = useState<MedicalFormProps>({
    id: id,
    company_type: "",
    company_name: "",
    yearEstablish: "",
    loanAmount: "",
  });
  const [isLoanFormValid, setIsLoanFormValid] = useState<boolean>(false);
  const [errors, setErrors] = useState({
    company_type: false,
    yearEstablish: false,
    company_name: false,
    loanAmount: false,
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
      company_type: formFields.company_type === "",
      yearEstablish:
        formFields.company_type !== "doctor" && formFields.yearEstablish === "",
      company_name:
        formFields.company_type !== "doctor" && formFields.company_name === "",
      loanAmount: formFields.loanAmount === "",
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
              <Box>
                <RadioGroup
                  aria-labelledby="annual-term-radio-buttons-group"
                  name="company_type"
                  value={formFields.company_type}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="doctor"
                    control={<Radio />}
                    label="Doctor"
                  />
                  <FormControlLabel
                    value="hospital"
                    control={<Radio />}
                    label="Hospital"
                  />
                  <FormControlLabel
                    value="diagnostic center"
                    control={<Radio />}
                    label="Diagnostic center"
                  />
                </RadioGroup>
                {errors.company_type && (
                  <Typography color="error" variant="caption">
                    Medical type is required
                  </Typography>
                )}
              </Box>
              {formFields.company_type && formFields.company_type !== "doctor" && (
                <>
                  <TextField
                    name="company_name"
                    error={errors.company_name}
                    helperText={
                      errors.company_name
                        ? "Hospital / Center name is required"
                        : ""
                    }
                    id="outlined-basic"
                    label="Hospital / Center name"
                    className="pt-1 mb-2"
                    variant="outlined"
                    value={formFields.company_name}
                    onChange={handleInputChange}
                  />
                  <FormControl fullWidth className="">
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

export default MedicalEquipmentLoanForm;
