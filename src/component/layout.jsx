import React from 'react'
import Header from './share/Header'

const Layout = ({children}) => {
  return (
<>
<Header/>
{children}
{/* <Footer/> */}
</>

  )
}

export default Layout