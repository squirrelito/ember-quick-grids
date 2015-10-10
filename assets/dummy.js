"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/adapters/application', ['exports', 'ember-data', 'dummy/config/environment'], function (exports, DS, config) {

    'use strict';

    exports['default'] = DS['default'].JSONAPIAdapter.extend({
        namespace: config['default'].baseURL + 'api'
    });

});
define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var name = config['default'].APP.name;
  var version = config['default'].APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('dummy/components/grid-col', ['exports', 'ember-quick-grids/components/grid-col'], function (exports, grid_col) {

	'use strict';



	exports['default'] = grid_col['default'];

});
define('dummy/components/grid-pagination', ['exports', 'ember-quick-grids/components/grid-pagination'], function (exports, grid_pagination) {

	'use strict';



	exports['default'] = grid_pagination['default'];

});
define('dummy/components/grid-view', ['exports', 'ember-quick-grids/components/grid-view'], function (exports, grid_view) {

	'use strict';



	exports['default'] = grid_view['default'];

});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/controllers/dashboard', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    sortBy: 'username',
    sortDirection: 'asc',
    localStorageService: {
      set: function set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
      },
      remove: function remove(key) {
        localStorage.removeItem(key);
      },
      get: function get(key) {
        var value = localStorage.getItem(key);
        if (value) {
          return JSON.parse(value);
        }
        return false;
      },
      flush: function flush() {
        localStorage.clear();
      }
    },

    init: function init() {
      this._super.apply(this, arguments);
      this.findUsers(1);
    },
    actions: {
      paginate: function paginate(page) {
        this.findUsers(page);
      },
      sort: function sort(field, direction) {
        this.sortBy = field;
        this.sortDirection = direction;
        this.findUsers(1);
      }
    },

    findUsers: function findUsers(page) {
      var _this = this;

      this.store.query('user', { page: page, sort_by: this.sortBy, sort_direction: this.sortDirection }).then(function (users) {
        _this.set('users', users);
      }, function (reason) {
        console.info(reason, 'Mirage could not fetch the users data!');
      });
    },

    columns: [{
      id: 'username',
      name: 'Username',
      sortable: true,
      sort: 'username',
      sortAsc: true,
      visible: true,
      width: 14,
      value: function value(o) {
        return o.get('username');
      }
    }, {
      id: 'email',
      name: 'Email',
      sortable: true,
      sort: 'email',
      visible: true,
      width: 20,
      value: function value(o) {
        return o.get('email');
      }
    }, {
      id: 'name',
      name: 'Full name',
      sortable: true,
      sort: 'name',
      visible: true,
      width: 33,
      value: function value(o) {
        return o.get('name');
      }
    }, {
      id: 'status',
      name: 'Status',
      sortable: true,
      sort: 'status',
      visible: true,
      width: 18,
      value: function value(o) {
        return o.get('status');
      }
    }, {
      id: 'actions',
      name: 'Actions',
      sortable: false,
      sort: '',
      visible: true,
      width: 15,
      value: function value(o) {
        return {
          template: 'actions-row',
          value: o
        };
      }
    }]
  });

});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/ember-quick-grids/tests/modules/ember-quick-grids/components/grid-col.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-quick-grids/components');
  QUnit.test('modules/ember-quick-grids/components/grid-col.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/ember-quick-grids/components/grid-col.js should pass jshint.');
  });

});
define('dummy/ember-quick-grids/tests/modules/ember-quick-grids/components/grid-pagination.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-quick-grids/components');
  QUnit.test('modules/ember-quick-grids/components/grid-pagination.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/ember-quick-grids/components/grid-pagination.js should pass jshint.');
  });

});
define('dummy/ember-quick-grids/tests/modules/ember-quick-grids/components/grid-view.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-quick-grids/components');
  QUnit.test('modules/ember-quick-grids/components/grid-view.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/ember-quick-grids/components/grid-view.js should pass jshint.');
  });

});
define('dummy/helpers/grid-value', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Helper.helper(function (col, con) {
    return col.value(con);
  });

});
define('dummy/helpers/is-same', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Helper.helper(function (value1, value2) {
    return value1 === value2;
  });

});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, pluralize) {

	'use strict';

	exports['default'] = pluralize['default'];

});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, singularize) {

	'use strict';

	exports['default'] = singularize['default'];

});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](config['default'].APP.name, config['default'].APP.version)
  };

});
define('dummy/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'dummy/config/environment', 'dummy/mirage/config', 'ember-cli-mirage/server'], function (exports, readModules, ENV, config, Server) {

  'use strict';

  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }
      var environment = ENV['default'].environment;

      if (_shouldUseMirage(environment, ENV['default']['ember-cli-mirage'])) {
        var modules = readModules['default'](ENV['default'].modulePrefix);
        var options = _.assign(modules, { environment: environment, baseConfig: config['default'], testConfig: config.testConfig });

        new Server['default'](options);
      }
    }
  };

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('dummy/mirage/config', ['exports', 'dummy/config/environment'], function (exports, config) {

  'use strict';

  exports['default'] = function () {
    this.namespace = config['default'].baseURL + 'api';
    this.get('/users', function (param, request) {
      var result = {
        data: [{ type: 'user', id: 1, attributes: { username: 'zelda1', email: 'zelda@yahoo.com', name: 'Zelda', status: 'Active' } }, { type: 'user', id: 2, attributes: { username: 'link2', email: 'link@yahoo.com', name: 'Link', status: 'Active' } }, { type: 'user', id: 3, attributes: { username: 'epona3', email: 'epona@yahoo.com', name: 'Epona', status: 'Inactive' } }, { type: 'user', id: 4, attributes: { username: 'zelda4', email: 'zelda@yahoo.com', name: 'Zelda', status: 'Active' } }, { type: 'user', id: 5, attributes: { username: 'link5', email: 'link@yahoo.com', name: 'Link', status: 'Active' } }, { type: 'user', id: 6, attributes: { username: 'epona6', email: 'epona@yahoo.com', name: 'Epona', status: 'Inactive' } }, { type: 'user', id: 7, attributes: { username: 'zelda7', email: 'zelda@yahoo.com', name: 'Zelda', status: 'Active' } }, { type: 'user', id: 8, attributes: { username: 'link8', email: 'link@yahoo.com', name: 'Link', status: 'Active' } }, { type: 'user', id: 9, attributes: { username: 'epona9', email: 'epona@yahoo.com', name: 'Epona', status: 'Inactive' } }],
        meta: { total: 0, per_page: 3, current_page: 1 }
      };
      result.data.sort(function (a, b) {
        if (request.queryParams.sort_direction === 'desc') {
          return b.attributes[request.queryParams.sort_by].localeCompare(a.attributes[request.queryParams.sort_by]);
        } else {
          return a.attributes[request.queryParams.sort_by].localeCompare(b.attributes[request.queryParams.sort_by]);
        }
      });
      var page = parseInt(request.queryParams.page);
      if (page === 1) {
        result.data = result.data.slice(0, 3);
        result.meta = { total: 9, per_page: 3, current_page: 1 };
      } else if (page === 2) {
        result.data = result.data.slice(3, 6);
        result.meta = { total: 9, per_page: 3, current_page: 2 };
      } else if (page === 3) {
        result.data = result.data.slice(6, 9);
        result.meta = { total: 9, per_page: 3, current_page: 3 };
      }

      return result;
    });
  }

});
define('dummy/models/user', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].Model.extend({
        username: DS['default'].attr('string'),
        email: DS['default'].attr('string'),
        status: DS['default'].attr('string'),
        name: DS['default'].attr('string')
    });

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('dashboard', { resetNamespace: true, path: '/' }, function () {});
  });

  exports['default'] = Router;

});
define('dummy/serializers/application', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].JSONAPISerializer.extend({});

});
define('dummy/templates/actions-row', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 6
          }
        },
        "moduleName": "dummy/templates/actions-row.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","btn-group");
        var el2 = dom.createTextNode("\n    actions\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container-fluid");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-sm-12");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4,"id","title");
        var el5 = dom.createTextNode("Welcome to Ember Quick Grids");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1]),3,3);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[5,12],[5,22]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/components/grid-col', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/grid-col.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","partial",[["get","t",["loc",[null,[2,14],[2,15]]]]],["model","model"],["loc",[null,[2,4],[2,31]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/grid-col.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["content","value",["loc",[null,[4,4],[4,13]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 7
          }
        },
        "moduleName": "dummy/templates/components/grid-col.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","t",["loc",[null,[1,6],[1,7]]]]],[],0,1,["loc",[null,[1,0],[5,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('dummy/templates/components/grid-pagination', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "topLevel": null,
              "revision": "Ember@2.1.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 13,
                  "column": 16
                },
                "end": {
                  "line": 18,
                  "column": 16
                }
              },
              "moduleName": "dummy/templates/components/grid-pagination.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                    ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              dom.setAttribute(el1,"tabindex","0");
              var el2 = dom.createTextNode("\n                        ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("a");
              dom.setAttribute(el2,"href","javascript:;");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                    ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var element1 = dom.childAt(element0, [1]);
              var morphs = new Array(3);
              morphs[0] = dom.createAttrMorph(element0, 'class');
              morphs[1] = dom.createElementMorph(element1);
              morphs[2] = dom.createMorphAt(element1,0,0);
              return morphs;
            },
            statements: [
              ["attribute","class",["concat",["paginate_button ",["get","page.className",["loc",[null,[15,49],[15,63]]]]]]],
              ["element","action",["paginate",["get","page.number",["loc",[null,[16,67],[16,78]]]]],[],["loc",[null,[16,47],[16,80]]]],
              ["content","page.label",["loc",[null,[16,81],[16,95]]]]
            ],
            locals: ["page"],
            templates: []
          };
        }());
        return {
          meta: {
            "topLevel": null,
            "revision": "Ember@2.1.0",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 8
              },
              "end": {
                "line": 21,
                "column": 8
              }
            },
            "moduleName": "dummy/templates/components/grid-pagination.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","dataTables_paginate paging_simple_numbers");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("ul");
            dom.setAttribute(el2,"class","pagination");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]),1,1);
            return morphs;
          },
          statements: [
            ["block","each",[["get","pages",["loc",[null,[13,24],[13,29]]]]],[],0,null,["loc",[null,[13,16],[18,25]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 24,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/grid-pagination.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","row");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","col-sm-6");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"class","dataTables_info");
          dom.setAttribute(el3,"role","status");
          dom.setAttribute(el3,"aria-live","polite");
          var el4 = dom.createTextNode("\n            Showing ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" to ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" of ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" entries\n        ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","col-sm-6");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [0]);
          var element3 = dom.childAt(element2, [1, 1]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(element3,1,1);
          morphs[1] = dom.createMorphAt(element3,3,3);
          morphs[2] = dom.createMorphAt(element3,5,5);
          morphs[3] = dom.createMorphAt(dom.childAt(element2, [3]),1,1);
          return morphs;
        },
        statements: [
          ["content","from",["loc",[null,[5,20],[5,28]]]],
          ["content","to",["loc",[null,[5,32],[5,38]]]],
          ["content","model.total",["loc",[null,[5,42],[5,57]]]],
          ["block","if",[["get","model.total",["loc",[null,[10,14],[10,25]]]]],[],0,null,["loc",[null,[10,8],[21,15]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 7
          }
        },
        "moduleName": "dummy/templates/components/grid-pagination.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","model.total",["loc",[null,[1,6],[1,17]]]]],[],0,null,["loc",[null,[1,0],[24,7]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('dummy/templates/components/grid-view', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 4
            },
            "end": {
              "line": 4,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/components/grid-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","alert alert-danger text-center");
          var el2 = dom.createElement("i");
          dom.setAttribute(el2,"class","fa fa-ban");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),2,2);
          return morphs;
        },
        statements: [
          ["inline","t",["no-results-found"],[],["loc",[null,[3,78],[3,102]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            var child0 = (function() {
              return {
                meta: {
                  "topLevel": null,
                  "revision": "Ember@2.1.0",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 22,
                      "column": 40
                    },
                    "end": {
                      "line": 26,
                      "column": 40
                    }
                  },
                  "moduleName": "dummy/templates/components/grid-view.hbs"
                },
                isEmpty: false,
                arity: 1,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                                            ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("div");
                  dom.setAttribute(el1,"class","col-md-12");
                  var el2 = dom.createTextNode("\n                                                ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("label");
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createTextNode(" ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n                                            ");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var element2 = dom.childAt(fragment, [1, 1]);
                  var morphs = new Array(2);
                  morphs[0] = dom.createMorphAt(element2,0,0);
                  morphs[1] = dom.createMorphAt(element2,2,2);
                  return morphs;
                },
                statements: [
                  ["inline","input",[],["type","checkbox","name",["subexpr","@mut",[["get","cOption.name",["loc",[null,[24,84],[24,96]]]]],[],[]],"checked",["subexpr","@mut",[["get","cOption.visible",["loc",[null,[24,105],[24,120]]]]],[],[]],"change",["subexpr","@mut",[["get","columnVisibilityChanged",["loc",[null,[24,128],[24,151]]]]],[],[]]],["loc",[null,[24,55],[24,153]]]],
                  ["content","cOption.name",["loc",[null,[24,154],[24,170]]]]
                ],
                locals: ["cOption"],
                templates: []
              };
            }());
            return {
              meta: {
                "topLevel": null,
                "revision": "Ember@2.1.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 13,
                    "column": 28
                  },
                  "end": {
                    "line": 33,
                    "column": 28
                  }
                },
                "moduleName": "dummy/templates/components/grid-view.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                                ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1,"class","dropdown");
                var el2 = dom.createTextNode("\n                                    ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("a");
                dom.setAttribute(el2,"href","javascript:;");
                dom.setAttribute(el2,"class","text-muted btn-xs pull-left dropdown-toggle");
                dom.setAttribute(el2,"type","button");
                dom.setAttribute(el2,"id","dropdownMenu1");
                dom.setAttribute(el2,"data-toggle","dropdown");
                dom.setAttribute(el2,"aria-expanded","true");
                var el3 = dom.createTextNode("\n                                        ");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("i");
                dom.setAttribute(el3,"class","fa fa-cog");
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n                                    ");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n                                    ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("form");
                dom.setAttribute(el2,"class","dropdown-menu table-options");
                dom.setAttribute(el2,"aria-labelledby","dropdownMenu1");
                var el3 = dom.createTextNode("\n                                        ");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("div");
                dom.setAttribute(el3,"class","col-md-12");
                var el4 = dom.createTextNode("\n                                            ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("label");
                var el5 = dom.createComment("");
                dom.appendChild(el4, el5);
                var el5 = dom.createTextNode(" Check/Uncheck All");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                                        ");
                dom.appendChild(el3, el4);
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n");
                dom.appendChild(el2, el3);
                var el3 = dom.createComment("");
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("                                        ");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("div");
                dom.setAttribute(el3,"class","col-md-12");
                var el4 = dom.createTextNode("\n                                            ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("button");
                dom.setAttribute(el4,"type","button");
                dom.setAttribute(el4,"class","btn btn-primary btn-xs");
                var el5 = dom.createTextNode("Apply");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                                            ");
                dom.appendChild(el3, el4);
                var el4 = dom.createElement("button");
                dom.setAttribute(el4,"type","button");
                dom.setAttribute(el4,"class","btn btn-default btn-xs");
                var el5 = dom.createTextNode("Cancel");
                dom.appendChild(el4, el5);
                dom.appendChild(el3, el4);
                var el4 = dom.createTextNode("\n                                        ");
                dom.appendChild(el3, el4);
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n                                    ");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n                                ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element3 = dom.childAt(fragment, [1, 3]);
                var element4 = dom.childAt(element3, [5]);
                var element5 = dom.childAt(element4, [1]);
                var element6 = dom.childAt(element4, [3]);
                var morphs = new Array(4);
                morphs[0] = dom.createMorphAt(dom.childAt(element3, [1, 1]),0,0);
                morphs[1] = dom.createMorphAt(element3,3,3);
                morphs[2] = dom.createElementMorph(element5);
                morphs[3] = dom.createElementMorph(element6);
                return morphs;
              },
              statements: [
                ["inline","input",[],["type","checkbox","name","all","checked",["subexpr","@mut",[["get","allVisible",["loc",[null,[20,94],[20,104]]]]],[],[]],"change",["subexpr","@mut",[["get","allVisibilityChanged",["loc",[null,[20,112],[20,132]]]]],[],[]]],["loc",[null,[20,51],[20,134]]]],
                ["block","each",[["get","columnsVisibility",["loc",[null,[22,48],[22,65]]]]],[],0,null,["loc",[null,[22,40],[26,49]]]],
                ["element","action",["applyTableOptions"],[],["loc",[null,[28,66],[28,96]]]],
                ["element","action",["cancelTableOptions"],[],["loc",[null,[29,66],[29,97]]]]
              ],
              locals: [],
              templates: [child0]
            };
          }());
          var child1 = (function() {
            var child0 = (function() {
              return {
                meta: {
                  "topLevel": null,
                  "revision": "Ember@2.1.0",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 37,
                      "column": 36
                    },
                    "end": {
                      "line": 39,
                      "column": 36
                    }
                  },
                  "moduleName": "dummy/templates/components/grid-view.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                                        ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("i");
                  dom.setAttribute(el1,"class","fa fa-sort-amount-desc");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes() { return []; },
                statements: [

                ],
                locals: [],
                templates: []
              };
            }());
            var child1 = (function() {
              var child0 = (function() {
                return {
                  meta: {
                    "topLevel": null,
                    "revision": "Ember@2.1.0",
                    "loc": {
                      "source": null,
                      "start": {
                        "line": 40,
                        "column": 40
                      },
                      "end": {
                        "line": 42,
                        "column": 40
                      }
                    },
                    "moduleName": "dummy/templates/components/grid-view.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("                                            ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("i");
                    dom.setAttribute(el1,"class","fa fa-sort-amount-asc");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode("\n");
                    dom.appendChild(el0, el1);
                    return el0;
                  },
                  buildRenderNodes: function buildRenderNodes() { return []; },
                  statements: [

                  ],
                  locals: [],
                  templates: []
                };
              }());
              return {
                meta: {
                  "topLevel": null,
                  "revision": "Ember@2.1.0",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 39,
                      "column": 36
                    },
                    "end": {
                      "line": 43,
                      "column": 36
                    }
                  },
                  "moduleName": "dummy/templates/components/grid-view.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
                  dom.insertBoundary(fragment, 0);
                  dom.insertBoundary(fragment, null);
                  return morphs;
                },
                statements: [
                  ["block","if",[["get","c.sortAsc",["loc",[null,[40,46],[40,55]]]]],[],0,null,["loc",[null,[40,40],[42,48]]]]
                ],
                locals: [],
                templates: [child0]
              };
            }());
            return {
              meta: {
                "topLevel": null,
                "revision": "Ember@2.1.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 34,
                    "column": 28
                  },
                  "end": {
                    "line": 45,
                    "column": 28
                  }
                },
                "moduleName": "dummy/templates/components/grid-view.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                                ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("a");
                dom.setAttribute(el1,"href","javascript:;");
                var el2 = dom.createTextNode("\n                                    ");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("                                ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element1 = dom.childAt(fragment, [1]);
                var morphs = new Array(3);
                morphs[0] = dom.createElementMorph(element1);
                morphs[1] = dom.createMorphAt(element1,1,1);
                morphs[2] = dom.createMorphAt(element1,3,3);
                return morphs;
              },
              statements: [
                ["element","action",["sort",["get","c",["loc",[null,[35,71],[35,72]]]]],[],["loc",[null,[35,55],[35,74]]]],
                ["content","c.name",["loc",[null,[36,36],[36,46]]]],
                ["block","if",[["get","c.sortDesc",["loc",[null,[37,42],[37,52]]]]],[],0,1,["loc",[null,[37,36],[43,43]]]]
              ],
              locals: [],
              templates: [child0, child1]
            };
          }());
          var child2 = (function() {
            return {
              meta: {
                "topLevel": null,
                "revision": "Ember@2.1.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 45,
                    "column": 28
                  },
                  "end": {
                    "line": 47,
                    "column": 28
                  }
                },
                "moduleName": "dummy/templates/components/grid-view.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                                ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                return morphs;
              },
              statements: [
                ["content","c.name",["loc",[null,[46,32],[46,42]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          return {
            meta: {
              "topLevel": null,
              "revision": "Ember@2.1.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 20
                },
                "end": {
                  "line": 49,
                  "column": 20
                }
              },
              "moduleName": "dummy/templates/components/grid-view.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("th");
              dom.setAttribute(el1,"class","orderable");
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("                        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element7 = dom.childAt(fragment, [1]);
              var morphs = new Array(3);
              morphs[0] = dom.createAttrMorph(element7, 'data-resizable-column-id');
              morphs[1] = dom.createMorphAt(element7,1,1);
              morphs[2] = dom.createMorphAt(element7,2,2);
              return morphs;
            },
            statements: [
              ["attribute","data-resizable-column-id",["get","c.id",["loc",[null,[11,55],[11,59]]]]],
              ["block","if",[["get","c.first",["loc",[null,[13,34],[13,41]]]]],[],0,null,["loc",[null,[13,28],[33,35]]]],
              ["block","if",[["get","c.sortable",["loc",[null,[34,34],[34,44]]]]],[],1,2,["loc",[null,[34,28],[47,35]]]]
            ],
            locals: [],
            templates: [child0, child1, child2]
          };
        }());
        return {
          meta: {
            "topLevel": null,
            "revision": "Ember@2.1.0",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 16
              },
              "end": {
                "line": 50,
                "column": 16
              }
            },
            "moduleName": "dummy/templates/components/grid-view.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","if",[["get","c.visible",["loc",[null,[9,26],[9,35]]]]],[],0,null,["loc",[null,[9,20],[49,27]]]]
          ],
          locals: ["c"],
          templates: [child0]
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "topLevel": null,
                "revision": "Ember@2.1.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 57,
                    "column": 24
                  },
                  "end": {
                    "line": 62,
                    "column": 24
                  }
                },
                "moduleName": "dummy/templates/components/grid-view.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                            ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("td");
                dom.setAttribute(el1,"class","orderable");
                var el2 = dom.createTextNode("\n                                ");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n                                ");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n                            ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element0 = dom.childAt(fragment, [1]);
                var morphs = new Array(2);
                morphs[0] = dom.createMorphAt(element0,1,1);
                morphs[1] = dom.createMorphAt(element0,3,3);
                return morphs;
              },
              statements: [
                ["content","col.name",["loc",[null,[59,32],[59,44]]]],
                ["inline","grid-col",[],["column",["subexpr","@mut",[["get","col",["loc",[null,[60,50],[60,53]]]]],[],[]],"model",["subexpr","@mut",[["get","con",["loc",[null,[60,60],[60,63]]]]],[],[]]],["loc",[null,[60,32],[60,65]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          return {
            meta: {
              "topLevel": null,
              "revision": "Ember@2.1.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 56,
                  "column": 20
                },
                "end": {
                  "line": 63,
                  "column": 20
                }
              },
              "moduleName": "dummy/templates/components/grid-view.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["block","if",[["get","col.visible",["loc",[null,[57,30],[57,41]]]]],[],0,null,["loc",[null,[57,24],[62,31]]]]
            ],
            locals: ["col"],
            templates: [child0]
          };
        }());
        return {
          meta: {
            "topLevel": null,
            "revision": "Ember@2.1.0",
            "loc": {
              "source": null,
              "start": {
                "line": 54,
                "column": 12
              },
              "end": {
                "line": 65,
                "column": 12
              }
            },
            "moduleName": "dummy/templates/components/grid-view.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            dom.setAttribute(el1,"class","odd gradeX");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("                ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
            return morphs;
          },
          statements: [
            ["block","each",[["get","columnsStatic",["loc",[null,[56,28],[56,41]]]]],[],0,null,["loc",[null,[56,20],[63,29]]]]
          ],
          locals: ["con"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 4
            },
            "end": {
              "line": 68,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/components/grid-view.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("table");
          dom.setAttribute(el1,"class","table table-striped table-bordered table-hover");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("thead");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tr");
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("            ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("tbody");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element8 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element8, 'id');
          morphs[1] = dom.createAttrMorph(element8, 'data-resizable-columns-id');
          morphs[2] = dom.createMorphAt(dom.childAt(element8, [1, 1]),1,1);
          morphs[3] = dom.createMorphAt(dom.childAt(element8, [3]),1,1);
          return morphs;
        },
        statements: [
          ["attribute","id",["get","view.tableId",["loc",[null,[5,75],[5,87]]]]],
          ["attribute","data-resizable-columns-id",["get","view.id",["loc",[null,[5,118],[5,125]]]]],
          ["block","each",[["get","columnsStatic",["loc",[null,[8,24],[8,37]]]]],[],0,null,["loc",[null,[8,16],[50,25]]]],
          ["block","each",[["get","contents",["loc",[null,[54,20],[54,28]]]]],[],1,null,["loc",[null,[54,12],[65,21]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 71,
            "column": 6
          }
        },
        "moduleName": "dummy/templates/components/grid-view.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","dataTable_wrapper");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element9 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element9,1,1);
        morphs[1] = dom.createMorphAt(element9,3,3);
        return morphs;
      },
      statements: [
        ["block","if",[["subexpr","is-same",[["get","view.contents.length",["loc",[null,[2,19],[2,39]]]],0],[],["loc",[null,[2,10],[2,42]]]]],[],0,1,["loc",[null,[2,4],[68,11]]]],
        ["inline","grid-pagination",[],["model",["subexpr","@mut",[["get","pagination",["loc",[null,[70,28],[70,38]]]]],[],[]],"paginate","paginate"],["loc",[null,[70,4],[70,60]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('dummy/templates/dashboard', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 126
          }
        },
        "moduleName": "dummy/templates/dashboard.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","grid-view",[],["id","users-table","localStorage",["subexpr","@mut",[["get","localStorageService",["loc",[null,[1,42],[1,61]]]]],[],[]],"columns",["subexpr","@mut",[["get","columns",["loc",[null,[1,70],[1,77]]]]],[],[]],"contents",["subexpr","@mut",[["get","users",["loc",[null,[1,87],[1,92]]]]],[],[]],"sort","sort","paginate","paginate"],["loc",[null,[1,0],[1,126]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/tests/adapters/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function(assert) { 
    assert.ok(true, 'adapters/application.js should pass jshint.'); 
  });

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/dashboard.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/dashboard.js should pass jshint', function(assert) { 
    assert.ok(false, 'controllers/dashboard.js should pass jshint.\ncontrollers/dashboard.js: line 8, col 7, \'localStorage\' is not defined.\ncontrollers/dashboard.js: line 11, col 7, \'localStorage\' is not defined.\ncontrollers/dashboard.js: line 14, col 19, \'localStorage\' is not defined.\ncontrollers/dashboard.js: line 21, col 7, \'localStorage\' is not defined.\n\n4 errors'); 
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/router', 'dummy/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/mirage/config.jshint', function () {

  'use strict';

  QUnit.module('JSHint - mirage');
  QUnit.test('mirage/config.js should pass jshint', function(assert) { 
    assert.ok(true, 'mirage/config.js should pass jshint.'); 
  });

});
define('dummy/tests/models/user.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/user.js should pass jshint', function(assert) { 
    assert.ok(true, 'models/user.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/serializers/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/application.js should pass jshint', function(assert) { 
    assert.ok(true, 'serializers/application.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"name":"ember-quick-grids","version":"0.0.6+8bfa3694"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map