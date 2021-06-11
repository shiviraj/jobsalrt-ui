import Modal from "@material-ui/core/Modal";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  modal: {
    position: "absolute",
    height: "100vh",
    width: "100vw",
    backgroundColor: theme.palette.common.white
  }
}))

const FullSizeModal = ({open, setOpen, children}) => {
  const classes = useStyles()
  const handleClose = () => setOpen(false);
  return <Modal open={open} onClose={handleClose} onEscapeKeyDown={handleClose}
                className={classes.modal}>
    {children}
  </Modal>
}

export default FullSizeModal
