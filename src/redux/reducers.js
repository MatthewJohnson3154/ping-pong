import { UPDATE_PLAYER_ELO } from './actions'

const initialState = {
  players: [
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
  ],
  matches: []
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PLAYER_ELO:
      return Object.assign({}, state, {
        players: state.players.map((player, index) => {
          if (index === action.index) {
            return Object.assign({}, player, {
              rating: action.elo
            })
          }
          return player
        })
      })
    default:
      return state
  }
}

export default reducers
