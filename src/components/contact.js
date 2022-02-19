import React from 'react'
import PropTypes from 'prop-types'
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer'

import label from '../styles/label.js'

const styles = StyleSheet.create({
  label,
  contact: {
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

const formatPhone = (phone) => {
  return phone.replace(/[^\d]/g, '')
}

const genContact = (item) => {
  if (item.type === 'email') {
    return (
      <View style={styles.contact} key={item.label}>
        <Text style={styles.subtitle}>{item.label}</Text>
        <Link style={styles.link} href={`mailto:${item.value}`}>{item.value}</Link>
      </View>
    )
  }

  if (item.type === 'phone') {
    return (
      <View style={styles.contact} key={item.label}>
        <Text style={styles.subtitle}>{item.label}</Text>
        <Link style={styles.link} href={`tel:+1${formatPhone(item.value)}`}>{item.value}</Link>
      </View>
    )
  }

  return (
    <View style={styles.contact} key={item.label}>
      <Text style={styles.subtitle}>{item.label}</Text>
      <Text>{item.value}</Text>
    </View>
  )
}

const Contact = ({ data }) => (
  <View>
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
