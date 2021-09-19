import React from 'react'
import PaginationButtons from './PaginationButtons'

const SearchResults = ({ results }) => {

    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[15%]">
            {results.searchInformation == 0 && <h1 className="text-l font-bold mt-10 ">"Sorry The API Qouta Has Exhausted Please Visit Tommorow To Check Functionality" - Zedan Saheer , SDE-2 : Google SE Team.</h1> }
           {results.searchInformation != 0 && <p className="capitalize text-gray-600 text-md mb-5 ml-3 mt-2">About {results.searchInformation?.formattedTotalResults} results (in {results.searchInformation.formattedSearchTime} seconds)</p>}

            {results.items?.map((result) => (
                <div key={result.link} className="max-w-xl mb-8">
                    <div className="group">
                        <a href={result.link} className="text-sm line-clamp-1">{result.formattedUrl}</a>
                        <a href={result.link}>
                            <h1 className="truncate text-xl text-blue-800 font-medium group-hover:underline">{result.title}</h1>
                        </a>
                    </div>
                    <p className="line-clamp-2">{result.snippet}</p>
                </div>
            ))}
           {results.searchInformation != 0 && <PaginationButtons />}
        </div>
    )
}

export default SearchResults
