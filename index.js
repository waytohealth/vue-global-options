export default function(_vue, params) {

  _vue.mixin({
    beforeCreate() {
      const options = this.$options;
      params.forEach((param) => {
        if ( options[param] ) {
          this['$'+param] = options[param];
        } else if ( options.parent && options.parent['$'+param] ) {
          this['$'+param] = options.parent['$'+param];
        }
      })
      
    }
  });

}