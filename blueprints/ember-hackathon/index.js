module.exports = {
  normalizeEntityName() {
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
