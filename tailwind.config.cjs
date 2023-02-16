const config = {
  mode: 'jit',
  // you dont need `purge: enabled: production` because you are using jit
  content: ["./src/**/*.{html,js,svelte,ts}"],
  purge: [
    "./src/**/*.svelte",
    // may also want to include HTML files
    "./src/**/*.html"
  ],
  variants: {},
  plugins: [
    require('daisyui')
  ],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};

module.exports = config;
