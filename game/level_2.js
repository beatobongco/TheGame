export default {

  preload() {
    this.load.bitmapFont('monster', 'fonts/monster/monster.png', 'fonts/monster/monster.fnt')
    this.load.spritesheet('haro', 'images/haro.png', 32, 32)
    this.load.image('ground', 'images/ground.png')
    this.load.image('rock', 'images/rock.png')
  },

  create() {
    this.instructions = this.add.bitmapText(8, 8, 'monster', 'PRESS [Z] TO JUMP', 24)

    this.physics.startSystem(Phaser.Physics.ARCADE)
    this.world.enableBody = true

    this.haro = this.add.sprite(0, this.world.height - 64, 'haro')
    this.haro.body.collideWorldBounds = true
    this.haro.body.gravity.y = 800
    this.haro.animations.add('idle', [0, 1, 2, 3, 4, 5], 10, true)
    this.haro.animations.add('left', [0], 10, true)
    this.haro.animations.add('right', [0], 10, true)

    this.ground = this.add.tileSprite(0, this.world.height - 32, this.world.width, 32, 'ground')
    this.ground.body.immovable = true
    this.ground.body.allowGravity = false

    this.rock = this.add.sprite(this.world.centerX, this.world.height - 64, 'rock')
    this.rock.body.immovable = true

    this.cursors = this.input.keyboard.createCursorKeys()
    this.jumpKey = this.input.keyboard.addKey(Phaser.KeyCode.Z)
    this.input.keyboard.addKeyCapture([Phaser.KeyCode.Z])
  },

  update() {
    this.physics.arcade.collide(this.haro, this.rock)
    this.physics.arcade.collide(this.haro, this.ground)

    this.haro.body.velocity.x = 0
    if (this.cursors.left.isDown) {
      this.haro.body.velocity.x = -200
      this.haro.animations.play('left')
    } else if (this.cursors.right.isDown) {
      this.haro.body.velocity.x = 150
      this.haro.animations.play('right')
    } else {
      this.haro.animations.play('idle')
    }
    if (this.jumpKey.isDown && this.haro.body.touching.down) {
      this.haro.body.velocity.y = -250
    }
    if (this.haro.body.x + 32 >= this.world.width) {
      this.state.start('level_3')
    }
  },

}
