import {
  Button,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Successdialog from "../../dialog/SuccessDialog";
import { BusinessFormProps } from "./BussinessLoanForm";
import axios from "axios";
import { ApiPath } from "../../../services/LoanCategoryApi";
import { useNavigate } from "react-router-dom";
import { ProfessionalFormProps } from "./ProfessionalLoanForm";

type ThankyouFormProps = {
  formFields: BusinessFormProps | ProfessionalFormProps;
};

const ThankyouForm = ({formFields}: ThankyouFormProps) => {

  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [isFormSubmit, setIsFormSubmit] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobileNo, setMobileNo] = useState<string>("");
  const [whatsappNo, setWhatsappNo] = useState<string>("");
  const [alterNo, setAlterNo] = useState<string>("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    mobileNo: false,
    whatsappNo: false,
    alterNo: false,
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setErrors({ ...errors, name: false });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setErrors({ ...errors, email: false });
  };

  const handleMobileNoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    setMobileNo(value);
    setErrors({ ...errors, mobileNo: false });
  };

  const handleWhatsappNoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.replace(/\D/g, "");
    setWhatsappNo(value);
    setErrors({ ...errors, whatsappNo: false });
  };

  const handleAlterNoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    setAlterNo(value);
    setErrors({ ...errors, alterNo: false });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: name === "",
      email: email === "" || !validateEmail(email),
      mobileNo: mobileNo.length !== 10,
      whatsappNo: whatsappNo.length !== 10,
      alterNo: alterNo.length !== 10,
    };

    setErrors(newErrors);

    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setIsFormSubmit(true);
      const updatedFormFields = {
        ...formFields,
        name,
        email,
        mobileNo,
        whatsappNo,
        alterNo,
      };
      try {
        const bearerToken =  localStorage.getItem("authToken");
        const response = await axios.post(ApiPath + 'loan-category', updatedFormFields, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        });

        if(response.data.error === 0) {
          setOpen(true);
          setTimeout(() => {
            navigate('/');
          }, 3000)
        }
       
        console.log('responst data', response.data);
      } catch (error) {
        console.error('Error sending OTP:', error);
      } finally {
        setIsFormSubmit(false);
      }
      console.log("Form is valid. Submitting form with data:", updatedFormFields);
    } else {
      console.log("Form is invalid. Please fill in all fields.");
    }
  };

  return (
    <>
      <Typography className="text-primary fw-900 fs-18">
        Thank you for your quote
      </Typography>
      <Typography className="text-black fw-900 fs-20">
        Please enter your personal information
      </Typography>

      <FormControl className="w-100 mt-2">
        <TextField
          error={errors.name}
          helperText={errors.name ? "Full Name is required" : ""}
          id="outlined-basic"
          label="Full Name"
          className="pt-1 mb-2"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          error={errors.mobileNo}
          helperText={errors.mobileNo ? "Mobile No is required or Not valid" : ""}
          id="outlined-basic"
          label="Mobile No"
          className="pt-1 mb-2"
          variant="outlined"
          value={mobileNo}
          inputProps={{ maxLength: 10 }} 
          onChange={handleMobileNoChange}
        />
        <TextField
          error={errors.email}
          helperText={errors.email ? "Email is required or Not valid" : ""}
          id="outlined-basic"
          label="Email Address"
          className="pt-1 mb-2"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />

        <TextField
          error={errors.whatsappNo}
          helperText={errors.whatsappNo ? "WhatsApp No is required or Not valid" : ""}
          id="outlined-basic"
          label="WhatsApp No"
          className="pt-1 mb-2"
          variant="outlined"
          value={whatsappNo}
          inputProps={{ maxLength: 10 }} 
          onChange={handleWhatsappNoChange}
        />
        <TextField
          error={errors.alterNo}
          helperText={errors.alterNo ? "Alternative No is required or Not valid" : ""}
          id="outlined-basic"
          label="Alternative No"
          className="pt-1 mb-2"
          variant="outlined"
          value={alterNo}
          inputProps={{ maxLength: 10 }} 
          onChange={handleAlterNoChange}
        />

        <Button className="primary-button mt-6" disabled={isFormSubmit} onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
      <Successdialog open={open} setOpen={setOpen} />
    </>
  );
};

export default ThankyouForm;
