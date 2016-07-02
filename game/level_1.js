export default {

  preload() {
    this.load.spritesheet('haro', 'images/haro.png', 32, 32)
  },

  create() {
    this.haro = this.add.sprite(0, this.world.height, 'haro')

    this.physics.startSystem(Phaser.Physics.ARCADE)
    this.physics.arcade.enable(this.haro)

    this.haro.body.collideWorldBounds = true
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
      this.haro.animations.stop()
    }
  },

}
