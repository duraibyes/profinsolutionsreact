import { GlobalStyles } from "@mui/styled-engine";
import "../styles/style.css";

const GlobalStylesComponent = () => (
  <GlobalStyles
    styles={{
      a: {
        color: "var(--text-color3) !important",
        fontSize: "14px !important",
        fontWeight: "700 !important",
        textDecoration: "none",
        "&:hover": {
          color: "var(--primary-color) !important",
        },
        "&:active": {
          color: "darkgray",
        },
        "&.active": {
          color: "var(--primary-color) !important",
        },
      },
      "& .flex-box": {
        button: {
          color: "var(--text-color3) !important",
          fontWeight: "700 !important",
          textDecoration: "none",
          "&:hover": {
            color: "var(--primary-color) !important",
          },
        },
        
      },
      p: {
        fontSize: "14px",
        color: "var(--text-color3) !important",
      },
    }}
  />
);

export default GlobalStylesComponent;
