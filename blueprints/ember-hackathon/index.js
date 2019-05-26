module.exports = {
  normalizeEntityName() {
  },

  afterInstall() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-font-awesome' },
      ],
    });
  }
};
