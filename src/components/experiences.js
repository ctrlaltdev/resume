import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

import label from '../styles/label.js'

const styles = StyleSheet.create({
  label,
  experiences: {}
})

const Experiences = ({ data }) => (
  <View style={styles.experiences}>
    <View>
      <Text style={styles.label}>Experiences</Text>
    </View>
    {
      data.map((item, i) => (
        <View key={`${item.title}-${item.org}-${i}`}>
          <Text>{item.title} - {item.org}</Text>
          <Text>{item.location} - {item.start} - {item.end}</Text>
          {
            item.desc.map((desc, i) => (<Text key={`${item.title}-${item.org}-desc-${i}`}>{desc}</Text>))
          }
        </View>
      ))
    }
  </View>
)

Experiences.propTypes = {
  data: PropTypes.array.isRequired
}

export default Experiences
