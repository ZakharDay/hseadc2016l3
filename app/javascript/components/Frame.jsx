import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Frame extends React.Component {
  constructor(props, context) {
    super(props, context)

    // x="100" y="100" width="100" height="100" bgColor="red" borderWidth="1" borderColor="green"
  }

  render() {
    const { x, y, width, height, bgColor, borderWidth, borderColor } = this.props

    const style = {
      "top": y + 'px',
      "left": x + 'px',
      "width": width + 'px',
      "height": height + 'px',
      "backgroundColor": bgColor,
      "borderWidth": borderWidth + 'px',
      "borderColor": borderColor
    }

    return(
      <div className="Frame" style={ style }>
        This is the Frame!
      </div>
    )
  }
}
