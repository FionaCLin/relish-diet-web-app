import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const styles = {
    navStyle: { background: "red" },
    noteStyle: { color: "yellow", fontSize: "20px" },
    btnStyle: { background: "blue", marginLeft: "10px" }
  };

function EditImageModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button style={styles.btnStyle} variant='primary' onClick={handleShow}>
        Take Note
      </Button>

      <Modal show={show} onHide={handleClose} style={{opacity:1}}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditImageModal;
