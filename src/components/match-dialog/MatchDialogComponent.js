import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import './MatchDialogComponent.css'

const styles = {
  matchDialog: {
    marginTop: '-8px',
    height: '64px',
    lineHeight: '64px'
  },
  addButton: {
    color: 'white'
  },
  selectField: {
    marginRight: '20px'
  },
  error: {
    color: 'red'
  }
}
const K = 32

const calcExpectedScore = (player, rA, rB) => player === 'A'
  ? 1 / (1 + 10 ^ ((rB - rA) / 400))
  : 1 / (1 + 10 ^ ((rA - rB) / 400))
const calcELO = (r, s, e) => r + K * (s - e)

class MatchDialogComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      winner: {},
      loser: {},
      errorText: ''
    }
  }

  handleOpen () {
    this.setState({open: true})
  }

  handleClose () {
    this.setState({open: false})
  }

  // TODO - wire this together with the actual data from PlayerComponent
  handleSubmit () {
    if (Object.keys(this.state.winner).length === 0 || Object.keys(this.state.loser).length === 0) {
      this.setState({errorText: 'Error: please choose both a winner and a loser'})
      return
    }
    let winner = this.props.players.find((player) => player === this.state.winner)
    let loser = this.props.players.find((player) => player === this.state.loser)
    winner.rating = Math.floor(calcELO(winner.rating, 1, calcExpectedScore('A', winner.rating, loser.rating)))
    loser.rating = Math.floor(calcELO(loser.rating, 0, calcExpectedScore('B', winner.rating, loser.rating)))
    this.setState({open: false})
  }

  // TODO - figure out how to make this one change function
  handleWinnerChange (event, index, value) {
    this.setState({winner: value})
  }
  handleLoserChange (event, index, value) {
    this.setState({loser: value})
  }

  render () {
    const actions = [
      <FlatButton
        label='Cancel'
        primary
        onTouchTap={() => this.handleClose()}
      />,
      <FlatButton
        label='Submit'
        primary
        onTouchTap={() => this.handleSubmit()}
      />
    ]

    return (
      <div style={styles.matchDialog}>
        <FlatButton
          label='Add Match'
          onTouchTap={() => this.handleOpen()}
          style={styles.addButton}
        />
        <Dialog
          title='Record Match Results'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={() => this.handleClose()}
        >
          <p>Recently played a game? Enter the results of the match here.</p>
          <p style={styles.error}>{this.state.errorText}</p>
          <SelectField
            floatingLabelText='Winner'
            value={this.state.winner}
            onChange={(event, index, value) => this.handleWinnerChange(event, index, value)}
            style={styles.selectField}
          >
            {this.props.players.map((player, i) => (
              <MenuItem key={i} value={player} primaryText={player.name} />
            ))}
          </SelectField>
          <SelectField
            floatingLabelText='Loser'
            value={this.state.loser}
            onChange={(event, index, value) => this.handleLoserChange(event, index, value)}
            style={styles.selectField}
          >
            {this.props.players.map((player, i) => (
              <MenuItem key={i} value={player} primaryText={player.name} />
            ))}
          </SelectField>
        </Dialog>
      </div>
    )
  }
}

export default MatchDialogComponent
