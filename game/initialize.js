import boot from './boot'
import level_1 from './level_1'

//  Create game instance
const game = new Phaser.Game(
  320,
  130,
  Phaser.AUTO,
  'game',
  null,
  false,
  false)

// Add states
game.state.add('boot', boot)
game.state.add('level_1', level_1)

// Start boot state
game.state.start('boot')
