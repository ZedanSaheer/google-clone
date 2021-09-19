import Head from "next/head"
import { useRouter } from "next/router"
import Header from "../components/Header"
import SearchResults from "../components/SearchResults"
import Response from "../Response"

const Search = ({results}) => {
    const router = useRouter();

    console.log(results);

    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <link rel="icon" href="https://cdn.icon-icons.com/icons2/2108/PNG/512/google_icon_130924.png" />
            </Head>
            <Header />
            <SearchResults results={results}/>
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || "0";
    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEYS}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEYS}&q=${context.query.term}&start=${startIndex}`).then(response => response.json());

    return{
        props:{
            results : data,
        },
    }
}

