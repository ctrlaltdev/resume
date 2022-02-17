import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

import label from '../styles/label.js'

const styles = StyleSheet.create({
  label,
  tech: {

  }
})

const Tech = ({ data }) => (
  <View style={styles.tech}>
    <View>
      <Text style={styles.label}>Tech</Text>
    </View>
    {
      data.map(item => (
        <Text key={item}>{item}</Text>
      ))
    }
  </View>
)

Tech.propTypes = {
  data: PropTypes.array.isRequired
}

export default Tech
