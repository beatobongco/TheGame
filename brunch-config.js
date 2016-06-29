module.exports = {
  paths: {
    watched: ['game', 'vendor']
  },

  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!game)/,
        'game.js': /^game/
      }
    },
    stylesheets: {joinTo: 'game.css'}
  },

  plugins: {
    babel: {presets: ['es2015']}
  }
};
