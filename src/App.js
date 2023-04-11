// DO NOT DELETE

import * as React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    // stateを定義
    this.state = {dogUrl: 'https://images.dog.ceo/breeds/puggle/IMG_151824.jpg'}
}

/**
 * 
 * @type {React.FC}
 */
render() {
  return (
    <div>
      <header>trail</header>
      <body>
        <img src={this.state.dogUrl} alt="犬の写真です" />

      </body>
    </div>
  )
  }
}
