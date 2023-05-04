import { Box, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import typographySizes from "../../theme/typography";

const ErrorBox = () => (
  <Box
    sx={{
      display: "flex",
      margin: 'auto',
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "1024px",
      height: "90vh",
      backgroundColor: "#ffffff",
    }}
  >
    <ErrorIcon sx={{ fontSize: "100px", color: "#d3032c" }} />
    <Typography sx={{ color: "#d3032c", mt: 2, ...typographySizes.title }}>
      "Oops! Something went wrong."
    </Typography>
  </Box>
);

export default ErrorBox;

