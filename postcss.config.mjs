const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extends: {
          gridTemplateColumns: {
            "70 30": "70% 20%",
          },
        },
      },
    },
  },
};

export default config;
