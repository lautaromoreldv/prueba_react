import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function PositionedSnackbar() {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        key={"top" + "center"}
      >
          <Alert onClose={handleClose} variant="filled" severity="success">
                ¡El formulario de contacto se envió con éxito!
          </Alert>
      </Snackbar>
    </div>
  );
}
