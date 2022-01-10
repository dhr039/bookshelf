import ReactDOM from 'react-dom';
import React from 'react';
import {Logo} from './components/logo';
import {Dialog} from "@reach/dialog";
import "@reach/dialog/styles.css";
import VisuallyHidden from "@reach/visually-hidden";

function ModalCustomDialog({modalOpen = 'none', onClose}) {
    if (modalOpen === 'none') {
        return (
            <Dialog aria-label="empty" isOpen={false}>
            </Dialog>
        )
    } else if (modalOpen === 'login') {
        return (
            <Dialog aria-label="Login form" isOpen={true} onDismiss={onClose}>
                <button className="close-button" onClick={onClose}><VisuallyHidden>Close</VisuallyHidden> <span
                    aria-hidden>×</span></button>
                <h3>LOGIN</h3>
            </Dialog>
        )
    } else if (modalOpen === 'register') {
        return (
            <Dialog aria-label="Registration form" isOpen={true} onDismiss={onClose}>
                <button className="close-button" onClick={onClose}><VisuallyHidden>Close</VisuallyHidden> <span
                    aria-hidden>×</span></button>
                <h3>REGISTER</h3>
            </Dialog>
        )

    } else {
        throw new Error('unsupported modal for custom dialog')
    }
}

function App() {
    const [modalOpen, setModalOpen] = React.useState('none')
    
    return (
        <>
            <Logo width={80} height={80}/>
            <h1>Bookshelf</h1>
            <div>
                <button onClick={() => {
                    setModalOpen('login')
                }}>Login
                </button>
            </div>
            <div>
                <button onClick={() => {
                    setModalOpen('register')
                }}>Register
                </button>
            </div>

            <ModalCustomDialog modalOpen={modalOpen} onClose={() => {
                setModalOpen('none')
            }}/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
