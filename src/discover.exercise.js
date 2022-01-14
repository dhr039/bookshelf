/** @jsx jsx */
import {jsx} from '@emotion/core'

import './bootstrap'
import Tooltip from '@reach/tooltip'
import {FaTimes, FaSearch} from 'react-icons/fa'
import {Input, BookListUL, Spinner} from './components/lib'
import {BookRow} from './components/book-row'
import * as React from 'react'
import {client} from './utils/api-client'
import * as colors from './styles/colors'

function DiscoverBooksScreen() {
    const [state, setState] = React.useState({
        status: 'idle',
        query: '',
        data: null,
        error: null,
    })
    const {status, query, data, error} = state

    const [queried, setQueried] = React.useState(false)

    React.useEffect(() => {
        if (!queried) {
            return
        }
        setState({...state, status: 'loading'})
        setQueried(false)
        client(query).then(data => {
            // console.log('DHR', data)
            setState({...state, status: 'success', data: data})
        }, errorData => {
            console.log('DHR ERROR DATA::: ', errorData)
            setState({...state, status: 'error', error: errorData})
        })
    }, [queried, query])

    const isLoading = status === 'loading'
    const isSuccess = status === 'success'
    const isError = status === 'error'

    function handleSearchSubmit(event) {
        event.preventDefault()
        setQueried(true)
        setState({...state, query: event.target.elements.search.value})
    }

    return (
        <div
            css={{maxWidth: 800, margin: 'auto', width: '90vw', padding: '40px 0'}}
        >
            <form onSubmit={handleSearchSubmit}>
                <Input
                    placeholder="Search books..."
                    id="search"
                    css={{width: '100%'}}
                />
                <Tooltip label="Search Books">
                    <label htmlFor="search">
                        <button
                            type="submit"
                            css={{
                                border: '0',
                                position: 'relative',
                                marginLeft: '-35px',
                                background: 'transparent',
                            }}
                        >
                            {isLoading ? <Spinner/> :
                                isError ? <FaTimes aria-label="error" css={{color: colors.danger}}/> :
                                    <FaSearch aria-label="search"/>}
                        </button>
                    </label>
                </Tooltip>
            </form>

            {
                isError ? (
                    <div css={{color: colors.danger}}>
                        <p>There was an error:</p>
                        <pre>{error.message}</pre>
                    </div>
                ) : null
            }

            {isSuccess ? (
                data?.books?.length ? (
                    <BookListUL css={{marginTop: 20}}>
                        {data.books.map(book => (
                            <li key={book.id} aria-label={book.title}>
                                <BookRow key={book.id} book={book}/>
                            </li>
                        ))}
                    </BookListUL>
                ) : (

                    <p>No books found. Try another search./>
                    </p>
                )
            ) : null}
        </div>
    )
}

export {DiscoverBooksScreen}
