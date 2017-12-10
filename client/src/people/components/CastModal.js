import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';

class CastModal extends React.Component {
    render() {
        return (
            <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.cast.map(castMember => (
                        <p>{castMember.name}</p>
                    ))}
                </Modal.Body>
            </Modal>
        );
    }
}

export default CastModal;