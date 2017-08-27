/* external imports */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { blue900 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
/* internal imports */
import HeaderComponent from './components/header/HeaderComponent'
import HomeComponent from './components/home/HomeComponent'
import PlayerComponent from './components/player/PlayerComponent'
import reducers from './redux/reducers'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue900
  }
})

const store = createStore(reducers)

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router>
        <div className='app'>
          <HeaderComponent title='Ping Pong' players={store.getState().players} />
          <Route exact path='/' component={HomeComponent} />
          <Route path='/players' render={() => <PlayerComponent players={store.getState().players} />} />
        </div>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
