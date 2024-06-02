import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import SubmitOtp from "./SubmitOtp";
type Props = {
  setMobileNo: Dispatch<SetStateAction<string>>;
  mobileNo: string;
};

const HomeInputSection = ({ setMobileNo, mobileNo }: Props) => {
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [verifyOTP, setVerifyOTP] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(' engtering number')
    const value = e.target.value.replace(/\D/g, "");
    setMobileNo(value);
  };

  const getOTP = () => {
    console.log(" get otp called");
    setIsOtpSent(true);
  };

  useEffect(() => {
    setVerifyOTP('0000');
  }, [])
  

  return (
    <Box className="py-20 flex">
      {isOtpSent ? (
        <SubmitOtp verifyOTP={verifyOTP} />
      ) : (
        <>
          <FormControl
            className={`otp-input border-left-${
              mobileNo.length === 10 ? "primary" : "disabled"
            }`}
            sx={{
              m: 1,
              margin: "0px",
            }}
            variant="outlined"
          >
            <OutlinedInput
              sx={{ borderRadius: "0", letterSpacing: '2px', marginLeft: '5px !important' }}
              id="outlined-adornment-weight"
              startAdornment={
                <InputAdornment position="end" sx={{ marginRight: '5px'}}>+91 - </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
                maxLength: 10,
              }}
              className="input-no"
              onChange={handleChange}
              value={mobileNo}
            />
          </FormControl>
          <Button
            className={`get-otp-btn${mobileNo.length === 10 ? "-primary" : ""}`}
            disabled={mobileNo.length !== 10}
            sx={{ borderRadius: "0" }}
            onClick={getOTP}
          >
            Get OTP
          </Button>
        </>
      )}
    </Box>
  );
};

export default HomeInputSection;
