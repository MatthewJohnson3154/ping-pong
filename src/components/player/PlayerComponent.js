import React from 'react'
import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import {orange800} from 'material-ui/styles/colors'

import './PlayerComponent.css'

const sortByRating = (a, b) => b.rating - a.rating
const createAvatar = (name) => getInitials(name.split(' '))
const getFirstLetter = (name) => name.substring(0, 1).toUpperCase()
const getInitials = (names) => names.length > 1
  ? getFirstLetter(names[0]) + getFirstLetter(names[names.length - 1])
  : getFirstLetter(names[0])

const PlayerComponent = (props) => {
  return (
    <List>
      <Subheader>Players</Subheader>
      {props.players.sort(sortByRating).map((player, i) => (
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
}

export default PlayerComponent
