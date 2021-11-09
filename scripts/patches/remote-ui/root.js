'use strict';

require('core-js/modules/es.symbol');

require('core-js/modules/es.symbol.description');

require('core-js/modules/es.symbol.iterator');

require('core-js/modules/es.array.concat');

require('core-js/modules/es.array.filter');

require('core-js/modules/es.array.for-each');

require('core-js/modules/es.array.from');

require('core-js/modules/es.array.index-of');

require('core-js/modules/es.array.is-array');

require('core-js/modules/es.array.iterator');

require('core-js/modules/es.array.map');

require('core-js/modules/es.array.slice');

require('core-js/modules/es.array.splice');

require('core-js/modules/es.date.to-string');

require('core-js/modules/es.function.name');

require('core-js/modules/es.object.define-properties');

require('core-js/modules/es.object.define-property');

require('core-js/modules/es.object.freeze');

require('core-js/modules/es.object.get-own-property-descriptor');

require('core-js/modules/es.object.get-own-property-descriptors');

require('core-js/modules/es.object.keys');

require('core-js/modules/es.object.to-string');

require('core-js/modules/es.promise');

require('core-js/modules/es.reflect.define-property');

require('core-js/modules/es.regexp.to-string');

require('core-js/modules/es.string.iterator');

require('core-js/modules/es.weak-map');

require('core-js/modules/web.dom-collections.for-each');

require('core-js/modules/web.dom-collections.iterator');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.createRemoteRoot = createRemoteRoot;

var _types = require('./types');

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}

