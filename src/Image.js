import React from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash.omit'

const fabric = window.fabric

class Image extends React.Component {
  static propTypes = {
    canvas: PropTypes.object,
    url: PropTypes.string.isRequired,
    scale: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
  }

  static defaultProps = {
    scale: 1.0,
  }

  componentDidMount() {
    const options = omit(this.props, ['scale'])
    fabric.Image.fromURL(this.props.url, img => {
      img.scale(this.props.scale)
      this.props.canvas.add(img)
    }, options)
  }

  render() {
    return null
  }
}

export default Image
