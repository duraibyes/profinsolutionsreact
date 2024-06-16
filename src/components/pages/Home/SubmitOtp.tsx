import { Button, FormControl, OutlinedInput } from "@mui/material";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import SuccesIcon from "../../../assets/6351970_accept_approved_check_done_ok_icon 1.svg";
import FailIcon from "../../../assets/otp-wrong-icon.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ApiPath } from "../../../services/LoanCategoryApi";

const SubmitOtp = ({
  verifyOTP,
  mobileNo,
}: {
  verifyOTP: string;
  mobileNo: string;
}) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string>("");
  const [otpSuccess, setOtpSuccess] = useState<boolean>(false);
  const [otpFail, setOtpFail] = useState<boolean>(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(" entering otp");
    const value = e.target.value.replace(/\D/g, "");
    setOtp(value);
    if (value.length === 4 && verifyOTP !== value) {
      setOtpFail(true);
    } else {
      setOtpFail(false);
    }
  },[]);

  const handleSubmitOtp = async () => {
    if (otp.length === 4 && verifyOTP === otp) {
      setOtpSuccess(true);
      try {
        const response = await axios.post(`${ApiPath}submit-otp`, {
          mobile_no: mobileNo,
          otp: otp
        });
        if (response.data.error === "0") {
          localStorage.setItem("authToken", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));

          setTimeout(() => {

            navigate('/loans');
          }, 1000)

        } else {
          console.error("Invalid OTP:", response.data.message);
        }
      } catch (error) {
        console.error('Error sending OTP:', error);
      }
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
        className={`get-otp-btn${otp.length === 4 && verifyOTP === otp ? "-primary" : ""}`}
        disabled={otp.length !== 4 || verifyOTP !== otp}
        sx={{ borderRadius: "0", height: "56px" }}
        onClick={handleSubmitOtp}
      >
        Submit OTP
      </Button>
      {otpSuccess && (
        <img src={SuccesIcon} style={{ height: "56px", marginLeft: "10px" }} />
      )}

      {otpFail && (
        <img src={FailIcon}  style={{ height: "56px", marginLeft: "10px" }} />
      )}
    </>
  );
};

export default SubmitOtp;
