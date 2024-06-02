import { Button, FormControl, OutlinedInput } from "@mui/material";
import { useState } from "react";
import SuccesIcon from "../../../assets/6351970_accept_approved_check_done_ok_icon 1.svg";
import { useNavigate } from "react-router-dom";

const SubmitOtp = ({ verifyOTP }: { verifyOTP: string }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string>("");
  const [otpSuccess, setOtpSuccess] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(" entering otp");
    const value = e.target.value.replace(/\D/g, "");
    setOtp(value);
  };

  const handleSubmitOtp = () => {
    if (otp.length === 4 && verifyOTP === otp) {
      setOtpSuccess(true);

      setTimeout(() => {
        navigate('/loan/bussiness-loan'); // Navigate to the desired page after timeout
      }, 1000); // 
    }
  };
  return (
    <>
      <FormControl
        sx={{
          m: 1,
          margin: "0px",
          textAlign: "center",
        }}
        variant="outlined"
      >
        <OutlinedInput
          sx={{
            borderRadius: "0",
            textAlign: "center", // Apply textAlign directly here
            "& input": {
              letterSpacing: "30px", // Apply styles to the input element inside
              textAlign: "center", // Apply center alignment to the input
            },
          }}
          id="outlined-adornment-weight1"
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
            maxLength: 4,
          }}
          onChange={handleChange}
          className={`input-otp border-left-${
            otp.length === 4 ? "primary" : "disabled"
          }`}
          value={otp}
        />
      </FormControl>
      <Button
        className={`get-otp-btn${otp.length === 4 ? "-primary" : ""}`}
        disabled={otp.length !== 4}
        sx={{ borderRadius: "0", height: "56px" }}
        onClick={handleSubmitOtp}
      >
        Submit OTP
      </Button>
      {otpSuccess && (
        <img src={SuccesIcon} style={{ height: "56px", marginLeft: "10px" }} />
      )}
    </>
  );
};

export default SubmitOtp;
