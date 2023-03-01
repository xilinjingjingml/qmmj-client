/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

// var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["moduleHBScmj"] || ($protobuf.roots["moduleHBScmj"] = {});

$root.mahjong_mj_completedata_not_v1_1_0 = (function() {

    /**
     * Properties of a mahjong_mj_completedata_not_v1_1_0.
     * @exports Imahjong_mj_completedata_not_v1_1_0
     * @interface Imahjong_mj_completedata_not_v1_1_0
     * @property {number} nDiZhu mahjong_mj_completedata_not_v1_1_0 nDiZhu
     * @property {number} nTaifei mahjong_mj_completedata_not_v1_1_0 nTaifei
     * @property {number} nLeftCards mahjong_mj_completedata_not_v1_1_0 nLeftCards
     * @property {number} cBanker mahjong_mj_completedata_not_v1_1_0 cBanker
     * @property {number} cCurrPly mahjong_mj_completedata_not_v1_1_0 cCurrPly
     * @property {number} cAutoState mahjong_mj_completedata_not_v1_1_0 cAutoState
     * @property {number} cAutoType mahjong_mj_completedata_not_v1_1_0 cAutoType
     * @property {number} sSerialID mahjong_mj_completedata_not_v1_1_0 sSerialID
     * @property {Array.<Imahjong_mj_changecard_not>|null} [vecPlyData] mahjong_mj_completedata_not_v1_1_0 vecPlyData
     * @property {Array.<number|Long>|null} [vecFakeScores] mahjong_mj_completedata_not_v1_1_0 vecFakeScores
     */

    /**
     * Constructs a new mahjong_mj_completedata_not_v1_1_0.
     * @exports mahjong_mj_completedata_not_v1_1_0
     * @classdesc Represents a mahjong_mj_completedata_not_v1_1_0.
     * @implements Imahjong_mj_completedata_not_v1_1_0
     * @constructor
     * @param {Imahjong_mj_completedata_not_v1_1_0=} [properties] Properties to set
     */
    function mahjong_mj_completedata_not_v1_1_0(properties) {
        this.vecPlyData = [];
        this.vecFakeScores = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_completedata_not_v1_1_0 nDiZhu.
     * @member {number} nDiZhu
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @instance
     */
    mahjong_mj_completedata_not_v1_1_0.prototype.nDiZhu = 0;

    /**
     * mahjong_mj_completedata_not_v1_1_0 nTaifei.
     * @member {number} nTaifei
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @instance
     */
    mahjong_mj_completedata_not_v1_1_0.prototype.nTaifei = 0;

    /**
     * mahjong_mj_completedata_not_v1_1_0 nLeftCards.
     * @member {number} nLeftCards
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @instance
     */
    mahjong_mj_completedata_not_v1_1_0.prototype.nLeftCards = 0;

    /**
     * mahjong_mj_completedata_not_v1_1_0 cBanker.
     * @member {number} cBanker
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @instance
     */
    mahjong_mj_completedata_not_v1_1_0.prototype.cBanker = 0;

    /**
     * mahjong_mj_completedata_not_v1_1_0 cCurrPly.
     * @member {number} cCurrPly
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @instance
     */
    mahjong_mj_completedata_not_v1_1_0.prototype.cCurrPly = 0;

    /**
     * mahjong_mj_completedata_not_v1_1_0 cAutoState.
     * @member {number} cAutoState
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @instance
     */
    mahjong_mj_completedata_not_v1_1_0.prototype.cAutoState = 0;

    /**
     * mahjong_mj_completedata_not_v1_1_0 cAutoType.
     * @member {number} cAutoType
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @instance
     */
    mahjong_mj_completedata_not_v1_1_0.prototype.cAutoType = 0;

    /**
     * mahjong_mj_completedata_not_v1_1_0 sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @instance
     */
    mahjong_mj_completedata_not_v1_1_0.prototype.sSerialID = 0;

    /**
     * mahjong_mj_completedata_not_v1_1_0 vecPlyData.
     * @member {Array.<Imahjong_mj_changecard_not>} vecPlyData
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @instance
     */
    mahjong_mj_completedata_not_v1_1_0.prototype.vecPlyData = $util.emptyArray;

    /**
     * mahjong_mj_completedata_not_v1_1_0 vecFakeScores.
     * @member {Array.<number|Long>} vecFakeScores
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @instance
     */
    mahjong_mj_completedata_not_v1_1_0.prototype.vecFakeScores = $util.emptyArray;

    /**
     * Creates a new mahjong_mj_completedata_not_v1_1_0 instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @static
     * @param {Imahjong_mj_completedata_not_v1_1_0=} [properties] Properties to set
     * @returns {mahjong_mj_completedata_not_v1_1_0} mahjong_mj_completedata_not_v1_1_0 instance
     */
    mahjong_mj_completedata_not_v1_1_0.create = function create(properties) {
        return new mahjong_mj_completedata_not_v1_1_0(properties);
    };

    /**
     * Encodes the specified mahjong_mj_completedata_not_v1_1_0 message. Does not implicitly {@link mahjong_mj_completedata_not_v1_1_0.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @static
     * @param {Imahjong_mj_completedata_not_v1_1_0} message mahjong_mj_completedata_not_v1_1_0 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_completedata_not_v1_1_0.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nDiZhu);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nTaifei);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nLeftCards);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cBanker);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cCurrPly);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cAutoState);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.cAutoType);
        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.sSerialID);
        if (message.vecPlyData != null && message.vecPlyData.length)
            for (var i = 0; i < message.vecPlyData.length; ++i)
                $root.mahjong_mj_changecard_not.encode(message.vecPlyData[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.vecFakeScores != null && message.vecFakeScores.length)
            for (var i = 0; i < message.vecFakeScores.length; ++i)
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.vecFakeScores[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_completedata_not_v1_1_0 message, length delimited. Does not implicitly {@link mahjong_mj_completedata_not_v1_1_0.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @static
     * @param {Imahjong_mj_completedata_not_v1_1_0} message mahjong_mj_completedata_not_v1_1_0 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_completedata_not_v1_1_0.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_completedata_not_v1_1_0 message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_completedata_not_v1_1_0} mahjong_mj_completedata_not_v1_1_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_completedata_not_v1_1_0.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_completedata_not_v1_1_0();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nDiZhu = reader.int32();
                break;
            case 2:
                message.nTaifei = reader.int32();
                break;
            case 3:
                message.nLeftCards = reader.int32();
                break;
            case 4:
                message.cBanker = reader.int32();
                break;
            case 5:
                message.cCurrPly = reader.int32();
                break;
            case 6:
                message.cAutoState = reader.int32();
                break;
            case 7:
                message.cAutoType = reader.int32();
                break;
            case 8:
                message.sSerialID = reader.int32();
                break;
            case 9:
                if (!(message.vecPlyData && message.vecPlyData.length))
                    message.vecPlyData = [];
                message.vecPlyData.push($root.mahjong_mj_changecard_not.decode(reader, reader.uint32()));
                break;
            case 10:
                if (!(message.vecFakeScores && message.vecFakeScores.length))
                    message.vecFakeScores = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecFakeScores.push(reader.int64());
                } else
                    message.vecFakeScores.push(reader.int64());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nDiZhu"))
            throw $util.ProtocolError("missing required 'nDiZhu'", { instance: message });
        if (!message.hasOwnProperty("nTaifei"))
            throw $util.ProtocolError("missing required 'nTaifei'", { instance: message });
        if (!message.hasOwnProperty("nLeftCards"))
            throw $util.ProtocolError("missing required 'nLeftCards'", { instance: message });
        if (!message.hasOwnProperty("cBanker"))
            throw $util.ProtocolError("missing required 'cBanker'", { instance: message });
        if (!message.hasOwnProperty("cCurrPly"))
            throw $util.ProtocolError("missing required 'cCurrPly'", { instance: message });
        if (!message.hasOwnProperty("cAutoState"))
            throw $util.ProtocolError("missing required 'cAutoState'", { instance: message });
        if (!message.hasOwnProperty("cAutoType"))
            throw $util.ProtocolError("missing required 'cAutoType'", { instance: message });
        if (!message.hasOwnProperty("sSerialID"))
            throw $util.ProtocolError("missing required 'sSerialID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_completedata_not_v1_1_0 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_completedata_not_v1_1_0} mahjong_mj_completedata_not_v1_1_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_completedata_not_v1_1_0.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_completedata_not_v1_1_0 message.
     * @function verify
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_completedata_not_v1_1_0.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nDiZhu))
            return "nDiZhu: integer expected";
        if (!$util.isInteger(message.nTaifei))
            return "nTaifei: integer expected";
        if (!$util.isInteger(message.nLeftCards))
            return "nLeftCards: integer expected";
        if (!$util.isInteger(message.cBanker))
            return "cBanker: integer expected";
        if (!$util.isInteger(message.cCurrPly))
            return "cCurrPly: integer expected";
        if (!$util.isInteger(message.cAutoState))
            return "cAutoState: integer expected";
        if (!$util.isInteger(message.cAutoType))
            return "cAutoType: integer expected";
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        if (message.vecPlyData != null && message.hasOwnProperty("vecPlyData")) {
            if (!Array.isArray(message.vecPlyData))
                return "vecPlyData: array expected";
            for (var i = 0; i < message.vecPlyData.length; ++i) {
                var error = $root.mahjong_mj_changecard_not.verify(message.vecPlyData[i]);
                if (error)
                    return "vecPlyData." + error;
            }
        }
        if (message.vecFakeScores != null && message.hasOwnProperty("vecFakeScores")) {
            if (!Array.isArray(message.vecFakeScores))
                return "vecFakeScores: array expected";
            for (var i = 0; i < message.vecFakeScores.length; ++i)
                if (!$util.isInteger(message.vecFakeScores[i]) && !(message.vecFakeScores[i] && $util.isInteger(message.vecFakeScores[i].low) && $util.isInteger(message.vecFakeScores[i].high)))
                    return "vecFakeScores: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_mj_completedata_not_v1_1_0 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_completedata_not_v1_1_0} mahjong_mj_completedata_not_v1_1_0
     */
    mahjong_mj_completedata_not_v1_1_0.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_completedata_not_v1_1_0)
            return object;
        var message = new $root.mahjong_mj_completedata_not_v1_1_0();
        if (object.nDiZhu != null)
            message.nDiZhu = object.nDiZhu | 0;
        if (object.nTaifei != null)
            message.nTaifei = object.nTaifei | 0;
        if (object.nLeftCards != null)
            message.nLeftCards = object.nLeftCards | 0;
        if (object.cBanker != null)
            message.cBanker = object.cBanker | 0;
        if (object.cCurrPly != null)
            message.cCurrPly = object.cCurrPly | 0;
        if (object.cAutoState != null)
            message.cAutoState = object.cAutoState | 0;
        if (object.cAutoType != null)
            message.cAutoType = object.cAutoType | 0;
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        if (object.vecPlyData) {
            if (!Array.isArray(object.vecPlyData))
                throw TypeError(".mahjong_mj_completedata_not_v1_1_0.vecPlyData: array expected");
            message.vecPlyData = [];
            for (var i = 0; i < object.vecPlyData.length; ++i) {
                if (typeof object.vecPlyData[i] !== "object")
                    throw TypeError(".mahjong_mj_completedata_not_v1_1_0.vecPlyData: object expected");
                message.vecPlyData[i] = $root.mahjong_mj_changecard_not.fromObject(object.vecPlyData[i]);
            }
        }
        if (object.vecFakeScores) {
            if (!Array.isArray(object.vecFakeScores))
                throw TypeError(".mahjong_mj_completedata_not_v1_1_0.vecFakeScores: array expected");
            message.vecFakeScores = [];
            for (var i = 0; i < object.vecFakeScores.length; ++i)
                if ($util.Long)
                    (message.vecFakeScores[i] = $util.Long.fromValue(object.vecFakeScores[i])).unsigned = false;
                else if (typeof object.vecFakeScores[i] === "string")
                    message.vecFakeScores[i] = parseInt(object.vecFakeScores[i], 10);
                else if (typeof object.vecFakeScores[i] === "number")
                    message.vecFakeScores[i] = object.vecFakeScores[i];
                else if (typeof object.vecFakeScores[i] === "object")
                    message.vecFakeScores[i] = new $util.LongBits(object.vecFakeScores[i].low >>> 0, object.vecFakeScores[i].high >>> 0).toNumber();
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_completedata_not_v1_1_0 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @static
     * @param {mahjong_mj_completedata_not_v1_1_0} message mahjong_mj_completedata_not_v1_1_0
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_completedata_not_v1_1_0.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecPlyData = [];
            object.vecFakeScores = [];
        }
        if (options.defaults) {
            object.nDiZhu = 0;
            object.nTaifei = 0;
            object.nLeftCards = 0;
            object.cBanker = 0;
            object.cCurrPly = 0;
            object.cAutoState = 0;
            object.cAutoType = 0;
            object.sSerialID = 0;
        }
        if (message.nDiZhu != null && message.hasOwnProperty("nDiZhu"))
            object.nDiZhu = message.nDiZhu;
        if (message.nTaifei != null && message.hasOwnProperty("nTaifei"))
            object.nTaifei = message.nTaifei;
        if (message.nLeftCards != null && message.hasOwnProperty("nLeftCards"))
            object.nLeftCards = message.nLeftCards;
        if (message.cBanker != null && message.hasOwnProperty("cBanker"))
            object.cBanker = message.cBanker;
        if (message.cCurrPly != null && message.hasOwnProperty("cCurrPly"))
            object.cCurrPly = message.cCurrPly;
        if (message.cAutoState != null && message.hasOwnProperty("cAutoState"))
            object.cAutoState = message.cAutoState;
        if (message.cAutoType != null && message.hasOwnProperty("cAutoType"))
            object.cAutoType = message.cAutoType;
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        if (message.vecPlyData && message.vecPlyData.length) {
            object.vecPlyData = [];
            for (var j = 0; j < message.vecPlyData.length; ++j)
                object.vecPlyData[j] = $root.mahjong_mj_changecard_not.toObject(message.vecPlyData[j], options);
        }
        if (message.vecFakeScores && message.vecFakeScores.length) {
            object.vecFakeScores = [];
            for (var j = 0; j < message.vecFakeScores.length; ++j)
                if (typeof message.vecFakeScores[j] === "number")
                    object.vecFakeScores[j] = options.longs === String ? String(message.vecFakeScores[j]) : message.vecFakeScores[j];
                else
                    object.vecFakeScores[j] = options.longs === String ? $util.Long.prototype.toString.call(message.vecFakeScores[j]) : options.longs === Number ? new $util.LongBits(message.vecFakeScores[j].low >>> 0, message.vecFakeScores[j].high >>> 0).toNumber() : message.vecFakeScores[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_mj_completedata_not_v1_1_0 to JSON.
     * @function toJSON
     * @memberof mahjong_mj_completedata_not_v1_1_0
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_completedata_not_v1_1_0.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_completedata_not_v1_1_0;
})();

$root.mahjong_mj_tingfan_not = (function() {

    /**
     * Properties of a mahjong_mj_tingfan_not.
     * @exports Imahjong_mj_tingfan_not
     * @interface Imahjong_mj_tingfan_not
     * @property {number} sSerialID mahjong_mj_tingfan_not sSerialID
     * @property {Array.<Imahjong_tingfan_data>|null} [vecTingFan] mahjong_mj_tingfan_not vecTingFan
     */

    /**
     * Constructs a new mahjong_mj_tingfan_not.
     * @exports mahjong_mj_tingfan_not
     * @classdesc Represents a mahjong_mj_tingfan_not.
     * @implements Imahjong_mj_tingfan_not
     * @constructor
     * @param {Imahjong_mj_tingfan_not=} [properties] Properties to set
     */
    function mahjong_mj_tingfan_not(properties) {
        this.vecTingFan = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_tingfan_not sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_mj_tingfan_not
     * @instance
     */
    mahjong_mj_tingfan_not.prototype.sSerialID = 0;

    /**
     * mahjong_mj_tingfan_not vecTingFan.
     * @member {Array.<Imahjong_tingfan_data>} vecTingFan
     * @memberof mahjong_mj_tingfan_not
     * @instance
     */
    mahjong_mj_tingfan_not.prototype.vecTingFan = $util.emptyArray;

    /**
     * Creates a new mahjong_mj_tingfan_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_tingfan_not
     * @static
     * @param {Imahjong_mj_tingfan_not=} [properties] Properties to set
     * @returns {mahjong_mj_tingfan_not} mahjong_mj_tingfan_not instance
     */
    mahjong_mj_tingfan_not.create = function create(properties) {
        return new mahjong_mj_tingfan_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_tingfan_not message. Does not implicitly {@link mahjong_mj_tingfan_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_tingfan_not
     * @static
     * @param {Imahjong_mj_tingfan_not} message mahjong_mj_tingfan_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_tingfan_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sSerialID);
        if (message.vecTingFan != null && message.vecTingFan.length)
            for (var i = 0; i < message.vecTingFan.length; ++i)
                $root.mahjong_tingfan_data.encode(message.vecTingFan[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_tingfan_not message, length delimited. Does not implicitly {@link mahjong_mj_tingfan_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_tingfan_not
     * @static
     * @param {Imahjong_mj_tingfan_not} message mahjong_mj_tingfan_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_tingfan_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_tingfan_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_tingfan_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_tingfan_not} mahjong_mj_tingfan_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_tingfan_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_tingfan_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sSerialID = reader.int32();
                break;
            case 2:
                if (!(message.vecTingFan && message.vecTingFan.length))
                    message.vecTingFan = [];
                message.vecTingFan.push($root.mahjong_tingfan_data.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("sSerialID"))
            throw $util.ProtocolError("missing required 'sSerialID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_tingfan_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_tingfan_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_tingfan_not} mahjong_mj_tingfan_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_tingfan_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_tingfan_not message.
     * @function verify
     * @memberof mahjong_mj_tingfan_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_tingfan_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        if (message.vecTingFan != null && message.hasOwnProperty("vecTingFan")) {
            if (!Array.isArray(message.vecTingFan))
                return "vecTingFan: array expected";
            for (var i = 0; i < message.vecTingFan.length; ++i) {
                var error = $root.mahjong_tingfan_data.verify(message.vecTingFan[i]);
                if (error)
                    return "vecTingFan." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_mj_tingfan_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_tingfan_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_tingfan_not} mahjong_mj_tingfan_not
     */
    mahjong_mj_tingfan_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_tingfan_not)
            return object;
        var message = new $root.mahjong_mj_tingfan_not();
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        if (object.vecTingFan) {
            if (!Array.isArray(object.vecTingFan))
                throw TypeError(".mahjong_mj_tingfan_not.vecTingFan: array expected");
            message.vecTingFan = [];
            for (var i = 0; i < object.vecTingFan.length; ++i) {
                if (typeof object.vecTingFan[i] !== "object")
                    throw TypeError(".mahjong_mj_tingfan_not.vecTingFan: object expected");
                message.vecTingFan[i] = $root.mahjong_tingfan_data.fromObject(object.vecTingFan[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_tingfan_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_tingfan_not
     * @static
     * @param {mahjong_mj_tingfan_not} message mahjong_mj_tingfan_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_tingfan_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecTingFan = [];
        if (options.defaults)
            object.sSerialID = 0;
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        if (message.vecTingFan && message.vecTingFan.length) {
            object.vecTingFan = [];
            for (var j = 0; j < message.vecTingFan.length; ++j)
                object.vecTingFan[j] = $root.mahjong_tingfan_data.toObject(message.vecTingFan[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_mj_tingfan_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_tingfan_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_tingfan_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_tingfan_not;
})();

$root.mahjong_mj_wait_game_not = (function() {

    /**
     * Properties of a mahjong_mj_wait_game_not.
     * @exports Imahjong_mj_wait_game_not
     * @interface Imahjong_mj_wait_game_not
     * @property {number} nTimer mahjong_mj_wait_game_not nTimer
     * @property {Array.<number>|null} [vecChairid] mahjong_mj_wait_game_not vecChairid
     * @property {Array.<number>|null} [vecType] mahjong_mj_wait_game_not vecType
     */

    /**
     * Constructs a new mahjong_mj_wait_game_not.
     * @exports mahjong_mj_wait_game_not
     * @classdesc Represents a mahjong_mj_wait_game_not.
     * @implements Imahjong_mj_wait_game_not
     * @constructor
     * @param {Imahjong_mj_wait_game_not=} [properties] Properties to set
     */
    function mahjong_mj_wait_game_not(properties) {
        this.vecChairid = [];
        this.vecType = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_wait_game_not nTimer.
     * @member {number} nTimer
     * @memberof mahjong_mj_wait_game_not
     * @instance
     */
    mahjong_mj_wait_game_not.prototype.nTimer = 0;

    /**
     * mahjong_mj_wait_game_not vecChairid.
     * @member {Array.<number>} vecChairid
     * @memberof mahjong_mj_wait_game_not
     * @instance
     */
    mahjong_mj_wait_game_not.prototype.vecChairid = $util.emptyArray;

    /**
     * mahjong_mj_wait_game_not vecType.
     * @member {Array.<number>} vecType
     * @memberof mahjong_mj_wait_game_not
     * @instance
     */
    mahjong_mj_wait_game_not.prototype.vecType = $util.emptyArray;

    /**
     * Creates a new mahjong_mj_wait_game_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_wait_game_not
     * @static
     * @param {Imahjong_mj_wait_game_not=} [properties] Properties to set
     * @returns {mahjong_mj_wait_game_not} mahjong_mj_wait_game_not instance
     */
    mahjong_mj_wait_game_not.create = function create(properties) {
        return new mahjong_mj_wait_game_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_wait_game_not message. Does not implicitly {@link mahjong_mj_wait_game_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_wait_game_not
     * @static
     * @param {Imahjong_mj_wait_game_not} message mahjong_mj_wait_game_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_wait_game_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nTimer);
        if (message.vecChairid != null && message.vecChairid.length)
            for (var i = 0; i < message.vecChairid.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.vecChairid[i]);
        if (message.vecType != null && message.vecType.length)
            for (var i = 0; i < message.vecType.length; ++i)
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.vecType[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_wait_game_not message, length delimited. Does not implicitly {@link mahjong_mj_wait_game_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_wait_game_not
     * @static
     * @param {Imahjong_mj_wait_game_not} message mahjong_mj_wait_game_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_wait_game_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_wait_game_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_wait_game_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_wait_game_not} mahjong_mj_wait_game_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_wait_game_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_wait_game_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nTimer = reader.int32();
                break;
            case 2:
                if (!(message.vecChairid && message.vecChairid.length))
                    message.vecChairid = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecChairid.push(reader.int32());
                } else
                    message.vecChairid.push(reader.int32());
                break;
            case 3:
                if (!(message.vecType && message.vecType.length))
                    message.vecType = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecType.push(reader.int32());
                } else
                    message.vecType.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nTimer"))
            throw $util.ProtocolError("missing required 'nTimer'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_wait_game_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_wait_game_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_wait_game_not} mahjong_mj_wait_game_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_wait_game_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_wait_game_not message.
     * @function verify
     * @memberof mahjong_mj_wait_game_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_wait_game_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nTimer))
            return "nTimer: integer expected";
        if (message.vecChairid != null && message.hasOwnProperty("vecChairid")) {
            if (!Array.isArray(message.vecChairid))
                return "vecChairid: array expected";
            for (var i = 0; i < message.vecChairid.length; ++i)
                if (!$util.isInteger(message.vecChairid[i]))
                    return "vecChairid: integer[] expected";
        }
        if (message.vecType != null && message.hasOwnProperty("vecType")) {
            if (!Array.isArray(message.vecType))
                return "vecType: array expected";
            for (var i = 0; i < message.vecType.length; ++i)
                if (!$util.isInteger(message.vecType[i]))
                    return "vecType: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_mj_wait_game_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_wait_game_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_wait_game_not} mahjong_mj_wait_game_not
     */
    mahjong_mj_wait_game_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_wait_game_not)
            return object;
        var message = new $root.mahjong_mj_wait_game_not();
        if (object.nTimer != null)
            message.nTimer = object.nTimer | 0;
        if (object.vecChairid) {
            if (!Array.isArray(object.vecChairid))
                throw TypeError(".mahjong_mj_wait_game_not.vecChairid: array expected");
            message.vecChairid = [];
            for (var i = 0; i < object.vecChairid.length; ++i)
                message.vecChairid[i] = object.vecChairid[i] | 0;
        }
        if (object.vecType) {
            if (!Array.isArray(object.vecType))
                throw TypeError(".mahjong_mj_wait_game_not.vecType: array expected");
            message.vecType = [];
            for (var i = 0; i < object.vecType.length; ++i)
                message.vecType[i] = object.vecType[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_wait_game_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_wait_game_not
     * @static
     * @param {mahjong_mj_wait_game_not} message mahjong_mj_wait_game_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_wait_game_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecChairid = [];
            object.vecType = [];
        }
        if (options.defaults)
            object.nTimer = 0;
        if (message.nTimer != null && message.hasOwnProperty("nTimer"))
            object.nTimer = message.nTimer;
        if (message.vecChairid && message.vecChairid.length) {
            object.vecChairid = [];
            for (var j = 0; j < message.vecChairid.length; ++j)
                object.vecChairid[j] = message.vecChairid[j];
        }
        if (message.vecType && message.vecType.length) {
            object.vecType = [];
            for (var j = 0; j < message.vecType.length; ++j)
                object.vecType[j] = message.vecType[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_mj_wait_game_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_wait_game_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_wait_game_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_wait_game_not;
})();

$root.mahjong_mj_hudouble_req = (function() {

    /**
     * Properties of a mahjong_mj_hudouble_req.
     * @exports Imahjong_mj_hudouble_req
     * @interface Imahjong_mj_hudouble_req
     */

    /**
     * Constructs a new mahjong_mj_hudouble_req.
     * @exports mahjong_mj_hudouble_req
     * @classdesc Represents a mahjong_mj_hudouble_req.
     * @implements Imahjong_mj_hudouble_req
     * @constructor
     * @param {Imahjong_mj_hudouble_req=} [properties] Properties to set
     */
    function mahjong_mj_hudouble_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_mj_hudouble_req instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_hudouble_req
     * @static
     * @param {Imahjong_mj_hudouble_req=} [properties] Properties to set
     * @returns {mahjong_mj_hudouble_req} mahjong_mj_hudouble_req instance
     */
    mahjong_mj_hudouble_req.create = function create(properties) {
        return new mahjong_mj_hudouble_req(properties);
    };

    /**
     * Encodes the specified mahjong_mj_hudouble_req message. Does not implicitly {@link mahjong_mj_hudouble_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_hudouble_req
     * @static
     * @param {Imahjong_mj_hudouble_req} message mahjong_mj_hudouble_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_hudouble_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_hudouble_req message, length delimited. Does not implicitly {@link mahjong_mj_hudouble_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_hudouble_req
     * @static
     * @param {Imahjong_mj_hudouble_req} message mahjong_mj_hudouble_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_hudouble_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_hudouble_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_hudouble_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_hudouble_req} mahjong_mj_hudouble_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_hudouble_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_hudouble_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_mj_hudouble_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_hudouble_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_hudouble_req} mahjong_mj_hudouble_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_hudouble_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_hudouble_req message.
     * @function verify
     * @memberof mahjong_mj_hudouble_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_hudouble_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_hudouble_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_hudouble_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_hudouble_req} mahjong_mj_hudouble_req
     */
    mahjong_mj_hudouble_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_hudouble_req)
            return object;
        return new $root.mahjong_mj_hudouble_req();
    };

    /**
     * Creates a plain object from a mahjong_mj_hudouble_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_hudouble_req
     * @static
     * @param {mahjong_mj_hudouble_req} message mahjong_mj_hudouble_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_hudouble_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_mj_hudouble_req to JSON.
     * @function toJSON
     * @memberof mahjong_mj_hudouble_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_hudouble_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_hudouble_req;
})();

$root.mahjong_gc_task_not = (function() {

    /**
     * Properties of a mahjong_gc_task_not.
     * @exports Imahjong_gc_task_not
     * @interface Imahjong_gc_task_not
     * @property {Imahjong_TaskItem} taskItem mahjong_gc_task_not taskItem
     */

    /**
     * Constructs a new mahjong_gc_task_not.
     * @exports mahjong_gc_task_not
     * @classdesc Represents a mahjong_gc_task_not.
     * @implements Imahjong_gc_task_not
     * @constructor
     * @param {Imahjong_gc_task_not=} [properties] Properties to set
     */
    function mahjong_gc_task_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_gc_task_not taskItem.
     * @member {Imahjong_TaskItem} taskItem
     * @memberof mahjong_gc_task_not
     * @instance
     */
    mahjong_gc_task_not.prototype.taskItem = null;

    /**
     * Creates a new mahjong_gc_task_not instance using the specified properties.
     * @function create
     * @memberof mahjong_gc_task_not
     * @static
     * @param {Imahjong_gc_task_not=} [properties] Properties to set
     * @returns {mahjong_gc_task_not} mahjong_gc_task_not instance
     */
    mahjong_gc_task_not.create = function create(properties) {
        return new mahjong_gc_task_not(properties);
    };

    /**
     * Encodes the specified mahjong_gc_task_not message. Does not implicitly {@link mahjong_gc_task_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_gc_task_not
     * @static
     * @param {Imahjong_gc_task_not} message mahjong_gc_task_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_gc_task_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        $root.mahjong_TaskItem.encode(message.taskItem, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_gc_task_not message, length delimited. Does not implicitly {@link mahjong_gc_task_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_gc_task_not
     * @static
     * @param {Imahjong_gc_task_not} message mahjong_gc_task_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_gc_task_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_gc_task_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_gc_task_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_gc_task_not} mahjong_gc_task_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_gc_task_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_gc_task_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.taskItem = $root.mahjong_TaskItem.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("taskItem"))
            throw $util.ProtocolError("missing required 'taskItem'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_gc_task_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_gc_task_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_gc_task_not} mahjong_gc_task_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_gc_task_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_gc_task_not message.
     * @function verify
     * @memberof mahjong_gc_task_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_gc_task_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        {
            var error = $root.mahjong_TaskItem.verify(message.taskItem);
            if (error)
                return "taskItem." + error;
        }
        return null;
    };

    /**
     * Creates a mahjong_gc_task_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_gc_task_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_gc_task_not} mahjong_gc_task_not
     */
    mahjong_gc_task_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_gc_task_not)
            return object;
        var message = new $root.mahjong_gc_task_not();
        if (object.taskItem != null) {
            if (typeof object.taskItem !== "object")
                throw TypeError(".mahjong_gc_task_not.taskItem: object expected");
            message.taskItem = $root.mahjong_TaskItem.fromObject(object.taskItem);
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_gc_task_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_gc_task_not
     * @static
     * @param {mahjong_gc_task_not} message mahjong_gc_task_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_gc_task_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.taskItem = null;
        if (message.taskItem != null && message.hasOwnProperty("taskItem"))
            object.taskItem = $root.mahjong_TaskItem.toObject(message.taskItem, options);
        return object;
    };

    /**
     * Converts this mahjong_gc_task_not to JSON.
     * @function toJSON
     * @memberof mahjong_gc_task_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_gc_task_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_gc_task_not;
})();

$root.mahjong_cg_get_redpackets_88yuan_award_req = (function() {

    /**
     * Properties of a mahjong_cg_get_redpackets_88yuan_award_req.
     * @exports Imahjong_cg_get_redpackets_88yuan_award_req
     * @interface Imahjong_cg_get_redpackets_88yuan_award_req
     * @property {number} type mahjong_cg_get_redpackets_88yuan_award_req type
     */

    /**
     * Constructs a new mahjong_cg_get_redpackets_88yuan_award_req.
     * @exports mahjong_cg_get_redpackets_88yuan_award_req
     * @classdesc Represents a mahjong_cg_get_redpackets_88yuan_award_req.
     * @implements Imahjong_cg_get_redpackets_88yuan_award_req
     * @constructor
     * @param {Imahjong_cg_get_redpackets_88yuan_award_req=} [properties] Properties to set
     */
    function mahjong_cg_get_redpackets_88yuan_award_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_cg_get_redpackets_88yuan_award_req type.
     * @member {number} type
     * @memberof mahjong_cg_get_redpackets_88yuan_award_req
     * @instance
     */
    mahjong_cg_get_redpackets_88yuan_award_req.prototype.type = 0;

    /**
     * Creates a new mahjong_cg_get_redpackets_88yuan_award_req instance using the specified properties.
     * @function create
     * @memberof mahjong_cg_get_redpackets_88yuan_award_req
     * @static
     * @param {Imahjong_cg_get_redpackets_88yuan_award_req=} [properties] Properties to set
     * @returns {mahjong_cg_get_redpackets_88yuan_award_req} mahjong_cg_get_redpackets_88yuan_award_req instance
     */
    mahjong_cg_get_redpackets_88yuan_award_req.create = function create(properties) {
        return new mahjong_cg_get_redpackets_88yuan_award_req(properties);
    };

    /**
     * Encodes the specified mahjong_cg_get_redpackets_88yuan_award_req message. Does not implicitly {@link mahjong_cg_get_redpackets_88yuan_award_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_cg_get_redpackets_88yuan_award_req
     * @static
     * @param {Imahjong_cg_get_redpackets_88yuan_award_req} message mahjong_cg_get_redpackets_88yuan_award_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_cg_get_redpackets_88yuan_award_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        return writer;
    };

    /**
     * Encodes the specified mahjong_cg_get_redpackets_88yuan_award_req message, length delimited. Does not implicitly {@link mahjong_cg_get_redpackets_88yuan_award_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_cg_get_redpackets_88yuan_award_req
     * @static
     * @param {Imahjong_cg_get_redpackets_88yuan_award_req} message mahjong_cg_get_redpackets_88yuan_award_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_cg_get_redpackets_88yuan_award_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_cg_get_redpackets_88yuan_award_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_cg_get_redpackets_88yuan_award_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_cg_get_redpackets_88yuan_award_req} mahjong_cg_get_redpackets_88yuan_award_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_cg_get_redpackets_88yuan_award_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_cg_get_redpackets_88yuan_award_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_cg_get_redpackets_88yuan_award_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_cg_get_redpackets_88yuan_award_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_cg_get_redpackets_88yuan_award_req} mahjong_cg_get_redpackets_88yuan_award_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_cg_get_redpackets_88yuan_award_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_cg_get_redpackets_88yuan_award_req message.
     * @function verify
     * @memberof mahjong_cg_get_redpackets_88yuan_award_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_cg_get_redpackets_88yuan_award_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.type))
            return "type: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_cg_get_redpackets_88yuan_award_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_cg_get_redpackets_88yuan_award_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_cg_get_redpackets_88yuan_award_req} mahjong_cg_get_redpackets_88yuan_award_req
     */
    mahjong_cg_get_redpackets_88yuan_award_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_cg_get_redpackets_88yuan_award_req)
            return object;
        var message = new $root.mahjong_cg_get_redpackets_88yuan_award_req();
        if (object.type != null)
            message.type = object.type | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_cg_get_redpackets_88yuan_award_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_cg_get_redpackets_88yuan_award_req
     * @static
     * @param {mahjong_cg_get_redpackets_88yuan_award_req} message mahjong_cg_get_redpackets_88yuan_award_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_cg_get_redpackets_88yuan_award_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.type = 0;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        return object;
    };

    /**
     * Converts this mahjong_cg_get_redpackets_88yuan_award_req to JSON.
     * @function toJSON
     * @memberof mahjong_cg_get_redpackets_88yuan_award_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_cg_get_redpackets_88yuan_award_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_cg_get_redpackets_88yuan_award_req;
})();

$root.mahjong_scmj_gc_expression_not = (function() {

    /**
     * Properties of a mahjong_scmj_gc_expression_not.
     * @exports Imahjong_scmj_gc_expression_not
     * @interface Imahjong_scmj_gc_expression_not
     * @property {number} expressionType mahjong_scmj_gc_expression_not expressionType
     * @property {number} expressionNum mahjong_scmj_gc_expression_not expressionNum
     */

    /**
     * Constructs a new mahjong_scmj_gc_expression_not.
     * @exports mahjong_scmj_gc_expression_not
     * @classdesc Represents a mahjong_scmj_gc_expression_not.
     * @implements Imahjong_scmj_gc_expression_not
     * @constructor
     * @param {Imahjong_scmj_gc_expression_not=} [properties] Properties to set
     */
    function mahjong_scmj_gc_expression_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_scmj_gc_expression_not expressionType.
     * @member {number} expressionType
     * @memberof mahjong_scmj_gc_expression_not
     * @instance
     */
    mahjong_scmj_gc_expression_not.prototype.expressionType = 0;

    /**
     * mahjong_scmj_gc_expression_not expressionNum.
     * @member {number} expressionNum
     * @memberof mahjong_scmj_gc_expression_not
     * @instance
     */
    mahjong_scmj_gc_expression_not.prototype.expressionNum = 0;

    /**
     * Creates a new mahjong_scmj_gc_expression_not instance using the specified properties.
     * @function create
     * @memberof mahjong_scmj_gc_expression_not
     * @static
     * @param {Imahjong_scmj_gc_expression_not=} [properties] Properties to set
     * @returns {mahjong_scmj_gc_expression_not} mahjong_scmj_gc_expression_not instance
     */
    mahjong_scmj_gc_expression_not.create = function create(properties) {
        return new mahjong_scmj_gc_expression_not(properties);
    };

    /**
     * Encodes the specified mahjong_scmj_gc_expression_not message. Does not implicitly {@link mahjong_scmj_gc_expression_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_scmj_gc_expression_not
     * @static
     * @param {Imahjong_scmj_gc_expression_not} message mahjong_scmj_gc_expression_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_scmj_gc_expression_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.expressionType);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.expressionNum);
        return writer;
    };

    /**
     * Encodes the specified mahjong_scmj_gc_expression_not message, length delimited. Does not implicitly {@link mahjong_scmj_gc_expression_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_scmj_gc_expression_not
     * @static
     * @param {Imahjong_scmj_gc_expression_not} message mahjong_scmj_gc_expression_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_scmj_gc_expression_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_scmj_gc_expression_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_scmj_gc_expression_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_scmj_gc_expression_not} mahjong_scmj_gc_expression_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_scmj_gc_expression_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_scmj_gc_expression_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.expressionType = reader.int32();
                break;
            case 2:
                message.expressionNum = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("expressionType"))
            throw $util.ProtocolError("missing required 'expressionType'", { instance: message });
        if (!message.hasOwnProperty("expressionNum"))
            throw $util.ProtocolError("missing required 'expressionNum'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_scmj_gc_expression_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_scmj_gc_expression_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_scmj_gc_expression_not} mahjong_scmj_gc_expression_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_scmj_gc_expression_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_scmj_gc_expression_not message.
     * @function verify
     * @memberof mahjong_scmj_gc_expression_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_scmj_gc_expression_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.expressionType))
            return "expressionType: integer expected";
        if (!$util.isInteger(message.expressionNum))
            return "expressionNum: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_scmj_gc_expression_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_scmj_gc_expression_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_scmj_gc_expression_not} mahjong_scmj_gc_expression_not
     */
    mahjong_scmj_gc_expression_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_scmj_gc_expression_not)
            return object;
        var message = new $root.mahjong_scmj_gc_expression_not();
        if (object.expressionType != null)
            message.expressionType = object.expressionType | 0;
        if (object.expressionNum != null)
            message.expressionNum = object.expressionNum | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_scmj_gc_expression_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_scmj_gc_expression_not
     * @static
     * @param {mahjong_scmj_gc_expression_not} message mahjong_scmj_gc_expression_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_scmj_gc_expression_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.expressionType = 0;
            object.expressionNum = 0;
        }
        if (message.expressionType != null && message.hasOwnProperty("expressionType"))
            object.expressionType = message.expressionType;
        if (message.expressionNum != null && message.hasOwnProperty("expressionNum"))
            object.expressionNum = message.expressionNum;
        return object;
    };

    /**
     * Converts this mahjong_scmj_gc_expression_not to JSON.
     * @function toJSON
     * @memberof mahjong_scmj_gc_expression_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_scmj_gc_expression_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_scmj_gc_expression_not;
})();

$root.mahjong_mj_robot_not = (function() {

    /**
     * Properties of a mahjong_mj_robot_not.
     * @exports Imahjong_mj_robot_not
     * @interface Imahjong_mj_robot_not
     * @property {number} nType mahjong_mj_robot_not nType
     * @property {number} cChairId mahjong_mj_robot_not cChairId
     * @property {Array.<number>|null} [vecCards] mahjong_mj_robot_not vecCards
     */

    /**
     * Constructs a new mahjong_mj_robot_not.
     * @exports mahjong_mj_robot_not
     * @classdesc Represents a mahjong_mj_robot_not.
     * @implements Imahjong_mj_robot_not
     * @constructor
     * @param {Imahjong_mj_robot_not=} [properties] Properties to set
     */
    function mahjong_mj_robot_not(properties) {
        this.vecCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_robot_not nType.
     * @member {number} nType
     * @memberof mahjong_mj_robot_not
     * @instance
     */
    mahjong_mj_robot_not.prototype.nType = 0;

    /**
     * mahjong_mj_robot_not cChairId.
     * @member {number} cChairId
     * @memberof mahjong_mj_robot_not
     * @instance
     */
    mahjong_mj_robot_not.prototype.cChairId = 0;

    /**
     * mahjong_mj_robot_not vecCards.
     * @member {Array.<number>} vecCards
     * @memberof mahjong_mj_robot_not
     * @instance
     */
    mahjong_mj_robot_not.prototype.vecCards = $util.emptyArray;

    /**
     * Creates a new mahjong_mj_robot_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_robot_not
     * @static
     * @param {Imahjong_mj_robot_not=} [properties] Properties to set
     * @returns {mahjong_mj_robot_not} mahjong_mj_robot_not instance
     */
    mahjong_mj_robot_not.create = function create(properties) {
        return new mahjong_mj_robot_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_robot_not message. Does not implicitly {@link mahjong_mj_robot_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_robot_not
     * @static
     * @param {Imahjong_mj_robot_not} message mahjong_mj_robot_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_robot_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nType);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cChairId);
        if (message.vecCards != null && message.vecCards.length)
            for (var i = 0; i < message.vecCards.length; ++i)
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.vecCards[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_robot_not message, length delimited. Does not implicitly {@link mahjong_mj_robot_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_robot_not
     * @static
     * @param {Imahjong_mj_robot_not} message mahjong_mj_robot_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_robot_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_robot_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_robot_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_robot_not} mahjong_mj_robot_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_robot_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_robot_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nType = reader.int32();
                break;
            case 2:
                message.cChairId = reader.int32();
                break;
            case 3:
                if (!(message.vecCards && message.vecCards.length))
                    message.vecCards = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecCards.push(reader.int32());
                } else
                    message.vecCards.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nType"))
            throw $util.ProtocolError("missing required 'nType'", { instance: message });
        if (!message.hasOwnProperty("cChairId"))
            throw $util.ProtocolError("missing required 'cChairId'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_robot_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_robot_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_robot_not} mahjong_mj_robot_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_robot_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_robot_not message.
     * @function verify
     * @memberof mahjong_mj_robot_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_robot_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nType))
            return "nType: integer expected";
        if (!$util.isInteger(message.cChairId))
            return "cChairId: integer expected";
        if (message.vecCards != null && message.hasOwnProperty("vecCards")) {
            if (!Array.isArray(message.vecCards))
                return "vecCards: array expected";
            for (var i = 0; i < message.vecCards.length; ++i)
                if (!$util.isInteger(message.vecCards[i]))
                    return "vecCards: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_mj_robot_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_robot_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_robot_not} mahjong_mj_robot_not
     */
    mahjong_mj_robot_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_robot_not)
            return object;
        var message = new $root.mahjong_mj_robot_not();
        if (object.nType != null)
            message.nType = object.nType | 0;
        if (object.cChairId != null)
            message.cChairId = object.cChairId | 0;
        if (object.vecCards) {
            if (!Array.isArray(object.vecCards))
                throw TypeError(".mahjong_mj_robot_not.vecCards: array expected");
            message.vecCards = [];
            for (var i = 0; i < object.vecCards.length; ++i)
                message.vecCards[i] = object.vecCards[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_robot_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_robot_not
     * @static
     * @param {mahjong_mj_robot_not} message mahjong_mj_robot_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_robot_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecCards = [];
        if (options.defaults) {
            object.nType = 0;
            object.cChairId = 0;
        }
        if (message.nType != null && message.hasOwnProperty("nType"))
            object.nType = message.nType;
        if (message.cChairId != null && message.hasOwnProperty("cChairId"))
            object.cChairId = message.cChairId;
        if (message.vecCards && message.vecCards.length) {
            object.vecCards = [];
            for (var j = 0; j < message.vecCards.length; ++j)
                object.vecCards[j] = message.vecCards[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_mj_robot_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_robot_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_robot_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_robot_not;
})();

$root.mahjong_Cli_Auto_Req = (function() {

    /**
     * Properties of a mahjong_Cli_Auto_Req.
     * @exports Imahjong_Cli_Auto_Req
     * @interface Imahjong_Cli_Auto_Req
     * @property {number} cAuto mahjong_Cli_Auto_Req cAuto
     * @property {number} iAutoType mahjong_Cli_Auto_Req iAutoType
     */

    /**
     * Constructs a new mahjong_Cli_Auto_Req.
     * @exports mahjong_Cli_Auto_Req
     * @classdesc Represents a mahjong_Cli_Auto_Req.
     * @implements Imahjong_Cli_Auto_Req
     * @constructor
     * @param {Imahjong_Cli_Auto_Req=} [properties] Properties to set
     */
    function mahjong_Cli_Auto_Req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_Cli_Auto_Req cAuto.
     * @member {number} cAuto
     * @memberof mahjong_Cli_Auto_Req
     * @instance
     */
    mahjong_Cli_Auto_Req.prototype.cAuto = 0;

    /**
     * mahjong_Cli_Auto_Req iAutoType.
     * @member {number} iAutoType
     * @memberof mahjong_Cli_Auto_Req
     * @instance
     */
    mahjong_Cli_Auto_Req.prototype.iAutoType = 0;

    /**
     * Creates a new mahjong_Cli_Auto_Req instance using the specified properties.
     * @function create
     * @memberof mahjong_Cli_Auto_Req
     * @static
     * @param {Imahjong_Cli_Auto_Req=} [properties] Properties to set
     * @returns {mahjong_Cli_Auto_Req} mahjong_Cli_Auto_Req instance
     */
    mahjong_Cli_Auto_Req.create = function create(properties) {
        return new mahjong_Cli_Auto_Req(properties);
    };

    /**
     * Encodes the specified mahjong_Cli_Auto_Req message. Does not implicitly {@link mahjong_Cli_Auto_Req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_Cli_Auto_Req
     * @static
     * @param {Imahjong_Cli_Auto_Req} message mahjong_Cli_Auto_Req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_Cli_Auto_Req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cAuto);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.iAutoType);
        return writer;
    };

    /**
     * Encodes the specified mahjong_Cli_Auto_Req message, length delimited. Does not implicitly {@link mahjong_Cli_Auto_Req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_Cli_Auto_Req
     * @static
     * @param {Imahjong_Cli_Auto_Req} message mahjong_Cli_Auto_Req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_Cli_Auto_Req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_Cli_Auto_Req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_Cli_Auto_Req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_Cli_Auto_Req} mahjong_Cli_Auto_Req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_Cli_Auto_Req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_Cli_Auto_Req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cAuto = reader.int32();
                break;
            case 2:
                message.iAutoType = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cAuto"))
            throw $util.ProtocolError("missing required 'cAuto'", { instance: message });
        if (!message.hasOwnProperty("iAutoType"))
            throw $util.ProtocolError("missing required 'iAutoType'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_Cli_Auto_Req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_Cli_Auto_Req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_Cli_Auto_Req} mahjong_Cli_Auto_Req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_Cli_Auto_Req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_Cli_Auto_Req message.
     * @function verify
     * @memberof mahjong_Cli_Auto_Req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_Cli_Auto_Req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cAuto))
            return "cAuto: integer expected";
        if (!$util.isInteger(message.iAutoType))
            return "iAutoType: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_Cli_Auto_Req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_Cli_Auto_Req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_Cli_Auto_Req} mahjong_Cli_Auto_Req
     */
    mahjong_Cli_Auto_Req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_Cli_Auto_Req)
            return object;
        var message = new $root.mahjong_Cli_Auto_Req();
        if (object.cAuto != null)
            message.cAuto = object.cAuto | 0;
        if (object.iAutoType != null)
            message.iAutoType = object.iAutoType | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_Cli_Auto_Req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_Cli_Auto_Req
     * @static
     * @param {mahjong_Cli_Auto_Req} message mahjong_Cli_Auto_Req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_Cli_Auto_Req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cAuto = 0;
            object.iAutoType = 0;
        }
        if (message.cAuto != null && message.hasOwnProperty("cAuto"))
            object.cAuto = message.cAuto;
        if (message.iAutoType != null && message.hasOwnProperty("iAutoType"))
            object.iAutoType = message.iAutoType;
        return object;
    };

    /**
     * Converts this mahjong_Cli_Auto_Req to JSON.
     * @function toJSON
     * @memberof mahjong_Cli_Auto_Req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_Cli_Auto_Req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_Cli_Auto_Req;
})();

$root.mahjong_st_gameresult_v2_1_4 = (function() {

    /**
     * Properties of a mahjong_st_gameresult_v2_1_4.
     * @exports Imahjong_st_gameresult_v2_1_4
     * @interface Imahjong_st_gameresult_v2_1_4
     * @property {number} cChairID mahjong_st_gameresult_v2_1_4 cChairID
     * @property {number} cWonLose mahjong_st_gameresult_v2_1_4 cWonLose
     * @property {number|Long} nScore mahjong_st_gameresult_v2_1_4 nScore
     * @property {number} nHuType mahjong_st_gameresult_v2_1_4 nHuType
     * @property {number} cMingGangNum mahjong_st_gameresult_v2_1_4 cMingGangNum
     * @property {number} cAnGangNum mahjong_st_gameresult_v2_1_4 cAnGangNum
     * @property {number} cBuGangNum mahjong_st_gameresult_v2_1_4 cBuGangNum
     * @property {number} cChaJiao mahjong_st_gameresult_v2_1_4 cChaJiao
     * @property {number} bGangHua mahjong_st_gameresult_v2_1_4 bGangHua
     * @property {number} cGenNum mahjong_st_gameresult_v2_1_4 cGenNum
     * @property {number} nTax mahjong_st_gameresult_v2_1_4 nTax
     * @property {Array.<Imahjong_gang_data>|null} [vecGangData] mahjong_st_gameresult_v2_1_4 vecGangData
     * @property {Array.<Imahjong_fan_data>|null} [vecHu] mahjong_st_gameresult_v2_1_4 vecHu
     * @property {Array.<Imahjong_fan_data>|null} [vecHued] mahjong_st_gameresult_v2_1_4 vecHued
     * @property {Array.<Imahjong_fan_data>|null} [vecGangPao] mahjong_st_gameresult_v2_1_4 vecGangPao
     * @property {Array.<Imahjong_fan_data>|null} [vecChaJiao] mahjong_st_gameresult_v2_1_4 vecChaJiao
     * @property {Array.<Imahjong_fan_data>|null} [vecWuJiaoGang] mahjong_st_gameresult_v2_1_4 vecWuJiaoGang
     * @property {Array.<Imahjong_fan_data>|null} [vecHuaZhu] mahjong_st_gameresult_v2_1_4 vecHuaZhu
     */

    /**
     * Constructs a new mahjong_st_gameresult_v2_1_4.
     * @exports mahjong_st_gameresult_v2_1_4
     * @classdesc Represents a mahjong_st_gameresult_v2_1_4.
     * @implements Imahjong_st_gameresult_v2_1_4
     * @constructor
     * @param {Imahjong_st_gameresult_v2_1_4=} [properties] Properties to set
     */
    function mahjong_st_gameresult_v2_1_4(properties) {
        this.vecGangData = [];
        this.vecHu = [];
        this.vecHued = [];
        this.vecGangPao = [];
        this.vecChaJiao = [];
        this.vecWuJiaoGang = [];
        this.vecHuaZhu = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_st_gameresult_v2_1_4 cChairID.
     * @member {number} cChairID
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.cChairID = 0;

    /**
     * mahjong_st_gameresult_v2_1_4 cWonLose.
     * @member {number} cWonLose
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.cWonLose = 0;

    /**
     * mahjong_st_gameresult_v2_1_4 nScore.
     * @member {number|Long} nScore
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.nScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * mahjong_st_gameresult_v2_1_4 nHuType.
     * @member {number} nHuType
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.nHuType = 0;

    /**
     * mahjong_st_gameresult_v2_1_4 cMingGangNum.
     * @member {number} cMingGangNum
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.cMingGangNum = 0;

    /**
     * mahjong_st_gameresult_v2_1_4 cAnGangNum.
     * @member {number} cAnGangNum
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.cAnGangNum = 0;

    /**
     * mahjong_st_gameresult_v2_1_4 cBuGangNum.
     * @member {number} cBuGangNum
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.cBuGangNum = 0;

    /**
     * mahjong_st_gameresult_v2_1_4 cChaJiao.
     * @member {number} cChaJiao
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.cChaJiao = 0;

    /**
     * mahjong_st_gameresult_v2_1_4 bGangHua.
     * @member {number} bGangHua
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.bGangHua = 0;

    /**
     * mahjong_st_gameresult_v2_1_4 cGenNum.
     * @member {number} cGenNum
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.cGenNum = 0;

    /**
     * mahjong_st_gameresult_v2_1_4 nTax.
     * @member {number} nTax
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.nTax = 0;

    /**
     * mahjong_st_gameresult_v2_1_4 vecGangData.
     * @member {Array.<Imahjong_gang_data>} vecGangData
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.vecGangData = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v2_1_4 vecHu.
     * @member {Array.<Imahjong_fan_data>} vecHu
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.vecHu = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v2_1_4 vecHued.
     * @member {Array.<Imahjong_fan_data>} vecHued
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.vecHued = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v2_1_4 vecGangPao.
     * @member {Array.<Imahjong_fan_data>} vecGangPao
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.vecGangPao = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v2_1_4 vecChaJiao.
     * @member {Array.<Imahjong_fan_data>} vecChaJiao
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.vecChaJiao = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v2_1_4 vecWuJiaoGang.
     * @member {Array.<Imahjong_fan_data>} vecWuJiaoGang
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.vecWuJiaoGang = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v2_1_4 vecHuaZhu.
     * @member {Array.<Imahjong_fan_data>} vecHuaZhu
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     */
    mahjong_st_gameresult_v2_1_4.prototype.vecHuaZhu = $util.emptyArray;

    /**
     * Creates a new mahjong_st_gameresult_v2_1_4 instance using the specified properties.
     * @function create
     * @memberof mahjong_st_gameresult_v2_1_4
     * @static
     * @param {Imahjong_st_gameresult_v2_1_4=} [properties] Properties to set
     * @returns {mahjong_st_gameresult_v2_1_4} mahjong_st_gameresult_v2_1_4 instance
     */
    mahjong_st_gameresult_v2_1_4.create = function create(properties) {
        return new mahjong_st_gameresult_v2_1_4(properties);
    };

    /**
     * Encodes the specified mahjong_st_gameresult_v2_1_4 message. Does not implicitly {@link mahjong_st_gameresult_v2_1_4.verify|verify} messages.
     * @function encode
     * @memberof mahjong_st_gameresult_v2_1_4
     * @static
     * @param {Imahjong_st_gameresult_v2_1_4} message mahjong_st_gameresult_v2_1_4 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_st_gameresult_v2_1_4.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cWonLose);
        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.nScore);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nHuType);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cMingGangNum);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cAnGangNum);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.cBuGangNum);
        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.cChaJiao);
        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.bGangHua);
        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.cGenNum);
        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.nTax);
        if (message.vecGangData != null && message.vecGangData.length)
            for (var i = 0; i < message.vecGangData.length; ++i)
                $root.mahjong_gang_data.encode(message.vecGangData[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.vecHu != null && message.vecHu.length)
            for (var i = 0; i < message.vecHu.length; ++i)
                $root.mahjong_fan_data.encode(message.vecHu[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.vecHued != null && message.vecHued.length)
            for (var i = 0; i < message.vecHued.length; ++i)
                $root.mahjong_fan_data.encode(message.vecHued[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.vecGangPao != null && message.vecGangPao.length)
            for (var i = 0; i < message.vecGangPao.length; ++i)
                $root.mahjong_fan_data.encode(message.vecGangPao[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.vecChaJiao != null && message.vecChaJiao.length)
            for (var i = 0; i < message.vecChaJiao.length; ++i)
                $root.mahjong_fan_data.encode(message.vecChaJiao[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.vecWuJiaoGang != null && message.vecWuJiaoGang.length)
            for (var i = 0; i < message.vecWuJiaoGang.length; ++i)
                $root.mahjong_fan_data.encode(message.vecWuJiaoGang[i], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.vecHuaZhu != null && message.vecHuaZhu.length)
            for (var i = 0; i < message.vecHuaZhu.length; ++i)
                $root.mahjong_fan_data.encode(message.vecHuaZhu[i], writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_st_gameresult_v2_1_4 message, length delimited. Does not implicitly {@link mahjong_st_gameresult_v2_1_4.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_st_gameresult_v2_1_4
     * @static
     * @param {Imahjong_st_gameresult_v2_1_4} message mahjong_st_gameresult_v2_1_4 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_st_gameresult_v2_1_4.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_st_gameresult_v2_1_4 message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_st_gameresult_v2_1_4
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_st_gameresult_v2_1_4} mahjong_st_gameresult_v2_1_4
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_st_gameresult_v2_1_4.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_st_gameresult_v2_1_4();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairID = reader.int32();
                break;
            case 2:
                message.cWonLose = reader.int32();
                break;
            case 3:
                message.nScore = reader.int64();
                break;
            case 4:
                message.nHuType = reader.int32();
                break;
            case 5:
                message.cMingGangNum = reader.int32();
                break;
            case 6:
                message.cAnGangNum = reader.int32();
                break;
            case 7:
                message.cBuGangNum = reader.int32();
                break;
            case 8:
                message.cChaJiao = reader.int32();
                break;
            case 9:
                message.bGangHua = reader.int32();
                break;
            case 10:
                message.cGenNum = reader.int32();
                break;
            case 11:
                message.nTax = reader.int32();
                break;
            case 12:
                if (!(message.vecGangData && message.vecGangData.length))
                    message.vecGangData = [];
                message.vecGangData.push($root.mahjong_gang_data.decode(reader, reader.uint32()));
                break;
            case 13:
                if (!(message.vecHu && message.vecHu.length))
                    message.vecHu = [];
                message.vecHu.push($root.mahjong_fan_data.decode(reader, reader.uint32()));
                break;
            case 14:
                if (!(message.vecHued && message.vecHued.length))
                    message.vecHued = [];
                message.vecHued.push($root.mahjong_fan_data.decode(reader, reader.uint32()));
                break;
            case 15:
                if (!(message.vecGangPao && message.vecGangPao.length))
                    message.vecGangPao = [];
                message.vecGangPao.push($root.mahjong_fan_data.decode(reader, reader.uint32()));
                break;
            case 16:
                if (!(message.vecChaJiao && message.vecChaJiao.length))
                    message.vecChaJiao = [];
                message.vecChaJiao.push($root.mahjong_fan_data.decode(reader, reader.uint32()));
                break;
            case 17:
                if (!(message.vecWuJiaoGang && message.vecWuJiaoGang.length))
                    message.vecWuJiaoGang = [];
                message.vecWuJiaoGang.push($root.mahjong_fan_data.decode(reader, reader.uint32()));
                break;
            case 18:
                if (!(message.vecHuaZhu && message.vecHuaZhu.length))
                    message.vecHuaZhu = [];
                message.vecHuaZhu.push($root.mahjong_fan_data.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairID"))
            throw $util.ProtocolError("missing required 'cChairID'", { instance: message });
        if (!message.hasOwnProperty("cWonLose"))
            throw $util.ProtocolError("missing required 'cWonLose'", { instance: message });
        if (!message.hasOwnProperty("nScore"))
            throw $util.ProtocolError("missing required 'nScore'", { instance: message });
        if (!message.hasOwnProperty("nHuType"))
            throw $util.ProtocolError("missing required 'nHuType'", { instance: message });
        if (!message.hasOwnProperty("cMingGangNum"))
            throw $util.ProtocolError("missing required 'cMingGangNum'", { instance: message });
        if (!message.hasOwnProperty("cAnGangNum"))
            throw $util.ProtocolError("missing required 'cAnGangNum'", { instance: message });
        if (!message.hasOwnProperty("cBuGangNum"))
            throw $util.ProtocolError("missing required 'cBuGangNum'", { instance: message });
        if (!message.hasOwnProperty("cChaJiao"))
            throw $util.ProtocolError("missing required 'cChaJiao'", { instance: message });
        if (!message.hasOwnProperty("bGangHua"))
            throw $util.ProtocolError("missing required 'bGangHua'", { instance: message });
        if (!message.hasOwnProperty("cGenNum"))
            throw $util.ProtocolError("missing required 'cGenNum'", { instance: message });
        if (!message.hasOwnProperty("nTax"))
            throw $util.ProtocolError("missing required 'nTax'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_st_gameresult_v2_1_4 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_st_gameresult_v2_1_4
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_st_gameresult_v2_1_4} mahjong_st_gameresult_v2_1_4
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_st_gameresult_v2_1_4.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_st_gameresult_v2_1_4 message.
     * @function verify
     * @memberof mahjong_st_gameresult_v2_1_4
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_st_gameresult_v2_1_4.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
        if (!$util.isInteger(message.cWonLose))
            return "cWonLose: integer expected";
        if (!$util.isInteger(message.nScore) && !(message.nScore && $util.isInteger(message.nScore.low) && $util.isInteger(message.nScore.high)))
            return "nScore: integer|Long expected";
        if (!$util.isInteger(message.nHuType))
            return "nHuType: integer expected";
        if (!$util.isInteger(message.cMingGangNum))
            return "cMingGangNum: integer expected";
        if (!$util.isInteger(message.cAnGangNum))
            return "cAnGangNum: integer expected";
        if (!$util.isInteger(message.cBuGangNum))
            return "cBuGangNum: integer expected";
        if (!$util.isInteger(message.cChaJiao))
            return "cChaJiao: integer expected";
        if (!$util.isInteger(message.bGangHua))
            return "bGangHua: integer expected";
        if (!$util.isInteger(message.cGenNum))
            return "cGenNum: integer expected";
        if (!$util.isInteger(message.nTax))
            return "nTax: integer expected";
        if (message.vecGangData != null && message.hasOwnProperty("vecGangData")) {
            if (!Array.isArray(message.vecGangData))
                return "vecGangData: array expected";
            for (var i = 0; i < message.vecGangData.length; ++i) {
                var error = $root.mahjong_gang_data.verify(message.vecGangData[i]);
                if (error)
                    return "vecGangData." + error;
            }
        }
        if (message.vecHu != null && message.hasOwnProperty("vecHu")) {
            if (!Array.isArray(message.vecHu))
                return "vecHu: array expected";
            for (var i = 0; i < message.vecHu.length; ++i) {
                var error = $root.mahjong_fan_data.verify(message.vecHu[i]);
                if (error)
                    return "vecHu." + error;
            }
        }
        if (message.vecHued != null && message.hasOwnProperty("vecHued")) {
            if (!Array.isArray(message.vecHued))
                return "vecHued: array expected";
            for (var i = 0; i < message.vecHued.length; ++i) {
                var error = $root.mahjong_fan_data.verify(message.vecHued[i]);
                if (error)
                    return "vecHued." + error;
            }
        }
        if (message.vecGangPao != null && message.hasOwnProperty("vecGangPao")) {
            if (!Array.isArray(message.vecGangPao))
                return "vecGangPao: array expected";
            for (var i = 0; i < message.vecGangPao.length; ++i) {
                var error = $root.mahjong_fan_data.verify(message.vecGangPao[i]);
                if (error)
                    return "vecGangPao." + error;
            }
        }
        if (message.vecChaJiao != null && message.hasOwnProperty("vecChaJiao")) {
            if (!Array.isArray(message.vecChaJiao))
                return "vecChaJiao: array expected";
            for (var i = 0; i < message.vecChaJiao.length; ++i) {
                var error = $root.mahjong_fan_data.verify(message.vecChaJiao[i]);
                if (error)
                    return "vecChaJiao." + error;
            }
        }
        if (message.vecWuJiaoGang != null && message.hasOwnProperty("vecWuJiaoGang")) {
            if (!Array.isArray(message.vecWuJiaoGang))
                return "vecWuJiaoGang: array expected";
            for (var i = 0; i < message.vecWuJiaoGang.length; ++i) {
                var error = $root.mahjong_fan_data.verify(message.vecWuJiaoGang[i]);
                if (error)
                    return "vecWuJiaoGang." + error;
            }
        }
        if (message.vecHuaZhu != null && message.hasOwnProperty("vecHuaZhu")) {
            if (!Array.isArray(message.vecHuaZhu))
                return "vecHuaZhu: array expected";
            for (var i = 0; i < message.vecHuaZhu.length; ++i) {
                var error = $root.mahjong_fan_data.verify(message.vecHuaZhu[i]);
                if (error)
                    return "vecHuaZhu." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_st_gameresult_v2_1_4 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_st_gameresult_v2_1_4
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_st_gameresult_v2_1_4} mahjong_st_gameresult_v2_1_4
     */
    mahjong_st_gameresult_v2_1_4.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_st_gameresult_v2_1_4)
            return object;
        var message = new $root.mahjong_st_gameresult_v2_1_4();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.cWonLose != null)
            message.cWonLose = object.cWonLose | 0;
        if (object.nScore != null)
            if ($util.Long)
                (message.nScore = $util.Long.fromValue(object.nScore)).unsigned = false;
            else if (typeof object.nScore === "string")
                message.nScore = parseInt(object.nScore, 10);
            else if (typeof object.nScore === "number")
                message.nScore = object.nScore;
            else if (typeof object.nScore === "object")
                message.nScore = new $util.LongBits(object.nScore.low >>> 0, object.nScore.high >>> 0).toNumber();
        if (object.nHuType != null)
            message.nHuType = object.nHuType | 0;
        if (object.cMingGangNum != null)
            message.cMingGangNum = object.cMingGangNum | 0;
        if (object.cAnGangNum != null)
            message.cAnGangNum = object.cAnGangNum | 0;
        if (object.cBuGangNum != null)
            message.cBuGangNum = object.cBuGangNum | 0;
        if (object.cChaJiao != null)
            message.cChaJiao = object.cChaJiao | 0;
        if (object.bGangHua != null)
            message.bGangHua = object.bGangHua | 0;
        if (object.cGenNum != null)
            message.cGenNum = object.cGenNum | 0;
        if (object.nTax != null)
            message.nTax = object.nTax | 0;
        if (object.vecGangData) {
            if (!Array.isArray(object.vecGangData))
                throw TypeError(".mahjong_st_gameresult_v2_1_4.vecGangData: array expected");
            message.vecGangData = [];
            for (var i = 0; i < object.vecGangData.length; ++i) {
                if (typeof object.vecGangData[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v2_1_4.vecGangData: object expected");
                message.vecGangData[i] = $root.mahjong_gang_data.fromObject(object.vecGangData[i]);
            }
        }
        if (object.vecHu) {
            if (!Array.isArray(object.vecHu))
                throw TypeError(".mahjong_st_gameresult_v2_1_4.vecHu: array expected");
            message.vecHu = [];
            for (var i = 0; i < object.vecHu.length; ++i) {
                if (typeof object.vecHu[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v2_1_4.vecHu: object expected");
                message.vecHu[i] = $root.mahjong_fan_data.fromObject(object.vecHu[i]);
            }
        }
        if (object.vecHued) {
            if (!Array.isArray(object.vecHued))
                throw TypeError(".mahjong_st_gameresult_v2_1_4.vecHued: array expected");
            message.vecHued = [];
            for (var i = 0; i < object.vecHued.length; ++i) {
                if (typeof object.vecHued[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v2_1_4.vecHued: object expected");
                message.vecHued[i] = $root.mahjong_fan_data.fromObject(object.vecHued[i]);
            }
        }
        if (object.vecGangPao) {
            if (!Array.isArray(object.vecGangPao))
                throw TypeError(".mahjong_st_gameresult_v2_1_4.vecGangPao: array expected");
            message.vecGangPao = [];
            for (var i = 0; i < object.vecGangPao.length; ++i) {
                if (typeof object.vecGangPao[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v2_1_4.vecGangPao: object expected");
                message.vecGangPao[i] = $root.mahjong_fan_data.fromObject(object.vecGangPao[i]);
            }
        }
        if (object.vecChaJiao) {
            if (!Array.isArray(object.vecChaJiao))
                throw TypeError(".mahjong_st_gameresult_v2_1_4.vecChaJiao: array expected");
            message.vecChaJiao = [];
            for (var i = 0; i < object.vecChaJiao.length; ++i) {
                if (typeof object.vecChaJiao[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v2_1_4.vecChaJiao: object expected");
                message.vecChaJiao[i] = $root.mahjong_fan_data.fromObject(object.vecChaJiao[i]);
            }
        }
        if (object.vecWuJiaoGang) {
            if (!Array.isArray(object.vecWuJiaoGang))
                throw TypeError(".mahjong_st_gameresult_v2_1_4.vecWuJiaoGang: array expected");
            message.vecWuJiaoGang = [];
            for (var i = 0; i < object.vecWuJiaoGang.length; ++i) {
                if (typeof object.vecWuJiaoGang[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v2_1_4.vecWuJiaoGang: object expected");
                message.vecWuJiaoGang[i] = $root.mahjong_fan_data.fromObject(object.vecWuJiaoGang[i]);
            }
        }
        if (object.vecHuaZhu) {
            if (!Array.isArray(object.vecHuaZhu))
                throw TypeError(".mahjong_st_gameresult_v2_1_4.vecHuaZhu: array expected");
            message.vecHuaZhu = [];
            for (var i = 0; i < object.vecHuaZhu.length; ++i) {
                if (typeof object.vecHuaZhu[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v2_1_4.vecHuaZhu: object expected");
                message.vecHuaZhu[i] = $root.mahjong_fan_data.fromObject(object.vecHuaZhu[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_st_gameresult_v2_1_4 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_st_gameresult_v2_1_4
     * @static
     * @param {mahjong_st_gameresult_v2_1_4} message mahjong_st_gameresult_v2_1_4
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_st_gameresult_v2_1_4.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecGangData = [];
            object.vecHu = [];
            object.vecHued = [];
            object.vecGangPao = [];
            object.vecChaJiao = [];
            object.vecWuJiaoGang = [];
            object.vecHuaZhu = [];
        }
        if (options.defaults) {
            object.cChairID = 0;
            object.cWonLose = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.nScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.nScore = options.longs === String ? "0" : 0;
            object.nHuType = 0;
            object.cMingGangNum = 0;
            object.cAnGangNum = 0;
            object.cBuGangNum = 0;
            object.cChaJiao = 0;
            object.bGangHua = 0;
            object.cGenNum = 0;
            object.nTax = 0;
        }
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.cWonLose != null && message.hasOwnProperty("cWonLose"))
            object.cWonLose = message.cWonLose;
        if (message.nScore != null && message.hasOwnProperty("nScore"))
            if (typeof message.nScore === "number")
                object.nScore = options.longs === String ? String(message.nScore) : message.nScore;
            else
                object.nScore = options.longs === String ? $util.Long.prototype.toString.call(message.nScore) : options.longs === Number ? new $util.LongBits(message.nScore.low >>> 0, message.nScore.high >>> 0).toNumber() : message.nScore;
        if (message.nHuType != null && message.hasOwnProperty("nHuType"))
            object.nHuType = message.nHuType;
        if (message.cMingGangNum != null && message.hasOwnProperty("cMingGangNum"))
            object.cMingGangNum = message.cMingGangNum;
        if (message.cAnGangNum != null && message.hasOwnProperty("cAnGangNum"))
            object.cAnGangNum = message.cAnGangNum;
        if (message.cBuGangNum != null && message.hasOwnProperty("cBuGangNum"))
            object.cBuGangNum = message.cBuGangNum;
        if (message.cChaJiao != null && message.hasOwnProperty("cChaJiao"))
            object.cChaJiao = message.cChaJiao;
        if (message.bGangHua != null && message.hasOwnProperty("bGangHua"))
            object.bGangHua = message.bGangHua;
        if (message.cGenNum != null && message.hasOwnProperty("cGenNum"))
            object.cGenNum = message.cGenNum;
        if (message.nTax != null && message.hasOwnProperty("nTax"))
            object.nTax = message.nTax;
        if (message.vecGangData && message.vecGangData.length) {
            object.vecGangData = [];
            for (var j = 0; j < message.vecGangData.length; ++j)
                object.vecGangData[j] = $root.mahjong_gang_data.toObject(message.vecGangData[j], options);
        }
        if (message.vecHu && message.vecHu.length) {
            object.vecHu = [];
            for (var j = 0; j < message.vecHu.length; ++j)
                object.vecHu[j] = $root.mahjong_fan_data.toObject(message.vecHu[j], options);
        }
        if (message.vecHued && message.vecHued.length) {
            object.vecHued = [];
            for (var j = 0; j < message.vecHued.length; ++j)
                object.vecHued[j] = $root.mahjong_fan_data.toObject(message.vecHued[j], options);
        }
        if (message.vecGangPao && message.vecGangPao.length) {
            object.vecGangPao = [];
            for (var j = 0; j < message.vecGangPao.length; ++j)
                object.vecGangPao[j] = $root.mahjong_fan_data.toObject(message.vecGangPao[j], options);
        }
        if (message.vecChaJiao && message.vecChaJiao.length) {
            object.vecChaJiao = [];
            for (var j = 0; j < message.vecChaJiao.length; ++j)
                object.vecChaJiao[j] = $root.mahjong_fan_data.toObject(message.vecChaJiao[j], options);
        }
        if (message.vecWuJiaoGang && message.vecWuJiaoGang.length) {
            object.vecWuJiaoGang = [];
            for (var j = 0; j < message.vecWuJiaoGang.length; ++j)
                object.vecWuJiaoGang[j] = $root.mahjong_fan_data.toObject(message.vecWuJiaoGang[j], options);
        }
        if (message.vecHuaZhu && message.vecHuaZhu.length) {
            object.vecHuaZhu = [];
            for (var j = 0; j < message.vecHuaZhu.length; ++j)
                object.vecHuaZhu[j] = $root.mahjong_fan_data.toObject(message.vecHuaZhu[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_st_gameresult_v2_1_4 to JSON.
     * @function toJSON
     * @memberof mahjong_st_gameresult_v2_1_4
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_st_gameresult_v2_1_4.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_st_gameresult_v2_1_4;
})();

$root.mahjong_Cli_leave_game_req = (function() {

    /**
     * Properties of a mahjong_Cli_leave_game_req.
     * @exports Imahjong_Cli_leave_game_req
     * @interface Imahjong_Cli_leave_game_req
     */

    /**
     * Constructs a new mahjong_Cli_leave_game_req.
     * @exports mahjong_Cli_leave_game_req
     * @classdesc Represents a mahjong_Cli_leave_game_req.
     * @implements Imahjong_Cli_leave_game_req
     * @constructor
     * @param {Imahjong_Cli_leave_game_req=} [properties] Properties to set
     */
    function mahjong_Cli_leave_game_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_Cli_leave_game_req instance using the specified properties.
     * @function create
     * @memberof mahjong_Cli_leave_game_req
     * @static
     * @param {Imahjong_Cli_leave_game_req=} [properties] Properties to set
     * @returns {mahjong_Cli_leave_game_req} mahjong_Cli_leave_game_req instance
     */
    mahjong_Cli_leave_game_req.create = function create(properties) {
        return new mahjong_Cli_leave_game_req(properties);
    };

    /**
     * Encodes the specified mahjong_Cli_leave_game_req message. Does not implicitly {@link mahjong_Cli_leave_game_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_Cli_leave_game_req
     * @static
     * @param {Imahjong_Cli_leave_game_req} message mahjong_Cli_leave_game_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_Cli_leave_game_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_Cli_leave_game_req message, length delimited. Does not implicitly {@link mahjong_Cli_leave_game_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_Cli_leave_game_req
     * @static
     * @param {Imahjong_Cli_leave_game_req} message mahjong_Cli_leave_game_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_Cli_leave_game_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_Cli_leave_game_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_Cli_leave_game_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_Cli_leave_game_req} mahjong_Cli_leave_game_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_Cli_leave_game_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_Cli_leave_game_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_Cli_leave_game_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_Cli_leave_game_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_Cli_leave_game_req} mahjong_Cli_leave_game_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_Cli_leave_game_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_Cli_leave_game_req message.
     * @function verify
     * @memberof mahjong_Cli_leave_game_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_Cli_leave_game_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_Cli_leave_game_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_Cli_leave_game_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_Cli_leave_game_req} mahjong_Cli_leave_game_req
     */
    mahjong_Cli_leave_game_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_Cli_leave_game_req)
            return object;
        return new $root.mahjong_Cli_leave_game_req();
    };

    /**
     * Creates a plain object from a mahjong_Cli_leave_game_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_Cli_leave_game_req
     * @static
     * @param {mahjong_Cli_leave_game_req} message mahjong_Cli_leave_game_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_Cli_leave_game_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_Cli_leave_game_req to JSON.
     * @function toJSON
     * @memberof mahjong_Cli_leave_game_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_Cli_leave_game_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_Cli_leave_game_req;
})();

$root.mahjong_mj_dice_not = (function() {

    /**
     * Properties of a mahjong_mj_dice_not.
     * @exports Imahjong_mj_dice_not
     * @interface Imahjong_mj_dice_not
     * @property {number} cBanker mahjong_mj_dice_not cBanker
     * @property {Array.<number>|null} [vecDice] mahjong_mj_dice_not vecDice
     * @property {number} cWallEndChair mahjong_mj_dice_not cWallEndChair
     * @property {number} cWallEndPos mahjong_mj_dice_not cWallEndPos
     */

    /**
     * Constructs a new mahjong_mj_dice_not.
     * @exports mahjong_mj_dice_not
     * @classdesc Represents a mahjong_mj_dice_not.
     * @implements Imahjong_mj_dice_not
     * @constructor
     * @param {Imahjong_mj_dice_not=} [properties] Properties to set
     */
    function mahjong_mj_dice_not(properties) {
        this.vecDice = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_dice_not cBanker.
     * @member {number} cBanker
     * @memberof mahjong_mj_dice_not
     * @instance
     */
    mahjong_mj_dice_not.prototype.cBanker = 0;

    /**
     * mahjong_mj_dice_not vecDice.
     * @member {Array.<number>} vecDice
     * @memberof mahjong_mj_dice_not
     * @instance
     */
    mahjong_mj_dice_not.prototype.vecDice = $util.emptyArray;

    /**
     * mahjong_mj_dice_not cWallEndChair.
     * @member {number} cWallEndChair
     * @memberof mahjong_mj_dice_not
     * @instance
     */
    mahjong_mj_dice_not.prototype.cWallEndChair = 0;

    /**
     * mahjong_mj_dice_not cWallEndPos.
     * @member {number} cWallEndPos
     * @memberof mahjong_mj_dice_not
     * @instance
     */
    mahjong_mj_dice_not.prototype.cWallEndPos = 0;

    /**
     * Creates a new mahjong_mj_dice_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_dice_not
     * @static
     * @param {Imahjong_mj_dice_not=} [properties] Properties to set
     * @returns {mahjong_mj_dice_not} mahjong_mj_dice_not instance
     */
    mahjong_mj_dice_not.create = function create(properties) {
        return new mahjong_mj_dice_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_dice_not message. Does not implicitly {@link mahjong_mj_dice_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_dice_not
     * @static
     * @param {Imahjong_mj_dice_not} message mahjong_mj_dice_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_dice_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cBanker);
        if (message.vecDice != null && message.vecDice.length)
            for (var i = 0; i < message.vecDice.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.vecDice[i]);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cWallEndChair);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cWallEndPos);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_dice_not message, length delimited. Does not implicitly {@link mahjong_mj_dice_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_dice_not
     * @static
     * @param {Imahjong_mj_dice_not} message mahjong_mj_dice_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_dice_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_dice_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_dice_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_dice_not} mahjong_mj_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_dice_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_dice_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cBanker = reader.int32();
                break;
            case 2:
                if (!(message.vecDice && message.vecDice.length))
                    message.vecDice = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecDice.push(reader.int32());
                } else
                    message.vecDice.push(reader.int32());
                break;
            case 3:
                message.cWallEndChair = reader.int32();
                break;
            case 4:
                message.cWallEndPos = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cBanker"))
            throw $util.ProtocolError("missing required 'cBanker'", { instance: message });
        if (!message.hasOwnProperty("cWallEndChair"))
            throw $util.ProtocolError("missing required 'cWallEndChair'", { instance: message });
        if (!message.hasOwnProperty("cWallEndPos"))
            throw $util.ProtocolError("missing required 'cWallEndPos'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_dice_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_dice_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_dice_not} mahjong_mj_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_dice_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_dice_not message.
     * @function verify
     * @memberof mahjong_mj_dice_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_dice_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cBanker))
            return "cBanker: integer expected";
        if (message.vecDice != null && message.hasOwnProperty("vecDice")) {
            if (!Array.isArray(message.vecDice))
                return "vecDice: array expected";
            for (var i = 0; i < message.vecDice.length; ++i)
                if (!$util.isInteger(message.vecDice[i]))
                    return "vecDice: integer[] expected";
        }
        if (!$util.isInteger(message.cWallEndChair))
            return "cWallEndChair: integer expected";
        if (!$util.isInteger(message.cWallEndPos))
            return "cWallEndPos: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_dice_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_dice_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_dice_not} mahjong_mj_dice_not
     */
    mahjong_mj_dice_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_dice_not)
            return object;
        var message = new $root.mahjong_mj_dice_not();
        if (object.cBanker != null)
            message.cBanker = object.cBanker | 0;
        if (object.vecDice) {
            if (!Array.isArray(object.vecDice))
                throw TypeError(".mahjong_mj_dice_not.vecDice: array expected");
            message.vecDice = [];
            for (var i = 0; i < object.vecDice.length; ++i)
                message.vecDice[i] = object.vecDice[i] | 0;
        }
        if (object.cWallEndChair != null)
            message.cWallEndChair = object.cWallEndChair | 0;
        if (object.cWallEndPos != null)
            message.cWallEndPos = object.cWallEndPos | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_dice_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_dice_not
     * @static
     * @param {mahjong_mj_dice_not} message mahjong_mj_dice_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_dice_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecDice = [];
        if (options.defaults) {
            object.cBanker = 0;
            object.cWallEndChair = 0;
            object.cWallEndPos = 0;
        }
        if (message.cBanker != null && message.hasOwnProperty("cBanker"))
            object.cBanker = message.cBanker;
        if (message.vecDice && message.vecDice.length) {
            object.vecDice = [];
            for (var j = 0; j < message.vecDice.length; ++j)
                object.vecDice[j] = message.vecDice[j];
        }
        if (message.cWallEndChair != null && message.hasOwnProperty("cWallEndChair"))
            object.cWallEndChair = message.cWallEndChair;
        if (message.cWallEndPos != null && message.hasOwnProperty("cWallEndPos"))
            object.cWallEndPos = message.cWallEndPos;
        return object;
    };

    /**
     * Converts this mahjong_mj_dice_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_dice_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_dice_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_dice_not;
})();

$root.mahjong_svr_choose_ratio_rsp = (function() {

    /**
     * Properties of a mahjong_svr_choose_ratio_rsp.
     * @exports Imahjong_svr_choose_ratio_rsp
     * @interface Imahjong_svr_choose_ratio_rsp
     * @property {number} nRatio mahjong_svr_choose_ratio_rsp nRatio
     * @property {number} sSerialID mahjong_svr_choose_ratio_rsp sSerialID
     */

    /**
     * Constructs a new mahjong_svr_choose_ratio_rsp.
     * @exports mahjong_svr_choose_ratio_rsp
     * @classdesc Represents a mahjong_svr_choose_ratio_rsp.
     * @implements Imahjong_svr_choose_ratio_rsp
     * @constructor
     * @param {Imahjong_svr_choose_ratio_rsp=} [properties] Properties to set
     */
    function mahjong_svr_choose_ratio_rsp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_svr_choose_ratio_rsp nRatio.
     * @member {number} nRatio
     * @memberof mahjong_svr_choose_ratio_rsp
     * @instance
     */
    mahjong_svr_choose_ratio_rsp.prototype.nRatio = 0;

    /**
     * mahjong_svr_choose_ratio_rsp sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_svr_choose_ratio_rsp
     * @instance
     */
    mahjong_svr_choose_ratio_rsp.prototype.sSerialID = 0;

    /**
     * Creates a new mahjong_svr_choose_ratio_rsp instance using the specified properties.
     * @function create
     * @memberof mahjong_svr_choose_ratio_rsp
     * @static
     * @param {Imahjong_svr_choose_ratio_rsp=} [properties] Properties to set
     * @returns {mahjong_svr_choose_ratio_rsp} mahjong_svr_choose_ratio_rsp instance
     */
    mahjong_svr_choose_ratio_rsp.create = function create(properties) {
        return new mahjong_svr_choose_ratio_rsp(properties);
    };

    /**
     * Encodes the specified mahjong_svr_choose_ratio_rsp message. Does not implicitly {@link mahjong_svr_choose_ratio_rsp.verify|verify} messages.
     * @function encode
     * @memberof mahjong_svr_choose_ratio_rsp
     * @static
     * @param {Imahjong_svr_choose_ratio_rsp} message mahjong_svr_choose_ratio_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_choose_ratio_rsp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nRatio);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sSerialID);
        return writer;
    };

    /**
     * Encodes the specified mahjong_svr_choose_ratio_rsp message, length delimited. Does not implicitly {@link mahjong_svr_choose_ratio_rsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_svr_choose_ratio_rsp
     * @static
     * @param {Imahjong_svr_choose_ratio_rsp} message mahjong_svr_choose_ratio_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_choose_ratio_rsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_svr_choose_ratio_rsp message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_svr_choose_ratio_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_svr_choose_ratio_rsp} mahjong_svr_choose_ratio_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_choose_ratio_rsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_svr_choose_ratio_rsp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nRatio = reader.int32();
                break;
            case 2:
                message.sSerialID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nRatio"))
            throw $util.ProtocolError("missing required 'nRatio'", { instance: message });
        if (!message.hasOwnProperty("sSerialID"))
            throw $util.ProtocolError("missing required 'sSerialID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_svr_choose_ratio_rsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_svr_choose_ratio_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_svr_choose_ratio_rsp} mahjong_svr_choose_ratio_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_choose_ratio_rsp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_svr_choose_ratio_rsp message.
     * @function verify
     * @memberof mahjong_svr_choose_ratio_rsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_svr_choose_ratio_rsp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nRatio))
            return "nRatio: integer expected";
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_svr_choose_ratio_rsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_svr_choose_ratio_rsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_svr_choose_ratio_rsp} mahjong_svr_choose_ratio_rsp
     */
    mahjong_svr_choose_ratio_rsp.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_svr_choose_ratio_rsp)
            return object;
        var message = new $root.mahjong_svr_choose_ratio_rsp();
        if (object.nRatio != null)
            message.nRatio = object.nRatio | 0;
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_svr_choose_ratio_rsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_svr_choose_ratio_rsp
     * @static
     * @param {mahjong_svr_choose_ratio_rsp} message mahjong_svr_choose_ratio_rsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_svr_choose_ratio_rsp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nRatio = 0;
            object.sSerialID = 0;
        }
        if (message.nRatio != null && message.hasOwnProperty("nRatio"))
            object.nRatio = message.nRatio;
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        return object;
    };

    /**
     * Converts this mahjong_svr_choose_ratio_rsp to JSON.
     * @function toJSON
     * @memberof mahjong_svr_choose_ratio_rsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_svr_choose_ratio_rsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_svr_choose_ratio_rsp;
})();

$root.mahjong_mj_huedcards_not = (function() {

    /**
     * Properties of a mahjong_mj_huedcards_not.
     * @exports Imahjong_mj_huedcards_not
     * @interface Imahjong_mj_huedcards_not
     * @property {number} cChairID mahjong_mj_huedcards_not cChairID
     * @property {Array.<number>|null} [vecCards] mahjong_mj_huedcards_not vecCards
     */

    /**
     * Constructs a new mahjong_mj_huedcards_not.
     * @exports mahjong_mj_huedcards_not
     * @classdesc Represents a mahjong_mj_huedcards_not.
     * @implements Imahjong_mj_huedcards_not
     * @constructor
     * @param {Imahjong_mj_huedcards_not=} [properties] Properties to set
     */
    function mahjong_mj_huedcards_not(properties) {
        this.vecCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_huedcards_not cChairID.
     * @member {number} cChairID
     * @memberof mahjong_mj_huedcards_not
     * @instance
     */
    mahjong_mj_huedcards_not.prototype.cChairID = 0;

    /**
     * mahjong_mj_huedcards_not vecCards.
     * @member {Array.<number>} vecCards
     * @memberof mahjong_mj_huedcards_not
     * @instance
     */
    mahjong_mj_huedcards_not.prototype.vecCards = $util.emptyArray;

    /**
     * Creates a new mahjong_mj_huedcards_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_huedcards_not
     * @static
     * @param {Imahjong_mj_huedcards_not=} [properties] Properties to set
     * @returns {mahjong_mj_huedcards_not} mahjong_mj_huedcards_not instance
     */
    mahjong_mj_huedcards_not.create = function create(properties) {
        return new mahjong_mj_huedcards_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_huedcards_not message. Does not implicitly {@link mahjong_mj_huedcards_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_huedcards_not
     * @static
     * @param {Imahjong_mj_huedcards_not} message mahjong_mj_huedcards_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_huedcards_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        if (message.vecCards != null && message.vecCards.length)
            for (var i = 0; i < message.vecCards.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.vecCards[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_huedcards_not message, length delimited. Does not implicitly {@link mahjong_mj_huedcards_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_huedcards_not
     * @static
     * @param {Imahjong_mj_huedcards_not} message mahjong_mj_huedcards_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_huedcards_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_huedcards_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_huedcards_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_huedcards_not} mahjong_mj_huedcards_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_huedcards_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_huedcards_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairID = reader.int32();
                break;
            case 2:
                if (!(message.vecCards && message.vecCards.length))
                    message.vecCards = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecCards.push(reader.int32());
                } else
                    message.vecCards.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairID"))
            throw $util.ProtocolError("missing required 'cChairID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_huedcards_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_huedcards_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_huedcards_not} mahjong_mj_huedcards_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_huedcards_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_huedcards_not message.
     * @function verify
     * @memberof mahjong_mj_huedcards_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_huedcards_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
        if (message.vecCards != null && message.hasOwnProperty("vecCards")) {
            if (!Array.isArray(message.vecCards))
                return "vecCards: array expected";
            for (var i = 0; i < message.vecCards.length; ++i)
                if (!$util.isInteger(message.vecCards[i]))
                    return "vecCards: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_mj_huedcards_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_huedcards_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_huedcards_not} mahjong_mj_huedcards_not
     */
    mahjong_mj_huedcards_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_huedcards_not)
            return object;
        var message = new $root.mahjong_mj_huedcards_not();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.vecCards) {
            if (!Array.isArray(object.vecCards))
                throw TypeError(".mahjong_mj_huedcards_not.vecCards: array expected");
            message.vecCards = [];
            for (var i = 0; i < object.vecCards.length; ++i)
                message.vecCards[i] = object.vecCards[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_huedcards_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_huedcards_not
     * @static
     * @param {mahjong_mj_huedcards_not} message mahjong_mj_huedcards_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_huedcards_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecCards = [];
        if (options.defaults)
            object.cChairID = 0;
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.vecCards && message.vecCards.length) {
            object.vecCards = [];
            for (var j = 0; j < message.vecCards.length; ++j)
                object.vecCards[j] = message.vecCards[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_mj_huedcards_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_huedcards_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_huedcards_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_huedcards_not;
})();

$root.mahjong_st_gameresult_v2_2_0 = (function() {

    /**
     * Properties of a mahjong_st_gameresult_v2_2_0.
     * @exports Imahjong_st_gameresult_v2_2_0
     * @interface Imahjong_st_gameresult_v2_2_0
     * @property {number} cChairID mahjong_st_gameresult_v2_2_0 cChairID
     * @property {number} cWonLose mahjong_st_gameresult_v2_2_0 cWonLose
     * @property {number|Long} nScore mahjong_st_gameresult_v2_2_0 nScore
     * @property {number} cChaJiao mahjong_st_gameresult_v2_2_0 cChaJiao
     * @property {number} nTax mahjong_st_gameresult_v2_2_0 nTax
     * @property {Array.<Imahjong_gang_data>|null} [vecGangData] mahjong_st_gameresult_v2_2_0 vecGangData
     * @property {Array.<Imahjong_fan_data_v2_2_0>|null} [vecHu] mahjong_st_gameresult_v2_2_0 vecHu
     * @property {Array.<Imahjong_fan_data_v2_2_0>|null} [vecHued] mahjong_st_gameresult_v2_2_0 vecHued
     * @property {Array.<Imahjong_fan_data_v2_2_0>|null} [vecGangPao] mahjong_st_gameresult_v2_2_0 vecGangPao
     * @property {Array.<Imahjong_fan_data_v2_2_0>|null} [vecChaJiao] mahjong_st_gameresult_v2_2_0 vecChaJiao
     * @property {Array.<Imahjong_fan_data_v2_2_0>|null} [vecWuJiaoGang] mahjong_st_gameresult_v2_2_0 vecWuJiaoGang
     * @property {Array.<Imahjong_fan_data_v2_2_0>|null} [vecHuaZhu] mahjong_st_gameresult_v2_2_0 vecHuaZhu
     */

    /**
     * Constructs a new mahjong_st_gameresult_v2_2_0.
     * @exports mahjong_st_gameresult_v2_2_0
     * @classdesc Represents a mahjong_st_gameresult_v2_2_0.
     * @implements Imahjong_st_gameresult_v2_2_0
     * @constructor
     * @param {Imahjong_st_gameresult_v2_2_0=} [properties] Properties to set
     */
    function mahjong_st_gameresult_v2_2_0(properties) {
        this.vecGangData = [];
        this.vecHu = [];
        this.vecHued = [];
        this.vecGangPao = [];
        this.vecChaJiao = [];
        this.vecWuJiaoGang = [];
        this.vecHuaZhu = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_st_gameresult_v2_2_0 cChairID.
     * @member {number} cChairID
     * @memberof mahjong_st_gameresult_v2_2_0
     * @instance
     */
    mahjong_st_gameresult_v2_2_0.prototype.cChairID = 0;

    /**
     * mahjong_st_gameresult_v2_2_0 cWonLose.
     * @member {number} cWonLose
     * @memberof mahjong_st_gameresult_v2_2_0
     * @instance
     */
    mahjong_st_gameresult_v2_2_0.prototype.cWonLose = 0;

    /**
     * mahjong_st_gameresult_v2_2_0 nScore.
     * @member {number|Long} nScore
     * @memberof mahjong_st_gameresult_v2_2_0
     * @instance
     */
    mahjong_st_gameresult_v2_2_0.prototype.nScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * mahjong_st_gameresult_v2_2_0 cChaJiao.
     * @member {number} cChaJiao
     * @memberof mahjong_st_gameresult_v2_2_0
     * @instance
     */
    mahjong_st_gameresult_v2_2_0.prototype.cChaJiao = 0;

    /**
     * mahjong_st_gameresult_v2_2_0 nTax.
     * @member {number} nTax
     * @memberof mahjong_st_gameresult_v2_2_0
     * @instance
     */
    mahjong_st_gameresult_v2_2_0.prototype.nTax = 0;

    /**
     * mahjong_st_gameresult_v2_2_0 vecGangData.
     * @member {Array.<Imahjong_gang_data>} vecGangData
     * @memberof mahjong_st_gameresult_v2_2_0
     * @instance
     */
    mahjong_st_gameresult_v2_2_0.prototype.vecGangData = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v2_2_0 vecHu.
     * @member {Array.<Imahjong_fan_data_v2_2_0>} vecHu
     * @memberof mahjong_st_gameresult_v2_2_0
     * @instance
     */
    mahjong_st_gameresult_v2_2_0.prototype.vecHu = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v2_2_0 vecHued.
     * @member {Array.<Imahjong_fan_data_v2_2_0>} vecHued
     * @memberof mahjong_st_gameresult_v2_2_0
     * @instance
     */
    mahjong_st_gameresult_v2_2_0.prototype.vecHued = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v2_2_0 vecGangPao.
     * @member {Array.<Imahjong_fan_data_v2_2_0>} vecGangPao
     * @memberof mahjong_st_gameresult_v2_2_0
     * @instance
     */
    mahjong_st_gameresult_v2_2_0.prototype.vecGangPao = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v2_2_0 vecChaJiao.
     * @member {Array.<Imahjong_fan_data_v2_2_0>} vecChaJiao
     * @memberof mahjong_st_gameresult_v2_2_0
     * @instance
     */
    mahjong_st_gameresult_v2_2_0.prototype.vecChaJiao = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v2_2_0 vecWuJiaoGang.
     * @member {Array.<Imahjong_fan_data_v2_2_0>} vecWuJiaoGang
     * @memberof mahjong_st_gameresult_v2_2_0
     * @instance
     */
    mahjong_st_gameresult_v2_2_0.prototype.vecWuJiaoGang = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v2_2_0 vecHuaZhu.
     * @member {Array.<Imahjong_fan_data_v2_2_0>} vecHuaZhu
     * @memberof mahjong_st_gameresult_v2_2_0
     * @instance
     */
    mahjong_st_gameresult_v2_2_0.prototype.vecHuaZhu = $util.emptyArray;

    /**
     * Creates a new mahjong_st_gameresult_v2_2_0 instance using the specified properties.
     * @function create
     * @memberof mahjong_st_gameresult_v2_2_0
     * @static
     * @param {Imahjong_st_gameresult_v2_2_0=} [properties] Properties to set
     * @returns {mahjong_st_gameresult_v2_2_0} mahjong_st_gameresult_v2_2_0 instance
     */
    mahjong_st_gameresult_v2_2_0.create = function create(properties) {
        return new mahjong_st_gameresult_v2_2_0(properties);
    };

    /**
     * Encodes the specified mahjong_st_gameresult_v2_2_0 message. Does not implicitly {@link mahjong_st_gameresult_v2_2_0.verify|verify} messages.
     * @function encode
     * @memberof mahjong_st_gameresult_v2_2_0
     * @static
     * @param {Imahjong_st_gameresult_v2_2_0} message mahjong_st_gameresult_v2_2_0 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_st_gameresult_v2_2_0.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cWonLose);
        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.nScore);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cChaJiao);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nTax);
        if (message.vecGangData != null && message.vecGangData.length)
            for (var i = 0; i < message.vecGangData.length; ++i)
                $root.mahjong_gang_data.encode(message.vecGangData[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.vecHu != null && message.vecHu.length)
            for (var i = 0; i < message.vecHu.length; ++i)
                $root.mahjong_fan_data_v2_2_0.encode(message.vecHu[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.vecHued != null && message.vecHued.length)
            for (var i = 0; i < message.vecHued.length; ++i)
                $root.mahjong_fan_data_v2_2_0.encode(message.vecHued[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.vecGangPao != null && message.vecGangPao.length)
            for (var i = 0; i < message.vecGangPao.length; ++i)
                $root.mahjong_fan_data_v2_2_0.encode(message.vecGangPao[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.vecChaJiao != null && message.vecChaJiao.length)
            for (var i = 0; i < message.vecChaJiao.length; ++i)
                $root.mahjong_fan_data_v2_2_0.encode(message.vecChaJiao[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.vecWuJiaoGang != null && message.vecWuJiaoGang.length)
            for (var i = 0; i < message.vecWuJiaoGang.length; ++i)
                $root.mahjong_fan_data_v2_2_0.encode(message.vecWuJiaoGang[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.vecHuaZhu != null && message.vecHuaZhu.length)
            for (var i = 0; i < message.vecHuaZhu.length; ++i)
                $root.mahjong_fan_data_v2_2_0.encode(message.vecHuaZhu[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_st_gameresult_v2_2_0 message, length delimited. Does not implicitly {@link mahjong_st_gameresult_v2_2_0.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_st_gameresult_v2_2_0
     * @static
     * @param {Imahjong_st_gameresult_v2_2_0} message mahjong_st_gameresult_v2_2_0 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_st_gameresult_v2_2_0.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_st_gameresult_v2_2_0 message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_st_gameresult_v2_2_0
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_st_gameresult_v2_2_0} mahjong_st_gameresult_v2_2_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_st_gameresult_v2_2_0.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_st_gameresult_v2_2_0();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairID = reader.int32();
                break;
            case 2:
                message.cWonLose = reader.int32();
                break;
            case 3:
                message.nScore = reader.int64();
                break;
            case 4:
                message.cChaJiao = reader.int32();
                break;
            case 5:
                message.nTax = reader.int32();
                break;
            case 6:
                if (!(message.vecGangData && message.vecGangData.length))
                    message.vecGangData = [];
                message.vecGangData.push($root.mahjong_gang_data.decode(reader, reader.uint32()));
                break;
            case 7:
                if (!(message.vecHu && message.vecHu.length))
                    message.vecHu = [];
                message.vecHu.push($root.mahjong_fan_data_v2_2_0.decode(reader, reader.uint32()));
                break;
            case 8:
                if (!(message.vecHued && message.vecHued.length))
                    message.vecHued = [];
                message.vecHued.push($root.mahjong_fan_data_v2_2_0.decode(reader, reader.uint32()));
                break;
            case 9:
                if (!(message.vecGangPao && message.vecGangPao.length))
                    message.vecGangPao = [];
                message.vecGangPao.push($root.mahjong_fan_data_v2_2_0.decode(reader, reader.uint32()));
                break;
            case 10:
                if (!(message.vecChaJiao && message.vecChaJiao.length))
                    message.vecChaJiao = [];
                message.vecChaJiao.push($root.mahjong_fan_data_v2_2_0.decode(reader, reader.uint32()));
                break;
            case 11:
                if (!(message.vecWuJiaoGang && message.vecWuJiaoGang.length))
                    message.vecWuJiaoGang = [];
                message.vecWuJiaoGang.push($root.mahjong_fan_data_v2_2_0.decode(reader, reader.uint32()));
                break;
            case 12:
                if (!(message.vecHuaZhu && message.vecHuaZhu.length))
                    message.vecHuaZhu = [];
                message.vecHuaZhu.push($root.mahjong_fan_data_v2_2_0.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairID"))
            throw $util.ProtocolError("missing required 'cChairID'", { instance: message });
        if (!message.hasOwnProperty("cWonLose"))
            throw $util.ProtocolError("missing required 'cWonLose'", { instance: message });
        if (!message.hasOwnProperty("nScore"))
            throw $util.ProtocolError("missing required 'nScore'", { instance: message });
        if (!message.hasOwnProperty("cChaJiao"))
            throw $util.ProtocolError("missing required 'cChaJiao'", { instance: message });
        if (!message.hasOwnProperty("nTax"))
            throw $util.ProtocolError("missing required 'nTax'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_st_gameresult_v2_2_0 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_st_gameresult_v2_2_0
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_st_gameresult_v2_2_0} mahjong_st_gameresult_v2_2_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_st_gameresult_v2_2_0.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_st_gameresult_v2_2_0 message.
     * @function verify
     * @memberof mahjong_st_gameresult_v2_2_0
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_st_gameresult_v2_2_0.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
        if (!$util.isInteger(message.cWonLose))
            return "cWonLose: integer expected";
        if (!$util.isInteger(message.nScore) && !(message.nScore && $util.isInteger(message.nScore.low) && $util.isInteger(message.nScore.high)))
            return "nScore: integer|Long expected";
        if (!$util.isInteger(message.cChaJiao))
            return "cChaJiao: integer expected";
        if (!$util.isInteger(message.nTax))
            return "nTax: integer expected";
        if (message.vecGangData != null && message.hasOwnProperty("vecGangData")) {
            if (!Array.isArray(message.vecGangData))
                return "vecGangData: array expected";
            for (var i = 0; i < message.vecGangData.length; ++i) {
                var error = $root.mahjong_gang_data.verify(message.vecGangData[i]);
                if (error)
                    return "vecGangData." + error;
            }
        }
        if (message.vecHu != null && message.hasOwnProperty("vecHu")) {
            if (!Array.isArray(message.vecHu))
                return "vecHu: array expected";
            for (var i = 0; i < message.vecHu.length; ++i) {
                var error = $root.mahjong_fan_data_v2_2_0.verify(message.vecHu[i]);
                if (error)
                    return "vecHu." + error;
            }
        }
        if (message.vecHued != null && message.hasOwnProperty("vecHued")) {
            if (!Array.isArray(message.vecHued))
                return "vecHued: array expected";
            for (var i = 0; i < message.vecHued.length; ++i) {
                var error = $root.mahjong_fan_data_v2_2_0.verify(message.vecHued[i]);
                if (error)
                    return "vecHued." + error;
            }
        }
        if (message.vecGangPao != null && message.hasOwnProperty("vecGangPao")) {
            if (!Array.isArray(message.vecGangPao))
                return "vecGangPao: array expected";
            for (var i = 0; i < message.vecGangPao.length; ++i) {
                var error = $root.mahjong_fan_data_v2_2_0.verify(message.vecGangPao[i]);
                if (error)
                    return "vecGangPao." + error;
            }
        }
        if (message.vecChaJiao != null && message.hasOwnProperty("vecChaJiao")) {
            if (!Array.isArray(message.vecChaJiao))
                return "vecChaJiao: array expected";
            for (var i = 0; i < message.vecChaJiao.length; ++i) {
                var error = $root.mahjong_fan_data_v2_2_0.verify(message.vecChaJiao[i]);
                if (error)
                    return "vecChaJiao." + error;
            }
        }
        if (message.vecWuJiaoGang != null && message.hasOwnProperty("vecWuJiaoGang")) {
            if (!Array.isArray(message.vecWuJiaoGang))
                return "vecWuJiaoGang: array expected";
            for (var i = 0; i < message.vecWuJiaoGang.length; ++i) {
                var error = $root.mahjong_fan_data_v2_2_0.verify(message.vecWuJiaoGang[i]);
                if (error)
                    return "vecWuJiaoGang." + error;
            }
        }
        if (message.vecHuaZhu != null && message.hasOwnProperty("vecHuaZhu")) {
            if (!Array.isArray(message.vecHuaZhu))
                return "vecHuaZhu: array expected";
            for (var i = 0; i < message.vecHuaZhu.length; ++i) {
                var error = $root.mahjong_fan_data_v2_2_0.verify(message.vecHuaZhu[i]);
                if (error)
                    return "vecHuaZhu." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_st_gameresult_v2_2_0 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_st_gameresult_v2_2_0
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_st_gameresult_v2_2_0} mahjong_st_gameresult_v2_2_0
     */
    mahjong_st_gameresult_v2_2_0.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_st_gameresult_v2_2_0)
            return object;
        var message = new $root.mahjong_st_gameresult_v2_2_0();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.cWonLose != null)
            message.cWonLose = object.cWonLose | 0;
        if (object.nScore != null)
            if ($util.Long)
                (message.nScore = $util.Long.fromValue(object.nScore)).unsigned = false;
            else if (typeof object.nScore === "string")
                message.nScore = parseInt(object.nScore, 10);
            else if (typeof object.nScore === "number")
                message.nScore = object.nScore;
            else if (typeof object.nScore === "object")
                message.nScore = new $util.LongBits(object.nScore.low >>> 0, object.nScore.high >>> 0).toNumber();
        if (object.cChaJiao != null)
            message.cChaJiao = object.cChaJiao | 0;
        if (object.nTax != null)
            message.nTax = object.nTax | 0;
        if (object.vecGangData) {
            if (!Array.isArray(object.vecGangData))
                throw TypeError(".mahjong_st_gameresult_v2_2_0.vecGangData: array expected");
            message.vecGangData = [];
            for (var i = 0; i < object.vecGangData.length; ++i) {
                if (typeof object.vecGangData[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v2_2_0.vecGangData: object expected");
                message.vecGangData[i] = $root.mahjong_gang_data.fromObject(object.vecGangData[i]);
            }
        }
        if (object.vecHu) {
            if (!Array.isArray(object.vecHu))
                throw TypeError(".mahjong_st_gameresult_v2_2_0.vecHu: array expected");
            message.vecHu = [];
            for (var i = 0; i < object.vecHu.length; ++i) {
                if (typeof object.vecHu[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v2_2_0.vecHu: object expected");
                message.vecHu[i] = $root.mahjong_fan_data_v2_2_0.fromObject(object.vecHu[i]);
            }
        }
        if (object.vecHued) {
            if (!Array.isArray(object.vecHued))
                throw TypeError(".mahjong_st_gameresult_v2_2_0.vecHued: array expected");
            message.vecHued = [];
            for (var i = 0; i < object.vecHued.length; ++i) {
                if (typeof object.vecHued[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v2_2_0.vecHued: object expected");
                message.vecHued[i] = $root.mahjong_fan_data_v2_2_0.fromObject(object.vecHued[i]);
            }
        }
        if (object.vecGangPao) {
            if (!Array.isArray(object.vecGangPao))
                throw TypeError(".mahjong_st_gameresult_v2_2_0.vecGangPao: array expected");
            message.vecGangPao = [];
            for (var i = 0; i < object.vecGangPao.length; ++i) {
                if (typeof object.vecGangPao[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v2_2_0.vecGangPao: object expected");
                message.vecGangPao[i] = $root.mahjong_fan_data_v2_2_0.fromObject(object.vecGangPao[i]);
            }
        }
        if (object.vecChaJiao) {
            if (!Array.isArray(object.vecChaJiao))
                throw TypeError(".mahjong_st_gameresult_v2_2_0.vecChaJiao: array expected");
            message.vecChaJiao = [];
            for (var i = 0; i < object.vecChaJiao.length; ++i) {
                if (typeof object.vecChaJiao[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v2_2_0.vecChaJiao: object expected");
                message.vecChaJiao[i] = $root.mahjong_fan_data_v2_2_0.fromObject(object.vecChaJiao[i]);
            }
        }
        if (object.vecWuJiaoGang) {
            if (!Array.isArray(object.vecWuJiaoGang))
                throw TypeError(".mahjong_st_gameresult_v2_2_0.vecWuJiaoGang: array expected");
            message.vecWuJiaoGang = [];
            for (var i = 0; i < object.vecWuJiaoGang.length; ++i) {
                if (typeof object.vecWuJiaoGang[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v2_2_0.vecWuJiaoGang: object expected");
                message.vecWuJiaoGang[i] = $root.mahjong_fan_data_v2_2_0.fromObject(object.vecWuJiaoGang[i]);
            }
        }
        if (object.vecHuaZhu) {
            if (!Array.isArray(object.vecHuaZhu))
                throw TypeError(".mahjong_st_gameresult_v2_2_0.vecHuaZhu: array expected");
            message.vecHuaZhu = [];
            for (var i = 0; i < object.vecHuaZhu.length; ++i) {
                if (typeof object.vecHuaZhu[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v2_2_0.vecHuaZhu: object expected");
                message.vecHuaZhu[i] = $root.mahjong_fan_data_v2_2_0.fromObject(object.vecHuaZhu[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_st_gameresult_v2_2_0 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_st_gameresult_v2_2_0
     * @static
     * @param {mahjong_st_gameresult_v2_2_0} message mahjong_st_gameresult_v2_2_0
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_st_gameresult_v2_2_0.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecGangData = [];
            object.vecHu = [];
            object.vecHued = [];
            object.vecGangPao = [];
            object.vecChaJiao = [];
            object.vecWuJiaoGang = [];
            object.vecHuaZhu = [];
        }
        if (options.defaults) {
            object.cChairID = 0;
            object.cWonLose = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.nScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.nScore = options.longs === String ? "0" : 0;
            object.cChaJiao = 0;
            object.nTax = 0;
        }
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.cWonLose != null && message.hasOwnProperty("cWonLose"))
            object.cWonLose = message.cWonLose;
        if (message.nScore != null && message.hasOwnProperty("nScore"))
            if (typeof message.nScore === "number")
                object.nScore = options.longs === String ? String(message.nScore) : message.nScore;
            else
                object.nScore = options.longs === String ? $util.Long.prototype.toString.call(message.nScore) : options.longs === Number ? new $util.LongBits(message.nScore.low >>> 0, message.nScore.high >>> 0).toNumber() : message.nScore;
        if (message.cChaJiao != null && message.hasOwnProperty("cChaJiao"))
            object.cChaJiao = message.cChaJiao;
        if (message.nTax != null && message.hasOwnProperty("nTax"))
            object.nTax = message.nTax;
        if (message.vecGangData && message.vecGangData.length) {
            object.vecGangData = [];
            for (var j = 0; j < message.vecGangData.length; ++j)
                object.vecGangData[j] = $root.mahjong_gang_data.toObject(message.vecGangData[j], options);
        }
        if (message.vecHu && message.vecHu.length) {
            object.vecHu = [];
            for (var j = 0; j < message.vecHu.length; ++j)
                object.vecHu[j] = $root.mahjong_fan_data_v2_2_0.toObject(message.vecHu[j], options);
        }
        if (message.vecHued && message.vecHued.length) {
            object.vecHued = [];
            for (var j = 0; j < message.vecHued.length; ++j)
                object.vecHued[j] = $root.mahjong_fan_data_v2_2_0.toObject(message.vecHued[j], options);
        }
        if (message.vecGangPao && message.vecGangPao.length) {
            object.vecGangPao = [];
            for (var j = 0; j < message.vecGangPao.length; ++j)
                object.vecGangPao[j] = $root.mahjong_fan_data_v2_2_0.toObject(message.vecGangPao[j], options);
        }
        if (message.vecChaJiao && message.vecChaJiao.length) {
            object.vecChaJiao = [];
            for (var j = 0; j < message.vecChaJiao.length; ++j)
                object.vecChaJiao[j] = $root.mahjong_fan_data_v2_2_0.toObject(message.vecChaJiao[j], options);
        }
        if (message.vecWuJiaoGang && message.vecWuJiaoGang.length) {
            object.vecWuJiaoGang = [];
            for (var j = 0; j < message.vecWuJiaoGang.length; ++j)
                object.vecWuJiaoGang[j] = $root.mahjong_fan_data_v2_2_0.toObject(message.vecWuJiaoGang[j], options);
        }
        if (message.vecHuaZhu && message.vecHuaZhu.length) {
            object.vecHuaZhu = [];
            for (var j = 0; j < message.vecHuaZhu.length; ++j)
                object.vecHuaZhu[j] = $root.mahjong_fan_data_v2_2_0.toObject(message.vecHuaZhu[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_st_gameresult_v2_2_0 to JSON.
     * @function toJSON
     * @memberof mahjong_st_gameresult_v2_2_0
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_st_gameresult_v2_2_0.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_st_gameresult_v2_2_0;
})();

$root.mahjong_svr_fake_score_not = (function() {

    /**
     * Properties of a mahjong_svr_fake_score_not.
     * @exports Imahjong_svr_fake_score_not
     * @interface Imahjong_svr_fake_score_not
     * @property {Array.<number|Long>|null} [scores] mahjong_svr_fake_score_not scores
     */

    /**
     * Constructs a new mahjong_svr_fake_score_not.
     * @exports mahjong_svr_fake_score_not
     * @classdesc Represents a mahjong_svr_fake_score_not.
     * @implements Imahjong_svr_fake_score_not
     * @constructor
     * @param {Imahjong_svr_fake_score_not=} [properties] Properties to set
     */
    function mahjong_svr_fake_score_not(properties) {
        this.scores = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_svr_fake_score_not scores.
     * @member {Array.<number|Long>} scores
     * @memberof mahjong_svr_fake_score_not
     * @instance
     */
    mahjong_svr_fake_score_not.prototype.scores = $util.emptyArray;

    /**
     * Creates a new mahjong_svr_fake_score_not instance using the specified properties.
     * @function create
     * @memberof mahjong_svr_fake_score_not
     * @static
     * @param {Imahjong_svr_fake_score_not=} [properties] Properties to set
     * @returns {mahjong_svr_fake_score_not} mahjong_svr_fake_score_not instance
     */
    mahjong_svr_fake_score_not.create = function create(properties) {
        return new mahjong_svr_fake_score_not(properties);
    };

    /**
     * Encodes the specified mahjong_svr_fake_score_not message. Does not implicitly {@link mahjong_svr_fake_score_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_svr_fake_score_not
     * @static
     * @param {Imahjong_svr_fake_score_not} message mahjong_svr_fake_score_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_fake_score_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.scores != null && message.scores.length)
            for (var i = 0; i < message.scores.length; ++i)
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.scores[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_svr_fake_score_not message, length delimited. Does not implicitly {@link mahjong_svr_fake_score_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_svr_fake_score_not
     * @static
     * @param {Imahjong_svr_fake_score_not} message mahjong_svr_fake_score_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_fake_score_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_svr_fake_score_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_svr_fake_score_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_svr_fake_score_not} mahjong_svr_fake_score_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_fake_score_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_svr_fake_score_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.scores && message.scores.length))
                    message.scores = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.scores.push(reader.int64());
                } else
                    message.scores.push(reader.int64());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_svr_fake_score_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_svr_fake_score_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_svr_fake_score_not} mahjong_svr_fake_score_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_fake_score_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_svr_fake_score_not message.
     * @function verify
     * @memberof mahjong_svr_fake_score_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_svr_fake_score_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.scores != null && message.hasOwnProperty("scores")) {
            if (!Array.isArray(message.scores))
                return "scores: array expected";
            for (var i = 0; i < message.scores.length; ++i)
                if (!$util.isInteger(message.scores[i]) && !(message.scores[i] && $util.isInteger(message.scores[i].low) && $util.isInteger(message.scores[i].high)))
                    return "scores: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_svr_fake_score_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_svr_fake_score_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_svr_fake_score_not} mahjong_svr_fake_score_not
     */
    mahjong_svr_fake_score_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_svr_fake_score_not)
            return object;
        var message = new $root.mahjong_svr_fake_score_not();
        if (object.scores) {
            if (!Array.isArray(object.scores))
                throw TypeError(".mahjong_svr_fake_score_not.scores: array expected");
            message.scores = [];
            for (var i = 0; i < object.scores.length; ++i)
                if ($util.Long)
                    (message.scores[i] = $util.Long.fromValue(object.scores[i])).unsigned = false;
                else if (typeof object.scores[i] === "string")
                    message.scores[i] = parseInt(object.scores[i], 10);
                else if (typeof object.scores[i] === "number")
                    message.scores[i] = object.scores[i];
                else if (typeof object.scores[i] === "object")
                    message.scores[i] = new $util.LongBits(object.scores[i].low >>> 0, object.scores[i].high >>> 0).toNumber();
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_svr_fake_score_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_svr_fake_score_not
     * @static
     * @param {mahjong_svr_fake_score_not} message mahjong_svr_fake_score_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_svr_fake_score_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.scores = [];
        if (message.scores && message.scores.length) {
            object.scores = [];
            for (var j = 0; j < message.scores.length; ++j)
                if (typeof message.scores[j] === "number")
                    object.scores[j] = options.longs === String ? String(message.scores[j]) : message.scores[j];
                else
                    object.scores[j] = options.longs === String ? $util.Long.prototype.toString.call(message.scores[j]) : options.longs === Number ? new $util.LongBits(message.scores[j].low >>> 0, message.scores[j].high >>> 0).toNumber() : message.scores[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_svr_fake_score_not to JSON.
     * @function toJSON
     * @memberof mahjong_svr_fake_score_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_svr_fake_score_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_svr_fake_score_not;
})();

$root.mahjong_get_mj_private_room_result_req = (function() {

    /**
     * Properties of a mahjong_get_mj_private_room_result_req.
     * @exports Imahjong_get_mj_private_room_result_req
     * @interface Imahjong_get_mj_private_room_result_req
     */

    /**
     * Constructs a new mahjong_get_mj_private_room_result_req.
     * @exports mahjong_get_mj_private_room_result_req
     * @classdesc Represents a mahjong_get_mj_private_room_result_req.
     * @implements Imahjong_get_mj_private_room_result_req
     * @constructor
     * @param {Imahjong_get_mj_private_room_result_req=} [properties] Properties to set
     */
    function mahjong_get_mj_private_room_result_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_get_mj_private_room_result_req instance using the specified properties.
     * @function create
     * @memberof mahjong_get_mj_private_room_result_req
     * @static
     * @param {Imahjong_get_mj_private_room_result_req=} [properties] Properties to set
     * @returns {mahjong_get_mj_private_room_result_req} mahjong_get_mj_private_room_result_req instance
     */
    mahjong_get_mj_private_room_result_req.create = function create(properties) {
        return new mahjong_get_mj_private_room_result_req(properties);
    };

    /**
     * Encodes the specified mahjong_get_mj_private_room_result_req message. Does not implicitly {@link mahjong_get_mj_private_room_result_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_get_mj_private_room_result_req
     * @static
     * @param {Imahjong_get_mj_private_room_result_req} message mahjong_get_mj_private_room_result_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_get_mj_private_room_result_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_get_mj_private_room_result_req message, length delimited. Does not implicitly {@link mahjong_get_mj_private_room_result_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_get_mj_private_room_result_req
     * @static
     * @param {Imahjong_get_mj_private_room_result_req} message mahjong_get_mj_private_room_result_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_get_mj_private_room_result_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_get_mj_private_room_result_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_get_mj_private_room_result_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_get_mj_private_room_result_req} mahjong_get_mj_private_room_result_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_get_mj_private_room_result_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_get_mj_private_room_result_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_get_mj_private_room_result_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_get_mj_private_room_result_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_get_mj_private_room_result_req} mahjong_get_mj_private_room_result_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_get_mj_private_room_result_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_get_mj_private_room_result_req message.
     * @function verify
     * @memberof mahjong_get_mj_private_room_result_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_get_mj_private_room_result_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_get_mj_private_room_result_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_get_mj_private_room_result_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_get_mj_private_room_result_req} mahjong_get_mj_private_room_result_req
     */
    mahjong_get_mj_private_room_result_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_get_mj_private_room_result_req)
            return object;
        return new $root.mahjong_get_mj_private_room_result_req();
    };

    /**
     * Creates a plain object from a mahjong_get_mj_private_room_result_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_get_mj_private_room_result_req
     * @static
     * @param {mahjong_get_mj_private_room_result_req} message mahjong_get_mj_private_room_result_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_get_mj_private_room_result_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_get_mj_private_room_result_req to JSON.
     * @function toJSON
     * @memberof mahjong_get_mj_private_room_result_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_get_mj_private_room_result_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_get_mj_private_room_result_req;
})();

$root.mahjong_mj_dingque_req = (function() {

    /**
     * Properties of a mahjong_mj_dingque_req.
     * @exports Imahjong_mj_dingque_req
     * @interface Imahjong_mj_dingque_req
     * @property {number} nTimer mahjong_mj_dingque_req nTimer
     * @property {number} sSerialID mahjong_mj_dingque_req sSerialID
     * @property {number} cQueType mahjong_mj_dingque_req cQueType
     */

    /**
     * Constructs a new mahjong_mj_dingque_req.
     * @exports mahjong_mj_dingque_req
     * @classdesc Represents a mahjong_mj_dingque_req.
     * @implements Imahjong_mj_dingque_req
     * @constructor
     * @param {Imahjong_mj_dingque_req=} [properties] Properties to set
     */
    function mahjong_mj_dingque_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_dingque_req nTimer.
     * @member {number} nTimer
     * @memberof mahjong_mj_dingque_req
     * @instance
     */
    mahjong_mj_dingque_req.prototype.nTimer = 0;

    /**
     * mahjong_mj_dingque_req sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_mj_dingque_req
     * @instance
     */
    mahjong_mj_dingque_req.prototype.sSerialID = 0;

    /**
     * mahjong_mj_dingque_req cQueType.
     * @member {number} cQueType
     * @memberof mahjong_mj_dingque_req
     * @instance
     */
    mahjong_mj_dingque_req.prototype.cQueType = 0;

    /**
     * Creates a new mahjong_mj_dingque_req instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_dingque_req
     * @static
     * @param {Imahjong_mj_dingque_req=} [properties] Properties to set
     * @returns {mahjong_mj_dingque_req} mahjong_mj_dingque_req instance
     */
    mahjong_mj_dingque_req.create = function create(properties) {
        return new mahjong_mj_dingque_req(properties);
    };

    /**
     * Encodes the specified mahjong_mj_dingque_req message. Does not implicitly {@link mahjong_mj_dingque_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_dingque_req
     * @static
     * @param {Imahjong_mj_dingque_req} message mahjong_mj_dingque_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_dingque_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nTimer);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sSerialID);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cQueType);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_dingque_req message, length delimited. Does not implicitly {@link mahjong_mj_dingque_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_dingque_req
     * @static
     * @param {Imahjong_mj_dingque_req} message mahjong_mj_dingque_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_dingque_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_dingque_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_dingque_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_dingque_req} mahjong_mj_dingque_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_dingque_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_dingque_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nTimer = reader.int32();
                break;
            case 2:
                message.sSerialID = reader.int32();
                break;
            case 3:
                message.cQueType = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nTimer"))
            throw $util.ProtocolError("missing required 'nTimer'", { instance: message });
        if (!message.hasOwnProperty("sSerialID"))
            throw $util.ProtocolError("missing required 'sSerialID'", { instance: message });
        if (!message.hasOwnProperty("cQueType"))
            throw $util.ProtocolError("missing required 'cQueType'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_dingque_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_dingque_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_dingque_req} mahjong_mj_dingque_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_dingque_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_dingque_req message.
     * @function verify
     * @memberof mahjong_mj_dingque_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_dingque_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nTimer))
            return "nTimer: integer expected";
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        if (!$util.isInteger(message.cQueType))
            return "cQueType: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_dingque_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_dingque_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_dingque_req} mahjong_mj_dingque_req
     */
    mahjong_mj_dingque_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_dingque_req)
            return object;
        var message = new $root.mahjong_mj_dingque_req();
        if (object.nTimer != null)
            message.nTimer = object.nTimer | 0;
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        if (object.cQueType != null)
            message.cQueType = object.cQueType | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_dingque_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_dingque_req
     * @static
     * @param {mahjong_mj_dingque_req} message mahjong_mj_dingque_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_dingque_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nTimer = 0;
            object.sSerialID = 0;
            object.cQueType = 0;
        }
        if (message.nTimer != null && message.hasOwnProperty("nTimer"))
            object.nTimer = message.nTimer;
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        if (message.cQueType != null && message.hasOwnProperty("cQueType"))
            object.cQueType = message.cQueType;
        return object;
    };

    /**
     * Converts this mahjong_mj_dingque_req to JSON.
     * @function toJSON
     * @memberof mahjong_mj_dingque_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_dingque_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_dingque_req;
})();

$root.mahjong_mj_playcard_req = (function() {

    /**
     * Properties of a mahjong_mj_playcard_req.
     * @exports Imahjong_mj_playcard_req
     * @interface Imahjong_mj_playcard_req
     * @property {number} chairId mahjong_mj_playcard_req chairId
     * @property {number} nOpcode mahjong_mj_playcard_req nOpcode
     * @property {number} cPrevCard mahjong_mj_playcard_req cPrevCard
     * @property {Array.<number>|null} [vecTingPutCards] mahjong_mj_playcard_req vecTingPutCards
     * @property {Array.<number>|null} [vecTingHuCards] mahjong_mj_playcard_req vecTingHuCards
     * @property {Array.<number>|null} [vecGangCards] mahjong_mj_playcard_req vecGangCards
     * @property {number} sSerialID mahjong_mj_playcard_req sSerialID
     */

    /**
     * Constructs a new mahjong_mj_playcard_req.
     * @exports mahjong_mj_playcard_req
     * @classdesc Represents a mahjong_mj_playcard_req.
     * @implements Imahjong_mj_playcard_req
     * @constructor
     * @param {Imahjong_mj_playcard_req=} [properties] Properties to set
     */
    function mahjong_mj_playcard_req(properties) {
        this.vecTingPutCards = [];
        this.vecTingHuCards = [];
        this.vecGangCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_playcard_req chairId.
     * @member {number} chairId
     * @memberof mahjong_mj_playcard_req
     * @instance
     */
    mahjong_mj_playcard_req.prototype.chairId = 0;

    /**
     * mahjong_mj_playcard_req nOpcode.
     * @member {number} nOpcode
     * @memberof mahjong_mj_playcard_req
     * @instance
     */
    mahjong_mj_playcard_req.prototype.nOpcode = 0;

    /**
     * mahjong_mj_playcard_req cPrevCard.
     * @member {number} cPrevCard
     * @memberof mahjong_mj_playcard_req
     * @instance
     */
    mahjong_mj_playcard_req.prototype.cPrevCard = 0;

    /**
     * mahjong_mj_playcard_req vecTingPutCards.
     * @member {Array.<number>} vecTingPutCards
     * @memberof mahjong_mj_playcard_req
     * @instance
     */
    mahjong_mj_playcard_req.prototype.vecTingPutCards = $util.emptyArray;

    /**
     * mahjong_mj_playcard_req vecTingHuCards.
     * @member {Array.<number>} vecTingHuCards
     * @memberof mahjong_mj_playcard_req
     * @instance
     */
    mahjong_mj_playcard_req.prototype.vecTingHuCards = $util.emptyArray;

    /**
     * mahjong_mj_playcard_req vecGangCards.
     * @member {Array.<number>} vecGangCards
     * @memberof mahjong_mj_playcard_req
     * @instance
     */
    mahjong_mj_playcard_req.prototype.vecGangCards = $util.emptyArray;

    /**
     * mahjong_mj_playcard_req sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_mj_playcard_req
     * @instance
     */
    mahjong_mj_playcard_req.prototype.sSerialID = 0;

    /**
     * Creates a new mahjong_mj_playcard_req instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_playcard_req
     * @static
     * @param {Imahjong_mj_playcard_req=} [properties] Properties to set
     * @returns {mahjong_mj_playcard_req} mahjong_mj_playcard_req instance
     */
    mahjong_mj_playcard_req.create = function create(properties) {
        return new mahjong_mj_playcard_req(properties);
    };

    /**
     * Encodes the specified mahjong_mj_playcard_req message. Does not implicitly {@link mahjong_mj_playcard_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_playcard_req
     * @static
     * @param {Imahjong_mj_playcard_req} message mahjong_mj_playcard_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_playcard_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nOpcode);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cPrevCard);
        if (message.vecTingPutCards != null && message.vecTingPutCards.length)
            for (var i = 0; i < message.vecTingPutCards.length; ++i)
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.vecTingPutCards[i]);
        if (message.vecTingHuCards != null && message.vecTingHuCards.length)
            for (var i = 0; i < message.vecTingHuCards.length; ++i)
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.vecTingHuCards[i]);
        if (message.vecGangCards != null && message.vecGangCards.length)
            for (var i = 0; i < message.vecGangCards.length; ++i)
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.vecGangCards[i]);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.sSerialID);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_playcard_req message, length delimited. Does not implicitly {@link mahjong_mj_playcard_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_playcard_req
     * @static
     * @param {Imahjong_mj_playcard_req} message mahjong_mj_playcard_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_playcard_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_playcard_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_playcard_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_playcard_req} mahjong_mj_playcard_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_playcard_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_playcard_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.chairId = reader.int32();
                break;
            case 2:
                message.nOpcode = reader.int32();
                break;
            case 3:
                message.cPrevCard = reader.int32();
                break;
            case 4:
                if (!(message.vecTingPutCards && message.vecTingPutCards.length))
                    message.vecTingPutCards = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecTingPutCards.push(reader.int32());
                } else
                    message.vecTingPutCards.push(reader.int32());
                break;
            case 5:
                if (!(message.vecTingHuCards && message.vecTingHuCards.length))
                    message.vecTingHuCards = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecTingHuCards.push(reader.int32());
                } else
                    message.vecTingHuCards.push(reader.int32());
                break;
            case 6:
                if (!(message.vecGangCards && message.vecGangCards.length))
                    message.vecGangCards = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecGangCards.push(reader.int32());
                } else
                    message.vecGangCards.push(reader.int32());
                break;
            case 7:
                message.sSerialID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("chairId"))
            throw $util.ProtocolError("missing required 'chairId'", { instance: message });
        if (!message.hasOwnProperty("nOpcode"))
            throw $util.ProtocolError("missing required 'nOpcode'", { instance: message });
        if (!message.hasOwnProperty("cPrevCard"))
            throw $util.ProtocolError("missing required 'cPrevCard'", { instance: message });
        if (!message.hasOwnProperty("sSerialID"))
            throw $util.ProtocolError("missing required 'sSerialID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_playcard_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_playcard_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_playcard_req} mahjong_mj_playcard_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_playcard_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_playcard_req message.
     * @function verify
     * @memberof mahjong_mj_playcard_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_playcard_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.chairId))
            return "chairId: integer expected";
        if (!$util.isInteger(message.nOpcode))
            return "nOpcode: integer expected";
        if (!$util.isInteger(message.cPrevCard))
            return "cPrevCard: integer expected";
        if (message.vecTingPutCards != null && message.hasOwnProperty("vecTingPutCards")) {
            if (!Array.isArray(message.vecTingPutCards))
                return "vecTingPutCards: array expected";
            for (var i = 0; i < message.vecTingPutCards.length; ++i)
                if (!$util.isInteger(message.vecTingPutCards[i]))
                    return "vecTingPutCards: integer[] expected";
        }
        if (message.vecTingHuCards != null && message.hasOwnProperty("vecTingHuCards")) {
            if (!Array.isArray(message.vecTingHuCards))
                return "vecTingHuCards: array expected";
            for (var i = 0; i < message.vecTingHuCards.length; ++i)
                if (!$util.isInteger(message.vecTingHuCards[i]))
                    return "vecTingHuCards: integer[] expected";
        }
        if (message.vecGangCards != null && message.hasOwnProperty("vecGangCards")) {
            if (!Array.isArray(message.vecGangCards))
                return "vecGangCards: array expected";
            for (var i = 0; i < message.vecGangCards.length; ++i)
                if (!$util.isInteger(message.vecGangCards[i]))
                    return "vecGangCards: integer[] expected";
        }
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_playcard_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_playcard_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_playcard_req} mahjong_mj_playcard_req
     */
    mahjong_mj_playcard_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_playcard_req)
            return object;
        var message = new $root.mahjong_mj_playcard_req();
        if (object.chairId != null)
            message.chairId = object.chairId | 0;
        if (object.nOpcode != null)
            message.nOpcode = object.nOpcode | 0;
        if (object.cPrevCard != null)
            message.cPrevCard = object.cPrevCard | 0;
        if (object.vecTingPutCards) {
            if (!Array.isArray(object.vecTingPutCards))
                throw TypeError(".mahjong_mj_playcard_req.vecTingPutCards: array expected");
            message.vecTingPutCards = [];
            for (var i = 0; i < object.vecTingPutCards.length; ++i)
                message.vecTingPutCards[i] = object.vecTingPutCards[i] | 0;
        }
        if (object.vecTingHuCards) {
            if (!Array.isArray(object.vecTingHuCards))
                throw TypeError(".mahjong_mj_playcard_req.vecTingHuCards: array expected");
            message.vecTingHuCards = [];
            for (var i = 0; i < object.vecTingHuCards.length; ++i)
                message.vecTingHuCards[i] = object.vecTingHuCards[i] | 0;
        }
        if (object.vecGangCards) {
            if (!Array.isArray(object.vecGangCards))
                throw TypeError(".mahjong_mj_playcard_req.vecGangCards: array expected");
            message.vecGangCards = [];
            for (var i = 0; i < object.vecGangCards.length; ++i)
                message.vecGangCards[i] = object.vecGangCards[i] | 0;
        }
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_playcard_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_playcard_req
     * @static
     * @param {mahjong_mj_playcard_req} message mahjong_mj_playcard_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_playcard_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecTingPutCards = [];
            object.vecTingHuCards = [];
            object.vecGangCards = [];
        }
        if (options.defaults) {
            object.chairId = 0;
            object.nOpcode = 0;
            object.cPrevCard = 0;
            object.sSerialID = 0;
        }
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            object.chairId = message.chairId;
        if (message.nOpcode != null && message.hasOwnProperty("nOpcode"))
            object.nOpcode = message.nOpcode;
        if (message.cPrevCard != null && message.hasOwnProperty("cPrevCard"))
            object.cPrevCard = message.cPrevCard;
        if (message.vecTingPutCards && message.vecTingPutCards.length) {
            object.vecTingPutCards = [];
            for (var j = 0; j < message.vecTingPutCards.length; ++j)
                object.vecTingPutCards[j] = message.vecTingPutCards[j];
        }
        if (message.vecTingHuCards && message.vecTingHuCards.length) {
            object.vecTingHuCards = [];
            for (var j = 0; j < message.vecTingHuCards.length; ++j)
                object.vecTingHuCards[j] = message.vecTingHuCards[j];
        }
        if (message.vecGangCards && message.vecGangCards.length) {
            object.vecGangCards = [];
            for (var j = 0; j < message.vecGangCards.length; ++j)
                object.vecGangCards[j] = message.vecGangCards[j];
        }
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        return object;
    };

    /**
     * Converts this mahjong_mj_playcard_req to JSON.
     * @function toJSON
     * @memberof mahjong_mj_playcard_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_playcard_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_playcard_req;
})();

$root.mahjong_cg_get_redpackets_award_req = (function() {

    /**
     * Properties of a mahjong_cg_get_redpackets_award_req.
     * @exports Imahjong_cg_get_redpackets_award_req
     * @interface Imahjong_cg_get_redpackets_award_req
     * @property {number} type mahjong_cg_get_redpackets_award_req type
     */

    /**
     * Constructs a new mahjong_cg_get_redpackets_award_req.
     * @exports mahjong_cg_get_redpackets_award_req
     * @classdesc Represents a mahjong_cg_get_redpackets_award_req.
     * @implements Imahjong_cg_get_redpackets_award_req
     * @constructor
     * @param {Imahjong_cg_get_redpackets_award_req=} [properties] Properties to set
     */
    function mahjong_cg_get_redpackets_award_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_cg_get_redpackets_award_req type.
     * @member {number} type
     * @memberof mahjong_cg_get_redpackets_award_req
     * @instance
     */
    mahjong_cg_get_redpackets_award_req.prototype.type = 0;

    /**
     * Creates a new mahjong_cg_get_redpackets_award_req instance using the specified properties.
     * @function create
     * @memberof mahjong_cg_get_redpackets_award_req
     * @static
     * @param {Imahjong_cg_get_redpackets_award_req=} [properties] Properties to set
     * @returns {mahjong_cg_get_redpackets_award_req} mahjong_cg_get_redpackets_award_req instance
     */
    mahjong_cg_get_redpackets_award_req.create = function create(properties) {
        return new mahjong_cg_get_redpackets_award_req(properties);
    };

    /**
     * Encodes the specified mahjong_cg_get_redpackets_award_req message. Does not implicitly {@link mahjong_cg_get_redpackets_award_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_cg_get_redpackets_award_req
     * @static
     * @param {Imahjong_cg_get_redpackets_award_req} message mahjong_cg_get_redpackets_award_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_cg_get_redpackets_award_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        return writer;
    };

    /**
     * Encodes the specified mahjong_cg_get_redpackets_award_req message, length delimited. Does not implicitly {@link mahjong_cg_get_redpackets_award_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_cg_get_redpackets_award_req
     * @static
     * @param {Imahjong_cg_get_redpackets_award_req} message mahjong_cg_get_redpackets_award_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_cg_get_redpackets_award_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_cg_get_redpackets_award_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_cg_get_redpackets_award_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_cg_get_redpackets_award_req} mahjong_cg_get_redpackets_award_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_cg_get_redpackets_award_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_cg_get_redpackets_award_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_cg_get_redpackets_award_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_cg_get_redpackets_award_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_cg_get_redpackets_award_req} mahjong_cg_get_redpackets_award_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_cg_get_redpackets_award_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_cg_get_redpackets_award_req message.
     * @function verify
     * @memberof mahjong_cg_get_redpackets_award_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_cg_get_redpackets_award_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.type))
            return "type: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_cg_get_redpackets_award_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_cg_get_redpackets_award_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_cg_get_redpackets_award_req} mahjong_cg_get_redpackets_award_req
     */
    mahjong_cg_get_redpackets_award_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_cg_get_redpackets_award_req)
            return object;
        var message = new $root.mahjong_cg_get_redpackets_award_req();
        if (object.type != null)
            message.type = object.type | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_cg_get_redpackets_award_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_cg_get_redpackets_award_req
     * @static
     * @param {mahjong_cg_get_redpackets_award_req} message mahjong_cg_get_redpackets_award_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_cg_get_redpackets_award_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.type = 0;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        return object;
    };

    /**
     * Converts this mahjong_cg_get_redpackets_award_req to JSON.
     * @function toJSON
     * @memberof mahjong_cg_get_redpackets_award_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_cg_get_redpackets_award_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_cg_get_redpackets_award_req;
})();

$root.mahjong_mj_gameresult_not_v1_1_0 = (function() {

    /**
     * Properties of a mahjong_mj_gameresult_not_v1_1_0.
     * @exports Imahjong_mj_gameresult_not_v1_1_0
     * @interface Imahjong_mj_gameresult_not_v1_1_0
     * @property {Array.<Imahjong_st_gameresult_v1_1_0>|null} [vecGameResult] mahjong_mj_gameresult_not_v1_1_0 vecGameResult
     */

    /**
     * Constructs a new mahjong_mj_gameresult_not_v1_1_0.
     * @exports mahjong_mj_gameresult_not_v1_1_0
     * @classdesc Represents a mahjong_mj_gameresult_not_v1_1_0.
     * @implements Imahjong_mj_gameresult_not_v1_1_0
     * @constructor
     * @param {Imahjong_mj_gameresult_not_v1_1_0=} [properties] Properties to set
     */
    function mahjong_mj_gameresult_not_v1_1_0(properties) {
        this.vecGameResult = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_gameresult_not_v1_1_0 vecGameResult.
     * @member {Array.<Imahjong_st_gameresult_v1_1_0>} vecGameResult
     * @memberof mahjong_mj_gameresult_not_v1_1_0
     * @instance
     */
    mahjong_mj_gameresult_not_v1_1_0.prototype.vecGameResult = $util.emptyArray;

    /**
     * Creates a new mahjong_mj_gameresult_not_v1_1_0 instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_gameresult_not_v1_1_0
     * @static
     * @param {Imahjong_mj_gameresult_not_v1_1_0=} [properties] Properties to set
     * @returns {mahjong_mj_gameresult_not_v1_1_0} mahjong_mj_gameresult_not_v1_1_0 instance
     */
    mahjong_mj_gameresult_not_v1_1_0.create = function create(properties) {
        return new mahjong_mj_gameresult_not_v1_1_0(properties);
    };

    /**
     * Encodes the specified mahjong_mj_gameresult_not_v1_1_0 message. Does not implicitly {@link mahjong_mj_gameresult_not_v1_1_0.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_gameresult_not_v1_1_0
     * @static
     * @param {Imahjong_mj_gameresult_not_v1_1_0} message mahjong_mj_gameresult_not_v1_1_0 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_gameresult_not_v1_1_0.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vecGameResult != null && message.vecGameResult.length)
            for (var i = 0; i < message.vecGameResult.length; ++i)
                $root.mahjong_st_gameresult_v1_1_0.encode(message.vecGameResult[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_gameresult_not_v1_1_0 message, length delimited. Does not implicitly {@link mahjong_mj_gameresult_not_v1_1_0.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_gameresult_not_v1_1_0
     * @static
     * @param {Imahjong_mj_gameresult_not_v1_1_0} message mahjong_mj_gameresult_not_v1_1_0 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_gameresult_not_v1_1_0.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_gameresult_not_v1_1_0 message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_gameresult_not_v1_1_0
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_gameresult_not_v1_1_0} mahjong_mj_gameresult_not_v1_1_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_gameresult_not_v1_1_0.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_gameresult_not_v1_1_0();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.vecGameResult && message.vecGameResult.length))
                    message.vecGameResult = [];
                message.vecGameResult.push($root.mahjong_st_gameresult_v1_1_0.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_mj_gameresult_not_v1_1_0 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_gameresult_not_v1_1_0
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_gameresult_not_v1_1_0} mahjong_mj_gameresult_not_v1_1_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_gameresult_not_v1_1_0.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_gameresult_not_v1_1_0 message.
     * @function verify
     * @memberof mahjong_mj_gameresult_not_v1_1_0
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_gameresult_not_v1_1_0.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.vecGameResult != null && message.hasOwnProperty("vecGameResult")) {
            if (!Array.isArray(message.vecGameResult))
                return "vecGameResult: array expected";
            for (var i = 0; i < message.vecGameResult.length; ++i) {
                var error = $root.mahjong_st_gameresult_v1_1_0.verify(message.vecGameResult[i]);
                if (error)
                    return "vecGameResult." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_mj_gameresult_not_v1_1_0 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_gameresult_not_v1_1_0
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_gameresult_not_v1_1_0} mahjong_mj_gameresult_not_v1_1_0
     */
    mahjong_mj_gameresult_not_v1_1_0.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_gameresult_not_v1_1_0)
            return object;
        var message = new $root.mahjong_mj_gameresult_not_v1_1_0();
        if (object.vecGameResult) {
            if (!Array.isArray(object.vecGameResult))
                throw TypeError(".mahjong_mj_gameresult_not_v1_1_0.vecGameResult: array expected");
            message.vecGameResult = [];
            for (var i = 0; i < object.vecGameResult.length; ++i) {
                if (typeof object.vecGameResult[i] !== "object")
                    throw TypeError(".mahjong_mj_gameresult_not_v1_1_0.vecGameResult: object expected");
                message.vecGameResult[i] = $root.mahjong_st_gameresult_v1_1_0.fromObject(object.vecGameResult[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_gameresult_not_v1_1_0 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_gameresult_not_v1_1_0
     * @static
     * @param {mahjong_mj_gameresult_not_v1_1_0} message mahjong_mj_gameresult_not_v1_1_0
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_gameresult_not_v1_1_0.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecGameResult = [];
        if (message.vecGameResult && message.vecGameResult.length) {
            object.vecGameResult = [];
            for (var j = 0; j < message.vecGameResult.length; ++j)
                object.vecGameResult[j] = $root.mahjong_st_gameresult_v1_1_0.toObject(message.vecGameResult[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_mj_gameresult_not_v1_1_0 to JSON.
     * @function toJSON
     * @memberof mahjong_mj_gameresult_not_v1_1_0
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_gameresult_not_v1_1_0.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_gameresult_not_v1_1_0;
})();

$root.mahjong_mj_private_room_result_not = (function() {

    /**
     * Properties of a mahjong_mj_private_room_result_not.
     * @exports Imahjong_mj_private_room_result_not
     * @interface Imahjong_mj_private_room_result_not
     * @property {Array.<Imahjong_GameStatisc>|null} [vecGameStatiscs] mahjong_mj_private_room_result_not vecGameStatiscs
     */

    /**
     * Constructs a new mahjong_mj_private_room_result_not.
     * @exports mahjong_mj_private_room_result_not
     * @classdesc Represents a mahjong_mj_private_room_result_not.
     * @implements Imahjong_mj_private_room_result_not
     * @constructor
     * @param {Imahjong_mj_private_room_result_not=} [properties] Properties to set
     */
    function mahjong_mj_private_room_result_not(properties) {
        this.vecGameStatiscs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_private_room_result_not vecGameStatiscs.
     * @member {Array.<Imahjong_GameStatisc>} vecGameStatiscs
     * @memberof mahjong_mj_private_room_result_not
     * @instance
     */
    mahjong_mj_private_room_result_not.prototype.vecGameStatiscs = $util.emptyArray;

    /**
     * Creates a new mahjong_mj_private_room_result_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_private_room_result_not
     * @static
     * @param {Imahjong_mj_private_room_result_not=} [properties] Properties to set
     * @returns {mahjong_mj_private_room_result_not} mahjong_mj_private_room_result_not instance
     */
    mahjong_mj_private_room_result_not.create = function create(properties) {
        return new mahjong_mj_private_room_result_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_private_room_result_not message. Does not implicitly {@link mahjong_mj_private_room_result_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_private_room_result_not
     * @static
     * @param {Imahjong_mj_private_room_result_not} message mahjong_mj_private_room_result_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_private_room_result_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vecGameStatiscs != null && message.vecGameStatiscs.length)
            for (var i = 0; i < message.vecGameStatiscs.length; ++i)
                $root.mahjong_GameStatisc.encode(message.vecGameStatiscs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_private_room_result_not message, length delimited. Does not implicitly {@link mahjong_mj_private_room_result_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_private_room_result_not
     * @static
     * @param {Imahjong_mj_private_room_result_not} message mahjong_mj_private_room_result_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_private_room_result_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_private_room_result_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_private_room_result_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_private_room_result_not} mahjong_mj_private_room_result_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_private_room_result_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_private_room_result_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.vecGameStatiscs && message.vecGameStatiscs.length))
                    message.vecGameStatiscs = [];
                message.vecGameStatiscs.push($root.mahjong_GameStatisc.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_mj_private_room_result_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_private_room_result_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_private_room_result_not} mahjong_mj_private_room_result_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_private_room_result_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_private_room_result_not message.
     * @function verify
     * @memberof mahjong_mj_private_room_result_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_private_room_result_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.vecGameStatiscs != null && message.hasOwnProperty("vecGameStatiscs")) {
            if (!Array.isArray(message.vecGameStatiscs))
                return "vecGameStatiscs: array expected";
            for (var i = 0; i < message.vecGameStatiscs.length; ++i) {
                var error = $root.mahjong_GameStatisc.verify(message.vecGameStatiscs[i]);
                if (error)
                    return "vecGameStatiscs." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_mj_private_room_result_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_private_room_result_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_private_room_result_not} mahjong_mj_private_room_result_not
     */
    mahjong_mj_private_room_result_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_private_room_result_not)
            return object;
        var message = new $root.mahjong_mj_private_room_result_not();
        if (object.vecGameStatiscs) {
            if (!Array.isArray(object.vecGameStatiscs))
                throw TypeError(".mahjong_mj_private_room_result_not.vecGameStatiscs: array expected");
            message.vecGameStatiscs = [];
            for (var i = 0; i < object.vecGameStatiscs.length; ++i) {
                if (typeof object.vecGameStatiscs[i] !== "object")
                    throw TypeError(".mahjong_mj_private_room_result_not.vecGameStatiscs: object expected");
                message.vecGameStatiscs[i] = $root.mahjong_GameStatisc.fromObject(object.vecGameStatiscs[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_private_room_result_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_private_room_result_not
     * @static
     * @param {mahjong_mj_private_room_result_not} message mahjong_mj_private_room_result_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_private_room_result_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecGameStatiscs = [];
        if (message.vecGameStatiscs && message.vecGameStatiscs.length) {
            object.vecGameStatiscs = [];
            for (var j = 0; j < message.vecGameStatiscs.length; ++j)
                object.vecGameStatiscs[j] = $root.mahjong_GameStatisc.toObject(message.vecGameStatiscs[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_mj_private_room_result_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_private_room_result_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_private_room_result_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_private_room_result_not;
})();

$root.mahjong_tingfan_data = (function() {

    /**
     * Properties of a mahjong_tingfan_data.
     * @exports Imahjong_tingfan_data
     * @interface Imahjong_tingfan_data
     * @property {number} cPutCard mahjong_tingfan_data cPutCard
     * @property {number} cHuCard mahjong_tingfan_data cHuCard
     * @property {number} nFan mahjong_tingfan_data nFan
     * @property {number} nLeftNum mahjong_tingfan_data nLeftNum
     */

    /**
     * Constructs a new mahjong_tingfan_data.
     * @exports mahjong_tingfan_data
     * @classdesc Represents a mahjong_tingfan_data.
     * @implements Imahjong_tingfan_data
     * @constructor
     * @param {Imahjong_tingfan_data=} [properties] Properties to set
     */
    function mahjong_tingfan_data(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_tingfan_data cPutCard.
     * @member {number} cPutCard
     * @memberof mahjong_tingfan_data
     * @instance
     */
    mahjong_tingfan_data.prototype.cPutCard = 0;

    /**
     * mahjong_tingfan_data cHuCard.
     * @member {number} cHuCard
     * @memberof mahjong_tingfan_data
     * @instance
     */
    mahjong_tingfan_data.prototype.cHuCard = 0;

    /**
     * mahjong_tingfan_data nFan.
     * @member {number} nFan
     * @memberof mahjong_tingfan_data
     * @instance
     */
    mahjong_tingfan_data.prototype.nFan = 0;

    /**
     * mahjong_tingfan_data nLeftNum.
     * @member {number} nLeftNum
     * @memberof mahjong_tingfan_data
     * @instance
     */
    mahjong_tingfan_data.prototype.nLeftNum = 0;

    /**
     * Creates a new mahjong_tingfan_data instance using the specified properties.
     * @function create
     * @memberof mahjong_tingfan_data
     * @static
     * @param {Imahjong_tingfan_data=} [properties] Properties to set
     * @returns {mahjong_tingfan_data} mahjong_tingfan_data instance
     */
    mahjong_tingfan_data.create = function create(properties) {
        return new mahjong_tingfan_data(properties);
    };

    /**
     * Encodes the specified mahjong_tingfan_data message. Does not implicitly {@link mahjong_tingfan_data.verify|verify} messages.
     * @function encode
     * @memberof mahjong_tingfan_data
     * @static
     * @param {Imahjong_tingfan_data} message mahjong_tingfan_data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_tingfan_data.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cPutCard);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cHuCard);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nFan);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nLeftNum);
        return writer;
    };

    /**
     * Encodes the specified mahjong_tingfan_data message, length delimited. Does not implicitly {@link mahjong_tingfan_data.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_tingfan_data
     * @static
     * @param {Imahjong_tingfan_data} message mahjong_tingfan_data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_tingfan_data.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_tingfan_data message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_tingfan_data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_tingfan_data} mahjong_tingfan_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_tingfan_data.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_tingfan_data();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cPutCard = reader.int32();
                break;
            case 2:
                message.cHuCard = reader.int32();
                break;
            case 3:
                message.nFan = reader.int32();
                break;
            case 4:
                message.nLeftNum = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cPutCard"))
            throw $util.ProtocolError("missing required 'cPutCard'", { instance: message });
        if (!message.hasOwnProperty("cHuCard"))
            throw $util.ProtocolError("missing required 'cHuCard'", { instance: message });
        if (!message.hasOwnProperty("nFan"))
            throw $util.ProtocolError("missing required 'nFan'", { instance: message });
        if (!message.hasOwnProperty("nLeftNum"))
            throw $util.ProtocolError("missing required 'nLeftNum'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_tingfan_data message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_tingfan_data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_tingfan_data} mahjong_tingfan_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_tingfan_data.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_tingfan_data message.
     * @function verify
     * @memberof mahjong_tingfan_data
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_tingfan_data.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cPutCard))
            return "cPutCard: integer expected";
        if (!$util.isInteger(message.cHuCard))
            return "cHuCard: integer expected";
        if (!$util.isInteger(message.nFan))
            return "nFan: integer expected";
        if (!$util.isInteger(message.nLeftNum))
            return "nLeftNum: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_tingfan_data message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_tingfan_data
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_tingfan_data} mahjong_tingfan_data
     */
    mahjong_tingfan_data.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_tingfan_data)
            return object;
        var message = new $root.mahjong_tingfan_data();
        if (object.cPutCard != null)
            message.cPutCard = object.cPutCard | 0;
        if (object.cHuCard != null)
            message.cHuCard = object.cHuCard | 0;
        if (object.nFan != null)
            message.nFan = object.nFan | 0;
        if (object.nLeftNum != null)
            message.nLeftNum = object.nLeftNum | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_tingfan_data message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_tingfan_data
     * @static
     * @param {mahjong_tingfan_data} message mahjong_tingfan_data
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_tingfan_data.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cPutCard = 0;
            object.cHuCard = 0;
            object.nFan = 0;
            object.nLeftNum = 0;
        }
        if (message.cPutCard != null && message.hasOwnProperty("cPutCard"))
            object.cPutCard = message.cPutCard;
        if (message.cHuCard != null && message.hasOwnProperty("cHuCard"))
            object.cHuCard = message.cHuCard;
        if (message.nFan != null && message.hasOwnProperty("nFan"))
            object.nFan = message.nFan;
        if (message.nLeftNum != null && message.hasOwnProperty("nLeftNum"))
            object.nLeftNum = message.nLeftNum;
        return object;
    };

    /**
     * Converts this mahjong_tingfan_data to JSON.
     * @function toJSON
     * @memberof mahjong_tingfan_data
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_tingfan_data.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_tingfan_data;
})();

$root.mahjong_mj_gangresult_not = (function() {

    /**
     * Properties of a mahjong_mj_gangresult_not.
     * @exports Imahjong_mj_gangresult_not
     * @interface Imahjong_mj_gangresult_not
     * @property {Array.<number>|null} [vecGangFen] mahjong_mj_gangresult_not vecGangFen
     */

    /**
     * Constructs a new mahjong_mj_gangresult_not.
     * @exports mahjong_mj_gangresult_not
     * @classdesc Represents a mahjong_mj_gangresult_not.
     * @implements Imahjong_mj_gangresult_not
     * @constructor
     * @param {Imahjong_mj_gangresult_not=} [properties] Properties to set
     */
    function mahjong_mj_gangresult_not(properties) {
        this.vecGangFen = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_gangresult_not vecGangFen.
     * @member {Array.<number>} vecGangFen
     * @memberof mahjong_mj_gangresult_not
     * @instance
     */
    mahjong_mj_gangresult_not.prototype.vecGangFen = $util.emptyArray;

    /**
     * Creates a new mahjong_mj_gangresult_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_gangresult_not
     * @static
     * @param {Imahjong_mj_gangresult_not=} [properties] Properties to set
     * @returns {mahjong_mj_gangresult_not} mahjong_mj_gangresult_not instance
     */
    mahjong_mj_gangresult_not.create = function create(properties) {
        return new mahjong_mj_gangresult_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_gangresult_not message. Does not implicitly {@link mahjong_mj_gangresult_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_gangresult_not
     * @static
     * @param {Imahjong_mj_gangresult_not} message mahjong_mj_gangresult_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_gangresult_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vecGangFen != null && message.vecGangFen.length)
            for (var i = 0; i < message.vecGangFen.length; ++i)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.vecGangFen[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_gangresult_not message, length delimited. Does not implicitly {@link mahjong_mj_gangresult_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_gangresult_not
     * @static
     * @param {Imahjong_mj_gangresult_not} message mahjong_mj_gangresult_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_gangresult_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_gangresult_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_gangresult_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_gangresult_not} mahjong_mj_gangresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_gangresult_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_gangresult_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.vecGangFen && message.vecGangFen.length))
                    message.vecGangFen = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecGangFen.push(reader.int32());
                } else
                    message.vecGangFen.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_mj_gangresult_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_gangresult_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_gangresult_not} mahjong_mj_gangresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_gangresult_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_gangresult_not message.
     * @function verify
     * @memberof mahjong_mj_gangresult_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_gangresult_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.vecGangFen != null && message.hasOwnProperty("vecGangFen")) {
            if (!Array.isArray(message.vecGangFen))
                return "vecGangFen: array expected";
            for (var i = 0; i < message.vecGangFen.length; ++i)
                if (!$util.isInteger(message.vecGangFen[i]))
                    return "vecGangFen: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_mj_gangresult_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_gangresult_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_gangresult_not} mahjong_mj_gangresult_not
     */
    mahjong_mj_gangresult_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_gangresult_not)
            return object;
        var message = new $root.mahjong_mj_gangresult_not();
        if (object.vecGangFen) {
            if (!Array.isArray(object.vecGangFen))
                throw TypeError(".mahjong_mj_gangresult_not.vecGangFen: array expected");
            message.vecGangFen = [];
            for (var i = 0; i < object.vecGangFen.length; ++i)
                message.vecGangFen[i] = object.vecGangFen[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_gangresult_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_gangresult_not
     * @static
     * @param {mahjong_mj_gangresult_not} message mahjong_mj_gangresult_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_gangresult_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecGangFen = [];
        if (message.vecGangFen && message.vecGangFen.length) {
            object.vecGangFen = [];
            for (var j = 0; j < message.vecGangFen.length; ++j)
                object.vecGangFen[j] = message.vecGangFen[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_mj_gangresult_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_gangresult_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_gangresult_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_gangresult_not;
})();

$root.mahjong_mj_seat_dice_not = (function() {

    /**
     * Properties of a mahjong_mj_seat_dice_not.
     * @exports Imahjong_mj_seat_dice_not
     * @interface Imahjong_mj_seat_dice_not
     * @property {number} cChairID mahjong_mj_seat_dice_not cChairID
     * @property {Array.<number>|null} [vecDice] mahjong_mj_seat_dice_not vecDice
     */

    /**
     * Constructs a new mahjong_mj_seat_dice_not.
     * @exports mahjong_mj_seat_dice_not
     * @classdesc Represents a mahjong_mj_seat_dice_not.
     * @implements Imahjong_mj_seat_dice_not
     * @constructor
     * @param {Imahjong_mj_seat_dice_not=} [properties] Properties to set
     */
    function mahjong_mj_seat_dice_not(properties) {
        this.vecDice = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_seat_dice_not cChairID.
     * @member {number} cChairID
     * @memberof mahjong_mj_seat_dice_not
     * @instance
     */
    mahjong_mj_seat_dice_not.prototype.cChairID = 0;

    /**
     * mahjong_mj_seat_dice_not vecDice.
     * @member {Array.<number>} vecDice
     * @memberof mahjong_mj_seat_dice_not
     * @instance
     */
    mahjong_mj_seat_dice_not.prototype.vecDice = $util.emptyArray;

    /**
     * Creates a new mahjong_mj_seat_dice_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_seat_dice_not
     * @static
     * @param {Imahjong_mj_seat_dice_not=} [properties] Properties to set
     * @returns {mahjong_mj_seat_dice_not} mahjong_mj_seat_dice_not instance
     */
    mahjong_mj_seat_dice_not.create = function create(properties) {
        return new mahjong_mj_seat_dice_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_seat_dice_not message. Does not implicitly {@link mahjong_mj_seat_dice_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_seat_dice_not
     * @static
     * @param {Imahjong_mj_seat_dice_not} message mahjong_mj_seat_dice_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_seat_dice_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        if (message.vecDice != null && message.vecDice.length)
            for (var i = 0; i < message.vecDice.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.vecDice[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_seat_dice_not message, length delimited. Does not implicitly {@link mahjong_mj_seat_dice_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_seat_dice_not
     * @static
     * @param {Imahjong_mj_seat_dice_not} message mahjong_mj_seat_dice_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_seat_dice_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_seat_dice_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_seat_dice_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_seat_dice_not} mahjong_mj_seat_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_seat_dice_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_seat_dice_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairID = reader.int32();
                break;
            case 2:
                if (!(message.vecDice && message.vecDice.length))
                    message.vecDice = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecDice.push(reader.int32());
                } else
                    message.vecDice.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairID"))
            throw $util.ProtocolError("missing required 'cChairID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_seat_dice_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_seat_dice_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_seat_dice_not} mahjong_mj_seat_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_seat_dice_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_seat_dice_not message.
     * @function verify
     * @memberof mahjong_mj_seat_dice_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_seat_dice_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
        if (message.vecDice != null && message.hasOwnProperty("vecDice")) {
            if (!Array.isArray(message.vecDice))
                return "vecDice: array expected";
            for (var i = 0; i < message.vecDice.length; ++i)
                if (!$util.isInteger(message.vecDice[i]))
                    return "vecDice: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_mj_seat_dice_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_seat_dice_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_seat_dice_not} mahjong_mj_seat_dice_not
     */
    mahjong_mj_seat_dice_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_seat_dice_not)
            return object;
        var message = new $root.mahjong_mj_seat_dice_not();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.vecDice) {
            if (!Array.isArray(object.vecDice))
                throw TypeError(".mahjong_mj_seat_dice_not.vecDice: array expected");
            message.vecDice = [];
            for (var i = 0; i < object.vecDice.length; ++i)
                message.vecDice[i] = object.vecDice[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_seat_dice_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_seat_dice_not
     * @static
     * @param {mahjong_mj_seat_dice_not} message mahjong_mj_seat_dice_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_seat_dice_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecDice = [];
        if (options.defaults)
            object.cChairID = 0;
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.vecDice && message.vecDice.length) {
            object.vecDice = [];
            for (var j = 0; j < message.vecDice.length; ++j)
                object.vecDice[j] = message.vecDice[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_mj_seat_dice_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_seat_dice_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_seat_dice_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_seat_dice_not;
})();

$root.mahjong_fan_data = (function() {

    /**
     * Properties of a mahjong_fan_data.
     * @exports Imahjong_fan_data
     * @interface Imahjong_fan_data
     * @property {number} cChairId mahjong_fan_data cChairId
     * @property {number} nScore mahjong_fan_data nScore
     * @property {number} cType mahjong_fan_data cType
     */

    /**
     * Constructs a new mahjong_fan_data.
     * @exports mahjong_fan_data
     * @classdesc Represents a mahjong_fan_data.
     * @implements Imahjong_fan_data
     * @constructor
     * @param {Imahjong_fan_data=} [properties] Properties to set
     */
    function mahjong_fan_data(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_fan_data cChairId.
     * @member {number} cChairId
     * @memberof mahjong_fan_data
     * @instance
     */
    mahjong_fan_data.prototype.cChairId = 0;

    /**
     * mahjong_fan_data nScore.
     * @member {number} nScore
     * @memberof mahjong_fan_data
     * @instance
     */
    mahjong_fan_data.prototype.nScore = 0;

    /**
     * mahjong_fan_data cType.
     * @member {number} cType
     * @memberof mahjong_fan_data
     * @instance
     */
    mahjong_fan_data.prototype.cType = 0;

    /**
     * Creates a new mahjong_fan_data instance using the specified properties.
     * @function create
     * @memberof mahjong_fan_data
     * @static
     * @param {Imahjong_fan_data=} [properties] Properties to set
     * @returns {mahjong_fan_data} mahjong_fan_data instance
     */
    mahjong_fan_data.create = function create(properties) {
        return new mahjong_fan_data(properties);
    };

    /**
     * Encodes the specified mahjong_fan_data message. Does not implicitly {@link mahjong_fan_data.verify|verify} messages.
     * @function encode
     * @memberof mahjong_fan_data
     * @static
     * @param {Imahjong_fan_data} message mahjong_fan_data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_fan_data.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nScore);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cType);
        return writer;
    };

    /**
     * Encodes the specified mahjong_fan_data message, length delimited. Does not implicitly {@link mahjong_fan_data.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_fan_data
     * @static
     * @param {Imahjong_fan_data} message mahjong_fan_data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_fan_data.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_fan_data message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_fan_data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_fan_data} mahjong_fan_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_fan_data.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_fan_data();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairId = reader.int32();
                break;
            case 2:
                message.nScore = reader.int32();
                break;
            case 3:
                message.cType = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairId"))
            throw $util.ProtocolError("missing required 'cChairId'", { instance: message });
        if (!message.hasOwnProperty("nScore"))
            throw $util.ProtocolError("missing required 'nScore'", { instance: message });
        if (!message.hasOwnProperty("cType"))
            throw $util.ProtocolError("missing required 'cType'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_fan_data message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_fan_data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_fan_data} mahjong_fan_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_fan_data.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_fan_data message.
     * @function verify
     * @memberof mahjong_fan_data
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_fan_data.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairId))
            return "cChairId: integer expected";
        if (!$util.isInteger(message.nScore))
            return "nScore: integer expected";
        if (!$util.isInteger(message.cType))
            return "cType: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_fan_data message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_fan_data
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_fan_data} mahjong_fan_data
     */
    mahjong_fan_data.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_fan_data)
            return object;
        var message = new $root.mahjong_fan_data();
        if (object.cChairId != null)
            message.cChairId = object.cChairId | 0;
        if (object.nScore != null)
            message.nScore = object.nScore | 0;
        if (object.cType != null)
            message.cType = object.cType | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_fan_data message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_fan_data
     * @static
     * @param {mahjong_fan_data} message mahjong_fan_data
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_fan_data.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cChairId = 0;
            object.nScore = 0;
            object.cType = 0;
        }
        if (message.cChairId != null && message.hasOwnProperty("cChairId"))
            object.cChairId = message.cChairId;
        if (message.nScore != null && message.hasOwnProperty("nScore"))
            object.nScore = message.nScore;
        if (message.cType != null && message.hasOwnProperty("cType"))
            object.cType = message.cType;
        return object;
    };

    /**
     * Converts this mahjong_fan_data to JSON.
     * @function toJSON
     * @memberof mahjong_fan_data
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_fan_data.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_fan_data;
})();

$root.mahjong_GameStatisc = (function() {

    /**
     * Properties of a mahjong_GameStatisc.
     * @exports Imahjong_GameStatisc
     * @interface Imahjong_GameStatisc
     * @property {number} nBankerNum mahjong_GameStatisc nBankerNum
     * @property {number} nLianBankerNum mahjong_GameStatisc nLianBankerNum
     * @property {number} nHuNum mahjong_GameStatisc nHuNum
     * @property {number} nDianPaoNum mahjong_GameStatisc nDianPaoNum
     * @property {number} nMoBaoNum mahjong_GameStatisc nMoBaoNum
     * @property {number} nBaoZhongBaoNum mahjong_GameStatisc nBaoZhongBaoNum
     * @property {number|Long} nAmount mahjong_GameStatisc nAmount
     */

    /**
     * Constructs a new mahjong_GameStatisc.
     * @exports mahjong_GameStatisc
     * @classdesc Represents a mahjong_GameStatisc.
     * @implements Imahjong_GameStatisc
     * @constructor
     * @param {Imahjong_GameStatisc=} [properties] Properties to set
     */
    function mahjong_GameStatisc(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_GameStatisc nBankerNum.
     * @member {number} nBankerNum
     * @memberof mahjong_GameStatisc
     * @instance
     */
    mahjong_GameStatisc.prototype.nBankerNum = 0;

    /**
     * mahjong_GameStatisc nLianBankerNum.
     * @member {number} nLianBankerNum
     * @memberof mahjong_GameStatisc
     * @instance
     */
    mahjong_GameStatisc.prototype.nLianBankerNum = 0;

    /**
     * mahjong_GameStatisc nHuNum.
     * @member {number} nHuNum
     * @memberof mahjong_GameStatisc
     * @instance
     */
    mahjong_GameStatisc.prototype.nHuNum = 0;

    /**
     * mahjong_GameStatisc nDianPaoNum.
     * @member {number} nDianPaoNum
     * @memberof mahjong_GameStatisc
     * @instance
     */
    mahjong_GameStatisc.prototype.nDianPaoNum = 0;

    /**
     * mahjong_GameStatisc nMoBaoNum.
     * @member {number} nMoBaoNum
     * @memberof mahjong_GameStatisc
     * @instance
     */
    mahjong_GameStatisc.prototype.nMoBaoNum = 0;

    /**
     * mahjong_GameStatisc nBaoZhongBaoNum.
     * @member {number} nBaoZhongBaoNum
     * @memberof mahjong_GameStatisc
     * @instance
     */
    mahjong_GameStatisc.prototype.nBaoZhongBaoNum = 0;

    /**
     * mahjong_GameStatisc nAmount.
     * @member {number|Long} nAmount
     * @memberof mahjong_GameStatisc
     * @instance
     */
    mahjong_GameStatisc.prototype.nAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new mahjong_GameStatisc instance using the specified properties.
     * @function create
     * @memberof mahjong_GameStatisc
     * @static
     * @param {Imahjong_GameStatisc=} [properties] Properties to set
     * @returns {mahjong_GameStatisc} mahjong_GameStatisc instance
     */
    mahjong_GameStatisc.create = function create(properties) {
        return new mahjong_GameStatisc(properties);
    };

    /**
     * Encodes the specified mahjong_GameStatisc message. Does not implicitly {@link mahjong_GameStatisc.verify|verify} messages.
     * @function encode
     * @memberof mahjong_GameStatisc
     * @static
     * @param {Imahjong_GameStatisc} message mahjong_GameStatisc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_GameStatisc.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nBankerNum);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nLianBankerNum);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nHuNum);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nDianPaoNum);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nMoBaoNum);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.nBaoZhongBaoNum);
        writer.uint32(/* id 7, wireType 0 =*/56).int64(message.nAmount);
        return writer;
    };

    /**
     * Encodes the specified mahjong_GameStatisc message, length delimited. Does not implicitly {@link mahjong_GameStatisc.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_GameStatisc
     * @static
     * @param {Imahjong_GameStatisc} message mahjong_GameStatisc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_GameStatisc.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_GameStatisc message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_GameStatisc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_GameStatisc} mahjong_GameStatisc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_GameStatisc.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_GameStatisc();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nBankerNum = reader.int32();
                break;
            case 2:
                message.nLianBankerNum = reader.int32();
                break;
            case 3:
                message.nHuNum = reader.int32();
                break;
            case 4:
                message.nDianPaoNum = reader.int32();
                break;
            case 5:
                message.nMoBaoNum = reader.int32();
                break;
            case 6:
                message.nBaoZhongBaoNum = reader.int32();
                break;
            case 7:
                message.nAmount = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nBankerNum"))
            throw $util.ProtocolError("missing required 'nBankerNum'", { instance: message });
        if (!message.hasOwnProperty("nLianBankerNum"))
            throw $util.ProtocolError("missing required 'nLianBankerNum'", { instance: message });
        if (!message.hasOwnProperty("nHuNum"))
            throw $util.ProtocolError("missing required 'nHuNum'", { instance: message });
        if (!message.hasOwnProperty("nDianPaoNum"))
            throw $util.ProtocolError("missing required 'nDianPaoNum'", { instance: message });
        if (!message.hasOwnProperty("nMoBaoNum"))
            throw $util.ProtocolError("missing required 'nMoBaoNum'", { instance: message });
        if (!message.hasOwnProperty("nBaoZhongBaoNum"))
            throw $util.ProtocolError("missing required 'nBaoZhongBaoNum'", { instance: message });
        if (!message.hasOwnProperty("nAmount"))
            throw $util.ProtocolError("missing required 'nAmount'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_GameStatisc message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_GameStatisc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_GameStatisc} mahjong_GameStatisc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_GameStatisc.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_GameStatisc message.
     * @function verify
     * @memberof mahjong_GameStatisc
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_GameStatisc.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nBankerNum))
            return "nBankerNum: integer expected";
        if (!$util.isInteger(message.nLianBankerNum))
            return "nLianBankerNum: integer expected";
        if (!$util.isInteger(message.nHuNum))
            return "nHuNum: integer expected";
        if (!$util.isInteger(message.nDianPaoNum))
            return "nDianPaoNum: integer expected";
        if (!$util.isInteger(message.nMoBaoNum))
            return "nMoBaoNum: integer expected";
        if (!$util.isInteger(message.nBaoZhongBaoNum))
            return "nBaoZhongBaoNum: integer expected";
        if (!$util.isInteger(message.nAmount) && !(message.nAmount && $util.isInteger(message.nAmount.low) && $util.isInteger(message.nAmount.high)))
            return "nAmount: integer|Long expected";
        return null;
    };

    /**
     * Creates a mahjong_GameStatisc message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_GameStatisc
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_GameStatisc} mahjong_GameStatisc
     */
    mahjong_GameStatisc.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_GameStatisc)
            return object;
        var message = new $root.mahjong_GameStatisc();
        if (object.nBankerNum != null)
            message.nBankerNum = object.nBankerNum | 0;
        if (object.nLianBankerNum != null)
            message.nLianBankerNum = object.nLianBankerNum | 0;
        if (object.nHuNum != null)
            message.nHuNum = object.nHuNum | 0;
        if (object.nDianPaoNum != null)
            message.nDianPaoNum = object.nDianPaoNum | 0;
        if (object.nMoBaoNum != null)
            message.nMoBaoNum = object.nMoBaoNum | 0;
        if (object.nBaoZhongBaoNum != null)
            message.nBaoZhongBaoNum = object.nBaoZhongBaoNum | 0;
        if (object.nAmount != null)
            if ($util.Long)
                (message.nAmount = $util.Long.fromValue(object.nAmount)).unsigned = false;
            else if (typeof object.nAmount === "string")
                message.nAmount = parseInt(object.nAmount, 10);
            else if (typeof object.nAmount === "number")
                message.nAmount = object.nAmount;
            else if (typeof object.nAmount === "object")
                message.nAmount = new $util.LongBits(object.nAmount.low >>> 0, object.nAmount.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a mahjong_GameStatisc message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_GameStatisc
     * @static
     * @param {mahjong_GameStatisc} message mahjong_GameStatisc
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_GameStatisc.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nBankerNum = 0;
            object.nLianBankerNum = 0;
            object.nHuNum = 0;
            object.nDianPaoNum = 0;
            object.nMoBaoNum = 0;
            object.nBaoZhongBaoNum = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.nAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.nAmount = options.longs === String ? "0" : 0;
        }
        if (message.nBankerNum != null && message.hasOwnProperty("nBankerNum"))
            object.nBankerNum = message.nBankerNum;
        if (message.nLianBankerNum != null && message.hasOwnProperty("nLianBankerNum"))
            object.nLianBankerNum = message.nLianBankerNum;
        if (message.nHuNum != null && message.hasOwnProperty("nHuNum"))
            object.nHuNum = message.nHuNum;
        if (message.nDianPaoNum != null && message.hasOwnProperty("nDianPaoNum"))
            object.nDianPaoNum = message.nDianPaoNum;
        if (message.nMoBaoNum != null && message.hasOwnProperty("nMoBaoNum"))
            object.nMoBaoNum = message.nMoBaoNum;
        if (message.nBaoZhongBaoNum != null && message.hasOwnProperty("nBaoZhongBaoNum"))
            object.nBaoZhongBaoNum = message.nBaoZhongBaoNum;
        if (message.nAmount != null && message.hasOwnProperty("nAmount"))
            if (typeof message.nAmount === "number")
                object.nAmount = options.longs === String ? String(message.nAmount) : message.nAmount;
            else
                object.nAmount = options.longs === String ? $util.Long.prototype.toString.call(message.nAmount) : options.longs === Number ? new $util.LongBits(message.nAmount.low >>> 0, message.nAmount.high >>> 0).toNumber() : message.nAmount;
        return object;
    };

    /**
     * Converts this mahjong_GameStatisc to JSON.
     * @function toJSON
     * @memberof mahjong_GameStatisc
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_GameStatisc.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_GameStatisc;
})();

$root.mahjong_animate_ok_req = (function() {

    /**
     * Properties of a mahjong_animate_ok_req.
     * @exports Imahjong_animate_ok_req
     * @interface Imahjong_animate_ok_req
     */

    /**
     * Constructs a new mahjong_animate_ok_req.
     * @exports mahjong_animate_ok_req
     * @classdesc Represents a mahjong_animate_ok_req.
     * @implements Imahjong_animate_ok_req
     * @constructor
     * @param {Imahjong_animate_ok_req=} [properties] Properties to set
     */
    function mahjong_animate_ok_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_animate_ok_req instance using the specified properties.
     * @function create
     * @memberof mahjong_animate_ok_req
     * @static
     * @param {Imahjong_animate_ok_req=} [properties] Properties to set
     * @returns {mahjong_animate_ok_req} mahjong_animate_ok_req instance
     */
    mahjong_animate_ok_req.create = function create(properties) {
        return new mahjong_animate_ok_req(properties);
    };

    /**
     * Encodes the specified mahjong_animate_ok_req message. Does not implicitly {@link mahjong_animate_ok_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_animate_ok_req
     * @static
     * @param {Imahjong_animate_ok_req} message mahjong_animate_ok_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_animate_ok_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_animate_ok_req message, length delimited. Does not implicitly {@link mahjong_animate_ok_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_animate_ok_req
     * @static
     * @param {Imahjong_animate_ok_req} message mahjong_animate_ok_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_animate_ok_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_animate_ok_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_animate_ok_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_animate_ok_req} mahjong_animate_ok_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_animate_ok_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_animate_ok_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_animate_ok_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_animate_ok_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_animate_ok_req} mahjong_animate_ok_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_animate_ok_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_animate_ok_req message.
     * @function verify
     * @memberof mahjong_animate_ok_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_animate_ok_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_animate_ok_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_animate_ok_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_animate_ok_req} mahjong_animate_ok_req
     */
    mahjong_animate_ok_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_animate_ok_req)
            return object;
        return new $root.mahjong_animate_ok_req();
    };

    /**
     * Creates a plain object from a mahjong_animate_ok_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_animate_ok_req
     * @static
     * @param {mahjong_animate_ok_req} message mahjong_animate_ok_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_animate_ok_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_animate_ok_req to JSON.
     * @function toJSON
     * @memberof mahjong_animate_ok_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_animate_ok_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_animate_ok_req;
})();

$root.mahjong_mj_rount_count_not = (function() {

    /**
     * Properties of a mahjong_mj_rount_count_not.
     * @exports Imahjong_mj_rount_count_not
     * @interface Imahjong_mj_rount_count_not
     * @property {number} nMaJiangQuan mahjong_mj_rount_count_not nMaJiangQuan
     * @property {number} nMaJiangJu mahjong_mj_rount_count_not nMaJiangJu
     * @property {number} nMaJiangCount mahjong_mj_rount_count_not nMaJiangCount
     */

    /**
     * Constructs a new mahjong_mj_rount_count_not.
     * @exports mahjong_mj_rount_count_not
     * @classdesc Represents a mahjong_mj_rount_count_not.
     * @implements Imahjong_mj_rount_count_not
     * @constructor
     * @param {Imahjong_mj_rount_count_not=} [properties] Properties to set
     */
    function mahjong_mj_rount_count_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_rount_count_not nMaJiangQuan.
     * @member {number} nMaJiangQuan
     * @memberof mahjong_mj_rount_count_not
     * @instance
     */
    mahjong_mj_rount_count_not.prototype.nMaJiangQuan = 0;

    /**
     * mahjong_mj_rount_count_not nMaJiangJu.
     * @member {number} nMaJiangJu
     * @memberof mahjong_mj_rount_count_not
     * @instance
     */
    mahjong_mj_rount_count_not.prototype.nMaJiangJu = 0;

    /**
     * mahjong_mj_rount_count_not nMaJiangCount.
     * @member {number} nMaJiangCount
     * @memberof mahjong_mj_rount_count_not
     * @instance
     */
    mahjong_mj_rount_count_not.prototype.nMaJiangCount = 0;

    /**
     * Creates a new mahjong_mj_rount_count_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_rount_count_not
     * @static
     * @param {Imahjong_mj_rount_count_not=} [properties] Properties to set
     * @returns {mahjong_mj_rount_count_not} mahjong_mj_rount_count_not instance
     */
    mahjong_mj_rount_count_not.create = function create(properties) {
        return new mahjong_mj_rount_count_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_rount_count_not message. Does not implicitly {@link mahjong_mj_rount_count_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_rount_count_not
     * @static
     * @param {Imahjong_mj_rount_count_not} message mahjong_mj_rount_count_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_rount_count_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nMaJiangQuan);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nMaJiangJu);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nMaJiangCount);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_rount_count_not message, length delimited. Does not implicitly {@link mahjong_mj_rount_count_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_rount_count_not
     * @static
     * @param {Imahjong_mj_rount_count_not} message mahjong_mj_rount_count_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_rount_count_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_rount_count_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_rount_count_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_rount_count_not} mahjong_mj_rount_count_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_rount_count_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_rount_count_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nMaJiangQuan = reader.int32();
                break;
            case 2:
                message.nMaJiangJu = reader.int32();
                break;
            case 3:
                message.nMaJiangCount = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nMaJiangQuan"))
            throw $util.ProtocolError("missing required 'nMaJiangQuan'", { instance: message });
        if (!message.hasOwnProperty("nMaJiangJu"))
            throw $util.ProtocolError("missing required 'nMaJiangJu'", { instance: message });
        if (!message.hasOwnProperty("nMaJiangCount"))
            throw $util.ProtocolError("missing required 'nMaJiangCount'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_rount_count_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_rount_count_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_rount_count_not} mahjong_mj_rount_count_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_rount_count_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_rount_count_not message.
     * @function verify
     * @memberof mahjong_mj_rount_count_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_rount_count_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nMaJiangQuan))
            return "nMaJiangQuan: integer expected";
        if (!$util.isInteger(message.nMaJiangJu))
            return "nMaJiangJu: integer expected";
        if (!$util.isInteger(message.nMaJiangCount))
            return "nMaJiangCount: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_rount_count_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_rount_count_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_rount_count_not} mahjong_mj_rount_count_not
     */
    mahjong_mj_rount_count_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_rount_count_not)
            return object;
        var message = new $root.mahjong_mj_rount_count_not();
        if (object.nMaJiangQuan != null)
            message.nMaJiangQuan = object.nMaJiangQuan | 0;
        if (object.nMaJiangJu != null)
            message.nMaJiangJu = object.nMaJiangJu | 0;
        if (object.nMaJiangCount != null)
            message.nMaJiangCount = object.nMaJiangCount | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_rount_count_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_rount_count_not
     * @static
     * @param {mahjong_mj_rount_count_not} message mahjong_mj_rount_count_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_rount_count_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nMaJiangQuan = 0;
            object.nMaJiangJu = 0;
            object.nMaJiangCount = 0;
        }
        if (message.nMaJiangQuan != null && message.hasOwnProperty("nMaJiangQuan"))
            object.nMaJiangQuan = message.nMaJiangQuan;
        if (message.nMaJiangJu != null && message.hasOwnProperty("nMaJiangJu"))
            object.nMaJiangJu = message.nMaJiangJu;
        if (message.nMaJiangCount != null && message.hasOwnProperty("nMaJiangCount"))
            object.nMaJiangCount = message.nMaJiangCount;
        return object;
    };

    /**
     * Converts this mahjong_mj_rount_count_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_rount_count_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_rount_count_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_rount_count_not;
})();

$root.mahjong_player_itemInfo = (function() {

    /**
     * Properties of a mahjong_player_itemInfo.
     * @exports Imahjong_player_itemInfo
     * @interface Imahjong_player_itemInfo
     * @property {number} nItemIndex mahjong_player_itemInfo nItemIndex
     * @property {number} nItemNum mahjong_player_itemInfo nItemNum
     */

    /**
     * Constructs a new mahjong_player_itemInfo.
     * @exports mahjong_player_itemInfo
     * @classdesc Represents a mahjong_player_itemInfo.
     * @implements Imahjong_player_itemInfo
     * @constructor
     * @param {Imahjong_player_itemInfo=} [properties] Properties to set
     */
    function mahjong_player_itemInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_player_itemInfo nItemIndex.
     * @member {number} nItemIndex
     * @memberof mahjong_player_itemInfo
     * @instance
     */
    mahjong_player_itemInfo.prototype.nItemIndex = 0;

    /**
     * mahjong_player_itemInfo nItemNum.
     * @member {number} nItemNum
     * @memberof mahjong_player_itemInfo
     * @instance
     */
    mahjong_player_itemInfo.prototype.nItemNum = 0;

    /**
     * Creates a new mahjong_player_itemInfo instance using the specified properties.
     * @function create
     * @memberof mahjong_player_itemInfo
     * @static
     * @param {Imahjong_player_itemInfo=} [properties] Properties to set
     * @returns {mahjong_player_itemInfo} mahjong_player_itemInfo instance
     */
    mahjong_player_itemInfo.create = function create(properties) {
        return new mahjong_player_itemInfo(properties);
    };

    /**
     * Encodes the specified mahjong_player_itemInfo message. Does not implicitly {@link mahjong_player_itemInfo.verify|verify} messages.
     * @function encode
     * @memberof mahjong_player_itemInfo
     * @static
     * @param {Imahjong_player_itemInfo} message mahjong_player_itemInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_player_itemInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nItemIndex);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nItemNum);
        return writer;
    };

    /**
     * Encodes the specified mahjong_player_itemInfo message, length delimited. Does not implicitly {@link mahjong_player_itemInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_player_itemInfo
     * @static
     * @param {Imahjong_player_itemInfo} message mahjong_player_itemInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_player_itemInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_player_itemInfo message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_player_itemInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_player_itemInfo} mahjong_player_itemInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_player_itemInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_player_itemInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nItemIndex = reader.int32();
                break;
            case 2:
                message.nItemNum = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nItemIndex"))
            throw $util.ProtocolError("missing required 'nItemIndex'", { instance: message });
        if (!message.hasOwnProperty("nItemNum"))
            throw $util.ProtocolError("missing required 'nItemNum'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_player_itemInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_player_itemInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_player_itemInfo} mahjong_player_itemInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_player_itemInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_player_itemInfo message.
     * @function verify
     * @memberof mahjong_player_itemInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_player_itemInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nItemIndex))
            return "nItemIndex: integer expected";
        if (!$util.isInteger(message.nItemNum))
            return "nItemNum: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_player_itemInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_player_itemInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_player_itemInfo} mahjong_player_itemInfo
     */
    mahjong_player_itemInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_player_itemInfo)
            return object;
        var message = new $root.mahjong_player_itemInfo();
        if (object.nItemIndex != null)
            message.nItemIndex = object.nItemIndex | 0;
        if (object.nItemNum != null)
            message.nItemNum = object.nItemNum | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_player_itemInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_player_itemInfo
     * @static
     * @param {mahjong_player_itemInfo} message mahjong_player_itemInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_player_itemInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nItemIndex = 0;
            object.nItemNum = 0;
        }
        if (message.nItemIndex != null && message.hasOwnProperty("nItemIndex"))
            object.nItemIndex = message.nItemIndex;
        if (message.nItemNum != null && message.hasOwnProperty("nItemNum"))
            object.nItemNum = message.nItemNum;
        return object;
    };

    /**
     * Converts this mahjong_player_itemInfo to JSON.
     * @function toJSON
     * @memberof mahjong_player_itemInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_player_itemInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_player_itemInfo;
})();

$root.mahjong_st_gameresult = (function() {

    /**
     * Properties of a mahjong_st_gameresult.
     * @exports Imahjong_st_gameresult
     * @interface Imahjong_st_gameresult
     * @property {number} cChairID mahjong_st_gameresult cChairID
     * @property {number} cWonLose mahjong_st_gameresult cWonLose
     * @property {number} cResult mahjong_st_gameresult cResult
     * @property {number|Long} nScore mahjong_st_gameresult nScore
     * @property {number} nHuType mahjong_st_gameresult nHuType
     * @property {number} cMingGangNum mahjong_st_gameresult cMingGangNum
     * @property {number} cAnGangNum mahjong_st_gameresult cAnGangNum
     * @property {number} cBuGangNum mahjong_st_gameresult cBuGangNum
     * @property {number} cDianPaoChair mahjong_st_gameresult cDianPaoChair
     * @property {number} cChaJiao mahjong_st_gameresult cChaJiao
     * @property {number} bQiangGang mahjong_st_gameresult bQiangGang
     * @property {number} bGangHua mahjong_st_gameresult bGangHua
     * @property {number} bGangPao mahjong_st_gameresult bGangPao
     * @property {number} cGenNum mahjong_st_gameresult cGenNum
     */

    /**
     * Constructs a new mahjong_st_gameresult.
     * @exports mahjong_st_gameresult
     * @classdesc Represents a mahjong_st_gameresult.
     * @implements Imahjong_st_gameresult
     * @constructor
     * @param {Imahjong_st_gameresult=} [properties] Properties to set
     */
    function mahjong_st_gameresult(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_st_gameresult cChairID.
     * @member {number} cChairID
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.cChairID = 0;

    /**
     * mahjong_st_gameresult cWonLose.
     * @member {number} cWonLose
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.cWonLose = 0;

    /**
     * mahjong_st_gameresult cResult.
     * @member {number} cResult
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.cResult = 0;

    /**
     * mahjong_st_gameresult nScore.
     * @member {number|Long} nScore
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.nScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * mahjong_st_gameresult nHuType.
     * @member {number} nHuType
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.nHuType = 0;

    /**
     * mahjong_st_gameresult cMingGangNum.
     * @member {number} cMingGangNum
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.cMingGangNum = 0;

    /**
     * mahjong_st_gameresult cAnGangNum.
     * @member {number} cAnGangNum
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.cAnGangNum = 0;

    /**
     * mahjong_st_gameresult cBuGangNum.
     * @member {number} cBuGangNum
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.cBuGangNum = 0;

    /**
     * mahjong_st_gameresult cDianPaoChair.
     * @member {number} cDianPaoChair
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.cDianPaoChair = 0;

    /**
     * mahjong_st_gameresult cChaJiao.
     * @member {number} cChaJiao
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.cChaJiao = 0;

    /**
     * mahjong_st_gameresult bQiangGang.
     * @member {number} bQiangGang
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.bQiangGang = 0;

    /**
     * mahjong_st_gameresult bGangHua.
     * @member {number} bGangHua
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.bGangHua = 0;

    /**
     * mahjong_st_gameresult bGangPao.
     * @member {number} bGangPao
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.bGangPao = 0;

    /**
     * mahjong_st_gameresult cGenNum.
     * @member {number} cGenNum
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.cGenNum = 0;

    /**
     * Creates a new mahjong_st_gameresult instance using the specified properties.
     * @function create
     * @memberof mahjong_st_gameresult
     * @static
     * @param {Imahjong_st_gameresult=} [properties] Properties to set
     * @returns {mahjong_st_gameresult} mahjong_st_gameresult instance
     */
    mahjong_st_gameresult.create = function create(properties) {
        return new mahjong_st_gameresult(properties);
    };

    /**
     * Encodes the specified mahjong_st_gameresult message. Does not implicitly {@link mahjong_st_gameresult.verify|verify} messages.
     * @function encode
     * @memberof mahjong_st_gameresult
     * @static
     * @param {Imahjong_st_gameresult} message mahjong_st_gameresult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_st_gameresult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cWonLose);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cResult);
        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.nScore);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nHuType);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cMingGangNum);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.cAnGangNum);
        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.cBuGangNum);
        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.cDianPaoChair);
        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.cChaJiao);
        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.bQiangGang);
        writer.uint32(/* id 12, wireType 0 =*/96).int32(message.bGangHua);
        writer.uint32(/* id 13, wireType 0 =*/104).int32(message.bGangPao);
        writer.uint32(/* id 14, wireType 0 =*/112).int32(message.cGenNum);
        return writer;
    };

    /**
     * Encodes the specified mahjong_st_gameresult message, length delimited. Does not implicitly {@link mahjong_st_gameresult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_st_gameresult
     * @static
     * @param {Imahjong_st_gameresult} message mahjong_st_gameresult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_st_gameresult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_st_gameresult message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_st_gameresult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_st_gameresult} mahjong_st_gameresult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_st_gameresult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_st_gameresult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairID = reader.int32();
                break;
            case 2:
                message.cWonLose = reader.int32();
                break;
            case 3:
                message.cResult = reader.int32();
                break;
            case 4:
                message.nScore = reader.int64();
                break;
            case 5:
                message.nHuType = reader.int32();
                break;
            case 6:
                message.cMingGangNum = reader.int32();
                break;
            case 7:
                message.cAnGangNum = reader.int32();
                break;
            case 8:
                message.cBuGangNum = reader.int32();
                break;
            case 9:
                message.cDianPaoChair = reader.int32();
                break;
            case 10:
                message.cChaJiao = reader.int32();
                break;
            case 11:
                message.bQiangGang = reader.int32();
                break;
            case 12:
                message.bGangHua = reader.int32();
                break;
            case 13:
                message.bGangPao = reader.int32();
                break;
            case 14:
                message.cGenNum = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairID"))
            throw $util.ProtocolError("missing required 'cChairID'", { instance: message });
        if (!message.hasOwnProperty("cWonLose"))
            throw $util.ProtocolError("missing required 'cWonLose'", { instance: message });
        if (!message.hasOwnProperty("cResult"))
            throw $util.ProtocolError("missing required 'cResult'", { instance: message });
        if (!message.hasOwnProperty("nScore"))
            throw $util.ProtocolError("missing required 'nScore'", { instance: message });
        if (!message.hasOwnProperty("nHuType"))
            throw $util.ProtocolError("missing required 'nHuType'", { instance: message });
        if (!message.hasOwnProperty("cMingGangNum"))
            throw $util.ProtocolError("missing required 'cMingGangNum'", { instance: message });
        if (!message.hasOwnProperty("cAnGangNum"))
            throw $util.ProtocolError("missing required 'cAnGangNum'", { instance: message });
        if (!message.hasOwnProperty("cBuGangNum"))
            throw $util.ProtocolError("missing required 'cBuGangNum'", { instance: message });
        if (!message.hasOwnProperty("cDianPaoChair"))
            throw $util.ProtocolError("missing required 'cDianPaoChair'", { instance: message });
        if (!message.hasOwnProperty("cChaJiao"))
            throw $util.ProtocolError("missing required 'cChaJiao'", { instance: message });
        if (!message.hasOwnProperty("bQiangGang"))
            throw $util.ProtocolError("missing required 'bQiangGang'", { instance: message });
        if (!message.hasOwnProperty("bGangHua"))
            throw $util.ProtocolError("missing required 'bGangHua'", { instance: message });
        if (!message.hasOwnProperty("bGangPao"))
            throw $util.ProtocolError("missing required 'bGangPao'", { instance: message });
        if (!message.hasOwnProperty("cGenNum"))
            throw $util.ProtocolError("missing required 'cGenNum'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_st_gameresult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_st_gameresult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_st_gameresult} mahjong_st_gameresult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_st_gameresult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_st_gameresult message.
     * @function verify
     * @memberof mahjong_st_gameresult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_st_gameresult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
        if (!$util.isInteger(message.cWonLose))
            return "cWonLose: integer expected";
        if (!$util.isInteger(message.cResult))
            return "cResult: integer expected";
        if (!$util.isInteger(message.nScore) && !(message.nScore && $util.isInteger(message.nScore.low) && $util.isInteger(message.nScore.high)))
            return "nScore: integer|Long expected";
        if (!$util.isInteger(message.nHuType))
            return "nHuType: integer expected";
        if (!$util.isInteger(message.cMingGangNum))
            return "cMingGangNum: integer expected";
        if (!$util.isInteger(message.cAnGangNum))
            return "cAnGangNum: integer expected";
        if (!$util.isInteger(message.cBuGangNum))
            return "cBuGangNum: integer expected";
        if (!$util.isInteger(message.cDianPaoChair))
            return "cDianPaoChair: integer expected";
        if (!$util.isInteger(message.cChaJiao))
            return "cChaJiao: integer expected";
        if (!$util.isInteger(message.bQiangGang))
            return "bQiangGang: integer expected";
        if (!$util.isInteger(message.bGangHua))
            return "bGangHua: integer expected";
        if (!$util.isInteger(message.bGangPao))
            return "bGangPao: integer expected";
        if (!$util.isInteger(message.cGenNum))
            return "cGenNum: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_st_gameresult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_st_gameresult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_st_gameresult} mahjong_st_gameresult
     */
    mahjong_st_gameresult.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_st_gameresult)
            return object;
        var message = new $root.mahjong_st_gameresult();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.cWonLose != null)
            message.cWonLose = object.cWonLose | 0;
        if (object.cResult != null)
            message.cResult = object.cResult | 0;
        if (object.nScore != null)
            if ($util.Long)
                (message.nScore = $util.Long.fromValue(object.nScore)).unsigned = false;
            else if (typeof object.nScore === "string")
                message.nScore = parseInt(object.nScore, 10);
            else if (typeof object.nScore === "number")
                message.nScore = object.nScore;
            else if (typeof object.nScore === "object")
                message.nScore = new $util.LongBits(object.nScore.low >>> 0, object.nScore.high >>> 0).toNumber();
        if (object.nHuType != null)
            message.nHuType = object.nHuType | 0;
        if (object.cMingGangNum != null)
            message.cMingGangNum = object.cMingGangNum | 0;
        if (object.cAnGangNum != null)
            message.cAnGangNum = object.cAnGangNum | 0;
        if (object.cBuGangNum != null)
            message.cBuGangNum = object.cBuGangNum | 0;
        if (object.cDianPaoChair != null)
            message.cDianPaoChair = object.cDianPaoChair | 0;
        if (object.cChaJiao != null)
            message.cChaJiao = object.cChaJiao | 0;
        if (object.bQiangGang != null)
            message.bQiangGang = object.bQiangGang | 0;
        if (object.bGangHua != null)
            message.bGangHua = object.bGangHua | 0;
        if (object.bGangPao != null)
            message.bGangPao = object.bGangPao | 0;
        if (object.cGenNum != null)
            message.cGenNum = object.cGenNum | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_st_gameresult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_st_gameresult
     * @static
     * @param {mahjong_st_gameresult} message mahjong_st_gameresult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_st_gameresult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cChairID = 0;
            object.cWonLose = 0;
            object.cResult = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.nScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.nScore = options.longs === String ? "0" : 0;
            object.nHuType = 0;
            object.cMingGangNum = 0;
            object.cAnGangNum = 0;
            object.cBuGangNum = 0;
            object.cDianPaoChair = 0;
            object.cChaJiao = 0;
            object.bQiangGang = 0;
            object.bGangHua = 0;
            object.bGangPao = 0;
            object.cGenNum = 0;
        }
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.cWonLose != null && message.hasOwnProperty("cWonLose"))
            object.cWonLose = message.cWonLose;
        if (message.cResult != null && message.hasOwnProperty("cResult"))
            object.cResult = message.cResult;
        if (message.nScore != null && message.hasOwnProperty("nScore"))
            if (typeof message.nScore === "number")
                object.nScore = options.longs === String ? String(message.nScore) : message.nScore;
            else
                object.nScore = options.longs === String ? $util.Long.prototype.toString.call(message.nScore) : options.longs === Number ? new $util.LongBits(message.nScore.low >>> 0, message.nScore.high >>> 0).toNumber() : message.nScore;
        if (message.nHuType != null && message.hasOwnProperty("nHuType"))
            object.nHuType = message.nHuType;
        if (message.cMingGangNum != null && message.hasOwnProperty("cMingGangNum"))
            object.cMingGangNum = message.cMingGangNum;
        if (message.cAnGangNum != null && message.hasOwnProperty("cAnGangNum"))
            object.cAnGangNum = message.cAnGangNum;
        if (message.cBuGangNum != null && message.hasOwnProperty("cBuGangNum"))
            object.cBuGangNum = message.cBuGangNum;
        if (message.cDianPaoChair != null && message.hasOwnProperty("cDianPaoChair"))
            object.cDianPaoChair = message.cDianPaoChair;
        if (message.cChaJiao != null && message.hasOwnProperty("cChaJiao"))
            object.cChaJiao = message.cChaJiao;
        if (message.bQiangGang != null && message.hasOwnProperty("bQiangGang"))
            object.bQiangGang = message.bQiangGang;
        if (message.bGangHua != null && message.hasOwnProperty("bGangHua"))
            object.bGangHua = message.bGangHua;
        if (message.bGangPao != null && message.hasOwnProperty("bGangPao"))
            object.bGangPao = message.bGangPao;
        if (message.cGenNum != null && message.hasOwnProperty("cGenNum"))
            object.cGenNum = message.cGenNum;
        return object;
    };

    /**
     * Converts this mahjong_st_gameresult to JSON.
     * @function toJSON
     * @memberof mahjong_st_gameresult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_st_gameresult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_st_gameresult;
})();

$root.mahjong_mj_userdata_not = (function() {

    /**
     * Properties of a mahjong_mj_userdata_not.
     * @exports Imahjong_mj_userdata_not
     * @interface Imahjong_mj_userdata_not
     * @property {number} cChairid mahjong_mj_userdata_not cChairid
     * @property {number} nType mahjong_mj_userdata_not nType
     * @property {number|Long} nAmount mahjong_mj_userdata_not nAmount
     * @property {string} strParam mahjong_mj_userdata_not strParam
     */

    /**
     * Constructs a new mahjong_mj_userdata_not.
     * @exports mahjong_mj_userdata_not
     * @classdesc Represents a mahjong_mj_userdata_not.
     * @implements Imahjong_mj_userdata_not
     * @constructor
     * @param {Imahjong_mj_userdata_not=} [properties] Properties to set
     */
    function mahjong_mj_userdata_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_userdata_not cChairid.
     * @member {number} cChairid
     * @memberof mahjong_mj_userdata_not
     * @instance
     */
    mahjong_mj_userdata_not.prototype.cChairid = 0;

    /**
     * mahjong_mj_userdata_not nType.
     * @member {number} nType
     * @memberof mahjong_mj_userdata_not
     * @instance
     */
    mahjong_mj_userdata_not.prototype.nType = 0;

    /**
     * mahjong_mj_userdata_not nAmount.
     * @member {number|Long} nAmount
     * @memberof mahjong_mj_userdata_not
     * @instance
     */
    mahjong_mj_userdata_not.prototype.nAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * mahjong_mj_userdata_not strParam.
     * @member {string} strParam
     * @memberof mahjong_mj_userdata_not
     * @instance
     */
    mahjong_mj_userdata_not.prototype.strParam = "";

    /**
     * Creates a new mahjong_mj_userdata_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_userdata_not
     * @static
     * @param {Imahjong_mj_userdata_not=} [properties] Properties to set
     * @returns {mahjong_mj_userdata_not} mahjong_mj_userdata_not instance
     */
    mahjong_mj_userdata_not.create = function create(properties) {
        return new mahjong_mj_userdata_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_userdata_not message. Does not implicitly {@link mahjong_mj_userdata_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_userdata_not
     * @static
     * @param {Imahjong_mj_userdata_not} message mahjong_mj_userdata_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_userdata_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairid);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nType);
        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.nAmount);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.strParam);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_userdata_not message, length delimited. Does not implicitly {@link mahjong_mj_userdata_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_userdata_not
     * @static
     * @param {Imahjong_mj_userdata_not} message mahjong_mj_userdata_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_userdata_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_userdata_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_userdata_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_userdata_not} mahjong_mj_userdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_userdata_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_userdata_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairid = reader.int32();
                break;
            case 2:
                message.nType = reader.int32();
                break;
            case 3:
                message.nAmount = reader.int64();
                break;
            case 4:
                message.strParam = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairid"))
            throw $util.ProtocolError("missing required 'cChairid'", { instance: message });
        if (!message.hasOwnProperty("nType"))
            throw $util.ProtocolError("missing required 'nType'", { instance: message });
        if (!message.hasOwnProperty("nAmount"))
            throw $util.ProtocolError("missing required 'nAmount'", { instance: message });
        if (!message.hasOwnProperty("strParam"))
            throw $util.ProtocolError("missing required 'strParam'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_userdata_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_userdata_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_userdata_not} mahjong_mj_userdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_userdata_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_userdata_not message.
     * @function verify
     * @memberof mahjong_mj_userdata_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_userdata_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairid))
            return "cChairid: integer expected";
        if (!$util.isInteger(message.nType))
            return "nType: integer expected";
        if (!$util.isInteger(message.nAmount) && !(message.nAmount && $util.isInteger(message.nAmount.low) && $util.isInteger(message.nAmount.high)))
            return "nAmount: integer|Long expected";
        if (!$util.isString(message.strParam))
            return "strParam: string expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_userdata_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_userdata_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_userdata_not} mahjong_mj_userdata_not
     */
    mahjong_mj_userdata_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_userdata_not)
            return object;
        var message = new $root.mahjong_mj_userdata_not();
        if (object.cChairid != null)
            message.cChairid = object.cChairid | 0;
        if (object.nType != null)
            message.nType = object.nType | 0;
        if (object.nAmount != null)
            if ($util.Long)
                (message.nAmount = $util.Long.fromValue(object.nAmount)).unsigned = false;
            else if (typeof object.nAmount === "string")
                message.nAmount = parseInt(object.nAmount, 10);
            else if (typeof object.nAmount === "number")
                message.nAmount = object.nAmount;
            else if (typeof object.nAmount === "object")
                message.nAmount = new $util.LongBits(object.nAmount.low >>> 0, object.nAmount.high >>> 0).toNumber();
        if (object.strParam != null)
            message.strParam = String(object.strParam);
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_userdata_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_userdata_not
     * @static
     * @param {mahjong_mj_userdata_not} message mahjong_mj_userdata_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_userdata_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cChairid = 0;
            object.nType = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.nAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.nAmount = options.longs === String ? "0" : 0;
            object.strParam = "";
        }
        if (message.cChairid != null && message.hasOwnProperty("cChairid"))
            object.cChairid = message.cChairid;
        if (message.nType != null && message.hasOwnProperty("nType"))
            object.nType = message.nType;
        if (message.nAmount != null && message.hasOwnProperty("nAmount"))
            if (typeof message.nAmount === "number")
                object.nAmount = options.longs === String ? String(message.nAmount) : message.nAmount;
            else
                object.nAmount = options.longs === String ? $util.Long.prototype.toString.call(message.nAmount) : options.longs === Number ? new $util.LongBits(message.nAmount.low >>> 0, message.nAmount.high >>> 0).toNumber() : message.nAmount;
        if (message.strParam != null && message.hasOwnProperty("strParam"))
            object.strParam = message.strParam;
        return object;
    };

    /**
     * Converts this mahjong_mj_userdata_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_userdata_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_userdata_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_userdata_not;
})();

$root.mahjong_mj_completedata_not = (function() {

    /**
     * Properties of a mahjong_mj_completedata_not.
     * @exports Imahjong_mj_completedata_not
     * @interface Imahjong_mj_completedata_not
     * @property {number} nDiZhu mahjong_mj_completedata_not nDiZhu
     * @property {number} nLeftCards mahjong_mj_completedata_not nLeftCards
     * @property {number} cBanker mahjong_mj_completedata_not cBanker
     * @property {number} cCurrPly mahjong_mj_completedata_not cCurrPly
     * @property {number} cAutoState mahjong_mj_completedata_not cAutoState
     * @property {number} cAutoType mahjong_mj_completedata_not cAutoType
     * @property {number} sSerialID mahjong_mj_completedata_not sSerialID
     * @property {Array.<Imahjong_mj_changecard_not>|null} [vecPlyData] mahjong_mj_completedata_not vecPlyData
     */

    /**
     * Constructs a new mahjong_mj_completedata_not.
     * @exports mahjong_mj_completedata_not
     * @classdesc Represents a mahjong_mj_completedata_not.
     * @implements Imahjong_mj_completedata_not
     * @constructor
     * @param {Imahjong_mj_completedata_not=} [properties] Properties to set
     */
    function mahjong_mj_completedata_not(properties) {
        this.vecPlyData = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_completedata_not nDiZhu.
     * @member {number} nDiZhu
     * @memberof mahjong_mj_completedata_not
     * @instance
     */
    mahjong_mj_completedata_not.prototype.nDiZhu = 0;

    /**
     * mahjong_mj_completedata_not nLeftCards.
     * @member {number} nLeftCards
     * @memberof mahjong_mj_completedata_not
     * @instance
     */
    mahjong_mj_completedata_not.prototype.nLeftCards = 0;

    /**
     * mahjong_mj_completedata_not cBanker.
     * @member {number} cBanker
     * @memberof mahjong_mj_completedata_not
     * @instance
     */
    mahjong_mj_completedata_not.prototype.cBanker = 0;

    /**
     * mahjong_mj_completedata_not cCurrPly.
     * @member {number} cCurrPly
     * @memberof mahjong_mj_completedata_not
     * @instance
     */
    mahjong_mj_completedata_not.prototype.cCurrPly = 0;

    /**
     * mahjong_mj_completedata_not cAutoState.
     * @member {number} cAutoState
     * @memberof mahjong_mj_completedata_not
     * @instance
     */
    mahjong_mj_completedata_not.prototype.cAutoState = 0;

    /**
     * mahjong_mj_completedata_not cAutoType.
     * @member {number} cAutoType
     * @memberof mahjong_mj_completedata_not
     * @instance
     */
    mahjong_mj_completedata_not.prototype.cAutoType = 0;

    /**
     * mahjong_mj_completedata_not sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_mj_completedata_not
     * @instance
     */
    mahjong_mj_completedata_not.prototype.sSerialID = 0;

    /**
     * mahjong_mj_completedata_not vecPlyData.
     * @member {Array.<Imahjong_mj_changecard_not>} vecPlyData
     * @memberof mahjong_mj_completedata_not
     * @instance
     */
    mahjong_mj_completedata_not.prototype.vecPlyData = $util.emptyArray;

    /**
     * Creates a new mahjong_mj_completedata_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_completedata_not
     * @static
     * @param {Imahjong_mj_completedata_not=} [properties] Properties to set
     * @returns {mahjong_mj_completedata_not} mahjong_mj_completedata_not instance
     */
    mahjong_mj_completedata_not.create = function create(properties) {
        return new mahjong_mj_completedata_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_completedata_not message. Does not implicitly {@link mahjong_mj_completedata_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_completedata_not
     * @static
     * @param {Imahjong_mj_completedata_not} message mahjong_mj_completedata_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_completedata_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nDiZhu);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nLeftCards);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cBanker);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cCurrPly);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cAutoState);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cAutoType);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.sSerialID);
        if (message.vecPlyData != null && message.vecPlyData.length)
            for (var i = 0; i < message.vecPlyData.length; ++i)
                $root.mahjong_mj_changecard_not.encode(message.vecPlyData[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_completedata_not message, length delimited. Does not implicitly {@link mahjong_mj_completedata_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_completedata_not
     * @static
     * @param {Imahjong_mj_completedata_not} message mahjong_mj_completedata_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_completedata_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_completedata_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_completedata_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_completedata_not} mahjong_mj_completedata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_completedata_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_completedata_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nDiZhu = reader.int32();
                break;
            case 2:
                message.nLeftCards = reader.int32();
                break;
            case 3:
                message.cBanker = reader.int32();
                break;
            case 4:
                message.cCurrPly = reader.int32();
                break;
            case 5:
                message.cAutoState = reader.int32();
                break;
            case 6:
                message.cAutoType = reader.int32();
                break;
            case 7:
                message.sSerialID = reader.int32();
                break;
            case 8:
                if (!(message.vecPlyData && message.vecPlyData.length))
                    message.vecPlyData = [];
                message.vecPlyData.push($root.mahjong_mj_changecard_not.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nDiZhu"))
            throw $util.ProtocolError("missing required 'nDiZhu'", { instance: message });
        if (!message.hasOwnProperty("nLeftCards"))
            throw $util.ProtocolError("missing required 'nLeftCards'", { instance: message });
        if (!message.hasOwnProperty("cBanker"))
            throw $util.ProtocolError("missing required 'cBanker'", { instance: message });
        if (!message.hasOwnProperty("cCurrPly"))
            throw $util.ProtocolError("missing required 'cCurrPly'", { instance: message });
        if (!message.hasOwnProperty("cAutoState"))
            throw $util.ProtocolError("missing required 'cAutoState'", { instance: message });
        if (!message.hasOwnProperty("cAutoType"))
            throw $util.ProtocolError("missing required 'cAutoType'", { instance: message });
        if (!message.hasOwnProperty("sSerialID"))
            throw $util.ProtocolError("missing required 'sSerialID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_completedata_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_completedata_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_completedata_not} mahjong_mj_completedata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_completedata_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_completedata_not message.
     * @function verify
     * @memberof mahjong_mj_completedata_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_completedata_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nDiZhu))
            return "nDiZhu: integer expected";
        if (!$util.isInteger(message.nLeftCards))
            return "nLeftCards: integer expected";
        if (!$util.isInteger(message.cBanker))
            return "cBanker: integer expected";
        if (!$util.isInteger(message.cCurrPly))
            return "cCurrPly: integer expected";
        if (!$util.isInteger(message.cAutoState))
            return "cAutoState: integer expected";
        if (!$util.isInteger(message.cAutoType))
            return "cAutoType: integer expected";
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        if (message.vecPlyData != null && message.hasOwnProperty("vecPlyData")) {
            if (!Array.isArray(message.vecPlyData))
                return "vecPlyData: array expected";
            for (var i = 0; i < message.vecPlyData.length; ++i) {
                var error = $root.mahjong_mj_changecard_not.verify(message.vecPlyData[i]);
                if (error)
                    return "vecPlyData." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_mj_completedata_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_completedata_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_completedata_not} mahjong_mj_completedata_not
     */
    mahjong_mj_completedata_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_completedata_not)
            return object;
        var message = new $root.mahjong_mj_completedata_not();
        if (object.nDiZhu != null)
            message.nDiZhu = object.nDiZhu | 0;
        if (object.nLeftCards != null)
            message.nLeftCards = object.nLeftCards | 0;
        if (object.cBanker != null)
            message.cBanker = object.cBanker | 0;
        if (object.cCurrPly != null)
            message.cCurrPly = object.cCurrPly | 0;
        if (object.cAutoState != null)
            message.cAutoState = object.cAutoState | 0;
        if (object.cAutoType != null)
            message.cAutoType = object.cAutoType | 0;
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        if (object.vecPlyData) {
            if (!Array.isArray(object.vecPlyData))
                throw TypeError(".mahjong_mj_completedata_not.vecPlyData: array expected");
            message.vecPlyData = [];
            for (var i = 0; i < object.vecPlyData.length; ++i) {
                if (typeof object.vecPlyData[i] !== "object")
                    throw TypeError(".mahjong_mj_completedata_not.vecPlyData: object expected");
                message.vecPlyData[i] = $root.mahjong_mj_changecard_not.fromObject(object.vecPlyData[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_completedata_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_completedata_not
     * @static
     * @param {mahjong_mj_completedata_not} message mahjong_mj_completedata_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_completedata_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecPlyData = [];
        if (options.defaults) {
            object.nDiZhu = 0;
            object.nLeftCards = 0;
            object.cBanker = 0;
            object.cCurrPly = 0;
            object.cAutoState = 0;
            object.cAutoType = 0;
            object.sSerialID = 0;
        }
        if (message.nDiZhu != null && message.hasOwnProperty("nDiZhu"))
            object.nDiZhu = message.nDiZhu;
        if (message.nLeftCards != null && message.hasOwnProperty("nLeftCards"))
            object.nLeftCards = message.nLeftCards;
        if (message.cBanker != null && message.hasOwnProperty("cBanker"))
            object.cBanker = message.cBanker;
        if (message.cCurrPly != null && message.hasOwnProperty("cCurrPly"))
            object.cCurrPly = message.cCurrPly;
        if (message.cAutoState != null && message.hasOwnProperty("cAutoState"))
            object.cAutoState = message.cAutoState;
        if (message.cAutoType != null && message.hasOwnProperty("cAutoType"))
            object.cAutoType = message.cAutoType;
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        if (message.vecPlyData && message.vecPlyData.length) {
            object.vecPlyData = [];
            for (var j = 0; j < message.vecPlyData.length; ++j)
                object.vecPlyData[j] = $root.mahjong_mj_changecard_not.toObject(message.vecPlyData[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_mj_completedata_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_completedata_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_completedata_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_completedata_not;
})();

$root.mahjong_TaskItem = (function() {

    /**
     * Properties of a mahjong_TaskItem.
     * @exports Imahjong_TaskItem
     * @interface Imahjong_TaskItem
     * @property {number} taskId mahjong_TaskItem taskId
     * @property {string} taskDesc mahjong_TaskItem taskDesc
     * @property {string} taskMission mahjong_TaskItem taskMission
     * @property {number} taskMoneyType mahjong_TaskItem taskMoneyType
     * @property {number} taskMoney mahjong_TaskItem taskMoney
     * @property {number} taskRate mahjong_TaskItem taskRate
     */

    /**
     * Constructs a new mahjong_TaskItem.
     * @exports mahjong_TaskItem
     * @classdesc Represents a mahjong_TaskItem.
     * @implements Imahjong_TaskItem
     * @constructor
     * @param {Imahjong_TaskItem=} [properties] Properties to set
     */
    function mahjong_TaskItem(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_TaskItem taskId.
     * @member {number} taskId
     * @memberof mahjong_TaskItem
     * @instance
     */
    mahjong_TaskItem.prototype.taskId = 0;

    /**
     * mahjong_TaskItem taskDesc.
     * @member {string} taskDesc
     * @memberof mahjong_TaskItem
     * @instance
     */
    mahjong_TaskItem.prototype.taskDesc = "";

    /**
     * mahjong_TaskItem taskMission.
     * @member {string} taskMission
     * @memberof mahjong_TaskItem
     * @instance
     */
    mahjong_TaskItem.prototype.taskMission = "";

    /**
     * mahjong_TaskItem taskMoneyType.
     * @member {number} taskMoneyType
     * @memberof mahjong_TaskItem
     * @instance
     */
    mahjong_TaskItem.prototype.taskMoneyType = 0;

    /**
     * mahjong_TaskItem taskMoney.
     * @member {number} taskMoney
     * @memberof mahjong_TaskItem
     * @instance
     */
    mahjong_TaskItem.prototype.taskMoney = 0;

    /**
     * mahjong_TaskItem taskRate.
     * @member {number} taskRate
     * @memberof mahjong_TaskItem
     * @instance
     */
    mahjong_TaskItem.prototype.taskRate = 0;

    /**
     * Creates a new mahjong_TaskItem instance using the specified properties.
     * @function create
     * @memberof mahjong_TaskItem
     * @static
     * @param {Imahjong_TaskItem=} [properties] Properties to set
     * @returns {mahjong_TaskItem} mahjong_TaskItem instance
     */
    mahjong_TaskItem.create = function create(properties) {
        return new mahjong_TaskItem(properties);
    };

    /**
     * Encodes the specified mahjong_TaskItem message. Does not implicitly {@link mahjong_TaskItem.verify|verify} messages.
     * @function encode
     * @memberof mahjong_TaskItem
     * @static
     * @param {Imahjong_TaskItem} message mahjong_TaskItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_TaskItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.taskId);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.taskDesc);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.taskMission);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.taskMoneyType);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.taskMoney);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.taskRate);
        return writer;
    };

    /**
     * Encodes the specified mahjong_TaskItem message, length delimited. Does not implicitly {@link mahjong_TaskItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_TaskItem
     * @static
     * @param {Imahjong_TaskItem} message mahjong_TaskItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_TaskItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_TaskItem message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_TaskItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_TaskItem} mahjong_TaskItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_TaskItem.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_TaskItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.taskId = reader.int32();
                break;
            case 2:
                message.taskDesc = reader.string();
                break;
            case 3:
                message.taskMission = reader.string();
                break;
            case 4:
                message.taskMoneyType = reader.int32();
                break;
            case 5:
                message.taskMoney = reader.int32();
                break;
            case 6:
                message.taskRate = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("taskId"))
            throw $util.ProtocolError("missing required 'taskId'", { instance: message });
        if (!message.hasOwnProperty("taskDesc"))
            throw $util.ProtocolError("missing required 'taskDesc'", { instance: message });
        if (!message.hasOwnProperty("taskMission"))
            throw $util.ProtocolError("missing required 'taskMission'", { instance: message });
        if (!message.hasOwnProperty("taskMoneyType"))
            throw $util.ProtocolError("missing required 'taskMoneyType'", { instance: message });
        if (!message.hasOwnProperty("taskMoney"))
            throw $util.ProtocolError("missing required 'taskMoney'", { instance: message });
        if (!message.hasOwnProperty("taskRate"))
            throw $util.ProtocolError("missing required 'taskRate'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_TaskItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_TaskItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_TaskItem} mahjong_TaskItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_TaskItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_TaskItem message.
     * @function verify
     * @memberof mahjong_TaskItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_TaskItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.taskId))
            return "taskId: integer expected";
        if (!$util.isString(message.taskDesc))
            return "taskDesc: string expected";
        if (!$util.isString(message.taskMission))
            return "taskMission: string expected";
        if (!$util.isInteger(message.taskMoneyType))
            return "taskMoneyType: integer expected";
        if (!$util.isInteger(message.taskMoney))
            return "taskMoney: integer expected";
        if (!$util.isInteger(message.taskRate))
            return "taskRate: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_TaskItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_TaskItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_TaskItem} mahjong_TaskItem
     */
    mahjong_TaskItem.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_TaskItem)
            return object;
        var message = new $root.mahjong_TaskItem();
        if (object.taskId != null)
            message.taskId = object.taskId | 0;
        if (object.taskDesc != null)
            message.taskDesc = String(object.taskDesc);
        if (object.taskMission != null)
            message.taskMission = String(object.taskMission);
        if (object.taskMoneyType != null)
            message.taskMoneyType = object.taskMoneyType | 0;
        if (object.taskMoney != null)
            message.taskMoney = object.taskMoney | 0;
        if (object.taskRate != null)
            message.taskRate = object.taskRate | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_TaskItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_TaskItem
     * @static
     * @param {mahjong_TaskItem} message mahjong_TaskItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_TaskItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.taskId = 0;
            object.taskDesc = "";
            object.taskMission = "";
            object.taskMoneyType = 0;
            object.taskMoney = 0;
            object.taskRate = 0;
        }
        if (message.taskId != null && message.hasOwnProperty("taskId"))
            object.taskId = message.taskId;
        if (message.taskDesc != null && message.hasOwnProperty("taskDesc"))
            object.taskDesc = message.taskDesc;
        if (message.taskMission != null && message.hasOwnProperty("taskMission"))
            object.taskMission = message.taskMission;
        if (message.taskMoneyType != null && message.hasOwnProperty("taskMoneyType"))
            object.taskMoneyType = message.taskMoneyType;
        if (message.taskMoney != null && message.hasOwnProperty("taskMoney"))
            object.taskMoney = message.taskMoney;
        if (message.taskRate != null && message.hasOwnProperty("taskRate"))
            object.taskRate = message.taskRate;
        return object;
    };

    /**
     * Converts this mahjong_TaskItem to JSON.
     * @function toJSON
     * @memberof mahjong_TaskItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_TaskItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_TaskItem;
})();

$root.mahjong_gang_data = (function() {

    /**
     * Properties of a mahjong_gang_data.
     * @exports Imahjong_gang_data
     * @interface Imahjong_gang_data
     * @property {number} cNum mahjong_gang_data cNum
     * @property {number} nScore mahjong_gang_data nScore
     */

    /**
     * Constructs a new mahjong_gang_data.
     * @exports mahjong_gang_data
     * @classdesc Represents a mahjong_gang_data.
     * @implements Imahjong_gang_data
     * @constructor
     * @param {Imahjong_gang_data=} [properties] Properties to set
     */
    function mahjong_gang_data(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_gang_data cNum.
     * @member {number} cNum
     * @memberof mahjong_gang_data
     * @instance
     */
    mahjong_gang_data.prototype.cNum = 0;

    /**
     * mahjong_gang_data nScore.
     * @member {number} nScore
     * @memberof mahjong_gang_data
     * @instance
     */
    mahjong_gang_data.prototype.nScore = 0;

    /**
     * Creates a new mahjong_gang_data instance using the specified properties.
     * @function create
     * @memberof mahjong_gang_data
     * @static
     * @param {Imahjong_gang_data=} [properties] Properties to set
     * @returns {mahjong_gang_data} mahjong_gang_data instance
     */
    mahjong_gang_data.create = function create(properties) {
        return new mahjong_gang_data(properties);
    };

    /**
     * Encodes the specified mahjong_gang_data message. Does not implicitly {@link mahjong_gang_data.verify|verify} messages.
     * @function encode
     * @memberof mahjong_gang_data
     * @static
     * @param {Imahjong_gang_data} message mahjong_gang_data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_gang_data.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cNum);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nScore);
        return writer;
    };

    /**
     * Encodes the specified mahjong_gang_data message, length delimited. Does not implicitly {@link mahjong_gang_data.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_gang_data
     * @static
     * @param {Imahjong_gang_data} message mahjong_gang_data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_gang_data.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_gang_data message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_gang_data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_gang_data} mahjong_gang_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_gang_data.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_gang_data();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cNum = reader.int32();
                break;
            case 2:
                message.nScore = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cNum"))
            throw $util.ProtocolError("missing required 'cNum'", { instance: message });
        if (!message.hasOwnProperty("nScore"))
            throw $util.ProtocolError("missing required 'nScore'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_gang_data message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_gang_data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_gang_data} mahjong_gang_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_gang_data.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_gang_data message.
     * @function verify
     * @memberof mahjong_gang_data
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_gang_data.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cNum))
            return "cNum: integer expected";
        if (!$util.isInteger(message.nScore))
            return "nScore: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_gang_data message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_gang_data
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_gang_data} mahjong_gang_data
     */
    mahjong_gang_data.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_gang_data)
            return object;
        var message = new $root.mahjong_gang_data();
        if (object.cNum != null)
            message.cNum = object.cNum | 0;
        if (object.nScore != null)
            message.nScore = object.nScore | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_gang_data message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_gang_data
     * @static
     * @param {mahjong_gang_data} message mahjong_gang_data
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_gang_data.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cNum = 0;
            object.nScore = 0;
        }
        if (message.cNum != null && message.hasOwnProperty("cNum"))
            object.cNum = message.cNum;
        if (message.nScore != null && message.hasOwnProperty("nScore"))
            object.nScore = message.nScore;
        return object;
    };

    /**
     * Converts this mahjong_gang_data to JSON.
     * @function toJSON
     * @memberof mahjong_gang_data
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_gang_data.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_gang_data;
})();

$root.mahjong_gc_get_redpackets_award_ack = (function() {

    /**
     * Properties of a mahjong_gc_get_redpackets_award_ack.
     * @exports Imahjong_gc_get_redpackets_award_ack
     * @interface Imahjong_gc_get_redpackets_award_ack
     * @property {number} ret mahjong_gc_get_redpackets_award_ack ret
     * @property {number} curRounds mahjong_gc_get_redpackets_award_ack curRounds
     * @property {number} limitRounds mahjong_gc_get_redpackets_award_ack limitRounds
     * @property {number} nAmount mahjong_gc_get_redpackets_award_ack nAmount
     * @property {number} cItemtype mahjong_gc_get_redpackets_award_ack cItemtype
     * @property {number} taskId mahjong_gc_get_redpackets_award_ack taskId
     * @property {Array.<Imahjong_player_itemInfo>|null} [fakeItem] mahjong_gc_get_redpackets_award_ack fakeItem
     */

    /**
     * Constructs a new mahjong_gc_get_redpackets_award_ack.
     * @exports mahjong_gc_get_redpackets_award_ack
     * @classdesc Represents a mahjong_gc_get_redpackets_award_ack.
     * @implements Imahjong_gc_get_redpackets_award_ack
     * @constructor
     * @param {Imahjong_gc_get_redpackets_award_ack=} [properties] Properties to set
     */
    function mahjong_gc_get_redpackets_award_ack(properties) {
        this.fakeItem = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_gc_get_redpackets_award_ack ret.
     * @member {number} ret
     * @memberof mahjong_gc_get_redpackets_award_ack
     * @instance
     */
    mahjong_gc_get_redpackets_award_ack.prototype.ret = 0;

    /**
     * mahjong_gc_get_redpackets_award_ack curRounds.
     * @member {number} curRounds
     * @memberof mahjong_gc_get_redpackets_award_ack
     * @instance
     */
    mahjong_gc_get_redpackets_award_ack.prototype.curRounds = 0;

    /**
     * mahjong_gc_get_redpackets_award_ack limitRounds.
     * @member {number} limitRounds
     * @memberof mahjong_gc_get_redpackets_award_ack
     * @instance
     */
    mahjong_gc_get_redpackets_award_ack.prototype.limitRounds = 0;

    /**
     * mahjong_gc_get_redpackets_award_ack nAmount.
     * @member {number} nAmount
     * @memberof mahjong_gc_get_redpackets_award_ack
     * @instance
     */
    mahjong_gc_get_redpackets_award_ack.prototype.nAmount = 0;

    /**
     * mahjong_gc_get_redpackets_award_ack cItemtype.
     * @member {number} cItemtype
     * @memberof mahjong_gc_get_redpackets_award_ack
     * @instance
     */
    mahjong_gc_get_redpackets_award_ack.prototype.cItemtype = 0;

    /**
     * mahjong_gc_get_redpackets_award_ack taskId.
     * @member {number} taskId
     * @memberof mahjong_gc_get_redpackets_award_ack
     * @instance
     */
    mahjong_gc_get_redpackets_award_ack.prototype.taskId = 0;

    /**
     * mahjong_gc_get_redpackets_award_ack fakeItem.
     * @member {Array.<Imahjong_player_itemInfo>} fakeItem
     * @memberof mahjong_gc_get_redpackets_award_ack
     * @instance
     */
    mahjong_gc_get_redpackets_award_ack.prototype.fakeItem = $util.emptyArray;

    /**
     * Creates a new mahjong_gc_get_redpackets_award_ack instance using the specified properties.
     * @function create
     * @memberof mahjong_gc_get_redpackets_award_ack
     * @static
     * @param {Imahjong_gc_get_redpackets_award_ack=} [properties] Properties to set
     * @returns {mahjong_gc_get_redpackets_award_ack} mahjong_gc_get_redpackets_award_ack instance
     */
    mahjong_gc_get_redpackets_award_ack.create = function create(properties) {
        return new mahjong_gc_get_redpackets_award_ack(properties);
    };

    /**
     * Encodes the specified mahjong_gc_get_redpackets_award_ack message. Does not implicitly {@link mahjong_gc_get_redpackets_award_ack.verify|verify} messages.
     * @function encode
     * @memberof mahjong_gc_get_redpackets_award_ack
     * @static
     * @param {Imahjong_gc_get_redpackets_award_ack} message mahjong_gc_get_redpackets_award_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_gc_get_redpackets_award_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.curRounds);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.limitRounds);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nAmount);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cItemtype);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.taskId);
        if (message.fakeItem != null && message.fakeItem.length)
            for (var i = 0; i < message.fakeItem.length; ++i)
                $root.mahjong_player_itemInfo.encode(message.fakeItem[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_gc_get_redpackets_award_ack message, length delimited. Does not implicitly {@link mahjong_gc_get_redpackets_award_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_gc_get_redpackets_award_ack
     * @static
     * @param {Imahjong_gc_get_redpackets_award_ack} message mahjong_gc_get_redpackets_award_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_gc_get_redpackets_award_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_gc_get_redpackets_award_ack message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_gc_get_redpackets_award_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_gc_get_redpackets_award_ack} mahjong_gc_get_redpackets_award_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_gc_get_redpackets_award_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_gc_get_redpackets_award_ack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ret = reader.int32();
                break;
            case 2:
                message.curRounds = reader.int32();
                break;
            case 3:
                message.limitRounds = reader.int32();
                break;
            case 4:
                message.nAmount = reader.int32();
                break;
            case 5:
                message.cItemtype = reader.int32();
                break;
            case 6:
                message.taskId = reader.int32();
                break;
            case 7:
                if (!(message.fakeItem && message.fakeItem.length))
                    message.fakeItem = [];
                message.fakeItem.push($root.mahjong_player_itemInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("ret"))
            throw $util.ProtocolError("missing required 'ret'", { instance: message });
        if (!message.hasOwnProperty("curRounds"))
            throw $util.ProtocolError("missing required 'curRounds'", { instance: message });
        if (!message.hasOwnProperty("limitRounds"))
            throw $util.ProtocolError("missing required 'limitRounds'", { instance: message });
        if (!message.hasOwnProperty("nAmount"))
            throw $util.ProtocolError("missing required 'nAmount'", { instance: message });
        if (!message.hasOwnProperty("cItemtype"))
            throw $util.ProtocolError("missing required 'cItemtype'", { instance: message });
        if (!message.hasOwnProperty("taskId"))
            throw $util.ProtocolError("missing required 'taskId'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_gc_get_redpackets_award_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_gc_get_redpackets_award_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_gc_get_redpackets_award_ack} mahjong_gc_get_redpackets_award_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_gc_get_redpackets_award_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_gc_get_redpackets_award_ack message.
     * @function verify
     * @memberof mahjong_gc_get_redpackets_award_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_gc_get_redpackets_award_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.ret))
            return "ret: integer expected";
        if (!$util.isInteger(message.curRounds))
            return "curRounds: integer expected";
        if (!$util.isInteger(message.limitRounds))
            return "limitRounds: integer expected";
        if (!$util.isInteger(message.nAmount))
            return "nAmount: integer expected";
        if (!$util.isInteger(message.cItemtype))
            return "cItemtype: integer expected";
        if (!$util.isInteger(message.taskId))
            return "taskId: integer expected";
        if (message.fakeItem != null && message.hasOwnProperty("fakeItem")) {
            if (!Array.isArray(message.fakeItem))
                return "fakeItem: array expected";
            for (var i = 0; i < message.fakeItem.length; ++i) {
                var error = $root.mahjong_player_itemInfo.verify(message.fakeItem[i]);
                if (error)
                    return "fakeItem." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_gc_get_redpackets_award_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_gc_get_redpackets_award_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_gc_get_redpackets_award_ack} mahjong_gc_get_redpackets_award_ack
     */
    mahjong_gc_get_redpackets_award_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_gc_get_redpackets_award_ack)
            return object;
        var message = new $root.mahjong_gc_get_redpackets_award_ack();
        if (object.ret != null)
            message.ret = object.ret | 0;
        if (object.curRounds != null)
            message.curRounds = object.curRounds | 0;
        if (object.limitRounds != null)
            message.limitRounds = object.limitRounds | 0;
        if (object.nAmount != null)
            message.nAmount = object.nAmount | 0;
        if (object.cItemtype != null)
            message.cItemtype = object.cItemtype | 0;
        if (object.taskId != null)
            message.taskId = object.taskId | 0;
        if (object.fakeItem) {
            if (!Array.isArray(object.fakeItem))
                throw TypeError(".mahjong_gc_get_redpackets_award_ack.fakeItem: array expected");
            message.fakeItem = [];
            for (var i = 0; i < object.fakeItem.length; ++i) {
                if (typeof object.fakeItem[i] !== "object")
                    throw TypeError(".mahjong_gc_get_redpackets_award_ack.fakeItem: object expected");
                message.fakeItem[i] = $root.mahjong_player_itemInfo.fromObject(object.fakeItem[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_gc_get_redpackets_award_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_gc_get_redpackets_award_ack
     * @static
     * @param {mahjong_gc_get_redpackets_award_ack} message mahjong_gc_get_redpackets_award_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_gc_get_redpackets_award_ack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.fakeItem = [];
        if (options.defaults) {
            object.ret = 0;
            object.curRounds = 0;
            object.limitRounds = 0;
            object.nAmount = 0;
            object.cItemtype = 0;
            object.taskId = 0;
        }
        if (message.ret != null && message.hasOwnProperty("ret"))
            object.ret = message.ret;
        if (message.curRounds != null && message.hasOwnProperty("curRounds"))
            object.curRounds = message.curRounds;
        if (message.limitRounds != null && message.hasOwnProperty("limitRounds"))
            object.limitRounds = message.limitRounds;
        if (message.nAmount != null && message.hasOwnProperty("nAmount"))
            object.nAmount = message.nAmount;
        if (message.cItemtype != null && message.hasOwnProperty("cItemtype"))
            object.cItemtype = message.cItemtype;
        if (message.taskId != null && message.hasOwnProperty("taskId"))
            object.taskId = message.taskId;
        if (message.fakeItem && message.fakeItem.length) {
            object.fakeItem = [];
            for (var j = 0; j < message.fakeItem.length; ++j)
                object.fakeItem[j] = $root.mahjong_player_itemInfo.toObject(message.fakeItem[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_gc_get_redpackets_award_ack to JSON.
     * @function toJSON
     * @memberof mahjong_gc_get_redpackets_award_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_gc_get_redpackets_award_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_gc_get_redpackets_award_ack;
})();

$root.mahjong_mj_charged_ack = (function() {

    /**
     * Properties of a mahjong_mj_charged_ack.
     * @exports Imahjong_mj_charged_ack
     * @interface Imahjong_mj_charged_ack
     * @property {number} cRet mahjong_mj_charged_ack cRet
     * @property {number} sSerialID mahjong_mj_charged_ack sSerialID
     */

    /**
     * Constructs a new mahjong_mj_charged_ack.
     * @exports mahjong_mj_charged_ack
     * @classdesc Represents a mahjong_mj_charged_ack.
     * @implements Imahjong_mj_charged_ack
     * @constructor
     * @param {Imahjong_mj_charged_ack=} [properties] Properties to set
     */
    function mahjong_mj_charged_ack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_charged_ack cRet.
     * @member {number} cRet
     * @memberof mahjong_mj_charged_ack
     * @instance
     */
    mahjong_mj_charged_ack.prototype.cRet = 0;

    /**
     * mahjong_mj_charged_ack sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_mj_charged_ack
     * @instance
     */
    mahjong_mj_charged_ack.prototype.sSerialID = 0;

    /**
     * Creates a new mahjong_mj_charged_ack instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_charged_ack
     * @static
     * @param {Imahjong_mj_charged_ack=} [properties] Properties to set
     * @returns {mahjong_mj_charged_ack} mahjong_mj_charged_ack instance
     */
    mahjong_mj_charged_ack.create = function create(properties) {
        return new mahjong_mj_charged_ack(properties);
    };

    /**
     * Encodes the specified mahjong_mj_charged_ack message. Does not implicitly {@link mahjong_mj_charged_ack.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_charged_ack
     * @static
     * @param {Imahjong_mj_charged_ack} message mahjong_mj_charged_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_charged_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cRet);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sSerialID);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_charged_ack message, length delimited. Does not implicitly {@link mahjong_mj_charged_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_charged_ack
     * @static
     * @param {Imahjong_mj_charged_ack} message mahjong_mj_charged_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_charged_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_charged_ack message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_charged_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_charged_ack} mahjong_mj_charged_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_charged_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_charged_ack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cRet = reader.int32();
                break;
            case 2:
                message.sSerialID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cRet"))
            throw $util.ProtocolError("missing required 'cRet'", { instance: message });
        if (!message.hasOwnProperty("sSerialID"))
            throw $util.ProtocolError("missing required 'sSerialID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_charged_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_charged_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_charged_ack} mahjong_mj_charged_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_charged_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_charged_ack message.
     * @function verify
     * @memberof mahjong_mj_charged_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_charged_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cRet))
            return "cRet: integer expected";
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_charged_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_charged_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_charged_ack} mahjong_mj_charged_ack
     */
    mahjong_mj_charged_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_charged_ack)
            return object;
        var message = new $root.mahjong_mj_charged_ack();
        if (object.cRet != null)
            message.cRet = object.cRet | 0;
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_charged_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_charged_ack
     * @static
     * @param {mahjong_mj_charged_ack} message mahjong_mj_charged_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_charged_ack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cRet = 0;
            object.sSerialID = 0;
        }
        if (message.cRet != null && message.hasOwnProperty("cRet"))
            object.cRet = message.cRet;
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        return object;
    };

    /**
     * Converts this mahjong_mj_charged_ack to JSON.
     * @function toJSON
     * @memberof mahjong_mj_charged_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_charged_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_charged_ack;
})();

$root.mahjong_mj_visi_compdata_req = (function() {

    /**
     * Properties of a mahjong_mj_visi_compdata_req.
     * @exports Imahjong_mj_visi_compdata_req
     * @interface Imahjong_mj_visi_compdata_req
     */

    /**
     * Constructs a new mahjong_mj_visi_compdata_req.
     * @exports mahjong_mj_visi_compdata_req
     * @classdesc Represents a mahjong_mj_visi_compdata_req.
     * @implements Imahjong_mj_visi_compdata_req
     * @constructor
     * @param {Imahjong_mj_visi_compdata_req=} [properties] Properties to set
     */
    function mahjong_mj_visi_compdata_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_mj_visi_compdata_req instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_visi_compdata_req
     * @static
     * @param {Imahjong_mj_visi_compdata_req=} [properties] Properties to set
     * @returns {mahjong_mj_visi_compdata_req} mahjong_mj_visi_compdata_req instance
     */
    mahjong_mj_visi_compdata_req.create = function create(properties) {
        return new mahjong_mj_visi_compdata_req(properties);
    };

    /**
     * Encodes the specified mahjong_mj_visi_compdata_req message. Does not implicitly {@link mahjong_mj_visi_compdata_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_visi_compdata_req
     * @static
     * @param {Imahjong_mj_visi_compdata_req} message mahjong_mj_visi_compdata_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_visi_compdata_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_visi_compdata_req message, length delimited. Does not implicitly {@link mahjong_mj_visi_compdata_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_visi_compdata_req
     * @static
     * @param {Imahjong_mj_visi_compdata_req} message mahjong_mj_visi_compdata_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_visi_compdata_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_visi_compdata_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_visi_compdata_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_visi_compdata_req} mahjong_mj_visi_compdata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_visi_compdata_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_visi_compdata_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_mj_visi_compdata_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_visi_compdata_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_visi_compdata_req} mahjong_mj_visi_compdata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_visi_compdata_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_visi_compdata_req message.
     * @function verify
     * @memberof mahjong_mj_visi_compdata_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_visi_compdata_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_visi_compdata_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_visi_compdata_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_visi_compdata_req} mahjong_mj_visi_compdata_req
     */
    mahjong_mj_visi_compdata_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_visi_compdata_req)
            return object;
        return new $root.mahjong_mj_visi_compdata_req();
    };

    /**
     * Creates a plain object from a mahjong_mj_visi_compdata_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_visi_compdata_req
     * @static
     * @param {mahjong_mj_visi_compdata_req} message mahjong_mj_visi_compdata_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_visi_compdata_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_mj_visi_compdata_req to JSON.
     * @function toJSON
     * @memberof mahjong_mj_visi_compdata_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_visi_compdata_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_visi_compdata_req;
})();

$root.mahjong_fan_data_v2_2_0 = (function() {

    /**
     * Properties of a mahjong_fan_data_v2_2_0.
     * @exports Imahjong_fan_data_v2_2_0
     * @interface Imahjong_fan_data_v2_2_0
     * @property {number} cChairId mahjong_fan_data_v2_2_0 cChairId
     * @property {number} nScore mahjong_fan_data_v2_2_0 nScore
     * @property {number} cType mahjong_fan_data_v2_2_0 cType
     * @property {number} nIndex mahjong_fan_data_v2_2_0 nIndex
     */

    /**
     * Constructs a new mahjong_fan_data_v2_2_0.
     * @exports mahjong_fan_data_v2_2_0
     * @classdesc Represents a mahjong_fan_data_v2_2_0.
     * @implements Imahjong_fan_data_v2_2_0
     * @constructor
     * @param {Imahjong_fan_data_v2_2_0=} [properties] Properties to set
     */
    function mahjong_fan_data_v2_2_0(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_fan_data_v2_2_0 cChairId.
     * @member {number} cChairId
     * @memberof mahjong_fan_data_v2_2_0
     * @instance
     */
    mahjong_fan_data_v2_2_0.prototype.cChairId = 0;

    /**
     * mahjong_fan_data_v2_2_0 nScore.
     * @member {number} nScore
     * @memberof mahjong_fan_data_v2_2_0
     * @instance
     */
    mahjong_fan_data_v2_2_0.prototype.nScore = 0;

    /**
     * mahjong_fan_data_v2_2_0 cType.
     * @member {number} cType
     * @memberof mahjong_fan_data_v2_2_0
     * @instance
     */
    mahjong_fan_data_v2_2_0.prototype.cType = 0;

    /**
     * mahjong_fan_data_v2_2_0 nIndex.
     * @member {number} nIndex
     * @memberof mahjong_fan_data_v2_2_0
     * @instance
     */
    mahjong_fan_data_v2_2_0.prototype.nIndex = 0;

    /**
     * Creates a new mahjong_fan_data_v2_2_0 instance using the specified properties.
     * @function create
     * @memberof mahjong_fan_data_v2_2_0
     * @static
     * @param {Imahjong_fan_data_v2_2_0=} [properties] Properties to set
     * @returns {mahjong_fan_data_v2_2_0} mahjong_fan_data_v2_2_0 instance
     */
    mahjong_fan_data_v2_2_0.create = function create(properties) {
        return new mahjong_fan_data_v2_2_0(properties);
    };

    /**
     * Encodes the specified mahjong_fan_data_v2_2_0 message. Does not implicitly {@link mahjong_fan_data_v2_2_0.verify|verify} messages.
     * @function encode
     * @memberof mahjong_fan_data_v2_2_0
     * @static
     * @param {Imahjong_fan_data_v2_2_0} message mahjong_fan_data_v2_2_0 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_fan_data_v2_2_0.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nScore);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cType);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nIndex);
        return writer;
    };

    /**
     * Encodes the specified mahjong_fan_data_v2_2_0 message, length delimited. Does not implicitly {@link mahjong_fan_data_v2_2_0.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_fan_data_v2_2_0
     * @static
     * @param {Imahjong_fan_data_v2_2_0} message mahjong_fan_data_v2_2_0 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_fan_data_v2_2_0.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_fan_data_v2_2_0 message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_fan_data_v2_2_0
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_fan_data_v2_2_0} mahjong_fan_data_v2_2_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_fan_data_v2_2_0.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_fan_data_v2_2_0();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairId = reader.int32();
                break;
            case 2:
                message.nScore = reader.int32();
                break;
            case 3:
                message.cType = reader.int32();
                break;
            case 4:
                message.nIndex = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairId"))
            throw $util.ProtocolError("missing required 'cChairId'", { instance: message });
        if (!message.hasOwnProperty("nScore"))
            throw $util.ProtocolError("missing required 'nScore'", { instance: message });
        if (!message.hasOwnProperty("cType"))
            throw $util.ProtocolError("missing required 'cType'", { instance: message });
        if (!message.hasOwnProperty("nIndex"))
            throw $util.ProtocolError("missing required 'nIndex'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_fan_data_v2_2_0 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_fan_data_v2_2_0
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_fan_data_v2_2_0} mahjong_fan_data_v2_2_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_fan_data_v2_2_0.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_fan_data_v2_2_0 message.
     * @function verify
     * @memberof mahjong_fan_data_v2_2_0
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_fan_data_v2_2_0.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairId))
            return "cChairId: integer expected";
        if (!$util.isInteger(message.nScore))
            return "nScore: integer expected";
        if (!$util.isInteger(message.cType))
            return "cType: integer expected";
        if (!$util.isInteger(message.nIndex))
            return "nIndex: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_fan_data_v2_2_0 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_fan_data_v2_2_0
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_fan_data_v2_2_0} mahjong_fan_data_v2_2_0
     */
    mahjong_fan_data_v2_2_0.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_fan_data_v2_2_0)
            return object;
        var message = new $root.mahjong_fan_data_v2_2_0();
        if (object.cChairId != null)
            message.cChairId = object.cChairId | 0;
        if (object.nScore != null)
            message.nScore = object.nScore | 0;
        if (object.cType != null)
            message.cType = object.cType | 0;
        if (object.nIndex != null)
            message.nIndex = object.nIndex | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_fan_data_v2_2_0 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_fan_data_v2_2_0
     * @static
     * @param {mahjong_fan_data_v2_2_0} message mahjong_fan_data_v2_2_0
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_fan_data_v2_2_0.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cChairId = 0;
            object.nScore = 0;
            object.cType = 0;
            object.nIndex = 0;
        }
        if (message.cChairId != null && message.hasOwnProperty("cChairId"))
            object.cChairId = message.cChairId;
        if (message.nScore != null && message.hasOwnProperty("nScore"))
            object.nScore = message.nScore;
        if (message.cType != null && message.hasOwnProperty("cType"))
            object.cType = message.cType;
        if (message.nIndex != null && message.hasOwnProperty("nIndex"))
            object.nIndex = message.nIndex;
        return object;
    };

    /**
     * Converts this mahjong_fan_data_v2_2_0 to JSON.
     * @function toJSON
     * @memberof mahjong_fan_data_v2_2_0
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_fan_data_v2_2_0.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_fan_data_v2_2_0;
})();

$root.mahjong_gc_get_redpackets_88yuan_award_ack = (function() {

    /**
     * Properties of a mahjong_gc_get_redpackets_88yuan_award_ack.
     * @exports Imahjong_gc_get_redpackets_88yuan_award_ack
     * @interface Imahjong_gc_get_redpackets_88yuan_award_ack
     * @property {number} ret mahjong_gc_get_redpackets_88yuan_award_ack ret
     * @property {number} curRounds mahjong_gc_get_redpackets_88yuan_award_ack curRounds
     * @property {number} limitRounds mahjong_gc_get_redpackets_88yuan_award_ack limitRounds
     * @property {number} nAmount mahjong_gc_get_redpackets_88yuan_award_ack nAmount
     * @property {number} cItemtype mahjong_gc_get_redpackets_88yuan_award_ack cItemtype
     * @property {number} taskId mahjong_gc_get_redpackets_88yuan_award_ack taskId
     */

    /**
     * Constructs a new mahjong_gc_get_redpackets_88yuan_award_ack.
     * @exports mahjong_gc_get_redpackets_88yuan_award_ack
     * @classdesc Represents a mahjong_gc_get_redpackets_88yuan_award_ack.
     * @implements Imahjong_gc_get_redpackets_88yuan_award_ack
     * @constructor
     * @param {Imahjong_gc_get_redpackets_88yuan_award_ack=} [properties] Properties to set
     */
    function mahjong_gc_get_redpackets_88yuan_award_ack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_gc_get_redpackets_88yuan_award_ack ret.
     * @member {number} ret
     * @memberof mahjong_gc_get_redpackets_88yuan_award_ack
     * @instance
     */
    mahjong_gc_get_redpackets_88yuan_award_ack.prototype.ret = 0;

    /**
     * mahjong_gc_get_redpackets_88yuan_award_ack curRounds.
     * @member {number} curRounds
     * @memberof mahjong_gc_get_redpackets_88yuan_award_ack
     * @instance
     */
    mahjong_gc_get_redpackets_88yuan_award_ack.prototype.curRounds = 0;

    /**
     * mahjong_gc_get_redpackets_88yuan_award_ack limitRounds.
     * @member {number} limitRounds
     * @memberof mahjong_gc_get_redpackets_88yuan_award_ack
     * @instance
     */
    mahjong_gc_get_redpackets_88yuan_award_ack.prototype.limitRounds = 0;

    /**
     * mahjong_gc_get_redpackets_88yuan_award_ack nAmount.
     * @member {number} nAmount
     * @memberof mahjong_gc_get_redpackets_88yuan_award_ack
     * @instance
     */
    mahjong_gc_get_redpackets_88yuan_award_ack.prototype.nAmount = 0;

    /**
     * mahjong_gc_get_redpackets_88yuan_award_ack cItemtype.
     * @member {number} cItemtype
     * @memberof mahjong_gc_get_redpackets_88yuan_award_ack
     * @instance
     */
    mahjong_gc_get_redpackets_88yuan_award_ack.prototype.cItemtype = 0;

    /**
     * mahjong_gc_get_redpackets_88yuan_award_ack taskId.
     * @member {number} taskId
     * @memberof mahjong_gc_get_redpackets_88yuan_award_ack
     * @instance
     */
    mahjong_gc_get_redpackets_88yuan_award_ack.prototype.taskId = 0;

    /**
     * Creates a new mahjong_gc_get_redpackets_88yuan_award_ack instance using the specified properties.
     * @function create
     * @memberof mahjong_gc_get_redpackets_88yuan_award_ack
     * @static
     * @param {Imahjong_gc_get_redpackets_88yuan_award_ack=} [properties] Properties to set
     * @returns {mahjong_gc_get_redpackets_88yuan_award_ack} mahjong_gc_get_redpackets_88yuan_award_ack instance
     */
    mahjong_gc_get_redpackets_88yuan_award_ack.create = function create(properties) {
        return new mahjong_gc_get_redpackets_88yuan_award_ack(properties);
    };

    /**
     * Encodes the specified mahjong_gc_get_redpackets_88yuan_award_ack message. Does not implicitly {@link mahjong_gc_get_redpackets_88yuan_award_ack.verify|verify} messages.
     * @function encode
     * @memberof mahjong_gc_get_redpackets_88yuan_award_ack
     * @static
     * @param {Imahjong_gc_get_redpackets_88yuan_award_ack} message mahjong_gc_get_redpackets_88yuan_award_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_gc_get_redpackets_88yuan_award_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.curRounds);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.limitRounds);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nAmount);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cItemtype);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.taskId);
        return writer;
    };

    /**
     * Encodes the specified mahjong_gc_get_redpackets_88yuan_award_ack message, length delimited. Does not implicitly {@link mahjong_gc_get_redpackets_88yuan_award_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_gc_get_redpackets_88yuan_award_ack
     * @static
     * @param {Imahjong_gc_get_redpackets_88yuan_award_ack} message mahjong_gc_get_redpackets_88yuan_award_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_gc_get_redpackets_88yuan_award_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_gc_get_redpackets_88yuan_award_ack message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_gc_get_redpackets_88yuan_award_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_gc_get_redpackets_88yuan_award_ack} mahjong_gc_get_redpackets_88yuan_award_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_gc_get_redpackets_88yuan_award_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_gc_get_redpackets_88yuan_award_ack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ret = reader.int32();
                break;
            case 2:
                message.curRounds = reader.int32();
                break;
            case 3:
                message.limitRounds = reader.int32();
                break;
            case 4:
                message.nAmount = reader.int32();
                break;
            case 5:
                message.cItemtype = reader.int32();
                break;
            case 6:
                message.taskId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("ret"))
            throw $util.ProtocolError("missing required 'ret'", { instance: message });
        if (!message.hasOwnProperty("curRounds"))
            throw $util.ProtocolError("missing required 'curRounds'", { instance: message });
        if (!message.hasOwnProperty("limitRounds"))
            throw $util.ProtocolError("missing required 'limitRounds'", { instance: message });
        if (!message.hasOwnProperty("nAmount"))
            throw $util.ProtocolError("missing required 'nAmount'", { instance: message });
        if (!message.hasOwnProperty("cItemtype"))
            throw $util.ProtocolError("missing required 'cItemtype'", { instance: message });
        if (!message.hasOwnProperty("taskId"))
            throw $util.ProtocolError("missing required 'taskId'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_gc_get_redpackets_88yuan_award_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_gc_get_redpackets_88yuan_award_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_gc_get_redpackets_88yuan_award_ack} mahjong_gc_get_redpackets_88yuan_award_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_gc_get_redpackets_88yuan_award_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_gc_get_redpackets_88yuan_award_ack message.
     * @function verify
     * @memberof mahjong_gc_get_redpackets_88yuan_award_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_gc_get_redpackets_88yuan_award_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.ret))
            return "ret: integer expected";
        if (!$util.isInteger(message.curRounds))
            return "curRounds: integer expected";
        if (!$util.isInteger(message.limitRounds))
            return "limitRounds: integer expected";
        if (!$util.isInteger(message.nAmount))
            return "nAmount: integer expected";
        if (!$util.isInteger(message.cItemtype))
            return "cItemtype: integer expected";
        if (!$util.isInteger(message.taskId))
            return "taskId: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_gc_get_redpackets_88yuan_award_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_gc_get_redpackets_88yuan_award_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_gc_get_redpackets_88yuan_award_ack} mahjong_gc_get_redpackets_88yuan_award_ack
     */
    mahjong_gc_get_redpackets_88yuan_award_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_gc_get_redpackets_88yuan_award_ack)
            return object;
        var message = new $root.mahjong_gc_get_redpackets_88yuan_award_ack();
        if (object.ret != null)
            message.ret = object.ret | 0;
        if (object.curRounds != null)
            message.curRounds = object.curRounds | 0;
        if (object.limitRounds != null)
            message.limitRounds = object.limitRounds | 0;
        if (object.nAmount != null)
            message.nAmount = object.nAmount | 0;
        if (object.cItemtype != null)
            message.cItemtype = object.cItemtype | 0;
        if (object.taskId != null)
            message.taskId = object.taskId | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_gc_get_redpackets_88yuan_award_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_gc_get_redpackets_88yuan_award_ack
     * @static
     * @param {mahjong_gc_get_redpackets_88yuan_award_ack} message mahjong_gc_get_redpackets_88yuan_award_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_gc_get_redpackets_88yuan_award_ack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ret = 0;
            object.curRounds = 0;
            object.limitRounds = 0;
            object.nAmount = 0;
            object.cItemtype = 0;
            object.taskId = 0;
        }
        if (message.ret != null && message.hasOwnProperty("ret"))
            object.ret = message.ret;
        if (message.curRounds != null && message.hasOwnProperty("curRounds"))
            object.curRounds = message.curRounds;
        if (message.limitRounds != null && message.hasOwnProperty("limitRounds"))
            object.limitRounds = message.limitRounds;
        if (message.nAmount != null && message.hasOwnProperty("nAmount"))
            object.nAmount = message.nAmount;
        if (message.cItemtype != null && message.hasOwnProperty("cItemtype"))
            object.cItemtype = message.cItemtype;
        if (message.taskId != null && message.hasOwnProperty("taskId"))
            object.taskId = message.taskId;
        return object;
    };

    /**
     * Converts this mahjong_gc_get_redpackets_88yuan_award_ack to JSON.
     * @function toJSON
     * @memberof mahjong_gc_get_redpackets_88yuan_award_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_gc_get_redpackets_88yuan_award_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_gc_get_redpackets_88yuan_award_ack;
})();

$root.mahjong_mj_gang_score_not = (function() {

    /**
     * Properties of a mahjong_mj_gang_score_not.
     * @exports Imahjong_mj_gang_score_not
     * @interface Imahjong_mj_gang_score_not
     * @property {number} chairId mahjong_mj_gang_score_not chairId
     * @property {number} type mahjong_mj_gang_score_not type
     * @property {number} score mahjong_mj_gang_score_not score
     */

    /**
     * Constructs a new mahjong_mj_gang_score_not.
     * @exports mahjong_mj_gang_score_not
     * @classdesc Represents a mahjong_mj_gang_score_not.
     * @implements Imahjong_mj_gang_score_not
     * @constructor
     * @param {Imahjong_mj_gang_score_not=} [properties] Properties to set
     */
    function mahjong_mj_gang_score_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_gang_score_not chairId.
     * @member {number} chairId
     * @memberof mahjong_mj_gang_score_not
     * @instance
     */
    mahjong_mj_gang_score_not.prototype.chairId = 0;

    /**
     * mahjong_mj_gang_score_not type.
     * @member {number} type
     * @memberof mahjong_mj_gang_score_not
     * @instance
     */
    mahjong_mj_gang_score_not.prototype.type = 0;

    /**
     * mahjong_mj_gang_score_not score.
     * @member {number} score
     * @memberof mahjong_mj_gang_score_not
     * @instance
     */
    mahjong_mj_gang_score_not.prototype.score = 0;

    /**
     * Creates a new mahjong_mj_gang_score_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_gang_score_not
     * @static
     * @param {Imahjong_mj_gang_score_not=} [properties] Properties to set
     * @returns {mahjong_mj_gang_score_not} mahjong_mj_gang_score_not instance
     */
    mahjong_mj_gang_score_not.create = function create(properties) {
        return new mahjong_mj_gang_score_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_gang_score_not message. Does not implicitly {@link mahjong_mj_gang_score_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_gang_score_not
     * @static
     * @param {Imahjong_mj_gang_score_not} message mahjong_mj_gang_score_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_gang_score_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.score);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_gang_score_not message, length delimited. Does not implicitly {@link mahjong_mj_gang_score_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_gang_score_not
     * @static
     * @param {Imahjong_mj_gang_score_not} message mahjong_mj_gang_score_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_gang_score_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_gang_score_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_gang_score_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_gang_score_not} mahjong_mj_gang_score_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_gang_score_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_gang_score_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.chairId = reader.int32();
                break;
            case 2:
                message.type = reader.int32();
                break;
            case 3:
                message.score = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("chairId"))
            throw $util.ProtocolError("missing required 'chairId'", { instance: message });
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        if (!message.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_gang_score_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_gang_score_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_gang_score_not} mahjong_mj_gang_score_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_gang_score_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_gang_score_not message.
     * @function verify
     * @memberof mahjong_mj_gang_score_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_gang_score_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.chairId))
            return "chairId: integer expected";
        if (!$util.isInteger(message.type))
            return "type: integer expected";
        if (!$util.isInteger(message.score))
            return "score: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_gang_score_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_gang_score_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_gang_score_not} mahjong_mj_gang_score_not
     */
    mahjong_mj_gang_score_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_gang_score_not)
            return object;
        var message = new $root.mahjong_mj_gang_score_not();
        if (object.chairId != null)
            message.chairId = object.chairId | 0;
        if (object.type != null)
            message.type = object.type | 0;
        if (object.score != null)
            message.score = object.score | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_gang_score_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_gang_score_not
     * @static
     * @param {mahjong_mj_gang_score_not} message mahjong_mj_gang_score_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_gang_score_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.chairId = 0;
            object.type = 0;
            object.score = 0;
        }
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            object.chairId = message.chairId;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.score != null && message.hasOwnProperty("score"))
            object.score = message.score;
        return object;
    };

    /**
     * Converts this mahjong_mj_gang_score_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_gang_score_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_gang_score_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_gang_score_not;
})();

$root.mahjong_mj_pause_game_not = (function() {

    /**
     * Properties of a mahjong_mj_pause_game_not.
     * @exports Imahjong_mj_pause_game_not
     * @interface Imahjong_mj_pause_game_not
     * @property {number} nFlag mahjong_mj_pause_game_not nFlag
     * @property {number} nWaitTime mahjong_mj_pause_game_not nWaitTime
     * @property {number} nLeftTime mahjong_mj_pause_game_not nLeftTime
     * @property {number} cChairId mahjong_mj_pause_game_not cChairId
     * @property {string} sNickName mahjong_mj_pause_game_not sNickName
     */

    /**
     * Constructs a new mahjong_mj_pause_game_not.
     * @exports mahjong_mj_pause_game_not
     * @classdesc Represents a mahjong_mj_pause_game_not.
     * @implements Imahjong_mj_pause_game_not
     * @constructor
     * @param {Imahjong_mj_pause_game_not=} [properties] Properties to set
     */
    function mahjong_mj_pause_game_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_pause_game_not nFlag.
     * @member {number} nFlag
     * @memberof mahjong_mj_pause_game_not
     * @instance
     */
    mahjong_mj_pause_game_not.prototype.nFlag = 0;

    /**
     * mahjong_mj_pause_game_not nWaitTime.
     * @member {number} nWaitTime
     * @memberof mahjong_mj_pause_game_not
     * @instance
     */
    mahjong_mj_pause_game_not.prototype.nWaitTime = 0;

    /**
     * mahjong_mj_pause_game_not nLeftTime.
     * @member {number} nLeftTime
     * @memberof mahjong_mj_pause_game_not
     * @instance
     */
    mahjong_mj_pause_game_not.prototype.nLeftTime = 0;

    /**
     * mahjong_mj_pause_game_not cChairId.
     * @member {number} cChairId
     * @memberof mahjong_mj_pause_game_not
     * @instance
     */
    mahjong_mj_pause_game_not.prototype.cChairId = 0;

    /**
     * mahjong_mj_pause_game_not sNickName.
     * @member {string} sNickName
     * @memberof mahjong_mj_pause_game_not
     * @instance
     */
    mahjong_mj_pause_game_not.prototype.sNickName = "";

    /**
     * Creates a new mahjong_mj_pause_game_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_pause_game_not
     * @static
     * @param {Imahjong_mj_pause_game_not=} [properties] Properties to set
     * @returns {mahjong_mj_pause_game_not} mahjong_mj_pause_game_not instance
     */
    mahjong_mj_pause_game_not.create = function create(properties) {
        return new mahjong_mj_pause_game_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_pause_game_not message. Does not implicitly {@link mahjong_mj_pause_game_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_pause_game_not
     * @static
     * @param {Imahjong_mj_pause_game_not} message mahjong_mj_pause_game_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_pause_game_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nFlag);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nWaitTime);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nLeftTime);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cChairId);
        writer.uint32(/* id 5, wireType 2 =*/42).string(message.sNickName);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_pause_game_not message, length delimited. Does not implicitly {@link mahjong_mj_pause_game_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_pause_game_not
     * @static
     * @param {Imahjong_mj_pause_game_not} message mahjong_mj_pause_game_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_pause_game_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_pause_game_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_pause_game_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_pause_game_not} mahjong_mj_pause_game_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_pause_game_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_pause_game_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nFlag = reader.int32();
                break;
            case 2:
                message.nWaitTime = reader.int32();
                break;
            case 3:
                message.nLeftTime = reader.int32();
                break;
            case 4:
                message.cChairId = reader.int32();
                break;
            case 5:
                message.sNickName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nFlag"))
            throw $util.ProtocolError("missing required 'nFlag'", { instance: message });
        if (!message.hasOwnProperty("nWaitTime"))
            throw $util.ProtocolError("missing required 'nWaitTime'", { instance: message });
        if (!message.hasOwnProperty("nLeftTime"))
            throw $util.ProtocolError("missing required 'nLeftTime'", { instance: message });
        if (!message.hasOwnProperty("cChairId"))
            throw $util.ProtocolError("missing required 'cChairId'", { instance: message });
        if (!message.hasOwnProperty("sNickName"))
            throw $util.ProtocolError("missing required 'sNickName'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_pause_game_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_pause_game_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_pause_game_not} mahjong_mj_pause_game_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_pause_game_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_pause_game_not message.
     * @function verify
     * @memberof mahjong_mj_pause_game_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_pause_game_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nFlag))
            return "nFlag: integer expected";
        if (!$util.isInteger(message.nWaitTime))
            return "nWaitTime: integer expected";
        if (!$util.isInteger(message.nLeftTime))
            return "nLeftTime: integer expected";
        if (!$util.isInteger(message.cChairId))
            return "cChairId: integer expected";
        if (!$util.isString(message.sNickName))
            return "sNickName: string expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_pause_game_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_pause_game_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_pause_game_not} mahjong_mj_pause_game_not
     */
    mahjong_mj_pause_game_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_pause_game_not)
            return object;
        var message = new $root.mahjong_mj_pause_game_not();
        if (object.nFlag != null)
            message.nFlag = object.nFlag | 0;
        if (object.nWaitTime != null)
            message.nWaitTime = object.nWaitTime | 0;
        if (object.nLeftTime != null)
            message.nLeftTime = object.nLeftTime | 0;
        if (object.cChairId != null)
            message.cChairId = object.cChairId | 0;
        if (object.sNickName != null)
            message.sNickName = String(object.sNickName);
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_pause_game_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_pause_game_not
     * @static
     * @param {mahjong_mj_pause_game_not} message mahjong_mj_pause_game_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_pause_game_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nFlag = 0;
            object.nWaitTime = 0;
            object.nLeftTime = 0;
            object.cChairId = 0;
            object.sNickName = "";
        }
        if (message.nFlag != null && message.hasOwnProperty("nFlag"))
            object.nFlag = message.nFlag;
        if (message.nWaitTime != null && message.hasOwnProperty("nWaitTime"))
            object.nWaitTime = message.nWaitTime;
        if (message.nLeftTime != null && message.hasOwnProperty("nLeftTime"))
            object.nLeftTime = message.nLeftTime;
        if (message.cChairId != null && message.hasOwnProperty("cChairId"))
            object.cChairId = message.cChairId;
        if (message.sNickName != null && message.hasOwnProperty("sNickName"))
            object.sNickName = message.sNickName;
        return object;
    };

    /**
     * Converts this mahjong_mj_pause_game_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_pause_game_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_pause_game_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_pause_game_not;
})();

$root.mahjong_mj_dingque_not = (function() {

    /**
     * Properties of a mahjong_mj_dingque_not.
     * @exports Imahjong_mj_dingque_not
     * @interface Imahjong_mj_dingque_not
     * @property {number} cChairid mahjong_mj_dingque_not cChairid
     * @property {number} cCardType mahjong_mj_dingque_not cCardType
     * @property {number} cResend mahjong_mj_dingque_not cResend
     */

    /**
     * Constructs a new mahjong_mj_dingque_not.
     * @exports mahjong_mj_dingque_not
     * @classdesc Represents a mahjong_mj_dingque_not.
     * @implements Imahjong_mj_dingque_not
     * @constructor
     * @param {Imahjong_mj_dingque_not=} [properties] Properties to set
     */
    function mahjong_mj_dingque_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_dingque_not cChairid.
     * @member {number} cChairid
     * @memberof mahjong_mj_dingque_not
     * @instance
     */
    mahjong_mj_dingque_not.prototype.cChairid = 0;

    /**
     * mahjong_mj_dingque_not cCardType.
     * @member {number} cCardType
     * @memberof mahjong_mj_dingque_not
     * @instance
     */
    mahjong_mj_dingque_not.prototype.cCardType = 0;

    /**
     * mahjong_mj_dingque_not cResend.
     * @member {number} cResend
     * @memberof mahjong_mj_dingque_not
     * @instance
     */
    mahjong_mj_dingque_not.prototype.cResend = 0;

    /**
     * Creates a new mahjong_mj_dingque_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_dingque_not
     * @static
     * @param {Imahjong_mj_dingque_not=} [properties] Properties to set
     * @returns {mahjong_mj_dingque_not} mahjong_mj_dingque_not instance
     */
    mahjong_mj_dingque_not.create = function create(properties) {
        return new mahjong_mj_dingque_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_dingque_not message. Does not implicitly {@link mahjong_mj_dingque_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_dingque_not
     * @static
     * @param {Imahjong_mj_dingque_not} message mahjong_mj_dingque_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_dingque_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairid);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cCardType);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cResend);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_dingque_not message, length delimited. Does not implicitly {@link mahjong_mj_dingque_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_dingque_not
     * @static
     * @param {Imahjong_mj_dingque_not} message mahjong_mj_dingque_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_dingque_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_dingque_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_dingque_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_dingque_not} mahjong_mj_dingque_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_dingque_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_dingque_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairid = reader.int32();
                break;
            case 2:
                message.cCardType = reader.int32();
                break;
            case 3:
                message.cResend = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairid"))
            throw $util.ProtocolError("missing required 'cChairid'", { instance: message });
        if (!message.hasOwnProperty("cCardType"))
            throw $util.ProtocolError("missing required 'cCardType'", { instance: message });
        if (!message.hasOwnProperty("cResend"))
            throw $util.ProtocolError("missing required 'cResend'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_dingque_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_dingque_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_dingque_not} mahjong_mj_dingque_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_dingque_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_dingque_not message.
     * @function verify
     * @memberof mahjong_mj_dingque_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_dingque_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairid))
            return "cChairid: integer expected";
        if (!$util.isInteger(message.cCardType))
            return "cCardType: integer expected";
        if (!$util.isInteger(message.cResend))
            return "cResend: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_dingque_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_dingque_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_dingque_not} mahjong_mj_dingque_not
     */
    mahjong_mj_dingque_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_dingque_not)
            return object;
        var message = new $root.mahjong_mj_dingque_not();
        if (object.cChairid != null)
            message.cChairid = object.cChairid | 0;
        if (object.cCardType != null)
            message.cCardType = object.cCardType | 0;
        if (object.cResend != null)
            message.cResend = object.cResend | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_dingque_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_dingque_not
     * @static
     * @param {mahjong_mj_dingque_not} message mahjong_mj_dingque_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_dingque_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cChairid = 0;
            object.cCardType = 0;
            object.cResend = 0;
        }
        if (message.cChairid != null && message.hasOwnProperty("cChairid"))
            object.cChairid = message.cChairid;
        if (message.cCardType != null && message.hasOwnProperty("cCardType"))
            object.cCardType = message.cCardType;
        if (message.cResend != null && message.hasOwnProperty("cResend"))
            object.cResend = message.cResend;
        return object;
    };

    /**
     * Converts this mahjong_mj_dingque_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_dingque_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_dingque_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_dingque_not;
})();

$root.mahjong_mj_changecard_not = (function() {

    /**
     * Properties of a mahjong_mj_changecard_not.
     * @exports Imahjong_mj_changecard_not
     * @interface Imahjong_mj_changecard_not
     * @property {number} cChairID mahjong_mj_changecard_not cChairID
     * @property {number} cHuPai mahjong_mj_changecard_not cHuPai
     * @property {number} cCurrCards mahjong_mj_changecard_not cCurrCards
     * @property {Array.<number>|null} [vecDisplayCards] mahjong_mj_changecard_not vecDisplayCards
     * @property {Array.<number>|null} [vecLeftCards] mahjong_mj_changecard_not vecLeftCards
     * @property {Array.<number>|null} [vecHandCards] mahjong_mj_changecard_not vecHandCards
     */

    /**
     * Constructs a new mahjong_mj_changecard_not.
     * @exports mahjong_mj_changecard_not
     * @classdesc Represents a mahjong_mj_changecard_not.
     * @implements Imahjong_mj_changecard_not
     * @constructor
     * @param {Imahjong_mj_changecard_not=} [properties] Properties to set
     */
    function mahjong_mj_changecard_not(properties) {
        this.vecDisplayCards = [];
        this.vecLeftCards = [];
        this.vecHandCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_changecard_not cChairID.
     * @member {number} cChairID
     * @memberof mahjong_mj_changecard_not
     * @instance
     */
    mahjong_mj_changecard_not.prototype.cChairID = 0;

    /**
     * mahjong_mj_changecard_not cHuPai.
     * @member {number} cHuPai
     * @memberof mahjong_mj_changecard_not
     * @instance
     */
    mahjong_mj_changecard_not.prototype.cHuPai = 0;

    /**
     * mahjong_mj_changecard_not cCurrCards.
     * @member {number} cCurrCards
     * @memberof mahjong_mj_changecard_not
     * @instance
     */
    mahjong_mj_changecard_not.prototype.cCurrCards = 0;

    /**
     * mahjong_mj_changecard_not vecDisplayCards.
     * @member {Array.<number>} vecDisplayCards
     * @memberof mahjong_mj_changecard_not
     * @instance
     */
    mahjong_mj_changecard_not.prototype.vecDisplayCards = $util.emptyArray;

    /**
     * mahjong_mj_changecard_not vecLeftCards.
     * @member {Array.<number>} vecLeftCards
     * @memberof mahjong_mj_changecard_not
     * @instance
     */
    mahjong_mj_changecard_not.prototype.vecLeftCards = $util.emptyArray;

    /**
     * mahjong_mj_changecard_not vecHandCards.
     * @member {Array.<number>} vecHandCards
     * @memberof mahjong_mj_changecard_not
     * @instance
     */
    mahjong_mj_changecard_not.prototype.vecHandCards = $util.emptyArray;

    /**
     * Creates a new mahjong_mj_changecard_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_changecard_not
     * @static
     * @param {Imahjong_mj_changecard_not=} [properties] Properties to set
     * @returns {mahjong_mj_changecard_not} mahjong_mj_changecard_not instance
     */
    mahjong_mj_changecard_not.create = function create(properties) {
        return new mahjong_mj_changecard_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_changecard_not message. Does not implicitly {@link mahjong_mj_changecard_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_changecard_not
     * @static
     * @param {Imahjong_mj_changecard_not} message mahjong_mj_changecard_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_changecard_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cHuPai);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cCurrCards);
        if (message.vecDisplayCards != null && message.vecDisplayCards.length)
            for (var i = 0; i < message.vecDisplayCards.length; ++i)
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.vecDisplayCards[i]);
        if (message.vecLeftCards != null && message.vecLeftCards.length)
            for (var i = 0; i < message.vecLeftCards.length; ++i)
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.vecLeftCards[i]);
        if (message.vecHandCards != null && message.vecHandCards.length)
            for (var i = 0; i < message.vecHandCards.length; ++i)
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.vecHandCards[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_changecard_not message, length delimited. Does not implicitly {@link mahjong_mj_changecard_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_changecard_not
     * @static
     * @param {Imahjong_mj_changecard_not} message mahjong_mj_changecard_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_changecard_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_changecard_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_changecard_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_changecard_not} mahjong_mj_changecard_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_changecard_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_changecard_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairID = reader.int32();
                break;
            case 2:
                message.cHuPai = reader.int32();
                break;
            case 3:
                message.cCurrCards = reader.int32();
                break;
            case 4:
                if (!(message.vecDisplayCards && message.vecDisplayCards.length))
                    message.vecDisplayCards = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecDisplayCards.push(reader.int32());
                } else
                    message.vecDisplayCards.push(reader.int32());
                break;
            case 5:
                if (!(message.vecLeftCards && message.vecLeftCards.length))
                    message.vecLeftCards = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecLeftCards.push(reader.int32());
                } else
                    message.vecLeftCards.push(reader.int32());
                break;
            case 6:
                if (!(message.vecHandCards && message.vecHandCards.length))
                    message.vecHandCards = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecHandCards.push(reader.int32());
                } else
                    message.vecHandCards.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairID"))
            throw $util.ProtocolError("missing required 'cChairID'", { instance: message });
        if (!message.hasOwnProperty("cHuPai"))
            throw $util.ProtocolError("missing required 'cHuPai'", { instance: message });
        if (!message.hasOwnProperty("cCurrCards"))
            throw $util.ProtocolError("missing required 'cCurrCards'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_changecard_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_changecard_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_changecard_not} mahjong_mj_changecard_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_changecard_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_changecard_not message.
     * @function verify
     * @memberof mahjong_mj_changecard_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_changecard_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
        if (!$util.isInteger(message.cHuPai))
            return "cHuPai: integer expected";
        if (!$util.isInteger(message.cCurrCards))
            return "cCurrCards: integer expected";
        if (message.vecDisplayCards != null && message.hasOwnProperty("vecDisplayCards")) {
            if (!Array.isArray(message.vecDisplayCards))
                return "vecDisplayCards: array expected";
            for (var i = 0; i < message.vecDisplayCards.length; ++i)
                if (!$util.isInteger(message.vecDisplayCards[i]))
                    return "vecDisplayCards: integer[] expected";
        }
        if (message.vecLeftCards != null && message.hasOwnProperty("vecLeftCards")) {
            if (!Array.isArray(message.vecLeftCards))
                return "vecLeftCards: array expected";
            for (var i = 0; i < message.vecLeftCards.length; ++i)
                if (!$util.isInteger(message.vecLeftCards[i]))
                    return "vecLeftCards: integer[] expected";
        }
        if (message.vecHandCards != null && message.hasOwnProperty("vecHandCards")) {
            if (!Array.isArray(message.vecHandCards))
                return "vecHandCards: array expected";
            for (var i = 0; i < message.vecHandCards.length; ++i)
                if (!$util.isInteger(message.vecHandCards[i]))
                    return "vecHandCards: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_mj_changecard_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_changecard_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_changecard_not} mahjong_mj_changecard_not
     */
    mahjong_mj_changecard_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_changecard_not)
            return object;
        var message = new $root.mahjong_mj_changecard_not();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.cHuPai != null)
            message.cHuPai = object.cHuPai | 0;
        if (object.cCurrCards != null)
            message.cCurrCards = object.cCurrCards | 0;
        if (object.vecDisplayCards) {
            if (!Array.isArray(object.vecDisplayCards))
                throw TypeError(".mahjong_mj_changecard_not.vecDisplayCards: array expected");
            message.vecDisplayCards = [];
            for (var i = 0; i < object.vecDisplayCards.length; ++i)
                message.vecDisplayCards[i] = object.vecDisplayCards[i] | 0;
        }
        if (object.vecLeftCards) {
            if (!Array.isArray(object.vecLeftCards))
                throw TypeError(".mahjong_mj_changecard_not.vecLeftCards: array expected");
            message.vecLeftCards = [];
            for (var i = 0; i < object.vecLeftCards.length; ++i)
                message.vecLeftCards[i] = object.vecLeftCards[i] | 0;
        }
        if (object.vecHandCards) {
            if (!Array.isArray(object.vecHandCards))
                throw TypeError(".mahjong_mj_changecard_not.vecHandCards: array expected");
            message.vecHandCards = [];
            for (var i = 0; i < object.vecHandCards.length; ++i)
                message.vecHandCards[i] = object.vecHandCards[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_changecard_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_changecard_not
     * @static
     * @param {mahjong_mj_changecard_not} message mahjong_mj_changecard_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_changecard_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecDisplayCards = [];
            object.vecLeftCards = [];
            object.vecHandCards = [];
        }
        if (options.defaults) {
            object.cChairID = 0;
            object.cHuPai = 0;
            object.cCurrCards = 0;
        }
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.cHuPai != null && message.hasOwnProperty("cHuPai"))
            object.cHuPai = message.cHuPai;
        if (message.cCurrCards != null && message.hasOwnProperty("cCurrCards"))
            object.cCurrCards = message.cCurrCards;
        if (message.vecDisplayCards && message.vecDisplayCards.length) {
            object.vecDisplayCards = [];
            for (var j = 0; j < message.vecDisplayCards.length; ++j)
                object.vecDisplayCards[j] = message.vecDisplayCards[j];
        }
        if (message.vecLeftCards && message.vecLeftCards.length) {
            object.vecLeftCards = [];
            for (var j = 0; j < message.vecLeftCards.length; ++j)
                object.vecLeftCards[j] = message.vecLeftCards[j];
        }
        if (message.vecHandCards && message.vecHandCards.length) {
            object.vecHandCards = [];
            for (var j = 0; j < message.vecHandCards.length; ++j)
                object.vecHandCards[j] = message.vecHandCards[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_mj_changecard_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_changecard_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_changecard_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_changecard_not;
})();

$root.mahjong_get_mj_private_room_result_ack = (function() {

    /**
     * Properties of a mahjong_get_mj_private_room_result_ack.
     * @exports Imahjong_get_mj_private_room_result_ack
     * @interface Imahjong_get_mj_private_room_result_ack
     * @property {Array.<Imahjong_GameStatisc>|null} [vecGameStatiscs] mahjong_get_mj_private_room_result_ack vecGameStatiscs
     */

    /**
     * Constructs a new mahjong_get_mj_private_room_result_ack.
     * @exports mahjong_get_mj_private_room_result_ack
     * @classdesc Represents a mahjong_get_mj_private_room_result_ack.
     * @implements Imahjong_get_mj_private_room_result_ack
     * @constructor
     * @param {Imahjong_get_mj_private_room_result_ack=} [properties] Properties to set
     */
    function mahjong_get_mj_private_room_result_ack(properties) {
        this.vecGameStatiscs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_get_mj_private_room_result_ack vecGameStatiscs.
     * @member {Array.<Imahjong_GameStatisc>} vecGameStatiscs
     * @memberof mahjong_get_mj_private_room_result_ack
     * @instance
     */
    mahjong_get_mj_private_room_result_ack.prototype.vecGameStatiscs = $util.emptyArray;

    /**
     * Creates a new mahjong_get_mj_private_room_result_ack instance using the specified properties.
     * @function create
     * @memberof mahjong_get_mj_private_room_result_ack
     * @static
     * @param {Imahjong_get_mj_private_room_result_ack=} [properties] Properties to set
     * @returns {mahjong_get_mj_private_room_result_ack} mahjong_get_mj_private_room_result_ack instance
     */
    mahjong_get_mj_private_room_result_ack.create = function create(properties) {
        return new mahjong_get_mj_private_room_result_ack(properties);
    };

    /**
     * Encodes the specified mahjong_get_mj_private_room_result_ack message. Does not implicitly {@link mahjong_get_mj_private_room_result_ack.verify|verify} messages.
     * @function encode
     * @memberof mahjong_get_mj_private_room_result_ack
     * @static
     * @param {Imahjong_get_mj_private_room_result_ack} message mahjong_get_mj_private_room_result_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_get_mj_private_room_result_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vecGameStatiscs != null && message.vecGameStatiscs.length)
            for (var i = 0; i < message.vecGameStatiscs.length; ++i)
                $root.mahjong_GameStatisc.encode(message.vecGameStatiscs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_get_mj_private_room_result_ack message, length delimited. Does not implicitly {@link mahjong_get_mj_private_room_result_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_get_mj_private_room_result_ack
     * @static
     * @param {Imahjong_get_mj_private_room_result_ack} message mahjong_get_mj_private_room_result_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_get_mj_private_room_result_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_get_mj_private_room_result_ack message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_get_mj_private_room_result_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_get_mj_private_room_result_ack} mahjong_get_mj_private_room_result_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_get_mj_private_room_result_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_get_mj_private_room_result_ack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.vecGameStatiscs && message.vecGameStatiscs.length))
                    message.vecGameStatiscs = [];
                message.vecGameStatiscs.push($root.mahjong_GameStatisc.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_get_mj_private_room_result_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_get_mj_private_room_result_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_get_mj_private_room_result_ack} mahjong_get_mj_private_room_result_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_get_mj_private_room_result_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_get_mj_private_room_result_ack message.
     * @function verify
     * @memberof mahjong_get_mj_private_room_result_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_get_mj_private_room_result_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.vecGameStatiscs != null && message.hasOwnProperty("vecGameStatiscs")) {
            if (!Array.isArray(message.vecGameStatiscs))
                return "vecGameStatiscs: array expected";
            for (var i = 0; i < message.vecGameStatiscs.length; ++i) {
                var error = $root.mahjong_GameStatisc.verify(message.vecGameStatiscs[i]);
                if (error)
                    return "vecGameStatiscs." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_get_mj_private_room_result_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_get_mj_private_room_result_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_get_mj_private_room_result_ack} mahjong_get_mj_private_room_result_ack
     */
    mahjong_get_mj_private_room_result_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_get_mj_private_room_result_ack)
            return object;
        var message = new $root.mahjong_get_mj_private_room_result_ack();
        if (object.vecGameStatiscs) {
            if (!Array.isArray(object.vecGameStatiscs))
                throw TypeError(".mahjong_get_mj_private_room_result_ack.vecGameStatiscs: array expected");
            message.vecGameStatiscs = [];
            for (var i = 0; i < object.vecGameStatiscs.length; ++i) {
                if (typeof object.vecGameStatiscs[i] !== "object")
                    throw TypeError(".mahjong_get_mj_private_room_result_ack.vecGameStatiscs: object expected");
                message.vecGameStatiscs[i] = $root.mahjong_GameStatisc.fromObject(object.vecGameStatiscs[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_get_mj_private_room_result_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_get_mj_private_room_result_ack
     * @static
     * @param {mahjong_get_mj_private_room_result_ack} message mahjong_get_mj_private_room_result_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_get_mj_private_room_result_ack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecGameStatiscs = [];
        if (message.vecGameStatiscs && message.vecGameStatiscs.length) {
            object.vecGameStatiscs = [];
            for (var j = 0; j < message.vecGameStatiscs.length; ++j)
                object.vecGameStatiscs[j] = $root.mahjong_GameStatisc.toObject(message.vecGameStatiscs[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_get_mj_private_room_result_ack to JSON.
     * @function toJSON
     * @memberof mahjong_get_mj_private_room_result_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_get_mj_private_room_result_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_get_mj_private_room_result_ack;
})();

$root.mahjong_mj_gameresult_not = (function() {

    /**
     * Properties of a mahjong_mj_gameresult_not.
     * @exports Imahjong_mj_gameresult_not
     * @interface Imahjong_mj_gameresult_not
     * @property {Array.<Imahjong_st_gameresult>|null} [vecGameResult] mahjong_mj_gameresult_not vecGameResult
     */

    /**
     * Constructs a new mahjong_mj_gameresult_not.
     * @exports mahjong_mj_gameresult_not
     * @classdesc Represents a mahjong_mj_gameresult_not.
     * @implements Imahjong_mj_gameresult_not
     * @constructor
     * @param {Imahjong_mj_gameresult_not=} [properties] Properties to set
     */
    function mahjong_mj_gameresult_not(properties) {
        this.vecGameResult = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_gameresult_not vecGameResult.
     * @member {Array.<Imahjong_st_gameresult>} vecGameResult
     * @memberof mahjong_mj_gameresult_not
     * @instance
     */
    mahjong_mj_gameresult_not.prototype.vecGameResult = $util.emptyArray;

    /**
     * Creates a new mahjong_mj_gameresult_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_gameresult_not
     * @static
     * @param {Imahjong_mj_gameresult_not=} [properties] Properties to set
     * @returns {mahjong_mj_gameresult_not} mahjong_mj_gameresult_not instance
     */
    mahjong_mj_gameresult_not.create = function create(properties) {
        return new mahjong_mj_gameresult_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_gameresult_not message. Does not implicitly {@link mahjong_mj_gameresult_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_gameresult_not
     * @static
     * @param {Imahjong_mj_gameresult_not} message mahjong_mj_gameresult_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_gameresult_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vecGameResult != null && message.vecGameResult.length)
            for (var i = 0; i < message.vecGameResult.length; ++i)
                $root.mahjong_st_gameresult.encode(message.vecGameResult[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_gameresult_not message, length delimited. Does not implicitly {@link mahjong_mj_gameresult_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_gameresult_not
     * @static
     * @param {Imahjong_mj_gameresult_not} message mahjong_mj_gameresult_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_gameresult_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_gameresult_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_gameresult_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_gameresult_not} mahjong_mj_gameresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_gameresult_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_gameresult_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.vecGameResult && message.vecGameResult.length))
                    message.vecGameResult = [];
                message.vecGameResult.push($root.mahjong_st_gameresult.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_mj_gameresult_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_gameresult_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_gameresult_not} mahjong_mj_gameresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_gameresult_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_gameresult_not message.
     * @function verify
     * @memberof mahjong_mj_gameresult_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_gameresult_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.vecGameResult != null && message.hasOwnProperty("vecGameResult")) {
            if (!Array.isArray(message.vecGameResult))
                return "vecGameResult: array expected";
            for (var i = 0; i < message.vecGameResult.length; ++i) {
                var error = $root.mahjong_st_gameresult.verify(message.vecGameResult[i]);
                if (error)
                    return "vecGameResult." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_mj_gameresult_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_gameresult_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_gameresult_not} mahjong_mj_gameresult_not
     */
    mahjong_mj_gameresult_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_gameresult_not)
            return object;
        var message = new $root.mahjong_mj_gameresult_not();
        if (object.vecGameResult) {
            if (!Array.isArray(object.vecGameResult))
                throw TypeError(".mahjong_mj_gameresult_not.vecGameResult: array expected");
            message.vecGameResult = [];
            for (var i = 0; i < object.vecGameResult.length; ++i) {
                if (typeof object.vecGameResult[i] !== "object")
                    throw TypeError(".mahjong_mj_gameresult_not.vecGameResult: object expected");
                message.vecGameResult[i] = $root.mahjong_st_gameresult.fromObject(object.vecGameResult[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_gameresult_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_gameresult_not
     * @static
     * @param {mahjong_mj_gameresult_not} message mahjong_mj_gameresult_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_gameresult_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecGameResult = [];
        if (message.vecGameResult && message.vecGameResult.length) {
            object.vecGameResult = [];
            for (var j = 0; j < message.vecGameResult.length; ++j)
                object.vecGameResult[j] = $root.mahjong_st_gameresult.toObject(message.vecGameResult[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_mj_gameresult_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_gameresult_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_gameresult_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_gameresult_not;
})();

$root.mahjong_Svr_Auto_Not = (function() {

    /**
     * Properties of a mahjong_Svr_Auto_Not.
     * @exports Imahjong_Svr_Auto_Not
     * @interface Imahjong_Svr_Auto_Not
     * @property {number} cChairID mahjong_Svr_Auto_Not cChairID
     * @property {number} cAuto mahjong_Svr_Auto_Not cAuto
     * @property {number} iAutoType mahjong_Svr_Auto_Not iAutoType
     */

    /**
     * Constructs a new mahjong_Svr_Auto_Not.
     * @exports mahjong_Svr_Auto_Not
     * @classdesc Represents a mahjong_Svr_Auto_Not.
     * @implements Imahjong_Svr_Auto_Not
     * @constructor
     * @param {Imahjong_Svr_Auto_Not=} [properties] Properties to set
     */
    function mahjong_Svr_Auto_Not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_Svr_Auto_Not cChairID.
     * @member {number} cChairID
     * @memberof mahjong_Svr_Auto_Not
     * @instance
     */
    mahjong_Svr_Auto_Not.prototype.cChairID = 0;

    /**
     * mahjong_Svr_Auto_Not cAuto.
     * @member {number} cAuto
     * @memberof mahjong_Svr_Auto_Not
     * @instance
     */
    mahjong_Svr_Auto_Not.prototype.cAuto = 0;

    /**
     * mahjong_Svr_Auto_Not iAutoType.
     * @member {number} iAutoType
     * @memberof mahjong_Svr_Auto_Not
     * @instance
     */
    mahjong_Svr_Auto_Not.prototype.iAutoType = 0;

    /**
     * Creates a new mahjong_Svr_Auto_Not instance using the specified properties.
     * @function create
     * @memberof mahjong_Svr_Auto_Not
     * @static
     * @param {Imahjong_Svr_Auto_Not=} [properties] Properties to set
     * @returns {mahjong_Svr_Auto_Not} mahjong_Svr_Auto_Not instance
     */
    mahjong_Svr_Auto_Not.create = function create(properties) {
        return new mahjong_Svr_Auto_Not(properties);
    };

    /**
     * Encodes the specified mahjong_Svr_Auto_Not message. Does not implicitly {@link mahjong_Svr_Auto_Not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_Svr_Auto_Not
     * @static
     * @param {Imahjong_Svr_Auto_Not} message mahjong_Svr_Auto_Not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_Svr_Auto_Not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cAuto);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.iAutoType);
        return writer;
    };

    /**
     * Encodes the specified mahjong_Svr_Auto_Not message, length delimited. Does not implicitly {@link mahjong_Svr_Auto_Not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_Svr_Auto_Not
     * @static
     * @param {Imahjong_Svr_Auto_Not} message mahjong_Svr_Auto_Not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_Svr_Auto_Not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_Svr_Auto_Not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_Svr_Auto_Not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_Svr_Auto_Not} mahjong_Svr_Auto_Not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_Svr_Auto_Not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_Svr_Auto_Not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairID = reader.int32();
                break;
            case 2:
                message.cAuto = reader.int32();
                break;
            case 3:
                message.iAutoType = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairID"))
            throw $util.ProtocolError("missing required 'cChairID'", { instance: message });
        if (!message.hasOwnProperty("cAuto"))
            throw $util.ProtocolError("missing required 'cAuto'", { instance: message });
        if (!message.hasOwnProperty("iAutoType"))
            throw $util.ProtocolError("missing required 'iAutoType'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_Svr_Auto_Not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_Svr_Auto_Not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_Svr_Auto_Not} mahjong_Svr_Auto_Not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_Svr_Auto_Not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_Svr_Auto_Not message.
     * @function verify
     * @memberof mahjong_Svr_Auto_Not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_Svr_Auto_Not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
        if (!$util.isInteger(message.cAuto))
            return "cAuto: integer expected";
        if (!$util.isInteger(message.iAutoType))
            return "iAutoType: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_Svr_Auto_Not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_Svr_Auto_Not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_Svr_Auto_Not} mahjong_Svr_Auto_Not
     */
    mahjong_Svr_Auto_Not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_Svr_Auto_Not)
            return object;
        var message = new $root.mahjong_Svr_Auto_Not();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.cAuto != null)
            message.cAuto = object.cAuto | 0;
        if (object.iAutoType != null)
            message.iAutoType = object.iAutoType | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_Svr_Auto_Not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_Svr_Auto_Not
     * @static
     * @param {mahjong_Svr_Auto_Not} message mahjong_Svr_Auto_Not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_Svr_Auto_Not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cChairID = 0;
            object.cAuto = 0;
            object.iAutoType = 0;
        }
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.cAuto != null && message.hasOwnProperty("cAuto"))
            object.cAuto = message.cAuto;
        if (message.iAutoType != null && message.hasOwnProperty("iAutoType"))
            object.iAutoType = message.iAutoType;
        return object;
    };

    /**
     * Converts this mahjong_Svr_Auto_Not to JSON.
     * @function toJSON
     * @memberof mahjong_Svr_Auto_Not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_Svr_Auto_Not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_Svr_Auto_Not;
})();

$root.mahjong_mj_hudouble_ack = (function() {

    /**
     * Properties of a mahjong_mj_hudouble_ack.
     * @exports Imahjong_mj_hudouble_ack
     * @interface Imahjong_mj_hudouble_ack
     * @property {number} cDoubleStyle mahjong_mj_hudouble_ack cDoubleStyle
     */

    /**
     * Constructs a new mahjong_mj_hudouble_ack.
     * @exports mahjong_mj_hudouble_ack
     * @classdesc Represents a mahjong_mj_hudouble_ack.
     * @implements Imahjong_mj_hudouble_ack
     * @constructor
     * @param {Imahjong_mj_hudouble_ack=} [properties] Properties to set
     */
    function mahjong_mj_hudouble_ack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_hudouble_ack cDoubleStyle.
     * @member {number} cDoubleStyle
     * @memberof mahjong_mj_hudouble_ack
     * @instance
     */
    mahjong_mj_hudouble_ack.prototype.cDoubleStyle = 0;

    /**
     * Creates a new mahjong_mj_hudouble_ack instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_hudouble_ack
     * @static
     * @param {Imahjong_mj_hudouble_ack=} [properties] Properties to set
     * @returns {mahjong_mj_hudouble_ack} mahjong_mj_hudouble_ack instance
     */
    mahjong_mj_hudouble_ack.create = function create(properties) {
        return new mahjong_mj_hudouble_ack(properties);
    };

    /**
     * Encodes the specified mahjong_mj_hudouble_ack message. Does not implicitly {@link mahjong_mj_hudouble_ack.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_hudouble_ack
     * @static
     * @param {Imahjong_mj_hudouble_ack} message mahjong_mj_hudouble_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_hudouble_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cDoubleStyle);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_hudouble_ack message, length delimited. Does not implicitly {@link mahjong_mj_hudouble_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_hudouble_ack
     * @static
     * @param {Imahjong_mj_hudouble_ack} message mahjong_mj_hudouble_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_hudouble_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_hudouble_ack message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_hudouble_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_hudouble_ack} mahjong_mj_hudouble_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_hudouble_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_hudouble_ack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cDoubleStyle = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cDoubleStyle"))
            throw $util.ProtocolError("missing required 'cDoubleStyle'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_hudouble_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_hudouble_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_hudouble_ack} mahjong_mj_hudouble_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_hudouble_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_hudouble_ack message.
     * @function verify
     * @memberof mahjong_mj_hudouble_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_hudouble_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cDoubleStyle))
            return "cDoubleStyle: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_hudouble_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_hudouble_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_hudouble_ack} mahjong_mj_hudouble_ack
     */
    mahjong_mj_hudouble_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_hudouble_ack)
            return object;
        var message = new $root.mahjong_mj_hudouble_ack();
        if (object.cDoubleStyle != null)
            message.cDoubleStyle = object.cDoubleStyle | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_hudouble_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_hudouble_ack
     * @static
     * @param {mahjong_mj_hudouble_ack} message mahjong_mj_hudouble_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_hudouble_ack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.cDoubleStyle = 0;
        if (message.cDoubleStyle != null && message.hasOwnProperty("cDoubleStyle"))
            object.cDoubleStyle = message.cDoubleStyle;
        return object;
    };

    /**
     * Converts this mahjong_mj_hudouble_ack to JSON.
     * @function toJSON
     * @memberof mahjong_mj_hudouble_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_hudouble_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_hudouble_ack;
})();

$root.mahjong_mj_operate_not = (function() {

    /**
     * Properties of a mahjong_mj_operate_not.
     * @exports Imahjong_mj_operate_not
     * @interface Imahjong_mj_operate_not
     * @property {number} cChairID mahjong_mj_operate_not cChairID
     * @property {number} nOpcode mahjong_mj_operate_not nOpcode
     * @property {number} cCard mahjong_mj_operate_not cCard
     * @property {number} cWallCardNum mahjong_mj_operate_not cWallCardNum
     */

    /**
     * Constructs a new mahjong_mj_operate_not.
     * @exports mahjong_mj_operate_not
     * @classdesc Represents a mahjong_mj_operate_not.
     * @implements Imahjong_mj_operate_not
     * @constructor
     * @param {Imahjong_mj_operate_not=} [properties] Properties to set
     */
    function mahjong_mj_operate_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_operate_not cChairID.
     * @member {number} cChairID
     * @memberof mahjong_mj_operate_not
     * @instance
     */
    mahjong_mj_operate_not.prototype.cChairID = 0;

    /**
     * mahjong_mj_operate_not nOpcode.
     * @member {number} nOpcode
     * @memberof mahjong_mj_operate_not
     * @instance
     */
    mahjong_mj_operate_not.prototype.nOpcode = 0;

    /**
     * mahjong_mj_operate_not cCard.
     * @member {number} cCard
     * @memberof mahjong_mj_operate_not
     * @instance
     */
    mahjong_mj_operate_not.prototype.cCard = 0;

    /**
     * mahjong_mj_operate_not cWallCardNum.
     * @member {number} cWallCardNum
     * @memberof mahjong_mj_operate_not
     * @instance
     */
    mahjong_mj_operate_not.prototype.cWallCardNum = 0;

    /**
     * Creates a new mahjong_mj_operate_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_operate_not
     * @static
     * @param {Imahjong_mj_operate_not=} [properties] Properties to set
     * @returns {mahjong_mj_operate_not} mahjong_mj_operate_not instance
     */
    mahjong_mj_operate_not.create = function create(properties) {
        return new mahjong_mj_operate_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_operate_not message. Does not implicitly {@link mahjong_mj_operate_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_operate_not
     * @static
     * @param {Imahjong_mj_operate_not} message mahjong_mj_operate_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_operate_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nOpcode);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cCard);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cWallCardNum);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_operate_not message, length delimited. Does not implicitly {@link mahjong_mj_operate_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_operate_not
     * @static
     * @param {Imahjong_mj_operate_not} message mahjong_mj_operate_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_operate_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_operate_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_operate_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_operate_not} mahjong_mj_operate_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_operate_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_operate_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairID = reader.int32();
                break;
            case 2:
                message.nOpcode = reader.int32();
                break;
            case 3:
                message.cCard = reader.int32();
                break;
            case 4:
                message.cWallCardNum = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairID"))
            throw $util.ProtocolError("missing required 'cChairID'", { instance: message });
        if (!message.hasOwnProperty("nOpcode"))
            throw $util.ProtocolError("missing required 'nOpcode'", { instance: message });
        if (!message.hasOwnProperty("cCard"))
            throw $util.ProtocolError("missing required 'cCard'", { instance: message });
        if (!message.hasOwnProperty("cWallCardNum"))
            throw $util.ProtocolError("missing required 'cWallCardNum'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_operate_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_operate_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_operate_not} mahjong_mj_operate_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_operate_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_operate_not message.
     * @function verify
     * @memberof mahjong_mj_operate_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_operate_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
        if (!$util.isInteger(message.nOpcode))
            return "nOpcode: integer expected";
        if (!$util.isInteger(message.cCard))
            return "cCard: integer expected";
        if (!$util.isInteger(message.cWallCardNum))
            return "cWallCardNum: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_operate_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_operate_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_operate_not} mahjong_mj_operate_not
     */
    mahjong_mj_operate_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_operate_not)
            return object;
        var message = new $root.mahjong_mj_operate_not();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.nOpcode != null)
            message.nOpcode = object.nOpcode | 0;
        if (object.cCard != null)
            message.cCard = object.cCard | 0;
        if (object.cWallCardNum != null)
            message.cWallCardNum = object.cWallCardNum | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_operate_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_operate_not
     * @static
     * @param {mahjong_mj_operate_not} message mahjong_mj_operate_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_operate_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cChairID = 0;
            object.nOpcode = 0;
            object.cCard = 0;
            object.cWallCardNum = 0;
        }
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.nOpcode != null && message.hasOwnProperty("nOpcode"))
            object.nOpcode = message.nOpcode;
        if (message.cCard != null && message.hasOwnProperty("cCard"))
            object.cCard = message.cCard;
        if (message.cWallCardNum != null && message.hasOwnProperty("cWallCardNum"))
            object.cWallCardNum = message.cWallCardNum;
        return object;
    };

    /**
     * Converts this mahjong_mj_operate_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_operate_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_operate_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_operate_not;
})();

$root.mahjong_gc_clienttimer_not = (function() {

    /**
     * Properties of a mahjong_gc_clienttimer_not.
     * @exports Imahjong_gc_clienttimer_not
     * @interface Imahjong_gc_clienttimer_not
     * @property {number} cChairId mahjong_gc_clienttimer_not cChairId
     * @property {number} cNextChairId mahjong_gc_clienttimer_not cNextChairId
     * @property {number} nPeriod mahjong_gc_clienttimer_not nPeriod
     * @property {number} nOpcode mahjong_gc_clienttimer_not nOpcode
     */

    /**
     * Constructs a new mahjong_gc_clienttimer_not.
     * @exports mahjong_gc_clienttimer_not
     * @classdesc Represents a mahjong_gc_clienttimer_not.
     * @implements Imahjong_gc_clienttimer_not
     * @constructor
     * @param {Imahjong_gc_clienttimer_not=} [properties] Properties to set
     */
    function mahjong_gc_clienttimer_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_gc_clienttimer_not cChairId.
     * @member {number} cChairId
     * @memberof mahjong_gc_clienttimer_not
     * @instance
     */
    mahjong_gc_clienttimer_not.prototype.cChairId = 0;

    /**
     * mahjong_gc_clienttimer_not cNextChairId.
     * @member {number} cNextChairId
     * @memberof mahjong_gc_clienttimer_not
     * @instance
     */
    mahjong_gc_clienttimer_not.prototype.cNextChairId = 0;

    /**
     * mahjong_gc_clienttimer_not nPeriod.
     * @member {number} nPeriod
     * @memberof mahjong_gc_clienttimer_not
     * @instance
     */
    mahjong_gc_clienttimer_not.prototype.nPeriod = 0;

    /**
     * mahjong_gc_clienttimer_not nOpcode.
     * @member {number} nOpcode
     * @memberof mahjong_gc_clienttimer_not
     * @instance
     */
    mahjong_gc_clienttimer_not.prototype.nOpcode = 0;

    /**
     * Creates a new mahjong_gc_clienttimer_not instance using the specified properties.
     * @function create
     * @memberof mahjong_gc_clienttimer_not
     * @static
     * @param {Imahjong_gc_clienttimer_not=} [properties] Properties to set
     * @returns {mahjong_gc_clienttimer_not} mahjong_gc_clienttimer_not instance
     */
    mahjong_gc_clienttimer_not.create = function create(properties) {
        return new mahjong_gc_clienttimer_not(properties);
    };

    /**
     * Encodes the specified mahjong_gc_clienttimer_not message. Does not implicitly {@link mahjong_gc_clienttimer_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_gc_clienttimer_not
     * @static
     * @param {Imahjong_gc_clienttimer_not} message mahjong_gc_clienttimer_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_gc_clienttimer_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cNextChairId);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nPeriod);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nOpcode);
        return writer;
    };

    /**
     * Encodes the specified mahjong_gc_clienttimer_not message, length delimited. Does not implicitly {@link mahjong_gc_clienttimer_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_gc_clienttimer_not
     * @static
     * @param {Imahjong_gc_clienttimer_not} message mahjong_gc_clienttimer_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_gc_clienttimer_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_gc_clienttimer_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_gc_clienttimer_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_gc_clienttimer_not} mahjong_gc_clienttimer_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_gc_clienttimer_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_gc_clienttimer_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairId = reader.int32();
                break;
            case 2:
                message.cNextChairId = reader.int32();
                break;
            case 3:
                message.nPeriod = reader.int32();
                break;
            case 4:
                message.nOpcode = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairId"))
            throw $util.ProtocolError("missing required 'cChairId'", { instance: message });
        if (!message.hasOwnProperty("cNextChairId"))
            throw $util.ProtocolError("missing required 'cNextChairId'", { instance: message });
        if (!message.hasOwnProperty("nPeriod"))
            throw $util.ProtocolError("missing required 'nPeriod'", { instance: message });
        if (!message.hasOwnProperty("nOpcode"))
            throw $util.ProtocolError("missing required 'nOpcode'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_gc_clienttimer_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_gc_clienttimer_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_gc_clienttimer_not} mahjong_gc_clienttimer_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_gc_clienttimer_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_gc_clienttimer_not message.
     * @function verify
     * @memberof mahjong_gc_clienttimer_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_gc_clienttimer_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairId))
            return "cChairId: integer expected";
        if (!$util.isInteger(message.cNextChairId))
            return "cNextChairId: integer expected";
        if (!$util.isInteger(message.nPeriod))
            return "nPeriod: integer expected";
        if (!$util.isInteger(message.nOpcode))
            return "nOpcode: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_gc_clienttimer_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_gc_clienttimer_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_gc_clienttimer_not} mahjong_gc_clienttimer_not
     */
    mahjong_gc_clienttimer_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_gc_clienttimer_not)
            return object;
        var message = new $root.mahjong_gc_clienttimer_not();
        if (object.cChairId != null)
            message.cChairId = object.cChairId | 0;
        if (object.cNextChairId != null)
            message.cNextChairId = object.cNextChairId | 0;
        if (object.nPeriod != null)
            message.nPeriod = object.nPeriod | 0;
        if (object.nOpcode != null)
            message.nOpcode = object.nOpcode | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_gc_clienttimer_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_gc_clienttimer_not
     * @static
     * @param {mahjong_gc_clienttimer_not} message mahjong_gc_clienttimer_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_gc_clienttimer_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cChairId = 0;
            object.cNextChairId = 0;
            object.nPeriod = 0;
            object.nOpcode = 0;
        }
        if (message.cChairId != null && message.hasOwnProperty("cChairId"))
            object.cChairId = message.cChairId;
        if (message.cNextChairId != null && message.hasOwnProperty("cNextChairId"))
            object.cNextChairId = message.cNextChairId;
        if (message.nPeriod != null && message.hasOwnProperty("nPeriod"))
            object.nPeriod = message.nPeriod;
        if (message.nOpcode != null && message.hasOwnProperty("nOpcode"))
            object.nOpcode = message.nOpcode;
        return object;
    };

    /**
     * Converts this mahjong_gc_clienttimer_not to JSON.
     * @function toJSON
     * @memberof mahjong_gc_clienttimer_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_gc_clienttimer_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_gc_clienttimer_not;
})();

$root.mahjong_Cli_TingType_req = (function() {

    /**
     * Properties of a mahjong_Cli_TingType_req.
     * @exports Imahjong_Cli_TingType_req
     * @interface Imahjong_Cli_TingType_req
     * @property {number} cAutoGang mahjong_Cli_TingType_req cAutoGang
     * @property {number} cZimoOnly mahjong_Cli_TingType_req cZimoOnly
     */

    /**
     * Constructs a new mahjong_Cli_TingType_req.
     * @exports mahjong_Cli_TingType_req
     * @classdesc Represents a mahjong_Cli_TingType_req.
     * @implements Imahjong_Cli_TingType_req
     * @constructor
     * @param {Imahjong_Cli_TingType_req=} [properties] Properties to set
     */
    function mahjong_Cli_TingType_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_Cli_TingType_req cAutoGang.
     * @member {number} cAutoGang
     * @memberof mahjong_Cli_TingType_req
     * @instance
     */
    mahjong_Cli_TingType_req.prototype.cAutoGang = 0;

    /**
     * mahjong_Cli_TingType_req cZimoOnly.
     * @member {number} cZimoOnly
     * @memberof mahjong_Cli_TingType_req
     * @instance
     */
    mahjong_Cli_TingType_req.prototype.cZimoOnly = 0;

    /**
     * Creates a new mahjong_Cli_TingType_req instance using the specified properties.
     * @function create
     * @memberof mahjong_Cli_TingType_req
     * @static
     * @param {Imahjong_Cli_TingType_req=} [properties] Properties to set
     * @returns {mahjong_Cli_TingType_req} mahjong_Cli_TingType_req instance
     */
    mahjong_Cli_TingType_req.create = function create(properties) {
        return new mahjong_Cli_TingType_req(properties);
    };

    /**
     * Encodes the specified mahjong_Cli_TingType_req message. Does not implicitly {@link mahjong_Cli_TingType_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_Cli_TingType_req
     * @static
     * @param {Imahjong_Cli_TingType_req} message mahjong_Cli_TingType_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_Cli_TingType_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cAutoGang);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cZimoOnly);
        return writer;
    };

    /**
     * Encodes the specified mahjong_Cli_TingType_req message, length delimited. Does not implicitly {@link mahjong_Cli_TingType_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_Cli_TingType_req
     * @static
     * @param {Imahjong_Cli_TingType_req} message mahjong_Cli_TingType_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_Cli_TingType_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_Cli_TingType_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_Cli_TingType_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_Cli_TingType_req} mahjong_Cli_TingType_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_Cli_TingType_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_Cli_TingType_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cAutoGang = reader.int32();
                break;
            case 2:
                message.cZimoOnly = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cAutoGang"))
            throw $util.ProtocolError("missing required 'cAutoGang'", { instance: message });
        if (!message.hasOwnProperty("cZimoOnly"))
            throw $util.ProtocolError("missing required 'cZimoOnly'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_Cli_TingType_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_Cli_TingType_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_Cli_TingType_req} mahjong_Cli_TingType_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_Cli_TingType_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_Cli_TingType_req message.
     * @function verify
     * @memberof mahjong_Cli_TingType_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_Cli_TingType_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cAutoGang))
            return "cAutoGang: integer expected";
        if (!$util.isInteger(message.cZimoOnly))
            return "cZimoOnly: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_Cli_TingType_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_Cli_TingType_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_Cli_TingType_req} mahjong_Cli_TingType_req
     */
    mahjong_Cli_TingType_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_Cli_TingType_req)
            return object;
        var message = new $root.mahjong_Cli_TingType_req();
        if (object.cAutoGang != null)
            message.cAutoGang = object.cAutoGang | 0;
        if (object.cZimoOnly != null)
            message.cZimoOnly = object.cZimoOnly | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_Cli_TingType_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_Cli_TingType_req
     * @static
     * @param {mahjong_Cli_TingType_req} message mahjong_Cli_TingType_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_Cli_TingType_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cAutoGang = 0;
            object.cZimoOnly = 0;
        }
        if (message.cAutoGang != null && message.hasOwnProperty("cAutoGang"))
            object.cAutoGang = message.cAutoGang;
        if (message.cZimoOnly != null && message.hasOwnProperty("cZimoOnly"))
            object.cZimoOnly = message.cZimoOnly;
        return object;
    };

    /**
     * Converts this mahjong_Cli_TingType_req to JSON.
     * @function toJSON
     * @memberof mahjong_Cli_TingType_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_Cli_TingType_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_Cli_TingType_req;
})();

$root.mahjong_mj_need_charge_req = (function() {

    /**
     * Properties of a mahjong_mj_need_charge_req.
     * @exports Imahjong_mj_need_charge_req
     * @interface Imahjong_mj_need_charge_req
     * @property {number} nTimer mahjong_mj_need_charge_req nTimer
     * @property {number} nType mahjong_mj_need_charge_req nType
     * @property {number} sSerialID mahjong_mj_need_charge_req sSerialID
     */

    /**
     * Constructs a new mahjong_mj_need_charge_req.
     * @exports mahjong_mj_need_charge_req
     * @classdesc Represents a mahjong_mj_need_charge_req.
     * @implements Imahjong_mj_need_charge_req
     * @constructor
     * @param {Imahjong_mj_need_charge_req=} [properties] Properties to set
     */
    function mahjong_mj_need_charge_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_need_charge_req nTimer.
     * @member {number} nTimer
     * @memberof mahjong_mj_need_charge_req
     * @instance
     */
    mahjong_mj_need_charge_req.prototype.nTimer = 0;

    /**
     * mahjong_mj_need_charge_req nType.
     * @member {number} nType
     * @memberof mahjong_mj_need_charge_req
     * @instance
     */
    mahjong_mj_need_charge_req.prototype.nType = 0;

    /**
     * mahjong_mj_need_charge_req sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_mj_need_charge_req
     * @instance
     */
    mahjong_mj_need_charge_req.prototype.sSerialID = 0;

    /**
     * Creates a new mahjong_mj_need_charge_req instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_need_charge_req
     * @static
     * @param {Imahjong_mj_need_charge_req=} [properties] Properties to set
     * @returns {mahjong_mj_need_charge_req} mahjong_mj_need_charge_req instance
     */
    mahjong_mj_need_charge_req.create = function create(properties) {
        return new mahjong_mj_need_charge_req(properties);
    };

    /**
     * Encodes the specified mahjong_mj_need_charge_req message. Does not implicitly {@link mahjong_mj_need_charge_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_need_charge_req
     * @static
     * @param {Imahjong_mj_need_charge_req} message mahjong_mj_need_charge_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_need_charge_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nTimer);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nType);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sSerialID);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_need_charge_req message, length delimited. Does not implicitly {@link mahjong_mj_need_charge_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_need_charge_req
     * @static
     * @param {Imahjong_mj_need_charge_req} message mahjong_mj_need_charge_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_need_charge_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_need_charge_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_need_charge_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_need_charge_req} mahjong_mj_need_charge_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_need_charge_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_need_charge_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nTimer = reader.int32();
                break;
            case 2:
                message.nType = reader.int32();
                break;
            case 3:
                message.sSerialID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nTimer"))
            throw $util.ProtocolError("missing required 'nTimer'", { instance: message });
        if (!message.hasOwnProperty("nType"))
            throw $util.ProtocolError("missing required 'nType'", { instance: message });
        if (!message.hasOwnProperty("sSerialID"))
            throw $util.ProtocolError("missing required 'sSerialID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_need_charge_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_need_charge_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_need_charge_req} mahjong_mj_need_charge_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_need_charge_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_need_charge_req message.
     * @function verify
     * @memberof mahjong_mj_need_charge_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_need_charge_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nTimer))
            return "nTimer: integer expected";
        if (!$util.isInteger(message.nType))
            return "nType: integer expected";
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_need_charge_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_need_charge_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_need_charge_req} mahjong_mj_need_charge_req
     */
    mahjong_mj_need_charge_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_need_charge_req)
            return object;
        var message = new $root.mahjong_mj_need_charge_req();
        if (object.nTimer != null)
            message.nTimer = object.nTimer | 0;
        if (object.nType != null)
            message.nType = object.nType | 0;
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_need_charge_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_need_charge_req
     * @static
     * @param {mahjong_mj_need_charge_req} message mahjong_mj_need_charge_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_need_charge_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nTimer = 0;
            object.nType = 0;
            object.sSerialID = 0;
        }
        if (message.nTimer != null && message.hasOwnProperty("nTimer"))
            object.nTimer = message.nTimer;
        if (message.nType != null && message.hasOwnProperty("nType"))
            object.nType = message.nType;
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        return object;
    };

    /**
     * Converts this mahjong_mj_need_charge_req to JSON.
     * @function toJSON
     * @memberof mahjong_mj_need_charge_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_need_charge_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_need_charge_req;
})();

$root.mahjong_mj_hudouble_not = (function() {

    /**
     * Properties of a mahjong_mj_hudouble_not.
     * @exports Imahjong_mj_hudouble_not
     * @interface Imahjong_mj_hudouble_not
     * @property {number} cChairID mahjong_mj_hudouble_not cChairID
     * @property {number} sDoubleNum mahjong_mj_hudouble_not sDoubleNum
     */

    /**
     * Constructs a new mahjong_mj_hudouble_not.
     * @exports mahjong_mj_hudouble_not
     * @classdesc Represents a mahjong_mj_hudouble_not.
     * @implements Imahjong_mj_hudouble_not
     * @constructor
     * @param {Imahjong_mj_hudouble_not=} [properties] Properties to set
     */
    function mahjong_mj_hudouble_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_hudouble_not cChairID.
     * @member {number} cChairID
     * @memberof mahjong_mj_hudouble_not
     * @instance
     */
    mahjong_mj_hudouble_not.prototype.cChairID = 0;

    /**
     * mahjong_mj_hudouble_not sDoubleNum.
     * @member {number} sDoubleNum
     * @memberof mahjong_mj_hudouble_not
     * @instance
     */
    mahjong_mj_hudouble_not.prototype.sDoubleNum = 0;

    /**
     * Creates a new mahjong_mj_hudouble_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_hudouble_not
     * @static
     * @param {Imahjong_mj_hudouble_not=} [properties] Properties to set
     * @returns {mahjong_mj_hudouble_not} mahjong_mj_hudouble_not instance
     */
    mahjong_mj_hudouble_not.create = function create(properties) {
        return new mahjong_mj_hudouble_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_hudouble_not message. Does not implicitly {@link mahjong_mj_hudouble_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_hudouble_not
     * @static
     * @param {Imahjong_mj_hudouble_not} message mahjong_mj_hudouble_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_hudouble_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sDoubleNum);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_hudouble_not message, length delimited. Does not implicitly {@link mahjong_mj_hudouble_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_hudouble_not
     * @static
     * @param {Imahjong_mj_hudouble_not} message mahjong_mj_hudouble_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_hudouble_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_hudouble_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_hudouble_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_hudouble_not} mahjong_mj_hudouble_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_hudouble_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_hudouble_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairID = reader.int32();
                break;
            case 2:
                message.sDoubleNum = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairID"))
            throw $util.ProtocolError("missing required 'cChairID'", { instance: message });
        if (!message.hasOwnProperty("sDoubleNum"))
            throw $util.ProtocolError("missing required 'sDoubleNum'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_hudouble_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_hudouble_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_hudouble_not} mahjong_mj_hudouble_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_hudouble_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_hudouble_not message.
     * @function verify
     * @memberof mahjong_mj_hudouble_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_hudouble_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
        if (!$util.isInteger(message.sDoubleNum))
            return "sDoubleNum: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_hudouble_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_hudouble_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_hudouble_not} mahjong_mj_hudouble_not
     */
    mahjong_mj_hudouble_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_hudouble_not)
            return object;
        var message = new $root.mahjong_mj_hudouble_not();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.sDoubleNum != null)
            message.sDoubleNum = object.sDoubleNum | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_hudouble_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_hudouble_not
     * @static
     * @param {mahjong_mj_hudouble_not} message mahjong_mj_hudouble_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_hudouble_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cChairID = 0;
            object.sDoubleNum = 0;
        }
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.sDoubleNum != null && message.hasOwnProperty("sDoubleNum"))
            object.sDoubleNum = message.sDoubleNum;
        return object;
    };

    /**
     * Converts this mahjong_mj_hudouble_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_hudouble_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_hudouble_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_hudouble_not;
})();

$root.mahjong_gc_update_player_tokenmoney_not = (function() {

    /**
     * Properties of a mahjong_gc_update_player_tokenmoney_not.
     * @exports Imahjong_gc_update_player_tokenmoney_not
     * @interface Imahjong_gc_update_player_tokenmoney_not
     * @property {number} plyChairid mahjong_gc_update_player_tokenmoney_not plyChairid
     * @property {Array.<Imahjong_player_itemInfo>|null} [itemInfo] mahjong_gc_update_player_tokenmoney_not itemInfo
     */

    /**
     * Constructs a new mahjong_gc_update_player_tokenmoney_not.
     * @exports mahjong_gc_update_player_tokenmoney_not
     * @classdesc Represents a mahjong_gc_update_player_tokenmoney_not.
     * @implements Imahjong_gc_update_player_tokenmoney_not
     * @constructor
     * @param {Imahjong_gc_update_player_tokenmoney_not=} [properties] Properties to set
     */
    function mahjong_gc_update_player_tokenmoney_not(properties) {
        this.itemInfo = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_gc_update_player_tokenmoney_not plyChairid.
     * @member {number} plyChairid
     * @memberof mahjong_gc_update_player_tokenmoney_not
     * @instance
     */
    mahjong_gc_update_player_tokenmoney_not.prototype.plyChairid = 0;

    /**
     * mahjong_gc_update_player_tokenmoney_not itemInfo.
     * @member {Array.<Imahjong_player_itemInfo>} itemInfo
     * @memberof mahjong_gc_update_player_tokenmoney_not
     * @instance
     */
    mahjong_gc_update_player_tokenmoney_not.prototype.itemInfo = $util.emptyArray;

    /**
     * Creates a new mahjong_gc_update_player_tokenmoney_not instance using the specified properties.
     * @function create
     * @memberof mahjong_gc_update_player_tokenmoney_not
     * @static
     * @param {Imahjong_gc_update_player_tokenmoney_not=} [properties] Properties to set
     * @returns {mahjong_gc_update_player_tokenmoney_not} mahjong_gc_update_player_tokenmoney_not instance
     */
    mahjong_gc_update_player_tokenmoney_not.create = function create(properties) {
        return new mahjong_gc_update_player_tokenmoney_not(properties);
    };

    /**
     * Encodes the specified mahjong_gc_update_player_tokenmoney_not message. Does not implicitly {@link mahjong_gc_update_player_tokenmoney_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_gc_update_player_tokenmoney_not
     * @static
     * @param {Imahjong_gc_update_player_tokenmoney_not} message mahjong_gc_update_player_tokenmoney_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_gc_update_player_tokenmoney_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.plyChairid);
        if (message.itemInfo != null && message.itemInfo.length)
            for (var i = 0; i < message.itemInfo.length; ++i)
                $root.mahjong_player_itemInfo.encode(message.itemInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_gc_update_player_tokenmoney_not message, length delimited. Does not implicitly {@link mahjong_gc_update_player_tokenmoney_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_gc_update_player_tokenmoney_not
     * @static
     * @param {Imahjong_gc_update_player_tokenmoney_not} message mahjong_gc_update_player_tokenmoney_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_gc_update_player_tokenmoney_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_gc_update_player_tokenmoney_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_gc_update_player_tokenmoney_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_gc_update_player_tokenmoney_not} mahjong_gc_update_player_tokenmoney_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_gc_update_player_tokenmoney_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_gc_update_player_tokenmoney_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.plyChairid = reader.int32();
                break;
            case 2:
                if (!(message.itemInfo && message.itemInfo.length))
                    message.itemInfo = [];
                message.itemInfo.push($root.mahjong_player_itemInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("plyChairid"))
            throw $util.ProtocolError("missing required 'plyChairid'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_gc_update_player_tokenmoney_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_gc_update_player_tokenmoney_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_gc_update_player_tokenmoney_not} mahjong_gc_update_player_tokenmoney_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_gc_update_player_tokenmoney_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_gc_update_player_tokenmoney_not message.
     * @function verify
     * @memberof mahjong_gc_update_player_tokenmoney_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_gc_update_player_tokenmoney_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.plyChairid))
            return "plyChairid: integer expected";
        if (message.itemInfo != null && message.hasOwnProperty("itemInfo")) {
            if (!Array.isArray(message.itemInfo))
                return "itemInfo: array expected";
            for (var i = 0; i < message.itemInfo.length; ++i) {
                var error = $root.mahjong_player_itemInfo.verify(message.itemInfo[i]);
                if (error)
                    return "itemInfo." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_gc_update_player_tokenmoney_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_gc_update_player_tokenmoney_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_gc_update_player_tokenmoney_not} mahjong_gc_update_player_tokenmoney_not
     */
    mahjong_gc_update_player_tokenmoney_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_gc_update_player_tokenmoney_not)
            return object;
        var message = new $root.mahjong_gc_update_player_tokenmoney_not();
        if (object.plyChairid != null)
            message.plyChairid = object.plyChairid | 0;
        if (object.itemInfo) {
            if (!Array.isArray(object.itemInfo))
                throw TypeError(".mahjong_gc_update_player_tokenmoney_not.itemInfo: array expected");
            message.itemInfo = [];
            for (var i = 0; i < object.itemInfo.length; ++i) {
                if (typeof object.itemInfo[i] !== "object")
                    throw TypeError(".mahjong_gc_update_player_tokenmoney_not.itemInfo: object expected");
                message.itemInfo[i] = $root.mahjong_player_itemInfo.fromObject(object.itemInfo[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_gc_update_player_tokenmoney_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_gc_update_player_tokenmoney_not
     * @static
     * @param {mahjong_gc_update_player_tokenmoney_not} message mahjong_gc_update_player_tokenmoney_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_gc_update_player_tokenmoney_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.itemInfo = [];
        if (options.defaults)
            object.plyChairid = 0;
        if (message.plyChairid != null && message.hasOwnProperty("plyChairid"))
            object.plyChairid = message.plyChairid;
        if (message.itemInfo && message.itemInfo.length) {
            object.itemInfo = [];
            for (var j = 0; j < message.itemInfo.length; ++j)
                object.itemInfo[j] = $root.mahjong_player_itemInfo.toObject(message.itemInfo[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_gc_update_player_tokenmoney_not to JSON.
     * @function toJSON
     * @memberof mahjong_gc_update_player_tokenmoney_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_gc_update_player_tokenmoney_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_gc_update_player_tokenmoney_not;
})();

$root.mahjong_svr_dizhu_not = (function() {

    /**
     * Properties of a mahjong_svr_dizhu_not.
     * @exports Imahjong_svr_dizhu_not
     * @interface Imahjong_svr_dizhu_not
     * @property {number} nDiZhu mahjong_svr_dizhu_not nDiZhu
     */

    /**
     * Constructs a new mahjong_svr_dizhu_not.
     * @exports mahjong_svr_dizhu_not
     * @classdesc Represents a mahjong_svr_dizhu_not.
     * @implements Imahjong_svr_dizhu_not
     * @constructor
     * @param {Imahjong_svr_dizhu_not=} [properties] Properties to set
     */
    function mahjong_svr_dizhu_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_svr_dizhu_not nDiZhu.
     * @member {number} nDiZhu
     * @memberof mahjong_svr_dizhu_not
     * @instance
     */
    mahjong_svr_dizhu_not.prototype.nDiZhu = 0;

    /**
     * Creates a new mahjong_svr_dizhu_not instance using the specified properties.
     * @function create
     * @memberof mahjong_svr_dizhu_not
     * @static
     * @param {Imahjong_svr_dizhu_not=} [properties] Properties to set
     * @returns {mahjong_svr_dizhu_not} mahjong_svr_dizhu_not instance
     */
    mahjong_svr_dizhu_not.create = function create(properties) {
        return new mahjong_svr_dizhu_not(properties);
    };

    /**
     * Encodes the specified mahjong_svr_dizhu_not message. Does not implicitly {@link mahjong_svr_dizhu_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_svr_dizhu_not
     * @static
     * @param {Imahjong_svr_dizhu_not} message mahjong_svr_dizhu_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_dizhu_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nDiZhu);
        return writer;
    };

    /**
     * Encodes the specified mahjong_svr_dizhu_not message, length delimited. Does not implicitly {@link mahjong_svr_dizhu_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_svr_dizhu_not
     * @static
     * @param {Imahjong_svr_dizhu_not} message mahjong_svr_dizhu_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_dizhu_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_svr_dizhu_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_svr_dizhu_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_svr_dizhu_not} mahjong_svr_dizhu_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_dizhu_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_svr_dizhu_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nDiZhu = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nDiZhu"))
            throw $util.ProtocolError("missing required 'nDiZhu'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_svr_dizhu_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_svr_dizhu_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_svr_dizhu_not} mahjong_svr_dizhu_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_dizhu_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_svr_dizhu_not message.
     * @function verify
     * @memberof mahjong_svr_dizhu_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_svr_dizhu_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nDiZhu))
            return "nDiZhu: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_svr_dizhu_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_svr_dizhu_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_svr_dizhu_not} mahjong_svr_dizhu_not
     */
    mahjong_svr_dizhu_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_svr_dizhu_not)
            return object;
        var message = new $root.mahjong_svr_dizhu_not();
        if (object.nDiZhu != null)
            message.nDiZhu = object.nDiZhu | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_svr_dizhu_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_svr_dizhu_not
     * @static
     * @param {mahjong_svr_dizhu_not} message mahjong_svr_dizhu_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_svr_dizhu_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.nDiZhu = 0;
        if (message.nDiZhu != null && message.hasOwnProperty("nDiZhu"))
            object.nDiZhu = message.nDiZhu;
        return object;
    };

    /**
     * Converts this mahjong_svr_dizhu_not to JSON.
     * @function toJSON
     * @memberof mahjong_svr_dizhu_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_svr_dizhu_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_svr_dizhu_not;
})();

$root.mahjong_svr_portrait_req = (function() {

    /**
     * Properties of a mahjong_svr_portrait_req.
     * @exports Imahjong_svr_portrait_req
     * @interface Imahjong_svr_portrait_req
     */

    /**
     * Constructs a new mahjong_svr_portrait_req.
     * @exports mahjong_svr_portrait_req
     * @classdesc Represents a mahjong_svr_portrait_req.
     * @implements Imahjong_svr_portrait_req
     * @constructor
     * @param {Imahjong_svr_portrait_req=} [properties] Properties to set
     */
    function mahjong_svr_portrait_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_svr_portrait_req instance using the specified properties.
     * @function create
     * @memberof mahjong_svr_portrait_req
     * @static
     * @param {Imahjong_svr_portrait_req=} [properties] Properties to set
     * @returns {mahjong_svr_portrait_req} mahjong_svr_portrait_req instance
     */
    mahjong_svr_portrait_req.create = function create(properties) {
        return new mahjong_svr_portrait_req(properties);
    };

    /**
     * Encodes the specified mahjong_svr_portrait_req message. Does not implicitly {@link mahjong_svr_portrait_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_svr_portrait_req
     * @static
     * @param {Imahjong_svr_portrait_req} message mahjong_svr_portrait_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_portrait_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_svr_portrait_req message, length delimited. Does not implicitly {@link mahjong_svr_portrait_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_svr_portrait_req
     * @static
     * @param {Imahjong_svr_portrait_req} message mahjong_svr_portrait_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_portrait_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_svr_portrait_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_svr_portrait_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_svr_portrait_req} mahjong_svr_portrait_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_portrait_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_svr_portrait_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_svr_portrait_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_svr_portrait_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_svr_portrait_req} mahjong_svr_portrait_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_portrait_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_svr_portrait_req message.
     * @function verify
     * @memberof mahjong_svr_portrait_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_svr_portrait_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_svr_portrait_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_svr_portrait_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_svr_portrait_req} mahjong_svr_portrait_req
     */
    mahjong_svr_portrait_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_svr_portrait_req)
            return object;
        return new $root.mahjong_svr_portrait_req();
    };

    /**
     * Creates a plain object from a mahjong_svr_portrait_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_svr_portrait_req
     * @static
     * @param {mahjong_svr_portrait_req} message mahjong_svr_portrait_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_svr_portrait_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_svr_portrait_req to JSON.
     * @function toJSON
     * @memberof mahjong_svr_portrait_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_svr_portrait_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_svr_portrait_req;
})();

$root.mahjong_mj_completedata_req = (function() {

    /**
     * Properties of a mahjong_mj_completedata_req.
     * @exports Imahjong_mj_completedata_req
     * @interface Imahjong_mj_completedata_req
     */

    /**
     * Constructs a new mahjong_mj_completedata_req.
     * @exports mahjong_mj_completedata_req
     * @classdesc Represents a mahjong_mj_completedata_req.
     * @implements Imahjong_mj_completedata_req
     * @constructor
     * @param {Imahjong_mj_completedata_req=} [properties] Properties to set
     */
    function mahjong_mj_completedata_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_mj_completedata_req instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_completedata_req
     * @static
     * @param {Imahjong_mj_completedata_req=} [properties] Properties to set
     * @returns {mahjong_mj_completedata_req} mahjong_mj_completedata_req instance
     */
    mahjong_mj_completedata_req.create = function create(properties) {
        return new mahjong_mj_completedata_req(properties);
    };

    /**
     * Encodes the specified mahjong_mj_completedata_req message. Does not implicitly {@link mahjong_mj_completedata_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_completedata_req
     * @static
     * @param {Imahjong_mj_completedata_req} message mahjong_mj_completedata_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_completedata_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_completedata_req message, length delimited. Does not implicitly {@link mahjong_mj_completedata_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_completedata_req
     * @static
     * @param {Imahjong_mj_completedata_req} message mahjong_mj_completedata_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_completedata_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_completedata_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_completedata_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_completedata_req} mahjong_mj_completedata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_completedata_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_completedata_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_mj_completedata_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_completedata_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_completedata_req} mahjong_mj_completedata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_completedata_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_completedata_req message.
     * @function verify
     * @memberof mahjong_mj_completedata_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_completedata_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_completedata_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_completedata_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_completedata_req} mahjong_mj_completedata_req
     */
    mahjong_mj_completedata_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_completedata_req)
            return object;
        return new $root.mahjong_mj_completedata_req();
    };

    /**
     * Creates a plain object from a mahjong_mj_completedata_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_completedata_req
     * @static
     * @param {mahjong_mj_completedata_req} message mahjong_mj_completedata_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_completedata_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_mj_completedata_req to JSON.
     * @function toJSON
     * @memberof mahjong_mj_completedata_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_completedata_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_completedata_req;
})();

$root.mahjong_svr_leave_enable_not = (function() {

    /**
     * Properties of a mahjong_svr_leave_enable_not.
     * @exports Imahjong_svr_leave_enable_not
     * @interface Imahjong_svr_leave_enable_not
     */

    /**
     * Constructs a new mahjong_svr_leave_enable_not.
     * @exports mahjong_svr_leave_enable_not
     * @classdesc Represents a mahjong_svr_leave_enable_not.
     * @implements Imahjong_svr_leave_enable_not
     * @constructor
     * @param {Imahjong_svr_leave_enable_not=} [properties] Properties to set
     */
    function mahjong_svr_leave_enable_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_svr_leave_enable_not instance using the specified properties.
     * @function create
     * @memberof mahjong_svr_leave_enable_not
     * @static
     * @param {Imahjong_svr_leave_enable_not=} [properties] Properties to set
     * @returns {mahjong_svr_leave_enable_not} mahjong_svr_leave_enable_not instance
     */
    mahjong_svr_leave_enable_not.create = function create(properties) {
        return new mahjong_svr_leave_enable_not(properties);
    };

    /**
     * Encodes the specified mahjong_svr_leave_enable_not message. Does not implicitly {@link mahjong_svr_leave_enable_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_svr_leave_enable_not
     * @static
     * @param {Imahjong_svr_leave_enable_not} message mahjong_svr_leave_enable_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_leave_enable_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_svr_leave_enable_not message, length delimited. Does not implicitly {@link mahjong_svr_leave_enable_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_svr_leave_enable_not
     * @static
     * @param {Imahjong_svr_leave_enable_not} message mahjong_svr_leave_enable_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_leave_enable_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_svr_leave_enable_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_svr_leave_enable_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_svr_leave_enable_not} mahjong_svr_leave_enable_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_leave_enable_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_svr_leave_enable_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_svr_leave_enable_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_svr_leave_enable_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_svr_leave_enable_not} mahjong_svr_leave_enable_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_leave_enable_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_svr_leave_enable_not message.
     * @function verify
     * @memberof mahjong_svr_leave_enable_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_svr_leave_enable_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_svr_leave_enable_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_svr_leave_enable_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_svr_leave_enable_not} mahjong_svr_leave_enable_not
     */
    mahjong_svr_leave_enable_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_svr_leave_enable_not)
            return object;
        return new $root.mahjong_svr_leave_enable_not();
    };

    /**
     * Creates a plain object from a mahjong_svr_leave_enable_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_svr_leave_enable_not
     * @static
     * @param {mahjong_svr_leave_enable_not} message mahjong_svr_leave_enable_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_svr_leave_enable_not.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_svr_leave_enable_not to JSON.
     * @function toJSON
     * @memberof mahjong_svr_leave_enable_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_svr_leave_enable_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_svr_leave_enable_not;
})();

$root.mahjong_mj_visi_compdata_not = (function() {

    /**
     * Properties of a mahjong_mj_visi_compdata_not.
     * @exports Imahjong_mj_visi_compdata_not
     * @interface Imahjong_mj_visi_compdata_not
     * @property {number} cBanker mahjong_mj_visi_compdata_not cBanker
     * @property {number} nLeftCards mahjong_mj_visi_compdata_not nLeftCards
     * @property {number} nDizhu mahjong_mj_visi_compdata_not nDizhu
     * @property {number} nTaifei mahjong_mj_visi_compdata_not nTaifei
     * @property {number} cCurrPly mahjong_mj_visi_compdata_not cCurrPly
     * @property {number} cPrioPly mahjong_mj_visi_compdata_not cPrioPly
     * @property {number} cAdminPly mahjong_mj_visi_compdata_not cAdminPly
     * @property {number} cInvitePly mahjong_mj_visi_compdata_not cInvitePly
     * @property {Array.<number|Long>|null} [vecFakeScores] mahjong_mj_visi_compdata_not vecFakeScores
     * @property {Array.<Imahjong_mj_changecard_not>|null} [vecPlyData] mahjong_mj_visi_compdata_not vecPlyData
     * @property {number} nParam1 mahjong_mj_visi_compdata_not nParam1
     * @property {number} nParam2 mahjong_mj_visi_compdata_not nParam2
     * @property {string} strParam1 mahjong_mj_visi_compdata_not strParam1
     * @property {string} strParam2 mahjong_mj_visi_compdata_not strParam2
     */

    /**
     * Constructs a new mahjong_mj_visi_compdata_not.
     * @exports mahjong_mj_visi_compdata_not
     * @classdesc Represents a mahjong_mj_visi_compdata_not.
     * @implements Imahjong_mj_visi_compdata_not
     * @constructor
     * @param {Imahjong_mj_visi_compdata_not=} [properties] Properties to set
     */
    function mahjong_mj_visi_compdata_not(properties) {
        this.vecFakeScores = [];
        this.vecPlyData = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_visi_compdata_not cBanker.
     * @member {number} cBanker
     * @memberof mahjong_mj_visi_compdata_not
     * @instance
     */
    mahjong_mj_visi_compdata_not.prototype.cBanker = 0;

    /**
     * mahjong_mj_visi_compdata_not nLeftCards.
     * @member {number} nLeftCards
     * @memberof mahjong_mj_visi_compdata_not
     * @instance
     */
    mahjong_mj_visi_compdata_not.prototype.nLeftCards = 0;

    /**
     * mahjong_mj_visi_compdata_not nDizhu.
     * @member {number} nDizhu
     * @memberof mahjong_mj_visi_compdata_not
     * @instance
     */
    mahjong_mj_visi_compdata_not.prototype.nDizhu = 0;

    /**
     * mahjong_mj_visi_compdata_not nTaifei.
     * @member {number} nTaifei
     * @memberof mahjong_mj_visi_compdata_not
     * @instance
     */
    mahjong_mj_visi_compdata_not.prototype.nTaifei = 0;

    /**
     * mahjong_mj_visi_compdata_not cCurrPly.
     * @member {number} cCurrPly
     * @memberof mahjong_mj_visi_compdata_not
     * @instance
     */
    mahjong_mj_visi_compdata_not.prototype.cCurrPly = 0;

    /**
     * mahjong_mj_visi_compdata_not cPrioPly.
     * @member {number} cPrioPly
     * @memberof mahjong_mj_visi_compdata_not
     * @instance
     */
    mahjong_mj_visi_compdata_not.prototype.cPrioPly = 0;

    /**
     * mahjong_mj_visi_compdata_not cAdminPly.
     * @member {number} cAdminPly
     * @memberof mahjong_mj_visi_compdata_not
     * @instance
     */
    mahjong_mj_visi_compdata_not.prototype.cAdminPly = 0;

    /**
     * mahjong_mj_visi_compdata_not cInvitePly.
     * @member {number} cInvitePly
     * @memberof mahjong_mj_visi_compdata_not
     * @instance
     */
    mahjong_mj_visi_compdata_not.prototype.cInvitePly = 0;

    /**
     * mahjong_mj_visi_compdata_not vecFakeScores.
     * @member {Array.<number|Long>} vecFakeScores
     * @memberof mahjong_mj_visi_compdata_not
     * @instance
     */
    mahjong_mj_visi_compdata_not.prototype.vecFakeScores = $util.emptyArray;

    /**
     * mahjong_mj_visi_compdata_not vecPlyData.
     * @member {Array.<Imahjong_mj_changecard_not>} vecPlyData
     * @memberof mahjong_mj_visi_compdata_not
     * @instance
     */
    mahjong_mj_visi_compdata_not.prototype.vecPlyData = $util.emptyArray;

    /**
     * mahjong_mj_visi_compdata_not nParam1.
     * @member {number} nParam1
     * @memberof mahjong_mj_visi_compdata_not
     * @instance
     */
    mahjong_mj_visi_compdata_not.prototype.nParam1 = 0;

    /**
     * mahjong_mj_visi_compdata_not nParam2.
     * @member {number} nParam2
     * @memberof mahjong_mj_visi_compdata_not
     * @instance
     */
    mahjong_mj_visi_compdata_not.prototype.nParam2 = 0;

    /**
     * mahjong_mj_visi_compdata_not strParam1.
     * @member {string} strParam1
     * @memberof mahjong_mj_visi_compdata_not
     * @instance
     */
    mahjong_mj_visi_compdata_not.prototype.strParam1 = "";

    /**
     * mahjong_mj_visi_compdata_not strParam2.
     * @member {string} strParam2
     * @memberof mahjong_mj_visi_compdata_not
     * @instance
     */
    mahjong_mj_visi_compdata_not.prototype.strParam2 = "";

    /**
     * Creates a new mahjong_mj_visi_compdata_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_visi_compdata_not
     * @static
     * @param {Imahjong_mj_visi_compdata_not=} [properties] Properties to set
     * @returns {mahjong_mj_visi_compdata_not} mahjong_mj_visi_compdata_not instance
     */
    mahjong_mj_visi_compdata_not.create = function create(properties) {
        return new mahjong_mj_visi_compdata_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_visi_compdata_not message. Does not implicitly {@link mahjong_mj_visi_compdata_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_visi_compdata_not
     * @static
     * @param {Imahjong_mj_visi_compdata_not} message mahjong_mj_visi_compdata_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_visi_compdata_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cBanker);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nLeftCards);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nDizhu);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nTaifei);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cCurrPly);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cPrioPly);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.cAdminPly);
        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.cInvitePly);
        if (message.vecFakeScores != null && message.vecFakeScores.length)
            for (var i = 0; i < message.vecFakeScores.length; ++i)
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.vecFakeScores[i]);
        if (message.vecPlyData != null && message.vecPlyData.length)
            for (var i = 0; i < message.vecPlyData.length; ++i)
                $root.mahjong_mj_changecard_not.encode(message.vecPlyData[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.nParam1);
        writer.uint32(/* id 12, wireType 0 =*/96).int32(message.nParam2);
        writer.uint32(/* id 13, wireType 2 =*/106).string(message.strParam1);
        writer.uint32(/* id 14, wireType 2 =*/114).string(message.strParam2);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_visi_compdata_not message, length delimited. Does not implicitly {@link mahjong_mj_visi_compdata_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_visi_compdata_not
     * @static
     * @param {Imahjong_mj_visi_compdata_not} message mahjong_mj_visi_compdata_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_visi_compdata_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_visi_compdata_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_visi_compdata_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_visi_compdata_not} mahjong_mj_visi_compdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_visi_compdata_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_visi_compdata_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cBanker = reader.int32();
                break;
            case 2:
                message.nLeftCards = reader.int32();
                break;
            case 3:
                message.nDizhu = reader.int32();
                break;
            case 4:
                message.nTaifei = reader.int32();
                break;
            case 5:
                message.cCurrPly = reader.int32();
                break;
            case 6:
                message.cPrioPly = reader.int32();
                break;
            case 7:
                message.cAdminPly = reader.int32();
                break;
            case 8:
                message.cInvitePly = reader.int32();
                break;
            case 9:
                if (!(message.vecFakeScores && message.vecFakeScores.length))
                    message.vecFakeScores = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecFakeScores.push(reader.int64());
                } else
                    message.vecFakeScores.push(reader.int64());
                break;
            case 10:
                if (!(message.vecPlyData && message.vecPlyData.length))
                    message.vecPlyData = [];
                message.vecPlyData.push($root.mahjong_mj_changecard_not.decode(reader, reader.uint32()));
                break;
            case 11:
                message.nParam1 = reader.int32();
                break;
            case 12:
                message.nParam2 = reader.int32();
                break;
            case 13:
                message.strParam1 = reader.string();
                break;
            case 14:
                message.strParam2 = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cBanker"))
            throw $util.ProtocolError("missing required 'cBanker'", { instance: message });
        if (!message.hasOwnProperty("nLeftCards"))
            throw $util.ProtocolError("missing required 'nLeftCards'", { instance: message });
        if (!message.hasOwnProperty("nDizhu"))
            throw $util.ProtocolError("missing required 'nDizhu'", { instance: message });
        if (!message.hasOwnProperty("nTaifei"))
            throw $util.ProtocolError("missing required 'nTaifei'", { instance: message });
        if (!message.hasOwnProperty("cCurrPly"))
            throw $util.ProtocolError("missing required 'cCurrPly'", { instance: message });
        if (!message.hasOwnProperty("cPrioPly"))
            throw $util.ProtocolError("missing required 'cPrioPly'", { instance: message });
        if (!message.hasOwnProperty("cAdminPly"))
            throw $util.ProtocolError("missing required 'cAdminPly'", { instance: message });
        if (!message.hasOwnProperty("cInvitePly"))
            throw $util.ProtocolError("missing required 'cInvitePly'", { instance: message });
        if (!message.hasOwnProperty("nParam1"))
            throw $util.ProtocolError("missing required 'nParam1'", { instance: message });
        if (!message.hasOwnProperty("nParam2"))
            throw $util.ProtocolError("missing required 'nParam2'", { instance: message });
        if (!message.hasOwnProperty("strParam1"))
            throw $util.ProtocolError("missing required 'strParam1'", { instance: message });
        if (!message.hasOwnProperty("strParam2"))
            throw $util.ProtocolError("missing required 'strParam2'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_visi_compdata_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_visi_compdata_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_visi_compdata_not} mahjong_mj_visi_compdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_visi_compdata_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_visi_compdata_not message.
     * @function verify
     * @memberof mahjong_mj_visi_compdata_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_visi_compdata_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cBanker))
            return "cBanker: integer expected";
        if (!$util.isInteger(message.nLeftCards))
            return "nLeftCards: integer expected";
        if (!$util.isInteger(message.nDizhu))
            return "nDizhu: integer expected";
        if (!$util.isInteger(message.nTaifei))
            return "nTaifei: integer expected";
        if (!$util.isInteger(message.cCurrPly))
            return "cCurrPly: integer expected";
        if (!$util.isInteger(message.cPrioPly))
            return "cPrioPly: integer expected";
        if (!$util.isInteger(message.cAdminPly))
            return "cAdminPly: integer expected";
        if (!$util.isInteger(message.cInvitePly))
            return "cInvitePly: integer expected";
        if (message.vecFakeScores != null && message.hasOwnProperty("vecFakeScores")) {
            if (!Array.isArray(message.vecFakeScores))
                return "vecFakeScores: array expected";
            for (var i = 0; i < message.vecFakeScores.length; ++i)
                if (!$util.isInteger(message.vecFakeScores[i]) && !(message.vecFakeScores[i] && $util.isInteger(message.vecFakeScores[i].low) && $util.isInteger(message.vecFakeScores[i].high)))
                    return "vecFakeScores: integer|Long[] expected";
        }
        if (message.vecPlyData != null && message.hasOwnProperty("vecPlyData")) {
            if (!Array.isArray(message.vecPlyData))
                return "vecPlyData: array expected";
            for (var i = 0; i < message.vecPlyData.length; ++i) {
                var error = $root.mahjong_mj_changecard_not.verify(message.vecPlyData[i]);
                if (error)
                    return "vecPlyData." + error;
            }
        }
        if (!$util.isInteger(message.nParam1))
            return "nParam1: integer expected";
        if (!$util.isInteger(message.nParam2))
            return "nParam2: integer expected";
        if (!$util.isString(message.strParam1))
            return "strParam1: string expected";
        if (!$util.isString(message.strParam2))
            return "strParam2: string expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_visi_compdata_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_visi_compdata_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_visi_compdata_not} mahjong_mj_visi_compdata_not
     */
    mahjong_mj_visi_compdata_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_visi_compdata_not)
            return object;
        var message = new $root.mahjong_mj_visi_compdata_not();
        if (object.cBanker != null)
            message.cBanker = object.cBanker | 0;
        if (object.nLeftCards != null)
            message.nLeftCards = object.nLeftCards | 0;
        if (object.nDizhu != null)
            message.nDizhu = object.nDizhu | 0;
        if (object.nTaifei != null)
            message.nTaifei = object.nTaifei | 0;
        if (object.cCurrPly != null)
            message.cCurrPly = object.cCurrPly | 0;
        if (object.cPrioPly != null)
            message.cPrioPly = object.cPrioPly | 0;
        if (object.cAdminPly != null)
            message.cAdminPly = object.cAdminPly | 0;
        if (object.cInvitePly != null)
            message.cInvitePly = object.cInvitePly | 0;
        if (object.vecFakeScores) {
            if (!Array.isArray(object.vecFakeScores))
                throw TypeError(".mahjong_mj_visi_compdata_not.vecFakeScores: array expected");
            message.vecFakeScores = [];
            for (var i = 0; i < object.vecFakeScores.length; ++i)
                if ($util.Long)
                    (message.vecFakeScores[i] = $util.Long.fromValue(object.vecFakeScores[i])).unsigned = false;
                else if (typeof object.vecFakeScores[i] === "string")
                    message.vecFakeScores[i] = parseInt(object.vecFakeScores[i], 10);
                else if (typeof object.vecFakeScores[i] === "number")
                    message.vecFakeScores[i] = object.vecFakeScores[i];
                else if (typeof object.vecFakeScores[i] === "object")
                    message.vecFakeScores[i] = new $util.LongBits(object.vecFakeScores[i].low >>> 0, object.vecFakeScores[i].high >>> 0).toNumber();
        }
        if (object.vecPlyData) {
            if (!Array.isArray(object.vecPlyData))
                throw TypeError(".mahjong_mj_visi_compdata_not.vecPlyData: array expected");
            message.vecPlyData = [];
            for (var i = 0; i < object.vecPlyData.length; ++i) {
                if (typeof object.vecPlyData[i] !== "object")
                    throw TypeError(".mahjong_mj_visi_compdata_not.vecPlyData: object expected");
                message.vecPlyData[i] = $root.mahjong_mj_changecard_not.fromObject(object.vecPlyData[i]);
            }
        }
        if (object.nParam1 != null)
            message.nParam1 = object.nParam1 | 0;
        if (object.nParam2 != null)
            message.nParam2 = object.nParam2 | 0;
        if (object.strParam1 != null)
            message.strParam1 = String(object.strParam1);
        if (object.strParam2 != null)
            message.strParam2 = String(object.strParam2);
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_visi_compdata_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_visi_compdata_not
     * @static
     * @param {mahjong_mj_visi_compdata_not} message mahjong_mj_visi_compdata_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_visi_compdata_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecFakeScores = [];
            object.vecPlyData = [];
        }
        if (options.defaults) {
            object.cBanker = 0;
            object.nLeftCards = 0;
            object.nDizhu = 0;
            object.nTaifei = 0;
            object.cCurrPly = 0;
            object.cPrioPly = 0;
            object.cAdminPly = 0;
            object.cInvitePly = 0;
            object.nParam1 = 0;
            object.nParam2 = 0;
            object.strParam1 = "";
            object.strParam2 = "";
        }
        if (message.cBanker != null && message.hasOwnProperty("cBanker"))
            object.cBanker = message.cBanker;
        if (message.nLeftCards != null && message.hasOwnProperty("nLeftCards"))
            object.nLeftCards = message.nLeftCards;
        if (message.nDizhu != null && message.hasOwnProperty("nDizhu"))
            object.nDizhu = message.nDizhu;
        if (message.nTaifei != null && message.hasOwnProperty("nTaifei"))
            object.nTaifei = message.nTaifei;
        if (message.cCurrPly != null && message.hasOwnProperty("cCurrPly"))
            object.cCurrPly = message.cCurrPly;
        if (message.cPrioPly != null && message.hasOwnProperty("cPrioPly"))
            object.cPrioPly = message.cPrioPly;
        if (message.cAdminPly != null && message.hasOwnProperty("cAdminPly"))
            object.cAdminPly = message.cAdminPly;
        if (message.cInvitePly != null && message.hasOwnProperty("cInvitePly"))
            object.cInvitePly = message.cInvitePly;
        if (message.vecFakeScores && message.vecFakeScores.length) {
            object.vecFakeScores = [];
            for (var j = 0; j < message.vecFakeScores.length; ++j)
                if (typeof message.vecFakeScores[j] === "number")
                    object.vecFakeScores[j] = options.longs === String ? String(message.vecFakeScores[j]) : message.vecFakeScores[j];
                else
                    object.vecFakeScores[j] = options.longs === String ? $util.Long.prototype.toString.call(message.vecFakeScores[j]) : options.longs === Number ? new $util.LongBits(message.vecFakeScores[j].low >>> 0, message.vecFakeScores[j].high >>> 0).toNumber() : message.vecFakeScores[j];
        }
        if (message.vecPlyData && message.vecPlyData.length) {
            object.vecPlyData = [];
            for (var j = 0; j < message.vecPlyData.length; ++j)
                object.vecPlyData[j] = $root.mahjong_mj_changecard_not.toObject(message.vecPlyData[j], options);
        }
        if (message.nParam1 != null && message.hasOwnProperty("nParam1"))
            object.nParam1 = message.nParam1;
        if (message.nParam2 != null && message.hasOwnProperty("nParam2"))
            object.nParam2 = message.nParam2;
        if (message.strParam1 != null && message.hasOwnProperty("strParam1"))
            object.strParam1 = message.strParam1;
        if (message.strParam2 != null && message.hasOwnProperty("strParam2"))
            object.strParam2 = message.strParam2;
        return object;
    };

    /**
     * Converts this mahjong_mj_visi_compdata_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_visi_compdata_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_visi_compdata_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_visi_compdata_not;
})();

$root.mahjong_svr_fake_score_not_v1_1_0 = (function() {

    /**
     * Properties of a mahjong_svr_fake_score_not_v1_1_0.
     * @exports Imahjong_svr_fake_score_not_v1_1_0
     * @interface Imahjong_svr_fake_score_not_v1_1_0
     * @property {Array.<number|Long>|null} [scores] mahjong_svr_fake_score_not_v1_1_0 scores
     */

    /**
     * Constructs a new mahjong_svr_fake_score_not_v1_1_0.
     * @exports mahjong_svr_fake_score_not_v1_1_0
     * @classdesc Represents a mahjong_svr_fake_score_not_v1_1_0.
     * @implements Imahjong_svr_fake_score_not_v1_1_0
     * @constructor
     * @param {Imahjong_svr_fake_score_not_v1_1_0=} [properties] Properties to set
     */
    function mahjong_svr_fake_score_not_v1_1_0(properties) {
        this.scores = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_svr_fake_score_not_v1_1_0 scores.
     * @member {Array.<number|Long>} scores
     * @memberof mahjong_svr_fake_score_not_v1_1_0
     * @instance
     */
    mahjong_svr_fake_score_not_v1_1_0.prototype.scores = $util.emptyArray;

    /**
     * Creates a new mahjong_svr_fake_score_not_v1_1_0 instance using the specified properties.
     * @function create
     * @memberof mahjong_svr_fake_score_not_v1_1_0
     * @static
     * @param {Imahjong_svr_fake_score_not_v1_1_0=} [properties] Properties to set
     * @returns {mahjong_svr_fake_score_not_v1_1_0} mahjong_svr_fake_score_not_v1_1_0 instance
     */
    mahjong_svr_fake_score_not_v1_1_0.create = function create(properties) {
        return new mahjong_svr_fake_score_not_v1_1_0(properties);
    };

    /**
     * Encodes the specified mahjong_svr_fake_score_not_v1_1_0 message. Does not implicitly {@link mahjong_svr_fake_score_not_v1_1_0.verify|verify} messages.
     * @function encode
     * @memberof mahjong_svr_fake_score_not_v1_1_0
     * @static
     * @param {Imahjong_svr_fake_score_not_v1_1_0} message mahjong_svr_fake_score_not_v1_1_0 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_fake_score_not_v1_1_0.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.scores != null && message.scores.length)
            for (var i = 0; i < message.scores.length; ++i)
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.scores[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_svr_fake_score_not_v1_1_0 message, length delimited. Does not implicitly {@link mahjong_svr_fake_score_not_v1_1_0.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_svr_fake_score_not_v1_1_0
     * @static
     * @param {Imahjong_svr_fake_score_not_v1_1_0} message mahjong_svr_fake_score_not_v1_1_0 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_fake_score_not_v1_1_0.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_svr_fake_score_not_v1_1_0 message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_svr_fake_score_not_v1_1_0
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_svr_fake_score_not_v1_1_0} mahjong_svr_fake_score_not_v1_1_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_fake_score_not_v1_1_0.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_svr_fake_score_not_v1_1_0();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.scores && message.scores.length))
                    message.scores = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.scores.push(reader.int64());
                } else
                    message.scores.push(reader.int64());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_svr_fake_score_not_v1_1_0 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_svr_fake_score_not_v1_1_0
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_svr_fake_score_not_v1_1_0} mahjong_svr_fake_score_not_v1_1_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_fake_score_not_v1_1_0.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_svr_fake_score_not_v1_1_0 message.
     * @function verify
     * @memberof mahjong_svr_fake_score_not_v1_1_0
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_svr_fake_score_not_v1_1_0.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.scores != null && message.hasOwnProperty("scores")) {
            if (!Array.isArray(message.scores))
                return "scores: array expected";
            for (var i = 0; i < message.scores.length; ++i)
                if (!$util.isInteger(message.scores[i]) && !(message.scores[i] && $util.isInteger(message.scores[i].low) && $util.isInteger(message.scores[i].high)))
                    return "scores: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_svr_fake_score_not_v1_1_0 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_svr_fake_score_not_v1_1_0
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_svr_fake_score_not_v1_1_0} mahjong_svr_fake_score_not_v1_1_0
     */
    mahjong_svr_fake_score_not_v1_1_0.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_svr_fake_score_not_v1_1_0)
            return object;
        var message = new $root.mahjong_svr_fake_score_not_v1_1_0();
        if (object.scores) {
            if (!Array.isArray(object.scores))
                throw TypeError(".mahjong_svr_fake_score_not_v1_1_0.scores: array expected");
            message.scores = [];
            for (var i = 0; i < object.scores.length; ++i)
                if ($util.Long)
                    (message.scores[i] = $util.Long.fromValue(object.scores[i])).unsigned = false;
                else if (typeof object.scores[i] === "string")
                    message.scores[i] = parseInt(object.scores[i], 10);
                else if (typeof object.scores[i] === "number")
                    message.scores[i] = object.scores[i];
                else if (typeof object.scores[i] === "object")
                    message.scores[i] = new $util.LongBits(object.scores[i].low >>> 0, object.scores[i].high >>> 0).toNumber();
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_svr_fake_score_not_v1_1_0 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_svr_fake_score_not_v1_1_0
     * @static
     * @param {mahjong_svr_fake_score_not_v1_1_0} message mahjong_svr_fake_score_not_v1_1_0
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_svr_fake_score_not_v1_1_0.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.scores = [];
        if (message.scores && message.scores.length) {
            object.scores = [];
            for (var j = 0; j < message.scores.length; ++j)
                if (typeof message.scores[j] === "number")
                    object.scores[j] = options.longs === String ? String(message.scores[j]) : message.scores[j];
                else
                    object.scores[j] = options.longs === String ? $util.Long.prototype.toString.call(message.scores[j]) : options.longs === Number ? new $util.LongBits(message.scores[j].low >>> 0, message.scores[j].high >>> 0).toNumber() : message.scores[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_svr_fake_score_not_v1_1_0 to JSON.
     * @function toJSON
     * @memberof mahjong_svr_fake_score_not_v1_1_0
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_svr_fake_score_not_v1_1_0.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_svr_fake_score_not_v1_1_0;
})();

$root.mahjong_mj_gameresult_not_v2_2_0 = (function() {

    /**
     * Properties of a mahjong_mj_gameresult_not_v2_2_0.
     * @exports Imahjong_mj_gameresult_not_v2_2_0
     * @interface Imahjong_mj_gameresult_not_v2_2_0
     * @property {Array.<Imahjong_st_gameresult_v2_2_0>|null} [vecGameResult] mahjong_mj_gameresult_not_v2_2_0 vecGameResult
     */

    /**
     * Constructs a new mahjong_mj_gameresult_not_v2_2_0.
     * @exports mahjong_mj_gameresult_not_v2_2_0
     * @classdesc Represents a mahjong_mj_gameresult_not_v2_2_0.
     * @implements Imahjong_mj_gameresult_not_v2_2_0
     * @constructor
     * @param {Imahjong_mj_gameresult_not_v2_2_0=} [properties] Properties to set
     */
    function mahjong_mj_gameresult_not_v2_2_0(properties) {
        this.vecGameResult = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_gameresult_not_v2_2_0 vecGameResult.
     * @member {Array.<Imahjong_st_gameresult_v2_2_0>} vecGameResult
     * @memberof mahjong_mj_gameresult_not_v2_2_0
     * @instance
     */
    mahjong_mj_gameresult_not_v2_2_0.prototype.vecGameResult = $util.emptyArray;

    /**
     * Creates a new mahjong_mj_gameresult_not_v2_2_0 instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_gameresult_not_v2_2_0
     * @static
     * @param {Imahjong_mj_gameresult_not_v2_2_0=} [properties] Properties to set
     * @returns {mahjong_mj_gameresult_not_v2_2_0} mahjong_mj_gameresult_not_v2_2_0 instance
     */
    mahjong_mj_gameresult_not_v2_2_0.create = function create(properties) {
        return new mahjong_mj_gameresult_not_v2_2_0(properties);
    };

    /**
     * Encodes the specified mahjong_mj_gameresult_not_v2_2_0 message. Does not implicitly {@link mahjong_mj_gameresult_not_v2_2_0.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_gameresult_not_v2_2_0
     * @static
     * @param {Imahjong_mj_gameresult_not_v2_2_0} message mahjong_mj_gameresult_not_v2_2_0 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_gameresult_not_v2_2_0.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vecGameResult != null && message.vecGameResult.length)
            for (var i = 0; i < message.vecGameResult.length; ++i)
                $root.mahjong_st_gameresult_v2_2_0.encode(message.vecGameResult[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_gameresult_not_v2_2_0 message, length delimited. Does not implicitly {@link mahjong_mj_gameresult_not_v2_2_0.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_gameresult_not_v2_2_0
     * @static
     * @param {Imahjong_mj_gameresult_not_v2_2_0} message mahjong_mj_gameresult_not_v2_2_0 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_gameresult_not_v2_2_0.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_gameresult_not_v2_2_0 message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_gameresult_not_v2_2_0
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_gameresult_not_v2_2_0} mahjong_mj_gameresult_not_v2_2_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_gameresult_not_v2_2_0.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_gameresult_not_v2_2_0();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.vecGameResult && message.vecGameResult.length))
                    message.vecGameResult = [];
                message.vecGameResult.push($root.mahjong_st_gameresult_v2_2_0.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_mj_gameresult_not_v2_2_0 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_gameresult_not_v2_2_0
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_gameresult_not_v2_2_0} mahjong_mj_gameresult_not_v2_2_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_gameresult_not_v2_2_0.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_gameresult_not_v2_2_0 message.
     * @function verify
     * @memberof mahjong_mj_gameresult_not_v2_2_0
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_gameresult_not_v2_2_0.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.vecGameResult != null && message.hasOwnProperty("vecGameResult")) {
            if (!Array.isArray(message.vecGameResult))
                return "vecGameResult: array expected";
            for (var i = 0; i < message.vecGameResult.length; ++i) {
                var error = $root.mahjong_st_gameresult_v2_2_0.verify(message.vecGameResult[i]);
                if (error)
                    return "vecGameResult." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_mj_gameresult_not_v2_2_0 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_gameresult_not_v2_2_0
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_gameresult_not_v2_2_0} mahjong_mj_gameresult_not_v2_2_0
     */
    mahjong_mj_gameresult_not_v2_2_0.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_gameresult_not_v2_2_0)
            return object;
        var message = new $root.mahjong_mj_gameresult_not_v2_2_0();
        if (object.vecGameResult) {
            if (!Array.isArray(object.vecGameResult))
                throw TypeError(".mahjong_mj_gameresult_not_v2_2_0.vecGameResult: array expected");
            message.vecGameResult = [];
            for (var i = 0; i < object.vecGameResult.length; ++i) {
                if (typeof object.vecGameResult[i] !== "object")
                    throw TypeError(".mahjong_mj_gameresult_not_v2_2_0.vecGameResult: object expected");
                message.vecGameResult[i] = $root.mahjong_st_gameresult_v2_2_0.fromObject(object.vecGameResult[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_gameresult_not_v2_2_0 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_gameresult_not_v2_2_0
     * @static
     * @param {mahjong_mj_gameresult_not_v2_2_0} message mahjong_mj_gameresult_not_v2_2_0
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_gameresult_not_v2_2_0.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecGameResult = [];
        if (message.vecGameResult && message.vecGameResult.length) {
            object.vecGameResult = [];
            for (var j = 0; j < message.vecGameResult.length; ++j)
                object.vecGameResult[j] = $root.mahjong_st_gameresult_v2_2_0.toObject(message.vecGameResult[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_mj_gameresult_not_v2_2_0 to JSON.
     * @function toJSON
     * @memberof mahjong_mj_gameresult_not_v2_2_0
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_gameresult_not_v2_2_0.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_gameresult_not_v2_2_0;
})();

$root.mahjong_mj_dingque_rsp = (function() {

    /**
     * Properties of a mahjong_mj_dingque_rsp.
     * @exports Imahjong_mj_dingque_rsp
     * @interface Imahjong_mj_dingque_rsp
     * @property {number} cCardType mahjong_mj_dingque_rsp cCardType
     * @property {number} sSerialID mahjong_mj_dingque_rsp sSerialID
     */

    /**
     * Constructs a new mahjong_mj_dingque_rsp.
     * @exports mahjong_mj_dingque_rsp
     * @classdesc Represents a mahjong_mj_dingque_rsp.
     * @implements Imahjong_mj_dingque_rsp
     * @constructor
     * @param {Imahjong_mj_dingque_rsp=} [properties] Properties to set
     */
    function mahjong_mj_dingque_rsp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_dingque_rsp cCardType.
     * @member {number} cCardType
     * @memberof mahjong_mj_dingque_rsp
     * @instance
     */
    mahjong_mj_dingque_rsp.prototype.cCardType = 0;

    /**
     * mahjong_mj_dingque_rsp sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_mj_dingque_rsp
     * @instance
     */
    mahjong_mj_dingque_rsp.prototype.sSerialID = 0;

    /**
     * Creates a new mahjong_mj_dingque_rsp instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_dingque_rsp
     * @static
     * @param {Imahjong_mj_dingque_rsp=} [properties] Properties to set
     * @returns {mahjong_mj_dingque_rsp} mahjong_mj_dingque_rsp instance
     */
    mahjong_mj_dingque_rsp.create = function create(properties) {
        return new mahjong_mj_dingque_rsp(properties);
    };

    /**
     * Encodes the specified mahjong_mj_dingque_rsp message. Does not implicitly {@link mahjong_mj_dingque_rsp.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_dingque_rsp
     * @static
     * @param {Imahjong_mj_dingque_rsp} message mahjong_mj_dingque_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_dingque_rsp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cCardType);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sSerialID);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_dingque_rsp message, length delimited. Does not implicitly {@link mahjong_mj_dingque_rsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_dingque_rsp
     * @static
     * @param {Imahjong_mj_dingque_rsp} message mahjong_mj_dingque_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_dingque_rsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_dingque_rsp message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_dingque_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_dingque_rsp} mahjong_mj_dingque_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_dingque_rsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_dingque_rsp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cCardType = reader.int32();
                break;
            case 2:
                message.sSerialID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cCardType"))
            throw $util.ProtocolError("missing required 'cCardType'", { instance: message });
        if (!message.hasOwnProperty("sSerialID"))
            throw $util.ProtocolError("missing required 'sSerialID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_dingque_rsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_dingque_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_dingque_rsp} mahjong_mj_dingque_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_dingque_rsp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_dingque_rsp message.
     * @function verify
     * @memberof mahjong_mj_dingque_rsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_dingque_rsp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cCardType))
            return "cCardType: integer expected";
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_dingque_rsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_dingque_rsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_dingque_rsp} mahjong_mj_dingque_rsp
     */
    mahjong_mj_dingque_rsp.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_dingque_rsp)
            return object;
        var message = new $root.mahjong_mj_dingque_rsp();
        if (object.cCardType != null)
            message.cCardType = object.cCardType | 0;
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_dingque_rsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_dingque_rsp
     * @static
     * @param {mahjong_mj_dingque_rsp} message mahjong_mj_dingque_rsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_dingque_rsp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cCardType = 0;
            object.sSerialID = 0;
        }
        if (message.cCardType != null && message.hasOwnProperty("cCardType"))
            object.cCardType = message.cCardType;
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        return object;
    };

    /**
     * Converts this mahjong_mj_dingque_rsp to JSON.
     * @function toJSON
     * @memberof mahjong_mj_dingque_rsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_dingque_rsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_dingque_rsp;
})();

$root.mahjong_mj_giveup_not = (function() {

    /**
     * Properties of a mahjong_mj_giveup_not.
     * @exports Imahjong_mj_giveup_not
     * @interface Imahjong_mj_giveup_not
     * @property {Array.<number>|null} [vecChairid] mahjong_mj_giveup_not vecChairid
     */

    /**
     * Constructs a new mahjong_mj_giveup_not.
     * @exports mahjong_mj_giveup_not
     * @classdesc Represents a mahjong_mj_giveup_not.
     * @implements Imahjong_mj_giveup_not
     * @constructor
     * @param {Imahjong_mj_giveup_not=} [properties] Properties to set
     */
    function mahjong_mj_giveup_not(properties) {
        this.vecChairid = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_giveup_not vecChairid.
     * @member {Array.<number>} vecChairid
     * @memberof mahjong_mj_giveup_not
     * @instance
     */
    mahjong_mj_giveup_not.prototype.vecChairid = $util.emptyArray;

    /**
     * Creates a new mahjong_mj_giveup_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_giveup_not
     * @static
     * @param {Imahjong_mj_giveup_not=} [properties] Properties to set
     * @returns {mahjong_mj_giveup_not} mahjong_mj_giveup_not instance
     */
    mahjong_mj_giveup_not.create = function create(properties) {
        return new mahjong_mj_giveup_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_giveup_not message. Does not implicitly {@link mahjong_mj_giveup_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_giveup_not
     * @static
     * @param {Imahjong_mj_giveup_not} message mahjong_mj_giveup_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_giveup_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vecChairid != null && message.vecChairid.length)
            for (var i = 0; i < message.vecChairid.length; ++i)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.vecChairid[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_giveup_not message, length delimited. Does not implicitly {@link mahjong_mj_giveup_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_giveup_not
     * @static
     * @param {Imahjong_mj_giveup_not} message mahjong_mj_giveup_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_giveup_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_giveup_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_giveup_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_giveup_not} mahjong_mj_giveup_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_giveup_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_giveup_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.vecChairid && message.vecChairid.length))
                    message.vecChairid = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecChairid.push(reader.int32());
                } else
                    message.vecChairid.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_mj_giveup_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_giveup_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_giveup_not} mahjong_mj_giveup_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_giveup_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_giveup_not message.
     * @function verify
     * @memberof mahjong_mj_giveup_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_giveup_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.vecChairid != null && message.hasOwnProperty("vecChairid")) {
            if (!Array.isArray(message.vecChairid))
                return "vecChairid: array expected";
            for (var i = 0; i < message.vecChairid.length; ++i)
                if (!$util.isInteger(message.vecChairid[i]))
                    return "vecChairid: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_mj_giveup_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_giveup_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_giveup_not} mahjong_mj_giveup_not
     */
    mahjong_mj_giveup_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_giveup_not)
            return object;
        var message = new $root.mahjong_mj_giveup_not();
        if (object.vecChairid) {
            if (!Array.isArray(object.vecChairid))
                throw TypeError(".mahjong_mj_giveup_not.vecChairid: array expected");
            message.vecChairid = [];
            for (var i = 0; i < object.vecChairid.length; ++i)
                message.vecChairid[i] = object.vecChairid[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_giveup_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_giveup_not
     * @static
     * @param {mahjong_mj_giveup_not} message mahjong_mj_giveup_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_giveup_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecChairid = [];
        if (message.vecChairid && message.vecChairid.length) {
            object.vecChairid = [];
            for (var j = 0; j < message.vecChairid.length; ++j)
                object.vecChairid[j] = message.vecChairid[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_mj_giveup_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_giveup_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_giveup_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_giveup_not;
})();

$root.mahjong_svr_taifei_not = (function() {

    /**
     * Properties of a mahjong_svr_taifei_not.
     * @exports Imahjong_svr_taifei_not
     * @interface Imahjong_svr_taifei_not
     * @property {number} nTaifei mahjong_svr_taifei_not nTaifei
     */

    /**
     * Constructs a new mahjong_svr_taifei_not.
     * @exports mahjong_svr_taifei_not
     * @classdesc Represents a mahjong_svr_taifei_not.
     * @implements Imahjong_svr_taifei_not
     * @constructor
     * @param {Imahjong_svr_taifei_not=} [properties] Properties to set
     */
    function mahjong_svr_taifei_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_svr_taifei_not nTaifei.
     * @member {number} nTaifei
     * @memberof mahjong_svr_taifei_not
     * @instance
     */
    mahjong_svr_taifei_not.prototype.nTaifei = 0;

    /**
     * Creates a new mahjong_svr_taifei_not instance using the specified properties.
     * @function create
     * @memberof mahjong_svr_taifei_not
     * @static
     * @param {Imahjong_svr_taifei_not=} [properties] Properties to set
     * @returns {mahjong_svr_taifei_not} mahjong_svr_taifei_not instance
     */
    mahjong_svr_taifei_not.create = function create(properties) {
        return new mahjong_svr_taifei_not(properties);
    };

    /**
     * Encodes the specified mahjong_svr_taifei_not message. Does not implicitly {@link mahjong_svr_taifei_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_svr_taifei_not
     * @static
     * @param {Imahjong_svr_taifei_not} message mahjong_svr_taifei_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_taifei_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nTaifei);
        return writer;
    };

    /**
     * Encodes the specified mahjong_svr_taifei_not message, length delimited. Does not implicitly {@link mahjong_svr_taifei_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_svr_taifei_not
     * @static
     * @param {Imahjong_svr_taifei_not} message mahjong_svr_taifei_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_taifei_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_svr_taifei_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_svr_taifei_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_svr_taifei_not} mahjong_svr_taifei_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_taifei_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_svr_taifei_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nTaifei = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nTaifei"))
            throw $util.ProtocolError("missing required 'nTaifei'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_svr_taifei_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_svr_taifei_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_svr_taifei_not} mahjong_svr_taifei_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_taifei_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_svr_taifei_not message.
     * @function verify
     * @memberof mahjong_svr_taifei_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_svr_taifei_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nTaifei))
            return "nTaifei: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_svr_taifei_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_svr_taifei_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_svr_taifei_not} mahjong_svr_taifei_not
     */
    mahjong_svr_taifei_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_svr_taifei_not)
            return object;
        var message = new $root.mahjong_svr_taifei_not();
        if (object.nTaifei != null)
            message.nTaifei = object.nTaifei | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_svr_taifei_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_svr_taifei_not
     * @static
     * @param {mahjong_svr_taifei_not} message mahjong_svr_taifei_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_svr_taifei_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.nTaifei = 0;
        if (message.nTaifei != null && message.hasOwnProperty("nTaifei"))
            object.nTaifei = message.nTaifei;
        return object;
    };

    /**
     * Converts this mahjong_svr_taifei_not to JSON.
     * @function toJSON
     * @memberof mahjong_svr_taifei_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_svr_taifei_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_svr_taifei_not;
})();

$root.mahjong_mj_playcard_ack = (function() {

    /**
     * Properties of a mahjong_mj_playcard_ack.
     * @exports Imahjong_mj_playcard_ack
     * @interface Imahjong_mj_playcard_ack
     * @property {number} nOpcode mahjong_mj_playcard_ack nOpcode
     * @property {number} cOpCard mahjong_mj_playcard_ack cOpCard
     * @property {number} sSerialID mahjong_mj_playcard_ack sSerialID
     */

    /**
     * Constructs a new mahjong_mj_playcard_ack.
     * @exports mahjong_mj_playcard_ack
     * @classdesc Represents a mahjong_mj_playcard_ack.
     * @implements Imahjong_mj_playcard_ack
     * @constructor
     * @param {Imahjong_mj_playcard_ack=} [properties] Properties to set
     */
    function mahjong_mj_playcard_ack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_playcard_ack nOpcode.
     * @member {number} nOpcode
     * @memberof mahjong_mj_playcard_ack
     * @instance
     */
    mahjong_mj_playcard_ack.prototype.nOpcode = 0;

    /**
     * mahjong_mj_playcard_ack cOpCard.
     * @member {number} cOpCard
     * @memberof mahjong_mj_playcard_ack
     * @instance
     */
    mahjong_mj_playcard_ack.prototype.cOpCard = 0;

    /**
     * mahjong_mj_playcard_ack sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_mj_playcard_ack
     * @instance
     */
    mahjong_mj_playcard_ack.prototype.sSerialID = 0;

    /**
     * Creates a new mahjong_mj_playcard_ack instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_playcard_ack
     * @static
     * @param {Imahjong_mj_playcard_ack=} [properties] Properties to set
     * @returns {mahjong_mj_playcard_ack} mahjong_mj_playcard_ack instance
     */
    mahjong_mj_playcard_ack.create = function create(properties) {
        return new mahjong_mj_playcard_ack(properties);
    };

    /**
     * Encodes the specified mahjong_mj_playcard_ack message. Does not implicitly {@link mahjong_mj_playcard_ack.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_playcard_ack
     * @static
     * @param {Imahjong_mj_playcard_ack} message mahjong_mj_playcard_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_playcard_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nOpcode);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cOpCard);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sSerialID);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_playcard_ack message, length delimited. Does not implicitly {@link mahjong_mj_playcard_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_playcard_ack
     * @static
     * @param {Imahjong_mj_playcard_ack} message mahjong_mj_playcard_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_playcard_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_playcard_ack message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_playcard_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_playcard_ack} mahjong_mj_playcard_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_playcard_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_playcard_ack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nOpcode = reader.int32();
                break;
            case 2:
                message.cOpCard = reader.int32();
                break;
            case 3:
                message.sSerialID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nOpcode"))
            throw $util.ProtocolError("missing required 'nOpcode'", { instance: message });
        if (!message.hasOwnProperty("cOpCard"))
            throw $util.ProtocolError("missing required 'cOpCard'", { instance: message });
        if (!message.hasOwnProperty("sSerialID"))
            throw $util.ProtocolError("missing required 'sSerialID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_playcard_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_playcard_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_playcard_ack} mahjong_mj_playcard_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_playcard_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_playcard_ack message.
     * @function verify
     * @memberof mahjong_mj_playcard_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_playcard_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nOpcode))
            return "nOpcode: integer expected";
        if (!$util.isInteger(message.cOpCard))
            return "cOpCard: integer expected";
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_playcard_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_playcard_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_playcard_ack} mahjong_mj_playcard_ack
     */
    mahjong_mj_playcard_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_playcard_ack)
            return object;
        var message = new $root.mahjong_mj_playcard_ack();
        if (object.nOpcode != null)
            message.nOpcode = object.nOpcode | 0;
        if (object.cOpCard != null)
            message.cOpCard = object.cOpCard | 0;
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_playcard_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_playcard_ack
     * @static
     * @param {mahjong_mj_playcard_ack} message mahjong_mj_playcard_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_playcard_ack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nOpcode = 0;
            object.cOpCard = 0;
            object.sSerialID = 0;
        }
        if (message.nOpcode != null && message.hasOwnProperty("nOpcode"))
            object.nOpcode = message.nOpcode;
        if (message.cOpCard != null && message.hasOwnProperty("cOpCard"))
            object.cOpCard = message.cOpCard;
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        return object;
    };

    /**
     * Converts this mahjong_mj_playcard_ack to JSON.
     * @function toJSON
     * @memberof mahjong_mj_playcard_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_playcard_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_playcard_ack;
})();

$root.mahjong_mj_need_charge_rsp = (function() {

    /**
     * Properties of a mahjong_mj_need_charge_rsp.
     * @exports Imahjong_mj_need_charge_rsp
     * @interface Imahjong_mj_need_charge_rsp
     * @property {number} cRet mahjong_mj_need_charge_rsp cRet
     * @property {number} sSerialID mahjong_mj_need_charge_rsp sSerialID
     */

    /**
     * Constructs a new mahjong_mj_need_charge_rsp.
     * @exports mahjong_mj_need_charge_rsp
     * @classdesc Represents a mahjong_mj_need_charge_rsp.
     * @implements Imahjong_mj_need_charge_rsp
     * @constructor
     * @param {Imahjong_mj_need_charge_rsp=} [properties] Properties to set
     */
    function mahjong_mj_need_charge_rsp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_need_charge_rsp cRet.
     * @member {number} cRet
     * @memberof mahjong_mj_need_charge_rsp
     * @instance
     */
    mahjong_mj_need_charge_rsp.prototype.cRet = 0;

    /**
     * mahjong_mj_need_charge_rsp sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_mj_need_charge_rsp
     * @instance
     */
    mahjong_mj_need_charge_rsp.prototype.sSerialID = 0;

    /**
     * Creates a new mahjong_mj_need_charge_rsp instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_need_charge_rsp
     * @static
     * @param {Imahjong_mj_need_charge_rsp=} [properties] Properties to set
     * @returns {mahjong_mj_need_charge_rsp} mahjong_mj_need_charge_rsp instance
     */
    mahjong_mj_need_charge_rsp.create = function create(properties) {
        return new mahjong_mj_need_charge_rsp(properties);
    };

    /**
     * Encodes the specified mahjong_mj_need_charge_rsp message. Does not implicitly {@link mahjong_mj_need_charge_rsp.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_need_charge_rsp
     * @static
     * @param {Imahjong_mj_need_charge_rsp} message mahjong_mj_need_charge_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_need_charge_rsp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cRet);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sSerialID);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_need_charge_rsp message, length delimited. Does not implicitly {@link mahjong_mj_need_charge_rsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_need_charge_rsp
     * @static
     * @param {Imahjong_mj_need_charge_rsp} message mahjong_mj_need_charge_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_need_charge_rsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_need_charge_rsp message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_need_charge_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_need_charge_rsp} mahjong_mj_need_charge_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_need_charge_rsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_need_charge_rsp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cRet = reader.int32();
                break;
            case 2:
                message.sSerialID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cRet"))
            throw $util.ProtocolError("missing required 'cRet'", { instance: message });
        if (!message.hasOwnProperty("sSerialID"))
            throw $util.ProtocolError("missing required 'sSerialID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_need_charge_rsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_need_charge_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_need_charge_rsp} mahjong_mj_need_charge_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_need_charge_rsp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_need_charge_rsp message.
     * @function verify
     * @memberof mahjong_mj_need_charge_rsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_need_charge_rsp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cRet))
            return "cRet: integer expected";
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_mj_need_charge_rsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_need_charge_rsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_need_charge_rsp} mahjong_mj_need_charge_rsp
     */
    mahjong_mj_need_charge_rsp.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_need_charge_rsp)
            return object;
        var message = new $root.mahjong_mj_need_charge_rsp();
        if (object.cRet != null)
            message.cRet = object.cRet | 0;
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_need_charge_rsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_need_charge_rsp
     * @static
     * @param {mahjong_mj_need_charge_rsp} message mahjong_mj_need_charge_rsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_need_charge_rsp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cRet = 0;
            object.sSerialID = 0;
        }
        if (message.cRet != null && message.hasOwnProperty("cRet"))
            object.cRet = message.cRet;
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        return object;
    };

    /**
     * Converts this mahjong_mj_need_charge_rsp to JSON.
     * @function toJSON
     * @memberof mahjong_mj_need_charge_rsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_need_charge_rsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_need_charge_rsp;
})();

$root.mahjong_svr_choose_ratio_not = (function() {

    /**
     * Properties of a mahjong_svr_choose_ratio_not.
     * @exports Imahjong_svr_choose_ratio_not
     * @interface Imahjong_svr_choose_ratio_not
     * @property {number} cChairID mahjong_svr_choose_ratio_not cChairID
     * @property {number} nRatio mahjong_svr_choose_ratio_not nRatio
     * @property {number} nCurRatio mahjong_svr_choose_ratio_not nCurRatio
     */

    /**
     * Constructs a new mahjong_svr_choose_ratio_not.
     * @exports mahjong_svr_choose_ratio_not
     * @classdesc Represents a mahjong_svr_choose_ratio_not.
     * @implements Imahjong_svr_choose_ratio_not
     * @constructor
     * @param {Imahjong_svr_choose_ratio_not=} [properties] Properties to set
     */
    function mahjong_svr_choose_ratio_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_svr_choose_ratio_not cChairID.
     * @member {number} cChairID
     * @memberof mahjong_svr_choose_ratio_not
     * @instance
     */
    mahjong_svr_choose_ratio_not.prototype.cChairID = 0;

    /**
     * mahjong_svr_choose_ratio_not nRatio.
     * @member {number} nRatio
     * @memberof mahjong_svr_choose_ratio_not
     * @instance
     */
    mahjong_svr_choose_ratio_not.prototype.nRatio = 0;

    /**
     * mahjong_svr_choose_ratio_not nCurRatio.
     * @member {number} nCurRatio
     * @memberof mahjong_svr_choose_ratio_not
     * @instance
     */
    mahjong_svr_choose_ratio_not.prototype.nCurRatio = 0;

    /**
     * Creates a new mahjong_svr_choose_ratio_not instance using the specified properties.
     * @function create
     * @memberof mahjong_svr_choose_ratio_not
     * @static
     * @param {Imahjong_svr_choose_ratio_not=} [properties] Properties to set
     * @returns {mahjong_svr_choose_ratio_not} mahjong_svr_choose_ratio_not instance
     */
    mahjong_svr_choose_ratio_not.create = function create(properties) {
        return new mahjong_svr_choose_ratio_not(properties);
    };

    /**
     * Encodes the specified mahjong_svr_choose_ratio_not message. Does not implicitly {@link mahjong_svr_choose_ratio_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_svr_choose_ratio_not
     * @static
     * @param {Imahjong_svr_choose_ratio_not} message mahjong_svr_choose_ratio_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_choose_ratio_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nRatio);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nCurRatio);
        return writer;
    };

    /**
     * Encodes the specified mahjong_svr_choose_ratio_not message, length delimited. Does not implicitly {@link mahjong_svr_choose_ratio_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_svr_choose_ratio_not
     * @static
     * @param {Imahjong_svr_choose_ratio_not} message mahjong_svr_choose_ratio_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_choose_ratio_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_svr_choose_ratio_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_svr_choose_ratio_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_svr_choose_ratio_not} mahjong_svr_choose_ratio_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_choose_ratio_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_svr_choose_ratio_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairID = reader.int32();
                break;
            case 2:
                message.nRatio = reader.int32();
                break;
            case 3:
                message.nCurRatio = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairID"))
            throw $util.ProtocolError("missing required 'cChairID'", { instance: message });
        if (!message.hasOwnProperty("nRatio"))
            throw $util.ProtocolError("missing required 'nRatio'", { instance: message });
        if (!message.hasOwnProperty("nCurRatio"))
            throw $util.ProtocolError("missing required 'nCurRatio'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_svr_choose_ratio_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_svr_choose_ratio_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_svr_choose_ratio_not} mahjong_svr_choose_ratio_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_choose_ratio_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_svr_choose_ratio_not message.
     * @function verify
     * @memberof mahjong_svr_choose_ratio_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_svr_choose_ratio_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
        if (!$util.isInteger(message.nRatio))
            return "nRatio: integer expected";
        if (!$util.isInteger(message.nCurRatio))
            return "nCurRatio: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_svr_choose_ratio_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_svr_choose_ratio_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_svr_choose_ratio_not} mahjong_svr_choose_ratio_not
     */
    mahjong_svr_choose_ratio_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_svr_choose_ratio_not)
            return object;
        var message = new $root.mahjong_svr_choose_ratio_not();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.nRatio != null)
            message.nRatio = object.nRatio | 0;
        if (object.nCurRatio != null)
            message.nCurRatio = object.nCurRatio | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_svr_choose_ratio_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_svr_choose_ratio_not
     * @static
     * @param {mahjong_svr_choose_ratio_not} message mahjong_svr_choose_ratio_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_svr_choose_ratio_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cChairID = 0;
            object.nRatio = 0;
            object.nCurRatio = 0;
        }
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.nRatio != null && message.hasOwnProperty("nRatio"))
            object.nRatio = message.nRatio;
        if (message.nCurRatio != null && message.hasOwnProperty("nCurRatio"))
            object.nCurRatio = message.nCurRatio;
        return object;
    };

    /**
     * Converts this mahjong_svr_choose_ratio_not to JSON.
     * @function toJSON
     * @memberof mahjong_svr_choose_ratio_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_svr_choose_ratio_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_svr_choose_ratio_not;
})();

$root.mahjong_svr_choose_ratio_req = (function() {

    /**
     * Properties of a mahjong_svr_choose_ratio_req.
     * @exports Imahjong_svr_choose_ratio_req
     * @interface Imahjong_svr_choose_ratio_req
     * @property {number} nMin mahjong_svr_choose_ratio_req nMin
     * @property {number} nPeriod mahjong_svr_choose_ratio_req nPeriod
     * @property {number} sSerialID mahjong_svr_choose_ratio_req sSerialID
     */

    /**
     * Constructs a new mahjong_svr_choose_ratio_req.
     * @exports mahjong_svr_choose_ratio_req
     * @classdesc Represents a mahjong_svr_choose_ratio_req.
     * @implements Imahjong_svr_choose_ratio_req
     * @constructor
     * @param {Imahjong_svr_choose_ratio_req=} [properties] Properties to set
     */
    function mahjong_svr_choose_ratio_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_svr_choose_ratio_req nMin.
     * @member {number} nMin
     * @memberof mahjong_svr_choose_ratio_req
     * @instance
     */
    mahjong_svr_choose_ratio_req.prototype.nMin = 0;

    /**
     * mahjong_svr_choose_ratio_req nPeriod.
     * @member {number} nPeriod
     * @memberof mahjong_svr_choose_ratio_req
     * @instance
     */
    mahjong_svr_choose_ratio_req.prototype.nPeriod = 0;

    /**
     * mahjong_svr_choose_ratio_req sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_svr_choose_ratio_req
     * @instance
     */
    mahjong_svr_choose_ratio_req.prototype.sSerialID = 0;

    /**
     * Creates a new mahjong_svr_choose_ratio_req instance using the specified properties.
     * @function create
     * @memberof mahjong_svr_choose_ratio_req
     * @static
     * @param {Imahjong_svr_choose_ratio_req=} [properties] Properties to set
     * @returns {mahjong_svr_choose_ratio_req} mahjong_svr_choose_ratio_req instance
     */
    mahjong_svr_choose_ratio_req.create = function create(properties) {
        return new mahjong_svr_choose_ratio_req(properties);
    };

    /**
     * Encodes the specified mahjong_svr_choose_ratio_req message. Does not implicitly {@link mahjong_svr_choose_ratio_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_svr_choose_ratio_req
     * @static
     * @param {Imahjong_svr_choose_ratio_req} message mahjong_svr_choose_ratio_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_choose_ratio_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nMin);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nPeriod);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sSerialID);
        return writer;
    };

    /**
     * Encodes the specified mahjong_svr_choose_ratio_req message, length delimited. Does not implicitly {@link mahjong_svr_choose_ratio_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_svr_choose_ratio_req
     * @static
     * @param {Imahjong_svr_choose_ratio_req} message mahjong_svr_choose_ratio_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_choose_ratio_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_svr_choose_ratio_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_svr_choose_ratio_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_svr_choose_ratio_req} mahjong_svr_choose_ratio_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_choose_ratio_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_svr_choose_ratio_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nMin = reader.int32();
                break;
            case 2:
                message.nPeriod = reader.int32();
                break;
            case 3:
                message.sSerialID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nMin"))
            throw $util.ProtocolError("missing required 'nMin'", { instance: message });
        if (!message.hasOwnProperty("nPeriod"))
            throw $util.ProtocolError("missing required 'nPeriod'", { instance: message });
        if (!message.hasOwnProperty("sSerialID"))
            throw $util.ProtocolError("missing required 'sSerialID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_svr_choose_ratio_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_svr_choose_ratio_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_svr_choose_ratio_req} mahjong_svr_choose_ratio_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_choose_ratio_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_svr_choose_ratio_req message.
     * @function verify
     * @memberof mahjong_svr_choose_ratio_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_svr_choose_ratio_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nMin))
            return "nMin: integer expected";
        if (!$util.isInteger(message.nPeriod))
            return "nPeriod: integer expected";
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_svr_choose_ratio_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_svr_choose_ratio_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_svr_choose_ratio_req} mahjong_svr_choose_ratio_req
     */
    mahjong_svr_choose_ratio_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_svr_choose_ratio_req)
            return object;
        var message = new $root.mahjong_svr_choose_ratio_req();
        if (object.nMin != null)
            message.nMin = object.nMin | 0;
        if (object.nPeriod != null)
            message.nPeriod = object.nPeriod | 0;
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_svr_choose_ratio_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_svr_choose_ratio_req
     * @static
     * @param {mahjong_svr_choose_ratio_req} message mahjong_svr_choose_ratio_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_svr_choose_ratio_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nMin = 0;
            object.nPeriod = 0;
            object.sSerialID = 0;
        }
        if (message.nMin != null && message.hasOwnProperty("nMin"))
            object.nMin = message.nMin;
        if (message.nPeriod != null && message.hasOwnProperty("nPeriod"))
            object.nPeriod = message.nPeriod;
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        return object;
    };

    /**
     * Converts this mahjong_svr_choose_ratio_req to JSON.
     * @function toJSON
     * @memberof mahjong_svr_choose_ratio_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_svr_choose_ratio_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_svr_choose_ratio_req;
})();

$root.mahjong_st_gameresult_v1_1_0 = (function() {

    /**
     * Properties of a mahjong_st_gameresult_v1_1_0.
     * @exports Imahjong_st_gameresult_v1_1_0
     * @interface Imahjong_st_gameresult_v1_1_0
     * @property {number} cChairID mahjong_st_gameresult_v1_1_0 cChairID
     * @property {number} cWonLose mahjong_st_gameresult_v1_1_0 cWonLose
     * @property {number} cResult mahjong_st_gameresult_v1_1_0 cResult
     * @property {number|Long} nScore mahjong_st_gameresult_v1_1_0 nScore
     * @property {number} nHuType mahjong_st_gameresult_v1_1_0 nHuType
     * @property {number} cMingGangNum mahjong_st_gameresult_v1_1_0 cMingGangNum
     * @property {number} cAnGangNum mahjong_st_gameresult_v1_1_0 cAnGangNum
     * @property {number} cBuGangNum mahjong_st_gameresult_v1_1_0 cBuGangNum
     * @property {number} cDianPaoChair mahjong_st_gameresult_v1_1_0 cDianPaoChair
     * @property {number} cChaJiao mahjong_st_gameresult_v1_1_0 cChaJiao
     * @property {number} bQiangGang mahjong_st_gameresult_v1_1_0 bQiangGang
     * @property {number} bGangHua mahjong_st_gameresult_v1_1_0 bGangHua
     * @property {number} bGangPao mahjong_st_gameresult_v1_1_0 bGangPao
     * @property {number} cGenNum mahjong_st_gameresult_v1_1_0 cGenNum
     * @property {number} nTax mahjong_st_gameresult_v1_1_0 nTax
     * @property {Array.<Imahjong_gang_data>|null} [vecGangData] mahjong_st_gameresult_v1_1_0 vecGangData
     * @property {Array.<Imahjong_fan_data>|null} [vecHu] mahjong_st_gameresult_v1_1_0 vecHu
     * @property {Array.<Imahjong_fan_data>|null} [vecHued] mahjong_st_gameresult_v1_1_0 vecHued
     * @property {Array.<Imahjong_fan_data>|null} [vecGangPao] mahjong_st_gameresult_v1_1_0 vecGangPao
     * @property {Array.<Imahjong_fan_data>|null} [vecChaJiao] mahjong_st_gameresult_v1_1_0 vecChaJiao
     * @property {Array.<Imahjong_fan_data>|null} [vecWuJiaoGang] mahjong_st_gameresult_v1_1_0 vecWuJiaoGang
     * @property {Array.<Imahjong_fan_data>|null} [vecHuaZhu] mahjong_st_gameresult_v1_1_0 vecHuaZhu
     */

    /**
     * Constructs a new mahjong_st_gameresult_v1_1_0.
     * @exports mahjong_st_gameresult_v1_1_0
     * @classdesc Represents a mahjong_st_gameresult_v1_1_0.
     * @implements Imahjong_st_gameresult_v1_1_0
     * @constructor
     * @param {Imahjong_st_gameresult_v1_1_0=} [properties] Properties to set
     */
    function mahjong_st_gameresult_v1_1_0(properties) {
        this.vecGangData = [];
        this.vecHu = [];
        this.vecHued = [];
        this.vecGangPao = [];
        this.vecChaJiao = [];
        this.vecWuJiaoGang = [];
        this.vecHuaZhu = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_st_gameresult_v1_1_0 cChairID.
     * @member {number} cChairID
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.cChairID = 0;

    /**
     * mahjong_st_gameresult_v1_1_0 cWonLose.
     * @member {number} cWonLose
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.cWonLose = 0;

    /**
     * mahjong_st_gameresult_v1_1_0 cResult.
     * @member {number} cResult
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.cResult = 0;

    /**
     * mahjong_st_gameresult_v1_1_0 nScore.
     * @member {number|Long} nScore
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.nScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * mahjong_st_gameresult_v1_1_0 nHuType.
     * @member {number} nHuType
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.nHuType = 0;

    /**
     * mahjong_st_gameresult_v1_1_0 cMingGangNum.
     * @member {number} cMingGangNum
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.cMingGangNum = 0;

    /**
     * mahjong_st_gameresult_v1_1_0 cAnGangNum.
     * @member {number} cAnGangNum
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.cAnGangNum = 0;

    /**
     * mahjong_st_gameresult_v1_1_0 cBuGangNum.
     * @member {number} cBuGangNum
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.cBuGangNum = 0;

    /**
     * mahjong_st_gameresult_v1_1_0 cDianPaoChair.
     * @member {number} cDianPaoChair
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.cDianPaoChair = 0;

    /**
     * mahjong_st_gameresult_v1_1_0 cChaJiao.
     * @member {number} cChaJiao
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.cChaJiao = 0;

    /**
     * mahjong_st_gameresult_v1_1_0 bQiangGang.
     * @member {number} bQiangGang
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.bQiangGang = 0;

    /**
     * mahjong_st_gameresult_v1_1_0 bGangHua.
     * @member {number} bGangHua
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.bGangHua = 0;

    /**
     * mahjong_st_gameresult_v1_1_0 bGangPao.
     * @member {number} bGangPao
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.bGangPao = 0;

    /**
     * mahjong_st_gameresult_v1_1_0 cGenNum.
     * @member {number} cGenNum
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.cGenNum = 0;

    /**
     * mahjong_st_gameresult_v1_1_0 nTax.
     * @member {number} nTax
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.nTax = 0;

    /**
     * mahjong_st_gameresult_v1_1_0 vecGangData.
     * @member {Array.<Imahjong_gang_data>} vecGangData
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.vecGangData = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v1_1_0 vecHu.
     * @member {Array.<Imahjong_fan_data>} vecHu
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.vecHu = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v1_1_0 vecHued.
     * @member {Array.<Imahjong_fan_data>} vecHued
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.vecHued = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v1_1_0 vecGangPao.
     * @member {Array.<Imahjong_fan_data>} vecGangPao
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.vecGangPao = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v1_1_0 vecChaJiao.
     * @member {Array.<Imahjong_fan_data>} vecChaJiao
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.vecChaJiao = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v1_1_0 vecWuJiaoGang.
     * @member {Array.<Imahjong_fan_data>} vecWuJiaoGang
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.vecWuJiaoGang = $util.emptyArray;

    /**
     * mahjong_st_gameresult_v1_1_0 vecHuaZhu.
     * @member {Array.<Imahjong_fan_data>} vecHuaZhu
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     */
    mahjong_st_gameresult_v1_1_0.prototype.vecHuaZhu = $util.emptyArray;

    /**
     * Creates a new mahjong_st_gameresult_v1_1_0 instance using the specified properties.
     * @function create
     * @memberof mahjong_st_gameresult_v1_1_0
     * @static
     * @param {Imahjong_st_gameresult_v1_1_0=} [properties] Properties to set
     * @returns {mahjong_st_gameresult_v1_1_0} mahjong_st_gameresult_v1_1_0 instance
     */
    mahjong_st_gameresult_v1_1_0.create = function create(properties) {
        return new mahjong_st_gameresult_v1_1_0(properties);
    };

    /**
     * Encodes the specified mahjong_st_gameresult_v1_1_0 message. Does not implicitly {@link mahjong_st_gameresult_v1_1_0.verify|verify} messages.
     * @function encode
     * @memberof mahjong_st_gameresult_v1_1_0
     * @static
     * @param {Imahjong_st_gameresult_v1_1_0} message mahjong_st_gameresult_v1_1_0 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_st_gameresult_v1_1_0.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cWonLose);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cResult);
        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.nScore);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nHuType);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cMingGangNum);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.cAnGangNum);
        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.cBuGangNum);
        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.cDianPaoChair);
        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.cChaJiao);
        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.bQiangGang);
        writer.uint32(/* id 12, wireType 0 =*/96).int32(message.bGangHua);
        writer.uint32(/* id 13, wireType 0 =*/104).int32(message.bGangPao);
        writer.uint32(/* id 14, wireType 0 =*/112).int32(message.cGenNum);
        writer.uint32(/* id 15, wireType 0 =*/120).int32(message.nTax);
        if (message.vecGangData != null && message.vecGangData.length)
            for (var i = 0; i < message.vecGangData.length; ++i)
                $root.mahjong_gang_data.encode(message.vecGangData[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.vecHu != null && message.vecHu.length)
            for (var i = 0; i < message.vecHu.length; ++i)
                $root.mahjong_fan_data.encode(message.vecHu[i], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.vecHued != null && message.vecHued.length)
            for (var i = 0; i < message.vecHued.length; ++i)
                $root.mahjong_fan_data.encode(message.vecHued[i], writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.vecGangPao != null && message.vecGangPao.length)
            for (var i = 0; i < message.vecGangPao.length; ++i)
                $root.mahjong_fan_data.encode(message.vecGangPao[i], writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
        if (message.vecChaJiao != null && message.vecChaJiao.length)
            for (var i = 0; i < message.vecChaJiao.length; ++i)
                $root.mahjong_fan_data.encode(message.vecChaJiao[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.vecWuJiaoGang != null && message.vecWuJiaoGang.length)
            for (var i = 0; i < message.vecWuJiaoGang.length; ++i)
                $root.mahjong_fan_data.encode(message.vecWuJiaoGang[i], writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.vecHuaZhu != null && message.vecHuaZhu.length)
            for (var i = 0; i < message.vecHuaZhu.length; ++i)
                $root.mahjong_fan_data.encode(message.vecHuaZhu[i], writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_st_gameresult_v1_1_0 message, length delimited. Does not implicitly {@link mahjong_st_gameresult_v1_1_0.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_st_gameresult_v1_1_0
     * @static
     * @param {Imahjong_st_gameresult_v1_1_0} message mahjong_st_gameresult_v1_1_0 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_st_gameresult_v1_1_0.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_st_gameresult_v1_1_0 message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_st_gameresult_v1_1_0
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_st_gameresult_v1_1_0} mahjong_st_gameresult_v1_1_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_st_gameresult_v1_1_0.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_st_gameresult_v1_1_0();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairID = reader.int32();
                break;
            case 2:
                message.cWonLose = reader.int32();
                break;
            case 3:
                message.cResult = reader.int32();
                break;
            case 4:
                message.nScore = reader.int64();
                break;
            case 5:
                message.nHuType = reader.int32();
                break;
            case 6:
                message.cMingGangNum = reader.int32();
                break;
            case 7:
                message.cAnGangNum = reader.int32();
                break;
            case 8:
                message.cBuGangNum = reader.int32();
                break;
            case 9:
                message.cDianPaoChair = reader.int32();
                break;
            case 10:
                message.cChaJiao = reader.int32();
                break;
            case 11:
                message.bQiangGang = reader.int32();
                break;
            case 12:
                message.bGangHua = reader.int32();
                break;
            case 13:
                message.bGangPao = reader.int32();
                break;
            case 14:
                message.cGenNum = reader.int32();
                break;
            case 15:
                message.nTax = reader.int32();
                break;
            case 16:
                if (!(message.vecGangData && message.vecGangData.length))
                    message.vecGangData = [];
                message.vecGangData.push($root.mahjong_gang_data.decode(reader, reader.uint32()));
                break;
            case 17:
                if (!(message.vecHu && message.vecHu.length))
                    message.vecHu = [];
                message.vecHu.push($root.mahjong_fan_data.decode(reader, reader.uint32()));
                break;
            case 18:
                if (!(message.vecHued && message.vecHued.length))
                    message.vecHued = [];
                message.vecHued.push($root.mahjong_fan_data.decode(reader, reader.uint32()));
                break;
            case 19:
                if (!(message.vecGangPao && message.vecGangPao.length))
                    message.vecGangPao = [];
                message.vecGangPao.push($root.mahjong_fan_data.decode(reader, reader.uint32()));
                break;
            case 20:
                if (!(message.vecChaJiao && message.vecChaJiao.length))
                    message.vecChaJiao = [];
                message.vecChaJiao.push($root.mahjong_fan_data.decode(reader, reader.uint32()));
                break;
            case 21:
                if (!(message.vecWuJiaoGang && message.vecWuJiaoGang.length))
                    message.vecWuJiaoGang = [];
                message.vecWuJiaoGang.push($root.mahjong_fan_data.decode(reader, reader.uint32()));
                break;
            case 22:
                if (!(message.vecHuaZhu && message.vecHuaZhu.length))
                    message.vecHuaZhu = [];
                message.vecHuaZhu.push($root.mahjong_fan_data.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairID"))
            throw $util.ProtocolError("missing required 'cChairID'", { instance: message });
        if (!message.hasOwnProperty("cWonLose"))
            throw $util.ProtocolError("missing required 'cWonLose'", { instance: message });
        if (!message.hasOwnProperty("cResult"))
            throw $util.ProtocolError("missing required 'cResult'", { instance: message });
        if (!message.hasOwnProperty("nScore"))
            throw $util.ProtocolError("missing required 'nScore'", { instance: message });
        if (!message.hasOwnProperty("nHuType"))
            throw $util.ProtocolError("missing required 'nHuType'", { instance: message });
        if (!message.hasOwnProperty("cMingGangNum"))
            throw $util.ProtocolError("missing required 'cMingGangNum'", { instance: message });
        if (!message.hasOwnProperty("cAnGangNum"))
            throw $util.ProtocolError("missing required 'cAnGangNum'", { instance: message });
        if (!message.hasOwnProperty("cBuGangNum"))
            throw $util.ProtocolError("missing required 'cBuGangNum'", { instance: message });
        if (!message.hasOwnProperty("cDianPaoChair"))
            throw $util.ProtocolError("missing required 'cDianPaoChair'", { instance: message });
        if (!message.hasOwnProperty("cChaJiao"))
            throw $util.ProtocolError("missing required 'cChaJiao'", { instance: message });
        if (!message.hasOwnProperty("bQiangGang"))
            throw $util.ProtocolError("missing required 'bQiangGang'", { instance: message });
        if (!message.hasOwnProperty("bGangHua"))
            throw $util.ProtocolError("missing required 'bGangHua'", { instance: message });
        if (!message.hasOwnProperty("bGangPao"))
            throw $util.ProtocolError("missing required 'bGangPao'", { instance: message });
        if (!message.hasOwnProperty("cGenNum"))
            throw $util.ProtocolError("missing required 'cGenNum'", { instance: message });
        if (!message.hasOwnProperty("nTax"))
            throw $util.ProtocolError("missing required 'nTax'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_st_gameresult_v1_1_0 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_st_gameresult_v1_1_0
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_st_gameresult_v1_1_0} mahjong_st_gameresult_v1_1_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_st_gameresult_v1_1_0.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_st_gameresult_v1_1_0 message.
     * @function verify
     * @memberof mahjong_st_gameresult_v1_1_0
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_st_gameresult_v1_1_0.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
        if (!$util.isInteger(message.cWonLose))
            return "cWonLose: integer expected";
        if (!$util.isInteger(message.cResult))
            return "cResult: integer expected";
        if (!$util.isInteger(message.nScore) && !(message.nScore && $util.isInteger(message.nScore.low) && $util.isInteger(message.nScore.high)))
            return "nScore: integer|Long expected";
        if (!$util.isInteger(message.nHuType))
            return "nHuType: integer expected";
        if (!$util.isInteger(message.cMingGangNum))
            return "cMingGangNum: integer expected";
        if (!$util.isInteger(message.cAnGangNum))
            return "cAnGangNum: integer expected";
        if (!$util.isInteger(message.cBuGangNum))
            return "cBuGangNum: integer expected";
        if (!$util.isInteger(message.cDianPaoChair))
            return "cDianPaoChair: integer expected";
        if (!$util.isInteger(message.cChaJiao))
            return "cChaJiao: integer expected";
        if (!$util.isInteger(message.bQiangGang))
            return "bQiangGang: integer expected";
        if (!$util.isInteger(message.bGangHua))
            return "bGangHua: integer expected";
        if (!$util.isInteger(message.bGangPao))
            return "bGangPao: integer expected";
        if (!$util.isInteger(message.cGenNum))
            return "cGenNum: integer expected";
        if (!$util.isInteger(message.nTax))
            return "nTax: integer expected";
        if (message.vecGangData != null && message.hasOwnProperty("vecGangData")) {
            if (!Array.isArray(message.vecGangData))
                return "vecGangData: array expected";
            for (var i = 0; i < message.vecGangData.length; ++i) {
                var error = $root.mahjong_gang_data.verify(message.vecGangData[i]);
                if (error)
                    return "vecGangData." + error;
            }
        }
        if (message.vecHu != null && message.hasOwnProperty("vecHu")) {
            if (!Array.isArray(message.vecHu))
                return "vecHu: array expected";
            for (var i = 0; i < message.vecHu.length; ++i) {
                var error = $root.mahjong_fan_data.verify(message.vecHu[i]);
                if (error)
                    return "vecHu." + error;
            }
        }
        if (message.vecHued != null && message.hasOwnProperty("vecHued")) {
            if (!Array.isArray(message.vecHued))
                return "vecHued: array expected";
            for (var i = 0; i < message.vecHued.length; ++i) {
                var error = $root.mahjong_fan_data.verify(message.vecHued[i]);
                if (error)
                    return "vecHued." + error;
            }
        }
        if (message.vecGangPao != null && message.hasOwnProperty("vecGangPao")) {
            if (!Array.isArray(message.vecGangPao))
                return "vecGangPao: array expected";
            for (var i = 0; i < message.vecGangPao.length; ++i) {
                var error = $root.mahjong_fan_data.verify(message.vecGangPao[i]);
                if (error)
                    return "vecGangPao." + error;
            }
        }
        if (message.vecChaJiao != null && message.hasOwnProperty("vecChaJiao")) {
            if (!Array.isArray(message.vecChaJiao))
                return "vecChaJiao: array expected";
            for (var i = 0; i < message.vecChaJiao.length; ++i) {
                var error = $root.mahjong_fan_data.verify(message.vecChaJiao[i]);
                if (error)
                    return "vecChaJiao." + error;
            }
        }
        if (message.vecWuJiaoGang != null && message.hasOwnProperty("vecWuJiaoGang")) {
            if (!Array.isArray(message.vecWuJiaoGang))
                return "vecWuJiaoGang: array expected";
            for (var i = 0; i < message.vecWuJiaoGang.length; ++i) {
                var error = $root.mahjong_fan_data.verify(message.vecWuJiaoGang[i]);
                if (error)
                    return "vecWuJiaoGang." + error;
            }
        }
        if (message.vecHuaZhu != null && message.hasOwnProperty("vecHuaZhu")) {
            if (!Array.isArray(message.vecHuaZhu))
                return "vecHuaZhu: array expected";
            for (var i = 0; i < message.vecHuaZhu.length; ++i) {
                var error = $root.mahjong_fan_data.verify(message.vecHuaZhu[i]);
                if (error)
                    return "vecHuaZhu." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_st_gameresult_v1_1_0 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_st_gameresult_v1_1_0
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_st_gameresult_v1_1_0} mahjong_st_gameresult_v1_1_0
     */
    mahjong_st_gameresult_v1_1_0.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_st_gameresult_v1_1_0)
            return object;
        var message = new $root.mahjong_st_gameresult_v1_1_0();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.cWonLose != null)
            message.cWonLose = object.cWonLose | 0;
        if (object.cResult != null)
            message.cResult = object.cResult | 0;
        if (object.nScore != null)
            if ($util.Long)
                (message.nScore = $util.Long.fromValue(object.nScore)).unsigned = false;
            else if (typeof object.nScore === "string")
                message.nScore = parseInt(object.nScore, 10);
            else if (typeof object.nScore === "number")
                message.nScore = object.nScore;
            else if (typeof object.nScore === "object")
                message.nScore = new $util.LongBits(object.nScore.low >>> 0, object.nScore.high >>> 0).toNumber();
        if (object.nHuType != null)
            message.nHuType = object.nHuType | 0;
        if (object.cMingGangNum != null)
            message.cMingGangNum = object.cMingGangNum | 0;
        if (object.cAnGangNum != null)
            message.cAnGangNum = object.cAnGangNum | 0;
        if (object.cBuGangNum != null)
            message.cBuGangNum = object.cBuGangNum | 0;
        if (object.cDianPaoChair != null)
            message.cDianPaoChair = object.cDianPaoChair | 0;
        if (object.cChaJiao != null)
            message.cChaJiao = object.cChaJiao | 0;
        if (object.bQiangGang != null)
            message.bQiangGang = object.bQiangGang | 0;
        if (object.bGangHua != null)
            message.bGangHua = object.bGangHua | 0;
        if (object.bGangPao != null)
            message.bGangPao = object.bGangPao | 0;
        if (object.cGenNum != null)
            message.cGenNum = object.cGenNum | 0;
        if (object.nTax != null)
            message.nTax = object.nTax | 0;
        if (object.vecGangData) {
            if (!Array.isArray(object.vecGangData))
                throw TypeError(".mahjong_st_gameresult_v1_1_0.vecGangData: array expected");
            message.vecGangData = [];
            for (var i = 0; i < object.vecGangData.length; ++i) {
                if (typeof object.vecGangData[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v1_1_0.vecGangData: object expected");
                message.vecGangData[i] = $root.mahjong_gang_data.fromObject(object.vecGangData[i]);
            }
        }
        if (object.vecHu) {
            if (!Array.isArray(object.vecHu))
                throw TypeError(".mahjong_st_gameresult_v1_1_0.vecHu: array expected");
            message.vecHu = [];
            for (var i = 0; i < object.vecHu.length; ++i) {
                if (typeof object.vecHu[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v1_1_0.vecHu: object expected");
                message.vecHu[i] = $root.mahjong_fan_data.fromObject(object.vecHu[i]);
            }
        }
        if (object.vecHued) {
            if (!Array.isArray(object.vecHued))
                throw TypeError(".mahjong_st_gameresult_v1_1_0.vecHued: array expected");
            message.vecHued = [];
            for (var i = 0; i < object.vecHued.length; ++i) {
                if (typeof object.vecHued[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v1_1_0.vecHued: object expected");
                message.vecHued[i] = $root.mahjong_fan_data.fromObject(object.vecHued[i]);
            }
        }
        if (object.vecGangPao) {
            if (!Array.isArray(object.vecGangPao))
                throw TypeError(".mahjong_st_gameresult_v1_1_0.vecGangPao: array expected");
            message.vecGangPao = [];
            for (var i = 0; i < object.vecGangPao.length; ++i) {
                if (typeof object.vecGangPao[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v1_1_0.vecGangPao: object expected");
                message.vecGangPao[i] = $root.mahjong_fan_data.fromObject(object.vecGangPao[i]);
            }
        }
        if (object.vecChaJiao) {
            if (!Array.isArray(object.vecChaJiao))
                throw TypeError(".mahjong_st_gameresult_v1_1_0.vecChaJiao: array expected");
            message.vecChaJiao = [];
            for (var i = 0; i < object.vecChaJiao.length; ++i) {
                if (typeof object.vecChaJiao[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v1_1_0.vecChaJiao: object expected");
                message.vecChaJiao[i] = $root.mahjong_fan_data.fromObject(object.vecChaJiao[i]);
            }
        }
        if (object.vecWuJiaoGang) {
            if (!Array.isArray(object.vecWuJiaoGang))
                throw TypeError(".mahjong_st_gameresult_v1_1_0.vecWuJiaoGang: array expected");
            message.vecWuJiaoGang = [];
            for (var i = 0; i < object.vecWuJiaoGang.length; ++i) {
                if (typeof object.vecWuJiaoGang[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v1_1_0.vecWuJiaoGang: object expected");
                message.vecWuJiaoGang[i] = $root.mahjong_fan_data.fromObject(object.vecWuJiaoGang[i]);
            }
        }
        if (object.vecHuaZhu) {
            if (!Array.isArray(object.vecHuaZhu))
                throw TypeError(".mahjong_st_gameresult_v1_1_0.vecHuaZhu: array expected");
            message.vecHuaZhu = [];
            for (var i = 0; i < object.vecHuaZhu.length; ++i) {
                if (typeof object.vecHuaZhu[i] !== "object")
                    throw TypeError(".mahjong_st_gameresult_v1_1_0.vecHuaZhu: object expected");
                message.vecHuaZhu[i] = $root.mahjong_fan_data.fromObject(object.vecHuaZhu[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_st_gameresult_v1_1_0 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_st_gameresult_v1_1_0
     * @static
     * @param {mahjong_st_gameresult_v1_1_0} message mahjong_st_gameresult_v1_1_0
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_st_gameresult_v1_1_0.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecGangData = [];
            object.vecHu = [];
            object.vecHued = [];
            object.vecGangPao = [];
            object.vecChaJiao = [];
            object.vecWuJiaoGang = [];
            object.vecHuaZhu = [];
        }
        if (options.defaults) {
            object.cChairID = 0;
            object.cWonLose = 0;
            object.cResult = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.nScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.nScore = options.longs === String ? "0" : 0;
            object.nHuType = 0;
            object.cMingGangNum = 0;
            object.cAnGangNum = 0;
            object.cBuGangNum = 0;
            object.cDianPaoChair = 0;
            object.cChaJiao = 0;
            object.bQiangGang = 0;
            object.bGangHua = 0;
            object.bGangPao = 0;
            object.cGenNum = 0;
            object.nTax = 0;
        }
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.cWonLose != null && message.hasOwnProperty("cWonLose"))
            object.cWonLose = message.cWonLose;
        if (message.cResult != null && message.hasOwnProperty("cResult"))
            object.cResult = message.cResult;
        if (message.nScore != null && message.hasOwnProperty("nScore"))
            if (typeof message.nScore === "number")
                object.nScore = options.longs === String ? String(message.nScore) : message.nScore;
            else
                object.nScore = options.longs === String ? $util.Long.prototype.toString.call(message.nScore) : options.longs === Number ? new $util.LongBits(message.nScore.low >>> 0, message.nScore.high >>> 0).toNumber() : message.nScore;
        if (message.nHuType != null && message.hasOwnProperty("nHuType"))
            object.nHuType = message.nHuType;
        if (message.cMingGangNum != null && message.hasOwnProperty("cMingGangNum"))
            object.cMingGangNum = message.cMingGangNum;
        if (message.cAnGangNum != null && message.hasOwnProperty("cAnGangNum"))
            object.cAnGangNum = message.cAnGangNum;
        if (message.cBuGangNum != null && message.hasOwnProperty("cBuGangNum"))
            object.cBuGangNum = message.cBuGangNum;
        if (message.cDianPaoChair != null && message.hasOwnProperty("cDianPaoChair"))
            object.cDianPaoChair = message.cDianPaoChair;
        if (message.cChaJiao != null && message.hasOwnProperty("cChaJiao"))
            object.cChaJiao = message.cChaJiao;
        if (message.bQiangGang != null && message.hasOwnProperty("bQiangGang"))
            object.bQiangGang = message.bQiangGang;
        if (message.bGangHua != null && message.hasOwnProperty("bGangHua"))
            object.bGangHua = message.bGangHua;
        if (message.bGangPao != null && message.hasOwnProperty("bGangPao"))
            object.bGangPao = message.bGangPao;
        if (message.cGenNum != null && message.hasOwnProperty("cGenNum"))
            object.cGenNum = message.cGenNum;
        if (message.nTax != null && message.hasOwnProperty("nTax"))
            object.nTax = message.nTax;
        if (message.vecGangData && message.vecGangData.length) {
            object.vecGangData = [];
            for (var j = 0; j < message.vecGangData.length; ++j)
                object.vecGangData[j] = $root.mahjong_gang_data.toObject(message.vecGangData[j], options);
        }
        if (message.vecHu && message.vecHu.length) {
            object.vecHu = [];
            for (var j = 0; j < message.vecHu.length; ++j)
                object.vecHu[j] = $root.mahjong_fan_data.toObject(message.vecHu[j], options);
        }
        if (message.vecHued && message.vecHued.length) {
            object.vecHued = [];
            for (var j = 0; j < message.vecHued.length; ++j)
                object.vecHued[j] = $root.mahjong_fan_data.toObject(message.vecHued[j], options);
        }
        if (message.vecGangPao && message.vecGangPao.length) {
            object.vecGangPao = [];
            for (var j = 0; j < message.vecGangPao.length; ++j)
                object.vecGangPao[j] = $root.mahjong_fan_data.toObject(message.vecGangPao[j], options);
        }
        if (message.vecChaJiao && message.vecChaJiao.length) {
            object.vecChaJiao = [];
            for (var j = 0; j < message.vecChaJiao.length; ++j)
                object.vecChaJiao[j] = $root.mahjong_fan_data.toObject(message.vecChaJiao[j], options);
        }
        if (message.vecWuJiaoGang && message.vecWuJiaoGang.length) {
            object.vecWuJiaoGang = [];
            for (var j = 0; j < message.vecWuJiaoGang.length; ++j)
                object.vecWuJiaoGang[j] = $root.mahjong_fan_data.toObject(message.vecWuJiaoGang[j], options);
        }
        if (message.vecHuaZhu && message.vecHuaZhu.length) {
            object.vecHuaZhu = [];
            for (var j = 0; j < message.vecHuaZhu.length; ++j)
                object.vecHuaZhu[j] = $root.mahjong_fan_data.toObject(message.vecHuaZhu[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_st_gameresult_v1_1_0 to JSON.
     * @function toJSON
     * @memberof mahjong_st_gameresult_v1_1_0
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_st_gameresult_v1_1_0.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_st_gameresult_v1_1_0;
})();

$root.mahjong_svr_portrait_rsp = (function() {

    /**
     * Properties of a mahjong_svr_portrait_rsp.
     * @exports Imahjong_svr_portrait_rsp
     * @interface Imahjong_svr_portrait_rsp
     * @property {Array.<number>|null} [chairId] mahjong_svr_portrait_rsp chairId
     * @property {Array.<number>|null} [portraitId] mahjong_svr_portrait_rsp portraitId
     */

    /**
     * Constructs a new mahjong_svr_portrait_rsp.
     * @exports mahjong_svr_portrait_rsp
     * @classdesc Represents a mahjong_svr_portrait_rsp.
     * @implements Imahjong_svr_portrait_rsp
     * @constructor
     * @param {Imahjong_svr_portrait_rsp=} [properties] Properties to set
     */
    function mahjong_svr_portrait_rsp(properties) {
        this.chairId = [];
        this.portraitId = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_svr_portrait_rsp chairId.
     * @member {Array.<number>} chairId
     * @memberof mahjong_svr_portrait_rsp
     * @instance
     */
    mahjong_svr_portrait_rsp.prototype.chairId = $util.emptyArray;

    /**
     * mahjong_svr_portrait_rsp portraitId.
     * @member {Array.<number>} portraitId
     * @memberof mahjong_svr_portrait_rsp
     * @instance
     */
    mahjong_svr_portrait_rsp.prototype.portraitId = $util.emptyArray;

    /**
     * Creates a new mahjong_svr_portrait_rsp instance using the specified properties.
     * @function create
     * @memberof mahjong_svr_portrait_rsp
     * @static
     * @param {Imahjong_svr_portrait_rsp=} [properties] Properties to set
     * @returns {mahjong_svr_portrait_rsp} mahjong_svr_portrait_rsp instance
     */
    mahjong_svr_portrait_rsp.create = function create(properties) {
        return new mahjong_svr_portrait_rsp(properties);
    };

    /**
     * Encodes the specified mahjong_svr_portrait_rsp message. Does not implicitly {@link mahjong_svr_portrait_rsp.verify|verify} messages.
     * @function encode
     * @memberof mahjong_svr_portrait_rsp
     * @static
     * @param {Imahjong_svr_portrait_rsp} message mahjong_svr_portrait_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_portrait_rsp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.chairId != null && message.chairId.length)
            for (var i = 0; i < message.chairId.length; ++i)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId[i]);
        if (message.portraitId != null && message.portraitId.length)
            for (var i = 0; i < message.portraitId.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.portraitId[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_svr_portrait_rsp message, length delimited. Does not implicitly {@link mahjong_svr_portrait_rsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_svr_portrait_rsp
     * @static
     * @param {Imahjong_svr_portrait_rsp} message mahjong_svr_portrait_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_svr_portrait_rsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_svr_portrait_rsp message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_svr_portrait_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_svr_portrait_rsp} mahjong_svr_portrait_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_portrait_rsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_svr_portrait_rsp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.chairId && message.chairId.length))
                    message.chairId = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.chairId.push(reader.int32());
                } else
                    message.chairId.push(reader.int32());
                break;
            case 2:
                if (!(message.portraitId && message.portraitId.length))
                    message.portraitId = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.portraitId.push(reader.int32());
                } else
                    message.portraitId.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_svr_portrait_rsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_svr_portrait_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_svr_portrait_rsp} mahjong_svr_portrait_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_svr_portrait_rsp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_svr_portrait_rsp message.
     * @function verify
     * @memberof mahjong_svr_portrait_rsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_svr_portrait_rsp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.chairId != null && message.hasOwnProperty("chairId")) {
            if (!Array.isArray(message.chairId))
                return "chairId: array expected";
            for (var i = 0; i < message.chairId.length; ++i)
                if (!$util.isInteger(message.chairId[i]))
                    return "chairId: integer[] expected";
        }
        if (message.portraitId != null && message.hasOwnProperty("portraitId")) {
            if (!Array.isArray(message.portraitId))
                return "portraitId: array expected";
            for (var i = 0; i < message.portraitId.length; ++i)
                if (!$util.isInteger(message.portraitId[i]))
                    return "portraitId: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_svr_portrait_rsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_svr_portrait_rsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_svr_portrait_rsp} mahjong_svr_portrait_rsp
     */
    mahjong_svr_portrait_rsp.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_svr_portrait_rsp)
            return object;
        var message = new $root.mahjong_svr_portrait_rsp();
        if (object.chairId) {
            if (!Array.isArray(object.chairId))
                throw TypeError(".mahjong_svr_portrait_rsp.chairId: array expected");
            message.chairId = [];
            for (var i = 0; i < object.chairId.length; ++i)
                message.chairId[i] = object.chairId[i] | 0;
        }
        if (object.portraitId) {
            if (!Array.isArray(object.portraitId))
                throw TypeError(".mahjong_svr_portrait_rsp.portraitId: array expected");
            message.portraitId = [];
            for (var i = 0; i < object.portraitId.length; ++i)
                message.portraitId[i] = object.portraitId[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_svr_portrait_rsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_svr_portrait_rsp
     * @static
     * @param {mahjong_svr_portrait_rsp} message mahjong_svr_portrait_rsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_svr_portrait_rsp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.chairId = [];
            object.portraitId = [];
        }
        if (message.chairId && message.chairId.length) {
            object.chairId = [];
            for (var j = 0; j < message.chairId.length; ++j)
                object.chairId[j] = message.chairId[j];
        }
        if (message.portraitId && message.portraitId.length) {
            object.portraitId = [];
            for (var j = 0; j < message.portraitId.length; ++j)
                object.portraitId[j] = message.portraitId[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_svr_portrait_rsp to JSON.
     * @function toJSON
     * @memberof mahjong_svr_portrait_rsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_svr_portrait_rsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_svr_portrait_rsp;
})();

$root.mahjong_mj_gameresult_not_v2_1_4 = (function() {

    /**
     * Properties of a mahjong_mj_gameresult_not_v2_1_4.
     * @exports Imahjong_mj_gameresult_not_v2_1_4
     * @interface Imahjong_mj_gameresult_not_v2_1_4
     * @property {Array.<Imahjong_st_gameresult_v2_1_4>|null} [vecGameResult] mahjong_mj_gameresult_not_v2_1_4 vecGameResult
     */

    /**
     * Constructs a new mahjong_mj_gameresult_not_v2_1_4.
     * @exports mahjong_mj_gameresult_not_v2_1_4
     * @classdesc Represents a mahjong_mj_gameresult_not_v2_1_4.
     * @implements Imahjong_mj_gameresult_not_v2_1_4
     * @constructor
     * @param {Imahjong_mj_gameresult_not_v2_1_4=} [properties] Properties to set
     */
    function mahjong_mj_gameresult_not_v2_1_4(properties) {
        this.vecGameResult = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_gameresult_not_v2_1_4 vecGameResult.
     * @member {Array.<Imahjong_st_gameresult_v2_1_4>} vecGameResult
     * @memberof mahjong_mj_gameresult_not_v2_1_4
     * @instance
     */
    mahjong_mj_gameresult_not_v2_1_4.prototype.vecGameResult = $util.emptyArray;

    /**
     * Creates a new mahjong_mj_gameresult_not_v2_1_4 instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_gameresult_not_v2_1_4
     * @static
     * @param {Imahjong_mj_gameresult_not_v2_1_4=} [properties] Properties to set
     * @returns {mahjong_mj_gameresult_not_v2_1_4} mahjong_mj_gameresult_not_v2_1_4 instance
     */
    mahjong_mj_gameresult_not_v2_1_4.create = function create(properties) {
        return new mahjong_mj_gameresult_not_v2_1_4(properties);
    };

    /**
     * Encodes the specified mahjong_mj_gameresult_not_v2_1_4 message. Does not implicitly {@link mahjong_mj_gameresult_not_v2_1_4.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_gameresult_not_v2_1_4
     * @static
     * @param {Imahjong_mj_gameresult_not_v2_1_4} message mahjong_mj_gameresult_not_v2_1_4 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_gameresult_not_v2_1_4.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vecGameResult != null && message.vecGameResult.length)
            for (var i = 0; i < message.vecGameResult.length; ++i)
                $root.mahjong_st_gameresult_v2_1_4.encode(message.vecGameResult[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_gameresult_not_v2_1_4 message, length delimited. Does not implicitly {@link mahjong_mj_gameresult_not_v2_1_4.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_gameresult_not_v2_1_4
     * @static
     * @param {Imahjong_mj_gameresult_not_v2_1_4} message mahjong_mj_gameresult_not_v2_1_4 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_gameresult_not_v2_1_4.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_gameresult_not_v2_1_4 message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_gameresult_not_v2_1_4
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_gameresult_not_v2_1_4} mahjong_mj_gameresult_not_v2_1_4
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_gameresult_not_v2_1_4.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_gameresult_not_v2_1_4();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.vecGameResult && message.vecGameResult.length))
                    message.vecGameResult = [];
                message.vecGameResult.push($root.mahjong_st_gameresult_v2_1_4.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_mj_gameresult_not_v2_1_4 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_gameresult_not_v2_1_4
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_gameresult_not_v2_1_4} mahjong_mj_gameresult_not_v2_1_4
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_gameresult_not_v2_1_4.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_gameresult_not_v2_1_4 message.
     * @function verify
     * @memberof mahjong_mj_gameresult_not_v2_1_4
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_gameresult_not_v2_1_4.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.vecGameResult != null && message.hasOwnProperty("vecGameResult")) {
            if (!Array.isArray(message.vecGameResult))
                return "vecGameResult: array expected";
            for (var i = 0; i < message.vecGameResult.length; ++i) {
                var error = $root.mahjong_st_gameresult_v2_1_4.verify(message.vecGameResult[i]);
                if (error)
                    return "vecGameResult." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_mj_gameresult_not_v2_1_4 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_gameresult_not_v2_1_4
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_gameresult_not_v2_1_4} mahjong_mj_gameresult_not_v2_1_4
     */
    mahjong_mj_gameresult_not_v2_1_4.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_gameresult_not_v2_1_4)
            return object;
        var message = new $root.mahjong_mj_gameresult_not_v2_1_4();
        if (object.vecGameResult) {
            if (!Array.isArray(object.vecGameResult))
                throw TypeError(".mahjong_mj_gameresult_not_v2_1_4.vecGameResult: array expected");
            message.vecGameResult = [];
            for (var i = 0; i < object.vecGameResult.length; ++i) {
                if (typeof object.vecGameResult[i] !== "object")
                    throw TypeError(".mahjong_mj_gameresult_not_v2_1_4.vecGameResult: object expected");
                message.vecGameResult[i] = $root.mahjong_st_gameresult_v2_1_4.fromObject(object.vecGameResult[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_gameresult_not_v2_1_4 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_gameresult_not_v2_1_4
     * @static
     * @param {mahjong_mj_gameresult_not_v2_1_4} message mahjong_mj_gameresult_not_v2_1_4
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_gameresult_not_v2_1_4.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecGameResult = [];
        if (message.vecGameResult && message.vecGameResult.length) {
            object.vecGameResult = [];
            for (var j = 0; j < message.vecGameResult.length; ++j)
                object.vecGameResult[j] = $root.mahjong_st_gameresult_v2_1_4.toObject(message.vecGameResult[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_mj_gameresult_not_v2_1_4 to JSON.
     * @function toJSON
     * @memberof mahjong_mj_gameresult_not_v2_1_4
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_gameresult_not_v2_1_4.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_gameresult_not_v2_1_4;
})();

$root.mahjong_mj_banker_dice_not = (function() {

    /**
     * Properties of a mahjong_mj_banker_dice_not.
     * @exports Imahjong_mj_banker_dice_not
     * @interface Imahjong_mj_banker_dice_not
     * @property {number} cBanker mahjong_mj_banker_dice_not cBanker
     * @property {Array.<number>|null} [vecDice] mahjong_mj_banker_dice_not vecDice
     */

    /**
     * Constructs a new mahjong_mj_banker_dice_not.
     * @exports mahjong_mj_banker_dice_not
     * @classdesc Represents a mahjong_mj_banker_dice_not.
     * @implements Imahjong_mj_banker_dice_not
     * @constructor
     * @param {Imahjong_mj_banker_dice_not=} [properties] Properties to set
     */
    function mahjong_mj_banker_dice_not(properties) {
        this.vecDice = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_banker_dice_not cBanker.
     * @member {number} cBanker
     * @memberof mahjong_mj_banker_dice_not
     * @instance
     */
    mahjong_mj_banker_dice_not.prototype.cBanker = 0;

    /**
     * mahjong_mj_banker_dice_not vecDice.
     * @member {Array.<number>} vecDice
     * @memberof mahjong_mj_banker_dice_not
     * @instance
     */
    mahjong_mj_banker_dice_not.prototype.vecDice = $util.emptyArray;

    /**
     * Creates a new mahjong_mj_banker_dice_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_banker_dice_not
     * @static
     * @param {Imahjong_mj_banker_dice_not=} [properties] Properties to set
     * @returns {mahjong_mj_banker_dice_not} mahjong_mj_banker_dice_not instance
     */
    mahjong_mj_banker_dice_not.create = function create(properties) {
        return new mahjong_mj_banker_dice_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_banker_dice_not message. Does not implicitly {@link mahjong_mj_banker_dice_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_banker_dice_not
     * @static
     * @param {Imahjong_mj_banker_dice_not} message mahjong_mj_banker_dice_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_banker_dice_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cBanker);
        if (message.vecDice != null && message.vecDice.length)
            for (var i = 0; i < message.vecDice.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.vecDice[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_banker_dice_not message, length delimited. Does not implicitly {@link mahjong_mj_banker_dice_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_banker_dice_not
     * @static
     * @param {Imahjong_mj_banker_dice_not} message mahjong_mj_banker_dice_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_banker_dice_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_banker_dice_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_banker_dice_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_banker_dice_not} mahjong_mj_banker_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_banker_dice_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_banker_dice_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cBanker = reader.int32();
                break;
            case 2:
                if (!(message.vecDice && message.vecDice.length))
                    message.vecDice = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecDice.push(reader.int32());
                } else
                    message.vecDice.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cBanker"))
            throw $util.ProtocolError("missing required 'cBanker'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_mj_banker_dice_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_banker_dice_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_banker_dice_not} mahjong_mj_banker_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_banker_dice_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_banker_dice_not message.
     * @function verify
     * @memberof mahjong_mj_banker_dice_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_banker_dice_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cBanker))
            return "cBanker: integer expected";
        if (message.vecDice != null && message.hasOwnProperty("vecDice")) {
            if (!Array.isArray(message.vecDice))
                return "vecDice: array expected";
            for (var i = 0; i < message.vecDice.length; ++i)
                if (!$util.isInteger(message.vecDice[i]))
                    return "vecDice: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_mj_banker_dice_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_banker_dice_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_banker_dice_not} mahjong_mj_banker_dice_not
     */
    mahjong_mj_banker_dice_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_banker_dice_not)
            return object;
        var message = new $root.mahjong_mj_banker_dice_not();
        if (object.cBanker != null)
            message.cBanker = object.cBanker | 0;
        if (object.vecDice) {
            if (!Array.isArray(object.vecDice))
                throw TypeError(".mahjong_mj_banker_dice_not.vecDice: array expected");
            message.vecDice = [];
            for (var i = 0; i < object.vecDice.length; ++i)
                message.vecDice[i] = object.vecDice[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_banker_dice_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_banker_dice_not
     * @static
     * @param {mahjong_mj_banker_dice_not} message mahjong_mj_banker_dice_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_banker_dice_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecDice = [];
        if (options.defaults)
            object.cBanker = 0;
        if (message.cBanker != null && message.hasOwnProperty("cBanker"))
            object.cBanker = message.cBanker;
        if (message.vecDice && message.vecDice.length) {
            object.vecDice = [];
            for (var j = 0; j < message.vecDice.length; ++j)
                object.vecDice[j] = message.vecDice[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_mj_banker_dice_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_banker_dice_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_banker_dice_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_banker_dice_not;
})();

$root.mahjong_gc_task_complete_not = (function() {

    /**
     * Properties of a mahjong_gc_task_complete_not.
     * @exports Imahjong_gc_task_complete_not
     * @interface Imahjong_gc_task_complete_not
     * @property {number} chairId mahjong_gc_task_complete_not chairId
     * @property {number} taskStatus mahjong_gc_task_complete_not taskStatus
     * @property {number} money mahjong_gc_task_complete_not money
     * @property {number} gift mahjong_gc_task_complete_not gift
     */

    /**
     * Constructs a new mahjong_gc_task_complete_not.
     * @exports mahjong_gc_task_complete_not
     * @classdesc Represents a mahjong_gc_task_complete_not.
     * @implements Imahjong_gc_task_complete_not
     * @constructor
     * @param {Imahjong_gc_task_complete_not=} [properties] Properties to set
     */
    function mahjong_gc_task_complete_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_gc_task_complete_not chairId.
     * @member {number} chairId
     * @memberof mahjong_gc_task_complete_not
     * @instance
     */
    mahjong_gc_task_complete_not.prototype.chairId = 0;

    /**
     * mahjong_gc_task_complete_not taskStatus.
     * @member {number} taskStatus
     * @memberof mahjong_gc_task_complete_not
     * @instance
     */
    mahjong_gc_task_complete_not.prototype.taskStatus = 0;

    /**
     * mahjong_gc_task_complete_not money.
     * @member {number} money
     * @memberof mahjong_gc_task_complete_not
     * @instance
     */
    mahjong_gc_task_complete_not.prototype.money = 0;

    /**
     * mahjong_gc_task_complete_not gift.
     * @member {number} gift
     * @memberof mahjong_gc_task_complete_not
     * @instance
     */
    mahjong_gc_task_complete_not.prototype.gift = 0;

    /**
     * Creates a new mahjong_gc_task_complete_not instance using the specified properties.
     * @function create
     * @memberof mahjong_gc_task_complete_not
     * @static
     * @param {Imahjong_gc_task_complete_not=} [properties] Properties to set
     * @returns {mahjong_gc_task_complete_not} mahjong_gc_task_complete_not instance
     */
    mahjong_gc_task_complete_not.create = function create(properties) {
        return new mahjong_gc_task_complete_not(properties);
    };

    /**
     * Encodes the specified mahjong_gc_task_complete_not message. Does not implicitly {@link mahjong_gc_task_complete_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_gc_task_complete_not
     * @static
     * @param {Imahjong_gc_task_complete_not} message mahjong_gc_task_complete_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_gc_task_complete_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.taskStatus);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.money);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.gift);
        return writer;
    };

    /**
     * Encodes the specified mahjong_gc_task_complete_not message, length delimited. Does not implicitly {@link mahjong_gc_task_complete_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_gc_task_complete_not
     * @static
     * @param {Imahjong_gc_task_complete_not} message mahjong_gc_task_complete_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_gc_task_complete_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_gc_task_complete_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_gc_task_complete_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_gc_task_complete_not} mahjong_gc_task_complete_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_gc_task_complete_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_gc_task_complete_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.chairId = reader.int32();
                break;
            case 2:
                message.taskStatus = reader.int32();
                break;
            case 3:
                message.money = reader.int32();
                break;
            case 4:
                message.gift = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("chairId"))
            throw $util.ProtocolError("missing required 'chairId'", { instance: message });
        if (!message.hasOwnProperty("taskStatus"))
            throw $util.ProtocolError("missing required 'taskStatus'", { instance: message });
        if (!message.hasOwnProperty("money"))
            throw $util.ProtocolError("missing required 'money'", { instance: message });
        if (!message.hasOwnProperty("gift"))
            throw $util.ProtocolError("missing required 'gift'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_gc_task_complete_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_gc_task_complete_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_gc_task_complete_not} mahjong_gc_task_complete_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_gc_task_complete_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_gc_task_complete_not message.
     * @function verify
     * @memberof mahjong_gc_task_complete_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_gc_task_complete_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.chairId))
            return "chairId: integer expected";
        if (!$util.isInteger(message.taskStatus))
            return "taskStatus: integer expected";
        if (!$util.isInteger(message.money))
            return "money: integer expected";
        if (!$util.isInteger(message.gift))
            return "gift: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_gc_task_complete_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_gc_task_complete_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_gc_task_complete_not} mahjong_gc_task_complete_not
     */
    mahjong_gc_task_complete_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_gc_task_complete_not)
            return object;
        var message = new $root.mahjong_gc_task_complete_not();
        if (object.chairId != null)
            message.chairId = object.chairId | 0;
        if (object.taskStatus != null)
            message.taskStatus = object.taskStatus | 0;
        if (object.money != null)
            message.money = object.money | 0;
        if (object.gift != null)
            message.gift = object.gift | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_gc_task_complete_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_gc_task_complete_not
     * @static
     * @param {mahjong_gc_task_complete_not} message mahjong_gc_task_complete_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_gc_task_complete_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.chairId = 0;
            object.taskStatus = 0;
            object.money = 0;
            object.gift = 0;
        }
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            object.chairId = message.chairId;
        if (message.taskStatus != null && message.hasOwnProperty("taskStatus"))
            object.taskStatus = message.taskStatus;
        if (message.money != null && message.hasOwnProperty("money"))
            object.money = message.money;
        if (message.gift != null && message.hasOwnProperty("gift"))
            object.gift = message.gift;
        return object;
    };

    /**
     * Converts this mahjong_gc_task_complete_not to JSON.
     * @function toJSON
     * @memberof mahjong_gc_task_complete_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_gc_task_complete_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_gc_task_complete_not;
})();

module.exports = $root;
