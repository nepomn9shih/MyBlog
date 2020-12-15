import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";

const LoginForm = ({handleClose, open}) => {

    return  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">
      <b>Log in</b>
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        Log in to see more info
      </DialogContentText>
      <TextField 
        autoFocus
        margin="dense"
        id="name"
        label="Email adress"
        type="email"
        fullWidth
      />
      <TextField 
        margin="dense"
        id="pass"
        label="Password"
        type="password"
        fullWidth
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="secondary" variant="outlined">
        Cancel
      </Button>
      <Button onClick={handleClose} color="primary" variant="contained">
        Log in
      </Button>
    </DialogActions>
  </Dialog>
}

export default LoginForm