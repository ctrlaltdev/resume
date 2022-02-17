import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

import label from '../styles/label.js'

const styles = StyleSheet.create({
  label,
  education: {}
})

const Education = ({ data }) => (
  <View style={styles.education}>
    <View>
      <Text style={styles.label}>Education</Text>
    </View>
    {
      data.map((item, i) => (
        <View key={`${item.title}-${item.org}-${i}`}>
          <Text>{item.title} - {item.org}</Text>
          <Text>{item.location} - {item.year}</Text>
          {
            item.desc.map((desc, i) => (<Text key={`${item.title}-${item.org}-desc-${i}`}>{desc}</Text>))
          }
        </View>
      ))
    }
  </View>
)

Education.propTypes = {
  data: PropTypes.array.isRequired
}

export default Education
