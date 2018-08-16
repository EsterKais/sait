import React from 'react';

class Modal extends React.Component {
    componentDidMount() {
        window.addEventListener('keyup', this.handleKeyUp, false);
        document.addEventListener('click', this.handleOutsideClick, false);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp, false);
        document.removeEventListener('click', this.handleOutsideClick, false);
    }

    handleKeyUp(e) {
        const { onCloseRequest } = this.props;
        const keys = {
            /* 'esc' */
            27: () => {
                e.preventDefault();
                onCloseRequest();
            }
        }

        if (keys[e.keyCode]) { keys[e.keyCode](); }
    }

    render(props) {
        const { children, onCloseRequest } = this.props

        return (
            <div className="modal-overlay">
                <div className="modal-content">
                    { children }
                </div>
                <button 
                    type="button"
                    className="modal-close"
                    onClick={onCloseRequest}
                />
            </div>
        );
    }
};

export default Modal;