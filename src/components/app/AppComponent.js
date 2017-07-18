import React from 'react'
import {blue900} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin'

import HeaderComponent from '../header/HeaderComponent'
import PlayerComponent from '../player/PlayerComponent'
import './AppComponent.css'

injectTapEventPlugin()

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue900
  }
})

const AppComponent = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div className='app'>
      <HeaderComponent title='Ping Pong Ladder' />
      <PlayerComponent />
    </div>
  </MuiThemeProvider>
)

export default AppComponent
