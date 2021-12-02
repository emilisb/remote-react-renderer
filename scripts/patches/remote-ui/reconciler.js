"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.date.now");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.reflect.has");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.timers");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactReconciler = _interopRequireDefault(require("react-reconciler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reconciler = (0, _reactReconciler["default"])(_objectSpread(_objectSpread({
  now: Date.now,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  noTimeout: false,
  isPrimaryRenderer: true,
  supportsMutation: true,
  supportsHydration: false,
  supportsPersistence: false,
  // Context
  getRootHostContext: function getRootHostContext() {
    return {};
  },
  getChildHostContext: function getChildHostContext(context) {
    return context;
  },
  // Instances
  createTextInstance: function createTextInstance(text, fragment) {
    return fragment.createText(text);
  },
  createInstance: function createInstance(type, allProps, fragment) {
    var _children = allProps.children,
        props = _objectWithoutProperties(allProps, ["children"]);

    return fragment.createComponent(type, props);
  },
  // Updates
  commitTextUpdate: function commitTextUpdate(text, _oldText, newText) {
    text.updateText(newText);
  },
  prepareUpdate: function prepareUpdate(_instance, _type, oldProps, newProps) {
    var updateProps = {};
    var needsUpdate = false;

    for (var key in oldProps) {
      if (!Reflect.has(oldProps, key) || key === 'children') {
        continue;
      }

      if (!(key in newProps)) {
        needsUpdate = true;
        updateProps[key] = undefined; // } else if (typeof oldProps[key] === 'function') {
        //   if (typeof newProps[key] === 'function') {
        //     fragment.controller.functions.exchange(
        //       oldProps[key] as Function,
        //       newProps[key] as Function,
        //     );
        //   } else {
        //     needsUpdate = true;
        //     fragment.controller.functions.revoke(oldProps[key] as Function);
        //     updateProps[key] = newProps[key];
        //   }
      } else if (oldProps[key] !== newProps[key]) {
        needsUpdate = true;
        updateProps[key] = newProps[key];
      }
    }

    for (var _key in newProps) {
      if (!Reflect.has(newProps, _key) || _key === 'children') {
        continue;
      }

      if (!(_key in oldProps)) {
        needsUpdate = true;
        updateProps[_key] = newProps[_key];
      }
    }

    return needsUpdate ? updateProps : null;
  },
  commitUpdate: function commitUpdate(instance, payload) {
    instance.updateProps(payload);
  },
  // Update root
  appendChildToContainer: function appendChildToContainer(remoteRoot, child) {
    remoteRoot.appendChild(child);
  },
  insertInContainerBefore: function insertInContainerBefore(remoteRoot, child, beforeChild) {
    remoteRoot.insertChildBefore(child, beforeChild);
  },
  removeChildFromContainer: function removeChildFromContainer(remoteRoot, child) {
    remoteRoot.removeChild(child);
  },
  // Update children
  appendInitialChild: function appendInitialChild(parent, child) {
    parent.appendChild(child);
  },
  appendChild: function appendChild(parent, child) {
    parent.appendChild(child);
  },
  insertBefore: function insertBefore(parent, newChild, beforeChild) {
    parent.insertChildBefore(newChild, beforeChild);
  },
  removeChild: function removeChild(parent, child) {
    parent.removeChild(child);
  },
  // Deferred callbacks
  scheduleDeferredCallback: function scheduleDeferredCallback() {},
  cancelDeferredCallback: function cancelDeferredCallback() {}
}, {
  schedulePassiveEffects: function schedulePassiveEffects(fn) {
    return setTimeout(fn);
  },
  cancelPassiveEffects: function cancelPassiveEffects(handle) {
    clearTimeout(handle);
  }
}), {}, {
  // Unknown
  finalizeInitialChildren: function finalizeInitialChildren() {
    return false;
  },
  shouldSetTextContent: function shouldSetTextContent() {
    return false;
  },
  getPublicInstance: function getPublicInstance(instance) {
    return document.querySelector(
      '[data-remote-ui-id="' + instance.id + '"]'
    );
  },
  shouldDeprioritizeSubtree: function shouldDeprioritizeSubtree() {
    return false;
  },
  prepareForCommit: function prepareForCommit() {},
  resetAfterCommit: function resetAfterCommit() {},
  commitMount: function commitMount() {}
}));
var _default = reconciler;
exports["default"] = _default;