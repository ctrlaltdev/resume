import React from 'react'
import PropTypes from 'prop-types'
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer'

import label from '../styles/label.js'

const styles = StyleSheet.create({
  label
})

const formatPhone = (phone) => {
  return phone.replace(/[^\d]/g, '')
}

const genContact = (item) => {
  if (item.type === 'email') {
    return (
      <View key={item.label}>
        <Text>{item.label}</Text>
        <Link href={`mailto:${item.value}`}>{item.value}</Link>
      </View>
    )
  }

  if (item.type === 'phone') {
    return (
      <View key={item.label}>
        <Text>{item.label}</Text>
        <Link href={`tel:+1${formatPhone(item.value)}`}>{item.value}</Link>
      </View>
    )
  }

  return (
    <View key={item.label}>
      <Text>{item.label}</Text>
      <Text>{item.value}</Text>
    </View>
  )
}

const Contact = ({ data }) => (
  <View style={styles.header}>
    <View>
      <Text style={styles.label}>Contact</Text>
    </View>
    {
      data.map(item => genContact(item))
    }
  </View>
)

Contact.propTypes = {
  data: PropTypes.array.isRequired
}

export default Contact
