import {
  Button,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Successdialog from "../../dialog/SuccessDialog";

const ThankyouForm = () => {
  const [open, setOpen] = useState<boolean>(false);
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
    setMobileNo(event.target.value);
    setErrors({ ...errors, mobileNo: false });
  };

  const handleWhatsappNoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWhatsappNo(event.target.value);
    setErrors({ ...errors, whatsappNo: false });
  };

  const handleAlterNoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlterNo(event.target.value);
    setErrors({ ...errors, alterNo: false });
  };

  const validateForm = () => {
    const newErrors = {
      name: name === "",
      email: email === "",
      mobileNo: mobileNo === "",
      whatsappNo: whatsappNo === "",
      alterNo: alterNo === "",
    };

    setErrors(newErrors);

    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Submit form logic here
      console.log("Form is valid. Submitting form...");
      setOpen(true);
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
          helperText={errors.mobileNo ? "Mobile No is required" : ""}
          id="outlined-basic"
          label="Mobile No"
          className="pt-1 mb-2"
          variant="outlined"
          value={mobileNo}
          onChange={handleMobileNoChange}
        />
        <TextField
          error={errors.email}
          helperText={errors.email ? "Email is required" : ""}
          id="outlined-basic"
          label="Email Address"
          className="pt-1 mb-2"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />

        <TextField
          error={errors.whatsappNo}
          helperText={errors.whatsappNo ? "WhatsApp No is required" : ""}
          id="outlined-basic"
          label="WhatsApp No"
          className="pt-1 mb-2"
          variant="outlined"
          value={whatsappNo}
          onChange={handleWhatsappNoChange}
        />
        <TextField
          error={errors.alterNo}
          helperText={errors.alterNo ? "Alternative No is required" : ""}
          id="outlined-basic"
          label="Alternative No"
          className="pt-1 mb-2"
          variant="outlined"
          value={alterNo}
          onChange={handleAlterNoChange}
        />

        <Button className="primary-button mt-6" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
      <Successdialog open={open} setOpen={setOpen} />
    </>
  );
};

export default ThankyouForm;
