import webpack from 'webpack';

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  entry:
  [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './index.jsx',
  ],
  externals: {
    jquery: 'jQuery',
  },
  output: {
    filename: 'bundle.js',
    publicPath: '',
    path: 'public',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0',
      },
    ],
  },
  resolve: {
    root: __dirname,
    alias: {
      App: 'modules/App',
      NavBars: 'modules/navigation/NavBars',
      NavLink: 'modules/navigation/NavLink',

      DemoNav: 'modules/navigation/DemoNav',
      DesignNav: 'modules/navigation/DesignNav',
      PhotoGalleryNav: 'modules/navigation/PhotoGalleryNav',

      ReduxBlog: 'modules/ReduxBlog',
      ReduxBlogApp: 'modules/demo-apps/ReduxBlog',
      Blog: 'modules/demo-apps/redux-blog/components/blog',
      BlogReducers: 'modules/demo-apps/redux-blog/components/reducers',
      BlogRoutes: 'modules/demo-apps/redux-blog/routes',
      PostsIndex: 'modules/demo-apps/redux-blog/components/posts_index',
      PostsNew: 'modules/demo-apps/redux-blog/components/posts_new',
      PostsShow: 'modules/demo-apps/redux-blog/components/posts_show',
      PostsReducer: 'modules/demo-apps/redux-blog/reducers/reducer_posts',
      PostsRoutes: 'modules/demo-apps/redux-blog/routes',
      Actions: 'modules/demo-apps/redux-blog/actions/index',

      ReduxYoutube: 'modules/demo-apps/ReduxYoutube',
      ReduxYoutubeApp: 'modules/demo-apps/ReduxYoutube',
      Repo: 'modules/demo-apps/RepoMaker/Repo',
      Repos: 'modules/demo-apps/RepoMaker/Repos',
      routes: 'modules/routes',
      AppList: 'src/components/app_list',
      AppListItem: 'src/components/app_list_item',
      AppDetail: 'src/components/app_detail',
      DesignsApp: 'src/components/designs-app',
      GalleryApp: 'src/components/photo-gallery-app',
      ErrorModal: 'modules/demo-apps/ReactWeather/app/components/ErrorModal',

      ReactWeather: 'modules/demo-apps/ReactWeather',
      ReactWeatherApp: 'modules/demo-apps/ReactWeather',
      Nav: 'modules/demo-apps/ReactWeather/app/components/Nav',
      Main: 'modules/demo-apps/ReactWeather/app/components/Main',
      About: 'modules/demo-apps/ReactWeather/app/components/About',
      Examples: 'modules/demo-apps/ReactWeather/app/components/Examples',
      Weather: 'modules/demo-apps/ReactWeather/app/components/Weather',
      WeatherForm: 'modules/demo-apps/ReactWeather/app/components/WeatherForm',
      WeatherMessage: 'modules/demo-apps/ReactWeather/app/components/WeatherMessage',
      openWeatherMap: 'modules/demo-apps/ReactWeather/app/api/openWeatherMap',
      applicationStyles: 'modules/demo-apps/ReactWeather/app/styles/app.scss',

      ReduxWeather: 'modules/demo-apps/ReduxWeather',
      ReduxWeatherApp: 'modules/demo-apps/ReduxWeather',
      ReduxWeatherReducers: 'modules/demo-apps/redux-weather/reducers',
      ReduxWeatherAppComponent: 'modules/demo-apps/redux-weather/components/app',

      PhotoGallery: 'modules/photo-app',
      store: 'modules/photo-app/configureStore',
      Root: 'modules/photo-app/components/Root',
    },
    extensions: ['', '.js', '.jsx'],
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ] : [],
  devtool: '#eval-cheap-module-source-map',

};
