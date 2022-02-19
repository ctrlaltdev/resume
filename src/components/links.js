import React from 'react'
import PropTypes from 'prop-types'
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer'

import label from '../styles/label.js'

const styles = StyleSheet.create({
  label,
  links: {
    marginBottom: '10pt'
  },
  link: {
    textDecoration: 'none',
    color: '#000'
  },
  subtitle: {
    textTransform: 'uppercase',
    fontFamily: 'Titillium Web Bold'
  }
})

const genLink = item => {
  if (item.type === 'github') {
    return (
      <View style={styles.links} key={item.label}>
        <Text style={styles.subtitle}>{item.label}</Text>
        <Link style={styles.link} href={`https://github.com/${item.value}`}>github/{item.value}</Link>
      </View>
    )
  }

  if (item.type === 'linkedin') {
    return (
      <View style={styles.links} key={item.label}>
        <Text style={styles.subtitle}>{item.label}</Text>
        <Link style={styles.link} href={`https://linkedin.com/in/${item.value}`}>linkedin/{item.value}</Link>
      </View>
    )
  }

  return (
    <View style={styles.links} key={item.label}>
      <Text style={styles.subtitle}>{item.label}</Text>
      <Link style={styles.link} href={item.href}>{item.value}</Link>
    </View>
  )
}

const Links = ({ data }) => (
  <View>
    <View>
      <Text style={styles.label}>Links</Text>
    </View>
    {
      data.map(item => genLink(item))
    }
  </View>
)

Links.propTypes = {
  data: PropTypes.array.isRequired
}

export default Links
