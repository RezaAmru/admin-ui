import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

function AppSnackbar({
  message,
  onClose,
  open,
  severity = "success",
}) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      autoHideDuration={4000}
      onClose={onClose}
      open={open}
    >
      <MuiAlert
        elevation={6}
        onClose={onClose}
        severity={severity}
        variant="filled"
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
}

export default AppSnackbar;
