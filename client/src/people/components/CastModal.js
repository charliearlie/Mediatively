import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import PersonRow from './PersonRow';

class CastModal extends React.Component {
    render() {
        return (
            <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Cast</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.cast.map(castMember => (
                        <PersonRow
                            key={castMember.id}
                            id={castMember.id}
                            name={castMember.name}
                            character={castMember.character}
                            image={castMember.profile_path}
                        />
                    ))}
                </Modal.Body>
            </Modal>
        );
    }
}

export default CastModal;