import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

import label from '../styles/label.js'

const styles = StyleSheet.create({
  label,
  education: {
    marginBottom: '10pt'
  },
  headline: {
    textTransform: 'uppercase',
    fontFamily: 'Titillium Web Bold',
    fontWeight: '600'
  }
})

const Education = ({ data }) => (
  <View>
    <View>
      <Text style={styles.label}>Education</Text>
    </View>
    {
      data.map((item, i) => (
        <View style={styles.education} key={`${item.title}-${item.org}-${i}`}>
          <Text style={styles.headline}>{item.title} - {item.org}</Text>
          <Text>{item.year} / {item.location}</Text>
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
