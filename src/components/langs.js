import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

import label from '../styles/label.js'

const styles = StyleSheet.create({
  label,
  langs: {}
})

const Langs = ({ data }) => (
  <View style={styles.langs}>
    <View>
      <Text style={styles.label}>Langs</Text>
    </View>
    {
      data.map(item => (
        <Text key={item}>{item}</Text>
      ))
    }
  </View>
)

Langs.propTypes = {
  data: PropTypes.array.isRequired
}

export default Langs
