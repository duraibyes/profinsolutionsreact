import { Box, Button, FormControl, InputAdornment, OutlinedInput } from "@mui/material"

const HomeInputSection = () => {
  return (
    <Box className="py-20 flex">
          <FormControl
          className="otp-input"
            sx={{
              m: 1,
              margin: "0px",
              borderLeft: "5px solid var(--button-color1)",
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
              }}
            />
          </FormControl>
          <Button className="get-otp-btn" sx={{ borderRadius: "0" }}>
            Get OTP
          </Button>
        </Box>
  )
}

export default HomeInputSection