function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter))
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;
  if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {done: true};
          return {done: false, value: o[i++]};
        },
        e: function e(_e) {
          throw _e;
        },
        f: F,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it['return'] != null) it['return']();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function createRemoteRoot(channel, _options) {
  var parents = new WeakMap();
  var children = new WeakMap();
  var props = new WeakMap();
  var texts = new WeakMap();
  var tops = new WeakMap();
  var currentId = 0;
  var remoteRoot = {
    get children() {
      return children.get(remoteRoot);
    },

    createComponent: function createComponent(type) {
      for (
        var _len = arguments.length,
          propsPart = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        propsPart[_key - 1] = arguments[_key];
      }

      var initialProps = propsPart[0];

      if (initialProps) {
        // "children" as a prop can be extremely confusing with the "children" of
        // a component. In React, a "child" can be anything, but once it reaches
        // a host environment (like this remote `Root`), we want "children" to have
        // only one meaning: the actual, resolved children components and text.
        //
        // To enforce this, we delete any prop named "children". We don’t take a copy
        // of the props for performance, so a user calling this function must do so
        // with an object that can handle being mutated.
        //
        // I didn’t think checking that the prop exists before deleting it would matter,
        // but I ran a few benchmarks and it ran substantially faster this way /shrug
        if (initialProps.children) delete initialProps.children;
      } else {
        initialProps = {};
      }

      var id = ''.concat(currentId++);

      initialProps['data-remote-ui-id'] = id;

      var component = _objectSpread(
        {
          kind: _types.KIND_COMPONENT,

          get children() {
            return children.get(component);
          },

          get props() {
            return props.get(component);
          },

          updateProps: function updateProps(newProps) {
            return _updateProps(component, newProps);
          },
          appendChild: function appendChild(child) {
            return _appendChild(component, child);
          },
          removeChild: function removeChild(child) {
            return _removeChild(component, child);
          },
          insertChildBefore: function insertChildBefore(child, before) {
            return _insertChildBefore(component, child, before);
          },
        },
        {}
      );

      Reflect.defineProperty(component, 'type', {
        value: type,
        configurable: false,
        writable: false,
        enumerable: true,
      });
      makePartOfTree(component);
      makeRemote(component, id, remoteRoot);
      props.set(component, initialProps);
      children.set(component, []);
      return component;
    },
    createText: function createText() {
      var content =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var id = ''.concat(currentId++);

      var text = _objectSpread(
        {
          kind: _types.KIND_TEXT,

          get text() {
            return texts.get(text);
          },

          updateText: function updateText(newText) {
            return _updateText(text, newText);
          },
        },
        {}
      );

      makePartOfTree(text);
      makeRemote(text, id, remoteRoot);
      texts.set(text, content);
      return text;
    },
    appendChild: function appendChild(child) {
      return _appendChild(remoteRoot, child);
    },
    removeChild: function removeChild(child) {
      return _removeChild(remoteRoot, child);
    },
    insertChildBefore: function insertChildBefore(child, before) {
      return _insertChildBefore(remoteRoot, child, before);
    },
    mount: function mount() {
      return Promise.resolve(
        channel(_types.ACTION_MOUNT, children.get(remoteRoot).map(serialize))
      );
    },
  };
  children.set(remoteRoot, []);
  return remoteRoot;

  function connected(element) {
    return tops.get(element) === remoteRoot;
  }

  function allDescendants(element, withEach) {
    var recurse = function recurse(element) {
      if ('children' in element) {
        var _iterator = _createForOfIteratorHelper(element.children),
          _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var child = _step.value;
            withEach(child);
            recurse(child);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    };

    recurse(element);
  }

  function perform(element, _ref) {
    var remote = _ref.remote,
      local = _ref.local;

    if (element === remoteRoot || connected(element)) {
      // should only create context once async queue is cleared
      remote(channel); // technically, we should be waiting for the remote update to apply,
      // then apply it locally. The implementation below is too naive because
      // it allows local updates to get out of sync with remote ones.
      // if (remoteResult == null || !('then' in remoteResult)) {
      //   local();
      //   return;
      // } else {
      //   return remoteResult.then(() => {
      //     local();
      //   });
      // }
    }

    local();
  }

  function _updateText(text, newText) {
    return perform(text, {
      remote: function remote(channel) {
        return channel(_types.ACTION_UPDATE_TEXT, text.id, newText);
      },
      local: function local() {
        return texts.set(text, newText);
      },
    });
  }

  function _updateProps(component, newProps) {
    // See notes above for why we treat `children` as a reserved prop.
    if (newProps.children) delete newProps.children;
    return perform(component, {
      remote: function remote(channel) {
        return channel(_types.ACTION_UPDATE_PROPS, component.id, newProps);
      },
      local: function local() {
        props.set(
          component,
          Object.freeze(
            _objectSpread(_objectSpread({}, props.get(component)), newProps)
          )
        );
      },
    });
  }

  function _appendChild(container, child) {
    var normalizedChild =
      typeof child === 'string' ? remoteRoot.createText(child) : child;
    return perform(container, {
      remote: function remote(channel) {
        return channel(
          _types.ACTION_INSERT_CHILD,
          container.id,
          container.children.length,
          serialize(normalizedChild)
        );
      },
      local: function local() {
        var _children$get;

        var newTop =
          container === remoteRoot ? remoteRoot : tops.get(container);
        parents.set(normalizedChild, container);
        tops.set(normalizedChild, newTop);
        allDescendants(normalizedChild, function (descendant) {
          return tops.set(descendant, newTop);
        });
        children.set(
          container,
          Object.freeze(
            [].concat(
              _toConsumableArray(
                (_children$get = children.get(container)) !== null &&
                  _children$get !== void 0
                  ? _children$get
                  : []
              ),
              [normalizedChild]
            )
          )
        );
      },
    });
  } // there is a problem with this, because when multiple children
  // are removed, there is no guarantee the messages will arrive in the
  // order we need them to on the host side (it depends how React
  // calls our reconciler). If it calls with, for example, the removal of
  // the second last item, then the removal of the last item, it will fail
  // because the indexes moved around.
  //
  // Might need to send the removed child ID, or find out if we
  // can collect removals into a single update.

  function _removeChild(container, child) {
    return perform(container, {
      remote: function remote(channel) {
        return channel(
          _types.ACTION_REMOVE_CHILD,
          container.id,
          container.children.indexOf(child)
        );
      },
      local: function local() {
        var _children$get2;

        parents['delete'](child);
        allDescendants(child, function (descendant) {
          return tops.set(descendant, child);
        });

        var newChildren = _toConsumableArray(
          (_children$get2 = children.get(container)) !== null &&
            _children$get2 !== void 0
            ? _children$get2
            : []
        );

        newChildren.splice(newChildren.indexOf(child), 1);
        children.set(container, Object.freeze(newChildren));
      },
    });
  }

  function _insertChildBefore(container, child, before) {
    return perform(container, {
      remote: function remote(channel) {
        return channel(
          _types.ACTION_INSERT_CHILD,
          container.id,
          container.children.indexOf(before),
          serialize(child)
        );
      },
      local: function local() {
        var newTop =
          container === remoteRoot ? remoteRoot : tops.get(container);
        tops.set(child, newTop);
        parents.set(child, container);
        allDescendants(child, function (descendant) {
          return tops.set(descendant, newTop);
        });

        var newChildren = _toConsumableArray(children.get(container) || []);

        newChildren.splice(newChildren.indexOf(before), 0, child);
        children.set(container, Object.freeze(newChildren));
      },
    });
  }

  function makePartOfTree(value) {
    Reflect.defineProperty(value, 'parent', {
      get: function get() {
        return parents.get(value);
      },
      configurable: true,
      enumerable: true,
    });
    Reflect.defineProperty(value, 'top', {
      get: function get() {
        return tops.get(value);
      },
      configurable: true,
      enumerable: true,
    });
  }

  function serialize(value) {
    return 'text' in value
      ? {
          id: value.id,
          text: value.text,
        }
      : {
          id: value.id,
          type: value.type,
          props: value.props,
          children: value.children.map(function (child) {
            return serialize(child);
          }),
        };
  }
}

function makeRemote(value, id, root) {
  Reflect.defineProperty(value, 'id', {
    value: id,
    configurable: true,
    writable: false,
    enumerable: false,
  });
  Reflect.defineProperty(value, 'root', {
    value: root,
    configurable: true,
    writable: false,
    enumerable: false,
  });
}
