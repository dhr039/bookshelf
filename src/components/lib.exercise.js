// import styled from '@emotion/styled'
/**
 * The css prop gets the label for free, but to get the label applied to styled components,
 * you need to use a special version of the styled package called a "macro":
 * */
import styled from '@emotion/styled/macro'
import {Dialog as ReachDialog} from '@reach/dialog'
import * as colors from 'styles/colors'
import * as mq from 'styles/media-queries'
import {FaSpinner} from 'react-icons/fa'
import {keyframes} from '@emotion/core'

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
            background: colors.indigo,
            color: colors.base,
        }
    } else if (variant === 'secondary') {
        return {
            background: colors.gray,
            color: colors.text,
        }
    }
}, (props) => {console.log('another argument and just testing props:', props)})

const Input = styled.input({
    borderRadius: '3px',
    border: `1px solid ${colors.gray10}`,
    background: colors.gray,
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
    color: `${colors.text}`,
    border: `1px solid #f1f1f4`,
    cursor: 'pointer',
})

const Dialog = styled(ReachDialog)({
    maxWidth: '450px',
    borderRadius: '3px',
    paddingBottom: '3.5em',
    boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
    margin: '20vh auto',
    [mq.small]: {
        width: '100%',
        margin: '10vh auto',
    },
})

/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
 * https://www.w3schools.com/howto/howto_css_loader.asp
 * https://emotion.sh/docs/keyframes
 * https://react-icons.github.io/react-icons/
 * */
const spin = keyframes({
    '0%': {transform: 'rotate(0deg)'},
    '100%': {transform: 'rotate(360deg)'},
})

const MySpinner = styled(FaSpinner)({
    animation: `${spin} 1s linear infinite`,
})
/*if someone does not provide an aria-label, then this is what the value should be:*/
MySpinner.defaultProps = {
    'aria-label': 'loading',
}


export {CircleButton, Dialog, Button, Input, FormGroup, MySpinner}
