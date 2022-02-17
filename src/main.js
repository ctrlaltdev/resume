import React from 'react'
import ReactPDF from '@react-pdf/renderer'

import Resume from './document.js'

ReactPDF.render(<Resume />, './docs/resume.pdf')
