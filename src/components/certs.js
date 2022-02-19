import React from 'react'
import PropTypes from 'prop-types'
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer'

import label from '../styles/label.js'

const styles = StyleSheet.create({
  label,
  link: {
    textDecoration: 'none',
    color: '#000',
    marginBottom: '10pt'
  }
})

const Certs = ({ data }) => (
  <View style={styles.certs}>
    <View>
      <Text style={styles.label}>Certs</Text>
    </View>
    {
      data.map(item => (
        <Link key={item.name} href={item.url} style={styles.link}>{item.name}</Link>
      ))
    }
  </View>
)

Certs.propTypes = {
  data: PropTypes.array.isRequired
}

export default Certs
