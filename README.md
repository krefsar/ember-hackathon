# ember-hackathon

This is an Ember addon that includes most of the dependencies and setup I use for new hackathon projects. It installs several useful Ember addons as well as sets up some base styles.

## Installation

```
ember install ember-hackathon
```

After installing, import the hackathon base styles in your app.scss:

```
@import 'ember-hackathon';
```

## Usage

You should just be able to get going with your hackathon project and have access to the Ember addon dependencies. It's a shifting list depending on the packages I find useful. The current list of addons is:

- [ember-flex](https://github.com/krefsar/ember-flex) (these are my own easy to use flex styles)
- [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass)
- [ember-font-awesome](https://github.com/martndemus/ember-font-awesome)
- [liquid-fire](https://github.com/ember-animation/liquid-fire)
- [ember-truth-helpers](https://github.com/jmurphyau/ember-truth-helpers)

It also uses a [reset.css](http://meyerweb.com/eric/tools/css/reset/) file so we don't have to do that pesky step.

## License

This project is licensed under the [MIT License](LICENSE.md).
