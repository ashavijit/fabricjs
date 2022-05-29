import React from 'react'
import PropTypes from 'prop-types'

const fabric = window.fabric

class Circle extends React.Component {
  static propTypes = {
    canvas: PropTypes.object,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
  }

  static defaultProps = {
    top: 0,
    left: 0,
    radius: 9,
    fill: 'black',
  }

  componentDidMount() {
    const circle = new fabric.Circle(this.props)
    this.props.canvas.add(circle)
  }

  render() {
    return null
  }
}

export default Circle
