import React from 'react'
import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import {orange800} from 'material-ui/styles/colors'

import './PlayerComponent.css'

const styles = {
  list: {
    paddingTop: '64px'
  }
}
const players = [
  {
    name: 'Susan Emerick',
    rating: 1689,
    win: 4,
    loss: 2
  },
  {
    name: 'MyCah Pleasant',
    rating: 1734,
    win: 6,
    loss: 2
  },
  {
    name: 'Keith Barker',
    rating: 1998,
    win: 9,
    loss: 3
  },
  {
    name: 'Adam Bellaire',
    rating: 1577,
    win: 5,
    loss: 4
  },
  {
    name: 'Matthew Johnson',
    rating: 1999,
    win: 9,
    loss: 2
  },
  {
    name: 'Bolin Fan',
    rating: 1711,
    win: 5,
    loss: 1
  },
  {
    name: 'Kate Haskell',
    rating: 1337,
    win: 3,
    loss: 2
  },
  {
    name: 'Saie Kurakula',
    rating: 1143,
    win: 2,
    loss: 2
  },
  {
    name: 'Jay Bierman',
    rating: 1000,
    win: 0,
    loss: 1
  }
]

const sortByRating = (a, b) => b.rating - a.rating
const createAvatar = (name) => getInitials(name.split(' '))
const getFirstLetter = (name) => name.substring(0, 1).toUpperCase()
const getInitials = (names) => names.length > 1
  ? getFirstLetter(names[0]) + getFirstLetter(names[names.length - 1])
  : getFirstLetter(names[0])

const PlayerComponent = () => (
  <List style={styles.list}>
    <Subheader>Players</Subheader>
    {players.sort(sortByRating).map((player, i) => (
      <ListItem
        key={i}
        disabled
        leftAvatar={<Avatar backgroundColor={orange800}>{createAvatar(player.name)}</Avatar>}
        primaryText={player.name}
        secondaryText={
          <p>
            <span>{'Rating: ' + player.rating}</span><br />
            <span>{'Win: ' + player.win + ' Loss: ' + player.loss}</span>
          </p>
        }
        secondaryTextLines={2}
      />
    ))}
  </List>
)

export default PlayerComponent
