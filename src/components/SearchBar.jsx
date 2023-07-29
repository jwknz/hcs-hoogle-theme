import {useState, useEffect} from "react"

import { useSearchQuery } from "../states/useSearchQuery"

export default function SearchBar() {

    const [query, setQuery] = useState("")

    const myQuery = useSearchQuery((state) => state.query)
    const setMyQuery = useSearchQuery((state) => state.savedQuery)

    useEffect(() => {

        setQuery(myQuery)

    }, [])

    // const handleSubmit = (event) => {

    //     if (event.key === 'Enter') {

    //         localStorage.setItem('query', query)

    //         const atag = document.querySelector('#go-search')
    //         atag.onClick(() => {
    //             window.location.href = '/search/';  // ref unchanged
    //             setTimeout(function () {
    //                 window.location.href = '/search/'; 
    //             }, 100);  // same result
    //             return false;
    //         })

    //     }

    //onKeyDown={handleSubmit}

    // }

    const handleClickSubmit = (event) => {

        localStorage.setItem('query', query)

    }

    return (
        <form className="flex flex-row space-x-3 items-center rounded-lg w-full sm:w-full">
            <input tabIndex={0} className="my-2 p-2 border-rose-500 border-2 rounded-lg w-full" placeholder="search..." value={query} onChange={(e) => setQuery(e.target.value) } />
            <div className="flex justify-between space-x-4">
                <a href={`/search/`} id="go-search" onClick={handleClickSubmit}>
                    <button className="text-center border-2 bg-sky-300 border-sky-900 dark:bg-blue-500 dark:text-white dark:border-rose-500 rounded-lg p-2 my-2" type="button">Search</button>
                </a>
            </div>
        </form>
    )
}
