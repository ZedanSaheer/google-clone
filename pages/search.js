import Head from "next/head"
import Header from "../components/Header"

const Search = ({results}) => {

    return (
        <div>
            <Head>
                <title>Search Results</title>
                <link rel="icon" href="https://cdn.icon-icons.com/icons2/2108/PNG/512/google_icon_130924.png" />
            </Head>
            <Header />
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = false;
    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEYS}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEYS}&q=${context.query.term}`).then(response => response.json());

    return{
        props:{
            results : data,
        },
    }
}

