import React, {useState} from 'react'
import Head from 'next/head'
import store from "../../store";

const HeadTag = () => {
  const [details, setDetails] = useState(store.getState().common)

  store.subscribe(() => {
    setDetails(store.getState().common)
  })

  return <Head>
    <title>{details.title}</title>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
    <meta name="description" content={details.description}/>
    <meta name="keywords" content={details.title.split(" ").join(", ")}/>
    <meta name="author" content="Shivam Rajput"/>
  </Head>
}

export default HeadTag
