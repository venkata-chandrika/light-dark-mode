// Write your code
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  colorMode = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const btnText = isDark ? 'Light Mode' : 'Dark Mode'

    const colorModeContainer = isDark ? 'light-mode' : 'dark-mode'

    return (
      <div className="color-container">
        <div className={colorModeContainer}>
          <h1 className="title">Click to Change Mode</h1>
          <button type="button" className="button" onClick={this.colorMode}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
