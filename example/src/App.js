import React, { Component } from 'react'

import { Profile } from 'react-near-openweb'

export default class App extends Component {
  render () {
    return (
      <div>
        <Profile accountId='eugenethedream' />
      </div>
    )
  }
}
