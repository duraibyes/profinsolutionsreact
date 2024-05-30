import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "../../assets/logo.svg";
import {
  Divider,
  Drawer,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import UserIcon from "../../assets/userIcon.svg";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
const drawerWidth = 240;
export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={Logo} />
      </Typography>
      <Divider />
      <List className="px-20">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Reach Us" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid container>
      <Grid item xs={12}>
        <AppBar
          position="static"
          sx={{ boxShadow: "none", background: "none" }}
        >
          <Toolbar>
            <img src={Logo} />
            <Box sx={{ flexGrow: 1 }} />
            <Box className="flex-box">
              <Link href="#" underline="none" className="active">
                Home
              </Link>
              <Link href="#" underline="none">
                About Us
              </Link>
              <Link href="#" underline="none">
                Reach Us
              </Link>
              <Link
                component="button"
                variant="body2"
                className="link"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Login
              </Link>
              {/* <Typography className='link'>
              <img src={UserIcon} style={{width:'16px', paddingRight: '5px'}}/>
            User
            </Typography> */}
            </Box>
            <Box className="more-icon">
              <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            anchor="right"
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Grid>
    </Grid>
  );
}
