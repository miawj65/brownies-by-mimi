import { AppBar, Box, Button, Toolbar } from "@mui/material";
import AppRoutes from "./AppRoutes";

function NavBar() {
  return (
    <Box sx={{ width: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#ffeff2" }}>
        <Toolbar>
          <Button href="/">Home</Button>
          <Button href="/about">About</Button>
          <Button href="/order">Order</Button>
          <Button href="/contact">Contact</Button>
          <img
            src="/brownies-by-mimi.png"
            width={200}
            style={{ padding: 20 }}
          ></img>
        </Toolbar>
      </AppBar>
      <AppRoutes></AppRoutes>
    </Box>
  );
}

export default NavBar;
