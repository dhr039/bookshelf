// import styled from '@emotion/styled'
/**
 * The css prop gets the label for free, but to get the label applied to styled components,
 * you need to use a special version of the styled package called a "macro":
 * */
import styled from '@emotion/styled/macro'
import {Dialog as ReachDialog} from '@reach/dialog'
import React from 'react';

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

const Input = styled.input({
    borderRadius: '3px',
    border: '1px solid #f1f1f4',
    background: '#f1f2f7',
    padding: '8px 12px',
})

const FormGroup = styled.div({
    display: 'flex',
    flexDirection: 'column',
})

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

export {CircleButton, Dialog, Button, Input, FormGroup}
