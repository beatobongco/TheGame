export default {

  preload() {
    this.load.spritesheet('haro', 'images/haro.png', 32, 32)
    this.load.image('door', 'images/door.png', 32, 32)
  },

  create() {
    this.door = this.add.image(this.world.centerX, this.world.height - 32, 'door')
    this.haro = this.add.sprite(0, this.world.height, 'haro')

    this.physics.startSystem(Phaser.Physics.ARCADE)
    this.physics.arcade.enable(this.haro)

    this.haro.body.collideWorldBounds = true
    this.haro.animations.add('idle', [0, 1, 2, 3, 4, 5], 10, true)
    this.haro.animations.add('left', [0], 10, true)
    this.haro.animations.add('right', [0], 10, true)

    this.cursors = this.input.keyboard.createCursorKeys()
  },

  update() {
    this.haro.body.velocity.x = 0
    if (this.cursors.left.isDown) {
      this.haro.body.velocity.x = -150
      this.haro.animations.play('left')
    } else if (this.cursors.right.isDown) {
      this.haro.body.velocity.x = 150
      this.haro.animations.play('right')
    } else {
      this.haro.animations.play('idle')
    }
    if (this.haro.body.x == this.world.centerX) {
      this.state.start('level_2')
    }
  },

}
