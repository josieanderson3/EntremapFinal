import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function PrivacyModal(props) {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const { isLoggedIn } = props;
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    setOpen(false);
    if (isLoggedIn) {
      history.push('/profile');
    } else {
      history.push('/login');
    }
  };

  const handleChange = (e) => {
    setChecked(!checked);
  };

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={handleClickOpen}
      >
        Begin
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">PRIVACY POLICY</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your privacy is important to us. This privacy policy will help you understand how Entremap uses and protects the data you provide to us. When using the site, we may collect the following: Your email address and name, any profile data collected from the survey, information from third-party services such as LinkedIn including the number of connections and languages. This data is collected with your knowledge and consent. This information is retained for only as long as necessary to provide you with our services. If you choose to delete your account, this information will be permanently removed. We use this information to provide you with an accurate and comprehensive report on your entreprenurial mindset. Any personal information will not be shared with any third-parties, except when required to by law. We reserve the right to change this privacy policy at any time.
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'space-between' }}>
          <FormControlLabel
            control={<Checkbox />}
            label="I have read and understood"
            onChange={handleChange}
          />

          <Button
            onClick={handleAgree}
            autoFocus
            color="primary"
            variant="contained"
            disabled={!checked}
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
