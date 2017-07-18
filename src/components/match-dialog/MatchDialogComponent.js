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
  }
}
const K = 32

const calcExpectedScore = (player, rA, rB) => player === 'A'
  ? 1 / (1 + 10 ^ ((rB - rA) / 400))
  : 1 / (1 + 10 ^ ((rA - rB) / 400))
const calcELO = (r, s, e) => r + K * (s - e)

class MatchDialogComponent extends Component {
  constructor () {
    super()
    this.state = {
      open: false,
      winner: '',
      loser: ''
    }
  }

  handleOpen () {
    this.setState({open: true})
  }

  // TODO - wire this together with the actual data from PlayerComponent
  handleClose () {
    let playerAELO = Math.floor(calcELO(1999, 1, calcExpectedScore('A', 1999, 1689)))
    let playerBELO = Math.floor(calcELO(1689, 0, calcExpectedScore('B', 1689, 1999)))
    console.log('Matthew Johnson\'s ELO changed from 1999 to ' + playerAELO)
    console.log('Susan Emerick\'s ELO changed from 1689 to ' + playerBELO)
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
        onTouchTap={() => this.handleClose()}
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
          <SelectField
            floatingLabelText='Winner'
            value={this.state.winner}
            onChange={(event, index, value) => this.handleWinnerChange(event, index, value)}
            style={styles.selectField}
          >
            <MenuItem value={'MJ'} primaryText='Matthew Johnson' />
            <MenuItem value={'SE'} primaryText='Susan Emerick' />
            <MenuItem value={'MP'} primaryText='MyCah Pleasant' />
            <MenuItem value={'KH'} primaryText='Kate Haskell' />
            <MenuItem value={'KB'} primaryText='Keith Barker' />
          </SelectField>
          <SelectField
            floatingLabelText='Loser'
            value={this.state.loser}
            onChange={(event, index, value) => this.handleLoserChange(event, index, value)}
            style={styles.selectField}
          >
            <MenuItem value={'MJ'} primaryText='Matthew Johnson' />
            <MenuItem value={'SE'} primaryText='Susan Emerick' />
            <MenuItem value={'MP'} primaryText='MyCah Pleasant' />
            <MenuItem value={'KH'} primaryText='Kate Haskell' />
            <MenuItem value={'KB'} primaryText='Keith Barker' />
          </SelectField>
        </Dialog>
      </div>
    )
  }
}

export default MatchDialogComponent
