import React, { Component } from 'react'

export default class Default extends Component {
  render () {
    return (
      <main>{this.props.children}</main>
    )
  }
}
