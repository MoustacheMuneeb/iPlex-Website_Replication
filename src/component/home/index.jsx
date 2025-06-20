import React from 'react'
import Header from '../share/Header'
import Section1 from './section1'
import Layout from '../layout'
import Section2 from './Section2'
import Projects from './Projects'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'

const FirstPage = () => {
  return (
   <Layout>
<Section1/>
<Section2/>
<Projects />
<Section3/>
<Section4/>
<Section5/>
   </Layout>
  )
}

export default FirstPage