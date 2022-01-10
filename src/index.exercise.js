/** @jsx jsx */
import {jsx} from '@emotion/core'
import * as React from 'react'

// 🐨 let's get a solid reset of global styles so everything looks a bit better
// In this project we're using bootstrap-reboot which you can import from
import 'bootstrap/dist/css/bootstrap-reboot.css'
// 🦉 Note: you can definitely use regular styles to style React apps
// and using any modern toolchain will allow you to simply import the CSS file
// but CSS-in-JS is generally easier to maintain.
import '@reach/dialog/styles.css'
import ReactDOM from 'react-dom'
// 🐨 you'll need to import some new components that you'll be creating
// in this file
// import {Button, Input, FormGroup} from './components/lib'
import {Modal, ModalContents, ModalOpenButton} from './components/modal'
import {Logo} from './components/logo'

function LoginForm({onSubmit, submitButton}) {
    function handleSubmit(event) {
        event.preventDefault()
        const {username, password} = event.target.elements

        onSubmit({
            username: username.value,
            password: password.value,
        })
    }

    // 🐨 this <form> could use a css prop
    // 🎨
    //    display: 'flex',
    //    flexDirection: 'column',
    //    alignItems: 'stretch',
    //    '> div': {
    //      margin: '10px auto',
    //      width: '100%',
    //      maxWidth: '300px',
    //    },
    return (
        <form onSubmit={handleSubmit}>
            {/* 🐨 these div elements could be a FormGroup you create in components/lib */}
            {/* 🐨 and the inputs elements could be custom styled Input components too */}
            <div>
                <label htmlFor="username">Username</label>
                <input id="username"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password"/>
            </div>
            <div>{React.cloneElement(submitButton, {type: 'submit'})}</div>
        </form>
    )
}

function App() {
    function login(formData) {
        console.log('login', formData)
    }

    function register(formData) {
        console.log('register', formData)
    }

    return (
        <div
            css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100vh',
            }}
        >
            <Logo width="80" height="80"/>
            <h1>Bookshelf</h1>
            {/*
            {/* 🐨 And make sure to use the new Button component for all these buttons */}
            <div
            css={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gridGap: '0.75rem',
            }}>
                <Modal>
                    <ModalOpenButton>
                        <button variant="primary">Login</button>
                    </ModalOpenButton>
                    <ModalContents aria-label="Login form" title="Login">
                        <LoginForm
                            onSubmit={login}
                            submitButton={<button variant="primary">Login</button>}
                        />
                    </ModalContents>
                </Modal>
                <Modal>
                    <ModalOpenButton>
                        <button variant="secondary">Register</button>
                    </ModalOpenButton>
                    <ModalContents aria-label="Registration form" title="Register">
                        <LoginForm
                            onSubmit={register}
                            submitButton={<button variant="secondary">Register</button>}
                        />
                    </ModalContents>
                </Modal>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
