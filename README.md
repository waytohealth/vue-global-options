# vue-global-options

Make specified options you pass into your root component available on all your child components

## Usage

``` bash
npm install vue-global-options
```

``` javascript
import GlobalOptions from 'vue-global-options';
Vue.use(GlobalOptions, ['api', 'config']);

new Vue({
  ...
  api: apiClient,
  config: require('./config')
  ...
});

// Params named `$api` and `$config` will be injected in to every component, so in your component, you can get them easily
this.$api.get(...);
this.$config.whatever;
```

## Warning

This plugin does not check for any collision or prevent you from using reserved words, it simply will take specified options passed to the root component (or any component) and set them as `this.$VARIABLE`. 