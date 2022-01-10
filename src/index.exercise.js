import ReactDOM from 'react-dom';
import React from 'react';
import {Logo} from './components/logo';
import {Dialog} from "@reach/dialog";
import "@reach/dialog/styles.css";

function LoginForm({onSubmit, btnText = 'Login'}) {
    // const [username, setUsername] = React.useState('')
    // const [password, setPassword] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault()
        /*thanks to the ids we have these, they are the DOM nodes that have these values ('username' and 'password')*/
        const {usernameId, passwordId} = event.target.elements

        onSubmit({
            username: usernameId.value, password: passwordId.value
        })
    }

    // function handleUserChange(event) {
    //     setUsername(event.target.value.toLowerCase())
    // }
    //
    // function handlePassChange(event) {
    //     setPassword(event.target.value.toLowerCase())
    // }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor="usernameInput">Username:</label>
                    <input
                        id="usernameId"
                        type="text"
                        // onChange={handleUserChange}
                        // value={username}
                    />
                </div>
                <div>
                    <label htmlFor="usernameInput">Password:</label>
                    <input
                        id="passwordId"
                        type="password"
                        // onChange={handlePassChange}
                        // value={password}
                    />
                </div>
            </div>
            <button type="submit">{btnText}</button>
        </form>
    )
}

function ModalCustomDialog({modalOpen = 'none', onClose}) {
    function login(formData) {
        console.log('login: ', formData);
    }

    function register(formData) {
        console.log('register: ', formData);
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
                <LoginForm onSubmit={login}/>
            </Dialog>
        )
    } else if (modalOpen === 'register') {
        return (
            <Dialog aria-label="Registration form" isOpen={true} onDismiss={onClose}>
                <button onClick={onClose}>Close</button>
                <h3>REGISTER</h3>
                <LoginForm onSubmit={register} btnText='Register'/>
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
