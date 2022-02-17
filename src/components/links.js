import React from 'react'
import PropTypes from 'prop-types'
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer'

import label from '../styles/label.js'

const styles = StyleSheet.create({
  label,
  links: {}
})

const genLink = item => {
  if (item.type === 'github') {
    return (
      <View key={item.label}>
        <Text>{item.label}</Text>
        <Link href={`https://github.com/${item.value}`}>github/{item.value}</Link>
      </View>
    )
  }

  if (item.type === 'linkedin') {
    return (
      <View key={item.label}>
        <Text>{item.label}</Text>
        <Link href={`https://linkedin.com/in/${item.value}`}>linkedin/{item.value}</Link>
      </View>
    )
  }

  return (
    <View key={item.label}>
      <Text>{item.label}</Text>
      <Link href={item.href}>{item.value}</Link>
    </View>
  )
}

const Links = ({ data }) => (
  <View style={styles.links}>
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
