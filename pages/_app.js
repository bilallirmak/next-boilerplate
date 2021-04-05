import React, {useState, useEffect} from "react";
import '../styles/globals.css'
import {useRouter} from 'next/router'
//TODO: DON'T REMOVE
import "../core/extensions/promise";
import interceptors from "../core/interceptors";
import '../store'
//TODO: DON'T REMOVE END

import StoreProvider from "../utils/store-provider";

const UserStore = StoreProvider.getStore('UserStore')

const authRoutes = ['/login', '/register', '/forgot-password']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    !loading && setLoading(true)
    if (UserStore.isLogin){
      init().then(() => console.log('AA'))
      return
    }
    redirect(false).then(() => console.log('AA'))
  }, [UserStore.isLogin])

  async function init() {
    const isVerify = await verify()
    await redirect(isVerify)
    if (isVerify) {
      return setLoading(false)
    }
  }

  async function verify() {
    return await UserStore.verifySession()
  }

  async function redirect(isVerify) {
    const isAuthRoute = authRoutes.includes(router.asPath)
    if (!isVerify) {
      if (isAuthRoute) {
        return setLoading(false)
      }
      await router.push('/login', null, { shallow: true })
      return
    }

    if (isAuthRoute) {
      await router.push('/').then(() => setLoading(false))
    }
  }


  return <Component {...pageProps} />
}

export default MyApp
