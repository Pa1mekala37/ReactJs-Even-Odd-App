// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {countNumber: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  increaseValue = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({
      countNumber: prevState.countNumber + randomNumber,
    }))
  }

  render() {
    const {countNumber} = this.state
    const numbertype = countNumber % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1>Count {countNumber}</h1>
          <p className="paragraph1">Count is {numbertype}</p>
          <button className="btn" type="button" onClick={this.increaseValue}>
            Increment
          </button>
          <p className="paragraph2">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
