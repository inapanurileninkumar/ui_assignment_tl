export const globalMixins = {
  methods: {
    deepCopy: function (data) {
      return JSON.parse(JSON.stringify(data));
    },
    routeTo: function (routeName, params) {
      this.$router.replace({ name: routeName, params: params });
    },
    // START - RANDOM DATA GENERATORS
    getRandomNumber: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomString: function (len, includeNumbers = false) {
      let chars = 'AB CD EF GH IJ KL MN OP QR ST UV WX YZ abcd efgh ijkl mnop qrst uvwx yz';
      let i = 0;
      if (includeNumbers) {
        chars += '1234567890';
      }
      let randomString = '';
      while (i++ < len) randomString += chars.charAt(this.getRandomNumber(0, chars.length - 1));
      return randomString;
    }
    // END - RANDOM DATA GENERATORS
  }
};
