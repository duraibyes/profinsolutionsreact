import { Box, Button, FormControl, InputAdornment, OutlinedInput } from "@mui/material"
import { Dispatch, SetStateAction } from "react";
type Props = {
  setMobileNo: Dispatch<SetStateAction<string>>;
  mobileNo: string;
}

const HomeInputSection = ({setMobileNo, mobileNo}:Props) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setMobileNo(value);
  };

  return (
    <Box className="py-20 flex">
          <FormControl
          className={`otp-input border-left-${mobileNo.length === 10 ? "primary" : "disabled"}`}
            sx={{
              m: 1,
              margin: "0px"
            }}
            variant="outlined"
          >
            <OutlinedInput
              sx={{ borderRadius: "0" }}
              id="outlined-adornment-weight"
              startAdornment={
                <InputAdornment position="end">+91 - </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
                maxLength: 10
              }}
              onChange={handleChange}
              value={mobileNo}
            />
          </FormControl>
          <Button className={`get-otp-btn${mobileNo.length === 10 ? "-primary":""}`} disabled={mobileNo.length !== 10} 
          sx={{ borderRadius: "0" }}>
            Get OTP
          </Button>
        </Box>
  )
}

export default HomeInputSection