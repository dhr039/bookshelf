import ReactDOM from 'react-dom';
import React from 'react';
import {Logo} from './components/logo';
import {Dialog} from "@reach/dialog";
import "@reach/dialog/styles.css";

function LoginForm({onSubmit}) {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault()
        onSubmit(username, password)
    }

    function handleUserChange(event) {
        setUsername(event.target.value.toLowerCase())
    }

    function handlePassChange(event) {
        setPassword(event.target.value.toLowerCase())
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor="usernameInput">Username:</label>
                    <input
                        id="usernameInput"
                        type="text"
                        onChange={handleUserChange}
                        value={username}
                    />
                </div>
                <div>
                    <label htmlFor="usernameInput">Password:</label>
                    <input
                        id="passwordInput"
                        type="password"
                        onChange={handlePassChange}
                        value={password}
                    />
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

function ModalCustomDialog({modalOpen = 'none', onClose}) {
    const onFormSubmit = (username, password) => {
        const login = {username, password}
        console.log(login);
    }

    if (modalOpen === 'none') {
        return (
            <Dialog aria-label="empty" isOpen={false}>
            </Dialog>
        )
    } else if (modalOpen === 'login') {
        return (
            <Dialog aria-label="Login form" isOpen={true} onDismiss={onClose}>
                <button onClick={onClose}>Close</button>
                <h3>LOGIN</h3>
                <LoginForm onSubmit={onFormSubmit}/>
            </Dialog>
        )
    } else if (modalOpen === 'register') {
        return (
            <Dialog aria-label="Registration form" isOpen={true} onDismiss={onClose}>
                <button onClick={onClose}>Close</button>
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
