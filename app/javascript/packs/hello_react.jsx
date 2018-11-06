// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import A_Frame from '../components/1_atoms/A_Frame'
import A_Rectangle from '../components/1_atoms/A_Rectangle'

export default class Comics extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {

    return(
      <div>
        Comics {this.props.name}!
        <br/>

        <A_Frame
          x="100"
          y="100"
          width="100"
          height="100"
          bgColor="yellow"
          borderWidth="10"
          borderColor="green"
        />

        <A_Rectangle />
      </div>
    )
  }
}

Comics.defaultProps = {
  name: 'David'
}

Comics.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Comics name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
