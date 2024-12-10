import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      border={2}
      sx={{
        height: "5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#65D8FF"
      }}>
      <h2>Predict Japow Vis</h2>
      {/* <Typography variant="h3">Japow</Typography> */}
    </Box>
  );
}