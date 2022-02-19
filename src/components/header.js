import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  header: {
    padding: '10pt',
    backgroundColor: '#3D3D3D'
  },
  name: {
    textTransform: 'uppercase',
    fontFamily: 'Titillium Web Bold',
    fontWeight: 600,
    fontSize: '24pt',
    color: '#FFFFFF',
    marginBottom: '5pt'
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: 'Titillium Web',
    fontSize: '14pt',
    color: '#FFFFFF'
  }
})

const Header = ({ name, title }) => (
  <View style={styles.header}>
    <Text style={styles.name}>{ name }</Text>
    <Text style={styles.title}>{ title }</Text>
  </View>
)

Header.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Header
