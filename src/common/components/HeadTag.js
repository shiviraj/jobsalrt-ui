import React, {useState} from 'react'
import Head from 'next/head'
import store from "../../store";

const HeadTag = ({state}) => {
  const [details] = useState(state || store.getState().common)
  return <Head>
    <title>{details.title}</title>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0,user-scalable=0"/>
    <meta name="description" content={details.description}/>
    <meta name="keywords" content={details.title.split(" ").join(", ")}/>
    <meta name="author" content="Shivam Rajput"/>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-180280287-1"/>
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-180280287-1', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />
  </Head>
}

export default HeadTag
