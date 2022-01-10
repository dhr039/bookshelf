import styled from '@emotion/styled'
import {Dialog as ReachDialog} from '@reach/dialog'
import React from 'react';

// 🐨 create a button styled component here called "Button"
// make it look nice and allow it to support a "variant" prop which can be
// either "primary" or "secondary".
// 💰 don't forget to export it at the bottom!
// 💰 In my final version, I style padding, border, lineHeight, and borderRadius
//    the same for both types, and then change the background and color based
//    on the given variant.
// 🦉 remember, you don't have to make things look perfect or just like they
// do in the final example. Just make sure you understand how to create the
// styled component and accept a prop to change which styles apply.


/**
 * you can have any number of arguments for the styled.button(,,,,,)
 * and any of them can be a function
 * */
const Button = styled.button({
    padding: '10px 15px',
    border: '0',
    lineHeight: '1',
    borderRadius: '3px',
}, ({variant = 'primary'}) => { //set 'primary' as default
    if (variant === 'primary') {
        return {
            background: '#3f51b5',
            color: 'white',
        }
    } else if (variant === 'secondary') {
        return {
            background: '#f1f2f7',
            color: '#434449',
        }
    }
}, (props) => {console.log('another argument and just testing props:', props)})


// 🐨 Feel free to create as many reusable styled components here as you'd like
// 💰 in my finished version I have: Button, Input, CircleButton, Dialog, FormGroup

// Input
//   borderRadius: '3px',
//   border: '1px solid #f1f1f4',
//   background: '#f1f2f7',
//   padding: '8px 12px',

// FormGroup
//   display: 'flex',
//   flexDirection: 'column',

// 💰 I'm giving a few of these to you:
const CircleButton = styled.button({
    borderRadius: '30px',
    padding: '0',
    width: '40px',
    height: '40px',
    lineHeight: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    color: '#434449',
    border: `1px solid #f1f1f4`,
    cursor: 'pointer',
})

const Dialog = styled(ReachDialog)({
    maxWidth: '450px',
    borderRadius: '3px',
    paddingBottom: '3.5em',
    boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
    margin: '20vh auto',
    '@media (max-width: 991px)': {
        width: '100%',
        margin: '10vh auto',
    },
})

export {CircleButton, Dialog, Button}
