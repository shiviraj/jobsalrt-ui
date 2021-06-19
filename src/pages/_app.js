import React, {useEffect} from "react";
import {Provider} from "react-redux";
import store from "../store";
import {ThemeProvider} from "@material-ui/styles";
import theme from "../theme/theme";
import HeadTag from "../common/components/HeadTag";
import Layout from "../common/components/Layout";
import {Router} from "next/router";
import {onRouteChange} from "../utils/routing";

const MyApp = ({Component, pageProps, ...rest}) => {
  useEffect(() => {
    Router.events.on('routeChangeComplete', onRouteChange)
  }, [])

  return <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HeadTag common={store.getState().common}/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </Provider>
}

export default MyApp
