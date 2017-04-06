
import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

export default class MyPage extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('http://localhost:3000/a')
    const rres = await res.json()
    return { stars: rres || '' }
  }

  render () {
    return (
      <div>
        {this.props.stars}
      </div>
    )
  }
}
