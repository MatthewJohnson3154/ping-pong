import React from 'react'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import { Link } from 'react-router-dom'

import './HomeComponent.css'

const styles = {
  link: {
    textDecoration: 'none'
  }
}

const HomeComponent = () => (
  <List>
    <Subheader>Ping Pong Home</Subheader>
    <Link to='/players' style={styles.link}>
      <ListItem
        primaryText='View Players'
        secondaryText='See a list of ping pong players and their stats'
      />
    </Link>
    <Link to='/matches' style={styles.link}>
      <ListItem
        primaryText='View Matches'
        secondaryText='Look through the history of matches that have been recorded'
      />
    </Link>
  </List>
)

export default HomeComponent
