import boot from './boot'
import level_1 from './level_1'

document.addEventListener('DOMContentLoaded', () => {
  const game = new Phaser.Game(
    '100%',
    '100%',
    Phaser.AUTO,
    'game',
    null,
    true)
  game.state.add('boot', boot)
  game.state.add('level_1', level_1)
})
