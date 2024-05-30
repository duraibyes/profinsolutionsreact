import { GlobalStyles } from "@mui/styled-engine";
import "../styles/style.css";

const GlobalStylesComponent = () => (
  <GlobalStyles
    styles={{
      a: {
        color: "var(--text-color3) !important",
        fontSize: "14px !important",
        fontWeight: "700 !important",
        fontFamily: 'Jost !important',
        letterSpacing: '1px !important',
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
          fontFamily: 'Jost',
          letterSpacing: '1px !important',
          "&:hover": {
            color: "var(--primary-color) !important",
          },
        },
        
      },
      p: {
        fontSize: "14px ",
        fontFamily: 'Jost !important',
        color: "var(--text-color3) !important",
        letterSpacing: '1px !important',
      },
      typography: {
        fontFamily: 'Jost !important',
        letterSpacing: '1px !important',
      }
    }}
  />
);

export default GlobalStylesComponent;
