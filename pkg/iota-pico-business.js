(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@iota-pico/core/dist/error/coreError"), require("@iota-pico/core/dist/helpers/arrayHelper"), require("@iota-pico/core/dist/helpers/numberHelper"), require("@iota-pico/core/dist/helpers/objectHelper"), require("@iota-pico/core/dist/loggers/nullLogger"), require("@iota-pico/core/dist/services/backgroundTaskService"), require("@iota-pico/core/dist/services/timeService"), require("@iota-pico/crypto/dist/error/cryptoError"), require("@iota-pico/crypto/dist/factories/spongeFactory"), require("@iota-pico/crypto/dist/hash/iss"), require("@iota-pico/crypto/dist/helpers/transactionHelper"), require("@iota-pico/data/dist/data/address"), require("@iota-pico/data/dist/data/addressSecurity"), require("@iota-pico/data/dist/data/bundle"), require("@iota-pico/data/dist/data/hash"), require("@iota-pico/data/dist/data/input"), require("@iota-pico/data/dist/data/signatureMessageFragment"), require("@iota-pico/data/dist/data/tag"), require("@iota-pico/data/dist/data/transaction"), require("@iota-pico/data/dist/data/transfer"), require("@iota-pico/data/dist/data/trits"), require("@iota-pico/data/dist/data/tryteNumber"), require("@iota-pico/data/dist/data/trytes"));
	else if(typeof define === 'function' && define.amd)
		define("@iota-pico/business", ["@iota-pico/core/dist/error/coreError", "@iota-pico/core/dist/helpers/arrayHelper", "@iota-pico/core/dist/helpers/numberHelper", "@iota-pico/core/dist/helpers/objectHelper", "@iota-pico/core/dist/loggers/nullLogger", "@iota-pico/core/dist/services/backgroundTaskService", "@iota-pico/core/dist/services/timeService", "@iota-pico/crypto/dist/error/cryptoError", "@iota-pico/crypto/dist/factories/spongeFactory", "@iota-pico/crypto/dist/hash/iss", "@iota-pico/crypto/dist/helpers/transactionHelper", "@iota-pico/data/dist/data/address", "@iota-pico/data/dist/data/addressSecurity", "@iota-pico/data/dist/data/bundle", "@iota-pico/data/dist/data/hash", "@iota-pico/data/dist/data/input", "@iota-pico/data/dist/data/signatureMessageFragment", "@iota-pico/data/dist/data/tag", "@iota-pico/data/dist/data/transaction", "@iota-pico/data/dist/data/transfer", "@iota-pico/data/dist/data/trits", "@iota-pico/data/dist/data/tryteNumber", "@iota-pico/data/dist/data/trytes"], factory);
	else if(typeof exports === 'object')
		exports["@iota-pico/business"] = factory(require("@iota-pico/core/dist/error/coreError"), require("@iota-pico/core/dist/helpers/arrayHelper"), require("@iota-pico/core/dist/helpers/numberHelper"), require("@iota-pico/core/dist/helpers/objectHelper"), require("@iota-pico/core/dist/loggers/nullLogger"), require("@iota-pico/core/dist/services/backgroundTaskService"), require("@iota-pico/core/dist/services/timeService"), require("@iota-pico/crypto/dist/error/cryptoError"), require("@iota-pico/crypto/dist/factories/spongeFactory"), require("@iota-pico/crypto/dist/hash/iss"), require("@iota-pico/crypto/dist/helpers/transactionHelper"), require("@iota-pico/data/dist/data/address"), require("@iota-pico/data/dist/data/addressSecurity"), require("@iota-pico/data/dist/data/bundle"), require("@iota-pico/data/dist/data/hash"), require("@iota-pico/data/dist/data/input"), require("@iota-pico/data/dist/data/signatureMessageFragment"), require("@iota-pico/data/dist/data/tag"), require("@iota-pico/data/dist/data/transaction"), require("@iota-pico/data/dist/data/transfer"), require("@iota-pico/data/dist/data/trits"), require("@iota-pico/data/dist/data/tryteNumber"), require("@iota-pico/data/dist/data/trytes"));
	else
		root["IotaPicoBusiness"] = factory(root["@iota-pico/core/dist/error/coreError"], root["@iota-pico/core/dist/helpers/arrayHelper"], root["@iota-pico/core/dist/helpers/numberHelper"], root["@iota-pico/core/dist/helpers/objectHelper"], root["@iota-pico/core/dist/loggers/nullLogger"], root["@iota-pico/core/dist/services/backgroundTaskService"], root["@iota-pico/core/dist/services/timeService"], root["@iota-pico/crypto/dist/error/cryptoError"], root["@iota-pico/crypto/dist/factories/spongeFactory"], root["@iota-pico/crypto/dist/hash/iss"], root["@iota-pico/crypto/dist/helpers/transactionHelper"], root["@iota-pico/data/dist/data/address"], root["@iota-pico/data/dist/data/addressSecurity"], root["@iota-pico/data/dist/data/bundle"], root["@iota-pico/data/dist/data/hash"], root["@iota-pico/data/dist/data/input"], root["@iota-pico/data/dist/data/signatureMessageFragment"], root["@iota-pico/data/dist/data/tag"], root["@iota-pico/data/dist/data/transaction"], root["@iota-pico/data/dist/data/transfer"], root["@iota-pico/data/dist/data/trits"], root["@iota-pico/data/dist/data/tryteNumber"], root["@iota-pico/data/dist/data/trytes"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_error_coreError__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_arrayHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_numberHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_objectHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_loggers_nullLogger__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_services_backgroundTaskService__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_services_timeService__, __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_error_cryptoError__, __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_factories_spongeFactory__, __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_hash_iss__, __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_helpers_transactionHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_address__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_addressSecurity__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_bundle__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_hash__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_input__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_signatureMessageFragment__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_tag__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_transaction__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_transfer__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_trits__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_tryteNumber__, __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_trytes__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/error/businessError.js":
/*!*************************************!*\
  !*** ./dist/error/businessError.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(/*! @iota-pico/core/dist/error/coreError */ "@iota-pico/core/dist/error/coreError");
/**
 * A business implementation of an error.
 */


var BusinessError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(BusinessError, _coreError_1$CoreErro);

  /**
   * Create an instance of BusinessError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function BusinessError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, BusinessError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BusinessError).call(this, message, additional, innerError));
    _this.domain = "Business";
    return _this;
  }

  return BusinessError;
}(coreError_1.CoreError);

exports.BusinessError = BusinessError;

/***/ }),

/***/ "./dist/helpers/addressHelper.js":
/*!***************************************!*\
  !*** ./dist/helpers/addressHelper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var spongeFactory_1 = __webpack_require__(/*! @iota-pico/crypto/dist/factories/spongeFactory */ "@iota-pico/crypto/dist/factories/spongeFactory");

var trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "@iota-pico/data/dist/data/trits");
/**
 * Helper class for address signing.
 * Original https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 * @internal
 */


var AddressHelper =
/*#__PURE__*/
function () {
  function AddressHelper() {
    _classCallCheck(this, AddressHelper);
  }

  _createClass(AddressHelper, null, [{
    key: "createChecksum",

    /**
     * Create a checksum for the trits.
     * @param trits The trits to create the checksum for.
     * @param checksumLength The length of the checksum.
     * @returns the checksum as trytes.
     */
    value: function createChecksum(trits, checksumLength) {
      var kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
      kerl.initialize();
      kerl.absorb(trits, 0, trits.length);
      var checksumTrits = new Int8Array(kerl.getConstant("HASH_LENGTH"));
      kerl.squeeze(checksumTrits, 0, checksumTrits.length);
      return trits_1.Trits.fromArray(checksumTrits).toTrytes().toString().substring(81 - checksumLength, 81);
    }
  }]);

  return AddressHelper;
}();

exports.AddressHelper = AddressHelper;

/***/ }),

/***/ "./dist/helpers/bundleHelper.js":
/*!**************************************!*\
  !*** ./dist/helpers/bundleHelper.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "@iota-pico/core/dist/helpers/arrayHelper");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");

var spongeFactory_1 = __webpack_require__(/*! @iota-pico/crypto/dist/factories/spongeFactory */ "@iota-pico/crypto/dist/factories/spongeFactory");

var iss_1 = __webpack_require__(/*! @iota-pico/crypto/dist/hash/iss */ "@iota-pico/crypto/dist/hash/iss");

var address_1 = __webpack_require__(/*! @iota-pico/data/dist/data/address */ "@iota-pico/data/dist/data/address");

var bundle_1 = __webpack_require__(/*! @iota-pico/data/dist/data/bundle */ "@iota-pico/data/dist/data/bundle");

var hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "@iota-pico/data/dist/data/hash");

var signatureMessageFragment_1 = __webpack_require__(/*! @iota-pico/data/dist/data/signatureMessageFragment */ "@iota-pico/data/dist/data/signatureMessageFragment");

var tag_1 = __webpack_require__(/*! @iota-pico/data/dist/data/tag */ "@iota-pico/data/dist/data/tag");

var transaction_1 = __webpack_require__(/*! @iota-pico/data/dist/data/transaction */ "@iota-pico/data/dist/data/transaction");

var trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "@iota-pico/data/dist/data/trits");

var tryteNumber_1 = __webpack_require__(/*! @iota-pico/data/dist/data/tryteNumber */ "@iota-pico/data/dist/data/tryteNumber");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "@iota-pico/data/dist/data/trytes");

var hmacCurl_1 = __webpack_require__(/*! ../sign/hmacCurl */ "./dist/sign/hmacCurl.js");
/**
 * Helper class for signing bundles.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */


var BundleHelper =
/*#__PURE__*/
function () {
  function BundleHelper() {
    _classCallCheck(this, BundleHelper);
  }

  _createClass(BundleHelper, null, [{
    key: "isValid",

    /**
     * Is the bundle valid.
     * @param bundle The bundle to check for validity.
     * @returns True if the bundle is valid.
     */
    value: function isValid(bundle) {
      var isValid = false;

      if (objectHelper_1.ObjectHelper.isType(bundle, bundle_1.Bundle) && arrayHelper_1.ArrayHelper.isTyped(bundle.transactions, transaction_1.Transaction)) {
        var totalSum = 0;
        var kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
        kerl.initialize(); // Prepare for signature validation

        var signaturesToValidate = [];
        isValid = true;

        for (var t = 0; t < bundle.transactions.length && isValid; t++) {
          var bundleTx = bundle.transactions[t];
          totalSum += bundleTx.value.toNumber(); // currentIndex has to be equal to the index in the array

          if (bundleTx.currentIndex.toNumber() !== t) {
            isValid = false;
          } else {
            // Get the transaction trytes
            var thisTxTrytes = bundleTx.toTrytes(); // Absorb bundle hash + value + timestamp + lastIndex + currentIndex trytes.

            var thisTxTrits = trits_1.Trits.fromTrytes(thisTxTrytes.sub(signatureMessageFragment_1.SignatureMessageFragment.LENGTH, 162)).toArray();
            kerl.absorb(thisTxTrits, 0, thisTxTrits.length); // Check if input transaction

            if (bundleTx.value.toNumber() < 0) {
              var newSignatureToValidate = {
                address: bundleTx.address,
                signatureMessageFragments: [bundleTx.signatureMessageFragment]
              }; // Find the subsequent txs with the remaining signature fragment

              for (var i = t; i < bundle.transactions.length - 1; i++) {
                var newBundleTx = bundle.transactions[i + 1]; // Check if new tx is part of the signature fragment

                if (newBundleTx.address.toTrytes().toString() === bundleTx.address.toTrytes().toString() && newBundleTx.value.toNumber() === 0) {
                  newSignatureToValidate.signatureMessageFragments.push(newBundleTx.signatureMessageFragment);
                }
              }

              signaturesToValidate.push(newSignatureToValidate);
            }
          }
        } // Check for total sum, if not equal 0 return error


        if (totalSum !== 0) {
          isValid = false;
        } else {
          // get the bundle hash from the bundle transactions
          var bundleFromTxs = new Int8Array(kerl.getConstant("HASH_LENGTH"));
          kerl.squeeze(bundleFromTxs, 0, bundleFromTxs.length);
          var bundleFromTxsTrytes = trits_1.Trits.fromArray(bundleFromTxs).toTrytes().toString(); // Check if bundle hash is the same as returned by tx object

          var bundleHash = bundle.transactions[0].bundle;

          if (bundleFromTxsTrytes !== bundleHash.toTrytes().toString()) {
            isValid = false;
          } else {
            // Last tx in the bundle should have currentIndex === lastIndex
            if (bundle.transactions[bundle.transactions.length - 1].currentIndex.toNumber() !== bundle.transactions[bundle.transactions.length - 1].lastIndex.toNumber()) {
              isValid = false;
            } else {
              // Validate the signatures
              for (var _i = 0; _i < signaturesToValidate.length && isValid; _i++) {
                var isValidSignature = iss_1.ISS.validateSignatures(signaturesToValidate[_i].address, signaturesToValidate[_i].signatureMessageFragments, bundleHash);

                if (!isValidSignature) {
                  isValid = false;
                }
              }
            }
          }
        }
      }

      return isValid;
    }
    /**
     * Validate signatures for each of the co-signers in the multi-signature to independently verify that a generated
     * transaction with the corresponding signatures of the co-signers is valid.
     * @param signedBundle The signed bundle to check the signatures.
     * @param inputAddress The address used to initiate the transfer.
     * @returns True is the signatures are valid.
     */

  }, {
    key: "validateSignatures",
    value: function validateSignatures(signedBundle, inputAddress) {
      var isValid = false;

      if (objectHelper_1.ObjectHelper.isType(signedBundle, bundle_1.Bundle) && arrayHelper_1.ArrayHelper.isTyped(signedBundle.transactions, transaction_1.Transaction) && objectHelper_1.ObjectHelper.isType(inputAddress, address_1.Address)) {
        var bundleHash;
        var signatureFragments = [];
        var inputAddressTrytes = inputAddress.toTrytes().toString();

        for (var i = 0; i < signedBundle.transactions.length; i++) {
          if (signedBundle.transactions[i].address.toTrytes().toString() === inputAddressTrytes) {
            bundleHash = signedBundle.transactions[i].bundle; // if we reached remainder bundle

            if (signedBundle.transactions[i].signatureMessageFragment.toTrytes().toString() === signatureMessageFragment_1.SignatureMessageFragment.EMPTY.toTrytes().toString()) {
              break;
            }

            signatureFragments.push(signedBundle.transactions[i].signatureMessageFragment);
          }
        }

        if (bundleHash) {
          isValid = iss_1.ISS.validateSignatures(inputAddress, signatureFragments, bundleHash);
        }
      }

      return isValid;
    }
    /**
     * Prepare a bundle.
     * @param timeService To use for stamping the transactions.
     * @param transfers The transfers to add to the bundle.
     * @returns Bundle information.
     */

  }, {
    key: "prepareBundle",
    value: function prepareBundle(timeService, transfers) {
      var bundle = new bundle_1.Bundle();
      var lastTag;
      var totalValue = 0;
      var signatureMessageFragments = []; //  Iterate over all transfers, get totalValue
      //  and prepare the Messages, message and tag

      for (var i = 0; i < transfers.length; i++) {
        var signatureMessageLength = 1; // If message longer than 2187 trytes, increase signatureMessageLength (add 2nd transaction)

        var messageString = transfers[i].message.toString();

        if (messageString.length > signatureMessageFragment_1.SignatureMessageFragment.LENGTH) {
          // Get total length, message / maxLength (2187 trytes)
          signatureMessageLength += Math.floor(messageString.length / signatureMessageFragment_1.SignatureMessageFragment.LENGTH);
          var msgCopy = messageString; // While there is still a message, copy it

          while (msgCopy) {
            var fragment = msgCopy.slice(0, signatureMessageFragment_1.SignatureMessageFragment.LENGTH);
            msgCopy = msgCopy.slice(signatureMessageFragment_1.SignatureMessageFragment.LENGTH, msgCopy.length); // Pad remainder of fragment

            for (var j = 0; fragment.length < signatureMessageFragment_1.SignatureMessageFragment.LENGTH; j++) {
              fragment += "9";
            }

            signatureMessageFragments.push(signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString(fragment)));
          }
        } else {
          // Else, get single fragment with 2187 of 9's trytes
          var _fragment = "";

          if (messageString) {
            _fragment = messageString.slice(0, signatureMessageFragment_1.SignatureMessageFragment.LENGTH);
          }

          for (var _j = 0; _fragment.length < signatureMessageFragment_1.SignatureMessageFragment.LENGTH; _j++) {
            _fragment += "9";
          }

          signatureMessageFragments.push(signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString(_fragment)));
        } // get current timestamp in seconds


        var timestamp = Math.floor(timeService.msSinceEpoch() / 1000);
        lastTag = transfers[i].tag; // Add first entries to the bundle

        bundle.addTransactions(signatureMessageLength, transfers[i].address, transfers[i].value, transfers[i].tag, timestamp); // Sum up total value

        totalValue += transfers[i].value;
      }

      return {
        bundle: bundle,
        totalValue: totalValue,
        lastTag: lastTag,
        signatureMessageFragments: signatureMessageFragments
      };
    }
    /**
     * Sign the input of the bundle.
     * @param seed The seed to use for signing.
     * @param bundle The bundle to sign.
     * @param transferOptions Additional transfer options.
     * @param signatureMessageFragments The signature message fragemtns.
     * @param inputs The input for use.
     * @param addedHMAC Has an HMAC been added.
     */

  }, {
    key: "signInputs",
    value: function signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, addedHMAC) {
      BundleHelper.finalizeBundle(bundle);
      bundle.addSignatureMessageFragments(signatureMessageFragments); //  Here we do the actual signing of the inputs
      //  Iterate over all bundle transactions, find the inputs
      //  Get the corresponding private key and calculate the signatureMessageFragment

      for (var i = 0; i < bundle.transactions.length; i++) {
        if (bundle.transactions[i].value.toNumber() < 0) {
          var addressTrytes = bundle.transactions[i].address.toTrytes().toString(); // Get the corresponding keyIndex and security of the address

          var keyIndex = void 0;
          var keySecurity = void 0;

          for (var k = 0; k < inputs.length; k++) {
            if (inputs[k].address.toTrytes().toString() === addressTrytes) {
              keyIndex = inputs[k].keyIndex;
              keySecurity = inputs[k].security ? inputs[k].security : transferOptions.security;
              break;
            }
          } // Get corresponding private key of address


          var key = iss_1.ISS.key(seed, keyIndex, keySecurity);
          BundleHelper.signTransactions(bundle, i, 0, key, addressTrytes, keySecurity);
        }
      }

      if (addedHMAC) {
        var hmac = new hmacCurl_1.HmacCurl(transferOptions.hmacKey);
        hmac.addHMAC(bundle);
      }
    }
    /**
     * Sign the trsnactions
     * @param bundle The bundle of transactions to sign.
     * @param index The index to start.
     * @param firstUnsignedIndex The first unsigned index.
     * @param keyTrits The key trits.
     * @param addressTrytes The address trytes.
     * @param security The security level.
     */

  }, {
    key: "signTransactions",
    value: function signTransactions(bundle, index, firstUnsignedIndex, keyTrits, addressTrytes, security) {
      var bundleHash = bundle.transactions[index].bundle; //  Get the normalized bundle hash

      var normalizedBundleHash = iss_1.ISS.normalizedBundle(bundleHash);
      var normalizedBundleFragments = []; // Split hash into 3 fragments

      for (var l = 0; l < 3; l++) {
        normalizedBundleFragments[l] = normalizedBundleHash.slice(l * 27, (l + 1) * 27);
      } //  First 6561 trits for the firstFragment


      var firstFragment = keyTrits.slice(0, 6561); //  First bundle fragment uses the first 27 trytes

      var firstBundleFragment = normalizedBundleFragments[firstUnsignedIndex]; //  Calculate the new signatureMessageFragment with the first bundle fragment

      var firstSignedFragment = iss_1.ISS.signatureMessageFragment(firstBundleFragment, firstFragment); //  Convert signature to trytes and assign the new signatureMessageFragment

      bundle.transactions[index].signatureMessageFragment = signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trits_1.Trits.fromArray(firstSignedFragment).toTrytes()); // if user chooses higher than 27-tryte security
      // for each security level, add an additional signature

      for (var j = 1; j < security; j++) {
        //  Because the signature is > 2187 trytes, we need to
        //  find the subsequent transaction to add the remainder of the signature
        //  Same address as well as value = 0 (as we already spent the input)
        if (bundle.transactions[index + j].address.toTrytes().toString() === addressTrytes && bundle.transactions[index + j].value.toNumber() === 0) {
          // Use the next 6561 trits
          var nextFragment = keyTrits.slice(6561 * j, (j + 1) * 6561);
          var nextBundleFragment = normalizedBundleFragments[j]; //  Calculate the new signature

          var nextSignedFragment = iss_1.ISS.signatureMessageFragment(nextBundleFragment, nextFragment); //  Convert signature to trytes and assign it again to this bundle entry

          bundle.transactions[index + j].signatureMessageFragment = signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trits_1.Trits.fromArray(nextSignedFragment).toTrytes());
        }
      }
    }
    /**
     * Finalize a bundle.
     * @param bundle The bundle to finalize.
     */

  }, {
    key: "finalizeBundle",
    value: function finalizeBundle(bundle) {
      if (bundle.transactions.length > 0) {
        var validBundle = false;

        while (!validBundle) {
          var kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
          kerl.initialize();

          for (var i = 0; i < bundle.transactions.length; i++) {
            bundle.transactions[i].currentIndex = tryteNumber_1.TryteNumber.fromNumber(i);
            bundle.transactions[i].lastIndex = tryteNumber_1.TryteNumber.fromNumber(bundle.transactions.length - 1); // tslint:disable:restrict-plus-operands false positive

            var bundleEssence = trits_1.Trits.fromTrytes(trytes_1.Trytes.fromString(bundle.transactions[i].address.toTrytes().toString() + bundle.transactions[i].value.toTrytes().toString() + transaction_1.Transaction.CHECK_VALUE + bundle.transactions[i].obsoleteTag.toTrytes().toString() + bundle.transactions[i].timestamp.toTrytes().toString() + bundle.transactions[i].currentIndex.toTrytes().toString() + bundle.transactions[i].lastIndex.toTrytes().toString())).toArray();
            kerl.absorb(bundleEssence, 0, bundleEssence.length);
          }

          var hashTrits = new Int8Array(kerl.getConstant("HASH_LENGTH"));
          kerl.squeeze(hashTrits, 0, hashTrits.length);
          var hash = hash_1.Hash.fromTrytes(trits_1.Trits.fromArray(hashTrits).toTrytes());

          for (var _i2 = 0; _i2 < bundle.transactions.length; _i2++) {
            bundle.transactions[_i2].bundle = hash;
          }

          var normalizedHash = iss_1.ISS.normalizedBundle(hash);

          if (normalizedHash.indexOf(13
          /* = M */
          ) !== -1) {
            // Insecure bundle. Increment Tag and recompute bundle hash.
            var increasedTag = trits_1.Trits.add(trits_1.Trits.fromTrytes(bundle.transactions[0].obsoleteTag.toTrytes()), trits_1.Trits.fromNumberArray([1]));
            bundle.transactions[0].obsoleteTag = tag_1.Tag.fromTrytes(increasedTag.toTrytes());
          } else {
            validBundle = true;
          }
        }
      }
    }
  }]);

  return BundleHelper;
}();

BundleHelper.NUMBER_OF_FRAGMENT_CHUNKS = 27;
exports.BundleHelper = BundleHelper;

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(/*! ./error/businessError */ "./dist/error/businessError.js"));

__export(__webpack_require__(/*! ./helpers/addressHelper */ "./dist/helpers/addressHelper.js"));

__export(__webpack_require__(/*! ./helpers/bundleHelper */ "./dist/helpers/bundleHelper.js"));

__export(__webpack_require__(/*! ./multiSig/multiSigAddress */ "./dist/multiSig/multiSigAddress.js"));

__export(__webpack_require__(/*! ./multiSig/multiSigClient */ "./dist/multiSig/multiSigClient.js"));

__export(__webpack_require__(/*! ./sign/hmacCurl */ "./dist/sign/hmacCurl.js"));

__export(__webpack_require__(/*! ./transactions/transactionClient */ "./dist/transactions/transactionClient.js"));

/***/ }),

/***/ "./dist/multiSig/multiSigAddress.js":
/*!******************************************!*\
  !*** ./dist/multiSig/multiSigAddress.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "@iota-pico/core/dist/helpers/arrayHelper");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");

var spongeFactory_1 = __webpack_require__(/*! @iota-pico/crypto/dist/factories/spongeFactory */ "@iota-pico/crypto/dist/factories/spongeFactory");

var address_1 = __webpack_require__(/*! @iota-pico/data/dist/data/address */ "@iota-pico/data/dist/data/address");

var trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "@iota-pico/data/dist/data/trits");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "@iota-pico/data/dist/data/trytes");

var businessError_1 = __webpack_require__(/*! ../error/businessError */ "./dist/error/businessError.js");
/**
 * Address using multiple signatures.
 */


var MultiSigAddress =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of the MultiSigAddress.
   */
  function MultiSigAddress() {
    _classCallCheck(this, MultiSigAddress);

    this._kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
    this._hashLength = this._kerl.getConstant("HASH_LENGTH");

    this._kerl.initialize();
  }
  /**
   * Absorb key digests.
   * @param digests The digests hashes to absorb.
   */


  _createClass(MultiSigAddress, [{
    key: "absorb",
    value: function absorb(digests) {
      if (!arrayHelper_1.ArrayHelper.isTyped(digests, trytes_1.Trytes)) {
        throw new businessError_1.BusinessError("The digests should be an array of type Trytes");
      }

      for (var i = 0; i < digests.length; i++) {
        var digestTrits = trits_1.Trits.fromTrytes(digests[i]).toArray();

        this._kerl.absorb(digestTrits, 0, digestTrits.length);
      }
    }
    /**
     * Finalizes and returns the multisig address in trytes.
     * @param digests The final digests hashes to absorb.
     * @returns The multi signature address.
     */

  }, {
    key: "finalize",
    value: function finalize(digests) {
      if (!objectHelper_1.ObjectHelper.isEmpty(digests)) {
        this.absorb(digests);
      }

      var addressTrits = new Int8Array(this._hashLength);

      this._kerl.squeeze(addressTrits, 0, addressTrits.length);

      return address_1.Address.fromTrytes(trits_1.Trits.fromArray(addressTrits).toTrytes());
    }
  }]);

  return MultiSigAddress;
}();

exports.MultiSigAddress = MultiSigAddress;

/***/ }),

/***/ "./dist/multiSig/multiSigClient.js":
/*!*****************************************!*\
  !*** ./dist/multiSig/multiSigClient.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "@iota-pico/core/dist/helpers/arrayHelper");

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "@iota-pico/core/dist/helpers/numberHelper");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");

var timeService_1 = __webpack_require__(/*! @iota-pico/core/dist/services/timeService */ "@iota-pico/core/dist/services/timeService");

var iss_1 = __webpack_require__(/*! @iota-pico/crypto/dist/hash/iss */ "@iota-pico/crypto/dist/hash/iss");

var address_1 = __webpack_require__(/*! @iota-pico/data/dist/data/address */ "@iota-pico/data/dist/data/address");

var bundle_1 = __webpack_require__(/*! @iota-pico/data/dist/data/bundle */ "@iota-pico/data/dist/data/bundle");

var hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "@iota-pico/data/dist/data/hash");

var signatureMessageFragment_1 = __webpack_require__(/*! @iota-pico/data/dist/data/signatureMessageFragment */ "@iota-pico/data/dist/data/signatureMessageFragment");

var tag_1 = __webpack_require__(/*! @iota-pico/data/dist/data/tag */ "@iota-pico/data/dist/data/tag");

var transaction_1 = __webpack_require__(/*! @iota-pico/data/dist/data/transaction */ "@iota-pico/data/dist/data/transaction");

var transfer_1 = __webpack_require__(/*! @iota-pico/data/dist/data/transfer */ "@iota-pico/data/dist/data/transfer");

var trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "@iota-pico/data/dist/data/trits");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "@iota-pico/data/dist/data/trytes");

var businessError_1 = __webpack_require__(/*! ../error/businessError */ "./dist/error/businessError.js");

var bundleHelper_1 = __webpack_require__(/*! ../helpers/bundleHelper */ "./dist/helpers/bundleHelper.js");

var multiSigAddress_1 = __webpack_require__(/*! ./multiSigAddress */ "./dist/multiSig/multiSigAddress.js");
/**
 * Multiple signatures.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/multisig/multisig.js
 */


var MultiSigClient =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of the MultiSigClient.
   * @param apiClient An API Client to communicate through.
   * @param timeService A class which can provide the time.
   */
  function MultiSigClient(apiClient) {
    var timeService = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new timeService_1.TimeService();

    _classCallCheck(this, MultiSigClient);

    this._apiClient = apiClient;
    this._timeService = timeService;
  }
  /**
   * Get the key value of a seed.
   * @param seed The seed to get the key for.
   * @param index The address index to use.
   * @param security The security level to use.
   * @returns The trytes for the key.
   */


  _createClass(MultiSigClient, [{
    key: "prepareTransfer",

    /**
     * Initiates the creation of a new transfer by generating an empty bundle with the correct number
     * of bundle entries to be later used for the signing process.
     * @param address Address which has sufficient balance and is controlled by the co-signers.
     * @param securitySum the sum of the security levels from all cosigners chosen during the private key generation (getKey / getDigest)
     * @param balance The balance available for the transfer, if 0 will call getBalances to lookup available.
     * @param transfers The transfers to perform.
     * @param remainderAddress If there is a remainder after the transfer then send the amount to this address.
     * @returns Bundle of the prepared transfer.
     */
    value: function () {
      var _prepareTransfer = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(address, securitySum, balance, transfers, remainderAddress) {
        var emptyTrytes, prepared, totalBalance, request, response, timestamp;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (objectHelper_1.ObjectHelper.isType(address, address_1.Address)) {
                  _context.next = 2;
                  break;
                }

                throw new businessError_1.BusinessError("The address should be an object of type Address");

              case 2:
                if (!(!numberHelper_1.NumberHelper.isInteger(securitySum) || securitySum < 0)) {
                  _context.next = 4;
                  break;
                }

                throw new businessError_1.BusinessError("The securitySum should be a number >= 0");

              case 4:
                if (!(!numberHelper_1.NumberHelper.isInteger(balance) || balance < 0)) {
                  _context.next = 6;
                  break;
                }

                throw new businessError_1.BusinessError("The balance should be a number >= 0");

              case 6:
                if (arrayHelper_1.ArrayHelper.isTyped(transfers, transfer_1.Transfer)) {
                  _context.next = 8;
                  break;
                }

                throw new businessError_1.BusinessError("The transfers should be an array of type Transfer");

              case 8:
                if (!(!objectHelper_1.ObjectHelper.isEmpty(remainderAddress) && !objectHelper_1.ObjectHelper.isType(remainderAddress, address_1.Address))) {
                  _context.next = 10;
                  break;
                }

                throw new businessError_1.BusinessError("The remainderAddress should be an object of type Address");

              case 10:
                emptyTrytes = trytes_1.Trytes.fromString(""); // If message or tag is not supplied, provide it

                transfers.forEach(function (transfer) {
                  transfer.message = transfer.message ? transfer.message : emptyTrytes;
                  transfer.tag = transfer.tag || tag_1.Tag.EMPTY;
                });
                prepared = bundleHelper_1.BundleHelper.prepareBundle(this._timeService, transfers);

                if (!(prepared.totalValue === 0)) {
                  _context.next = 17;
                  break;
                }

                throw new businessError_1.BusinessError("The total transfer value is 0, the transfer does not require a signature");

              case 17:
                totalBalance = balance;

                if (!(totalBalance === 0)) {
                  _context.next = 24;
                  break;
                }

                request = {
                  addresses: [address.toTrytes().toString()],
                  threshold: 100
                };
                _context.next = 22;
                return this._apiClient.getBalances(request);

              case 22:
                response = _context.sent;
                totalBalance = parseInt(response.balances[0], 10);

              case 24:
                if (!(prepared.totalValue > totalBalance)) {
                  _context.next = 26;
                  break;
                }

                throw new businessError_1.BusinessError("Not enough balance to satisfy the value", {
                  totalValue: prepared.totalValue,
                  totalBalance: totalBalance
                });

              case 26:
                timestamp = Math.floor(this._timeService.msSinceEpoch() / 1000); // Add input as bundle entry
                // Only a single entry, signatures will be added later

                prepared.bundle.addTransactions(securitySum, address, -totalBalance, prepared.lastTag, timestamp); // If there is a remainder value
                // Add extra output to send remaining funds to

                if (!(totalBalance > prepared.totalValue)) {
                  _context.next = 32;
                  break;
                }

                if (!objectHelper_1.ObjectHelper.isEmpty(remainderAddress)) {
                  _context.next = 31;
                  break;
                }

                throw new businessError_1.BusinessError("Transfer has remainder but no remainder address was provided");

              case 31:
                prepared.bundle.addTransactions(1, remainderAddress, totalBalance - prepared.totalValue, prepared.lastTag, timestamp);

              case 32:
                bundleHelper_1.BundleHelper.finalizeBundle(prepared.bundle);
                prepared.bundle.addSignatureMessageFragments(prepared.signatureMessageFragments);

              case 34:
                return _context.abrupt("return", prepared.bundle);

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function prepareTransfer(_x, _x2, _x3, _x4, _x5) {
        return _prepareTransfer.apply(this, arguments);
      };
    }()
  }], [{
    key: "getKey",
    value: function getKey(seed, index, security) {
      if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
        throw new businessError_1.BusinessError("The seed should be an object of type Hash");
      }

      if (!numberHelper_1.NumberHelper.isInteger(index) || index < 0) {
        throw new businessError_1.BusinessError("The index should be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3) {
        throw new businessError_1.BusinessError("The security must be between 1 and 3", {
          security: security
        });
      }

      return trits_1.Trits.fromArray(iss_1.ISS.key(seed, index, security)).toTrytes();
    }
    /**
     * Get the digest value of a seed.
     * @param seed The seed to get the digest for.
     * @param index The address index to use.
     * @param security The security level to use.
     * @returns The trytes for the digest.
     */

  }, {
    key: "getDigest",
    value: function getDigest(seed, index, security) {
      if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
        throw new businessError_1.BusinessError("The seed should be an object of type Hash");
      }

      if (!numberHelper_1.NumberHelper.isInteger(index) || index < 0) {
        throw new businessError_1.BusinessError("The index should be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3) {
        throw new businessError_1.BusinessError("The security must be between 1 and 3", {
          security: security
        });
      }

      var key = iss_1.ISS.key(seed, index, security);
      return trits_1.Trits.fromArray(iss_1.ISS.digests(key)).toTrytes();
    }
    /**
     * Validate address.
     * @param address The address to validate against the digests.
     * @param digests The digests to use to validate the address.
     * @returns True if the address matches the digests.
     */

  }, {
    key: "validateAddress",
    value: function validateAddress(address, digests) {
      if (!objectHelper_1.ObjectHelper.isType(address, address_1.Address)) {
        throw new businessError_1.BusinessError("The address should be an object of type Address");
      }

      if (!arrayHelper_1.ArrayHelper.isTyped(digests, trytes_1.Trytes)) {
        throw new businessError_1.BusinessError("The digests should be an array of type Trytes");
      }

      return address.toTrytes().toString() === new multiSigAddress_1.MultiSigAddress().finalize(digests).toTrytes().toString();
    }
    /**
     * Adds the cosigner signatures to the corresponding bundle transactions.
     * @param bundle The bundle to sign.
     * @param address The address to match the transactions.
     * @param key The key to sign the transactions with.
     */

  }, {
    key: "addSignature",
    value: function addSignature(bundle, address, key) {
      if (!objectHelper_1.ObjectHelper.isType(bundle, bundle_1.Bundle)) {
        throw new businessError_1.BusinessError("The bundle should be an object of type Bundle");
      }

      if (!arrayHelper_1.ArrayHelper.isTyped(bundle.transactions, transaction_1.Transaction)) {
        throw new businessError_1.BusinessError("The bundle.transactions should be an array of type Transaction");
      }

      if (!objectHelper_1.ObjectHelper.isType(address, address_1.Address)) {
        throw new businessError_1.BusinessError("The address should be an object of type Address");
      }

      if (!objectHelper_1.ObjectHelper.isType(key, trytes_1.Trytes)) {
        throw new businessError_1.BusinessError("The key should be an object of type Trytes");
      }

      var keyTrits = trits_1.Trits.fromTrytes(key).toArray(); // Get the security used for the private key
      // 1 security level = 2187 trytes

      var security = keyTrits.length / 3 / 2187; // First get the total number of already signed transactions
      // use that for the bundle hash calculation as well as knowing
      // where to add the signature

      var numSignedTxs = 0;
      var addressTrytes = address.toTrytes().toString();

      for (var i = 0; i < bundle.transactions.length; i++) {
        if (bundle.transactions[i].address.toTrytes().toString() === addressTrytes) {
          if (bundle.transactions[i].signatureMessageFragment.toTrytes().toString() !== signatureMessageFragment_1.SignatureMessageFragment.EMPTY.toTrytes().toString()) {
            // If transaction is already signed, increase counter
            numSignedTxs++;
          } else {
            bundleHelper_1.BundleHelper.signTransactions(bundle, i, numSignedTxs % 3, keyTrits, addressTrytes, security);
            break;
          }
        }
      }
    }
  }]);

  return MultiSigClient;
}();

exports.MultiSigClient = MultiSigClient;

/***/ }),

/***/ "./dist/sign/hmacCurl.js":
/*!*******************************!*\
  !*** ./dist/sign/hmacCurl.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var spongeFactory_1 = __webpack_require__(/*! @iota-pico/crypto/dist/factories/spongeFactory */ "@iota-pico/crypto/dist/factories/spongeFactory");

var signatureMessageFragment_1 = __webpack_require__(/*! @iota-pico/data/dist/data/signatureMessageFragment */ "@iota-pico/data/dist/data/signatureMessageFragment");

var trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "@iota-pico/data/dist/data/trits");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "@iota-pico/data/dist/data/trytes");
/**
 * Hashed Message Authentication Code using Curl.
 */


var HmacCurl =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of the HmacCurl.
   * @param key The key to seed with.
   */
  function HmacCurl(key) {
    _classCallCheck(this, HmacCurl);

    this._keyTrits = trits_1.Trits.fromTrytes(key).toArray();
  }
  /**
   * Add bundle to the HMAC.
   * @param bundle The bundle to add the HMAC to.
   */


  _createClass(HmacCurl, [{
    key: "addHMAC",
    value: function addHMAC(bundle) {
      var curl = spongeFactory_1.SpongeFactory.instance().create("curl", HmacCurl.HMAC_ROUNDS);
      var hashLength = curl.getConstant("HASH_LENGTH");
      var key = this._keyTrits;

      for (var i = 0; i < bundle.transactions.length; i++) {
        if (bundle.transactions[i].value.toNumber() > 0) {
          var bundleHashTrits = trits_1.Trits.fromTrytes(bundle.transactions[i].bundle.toTrytes()).toArray();
          var hmac = new Int8Array(hashLength);
          curl.initialize();
          curl.absorb(key, 0, key.length);
          curl.absorb(bundleHashTrits, 0, bundleHashTrits.length);
          curl.squeeze(hmac, 0, hmac.length);
          var hmacTrytes = trits_1.Trits.fromArray(hmac).toTrytes().toString();
          var rest = bundle.transactions[i].signatureMessageFragment.toTrytes().toString().substring(81, signatureMessageFragment_1.SignatureMessageFragment.LENGTH); // tslint:disable:restrict-plus-operands false positive

          bundle.transactions[i].signatureMessageFragment = signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString(hmacTrytes + rest));
        }
      }
    }
  }]);

  return HmacCurl;
}();
/* @internal */


HmacCurl.HMAC_ROUNDS = 27;
exports.HmacCurl = HmacCurl;

/***/ }),

/***/ "./dist/transactions/proofOfWorkApi.js":
/*!*********************************************!*\
  !*** ./dist/transactions/proofOfWorkApi.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "@iota-pico/core/dist/helpers/arrayHelper");

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "@iota-pico/core/dist/helpers/numberHelper");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");

var cryptoError_1 = __webpack_require__(/*! @iota-pico/crypto/dist/error/cryptoError */ "@iota-pico/crypto/dist/error/cryptoError");

var hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "@iota-pico/data/dist/data/hash");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "@iota-pico/data/dist/data/trytes");

var businessError_1 = __webpack_require__(/*! ../error/businessError */ "./dist/error/businessError.js");
/**
 * ProofOfWork implementation using API.
 */


var ProofOfWorkApi =
/*#__PURE__*/
function () {
  /**
   * Create an instance of ProofOfWork.
   * @param apiClient The API client to send the request through.
   */
  function ProofOfWorkApi(apiClient) {
    _classCallCheck(this, ProofOfWorkApi);

    if (objectHelper_1.ObjectHelper.isEmpty(apiClient)) {
      throw new businessError_1.BusinessError("The apiClient must not be empty");
    }

    this._apiClient = apiClient;
  }
  /**
   * Allow the proof of work to perform any initialization.
   * Will throw an exception if the implementation is not supported.
   * @returns Promise.
   */


  _createClass(ProofOfWorkApi, [{
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Promise.resolve());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function initialize() {
        return _initialize.apply(this, arguments);
      };
    }()
    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */

  }, {
    key: "pow",
    value: function () {
      var _pow = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(trunkTransaction, branchTransaction, trytes, minWeightMagnitude) {
        var attachToTangleRequest, attachToTangleResponse;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (objectHelper_1.ObjectHelper.isType(trunkTransaction, hash_1.Hash)) {
                  _context2.next = 2;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trunkTransaction must be an object of type Hash");

              case 2:
                if (objectHelper_1.ObjectHelper.isType(branchTransaction, hash_1.Hash)) {
                  _context2.next = 4;
                  break;
                }

                throw new cryptoError_1.CryptoError("The branchTransaction must be an object of type Hash");

              case 4:
                if (arrayHelper_1.ArrayHelper.isTyped(trytes, trytes_1.Trytes)) {
                  _context2.next = 6;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trytes must be an array of type Trytes");

              case 6:
                if (!(!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0)) {
                  _context2.next = 8;
                  break;
                }

                throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");

              case 8:
                attachToTangleRequest = {
                  trunkTransaction: trunkTransaction.toString(),
                  branchTransaction: branchTransaction.toString(),
                  minWeightMagnitude: minWeightMagnitude,
                  trytes: trytes.map(function (t) {
                    return t.toString();
                  })
                };
                _context2.next = 11;
                return this._apiClient.attachToTangle(attachToTangleRequest);

              case 11:
                attachToTangleResponse = _context2.sent;

                if (!(objectHelper_1.ObjectHelper.isEmpty(attachToTangleResponse) || arrayHelper_1.ArrayHelper.isEmpty(attachToTangleResponse.trytes))) {
                  _context2.next = 16;
                  break;
                }

                throw new cryptoError_1.CryptoError("The attachToTangleRequest did not return any trytes");

              case 16:
                return _context2.abrupt("return", attachToTangleResponse.trytes.map(function (returnTrytes) {
                  return trytes_1.Trytes.fromString(returnTrytes);
                }));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function pow(_x, _x2, _x3, _x4) {
        return _pow.apply(this, arguments);
      };
    }()
  }]);

  return ProofOfWorkApi;
}();

exports.ProofOfWorkApi = ProofOfWorkApi;

/***/ }),

/***/ "./dist/transactions/transactionClient.js":
/*!************************************************!*\
  !*** ./dist/transactions/transactionClient.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "@iota-pico/core/dist/helpers/arrayHelper");

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "@iota-pico/core/dist/helpers/numberHelper");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");

var nullLogger_1 = __webpack_require__(/*! @iota-pico/core/dist/loggers/nullLogger */ "@iota-pico/core/dist/loggers/nullLogger");

var backgroundTaskService_1 = __webpack_require__(/*! @iota-pico/core/dist/services/backgroundTaskService */ "@iota-pico/core/dist/services/backgroundTaskService");

var timeService_1 = __webpack_require__(/*! @iota-pico/core/dist/services/timeService */ "@iota-pico/core/dist/services/timeService");

var iss_1 = __webpack_require__(/*! @iota-pico/crypto/dist/hash/iss */ "@iota-pico/crypto/dist/hash/iss");

var transactionHelper_1 = __webpack_require__(/*! @iota-pico/crypto/dist/helpers/transactionHelper */ "@iota-pico/crypto/dist/helpers/transactionHelper");

var address_1 = __webpack_require__(/*! @iota-pico/data/dist/data/address */ "@iota-pico/data/dist/data/address");

var addressSecurity_1 = __webpack_require__(/*! @iota-pico/data/dist/data/addressSecurity */ "@iota-pico/data/dist/data/addressSecurity");

var bundle_1 = __webpack_require__(/*! @iota-pico/data/dist/data/bundle */ "@iota-pico/data/dist/data/bundle");

var hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "@iota-pico/data/dist/data/hash");

var input_1 = __webpack_require__(/*! @iota-pico/data/dist/data/input */ "@iota-pico/data/dist/data/input");

var tag_1 = __webpack_require__(/*! @iota-pico/data/dist/data/tag */ "@iota-pico/data/dist/data/tag");

var transaction_1 = __webpack_require__(/*! @iota-pico/data/dist/data/transaction */ "@iota-pico/data/dist/data/transaction");

var transfer_1 = __webpack_require__(/*! @iota-pico/data/dist/data/transfer */ "@iota-pico/data/dist/data/transfer");

var trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "@iota-pico/data/dist/data/trits");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "@iota-pico/data/dist/data/trytes");

var businessError_1 = __webpack_require__(/*! ../error/businessError */ "./dist/error/businessError.js");

var addressHelper_1 = __webpack_require__(/*! ../helpers/addressHelper */ "./dist/helpers/addressHelper.js");

var bundleHelper_1 = __webpack_require__(/*! ../helpers/bundleHelper */ "./dist/helpers/bundleHelper.js");

var proofOfWorkApi_1 = __webpack_require__(/*! ./proofOfWorkApi */ "./dist/transactions/proofOfWorkApi.js");
/**
 * Default implementation of the ITransactionClient.
 */


var TransactionClient =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of the TransactionClient.
   * @param apiClient An API Client to communicate through.
   * @param proofOfWork Proof of work module to use, if undefined will use remote.
   * @param timeService A class which can provide the time.
   * @param backgroundTaskService A class which can provide background tasks.
   * @param logger Logger to send transaction info to.
   */
  function TransactionClient(apiClient, proofOfWork, timeService, backgroundTaskService, logger) {
    _classCallCheck(this, TransactionClient);

    if (objectHelper_1.ObjectHelper.isEmpty(apiClient)) {
      throw new businessError_1.BusinessError("The apiClient must not be empty");
    }

    this._apiClient = apiClient;
    this._proofOfWork = proofOfWork || new proofOfWorkApi_1.ProofOfWorkApi(apiClient);
    this._timeService = timeService || new timeService_1.TimeService();
    this._backgroundTaskService = backgroundTaskService || new backgroundTaskService_1.BackgroundTaskService();
    this._logger = logger || new nullLogger_1.NullLogger();
  }
  /**
   * Returns the list of transaction in progress.
   * @returns Promise which resolves to a list of hashes or rejects with error.
   */


  _createClass(TransactionClient, [{
    key: "getTransactionsInProgress",
    value: function () {
      var _getTransactionsInProgress = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var response, resp;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._logger.info("===> TransactionClient::getTransactionsInProgress");

                _context.next = 3;
                return this._apiClient.getTips();

              case 3:
                response = _context.sent;

                if (!(response && response.hashes)) {
                  _context.next = 10;
                  break;
                }

                resp = response.hashes.map(function (hash) {
                  return hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(hash));
                });

                this._logger.info("<=== TransactionClient::getTransactionsInProgress", resp);

                return _context.abrupt("return", resp);

              case 10:
                this._logger.info("<=== TransactionClient::getTransactionsInProgress", []);

                return _context.abrupt("return", []);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getTransactionsInProgress() {
        return _getTransactionsInProgress.apply(this, arguments);
      };
    }()
    /**
     * Find the transactions which match the specified input and return. All input values are lists,
     * for which a list of return values (transaction hashes), in the same order, is returned for all
     * individual elements. Using multiple of these input fields returns the intersection of the values.
     * @param bundles Bundles to lookup transaction hashes for.
     * @param addresses Addresses to lookup transaction hashes for.
     * @param tags Tags to lookup transaction hashes for.
     * @param approvees Approvees to lookup transaction hashes for.
     * @returns Promise which resolves with a list of hashes or rejects with error.
     */

  }, {
    key: "findTransactions",
    value: function () {
      var _findTransactions = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(bundles, addresses, tags, approvees) {
        var hasBundle, hasAddresses, hasTags, hasApprovees, request, response, resp;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._logger.info("===> TransactionClient::findTransactions", bundles, addresses, tags, approvees);

                hasBundle = bundles !== undefined && bundles !== null && bundles.length > 0;
                hasAddresses = addresses !== undefined && addresses !== null && addresses.length > 0;
                hasTags = tags !== undefined && tags !== null && tags.length > 0;
                hasApprovees = approvees !== undefined && approvees !== null && approvees.length > 0;

                if (!(hasBundle && !arrayHelper_1.ArrayHelper.isTyped(bundles, hash_1.Hash))) {
                  _context2.next = 7;
                  break;
                }

                throw new businessError_1.BusinessError("The bundles must be an array of type Hash");

              case 7:
                if (!(hasAddresses && !arrayHelper_1.ArrayHelper.isTyped(addresses, address_1.Address))) {
                  _context2.next = 9;
                  break;
                }

                throw new businessError_1.BusinessError("The addresses must be an array of type Address");

              case 9:
                if (!(hasTags && !arrayHelper_1.ArrayHelper.isTyped(tags, tag_1.Tag))) {
                  _context2.next = 11;
                  break;
                }

                throw new businessError_1.BusinessError("The tags must be an array of type Tag");

              case 11:
                if (!(hasApprovees && !arrayHelper_1.ArrayHelper.isTyped(approvees, hash_1.Hash))) {
                  _context2.next = 13;
                  break;
                }

                throw new businessError_1.BusinessError("The approvees must be an array of type Hash");

              case 13:
                if (!(!hasBundle && !hasAddresses && !hasTags && !hasApprovees)) {
                  _context2.next = 15;
                  break;
                }

                throw new businessError_1.BusinessError("You must provide bundles, addresses, tags or approvees");

              case 15:
                request = {
                  bundles: hasBundle ? bundles.map(function (bundle) {
                    return bundle.toTrytes().toString();
                  }) : undefined,
                  addresses: hasAddresses ? addresses.map(function (address) {
                    return address.toTrytes().toString();
                  }) : undefined,
                  tags: hasTags ? tags.map(function (tag) {
                    return tag.toTrytes().toString();
                  }) : undefined,
                  approvees: hasApprovees ? approvees.map(function (approvee) {
                    return approvee.toTrytes().toString();
                  }) : undefined
                };
                _context2.next = 18;
                return this._apiClient.findTransactions(request);

              case 18:
                response = _context2.sent;

                if (!(response && response.hashes)) {
                  _context2.next = 25;
                  break;
                }

                resp = response.hashes.map(function (hash) {
                  return hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(hash));
                });

                this._logger.info("<=== TransactionClient::findTransactions", resp);

                return _context2.abrupt("return", resp);

              case 25:
                this._logger.info("<=== TransactionClient::findTransactions", []);

                return _context2.abrupt("return", []);

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function findTransactions(_x, _x2, _x3, _x4) {
        return _findTransactions.apply(this, arguments);
      };
    }()
    /**
     * Get the transaction details of specific transactions.
     * @param transactionHashes The hashes to get the transactions for.
     * @returns Promise which resolves to the list of transactions or rejects with error.
     */

  }, {
    key: "getTransactionsObjects",
    value: function () {
      var _getTransactionsObjects = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(transactionHashes) {
        var request, response, resp;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._logger.info("===> TransactionClient::getTransactionsObjects", transactionHashes);

                if (arrayHelper_1.ArrayHelper.isTyped(transactionHashes, hash_1.Hash)) {
                  _context3.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The transactionHashes must be an array of type Hash");

              case 3:
                request = {
                  hashes: transactionHashes.map(function (hash) {
                    return hash.toTrytes().toString();
                  })
                };
                _context3.next = 6;
                return this._apiClient.getTrytes(request);

              case 6:
                response = _context3.sent;

                if (!(response && response.trytes)) {
                  _context3.next = 13;
                  break;
                }

                resp = response.trytes.map(function (trytes) {
                  return transaction_1.Transaction.fromTrytes(trytes_1.Trytes.fromString(trytes));
                });

                this._logger.info("<=== TransactionClient::getTransactionsObjects", resp);

                return _context3.abrupt("return", resp);

              case 13:
                this._logger.info("<=== TransactionClient::getTransactionsObjects", []);

                return _context3.abrupt("return", []);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getTransactionsObjects(_x5) {
        return _getTransactionsObjects.apply(this, arguments);
      };
    }()
    /**
     * Get the inclusion states of a list of transaction hashes.
     * @param transactionHashes The hashes to get the inclusion states for.
     * @returns Promise which resolves to the list of inclusion states or rejects with error.
     */

  }, {
    key: "getLatestInclusion",
    value: function () {
      var _getLatestInclusion = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(transactionHashes) {
        var nodeInfo, request, response;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this._logger.info("===> TransactionClient::transactionHashes");

                if (arrayHelper_1.ArrayHelper.isTyped(transactionHashes, hash_1.Hash)) {
                  _context4.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The transactionHashes must be an array of type Hash");

              case 3:
                _context4.next = 5;
                return this._apiClient.getNodeInfo();

              case 5:
                nodeInfo = _context4.sent;

                if (!(nodeInfo && numberHelper_1.NumberHelper.isInteger(nodeInfo.latestSolidSubtangleMilestone))) {
                  _context4.next = 20;
                  break;
                }

                request = {
                  transactions: transactionHashes.map(function (hash) {
                    return hash.toTrytes().toString();
                  }),
                  tips: [nodeInfo.latestSolidSubtangleMilestone]
                };
                _context4.next = 10;
                return this._apiClient.getInclusionStates(request);

              case 10:
                response = _context4.sent;

                if (!(response && response.states)) {
                  _context4.next = 16;
                  break;
                }

                this._logger.info("<=== TransactionClient::transactionHashes", response.states);

                return _context4.abrupt("return", response.states);

              case 16:
                this._logger.info("<=== TransactionClient::transactionHashes", []);

                return _context4.abrupt("return", []);

              case 18:
                _context4.next = 21;
                break;

              case 20:
                throw new businessError_1.BusinessError("The node could not provide the latestSolidSubtangleMilestone");

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function getLatestInclusion(_x6) {
        return _getLatestInclusion.apply(this, arguments);
      };
    }()
    /**
     * Generates addresses with index-based or using apis.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param endIndex The end index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to the list of addresses or rejects with error.
     */

  }, {
    key: "getNewAddress",
    value: function () {
      var _getNewAddress = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(seed, startIndex, endIndex, includeChecksum, security) {
        var localStartIndex, hasEndIndex, localSecurity, addresses, total;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this._logger.info("===> TransactionClient::getNewAddress", seed, startIndex, endIndex, includeChecksum, security);

                if (objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
                  _context5.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The seed must be of type Hash");

              case 3:
                if (!(!objectHelper_1.ObjectHelper.isEmpty(startIndex) && !objectHelper_1.ObjectHelper.isType(startIndex, Number))) {
                  _context5.next = 5;
                  break;
                }

                throw new businessError_1.BusinessError("The startIndex must be an integer", {
                  startIndex: startIndex
                });

              case 5:
                localStartIndex = startIndex || 0;

                if (!(localStartIndex < 0)) {
                  _context5.next = 8;
                  break;
                }

                throw new businessError_1.BusinessError("The startIndex must be >= 0", {
                  localStartIndex: localStartIndex
                });

              case 8:
                hasEndIndex = numberHelper_1.NumberHelper.isInteger(endIndex);
                localSecurity = security || addressSecurity_1.AddressSecurity.medium;

                if (!hasEndIndex) {
                  _context5.next = 21;
                  break;
                }

                if (!(!numberHelper_1.NumberHelper.isInteger(endIndex) || endIndex < 0)) {
                  _context5.next = 13;
                  break;
                }

                throw new businessError_1.BusinessError("The endIndex must be a number >= 0", {
                  endIndex: endIndex
                });

              case 13:
                total = endIndex - startIndex + 1;

                if (!(total <= 0 || total > TransactionClient.MAX_INPUTS)) {
                  _context5.next = 16;
                  break;
                }

                throw new businessError_1.BusinessError("The total must be > 0 and <= ".concat(TransactionClient.MAX_INPUTS), {
                  total: total
                });

              case 16:
                _context5.next = 18;
                return this.getAddressesByIndex(seed, startIndex, endIndex, includeChecksum, localSecurity);

              case 18:
                addresses = _context5.sent;
                _context5.next = 24;
                break;

              case 21:
                _context5.next = 23;
                return this.getAddressesToUnused(seed, startIndex, includeChecksum, localSecurity);

              case 23:
                addresses = _context5.sent;

              case 24:
                this._logger.info("<=== TransactionClient::getNewAddress", addresses);

                return _context5.abrupt("return", addresses);

              case 26:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function getNewAddress(_x7, _x8, _x9, _x10, _x11) {
        return _getNewAddress.apply(this, arguments);
      };
    }()
    /**
     * Generates new addresses index-based.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param endIndex The end index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to the list of addresses or rejects with error.
     */

  }, {
    key: "getAddressesByIndex",
    value: function () {
      var _getAddressesByIndex = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(seed, startIndex, endIndex, includeChecksum, security) {
        var total, addresses, i;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this._logger.info("===> TransactionClient::getAddressesByIndex", seed, startIndex, endIndex, includeChecksum, security);

                if (objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
                  _context6.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The seed must be of type Hash");

              case 3:
                if (!(!numberHelper_1.NumberHelper.isInteger(startIndex) || startIndex < 0)) {
                  _context6.next = 5;
                  break;
                }

                throw new businessError_1.BusinessError("The startIndex must be a number >= 0", {
                  startIndex: startIndex
                });

              case 5:
                if (!(!numberHelper_1.NumberHelper.isInteger(endIndex) || endIndex < 0)) {
                  _context6.next = 7;
                  break;
                }

                throw new businessError_1.BusinessError("The endIndex must be a number >= 0", {
                  endIndex: endIndex
                });

              case 7:
                total = endIndex - startIndex + 1;

                if (!(total <= 0 || total > TransactionClient.MAX_INPUTS)) {
                  _context6.next = 10;
                  break;
                }

                throw new businessError_1.BusinessError("The total must be > 0 and <= ".concat(TransactionClient.MAX_INPUTS), {
                  total: total
                });

              case 10:
                if (!(!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3)) {
                  _context6.next = 12;
                  break;
                }

                throw new businessError_1.BusinessError("The security must be between 1 and 3", {
                  security: security
                });

              case 12:
                addresses = [];

                for (i = 0; i < total; i++) {
                  addresses.push(this.generateAddress(seed, startIndex + i, security, includeChecksum));
                }

                this._logger.info("<=== TransactionClient::getAddressesByIndex", addresses);

                return _context6.abrupt("return", Promise.resolve(addresses));

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function getAddressesByIndex(_x12, _x13, _x14, _x15, _x16) {
        return _getAddressesByIndex.apply(this, arguments);
      };
    }()
    /**
     * Generates new address which havent been used using apis.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to an addresses list, the first unused address is the last in the list or rejects with error.
     */

  }, {
    key: "getAddressesToUnused",
    value: function () {
      var _getAddressesToUnused = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(seed, startIndex, includeChecksum, security) {
        var localStartIndex, isUsed, addresses, address, addressNoChecksum, spentFromRequest, spentFromResponse, findTransactionsRequest, findResponse;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this._logger.info("===> TransactionClient::getAddressesToUnused", seed, startIndex, includeChecksum, security);

                if (objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
                  _context7.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The seed must be of type Hash");

              case 3:
                if (!(!numberHelper_1.NumberHelper.isInteger(startIndex) || startIndex < 0)) {
                  _context7.next = 5;
                  break;
                }

                throw new businessError_1.BusinessError("The startIndex must be a number >= 0", {
                  startIndex: startIndex
                });

              case 5:
                if (!(!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3)) {
                  _context7.next = 7;
                  break;
                }

                throw new businessError_1.BusinessError("The security must be between 1 and 3", {
                  security: security
                });

              case 7:
                localStartIndex = startIndex;
                addresses = [];

              case 9:
                address = this.generateAddress(seed, localStartIndex++, security, includeChecksum);
                addresses.push(address);
                addressNoChecksum = address.toTrytes().toString();
                spentFromRequest = {
                  addresses: [addressNoChecksum]
                };
                _context7.next = 15;
                return this._apiClient.wereAddressesSpentFrom(spentFromRequest);

              case 15:
                spentFromResponse = _context7.sent;
                isUsed = spentFromResponse && spentFromResponse.states && spentFromResponse.states.length > 0 ? spentFromResponse.states[0] : false;

                if (isUsed) {
                  _context7.next = 23;
                  break;
                }

                findTransactionsRequest = {
                  addresses: [addressNoChecksum]
                };
                _context7.next = 21;
                return this._apiClient.findTransactions(findTransactionsRequest);

              case 21:
                findResponse = _context7.sent;
                isUsed = findResponse && findResponse.hashes && findResponse.hashes.length > 0;

              case 23:
                if (isUsed) {
                  _context7.next = 9;
                  break;
                }

              case 24:
                this._logger.info("<=== TransactionClient::getAddressesToUnused", addresses);

                return _context7.abrupt("return", Promise.resolve(addresses));

              case 26:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function getAddressesToUnused(_x17, _x18, _x19, _x20) {
        return _getAddressesToUnused.apply(this, arguments);
      };
    }()
    /**
     * Get the input data for a range of addresses.
     * @param seed The seed to get the input data for.
     * @param startIndex The start index to get the addresses.
     * @param endIndex The end index to get the addresses.
     * @param security The security level used to create the addresses.
     * @param totalRequired The threshold at which total balance to stop gathering addresses.
     * @returns Promise which resolves to the inputs for each address or rejects with error.
     */

  }, {
    key: "getInputs",
    value: function () {
      var _getInputs = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(seed, startIndex, endIndex, security, totalRequired) {
        var addresses, request, response, inputs, totalBalance, i, balance, resp;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this._logger.info("===> TransactionClient::getInputs", seed, startIndex, endIndex, security, totalRequired);

                if (objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
                  _context8.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The seed must be of type Hash");

              case 3:
                if (!(!numberHelper_1.NumberHelper.isInteger(startIndex) || startIndex < 0)) {
                  _context8.next = 5;
                  break;
                }

                throw new businessError_1.BusinessError("The startIndex must be a number >= 0", {
                  startIndex: startIndex
                });

              case 5:
                if (!(!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3)) {
                  _context8.next = 7;
                  break;
                }

                throw new businessError_1.BusinessError("The security must be between 1 and 3", {
                  security: security
                });

              case 7:
                if (!(!numberHelper_1.NumberHelper.isInteger(totalRequired) || totalRequired < 0)) {
                  _context8.next = 9;
                  break;
                }

                throw new businessError_1.BusinessError("The totalRequired must be >= 0", {
                  totalRequired: totalRequired
                });

              case 9:
                _context8.next = 11;
                return this.getNewAddress(seed, startIndex, endIndex, false, security);

              case 11:
                addresses = _context8.sent;
                request = {
                  addresses: addresses.map(function (add) {
                    return add.toTrytes().toString();
                  }),
                  threshold: 100
                };
                _context8.next = 15;
                return this._apiClient.getBalances(request);

              case 15:
                response = _context8.sent;
                inputs = [];
                totalBalance = 0;

                if (!response) {
                  _context8.next = 30;
                  break;
                }

                i = 0;

              case 20:
                if (!(i < addresses.length)) {
                  _context8.next = 30;
                  break;
                }

                balance = parseInt(response.balances[i], 10);

                if (!(balance > 0)) {
                  _context8.next = 27;
                  break;
                }

                inputs.push(input_1.Input.fromParams(addresses[i], security, startIndex + i, balance));
                totalBalance += balance;

                if (!(totalRequired > 0 && totalBalance >= totalRequired)) {
                  _context8.next = 27;
                  break;
                }

                return _context8.abrupt("break", 30);

              case 27:
                i++;
                _context8.next = 20;
                break;

              case 30:
                resp = {
                  inputs: inputs,
                  totalBalance: totalBalance
                };

                this._logger.info("<=== TransactionClient::getInputs", resp);

                if (!(totalRequired > 0 && totalBalance < totalRequired)) {
                  _context8.next = 34;
                  break;
                }

                throw new businessError_1.BusinessError("Not enough combined balance in the addresses to satisfy the total required", {
                  totalRequired: totalRequired,
                  totalBalance: totalBalance
                });

              case 34:
                return _context8.abrupt("return", resp);

              case 35:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function getInputs(_x21, _x22, _x23, _x24, _x25) {
        return _getInputs.apply(this, arguments);
      };
    }()
    /**
     * Prepares transfer by generating bundle, finding and signing inputs.
     * @param seed The seed to prepare the transfer for.
     * @param transfers The transfers to prepare.
     * @param transferOptions Additional options for the transfer.
     * @returns Promise which resolves to the array of Trytes for the transfer or rejects with error.
     */

  }, {
    key: "prepareTransfers",
    value: function () {
      var _prepareTransfers = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(seed, transfers, transferOptions) {
        var localTransferOptions, emptyTrytes, addHMAC, addedHMAC, prepared, bundle, lastTag, totalValue, signatureMessageFragments, request, balances, confirmedInputs, totalBalance, i, balance, inputsResponse;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this._logger.info("===> TransactionClient::prepareTransfers", seed, transfers, transferOptions);

                if (objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
                  _context9.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The seed must be of type Hash");

              case 3:
                if (arrayHelper_1.ArrayHelper.isTyped(transfers, transfer_1.Transfer)) {
                  _context9.next = 5;
                  break;
                }

                throw new businessError_1.BusinessError("The transfers must be an array of Transfer objects");

              case 5:
                localTransferOptions = transferOptions || {};
                localTransferOptions.security = localTransferOptions.security || addressSecurity_1.AddressSecurity.medium;
                emptyTrytes = trytes_1.Trytes.fromString("");
                addHMAC = !objectHelper_1.ObjectHelper.isEmpty(localTransferOptions.hmacKey);
                addedHMAC = false; // If message or tag is not supplied, provide it

                transfers.forEach(function (transfer) {
                  transfer.message = transfer.message ? transfer.message : emptyTrytes;
                  transfer.tag = transfer.tag || tag_1.Tag.EMPTY;

                  if (addHMAC && transfer.value > 0) {
                    // tslint:disable:restrict-plus-operands false positive
                    transfer.message = trytes_1.Trytes.fromString(TransactionClient.NULL_HASH_TRYTES + transfer.message.toString());
                    addedHMAC = true;
                  }
                }); // Create a new bundle

                prepared = bundleHelper_1.BundleHelper.prepareBundle(this._timeService, transfers);
                bundle = prepared.bundle;
                lastTag = prepared.lastTag;
                totalValue = prepared.totalValue;
                signatureMessageFragments = prepared.signatureMessageFragments; // Get inputs if we are sending tokens

                if (!(totalValue > 0)) {
                  _context9.next = 49;
                  break;
                }

                if (!localTransferOptions.inputs) {
                  _context9.next = 42;
                  break;
                }

                request = {
                  addresses: localTransferOptions.inputs.map(function (input) {
                    return input.address.toTrytes().toString();
                  }),
                  threshold: 100
                };
                _context9.next = 21;
                return this._apiClient.getBalances(request);

              case 21:
                balances = _context9.sent;
                confirmedInputs = [];
                totalBalance = 0;
                i = 0;

              case 25:
                if (!(i < balances.balances.length)) {
                  _context9.next = 36;
                  break;
                }

                balance = parseInt(balances.balances[i], 10); // If input has balance, add it to confirmedInputs

                if (!(balance > 0)) {
                  _context9.next = 33;
                  break;
                }

                totalBalance += balance;
                localTransferOptions.inputs[i].balance = balance;
                confirmedInputs.push(localTransferOptions.inputs[i]); // if we've already reached the intended input value, break out of loop

                if (!(totalBalance >= totalValue)) {
                  _context9.next = 33;
                  break;
                }

                return _context9.abrupt("break", 36);

              case 33:
                i++;
                _context9.next = 25;
                break;

              case 36:
                if (!(totalValue > totalBalance)) {
                  _context9.next = 38;
                  break;
                }

                throw new businessError_1.BusinessError("Not enough balance in the input addresses to satisfy the total for the transfer");

              case 38:
                _context9.next = 40;
                return this.addRemainder(seed, bundle, localTransferOptions, confirmedInputs, signatureMessageFragments, totalValue, lastTag, addedHMAC);

              case 40:
                _context9.next = 47;
                break;

              case 42:
                _context9.next = 44;
                return this.getInputs(seed, 0, undefined, localTransferOptions.security, totalValue);

              case 44:
                inputsResponse = _context9.sent;
                _context9.next = 47;
                return this.addRemainder(seed, bundle, localTransferOptions, inputsResponse.inputs, signatureMessageFragments, totalValue, lastTag, addedHMAC);

              case 47:
                _context9.next = 51;
                break;

              case 49:
                // If no input required, don't sign and simply finalize the bundle
                bundleHelper_1.BundleHelper.finalizeBundle(bundle);
                bundle.addSignatureMessageFragments(signatureMessageFragments);

              case 51:
                bundle.transactions = bundle.transactions.reverse();

                this._logger.info("<=== TransactionClient::prepareTransfers", bundle);

                return _context9.abrupt("return", bundle);

              case 54:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function prepareTransfers(_x26, _x27, _x28) {
        return _prepareTransfers.apply(this, arguments);
      };
    }()
    /**
     * Attach the transactions to the tangle by doing proof of work.
     * @param bundle The bundle of transactions to attach.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the bundle of transactions created or rejects with an error.
     */

  }, {
    key: "attachToTangle",
    value: function () {
      var _attachToTangle = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10(bundle, depth, minWeightMagnitude, reference) {
        var transactionsToApproveRequest, transactionsToApprove, allTrytes, powTransactions, newBundle;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this._logger.info("===> TransactionClient::attachToTangle", bundle, depth, minWeightMagnitude, reference);

                if (objectHelper_1.ObjectHelper.isType(bundle, bundle_1.Bundle)) {
                  _context10.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The bundle must be an array of type Bundle");

              case 3:
                if (arrayHelper_1.ArrayHelper.isTyped(bundle.transactions, transaction_1.Transaction)) {
                  _context10.next = 5;
                  break;
                }

                throw new businessError_1.BusinessError("The bundle.transactions must be an array of type Transaction");

              case 5:
                if (!(!numberHelper_1.NumberHelper.isInteger(depth) || depth <= 0)) {
                  _context10.next = 7;
                  break;
                }

                throw new businessError_1.BusinessError("The depth must be a number > 0", {
                  depth: depth
                });

              case 7:
                if (!(!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0)) {
                  _context10.next = 9;
                  break;
                }

                throw new businessError_1.BusinessError("The minWeightMagnitude must be a number > 0", {
                  minWeightMagnitude: minWeightMagnitude
                });

              case 9:
                transactionsToApproveRequest = {
                  depth: depth,
                  reference: reference ? reference.toTrytes().toString() : undefined
                };
                _context10.next = 12;
                return this._apiClient.getTransactionsToApprove(transactionsToApproveRequest);

              case 12:
                transactionsToApprove = _context10.sent;
                _context10.next = 15;
                return this._proofOfWork.pow(hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(transactionsToApprove.trunkTransaction)), hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(transactionsToApprove.branchTransaction)), bundle.transactions.map(function (t) {
                  return t.toTrytes();
                }), minWeightMagnitude);

              case 15:
                allTrytes = _context10.sent;
                powTransactions = allTrytes.map(function (returnTrytes) {
                  return transaction_1.Transaction.fromTrytes(returnTrytes);
                });
                newBundle = new bundle_1.Bundle();
                newBundle.transactions = powTransactions;

                this._logger.info("<=== TransactionClient::attachToTangle", newBundle);

                return _context10.abrupt("return", newBundle);

              case 21:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function attachToTangle(_x29, _x30, _x31, _x32) {
        return _attachToTangle.apply(this, arguments);
      };
    }()
    /**
     * Wrapper function that does attachToTangle and then stores and broadcasts the transactions.
     * @param bundle The bundle of transactions to send.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the bundle of transactions created or rejects with an error.
     */

  }, {
    key: "sendTransactions",
    value: function () {
      var _sendTransactions = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee11(bundle, depth, minWeightMagnitude, reference) {
        var attachedTransactionsBundle, storeTransactionsRequest, broadcastTransactionsRequest;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this._logger.info("===> TransactionClient::sendTransactions", bundle, depth, minWeightMagnitude, reference);

                _context11.next = 3;
                return this.attachToTangle(bundle, depth, minWeightMagnitude, reference);

              case 3:
                attachedTransactionsBundle = _context11.sent;
                storeTransactionsRequest = {
                  trytes: attachedTransactionsBundle.transactions.map(function (t) {
                    return t.toTrytes().toString();
                  })
                };
                _context11.next = 7;
                return this._apiClient.storeTransactions(storeTransactionsRequest);

              case 7:
                broadcastTransactionsRequest = {
                  trytes: storeTransactionsRequest.trytes
                };
                _context11.next = 10;
                return this._apiClient.broadcastTransactions(broadcastTransactionsRequest);

              case 10:
                this._logger.info("<=== TransactionClient::sendTransactions", attachedTransactionsBundle);

                return _context11.abrupt("return", attachedTransactionsBundle);

              case 12:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function sendTransactions(_x33, _x34, _x35, _x36) {
        return _sendTransactions.apply(this, arguments);
      };
    }()
    /**
     * Wrapper function that does prepareTransfers and then sendTransactions.
     * @param seed The seed to send the transfer for.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param transfers The transfers to send.
     * @param transferOptions Additional options for the transfer.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */

  }, {
    key: "sendTransfer",
    value: function () {
      var _sendTransfer = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee12(seed, depth, minWeightMagnitude, transfers, transferOptions, reference) {
        var transferTrytes, sentBundle;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this._logger.info("===> TransactionClient::sendTransfer", seed, depth, minWeightMagnitude, transfers, transferOptions, reference);

                _context12.next = 3;
                return this.prepareTransfers(seed, transfers, transferOptions);

              case 3:
                transferTrytes = _context12.sent;
                _context12.next = 6;
                return this.sendTransactions(transferTrytes, depth, minWeightMagnitude, reference);

              case 6:
                sentBundle = _context12.sent;

                this._logger.info("<=== TransactionClient::sendTransfer", sentBundle);

                return _context12.abrupt("return", sentBundle);

              case 9:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function sendTransfer(_x37, _x38, _x39, _x40, _x41, _x42) {
        return _sendTransfer.apply(this, arguments);
      };
    }()
    /**
     * Find out if a transaction is promotable.
     * @param transactionTail The hash of the transaction to be promoted.
     * @returns Promise which resolves to true if the transaction is promotable rejects with an error.
     */

  }, {
    key: "isPromotable",
    value: function () {
      var _isPromotable = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee13(transactionTail) {
        var checkConsistencyRequest, checkConsistencyResponse;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this._logger.info("===> TransactionClient::isPromotable", transactionTail);

                if (objectHelper_1.ObjectHelper.isType(transactionTail, hash_1.Hash)) {
                  _context13.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The transactionTail must be an object of type Hash");

              case 3:
                checkConsistencyRequest = {
                  tails: [transactionTail.toTrytes().toString()]
                };
                _context13.next = 6;
                return this._apiClient.checkConsistency(checkConsistencyRequest);

              case 6:
                checkConsistencyResponse = _context13.sent;

                this._logger.info("<=== TransactionClient::isPromotable", checkConsistencyResponse.state);

                return _context13.abrupt("return", checkConsistencyResponse.state);

              case 9:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function isPromotable(_x43) {
        return _isPromotable.apply(this, arguments);
      };
    }()
    /**
     * Determines whether you should replay a transaction or make a new one (either with the same input, or a different one).
     * @param addresses Input address you want to have tested.
     * @returns Promise which resolves to true if the addresses are reattachable or rejects with an error.
     */

  }, {
    key: "isReattachable",
    value: function () {
      var _isReattachable = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee14(addresses) {
        var addrsTxsMap, i, addressString, transactions, valueTransactions, results, inclusionStates, _i2;

        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                this._logger.info("===> TransactionClient::isReattachable", addresses);

                if (arrayHelper_1.ArrayHelper.isTyped(addresses, address_1.Address)) {
                  _context14.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The addresses must be an object of type Address");

              case 3:
                addrsTxsMap = {};

                for (i = 0; i < addresses.length; i++) {
                  addressString = addresses[i].toTrytes().toString();
                  addrsTxsMap[addressString] = [];
                }

                _context14.next = 7;
                return this.findTransactionObjects(undefined, addresses);

              case 7:
                transactions = _context14.sent;
                valueTransactions = [];
                transactions.forEach(function (transaction) {
                  if (transaction.value.toNumber() < 0) {
                    var txAddress = transaction.address;
                    var txHash = transactionHelper_1.TransactionHelper.hash(transaction);
                    addrsTxsMap[txAddress.toTrytes().toString()].push(txHash);
                    valueTransactions.push(txHash);
                  }
                });

                if (!(valueTransactions.length > 0)) {
                  _context14.next = 17;
                  break;
                }

                _context14.next = 13;
                return this.getLatestInclusion(valueTransactions);

              case 13:
                inclusionStates = _context14.sent;
                results = addresses.map(function (address) {
                  var shouldReattach = true;
                  var txs = addrsTxsMap[address.toTrytes().toString()];

                  for (var _i = 0; _i < txs.length; _i++) {
                    var txIndex = valueTransactions.indexOf(txs[_i]);
                    shouldReattach = !inclusionStates[txIndex];

                    if (!shouldReattach) {
                      break;
                    }
                  }

                  return shouldReattach;
                });
                _context14.next = 19;
                break;

              case 17:
                results = [];

                for (_i2 = 0; _i2 < addresses.length; _i2++) {
                  results.push(true);
                }

              case 19:
                this._logger.info("<=== TransactionClient::isReattachable", results);

                return _context14.abrupt("return", results);

              case 21:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      return function isReattachable(_x44) {
        return _isReattachable.apply(this, arguments);
      };
    }()
    /**
     * Promotes a transaction by adding spam on top of it, as long as it is promotable.
     * Will promote by adding transfers on top of the current one with delay interval.
     * Use promoteOptions.interrupt to terminate the promotion.
     * If promoteOptions.delay is set to 0 only one promotion transfer will be sent.
     * @param transactionTail The hash of the transaction to be promoted.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param transfers The transfers to send.
     * @param promoteOptions Additional options for the promote.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */

  }, {
    key: "promoteTransaction",
    value: function () {
      var _promoteTransaction = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee16(transactionTail, depth, minWeightMagnitude, transfers, promoteOptions) {
        var _this = this;

        var localPromoteOptions, isPromotable, sendTransferResponse;
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                this._logger.info("===> TransactionClient::promoteTransaction", transactionTail, depth, minWeightMagnitude, transfers, promoteOptions);

                if (objectHelper_1.ObjectHelper.isType(transactionTail, hash_1.Hash)) {
                  _context16.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The transactionTail must be an object of type Hash");

              case 3:
                if (!(!numberHelper_1.NumberHelper.isInteger(depth) || depth <= 0)) {
                  _context16.next = 5;
                  break;
                }

                throw new businessError_1.BusinessError("The depth must be a number > 0", {
                  depth: depth
                });

              case 5:
                if (!(!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0)) {
                  _context16.next = 7;
                  break;
                }

                throw new businessError_1.BusinessError("The minWeightMagnitude must be a number > 0", {
                  minWeightMagnitude: minWeightMagnitude
                });

              case 7:
                if (arrayHelper_1.ArrayHelper.isTyped(transfers, transfer_1.Transfer)) {
                  _context16.next = 9;
                  break;
                }

                throw new businessError_1.BusinessError("The transfers must an array of Transfer objects");

              case 9:
                localPromoteOptions = promoteOptions || {};

                if (objectHelper_1.ObjectHelper.isEmpty(localPromoteOptions.interrupt)) {
                  localPromoteOptions.interrupt = false;
                }

                if (!(localPromoteOptions.interrupt === false || typeof localPromoteOptions.interrupt === "function" && !localPromoteOptions.interrupt())) {
                  _context16.next = 30;
                  break;
                }

                _context16.next = 14;
                return this.isPromotable(transactionTail);

              case 14:
                isPromotable = _context16.sent;

                if (!isPromotable) {
                  _context16.next = 27;
                  break;
                }

                _context16.next = 18;
                return this.sendTransfer(hash_1.Hash.fromTrytes(transfers[0].address.toTrytes()), depth, minWeightMagnitude, transfers, undefined, transactionTail);

              case 18:
                sendTransferResponse = _context16.sent;

                if (!numberHelper_1.NumberHelper.isInteger(localPromoteOptions.delay)) {
                  _context16.next = 23;
                  break;
                }

                return _context16.abrupt("return", this._backgroundTaskService.create(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee15() {
                  return _regenerator.default.wrap(function _callee15$(_context15) {
                    while (1) {
                      switch (_context15.prev = _context15.next) {
                        case 0:
                          return _context15.abrupt("return", _this.promoteTransaction(transactionTail, depth, minWeightMagnitude, transfers, localPromoteOptions));

                        case 1:
                        case "end":
                          return _context15.stop();
                      }
                    }
                  }, _callee15, this);
                })), localPromoteOptions.delay));

              case 23:
                this._logger.info("<=== TransactionClient::promoteTransaction", sendTransferResponse);

                return _context16.abrupt("return", sendTransferResponse);

              case 25:
                _context16.next = 28;
                break;

              case 27:
                throw new businessError_1.BusinessError("Transaction is not promotable");

              case 28:
                _context16.next = 32;
                break;

              case 30:
                this._logger.info("<=== TransactionClient::promoteTransaction", undefined);

                return _context16.abrupt("return", undefined);

              case 32:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      return function promoteTransaction(_x45, _x46, _x47, _x48, _x49) {
        return _promoteTransaction.apply(this, arguments);
      };
    }()
    /**
     * Gets the associated bundle transactions of a single transaction.
     * Does validation of signatures, total sum as well as bundle order.
     * @param transactionHash Hash of a trunk or a tail transaction of a bundle.
     * @returns Promise which resolves to the bundle transactions or rejects with an error.
     */

  }, {
    key: "getBundle",
    value: function () {
      var _getBundle = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee17(transactionHash) {
        var transactions, bundle, isValid;
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                this._logger.info("===> TransactionClient::getBundle", transactionHash);

                if (objectHelper_1.ObjectHelper.isType(transactionHash, hash_1.Hash)) {
                  _context17.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The transactionHash must be an object of type Hash");

              case 3:
                _context17.next = 5;
                return this.traverseBundle(transactionHash);

              case 5:
                transactions = _context17.sent;
                bundle = new bundle_1.Bundle();
                bundle.transactions = transactions;
                isValid = bundleHelper_1.BundleHelper.isValid(bundle);

                if (isValid) {
                  _context17.next = 11;
                  break;
                }

                throw new businessError_1.BusinessError("Invalid bundle provided");

              case 11:
                this._logger.info("<=== TransactionClient::getBundle", bundle);

                return _context17.abrupt("return", bundle);

              case 13:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      return function getBundle(_x50) {
        return _getBundle.apply(this, arguments);
      };
    }()
    /**
     * Traverse the Bundle by going down the trunkTransactions until
     * the bundle hash of the transaction is no longer the same.
     * @param trunkTransaction Hash of a trunk or a tail transaction of a bundle.
     * @param bundleHash The bundle hash to match.
     * @returns Promise which resolves to the bundle transactions or rejects with an error.
     */

  }, {
    key: "traverseBundle",
    value: function () {
      var _traverseBundle = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee18(trunkTransaction, bundleHash) {
        var allBundleTransactions, newTrunkTransaction, newBundleHash, getTrytesRequest, getTrytesResponse, trytes, transactionObject, hasHash, localBundleHash;
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                this._logger.info("===> TransactionClient::traverseBundle", trunkTransaction, bundleHash);

                if (objectHelper_1.ObjectHelper.isType(trunkTransaction, hash_1.Hash)) {
                  _context18.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The trunkTransaction must be an object of type Hash");

              case 3:
                allBundleTransactions = [];
                newTrunkTransaction = trunkTransaction;
                newBundleHash = bundleHash;

              case 6:
                getTrytesRequest = {
                  hashes: [newTrunkTransaction.toTrytes().toString()]
                };
                _context18.next = 9;
                return this._apiClient.getTrytes(getTrytesRequest);

              case 9:
                getTrytesResponse = _context18.sent;
                trytes = !objectHelper_1.ObjectHelper.isEmpty(getTrytesResponse) && !objectHelper_1.ObjectHelper.isEmpty(getTrytesResponse.trytes) && getTrytesResponse.trytes.length > 0 ? getTrytesResponse.trytes[0] : undefined;

                if (!objectHelper_1.ObjectHelper.isEmpty(trytes)) {
                  _context18.next = 15;
                  break;
                }

                throw new businessError_1.BusinessError("Bundle transactions not visible");

              case 15:
                transactionObject = transaction_1.Transaction.fromTrytes(trytes_1.Trytes.fromString(trytes)); // If first transaction to search is not a tail, return error

                hasHash = !objectHelper_1.ObjectHelper.isEmpty(newBundleHash);

                if (!(!hasHash && transactionObject.currentIndex.toNumber() !== 0)) {
                  _context18.next = 19;
                  break;
                }

                throw new businessError_1.BusinessError("Invalid tail transaction supplied");

              case 19:
                // If no bundle hash, define it
                localBundleHash = hasHash ? newBundleHash : transactionObject.bundle;
                newTrunkTransaction = undefined;
                newBundleHash = undefined; // If same bundle hash continue

                if (localBundleHash.toTrytes().toString() === transactionObject.bundle.toTrytes().toString()) {
                  // Add transaction object to bundle
                  allBundleTransactions.push(transactionObject); // If more than one element then continue

                  if (transactionObject.lastIndex.toNumber() !== 0 || transactionObject.currentIndex.toNumber() !== 0) {
                    newTrunkTransaction = transactionObject.trunkTransaction;
                    newBundleHash = localBundleHash;
                  }
                }

              case 23:
                if (newTrunkTransaction !== undefined) {
                  _context18.next = 6;
                  break;
                }

              case 24:
                this._logger.info("<=== TransactionClient::traverseBundle", allBundleTransactions);

                return _context18.abrupt("return", allBundleTransactions);

              case 26:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      return function traverseBundle(_x51, _x52) {
        return _traverseBundle.apply(this, arguments);
      };
    }()
    /**
     * Wrapper which gets a bundle and then replays a transfer by doing Proof of Work again.
     * @param transactionHash The hash of the transaction to be promoted.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */

  }, {
    key: "reattachBundle",
    value: function () {
      var _reattachBundle = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee19(transactionHash, depth, minWeightMagnitude) {
        var bundle, sendTransactionsResponse;
        return _regenerator.default.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                this._logger.info("===> TransactionClient::reattachBundle", transactionHash, depth, minWeightMagnitude);

                _context19.next = 3;
                return this.getBundle(transactionHash);

              case 3:
                bundle = _context19.sent;
                bundle.transactions = bundle.transactions.reverse();
                _context19.next = 7;
                return this.sendTransactions(bundle, depth, minWeightMagnitude);

              case 7:
                sendTransactionsResponse = _context19.sent;

                this._logger.info("<=== TransactionClient::reattachBundle", sendTransactionsResponse);

                return _context19.abrupt("return", sendTransactionsResponse);

              case 10:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      return function reattachBundle(_x53, _x54, _x55) {
        return _reattachBundle.apply(this, arguments);
      };
    }()
    /**
     * Wrapper which gets a bundle and then broadcasts it.
     * @param transactionHash The hash of the transaction to be re-broadcast.
     * @returns Promise which resolves or rejects with an error.
     */

  }, {
    key: "rebroadcastBundle",
    value: function () {
      var _rebroadcastBundle = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee20(transactionHash) {
        var bundle, broadcastTransactionsRequest;
        return _regenerator.default.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                this._logger.info("===> TransactionClient::rebroadcastBundle", transactionHash);

                _context20.next = 3;
                return this.getBundle(transactionHash);

              case 3:
                bundle = _context20.sent;
                broadcastTransactionsRequest = {
                  trytes: bundle.transactions.reverse().map(function (bt) {
                    return bt.toTrytes().toString();
                  })
                };
                _context20.next = 7;
                return this._apiClient.broadcastTransactions(broadcastTransactionsRequest);

              case 7:
                this._logger.info("<=== TransactionClient::rebroadcastBundle", bundle);

                return _context20.abrupt("return", bundle);

              case 9:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      return function rebroadcastBundle(_x56) {
        return _rebroadcastBundle.apply(this, arguments);
      };
    }()
    /**
     * Get transaction objects by fist performing a findTransactions call.
     * @param bundles Bundles to lookup transactions for.
     * @param addresses Addresses to lookup transactions for.
     * @param tags Tags to lookup transactions for.
     * @param approvees Approvees to lookup transactions for.
     * @returns Promise which resolves to the list of transactions or rejects with an error.
     */

  }, {
    key: "findTransactionObjects",
    value: function () {
      var _findTransactionObjects = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee21(bundles, addresses, tags, approvees) {
        var transactions, resp;
        return _regenerator.default.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                this._logger.info("===> TransactionClient::findTransactionObjects", bundles, addresses, tags, approvees);

                _context21.next = 3;
                return this.findTransactions(bundles, addresses, tags, approvees);

              case 3:
                transactions = _context21.sent;

                if (!(transactions.length > 0)) {
                  _context21.next = 12;
                  break;
                }

                _context21.next = 7;
                return this.getTransactionsObjects(transactions);

              case 7:
                resp = _context21.sent;

                this._logger.info("<=== TransactionClient::findTransactionObjects", resp);

                return _context21.abrupt("return", resp);

              case 12:
                this._logger.info("<=== TransactionClient::findTransactionObjects", []);

                return _context21.abrupt("return", []);

              case 14:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      return function findTransactionObjects(_x57, _x58, _x59, _x60) {
        return _findTransactionObjects.apply(this, arguments);
      };
    }()
    /**
     * The transfers which are associated with a seed. The transfers are determined by either calculating
     * deterministically which addresses were already used, or by providing a list of indexes to get the
     * addresses and the associated transfers from. The transfers are sorted by their timestamp.
     * @param seed The seed to get the transfers for
     * @param startIndex The start index to get the transfers for.
     * @param endIndex The end index to get the transfers for.
     * @param security The security level for the transfers.
     * @param inclusionStates Do you want inclusion states in the bundles.
     * @returns Promise which resolves to the requested bundles or rejects with an error.
     */

  }, {
    key: "getTransfers",
    value: function () {
      var _getTransfers = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee22(seed, startIndex, endIndex, security, inclusionStates) {
        var localStartIndex, addresses, bundles;
        return _regenerator.default.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                this._logger.info("===> TransactionClient::getTransfers", seed, startIndex, endIndex, security, inclusionStates);

                if (objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
                  _context22.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The seed must be of type Hash");

              case 3:
                localStartIndex = startIndex;

                if (!numberHelper_1.NumberHelper.isInteger(localStartIndex)) {
                  localStartIndex = 0;
                }

                _context22.next = 7;
                return this.getNewAddress(seed, localStartIndex, endIndex, false, security);

              case 7:
                addresses = _context22.sent;
                _context22.next = 10;
                return this.bundlesFromAddresses(addresses, inclusionStates);

              case 10:
                bundles = _context22.sent;

                this._logger.info("<=== TransactionClient::getTransfers", bundles);

                return _context22.abrupt("return", bundles);

              case 13:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      return function getTransfers(_x61, _x62, _x63, _x64, _x65) {
        return _getTransfers.apply(this, arguments);
      };
    }()
    /**
     * Similar to getTransfers, just that it returns additional account data.
     * @param seed The seed to get the transfers for
     * @param startIndex The start index to get the transfers for.
     * @param endIndex The end index to get the transfers for.
     * @param security The security level for the transfers.
     * @returns Promise which resolves to the account data or rejects with an error.
     */

  }, {
    key: "getAccountData",
    value: function () {
      var _getAccountData = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee23(seed, startIndex, endIndex, security) {
        var localStartIndex, addresses, bundles, accountData, balanceRequest, balanceResponse, i, balance;
        return _regenerator.default.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                this._logger.info("===> TransactionClient::getAccountData", seed, startIndex, endIndex, security);

                if (objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
                  _context23.next = 3;
                  break;
                }

                throw new businessError_1.BusinessError("The seed must be of type Hash");

              case 3:
                localStartIndex = startIndex;

                if (!numberHelper_1.NumberHelper.isInteger(localStartIndex)) {
                  localStartIndex = 0;
                }

                _context23.next = 7;
                return this.getNewAddress(seed, localStartIndex, endIndex, false, security || addressSecurity_1.AddressSecurity.medium);

              case 7:
                addresses = _context23.sent;
                _context23.next = 10;
                return this.bundlesFromAddresses(addresses, true);

              case 10:
                bundles = _context23.sent;
                accountData = {
                  latestAddress: addresses.pop(),
                  addresses: addresses,
                  transfers: bundles,
                  inputs: [],
                  balance: 0
                };
                balanceRequest = {
                  addresses: accountData.addresses.map(function (add) {
                    return add.toTrytes().toString();
                  }),
                  threshold: 100
                };
                _context23.next = 15;
                return this._apiClient.getBalances(balanceRequest);

              case 15:
                balanceResponse = _context23.sent;

                for (i = 0; i < balanceResponse.balances.length; i++) {
                  balance = parseInt(balanceResponse.balances[i], 10);

                  if (balance > 0) {
                    accountData.inputs.push(input_1.Input.fromParams(accountData.addresses[i], security || addressSecurity_1.AddressSecurity.medium, localStartIndex + i, balance));
                    accountData.balance += balance;
                  }
                }

                this._logger.info("<=== TransactionClient::getAccountData", accountData);

                return _context23.abrupt("return", accountData);

              case 19:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      return function getAccountData(_x66, _x67, _x68, _x69) {
        return _getAccountData.apply(this, arguments);
      };
    }()
    /* @internal */

  }, {
    key: "bundlesFromAddresses",
    value: function () {
      var _bundlesFromAddresses = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee24(addresses, inclusionStates) {
        var transactionObjects, tailTransactions, nonTailBundleHashes, nonTailBundleTransactions, finalBundles, tailTxArray, tailTxStates, i, bundle;
        return _regenerator.default.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return this.findTransactionObjects(undefined, addresses, undefined, undefined);

              case 2:
                transactionObjects = _context24.sent;
                // set of tail transactions
                tailTransactions = new Set();
                nonTailBundleHashes = new Set();
                transactionObjects.forEach(function (transaction) {
                  // Sort tail and nonTails
                  if (transaction.currentIndex.toNumber() === 0) {
                    tailTransactions.add(transactionHelper_1.TransactionHelper.hash(transaction).toTrytes().toString());
                  } else {
                    nonTailBundleHashes.add(transaction.bundle.toTrytes().toString());
                  }
                });

                if (!(nonTailBundleHashes.size > 0)) {
                  _context24.next = 11;
                  break;
                }

                _context24.next = 9;
                return this.findTransactionObjects(Array.from(nonTailBundleHashes).map(function (hash) {
                  return hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(hash));
                }));

              case 9:
                nonTailBundleTransactions = _context24.sent;
                nonTailBundleTransactions.forEach(function (transaction) {
                  if (transaction.currentIndex.toNumber() === 0) {
                    tailTransactions.add(transactionHelper_1.TransactionHelper.hash(transaction).toTrytes().toString());
                  }
                });

              case 11:
                finalBundles = [];
                tailTxArray = Array.from(tailTransactions); // If inclusionStates, get the confirmation status
                // of the tail transactions, and thus the bundles

                if (!inclusionStates) {
                  _context24.next = 17;
                  break;
                }

                _context24.next = 16;
                return this.getLatestInclusion(tailTxArray.map(function (tail) {
                  return hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(tail));
                }));

              case 16:
                tailTxStates = _context24.sent;

              case 17:
                i = 0;

              case 18:
                if (!(i < tailTxArray.length)) {
                  _context24.next = 27;
                  break;
                }

                _context24.next = 21;
                return this.getBundle(hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(tailTxArray[i])));

              case 21:
                bundle = _context24.sent;
                bundle.inclusionState = tailTxStates ? tailTxStates[i] : undefined;
                finalBundles.push(bundle);

              case 24:
                i++;
                _context24.next = 18;
                break;

              case 27:
                // Sort bundles by timestamp
                finalBundles.sort(function (a, b) {
                  var x = a.transactions[0].attachmentTimestamp.toNumber();
                  var y = b.transactions[0].attachmentTimestamp.toNumber();
                  return x < y ? -1 : x > y ? 1 : 0;
                });
                return _context24.abrupt("return", finalBundles);

              case 29:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      return function bundlesFromAddresses(_x70, _x71) {
        return _bundlesFromAddresses.apply(this, arguments);
      };
    }()
    /* @internal */

  }, {
    key: "generateAddress",
    value: function generateAddress(seed, index, security, includeChecksum) {
      var key = iss_1.ISS.key(seed, index, security);
      var digests = iss_1.ISS.digests(key);
      var addressTrits = iss_1.ISS.address(digests);
      var addressTrytesString = trits_1.Trits.fromArray(addressTrits).toTrytes().toString();

      if (includeChecksum) {
        addressTrytesString += addressHelper_1.AddressHelper.createChecksum(addressTrits, 9);
      }

      return address_1.Address.fromTrytes(trytes_1.Trytes.fromString(addressTrytesString));
    }
    /* @internal */

  }, {
    key: "addRemainder",
    value: function () {
      var _addRemainder = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee25(seed, bundle, transferOptions, inputs, signatureMessageFragments, totalValue, tag, addedHMAC) {
        var totalTransferValue, i, timestamp, remainder, startIndex, k, addresses, ts;
        return _regenerator.default.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                totalTransferValue = totalValue;
                i = 0;

              case 2:
                if (!(i < inputs.length)) {
                  _context25.next = 31;
                  break;
                }

                timestamp = Math.floor(this._timeService.msSinceEpoch() / 1000); // Add input as bundle entry

                bundle.addTransactions(inputs[i].security, inputs[i].address, -inputs[i].balance, tag, timestamp); // If there is a remainder value
                // Add extra output to send remaining funds to

                if (!(inputs[i].balance >= totalTransferValue)) {
                  _context25.next = 27;
                  break;
                }

                remainder = inputs[i].balance - totalTransferValue; // If user has provided remainder address use it to send remaining funds to

                if (!(remainder > 0 && !objectHelper_1.ObjectHelper.isEmpty(transferOptions) && objectHelper_1.ObjectHelper.isType(transferOptions.remainderAddress, address_1.Address))) {
                  _context25.next = 12;
                  break;
                }

                // Remainder bundle entry
                bundle.addTransactions(1, transferOptions.remainderAddress, remainder, tag, timestamp); // Final function for signing inputs

                bundleHelper_1.BundleHelper.signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, addedHMAC);
                _context25.next = 25;
                break;

              case 12:
                if (!(remainder > 0)) {
                  _context25.next = 24;
                  break;
                }

                startIndex = 0;

                for (k = 0; k < inputs.length; k++) {
                  startIndex = Math.max(inputs[k].keyIndex, startIndex);
                }

                startIndex++;
                _context25.next = 18;
                return this.getAddressesToUnused(seed, startIndex, false, transferOptions.security);

              case 18:
                addresses = _context25.sent;
                ts = Math.floor(this._timeService.msSinceEpoch() / 1000); // Remainder bundle entry

                bundle.addTransactions(1, addresses[addresses.length - 1], remainder, tag, ts); // Final function for signing inputs

                bundleHelper_1.BundleHelper.signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, addedHMAC);
                _context25.next = 25;
                break;

              case 24:
                // If there is no remainder, do not add transaction to bundle
                // simply sign and return
                bundleHelper_1.BundleHelper.signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, addedHMAC);

              case 25:
                _context25.next = 28;
                break;

              case 27:
                // If multiple inputs provided, subtract the totalTransferValue by
                // the inputs balance
                totalTransferValue -= inputs[i].balance;

              case 28:
                i++;
                _context25.next = 2;
                break;

              case 31:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      return function addRemainder(_x72, _x73, _x74, _x75, _x76, _x77, _x78, _x79) {
        return _addRemainder.apply(this, arguments);
      };
    }()
  }]);

  return TransactionClient;
}();
/* @internal */


TransactionClient.NULL_HASH_TRYTES = "9".repeat(243);
/* @internal */

TransactionClient.MAX_INPUTS = 500;
exports.TransactionClient = TransactionClient;

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "@iota-pico/core/dist/error/coreError":
/*!*******************************************************!*\
  !*** external "@iota-pico/core/dist/error/coreError" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_error_coreError__;

/***/ }),

/***/ "@iota-pico/core/dist/helpers/arrayHelper":
/*!***********************************************************!*\
  !*** external "@iota-pico/core/dist/helpers/arrayHelper" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_arrayHelper__;

/***/ }),

/***/ "@iota-pico/core/dist/helpers/numberHelper":
/*!************************************************************!*\
  !*** external "@iota-pico/core/dist/helpers/numberHelper" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_numberHelper__;

/***/ }),

/***/ "@iota-pico/core/dist/helpers/objectHelper":
/*!************************************************************!*\
  !*** external "@iota-pico/core/dist/helpers/objectHelper" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_objectHelper__;

/***/ }),

/***/ "@iota-pico/core/dist/loggers/nullLogger":
/*!**********************************************************!*\
  !*** external "@iota-pico/core/dist/loggers/nullLogger" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_loggers_nullLogger__;

/***/ }),

/***/ "@iota-pico/core/dist/services/backgroundTaskService":
/*!**********************************************************************!*\
  !*** external "@iota-pico/core/dist/services/backgroundTaskService" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_services_backgroundTaskService__;

/***/ }),

/***/ "@iota-pico/core/dist/services/timeService":
/*!************************************************************!*\
  !*** external "@iota-pico/core/dist/services/timeService" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_services_timeService__;

/***/ }),

/***/ "@iota-pico/crypto/dist/error/cryptoError":
/*!***********************************************************!*\
  !*** external "@iota-pico/crypto/dist/error/cryptoError" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_error_cryptoError__;

/***/ }),

/***/ "@iota-pico/crypto/dist/factories/spongeFactory":
/*!*****************************************************************!*\
  !*** external "@iota-pico/crypto/dist/factories/spongeFactory" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_factories_spongeFactory__;

/***/ }),

/***/ "@iota-pico/crypto/dist/hash/iss":
/*!**************************************************!*\
  !*** external "@iota-pico/crypto/dist/hash/iss" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_hash_iss__;

/***/ }),

/***/ "@iota-pico/crypto/dist/helpers/transactionHelper":
/*!*******************************************************************!*\
  !*** external "@iota-pico/crypto/dist/helpers/transactionHelper" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_crypto_dist_helpers_transactionHelper__;

/***/ }),

/***/ "@iota-pico/data/dist/data/address":
/*!****************************************************!*\
  !*** external "@iota-pico/data/dist/data/address" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_address__;

/***/ }),

/***/ "@iota-pico/data/dist/data/addressSecurity":
/*!************************************************************!*\
  !*** external "@iota-pico/data/dist/data/addressSecurity" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_addressSecurity__;

/***/ }),

/***/ "@iota-pico/data/dist/data/bundle":
/*!***************************************************!*\
  !*** external "@iota-pico/data/dist/data/bundle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_bundle__;

/***/ }),

/***/ "@iota-pico/data/dist/data/hash":
/*!*************************************************!*\
  !*** external "@iota-pico/data/dist/data/hash" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_hash__;

/***/ }),

/***/ "@iota-pico/data/dist/data/input":
/*!**************************************************!*\
  !*** external "@iota-pico/data/dist/data/input" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_input__;

/***/ }),

/***/ "@iota-pico/data/dist/data/signatureMessageFragment":
/*!*********************************************************************!*\
  !*** external "@iota-pico/data/dist/data/signatureMessageFragment" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_signatureMessageFragment__;

/***/ }),

/***/ "@iota-pico/data/dist/data/tag":
/*!************************************************!*\
  !*** external "@iota-pico/data/dist/data/tag" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_tag__;

/***/ }),

/***/ "@iota-pico/data/dist/data/transaction":
/*!********************************************************!*\
  !*** external "@iota-pico/data/dist/data/transaction" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_transaction__;

/***/ }),

/***/ "@iota-pico/data/dist/data/transfer":
/*!*****************************************************!*\
  !*** external "@iota-pico/data/dist/data/transfer" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_transfer__;

/***/ }),

/***/ "@iota-pico/data/dist/data/trits":
/*!**************************************************!*\
  !*** external "@iota-pico/data/dist/data/trits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_trits__;

/***/ }),

/***/ "@iota-pico/data/dist/data/tryteNumber":
/*!********************************************************!*\
  !*** external "@iota-pico/data/dist/data/tryteNumber" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_tryteNumber__;

/***/ }),

/***/ "@iota-pico/data/dist/data/trytes":
/*!***************************************************!*\
  !*** external "@iota-pico/data/dist/data/trytes" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_data_dist_data_trytes__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb0J1c2luZXNzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Jb3RhUGljb0J1c2luZXNzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0lvdGFQaWNvQnVzaW5lc3MvLi4vLi4vc3JjL2Vycm9yL2J1c2luZXNzRXJyb3IudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29CdXNpbmVzcy8uLi8uLi9zcmMvaGVscGVycy9hZGRyZXNzSGVscGVyLnRzIiwid2VicGFjazovL0lvdGFQaWNvQnVzaW5lc3MvLi4vLi4vc3JjL2hlbHBlcnMvYnVuZGxlSGVscGVyLnRzIiwid2VicGFjazovL0lvdGFQaWNvQnVzaW5lc3MvLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0lvdGFQaWNvQnVzaW5lc3MvLi4vLi4vc3JjL211bHRpU2lnL211bHRpU2lnQWRkcmVzcy50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0J1c2luZXNzLy4uLy4uL3NyYy9tdWx0aVNpZy9tdWx0aVNpZ0NsaWVudC50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0J1c2luZXNzLy4uLy4uL3NyYy9zaWduL2htYWNDdXJsLnRzIiwid2VicGFjazovL0lvdGFQaWNvQnVzaW5lc3MvLi4vLi4vc3JjL3RyYW5zYWN0aW9ucy9wcm9vZk9mV29ya0FwaS50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb0J1c2luZXNzLy4uLy4uL3NyYy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25DbGllbnQudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29CdXNpbmVzcy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL0BiYWJlbC9ydW50aW1lLzcuMC4wLWJldGEuNDkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL0lvdGFQaWNvQnVzaW5lc3MvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9yZWdlbmVyYXRvci1ydW50aW1lLzAuMTEuMS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb0J1c2luZXNzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcmVnZW5lcmF0b3ItcnVudGltZS8wLjExLjEvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb0J1c2luZXNzL2V4dGVybmFsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvY29yZUVycm9yXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29CdXNpbmVzcy9leHRlcm5hbCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb0J1c2luZXNzL2V4dGVybmFsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb0J1c2luZXNzL2V4dGVybmFsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb0J1c2luZXNzL2V4dGVybmFsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvbG9nZ2Vycy9udWxsTG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29CdXNpbmVzcy9leHRlcm5hbCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L3NlcnZpY2VzL2JhY2tncm91bmRUYXNrU2VydmljZVwiIiwid2VicGFjazovL0lvdGFQaWNvQnVzaW5lc3MvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9zZXJ2aWNlcy90aW1lU2VydmljZVwiIiwid2VicGFjazovL0lvdGFQaWNvQnVzaW5lc3MvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29CdXNpbmVzcy9leHRlcm5hbCBcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb0J1c2luZXNzL2V4dGVybmFsIFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9oYXNoL2lzc1wiIiwid2VicGFjazovL0lvdGFQaWNvQnVzaW5lc3MvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2hlbHBlcnMvdHJhbnNhY3Rpb25IZWxwZXJcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb0J1c2luZXNzL2V4dGVybmFsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9hZGRyZXNzXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29CdXNpbmVzcy9leHRlcm5hbCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYWRkcmVzc1NlY3VyaXR5XCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29CdXNpbmVzcy9leHRlcm5hbCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYnVuZGxlXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29CdXNpbmVzcy9leHRlcm5hbCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvaGFzaFwiIiwid2VicGFjazovL0lvdGFQaWNvQnVzaW5lc3MvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2lucHV0XCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29CdXNpbmVzcy9leHRlcm5hbCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29CdXNpbmVzcy9leHRlcm5hbCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdGFnXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29CdXNpbmVzcy9leHRlcm5hbCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJhbnNhY3Rpb25cIiIsIndlYnBhY2s6Ly9Jb3RhUGljb0J1c2luZXNzL2V4dGVybmFsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cmFuc2ZlclwiIiwid2VicGFjazovL0lvdGFQaWNvQnVzaW5lc3MvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyaXRzXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29CdXNpbmVzcy9leHRlcm5hbCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVOdW1iZXJcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb0J1c2luZXNzL2V4dGVybmFsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBRUE7Ozs7O0lBR0EsYTs7Ozs7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LFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7Ozs7Ozs7Ozs7OztBQ3R0QkEsa0Y7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEscUY7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEsNEY7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEsOEY7Ozs7Ozs7Ozs7O0FDQUEsK0U7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsOEU7Ozs7Ozs7Ozs7O0FDQUEsNEU7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEsZ0c7Ozs7Ozs7Ozs7O0FDQUEsMkU7Ozs7Ozs7Ozs7O0FDQUEsbUY7Ozs7Ozs7Ozs7O0FDQUEsZ0Y7Ozs7Ozs7Ozs7O0FDQUEsNkU7Ozs7Ozs7Ozs7O0FDQUEsbUY7Ozs7Ozs7Ozs7O0FDQUEsOEUiLCJmaWxlIjoiaW90YS1waWNvLWJ1c2luZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvY29yZUVycm9yXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9sb2dnZXJzL251bGxMb2dnZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9zZXJ2aWNlcy9iYWNrZ3JvdW5kVGFza1NlcnZpY2VcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9zZXJ2aWNlcy90aW1lU2VydmljZVwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZXJyb3IvY3J5cHRvRXJyb3JcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5XCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9oYXNoL2lzc1wiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvaGVscGVycy90cmFuc2FjdGlvbkhlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYWRkcmVzc1wiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYWRkcmVzc1NlY3VyaXR5XCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9idW5kbGVcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2hhc2hcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2lucHV0XCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RhZ1wiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJhbnNhY3Rpb25cIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyYW5zZmVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVOdW1iZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBpb3RhLXBpY28vYnVzaW5lc3NcIiwgW1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvY29yZUVycm9yXCIsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiLCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9sb2dnZXJzL251bGxMb2dnZXJcIiwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9zZXJ2aWNlcy9iYWNrZ3JvdW5kVGFza1NlcnZpY2VcIiwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9zZXJ2aWNlcy90aW1lU2VydmljZVwiLCBcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZXJyb3IvY3J5cHRvRXJyb3JcIiwgXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5XCIsIFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9oYXNoL2lzc1wiLCBcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvaGVscGVycy90cmFuc2FjdGlvbkhlbHBlclwiLCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYWRkcmVzc1wiLCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYWRkcmVzc1NlY3VyaXR5XCIsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9idW5kbGVcIiwgXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2hhc2hcIiwgXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2lucHV0XCIsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRcIiwgXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RhZ1wiLCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJhbnNhY3Rpb25cIiwgXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyYW5zZmVyXCIsIFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiLCBcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVOdW1iZXJcIiwgXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAaW90YS1waWNvL2J1c2luZXNzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvY29yZUVycm9yXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9sb2dnZXJzL251bGxMb2dnZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9zZXJ2aWNlcy9iYWNrZ3JvdW5kVGFza1NlcnZpY2VcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9zZXJ2aWNlcy90aW1lU2VydmljZVwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZXJyb3IvY3J5cHRvRXJyb3JcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5XCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9oYXNoL2lzc1wiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvaGVscGVycy90cmFuc2FjdGlvbkhlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYWRkcmVzc1wiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYWRkcmVzc1NlY3VyaXR5XCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9idW5kbGVcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2hhc2hcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2lucHV0XCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RhZ1wiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJhbnNhY3Rpb25cIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyYW5zZmVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVOdW1iZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiSW90YVBpY29CdXNpbmVzc1wiXSA9IGZhY3Rvcnkocm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2Vycm9yL2NvcmVFcnJvclwiXSwgcm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiXSwgcm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCJdLCByb290W1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvbG9nZ2Vycy9udWxsTG9nZ2VyXCJdLCByb290W1wiQGlvdGEtcGljby9jb3JlL2Rpc3Qvc2VydmljZXMvYmFja2dyb3VuZFRhc2tTZXJ2aWNlXCJdLCByb290W1wiQGlvdGEtcGljby9jb3JlL2Rpc3Qvc2VydmljZXMvdGltZVNlcnZpY2VcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCJdLCByb290W1wiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeVwiXSwgcm9vdFtcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvaGFzaC9pc3NcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2hlbHBlcnMvdHJhbnNhY3Rpb25IZWxwZXJcIl0sIHJvb3RbXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2FkZHJlc3NcIl0sIHJvb3RbXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2FkZHJlc3NTZWN1cml0eVwiXSwgcm9vdFtcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYnVuZGxlXCJdLCByb290W1wiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9oYXNoXCJdLCByb290W1wiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9pbnB1dFwiXSwgcm9vdFtcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XCJdLCByb290W1wiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90YWdcIl0sIHJvb3RbXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyYW5zYWN0aW9uXCJdLCByb290W1wiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cmFuc2ZlclwiXSwgcm9vdFtcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIl0sIHJvb3RbXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlTnVtYmVyXCJdLCByb290W1wiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfZXJyb3JfY29yZUVycm9yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19hcnJheUhlbHBlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2hlbHBlcnNfbnVtYmVySGVscGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19vYmplY3RIZWxwZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9sb2dnZXJzX251bGxMb2dnZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9zZXJ2aWNlc19iYWNrZ3JvdW5kVGFza1NlcnZpY2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9zZXJ2aWNlc190aW1lU2VydmljZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY3J5cHRvX2Rpc3RfZXJyb3JfY3J5cHRvRXJyb3JfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NyeXB0b19kaXN0X2ZhY3Rvcmllc19zcG9uZ2VGYWN0b3J5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jcnlwdG9fZGlzdF9oYXNoX2lzc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY3J5cHRvX2Rpc3RfaGVscGVyc190cmFuc2FjdGlvbkhlbHBlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfYWRkcmVzc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfYWRkcmVzc1NlY3VyaXR5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV9idW5kbGVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2RhdGFfZGlzdF9kYXRhX2hhc2hfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2RhdGFfZGlzdF9kYXRhX2lucHV0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2RhdGFfZGlzdF9kYXRhX3RhZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfdHJhbnNhY3Rpb25fXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2RhdGFfZGlzdF9kYXRhX3RyYW5zZmVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV90cml0c19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfdHJ5dGVOdW1iZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2RhdGFfZGlzdF9kYXRhX3RyeXRlc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kaXN0L2luZGV4LmpzXCIpO1xuIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb3JlRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9jb3JlRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBBIGJ1c2luZXNzIGltcGxlbWVudGF0aW9uIG9mIGFuIGVycm9yLlxyXG4gKi9cclxuY2xhc3MgQnVzaW5lc3NFcnJvciBleHRlbmRzIGNvcmVFcnJvcl8xLkNvcmVFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBCdXNpbmVzc0Vycm9yLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZm9yIHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsIEFkZGl0aW9uYWwgZGV0YWlscyBhYm91dCB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gaW5uZXJFcnJvciBBZGQgaW5mb3JtYXRpb24gZnJvbSBpbm5lciBlcnJvciBpZiB0aGVyZSB3YXMgb25lLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcik7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIkJ1c2luZXNzXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5CdXNpbmVzc0Vycm9yID0gQnVzaW5lc3NFcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWW5WemFXNWxjM05GY25KdmNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5bGNuSnZjaTlpZFhOcGJtVnpjMFZ5Y205eUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN4dlJVRkJhVVU3UVVGRmFrVTdPMGRCUlVjN1FVRkRTQ3h0UWtGQk1rSXNVMEZCVVN4eFFrRkJVenRKUVVONFF6czdPenM3VDBGTFJ6dEpRVU5JTEZsQlFWa3NUMEZCWlN4RlFVRkZMRlZCUVd0RExFVkJRVVVzVlVGQmEwSTdVVUZETDBVc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRka01zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4VlFVRlZMRU5CUVVNN1NVRkROMElzUTBGQlF6dERRVU5LTzBGQldFUXNjME5CVjBNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNwb25nZUZhY3RvcnlfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5XCIpO1xyXG5jb25zdCB0cml0c18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIik7XHJcbi8qKlxyXG4gKiBIZWxwZXIgY2xhc3MgZm9yIGFkZHJlc3Mgc2lnbmluZy5cclxuICogT3JpZ2luYWwgaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvaW90YS5saWIuanMvYmxvYi9tYXN0ZXIvbGliL2NyeXB0by9zaWduaW5nL3NpZ25pbmcuanNcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5jbGFzcyBBZGRyZXNzSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgY2hlY2tzdW0gZm9yIHRoZSB0cml0cy5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gY3JlYXRlIHRoZSBjaGVja3N1bSBmb3IuXHJcbiAgICAgKiBAcGFyYW0gY2hlY2tzdW1MZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgY2hlY2tzdW0uXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY2hlY2tzdW0gYXMgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQ2hlY2tzdW0odHJpdHMsIGNoZWNrc3VtTGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3Qga2VybCA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKFwia2VybFwiKTtcclxuICAgICAgICBrZXJsLmluaXRpYWxpemUoKTtcclxuICAgICAgICBrZXJsLmFic29yYih0cml0cywgMCwgdHJpdHMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBjaGVja3N1bVRyaXRzID0gbmV3IEludDhBcnJheShrZXJsLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIikpO1xyXG4gICAgICAgIGtlcmwuc3F1ZWV6ZShjaGVja3N1bVRyaXRzLCAwLCBjaGVja3N1bVRyaXRzLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIHRyaXRzXzEuVHJpdHMuZnJvbUFycmF5KGNoZWNrc3VtVHJpdHMpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKS5zdWJzdHJpbmcoODEgLSBjaGVja3N1bUxlbmd0aCwgODEpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRkcmVzc0hlbHBlciA9IEFkZHJlc3NIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlXUmtjbVZ6YzBobGJIQmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW9aV3h3WlhKekwyRmtaSEpsYzNOSVpXeHdaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMR3RHUVVFclJUdEJRVU12UlN3eVJFRkJkMFE3UVVGRmVFUTdPenM3UjBGSlJ6dEJRVU5JTzBsQlEwazdPenM3TzA5QlMwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFdEJRV2RDTEVWQlFVVXNZMEZCYzBJN1VVRkRha1VzVFVGQlRTeEpRVUZKTEVkQlFVY3NOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRja1FzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMUZCUld4Q0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZGY0VNc1RVRkJUU3hoUVVGaExFZEJRVWNzU1VGQlNTeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzSkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWVVGQllTeEZRVUZGTEVOQlFVTXNSVUZCUlN4aFFVRmhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRmNrUXNUMEZCVHl4aFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTEVkQlFVY3NZMEZCWXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRMjVITEVOQlFVTTdRMEZEU2p0QlFXeENSQ3h6UTBGclFrTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhcnJheUhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBzcG9uZ2VGYWN0b3J5XzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeVwiKTtcclxuY29uc3QgaXNzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9oYXNoL2lzc1wiKTtcclxuY29uc3QgYWRkcmVzc18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYWRkcmVzc1wiKTtcclxuY29uc3QgYnVuZGxlXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9idW5kbGVcIik7XHJcbmNvbnN0IGhhc2hfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2hhc2hcIik7XHJcbmNvbnN0IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XCIpO1xyXG5jb25zdCB0YWdfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RhZ1wiKTtcclxuY29uc3QgdHJhbnNhY3Rpb25fMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyYW5zYWN0aW9uXCIpO1xyXG5jb25zdCB0cml0c18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIik7XHJcbmNvbnN0IHRyeXRlTnVtYmVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZU51bWJlclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIik7XHJcbmNvbnN0IGhtYWNDdXJsXzEgPSByZXF1aXJlKFwiLi4vc2lnbi9obWFjQ3VybFwiKTtcclxuLyoqXHJcbiAqIEhlbHBlciBjbGFzcyBmb3Igc2lnbmluZyBidW5kbGVzLlxyXG4gKiBDb252ZXJ0ZWQgaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvaW90YS5saWIuanMvYmxvYi9tYXN0ZXIvbGliL2NyeXB0by9zaWduaW5nL3NpZ25pbmcuanNcclxuICovXHJcbmNsYXNzIEJ1bmRsZUhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSBidW5kbGUgdmFsaWQuXHJcbiAgICAgKiBAcGFyYW0gYnVuZGxlIFRoZSBidW5kbGUgdG8gY2hlY2sgZm9yIHZhbGlkaXR5LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgYnVuZGxlIGlzIHZhbGlkLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNWYWxpZChidW5kbGUpIHtcclxuICAgICAgICBsZXQgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGJ1bmRsZSwgYnVuZGxlXzEuQnVuZGxlKSAmJiBhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzVHlwZWQoYnVuZGxlLnRyYW5zYWN0aW9ucywgdHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbikpIHtcclxuICAgICAgICAgICAgbGV0IHRvdGFsU3VtID0gMDtcclxuICAgICAgICAgICAgY29uc3Qga2VybCA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKFwia2VybFwiKTtcclxuICAgICAgICAgICAga2VybC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIC8vIFByZXBhcmUgZm9yIHNpZ25hdHVyZSB2YWxpZGF0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IHNpZ25hdHVyZXNUb1ZhbGlkYXRlID0gW107XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IGJ1bmRsZS50cmFuc2FjdGlvbnMubGVuZ3RoICYmIGlzVmFsaWQ7IHQrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVuZGxlVHggPSBidW5kbGUudHJhbnNhY3Rpb25zW3RdO1xyXG4gICAgICAgICAgICAgICAgdG90YWxTdW0gKz0gYnVuZGxlVHgudmFsdWUudG9OdW1iZXIoKTtcclxuICAgICAgICAgICAgICAgIC8vIGN1cnJlbnRJbmRleCBoYXMgdG8gYmUgZXF1YWwgdG8gdGhlIGluZGV4IGluIHRoZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgaWYgKGJ1bmRsZVR4LmN1cnJlbnRJbmRleC50b051bWJlcigpICE9PSB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSB0cmFuc2FjdGlvbiB0cnl0ZXNcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aGlzVHhUcnl0ZXMgPSBidW5kbGVUeC50b1RyeXRlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFic29yYiBidW5kbGUgaGFzaCArIHZhbHVlICsgdGltZXN0YW1wICsgbGFzdEluZGV4ICsgY3VycmVudEluZGV4IHRyeXRlcy5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aGlzVHhUcml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyh0aGlzVHhUcnl0ZXMuc3ViKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEgsIDE2MikpLnRvQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBrZXJsLmFic29yYih0aGlzVHhUcml0cywgMCwgdGhpc1R4VHJpdHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBpbnB1dCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidW5kbGVUeC52YWx1ZS50b051bWJlcigpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTaWduYXR1cmVUb1ZhbGlkYXRlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogYnVuZGxlVHguYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHM6IFtidW5kbGVUeC5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIHN1YnNlcXVlbnQgdHhzIHdpdGggdGhlIHJlbWFpbmluZyBzaWduYXR1cmUgZnJhZ21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHQ7IGkgPCBidW5kbGUudHJhbnNhY3Rpb25zLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3QnVuZGxlVHggPSBidW5kbGUudHJhbnNhY3Rpb25zW2kgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIG5ldyB0eCBpcyBwYXJ0IG9mIHRoZSBzaWduYXR1cmUgZnJhZ21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdCdW5kbGVUeC5hZGRyZXNzLnRvVHJ5dGVzKCkudG9TdHJpbmcoKSA9PT0gYnVuZGxlVHguYWRkcmVzcy50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBuZXdCdW5kbGVUeC52YWx1ZS50b051bWJlcigpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3U2lnbmF0dXJlVG9WYWxpZGF0ZS5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzLnB1c2gobmV3QnVuZGxlVHguc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduYXR1cmVzVG9WYWxpZGF0ZS5wdXNoKG5ld1NpZ25hdHVyZVRvVmFsaWRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdG90YWwgc3VtLCBpZiBub3QgZXF1YWwgMCByZXR1cm4gZXJyb3JcclxuICAgICAgICAgICAgaWYgKHRvdGFsU3VtICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGJ1bmRsZSBoYXNoIGZyb20gdGhlIGJ1bmRsZSB0cmFuc2FjdGlvbnNcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1bmRsZUZyb21UeHMgPSBuZXcgSW50OEFycmF5KGtlcmwuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKSk7XHJcbiAgICAgICAgICAgICAgICBrZXJsLnNxdWVlemUoYnVuZGxlRnJvbVR4cywgMCwgYnVuZGxlRnJvbVR4cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVuZGxlRnJvbVR4c1RyeXRlcyA9IHRyaXRzXzEuVHJpdHMuZnJvbUFycmF5KGJ1bmRsZUZyb21UeHMpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGJ1bmRsZSBoYXNoIGlzIHRoZSBzYW1lIGFzIHJldHVybmVkIGJ5IHR4IG9iamVjdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVuZGxlSGFzaCA9IGJ1bmRsZS50cmFuc2FjdGlvbnNbMF0uYnVuZGxlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1bmRsZUZyb21UeHNUcnl0ZXMgIT09IGJ1bmRsZUhhc2gudG9Ucnl0ZXMoKS50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTGFzdCB0eCBpbiB0aGUgYnVuZGxlIHNob3VsZCBoYXZlIGN1cnJlbnRJbmRleCA9PT0gbGFzdEluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1bmRsZS50cmFuc2FjdGlvbnNbYnVuZGxlLnRyYW5zYWN0aW9ucy5sZW5ndGggLSAxXS5jdXJyZW50SW5kZXgudG9OdW1iZXIoKSAhPT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVuZGxlLnRyYW5zYWN0aW9uc1tidW5kbGUudHJhbnNhY3Rpb25zLmxlbmd0aCAtIDFdLmxhc3RJbmRleC50b051bWJlcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZhbGlkYXRlIHRoZSBzaWduYXR1cmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2lnbmF0dXJlc1RvVmFsaWRhdGUubGVuZ3RoICYmIGlzVmFsaWQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNpZ25hdHVyZSA9IGlzc18xLklTUy52YWxpZGF0ZVNpZ25hdHVyZXMoc2lnbmF0dXJlc1RvVmFsaWRhdGVbaV0uYWRkcmVzcywgc2lnbmF0dXJlc1RvVmFsaWRhdGVbaV0uc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cywgYnVuZGxlSGFzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRTaWduYXR1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlIHNpZ25hdHVyZXMgZm9yIGVhY2ggb2YgdGhlIGNvLXNpZ25lcnMgaW4gdGhlIG11bHRpLXNpZ25hdHVyZSB0byBpbmRlcGVuZGVudGx5IHZlcmlmeSB0aGF0IGEgZ2VuZXJhdGVkXHJcbiAgICAgKiB0cmFuc2FjdGlvbiB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIHNpZ25hdHVyZXMgb2YgdGhlIGNvLXNpZ25lcnMgaXMgdmFsaWQuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmVkQnVuZGxlIFRoZSBzaWduZWQgYnVuZGxlIHRvIGNoZWNrIHRoZSBzaWduYXR1cmVzLlxyXG4gICAgICogQHBhcmFtIGlucHV0QWRkcmVzcyBUaGUgYWRkcmVzcyB1c2VkIHRvIGluaXRpYXRlIHRoZSB0cmFuc2Zlci5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaXMgdGhlIHNpZ25hdHVyZXMgYXJlIHZhbGlkLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdmFsaWRhdGVTaWduYXR1cmVzKHNpZ25lZEJ1bmRsZSwgaW5wdXRBZGRyZXNzKSB7XHJcbiAgICAgICAgbGV0IGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShzaWduZWRCdW5kbGUsIGJ1bmRsZV8xLkJ1bmRsZSkgJiZcclxuICAgICAgICAgICAgYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc1R5cGVkKHNpZ25lZEJ1bmRsZS50cmFuc2FjdGlvbnMsIHRyYW5zYWN0aW9uXzEuVHJhbnNhY3Rpb24pICYmXHJcbiAgICAgICAgICAgIG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoaW5wdXRBZGRyZXNzLCBhZGRyZXNzXzEuQWRkcmVzcykpIHtcclxuICAgICAgICAgICAgbGV0IGJ1bmRsZUhhc2g7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZ25hdHVyZUZyYWdtZW50cyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dEFkZHJlc3NUcnl0ZXMgPSBpbnB1dEFkZHJlc3MudG9Ucnl0ZXMoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZ25lZEJ1bmRsZS50cmFuc2FjdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzaWduZWRCdW5kbGUudHJhbnNhY3Rpb25zW2ldLmFkZHJlc3MudG9Ucnl0ZXMoKS50b1N0cmluZygpID09PSBpbnB1dEFkZHJlc3NUcnl0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBidW5kbGVIYXNoID0gc2lnbmVkQnVuZGxlLnRyYW5zYWN0aW9uc1tpXS5idW5kbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgd2UgcmVhY2hlZCByZW1haW5kZXIgYnVuZGxlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25lZEJ1bmRsZS50cmFuc2FjdGlvbnNbaV0uc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LnRvVHJ5dGVzKCkudG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkVNUFRZLnRvVHJ5dGVzKCkudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbmF0dXJlRnJhZ21lbnRzLnB1c2goc2lnbmVkQnVuZGxlLnRyYW5zYWN0aW9uc1tpXS5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChidW5kbGVIYXNoKSB7XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNzXzEuSVNTLnZhbGlkYXRlU2lnbmF0dXJlcyhpbnB1dEFkZHJlc3MsIHNpZ25hdHVyZUZyYWdtZW50cywgYnVuZGxlSGFzaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFByZXBhcmUgYSBidW5kbGUuXHJcbiAgICAgKiBAcGFyYW0gdGltZVNlcnZpY2UgVG8gdXNlIGZvciBzdGFtcGluZyB0aGUgdHJhbnNhY3Rpb25zLlxyXG4gICAgICogQHBhcmFtIHRyYW5zZmVycyBUaGUgdHJhbnNmZXJzIHRvIGFkZCB0byB0aGUgYnVuZGxlLlxyXG4gICAgICogQHJldHVybnMgQnVuZGxlIGluZm9ybWF0aW9uLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcHJlcGFyZUJ1bmRsZSh0aW1lU2VydmljZSwgdHJhbnNmZXJzKSB7XHJcbiAgICAgICAgY29uc3QgYnVuZGxlID0gbmV3IGJ1bmRsZV8xLkJ1bmRsZSgpO1xyXG4gICAgICAgIGxldCBsYXN0VGFnO1xyXG4gICAgICAgIGxldCB0b3RhbFZhbHVlID0gMDtcclxuICAgICAgICBjb25zdCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzID0gW107XHJcbiAgICAgICAgLy8gIEl0ZXJhdGUgb3ZlciBhbGwgdHJhbnNmZXJzLCBnZXQgdG90YWxWYWx1ZVxyXG4gICAgICAgIC8vICBhbmQgcHJlcGFyZSB0aGUgTWVzc2FnZXMsIG1lc3NhZ2UgYW5kIHRhZ1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhbnNmZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzaWduYXR1cmVNZXNzYWdlTGVuZ3RoID0gMTtcclxuICAgICAgICAgICAgLy8gSWYgbWVzc2FnZSBsb25nZXIgdGhhbiAyMTg3IHRyeXRlcywgaW5jcmVhc2Ugc2lnbmF0dXJlTWVzc2FnZUxlbmd0aCAoYWRkIDJuZCB0cmFuc2FjdGlvbilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZVN0cmluZyA9IHRyYW5zZmVyc1tpXS5tZXNzYWdlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlU3RyaW5nLmxlbmd0aCA+IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEgpIHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0b3RhbCBsZW5ndGgsIG1lc3NhZ2UgLyBtYXhMZW5ndGggKDIxODcgdHJ5dGVzKVxyXG4gICAgICAgICAgICAgICAgc2lnbmF0dXJlTWVzc2FnZUxlbmd0aCArPSBNYXRoLmZsb29yKG1lc3NhZ2VTdHJpbmcubGVuZ3RoIC8gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbXNnQ29weSA9IG1lc3NhZ2VTdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAvLyBXaGlsZSB0aGVyZSBpcyBzdGlsbCBhIG1lc3NhZ2UsIGNvcHkgaXRcclxuICAgICAgICAgICAgICAgIHdoaWxlIChtc2dDb3B5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZyYWdtZW50ID0gbXNnQ29weS5zbGljZSgwLCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIKTtcclxuICAgICAgICAgICAgICAgICAgICBtc2dDb3B5ID0gbXNnQ29weS5zbGljZShzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RILCBtc2dDb3B5Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFkIHJlbWFpbmRlciBvZiBmcmFnbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBmcmFnbWVudC5sZW5ndGggPCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgKz0gXCI5XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMucHVzaChzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhmcmFnbWVudCkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEVsc2UsIGdldCBzaW5nbGUgZnJhZ21lbnQgd2l0aCAyMTg3IG9mIDkncyB0cnl0ZXNcclxuICAgICAgICAgICAgICAgIGxldCBmcmFnbWVudCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZVN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50ID0gbWVzc2FnZVN0cmluZy5zbGljZSgwLCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBmcmFnbWVudC5sZW5ndGggPCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCArPSBcIjlcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMucHVzaChzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhmcmFnbWVudCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBnZXQgY3VycmVudCB0aW1lc3RhbXAgaW4gc2Vjb25kc1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKHRpbWVTZXJ2aWNlLm1zU2luY2VFcG9jaCgpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIGxhc3RUYWcgPSB0cmFuc2ZlcnNbaV0udGFnO1xyXG4gICAgICAgICAgICAvLyBBZGQgZmlyc3QgZW50cmllcyB0byB0aGUgYnVuZGxlXHJcbiAgICAgICAgICAgIGJ1bmRsZS5hZGRUcmFuc2FjdGlvbnMoc2lnbmF0dXJlTWVzc2FnZUxlbmd0aCwgdHJhbnNmZXJzW2ldLmFkZHJlc3MsIHRyYW5zZmVyc1tpXS52YWx1ZSwgdHJhbnNmZXJzW2ldLnRhZywgdGltZXN0YW1wKTtcclxuICAgICAgICAgICAgLy8gU3VtIHVwIHRvdGFsIHZhbHVlXHJcbiAgICAgICAgICAgIHRvdGFsVmFsdWUgKz0gdHJhbnNmZXJzW2ldLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBidW5kbGUsIHRvdGFsVmFsdWUsIGxhc3RUYWcsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMgfTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2lnbiB0aGUgaW5wdXQgb2YgdGhlIGJ1bmRsZS5cclxuICAgICAqIEBwYXJhbSBzZWVkIFRoZSBzZWVkIHRvIHVzZSBmb3Igc2lnbmluZy5cclxuICAgICAqIEBwYXJhbSBidW5kbGUgVGhlIGJ1bmRsZSB0byBzaWduLlxyXG4gICAgICogQHBhcmFtIHRyYW5zZmVyT3B0aW9ucyBBZGRpdGlvbmFsIHRyYW5zZmVyIG9wdGlvbnMuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cyBUaGUgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ2VtdG5zLlxyXG4gICAgICogQHBhcmFtIGlucHV0cyBUaGUgaW5wdXQgZm9yIHVzZS5cclxuICAgICAqIEBwYXJhbSBhZGRlZEhNQUMgSGFzIGFuIEhNQUMgYmVlbiBhZGRlZC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNpZ25JbnB1dHMoc2VlZCwgYnVuZGxlLCB0cmFuc2Zlck9wdGlvbnMsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMsIGlucHV0cywgYWRkZWRITUFDKSB7XHJcbiAgICAgICAgQnVuZGxlSGVscGVyLmZpbmFsaXplQnVuZGxlKGJ1bmRsZSk7XHJcbiAgICAgICAgYnVuZGxlLmFkZFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cyk7XHJcbiAgICAgICAgLy8gIEhlcmUgd2UgZG8gdGhlIGFjdHVhbCBzaWduaW5nIG9mIHRoZSBpbnB1dHNcclxuICAgICAgICAvLyAgSXRlcmF0ZSBvdmVyIGFsbCBidW5kbGUgdHJhbnNhY3Rpb25zLCBmaW5kIHRoZSBpbnB1dHNcclxuICAgICAgICAvLyAgR2V0IHRoZSBjb3JyZXNwb25kaW5nIHByaXZhdGUga2V5IGFuZCBjYWxjdWxhdGUgdGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVuZGxlLnRyYW5zYWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYnVuZGxlLnRyYW5zYWN0aW9uc1tpXS52YWx1ZS50b051bWJlcigpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWRkcmVzc1RyeXRlcyA9IGJ1bmRsZS50cmFuc2FjdGlvbnNbaV0uYWRkcmVzcy50b1RyeXRlcygpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvcnJlc3BvbmRpbmcga2V5SW5kZXggYW5kIHNlY3VyaXR5IG9mIHRoZSBhZGRyZXNzXHJcbiAgICAgICAgICAgICAgICBsZXQga2V5SW5kZXg7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5U2VjdXJpdHk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGlucHV0cy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dHNba10uYWRkcmVzcy50b1RyeXRlcygpLnRvU3RyaW5nKCkgPT09IGFkZHJlc3NUcnl0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5SW5kZXggPSBpbnB1dHNba10ua2V5SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVNlY3VyaXR5ID0gaW5wdXRzW2tdLnNlY3VyaXR5ID8gaW5wdXRzW2tdLnNlY3VyaXR5IDogdHJhbnNmZXJPcHRpb25zLnNlY3VyaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgY29ycmVzcG9uZGluZyBwcml2YXRlIGtleSBvZiBhZGRyZXNzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBpc3NfMS5JU1Mua2V5KHNlZWQsIGtleUluZGV4LCBrZXlTZWN1cml0eSk7XHJcbiAgICAgICAgICAgICAgICBCdW5kbGVIZWxwZXIuc2lnblRyYW5zYWN0aW9ucyhidW5kbGUsIGksIDAsIGtleSwgYWRkcmVzc1RyeXRlcywga2V5U2VjdXJpdHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhZGRlZEhNQUMpIHtcclxuICAgICAgICAgICAgY29uc3QgaG1hYyA9IG5ldyBobWFjQ3VybF8xLkhtYWNDdXJsKHRyYW5zZmVyT3B0aW9ucy5obWFjS2V5KTtcclxuICAgICAgICAgICAgaG1hYy5hZGRITUFDKGJ1bmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTaWduIHRoZSB0cnNuYWN0aW9uc1xyXG4gICAgICogQHBhcmFtIGJ1bmRsZSBUaGUgYnVuZGxlIG9mIHRyYW5zYWN0aW9ucyB0byBzaWduLlxyXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCB0byBzdGFydC5cclxuICAgICAqIEBwYXJhbSBmaXJzdFVuc2lnbmVkSW5kZXggVGhlIGZpcnN0IHVuc2lnbmVkIGluZGV4LlxyXG4gICAgICogQHBhcmFtIGtleVRyaXRzIFRoZSBrZXkgdHJpdHMuXHJcbiAgICAgKiBAcGFyYW0gYWRkcmVzc1RyeXRlcyBUaGUgYWRkcmVzcyB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gc2VjdXJpdHkgVGhlIHNlY3VyaXR5IGxldmVsLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2lnblRyYW5zYWN0aW9ucyhidW5kbGUsIGluZGV4LCBmaXJzdFVuc2lnbmVkSW5kZXgsIGtleVRyaXRzLCBhZGRyZXNzVHJ5dGVzLCBzZWN1cml0eSkge1xyXG4gICAgICAgIGNvbnN0IGJ1bmRsZUhhc2ggPSBidW5kbGUudHJhbnNhY3Rpb25zW2luZGV4XS5idW5kbGU7XHJcbiAgICAgICAgLy8gIEdldCB0aGUgbm9ybWFsaXplZCBidW5kbGUgaGFzaFxyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRCdW5kbGVIYXNoID0gaXNzXzEuSVNTLm5vcm1hbGl6ZWRCdW5kbGUoYnVuZGxlSGFzaCk7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZEJ1bmRsZUZyYWdtZW50cyA9IFtdO1xyXG4gICAgICAgIC8vIFNwbGl0IGhhc2ggaW50byAzIGZyYWdtZW50c1xyXG4gICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgMzsgbCsrKSB7XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRCdW5kbGVGcmFnbWVudHNbbF0gPSBub3JtYWxpemVkQnVuZGxlSGFzaC5zbGljZShsICogMjcsIChsICsgMSkgKiAyNyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vICBGaXJzdCA2NTYxIHRyaXRzIGZvciB0aGUgZmlyc3RGcmFnbWVudFxyXG4gICAgICAgIGNvbnN0IGZpcnN0RnJhZ21lbnQgPSBrZXlUcml0cy5zbGljZSgwLCA2NTYxKTtcclxuICAgICAgICAvLyAgRmlyc3QgYnVuZGxlIGZyYWdtZW50IHVzZXMgdGhlIGZpcnN0IDI3IHRyeXRlc1xyXG4gICAgICAgIGNvbnN0IGZpcnN0QnVuZGxlRnJhZ21lbnQgPSBub3JtYWxpemVkQnVuZGxlRnJhZ21lbnRzW2ZpcnN0VW5zaWduZWRJbmRleF07XHJcbiAgICAgICAgLy8gIENhbGN1bGF0ZSB0aGUgbmV3IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCB3aXRoIHRoZSBmaXJzdCBidW5kbGUgZnJhZ21lbnRcclxuICAgICAgICBjb25zdCBmaXJzdFNpZ25lZEZyYWdtZW50ID0gaXNzXzEuSVNTLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudChmaXJzdEJ1bmRsZUZyYWdtZW50LCBmaXJzdEZyYWdtZW50KTtcclxuICAgICAgICAvLyAgQ29udmVydCBzaWduYXR1cmUgdG8gdHJ5dGVzIGFuZCBhc3NpZ24gdGhlIG5ldyBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRcclxuICAgICAgICBidW5kbGUudHJhbnNhY3Rpb25zW2luZGV4XS5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuZnJvbVRyeXRlcyh0cml0c18xLlRyaXRzLmZyb21BcnJheShmaXJzdFNpZ25lZEZyYWdtZW50KS50b1RyeXRlcygpKTtcclxuICAgICAgICAvLyBpZiB1c2VyIGNob29zZXMgaGlnaGVyIHRoYW4gMjctdHJ5dGUgc2VjdXJpdHlcclxuICAgICAgICAvLyBmb3IgZWFjaCBzZWN1cml0eSBsZXZlbCwgYWRkIGFuIGFkZGl0aW9uYWwgc2lnbmF0dXJlXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCBzZWN1cml0eTsgaisrKSB7XHJcbiAgICAgICAgICAgIC8vICBCZWNhdXNlIHRoZSBzaWduYXR1cmUgaXMgPiAyMTg3IHRyeXRlcywgd2UgbmVlZCB0b1xyXG4gICAgICAgICAgICAvLyAgZmluZCB0aGUgc3Vic2VxdWVudCB0cmFuc2FjdGlvbiB0byBhZGQgdGhlIHJlbWFpbmRlciBvZiB0aGUgc2lnbmF0dXJlXHJcbiAgICAgICAgICAgIC8vICBTYW1lIGFkZHJlc3MgYXMgd2VsbCBhcyB2YWx1ZSA9IDAgKGFzIHdlIGFscmVhZHkgc3BlbnQgdGhlIGlucHV0KVxyXG4gICAgICAgICAgICBpZiAoYnVuZGxlLnRyYW5zYWN0aW9uc1tpbmRleCArIGpdLmFkZHJlc3MudG9Ucnl0ZXMoKS50b1N0cmluZygpID09PSBhZGRyZXNzVHJ5dGVzXHJcbiAgICAgICAgICAgICAgICAmJiBidW5kbGUudHJhbnNhY3Rpb25zW2luZGV4ICsgal0udmFsdWUudG9OdW1iZXIoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBuZXh0IDY1NjEgdHJpdHNcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRGcmFnbWVudCA9IGtleVRyaXRzLnNsaWNlKDY1NjEgKiBqLCAoaiArIDEpICogNjU2MSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0QnVuZGxlRnJhZ21lbnQgPSBub3JtYWxpemVkQnVuZGxlRnJhZ21lbnRzW2pdO1xyXG4gICAgICAgICAgICAgICAgLy8gIENhbGN1bGF0ZSB0aGUgbmV3IHNpZ25hdHVyZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFNpZ25lZEZyYWdtZW50ID0gaXNzXzEuSVNTLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudChuZXh0QnVuZGxlRnJhZ21lbnQsIG5leHRGcmFnbWVudCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgQ29udmVydCBzaWduYXR1cmUgdG8gdHJ5dGVzIGFuZCBhc3NpZ24gaXQgYWdhaW4gdG8gdGhpcyBidW5kbGUgZW50cnlcclxuICAgICAgICAgICAgICAgIGJ1bmRsZS50cmFuc2FjdGlvbnNbaW5kZXggKyBqXS5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuZnJvbVRyeXRlcyh0cml0c18xLlRyaXRzLmZyb21BcnJheShuZXh0U2lnbmVkRnJhZ21lbnQpLnRvVHJ5dGVzKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5hbGl6ZSBhIGJ1bmRsZS5cclxuICAgICAqIEBwYXJhbSBidW5kbGUgVGhlIGJ1bmRsZSB0byBmaW5hbGl6ZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZpbmFsaXplQnVuZGxlKGJ1bmRsZSkge1xyXG4gICAgICAgIGlmIChidW5kbGUudHJhbnNhY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHZhbGlkQnVuZGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHdoaWxlICghdmFsaWRCdW5kbGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtlcmwgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShcImtlcmxcIik7XHJcbiAgICAgICAgICAgICAgICBrZXJsLmluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVuZGxlLnRyYW5zYWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bmRsZS50cmFuc2FjdGlvbnNbaV0uY3VycmVudEluZGV4ID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bmRsZS50cmFuc2FjdGlvbnNbaV0ubGFzdEluZGV4ID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKGJ1bmRsZS50cmFuc2FjdGlvbnMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6cmVzdHJpY3QtcGx1cy1vcGVyYW5kcyBmYWxzZSBwb3NpdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1bmRsZUVzc2VuY2UgPSB0cml0c18xLlRyaXRzLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoYnVuZGxlLnRyYW5zYWN0aW9uc1tpXS5hZGRyZXNzLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIGJ1bmRsZS50cmFuc2FjdGlvbnNbaV0udmFsdWUudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgdHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbi5DSEVDS19WQUxVRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIGJ1bmRsZS50cmFuc2FjdGlvbnNbaV0ub2Jzb2xldGVUYWcudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYnVuZGxlLnRyYW5zYWN0aW9uc1tpXS50aW1lc3RhbXAudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYnVuZGxlLnRyYW5zYWN0aW9uc1tpXS5jdXJyZW50SW5kZXgudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYnVuZGxlLnRyYW5zYWN0aW9uc1tpXS5sYXN0SW5kZXgudG9Ucnl0ZXMoKS50b1N0cmluZygpKSkudG9BcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGtlcmwuYWJzb3JiKGJ1bmRsZUVzc2VuY2UsIDAsIGJ1bmRsZUVzc2VuY2UubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc2hUcml0cyA9IG5ldyBJbnQ4QXJyYXkoa2VybC5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpKTtcclxuICAgICAgICAgICAgICAgIGtlcmwuc3F1ZWV6ZShoYXNoVHJpdHMsIDAsIGhhc2hUcml0cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFzaCA9IGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJpdHNfMS5Ucml0cy5mcm9tQXJyYXkoaGFzaFRyaXRzKS50b1RyeXRlcygpKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVuZGxlLnRyYW5zYWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bmRsZS50cmFuc2FjdGlvbnNbaV0uYnVuZGxlID0gaGFzaDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRIYXNoID0gaXNzXzEuSVNTLm5vcm1hbGl6ZWRCdW5kbGUoaGFzaCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9ybWFsaXplZEhhc2guaW5kZXhPZigxMyAvKiA9IE0gKi8pICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEluc2VjdXJlIGJ1bmRsZS4gSW5jcmVtZW50IFRhZyBhbmQgcmVjb21wdXRlIGJ1bmRsZSBoYXNoLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluY3JlYXNlZFRhZyA9IHRyaXRzXzEuVHJpdHMuYWRkKHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyhidW5kbGUudHJhbnNhY3Rpb25zWzBdLm9ic29sZXRlVGFnLnRvVHJ5dGVzKCkpLCB0cml0c18xLlRyaXRzLmZyb21OdW1iZXJBcnJheShbMV0pKTtcclxuICAgICAgICAgICAgICAgICAgICBidW5kbGUudHJhbnNhY3Rpb25zWzBdLm9ic29sZXRlVGFnID0gdGFnXzEuVGFnLmZyb21Ucnl0ZXMoaW5jcmVhc2VkVGFnLnRvVHJ5dGVzKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRCdW5kbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkJ1bmRsZUhlbHBlci5OVU1CRVJfT0ZfRlJBR01FTlRfQ0hVTktTID0gMjc7XHJcbmV4cG9ydHMuQnVuZGxlSGVscGVyID0gQnVuZGxlSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZblZ1Wkd4bFNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZZblZ1Wkd4bFNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3d3UlVGQmRVVTdRVUZEZGtVc05FVkJRWGxGTzBGQlJYcEZMR3RHUVVFclJUdEJRVU12UlN4NVJFRkJjMFE3UVVGRGRFUXNLMFJCUVRSRU8wRkJSVFZFTERaRVFVRXdSRHRCUVVNeFJDeDVSRUZCYzBRN1FVRkZkRVFzYVVkQlFUaEdPMEZCUXpsR0xIVkVRVUZ2UkR0QlFVTndSQ3gxUlVGQmIwVTdRVUZGY0VVc01rUkJRWGRFTzBGQlEzaEVMSFZGUVVGdlJUdEJRVU53UlN3MlJFRkJNRVE3UVVGRE1VUXNLME5CUVRSRE8wRkJSelZET3pzN1IwRkhSenRCUVVOSU8wbEJSMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCWXp0UlFVTm9ReXhKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZGY0VJc1NVRkJTU3d5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1pVRkJUU3hEUVVGRExFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExGbEJRVmtzUlVGQlJTeDVRa0ZCVnl4RFFVRkRMRVZCUVVVN1dVRkRPVVlzU1VGQlNTeFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUldwQ0xFMUJRVTBzU1VGQlNTeEhRVUZITERaQ1FVRmhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMWxCUTNKRUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0WlFVVnNRaXh0UTBGQmJVTTdXVUZEYmtNc1RVRkJUU3h2UWtGQmIwSXNSMEZCYTBZc1JVRkJSU3hEUVVGRE8xbEJSUzlITEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNN1dVRkRaaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eE5RVUZOTEVsQlFVa3NUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU0xUkN4TlFVRk5MRkZCUVZFc1IwRkJSeXhOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVONFF5eFJRVUZSTEVsQlFVa3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dG5Ra0ZGZEVNc2VVUkJRWGxFTzJkQ1FVTjZSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RlFVRkZMRXRCUVVzc1EwRkJReXhGUVVGRk8yOUNRVU40UXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRE8ybENRVU51UWp0eFFrRkJUVHR2UWtGRFNDdzJRa0ZCTmtJN2IwSkJRemRDTEUxQlFVMHNXVUZCV1N4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dHZRa0ZGZWtNc05FVkJRVFJGTzI5Q1FVTTFSU3hOUVVGTkxGZEJRVmNzUjBGQlJ5eGhRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zYlVSQlFYZENMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN2IwSkJRM1pITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUlVGQlJTeFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN2IwSkJSV2hFTERaQ1FVRTJRanR2UWtGRE4wSXNTVUZCU1N4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlR0M1FrRkRMMElzVFVGQlRTeHpRa0ZCYzBJc1IwRkJaMFk3TkVKQlEzaEhMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zVDBGQlR6czBRa0ZEZWtJc2VVSkJRWGxDTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTTdlVUpCUTJwRkxFTkJRVU03ZDBKQlJVWXNaMFZCUVdkRk8zZENRVU5vUlN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPelJDUVVOeVJDeE5RVUZOTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXpzMFFrRkZMME1zYjBSQlFXOUVPelJDUVVOd1JDeEpRVUZKTEZkQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEV0QlFVc3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdiVU5CUTJwR0xGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZMRXRCUVVzc1EwRkJReXhGUVVGRk8yZERRVU4yUXl4elFrRkJjMElzUTBGQlF5eDVRa0ZCZVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEhkQ1FVRjNRaXhEUVVGRExFTkJRVU03TmtKQlF5OUdPM2xDUVVOS08zZENRVVZFTEc5Q1FVRnZRaXhEUVVGRExFbEJRVWtzUTBGQlF5eHpRa0ZCYzBJc1EwRkJReXhEUVVGRE8zRkNRVU55UkR0cFFrRkRTanRoUVVOS08xbEJSVVFzYlVSQlFXMUVPMWxCUTI1RUxFbEJRVWtzVVVGQlVTeExRVUZMTEVOQlFVTXNSVUZCUlR0blFrRkRhRUlzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXp0aFFVTnVRanRwUWtGQlRUdG5Ra0ZEU0N4dFJFRkJiVVE3WjBKQlEyNUVMRTFCUVUwc1lVRkJZU3hIUVVGSExFbEJRVWtzVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEY2tVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVWQlFVVXNRMEZCUXl4RlFVRkZMR0ZCUVdFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dG5Ra0ZGY2tRc1RVRkJUU3h0UWtGQmJVSXNSMEZCUnl4aFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8yZENRVVZxUml3MFJFRkJORVE3WjBKQlF6VkVMRTFCUVUwc1ZVRkJWU3hIUVVGSExFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRE8yZENRVU5xUkN4SlFVRkpMRzFDUVVGdFFpeExRVUZMTEZWQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJUdHZRa0ZETVVRc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF6dHBRa0ZEYmtJN2NVSkJRVTA3YjBKQlEwZ3NLMFJCUVN0RU8yOUNRVU12UkN4SlFVRkpMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEZGQlFWRXNSVUZCUlR0M1FrRkRka1VzVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVU3ZDBKQlF6bEZMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU03Y1VKQlEyNUNPM2xDUVVGTk8zZENRVU5JTERCQ1FVRXdRanQzUWtGRE1VSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEc5Q1FVRnZRaXhEUVVGRExFMUJRVTBzU1VGQlNTeFBRVUZQTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN05FSkJRemRFTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzVTBGQlJ5eERRVUZETEd0Q1FVRnJRaXhEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUlVGREwwSXNiMEpCUVc5Q0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNlVUpCUVhsQ0xFVkJRMnBFTEZWQlFWVXNRMEZCUXl4RFFVRkRPelJDUVVVMVJDeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVU3WjBOQlEyNUNMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU03TmtKQlEyNUNPM2xDUVVOS08zRkNRVU5LTzJsQ1FVTktPMkZCUTBvN1UwRkRTanRSUVVWRUxFOUJRVThzVDBGQlR5eERRVUZETzBsQlEyNUNMRU5CUVVNN1NVRkZSRHM3T3pzN08wOUJUVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zV1VGQmIwSXNSVUZCUlN4WlFVRnhRanRSUVVONFJTeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkRjRUlzU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhaUVVGWkxFVkJRVVVzWlVGQlRTeERRVUZETzFsQlEzcERMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4WlFVRlpMRVZCUVVVc2VVSkJRVmNzUTBGQlF6dFpRVU16UkN3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eFpRVUZaTEVWQlFVVXNhVUpCUVU4c1EwRkJReXhGUVVGRk8xbEJRelZETEVsQlFVa3NWVUZCVlN4RFFVRkRPMWxCUTJZc1RVRkJUU3hyUWtGQmEwSXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRPVUlzVFVGQlRTeHJRa0ZCYTBJc1IwRkJSeXhaUVVGWkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1dVRkZPVVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGbEJRVmtzUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU4yUkN4SlFVRkpMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJTeExRVUZMTEd0Q1FVRnJRaXhGUVVGRk8yOUNRVU51Uml4VlFVRlZMRWRCUVVjc1dVRkJXU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNN2IwSkJSV3BFTEdsRFFVRnBRenR2UWtGRGFrTXNTVUZCU1N4WlFVRlpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEhkQ1FVRjNRaXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0M1FrRkRNMFVzYlVSQlFYZENMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZPM2RDUVVOMFJDeE5RVUZOTzNGQ1FVTlVPMjlDUVVWRUxHdENRVUZyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMSGRDUVVGM1FpeERRVUZETEVOQlFVTTdhVUpCUTJ4R08yRkJRMG83V1VGRlJDeEpRVUZKTEZWQlFWVXNSVUZCUlR0blFrRkRXaXhQUVVGUExFZEJRVWNzVTBGQlJ5eERRVUZETEd0Q1FVRnJRaXhEUVVGRExGbEJRVmtzUlVGQlJTeHJRa0ZCYTBJc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dGhRVU5zUmp0VFFVTktPMUZCUlVRc1QwRkJUeXhQUVVGUExFTkJRVU03U1VGRGJrSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExHRkJRV0VzUTBGQlF5eFhRVUY1UWl4RlFVRkZMRk5CUVhGQ08xRkJSWGhGTEUxQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1pVRkJUU3hGUVVGRkxFTkJRVU03VVVGRE5VSXNTVUZCU1N4UFFVRlpMRU5CUVVNN1VVRkZha0lzU1VGQlNTeFZRVUZWTEVkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUXpOQ0xFMUJRVTBzZVVKQlFYbENMRWRCUVN0Q0xFVkJRVVVzUTBGQlF6dFJRVVZxUlN3NFEwRkJPRU03VVVGRE9VTXNOa05CUVRaRE8xRkJRemRETEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM1pETEVsQlFVa3NjMEpCUVhOQ0xFZEJRVWNzUTBGQlF5eERRVUZETzFsQlJTOUNMRFJHUVVFMFJqdFpRVU0xUml4TlFVRk5MR0ZCUVdFc1IwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xbEJRM1JFTEVsQlFVa3NZVUZCWVN4RFFVRkRMRTFCUVUwc1IwRkJSeXh0UkVGQmQwSXNRMEZCUXl4TlFVRk5MRVZCUVVVN1owSkJRM2hFTEhORVFVRnpSRHRuUWtGRGRFUXNjMEpCUVhOQ0xFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4aFFVRmhMRU5CUVVNc1RVRkJUU3hIUVVGSExHMUVRVUYzUWl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8yZENRVVUzUml4SlFVRkpMRTlCUVU4c1IwRkJSeXhoUVVGaExFTkJRVU03WjBKQlJUVkNMREJEUVVFd1F6dG5Ra0ZETVVNc1QwRkJUeXhQUVVGUExFVkJRVVU3YjBKQlExb3NTVUZCU1N4UlFVRlJMRWRCUVVjc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNiVVJCUVhkQ0xFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdiMEpCUTJwRkxFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRzFFUVVGM1FpeERRVUZETEUxQlFVMHNSVUZCUlN4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03YjBKQlJYcEZMRFJDUVVFMFFqdHZRa0ZETlVJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNVVUZCVVN4RFFVRkRMRTFCUVUwc1IwRkJSeXh0UkVGQmQwSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3ZDBKQlEzQkZMRkZCUVZFc1NVRkJTU3hIUVVGSExFTkJRVU03Y1VKQlEyNUNPMjlDUVVWRUxIbENRVUY1UWl4RFFVRkRMRWxCUVVrc1EwRkJReXh0UkVGQmQwSXNRMEZCUXl4VlFVRlZMRU5CUVVNc1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRM0JITzJGQlEwbzdhVUpCUVUwN1owSkJRMGdzYjBSQlFXOUVPMmRDUVVOd1JDeEpRVUZKTEZGQlFWRXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJSV3hDTEVsQlFVa3NZVUZCWVN4RlFVRkZPMjlDUVVObUxGRkJRVkVzUjBGQlJ5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3h0UkVGQmQwSXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRwUWtGRGRFVTdaMEpCUlVRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNVVUZCVVN4RFFVRkRMRTFCUVUwc1IwRkJSeXh0UkVGQmQwSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3YjBKQlEzQkZMRkZCUVZFc1NVRkJTU3hIUVVGSExFTkJRVU03YVVKQlEyNUNPMmRDUVVWRUxIbENRVUY1UWl4RFFVRkRMRWxCUVVrc1EwRkJReXh0UkVGQmQwSXNRMEZCUXl4VlFVRlZMRU5CUVVNc1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRjRWM3V1VGRlJDeHRRMEZCYlVNN1dVRkRia01zVFVGQlRTeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zV1VGQldTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkZhRVVzVDBGQlR5eEhRVUZITEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU03V1VGRk0wSXNhME5CUVd0RE8xbEJRMnhETEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVVNc2MwSkJRWE5DTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRmRFZ3NjVUpCUVhGQ08xbEJRM0pDTEZWQlFWVXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETzFOQlEzQkRPMUZCUlVRc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeFZRVUZWTEVWQlFVVXNUMEZCVHl4RlFVRkZMSGxDUVVGNVFpeEZRVUZGTEVOQlFVTTdTVUZEZEVVc1EwRkJRenRKUVVWRU96czdPenM3T3p0UFFWRkhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZWTEVWQlExWXNUVUZCWXl4RlFVTmtMR1ZCUVdkRExFVkJRMmhETEhsQ1FVRnhSQ3hGUVVOeVJDeE5RVUZsTEVWQlEyWXNVMEZCYTBJN1VVRkRka01zV1VGQldTeERRVUZETEdOQlFXTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOd1F5eE5RVUZOTEVOQlFVTXNORUpCUVRSQ0xFTkJRVU1zZVVKQlFYbENMRU5CUVVNc1EwRkJRenRSUVVVdlJDd3JRMEZCSzBNN1VVRkRMME1zZVVSQlFYbEVPMUZCUTNwRUxHZEdRVUZuUmp0UlFVTm9SaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRha1FzU1VGQlNTeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRemRETEUxQlFVMHNZVUZCWVN4SFFVRkhMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzJkQ1FVVXpSU3cyUkVGQk5rUTdaMEpCUXpkRUxFbEJRVWtzVVVGQlVTeERRVUZETzJkQ1FVTmlMRWxCUVVrc1YwRkJWeXhEUVVGRE8yZENRVU5vUWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdHZRa0ZGY0VNc1NVRkJTU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJTeExRVUZMTEdGQlFXRXNSVUZCUlR0M1FrRkZNMFFzVVVGQlVTeEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU03ZDBKQlF6bENMRmRCUVZjc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhsUVVGbExFTkJRVU1zVVVGQlVTeERRVUZETzNkQ1FVTnFSaXhOUVVGTk8zRkNRVU5VTzJsQ1FVTktPMmRDUVVWRUxESkRRVUV5UXp0blFrRkRNME1zVFVGQlRTeEhRVUZITEVkQlFVY3NVMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzVVVGQlVTeEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPMmRDUVVWcVJDeFpRVUZaTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxHRkJRV0VzUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXp0aFFVTm9SanRUUVVOS08xRkJSVVFzU1VGQlNTeFRRVUZUTEVWQlFVVTdXVUZEV0N4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxHMUNRVUZSTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xbEJRMjVFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VTBGRGVFSTdTVUZEVEN4RFFVRkRPMGxCUlVRN096czdPenM3TzA5QlVVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNUVUZCWXl4RlFVRkZMRXRCUVdFc1JVRkJSU3hyUWtGQk1FSXNSVUZCUlN4UlFVRnRRaXhGUVVGRkxHRkJRWEZDTEVWQlFVVXNVVUZCZVVJN1VVRkRNMG9zVFVGQlRTeFZRVUZWTEVkQlFVY3NUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZGY2tRc2EwTkJRV3RETzFGQlEyeERMRTFCUVUwc2IwSkJRVzlDTEVkQlFVY3NVMEZCUnl4RFFVRkRMR2RDUVVGblFpeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUXpsRUxFMUJRVTBzZVVKQlFYbENMRWRCUVdkQ0xFVkJRVVVzUTBGQlF6dFJRVVZzUkN3NFFrRkJPRUk3VVVGRE9VSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVONFFpeDVRa0ZCZVVJc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eHZRa0ZCYjBJc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTnVSanRSUVVWRUxEQkRRVUV3UXp0UlFVTXhReXhOUVVGTkxHRkJRV0VzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVVU1UXl4clJFRkJhMFE3VVVGRGJFUXNUVUZCVFN4dFFrRkJiVUlzUjBGQlJ5eDVRa0ZCZVVJc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMUZCUlRGRkxEWkZRVUUyUlR0UlFVTTNSU3hOUVVGTkxHMUNRVUZ0UWl4SFFVRkhMRk5CUVVjc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4dFFrRkJiVUlzUlVGQlJTeGhRVUZoTEVOQlFVTXNRMEZCUXp0UlFVVTNSaXd5UlVGQk1rVTdVVUZETTBVc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4M1FrRkJkMElzUjBGQlJ5eHRSRUZCZDBJc1EwRkJReXhWUVVGVkxFTkJRVU1zWVVGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkZNMGtzWjBSQlFXZEVPMUZCUTJoRUxIVkVRVUYxUkR0UlFVTjJSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlJTOUNMSE5FUVVGelJEdFpRVU4wUkN4NVJVRkJlVVU3V1VGRGVrVXNjVVZCUVhGRk8xbEJRM0pGTEVsQlFVa3NUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJTeExRVUZMTEdGQlFXRTdiVUpCUTNSRkxFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJSUzlFTERCQ1FVRXdRanRuUWtGRE1VSXNUVUZCVFN4WlFVRlpMRWRCUVVjc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVVNVJDeE5RVUZOTEd0Q1FVRnJRaXhIUVVGSExIbENRVUY1UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVVY0UkN3clFrRkJLMEk3WjBKQlF5OUNMRTFCUVUwc2EwSkJRV3RDTEVkQlFVY3NVMEZCUnl4RFFVRkRMSGRDUVVGM1FpeERRVUZETEd0Q1FVRnJRaXhGUVVGRkxGbEJRVmtzUTBGQlF5eERRVUZETzJkQ1FVVXhSaXgzUlVGQmQwVTdaMEpCUTNoRkxFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExIZENRVUYzUWl4SFFVRkhMRzFFUVVGM1FpeERRVUZETEZWQlFWVXNRMEZCUXl4aFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExHdENRVUZyUWl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dGhRVU5xU2p0VFFVTktPMGxCUTB3c1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQll6dFJRVU4yUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTm9ReXhKUVVGSkxGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTTdXVUZGZUVJc1QwRkJUeXhEUVVGRExGZEJRVmNzUlVGQlJUdG5Ra0ZGYWtJc1RVRkJUU3hKUVVGSkxFZEJRVWNzTmtKQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdaMEpCUTNKRUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0blFrRkZiRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yOUNRVU5xUkN4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NSMEZCUnl4NVFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0dlFrRkRhRVVzVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJSVEZHTEhWRVFVRjFSRHR2UWtGRGRrUXNUVUZCVFN4aFFVRmhMRWRCUVVjc1lVRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVTndSQ3hOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdNRUpCUTJ4RUxFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlRzd1FrRkRiRVFzZVVKQlFWY3NRMEZCUXl4WFFVRlhPekJDUVVOMlFpeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN01FSkJRM2hFTEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHN3UWtGRGRFUXNUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk96QkNRVU42UkN4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGRE0wUXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yOUNRVU5pTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1lVRkJZU3hGUVVGRkxFTkJRVU1zUlVGQlJTeGhRVUZoTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN2FVSkJRM1pFTzJkQ1FVVkVMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEYWtVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RlFVRkZMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dG5Ra0ZGTjBNc1RVRkJUU3hKUVVGSkxFZEJRVWNzVjBGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4aFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRM0JGTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdHZRa0ZEYWtRc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8ybENRVU40UXp0blFrRkZSQ3hOUVVGTkxHTkJRV01zUjBGQlJ5eFRRVUZITEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUTJ4RUxFbEJRVWtzWTBGQll5eERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVTdiMEpCUXpkRExEUkVRVUUwUkR0dlFrRkROVVFzVFVGQlRTeFpRVUZaTEVkQlFVY3NZVUZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhoUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRVZCUVVVc1lVRkJTeXhEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenR2UWtGRE5VZ3NUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVkQlFVY3NVMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0cFFrRkRhRVk3Y1VKQlFVMDdiMEpCUTBnc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF6dHBRa0ZEZEVJN1lVRkRTanRUUVVOS08wbEJRMHdzUTBGQlF6czdRVUYyVjNOQ0xITkRRVUY1UWl4SFFVRlhMRVZCUVVVc1EwRkJRenRCUVVSc1JTeHZRMEY1VjBNaWZRPT0iLCJmdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ29tYmluZWQgaW5kZXggb2YgYWxsIHRoZSBtb2R1bGVzLlxyXG4gKi9cclxuX19leHBvcnQocmVxdWlyZShcIi4vZXJyb3IvYnVzaW5lc3NFcnJvclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvYWRkcmVzc0hlbHBlclwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2hlbHBlcnMvYnVuZGxlSGVscGVyXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbXVsdGlTaWcvbXVsdGlTaWdBZGRyZXNzXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vbXVsdGlTaWcvbXVsdGlTaWdDbGllbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zaWduL2htYWNDdXJsXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uQ2xpZW50XCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRIUVVWSE8wRkJRMGdzTWtOQlFYTkRPMEZCUTNSRExEWkRRVUYzUXp0QlFVTjRReXcwUTBGQmRVTTdRVUZGZGtNc1owUkJRVEpETzBGQlF6TkRMQ3REUVVFd1F6dEJRVU14UXl4eFEwRkJaME03UVVGRGFFTXNjMFJCUVdsRUluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IHNwb25nZUZhY3RvcnlfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5XCIpO1xyXG5jb25zdCBhZGRyZXNzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9hZGRyZXNzXCIpO1xyXG5jb25zdCB0cml0c18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCIpO1xyXG5jb25zdCBidXNpbmVzc0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvYnVzaW5lc3NFcnJvclwiKTtcclxuLyoqXHJcbiAqIEFkZHJlc3MgdXNpbmcgbXVsdGlwbGUgc2lnbmF0dXJlcy5cclxuICovXHJcbmNsYXNzIE11bHRpU2lnQWRkcmVzcyB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgTXVsdGlTaWdBZGRyZXNzLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9rZXJsID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoXCJrZXJsXCIpO1xyXG4gICAgICAgIHRoaXMuX2hhc2hMZW5ndGggPSB0aGlzLl9rZXJsLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgdGhpcy5fa2VybC5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFic29yYiBrZXkgZGlnZXN0cy5cclxuICAgICAqIEBwYXJhbSBkaWdlc3RzIFRoZSBkaWdlc3RzIGhhc2hlcyB0byBhYnNvcmIuXHJcbiAgICAgKi9cclxuICAgIGFic29yYihkaWdlc3RzKSB7XHJcbiAgICAgICAgaWYgKCFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzVHlwZWQoZGlnZXN0cywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgZGlnZXN0cyBzaG91bGQgYmUgYW4gYXJyYXkgb2YgdHlwZSBUcnl0ZXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlnZXN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkaWdlc3RUcml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyhkaWdlc3RzW2ldKS50b0FycmF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2tlcmwuYWJzb3JiKGRpZ2VzdFRyaXRzLCAwLCBkaWdlc3RUcml0cy5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRmluYWxpemVzIGFuZCByZXR1cm5zIHRoZSBtdWx0aXNpZyBhZGRyZXNzIGluIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBkaWdlc3RzIFRoZSBmaW5hbCBkaWdlc3RzIGhhc2hlcyB0byBhYnNvcmIuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbXVsdGkgc2lnbmF0dXJlIGFkZHJlc3MuXHJcbiAgICAgKi9cclxuICAgIGZpbmFsaXplKGRpZ2VzdHMpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KGRpZ2VzdHMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWJzb3JiKGRpZ2VzdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhZGRyZXNzVHJpdHMgPSBuZXcgSW50OEFycmF5KHRoaXMuX2hhc2hMZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuX2tlcmwuc3F1ZWV6ZShhZGRyZXNzVHJpdHMsIDAsIGFkZHJlc3NUcml0cy5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBhZGRyZXNzXzEuQWRkcmVzcy5mcm9tVHJ5dGVzKHRyaXRzXzEuVHJpdHMuZnJvbUFycmF5KGFkZHJlc3NUcml0cykudG9Ucnl0ZXMoKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NdWx0aVNpZ0FkZHJlc3MgPSBNdWx0aVNpZ0FkZHJlc3M7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJYVnNkR2xUYVdkQlpHUnlaWE56TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMjExYkhScFUybG5MMjExYkhScFUybG5RV1JrY21WemN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc01FVkJRWFZGTzBGQlEzWkZMRFJGUVVGNVJUdEJRVU42UlN4clJrRkJLMFU3UVVGRkwwVXNLMFJCUVRSRU8wRkJRelZFTERKRVFVRjNSRHRCUVVONFJDdzJSRUZCTUVRN1FVRkRNVVFzTUVSQlFYVkVPMEZCUlhaRU96dEhRVVZITzBGQlEwZzdTVUZQU1RzN1QwRkZSenRKUVVOSU8xRkJRMGtzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl3MlFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOeVJDeEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMUZCUTNwRUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1NVRkROVUlzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZwUWp0UlFVTXpRaXhKUVVGSkxFTkJRVU1zZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxHVkJRVTBzUTBGQlF5eEZRVUZGTzFsQlEzWkRMRTFCUVUwc1NVRkJTU3cyUWtGQllTeERRVUZETEN0RFFVRXJReXhEUVVGRExFTkJRVU03VTBGRE5VVTdVVUZEUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU55UXl4TlFVRk5MRmRCUVZjc1IwRkJSeXhoUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFsQlJUTkVMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFOQlEzcEVPMGxCUTB3c1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hSUVVGUkxFTkJRVU1zVDBGQmEwSTdVVUZET1VJc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRk8xbEJRMmhETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VTBGRGVFSTdVVUZGUkN4TlFVRk5MRmxCUVZrc1IwRkJSeXhKUVVGSkxGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkRja1FzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU1zUlVGQlJTeFpRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkZla1FzVDBGQlR5eHBRa0ZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhoUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRGVFVXNRMEZCUXp0RFFVTktPMEZCT1VORUxEQkRRVGhEUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYXJyYXlIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL2FycmF5SGVscGVyXCIpO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IHRpbWVTZXJ2aWNlXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3Qvc2VydmljZXMvdGltZVNlcnZpY2VcIik7XHJcbmNvbnN0IGlzc18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvaGFzaC9pc3NcIik7XHJcbmNvbnN0IGFkZHJlc3NfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2FkZHJlc3NcIik7XHJcbmNvbnN0IGJ1bmRsZV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYnVuZGxlXCIpO1xyXG5jb25zdCBoYXNoXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9oYXNoXCIpO1xyXG5jb25zdCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudFwiKTtcclxuY29uc3QgdGFnXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90YWdcIik7XHJcbmNvbnN0IHRyYW5zYWN0aW9uXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cmFuc2FjdGlvblwiKTtcclxuY29uc3QgdHJhbnNmZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyYW5zZmVyXCIpO1xyXG5jb25zdCB0cml0c18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCIpO1xyXG5jb25zdCBidXNpbmVzc0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvYnVzaW5lc3NFcnJvclwiKTtcclxuY29uc3QgYnVuZGxlSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9idW5kbGVIZWxwZXJcIik7XHJcbmNvbnN0IG11bHRpU2lnQWRkcmVzc18xID0gcmVxdWlyZShcIi4vbXVsdGlTaWdBZGRyZXNzXCIpO1xyXG4vKipcclxuICogTXVsdGlwbGUgc2lnbmF0dXJlcy5cclxuICogQ29udmVydGVkIGh0dHBzOi8vZ2l0aHViLmNvbS9pb3RhbGVkZ2VyL2lvdGEubGliLmpzL2Jsb2IvbWFzdGVyL2xpYi9tdWx0aXNpZy9tdWx0aXNpZy5qc1xyXG4gKi9cclxuY2xhc3MgTXVsdGlTaWdDbGllbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIE11bHRpU2lnQ2xpZW50LlxyXG4gICAgICogQHBhcmFtIGFwaUNsaWVudCBBbiBBUEkgQ2xpZW50IHRvIGNvbW11bmljYXRlIHRocm91Z2guXHJcbiAgICAgKiBAcGFyYW0gdGltZVNlcnZpY2UgQSBjbGFzcyB3aGljaCBjYW4gcHJvdmlkZSB0aGUgdGltZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYXBpQ2xpZW50LCB0aW1lU2VydmljZSA9IG5ldyB0aW1lU2VydmljZV8xLlRpbWVTZXJ2aWNlKCkpIHtcclxuICAgICAgICB0aGlzLl9hcGlDbGllbnQgPSBhcGlDbGllbnQ7XHJcbiAgICAgICAgdGhpcy5fdGltZVNlcnZpY2UgPSB0aW1lU2VydmljZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBrZXkgdmFsdWUgb2YgYSBzZWVkLlxyXG4gICAgICogQHBhcmFtIHNlZWQgVGhlIHNlZWQgdG8gZ2V0IHRoZSBrZXkgZm9yLlxyXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBhZGRyZXNzIGluZGV4IHRvIHVzZS5cclxuICAgICAqIEBwYXJhbSBzZWN1cml0eSBUaGUgc2VjdXJpdHkgbGV2ZWwgdG8gdXNlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyBmb3IgdGhlIGtleS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEtleShzZWVkLCBpbmRleCwgc2VjdXJpdHkpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc2VlZCwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSBzZWVkIHNob3VsZCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoaW5kZXgpIHx8IGluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgaW5kZXggc2hvdWxkIGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihzZWN1cml0eSkgfHwgc2VjdXJpdHkgPCAxIHx8IHNlY3VyaXR5ID4gMykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgc2VjdXJpdHkgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDNcIiwgeyBzZWN1cml0eSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyaXRzXzEuVHJpdHMuZnJvbUFycmF5KGlzc18xLklTUy5rZXkoc2VlZCwgaW5kZXgsIHNlY3VyaXR5KSkudG9Ucnl0ZXMoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBkaWdlc3QgdmFsdWUgb2YgYSBzZWVkLlxyXG4gICAgICogQHBhcmFtIHNlZWQgVGhlIHNlZWQgdG8gZ2V0IHRoZSBkaWdlc3QgZm9yLlxyXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBhZGRyZXNzIGluZGV4IHRvIHVzZS5cclxuICAgICAqIEBwYXJhbSBzZWN1cml0eSBUaGUgc2VjdXJpdHkgbGV2ZWwgdG8gdXNlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyBmb3IgdGhlIGRpZ2VzdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldERpZ2VzdChzZWVkLCBpbmRleCwgc2VjdXJpdHkpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc2VlZCwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSBzZWVkIHNob3VsZCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoaW5kZXgpIHx8IGluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgaW5kZXggc2hvdWxkIGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihzZWN1cml0eSkgfHwgc2VjdXJpdHkgPCAxIHx8IHNlY3VyaXR5ID4gMykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgc2VjdXJpdHkgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDNcIiwgeyBzZWN1cml0eSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qga2V5ID0gaXNzXzEuSVNTLmtleShzZWVkLCBpbmRleCwgc2VjdXJpdHkpO1xyXG4gICAgICAgIHJldHVybiB0cml0c18xLlRyaXRzLmZyb21BcnJheShpc3NfMS5JU1MuZGlnZXN0cyhrZXkpKS50b1RyeXRlcygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWxpZGF0ZSBhZGRyZXNzLlxyXG4gICAgICogQHBhcmFtIGFkZHJlc3MgVGhlIGFkZHJlc3MgdG8gdmFsaWRhdGUgYWdhaW5zdCB0aGUgZGlnZXN0cy5cclxuICAgICAqIEBwYXJhbSBkaWdlc3RzIFRoZSBkaWdlc3RzIHRvIHVzZSB0byB2YWxpZGF0ZSB0aGUgYWRkcmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGFkZHJlc3MgbWF0Y2hlcyB0aGUgZGlnZXN0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIHZhbGlkYXRlQWRkcmVzcyhhZGRyZXNzLCBkaWdlc3RzKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGFkZHJlc3MsIGFkZHJlc3NfMS5BZGRyZXNzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgYWRkcmVzcyBzaG91bGQgYmUgYW4gb2JqZWN0IG9mIHR5cGUgQWRkcmVzc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzVHlwZWQoZGlnZXN0cywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgZGlnZXN0cyBzaG91bGQgYmUgYW4gYXJyYXkgb2YgdHlwZSBUcnl0ZXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhZGRyZXNzLnRvVHJ5dGVzKCkudG9TdHJpbmcoKSA9PT1cclxuICAgICAgICAgICAgbmV3IG11bHRpU2lnQWRkcmVzc18xLk11bHRpU2lnQWRkcmVzcygpLmZpbmFsaXplKGRpZ2VzdHMpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyB0aGUgY29zaWduZXIgc2lnbmF0dXJlcyB0byB0aGUgY29ycmVzcG9uZGluZyBidW5kbGUgdHJhbnNhY3Rpb25zLlxyXG4gICAgICogQHBhcmFtIGJ1bmRsZSBUaGUgYnVuZGxlIHRvIHNpZ24uXHJcbiAgICAgKiBAcGFyYW0gYWRkcmVzcyBUaGUgYWRkcmVzcyB0byBtYXRjaCB0aGUgdHJhbnNhY3Rpb25zLlxyXG4gICAgICogQHBhcmFtIGtleSBUaGUga2V5IHRvIHNpZ24gdGhlIHRyYW5zYWN0aW9ucyB3aXRoLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYWRkU2lnbmF0dXJlKGJ1bmRsZSwgYWRkcmVzcywga2V5KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGJ1bmRsZSwgYnVuZGxlXzEuQnVuZGxlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgYnVuZGxlIHNob3VsZCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBCdW5kbGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc1R5cGVkKGJ1bmRsZS50cmFuc2FjdGlvbnMsIHRyYW5zYWN0aW9uXzEuVHJhbnNhY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSBidW5kbGUudHJhbnNhY3Rpb25zIHNob3VsZCBiZSBhbiBhcnJheSBvZiB0eXBlIFRyYW5zYWN0aW9uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYWRkcmVzcywgYWRkcmVzc18xLkFkZHJlc3MpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSBhZGRyZXNzIHNob3VsZCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBBZGRyZXNzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoa2V5LCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSBrZXkgc2hvdWxkIGJlIGFuIG9iamVjdCBvZiB0eXBlIFRyeXRlc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qga2V5VHJpdHMgPSB0cml0c18xLlRyaXRzLmZyb21Ucnl0ZXMoa2V5KS50b0FycmF5KCk7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBzZWN1cml0eSB1c2VkIGZvciB0aGUgcHJpdmF0ZSBrZXlcclxuICAgICAgICAvLyAxIHNlY3VyaXR5IGxldmVsID0gMjE4NyB0cnl0ZXNcclxuICAgICAgICBjb25zdCBzZWN1cml0eSA9IGtleVRyaXRzLmxlbmd0aCAvIDMgLyAyMTg3O1xyXG4gICAgICAgIC8vIEZpcnN0IGdldCB0aGUgdG90YWwgbnVtYmVyIG9mIGFscmVhZHkgc2lnbmVkIHRyYW5zYWN0aW9uc1xyXG4gICAgICAgIC8vIHVzZSB0aGF0IGZvciB0aGUgYnVuZGxlIGhhc2ggY2FsY3VsYXRpb24gYXMgd2VsbCBhcyBrbm93aW5nXHJcbiAgICAgICAgLy8gd2hlcmUgdG8gYWRkIHRoZSBzaWduYXR1cmVcclxuICAgICAgICBsZXQgbnVtU2lnbmVkVHhzID0gMDtcclxuICAgICAgICBjb25zdCBhZGRyZXNzVHJ5dGVzID0gYWRkcmVzcy50b1RyeXRlcygpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidW5kbGUudHJhbnNhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChidW5kbGUudHJhbnNhY3Rpb25zW2ldLmFkZHJlc3MudG9Ucnl0ZXMoKS50b1N0cmluZygpID09PSBhZGRyZXNzVHJ5dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVuZGxlLnRyYW5zYWN0aW9uc1tpXS5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQudG9Ucnl0ZXMoKS50b1N0cmluZygpICE9PSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuRU1QVFkudG9Ucnl0ZXMoKS50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdHJhbnNhY3Rpb24gaXMgYWxyZWFkeSBzaWduZWQsIGluY3JlYXNlIGNvdW50ZXJcclxuICAgICAgICAgICAgICAgICAgICBudW1TaWduZWRUeHMrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bmRsZUhlbHBlcl8xLkJ1bmRsZUhlbHBlci5zaWduVHJhbnNhY3Rpb25zKGJ1bmRsZSwgaSwgbnVtU2lnbmVkVHhzICUgMywga2V5VHJpdHMsIGFkZHJlc3NUcnl0ZXMsIHNlY3VyaXR5KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhdGVzIHRoZSBjcmVhdGlvbiBvZiBhIG5ldyB0cmFuc2ZlciBieSBnZW5lcmF0aW5nIGFuIGVtcHR5IGJ1bmRsZSB3aXRoIHRoZSBjb3JyZWN0IG51bWJlclxyXG4gICAgICogb2YgYnVuZGxlIGVudHJpZXMgdG8gYmUgbGF0ZXIgdXNlZCBmb3IgdGhlIHNpZ25pbmcgcHJvY2Vzcy5cclxuICAgICAqIEBwYXJhbSBhZGRyZXNzIEFkZHJlc3Mgd2hpY2ggaGFzIHN1ZmZpY2llbnQgYmFsYW5jZSBhbmQgaXMgY29udHJvbGxlZCBieSB0aGUgY28tc2lnbmVycy5cclxuICAgICAqIEBwYXJhbSBzZWN1cml0eVN1bSB0aGUgc3VtIG9mIHRoZSBzZWN1cml0eSBsZXZlbHMgZnJvbSBhbGwgY29zaWduZXJzIGNob3NlbiBkdXJpbmcgdGhlIHByaXZhdGUga2V5IGdlbmVyYXRpb24gKGdldEtleSAvIGdldERpZ2VzdClcclxuICAgICAqIEBwYXJhbSBiYWxhbmNlIFRoZSBiYWxhbmNlIGF2YWlsYWJsZSBmb3IgdGhlIHRyYW5zZmVyLCBpZiAwIHdpbGwgY2FsbCBnZXRCYWxhbmNlcyB0byBsb29rdXAgYXZhaWxhYmxlLlxyXG4gICAgICogQHBhcmFtIHRyYW5zZmVycyBUaGUgdHJhbnNmZXJzIHRvIHBlcmZvcm0uXHJcbiAgICAgKiBAcGFyYW0gcmVtYWluZGVyQWRkcmVzcyBJZiB0aGVyZSBpcyBhIHJlbWFpbmRlciBhZnRlciB0aGUgdHJhbnNmZXIgdGhlbiBzZW5kIHRoZSBhbW91bnQgdG8gdGhpcyBhZGRyZXNzLlxyXG4gICAgICogQHJldHVybnMgQnVuZGxlIG9mIHRoZSBwcmVwYXJlZCB0cmFuc2Zlci5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcHJlcGFyZVRyYW5zZmVyKGFkZHJlc3MsIHNlY3VyaXR5U3VtLCBiYWxhbmNlLCB0cmFuc2ZlcnMsIHJlbWFpbmRlckFkZHJlc3MpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYWRkcmVzcywgYWRkcmVzc18xLkFkZHJlc3MpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSBhZGRyZXNzIHNob3VsZCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBBZGRyZXNzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoc2VjdXJpdHlTdW0pIHx8IHNlY3VyaXR5U3VtIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgc2VjdXJpdHlTdW0gc2hvdWxkIGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihiYWxhbmNlKSB8fCBiYWxhbmNlIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgYmFsYW5jZSBzaG91bGQgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzVHlwZWQodHJhbnNmZXJzLCB0cmFuc2Zlcl8xLlRyYW5zZmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgdHJhbnNmZXJzIHNob3VsZCBiZSBhbiBhcnJheSBvZiB0eXBlIFRyYW5zZmVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHJlbWFpbmRlckFkZHJlc3MpICYmICFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHJlbWFpbmRlckFkZHJlc3MsIGFkZHJlc3NfMS5BZGRyZXNzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgcmVtYWluZGVyQWRkcmVzcyBzaG91bGQgYmUgYW4gb2JqZWN0IG9mIHR5cGUgQWRkcmVzc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZW1wdHlUcnl0ZXMgPSB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhcIlwiKTtcclxuICAgICAgICAvLyBJZiBtZXNzYWdlIG9yIHRhZyBpcyBub3Qgc3VwcGxpZWQsIHByb3ZpZGUgaXRcclxuICAgICAgICB0cmFuc2ZlcnMuZm9yRWFjaCgodHJhbnNmZXIpID0+IHtcclxuICAgICAgICAgICAgdHJhbnNmZXIubWVzc2FnZSA9IHRyYW5zZmVyLm1lc3NhZ2UgPyB0cmFuc2Zlci5tZXNzYWdlIDogZW1wdHlUcnl0ZXM7XHJcbiAgICAgICAgICAgIHRyYW5zZmVyLnRhZyA9IHRyYW5zZmVyLnRhZyB8fCB0YWdfMS5UYWcuRU1QVFk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcHJlcGFyZWQgPSBidW5kbGVIZWxwZXJfMS5CdW5kbGVIZWxwZXIucHJlcGFyZUJ1bmRsZSh0aGlzLl90aW1lU2VydmljZSwgdHJhbnNmZXJzKTtcclxuICAgICAgICBpZiAocHJlcGFyZWQudG90YWxWYWx1ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgdG90YWwgdHJhbnNmZXIgdmFsdWUgaXMgMCwgdGhlIHRyYW5zZmVyIGRvZXMgbm90IHJlcXVpcmUgYSBzaWduYXR1cmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgdG90YWxCYWxhbmNlID0gYmFsYW5jZTtcclxuICAgICAgICAgICAgaWYgKHRvdGFsQmFsYW5jZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXM6IFthZGRyZXNzLnRvVHJ5dGVzKCkudG9TdHJpbmcoKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkOiAxMDBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2FwaUNsaWVudC5nZXRCYWxhbmNlcyhyZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIHRvdGFsQmFsYW5jZSA9IHBhcnNlSW50KHJlc3BvbnNlLmJhbGFuY2VzWzBdLCAxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByZXBhcmVkLnRvdGFsVmFsdWUgPiB0b3RhbEJhbGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIk5vdCBlbm91Z2ggYmFsYW5jZSB0byBzYXRpc2Z5IHRoZSB2YWx1ZVwiLCB7IHRvdGFsVmFsdWU6IHByZXBhcmVkLnRvdGFsVmFsdWUsIHRvdGFsQmFsYW5jZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKHRoaXMuX3RpbWVTZXJ2aWNlLm1zU2luY2VFcG9jaCgpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIC8vIEFkZCBpbnB1dCBhcyBidW5kbGUgZW50cnlcclxuICAgICAgICAgICAgLy8gT25seSBhIHNpbmdsZSBlbnRyeSwgc2lnbmF0dXJlcyB3aWxsIGJlIGFkZGVkIGxhdGVyXHJcbiAgICAgICAgICAgIHByZXBhcmVkLmJ1bmRsZS5hZGRUcmFuc2FjdGlvbnMoc2VjdXJpdHlTdW0sIGFkZHJlc3MsIC10b3RhbEJhbGFuY2UsIHByZXBhcmVkLmxhc3RUYWcsIHRpbWVzdGFtcCk7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGEgcmVtYWluZGVyIHZhbHVlXHJcbiAgICAgICAgICAgIC8vIEFkZCBleHRyYSBvdXRwdXQgdG8gc2VuZCByZW1haW5pbmcgZnVuZHMgdG9cclxuICAgICAgICAgICAgaWYgKHRvdGFsQmFsYW5jZSA+IHByZXBhcmVkLnRvdGFsVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShyZW1haW5kZXJBZGRyZXNzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRyYW5zZmVyIGhhcyByZW1haW5kZXIgYnV0IG5vIHJlbWFpbmRlciBhZGRyZXNzIHdhcyBwcm92aWRlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHByZXBhcmVkLmJ1bmRsZS5hZGRUcmFuc2FjdGlvbnMoMSwgcmVtYWluZGVyQWRkcmVzcywgdG90YWxCYWxhbmNlIC0gcHJlcGFyZWQudG90YWxWYWx1ZSwgcHJlcGFyZWQubGFzdFRhZywgdGltZXN0YW1wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidW5kbGVIZWxwZXJfMS5CdW5kbGVIZWxwZXIuZmluYWxpemVCdW5kbGUocHJlcGFyZWQuYnVuZGxlKTtcclxuICAgICAgICAgICAgcHJlcGFyZWQuYnVuZGxlLmFkZFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMocHJlcGFyZWQuc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcmVwYXJlZC5idW5kbGU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NdWx0aVNpZ0NsaWVudCA9IE11bHRpU2lnQ2xpZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liWFZzZEdsVGFXZERiR2xsYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YlhWc2RHbFRhV2N2YlhWc2RHbFRhV2REYkdsbGJuUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVWQkxEQkZRVUYxUlR0QlFVTjJSU3cwUlVGQmVVVTdRVUZEZWtVc05FVkJRWGxGTzBGQlJYcEZMREpGUVVGM1JUdEJRVU40UlN4NVJFRkJjMFE3UVVGRGRFUXNLMFJCUVRSRU8wRkJSVFZFTERaRVFVRXdSRHRCUVVNeFJDeDVSRUZCYzBRN1FVRkRkRVFzYVVkQlFUaEdPMEZCUXpsR0xIVkVRVUZ2UkR0QlFVTndSQ3gxUlVGQmIwVTdRVUZEY0VVc2FVVkJRVGhFTzBGQlF6bEVMREpFUVVGM1JEdEJRVU40UkN3MlJFRkJNRVE3UVVGRE1VUXNNRVJCUVhWRU8wRkJRM1pFTERCRVFVRjFSRHRCUVVOMlJDeDFSRUZCYjBRN1FVRkZjRVE3T3p0SFFVZEhPMEZCUTBnN1NVRk5TVHM3T3p0UFFVbEhPMGxCUTBnc1dVRkJXU3hUUVVGeFFpeEZRVUZGTEdOQlFUUkNMRWxCUVVrc2VVSkJRVmNzUlVGQlJUdFJRVU0xUlN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExGTkJRVk1zUTBGQlF6dFJRVU0xUWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExGZEJRVmNzUTBGQlF6dEpRVU53UXl4RFFVRkRPMGxCUlVRN096czdPenRQUVUxSE8wbEJRMGtzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRlZMRVZCUVVVc1MwRkJZU3hGUVVGRkxGRkJRWGxDTzFGQlEzSkZMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1YwRkJTU3hEUVVGRExFVkJRVVU3V1VGRGJFTXNUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zTWtOQlFUSkRMRU5CUVVNc1EwRkJRenRUUVVONFJUdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRemRETEUxQlFVMHNTVUZCU1N3MlFrRkJZU3hEUVVGRExHMURRVUZ0UXl4RFFVRkRMRU5CUVVNN1UwRkRhRVU3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1NVRkJTU3hSUVVGUkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlEyNUZMRTFCUVUwc1NVRkJTU3cyUWtGQllTeERRVUZETEhORFFVRnpReXhGUVVGRkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTnFSanRSUVVWRUxFOUJRVThzWVVGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU4wUlN4RFFVRkRPMGxCUlVRN096czdPenRQUVUxSE8wbEJRMGtzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRlZMRVZCUVVVc1MwRkJZU3hGUVVGRkxGRkJRWGxDTzFGQlEzaEZMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1YwRkJTU3hEUVVGRExFVkJRVVU3V1VGRGJFTXNUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zTWtOQlFUSkRMRU5CUVVNc1EwRkJRenRUUVVONFJUdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRemRETEUxQlFVMHNTVUZCU1N3MlFrRkJZU3hEUVVGRExHMURRVUZ0UXl4RFFVRkRMRU5CUVVNN1UwRkRhRVU3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1NVRkJTU3hSUVVGUkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlEyNUZMRTFCUVUwc1NVRkJTU3cyUWtGQllTeERRVUZETEhORFFVRnpReXhGUVVGRkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTnFSanRSUVVWRUxFMUJRVTBzUjBGQlJ5eEhRVUZITEZOQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVVXpReXhQUVVGUExHRkJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNVMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTNoRUxFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVVNc1QwRkJaMElzUlVGQlJTeFBRVUZwUWp0UlFVTTNSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxHbENRVUZQTEVOQlFVTXNSVUZCUlR0WlFVTjRReXhOUVVGTkxFbEJRVWtzTmtKQlFXRXNRMEZCUXl4cFJFRkJhVVFzUTBGQlF5eERRVUZETzFOQlF6bEZPMUZCUTBRc1NVRkJTU3hEUVVGRExIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hsUVVGTkxFTkJRVU1zUlVGQlJUdFpRVU4yUXl4TlFVRk5MRWxCUVVrc05rSkJRV0VzUTBGQlF5d3JRMEZCSzBNc1EwRkJReXhEUVVGRE8xTkJRelZGTzFGQlJVUXNUMEZCVHl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlEzQkNMRWxCUVVrc2FVTkJRV1VzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTnNSaXhEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVdNc1JVRkJSU3hQUVVGblFpeEZRVUZGTEVkQlFWYzdVVUZEY0VVc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hsUVVGTkxFTkJRVU1zUlVGQlJUdFpRVU4wUXl4TlFVRk5MRWxCUVVrc05rSkJRV0VzUTBGQlF5d3JRMEZCSzBNc1EwRkJReXhEUVVGRE8xTkJRelZGTzFGQlJVUXNTVUZCU1N4RFFVRkRMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4WlFVRlpMRVZCUVVVc2VVSkJRVmNzUTBGQlF5eEZRVUZGTzFsQlEzaEVMRTFCUVUwc1NVRkJTU3cyUWtGQllTeERRVUZETEdkRlFVRm5SU3hEUVVGRExFTkJRVU03VTBGRE4wWTdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMR2xDUVVGUExFTkJRVU1zUlVGQlJUdFpRVU40UXl4TlFVRk5MRWxCUVVrc05rSkJRV0VzUTBGQlF5eHBSRUZCYVVRc1EwRkJReXhEUVVGRE8xTkJRemxGTzFGQlJVUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4bFFVRk5MRU5CUVVNc1JVRkJSVHRaUVVOdVF5eE5RVUZOTEVsQlFVa3NOa0pCUVdFc1EwRkJReXcwUTBGQk5FTXNRMEZCUXl4RFFVRkRPMU5CUTNwRk8xRkJSVVFzVFVGQlRTeFJRVUZSTEVkQlFVY3NZVUZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVVnFSQ3cwUTBGQk5FTTdVVUZETlVNc2FVTkJRV2xETzFGQlEycERMRTFCUVUwc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVVMVF5dzBSRUZCTkVRN1VVRkROVVFzT0VSQlFUaEVPMUZCUXpsRUxEWkNRVUUyUWp0UlFVTTNRaXhKUVVGSkxGbEJRVmtzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZGY2tJc1RVRkJUU3hoUVVGaExFZEJRVWNzVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJSWEJFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU5xUkN4SlFVRkpMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJTeExRVUZMTEdGQlFXRXNSVUZCUlR0blFrRkRlRVVzU1VGQlNTeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExIZENRVUYzUWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJTeExRVUZMTEcxRVFVRjNRaXhEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSVHR2UWtGRGFFa3NjVVJCUVhGRU8yOUNRVU55UkN4WlFVRlpMRVZCUVVVc1EwRkJRenRwUWtGRGJFSTdjVUpCUVUwN2IwSkJRMGdzTWtKQlFWa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRmxCUVZrc1IwRkJSeXhEUVVGRExFVkJRVVVzVVVGQlVTeEZRVUZGTEdGQlFXRXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenR2UWtGRE9VWXNUVUZCVFR0cFFrRkRWRHRoUVVOS08xTkJRMG83U1VGRFRDeERRVUZETzBsQlJVUTdPenM3T3pzN096dFBRVk5ITzBsQlEwa3NTMEZCU3l4RFFVRkRMR1ZCUVdVc1EwRkJReXhQUVVGblFpeEZRVUZGTEZkQlFXMUNMRVZCUVVVc1QwRkJaU3hGUVVGRkxGTkJRWEZDTEVWQlFVVXNaMEpCUVRCQ08xRkJRMnhKTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNhVUpCUVU4c1EwRkJReXhGUVVGRk8xbEJRM2hETEUxQlFVMHNTVUZCU1N3MlFrRkJZU3hEUVVGRExHbEVRVUZwUkN4RFFVRkRMRU5CUVVNN1UwRkRPVVU3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NWMEZCVnl4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVONlJDeE5RVUZOTEVsQlFVa3NOa0pCUVdFc1EwRkJReXg1UTBGQmVVTXNRMEZCUXl4RFFVRkRPMU5CUTNSRk8xRkJRMFFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEU5QlFVOHNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRha1FzVFVGQlRTeEpRVUZKTERaQ1FVRmhMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0VFFVTnNSVHRSUVVORUxFbEJRVWtzUTBGQlF5eDVRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFVkJRVVVzYlVKQlFWRXNRMEZCUXl4RlFVRkZPMWxCUXpORExFMUJRVTBzU1VGQlNTdzJRa0ZCWVN4RFFVRkRMRzFFUVVGdFJDeERRVUZETEVOQlFVTTdVMEZEYUVZN1VVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEdkQ1FVRm5RaXhGUVVGRkxHbENRVUZQTEVOQlFVTXNSVUZCUlR0WlFVTTFSaXhOUVVGTkxFbEJRVWtzTmtKQlFXRXNRMEZCUXl3d1JFRkJNRVFzUTBGQlF5eERRVUZETzFOQlEzWkdPMUZCUlVRc1RVRkJUU3hYUVVGWExFZEJRVWNzWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVVeFF5eG5SRUZCWjBRN1VVRkRhRVFzVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRk8xbEJRek5DTEZGQlFWRXNRMEZCUXl4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETzFsQlEzSkZMRkZCUVZFc1EwRkJReXhIUVVGSExFZEJRVWNzVVVGQlVTeERRVUZETEVkQlFVY3NTVUZCU1N4VFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRemRETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlVnc1RVRkJUU3hSUVVGUkxFZEJRVWNzTWtKQlFWa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXp0UlFVVXhSU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFZRVUZWTEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUXpOQ0xFMUJRVTBzU1VGQlNTdzJRa0ZCWVN4RFFVRkRMREJGUVVFd1JTeERRVUZETEVOQlFVTTdVMEZEZGtjN1lVRkJUVHRaUVVOSUxFbEJRVWtzV1VGQldTeEhRVUZITEU5QlFVOHNRMEZCUXp0WlFVTXpRaXhKUVVGSkxGbEJRVmtzUzBGQlN5eERRVUZETEVWQlFVVTdaMEpCUTNCQ0xFMUJRVTBzVDBGQlR5eEhRVUYzUWp0dlFrRkRha01zVTBGQlV5eEZRVUZGTEVOQlFVVXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZGTzI5Q1FVTTFReXhUUVVGVExFVkJRVVVzUjBGQlJ6dHBRa0ZEYWtJc1EwRkJRenRuUWtGRlJpeE5RVUZOTEZGQlFWRXNSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMmRDUVVVMVJDeFpRVUZaTEVkQlFVY3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRja1E3V1VGRlJDeEpRVUZKTEZGQlFWRXNRMEZCUXl4VlFVRlZMRWRCUVVjc1dVRkJXU3hGUVVGRk8yZENRVU53UXl4TlFVRk5MRWxCUVVrc05rSkJRV0VzUTBGQlF5eDVRMEZCZVVNc1JVRkJSU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFJRVUZSTEVOQlFVTXNWVUZCVlN4RlFVRkZMRmxCUVZrc1JVRkJSU3hEUVVGRExFTkJRVU03WVVGRGVrZzdXVUZGUkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdXVUZGZEVVc05FSkJRVFJDTzFsQlF6VkNMSE5FUVVGelJEdFpRVU4wUkN4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExHVkJRV1VzUTBGQlF5eFhRVUZYTEVWQlFVVXNUMEZCVHl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1dVRkZiRWNzWjBOQlFXZERPMWxCUTJoRExEaERRVUU0UXp0WlFVTTVReXhKUVVGSkxGbEJRVmtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RlFVRkZPMmRDUVVOd1F5eEpRVUZKTERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRVZCUVVVN2IwSkJRM2hETEUxQlFVMHNTVUZCU1N3MlFrRkJZU3hEUVVGRExEaEVRVUU0UkN4RFFVRkRMRU5CUVVNN2FVSkJRek5HTzJkQ1FVVkVMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNSVUZCUlN4blFrRkJaMElzUlVGQlJTeFpRVUZaTEVkQlFVY3NVVUZCVVN4RFFVRkRMRlZCUVZVc1JVRkJSU3hSUVVGUkxFTkJRVU1zVDBGQlR5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRPMkZCUTNwSU8xbEJSVVFzTWtKQlFWa3NRMEZCUXl4alFVRmpMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlF6ZERMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zTkVKQlFUUkNMRU5CUVVNc1VVRkJVU3hEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1UwRkRjRVk3VVVGRlJDeFBRVUZQTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRNMElzUTBGQlF6dERRVVZLTzBGQk9VMUVMSGREUVRoTlF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNwb25nZUZhY3RvcnlfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5XCIpO1xyXG5jb25zdCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudFwiKTtcclxuY29uc3QgdHJpdHNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyaXRzXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEhhc2hlZCBNZXNzYWdlIEF1dGhlbnRpY2F0aW9uIENvZGUgdXNpbmcgQ3VybC5cclxuICovXHJcbmNsYXNzIEhtYWNDdXJsIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBIbWFjQ3VybC5cclxuICAgICAqIEBwYXJhbSBrZXkgVGhlIGtleSB0byBzZWVkIHdpdGguXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleSkge1xyXG4gICAgICAgIHRoaXMuX2tleVRyaXRzID0gdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKGtleSkudG9BcnJheSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYnVuZGxlIHRvIHRoZSBITUFDLlxyXG4gICAgICogQHBhcmFtIGJ1bmRsZSBUaGUgYnVuZGxlIHRvIGFkZCB0aGUgSE1BQyB0by5cclxuICAgICAqL1xyXG4gICAgYWRkSE1BQyhidW5kbGUpIHtcclxuICAgICAgICBjb25zdCBjdXJsID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoXCJjdXJsXCIsIEhtYWNDdXJsLkhNQUNfUk9VTkRTKTtcclxuICAgICAgICBjb25zdCBoYXNoTGVuZ3RoID0gY3VybC5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuX2tleVRyaXRzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVuZGxlLnRyYW5zYWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYnVuZGxlLnRyYW5zYWN0aW9uc1tpXS52YWx1ZS50b051bWJlcigpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVuZGxlSGFzaFRyaXRzID0gdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKGJ1bmRsZS50cmFuc2FjdGlvbnNbaV0uYnVuZGxlLnRvVHJ5dGVzKCkpLnRvQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhtYWMgPSBuZXcgSW50OEFycmF5KGhhc2hMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgY3VybC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICBjdXJsLmFic29yYihrZXksIDAsIGtleS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgY3VybC5hYnNvcmIoYnVuZGxlSGFzaFRyaXRzLCAwLCBidW5kbGVIYXNoVHJpdHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGN1cmwuc3F1ZWV6ZShobWFjLCAwLCBobWFjLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBobWFjVHJ5dGVzID0gdHJpdHNfMS5Ucml0cy5mcm9tQXJyYXkoaG1hYykudG9Ucnl0ZXMoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdCA9IGJ1bmRsZS50cmFuc2FjdGlvbnNbaV0uc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LnRvVHJ5dGVzKCkudG9TdHJpbmcoKS5zdWJzdHJpbmcoODEsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6cmVzdHJpY3QtcGx1cy1vcGVyYW5kcyBmYWxzZSBwb3NpdGl2ZVxyXG4gICAgICAgICAgICAgICAgYnVuZGxlLnRyYW5zYWN0aW9uc1tpXS5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgPVxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKGhtYWNUcnl0ZXMgKyByZXN0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcbkhtYWNDdXJsLkhNQUNfUk9VTkRTID0gMjc7XHJcbmV4cG9ydHMuSG1hY0N1cmwgPSBIbWFjQ3VybDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYUcxaFkwTjFjbXd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjMmxuYmk5b2JXRmpRM1Z5YkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYTBaQlFTdEZPMEZCUlM5RkxHbEhRVUU0Ump0QlFVTTVSaXd5UkVGQmQwUTdRVUZEZUVRc05rUkJRVEJFTzBGQlJURkVPenRIUVVWSE8wRkJRMGc3U1VGTlNUczdPMDlCUjBjN1NVRkRTQ3haUVVGWkxFZEJRVmM3VVVGRGJrSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhoUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8wbEJRM0pFTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFBRVUZQTEVOQlFVTXNUVUZCWXp0UlFVTjZRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5dzJRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJRek5GTEUxQlFVMHNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdVVUZEYmtRc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXp0UlFVTXpRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRha1FzU1VGQlNTeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRemRETEUxQlFVMHNaVUZCWlN4SFFVRkhMR0ZCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRE4wWXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hUUVVGVExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdaMEpCUTNaRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0blFrRkRiRUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0blFrRkRhRU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJReXhGUVVGRkxHVkJRV1VzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0blFrRkRlRVFzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0blFrRkRia01zVFVGQlRTeFZRVUZWTEVkQlFVY3NZVUZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRuUWtGREwwUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4M1FrRkJkMElzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJTeEZRVUZGTEcxRVFVRjNRaXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzJkQ1FVTnNTU3gxUkVGQmRVUTdaMEpCUTNaRUxFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc2QwSkJRWGRDTzI5Q1FVTXpReXh0UkVGQmQwSXNRMEZCUXl4VlFVRlZMRU5CUVVNc1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOcVJqdFRRVU5LTzBsQlEwd3NRMEZCUXpzN1FVRndRMFFzWlVGQlpUdEJRVU5UTEc5Q1FVRlhMRWRCUVZjc1JVRkJSU3hEUVVGRE8wRkJSbkpFTERSQ1FYTkRReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhcnJheUhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBoYXNoXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9oYXNoXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiKTtcclxuY29uc3QgYnVzaW5lc3NFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2J1c2luZXNzRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBQcm9vZk9mV29yayBpbXBsZW1lbnRhdGlvbiB1c2luZyBBUEkuXHJcbiAqL1xyXG5jbGFzcyBQcm9vZk9mV29ya0FwaSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBQcm9vZk9mV29yay5cclxuICAgICAqIEBwYXJhbSBhcGlDbGllbnQgVGhlIEFQSSBjbGllbnQgdG8gc2VuZCB0aGUgcmVxdWVzdCB0aHJvdWdoLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihhcGlDbGllbnQpIHtcclxuICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkoYXBpQ2xpZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgYXBpQ2xpZW50IG11c3Qgbm90IGJlIGVtcHR5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hcGlDbGllbnQgPSBhcGlDbGllbnQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFsbG93IHRoZSBwcm9vZiBvZiB3b3JrIHRvIHBlcmZvcm0gYW55IGluaXRpYWxpemF0aW9uLlxyXG4gICAgICogV2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgdGhlIGltcGxlbWVudGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBhIHByb29mIG9mIHdvcmsgb24gdGhlIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gdHJ1bmtUcmFuc2FjdGlvbiBUaGUgdHJ1bmtUcmFuc2FjdGlvbiB0byB1c2UgZm9yIHRoZSBwb3cuXHJcbiAgICAgKiBAcGFyYW0gYnJhbmNoVHJhbnNhY3Rpb24gVGhlIGJyYW5jaFRyYW5zYWN0aW9uIHRvIHVzZSBmb3IgdGhlIHBvdy5cclxuICAgICAqIEBwYXJhbSB0cnl0ZXMgVGhlIHRyeXRlcyB0byBwZXJmb3JtIHRoZSBwb3cgb24uXHJcbiAgICAgKiBAcGFyYW0gbWluV2VpZ2h0TWFnbml0dWRlIFRoZSBtaW5pbXVtIHdlaWdodCBtYWduaXR1ZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJ5dGVzIHByb2R1Y2VkIGJ5IHRoZSBwcm9vZiBvZiB3b3JrLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBwb3codHJ1bmtUcmFuc2FjdGlvbiwgYnJhbmNoVHJhbnNhY3Rpb24sIHRyeXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRydW5rVHJhbnNhY3Rpb24sIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cnVua1RyYW5zYWN0aW9uIG11c3QgYmUgYW4gb2JqZWN0IG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGJyYW5jaFRyYW5zYWN0aW9uLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgYnJhbmNoVHJhbnNhY3Rpb24gbXVzdCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNUeXBlZCh0cnl0ZXMsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdHJ5dGVzIG11c3QgYmUgYW4gYXJyYXkgb2YgdHlwZSBUcnl0ZXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihtaW5XZWlnaHRNYWduaXR1ZGUpIHx8IG1pbldlaWdodE1hZ25pdHVkZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG1pbldlaWdodE1hZ25pdHVkZSBtdXN0IGJlID4gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYXR0YWNoVG9UYW5nbGVSZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICB0cnVua1RyYW5zYWN0aW9uOiB0cnVua1RyYW5zYWN0aW9uLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGJyYW5jaFRyYW5zYWN0aW9uOiBicmFuY2hUcmFuc2FjdGlvbi50b1N0cmluZygpLFxyXG4gICAgICAgICAgICBtaW5XZWlnaHRNYWduaXR1ZGU6IG1pbldlaWdodE1hZ25pdHVkZSxcclxuICAgICAgICAgICAgdHJ5dGVzOiB0cnl0ZXMubWFwKHQgPT4gdC50b1N0cmluZygpKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYXR0YWNoVG9UYW5nbGVSZXNwb25zZSA9IGF3YWl0IHRoaXMuX2FwaUNsaWVudC5hdHRhY2hUb1RhbmdsZShhdHRhY2hUb1RhbmdsZVJlcXVlc3QpO1xyXG4gICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShhdHRhY2hUb1RhbmdsZVJlc3BvbnNlKSB8fCBhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzRW1wdHkoYXR0YWNoVG9UYW5nbGVSZXNwb25zZS50cnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGF0dGFjaFRvVGFuZ2xlUmVxdWVzdCBkaWQgbm90IHJldHVybiBhbnkgdHJ5dGVzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dGFjaFRvVGFuZ2xlUmVzcG9uc2UudHJ5dGVzLm1hcChyZXR1cm5Ucnl0ZXMgPT4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcocmV0dXJuVHJ5dGVzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUHJvb2ZPZldvcmtBcGkgPSBQcm9vZk9mV29ya0FwaTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKdmIyWlBabGR2Y210QmNHa3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmRISmhibk5oWTNScGIyNXpMM0J5YjI5bVQyWlhiM0pyUVhCcExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZGUVN3d1JVRkJkVVU3UVVGRGRrVXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVONlJTd3dSVUZCZFVVN1FVRkZka1VzZVVSQlFYTkVPMEZCUTNSRUxEWkVRVUV3UkR0QlFVTXhSQ3d3UkVGQmRVUTdRVUZGZGtRN08wZEJSVWM3UVVGRFNEdEpRVWxKT3pzN1QwRkhSenRKUVVOSUxGbEJRVmtzVTBGQmNVSTdVVUZETjBJc1NVRkJTU3d5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRaUVVOcVF5eE5RVUZOTEVsQlFVa3NOa0pCUVdFc1EwRkJReXhwUTBGQmFVTXNRMEZCUXl4RFFVRkRPMU5CUXpsRU8xRkJRMFFzU1VGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4VFFVRlRMRU5CUVVNN1NVRkRhRU1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeExRVUZMTEVOQlFVTXNWVUZCVlR0UlFVTnVRaXhQUVVGUExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0SlFVTTNRaXhEUVVGRE8wbEJSVVE3T3pzN096czdUMEZQUnp0SlFVTkpMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zWjBKQlFYTkNMRVZCUVVVc2FVSkJRWFZDTEVWQlFVVXNUVUZCWjBJc1JVRkJSU3hyUWtGQk1FSTdVVUZETVVjc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEZkQlFVa3NRMEZCUXl4RlFVRkZPMWxCUXpsRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSEZFUVVGeFJDeERRVUZETEVOQlFVTTdVMEZEYUVZN1VVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc2FVSkJRV2xDTEVWQlFVVXNWMEZCU1N4RFFVRkRMRVZCUVVVN1dVRkRMME1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2MwUkJRWE5FTEVOQlFVTXNRMEZCUXp0VFFVTnFSanRSUVVORUxFbEJRVWtzUTBGQlF5eDVRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzWlVGQlRTeERRVUZETEVWQlFVVTdXVUZEZEVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNORU5CUVRSRExFTkJRVU1zUTBGQlF6dFRRVU4yUlR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eEpRVUZKTEd0Q1FVRnJRaXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU40UlN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHZRMEZCYjBNc1EwRkJReXhEUVVGRE8xTkJReTlFTzFGQlJVUXNUVUZCVFN4eFFrRkJjVUlzUjBGQk1rSTdXVUZEYkVRc1owSkJRV2RDTEVWQlFVVXNaMEpCUVdkQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlF6ZERMR2xDUVVGcFFpeEZRVUZGTEdsQ1FVRnBRaXhEUVVGRExGRkJRVkVzUlVGQlJUdFpRVU12UXl4clFrRkJhMElzUlVGQlJTeHJRa0ZCYTBJN1dVRkRkRU1zVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1UwRkRlRU1zUTBGQlF6dFJRVVZHTEUxQlFVMHNjMEpCUVhOQ0xFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMR05CUVdNc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4RFFVRkRPMUZCUlROR0xFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eHpRa0ZCYzBJc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJUdFpRVU53Unl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHhSRUZCY1VRc1EwRkJReXhEUVVGRE8xTkJRMmhHTzJGQlFVMDdXVUZEU0N4UFFVRlBMSE5DUVVGelFpeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1dVRkJXU3hEUVVGRExFVkJRVVVzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE4wWTdTVUZEVEN4RFFVRkRPME5CUTBvN1FVRTNSRVFzZDBOQk5rUkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhcnJheUhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgbnVsbExvZ2dlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2xvZ2dlcnMvbnVsbExvZ2dlclwiKTtcclxuY29uc3QgYmFja2dyb3VuZFRhc2tTZXJ2aWNlXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3Qvc2VydmljZXMvYmFja2dyb3VuZFRhc2tTZXJ2aWNlXCIpO1xyXG5jb25zdCB0aW1lU2VydmljZV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L3NlcnZpY2VzL3RpbWVTZXJ2aWNlXCIpO1xyXG5jb25zdCBpc3NfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2hhc2gvaXNzXCIpO1xyXG5jb25zdCB0cmFuc2FjdGlvbkhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvaGVscGVycy90cmFuc2FjdGlvbkhlbHBlclwiKTtcclxuY29uc3QgYWRkcmVzc18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYWRkcmVzc1wiKTtcclxuY29uc3QgYWRkcmVzc1NlY3VyaXR5XzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9hZGRyZXNzU2VjdXJpdHlcIik7XHJcbmNvbnN0IGJ1bmRsZV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvYnVuZGxlXCIpO1xyXG5jb25zdCBoYXNoXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9oYXNoXCIpO1xyXG5jb25zdCBpbnB1dF8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvaW5wdXRcIik7XHJcbmNvbnN0IHRhZ18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdGFnXCIpO1xyXG5jb25zdCB0cmFuc2FjdGlvbl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJhbnNhY3Rpb25cIik7XHJcbmNvbnN0IHRyYW5zZmVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cmFuc2ZlclwiKTtcclxuY29uc3QgdHJpdHNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyaXRzXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiKTtcclxuY29uc3QgYnVzaW5lc3NFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2J1c2luZXNzRXJyb3JcIik7XHJcbmNvbnN0IGFkZHJlc3NIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2FkZHJlc3NIZWxwZXJcIik7XHJcbmNvbnN0IGJ1bmRsZUhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvYnVuZGxlSGVscGVyXCIpO1xyXG5jb25zdCBwcm9vZk9mV29ya0FwaV8xID0gcmVxdWlyZShcIi4vcHJvb2ZPZldvcmtBcGlcIik7XHJcbi8qKlxyXG4gKiBEZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBJVHJhbnNhY3Rpb25DbGllbnQuXHJcbiAqL1xyXG5jbGFzcyBUcmFuc2FjdGlvbkNsaWVudCB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgVHJhbnNhY3Rpb25DbGllbnQuXHJcbiAgICAgKiBAcGFyYW0gYXBpQ2xpZW50IEFuIEFQSSBDbGllbnQgdG8gY29tbXVuaWNhdGUgdGhyb3VnaC5cclxuICAgICAqIEBwYXJhbSBwcm9vZk9mV29yayBQcm9vZiBvZiB3b3JrIG1vZHVsZSB0byB1c2UsIGlmIHVuZGVmaW5lZCB3aWxsIHVzZSByZW1vdGUuXHJcbiAgICAgKiBAcGFyYW0gdGltZVNlcnZpY2UgQSBjbGFzcyB3aGljaCBjYW4gcHJvdmlkZSB0aGUgdGltZS5cclxuICAgICAqIEBwYXJhbSBiYWNrZ3JvdW5kVGFza1NlcnZpY2UgQSBjbGFzcyB3aGljaCBjYW4gcHJvdmlkZSBiYWNrZ3JvdW5kIHRhc2tzLlxyXG4gICAgICogQHBhcmFtIGxvZ2dlciBMb2dnZXIgdG8gc2VuZCB0cmFuc2FjdGlvbiBpbmZvIHRvLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihhcGlDbGllbnQsIHByb29mT2ZXb3JrLCB0aW1lU2VydmljZSwgYmFja2dyb3VuZFRhc2tTZXJ2aWNlLCBsb2dnZXIpIHtcclxuICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkoYXBpQ2xpZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgYXBpQ2xpZW50IG11c3Qgbm90IGJlIGVtcHR5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hcGlDbGllbnQgPSBhcGlDbGllbnQ7XHJcbiAgICAgICAgdGhpcy5fcHJvb2ZPZldvcmsgPSBwcm9vZk9mV29yayB8fCBuZXcgcHJvb2ZPZldvcmtBcGlfMS5Qcm9vZk9mV29ya0FwaShhcGlDbGllbnQpO1xyXG4gICAgICAgIHRoaXMuX3RpbWVTZXJ2aWNlID0gdGltZVNlcnZpY2UgfHwgbmV3IHRpbWVTZXJ2aWNlXzEuVGltZVNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kVGFza1NlcnZpY2UgPSBiYWNrZ3JvdW5kVGFza1NlcnZpY2UgfHwgbmV3IGJhY2tncm91bmRUYXNrU2VydmljZV8xLkJhY2tncm91bmRUYXNrU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IGxvZ2dlciB8fCBuZXcgbnVsbExvZ2dlcl8xLk51bGxMb2dnZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiB0cmFuc2FjdGlvbiBpbiBwcm9ncmVzcy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gYSBsaXN0IG9mIGhhc2hlcyBvciByZWplY3RzIHdpdGggZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGdldFRyYW5zYWN0aW9uc0luUHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI9PT0+IFRyYW5zYWN0aW9uQ2xpZW50OjpnZXRUcmFuc2FjdGlvbnNJblByb2dyZXNzXCIpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fYXBpQ2xpZW50LmdldFRpcHMoKTtcclxuICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuaGFzaGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3AgPSByZXNwb25zZS5oYXNoZXMubWFwKGhhc2ggPT4gaGFzaF8xLkhhc2guZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhoYXNoKSkpO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gVHJhbnNhY3Rpb25DbGllbnQ6OmdldFRyYW5zYWN0aW9uc0luUHJvZ3Jlc3NcIiwgcmVzcCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI8PT09IFRyYW5zYWN0aW9uQ2xpZW50OjpnZXRUcmFuc2FjdGlvbnNJblByb2dyZXNzXCIsIFtdKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRmluZCB0aGUgdHJhbnNhY3Rpb25zIHdoaWNoIG1hdGNoIHRoZSBzcGVjaWZpZWQgaW5wdXQgYW5kIHJldHVybi4gQWxsIGlucHV0IHZhbHVlcyBhcmUgbGlzdHMsXHJcbiAgICAgKiBmb3Igd2hpY2ggYSBsaXN0IG9mIHJldHVybiB2YWx1ZXMgKHRyYW5zYWN0aW9uIGhhc2hlcyksIGluIHRoZSBzYW1lIG9yZGVyLCBpcyByZXR1cm5lZCBmb3IgYWxsXHJcbiAgICAgKiBpbmRpdmlkdWFsIGVsZW1lbnRzLiBVc2luZyBtdWx0aXBsZSBvZiB0aGVzZSBpbnB1dCBmaWVsZHMgcmV0dXJucyB0aGUgaW50ZXJzZWN0aW9uIG9mIHRoZSB2YWx1ZXMuXHJcbiAgICAgKiBAcGFyYW0gYnVuZGxlcyBCdW5kbGVzIHRvIGxvb2t1cCB0cmFuc2FjdGlvbiBoYXNoZXMgZm9yLlxyXG4gICAgICogQHBhcmFtIGFkZHJlc3NlcyBBZGRyZXNzZXMgdG8gbG9va3VwIHRyYW5zYWN0aW9uIGhhc2hlcyBmb3IuXHJcbiAgICAgKiBAcGFyYW0gdGFncyBUYWdzIHRvIGxvb2t1cCB0cmFuc2FjdGlvbiBoYXNoZXMgZm9yLlxyXG4gICAgICogQHBhcmFtIGFwcHJvdmVlcyBBcHByb3ZlZXMgdG8gbG9va3VwIHRyYW5zYWN0aW9uIGhhc2hlcyBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHdpdGggYSBsaXN0IG9mIGhhc2hlcyBvciByZWplY3RzIHdpdGggZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGZpbmRUcmFuc2FjdGlvbnMoYnVuZGxlcywgYWRkcmVzc2VzLCB0YWdzLCBhcHByb3ZlZXMpIHtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIj09PT4gVHJhbnNhY3Rpb25DbGllbnQ6OmZpbmRUcmFuc2FjdGlvbnNcIiwgYnVuZGxlcywgYWRkcmVzc2VzLCB0YWdzLCBhcHByb3ZlZXMpO1xyXG4gICAgICAgIGNvbnN0IGhhc0J1bmRsZSA9IGJ1bmRsZXMgIT09IHVuZGVmaW5lZCAmJiBidW5kbGVzICE9PSBudWxsICYmIGJ1bmRsZXMubGVuZ3RoID4gMDtcclxuICAgICAgICBjb25zdCBoYXNBZGRyZXNzZXMgPSBhZGRyZXNzZXMgIT09IHVuZGVmaW5lZCAmJiBhZGRyZXNzZXMgIT09IG51bGwgJiYgYWRkcmVzc2VzLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgY29uc3QgaGFzVGFncyA9IHRhZ3MgIT09IHVuZGVmaW5lZCAmJiB0YWdzICE9PSBudWxsICYmIHRhZ3MubGVuZ3RoID4gMDtcclxuICAgICAgICBjb25zdCBoYXNBcHByb3ZlZXMgPSBhcHByb3ZlZXMgIT09IHVuZGVmaW5lZCAmJiBhcHByb3ZlZXMgIT09IG51bGwgJiYgYXBwcm92ZWVzLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgaWYgKGhhc0J1bmRsZSAmJiAhYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc1R5cGVkKGJ1bmRsZXMsIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgYnVuZGxlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGhhc0FkZHJlc3NlcyAmJiAhYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc1R5cGVkKGFkZHJlc3NlcywgYWRkcmVzc18xLkFkZHJlc3MpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSBhZGRyZXNzZXMgbXVzdCBiZSBhbiBhcnJheSBvZiB0eXBlIEFkZHJlc3NcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChoYXNUYWdzICYmICFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzVHlwZWQodGFncywgdGFnXzEuVGFnKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgdGFncyBtdXN0IGJlIGFuIGFycmF5IG9mIHR5cGUgVGFnXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaGFzQXBwcm92ZWVzICYmICFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzVHlwZWQoYXBwcm92ZWVzLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGJ1c2luZXNzRXJyb3JfMS5CdXNpbmVzc0Vycm9yKFwiVGhlIGFwcHJvdmVlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFoYXNCdW5kbGUgJiYgIWhhc0FkZHJlc3NlcyAmJiAhaGFzVGFncyAmJiAhaGFzQXBwcm92ZWVzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIllvdSBtdXN0IHByb3ZpZGUgYnVuZGxlcywgYWRkcmVzc2VzLCB0YWdzIG9yIGFwcHJvdmVlc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgYnVuZGxlczogaGFzQnVuZGxlID8gYnVuZGxlcy5tYXAoYnVuZGxlID0+IGJ1bmRsZS50b1RyeXRlcygpLnRvU3RyaW5nKCkpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBhZGRyZXNzZXM6IGhhc0FkZHJlc3NlcyA/IGFkZHJlc3Nlcy5tYXAoYWRkcmVzcyA9PiBhZGRyZXNzLnRvVHJ5dGVzKCkudG9TdHJpbmcoKSkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRhZ3M6IGhhc1RhZ3MgPyB0YWdzLm1hcCh0YWcgPT4gdGFnLnRvVHJ5dGVzKCkudG9TdHJpbmcoKSkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGFwcHJvdmVlczogaGFzQXBwcm92ZWVzID8gYXBwcm92ZWVzLm1hcChhcHByb3ZlZSA9PiBhcHByb3ZlZS50b1RyeXRlcygpLnRvU3RyaW5nKCkpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2FwaUNsaWVudC5maW5kVHJhbnNhY3Rpb25zKHJlcXVlc3QpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5oYXNoZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcCA9IHJlc3BvbnNlLmhhc2hlcy5tYXAoaGFzaCA9PiBoYXNoXzEuSGFzaC5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKGhhc2gpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPD09PSBUcmFuc2FjdGlvbkNsaWVudDo6ZmluZFRyYW5zYWN0aW9uc1wiLCByZXNwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gVHJhbnNhY3Rpb25DbGllbnQ6OmZpbmRUcmFuc2FjdGlvbnNcIiwgW10pO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHRyYW5zYWN0aW9uIGRldGFpbHMgb2Ygc3BlY2lmaWMgdHJhbnNhY3Rpb25zLlxyXG4gICAgICogQHBhcmFtIHRyYW5zYWN0aW9uSGFzaGVzIFRoZSBoYXNoZXMgdG8gZ2V0IHRoZSB0cmFuc2FjdGlvbnMgZm9yLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgbGlzdCBvZiB0cmFuc2FjdGlvbnMgb3IgcmVqZWN0cyB3aXRoIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBnZXRUcmFuc2FjdGlvbnNPYmplY3RzKHRyYW5zYWN0aW9uSGFzaGVzKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI9PT0+IFRyYW5zYWN0aW9uQ2xpZW50OjpnZXRUcmFuc2FjdGlvbnNPYmplY3RzXCIsIHRyYW5zYWN0aW9uSGFzaGVzKTtcclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNUeXBlZCh0cmFuc2FjdGlvbkhhc2hlcywgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSB0cmFuc2FjdGlvbkhhc2hlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgaGFzaGVzOiB0cmFuc2FjdGlvbkhhc2hlcy5tYXAoaGFzaCA9PiBoYXNoLnRvVHJ5dGVzKCkudG9TdHJpbmcoKSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fYXBpQ2xpZW50LmdldFRyeXRlcyhyZXF1ZXN0KTtcclxuICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UudHJ5dGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3AgPSByZXNwb25zZS50cnl0ZXMubWFwKHRyeXRlcyA9PiB0cmFuc2FjdGlvbl8xLlRyYW5zYWN0aW9uLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodHJ5dGVzKSkpO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gVHJhbnNhY3Rpb25DbGllbnQ6OmdldFRyYW5zYWN0aW9uc09iamVjdHNcIiwgcmVzcCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI8PT09IFRyYW5zYWN0aW9uQ2xpZW50OjpnZXRUcmFuc2FjdGlvbnNPYmplY3RzXCIsIFtdKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpbmNsdXNpb24gc3RhdGVzIG9mIGEgbGlzdCBvZiB0cmFuc2FjdGlvbiBoYXNoZXMuXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNhY3Rpb25IYXNoZXMgVGhlIGhhc2hlcyB0byBnZXQgdGhlIGluY2x1c2lvbiBzdGF0ZXMgZm9yLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgbGlzdCBvZiBpbmNsdXNpb24gc3RhdGVzIG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZ2V0TGF0ZXN0SW5jbHVzaW9uKHRyYW5zYWN0aW9uSGFzaGVzKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI9PT0+IFRyYW5zYWN0aW9uQ2xpZW50Ojp0cmFuc2FjdGlvbkhhc2hlc1wiKTtcclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNUeXBlZCh0cmFuc2FjdGlvbkhhc2hlcywgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSB0cmFuc2FjdGlvbkhhc2hlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgbm9kZUluZm8gPSBhd2FpdCB0aGlzLl9hcGlDbGllbnQuZ2V0Tm9kZUluZm8oKTtcclxuICAgICAgICBpZiAobm9kZUluZm8gJiYgbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihub2RlSW5mby5sYXRlc3RTb2xpZFN1YnRhbmdsZU1pbGVzdG9uZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uczogdHJhbnNhY3Rpb25IYXNoZXMubWFwKGhhc2ggPT4gaGFzaC50b1RyeXRlcygpLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICAgICAgdGlwczogW25vZGVJbmZvLmxhdGVzdFNvbGlkU3VidGFuZ2xlTWlsZXN0b25lXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2FwaUNsaWVudC5nZXRJbmNsdXNpb25TdGF0ZXMocmVxdWVzdCk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5zdGF0ZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPD09PSBUcmFuc2FjdGlvbkNsaWVudDo6dHJhbnNhY3Rpb25IYXNoZXNcIiwgcmVzcG9uc2Uuc3RhdGVzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5zdGF0ZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gVHJhbnNhY3Rpb25DbGllbnQ6OnRyYW5zYWN0aW9uSGFzaGVzXCIsIFtdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGJ1c2luZXNzRXJyb3JfMS5CdXNpbmVzc0Vycm9yKFwiVGhlIG5vZGUgY291bGQgbm90IHByb3ZpZGUgdGhlIGxhdGVzdFNvbGlkU3VidGFuZ2xlTWlsZXN0b25lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIGFkZHJlc3NlcyB3aXRoIGluZGV4LWJhc2VkIG9yIHVzaW5nIGFwaXMuXHJcbiAgICAgKiBAcGFyYW0gc2VlZCBUaGUgc2VlZCB0byBnZW5lcmF0ZSB0aGUgYWRkcmVzc2VzIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gc3RhcnRJbmRleCBUaGUgc3RhcnQgaW5kZXggdG8gZ2VuZXJhdGUgYWRkcmVzc2VzLlxyXG4gICAgICogQHBhcmFtIGVuZEluZGV4IFRoZSBlbmQgaW5kZXggdG8gZ2VuZXJhdGUgYWRkcmVzc2VzLlxyXG4gICAgICogQHBhcmFtIGluY2x1ZGVDaGVja3N1bSBJbmNsdWRlcyB0aGUgY2hlY2tzdW0gb24gYWRkcmVzc2VzLlxyXG4gICAgICogQHBhcmFtIHNlY3VyaXR5IFRoZSBzZWN1cml0eSBsZXZlbCBhdCB3aGljaCB0byBjcmVhdGUgdGhlIGFkZHJlc3Nlcy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIGxpc3Qgb2YgYWRkcmVzc2VzIG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZ2V0TmV3QWRkcmVzcyhzZWVkLCBzdGFydEluZGV4LCBlbmRJbmRleCwgaW5jbHVkZUNoZWNrc3VtLCBzZWN1cml0eSkge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPT09PiBUcmFuc2FjdGlvbkNsaWVudDo6Z2V0TmV3QWRkcmVzc1wiLCBzZWVkLCBzdGFydEluZGV4LCBlbmRJbmRleCwgaW5jbHVkZUNoZWNrc3VtLCBzZWN1cml0eSk7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNlZWQsIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgc2VlZCBtdXN0IGJlIG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShzdGFydEluZGV4KSAmJiAhb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShzdGFydEluZGV4LCBOdW1iZXIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSBzdGFydEluZGV4IG11c3QgYmUgYW4gaW50ZWdlclwiLCB7IHN0YXJ0SW5kZXggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxvY2FsU3RhcnRJbmRleCA9IHN0YXJ0SW5kZXggfHwgMDtcclxuICAgICAgICBpZiAobG9jYWxTdGFydEluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgc3RhcnRJbmRleCBtdXN0IGJlID49IDBcIiwgeyBsb2NhbFN0YXJ0SW5kZXggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGhhc0VuZEluZGV4ID0gbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihlbmRJbmRleCk7XHJcbiAgICAgICAgY29uc3QgbG9jYWxTZWN1cml0eSA9IHNlY3VyaXR5IHx8IGFkZHJlc3NTZWN1cml0eV8xLkFkZHJlc3NTZWN1cml0eS5tZWRpdW07XHJcbiAgICAgICAgbGV0IGFkZHJlc3NlcztcclxuICAgICAgICBpZiAoaGFzRW5kSW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGVuZEluZGV4KSB8fCBlbmRJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSBlbmRJbmRleCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIiwgeyBlbmRJbmRleCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0b3RhbCA9IGVuZEluZGV4IC0gc3RhcnRJbmRleCArIDE7XHJcbiAgICAgICAgICAgIGlmICh0b3RhbCA8PSAwIHx8IHRvdGFsID4gVHJhbnNhY3Rpb25DbGllbnQuTUFYX0lOUFVUUykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IGJ1c2luZXNzRXJyb3JfMS5CdXNpbmVzc0Vycm9yKGBUaGUgdG90YWwgbXVzdCBiZSA+IDAgYW5kIDw9ICR7VHJhbnNhY3Rpb25DbGllbnQuTUFYX0lOUFVUU31gLCB7IHRvdGFsIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZHJlc3NlcyA9IGF3YWl0IHRoaXMuZ2V0QWRkcmVzc2VzQnlJbmRleChzZWVkLCBzdGFydEluZGV4LCBlbmRJbmRleCwgaW5jbHVkZUNoZWNrc3VtLCBsb2NhbFNlY3VyaXR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZHJlc3NlcyA9IGF3YWl0IHRoaXMuZ2V0QWRkcmVzc2VzVG9VbnVzZWQoc2VlZCwgc3RhcnRJbmRleCwgaW5jbHVkZUNoZWNrc3VtLCBsb2NhbFNlY3VyaXR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI8PT09IFRyYW5zYWN0aW9uQ2xpZW50OjpnZXROZXdBZGRyZXNzXCIsIGFkZHJlc3Nlcyk7XHJcbiAgICAgICAgcmV0dXJuIGFkZHJlc3NlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIG5ldyBhZGRyZXNzZXMgaW5kZXgtYmFzZWQuXHJcbiAgICAgKiBAcGFyYW0gc2VlZCBUaGUgc2VlZCB0byBnZW5lcmF0ZSB0aGUgYWRkcmVzc2VzIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gc3RhcnRJbmRleCBUaGUgc3RhcnQgaW5kZXggdG8gZ2VuZXJhdGUgYWRkcmVzc2VzLlxyXG4gICAgICogQHBhcmFtIGVuZEluZGV4IFRoZSBlbmQgaW5kZXggdG8gZ2VuZXJhdGUgYWRkcmVzc2VzLlxyXG4gICAgICogQHBhcmFtIGluY2x1ZGVDaGVja3N1bSBJbmNsdWRlcyB0aGUgY2hlY2tzdW0gb24gYWRkcmVzc2VzLlxyXG4gICAgICogQHBhcmFtIHNlY3VyaXR5IFRoZSBzZWN1cml0eSBsZXZlbCBhdCB3aGljaCB0byBjcmVhdGUgdGhlIGFkZHJlc3Nlcy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIGxpc3Qgb2YgYWRkcmVzc2VzIG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZ2V0QWRkcmVzc2VzQnlJbmRleChzZWVkLCBzdGFydEluZGV4LCBlbmRJbmRleCwgaW5jbHVkZUNoZWNrc3VtLCBzZWN1cml0eSkge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPT09PiBUcmFuc2FjdGlvbkNsaWVudDo6Z2V0QWRkcmVzc2VzQnlJbmRleFwiLCBzZWVkLCBzdGFydEluZGV4LCBlbmRJbmRleCwgaW5jbHVkZUNoZWNrc3VtLCBzZWN1cml0eSk7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNlZWQsIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgc2VlZCBtdXN0IGJlIG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHN0YXJ0SW5kZXgpIHx8IHN0YXJ0SW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSBzdGFydEluZGV4IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiLCB7IHN0YXJ0SW5kZXggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihlbmRJbmRleCkgfHwgZW5kSW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSBlbmRJbmRleCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIiwgeyBlbmRJbmRleCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG90YWwgPSBlbmRJbmRleCAtIHN0YXJ0SW5kZXggKyAxO1xyXG4gICAgICAgIGlmICh0b3RhbCA8PSAwIHx8IHRvdGFsID4gVHJhbnNhY3Rpb25DbGllbnQuTUFYX0lOUFVUUykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoYFRoZSB0b3RhbCBtdXN0IGJlID4gMCBhbmQgPD0gJHtUcmFuc2FjdGlvbkNsaWVudC5NQVhfSU5QVVRTfWAsIHsgdG90YWwgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihzZWN1cml0eSkgfHwgc2VjdXJpdHkgPCAxIHx8IHNlY3VyaXR5ID4gMykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgc2VjdXJpdHkgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDNcIiwgeyBzZWN1cml0eSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYWRkcmVzc2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFkZHJlc3Nlcy5wdXNoKHRoaXMuZ2VuZXJhdGVBZGRyZXNzKHNlZWQsIHN0YXJ0SW5kZXggKyBpLCBzZWN1cml0eSwgaW5jbHVkZUNoZWNrc3VtKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPD09PSBUcmFuc2FjdGlvbkNsaWVudDo6Z2V0QWRkcmVzc2VzQnlJbmRleFwiLCBhZGRyZXNzZXMpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYWRkcmVzc2VzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIG5ldyBhZGRyZXNzIHdoaWNoIGhhdmVudCBiZWVuIHVzZWQgdXNpbmcgYXBpcy5cclxuICAgICAqIEBwYXJhbSBzZWVkIFRoZSBzZWVkIHRvIGdlbmVyYXRlIHRoZSBhZGRyZXNzZXMgZnJvbS5cclxuICAgICAqIEBwYXJhbSBzdGFydEluZGV4IFRoZSBzdGFydCBpbmRleCB0byBnZW5lcmF0ZSBhZGRyZXNzZXMuXHJcbiAgICAgKiBAcGFyYW0gaW5jbHVkZUNoZWNrc3VtIEluY2x1ZGVzIHRoZSBjaGVja3N1bSBvbiBhZGRyZXNzZXMuXHJcbiAgICAgKiBAcGFyYW0gc2VjdXJpdHkgVGhlIHNlY3VyaXR5IGxldmVsIGF0IHdoaWNoIHRvIGNyZWF0ZSB0aGUgYWRkcmVzc2VzLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byBhbiBhZGRyZXNzZXMgbGlzdCwgdGhlIGZpcnN0IHVudXNlZCBhZGRyZXNzIGlzIHRoZSBsYXN0IGluIHRoZSBsaXN0IG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZ2V0QWRkcmVzc2VzVG9VbnVzZWQoc2VlZCwgc3RhcnRJbmRleCwgaW5jbHVkZUNoZWNrc3VtLCBzZWN1cml0eSkge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPT09PiBUcmFuc2FjdGlvbkNsaWVudDo6Z2V0QWRkcmVzc2VzVG9VbnVzZWRcIiwgc2VlZCwgc3RhcnRJbmRleCwgaW5jbHVkZUNoZWNrc3VtLCBzZWN1cml0eSk7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNlZWQsIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgc2VlZCBtdXN0IGJlIG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHN0YXJ0SW5kZXgpIHx8IHN0YXJ0SW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSBzdGFydEluZGV4IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiLCB7IHN0YXJ0SW5kZXggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihzZWN1cml0eSkgfHwgc2VjdXJpdHkgPCAxIHx8IHNlY3VyaXR5ID4gMykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgc2VjdXJpdHkgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDNcIiwgeyBzZWN1cml0eSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsU3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XHJcbiAgICAgICAgbGV0IGlzVXNlZDtcclxuICAgICAgICBjb25zdCBhZGRyZXNzZXMgPSBbXTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSB0aGlzLmdlbmVyYXRlQWRkcmVzcyhzZWVkLCBsb2NhbFN0YXJ0SW5kZXgrKywgc2VjdXJpdHksIGluY2x1ZGVDaGVja3N1bSk7XHJcbiAgICAgICAgICAgIGFkZHJlc3Nlcy5wdXNoKGFkZHJlc3MpO1xyXG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzTm9DaGVja3N1bSA9IGFkZHJlc3MudG9Ucnl0ZXMoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCBzcGVudEZyb21SZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzc2VzOiBbYWRkcmVzc05vQ2hlY2tzdW1dXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZW50RnJvbVJlc3BvbnNlID0gYXdhaXQgdGhpcy5fYXBpQ2xpZW50LndlcmVBZGRyZXNzZXNTcGVudEZyb20oc3BlbnRGcm9tUmVxdWVzdCk7XHJcbiAgICAgICAgICAgIGlzVXNlZCA9IHNwZW50RnJvbVJlc3BvbnNlICYmIHNwZW50RnJvbVJlc3BvbnNlLnN0YXRlcyAmJiBzcGVudEZyb21SZXNwb25zZS5zdGF0ZXMubGVuZ3RoID4gMCA/IHNwZW50RnJvbVJlc3BvbnNlLnN0YXRlc1swXSA6IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIWlzVXNlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmluZFRyYW5zYWN0aW9uc1JlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzOiBbYWRkcmVzc05vQ2hlY2tzdW1dXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmluZFJlc3BvbnNlID0gYXdhaXQgdGhpcy5fYXBpQ2xpZW50LmZpbmRUcmFuc2FjdGlvbnMoZmluZFRyYW5zYWN0aW9uc1JlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgaXNVc2VkID0gZmluZFJlc3BvbnNlICYmIGZpbmRSZXNwb25zZS5oYXNoZXMgJiYgZmluZFJlc3BvbnNlLmhhc2hlcy5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoaXNVc2VkKTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gVHJhbnNhY3Rpb25DbGllbnQ6OmdldEFkZHJlc3Nlc1RvVW51c2VkXCIsIGFkZHJlc3Nlcyk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShhZGRyZXNzZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGlucHV0IGRhdGEgZm9yIGEgcmFuZ2Ugb2YgYWRkcmVzc2VzLlxyXG4gICAgICogQHBhcmFtIHNlZWQgVGhlIHNlZWQgdG8gZ2V0IHRoZSBpbnB1dCBkYXRhIGZvci5cclxuICAgICAqIEBwYXJhbSBzdGFydEluZGV4IFRoZSBzdGFydCBpbmRleCB0byBnZXQgdGhlIGFkZHJlc3Nlcy5cclxuICAgICAqIEBwYXJhbSBlbmRJbmRleCBUaGUgZW5kIGluZGV4IHRvIGdldCB0aGUgYWRkcmVzc2VzLlxyXG4gICAgICogQHBhcmFtIHNlY3VyaXR5IFRoZSBzZWN1cml0eSBsZXZlbCB1c2VkIHRvIGNyZWF0ZSB0aGUgYWRkcmVzc2VzLlxyXG4gICAgICogQHBhcmFtIHRvdGFsUmVxdWlyZWQgVGhlIHRocmVzaG9sZCBhdCB3aGljaCB0b3RhbCBiYWxhbmNlIHRvIHN0b3AgZ2F0aGVyaW5nIGFkZHJlc3Nlcy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIGlucHV0cyBmb3IgZWFjaCBhZGRyZXNzIG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZ2V0SW5wdXRzKHNlZWQsIHN0YXJ0SW5kZXgsIGVuZEluZGV4LCBzZWN1cml0eSwgdG90YWxSZXF1aXJlZCkge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPT09PiBUcmFuc2FjdGlvbkNsaWVudDo6Z2V0SW5wdXRzXCIsIHNlZWQsIHN0YXJ0SW5kZXgsIGVuZEluZGV4LCBzZWN1cml0eSwgdG90YWxSZXF1aXJlZCk7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNlZWQsIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgc2VlZCBtdXN0IGJlIG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHN0YXJ0SW5kZXgpIHx8IHN0YXJ0SW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSBzdGFydEluZGV4IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiLCB7IHN0YXJ0SW5kZXggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihzZWN1cml0eSkgfHwgc2VjdXJpdHkgPCAxIHx8IHNlY3VyaXR5ID4gMykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgc2VjdXJpdHkgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDNcIiwgeyBzZWN1cml0eSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHRvdGFsUmVxdWlyZWQpIHx8IHRvdGFsUmVxdWlyZWQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSB0b3RhbFJlcXVpcmVkIG11c3QgYmUgPj0gMFwiLCB7IHRvdGFsUmVxdWlyZWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IHRoaXMuZ2V0TmV3QWRkcmVzcyhzZWVkLCBzdGFydEluZGV4LCBlbmRJbmRleCwgZmFsc2UsIHNlY3VyaXR5KTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBhZGRyZXNzZXM6IGFkZHJlc3Nlcy5tYXAoYWRkID0+IGFkZC50b1RyeXRlcygpLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDEwMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9hcGlDbGllbnQuZ2V0QmFsYW5jZXMocmVxdWVzdCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRzID0gW107XHJcbiAgICAgICAgbGV0IHRvdGFsQmFsYW5jZSA9IDA7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkcmVzc2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYWxhbmNlID0gcGFyc2VJbnQocmVzcG9uc2UuYmFsYW5jZXNbaV0sIDEwKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYWxhbmNlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0cy5wdXNoKGlucHV0XzEuSW5wdXQuZnJvbVBhcmFtcyhhZGRyZXNzZXNbaV0sIHNlY3VyaXR5LCBzdGFydEluZGV4ICsgaSwgYmFsYW5jZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQmFsYW5jZSArPSBiYWxhbmNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbFJlcXVpcmVkID4gMCAmJiB0b3RhbEJhbGFuY2UgPj0gdG90YWxSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IHsgaW5wdXRzLCB0b3RhbEJhbGFuY2UgfTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gVHJhbnNhY3Rpb25DbGllbnQ6OmdldElucHV0c1wiLCByZXNwKTtcclxuICAgICAgICBpZiAodG90YWxSZXF1aXJlZCA+IDAgJiYgdG90YWxCYWxhbmNlIDwgdG90YWxSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJOb3QgZW5vdWdoIGNvbWJpbmVkIGJhbGFuY2UgaW4gdGhlIGFkZHJlc3NlcyB0byBzYXRpc2Z5IHRoZSB0b3RhbCByZXF1aXJlZFwiLCB7IHRvdGFsUmVxdWlyZWQsIHRvdGFsQmFsYW5jZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3A7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFByZXBhcmVzIHRyYW5zZmVyIGJ5IGdlbmVyYXRpbmcgYnVuZGxlLCBmaW5kaW5nIGFuZCBzaWduaW5nIGlucHV0cy5cclxuICAgICAqIEBwYXJhbSBzZWVkIFRoZSBzZWVkIHRvIHByZXBhcmUgdGhlIHRyYW5zZmVyIGZvci5cclxuICAgICAqIEBwYXJhbSB0cmFuc2ZlcnMgVGhlIHRyYW5zZmVycyB0byBwcmVwYXJlLlxyXG4gICAgICogQHBhcmFtIHRyYW5zZmVyT3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHRoZSB0cmFuc2Zlci5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIGFycmF5IG9mIFRyeXRlcyBmb3IgdGhlIHRyYW5zZmVyIG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcHJlcGFyZVRyYW5zZmVycyhzZWVkLCB0cmFuc2ZlcnMsIHRyYW5zZmVyT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPT09PiBUcmFuc2FjdGlvbkNsaWVudDo6cHJlcGFyZVRyYW5zZmVyc1wiLCBzZWVkLCB0cmFuc2ZlcnMsIHRyYW5zZmVyT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNlZWQsIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgc2VlZCBtdXN0IGJlIG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzVHlwZWQodHJhbnNmZXJzLCB0cmFuc2Zlcl8xLlRyYW5zZmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgdHJhbnNmZXJzIG11c3QgYmUgYW4gYXJyYXkgb2YgVHJhbnNmZXIgb2JqZWN0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbG9jYWxUcmFuc2Zlck9wdGlvbnMgPSB0cmFuc2Zlck9wdGlvbnMgfHwge307XHJcbiAgICAgICAgbG9jYWxUcmFuc2Zlck9wdGlvbnMuc2VjdXJpdHkgPSBsb2NhbFRyYW5zZmVyT3B0aW9ucy5zZWN1cml0eSB8fCBhZGRyZXNzU2VjdXJpdHlfMS5BZGRyZXNzU2VjdXJpdHkubWVkaXVtO1xyXG4gICAgICAgIGNvbnN0IGVtcHR5VHJ5dGVzID0gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoXCJcIik7XHJcbiAgICAgICAgY29uc3QgYWRkSE1BQyA9ICFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShsb2NhbFRyYW5zZmVyT3B0aW9ucy5obWFjS2V5KTtcclxuICAgICAgICBsZXQgYWRkZWRITUFDID0gZmFsc2U7XHJcbiAgICAgICAgLy8gSWYgbWVzc2FnZSBvciB0YWcgaXMgbm90IHN1cHBsaWVkLCBwcm92aWRlIGl0XHJcbiAgICAgICAgdHJhbnNmZXJzLmZvckVhY2godHJhbnNmZXIgPT4ge1xyXG4gICAgICAgICAgICB0cmFuc2Zlci5tZXNzYWdlID0gdHJhbnNmZXIubWVzc2FnZSA/IHRyYW5zZmVyLm1lc3NhZ2UgOiBlbXB0eVRyeXRlcztcclxuICAgICAgICAgICAgdHJhbnNmZXIudGFnID0gdHJhbnNmZXIudGFnIHx8IHRhZ18xLlRhZy5FTVBUWTtcclxuICAgICAgICAgICAgaWYgKGFkZEhNQUMgJiYgdHJhbnNmZXIudmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpyZXN0cmljdC1wbHVzLW9wZXJhbmRzIGZhbHNlIHBvc2l0aXZlXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zlci5tZXNzYWdlID0gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoVHJhbnNhY3Rpb25DbGllbnQuTlVMTF9IQVNIX1RSWVRFUyArIHRyYW5zZmVyLm1lc3NhZ2UudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBhZGRlZEhNQUMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGJ1bmRsZVxyXG4gICAgICAgIGNvbnN0IHByZXBhcmVkID0gYnVuZGxlSGVscGVyXzEuQnVuZGxlSGVscGVyLnByZXBhcmVCdW5kbGUodGhpcy5fdGltZVNlcnZpY2UsIHRyYW5zZmVycyk7XHJcbiAgICAgICAgY29uc3QgYnVuZGxlID0gcHJlcGFyZWQuYnVuZGxlO1xyXG4gICAgICAgIGNvbnN0IGxhc3RUYWcgPSBwcmVwYXJlZC5sYXN0VGFnO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsVmFsdWUgPSBwcmVwYXJlZC50b3RhbFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMgPSBwcmVwYXJlZC5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzO1xyXG4gICAgICAgIC8vIEdldCBpbnB1dHMgaWYgd2UgYXJlIHNlbmRpbmcgdG9rZW5zXHJcbiAgICAgICAgaWYgKHRvdGFsVmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vICBDYXNlIDE6IHVzZXIgcHJvdmlkZWQgaW5wdXRzXHJcbiAgICAgICAgICAgIC8vICBWYWxpZGF0ZSB0aGUgaW5wdXRzIGJ5IGNhbGxpbmcgZ2V0QmFsYW5jZXNcclxuICAgICAgICAgICAgaWYgKGxvY2FsVHJhbnNmZXJPcHRpb25zLmlucHV0cykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXM6IGxvY2FsVHJhbnNmZXJPcHRpb25zLmlucHV0cy5tYXAoaW5wdXQgPT4gaW5wdXQuYWRkcmVzcy50b1RyeXRlcygpLnRvU3RyaW5nKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMTAwXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFsYW5jZXMgPSBhd2FpdCB0aGlzLl9hcGlDbGllbnQuZ2V0QmFsYW5jZXMocmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtZWRJbnB1dHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbEJhbGFuY2UgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYWxhbmNlcy5iYWxhbmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhbGFuY2UgPSBwYXJzZUludChiYWxhbmNlcy5iYWxhbmNlc1tpXSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGlucHV0IGhhcyBiYWxhbmNlLCBhZGQgaXQgdG8gY29uZmlybWVkSW5wdXRzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGFuY2UgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQmFsYW5jZSArPSBiYWxhbmNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFRyYW5zZmVyT3B0aW9ucy5pbnB1dHNbaV0uYmFsYW5jZSA9IGJhbGFuY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1lZElucHV0cy5wdXNoKGxvY2FsVHJhbnNmZXJPcHRpb25zLmlucHV0c1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHdlJ3ZlIGFscmVhZHkgcmVhY2hlZCB0aGUgaW50ZW5kZWQgaW5wdXQgdmFsdWUsIGJyZWFrIG91dCBvZiBsb29wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbEJhbGFuY2UgPj0gdG90YWxWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gbm90IGVub3VnaCBiYWxhbmNlIGVycm9yXHJcbiAgICAgICAgICAgICAgICBpZiAodG90YWxWYWx1ZSA+IHRvdGFsQmFsYW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIk5vdCBlbm91Z2ggYmFsYW5jZSBpbiB0aGUgaW5wdXQgYWRkcmVzc2VzIHRvIHNhdGlzZnkgdGhlIHRvdGFsIGZvciB0aGUgdHJhbnNmZXJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFkZFJlbWFpbmRlcihzZWVkLCBidW5kbGUsIGxvY2FsVHJhbnNmZXJPcHRpb25zLCBjb25maXJtZWRJbnB1dHMsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMsIHRvdGFsVmFsdWUsIGxhc3RUYWcsIGFkZGVkSE1BQyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBObyBpbnB1dHMgc3VwcGxpZWQgc28gd2UgbmVlZCB0byBnZXQgc29tZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRzUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldElucHV0cyhzZWVkLCAwLCB1bmRlZmluZWQsIGxvY2FsVHJhbnNmZXJPcHRpb25zLnNlY3VyaXR5LCB0b3RhbFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWRkUmVtYWluZGVyKHNlZWQsIGJ1bmRsZSwgbG9jYWxUcmFuc2Zlck9wdGlvbnMsIGlucHV0c1Jlc3BvbnNlLmlucHV0cywgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cywgdG90YWxWYWx1ZSwgbGFzdFRhZywgYWRkZWRITUFDKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSWYgbm8gaW5wdXQgcmVxdWlyZWQsIGRvbid0IHNpZ24gYW5kIHNpbXBseSBmaW5hbGl6ZSB0aGUgYnVuZGxlXHJcbiAgICAgICAgICAgIGJ1bmRsZUhlbHBlcl8xLkJ1bmRsZUhlbHBlci5maW5hbGl6ZUJ1bmRsZShidW5kbGUpO1xyXG4gICAgICAgICAgICBidW5kbGUuYWRkU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cyhzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVuZGxlLnRyYW5zYWN0aW9ucyA9IGJ1bmRsZS50cmFuc2FjdGlvbnMucmV2ZXJzZSgpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPD09PSBUcmFuc2FjdGlvbkNsaWVudDo6cHJlcGFyZVRyYW5zZmVyc1wiLCBidW5kbGUpO1xyXG4gICAgICAgIHJldHVybiBidW5kbGU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEF0dGFjaCB0aGUgdHJhbnNhY3Rpb25zIHRvIHRoZSB0YW5nbGUgYnkgZG9pbmcgcHJvb2Ygb2Ygd29yay5cclxuICAgICAqIEBwYXJhbSBidW5kbGUgVGhlIGJ1bmRsZSBvZiB0cmFuc2FjdGlvbnMgdG8gYXR0YWNoLlxyXG4gICAgICogQHBhcmFtIGRlcHRoIFZhbHVlIHRoYXQgZGV0ZXJtaW5lcyBob3cgZmFyIHRvIGdvIGZvciB0aXAgc2VsZWN0aW9uLlxyXG4gICAgICogQHBhcmFtIG1pbldlaWdodE1hZ25pdHVkZSBUaGUgbWluaW11bSB3ZWlnaHQgbWFnbml0dWRlIGZvciB0aGUgcHJvb2Ygb2Ygd29yay5cclxuICAgICAqIEBwYXJhbSByZWZlcmVuY2UgVGhlIHJlZmVyZW5jZSB0byBzZW5kIHdpdGggdGhlIHRyYW5zYWN0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIGJ1bmRsZSBvZiB0cmFuc2FjdGlvbnMgY3JlYXRlZCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGF0dGFjaFRvVGFuZ2xlKGJ1bmRsZSwgZGVwdGgsIG1pbldlaWdodE1hZ25pdHVkZSwgcmVmZXJlbmNlKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI9PT0+IFRyYW5zYWN0aW9uQ2xpZW50OjphdHRhY2hUb1RhbmdsZVwiLCBidW5kbGUsIGRlcHRoLCBtaW5XZWlnaHRNYWduaXR1ZGUsIHJlZmVyZW5jZSk7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGJ1bmRsZSwgYnVuZGxlXzEuQnVuZGxlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgYnVuZGxlIG11c3QgYmUgYW4gYXJyYXkgb2YgdHlwZSBCdW5kbGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc1R5cGVkKGJ1bmRsZS50cmFuc2FjdGlvbnMsIHRyYW5zYWN0aW9uXzEuVHJhbnNhY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSBidW5kbGUudHJhbnNhY3Rpb25zIG11c3QgYmUgYW4gYXJyYXkgb2YgdHlwZSBUcmFuc2FjdGlvblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGRlcHRoKSB8fCBkZXB0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSBkZXB0aCBtdXN0IGJlIGEgbnVtYmVyID4gMFwiLCB7IGRlcHRoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobWluV2VpZ2h0TWFnbml0dWRlKSB8fCBtaW5XZWlnaHRNYWduaXR1ZGUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgbWluV2VpZ2h0TWFnbml0dWRlIG11c3QgYmUgYSBudW1iZXIgPiAwXCIsIHsgbWluV2VpZ2h0TWFnbml0dWRlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnNUb0FwcHJvdmVSZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBkZXB0aCxcclxuICAgICAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2UgPyByZWZlcmVuY2UudG9Ucnl0ZXMoKS50b1N0cmluZygpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnNUb0FwcHJvdmUgPSBhd2FpdCB0aGlzLl9hcGlDbGllbnQuZ2V0VHJhbnNhY3Rpb25zVG9BcHByb3ZlKHRyYW5zYWN0aW9uc1RvQXBwcm92ZVJlcXVlc3QpO1xyXG4gICAgICAgIGNvbnN0IGFsbFRyeXRlcyA9IGF3YWl0IHRoaXMuX3Byb29mT2ZXb3JrLnBvdyhoYXNoXzEuSGFzaC5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRyYW5zYWN0aW9uc1RvQXBwcm92ZS50cnVua1RyYW5zYWN0aW9uKSksIGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodHJhbnNhY3Rpb25zVG9BcHByb3ZlLmJyYW5jaFRyYW5zYWN0aW9uKSksIGJ1bmRsZS50cmFuc2FjdGlvbnMubWFwKHQgPT4gdC50b1RyeXRlcygpKSwgbWluV2VpZ2h0TWFnbml0dWRlKTtcclxuICAgICAgICBjb25zdCBwb3dUcmFuc2FjdGlvbnMgPSBhbGxUcnl0ZXMubWFwKHJldHVyblRyeXRlcyA9PiB0cmFuc2FjdGlvbl8xLlRyYW5zYWN0aW9uLmZyb21Ucnl0ZXMocmV0dXJuVHJ5dGVzKSk7XHJcbiAgICAgICAgY29uc3QgbmV3QnVuZGxlID0gbmV3IGJ1bmRsZV8xLkJ1bmRsZSgpO1xyXG4gICAgICAgIG5ld0J1bmRsZS50cmFuc2FjdGlvbnMgPSBwb3dUcmFuc2FjdGlvbnM7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI8PT09IFRyYW5zYWN0aW9uQ2xpZW50OjphdHRhY2hUb1RhbmdsZVwiLCBuZXdCdW5kbGUpO1xyXG4gICAgICAgIHJldHVybiBuZXdCdW5kbGU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdyYXBwZXIgZnVuY3Rpb24gdGhhdCBkb2VzIGF0dGFjaFRvVGFuZ2xlIGFuZCB0aGVuIHN0b3JlcyBhbmQgYnJvYWRjYXN0cyB0aGUgdHJhbnNhY3Rpb25zLlxyXG4gICAgICogQHBhcmFtIGJ1bmRsZSBUaGUgYnVuZGxlIG9mIHRyYW5zYWN0aW9ucyB0byBzZW5kLlxyXG4gICAgICogQHBhcmFtIGRlcHRoIFZhbHVlIHRoYXQgZGV0ZXJtaW5lcyBob3cgZmFyIHRvIGdvIGZvciB0aXAgc2VsZWN0aW9uLlxyXG4gICAgICogQHBhcmFtIG1pbldlaWdodE1hZ25pdHVkZSBUaGUgbWluaW11bSB3ZWlnaHQgbWFnbml0dWRlIGZvciB0aGUgcHJvb2Ygb2Ygd29yay5cclxuICAgICAqIEBwYXJhbSByZWZlcmVuY2UgVGhlIHJlZmVyZW5jZSB0byBzZW5kIHdpdGggdGhlIHRyYW5zYWN0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIGJ1bmRsZSBvZiB0cmFuc2FjdGlvbnMgY3JlYXRlZCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHNlbmRUcmFuc2FjdGlvbnMoYnVuZGxlLCBkZXB0aCwgbWluV2VpZ2h0TWFnbml0dWRlLCByZWZlcmVuY2UpIHtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIj09PT4gVHJhbnNhY3Rpb25DbGllbnQ6OnNlbmRUcmFuc2FjdGlvbnNcIiwgYnVuZGxlLCBkZXB0aCwgbWluV2VpZ2h0TWFnbml0dWRlLCByZWZlcmVuY2UpO1xyXG4gICAgICAgIGNvbnN0IGF0dGFjaGVkVHJhbnNhY3Rpb25zQnVuZGxlID0gYXdhaXQgdGhpcy5hdHRhY2hUb1RhbmdsZShidW5kbGUsIGRlcHRoLCBtaW5XZWlnaHRNYWduaXR1ZGUsIHJlZmVyZW5jZSk7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVUcmFuc2FjdGlvbnNSZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICB0cnl0ZXM6IGF0dGFjaGVkVHJhbnNhY3Rpb25zQnVuZGxlLnRyYW5zYWN0aW9ucy5tYXAodCA9PiB0LnRvVHJ5dGVzKCkudG9TdHJpbmcoKSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX2FwaUNsaWVudC5zdG9yZVRyYW5zYWN0aW9ucyhzdG9yZVRyYW5zYWN0aW9uc1JlcXVlc3QpO1xyXG4gICAgICAgIGNvbnN0IGJyb2FkY2FzdFRyYW5zYWN0aW9uc1JlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIHRyeXRlczogc3RvcmVUcmFuc2FjdGlvbnNSZXF1ZXN0LnRyeXRlc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fYXBpQ2xpZW50LmJyb2FkY2FzdFRyYW5zYWN0aW9ucyhicm9hZGNhc3RUcmFuc2FjdGlvbnNSZXF1ZXN0KTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gVHJhbnNhY3Rpb25DbGllbnQ6OnNlbmRUcmFuc2FjdGlvbnNcIiwgYXR0YWNoZWRUcmFuc2FjdGlvbnNCdW5kbGUpO1xyXG4gICAgICAgIHJldHVybiBhdHRhY2hlZFRyYW5zYWN0aW9uc0J1bmRsZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogV3JhcHBlciBmdW5jdGlvbiB0aGF0IGRvZXMgcHJlcGFyZVRyYW5zZmVycyBhbmQgdGhlbiBzZW5kVHJhbnNhY3Rpb25zLlxyXG4gICAgICogQHBhcmFtIHNlZWQgVGhlIHNlZWQgdG8gc2VuZCB0aGUgdHJhbnNmZXIgZm9yLlxyXG4gICAgICogQHBhcmFtIGRlcHRoIFZhbHVlIHRoYXQgZGV0ZXJtaW5lcyBob3cgZmFyIHRvIGdvIGZvciB0aXAgc2VsZWN0aW9uLlxyXG4gICAgICogQHBhcmFtIG1pbldlaWdodE1hZ25pdHVkZSBUaGUgbWluaW11bSB3ZWlnaHQgbWFnbml0dWRlIGZvciB0aGUgcHJvb2Ygb2Ygd29yay5cclxuICAgICAqIEBwYXJhbSB0cmFuc2ZlcnMgVGhlIHRyYW5zZmVycyB0byBzZW5kLlxyXG4gICAgICogQHBhcmFtIHRyYW5zZmVyT3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHRoZSB0cmFuc2Zlci5cclxuICAgICAqIEBwYXJhbSByZWZlcmVuY2UgVGhlIHJlZmVyZW5jZSB0byBzZW5kIHdpdGggdGhlIHRyYW5zYWN0aW9ucy5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIGxpc3Qgb2YgdHJhbnNhY3Rpb25zIGNyZWF0ZWQgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBzZW5kVHJhbnNmZXIoc2VlZCwgZGVwdGgsIG1pbldlaWdodE1hZ25pdHVkZSwgdHJhbnNmZXJzLCB0cmFuc2Zlck9wdGlvbnMsIHJlZmVyZW5jZSkge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPT09PiBUcmFuc2FjdGlvbkNsaWVudDo6c2VuZFRyYW5zZmVyXCIsIHNlZWQsIGRlcHRoLCBtaW5XZWlnaHRNYWduaXR1ZGUsIHRyYW5zZmVycywgdHJhbnNmZXJPcHRpb25zLCByZWZlcmVuY2UpO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zZmVyVHJ5dGVzID0gYXdhaXQgdGhpcy5wcmVwYXJlVHJhbnNmZXJzKHNlZWQsIHRyYW5zZmVycywgdHJhbnNmZXJPcHRpb25zKTtcclxuICAgICAgICBjb25zdCBzZW50QnVuZGxlID0gYXdhaXQgdGhpcy5zZW5kVHJhbnNhY3Rpb25zKHRyYW5zZmVyVHJ5dGVzLCBkZXB0aCwgbWluV2VpZ2h0TWFnbml0dWRlLCByZWZlcmVuY2UpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPD09PSBUcmFuc2FjdGlvbkNsaWVudDo6c2VuZFRyYW5zZmVyXCIsIHNlbnRCdW5kbGUpO1xyXG4gICAgICAgIHJldHVybiBzZW50QnVuZGxlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kIG91dCBpZiBhIHRyYW5zYWN0aW9uIGlzIHByb21vdGFibGUuXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNhY3Rpb25UYWlsIFRoZSBoYXNoIG9mIHRoZSB0cmFuc2FjdGlvbiB0byBiZSBwcm9tb3RlZC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgdHJhbnNhY3Rpb24gaXMgcHJvbW90YWJsZSByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGlzUHJvbW90YWJsZSh0cmFuc2FjdGlvblRhaWwpIHtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIj09PT4gVHJhbnNhY3Rpb25DbGllbnQ6OmlzUHJvbW90YWJsZVwiLCB0cmFuc2FjdGlvblRhaWwpO1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cmFuc2FjdGlvblRhaWwsIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgdHJhbnNhY3Rpb25UYWlsIG11c3QgYmUgYW4gb2JqZWN0IG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2hlY2tDb25zaXN0ZW5jeVJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIHRhaWxzOiBbdHJhbnNhY3Rpb25UYWlsLnRvVHJ5dGVzKCkudG9TdHJpbmcoKV1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGNoZWNrQ29uc2lzdGVuY3lSZXNwb25zZSA9IGF3YWl0IHRoaXMuX2FwaUNsaWVudC5jaGVja0NvbnNpc3RlbmN5KGNoZWNrQ29uc2lzdGVuY3lSZXF1ZXN0KTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gVHJhbnNhY3Rpb25DbGllbnQ6OmlzUHJvbW90YWJsZVwiLCBjaGVja0NvbnNpc3RlbmN5UmVzcG9uc2Uuc3RhdGUpO1xyXG4gICAgICAgIHJldHVybiBjaGVja0NvbnNpc3RlbmN5UmVzcG9uc2Uuc3RhdGU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZXMgd2hldGhlciB5b3Ugc2hvdWxkIHJlcGxheSBhIHRyYW5zYWN0aW9uIG9yIG1ha2UgYSBuZXcgb25lIChlaXRoZXIgd2l0aCB0aGUgc2FtZSBpbnB1dCwgb3IgYSBkaWZmZXJlbnQgb25lKS5cclxuICAgICAqIEBwYXJhbSBhZGRyZXNzZXMgSW5wdXQgYWRkcmVzcyB5b3Ugd2FudCB0byBoYXZlIHRlc3RlZC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgYWRkcmVzc2VzIGFyZSByZWF0dGFjaGFibGUgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBpc1JlYXR0YWNoYWJsZShhZGRyZXNzZXMpIHtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIj09PT4gVHJhbnNhY3Rpb25DbGllbnQ6OmlzUmVhdHRhY2hhYmxlXCIsIGFkZHJlc3Nlcyk7XHJcbiAgICAgICAgaWYgKCFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzVHlwZWQoYWRkcmVzc2VzLCBhZGRyZXNzXzEuQWRkcmVzcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGJ1c2luZXNzRXJyb3JfMS5CdXNpbmVzc0Vycm9yKFwiVGhlIGFkZHJlc3NlcyBtdXN0IGJlIGFuIG9iamVjdCBvZiB0eXBlIEFkZHJlc3NcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFkZHJzVHhzTWFwID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRyZXNzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYWRkcmVzc1N0cmluZyA9IGFkZHJlc3Nlc1tpXS50b1RyeXRlcygpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGFkZHJzVHhzTWFwW2FkZHJlc3NTdHJpbmddID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IGF3YWl0IHRoaXMuZmluZFRyYW5zYWN0aW9uT2JqZWN0cyh1bmRlZmluZWQsIGFkZHJlc3Nlcyk7XHJcbiAgICAgICAgY29uc3QgdmFsdWVUcmFuc2FjdGlvbnMgPSBbXTtcclxuICAgICAgICB0cmFuc2FjdGlvbnMuZm9yRWFjaCgodHJhbnNhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uLnZhbHVlLnRvTnVtYmVyKCkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eEFkZHJlc3MgPSB0cmFuc2FjdGlvbi5hZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHhIYXNoID0gdHJhbnNhY3Rpb25IZWxwZXJfMS5UcmFuc2FjdGlvbkhlbHBlci5oYXNoKHRyYW5zYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGFkZHJzVHhzTWFwW3R4QWRkcmVzcy50b1RyeXRlcygpLnRvU3RyaW5nKCldLnB1c2godHhIYXNoKTtcclxuICAgICAgICAgICAgICAgIHZhbHVlVHJhbnNhY3Rpb25zLnB1c2godHhIYXNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCByZXN1bHRzO1xyXG4gICAgICAgIGlmICh2YWx1ZVRyYW5zYWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluY2x1c2lvblN0YXRlcyA9IGF3YWl0IHRoaXMuZ2V0TGF0ZXN0SW5jbHVzaW9uKHZhbHVlVHJhbnNhY3Rpb25zKTtcclxuICAgICAgICAgICAgcmVzdWx0cyA9IGFkZHJlc3Nlcy5tYXAoKGFkZHJlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzaG91bGRSZWF0dGFjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eHMgPSBhZGRyc1R4c01hcFthZGRyZXNzLnRvVHJ5dGVzKCkudG9TdHJpbmcoKV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHR4cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR4SW5kZXggPSB2YWx1ZVRyYW5zYWN0aW9ucy5pbmRleE9mKHR4c1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkUmVhdHRhY2ggPSAhaW5jbHVzaW9uU3RhdGVzW3R4SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2hvdWxkUmVhdHRhY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3VsZFJlYXR0YWNoO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRyZXNzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gVHJhbnNhY3Rpb25DbGllbnQ6OmlzUmVhdHRhY2hhYmxlXCIsIHJlc3VsdHMpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9tb3RlcyBhIHRyYW5zYWN0aW9uIGJ5IGFkZGluZyBzcGFtIG9uIHRvcCBvZiBpdCwgYXMgbG9uZyBhcyBpdCBpcyBwcm9tb3RhYmxlLlxyXG4gICAgICogV2lsbCBwcm9tb3RlIGJ5IGFkZGluZyB0cmFuc2ZlcnMgb24gdG9wIG9mIHRoZSBjdXJyZW50IG9uZSB3aXRoIGRlbGF5IGludGVydmFsLlxyXG4gICAgICogVXNlIHByb21vdGVPcHRpb25zLmludGVycnVwdCB0byB0ZXJtaW5hdGUgdGhlIHByb21vdGlvbi5cclxuICAgICAqIElmIHByb21vdGVPcHRpb25zLmRlbGF5IGlzIHNldCB0byAwIG9ubHkgb25lIHByb21vdGlvbiB0cmFuc2ZlciB3aWxsIGJlIHNlbnQuXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNhY3Rpb25UYWlsIFRoZSBoYXNoIG9mIHRoZSB0cmFuc2FjdGlvbiB0byBiZSBwcm9tb3RlZC5cclxuICAgICAqIEBwYXJhbSBkZXB0aCBWYWx1ZSB0aGF0IGRldGVybWluZXMgaG93IGZhciB0byBnbyBmb3IgdGlwIHNlbGVjdGlvbi5cclxuICAgICAqIEBwYXJhbSBtaW5XZWlnaHRNYWduaXR1ZGUgVGhlIG1pbmltdW0gd2VpZ2h0IG1hZ25pdHVkZSBmb3IgdGhlIHByb29mIG9mIHdvcmsuXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNmZXJzIFRoZSB0cmFuc2ZlcnMgdG8gc2VuZC5cclxuICAgICAqIEBwYXJhbSBwcm9tb3RlT3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHRoZSBwcm9tb3RlLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgbGlzdCBvZiB0cmFuc2FjdGlvbnMgY3JlYXRlZCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHByb21vdGVUcmFuc2FjdGlvbih0cmFuc2FjdGlvblRhaWwsIGRlcHRoLCBtaW5XZWlnaHRNYWduaXR1ZGUsIHRyYW5zZmVycywgcHJvbW90ZU9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIj09PT4gVHJhbnNhY3Rpb25DbGllbnQ6OnByb21vdGVUcmFuc2FjdGlvblwiLCB0cmFuc2FjdGlvblRhaWwsIGRlcHRoLCBtaW5XZWlnaHRNYWduaXR1ZGUsIHRyYW5zZmVycywgcHJvbW90ZU9wdGlvbnMpO1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cmFuc2FjdGlvblRhaWwsIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgdHJhbnNhY3Rpb25UYWlsIG11c3QgYmUgYW4gb2JqZWN0IG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGRlcHRoKSB8fCBkZXB0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSBkZXB0aCBtdXN0IGJlIGEgbnVtYmVyID4gMFwiLCB7IGRlcHRoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobWluV2VpZ2h0TWFnbml0dWRlKSB8fCBtaW5XZWlnaHRNYWduaXR1ZGUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgbWluV2VpZ2h0TWFnbml0dWRlIG11c3QgYmUgYSBudW1iZXIgPiAwXCIsIHsgbWluV2VpZ2h0TWFnbml0dWRlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNUeXBlZCh0cmFuc2ZlcnMsIHRyYW5zZmVyXzEuVHJhbnNmZXIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSB0cmFuc2ZlcnMgbXVzdCBhbiBhcnJheSBvZiBUcmFuc2ZlciBvYmplY3RzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsb2NhbFByb21vdGVPcHRpb25zID0gcHJvbW90ZU9wdGlvbnMgfHwge307XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KGxvY2FsUHJvbW90ZU9wdGlvbnMuaW50ZXJydXB0KSkge1xyXG4gICAgICAgICAgICBsb2NhbFByb21vdGVPcHRpb25zLmludGVycnVwdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9jYWxQcm9tb3RlT3B0aW9ucy5pbnRlcnJ1cHQgPT09IGZhbHNlIHx8ICh0eXBlb2YgbG9jYWxQcm9tb3RlT3B0aW9ucy5pbnRlcnJ1cHQgPT09IFwiZnVuY3Rpb25cIiAmJiAhbG9jYWxQcm9tb3RlT3B0aW9ucy5pbnRlcnJ1cHQoKSkpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNQcm9tb3RhYmxlID0gYXdhaXQgdGhpcy5pc1Byb21vdGFibGUodHJhbnNhY3Rpb25UYWlsKTtcclxuICAgICAgICAgICAgaWYgKGlzUHJvbW90YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VuZFRyYW5zZmVyUmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlbmRUcmFuc2ZlcihoYXNoXzEuSGFzaC5mcm9tVHJ5dGVzKHRyYW5zZmVyc1swXS5hZGRyZXNzLnRvVHJ5dGVzKCkpLCBkZXB0aCwgbWluV2VpZ2h0TWFnbml0dWRlLCB0cmFuc2ZlcnMsIHVuZGVmaW5lZCwgdHJhbnNhY3Rpb25UYWlsKTtcclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxvY2FsUHJvbW90ZU9wdGlvbnMuZGVsYXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JhY2tncm91bmRUYXNrU2VydmljZS5jcmVhdGUoYXN5bmMgKCkgPT4gdGhpcy5wcm9tb3RlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb25UYWlsLCBkZXB0aCwgbWluV2VpZ2h0TWFnbml0dWRlLCB0cmFuc2ZlcnMsIGxvY2FsUHJvbW90ZU9wdGlvbnMpLCBsb2NhbFByb21vdGVPcHRpb25zLmRlbGF5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPD09PSBUcmFuc2FjdGlvbkNsaWVudDo6cHJvbW90ZVRyYW5zYWN0aW9uXCIsIHNlbmRUcmFuc2ZlclJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VuZFRyYW5zZmVyUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUcmFuc2FjdGlvbiBpcyBub3QgcHJvbW90YWJsZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI8PT09IFRyYW5zYWN0aW9uQ2xpZW50Ojpwcm9tb3RlVHJhbnNhY3Rpb25cIiwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGFzc29jaWF0ZWQgYnVuZGxlIHRyYW5zYWN0aW9ucyBvZiBhIHNpbmdsZSB0cmFuc2FjdGlvbi5cclxuICAgICAqIERvZXMgdmFsaWRhdGlvbiBvZiBzaWduYXR1cmVzLCB0b3RhbCBzdW0gYXMgd2VsbCBhcyBidW5kbGUgb3JkZXIuXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNhY3Rpb25IYXNoIEhhc2ggb2YgYSB0cnVuayBvciBhIHRhaWwgdHJhbnNhY3Rpb24gb2YgYSBidW5kbGUuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBidW5kbGUgdHJhbnNhY3Rpb25zIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZ2V0QnVuZGxlKHRyYW5zYWN0aW9uSGFzaCkge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPT09PiBUcmFuc2FjdGlvbkNsaWVudDo6Z2V0QnVuZGxlXCIsIHRyYW5zYWN0aW9uSGFzaCk7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyYW5zYWN0aW9uSGFzaCwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSB0cmFuc2FjdGlvbkhhc2ggbXVzdCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCB0aGlzLnRyYXZlcnNlQnVuZGxlKHRyYW5zYWN0aW9uSGFzaCk7XHJcbiAgICAgICAgY29uc3QgYnVuZGxlID0gbmV3IGJ1bmRsZV8xLkJ1bmRsZSgpO1xyXG4gICAgICAgIGJ1bmRsZS50cmFuc2FjdGlvbnMgPSB0cmFuc2FjdGlvbnM7XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGJ1bmRsZUhlbHBlcl8xLkJ1bmRsZUhlbHBlci5pc1ZhbGlkKGJ1bmRsZSk7XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIkludmFsaWQgYnVuZGxlIHByb3ZpZGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gVHJhbnNhY3Rpb25DbGllbnQ6OmdldEJ1bmRsZVwiLCBidW5kbGUpO1xyXG4gICAgICAgIHJldHVybiBidW5kbGU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRyYXZlcnNlIHRoZSBCdW5kbGUgYnkgZ29pbmcgZG93biB0aGUgdHJ1bmtUcmFuc2FjdGlvbnMgdW50aWxcclxuICAgICAqIHRoZSBidW5kbGUgaGFzaCBvZiB0aGUgdHJhbnNhY3Rpb24gaXMgbm8gbG9uZ2VyIHRoZSBzYW1lLlxyXG4gICAgICogQHBhcmFtIHRydW5rVHJhbnNhY3Rpb24gSGFzaCBvZiBhIHRydW5rIG9yIGEgdGFpbCB0cmFuc2FjdGlvbiBvZiBhIGJ1bmRsZS5cclxuICAgICAqIEBwYXJhbSBidW5kbGVIYXNoIFRoZSBidW5kbGUgaGFzaCB0byBtYXRjaC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIGJ1bmRsZSB0cmFuc2FjdGlvbnMgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBhc3luYyB0cmF2ZXJzZUJ1bmRsZSh0cnVua1RyYW5zYWN0aW9uLCBidW5kbGVIYXNoKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI9PT0+IFRyYW5zYWN0aW9uQ2xpZW50Ojp0cmF2ZXJzZUJ1bmRsZVwiLCB0cnVua1RyYW5zYWN0aW9uLCBidW5kbGVIYXNoKTtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJ1bmtUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSB0cnVua1RyYW5zYWN0aW9uIG11c3QgYmUgYW4gb2JqZWN0IG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYWxsQnVuZGxlVHJhbnNhY3Rpb25zID0gW107XHJcbiAgICAgICAgbGV0IG5ld1RydW5rVHJhbnNhY3Rpb24gPSB0cnVua1RyYW5zYWN0aW9uO1xyXG4gICAgICAgIGxldCBuZXdCdW5kbGVIYXNoID0gYnVuZGxlSGFzaDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldFRyeXRlc1JlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICBoYXNoZXM6IFtuZXdUcnVua1RyYW5zYWN0aW9uLnRvVHJ5dGVzKCkudG9TdHJpbmcoKV1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgZ2V0VHJ5dGVzUmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9hcGlDbGllbnQuZ2V0VHJ5dGVzKGdldFRyeXRlc1JlcXVlc3QpO1xyXG4gICAgICAgICAgICBjb25zdCB0cnl0ZXMgPSAhb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkoZ2V0VHJ5dGVzUmVzcG9uc2UpICYmXHJcbiAgICAgICAgICAgICAgICAhb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkoZ2V0VHJ5dGVzUmVzcG9uc2UudHJ5dGVzKSAmJlxyXG4gICAgICAgICAgICAgICAgZ2V0VHJ5dGVzUmVzcG9uc2UudHJ5dGVzLmxlbmd0aCA+IDAgPyBnZXRUcnl0ZXNSZXNwb25zZS50cnl0ZXNbMF0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh0cnl0ZXMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJCdW5kbGUgdHJhbnNhY3Rpb25zIG5vdCB2aXNpYmxlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25PYmplY3QgPSB0cmFuc2FjdGlvbl8xLlRyYW5zYWN0aW9uLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodHJ5dGVzKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBmaXJzdCB0cmFuc2FjdGlvbiB0byBzZWFyY2ggaXMgbm90IGEgdGFpbCwgcmV0dXJuIGVycm9yXHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNIYXNoID0gIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KG5ld0J1bmRsZUhhc2gpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNIYXNoICYmIHRyYW5zYWN0aW9uT2JqZWN0LmN1cnJlbnRJbmRleC50b051bWJlcigpICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGJ1c2luZXNzRXJyb3JfMS5CdXNpbmVzc0Vycm9yKFwiSW52YWxpZCB0YWlsIHRyYW5zYWN0aW9uIHN1cHBsaWVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gSWYgbm8gYnVuZGxlIGhhc2gsIGRlZmluZSBpdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxCdW5kbGVIYXNoID0gaGFzSGFzaCA/IG5ld0J1bmRsZUhhc2ggOiB0cmFuc2FjdGlvbk9iamVjdC5idW5kbGU7XHJcbiAgICAgICAgICAgICAgICBuZXdUcnVua1RyYW5zYWN0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgbmV3QnVuZGxlSGFzaCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIC8vIElmIHNhbWUgYnVuZGxlIGhhc2ggY29udGludWVcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhbEJ1bmRsZUhhc2gudG9Ucnl0ZXMoKS50b1N0cmluZygpID09PSB0cmFuc2FjdGlvbk9iamVjdC5idW5kbGUudG9Ucnl0ZXMoKS50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRyYW5zYWN0aW9uIG9iamVjdCB0byBidW5kbGVcclxuICAgICAgICAgICAgICAgICAgICBhbGxCdW5kbGVUcmFuc2FjdGlvbnMucHVzaCh0cmFuc2FjdGlvbk9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbW9yZSB0aGFuIG9uZSBlbGVtZW50IHRoZW4gY29udGludWVcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNhY3Rpb25PYmplY3QubGFzdEluZGV4LnRvTnVtYmVyKCkgIT09IDAgfHwgdHJhbnNhY3Rpb25PYmplY3QuY3VycmVudEluZGV4LnRvTnVtYmVyKCkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VHJ1bmtUcmFuc2FjdGlvbiA9IHRyYW5zYWN0aW9uT2JqZWN0LnRydW5rVHJhbnNhY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0J1bmRsZUhhc2ggPSBsb2NhbEJ1bmRsZUhhc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAobmV3VHJ1bmtUcmFuc2FjdGlvbiAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gVHJhbnNhY3Rpb25DbGllbnQ6OnRyYXZlcnNlQnVuZGxlXCIsIGFsbEJ1bmRsZVRyYW5zYWN0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIGFsbEJ1bmRsZVRyYW5zYWN0aW9ucztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogV3JhcHBlciB3aGljaCBnZXRzIGEgYnVuZGxlIGFuZCB0aGVuIHJlcGxheXMgYSB0cmFuc2ZlciBieSBkb2luZyBQcm9vZiBvZiBXb3JrIGFnYWluLlxyXG4gICAgICogQHBhcmFtIHRyYW5zYWN0aW9uSGFzaCBUaGUgaGFzaCBvZiB0aGUgdHJhbnNhY3Rpb24gdG8gYmUgcHJvbW90ZWQuXHJcbiAgICAgKiBAcGFyYW0gZGVwdGggVmFsdWUgdGhhdCBkZXRlcm1pbmVzIGhvdyBmYXIgdG8gZ28gZm9yIHRpcCBzZWxlY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gbWluV2VpZ2h0TWFnbml0dWRlIFRoZSBtaW5pbXVtIHdlaWdodCBtYWduaXR1ZGUgZm9yIHRoZSBwcm9vZiBvZiB3b3JrLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgbGlzdCBvZiB0cmFuc2FjdGlvbnMgY3JlYXRlZCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHJlYXR0YWNoQnVuZGxlKHRyYW5zYWN0aW9uSGFzaCwgZGVwdGgsIG1pbldlaWdodE1hZ25pdHVkZSkge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPT09PiBUcmFuc2FjdGlvbkNsaWVudDo6cmVhdHRhY2hCdW5kbGVcIiwgdHJhbnNhY3Rpb25IYXNoLCBkZXB0aCwgbWluV2VpZ2h0TWFnbml0dWRlKTtcclxuICAgICAgICBjb25zdCBidW5kbGUgPSBhd2FpdCB0aGlzLmdldEJ1bmRsZSh0cmFuc2FjdGlvbkhhc2gpO1xyXG4gICAgICAgIGJ1bmRsZS50cmFuc2FjdGlvbnMgPSBidW5kbGUudHJhbnNhY3Rpb25zLnJldmVyc2UoKTtcclxuICAgICAgICBjb25zdCBzZW5kVHJhbnNhY3Rpb25zUmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlbmRUcmFuc2FjdGlvbnMoYnVuZGxlLCBkZXB0aCwgbWluV2VpZ2h0TWFnbml0dWRlKTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gVHJhbnNhY3Rpb25DbGllbnQ6OnJlYXR0YWNoQnVuZGxlXCIsIHNlbmRUcmFuc2FjdGlvbnNSZXNwb25zZSk7XHJcbiAgICAgICAgcmV0dXJuIHNlbmRUcmFuc2FjdGlvbnNSZXNwb25zZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogV3JhcHBlciB3aGljaCBnZXRzIGEgYnVuZGxlIGFuZCB0aGVuIGJyb2FkY2FzdHMgaXQuXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNhY3Rpb25IYXNoIFRoZSBoYXNoIG9mIHRoZSB0cmFuc2FjdGlvbiB0byBiZSByZS1icm9hZGNhc3QuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcmVicm9hZGNhc3RCdW5kbGUodHJhbnNhY3Rpb25IYXNoKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI9PT0+IFRyYW5zYWN0aW9uQ2xpZW50OjpyZWJyb2FkY2FzdEJ1bmRsZVwiLCB0cmFuc2FjdGlvbkhhc2gpO1xyXG4gICAgICAgIGNvbnN0IGJ1bmRsZSA9IGF3YWl0IHRoaXMuZ2V0QnVuZGxlKHRyYW5zYWN0aW9uSGFzaCk7XHJcbiAgICAgICAgY29uc3QgYnJvYWRjYXN0VHJhbnNhY3Rpb25zUmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgdHJ5dGVzOiBidW5kbGUudHJhbnNhY3Rpb25zLnJldmVyc2UoKS5tYXAoYnQgPT4gYnQudG9Ucnl0ZXMoKS50b1N0cmluZygpKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fYXBpQ2xpZW50LmJyb2FkY2FzdFRyYW5zYWN0aW9ucyhicm9hZGNhc3RUcmFuc2FjdGlvbnNSZXF1ZXN0KTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gVHJhbnNhY3Rpb25DbGllbnQ6OnJlYnJvYWRjYXN0QnVuZGxlXCIsIGJ1bmRsZSk7XHJcbiAgICAgICAgcmV0dXJuIGJ1bmRsZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRyYW5zYWN0aW9uIG9iamVjdHMgYnkgZmlzdCBwZXJmb3JtaW5nIGEgZmluZFRyYW5zYWN0aW9ucyBjYWxsLlxyXG4gICAgICogQHBhcmFtIGJ1bmRsZXMgQnVuZGxlcyB0byBsb29rdXAgdHJhbnNhY3Rpb25zIGZvci5cclxuICAgICAqIEBwYXJhbSBhZGRyZXNzZXMgQWRkcmVzc2VzIHRvIGxvb2t1cCB0cmFuc2FjdGlvbnMgZm9yLlxyXG4gICAgICogQHBhcmFtIHRhZ3MgVGFncyB0byBsb29rdXAgdHJhbnNhY3Rpb25zIGZvci5cclxuICAgICAqIEBwYXJhbSBhcHByb3ZlZXMgQXBwcm92ZWVzIHRvIGxvb2t1cCB0cmFuc2FjdGlvbnMgZm9yLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgbGlzdCBvZiB0cmFuc2FjdGlvbnMgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBmaW5kVHJhbnNhY3Rpb25PYmplY3RzKGJ1bmRsZXMsIGFkZHJlc3NlcywgdGFncywgYXBwcm92ZWVzKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI9PT0+IFRyYW5zYWN0aW9uQ2xpZW50OjpmaW5kVHJhbnNhY3Rpb25PYmplY3RzXCIsIGJ1bmRsZXMsIGFkZHJlc3NlcywgdGFncywgYXBwcm92ZWVzKTtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCB0aGlzLmZpbmRUcmFuc2FjdGlvbnMoYnVuZGxlcywgYWRkcmVzc2VzLCB0YWdzLCBhcHByb3ZlZXMpO1xyXG4gICAgICAgIGlmICh0cmFuc2FjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5nZXRUcmFuc2FjdGlvbnNPYmplY3RzKHRyYW5zYWN0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPD09PSBUcmFuc2FjdGlvbkNsaWVudDo6ZmluZFRyYW5zYWN0aW9uT2JqZWN0c1wiLCByZXNwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gVHJhbnNhY3Rpb25DbGllbnQ6OmZpbmRUcmFuc2FjdGlvbk9iamVjdHNcIiwgW10pO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdHJhbnNmZXJzIHdoaWNoIGFyZSBhc3NvY2lhdGVkIHdpdGggYSBzZWVkLiBUaGUgdHJhbnNmZXJzIGFyZSBkZXRlcm1pbmVkIGJ5IGVpdGhlciBjYWxjdWxhdGluZ1xyXG4gICAgICogZGV0ZXJtaW5pc3RpY2FsbHkgd2hpY2ggYWRkcmVzc2VzIHdlcmUgYWxyZWFkeSB1c2VkLCBvciBieSBwcm92aWRpbmcgYSBsaXN0IG9mIGluZGV4ZXMgdG8gZ2V0IHRoZVxyXG4gICAgICogYWRkcmVzc2VzIGFuZCB0aGUgYXNzb2NpYXRlZCB0cmFuc2ZlcnMgZnJvbS4gVGhlIHRyYW5zZmVycyBhcmUgc29ydGVkIGJ5IHRoZWlyIHRpbWVzdGFtcC5cclxuICAgICAqIEBwYXJhbSBzZWVkIFRoZSBzZWVkIHRvIGdldCB0aGUgdHJhbnNmZXJzIGZvclxyXG4gICAgICogQHBhcmFtIHN0YXJ0SW5kZXggVGhlIHN0YXJ0IGluZGV4IHRvIGdldCB0aGUgdHJhbnNmZXJzIGZvci5cclxuICAgICAqIEBwYXJhbSBlbmRJbmRleCBUaGUgZW5kIGluZGV4IHRvIGdldCB0aGUgdHJhbnNmZXJzIGZvci5cclxuICAgICAqIEBwYXJhbSBzZWN1cml0eSBUaGUgc2VjdXJpdHkgbGV2ZWwgZm9yIHRoZSB0cmFuc2ZlcnMuXHJcbiAgICAgKiBAcGFyYW0gaW5jbHVzaW9uU3RhdGVzIERvIHlvdSB3YW50IGluY2x1c2lvbiBzdGF0ZXMgaW4gdGhlIGJ1bmRsZXMuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSByZXF1ZXN0ZWQgYnVuZGxlcyBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGdldFRyYW5zZmVycyhzZWVkLCBzdGFydEluZGV4LCBlbmRJbmRleCwgc2VjdXJpdHksIGluY2x1c2lvblN0YXRlcykge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPT09PiBUcmFuc2FjdGlvbkNsaWVudDo6Z2V0VHJhbnNmZXJzXCIsIHNlZWQsIHN0YXJ0SW5kZXgsIGVuZEluZGV4LCBzZWN1cml0eSwgaW5jbHVzaW9uU3RhdGVzKTtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc2VlZCwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBidXNpbmVzc0Vycm9yXzEuQnVzaW5lc3NFcnJvcihcIlRoZSBzZWVkIG11c3QgYmUgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9jYWxTdGFydEluZGV4ID0gc3RhcnRJbmRleDtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobG9jYWxTdGFydEluZGV4KSkge1xyXG4gICAgICAgICAgICBsb2NhbFN0YXJ0SW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhZGRyZXNzZXMgPSBhd2FpdCB0aGlzLmdldE5ld0FkZHJlc3Moc2VlZCwgbG9jYWxTdGFydEluZGV4LCBlbmRJbmRleCwgZmFsc2UsIHNlY3VyaXR5KTtcclxuICAgICAgICBjb25zdCBidW5kbGVzID0gYXdhaXQgdGhpcy5idW5kbGVzRnJvbUFkZHJlc3NlcyhhZGRyZXNzZXMsIGluY2x1c2lvblN0YXRlcyk7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI8PT09IFRyYW5zYWN0aW9uQ2xpZW50OjpnZXRUcmFuc2ZlcnNcIiwgYnVuZGxlcyk7XHJcbiAgICAgICAgcmV0dXJuIGJ1bmRsZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNpbWlsYXIgdG8gZ2V0VHJhbnNmZXJzLCBqdXN0IHRoYXQgaXQgcmV0dXJucyBhZGRpdGlvbmFsIGFjY291bnQgZGF0YS5cclxuICAgICAqIEBwYXJhbSBzZWVkIFRoZSBzZWVkIHRvIGdldCB0aGUgdHJhbnNmZXJzIGZvclxyXG4gICAgICogQHBhcmFtIHN0YXJ0SW5kZXggVGhlIHN0YXJ0IGluZGV4IHRvIGdldCB0aGUgdHJhbnNmZXJzIGZvci5cclxuICAgICAqIEBwYXJhbSBlbmRJbmRleCBUaGUgZW5kIGluZGV4IHRvIGdldCB0aGUgdHJhbnNmZXJzIGZvci5cclxuICAgICAqIEBwYXJhbSBzZWN1cml0eSBUaGUgc2VjdXJpdHkgbGV2ZWwgZm9yIHRoZSB0cmFuc2ZlcnMuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBhY2NvdW50IGRhdGEgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBnZXRBY2NvdW50RGF0YShzZWVkLCBzdGFydEluZGV4LCBlbmRJbmRleCwgc2VjdXJpdHkpIHtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIj09PT4gVHJhbnNhY3Rpb25DbGllbnQ6OmdldEFjY291bnREYXRhXCIsIHNlZWQsIHN0YXJ0SW5kZXgsIGVuZEluZGV4LCBzZWN1cml0eSk7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNlZWQsIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgYnVzaW5lc3NFcnJvcl8xLkJ1c2luZXNzRXJyb3IoXCJUaGUgc2VlZCBtdXN0IGJlIG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsU3RhcnRJbmRleCA9IHN0YXJ0SW5kZXg7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxvY2FsU3RhcnRJbmRleCkpIHtcclxuICAgICAgICAgICAgbG9jYWxTdGFydEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYWRkcmVzc2VzID0gYXdhaXQgdGhpcy5nZXROZXdBZGRyZXNzKHNlZWQsIGxvY2FsU3RhcnRJbmRleCwgZW5kSW5kZXgsIGZhbHNlLCBzZWN1cml0eSB8fCBhZGRyZXNzU2VjdXJpdHlfMS5BZGRyZXNzU2VjdXJpdHkubWVkaXVtKTtcclxuICAgICAgICBjb25zdCBidW5kbGVzID0gYXdhaXQgdGhpcy5idW5kbGVzRnJvbUFkZHJlc3NlcyhhZGRyZXNzZXMsIHRydWUpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnREYXRhID0ge1xyXG4gICAgICAgICAgICBsYXRlc3RBZGRyZXNzOiBhZGRyZXNzZXMucG9wKCksXHJcbiAgICAgICAgICAgIGFkZHJlc3NlcyxcclxuICAgICAgICAgICAgdHJhbnNmZXJzOiBidW5kbGVzLFxyXG4gICAgICAgICAgICBpbnB1dHM6IFtdLFxyXG4gICAgICAgICAgICBiYWxhbmNlOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBiYWxhbmNlUmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgYWRkcmVzc2VzOiBhY2NvdW50RGF0YS5hZGRyZXNzZXMubWFwKGFkZCA9PiBhZGQudG9Ucnl0ZXMoKS50b1N0cmluZygpKSxcclxuICAgICAgICAgICAgdGhyZXNob2xkOiAxMDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJhbGFuY2VSZXNwb25zZSA9IGF3YWl0IHRoaXMuX2FwaUNsaWVudC5nZXRCYWxhbmNlcyhiYWxhbmNlUmVxdWVzdCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYWxhbmNlUmVzcG9uc2UuYmFsYW5jZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYmFsYW5jZSA9IHBhcnNlSW50KGJhbGFuY2VSZXNwb25zZS5iYWxhbmNlc1tpXSwgMTApO1xyXG4gICAgICAgICAgICBpZiAoYmFsYW5jZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGFjY291bnREYXRhLmlucHV0cy5wdXNoKGlucHV0XzEuSW5wdXQuZnJvbVBhcmFtcyhhY2NvdW50RGF0YS5hZGRyZXNzZXNbaV0sIHNlY3VyaXR5IHx8IGFkZHJlc3NTZWN1cml0eV8xLkFkZHJlc3NTZWN1cml0eS5tZWRpdW0sIGxvY2FsU3RhcnRJbmRleCArIGksIGJhbGFuY2UpKTtcclxuICAgICAgICAgICAgICAgIGFjY291bnREYXRhLmJhbGFuY2UgKz0gYmFsYW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gVHJhbnNhY3Rpb25DbGllbnQ6OmdldEFjY291bnREYXRhXCIsIGFjY291bnREYXRhKTtcclxuICAgICAgICByZXR1cm4gYWNjb3VudERhdGE7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGFzeW5jIGJ1bmRsZXNGcm9tQWRkcmVzc2VzKGFkZHJlc3NlcywgaW5jbHVzaW9uU3RhdGVzKSB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25PYmplY3RzID0gYXdhaXQgdGhpcy5maW5kVHJhbnNhY3Rpb25PYmplY3RzKHVuZGVmaW5lZCwgYWRkcmVzc2VzLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgLy8gc2V0IG9mIHRhaWwgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgY29uc3QgdGFpbFRyYW5zYWN0aW9ucyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBjb25zdCBub25UYWlsQnVuZGxlSGFzaGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHRyYW5zYWN0aW9uT2JqZWN0cy5mb3JFYWNoKCh0cmFuc2FjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAvLyBTb3J0IHRhaWwgYW5kIG5vblRhaWxzXHJcbiAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbi5jdXJyZW50SW5kZXgudG9OdW1iZXIoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGFpbFRyYW5zYWN0aW9ucy5hZGQodHJhbnNhY3Rpb25IZWxwZXJfMS5UcmFuc2FjdGlvbkhlbHBlci5oYXNoKHRyYW5zYWN0aW9uKS50b1RyeXRlcygpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9uVGFpbEJ1bmRsZUhhc2hlcy5hZGQodHJhbnNhY3Rpb24uYnVuZGxlLnRvVHJ5dGVzKCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAobm9uVGFpbEJ1bmRsZUhhc2hlcy5zaXplID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBub25UYWlsQnVuZGxlVHJhbnNhY3Rpb25zID0gYXdhaXQgdGhpcy5maW5kVHJhbnNhY3Rpb25PYmplY3RzKEFycmF5LmZyb20obm9uVGFpbEJ1bmRsZUhhc2hlcykubWFwKGhhc2ggPT4gaGFzaF8xLkhhc2guZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhoYXNoKSkpKTtcclxuICAgICAgICAgICAgbm9uVGFpbEJ1bmRsZVRyYW5zYWN0aW9ucy5mb3JFYWNoKCh0cmFuc2FjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uLmN1cnJlbnRJbmRleC50b051bWJlcigpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFpbFRyYW5zYWN0aW9ucy5hZGQodHJhbnNhY3Rpb25IZWxwZXJfMS5UcmFuc2FjdGlvbkhlbHBlci5oYXNoKHRyYW5zYWN0aW9uKS50b1RyeXRlcygpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmluYWxCdW5kbGVzID0gW107XHJcbiAgICAgICAgY29uc3QgdGFpbFR4QXJyYXkgPSBBcnJheS5mcm9tKHRhaWxUcmFuc2FjdGlvbnMpO1xyXG4gICAgICAgIC8vIElmIGluY2x1c2lvblN0YXRlcywgZ2V0IHRoZSBjb25maXJtYXRpb24gc3RhdHVzXHJcbiAgICAgICAgLy8gb2YgdGhlIHRhaWwgdHJhbnNhY3Rpb25zLCBhbmQgdGh1cyB0aGUgYnVuZGxlc1xyXG4gICAgICAgIGxldCB0YWlsVHhTdGF0ZXM7XHJcbiAgICAgICAgaWYgKGluY2x1c2lvblN0YXRlcykge1xyXG4gICAgICAgICAgICB0YWlsVHhTdGF0ZXMgPSBhd2FpdCB0aGlzLmdldExhdGVzdEluY2x1c2lvbih0YWlsVHhBcnJheS5tYXAodGFpbCA9PiBoYXNoXzEuSGFzaC5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRhaWwpKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBNYXAgZWFjaCB0YWlsIHRyYW5zYWN0aW9uIHRvIHRoZSBnZXRCdW5kbGUgZnVuY3Rpb25cclxuICAgICAgICAvLyBmb3JtYXQgdGhlIHJldHVybmVkIGJ1bmRsZXMgYW5kIGFkZCBpbmNsdXNpb24gc3RhdGVzIGlmIG5lY2Vzc2FyeVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFpbFR4QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYnVuZGxlID0gYXdhaXQgdGhpcy5nZXRCdW5kbGUoaGFzaF8xLkhhc2guZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0YWlsVHhBcnJheVtpXSkpKTtcclxuICAgICAgICAgICAgYnVuZGxlLmluY2x1c2lvblN0YXRlID0gdGFpbFR4U3RhdGVzID8gdGFpbFR4U3RhdGVzW2ldIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBmaW5hbEJ1bmRsZXMucHVzaChidW5kbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTb3J0IGJ1bmRsZXMgYnkgdGltZXN0YW1wXHJcbiAgICAgICAgZmluYWxCdW5kbGVzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGEudHJhbnNhY3Rpb25zWzBdLmF0dGFjaG1lbnRUaW1lc3RhbXAudG9OdW1iZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IGIudHJhbnNhY3Rpb25zWzBdLmF0dGFjaG1lbnRUaW1lc3RhbXAudG9OdW1iZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuICgoeCA8IHkpID8gLTEgOiAoKHggPiB5KSA/IDEgOiAwKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsQnVuZGxlcztcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2VuZXJhdGVBZGRyZXNzKHNlZWQsIGluZGV4LCBzZWN1cml0eSwgaW5jbHVkZUNoZWNrc3VtKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gaXNzXzEuSVNTLmtleShzZWVkLCBpbmRleCwgc2VjdXJpdHkpO1xyXG4gICAgICAgIGNvbnN0IGRpZ2VzdHMgPSBpc3NfMS5JU1MuZGlnZXN0cyhrZXkpO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NUcml0cyA9IGlzc18xLklTUy5hZGRyZXNzKGRpZ2VzdHMpO1xyXG4gICAgICAgIGxldCBhZGRyZXNzVHJ5dGVzU3RyaW5nID0gdHJpdHNfMS5Ucml0cy5mcm9tQXJyYXkoYWRkcmVzc1RyaXRzKS50b1RyeXRlcygpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKGluY2x1ZGVDaGVja3N1bSkge1xyXG4gICAgICAgICAgICBhZGRyZXNzVHJ5dGVzU3RyaW5nICs9IGFkZHJlc3NIZWxwZXJfMS5BZGRyZXNzSGVscGVyLmNyZWF0ZUNoZWNrc3VtKGFkZHJlc3NUcml0cywgOSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhZGRyZXNzXzEuQWRkcmVzcy5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKGFkZHJlc3NUcnl0ZXNTdHJpbmcpKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgYXN5bmMgYWRkUmVtYWluZGVyKHNlZWQsIGJ1bmRsZSwgdHJhbnNmZXJPcHRpb25zLCBpbnB1dHMsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudHMsIHRvdGFsVmFsdWUsIHRhZywgYWRkZWRITUFDKSB7XHJcbiAgICAgICAgbGV0IHRvdGFsVHJhbnNmZXJWYWx1ZSA9IHRvdGFsVmFsdWU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gTWF0aC5mbG9vcih0aGlzLl90aW1lU2VydmljZS5tc1NpbmNlRXBvY2goKSAvIDEwMDApO1xyXG4gICAgICAgICAgICAvLyBBZGQgaW5wdXQgYXMgYnVuZGxlIGVudHJ5XHJcbiAgICAgICAgICAgIGJ1bmRsZS5hZGRUcmFuc2FjdGlvbnMoaW5wdXRzW2ldLnNlY3VyaXR5LCBpbnB1dHNbaV0uYWRkcmVzcywgLWlucHV0c1tpXS5iYWxhbmNlLCB0YWcsIHRpbWVzdGFtcCk7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGEgcmVtYWluZGVyIHZhbHVlXHJcbiAgICAgICAgICAgIC8vIEFkZCBleHRyYSBvdXRwdXQgdG8gc2VuZCByZW1haW5pbmcgZnVuZHMgdG9cclxuICAgICAgICAgICAgaWYgKGlucHV0c1tpXS5iYWxhbmNlID49IHRvdGFsVHJhbnNmZXJWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtYWluZGVyID0gaW5wdXRzW2ldLmJhbGFuY2UgLSB0b3RhbFRyYW5zZmVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB1c2VyIGhhcyBwcm92aWRlZCByZW1haW5kZXIgYWRkcmVzcyB1c2UgaXQgdG8gc2VuZCByZW1haW5pbmcgZnVuZHMgdG9cclxuICAgICAgICAgICAgICAgIGlmIChyZW1haW5kZXIgPiAwICYmICFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh0cmFuc2Zlck9wdGlvbnMpICYmIG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJhbnNmZXJPcHRpb25zLnJlbWFpbmRlckFkZHJlc3MsIGFkZHJlc3NfMS5BZGRyZXNzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbWFpbmRlciBidW5kbGUgZW50cnlcclxuICAgICAgICAgICAgICAgICAgICBidW5kbGUuYWRkVHJhbnNhY3Rpb25zKDEsIHRyYW5zZmVyT3B0aW9ucy5yZW1haW5kZXJBZGRyZXNzLCByZW1haW5kZXIsIHRhZywgdGltZXN0YW1wKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGaW5hbCBmdW5jdGlvbiBmb3Igc2lnbmluZyBpbnB1dHNcclxuICAgICAgICAgICAgICAgICAgICBidW5kbGVIZWxwZXJfMS5CdW5kbGVIZWxwZXIuc2lnbklucHV0cyhzZWVkLCBidW5kbGUsIHRyYW5zZmVyT3B0aW9ucywgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cywgaW5wdXRzLCBhZGRlZEhNQUMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVtYWluZGVyID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFydEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGlucHV0cy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gTWF0aC5tYXgoaW5wdXRzW2tdLmtleUluZGV4LCBzdGFydEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkZHJlc3NlcyA9IGF3YWl0IHRoaXMuZ2V0QWRkcmVzc2VzVG9VbnVzZWQoc2VlZCwgc3RhcnRJbmRleCwgZmFsc2UsIHRyYW5zZmVyT3B0aW9ucy5zZWN1cml0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHMgPSBNYXRoLmZsb29yKHRoaXMuX3RpbWVTZXJ2aWNlLm1zU2luY2VFcG9jaCgpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtYWluZGVyIGJ1bmRsZSBlbnRyeVxyXG4gICAgICAgICAgICAgICAgICAgIGJ1bmRsZS5hZGRUcmFuc2FjdGlvbnMoMSwgYWRkcmVzc2VzW2FkZHJlc3Nlcy5sZW5ndGggLSAxXSwgcmVtYWluZGVyLCB0YWcsIHRzKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGaW5hbCBmdW5jdGlvbiBmb3Igc2lnbmluZyBpbnB1dHNcclxuICAgICAgICAgICAgICAgICAgICBidW5kbGVIZWxwZXJfMS5CdW5kbGVIZWxwZXIuc2lnbklucHV0cyhzZWVkLCBidW5kbGUsIHRyYW5zZmVyT3B0aW9ucywgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cywgaW5wdXRzLCBhZGRlZEhNQUMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gcmVtYWluZGVyLCBkbyBub3QgYWRkIHRyYW5zYWN0aW9uIHRvIGJ1bmRsZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNpbXBseSBzaWduIGFuZCByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICBidW5kbGVIZWxwZXJfMS5CdW5kbGVIZWxwZXIuc2lnbklucHV0cyhzZWVkLCBidW5kbGUsIHRyYW5zZmVyT3B0aW9ucywgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50cywgaW5wdXRzLCBhZGRlZEhNQUMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgbXVsdGlwbGUgaW5wdXRzIHByb3ZpZGVkLCBzdWJ0cmFjdCB0aGUgdG90YWxUcmFuc2ZlclZhbHVlIGJ5XHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgaW5wdXRzIGJhbGFuY2VcclxuICAgICAgICAgICAgICAgIHRvdGFsVHJhbnNmZXJWYWx1ZSAtPSBpbnB1dHNbaV0uYmFsYW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuVHJhbnNhY3Rpb25DbGllbnQuTlVMTF9IQVNIX1RSWVRFUyA9IFwiOVwiLnJlcGVhdCgyNDMpO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuVHJhbnNhY3Rpb25DbGllbnQuTUFYX0lOUFVUUyA9IDUwMDtcclxuZXhwb3J0cy5UcmFuc2FjdGlvbkNsaWVudCA9IFRyYW5zYWN0aW9uQ2xpZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpoYm5OaFkzUnBiMjVEYkdsbGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmRISmhibk5oWTNScGIyNXpMM1J5WVc1ellXTjBhVzl1UTJ4cFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGVlFTd3dSVUZCZFVVN1FVRkRka1VzTkVWQlFYbEZPMEZCUTNwRkxEUkZRVUY1UlR0QlFVbDZSU3gzUlVGQmNVVTdRVUZEY2tVc0swWkJRVFJHTzBGQlF6VkdMREpGUVVGM1JUdEJRVU40UlN4NVJFRkJjMFE3UVVGRGRFUXNkMFpCUVhGR08wRkJSWEpHTEN0RVFVRTBSRHRCUVVNMVJDd3JSVUZCTkVVN1FVRkROVVVzTmtSQlFUQkVPMEZCUXpGRUxIbEVRVUZ6UkR0QlFVTjBSQ3d5UkVGQmQwUTdRVUZGZUVRc2RVUkJRVzlFTzBGQlEzQkVMSFZGUVVGdlJUdEJRVU53UlN4cFJVRkJPRVE3UVVGRE9VUXNNa1JCUVhkRU8wRkJRM2hFTERaRVFVRXdSRHRCUVVNeFJDd3dSRUZCZFVRN1FVRkRka1FzTkVSQlFYbEVPMEZCUTNwRUxEQkVRVUYxUkR0QlFVdDJSQ3h4UkVGQmEwUTdRVUZGYkVRN08wZEJSVWM3UVVGRFNEdEpRWE5DU1RzN096czdPenRQUVU5SE8wbEJRMGdzV1VGQldTeFRRVUZ4UWl4RlFVTnlRaXhYUVVFd1FpeEZRVU14UWl4WFFVRXdRaXhGUVVNeFFpeHhRa0ZCT0VNc1JVRkRPVU1zVFVGQlowSTdVVUZEZUVJc1NVRkJTU3d5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRaUVVOcVF5eE5RVUZOTEVsQlFVa3NOa0pCUVdFc1EwRkJReXhwUTBGQmFVTXNRMEZCUXl4RFFVRkRPMU5CUXpsRU8xRkJRMFFzU1VGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkROVUlzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4WFFVRlhMRWxCUVVrc1NVRkJTU3dyUWtGQll5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTJwRkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NWMEZCVnl4SlFVRkpMRWxCUVVrc2VVSkJRVmNzUlVGQlJTeERRVUZETzFGQlEzSkVMRWxCUVVrc1EwRkJReXh6UWtGQmMwSXNSMEZCUnl4eFFrRkJjVUlzU1VGQlNTeEpRVUZKTERaRFFVRnhRaXhGUVVGRkxFTkJRVU03VVVGRGJrWXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFbEJRVWtzU1VGQlNTeDFRa0ZCVlN4RlFVRkZMRU5CUVVNN1NVRkRPVU1zUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFdEJRVXNzUTBGQlF5eDVRa0ZCZVVJN1VVRkRiRU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc2JVUkJRVzFFTEVOQlFVTXNRMEZCUXp0UlFVTjJSU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRGFrUXNTVUZCU1N4UlFVRlJMRWxCUVVrc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU0zUWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExGZEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNaVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtZc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNiVVJCUVcxRUxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdXVUZETjBVc1QwRkJUeXhKUVVGSkxFTkJRVU03VTBGRFpqdGhRVUZOTzFsQlEwZ3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zYlVSQlFXMUVMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE0wVXNUMEZCVHl4RlFVRkZMRU5CUVVNN1UwRkRZanRKUVVOTUxFTkJRVU03U1VGRlJEczdPenM3T3pzN08wOUJVMGM3U1VGRFNTeExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVDBGQlowSXNSVUZCUlN4VFFVRnhRaXhGUVVGRkxFbEJRVmtzUlVGQlJTeFRRVUZyUWp0UlFVTnVSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl3d1EwRkJNRU1zUlVGQlJTeFBRVUZQTEVWQlFVVXNVMEZCVXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dFJRVVZ1Unl4TlFVRk5MRk5CUVZNc1IwRkJSeXhQUVVGUExFdEJRVXNzVTBGQlV5eEpRVUZKTEU5QlFVOHNTMEZCU3l4SlFVRkpMRWxCUVVrc1QwRkJUeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEYkVZc1RVRkJUU3haUVVGWkxFZEJRVWNzVTBGQlV5eExRVUZMTEZOQlFWTXNTVUZCU1N4VFFVRlRMRXRCUVVzc1NVRkJTU3hKUVVGSkxGTkJRVk1zUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpOR0xFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NTMEZCU3l4VFFVRlRMRWxCUVVrc1NVRkJTU3hMUVVGTExFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOMlJTeE5RVUZOTEZsQlFWa3NSMEZCUnl4VFFVRlRMRXRCUVVzc1UwRkJVeXhKUVVGSkxGTkJRVk1zUzBGQlN5eEpRVUZKTEVsQlFVa3NVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRk0wWXNTVUZCU1N4VFFVRlRMRWxCUVVrc1EwRkJReXg1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVc1YwRkJTU3hEUVVGRExFVkJRVVU3V1VGRGJFUXNUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zTWtOQlFUSkRMRU5CUVVNc1EwRkJRenRUUVVONFJUdFJRVVZFTEVsQlFVa3NXVUZCV1N4SlFVRkpMRU5CUVVNc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RlFVRkZMR2xDUVVGUExFTkJRVU1zUlVGQlJUdFpRVU14UkN4TlFVRk5MRWxCUVVrc05rSkJRV0VzUTBGQlF5eG5SRUZCWjBRc1EwRkJReXhEUVVGRE8xTkJRemRGTzFGQlJVUXNTVUZCU1N4UFFVRlBMRWxCUVVrc1EwRkJReXg1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1UwRkJSeXhEUVVGRExFVkJRVVU3V1VGRE5VTXNUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zZFVOQlFYVkRMRU5CUVVNc1EwRkJRenRUUVVOd1JUdFJRVVZFTEVsQlFVa3NXVUZCV1N4SlFVRkpMRU5CUVVNc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RlFVRkZMRmRCUVVrc1EwRkJReXhGUVVGRk8xbEJRM1pFTEUxQlFVMHNTVUZCU1N3MlFrRkJZU3hEUVVGRExEWkRRVUUyUXl4RFFVRkRMRU5CUVVNN1UwRkRNVVU3VVVGRlJDeEpRVUZKTEVOQlFVTXNVMEZCVXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZPMWxCUXpGRUxFMUJRVTBzU1VGQlNTdzJRa0ZCWVN4RFFVRkRMSGRFUVVGM1JDeERRVUZETEVOQlFVTTdVMEZEY2tZN1VVRkZSQ3hOUVVGTkxFOUJRVThzUjBGQk5rSTdXVUZEZEVNc1QwRkJUeXhGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRPMWxCUTNCR0xGTkJRVk1zUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVenRaUVVNM1JpeEpRVUZKTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk03V1VGRGRFVXNVMEZCVXl4RlFVRkZMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTzFOQlEyeEhMRU5CUVVNN1VVRkZSaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRha1VzU1VGQlNTeFJRVUZSTEVsQlFVa3NVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVNM1FpeE5RVUZOTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmRCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrWXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zTUVOQlFUQkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGNFVXNUMEZCVHl4SlFVRkpMRU5CUVVNN1UwRkRaanRoUVVGTk8xbEJRMGdzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc01FTkJRVEJETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRiRVVzVDBGQlR5eEZRVUZGTEVOQlFVTTdVMEZEWWp0SlFVTk1MRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1MwRkJTeXhEUVVGRExITkNRVUZ6UWl4RFFVRkRMR2xDUVVGNVFqdFJRVU42UkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eG5SRUZCWjBRc1JVRkJSU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMUZCUTNaR0xFbEJRVWtzUTBGQlF5eDVRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4WFFVRkpMRU5CUVVNc1JVRkJSVHRaUVVNdlF5eE5RVUZOTEVsQlFVa3NOa0pCUVdFc1EwRkJReXh4UkVGQmNVUXNRMEZCUXl4RFFVRkRPMU5CUTJ4R08xRkJSVVFzVFVGQlRTeFBRVUZQTEVkQlFYTkNPMWxCUXk5Q0xFMUJRVTBzUlVGQlJTeHBRa0ZCYVVJc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVMEZEY0VVc1EwRkJRenRSUVVWR0xFMUJRVTBzVVVGQlVTeEhRVUZITEUxQlFVMHNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZETVVRc1NVRkJTU3hSUVVGUkxFbEJRVWtzVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTTNRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExHVkJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemxHTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHZEVRVUZuUkN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRekZGTEU5QlFVOHNTVUZCU1N4RFFVRkRPMU5CUTJZN1lVRkJUVHRaUVVOSUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RFUVVGblJDeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNoRkxFOUJRVThzUlVGQlJTeERRVUZETzFOQlEySTdTVUZEVEN4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRXRCUVVzc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4cFFrRkJlVUk3VVVGRGNrUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zTWtOQlFUSkRMRU5CUVVNc1EwRkJRenRSUVVNdlJDeEpRVUZKTEVOQlFVTXNlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1YwRkJTU3hEUVVGRExFVkJRVVU3V1VGREwwTXNUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zY1VSQlFYRkVMRU5CUVVNc1EwRkJRenRUUVVOc1JqdFJRVVZFTEUxQlFVMHNVVUZCVVN4SFFVRkhMRTFCUVUwc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVTnlSQ3hKUVVGSkxGRkJRVkVzU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zTmtKQlFUWkNMRU5CUVVNc1JVRkJSVHRaUVVNMVJTeE5RVUZOTEU5QlFVOHNSMEZCSzBJN1owSkJRM2hETEZsQlFWa3NSVUZCUlN4cFFrRkJhVUlzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1owSkJRM1pGTEVsQlFVa3NSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXcyUWtGQk5rSXNRMEZCUXp0aFFVTnFSQ3hEUVVGRE8xbEJRMFlzVFVGQlRTeFJRVUZSTEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xbEJRMjVGTEVsQlFVa3NVVUZCVVN4SlFVRkpMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVU3WjBKQlF6ZENMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETERKRFFVRXlReXhGUVVGRkxGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0blFrRkRhRVlzVDBGQlR5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRPMkZCUXpGQ08ybENRVUZOTzJkQ1FVTklMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETERKRFFVRXlReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVTnVSU3hQUVVGUExFVkJRVVVzUTBGQlF6dGhRVU5pTzFOQlEwbzdZVUZCVFR0WlFVTklMRTFCUVUwc1NVRkJTU3cyUWtGQllTeERRVUZETERoRVFVRTRSQ3hEUVVGRExFTkJRVU03VTBGRE0wWTdTVUZEVEN4RFFVRkRPMGxCUlVRN096czdPenM3TzA5QlVVYzdTVUZEU1N4TFFVRkxMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVlVzUlVGQlJTeFZRVUZ0UWl4RlFVRkZMRkZCUVdsQ0xFVkJRVVVzWlVGQmVVSXNSVUZCUlN4UlFVRXdRanRSUVVOb1NTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXgxUTBGQmRVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGRkJRVkVzUlVGQlJTeGxRVUZsTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRiRWdzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFhRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTnNReXhOUVVGTkxFbEJRVWtzTmtKQlFXRXNRMEZCUXl3clFrRkJLMElzUTBGQlF5eERRVUZETzFOQlF6VkVPMUZCUlVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hGUVVGRkxFMUJRVTBzUTBGQlF5eEZRVUZGTzFsQlF5OUZMRTFCUVUwc1NVRkJTU3cyUWtGQllTeERRVUZETEcxRFFVRnRReXhGUVVGRkxFVkJRVVVzVlVGQlZTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTm9SanRSUVVWRUxFMUJRVTBzWlVGQlpTeEhRVUZITEZWQlFWVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkZlRU1zU1VGQlNTeGxRVUZsTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUTNKQ0xFMUJRVTBzU1VGQlNTdzJRa0ZCWVN4RFFVRkRMRFpDUVVFMlFpeEZRVUZGTEVWQlFVVXNaVUZCWlN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVNdlJUdFJRVVZFTEUxQlFVMHNWMEZCVnl4SFFVRkhMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTNKRUxFMUJRVTBzWVVGQllTeEhRVUZITEZGQlFWRXNTVUZCU1N4cFEwRkJaU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVVY2UkN4SlFVRkpMRk5CUVZNc1EwRkJRenRSUVVOa0xFbEJRVWtzVjBGQlZ5eEZRVUZGTzFsQlEySXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRkZCUVZFc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlEyNUVMRTFCUVUwc1NVRkJTU3cyUWtGQllTeERRVUZETEc5RFFVRnZReXhGUVVGRkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTXZSVHRaUVVWRUxFMUJRVTBzUzBGQlN5eEhRVUZITEZGQlFWRXNSMEZCUnl4VlFVRlZMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM2hETEVsQlFVa3NTMEZCU3l4SlFVRkpMRU5CUVVNc1NVRkJTU3hMUVVGTExFZEJRVWNzYVVKQlFXbENMRU5CUVVNc1ZVRkJWU3hGUVVGRk8yZENRVU53UkN4TlFVRk5MRWxCUVVrc05rSkJRV0VzUTBGQlF5eG5RMEZCWjBNc2FVSkJRV2xDTEVOQlFVTXNWVUZCVlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzJGQlEzUkhPMWxCUlVRc1UwRkJVeXhIUVVGSExFMUJRVTBzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFbEJRVWtzUlVGQlJTeFZRVUZWTEVWQlFVVXNVVUZCVVN4RlFVRkZMR1ZCUVdVc1JVRkJSU3hoUVVGaExFTkJRVU1zUTBGQlF6dFRRVU14Unp0aFFVRk5PMWxCUTBnc1UwRkJVeXhIUVVGSExFMUJRVTBzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFbEJRVWtzUlVGQlJTeFZRVUZWTEVWQlFVVXNaVUZCWlN4RlFVRkZMR0ZCUVdFc1EwRkJReXhEUVVGRE8xTkJRMnBITzFGQlJVUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zZFVOQlFYVkRMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGRFVXNUMEZCVHl4VFFVRlRMRU5CUVVNN1NVRkRja0lzUTBGQlF6dEpRVVZFT3pzN096czdPenRQUVZGSE8wbEJRMGtzUzBGQlN5eERRVUZETEcxQ1FVRnRRaXhEUVVGRExFbEJRVlVzUlVGQlJTeFZRVUZyUWl4RlFVRkZMRkZCUVdkQ0xFVkJRVVVzWlVGQmQwSXNSVUZCUlN4UlFVRjVRanRSUVVOc1NTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXcyUTBGQk5rTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGRkJRVkVzUlVGQlJTeGxRVUZsTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkZlRWdzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFhRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTnNReXhOUVVGTkxFbEJRVWtzTmtKQlFXRXNRMEZCUXl3clFrRkJLMElzUTBGQlF5eERRVUZETzFOQlF6VkVPMUZCUTBRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxGVkJRVlVzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZEZGtRc1RVRkJUU3hKUVVGSkxEWkNRVUZoTEVOQlFVTXNjME5CUVhORExFVkJRVVVzUlVGQlJTeFZRVUZWTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTI1R08xRkJRMFFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEZGQlFWRXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRia1FzVFVGQlRTeEpRVUZKTERaQ1FVRmhMRU5CUVVNc2IwTkJRVzlETEVWQlFVVXNSVUZCUlN4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJReTlGTzFGQlEwUXNUVUZCVFN4TFFVRkxMRWRCUVVjc1VVRkJVU3hIUVVGSExGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZUVNc1NVRkJTU3hMUVVGTExFbEJRVWtzUTBGQlF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4cFFrRkJhVUlzUTBGQlF5eFZRVUZWTEVWQlFVVTdXVUZEY0VRc1RVRkJUU3hKUVVGSkxEWkNRVUZoTEVOQlFVTXNaME5CUVdkRExHbENRVUZwUWl4RFFVRkRMRlZCUVZVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTjBSenRSUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeFJRVUZSTEVkQlFVY3NRMEZCUXl4SlFVRkpMRkZCUVZFc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRGJrVXNUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zYzBOQlFYTkRMRVZCUVVVc1JVRkJSU3hSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEycEdPMUZCUlVRc1RVRkJUU3hUUVVGVExFZEJRV01zUlVGQlJTeERRVUZETzFGQlJXaERMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TFFVRkxMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRE5VSXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVsQlFVa3NSVUZCUlN4VlFVRlZMRWRCUVVjc1EwRkJReXhGUVVGRkxGRkJRVkVzUlVGQlJTeGxRVUZsTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNwR08xRkJSVVFzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc05rTkJRVFpETEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkROVVVzVDBGQlR5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8wbEJRM1JETEVOQlFVTTdTVUZGUkRzN096czdPenRQUVU5SE8wbEJRMGtzUzBGQlN5eERRVUZETEc5Q1FVRnZRaXhEUVVGRExFbEJRVlVzUlVGQlJTeFZRVUZyUWl4RlFVRkZMR1ZCUVhkQ0xFVkJRVVVzVVVGQmVVSTdVVUZEYWtnc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNPRU5CUVRoRExFVkJRVVVzU1VGQlNTeEZRVUZGTEZWQlFWVXNSVUZCUlN4bFFVRmxMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGREwwY3NTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4WFFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOc1F5eE5RVUZOTEVsQlFVa3NOa0pCUVdFc1EwRkJReXdyUWtGQkswSXNRMEZCUXl4RFFVRkRPMU5CUXpWRU8xRkJRMFFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEZWQlFWVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRka1FzVFVGQlRTeEpRVUZKTERaQ1FVRmhMRU5CUVVNc2MwTkJRWE5ETEVWQlFVVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRMjVHTzFGQlEwUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRkZCUVZFc1IwRkJSeXhEUVVGRExFbEJRVWtzVVVGQlVTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTnVSU3hOUVVGTkxFbEJRVWtzTmtKQlFXRXNRMEZCUXl4elEwRkJjME1zUlVGQlJTeEZRVUZGTEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRha1k3VVVGRlJDeEpRVUZKTEdWQlFXVXNSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkRha01zU1VGQlNTeE5RVUZOTEVOQlFVTTdVVUZEV0N4TlFVRk5MRk5CUVZNc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRmNrSXNSMEZCUnp0WlFVTkRMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNTVUZCU1N4RlFVRkZMR1ZCUVdVc1JVRkJSU3hGUVVGRkxGRkJRVkVzUlVGQlJTeGxRVUZsTEVOQlFVTXNRMEZCUXp0WlFVVjZSaXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUlhoQ0xFMUJRVTBzYVVKQlFXbENMRWRCUVVjc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMWxCUlhoRUxFMUJRVTBzWjBKQlFXZENMRWRCUVcxRE8yZENRVU55UkN4VFFVRlRMRVZCUVVVc1EwRkJReXhwUWtGQmFVSXNRMEZCUXp0aFFVTnFReXhEUVVGRE8xbEJSVVlzVFVGQlRTeHBRa0ZCYVVJc1IwRkJSeXhOUVVGTkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNjMEpCUVhOQ0xFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJRenRaUVVWNlJpeE5RVUZOTEVkQlFVY3NhVUpCUVdsQ0xFbEJRVWtzYVVKQlFXbENMRU5CUVVNc1RVRkJUU3hKUVVGSkxHbENRVUZwUWl4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF6dFpRVU53U1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8yZENRVU5VTEUxQlFVMHNkVUpCUVhWQ0xFZEJRVFpDTzI5Q1FVTjBSQ3hUUVVGVExFVkJRVVVzUTBGQlF5eHBRa0ZCYVVJc1EwRkJRenRwUWtGRGFrTXNRMEZCUXp0blFrRkZSaXhOUVVGTkxGbEJRVmtzUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNkVUpCUVhWQ0xFTkJRVU1zUTBGQlF6dG5Ra0ZGY2tZc1RVRkJUU3hIUVVGSExGbEJRVmtzU1VGQlNTeFpRVUZaTEVOQlFVTXNUVUZCVFN4SlFVRkpMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTnNSanRUUVVOS0xGRkJRMDBzVFVGQlRTeEZRVUZGTzFGQlJXWXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zT0VOQlFUaERMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRE4wVXNUMEZCVHl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzBsQlEzUkRMRU5CUVVNN1NVRkZSRHM3T3pzN096czdUMEZSUnp0SlFVTkpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlZTeEZRVUZGTEZWQlFXdENMRVZCUVVVc1VVRkJaMElzUlVGQlJTeFJRVUY1UWl4RlFVRkZMR0ZCUVhGQ08xRkJRM0pJTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHMURRVUZ0UXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hWUVVGVkxFVkJRVVVzVVVGQlVTeEZRVUZGTEZGQlFWRXNSVUZCUlN4aFFVRmhMRU5CUVVNc1EwRkJRenRSUVVVMVJ5eEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZkQlFVa3NRMEZCUXl4RlFVRkZPMWxCUTJ4RExFMUJRVTBzU1VGQlNTdzJRa0ZCWVN4RFFVRkRMQ3RDUVVFclFpeERRVUZETEVOQlFVTTdVMEZETlVRN1VVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzVlVGQlZTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTjJSQ3hOUVVGTkxFbEJRVWtzTmtKQlFXRXNRMEZCUXl4elEwRkJjME1zUlVGQlJTeEZRVUZGTEZWQlFWVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRia1k3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1NVRkJTU3hSUVVGUkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlEyNUZMRTFCUVUwc1NVRkJTU3cyUWtGQllTeERRVUZETEhORFFVRnpReXhGUVVGRkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTnFSanRSUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeGhRVUZoTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXpkRUxFMUJRVTBzU1VGQlNTdzJRa0ZCWVN4RFFVRkRMR2REUVVGblF5eEZRVUZGTEVWQlFVVXNZVUZCWVN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOb1JqdFJRVVZFTEUxQlFVMHNVMEZCVXl4SFFVRkhMRTFCUVUwc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVWQlFVVXNWVUZCVlN4RlFVRkZMRkZCUVZFc1JVRkJSU3hMUVVGTExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdVVUZGZUVZc1RVRkJUU3hQUVVGUExFZEJRWGRDTzFsQlEycERMRk5CUVZNc1JVRkJSU3hUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMWxCUXpGRUxGTkJRVk1zUlVGQlJTeEhRVUZITzFOQlEycENMRU5CUVVNN1VVRkZSaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlJUVkVMRTFCUVUwc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5zUWl4SlFVRkpMRmxCUVZrc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRmNrSXNTVUZCU1N4UlFVRlJMRVZCUVVVN1dVRkRWaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkRka01zVFVGQlRTeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRMjVFTEVsQlFVa3NUMEZCVHl4SFFVRkhMRU5CUVVNc1JVRkJSVHR2UWtGRFlpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRkZCUVZFc1JVRkJSU3hWUVVGVkxFZEJRVWNzUTBGQlF5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJReTlGTEZsQlFWa3NTVUZCU1N4UFFVRlBMRU5CUVVNN2IwSkJSWGhDTEVsQlFVa3NZVUZCWVN4SFFVRkhMRU5CUVVNc1NVRkJTU3haUVVGWkxFbEJRVWtzWVVGQllTeEZRVUZGTzNkQ1FVTndSQ3hOUVVGTk8zRkNRVU5VTzJsQ1FVTktPMkZCUTBvN1UwRkRTanRSUVVWRUxFMUJRVTBzU1VGQlNTeEhRVUZITEVWQlFVVXNUVUZCVFN4RlFVRkZMRmxCUVZrc1JVRkJSU3hEUVVGRE8xRkJRM1JETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHMURRVUZ0UXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJSVGRFTEVsQlFVa3NZVUZCWVN4SFFVRkhMRU5CUVVNc1NVRkJTU3haUVVGWkxFZEJRVWNzWVVGQllTeEZRVUZGTzFsQlEyNUVMRTFCUVUwc1NVRkJTU3cyUWtGQllTeERRVUZETERSRlFVRTBSU3hGUVVGRkxFVkJRVVVzWVVGQllTeEZRVUZGTEZsQlFWa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRNVWs3VVVGRlJDeFBRVUZQTEVsQlFVa3NRMEZCUXp0SlFVTm9RaXhEUVVGRE8wbEJSVVE3T3pzN096dFBRVTFITzBsQlEwa3NTMEZCU3l4RFFVRkRMR2RDUVVGblFpeERRVUZETEVsQlFWVXNSVUZCUlN4VFFVRnhRaXhGUVVGRkxHVkJRV2xETzFGQlF6bEdMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETERCRFFVRXdReXhGUVVGRkxFbEJRVWtzUlVGQlJTeFRRVUZUTEVWQlFVVXNaVUZCWlN4RFFVRkRMRU5CUVVNN1VVRkZhRWNzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFhRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTnNReXhOUVVGTkxFbEJRVWtzTmtKQlFXRXNRMEZCUXl3clFrRkJLMElzUTBGQlF5eERRVUZETzFOQlF6VkVPMUZCUlVRc1NVRkJTU3hEUVVGRExIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3h0UWtGQlVTeERRVUZETEVWQlFVVTdXVUZETTBNc1RVRkJUU3hKUVVGSkxEWkNRVUZoTEVOQlFVTXNiMFJCUVc5RUxFTkJRVU1zUTBGQlF6dFRRVU5xUmp0UlFVVkVMRTFCUVUwc2IwSkJRVzlDTEVkQlFVY3NaVUZCWlN4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOdVJDeHZRa0ZCYjBJc1EwRkJReXhSUVVGUkxFZEJRVWNzYjBKQlFXOUNMRU5CUVVNc1VVRkJVU3hKUVVGSkxHbERRVUZsTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUlhoR0xFMUJRVTBzVjBGQlZ5eEhRVUZITEdWQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE1VTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1EwRkJReXd5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4dlFrRkJiMElzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTndSU3hKUVVGSkxGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZGZEVJc1owUkJRV2RFTzFGQlEyaEVMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdXVUZEZWtJc1VVRkJVU3hEUVVGRExFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkRja1VzVVVGQlVTeERRVUZETEVkQlFVY3NSMEZCUnl4UlFVRlJMRU5CUVVNc1IwRkJSeXhKUVVGSkxGTkJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZGZWtNc1NVRkJTU3hQUVVGUExFbEJRVWtzVVVGQlVTeERRVUZETEV0QlFVc3NSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJReTlDTEhWRVFVRjFSRHRuUWtGRGRrUXNVVUZCVVN4RFFVRkRMRTlCUVU4c1IwRkJSeXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExHZENRVUZuUWl4SFFVRkhMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXp0blFrRkRka2NzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXp0aFFVTndRanRSUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlJVZ3NjMEpCUVhOQ08xRkJRM1JDTEUxQlFVMHNVVUZCVVN4SFFVRkhMREpDUVVGWkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRk1VVXNUVUZCVFN4TlFVRk5MRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU12UWl4TlFVRk5MRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETzFGQlEycERMRTFCUVUwc1ZVRkJWU3hIUVVGSExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTTdVVUZEZGtNc1RVRkJUU3g1UWtGQmVVSXNSMEZCUnl4UlFVRlJMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTTdVVUZGY2tVc2MwTkJRWE5ETzFGQlEzUkRMRWxCUVVrc1ZVRkJWU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU5vUWl4blEwRkJaME03V1VGRGFFTXNPRU5CUVRoRE8xbEJRemxETEVsQlFVa3NiMEpCUVc5Q0xFTkJRVU1zVFVGQlRTeEZRVUZGTzJkQ1FVTTNRaXhOUVVGTkxFOUJRVThzUjBGQmQwSTdiMEpCUTJwRExGTkJRVk1zUlVGQlJTeHZRa0ZCYjBJc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenR2UWtGRGVFWXNVMEZCVXl4RlFVRkZMRWRCUVVjN2FVSkJRMnBDTEVOQlFVTTdaMEpCUlVZc1RVRkJUU3hSUVVGUkxFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dG5Ra0ZETlVRc1RVRkJUU3hsUVVGbExFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTXpRaXhKUVVGSkxGbEJRVmtzUjBGQlJ5eERRVUZETEVOQlFVTTdaMEpCUTNKQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHR2UWtGREwwTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03YjBKQlJXNUVMR3RFUVVGclJEdHZRa0ZEYkVRc1NVRkJTU3hQUVVGUExFZEJRVWNzUTBGQlF5eEZRVUZGTzNkQ1FVTmlMRmxCUVZrc1NVRkJTU3hQUVVGUExFTkJRVU03ZDBKQlJYaENMRzlDUVVGdlFpeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETzNkQ1FVVnFSQ3hsUVVGbExFTkJRVU1zU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPM2RDUVVWeVJDeDFSVUZCZFVVN2QwSkJRM1pGTEVsQlFVa3NXVUZCV1N4SlFVRkpMRlZCUVZVc1JVRkJSVHMwUWtGRE5VSXNUVUZCVFR0NVFrRkRWRHR4UWtGRFNqdHBRa0ZEU2p0blFrRkZSQ3hyUTBGQmEwTTdaMEpCUTJ4RExFbEJRVWtzVlVGQlZTeEhRVUZITEZsQlFWa3NSVUZCUlR0dlFrRkRNMElzVFVGQlRTeEpRVUZKTERaQ1FVRmhMRU5CUVVNc2FVWkJRV2xHTEVOQlFVTXNRMEZCUXp0cFFrRkRPVWM3WjBKQlJVUXNUVUZCVFN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNiMEpCUVc5Q0xFVkJRVVVzWlVGQlpTeEZRVUZGTEhsQ1FVRjVRaXhGUVVGRkxGVkJRVlVzUlVGQlJTeFBRVUZQTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1lVRkRNMGs3YVVKQlFVMDdaMEpCUTBnc05FTkJRVFJETzJkQ1FVTTFReXhOUVVGTkxHTkJRV01zUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUlVGQlJTeFRRVUZUTEVWQlFVVXNiMEpCUVc5Q0xFTkJRVU1zVVVGQlVTeEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMmRDUVVVelJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeHZRa0ZCYjBJc1JVRkJSU3hqUVVGakxFTkJRVU1zVFVGQlRTeEZRVUZGTEhsQ1FVRjVRaXhGUVVGRkxGVkJRVlVzUlVGQlJTeFBRVUZQTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1lVRkRha283VTBGRFNqdGhRVUZOTzFsQlEwZ3NhMFZCUVd0Rk8xbEJRMnhGTERKQ1FVRlpMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlEzQkRMRTFCUVUwc1EwRkJReXcwUWtGQk5FSXNRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eERRVUZETzFOQlEyeEZPMUZCUlVRc1RVRkJUU3hEUVVGRExGbEJRVmtzUjBGQlJ5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJSWEJFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExEQkRRVUV3UXl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJSWFJGTEU5QlFVOHNUVUZCVFN4RFFVRkRPMGxCUTJ4Q0xFTkJRVU03U1VGRlJEczdPenM3T3p0UFFVOUhPMGxCUTBrc1MwRkJTeXhEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZqTEVWQlFVVXNTMEZCWVN4RlFVRkZMR3RDUVVFd1FpeEZRVUZGTEZOQlFXZENPMUZCUTI1SExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMSGREUVVGM1F5eEZRVUZGTEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc2EwSkJRV3RDTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkZNVWNzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeGxRVUZOTEVOQlFVTXNSVUZCUlR0WlFVTjBReXhOUVVGTkxFbEJRVWtzTmtKQlFXRXNRMEZCUXl3MFEwRkJORU1zUTBGQlF5eERRVUZETzFOQlEzcEZPMUZCUlVRc1NVRkJTU3hEUVVGRExIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhaUVVGWkxFVkJRVVVzZVVKQlFWY3NRMEZCUXl4RlFVRkZPMWxCUTNoRUxFMUJRVTBzU1VGQlNTdzJRa0ZCWVN4RFFVRkRMRGhFUVVFNFJDeERRVUZETEVOQlFVTTdVMEZETTBZN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUzBGQlN5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTTVReXhOUVVGTkxFbEJRVWtzTmtKQlFXRXNRMEZCUXl4blEwRkJaME1zUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRlRVU3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1NVRkJTU3hyUWtGQmEwSXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRlRVVzVFVGQlRTeEpRVUZKTERaQ1FVRmhMRU5CUVVNc05rTkJRVFpETEVWQlFVVXNSVUZCUlN4clFrRkJhMElzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEYkVjN1VVRkZSQ3hOUVVGTkxEUkNRVUUwUWl4SFFVRnhRenRaUVVOdVJTeExRVUZMTzFsQlEwd3NVMEZCVXl4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTzFOQlEzSkZMRU5CUVVNN1VVRkZSaXhOUVVGTkxIRkNRVUZ4UWl4SFFVRkhMRTFCUVUwc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXcwUWtGQk5FSXNRMEZCUXl4RFFVRkRPMUZCUlROSExFMUJRVTBzVTBGQlV5eEhRVUZITEUxQlFVMHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zVjBGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExIRkNRVUZ4UWl4RFFVRkRMR2RDUVVGblFpeERRVUZETEVOQlFVTXNSVUZETVVVc1YwRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMSEZDUVVGeFFpeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRVU1zUlVGRE0wVXNUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUlVGRE1VTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFJRVVZzUlN4TlFVRk5MR1ZCUVdVc1IwRkJSeXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEZsQlFWa3NRMEZCUXl4RlFVRkZMRU5CUVVNc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVVMVJpeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMR1ZCUVUwc1JVRkJSU3hEUVVGRE8xRkJReTlDTEZOQlFWTXNRMEZCUXl4WlFVRlpMRWRCUVVjc1pVRkJaU3hEUVVGRE8xRkJRM3BETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExIZERRVUYzUXl4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRM1pGTEU5QlFVOHNVMEZCVXl4RFFVRkRPMGxCUTNKQ0xFTkJRVU03U1VGRlJEczdPenM3T3p0UFFVOUhPMGxCUTBrc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRTFCUVdNc1JVRkJSU3hMUVVGaExFVkJRVVVzYTBKQlFUQkNMRVZCUVVVc1UwRkJaMEk3VVVGRGNrY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zTUVOQlFUQkRMRVZCUVVVc1RVRkJUU3hGUVVGRkxFdEJRVXNzUlVGQlJTeHJRa0ZCYTBJc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dFJRVVUxUnl4TlFVRk5MREJDUVVFd1FpeEhRVUZITEUxQlFVMHNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFVkJRVVVzUzBGQlN5eEZRVUZGTEd0Q1FVRnJRaXhGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETzFGQlJUTkhMRTFCUVUwc2QwSkJRWGRDTEVkQlFUaENPMWxCUTNoRUxFMUJRVTBzUlVGQlJTd3dRa0ZCTUVJc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMU5CUTNCR0xFTkJRVU03VVVGRlJpeE5RVUZOTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zUTBGQlF6dFJRVVZzUlN4TlFVRk5MRFJDUVVFMFFpeEhRVUZyUXp0WlFVTm9SU3hOUVVGTkxFVkJRVVVzZDBKQlFYZENMRU5CUVVNc1RVRkJUVHRUUVVNeFF5eERRVUZETzFGQlJVWXNUVUZCVFN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExIRkNRVUZ4UWl4RFFVRkRMRFJDUVVFMFFpeERRVUZETEVOQlFVTTdVVUZGTVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNNRU5CUVRCRExFVkJRVVVzTUVKQlFUQkNMRU5CUVVNc1EwRkJRenRSUVVNeFJpeFBRVUZQTERCQ1FVRXdRaXhEUVVGRE8wbEJRM1JETEVOQlFVTTdTVUZGUkRzN096czdPenM3TzA5QlUwYzdTVUZEU1N4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVlVzUlVGQlJTeExRVUZoTEVWQlFVVXNhMEpCUVRCQ0xFVkJRVVVzVTBGQmNVSXNSVUZCUlN4bFFVRnBReXhGUVVGRkxGTkJRV2RDTzFGQlEzWktMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEhORFFVRnpReXhGUVVGRkxFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNhMEpCUVd0Q0xFVkJRVVVzVTBGQlV5eEZRVUZGTEdWQlFXVXNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRSUVVWc1NTeE5RVUZOTEdOQlFXTXNSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1UwRkJVeXhGUVVGRkxHVkJRV1VzUTBGQlF5eERRVUZETzFGQlJYSkdMRTFCUVUwc1ZVRkJWU3hIUVVGSExFMUJRVTBzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExHTkJRV01zUlVGQlJTeExRVUZMTEVWQlFVVXNhMEpCUVd0Q0xFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEY2tjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNjME5CUVhORExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdVVUZEZEVVc1QwRkJUeXhWUVVGVkxFTkJRVU03U1VGRGRFSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExHVkJRWEZDTzFGQlF6TkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEhORFFVRnpReXhGUVVGRkxHVkJRV1VzUTBGQlF5eERRVUZETzFGQlJUTkZMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4bFFVRmxMRVZCUVVVc1YwRkJTU3hEUVVGRExFVkJRVVU3V1VGRE4wTXNUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zYjBSQlFXOUVMRU5CUVVNc1EwRkJRenRUUVVOcVJqdFJRVVZFTEUxQlFVMHNkVUpCUVhWQ0xFZEJRVFpDTzFsQlEzUkVMRXRCUVVzc1JVRkJSU3hEUVVGRExHVkJRV1VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRUUVVOcVJDeERRVUZETzFGQlJVWXNUVUZCVFN4M1FrRkJkMElzUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNkVUpCUVhWQ0xFTkJRVU1zUTBGQlF6dFJRVU5xUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eHpRMEZCYzBNc1JVRkJSU3gzUWtGQmQwSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVNeFJpeFBRVUZQTEhkQ1FVRjNRaXhEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU14UXl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zVTBGQmIwSTdVVUZETlVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNkME5CUVhkRExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEZGtVc1NVRkJTU3hEUVVGRExIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hwUWtGQlR5eERRVUZETEVWQlFVVTdXVUZETVVNc1RVRkJUU3hKUVVGSkxEWkNRVUZoTEVOQlFVTXNhVVJCUVdsRUxFTkJRVU1zUTBGQlF6dFRRVU01UlR0UlFVVkVMRTFCUVUwc1YwRkJWeXhIUVVGclF5eEZRVUZGTEVOQlFVTTdVVUZGZEVRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZGtNc1RVRkJUU3hoUVVGaExFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFsQlEzcEVMRmRCUVZjc1EwRkJReXhoUVVGaExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVMEZEYmtNN1VVRkZSQ3hOUVVGTkxGbEJRVmtzUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4elFrRkJjMElzUTBGQlF5eFRRVUZUTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkZOMFVzVFVGQlRTeHBRa0ZCYVVJc1IwRkJWeXhGUVVGRkxFTkJRVU03VVVGRGNrTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeEZRVUZGTzFsQlEycERMRWxCUVVrc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRMnhETEUxQlFVMHNVMEZCVXl4SFFVRkhMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU03WjBKQlEzUkRMRTFCUVUwc1RVRkJUU3hIUVVGSExIRkRRVUZwUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dG5Ra0ZGYmtRc1YwRkJWeXhEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0blFrRkZNVVFzYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzJGQlEyeERPMUZCUTB3c1EwRkJReXhEUVVGRExFTkJRVU03VVVGRlNDeEpRVUZKTEU5QlFXdENMRU5CUVVNN1VVRkRka0lzU1VGQlNTeHBRa0ZCYVVJc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF6bENMRTFCUVUwc1pVRkJaU3hIUVVGSExFMUJRVTBzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1dVRkRla1VzVDBGQlR5eEhRVUZITEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUlVGQlJUdG5Ra0ZEYUVNc1NVRkJTU3hqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETzJkQ1FVVXhRaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eFhRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdaMEpCUlhaRUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMjlDUVVOcVF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4cFFrRkJhVUlzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEyeEVMR05CUVdNc1IwRkJSeXhEUVVGRExHVkJRV1VzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0dlFrRkRNME1zU1VGQlNTeERRVUZETEdOQlFXTXNSVUZCUlR0M1FrRkRha0lzVFVGQlRUdHhRa0ZEVkR0cFFrRkRTanRuUWtGRlJDeFBRVUZQTEdOQlFXTXNRMEZCUXp0WlFVTXhRaXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5PTzJGQlFVMDdXVUZEU0N4UFFVRlBMRWRCUVVjc1JVRkJSU3hEUVVGRE8xbEJSV0lzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGTkJRVk1zUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRM1pETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WVVGRGRFSTdVMEZEU2p0UlFVVkVMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEhkRFFVRjNReXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFGQlEzSkZMRTlCUVU4c1QwRkJUeXhEUVVGRE8wbEJRMjVDTEVOQlFVTTdTVUZGUkRzN096czdPenM3T3pzN1QwRlhSenRKUVVOSkxFdEJRVXNzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhsUVVGeFFpeEZRVUZGTEV0QlFXRXNSVUZCUlN4clFrRkJNRUlzUlVGQlJTeFRRVUZ4UWl4RlFVRkZMR05CUVN0Q08xRkJRM0JLTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExEUkRRVUUwUXl4RlFVRkZMR1ZCUVdVc1JVRkJSU3hMUVVGTExFVkJRVVVzYTBKQlFXdENMRVZCUVVVc1UwRkJVeXhGUVVGRkxHTkJRV01zUTBGQlF5eERRVUZETzFGQlJYWkpMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4bFFVRmxMRVZCUVVVc1YwRkJTU3hEUVVGRExFVkJRVVU3V1VGRE4wTXNUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zYjBSQlFXOUVMRU5CUVVNc1EwRkJRenRUUVVOcVJqdFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRemxETEUxQlFVMHNTVUZCU1N3MlFrRkJZU3hEUVVGRExHZERRVUZuUXl4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU40UlR0UlFVVkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eEpRVUZKTEd0Q1FVRnJRaXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU40UlN4TlFVRk5MRWxCUVVrc05rSkJRV0VzUTBGQlF5dzJRMEZCTmtNc1JVRkJSU3hGUVVGRkxHdENRVUZyUWl4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOc1J6dFJRVVZFTEVsQlFVa3NRMEZCUXl4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNiVUpCUVZFc1EwRkJReXhGUVVGRk8xbEJRek5ETEUxQlFVMHNTVUZCU1N3MlFrRkJZU3hEUVVGRExHbEVRVUZwUkN4RFFVRkRMRU5CUVVNN1UwRkRPVVU3VVVGRlJDeE5RVUZOTEcxQ1FVRnRRaXhIUVVGSExHTkJRV01zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEYWtRc1NVRkJTU3d5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlR0WlFVTnlSQ3h0UWtGQmJVSXNRMEZCUXl4VFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGRE8xTkJRM3BETzFGQlJVUXNTVUZCU1N4dFFrRkJiVUlzUTBGQlF5eFRRVUZUTEV0QlFVc3NTMEZCU3l4SlFVRkpMRU5CUVVNc1QwRkJUeXh0UWtGQmJVSXNRMEZCUXl4VFFVRlRMRXRCUVVzc1ZVRkJWU3hKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUlVGQlJUdFpRVU4wU1N4TlFVRk5MRmxCUVZrc1IwRkJSeXhOUVVGTkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNN1dVRkZPVVFzU1VGQlNTeFpRVUZaTEVWQlFVVTdaMEpCUTJRc1RVRkJUU3h2UWtGQmIwSXNSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVjBGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxHdENRVUZyUWl4RlFVRkZMRk5CUVZNc1JVRkJSU3hUUVVGVExFVkJRVVVzWlVGQlpTeERRVUZETEVOQlFVTTdaMEpCUlhwTExFbEJRVWtzTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN2IwSkJRMjVFTEU5QlFVOHNTVUZCU1N4RFFVRkRMSE5DUVVGelFpeERRVUZETEUxQlFVMHNRMEZEY2tNc1MwRkJTeXhKUVVGSkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zWlVGQlpTeEZRVUZGTEV0QlFVc3NSVUZCUlN4clFrRkJhMElzUlVGQlJTeFRRVUZUTEVWQlFVVXNiVUpCUVcxQ0xFTkJRVU1zUlVGREwwY3NiVUpCUVcxQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdhVUpCUTJ4RE8zRkNRVUZOTzI5Q1FVTklMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETERSRFFVRTBReXhGUVVGRkxHOUNRVUZ2UWl4RFFVRkRMRU5CUVVNN2IwSkJRM1JHTEU5QlFVOHNiMEpCUVc5Q0xFTkJRVU03YVVKQlF5OUNPMkZCUTBvN2FVSkJRVTA3WjBKQlEwZ3NUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zSzBKQlFTdENMRU5CUVVNc1EwRkJRenRoUVVNMVJEdFRRVU5LTzJGQlFVMDdXVUZEU0N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5dzBRMEZCTkVNc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dFpRVU16UlN4UFFVRlBMRk5CUVZNc1EwRkJRenRUUVVOd1FqdEpRVU5NTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zWlVGQmNVSTdVVUZEZUVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNiVU5CUVcxRExFVkJRVVVzWlVGQlpTeERRVUZETEVOQlFVTTdVVUZGZUVVc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMR1ZCUVdVc1JVRkJSU3hYUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU0zUXl4TlFVRk5MRWxCUVVrc05rSkJRV0VzUTBGQlF5eHZSRUZCYjBRc1EwRkJReXhEUVVGRE8xTkJRMnBHTzFGQlJVUXNUVUZCVFN4WlFVRlpMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRPMUZCUldoRkxFMUJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NaVUZCVFN4RlFVRkZMRU5CUVVNN1VVRkROVUlzVFVGQlRTeERRVUZETEZsQlFWa3NSMEZCUnl4WlFVRlpMRU5CUVVNN1VVRkZia01zVFVGQlRTeFBRVUZQTEVkQlFVY3NNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZGTjBNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdFpRVU5XTEUxQlFVMHNTVUZCU1N3MlFrRkJZU3hEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1UwRkRkRVE3VVVGRlJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXh0UTBGQmJVTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNdlJDeFBRVUZQTEUxQlFVMHNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJSVVE3T3pzN096dFBRVTFITzBsQlEwa3NTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhuUWtGQmMwSXNSVUZCUlN4VlFVRnBRanRSUVVOcVJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXgzUTBGQmQwTXNSVUZCUlN4blFrRkJaMElzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVVXhSaXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNWMEZCU1N4RFFVRkRMRVZCUVVVN1dVRkRPVU1zVFVGQlRTeEpRVUZKTERaQ1FVRmhMRU5CUVVNc2NVUkJRWEZFTEVOQlFVTXNRMEZCUXp0VFFVTnNSanRSUVVWRUxFMUJRVTBzY1VKQlFYRkNMRWRCUVd0Q0xFVkJRVVVzUTBGQlF6dFJRVU5vUkN4SlFVRkpMRzFDUVVGdFFpeEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8xRkJRek5ETEVsQlFVa3NZVUZCWVN4SFFVRkhMRlZCUVZVc1EwRkJRenRSUVVVdlFpeEhRVUZITzFsQlEwTXNUVUZCVFN4blFrRkJaMElzUjBGQmMwSTdaMEpCUTNoRExFMUJRVTBzUlVGQlJTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMkZCUTNSRUxFTkJRVU03V1VGRlJpeE5RVUZOTEdsQ1FVRnBRaXhIUVVGSExFMUJRVTBzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXp0WlFVTTFSU3hOUVVGTkxFMUJRVTBzUjBGQlJ5eERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExHbENRVUZwUWl4RFFVRkRPMmRDUVVOMlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRTFCUVUwc1EwRkJRenRuUWtGREwwTXNhVUpCUVdsQ0xFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRPMWxCUlRsR0xFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3WjBKQlF6bENMRTFCUVUwc1NVRkJTU3cyUWtGQllTeERRVUZETEdsRFFVRnBReXhEUVVGRExFTkJRVU03WVVGRE9VUTdhVUpCUVUwN1owSkJRMGdzVFVGQlRTeHBRa0ZCYVVJc1IwRkJSeXg1UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUlRWRkxEWkVRVUUyUkR0blFrRkROMFFzVFVGQlRTeFBRVUZQTEVkQlFVY3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0blFrRkRja1FzU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4cFFrRkJhVUlzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RlFVRkZMRXRCUVVzc1EwRkJReXhGUVVGRk8yOUNRVU0zUkN4TlFVRk5MRWxCUVVrc05rSkJRV0VzUTBGQlF5eHRRMEZCYlVNc1EwRkJReXhEUVVGRE8ybENRVU5vUlR0blFrRkZSQ3dyUWtGQkswSTdaMEpCUXk5Q0xFMUJRVTBzWlVGQlpTeEhRVUZITEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhOUVVGTkxFTkJRVU03WjBKQlJUTkZMRzFDUVVGdFFpeEhRVUZITEZOQlFWTXNRMEZCUXp0blFrRkRhRU1zWVVGQllTeEhRVUZITEZOQlFWTXNRMEZCUXp0blFrRkZNVUlzSzBKQlFTdENPMmRDUVVNdlFpeEpRVUZKTEdWQlFXVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzUzBGQlN5eHBRa0ZCYVVJc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVN2IwSkJRekZHTEcxRFFVRnRRenR2UWtGRGJrTXNjVUpCUVhGQ0xFTkJRVU1zU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRVU03YjBKQlJUbERMSGxEUVVGNVF6dHZRa0ZEZWtNc1NVRkJTU3hwUWtGQmFVSXNRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEpRVUZKTEdsQ1FVRnBRaXhEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVN2QwSkJRMnBITEcxQ1FVRnRRaXhIUVVGSExHbENRVUZwUWl4RFFVRkRMR2RDUVVGblFpeERRVUZETzNkQ1FVTjZSQ3hoUVVGaExFZEJRVWNzWlVGQlpTeERRVUZETzNGQ1FVTnVRenRwUWtGRFNqdGhRVU5LTzFOQlEwb3NVVUZCVVN4dFFrRkJiVUlzUzBGQlN5eFRRVUZUTEVWQlFVVTdVVUZGTlVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNkME5CUVhkRExFVkJRVVVzY1VKQlFYRkNMRU5CUVVNc1EwRkJRenRSUVVOdVJpeFBRVUZQTEhGQ1FVRnhRaXhEUVVGRE8wbEJRMnBETEVOQlFVTTdTVUZGUkRzN096czdPMDlCVFVjN1NVRkRTU3hMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEdWQlFYRkNMRVZCUVVVc1MwRkJZU3hGUVVGRkxHdENRVUV3UWp0UlFVTjRSaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4M1EwRkJkME1zUlVGQlJTeGxRVUZsTEVWQlFVVXNTMEZCU3l4RlFVRkZMR3RDUVVGclFpeERRVUZETEVOQlFVTTdVVUZGZUVjc1RVRkJUU3hOUVVGTkxFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRE8xRkJSWEpFTEUxQlFVMHNRMEZCUXl4WlFVRlpMRWRCUVVjc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVVndSQ3hOUVVGTkxIZENRVUYzUWl4SFFVRkhMRTFCUVUwc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFVkJRVVVzYTBKQlFXdENMRU5CUVVNc1EwRkJRenRSUVVOb1J5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXgzUTBGQmQwTXNSVUZCUlN4M1FrRkJkMElzUTBGQlF5eERRVUZETzFGQlEzUkdMRTlCUVU4c2QwSkJRWGRDTEVOQlFVTTdTVUZEY0VNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hMUVVGTExFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1pVRkJjVUk3VVVGRGFFUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zTWtOQlFUSkRMRVZCUVVVc1pVRkJaU3hEUVVGRExFTkJRVU03VVVGRmFFWXNUVUZCVFN4TlFVRk5MRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRPMUZCUlhKRUxFMUJRVTBzTkVKQlFUUkNMRWRCUVd0RE8xbEJRMmhGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRUUVVNMVJTeERRVUZETzFGQlJVWXNUVUZCVFN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExIRkNRVUZ4UWl4RFFVRkRMRFJDUVVFMFFpeERRVUZETEVOQlFVTTdVVUZGTVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNNa05CUVRKRExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZGZGtVc1QwRkJUeXhOUVVGTkxFTkJRVU03U1VGRGJFSXNRMEZCUXp0SlFVVkVPenM3T3pzN08wOUJUMGM3U1VGRFNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFTkJRVU1zVDBGQlowSXNSVUZCUlN4VFFVRnhRaXhGUVVGRkxFbEJRVmtzUlVGQlJTeFRRVUZyUWp0UlFVTjZSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4blJFRkJaMFFzUlVGQlJTeFBRVUZQTEVWQlFVVXNVMEZCVXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dFJRVVY2Unl4TlFVRk5MRmxCUVZrc1IwRkJSeXhOUVVGTkxFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFVkJRVVVzVTBGQlV5eEZRVUZGTEVsQlFVa3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRSUVVOMFJpeEpRVUZKTEZsQlFWa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRM3BDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1NVRkJTU3hEUVVGRExITkNRVUZ6UWl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8xbEJRemRFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHZEVRVUZuUkN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRekZGTEU5QlFVOHNTVUZCU1N4RFFVRkRPMU5CUTJZN1lVRkJUVHRaUVVOSUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RFUVVGblJDeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNoRkxFOUJRVThzUlVGQlJTeERRVUZETzFOQlEySTdTVUZEVEN4RFFVRkRPMGxCUlVRN096czdPenM3T3pzN1QwRlZSenRKUVVOSkxFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCVlN4RlFVRkZMRlZCUVcxQ0xFVkJRVVVzVVVGQmFVSXNSVUZCUlN4UlFVRXdRaXhGUVVGRkxHVkJRWGxDTzFGQlF5OUlMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEhORFFVRnpReXhGUVVGRkxFbEJRVWtzUlVGQlJTeFZRVUZWTEVWQlFVVXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hsUVVGbExFTkJRVU1zUTBGQlF6dFJRVVZxU0N4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRmRCUVVrc1EwRkJReXhGUVVGRk8xbEJRMnhETEUxQlFVMHNTVUZCU1N3MlFrRkJZU3hEUVVGRExDdENRVUVyUWl4RFFVRkRMRU5CUVVNN1UwRkROVVE3VVVGRFJDeEpRVUZKTEdWQlFXVXNSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkRha01zU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExHVkJRV1VzUTBGQlF5eEZRVUZGTzFsQlF6RkRMR1ZCUVdVc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRGRrSTdVVUZGUkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhOUVVGTkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RlFVRkZMR1ZCUVdVc1JVRkJSU3hSUVVGUkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUlRkR0xFMUJRVTBzVDBGQlR5eEhRVUZITEUxQlFVMHNTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeERRVUZETEZOQlFWTXNSVUZCUlN4bFFVRmxMRU5CUVVNc1EwRkJRenRSUVVNMVJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXh6UTBGQmMwTXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVOdVJTeFBRVUZQTEU5QlFVOHNRMEZCUXp0SlFVTnVRaXhEUVVGRE8wbEJSVVE3T3pzN096czdUMEZQUnp0SlFVTkpMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlZTeEZRVUZGTEZWQlFXMUNMRVZCUVVVc1VVRkJhVUlzUlVGQlJTeFJRVUV3UWp0UlFVTjBSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4M1EwRkJkME1zUlVGQlJTeEpRVUZKTEVWQlFVVXNWVUZCVlN4RlFVRkZMRkZCUVZFc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVVZzUnl4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRmRCUVVrc1EwRkJReXhGUVVGRk8xbEJRMnhETEUxQlFVMHNTVUZCU1N3MlFrRkJZU3hEUVVGRExDdENRVUVyUWl4RFFVRkRMRU5CUVVNN1UwRkROVVE3VVVGRFJDeEpRVUZKTEdWQlFXVXNSMEZCUnl4VlFVRlZMRU5CUVVNN1VVRkRha01zU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExHVkJRV1VzUTBGQlF5eEZRVUZGTzFsQlF6RkRMR1ZCUVdVc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRGRrSTdVVUZGUkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhOUVVGTkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RlFVRkZMR1ZCUVdVc1JVRkJSU3hSUVVGUkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZGQlFWRXNTVUZCU1N4cFEwRkJaU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlJYWklMRTFCUVUwc1QwRkJUeXhIUVVGSExFMUJRVTBzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVnFSU3hOUVVGTkxGZEJRVmNzUjBGQlowSTdXVUZETjBJc1lVRkJZU3hGUVVGRkxGTkJRVk1zUTBGQlF5eEhRVUZITEVWQlFVVTdXVUZET1VJc1UwRkJVenRaUVVOVUxGTkJRVk1zUlVGQlJTeFBRVUZQTzFsQlEyeENMRTFCUVUwc1JVRkJSU3hGUVVGRk8xbEJRMVlzVDBGQlR5eEZRVUZGTEVOQlFVTTdVMEZEWWl4RFFVRkRPMUZCUlVZc1RVRkJUU3hqUVVGakxFZEJRWGRDTzFsQlEzaERMRk5CUVZNc1JVRkJSU3hYUVVGWExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRaUVVOMFJTeFRRVUZUTEVWQlFVVXNSMEZCUnp0VFFVTnFRaXhEUVVGRE8xRkJSVVlzVFVGQlRTeGxRVUZsTEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGZEJRVmNzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0UlFVVXhSU3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1pVRkJaU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRkRVFzVFVGQlRTeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVVFzU1VGQlNTeFBRVUZQTEVkQlFVY3NRMEZCUXl4RlFVRkZPMmRDUVVOaUxGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zVjBGQlZ5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hSUVVGUkxFbEJRVWtzYVVOQlFXVXNRMEZCUXl4TlFVRk5MRVZCUVVVc1pVRkJaU3hIUVVGSExFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOMFNTeFhRVUZYTEVOQlFVTXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJRenRoUVVOc1F6dFRRVU5LTzFGQlJVUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zZDBOQlFYZERMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGRGVrVXNUMEZCVHl4WFFVRlhMRU5CUVVNN1NVRkRka0lzUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4TFFVRkxMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNVMEZCYjBJc1JVRkJSU3hsUVVGM1FqdFJRVU0zUlN4TlFVRk5MR3RDUVVGclFpeEhRVUZITEUxQlFVMHNTVUZCU1N4RFFVRkRMSE5DUVVGelFpeERRVUZETEZOQlFWTXNSVUZCUlN4VFFVRlRMRVZCUVVVc1UwRkJVeXhGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETzFGQlJYcEhMREpDUVVFeVFqdFJRVU16UWl4TlFVRk5MR2RDUVVGblFpeEhRVUZITEVsQlFVa3NSMEZCUnl4RlFVRlZMRU5CUVVNN1VVRkRNME1zVFVGQlRTeHRRa0ZCYlVJc1IwRkJSeXhKUVVGSkxFZEJRVWNzUlVGQlZTeERRVUZETzFGQlJUbERMR3RDUVVGclFpeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRmRCUVZjc1JVRkJSU3hGUVVGRk8xbEJRM1pETEhsQ1FVRjVRanRaUVVONlFpeEpRVUZKTEZkQlFWY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEZRVUZGTzJkQ1FVTXpReXhuUWtGQlowSXNRMEZCUXl4SFFVRkhMRU5CUVVNc2NVTkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRia1k3YVVKQlFVMDdaMEpCUTBnc2JVSkJRVzFDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVOeVJUdFJRVU5NTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlVnc1NVRkJTU3h0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRemxDTEUxQlFVMHNlVUpCUVhsQ0xFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNjMEpCUVhOQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExGZEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNaVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVVXpTaXg1UWtGQmVVSXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhYUVVGWExFVkJRVVVzUlVGQlJUdG5Ra0ZET1VNc1NVRkJTU3hYUVVGWExFTkJRVU1zV1VGQldTeERRVUZETEZGQlFWRXNSVUZCUlN4TFFVRkxMRU5CUVVNc1JVRkJSVHR2UWtGRE0wTXNaMEpCUVdkQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEhGRFFVRnBRaXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzJsQ1FVTnVSanRaUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEwNDdVVUZGUkN4TlFVRk5MRmxCUVZrc1IwRkJZU3hGUVVGRkxFTkJRVU03VVVGRGJFTXNUVUZCVFN4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8xRkJSV3BFTEd0RVFVRnJSRHRSUVVOc1JDeHBSRUZCYVVRN1VVRkRha1FzU1VGQlNTeFpRVUZaTEVOQlFVTTdVVUZEYWtJc1NVRkJTU3hsUVVGbExFVkJRVVU3V1VGRGFrSXNXVUZCV1N4SFFVRkhMRTFCUVUwc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4WFFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExHVkJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGJrZzdVVUZGUkN4elJFRkJjMFE3VVVGRGRFUXNiMFZCUVc5Rk8xRkJRM0JGTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM3BETEUxQlFVMHNUVUZCVFN4SFFVRlhMRTFCUVUwc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFhRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMR1ZCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJSV2hITEUxQlFVMHNRMEZCUXl4alFVRmpMRWRCUVVjc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dFpRVU51UlN4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFOQlF6ZENPMUZCUlVRc05FSkJRVFJDTzFGQlF6VkNMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRka0lzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFpRVU16UkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRzFDUVVGdFFpeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMWxCUXpORUxFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTVReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVZJTEU5QlFVOHNXVUZCV1N4RFFVRkRPMGxCUTNoQ0xFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNaVUZCWlN4RFFVRkRMRWxCUVZVc1JVRkJSU3hMUVVGaExFVkJRVVVzVVVGQmVVSXNSVUZCUlN4bFFVRjNRanRSUVVOc1J5eE5RVUZOTEVkQlFVY3NSMEZCUnl4VFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRNME1zVFVGQlRTeFBRVUZQTEVkQlFVY3NVMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5xUXl4TlFVRk5MRmxCUVZrc1IwRkJSeXhUUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUXpGRExFbEJRVWtzYlVKQlFXMUNMRWRCUVVjc1lVRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVVU1UlN4SlFVRkpMR1ZCUVdVc1JVRkJSVHRaUVVOcVFpeHRRa0ZCYlVJc1NVRkJTU3cyUWtGQllTeERRVUZETEdOQlFXTXNRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGVFVTdVVUZGUkN4UFFVRlBMR2xDUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEdWQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNSRkxFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGVkxFVkJRVVVzVFVGQll5eEZRVUZGTEdWQlFXZERMRVZCUVVVc1RVRkJaU3hGUVVNM1JTeDVRa0ZCY1VRc1JVRkJSU3hWUVVGclFpeEZRVUZGTEVkQlFWRXNSVUZCUlN4VFFVRnJRanRSUVVVNVNDeEpRVUZKTEd0Q1FVRnJRaXhIUVVGSExGVkJRVlVzUTBGQlF6dFJRVU53UXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU53UXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdXVUZGZEVVc05FSkJRVFJDTzFsQlF6VkNMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRmJFY3NaME5CUVdkRE8xbEJRMmhETERoRFFVRTRRenRaUVVNNVF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFbEJRVWtzYTBKQlFXdENMRVZCUVVVN1owSkJRM3BETEUxQlFVMHNVMEZCVXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03WjBKQlJYcEVMREpGUVVFeVJUdG5Ra0ZETTBVc1NVRkJTU3hUUVVGVExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETEVsQlFVa3NNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zWlVGQlpTeERRVUZETEdkQ1FVRm5RaXhGUVVGRkxHbENRVUZQTEVOQlFVTXNSVUZCUlR0dlFrRkRNMGdzZVVKQlFYbENPMjlDUVVONlFpeE5RVUZOTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hsUVVGbExFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1UwRkJVeXhGUVVGRkxFZEJRVWNzUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXp0dlFrRkRka1lzYjBOQlFXOURPMjlDUVVOd1F5d3lRa0ZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEdWQlFXVXNSVUZCUlN4NVFrRkJlVUlzUlVGQlJTeE5RVUZOTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN2FVSkJRM2hITzNGQ1FVRk5MRWxCUVVrc1UwRkJVeXhIUVVGSExFTkJRVU1zUlVGQlJUdHZRa0ZEZEVJc1NVRkJTU3hWUVVGVkxFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTnVRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0M1FrRkRjRU1zVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenR4UWtGRGVrUTdiMEpCUlVRc1ZVRkJWU3hGUVVGRkxFTkJRVU03YjBKQlJXSXNUVUZCVFN4VFFVRlRMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1NVRkJTU3hGUVVGRkxGVkJRVlVzUlVGQlJTeExRVUZMTEVWQlFVVXNaVUZCWlN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yOUNRVVZ5Unl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdiMEpCUlM5RUxIbENRVUY1UWp0dlFrRkRla0lzVFVGQlRTeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1UwRkJVeXhEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1UwRkJVeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0dlFrRkZMMFVzYjBOQlFXOURPMjlDUVVOd1F5d3lRa0ZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEdWQlFXVXNSVUZCUlN4NVFrRkJlVUlzUlVGQlJTeE5RVUZOTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN2FVSkJRM2hITzNGQ1FVRk5PMjlDUVVOSUxEWkVRVUUyUkR0dlFrRkROMFFzZVVKQlFYbENPMjlDUVVONlFpd3lRa0ZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEdWQlFXVXNSVUZCUlN4NVFrRkJlVUlzUlVGQlJTeE5RVUZOTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN2FVSkJRM2hITzJGQlEwbzdhVUpCUVUwN1owSkJRMGdzYTBWQlFXdEZPMmRDUVVOc1JTeHhRa0ZCY1VJN1owSkJRM0pDTEd0Q1FVRnJRaXhKUVVGSkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNN1lVRkRNME03VTBGRFNqdEpRVU5NTEVOQlFVTTdPMEZCTVdsRFJDeGxRVUZsTzBGQlExTXNhME5CUVdkQ0xFZEJRVmNzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVWdVJTeGxRVUZsTzBGQlExTXNORUpCUVZVc1IwRkJWeXhIUVVGSExFTkJRVU03UVVGTWNrUXNPRU5CTkdsRFF5SjkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9lcnJvcl9jb3JlRXJyb3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19hcnJheUhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX251bWJlckhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX29iamVjdEhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9sb2dnZXJzX251bGxMb2dnZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3Rfc2VydmljZXNfYmFja2dyb3VuZFRhc2tTZXJ2aWNlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X3NlcnZpY2VzX3RpbWVTZXJ2aWNlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY3J5cHRvX2Rpc3RfZXJyb3JfY3J5cHRvRXJyb3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jcnlwdG9fZGlzdF9mYWN0b3JpZXNfc3BvbmdlRmFjdG9yeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NyeXB0b19kaXN0X2hhc2hfaXNzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY3J5cHRvX2Rpc3RfaGVscGVyc190cmFuc2FjdGlvbkhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2RhdGFfZGlzdF9kYXRhX2FkZHJlc3NfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV9hZGRyZXNzU2VjdXJpdHlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV9idW5kbGVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV9oYXNoX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfaW5wdXRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV90YWdfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV90cmFuc2FjdGlvbl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2RhdGFfZGlzdF9kYXRhX3RyYW5zZmVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fZGF0YV9kaXN0X2RhdGFfdHJpdHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19kYXRhX2Rpc3RfZGF0YV90cnl0ZU51bWJlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2RhdGFfZGlzdF9kYXRhX3RyeXRlc19fOyJdLCJzb3VyY2VSb290IjoiIn0=