import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value; 
    if(!term) return; 
    router.push(`/search?term=${term}`);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="https://cdn.icon-icons.com/icons2/2108/PNG/512/google_icon_130924.png"/>
        <meta name="description" content="Google-clone by zedan saheer!" />
      </Head>
      <header className="flex justify-between w-full p-5 text-sm capitalize text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">about</p><p className="link">store</p>
        </div>
        <div className="flex space-x-4 items-center"><p className="link">gmail</p><p className="link">images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://www.google.com/photos/about/static/images/ui/logo-photos.png" />
        </div>
      </header>
      <form className="flex flex-col items-center flex-grow mt-40 w-4/5">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          height={100} width={300} />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-4xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" ref={searchInputRef} name="search" className="flex-grow focus:outline-none" autoComplete='off' placeholder="Search"/>
          <MicrophoneIcon className="h-6 text-gray-500"/>
        </div>
        <div className="flex flex-col space-y-2 justify-center mt-8 sm:space-y-0 sm:space-x-4 sm:flex-row">
          <button className="btn" onClick={search}>Google Search</button>
          <button className="btn" onClick={search}>I'm Feeling Lucky</button>
        </div>
      </form>
      <Footer />
    </div>
  )
}
