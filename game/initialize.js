import boot from './boot'
import level_1 from './level_1'
import level_2 from './level_2'
import level_3 from './level_3'

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
game.state.add('level_2', level_2)
game.state.add('level_3', level_3)

// Start boot state
game.state.start('boot')
