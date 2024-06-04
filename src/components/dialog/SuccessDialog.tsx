import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import SuccessIcon from '../../assets/1930264_check_complete_done_green_success_icon.svg';
import { Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SuccessDialog({open, setOpen}:{open:boolean;setOpen:React.Dispatch<React.SetStateAction<boolean>>;}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className='py-30'>
          <DialogContentText id="alert-dialog-slide-description"  className='flex items-center justify-center flex-column px-20'>
            <DialogTitle><img src={SuccessIcon} /></DialogTitle>
            <Typography className='text-primary fw-700 fs-22 text-center'>Thank you for submitting your Quotation</Typography>
            <Typography className='fs-14 mt-3 text-center'>Our Executive will reaach you shortly! </Typography>
            <Typography className='fs-14 mb-2 text-center'>If you have any query, Please feel free to contact us +91-9876543210</Typography>
          </DialogContentText>
        </DialogContent>
       
      </Dialog>
    </React.Fragment>
  );
}
