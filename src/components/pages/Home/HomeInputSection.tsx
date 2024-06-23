import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { Dispatch, SetStateAction, memo, useCallback, useEffect, useState } from "react";
import SubmitOtp from "./SubmitOtp";
import axios from "axios";
import { ApiPath } from "../../../services/LoanCategoryApi";
type Props = {
  setMobileNo: Dispatch<SetStateAction<string>>;
  mobileNo: string;
};

const defaultHeaders = {
  "Content-Type": "application/json",
};

const HomeInputSection = ({ setMobileNo, mobileNo }: Props) => {
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [verifyOTP, setVerifyOTP] = useState<string>('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setMobileNo(value);
  }, []);

  const getOTP = async () => {
    try {
      const response = await axios.post(`${ApiPath}send-otp`, {
        mobile_no: mobileNo,
      },{
        headers: defaultHeaders,
        withCredentials: true // This includes credentials in the request
      });
      setIsOtpSent(true);
      setVerifyOTP(response.data.otp); // Assuming the API returns the OTP
    } catch (error) {
      console.error('Error sending OTP:', error);
    } finally {
    }
  };  

  useEffect(() => {
  console.log(' shome input effec is called')
  }, [isOtpSent])
  

  console.log('  verifyOTP ', verifyOTP)

  return (
    <Box className="py-20 flex">
      {isOtpSent ? (
        <SubmitOtp verifyOTP={verifyOTP} mobileNo={mobileNo} />
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

export default memo(HomeInputSection);
