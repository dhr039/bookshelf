/** @jsx jsx */
import {jsx} from '@emotion/core'

import './bootstrap'
import Tooltip from '@reach/tooltip'
import {FaSearch} from 'react-icons/fa'
import {Input, BookListUL, Spinner} from './components/lib'
import {BookRow} from './components/book-row'
import * as React from 'react'

// 🐨 import the client from './utils/api-client'

function DiscoverBooksScreen() {
    // 🐨 add state for status ('idle', 'loading', or 'success'), data, and query
    // const [status, setStatus] = React.useState('idle')
    // const [data, setData] = React.useState(null)
    // const [query, setQuery] = React.useState('')
    /*keeping all of them in one object for better karma:*/
    const [state, setState] = React.useState({
        status: 'idle',
        query: '',
        data: {
            "books": [
                {
                    "title": "Voice of War",
                    "author": "Zack Argyle",
                    "coverImageUrl": "https://images-na.ssl-images-amazon.com/images/I/41JodZ5Vl%2BL.jpg",
                    "id": "B084F96GFZ",
                    "pageCount": 372,
                    "publisher": "Self Published",
                    "synopsis": "..."
                }
            ]
        },
    })
    const {status, query, data} = state

    const [queried, setQueried] = React.useState(false)

    // 🐨 Add a useEffect callback here for making the request with the
    // client and updating the status and data.
    // 💰 Here's the endpoint you'll call: `books?query=${encodeURIComponent(query)}`
    // 🐨 remember, effect callbacks are called on the initial render too
    // so you'll want to check if the user has submitted the form yet and if
    // they haven't then return early (💰 this is what the queried state is for).
    React.useEffect(() => {
        if (queried) {
            setQueried(false)
            console.log('query changed, will make the API call here...', state)
        } else {
            console.log('queried is false so will do nothing')
        }
    }, [query])

    const isLoading = status === 'loading'
    const isSuccess = status === 'success'

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
                            {isLoading ? <Spinner/> : <FaSearch aria-label="search"/>}
                        </button>
                    </label>
                </Tooltip>
            </form>

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
                    <p>No books found. Try another search.</p>
                )
            ) : null}
        </div>
    )
}

export {DiscoverBooksScreen}
