import { Paper } from "@mui/material";

function Home() {
  return (
    <Paper
      square
      elevation={1}
      sx={{
        backgroundColor: "#fdaebe",
        color: "#946656",
        marginTop: 1,
        height: 550,
      }}
    ></Paper>
  );
}

export default Home;
