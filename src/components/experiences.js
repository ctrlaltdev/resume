import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet } from '@react-pdf/renderer'

import label from '../styles/label.js'

const styles = StyleSheet.create({
  label,
  experience: {
    marginBottom: '10pt'
  },
  headline: {
    textTransform: 'uppercase',
    fontFamily: 'Titillium Web Bold',
    fontWeight: '600'
  },
  desc: {
    marginLeft: '20pt',
    marginTop: '6pt'
  }
})

const Experiences = ({ data }) => (
  <View style={styles.experiences}>
    <View>
      <Text style={styles.label}>Experiences</Text>
    </View>
    {
      data.map((item, i) => (
        <View style={styles.experience} key={`${item.title}-${item.org}-${i}`}>
          <Text style={styles.headline}>{item.title} - {item.org}</Text>
          <Text>{item.start} - {item.end} / {item.location}</Text>
          {
            item.desc.map((desc, i) => (<Text key={`${item.title}-${item.org}-desc-${i}`} style={styles.desc}>{desc}</Text>))
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
