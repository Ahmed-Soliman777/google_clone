import ImageSearchResults from '@/components/ImageSearchResults';
import Link from 'next/link';
import React from 'react'

export default async function ImageSearchPage({ searchParams }) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CTX_KEY}&q=${searchParams.searchTerm}&searchType=image`
  );
  if (!response.ok) {
    throw new Error("Something went wrong")
  }
  const data = await response.json()
  const results = data.items
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className='text-3xl mb-4'>
          No results found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching for something else
        </p>
        <Link href='/' className='text-blue-500'>
          Home
        </Link>
      </div>
    )
  }
  return (
    <div>
      {results &&
        <ImageSearchResults results={data} />
      }
    </div>
  )
}
