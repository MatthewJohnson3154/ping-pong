import React from 'react'
import AppBar from 'material-ui/AppBar'

import MatchDialogComponent from '../match-dialog/MatchDialogComponent'
import './HeaderComponent.css'

const styles = {
  appBar: {
    position: 'fixed'
  },
  title: {
    cursor: 'pointer'
  }
}

const HeaderComponent = (props) => (
  <AppBar
    title={<span style={styles.title}>{props.title}</span>}
    iconElementRight={<MatchDialogComponent />}
    style={styles.appBar}
  />
)

export default HeaderComponent
