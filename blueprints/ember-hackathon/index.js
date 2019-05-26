module.exports = {
  normalizeEntityName() {
  },

  fileMapTokens() {
    return {
      __path__() {
        return 'app';
      },
    };
  },

  afterInstall() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-cli-sass' },
        { name: 'ember-font-awesome' },
      ],
    });
  }
};
