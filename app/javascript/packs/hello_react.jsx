// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Frame from '../components/Frame'
import Rectangle from '../components/Rectangle'

const Comics = props => (
  <div>
    Comics {props.name}!
    <br/>

    <Frame x="100" y="100" width="100" height="100" bgColor="yellow" borderWidth="10" borderColor="green" />
    <Rectangle />
  </div>
)

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
