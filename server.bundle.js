/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var express = __webpack_require__(53);
	var path = __webpack_require__(54);
	var compression = __webpack_require__(55);
	// use this to render our app to an html string

	// and these to matcht the url to routes and then render


	var app = express();

	app.use(compression());
	// serve the static stuff like index.css
	app.use(express.static(path.join(__dirname, 'public')));

	function renderPage(appHtml) {
	  return '\n    <html>\n    <head>\n    <meta charset="UTF-8" />\n    <title>React Router App</title>\n    <link rel="stylesheet" href="/index.css" />\n    <div id="app">' + appHtml + '</div>\n    <script src=\'bundle.js\'></script>\n  ';
	}

	// send all requests to index.html so browserHistory in React Router works
	app.get('*', function (req, res) {
	  // match the routes to the url
	  (0, _reactRouter.match)({ routes: _routes2.default }, { location: req.url }, function (err, redirect, props) {
	    // `RouterContext` is the what `Router` renders. `Router` keeps these
	    // `props` in its state as it listens to `browserHistory`. But on the
	    // server our app is stateless, so we need to use `match` to--
	    // get these props before rendering.
	    var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));

	    // dump the HTML into a template, lots of ways to do this, but none are
	    // really influenced by React Router, so we're just using a little
	    // function, `renderPage`
	    res.send(renderPage(appHtml));
	  });
	});

	var PORT = process.env.PORT || 8081;
	app.listen(PORT, function () {
	  console.log('Production Express server funning at localhost + ' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _App = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"App\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _App2 = _interopRequireDefault(_App);

	var _ReduxBlogApp = __webpack_require__(5);

	var _ReduxBlogApp2 = _interopRequireDefault(_ReduxBlogApp);

	var _ReduxYoutubeApp = __webpack_require__(20);

	var _ReduxYoutubeApp2 = _interopRequireDefault(_ReduxYoutubeApp);

	var _ReduxWeatherApp = __webpack_require__(27);

	var _ReduxWeatherApp2 = _interopRequireDefault(_ReduxWeatherApp);

	var _ReduxPhotoGallery = __webpack_require__(38);

	var _ReduxPhotoGallery2 = _interopRequireDefault(_ReduxPhotoGallery);

	var _Main = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Main\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Main2 = _interopRequireDefault(_Main);

	var _Weather = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Weather\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Weather2 = _interopRequireDefault(_Weather);

	var _About = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"About\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _About2 = _interopRequireDefault(_About);

	var _Examples = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Examples\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Examples2 = _interopRequireDefault(_Examples);

	var _Repos = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Repos\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Repos2 = _interopRequireDefault(_Repos);

	var _Repo = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Repo\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Repo2 = _interopRequireDefault(_Repo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/react-weather', component: _Main2.default },
	    _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _About2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'examples', component: _Examples2.default }),
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Weather2.default })
	  ),
	  _react2.default.createElement(_reactRouter.Route, { path: '/redux-weather', component: _ReduxWeatherApp2.default }),
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/redux-blog', component: _ReduxBlogApp2.default },
	    _react2.default.createElement(_reactRouter.Route, { path: 'posts/new', component: _ReduxBlogApp2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'posts/:id', component: _ReduxBlogApp2.default })
	  ),
	  _react2.default.createElement(_reactRouter.Route, { path: '/redux-youtube', component: _ReduxYoutubeApp2.default }),
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/repo-maker', component: _Repos2.default },
	    _react2.default.createElement(_reactRouter.Route, { path: 'repo-maker/:userName/:repoName', component: _Repo2.default })
	  )
	);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(6);

	var _reactRedux = __webpack_require__(7);

	var _reactRouter = __webpack_require__(3);

	var _reduxPromise = __webpack_require__(8);

	var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

	var _reducers = __webpack_require__(9);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _routes = __webpack_require__(14);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// hashHistory & memortHistory are other history objects
	var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxPromise2.default)(_redux.createStore);

	var ReduxBlogApp = function ReduxBlogApp() {
	  return _react2.default.createElement(
	    _reactRedux.Provider,
	    { store: createStoreWithMiddleware(_reducers2.default) },
	    _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _routes2.default })
	  );
	};

	exports.default = ReduxBlogApp;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("redux-promise");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(6);

	var _reduxForm = __webpack_require__(10);

	var _reducer_posts = __webpack_require__(11);

	var _reducer_posts2 = _interopRequireDefault(_reducer_posts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	  posts: _reducer_posts2.default,
	  form: _reduxForm.reducer
	});

	exports.default = rootReducer;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("redux-form");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _index.FETCH_POST:
	      return _extends({}, state, { post: action.payload.data });
	    case _index.FETCH_POSTS:
	      return _extends({}, state, { all: action.payload.data });
	    default:
	      return state;
	  }
	};

	var _index = __webpack_require__(12);

	var INITIAL_STATE = { all: [], post: null };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DELETE_POST = exports.FETCH_POST = exports.CREATE_POST = exports.FETCH_POSTS = undefined;
	exports.fetchPosts = fetchPosts;
	exports.createPost = createPost;
	exports.fetchPost = fetchPost;
	exports.deletePost = deletePost;

	var _axios = __webpack_require__(13);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FETCH_POSTS = exports.FETCH_POSTS = 'FETCH_POSTS';
	var CREATE_POST = exports.CREATE_POST = 'CREATE_POST';
	var FETCH_POST = exports.FETCH_POST = 'FETCH_POST';
	var DELETE_POST = exports.DELETE_POST = 'DELETE_POST';

	var ROOT_URL = 'https://reduxblog.herokuapp.com/api';
	var API_KEY = '?key=sjhsaljkfdhsa';

	function fetchPosts() {
	  var request = _axios2.default.get(ROOT_URL + '/posts' + API_KEY);

	  return {
	    type: FETCH_POSTS,
	    payload: request
	  };
	}

	function createPost(props) {
	  var request = _axios2.default.post(ROOT_URL + '/posts' + API_KEY, props);

	  return {
	    type: CREATE_POST,
	    payload: request
	  };
	}

	function fetchPost(id) {
	  var request = _axios2.default.get(ROOT_URL + '/posts/' + id + API_KEY + '}');

	  return {
	    type: FETCH_POST,
	    payload: request
	  };
	}

	function deletePost(id) {
	  var request = _axios2.default.delete(ROOT_URL + '/posts/' + id + API_KEY);

	  return {
	    type: DELETE_POST,
	    payload: request
	  };
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _BlogApp = __webpack_require__(15);

	var _BlogApp2 = _interopRequireDefault(_BlogApp);

	var _posts_index = __webpack_require__(16);

	var _posts_index2 = _interopRequireDefault(_posts_index);

	var _posts_new = __webpack_require__(18);

	var _posts_new2 = _interopRequireDefault(_posts_new);

	var _posts_show = __webpack_require__(19);

	var _posts_show2 = _interopRequireDefault(_posts_show);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: 'redux-blog', component: _BlogApp2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _posts_index2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'posts/new', component: _posts_new2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'posts/:id', component: _posts_show2.default })
	);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BlogApp = function BlogApp(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    props.children
	  );
	};

	BlogApp.propTypes = {
	  children: _react.PropTypes.node.isRequired
	};

	exports.default = BlogApp;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(17);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _reactRedux = __webpack_require__(7);

	var _index = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PostsIndex = function (_Component) {
	  _inherits(PostsIndex, _Component);

	  function PostsIndex() {
	    _classCallCheck(this, PostsIndex);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PostsIndex).apply(this, arguments));
	  }

	  _createClass(PostsIndex, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.fetchPosts();
	    }
	  }, {
	    key: 'renderPosts',
	    value: function renderPosts() {
	      return this.props.posts.map(function (post) {
	        return _react2.default.createElement(
	          'li',
	          { className: 'list-group-item', key: post.id },
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/redux-blog/posts/' + post.id },
	            _react2.default.createElement(
	              'span',
	              { className: 'pull-xs-right' },
	              post.categories
	            ),
	            _react2.default.createElement(
	              'strong',
	              null,
	              post.title
	            )
	          )
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'text-xs-right' },
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/redux-blog/posts/new', className: 'btn btn-primary' },
	            'Add a Post'
	          )
	        ),
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Posts'
	        ),
	        _react2.default.createElement(
	          'ul',
	          { className: 'list-group' },
	          this.renderPosts()
	        )
	      );
	    }
	  }]);

	  return PostsIndex;
	}(_react.Component);

	function mapStateToProps(state) {
	  return { posts: state.posts.all };
	}

	// Before: export default connect(null, { fetchPosts })(PostsIndex);
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchPosts: _index.fetchPosts })(PostsIndex);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavLink = function NavLink(props) {
	  return _react2.default.createElement(_reactRouter.Link, _extends({}, props, { activeClassName: 'active' }));
	};

	exports.default = NavLink;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reduxForm = __webpack_require__(10);

	var _index = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PostsNew = function (_Component) {
	  _inherits(PostsNew, _Component);

	  function PostsNew() {
	    _classCallCheck(this, PostsNew);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PostsNew).apply(this, arguments));
	  }

	  _createClass(PostsNew, [{
	    key: 'onSubmit',
	    value: function onSubmit(props) {
	      var _this2 = this;

	      this.props.createPost(props).then(function () {
	        // blog post has been created, navigate the users to the index
	        // We navigate by calling this.context.router.push with the
	        // new path to navigate to.
	        _this2.context.router.push('/redux-blog');
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var _props$fields = _props.fields;
	      var title = _props$fields.title;
	      var categories = _props$fields.categories;
	      var content = _props$fields.content;
	      var handleSubmit = _props.handleSubmit;


	      return _react2.default.createElement(
	        'form',
	        { onSubmit: handleSubmit(this.onSubmit.bind(this)) },
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Create A New Post'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + (title.touched && title.invalid ? 'has-danger' : '') },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Title'
	          ),
	          _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control' }, title)),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-help form-control-label' },
	            title.touched ? title.error : ''
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          {
	            className: 'form-group ' + (categories.touched && categories.invalid ? 'has-danger' : '')
	          },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Categories'
	          ),
	          _react2.default.createElement('input', _extends({ type: 'text', className: 'form-control' }, categories)),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-help form-control-label' },
	            categories.touched ? categories.error : ''
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group ' + (content.touched && content.invalid ? 'has-danger' : '') },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Content'
	          ),
	          _react2.default.createElement('textarea', _extends({ className: 'form-control' }, content)),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-help form-control-label' },
	            content.touched ? content.error : ''
	          )
	        ),
	        _react2.default.createElement(
	          'button',
	          { type: 'submit', className: 'btn btn-primary' },
	          'Submit'
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/redux-blog', className: 'btn btn-danger' },
	          'Cancel'
	        )
	      );
	    }
	  }]);

	  return PostsNew;
	}(_react.Component);

	PostsNew.contextTypes = {
	  router: _react.PropTypes.object
	};

	function validate(values) {
	  var errors = {};

	  if (!values.title) {
	    errors.title = 'Enter a Title';
	  }

	  if (!values.categories) {
	    errors.categories = 'Enter at Least 1 Category';
	  }

	  if (!values.content) {
	    errors.content = 'Enter Some Content';
	  }
	  return errors;
	}

	// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
	// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps\
	exports.default = (0, _reduxForm.reduxForm)({
	  form: 'PostsNewForm',
	  fields: ['title', 'categories', 'content'],
	  validate: validate
	}, null, { createPost: _index.createPost })(PostsNew);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRedux = __webpack_require__(7);

	var _index = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PostsShow = function (_Component) {
	  _inherits(PostsShow, _Component);

	  function PostsShow() {
	    _classCallCheck(this, PostsShow);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PostsShow).apply(this, arguments));
	  }

	  _createClass(PostsShow, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.fetchPost(this.props.params.id);
	    }
	  }, {
	    key: 'onSubmit',
	    value: function onSubmit(props) {
	      var _this2 = this;

	      this.props.createPost(props).then(function () {
	        // blog post has been created, navigate the users to the index
	        // We navigate by calling this.context.router.push with the
	        // new path to navigate to.
	        _this2.context.router.push('/');
	      });
	    }
	  }, {
	    key: 'onDeleteClick',
	    value: function onDeleteClick() {
	      var _this3 = this;

	      this.props.deletePost(this.props.params.id).then(function () {
	        _this3.context.router.push('/redux-blog');
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var post = this.props.post;


	      if (!this.props.post) {
	        return _react2.default.createElement(
	          'div',
	          null,
	          'Loading...'
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/redux-blog' },
	          'Back to Index'
	        ),
	        _react2.default.createElement(
	          'button',
	          { className: 'btn btn-danger pull-xs-right', onClick: this.onDeleteClick.bind(this) },
	          'Delete Post'
	        ),
	        _react2.default.createElement(
	          'h3',
	          null,
	          post.title
	        ),
	        _react2.default.createElement(
	          'h6',
	          null,
	          'Categories: ',
	          post.categories
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          post.content
	        )
	      );
	    }
	  }]);

	  return PostsShow;
	}(_react.Component);

	PostsShow.contextTypes = {
	  router: _react.PropTypes.object
	};

	function mapStateToProps(state) {
	  return { post: state.posts.post };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchPost: _index.fetchPost, deletePost: _index.deletePost })(PostsShow);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lodash = __webpack_require__(21);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _youtubeApiSearch = __webpack_require__(22);

	var _youtubeApiSearch2 = _interopRequireDefault(_youtubeApiSearch);

	var _search_bar = __webpack_require__(23);

	var _search_bar2 = _interopRequireDefault(_search_bar);

	var _video_list = __webpack_require__(24);

	var _video_list2 = _interopRequireDefault(_video_list);

	var _video_detail = __webpack_require__(26);

	var _video_detail2 = _interopRequireDefault(_video_detail);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var API_KEY = 'AIzaSyDHbRuzBFplzn15IKwqte956x1vAoqecnU';

	var ReduxYoutubeApp = function (_Component) {
	  _inherits(ReduxYoutubeApp, _Component);

	  function ReduxYoutubeApp(props) {
	    _classCallCheck(this, ReduxYoutubeApp);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReduxYoutubeApp).call(this, props));

	    _this.state = {
	      videos: [],
	      selectedVideo: null
	    };

	    _this.videoSearch('got recap');
	    return _this;
	  }

	  _createClass(ReduxYoutubeApp, [{
	    key: 'videoSearch',
	    value: function videoSearch(term) {
	      var _this2 = this;

	      (0, _youtubeApiSearch2.default)({ key: API_KEY, term: term }, function (videos) {
	        _this2.setState({
	          videos: videos,
	          selectedVideo: videos[0]
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var videoSearch = _lodash2.default.debounce(function (term) {
	        _this3.videoSearch(term);
	      }, 300);

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_search_bar2.default, { onSearchTermChange: videoSearch }),
	        _react2.default.createElement(_video_detail2.default, { video: this.state.selectedVideo }),
	        _react2.default.createElement(_video_list2.default, {
	          onVideoSelect: function onVideoSelect(selectedVideo) {
	            return _this3.setState({ selectedVideo: selectedVideo });
	          },
	          videos: this.state.videos
	        })
	      );
	    }
	  }]);

	  return ReduxYoutubeApp;
	}(_react.Component);

	exports.default = ReduxYoutubeApp;

	// ReactDom.render(<App />, document.querySelector('.container'));

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("youtube-api-search");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchBar = function (_Component) {
	  _inherits(SearchBar, _Component);

	  function SearchBar(props) {
	    _classCallCheck(this, SearchBar);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).call(this, props));

	    _this.state = { term: '' };
	    return _this;
	  }

	  _createClass(SearchBar, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'search-bar' },
	        _react2.default.createElement('input', {
	          value: this.state.term,
	          onChange: function onChange(event) {
	            return _this2.onInputChange(event.target.value);
	          }
	        })
	      );
	    }
	  }, {
	    key: 'onInputChange',
	    value: function onInputChange(term) {
	      this.setState({ term: term });
	      this.props.onSearchTermChange(term);
	    }
	  }]);

	  return SearchBar;
	}(_react.Component);

	exports.default = SearchBar;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _video_list_item = __webpack_require__(25);

	var _video_list_item2 = _interopRequireDefault(_video_list_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VideoList = function VideoList(props) {
	  var videoItems = props.videos.map(function (video) {
	    return _react2.default.createElement(_video_list_item2.default, {
	      onVideoSelect: props.onVideoSelect,
	      key: video.etag,
	      video: video
	    });
	  });

	  return _react2.default.createElement(
	    'ul',
	    { className: 'col-md-4 list-group' },
	    videoItems
	  );
	};

	exports.default = VideoList;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VideoListItem = function VideoListItem(_ref) {
	  var video = _ref.video;
	  var onVideoSelect = _ref.onVideoSelect;

	  var imageURL = video.snippet.thumbnails.default.url;
	  return _react2.default.createElement(
	    "li",
	    { onClick: function onClick() {
	        return onVideoSelect(video);
	      }, className: "list-group-item" },
	    _react2.default.createElement(
	      "div",
	      { className: "video-list media" },
	      _react2.default.createElement(
	        "div",
	        { className: "media-left" },
	        _react2.default.createElement("img", { role: "presentation", className: "media-object", src: imageURL })
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "media-body" },
	        _react2.default.createElement(
	          "div",
	          { className: "media-heading" },
	          video.snippet.title
	        )
	      )
	    )
	  );
	};

	exports.default = VideoListItem;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VideoDetail = function VideoDetail(_ref) {
	  var video = _ref.video;


	  if (!video) {
	    return _react2.default.createElement(
	      "div",
	      null,
	      "Loading..."
	    );
	  }

	  var videoId = video.id.videoId;
	  var url = "https://www.youtube.com/embed/" + videoId;

	  return _react2.default.createElement(
	    "div",
	    { className: "video-detail col-md-8" },
	    _react2.default.createElement(
	      "div",
	      { className: "embed-responsive embed-responsive-16by9" },
	      _react2.default.createElement("iframe", { className: "embed-responsive-item", src: url })
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "details" },
	      _react2.default.createElement(
	        "div",
	        null,
	        video.snippet.title
	      ),
	      _react2.default.createElement(
	        "div",
	        null,
	        video.snippet.description
	      )
	    )
	  );
	};

	exports.default = VideoDetail;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(7);

	var _redux = __webpack_require__(6);

	var _reduxPromise = __webpack_require__(8);

	var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

	var _app = __webpack_require__(28);

	var _app2 = _interopRequireDefault(_app);

	var _reducers = __webpack_require__(36);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxPromise2.default)(_redux.createStore);

	var ReduxWeatherApp = function ReduxWeatherApp() {
	  return _react2.default.createElement(
	    _reactRedux.Provider,
	    { store: createStoreWithMiddleware(_reducers2.default) },
	    _react2.default.createElement(_app2.default, null)
	  );
	};

	exports.default = ReduxWeatherApp;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _search_bar = __webpack_require__(29);

	var _search_bar2 = _interopRequireDefault(_search_bar);

	var _weather_list = __webpack_require__(31);

	var _weather_list2 = _interopRequireDefault(_weather_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_search_bar2.default, null),
	    _react2.default.createElement(_weather_list2.default, null)
	  );
	};

	exports.default = App;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(7);

	var _redux = __webpack_require__(6);

	var _index = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchBar = function (_Component) {
	  _inherits(SearchBar, _Component);

	  function SearchBar(props) {
	    _classCallCheck(this, SearchBar);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).call(this, props));

	    _this.state = { term: '' };

	    _this.onInputChange = _this.onInputChange.bind(_this);
	    _this.onFormSubmit = _this.onFormSubmit.bind(_this);
	    return _this;
	  }

	  _createClass(SearchBar, [{
	    key: 'onInputChange',
	    value: function onInputChange(event) {
	      this.setState({ term: event.target.value });
	    }
	  }, {
	    key: 'onFormSubmit',
	    value: function onFormSubmit(event) {
	      event.preventDefault();

	      // go and fetch weather data
	      this.props.fetchWeather(this.state.term);
	      this.setState({ term: '' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'form',
	        { onSubmit: this.onFormSubmit, className: 'input-group' },
	        _react2.default.createElement('input', {
	          placeholder: 'Get a five-day forecast in your favorite cities',
	          className: 'form-control',
	          value: this.state.term,
	          onChange: this.onInputChange
	        }),
	        _react2.default.createElement(
	          'span',
	          { className: 'input-group-btn' },
	          _react2.default.createElement(
	            'button',
	            { type: 'submit', className: 'btn btn-secondary' },
	            'Submit'
	          )
	        )
	      );
	    }
	  }]);

	  return SearchBar;
	}(_react.Component);

	SearchBar.propTypes = { fetchWeather: _react2.default.PropTypes.func.isRequired };

	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)({ fetchWeather: _index.fetchWeather }, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SearchBar);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FETCH_WEATHER = undefined;
	exports.fetchWeather = fetchWeather;

	var _axios = __webpack_require__(13);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var API_KEY = '48c0e1e17b2bb98253b243fadd6043b5';
	var ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

	// create const to keep action types consistent between action creators and reducers
	var FETCH_WEATHER = exports.FETCH_WEATHER = 'FETCH_WEATHER';

	// create an action creator
	function fetchWeather(city) {
	  var url = ROOT_URL + '&units=imperial&q=' + city;
	  var request = _axios2.default.get(url);

	  return {
	    type: FETCH_WEATHER,
	    payload: request
	  };
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(7);

	var _chart = __webpack_require__(32);

	var _chart2 = _interopRequireDefault(_chart);

	var _google_map = __webpack_require__(34);

	var _google_map2 = _interopRequireDefault(_google_map);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WeatherList = function (_Component) {
	  _inherits(WeatherList, _Component);

	  function WeatherList() {
	    _classCallCheck(this, WeatherList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(WeatherList).apply(this, arguments));
	  }

	  _createClass(WeatherList, [{
	    key: 'renderWeather',
	    value: function renderWeather(cityData) {
	      var name = cityData.city.name;
	      var temps = cityData.list.map(function (weather) {
	        return weather.main.temp;
	      });
	      var pressures = cityData.list.map(function (weather) {
	        return weather.main.pressure;
	      });
	      var humidities = cityData.list.map(function (weather) {
	        return weather.main.humidity;
	      });
	      var _cityData$city$coord = cityData.city.coord;
	      var lat = _cityData$city$coord.lat;
	      var lon = _cityData$city$coord.lon;
	      // initMap();

	      return _react2.default.createElement(
	        'tr',
	        { key: name },
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(_google_map2.default, { lon: lon, lat: lat })
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(_chart2.default, { data: temps, color: 'orange', units: '°F' })
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(_chart2.default, { data: pressures, color: 'green', units: 'hPa' })
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(_chart2.default, { data: humidities, color: 'black', units: '%' })
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'table',
	        { className: 'table table-hover' },
	        _react2.default.createElement(
	          'thead',
	          null,
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'th',
	              null,
	              'City'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'Temperature(°F)'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'Pressure (hPa)'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'Humidity (%)'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'tbody',
	          null,
	          this.props.weather.map(this.renderWeather)
	        )
	      );
	    }
	  }]);

	  return WeatherList;
	}(_react.Component);

	// OK
	// function mapStateToProps(state) {
	//   return { weather: state.weather }
	// }

	// BETTER (ES6)


	function mapStateToProps(_ref) {
	  var weather = _ref.weather;

	  return { weather: weather };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(WeatherList);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(21);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactSparklines = __webpack_require__(33);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function average(data) {
	  return _lodash2.default.round(_lodash2.default.sum(data) / data.length);
	}

	exports.default = function (props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      _reactSparklines.Sparklines,
	      { height: 120, width: 180, data: props.data },
	      _react2.default.createElement(_reactSparklines.SparklinesLine, { color: props.color }),
	      _react2.default.createElement(_reactSparklines.SparklinesReferenceLine, { type: 'avg' }),
	      _react2.default.createElement(
	        'div',
	        null,
	        average(props.data),
	        ' ',
	        props.units
	      )
	    )
	  );
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("react-sparklines");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactGoogleMaps = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (props) {
	  return _react2.default.createElement(_reactGoogleMaps.GoogleMapLoader, {
	    containerElement: _react2.default.createElement('div', { style: { height: '100%' } }),
	    googleMapElement: _react2.default.createElement(_reactGoogleMaps.GoogleMap, {
	      defaultZoom: 12,
	      defaultCenter: { lat: props.lat, lng: props.lon } })
	  });
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("react-google-maps");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(6);

	var _reducer_weather = __webpack_require__(37);

	var _reducer_weather2 = _interopRequireDefault(_reducer_weather);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	  weather: _reducer_weather2.default
	});

	exports.default = rootReducer;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _index.FETCH_WEATHER:
	      // NEVER NEVER NEVER MANIPULATE STATE IN REDUX
	      // ALWAYS RETURN A NEW INSTANCE OF STATE. .CONCAT will do that...
	      // return state.concat([ action.payload.data ]);

	      // THE ES6 WAY WILL DO IT BETTER
	      return [action.payload.data].concat(_toConsumableArray(state));
	  }
	  return state;
	};

	var _index = __webpack_require__(30);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(39);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(40);

	var _configureStore = __webpack_require__(41);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	var _Root = __webpack_require__(50);

	var _Root2 = _interopRequireDefault(_Root);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// const store = configureStore();

	(0, _reactDom.render)(_react2.default.createElement(_Root2.default, { store: _configureStore2.default }), document.getElementById('app-container'));

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(6);

	var _reduxThunk = __webpack_require__(42);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxLogger = __webpack_require__(43);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducers = __webpack_require__(44);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _index = __webpack_require__(48);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var logger = (0, _reduxLogger2.default)();

	var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(logger, _reduxThunk2.default),
	// https://github.com/zalmoxisus/redux-devtools-extension
	window.devToolsExtension ? window.devToolsExtension() : function (f) {
	  return f;
	}));

	store.dispatch((0, _index.preload)());

	exports.default = store;

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("redux-logger");

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLastFetched = exports.getFetching = exports.getPhotos = exports.getGallery = exports.getGalleries = exports.getActiveGalleryId = undefined;

	var _redux = __webpack_require__(6);

	var _activeGallery = __webpack_require__(45);

	var fromActiveGallery = _interopRequireWildcard(_activeGallery);

	var _galleries = __webpack_require__(46);

	var fromGalleries = _interopRequireWildcard(_galleries);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.default = (0, _redux.combineReducers)({
	  activeGallery: fromActiveGallery.default,
	  galleries: fromGalleries.default
	});

	/*
	 * Selectors
	 */

	var getActiveGalleryId = exports.getActiveGalleryId = function getActiveGalleryId(state) {
	  return fromActiveGallery.getActiveGalleryId(state.activeGallery);
	};
	var getGalleries = exports.getGalleries = function getGalleries(state) {
	  return fromGalleries.getGalleries(state.galleries);
	};
	var getGallery = exports.getGallery = function getGallery(state, id) {
	  return fromGalleries.getGallery(state.galleries, id);
	};
	var getPhotos = exports.getPhotos = function getPhotos(state, id) {
	  return fromGalleries.getPhotos(state.galleries, id);
	};
	var getFetching = exports.getFetching = function getFetching(state, id) {
	  return fromGalleries.getFetching(state.galleries, id);
	};
	var getLastFetched = exports.getLastFetched = function getLastFetched(state, id) {
	  return fromGalleries.getLastFetched(state.galleries, id);
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var activeGallery = function activeGallery() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'SHOW_GALLERY':
	      return action.payload.id;

	    default:
	      return state;
	  }
	};

	exports.default = activeGallery;

	/*
	 * Selectors
	 */

	var getActiveGalleryId = exports.getActiveGalleryId = function getActiveGalleryId(state) {
	  return state;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getGalleries = exports.getLastFetched = exports.getFetching = exports.getPhotos = exports.getGallery = undefined;

	var _normalizePhotos = __webpack_require__(47);

	var _normalizePhotos2 = _interopRequireDefault(_normalizePhotos);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = {
	  '72157672493623286': { name: 'Music', photos: [] },
	  '72157669502145453': { name: 'People', photos: [] },
	  '72157669502192183': { name: 'Performers', photos: [] },
	  '72157673748915726': { name: 'World', photos: [] },
	  '72157673749369546': { name: 'BLK', photos: [] },
	  '72157672741096881': { name: 'Design', photos: [] }
	};

	var galleries = function galleries() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'LOAD_GALLERY_DATA_REQUEST':
	      return Object.assign({}, state, _defineProperty({}, action.payload.id, Object.assign({}, state[action.payload.id], {
	        fetching: true
	      })));

	    case 'LOAD_GALLERY_DATA_SUCCESS':
	      return Object.assign({}, state, _defineProperty({}, action.payload.id, Object.assign({}, state[action.payload.id], {
	        photos: (0, _normalizePhotos2.default)(action.payload.data.photo),
	        fetching: false,
	        lastFetched: Date.now()
	      })));

	    case 'LOAD_GALLERY_DATA_FAILURE':
	      return Object.assign({}, state, _defineProperty({}, action.payload.id, Object.assign({}, state[action.payload.id], {
	        fetching: false
	      })));

	    default:
	      return state;
	  }
	};

	exports.default = galleries;

	/*
	 * Selectors
	 */

	var getGallery = exports.getGallery = function getGallery(state, id) {
	  return state[id] || {};
	};
	var getPhotos = exports.getPhotos = function getPhotos(state, id) {
	  return getGallery(state, id).photos;
	};
	var getFetching = exports.getFetching = function getFetching(state, id) {
	  return getGallery(state, id).fetching;
	};
	var getLastFetched = exports.getLastFetched = function getLastFetched(state, id) {
	  return getGallery(state, id).lastFetched;
	};

	// {1: {name: a}, 2: {name: b}} -> [{id: 1, name: a}, {id: 2, name: b}]
	var getGalleries = exports.getGalleries = function getGalleries(state) {
	  return Object.keys(state).map(function (id) {
	    return Object.assign({ id: id }, state[id]);
	  });
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = normalizePhotos;
	function normalizePhotos(photos) {
	  return Array.from(photos).map(function (photo) {
	    return {
	      src: String(photo.url_o),
	      srcset: [photo.url_o + " 1024w", photo.url_c + " 800w", photo.url_z + " 640w", photo.url_o + " 500w", photo.url_n + " 320w"],
	      thumbnail: String(photo.url_o || photo.url_n || photo.url_z),
	      thumbnailWidth: Number(photo.width_o || photo.width_n || photo.width_z),
	      thumbnailHeight: Number(photo.height_o || photo.height_n || photo.height_z)
	    };
	  });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.preload = exports.showGallery = exports.loadGalleryData = undefined;

	var _flickrApi = __webpack_require__(49);

	var _index = __webpack_require__(44);

	var loadGalleryData = exports.loadGalleryData = function loadGalleryData(id) {
	  return function (dispatch, getState) {
	    if ((0, _index.getFetching)(getState(), id)) return;

	    var secondsFromLastFetch = (Date.now() - (0, _index.getLastFetched)(getState(), id)) / 1000;
	    if (secondsFromLastFetch < 300) return;

	    dispatch({
	      type: 'LOAD_GALLERY_DATA_REQUEST',
	      payload: { id: id }
	    });

	    (0, _flickrApi.fetchGallery)(id).then(function (data) {
	      if (data.photoset) {
	        dispatch({
	          type: 'LOAD_GALLERY_DATA_SUCCESS',
	          payload: { id: id, data: data.photoset }
	        });
	      } else {
	        dispatch({
	          type: 'LOAD_GALLERY_DATA_FAILURE',
	          payload: { id: id, error: 'API error', more: data }
	        });
	      }
	    }, function (error) {
	      return dispatch({
	        type: 'LOAD_GALLERY_DATA_FAILURE',
	        payload: { id: id, error: 'Network error', more: error }
	      });
	    });
	  };
	};

	var showGallery = exports.showGallery = function showGallery(id) {
	  return {
	    type: 'SHOW_GALLERY',
	    payload: { id: id }
	  };
	};

	var preload = exports.preload = function preload() {
	  return function (dispatch, getState) {
	    var galleries = (0, _index.getGalleries)(getState());

	    galleries.forEach(function (gallery) {
	      return dispatch(loadGalleryData(gallery.id));
	    });
	  };
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchGallery = undefined;

	var _axios = __webpack_require__(13);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ROOT_URL = 'https://api.flickr.com/services/rest/';

	var fetchGallery = exports.fetchGallery = function fetchGallery(galleryId) {
	  return _axios2.default.get(ROOT_URL, {
	    params: {
	      api_key: '762ef5752888e4728101a359a26cc0e9',
	      user_id: '16196444@N00',
	      format: 'json',
	      method: 'flickr.photosets.getPhotos',
	      photoset_id: galleryId,
	      nojsoncallback: 1,
	      extras: 'url_o,url_n,url_c,url_z,url_q,url_sq,url_t,url_s,url_m'
	    }
	  }).then(function (response) {
	    return response.data;
	  });
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(7);

	var _App = __webpack_require__(51);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Root = function Root(_ref) {
	  var store = _ref.store;
	  return _react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_App2.default, null)
	  );
	};


	Root.propTypes = {
	  store: _react.PropTypes.object.isRequired
	};

	exports.default = Root;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(7);

	var _reactGridGallery = __webpack_require__(52);

	var _reactGridGallery2 = _interopRequireDefault(_reactGridGallery);

	var _index = __webpack_require__(48);

	var _index2 = __webpack_require__(44);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App(_ref) {
	  var galleries = _ref.galleries;
	  var activeGalleryId = _ref.activeGalleryId;
	  var activeGalleryFetching = _ref.activeGalleryFetching;
	  var activeGalleryPhotos = _ref.activeGalleryPhotos;
	  var showGallery = _ref.showGallery;
	  return _react2.default.createElement(
	    'div',
	    null,
	    galleries.map(function (gallery) {
	      return _react2.default.createElement(
	        'button',
	        { onClick: function onClick() {
	            return showGallery(gallery.id);
	          }, key: gallery.id },
	        gallery.name
	      );
	    }),
	    !activeGalleryId && _react2.default.createElement(
	      'div',
	      null,
	      'Click one of the buttons!'
	    ),
	    activeGalleryFetching && _react2.default.createElement(
	      'div',
	      null,
	      'Loading ',
	      activeGalleryId,
	      '...'
	    ),
	    activeGalleryPhotos && _react2.default.createElement(_reactGridGallery2.default, {
	      images: activeGalleryPhotos,
	      enableImageSelection: false
	    })
	  );
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    galleries: (0, _index2.getGalleries)(state),
	    activeGalleryId: (0, _index2.getActiveGalleryId)(state),
	    activeGalleryFetching: (0, _index2.getFetching)(state, (0, _index2.getActiveGalleryId)(state)),
	    activeGalleryPhotos: (0, _index2.getPhotos)(state, (0, _index2.getActiveGalleryId)(state))
	  };
	}, function (dispatch) {
	  return {
	    showGallery: function showGallery(id) {
	      dispatch((0, _index.loadGalleryData)(id));
	      dispatch((0, _index.showGallery)(id));
	    }
	  };
	})(App);

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("react-grid-gallery");

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ }
/******/ ]);