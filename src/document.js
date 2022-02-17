import React from 'react'
import { Document, Page, View, Font, StyleSheet } from '@react-pdf/renderer'

import data from './data.js'

import Header from './components/header.js'
import Tech from './components/tech.js'
import Certs from './components/certs.js'
import Links from './components/links.js'
import Contact from './components/contact.js'
import Langs from './components/langs.js'
import Experiences from './components/experiences.js'
import Education from './components/education.js'

Font.register({
  family: 'Titillium Web',
  src: 'https://fonts.gstatic.com/s/titilliumweb/v14/NaPecZTIAOhVxoMyOr9n_E7fdM3mDaZRbryhsA.woff2'
})

Font.register({
  family: 'Titillium Web Bold',
  src: 'https://fonts.gstatic.com/s/titilliumweb/v14/NaPDcZTIAOhVxoMyOr9n_E7ffBzCGIVzY5abuWIGxA.woff2'
})

const styles = StyleSheet.create({
  page: {
    fontSize: '10pt',
    fontFamily: 'Helvetica',
    color: '#000000',
    padding: '20pt'
  },
  main: {},
  sidebar: {}
})

const Resume = () => (
  <Document>
    <Page size="Letter" style={styles.page}>
      <Header name={data.name} title={data.title} />
      <View style={styles.main}>
        <Experiences data={data.experiences} />
        <Education data={data.education} />
      </View>
      <View style={styles.sidebar}>
        <Tech data={data.tech} />
        <Certs data={data.certs} />
        <Links data={data.links} />
        <Contact data={data.contact} />
        <Langs data={data.langs} />
      </View>
    </Page>
  </Document>
)

export default Resume
