module.exports = {
  mode: "development",
  entry: {
    "SkrWorld": './src/SkrWorld.ts',
  },
  output: {
    path: `${__dirname}/docs`,
    filename: '[name].js'
  },
  module: {
    rules: [{
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              minimize: true
            }
          },
        ],
      },
      {
        test: /\.(gif|png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
    externals: {
        'three': 'THREE'
    },
  resolve: {
    extensions: [
      '.ts', '.js'
    ],
  }
};