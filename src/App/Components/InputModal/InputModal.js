import React from 'react';
import Modal from 'react-responsive-modal';

class InputModal extends React.Component
{
    state = { open: false };

    onOpenModal = () => {
        this.setState({ open: true });
    }

    onCloseModal = () => {
        this.setState({ open: false });
    }

    render() {
        const { open } = this.state;

        return (
            <div className="input-modal-container">
                <button onClick={ this.onOpenModal }>Open Modal</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>This Modal</h2>
                </Modal>
            </div>
        );
    }
}

export default InputModal;