
import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

export default class MyPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {a: ''}
}

  async componentDidMount () {
    // eslint-disable-next-line no-undef
    const res = await fetch('http://localhost:3000/a')
    const rres = await res.json()
    this.setState({ a: rres });
  }

  render () {
    return (
      <div>
        {this.state.a}
      </div>
    )
  }
}
