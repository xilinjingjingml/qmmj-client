/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

// var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.mahjong_ermj_completedata_not = (function() {

    /**
     * Properties of a mahjong_ermj_completedata_not.
     * @exports Imahjong_ermj_completedata_not
     * @interface Imahjong_ermj_completedata_not
     * @property {number} nDiZhu mahjong_ermj_completedata_not nDiZhu
     * @property {number} cBanker mahjong_ermj_completedata_not cBanker
     * @property {number} nAllScore mahjong_ermj_completedata_not nAllScore
     * @property {number} cWallEndChair mahjong_ermj_completedata_not cWallEndChair
     * @property {number} cWallEndPos mahjong_ermj_completedata_not cWallEndPos
     * @property {number} cWallCardNum mahjong_ermj_completedata_not cWallCardNum
     * @property {number} cGangTotalNum mahjong_ermj_completedata_not cGangTotalNum
     * @property {Array.<number>|null} [vecHuaNum] mahjong_ermj_completedata_not vecHuaNum
     * @property {number} cAutoState mahjong_ermj_completedata_not cAutoState
     * @property {number} cAutoType mahjong_ermj_completedata_not cAutoType
     * @property {number} nChuPai mahjong_ermj_completedata_not nChuPai
     * @property {number} nVisitorAmount mahjong_ermj_completedata_not nVisitorAmount
     * @property {number} sSerialID mahjong_ermj_completedata_not sSerialID
     * @property {Array.<Imahjong_ermj_changecard_not>|null} [vecPlyData] mahjong_ermj_completedata_not vecPlyData
     * @property {Array.<number>|null} [vecTingPly] mahjong_ermj_completedata_not vecTingPly
     */

    /**
     * Constructs a new mahjong_ermj_completedata_not.
     * @exports mahjong_ermj_completedata_not
     * @classdesc Represents a mahjong_ermj_completedata_not.
     * @implements Imahjong_ermj_completedata_not
     * @constructor
     * @param {Imahjong_ermj_completedata_not=} [properties] Properties to set
     */
    function mahjong_ermj_completedata_not(properties) {
        this.vecHuaNum = [];
        this.vecPlyData = [];
        this.vecTingPly = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_completedata_not nDiZhu.
     * @member {number} nDiZhu
     * @memberof mahjong_ermj_completedata_not
     * @instance
     */
    mahjong_ermj_completedata_not.prototype.nDiZhu = 0;

    /**
     * mahjong_ermj_completedata_not cBanker.
     * @member {number} cBanker
     * @memberof mahjong_ermj_completedata_not
     * @instance
     */
    mahjong_ermj_completedata_not.prototype.cBanker = 0;

    /**
     * mahjong_ermj_completedata_not nAllScore.
     * @member {number} nAllScore
     * @memberof mahjong_ermj_completedata_not
     * @instance
     */
    mahjong_ermj_completedata_not.prototype.nAllScore = 0;

    /**
     * mahjong_ermj_completedata_not cWallEndChair.
     * @member {number} cWallEndChair
     * @memberof mahjong_ermj_completedata_not
     * @instance
     */
    mahjong_ermj_completedata_not.prototype.cWallEndChair = 0;

    /**
     * mahjong_ermj_completedata_not cWallEndPos.
     * @member {number} cWallEndPos
     * @memberof mahjong_ermj_completedata_not
     * @instance
     */
    mahjong_ermj_completedata_not.prototype.cWallEndPos = 0;

    /**
     * mahjong_ermj_completedata_not cWallCardNum.
     * @member {number} cWallCardNum
     * @memberof mahjong_ermj_completedata_not
     * @instance
     */
    mahjong_ermj_completedata_not.prototype.cWallCardNum = 0;

    /**
     * mahjong_ermj_completedata_not cGangTotalNum.
     * @member {number} cGangTotalNum
     * @memberof mahjong_ermj_completedata_not
     * @instance
     */
    mahjong_ermj_completedata_not.prototype.cGangTotalNum = 0;

    /**
     * mahjong_ermj_completedata_not vecHuaNum.
     * @member {Array.<number>} vecHuaNum
     * @memberof mahjong_ermj_completedata_not
     * @instance
     */
    mahjong_ermj_completedata_not.prototype.vecHuaNum = $util.emptyArray;

    /**
     * mahjong_ermj_completedata_not cAutoState.
     * @member {number} cAutoState
     * @memberof mahjong_ermj_completedata_not
     * @instance
     */
    mahjong_ermj_completedata_not.prototype.cAutoState = 0;

    /**
     * mahjong_ermj_completedata_not cAutoType.
     * @member {number} cAutoType
     * @memberof mahjong_ermj_completedata_not
     * @instance
     */
    mahjong_ermj_completedata_not.prototype.cAutoType = 0;

    /**
     * mahjong_ermj_completedata_not nChuPai.
     * @member {number} nChuPai
     * @memberof mahjong_ermj_completedata_not
     * @instance
     */
    mahjong_ermj_completedata_not.prototype.nChuPai = 0;

    /**
     * mahjong_ermj_completedata_not nVisitorAmount.
     * @member {number} nVisitorAmount
     * @memberof mahjong_ermj_completedata_not
     * @instance
     */
    mahjong_ermj_completedata_not.prototype.nVisitorAmount = 0;

    /**
     * mahjong_ermj_completedata_not sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_ermj_completedata_not
     * @instance
     */
    mahjong_ermj_completedata_not.prototype.sSerialID = 0;

    /**
     * mahjong_ermj_completedata_not vecPlyData.
     * @member {Array.<Imahjong_ermj_changecard_not>} vecPlyData
     * @memberof mahjong_ermj_completedata_not
     * @instance
     */
    mahjong_ermj_completedata_not.prototype.vecPlyData = $util.emptyArray;

    /**
     * mahjong_ermj_completedata_not vecTingPly.
     * @member {Array.<number>} vecTingPly
     * @memberof mahjong_ermj_completedata_not
     * @instance
     */
    mahjong_ermj_completedata_not.prototype.vecTingPly = $util.emptyArray;

    /**
     * Creates a new mahjong_ermj_completedata_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_completedata_not
     * @static
     * @param {Imahjong_ermj_completedata_not=} [properties] Properties to set
     * @returns {mahjong_ermj_completedata_not} mahjong_ermj_completedata_not instance
     */
    mahjong_ermj_completedata_not.create = function create(properties) {
        return new mahjong_ermj_completedata_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_completedata_not message. Does not implicitly {@link mahjong_ermj_completedata_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_completedata_not
     * @static
     * @param {Imahjong_ermj_completedata_not} message mahjong_ermj_completedata_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_completedata_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nDiZhu);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cBanker);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nAllScore);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cWallEndChair);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cWallEndPos);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cWallCardNum);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.cGangTotalNum);
        if (message.vecHuaNum != null && message.vecHuaNum.length)
            for (var i = 0; i < message.vecHuaNum.length; ++i)
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.vecHuaNum[i]);
        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.cAutoState);
        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.cAutoType);
        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.nChuPai);
        writer.uint32(/* id 12, wireType 0 =*/96).int32(message.nVisitorAmount);
        writer.uint32(/* id 13, wireType 0 =*/104).int32(message.sSerialID);
        if (message.vecPlyData != null && message.vecPlyData.length)
            for (var i = 0; i < message.vecPlyData.length; ++i)
                $root.mahjong_ermj_changecard_not.encode(message.vecPlyData[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.vecTingPly != null && message.vecTingPly.length)
            for (var i = 0; i < message.vecTingPly.length; ++i)
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.vecTingPly[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_completedata_not message, length delimited. Does not implicitly {@link mahjong_ermj_completedata_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_completedata_not
     * @static
     * @param {Imahjong_ermj_completedata_not} message mahjong_ermj_completedata_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_completedata_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_completedata_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_completedata_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_completedata_not} mahjong_ermj_completedata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_completedata_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_completedata_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nDiZhu = reader.int32();
                break;
            case 2:
                message.cBanker = reader.int32();
                break;
            case 3:
                message.nAllScore = reader.int32();
                break;
            case 4:
                message.cWallEndChair = reader.int32();
                break;
            case 5:
                message.cWallEndPos = reader.int32();
                break;
            case 6:
                message.cWallCardNum = reader.int32();
                break;
            case 7:
                message.cGangTotalNum = reader.int32();
                break;
            case 8:
                if (!(message.vecHuaNum && message.vecHuaNum.length))
                    message.vecHuaNum = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecHuaNum.push(reader.int32());
                } else
                    message.vecHuaNum.push(reader.int32());
                break;
            case 9:
                message.cAutoState = reader.int32();
                break;
            case 10:
                message.cAutoType = reader.int32();
                break;
            case 11:
                message.nChuPai = reader.int32();
                break;
            case 12:
                message.nVisitorAmount = reader.int32();
                break;
            case 13:
                message.sSerialID = reader.int32();
                break;
            case 14:
                if (!(message.vecPlyData && message.vecPlyData.length))
                    message.vecPlyData = [];
                message.vecPlyData.push($root.mahjong_ermj_changecard_not.decode(reader, reader.uint32()));
                break;
            case 15:
                if (!(message.vecTingPly && message.vecTingPly.length))
                    message.vecTingPly = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecTingPly.push(reader.int32());
                } else
                    message.vecTingPly.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nDiZhu"))
            throw $util.ProtocolError("missing required 'nDiZhu'", { instance: message });
        if (!message.hasOwnProperty("cBanker"))
            throw $util.ProtocolError("missing required 'cBanker'", { instance: message });
        if (!message.hasOwnProperty("nAllScore"))
            throw $util.ProtocolError("missing required 'nAllScore'", { instance: message });
        if (!message.hasOwnProperty("cWallEndChair"))
            throw $util.ProtocolError("missing required 'cWallEndChair'", { instance: message });
        if (!message.hasOwnProperty("cWallEndPos"))
            throw $util.ProtocolError("missing required 'cWallEndPos'", { instance: message });
        if (!message.hasOwnProperty("cWallCardNum"))
            throw $util.ProtocolError("missing required 'cWallCardNum'", { instance: message });
        if (!message.hasOwnProperty("cGangTotalNum"))
            throw $util.ProtocolError("missing required 'cGangTotalNum'", { instance: message });
        if (!message.hasOwnProperty("cAutoState"))
            throw $util.ProtocolError("missing required 'cAutoState'", { instance: message });
        if (!message.hasOwnProperty("cAutoType"))
            throw $util.ProtocolError("missing required 'cAutoType'", { instance: message });
        if (!message.hasOwnProperty("nChuPai"))
            throw $util.ProtocolError("missing required 'nChuPai'", { instance: message });
        if (!message.hasOwnProperty("nVisitorAmount"))
            throw $util.ProtocolError("missing required 'nVisitorAmount'", { instance: message });
        if (!message.hasOwnProperty("sSerialID"))
            throw $util.ProtocolError("missing required 'sSerialID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_completedata_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_completedata_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_completedata_not} mahjong_ermj_completedata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_completedata_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_completedata_not message.
     * @function verify
     * @memberof mahjong_ermj_completedata_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_completedata_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nDiZhu))
            return "nDiZhu: integer expected";
        if (!$util.isInteger(message.cBanker))
            return "cBanker: integer expected";
        if (!$util.isInteger(message.nAllScore))
            return "nAllScore: integer expected";
        if (!$util.isInteger(message.cWallEndChair))
            return "cWallEndChair: integer expected";
        if (!$util.isInteger(message.cWallEndPos))
            return "cWallEndPos: integer expected";
        if (!$util.isInteger(message.cWallCardNum))
            return "cWallCardNum: integer expected";
        if (!$util.isInteger(message.cGangTotalNum))
            return "cGangTotalNum: integer expected";
        if (message.vecHuaNum != null && message.hasOwnProperty("vecHuaNum")) {
            if (!Array.isArray(message.vecHuaNum))
                return "vecHuaNum: array expected";
            for (var i = 0; i < message.vecHuaNum.length; ++i)
                if (!$util.isInteger(message.vecHuaNum[i]))
                    return "vecHuaNum: integer[] expected";
        }
        if (!$util.isInteger(message.cAutoState))
            return "cAutoState: integer expected";
        if (!$util.isInteger(message.cAutoType))
            return "cAutoType: integer expected";
        if (!$util.isInteger(message.nChuPai))
            return "nChuPai: integer expected";
        if (!$util.isInteger(message.nVisitorAmount))
            return "nVisitorAmount: integer expected";
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        if (message.vecPlyData != null && message.hasOwnProperty("vecPlyData")) {
            if (!Array.isArray(message.vecPlyData))
                return "vecPlyData: array expected";
            for (var i = 0; i < message.vecPlyData.length; ++i) {
                var error = $root.mahjong_ermj_changecard_not.verify(message.vecPlyData[i]);
                if (error)
                    return "vecPlyData." + error;
            }
        }
        if (message.vecTingPly != null && message.hasOwnProperty("vecTingPly")) {
            if (!Array.isArray(message.vecTingPly))
                return "vecTingPly: array expected";
            for (var i = 0; i < message.vecTingPly.length; ++i)
                if (!$util.isInteger(message.vecTingPly[i]))
                    return "vecTingPly: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_ermj_completedata_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_completedata_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_completedata_not} mahjong_ermj_completedata_not
     */
    mahjong_ermj_completedata_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_completedata_not)
            return object;
        var message = new $root.mahjong_ermj_completedata_not();
        if (object.nDiZhu != null)
            message.nDiZhu = object.nDiZhu | 0;
        if (object.cBanker != null)
            message.cBanker = object.cBanker | 0;
        if (object.nAllScore != null)
            message.nAllScore = object.nAllScore | 0;
        if (object.cWallEndChair != null)
            message.cWallEndChair = object.cWallEndChair | 0;
        if (object.cWallEndPos != null)
            message.cWallEndPos = object.cWallEndPos | 0;
        if (object.cWallCardNum != null)
            message.cWallCardNum = object.cWallCardNum | 0;
        if (object.cGangTotalNum != null)
            message.cGangTotalNum = object.cGangTotalNum | 0;
        if (object.vecHuaNum) {
            if (!Array.isArray(object.vecHuaNum))
                throw TypeError(".mahjong_ermj_completedata_not.vecHuaNum: array expected");
            message.vecHuaNum = [];
            for (var i = 0; i < object.vecHuaNum.length; ++i)
                message.vecHuaNum[i] = object.vecHuaNum[i] | 0;
        }
        if (object.cAutoState != null)
            message.cAutoState = object.cAutoState | 0;
        if (object.cAutoType != null)
            message.cAutoType = object.cAutoType | 0;
        if (object.nChuPai != null)
            message.nChuPai = object.nChuPai | 0;
        if (object.nVisitorAmount != null)
            message.nVisitorAmount = object.nVisitorAmount | 0;
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        if (object.vecPlyData) {
            if (!Array.isArray(object.vecPlyData))
                throw TypeError(".mahjong_ermj_completedata_not.vecPlyData: array expected");
            message.vecPlyData = [];
            for (var i = 0; i < object.vecPlyData.length; ++i) {
                if (typeof object.vecPlyData[i] !== "object")
                    throw TypeError(".mahjong_ermj_completedata_not.vecPlyData: object expected");
                message.vecPlyData[i] = $root.mahjong_ermj_changecard_not.fromObject(object.vecPlyData[i]);
            }
        }
        if (object.vecTingPly) {
            if (!Array.isArray(object.vecTingPly))
                throw TypeError(".mahjong_ermj_completedata_not.vecTingPly: array expected");
            message.vecTingPly = [];
            for (var i = 0; i < object.vecTingPly.length; ++i)
                message.vecTingPly[i] = object.vecTingPly[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_completedata_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_completedata_not
     * @static
     * @param {mahjong_ermj_completedata_not} message mahjong_ermj_completedata_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_completedata_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecHuaNum = [];
            object.vecPlyData = [];
            object.vecTingPly = [];
        }
        if (options.defaults) {
            object.nDiZhu = 0;
            object.cBanker = 0;
            object.nAllScore = 0;
            object.cWallEndChair = 0;
            object.cWallEndPos = 0;
            object.cWallCardNum = 0;
            object.cGangTotalNum = 0;
            object.cAutoState = 0;
            object.cAutoType = 0;
            object.nChuPai = 0;
            object.nVisitorAmount = 0;
            object.sSerialID = 0;
        }
        if (message.nDiZhu != null && message.hasOwnProperty("nDiZhu"))
            object.nDiZhu = message.nDiZhu;
        if (message.cBanker != null && message.hasOwnProperty("cBanker"))
            object.cBanker = message.cBanker;
        if (message.nAllScore != null && message.hasOwnProperty("nAllScore"))
            object.nAllScore = message.nAllScore;
        if (message.cWallEndChair != null && message.hasOwnProperty("cWallEndChair"))
            object.cWallEndChair = message.cWallEndChair;
        if (message.cWallEndPos != null && message.hasOwnProperty("cWallEndPos"))
            object.cWallEndPos = message.cWallEndPos;
        if (message.cWallCardNum != null && message.hasOwnProperty("cWallCardNum"))
            object.cWallCardNum = message.cWallCardNum;
        if (message.cGangTotalNum != null && message.hasOwnProperty("cGangTotalNum"))
            object.cGangTotalNum = message.cGangTotalNum;
        if (message.vecHuaNum && message.vecHuaNum.length) {
            object.vecHuaNum = [];
            for (var j = 0; j < message.vecHuaNum.length; ++j)
                object.vecHuaNum[j] = message.vecHuaNum[j];
        }
        if (message.cAutoState != null && message.hasOwnProperty("cAutoState"))
            object.cAutoState = message.cAutoState;
        if (message.cAutoType != null && message.hasOwnProperty("cAutoType"))
            object.cAutoType = message.cAutoType;
        if (message.nChuPai != null && message.hasOwnProperty("nChuPai"))
            object.nChuPai = message.nChuPai;
        if (message.nVisitorAmount != null && message.hasOwnProperty("nVisitorAmount"))
            object.nVisitorAmount = message.nVisitorAmount;
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        if (message.vecPlyData && message.vecPlyData.length) {
            object.vecPlyData = [];
            for (var j = 0; j < message.vecPlyData.length; ++j)
                object.vecPlyData[j] = $root.mahjong_ermj_changecard_not.toObject(message.vecPlyData[j], options);
        }
        if (message.vecTingPly && message.vecTingPly.length) {
            object.vecTingPly = [];
            for (var j = 0; j < message.vecTingPly.length; ++j)
                object.vecTingPly[j] = message.vecTingPly[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_ermj_completedata_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_completedata_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_completedata_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_completedata_not;
})();

$root.mahjong_ermj_taifei_not = (function() {

    /**
     * Properties of a mahjong_ermj_taifei_not.
     * @exports Imahjong_ermj_taifei_not
     * @interface Imahjong_ermj_taifei_not
     * @property {number} nChairId mahjong_ermj_taifei_not nChairId
     * @property {number} nValue mahjong_ermj_taifei_not nValue
     */

    /**
     * Constructs a new mahjong_ermj_taifei_not.
     * @exports mahjong_ermj_taifei_not
     * @classdesc Represents a mahjong_ermj_taifei_not.
     * @implements Imahjong_ermj_taifei_not
     * @constructor
     * @param {Imahjong_ermj_taifei_not=} [properties] Properties to set
     */
    function mahjong_ermj_taifei_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_taifei_not nChairId.
     * @member {number} nChairId
     * @memberof mahjong_ermj_taifei_not
     * @instance
     */
    mahjong_ermj_taifei_not.prototype.nChairId = 0;

    /**
     * mahjong_ermj_taifei_not nValue.
     * @member {number} nValue
     * @memberof mahjong_ermj_taifei_not
     * @instance
     */
    mahjong_ermj_taifei_not.prototype.nValue = 0;

    /**
     * Creates a new mahjong_ermj_taifei_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_taifei_not
     * @static
     * @param {Imahjong_ermj_taifei_not=} [properties] Properties to set
     * @returns {mahjong_ermj_taifei_not} mahjong_ermj_taifei_not instance
     */
    mahjong_ermj_taifei_not.create = function create(properties) {
        return new mahjong_ermj_taifei_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_taifei_not message. Does not implicitly {@link mahjong_ermj_taifei_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_taifei_not
     * @static
     * @param {Imahjong_ermj_taifei_not} message mahjong_ermj_taifei_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_taifei_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nValue);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_taifei_not message, length delimited. Does not implicitly {@link mahjong_ermj_taifei_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_taifei_not
     * @static
     * @param {Imahjong_ermj_taifei_not} message mahjong_ermj_taifei_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_taifei_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_taifei_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_taifei_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_taifei_not} mahjong_ermj_taifei_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_taifei_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_taifei_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nChairId = reader.int32();
                break;
            case 2:
                message.nValue = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nChairId"))
            throw $util.ProtocolError("missing required 'nChairId'", { instance: message });
        if (!message.hasOwnProperty("nValue"))
            throw $util.ProtocolError("missing required 'nValue'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_taifei_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_taifei_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_taifei_not} mahjong_ermj_taifei_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_taifei_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_taifei_not message.
     * @function verify
     * @memberof mahjong_ermj_taifei_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_taifei_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nChairId))
            return "nChairId: integer expected";
        if (!$util.isInteger(message.nValue))
            return "nValue: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_taifei_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_taifei_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_taifei_not} mahjong_ermj_taifei_not
     */
    mahjong_ermj_taifei_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_taifei_not)
            return object;
        var message = new $root.mahjong_ermj_taifei_not();
        if (object.nChairId != null)
            message.nChairId = object.nChairId | 0;
        if (object.nValue != null)
            message.nValue = object.nValue | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_taifei_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_taifei_not
     * @static
     * @param {mahjong_ermj_taifei_not} message mahjong_ermj_taifei_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_taifei_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nChairId = 0;
            object.nValue = 0;
        }
        if (message.nChairId != null && message.hasOwnProperty("nChairId"))
            object.nChairId = message.nChairId;
        if (message.nValue != null && message.hasOwnProperty("nValue"))
            object.nValue = message.nValue;
        return object;
    };

    /**
     * Converts this mahjong_ermj_taifei_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_taifei_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_taifei_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_taifei_not;
})();

$root.mahjong_ermj_hupai_ratio_not = (function() {

    /**
     * Properties of a mahjong_ermj_hupai_ratio_not.
     * @exports Imahjong_ermj_hupai_ratio_not
     * @interface Imahjong_ermj_hupai_ratio_not
     * @property {number} nChairId mahjong_ermj_hupai_ratio_not nChairId
     * @property {number} nValue mahjong_ermj_hupai_ratio_not nValue
     */

    /**
     * Constructs a new mahjong_ermj_hupai_ratio_not.
     * @exports mahjong_ermj_hupai_ratio_not
     * @classdesc Represents a mahjong_ermj_hupai_ratio_not.
     * @implements Imahjong_ermj_hupai_ratio_not
     * @constructor
     * @param {Imahjong_ermj_hupai_ratio_not=} [properties] Properties to set
     */
    function mahjong_ermj_hupai_ratio_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_hupai_ratio_not nChairId.
     * @member {number} nChairId
     * @memberof mahjong_ermj_hupai_ratio_not
     * @instance
     */
    mahjong_ermj_hupai_ratio_not.prototype.nChairId = 0;

    /**
     * mahjong_ermj_hupai_ratio_not nValue.
     * @member {number} nValue
     * @memberof mahjong_ermj_hupai_ratio_not
     * @instance
     */
    mahjong_ermj_hupai_ratio_not.prototype.nValue = 0;

    /**
     * Creates a new mahjong_ermj_hupai_ratio_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_hupai_ratio_not
     * @static
     * @param {Imahjong_ermj_hupai_ratio_not=} [properties] Properties to set
     * @returns {mahjong_ermj_hupai_ratio_not} mahjong_ermj_hupai_ratio_not instance
     */
    mahjong_ermj_hupai_ratio_not.create = function create(properties) {
        return new mahjong_ermj_hupai_ratio_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_hupai_ratio_not message. Does not implicitly {@link mahjong_ermj_hupai_ratio_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_hupai_ratio_not
     * @static
     * @param {Imahjong_ermj_hupai_ratio_not} message mahjong_ermj_hupai_ratio_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_hupai_ratio_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nValue);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_hupai_ratio_not message, length delimited. Does not implicitly {@link mahjong_ermj_hupai_ratio_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_hupai_ratio_not
     * @static
     * @param {Imahjong_ermj_hupai_ratio_not} message mahjong_ermj_hupai_ratio_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_hupai_ratio_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_hupai_ratio_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_hupai_ratio_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_hupai_ratio_not} mahjong_ermj_hupai_ratio_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_hupai_ratio_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_hupai_ratio_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nChairId = reader.int32();
                break;
            case 2:
                message.nValue = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nChairId"))
            throw $util.ProtocolError("missing required 'nChairId'", { instance: message });
        if (!message.hasOwnProperty("nValue"))
            throw $util.ProtocolError("missing required 'nValue'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_hupai_ratio_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_hupai_ratio_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_hupai_ratio_not} mahjong_ermj_hupai_ratio_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_hupai_ratio_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_hupai_ratio_not message.
     * @function verify
     * @memberof mahjong_ermj_hupai_ratio_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_hupai_ratio_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nChairId))
            return "nChairId: integer expected";
        if (!$util.isInteger(message.nValue))
            return "nValue: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_hupai_ratio_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_hupai_ratio_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_hupai_ratio_not} mahjong_ermj_hupai_ratio_not
     */
    mahjong_ermj_hupai_ratio_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_hupai_ratio_not)
            return object;
        var message = new $root.mahjong_ermj_hupai_ratio_not();
        if (object.nChairId != null)
            message.nChairId = object.nChairId | 0;
        if (object.nValue != null)
            message.nValue = object.nValue | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_hupai_ratio_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_hupai_ratio_not
     * @static
     * @param {mahjong_ermj_hupai_ratio_not} message mahjong_ermj_hupai_ratio_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_hupai_ratio_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nChairId = 0;
            object.nValue = 0;
        }
        if (message.nChairId != null && message.hasOwnProperty("nChairId"))
            object.nChairId = message.nChairId;
        if (message.nValue != null && message.hasOwnProperty("nValue"))
            object.nValue = message.nValue;
        return object;
    };

    /**
     * Converts this mahjong_ermj_hupai_ratio_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_hupai_ratio_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_hupai_ratio_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_hupai_ratio_not;
})();

$root.mahjong_ermj_task_change_req = (function() {

    /**
     * Properties of a mahjong_ermj_task_change_req.
     * @exports Imahjong_ermj_task_change_req
     * @interface Imahjong_ermj_task_change_req
     * @property {number} nChairId mahjong_ermj_task_change_req nChairId
     */

    /**
     * Constructs a new mahjong_ermj_task_change_req.
     * @exports mahjong_ermj_task_change_req
     * @classdesc Represents a mahjong_ermj_task_change_req.
     * @implements Imahjong_ermj_task_change_req
     * @constructor
     * @param {Imahjong_ermj_task_change_req=} [properties] Properties to set
     */
    function mahjong_ermj_task_change_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_task_change_req nChairId.
     * @member {number} nChairId
     * @memberof mahjong_ermj_task_change_req
     * @instance
     */
    mahjong_ermj_task_change_req.prototype.nChairId = 0;

    /**
     * Creates a new mahjong_ermj_task_change_req instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_task_change_req
     * @static
     * @param {Imahjong_ermj_task_change_req=} [properties] Properties to set
     * @returns {mahjong_ermj_task_change_req} mahjong_ermj_task_change_req instance
     */
    mahjong_ermj_task_change_req.create = function create(properties) {
        return new mahjong_ermj_task_change_req(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_task_change_req message. Does not implicitly {@link mahjong_ermj_task_change_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_task_change_req
     * @static
     * @param {Imahjong_ermj_task_change_req} message mahjong_ermj_task_change_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_task_change_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nChairId);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_task_change_req message, length delimited. Does not implicitly {@link mahjong_ermj_task_change_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_task_change_req
     * @static
     * @param {Imahjong_ermj_task_change_req} message mahjong_ermj_task_change_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_task_change_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_task_change_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_task_change_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_task_change_req} mahjong_ermj_task_change_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_task_change_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_task_change_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nChairId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nChairId"))
            throw $util.ProtocolError("missing required 'nChairId'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_task_change_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_task_change_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_task_change_req} mahjong_ermj_task_change_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_task_change_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_task_change_req message.
     * @function verify
     * @memberof mahjong_ermj_task_change_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_task_change_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nChairId))
            return "nChairId: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_task_change_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_task_change_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_task_change_req} mahjong_ermj_task_change_req
     */
    mahjong_ermj_task_change_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_task_change_req)
            return object;
        var message = new $root.mahjong_ermj_task_change_req();
        if (object.nChairId != null)
            message.nChairId = object.nChairId | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_task_change_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_task_change_req
     * @static
     * @param {mahjong_ermj_task_change_req} message mahjong_ermj_task_change_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_task_change_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.nChairId = 0;
        if (message.nChairId != null && message.hasOwnProperty("nChairId"))
            object.nChairId = message.nChairId;
        return object;
    };

    /**
     * Converts this mahjong_ermj_task_change_req to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_task_change_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_task_change_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_task_change_req;
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

$root.mahjong_ermj_hudouble_req_new = (function() {

    /**
     * Properties of a mahjong_ermj_hudouble_req_new.
     * @exports Imahjong_ermj_hudouble_req_new
     * @interface Imahjong_ermj_hudouble_req_new
     * @property {number} cChairId mahjong_ermj_hudouble_req_new cChairId
     * @property {number} nFan mahjong_ermj_hudouble_req_new nFan
     * @property {number} nScore mahjong_ermj_hudouble_req_new nScore
     */

    /**
     * Constructs a new mahjong_ermj_hudouble_req_new.
     * @exports mahjong_ermj_hudouble_req_new
     * @classdesc Represents a mahjong_ermj_hudouble_req_new.
     * @implements Imahjong_ermj_hudouble_req_new
     * @constructor
     * @param {Imahjong_ermj_hudouble_req_new=} [properties] Properties to set
     */
    function mahjong_ermj_hudouble_req_new(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_hudouble_req_new cChairId.
     * @member {number} cChairId
     * @memberof mahjong_ermj_hudouble_req_new
     * @instance
     */
    mahjong_ermj_hudouble_req_new.prototype.cChairId = 0;

    /**
     * mahjong_ermj_hudouble_req_new nFan.
     * @member {number} nFan
     * @memberof mahjong_ermj_hudouble_req_new
     * @instance
     */
    mahjong_ermj_hudouble_req_new.prototype.nFan = 0;

    /**
     * mahjong_ermj_hudouble_req_new nScore.
     * @member {number} nScore
     * @memberof mahjong_ermj_hudouble_req_new
     * @instance
     */
    mahjong_ermj_hudouble_req_new.prototype.nScore = 0;

    /**
     * Creates a new mahjong_ermj_hudouble_req_new instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_hudouble_req_new
     * @static
     * @param {Imahjong_ermj_hudouble_req_new=} [properties] Properties to set
     * @returns {mahjong_ermj_hudouble_req_new} mahjong_ermj_hudouble_req_new instance
     */
    mahjong_ermj_hudouble_req_new.create = function create(properties) {
        return new mahjong_ermj_hudouble_req_new(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_hudouble_req_new message. Does not implicitly {@link mahjong_ermj_hudouble_req_new.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_hudouble_req_new
     * @static
     * @param {Imahjong_ermj_hudouble_req_new} message mahjong_ermj_hudouble_req_new message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_hudouble_req_new.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nFan);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nScore);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_hudouble_req_new message, length delimited. Does not implicitly {@link mahjong_ermj_hudouble_req_new.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_hudouble_req_new
     * @static
     * @param {Imahjong_ermj_hudouble_req_new} message mahjong_ermj_hudouble_req_new message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_hudouble_req_new.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_hudouble_req_new message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_hudouble_req_new
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_hudouble_req_new} mahjong_ermj_hudouble_req_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_hudouble_req_new.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_hudouble_req_new();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairId = reader.int32();
                break;
            case 2:
                message.nFan = reader.int32();
                break;
            case 3:
                message.nScore = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairId"))
            throw $util.ProtocolError("missing required 'cChairId'", { instance: message });
        if (!message.hasOwnProperty("nFan"))
            throw $util.ProtocolError("missing required 'nFan'", { instance: message });
        if (!message.hasOwnProperty("nScore"))
            throw $util.ProtocolError("missing required 'nScore'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_hudouble_req_new message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_hudouble_req_new
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_hudouble_req_new} mahjong_ermj_hudouble_req_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_hudouble_req_new.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_hudouble_req_new message.
     * @function verify
     * @memberof mahjong_ermj_hudouble_req_new
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_hudouble_req_new.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairId))
            return "cChairId: integer expected";
        if (!$util.isInteger(message.nFan))
            return "nFan: integer expected";
        if (!$util.isInteger(message.nScore))
            return "nScore: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_hudouble_req_new message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_hudouble_req_new
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_hudouble_req_new} mahjong_ermj_hudouble_req_new
     */
    mahjong_ermj_hudouble_req_new.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_hudouble_req_new)
            return object;
        var message = new $root.mahjong_ermj_hudouble_req_new();
        if (object.cChairId != null)
            message.cChairId = object.cChairId | 0;
        if (object.nFan != null)
            message.nFan = object.nFan | 0;
        if (object.nScore != null)
            message.nScore = object.nScore | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_hudouble_req_new message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_hudouble_req_new
     * @static
     * @param {mahjong_ermj_hudouble_req_new} message mahjong_ermj_hudouble_req_new
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_hudouble_req_new.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cChairId = 0;
            object.nFan = 0;
            object.nScore = 0;
        }
        if (message.cChairId != null && message.hasOwnProperty("cChairId"))
            object.cChairId = message.cChairId;
        if (message.nFan != null && message.hasOwnProperty("nFan"))
            object.nFan = message.nFan;
        if (message.nScore != null && message.hasOwnProperty("nScore"))
            object.nScore = message.nScore;
        return object;
    };

    /**
     * Converts this mahjong_ermj_hudouble_req_new to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_hudouble_req_new
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_hudouble_req_new.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_hudouble_req_new;
})();

$root.mahjong_ermj_tingfan_not = (function() {

    /**
     * Properties of a mahjong_ermj_tingfan_not.
     * @exports Imahjong_ermj_tingfan_not
     * @interface Imahjong_ermj_tingfan_not
     * @property {number} sSerialID mahjong_ermj_tingfan_not sSerialID
     * @property {Array.<Imahjong_tingfan_data>|null} [vecTingFan] mahjong_ermj_tingfan_not vecTingFan
     */

    /**
     * Constructs a new mahjong_ermj_tingfan_not.
     * @exports mahjong_ermj_tingfan_not
     * @classdesc Represents a mahjong_ermj_tingfan_not.
     * @implements Imahjong_ermj_tingfan_not
     * @constructor
     * @param {Imahjong_ermj_tingfan_not=} [properties] Properties to set
     */
    function mahjong_ermj_tingfan_not(properties) {
        this.vecTingFan = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_tingfan_not sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_ermj_tingfan_not
     * @instance
     */
    mahjong_ermj_tingfan_not.prototype.sSerialID = 0;

    /**
     * mahjong_ermj_tingfan_not vecTingFan.
     * @member {Array.<Imahjong_tingfan_data>} vecTingFan
     * @memberof mahjong_ermj_tingfan_not
     * @instance
     */
    mahjong_ermj_tingfan_not.prototype.vecTingFan = $util.emptyArray;

    /**
     * Creates a new mahjong_ermj_tingfan_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_tingfan_not
     * @static
     * @param {Imahjong_ermj_tingfan_not=} [properties] Properties to set
     * @returns {mahjong_ermj_tingfan_not} mahjong_ermj_tingfan_not instance
     */
    mahjong_ermj_tingfan_not.create = function create(properties) {
        return new mahjong_ermj_tingfan_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_tingfan_not message. Does not implicitly {@link mahjong_ermj_tingfan_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_tingfan_not
     * @static
     * @param {Imahjong_ermj_tingfan_not} message mahjong_ermj_tingfan_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_tingfan_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sSerialID);
        if (message.vecTingFan != null && message.vecTingFan.length)
            for (var i = 0; i < message.vecTingFan.length; ++i)
                $root.mahjong_tingfan_data.encode(message.vecTingFan[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_tingfan_not message, length delimited. Does not implicitly {@link mahjong_ermj_tingfan_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_tingfan_not
     * @static
     * @param {Imahjong_ermj_tingfan_not} message mahjong_ermj_tingfan_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_tingfan_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_tingfan_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_tingfan_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_tingfan_not} mahjong_ermj_tingfan_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_tingfan_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_tingfan_not();
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
     * Decodes a mahjong_ermj_tingfan_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_tingfan_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_tingfan_not} mahjong_ermj_tingfan_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_tingfan_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_tingfan_not message.
     * @function verify
     * @memberof mahjong_ermj_tingfan_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_tingfan_not.verify = function verify(message) {
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
     * Creates a mahjong_ermj_tingfan_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_tingfan_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_tingfan_not} mahjong_ermj_tingfan_not
     */
    mahjong_ermj_tingfan_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_tingfan_not)
            return object;
        var message = new $root.mahjong_ermj_tingfan_not();
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        if (object.vecTingFan) {
            if (!Array.isArray(object.vecTingFan))
                throw TypeError(".mahjong_ermj_tingfan_not.vecTingFan: array expected");
            message.vecTingFan = [];
            for (var i = 0; i < object.vecTingFan.length; ++i) {
                if (typeof object.vecTingFan[i] !== "object")
                    throw TypeError(".mahjong_ermj_tingfan_not.vecTingFan: object expected");
                message.vecTingFan[i] = $root.mahjong_tingfan_data.fromObject(object.vecTingFan[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_tingfan_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_tingfan_not
     * @static
     * @param {mahjong_ermj_tingfan_not} message mahjong_ermj_tingfan_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_tingfan_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_ermj_tingfan_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_tingfan_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_tingfan_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_tingfan_not;
})();

$root.mahjong_ermj_hudouble_ack = (function() {

    /**
     * Properties of a mahjong_ermj_hudouble_ack.
     * @exports Imahjong_ermj_hudouble_ack
     * @interface Imahjong_ermj_hudouble_ack
     * @property {number} cDoubleStyle mahjong_ermj_hudouble_ack cDoubleStyle
     */

    /**
     * Constructs a new mahjong_ermj_hudouble_ack.
     * @exports mahjong_ermj_hudouble_ack
     * @classdesc Represents a mahjong_ermj_hudouble_ack.
     * @implements Imahjong_ermj_hudouble_ack
     * @constructor
     * @param {Imahjong_ermj_hudouble_ack=} [properties] Properties to set
     */
    function mahjong_ermj_hudouble_ack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_hudouble_ack cDoubleStyle.
     * @member {number} cDoubleStyle
     * @memberof mahjong_ermj_hudouble_ack
     * @instance
     */
    mahjong_ermj_hudouble_ack.prototype.cDoubleStyle = 0;

    /**
     * Creates a new mahjong_ermj_hudouble_ack instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_hudouble_ack
     * @static
     * @param {Imahjong_ermj_hudouble_ack=} [properties] Properties to set
     * @returns {mahjong_ermj_hudouble_ack} mahjong_ermj_hudouble_ack instance
     */
    mahjong_ermj_hudouble_ack.create = function create(properties) {
        return new mahjong_ermj_hudouble_ack(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_hudouble_ack message. Does not implicitly {@link mahjong_ermj_hudouble_ack.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_hudouble_ack
     * @static
     * @param {Imahjong_ermj_hudouble_ack} message mahjong_ermj_hudouble_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_hudouble_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cDoubleStyle);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_hudouble_ack message, length delimited. Does not implicitly {@link mahjong_ermj_hudouble_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_hudouble_ack
     * @static
     * @param {Imahjong_ermj_hudouble_ack} message mahjong_ermj_hudouble_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_hudouble_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_hudouble_ack message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_hudouble_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_hudouble_ack} mahjong_ermj_hudouble_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_hudouble_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_hudouble_ack();
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
     * Decodes a mahjong_ermj_hudouble_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_hudouble_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_hudouble_ack} mahjong_ermj_hudouble_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_hudouble_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_hudouble_ack message.
     * @function verify
     * @memberof mahjong_ermj_hudouble_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_hudouble_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cDoubleStyle))
            return "cDoubleStyle: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_hudouble_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_hudouble_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_hudouble_ack} mahjong_ermj_hudouble_ack
     */
    mahjong_ermj_hudouble_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_hudouble_ack)
            return object;
        var message = new $root.mahjong_ermj_hudouble_ack();
        if (object.cDoubleStyle != null)
            message.cDoubleStyle = object.cDoubleStyle | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_hudouble_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_hudouble_ack
     * @static
     * @param {mahjong_ermj_hudouble_ack} message mahjong_ermj_hudouble_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_hudouble_ack.toObject = function toObject(message, options) {
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
     * Converts this mahjong_ermj_hudouble_ack to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_hudouble_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_hudouble_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_hudouble_ack;
})();

$root.mahjong_ermj_gc_task_complete_not = (function() {

    /**
     * Properties of a mahjong_ermj_gc_task_complete_not.
     * @exports Imahjong_ermj_gc_task_complete_not
     * @interface Imahjong_ermj_gc_task_complete_not
     * @property {number} chairId mahjong_ermj_gc_task_complete_not chairId
     * @property {number} taskStatus mahjong_ermj_gc_task_complete_not taskStatus
     * @property {number} money mahjong_ermj_gc_task_complete_not money
     * @property {number} gift mahjong_ermj_gc_task_complete_not gift
     */

    /**
     * Constructs a new mahjong_ermj_gc_task_complete_not.
     * @exports mahjong_ermj_gc_task_complete_not
     * @classdesc Represents a mahjong_ermj_gc_task_complete_not.
     * @implements Imahjong_ermj_gc_task_complete_not
     * @constructor
     * @param {Imahjong_ermj_gc_task_complete_not=} [properties] Properties to set
     */
    function mahjong_ermj_gc_task_complete_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_gc_task_complete_not chairId.
     * @member {number} chairId
     * @memberof mahjong_ermj_gc_task_complete_not
     * @instance
     */
    mahjong_ermj_gc_task_complete_not.prototype.chairId = 0;

    /**
     * mahjong_ermj_gc_task_complete_not taskStatus.
     * @member {number} taskStatus
     * @memberof mahjong_ermj_gc_task_complete_not
     * @instance
     */
    mahjong_ermj_gc_task_complete_not.prototype.taskStatus = 0;

    /**
     * mahjong_ermj_gc_task_complete_not money.
     * @member {number} money
     * @memberof mahjong_ermj_gc_task_complete_not
     * @instance
     */
    mahjong_ermj_gc_task_complete_not.prototype.money = 0;

    /**
     * mahjong_ermj_gc_task_complete_not gift.
     * @member {number} gift
     * @memberof mahjong_ermj_gc_task_complete_not
     * @instance
     */
    mahjong_ermj_gc_task_complete_not.prototype.gift = 0;

    /**
     * Creates a new mahjong_ermj_gc_task_complete_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_gc_task_complete_not
     * @static
     * @param {Imahjong_ermj_gc_task_complete_not=} [properties] Properties to set
     * @returns {mahjong_ermj_gc_task_complete_not} mahjong_ermj_gc_task_complete_not instance
     */
    mahjong_ermj_gc_task_complete_not.create = function create(properties) {
        return new mahjong_ermj_gc_task_complete_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_gc_task_complete_not message. Does not implicitly {@link mahjong_ermj_gc_task_complete_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_gc_task_complete_not
     * @static
     * @param {Imahjong_ermj_gc_task_complete_not} message mahjong_ermj_gc_task_complete_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_gc_task_complete_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.taskStatus);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.money);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.gift);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_gc_task_complete_not message, length delimited. Does not implicitly {@link mahjong_ermj_gc_task_complete_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_gc_task_complete_not
     * @static
     * @param {Imahjong_ermj_gc_task_complete_not} message mahjong_ermj_gc_task_complete_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_gc_task_complete_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_gc_task_complete_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_gc_task_complete_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_gc_task_complete_not} mahjong_ermj_gc_task_complete_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_gc_task_complete_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_gc_task_complete_not();
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
     * Decodes a mahjong_ermj_gc_task_complete_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_gc_task_complete_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_gc_task_complete_not} mahjong_ermj_gc_task_complete_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_gc_task_complete_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_gc_task_complete_not message.
     * @function verify
     * @memberof mahjong_ermj_gc_task_complete_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_gc_task_complete_not.verify = function verify(message) {
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
     * Creates a mahjong_ermj_gc_task_complete_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_gc_task_complete_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_gc_task_complete_not} mahjong_ermj_gc_task_complete_not
     */
    mahjong_ermj_gc_task_complete_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_gc_task_complete_not)
            return object;
        var message = new $root.mahjong_ermj_gc_task_complete_not();
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
     * Creates a plain object from a mahjong_ermj_gc_task_complete_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_gc_task_complete_not
     * @static
     * @param {mahjong_ermj_gc_task_complete_not} message mahjong_ermj_gc_task_complete_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_gc_task_complete_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_ermj_gc_task_complete_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_gc_task_complete_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_gc_task_complete_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_gc_task_complete_not;
})();

$root.mahjong_ermj_hudouble_not = (function() {

    /**
     * Properties of a mahjong_ermj_hudouble_not.
     * @exports Imahjong_ermj_hudouble_not
     * @interface Imahjong_ermj_hudouble_not
     * @property {number} cChairID mahjong_ermj_hudouble_not cChairID
     * @property {number} sDoubleNum mahjong_ermj_hudouble_not sDoubleNum
     */

    /**
     * Constructs a new mahjong_ermj_hudouble_not.
     * @exports mahjong_ermj_hudouble_not
     * @classdesc Represents a mahjong_ermj_hudouble_not.
     * @implements Imahjong_ermj_hudouble_not
     * @constructor
     * @param {Imahjong_ermj_hudouble_not=} [properties] Properties to set
     */
    function mahjong_ermj_hudouble_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_hudouble_not cChairID.
     * @member {number} cChairID
     * @memberof mahjong_ermj_hudouble_not
     * @instance
     */
    mahjong_ermj_hudouble_not.prototype.cChairID = 0;

    /**
     * mahjong_ermj_hudouble_not sDoubleNum.
     * @member {number} sDoubleNum
     * @memberof mahjong_ermj_hudouble_not
     * @instance
     */
    mahjong_ermj_hudouble_not.prototype.sDoubleNum = 0;

    /**
     * Creates a new mahjong_ermj_hudouble_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_hudouble_not
     * @static
     * @param {Imahjong_ermj_hudouble_not=} [properties] Properties to set
     * @returns {mahjong_ermj_hudouble_not} mahjong_ermj_hudouble_not instance
     */
    mahjong_ermj_hudouble_not.create = function create(properties) {
        return new mahjong_ermj_hudouble_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_hudouble_not message. Does not implicitly {@link mahjong_ermj_hudouble_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_hudouble_not
     * @static
     * @param {Imahjong_ermj_hudouble_not} message mahjong_ermj_hudouble_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_hudouble_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sDoubleNum);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_hudouble_not message, length delimited. Does not implicitly {@link mahjong_ermj_hudouble_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_hudouble_not
     * @static
     * @param {Imahjong_ermj_hudouble_not} message mahjong_ermj_hudouble_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_hudouble_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_hudouble_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_hudouble_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_hudouble_not} mahjong_ermj_hudouble_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_hudouble_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_hudouble_not();
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
     * Decodes a mahjong_ermj_hudouble_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_hudouble_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_hudouble_not} mahjong_ermj_hudouble_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_hudouble_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_hudouble_not message.
     * @function verify
     * @memberof mahjong_ermj_hudouble_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_hudouble_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
        if (!$util.isInteger(message.sDoubleNum))
            return "sDoubleNum: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_hudouble_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_hudouble_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_hudouble_not} mahjong_ermj_hudouble_not
     */
    mahjong_ermj_hudouble_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_hudouble_not)
            return object;
        var message = new $root.mahjong_ermj_hudouble_not();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.sDoubleNum != null)
            message.sDoubleNum = object.sDoubleNum | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_hudouble_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_hudouble_not
     * @static
     * @param {mahjong_ermj_hudouble_not} message mahjong_ermj_hudouble_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_hudouble_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_ermj_hudouble_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_hudouble_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_hudouble_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_hudouble_not;
})();

$root.mahjong_ermj_visi_compdata_req = (function() {

    /**
     * Properties of a mahjong_ermj_visi_compdata_req.
     * @exports Imahjong_ermj_visi_compdata_req
     * @interface Imahjong_ermj_visi_compdata_req
     */

    /**
     * Constructs a new mahjong_ermj_visi_compdata_req.
     * @exports mahjong_ermj_visi_compdata_req
     * @classdesc Represents a mahjong_ermj_visi_compdata_req.
     * @implements Imahjong_ermj_visi_compdata_req
     * @constructor
     * @param {Imahjong_ermj_visi_compdata_req=} [properties] Properties to set
     */
    function mahjong_ermj_visi_compdata_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_ermj_visi_compdata_req instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_visi_compdata_req
     * @static
     * @param {Imahjong_ermj_visi_compdata_req=} [properties] Properties to set
     * @returns {mahjong_ermj_visi_compdata_req} mahjong_ermj_visi_compdata_req instance
     */
    mahjong_ermj_visi_compdata_req.create = function create(properties) {
        return new mahjong_ermj_visi_compdata_req(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_visi_compdata_req message. Does not implicitly {@link mahjong_ermj_visi_compdata_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_visi_compdata_req
     * @static
     * @param {Imahjong_ermj_visi_compdata_req} message mahjong_ermj_visi_compdata_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_visi_compdata_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_visi_compdata_req message, length delimited. Does not implicitly {@link mahjong_ermj_visi_compdata_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_visi_compdata_req
     * @static
     * @param {Imahjong_ermj_visi_compdata_req} message mahjong_ermj_visi_compdata_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_visi_compdata_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_visi_compdata_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_visi_compdata_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_visi_compdata_req} mahjong_ermj_visi_compdata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_visi_compdata_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_visi_compdata_req();
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
     * Decodes a mahjong_ermj_visi_compdata_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_visi_compdata_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_visi_compdata_req} mahjong_ermj_visi_compdata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_visi_compdata_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_visi_compdata_req message.
     * @function verify
     * @memberof mahjong_ermj_visi_compdata_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_visi_compdata_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_visi_compdata_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_visi_compdata_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_visi_compdata_req} mahjong_ermj_visi_compdata_req
     */
    mahjong_ermj_visi_compdata_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_visi_compdata_req)
            return object;
        return new $root.mahjong_ermj_visi_compdata_req();
    };

    /**
     * Creates a plain object from a mahjong_ermj_visi_compdata_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_visi_compdata_req
     * @static
     * @param {mahjong_ermj_visi_compdata_req} message mahjong_ermj_visi_compdata_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_visi_compdata_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_ermj_visi_compdata_req to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_visi_compdata_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_visi_compdata_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_visi_compdata_req;
})();

$root.mahjong_ermj_task_change_rsp = (function() {

    /**
     * Properties of a mahjong_ermj_task_change_rsp.
     * @exports Imahjong_ermj_task_change_rsp
     * @interface Imahjong_ermj_task_change_rsp
     * @property {number} nChairId mahjong_ermj_task_change_rsp nChairId
     * @property {number} nRet mahjong_ermj_task_change_rsp nRet
     */

    /**
     * Constructs a new mahjong_ermj_task_change_rsp.
     * @exports mahjong_ermj_task_change_rsp
     * @classdesc Represents a mahjong_ermj_task_change_rsp.
     * @implements Imahjong_ermj_task_change_rsp
     * @constructor
     * @param {Imahjong_ermj_task_change_rsp=} [properties] Properties to set
     */
    function mahjong_ermj_task_change_rsp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_task_change_rsp nChairId.
     * @member {number} nChairId
     * @memberof mahjong_ermj_task_change_rsp
     * @instance
     */
    mahjong_ermj_task_change_rsp.prototype.nChairId = 0;

    /**
     * mahjong_ermj_task_change_rsp nRet.
     * @member {number} nRet
     * @memberof mahjong_ermj_task_change_rsp
     * @instance
     */
    mahjong_ermj_task_change_rsp.prototype.nRet = 0;

    /**
     * Creates a new mahjong_ermj_task_change_rsp instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_task_change_rsp
     * @static
     * @param {Imahjong_ermj_task_change_rsp=} [properties] Properties to set
     * @returns {mahjong_ermj_task_change_rsp} mahjong_ermj_task_change_rsp instance
     */
    mahjong_ermj_task_change_rsp.create = function create(properties) {
        return new mahjong_ermj_task_change_rsp(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_task_change_rsp message. Does not implicitly {@link mahjong_ermj_task_change_rsp.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_task_change_rsp
     * @static
     * @param {Imahjong_ermj_task_change_rsp} message mahjong_ermj_task_change_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_task_change_rsp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nRet);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_task_change_rsp message, length delimited. Does not implicitly {@link mahjong_ermj_task_change_rsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_task_change_rsp
     * @static
     * @param {Imahjong_ermj_task_change_rsp} message mahjong_ermj_task_change_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_task_change_rsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_task_change_rsp message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_task_change_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_task_change_rsp} mahjong_ermj_task_change_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_task_change_rsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_task_change_rsp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nChairId = reader.int32();
                break;
            case 2:
                message.nRet = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nChairId"))
            throw $util.ProtocolError("missing required 'nChairId'", { instance: message });
        if (!message.hasOwnProperty("nRet"))
            throw $util.ProtocolError("missing required 'nRet'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_task_change_rsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_task_change_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_task_change_rsp} mahjong_ermj_task_change_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_task_change_rsp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_task_change_rsp message.
     * @function verify
     * @memberof mahjong_ermj_task_change_rsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_task_change_rsp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nChairId))
            return "nChairId: integer expected";
        if (!$util.isInteger(message.nRet))
            return "nRet: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_task_change_rsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_task_change_rsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_task_change_rsp} mahjong_ermj_task_change_rsp
     */
    mahjong_ermj_task_change_rsp.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_task_change_rsp)
            return object;
        var message = new $root.mahjong_ermj_task_change_rsp();
        if (object.nChairId != null)
            message.nChairId = object.nChairId | 0;
        if (object.nRet != null)
            message.nRet = object.nRet | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_task_change_rsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_task_change_rsp
     * @static
     * @param {mahjong_ermj_task_change_rsp} message mahjong_ermj_task_change_rsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_task_change_rsp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nChairId = 0;
            object.nRet = 0;
        }
        if (message.nChairId != null && message.hasOwnProperty("nChairId"))
            object.nChairId = message.nChairId;
        if (message.nRet != null && message.hasOwnProperty("nRet"))
            object.nRet = message.nRet;
        return object;
    };

    /**
     * Converts this mahjong_ermj_task_change_rsp to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_task_change_rsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_task_change_rsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_task_change_rsp;
})();

$root.mahjong_ermj_Cli_TingType_req = (function() {

    /**
     * Properties of a mahjong_ermj_Cli_TingType_req.
     * @exports Imahjong_ermj_Cli_TingType_req
     * @interface Imahjong_ermj_Cli_TingType_req
     * @property {number} cAutoGang mahjong_ermj_Cli_TingType_req cAutoGang
     * @property {number} cZimoOnly mahjong_ermj_Cli_TingType_req cZimoOnly
     */

    /**
     * Constructs a new mahjong_ermj_Cli_TingType_req.
     * @exports mahjong_ermj_Cli_TingType_req
     * @classdesc Represents a mahjong_ermj_Cli_TingType_req.
     * @implements Imahjong_ermj_Cli_TingType_req
     * @constructor
     * @param {Imahjong_ermj_Cli_TingType_req=} [properties] Properties to set
     */
    function mahjong_ermj_Cli_TingType_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_Cli_TingType_req cAutoGang.
     * @member {number} cAutoGang
     * @memberof mahjong_ermj_Cli_TingType_req
     * @instance
     */
    mahjong_ermj_Cli_TingType_req.prototype.cAutoGang = 0;

    /**
     * mahjong_ermj_Cli_TingType_req cZimoOnly.
     * @member {number} cZimoOnly
     * @memberof mahjong_ermj_Cli_TingType_req
     * @instance
     */
    mahjong_ermj_Cli_TingType_req.prototype.cZimoOnly = 0;

    /**
     * Creates a new mahjong_ermj_Cli_TingType_req instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_Cli_TingType_req
     * @static
     * @param {Imahjong_ermj_Cli_TingType_req=} [properties] Properties to set
     * @returns {mahjong_ermj_Cli_TingType_req} mahjong_ermj_Cli_TingType_req instance
     */
    mahjong_ermj_Cli_TingType_req.create = function create(properties) {
        return new mahjong_ermj_Cli_TingType_req(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_Cli_TingType_req message. Does not implicitly {@link mahjong_ermj_Cli_TingType_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_Cli_TingType_req
     * @static
     * @param {Imahjong_ermj_Cli_TingType_req} message mahjong_ermj_Cli_TingType_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_Cli_TingType_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cAutoGang);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cZimoOnly);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_Cli_TingType_req message, length delimited. Does not implicitly {@link mahjong_ermj_Cli_TingType_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_Cli_TingType_req
     * @static
     * @param {Imahjong_ermj_Cli_TingType_req} message mahjong_ermj_Cli_TingType_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_Cli_TingType_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_Cli_TingType_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_Cli_TingType_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_Cli_TingType_req} mahjong_ermj_Cli_TingType_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_Cli_TingType_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_Cli_TingType_req();
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
     * Decodes a mahjong_ermj_Cli_TingType_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_Cli_TingType_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_Cli_TingType_req} mahjong_ermj_Cli_TingType_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_Cli_TingType_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_Cli_TingType_req message.
     * @function verify
     * @memberof mahjong_ermj_Cli_TingType_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_Cli_TingType_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cAutoGang))
            return "cAutoGang: integer expected";
        if (!$util.isInteger(message.cZimoOnly))
            return "cZimoOnly: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_Cli_TingType_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_Cli_TingType_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_Cli_TingType_req} mahjong_ermj_Cli_TingType_req
     */
    mahjong_ermj_Cli_TingType_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_Cli_TingType_req)
            return object;
        var message = new $root.mahjong_ermj_Cli_TingType_req();
        if (object.cAutoGang != null)
            message.cAutoGang = object.cAutoGang | 0;
        if (object.cZimoOnly != null)
            message.cZimoOnly = object.cZimoOnly | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_Cli_TingType_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_Cli_TingType_req
     * @static
     * @param {mahjong_ermj_Cli_TingType_req} message mahjong_ermj_Cli_TingType_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_Cli_TingType_req.toObject = function toObject(message, options) {
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
     * Converts this mahjong_ermj_Cli_TingType_req to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_Cli_TingType_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_Cli_TingType_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_Cli_TingType_req;
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

$root.mahjong_ermj_baopai_not = (function() {

    /**
     * Properties of a mahjong_ermj_baopai_not.
     * @exports Imahjong_ermj_baopai_not
     * @interface Imahjong_ermj_baopai_not
     * @property {number} nChairId mahjong_ermj_baopai_not nChairId
     * @property {number} nCardValue mahjong_ermj_baopai_not nCardValue
     */

    /**
     * Constructs a new mahjong_ermj_baopai_not.
     * @exports mahjong_ermj_baopai_not
     * @classdesc Represents a mahjong_ermj_baopai_not.
     * @implements Imahjong_ermj_baopai_not
     * @constructor
     * @param {Imahjong_ermj_baopai_not=} [properties] Properties to set
     */
    function mahjong_ermj_baopai_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_baopai_not nChairId.
     * @member {number} nChairId
     * @memberof mahjong_ermj_baopai_not
     * @instance
     */
    mahjong_ermj_baopai_not.prototype.nChairId = 0;

    /**
     * mahjong_ermj_baopai_not nCardValue.
     * @member {number} nCardValue
     * @memberof mahjong_ermj_baopai_not
     * @instance
     */
    mahjong_ermj_baopai_not.prototype.nCardValue = 0;

    /**
     * Creates a new mahjong_ermj_baopai_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_baopai_not
     * @static
     * @param {Imahjong_ermj_baopai_not=} [properties] Properties to set
     * @returns {mahjong_ermj_baopai_not} mahjong_ermj_baopai_not instance
     */
    mahjong_ermj_baopai_not.create = function create(properties) {
        return new mahjong_ermj_baopai_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_baopai_not message. Does not implicitly {@link mahjong_ermj_baopai_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_baopai_not
     * @static
     * @param {Imahjong_ermj_baopai_not} message mahjong_ermj_baopai_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_baopai_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nCardValue);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_baopai_not message, length delimited. Does not implicitly {@link mahjong_ermj_baopai_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_baopai_not
     * @static
     * @param {Imahjong_ermj_baopai_not} message mahjong_ermj_baopai_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_baopai_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_baopai_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_baopai_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_baopai_not} mahjong_ermj_baopai_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_baopai_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_baopai_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nChairId = reader.int32();
                break;
            case 2:
                message.nCardValue = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nChairId"))
            throw $util.ProtocolError("missing required 'nChairId'", { instance: message });
        if (!message.hasOwnProperty("nCardValue"))
            throw $util.ProtocolError("missing required 'nCardValue'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_baopai_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_baopai_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_baopai_not} mahjong_ermj_baopai_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_baopai_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_baopai_not message.
     * @function verify
     * @memberof mahjong_ermj_baopai_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_baopai_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nChairId))
            return "nChairId: integer expected";
        if (!$util.isInteger(message.nCardValue))
            return "nCardValue: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_baopai_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_baopai_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_baopai_not} mahjong_ermj_baopai_not
     */
    mahjong_ermj_baopai_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_baopai_not)
            return object;
        var message = new $root.mahjong_ermj_baopai_not();
        if (object.nChairId != null)
            message.nChairId = object.nChairId | 0;
        if (object.nCardValue != null)
            message.nCardValue = object.nCardValue | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_baopai_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_baopai_not
     * @static
     * @param {mahjong_ermj_baopai_not} message mahjong_ermj_baopai_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_baopai_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nChairId = 0;
            object.nCardValue = 0;
        }
        if (message.nChairId != null && message.hasOwnProperty("nChairId"))
            object.nChairId = message.nChairId;
        if (message.nCardValue != null && message.hasOwnProperty("nCardValue"))
            object.nCardValue = message.nCardValue;
        return object;
    };

    /**
     * Converts this mahjong_ermj_baopai_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_baopai_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_baopai_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_baopai_not;
})();

$root.mahjong_ermj_operate_not = (function() {

    /**
     * Properties of a mahjong_ermj_operate_not.
     * @exports Imahjong_ermj_operate_not
     * @interface Imahjong_ermj_operate_not
     * @property {number} cChairID mahjong_ermj_operate_not cChairID
     * @property {number} nOpcode mahjong_ermj_operate_not nOpcode
     * @property {number} cCard mahjong_ermj_operate_not cCard
     * @property {number} cWallCardNum mahjong_ermj_operate_not cWallCardNum
     * @property {number} bRobot mahjong_ermj_operate_not bRobot
     * @property {Array.<number>|null} [vecCards] mahjong_ermj_operate_not vecCards
     */

    /**
     * Constructs a new mahjong_ermj_operate_not.
     * @exports mahjong_ermj_operate_not
     * @classdesc Represents a mahjong_ermj_operate_not.
     * @implements Imahjong_ermj_operate_not
     * @constructor
     * @param {Imahjong_ermj_operate_not=} [properties] Properties to set
     */
    function mahjong_ermj_operate_not(properties) {
        this.vecCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_operate_not cChairID.
     * @member {number} cChairID
     * @memberof mahjong_ermj_operate_not
     * @instance
     */
    mahjong_ermj_operate_not.prototype.cChairID = 0;

    /**
     * mahjong_ermj_operate_not nOpcode.
     * @member {number} nOpcode
     * @memberof mahjong_ermj_operate_not
     * @instance
     */
    mahjong_ermj_operate_not.prototype.nOpcode = 0;

    /**
     * mahjong_ermj_operate_not cCard.
     * @member {number} cCard
     * @memberof mahjong_ermj_operate_not
     * @instance
     */
    mahjong_ermj_operate_not.prototype.cCard = 0;

    /**
     * mahjong_ermj_operate_not cWallCardNum.
     * @member {number} cWallCardNum
     * @memberof mahjong_ermj_operate_not
     * @instance
     */
    mahjong_ermj_operate_not.prototype.cWallCardNum = 0;

    /**
     * mahjong_ermj_operate_not bRobot.
     * @member {number} bRobot
     * @memberof mahjong_ermj_operate_not
     * @instance
     */
    mahjong_ermj_operate_not.prototype.bRobot = 0;

    /**
     * mahjong_ermj_operate_not vecCards.
     * @member {Array.<number>} vecCards
     * @memberof mahjong_ermj_operate_not
     * @instance
     */
    mahjong_ermj_operate_not.prototype.vecCards = $util.emptyArray;

    /**
     * Creates a new mahjong_ermj_operate_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_operate_not
     * @static
     * @param {Imahjong_ermj_operate_not=} [properties] Properties to set
     * @returns {mahjong_ermj_operate_not} mahjong_ermj_operate_not instance
     */
    mahjong_ermj_operate_not.create = function create(properties) {
        return new mahjong_ermj_operate_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_operate_not message. Does not implicitly {@link mahjong_ermj_operate_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_operate_not
     * @static
     * @param {Imahjong_ermj_operate_not} message mahjong_ermj_operate_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_operate_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nOpcode);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cCard);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cWallCardNum);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.bRobot);
        if (message.vecCards != null && message.vecCards.length)
            for (var i = 0; i < message.vecCards.length; ++i)
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.vecCards[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_operate_not message, length delimited. Does not implicitly {@link mahjong_ermj_operate_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_operate_not
     * @static
     * @param {Imahjong_ermj_operate_not} message mahjong_ermj_operate_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_operate_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_operate_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_operate_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_operate_not} mahjong_ermj_operate_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_operate_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_operate_not();
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
            case 5:
                message.bRobot = reader.int32();
                break;
            case 6:
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
        if (!message.hasOwnProperty("nOpcode"))
            throw $util.ProtocolError("missing required 'nOpcode'", { instance: message });
        if (!message.hasOwnProperty("cCard"))
            throw $util.ProtocolError("missing required 'cCard'", { instance: message });
        if (!message.hasOwnProperty("cWallCardNum"))
            throw $util.ProtocolError("missing required 'cWallCardNum'", { instance: message });
        if (!message.hasOwnProperty("bRobot"))
            throw $util.ProtocolError("missing required 'bRobot'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_operate_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_operate_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_operate_not} mahjong_ermj_operate_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_operate_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_operate_not message.
     * @function verify
     * @memberof mahjong_ermj_operate_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_operate_not.verify = function verify(message) {
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
        if (!$util.isInteger(message.bRobot))
            return "bRobot: integer expected";
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
     * Creates a mahjong_ermj_operate_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_operate_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_operate_not} mahjong_ermj_operate_not
     */
    mahjong_ermj_operate_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_operate_not)
            return object;
        var message = new $root.mahjong_ermj_operate_not();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.nOpcode != null)
            message.nOpcode = object.nOpcode | 0;
        if (object.cCard != null)
            message.cCard = object.cCard | 0;
        if (object.cWallCardNum != null)
            message.cWallCardNum = object.cWallCardNum | 0;
        if (object.bRobot != null)
            message.bRobot = object.bRobot | 0;
        if (object.vecCards) {
            if (!Array.isArray(object.vecCards))
                throw TypeError(".mahjong_ermj_operate_not.vecCards: array expected");
            message.vecCards = [];
            for (var i = 0; i < object.vecCards.length; ++i)
                message.vecCards[i] = object.vecCards[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_operate_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_operate_not
     * @static
     * @param {mahjong_ermj_operate_not} message mahjong_ermj_operate_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_operate_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecCards = [];
        if (options.defaults) {
            object.cChairID = 0;
            object.nOpcode = 0;
            object.cCard = 0;
            object.cWallCardNum = 0;
            object.bRobot = 0;
        }
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.nOpcode != null && message.hasOwnProperty("nOpcode"))
            object.nOpcode = message.nOpcode;
        if (message.cCard != null && message.hasOwnProperty("cCard"))
            object.cCard = message.cCard;
        if (message.cWallCardNum != null && message.hasOwnProperty("cWallCardNum"))
            object.cWallCardNum = message.cWallCardNum;
        if (message.bRobot != null && message.hasOwnProperty("bRobot"))
            object.bRobot = message.bRobot;
        if (message.vecCards && message.vecCards.length) {
            object.vecCards = [];
            for (var j = 0; j < message.vecCards.length; ++j)
                object.vecCards[j] = message.vecCards[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_ermj_operate_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_operate_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_operate_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_operate_not;
})();

$root.mahjong_ermj_mingpai_ratio_req = (function() {

    /**
     * Properties of a mahjong_ermj_mingpai_ratio_req.
     * @exports Imahjong_ermj_mingpai_ratio_req
     * @interface Imahjong_ermj_mingpai_ratio_req
     * @property {number} nChairId mahjong_ermj_mingpai_ratio_req nChairId
     * @property {number} nValue mahjong_ermj_mingpai_ratio_req nValue
     */

    /**
     * Constructs a new mahjong_ermj_mingpai_ratio_req.
     * @exports mahjong_ermj_mingpai_ratio_req
     * @classdesc Represents a mahjong_ermj_mingpai_ratio_req.
     * @implements Imahjong_ermj_mingpai_ratio_req
     * @constructor
     * @param {Imahjong_ermj_mingpai_ratio_req=} [properties] Properties to set
     */
    function mahjong_ermj_mingpai_ratio_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_mingpai_ratio_req nChairId.
     * @member {number} nChairId
     * @memberof mahjong_ermj_mingpai_ratio_req
     * @instance
     */
    mahjong_ermj_mingpai_ratio_req.prototype.nChairId = 0;

    /**
     * mahjong_ermj_mingpai_ratio_req nValue.
     * @member {number} nValue
     * @memberof mahjong_ermj_mingpai_ratio_req
     * @instance
     */
    mahjong_ermj_mingpai_ratio_req.prototype.nValue = 0;

    /**
     * Creates a new mahjong_ermj_mingpai_ratio_req instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_mingpai_ratio_req
     * @static
     * @param {Imahjong_ermj_mingpai_ratio_req=} [properties] Properties to set
     * @returns {mahjong_ermj_mingpai_ratio_req} mahjong_ermj_mingpai_ratio_req instance
     */
    mahjong_ermj_mingpai_ratio_req.create = function create(properties) {
        return new mahjong_ermj_mingpai_ratio_req(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_mingpai_ratio_req message. Does not implicitly {@link mahjong_ermj_mingpai_ratio_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_mingpai_ratio_req
     * @static
     * @param {Imahjong_ermj_mingpai_ratio_req} message mahjong_ermj_mingpai_ratio_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_mingpai_ratio_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nValue);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_mingpai_ratio_req message, length delimited. Does not implicitly {@link mahjong_ermj_mingpai_ratio_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_mingpai_ratio_req
     * @static
     * @param {Imahjong_ermj_mingpai_ratio_req} message mahjong_ermj_mingpai_ratio_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_mingpai_ratio_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_mingpai_ratio_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_mingpai_ratio_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_mingpai_ratio_req} mahjong_ermj_mingpai_ratio_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_mingpai_ratio_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_mingpai_ratio_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nChairId = reader.int32();
                break;
            case 2:
                message.nValue = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nChairId"))
            throw $util.ProtocolError("missing required 'nChairId'", { instance: message });
        if (!message.hasOwnProperty("nValue"))
            throw $util.ProtocolError("missing required 'nValue'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_mingpai_ratio_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_mingpai_ratio_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_mingpai_ratio_req} mahjong_ermj_mingpai_ratio_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_mingpai_ratio_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_mingpai_ratio_req message.
     * @function verify
     * @memberof mahjong_ermj_mingpai_ratio_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_mingpai_ratio_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nChairId))
            return "nChairId: integer expected";
        if (!$util.isInteger(message.nValue))
            return "nValue: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_mingpai_ratio_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_mingpai_ratio_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_mingpai_ratio_req} mahjong_ermj_mingpai_ratio_req
     */
    mahjong_ermj_mingpai_ratio_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_mingpai_ratio_req)
            return object;
        var message = new $root.mahjong_ermj_mingpai_ratio_req();
        if (object.nChairId != null)
            message.nChairId = object.nChairId | 0;
        if (object.nValue != null)
            message.nValue = object.nValue | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_mingpai_ratio_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_mingpai_ratio_req
     * @static
     * @param {mahjong_ermj_mingpai_ratio_req} message mahjong_ermj_mingpai_ratio_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_mingpai_ratio_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nChairId = 0;
            object.nValue = 0;
        }
        if (message.nChairId != null && message.hasOwnProperty("nChairId"))
            object.nChairId = message.nChairId;
        if (message.nValue != null && message.hasOwnProperty("nValue"))
            object.nValue = message.nValue;
        return object;
    };

    /**
     * Converts this mahjong_ermj_mingpai_ratio_req to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_mingpai_ratio_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_mingpai_ratio_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_mingpai_ratio_req;
})();

$root.mahjong_ermj_tingcards_not = (function() {

    /**
     * Properties of a mahjong_ermj_tingcards_not.
     * @exports Imahjong_ermj_tingcards_not
     * @interface Imahjong_ermj_tingcards_not
     * @property {Array.<number>|null} [vecCards] mahjong_ermj_tingcards_not vecCards
     */

    /**
     * Constructs a new mahjong_ermj_tingcards_not.
     * @exports mahjong_ermj_tingcards_not
     * @classdesc Represents a mahjong_ermj_tingcards_not.
     * @implements Imahjong_ermj_tingcards_not
     * @constructor
     * @param {Imahjong_ermj_tingcards_not=} [properties] Properties to set
     */
    function mahjong_ermj_tingcards_not(properties) {
        this.vecCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_tingcards_not vecCards.
     * @member {Array.<number>} vecCards
     * @memberof mahjong_ermj_tingcards_not
     * @instance
     */
    mahjong_ermj_tingcards_not.prototype.vecCards = $util.emptyArray;

    /**
     * Creates a new mahjong_ermj_tingcards_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_tingcards_not
     * @static
     * @param {Imahjong_ermj_tingcards_not=} [properties] Properties to set
     * @returns {mahjong_ermj_tingcards_not} mahjong_ermj_tingcards_not instance
     */
    mahjong_ermj_tingcards_not.create = function create(properties) {
        return new mahjong_ermj_tingcards_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_tingcards_not message. Does not implicitly {@link mahjong_ermj_tingcards_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_tingcards_not
     * @static
     * @param {Imahjong_ermj_tingcards_not} message mahjong_ermj_tingcards_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_tingcards_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vecCards != null && message.vecCards.length)
            for (var i = 0; i < message.vecCards.length; ++i)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.vecCards[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_tingcards_not message, length delimited. Does not implicitly {@link mahjong_ermj_tingcards_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_tingcards_not
     * @static
     * @param {Imahjong_ermj_tingcards_not} message mahjong_ermj_tingcards_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_tingcards_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_tingcards_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_tingcards_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_tingcards_not} mahjong_ermj_tingcards_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_tingcards_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_tingcards_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
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
        return message;
    };

    /**
     * Decodes a mahjong_ermj_tingcards_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_tingcards_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_tingcards_not} mahjong_ermj_tingcards_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_tingcards_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_tingcards_not message.
     * @function verify
     * @memberof mahjong_ermj_tingcards_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_tingcards_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
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
     * Creates a mahjong_ermj_tingcards_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_tingcards_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_tingcards_not} mahjong_ermj_tingcards_not
     */
    mahjong_ermj_tingcards_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_tingcards_not)
            return object;
        var message = new $root.mahjong_ermj_tingcards_not();
        if (object.vecCards) {
            if (!Array.isArray(object.vecCards))
                throw TypeError(".mahjong_ermj_tingcards_not.vecCards: array expected");
            message.vecCards = [];
            for (var i = 0; i < object.vecCards.length; ++i)
                message.vecCards[i] = object.vecCards[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_tingcards_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_tingcards_not
     * @static
     * @param {mahjong_ermj_tingcards_not} message mahjong_ermj_tingcards_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_tingcards_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecCards = [];
        if (message.vecCards && message.vecCards.length) {
            object.vecCards = [];
            for (var j = 0; j < message.vecCards.length; ++j)
                object.vecCards[j] = message.vecCards[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_ermj_tingcards_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_tingcards_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_tingcards_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_tingcards_not;
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

$root.mahjong_ermj_task_not = (function() {

    /**
     * Properties of a mahjong_ermj_task_not.
     * @exports Imahjong_ermj_task_not
     * @interface Imahjong_ermj_task_not
     * @property {number} nChairId mahjong_ermj_task_not nChairId
     * @property {number} nType mahjong_ermj_task_not nType
     * @property {number} nTargetValue mahjong_ermj_task_not nTargetValue
     * @property {number} nCardValue mahjong_ermj_task_not nCardValue
     * @property {number} nRatio mahjong_ermj_task_not nRatio
     */

    /**
     * Constructs a new mahjong_ermj_task_not.
     * @exports mahjong_ermj_task_not
     * @classdesc Represents a mahjong_ermj_task_not.
     * @implements Imahjong_ermj_task_not
     * @constructor
     * @param {Imahjong_ermj_task_not=} [properties] Properties to set
     */
    function mahjong_ermj_task_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_task_not nChairId.
     * @member {number} nChairId
     * @memberof mahjong_ermj_task_not
     * @instance
     */
    mahjong_ermj_task_not.prototype.nChairId = 0;

    /**
     * mahjong_ermj_task_not nType.
     * @member {number} nType
     * @memberof mahjong_ermj_task_not
     * @instance
     */
    mahjong_ermj_task_not.prototype.nType = 0;

    /**
     * mahjong_ermj_task_not nTargetValue.
     * @member {number} nTargetValue
     * @memberof mahjong_ermj_task_not
     * @instance
     */
    mahjong_ermj_task_not.prototype.nTargetValue = 0;

    /**
     * mahjong_ermj_task_not nCardValue.
     * @member {number} nCardValue
     * @memberof mahjong_ermj_task_not
     * @instance
     */
    mahjong_ermj_task_not.prototype.nCardValue = 0;

    /**
     * mahjong_ermj_task_not nRatio.
     * @member {number} nRatio
     * @memberof mahjong_ermj_task_not
     * @instance
     */
    mahjong_ermj_task_not.prototype.nRatio = 0;

    /**
     * Creates a new mahjong_ermj_task_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_task_not
     * @static
     * @param {Imahjong_ermj_task_not=} [properties] Properties to set
     * @returns {mahjong_ermj_task_not} mahjong_ermj_task_not instance
     */
    mahjong_ermj_task_not.create = function create(properties) {
        return new mahjong_ermj_task_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_task_not message. Does not implicitly {@link mahjong_ermj_task_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_task_not
     * @static
     * @param {Imahjong_ermj_task_not} message mahjong_ermj_task_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_task_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nType);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nTargetValue);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nCardValue);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nRatio);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_task_not message, length delimited. Does not implicitly {@link mahjong_ermj_task_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_task_not
     * @static
     * @param {Imahjong_ermj_task_not} message mahjong_ermj_task_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_task_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_task_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_task_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_task_not} mahjong_ermj_task_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_task_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_task_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nChairId = reader.int32();
                break;
            case 2:
                message.nType = reader.int32();
                break;
            case 3:
                message.nTargetValue = reader.int32();
                break;
            case 4:
                message.nCardValue = reader.int32();
                break;
            case 5:
                message.nRatio = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nChairId"))
            throw $util.ProtocolError("missing required 'nChairId'", { instance: message });
        if (!message.hasOwnProperty("nType"))
            throw $util.ProtocolError("missing required 'nType'", { instance: message });
        if (!message.hasOwnProperty("nTargetValue"))
            throw $util.ProtocolError("missing required 'nTargetValue'", { instance: message });
        if (!message.hasOwnProperty("nCardValue"))
            throw $util.ProtocolError("missing required 'nCardValue'", { instance: message });
        if (!message.hasOwnProperty("nRatio"))
            throw $util.ProtocolError("missing required 'nRatio'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_task_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_task_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_task_not} mahjong_ermj_task_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_task_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_task_not message.
     * @function verify
     * @memberof mahjong_ermj_task_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_task_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nChairId))
            return "nChairId: integer expected";
        if (!$util.isInteger(message.nType))
            return "nType: integer expected";
        if (!$util.isInteger(message.nTargetValue))
            return "nTargetValue: integer expected";
        if (!$util.isInteger(message.nCardValue))
            return "nCardValue: integer expected";
        if (!$util.isInteger(message.nRatio))
            return "nRatio: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_task_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_task_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_task_not} mahjong_ermj_task_not
     */
    mahjong_ermj_task_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_task_not)
            return object;
        var message = new $root.mahjong_ermj_task_not();
        if (object.nChairId != null)
            message.nChairId = object.nChairId | 0;
        if (object.nType != null)
            message.nType = object.nType | 0;
        if (object.nTargetValue != null)
            message.nTargetValue = object.nTargetValue | 0;
        if (object.nCardValue != null)
            message.nCardValue = object.nCardValue | 0;
        if (object.nRatio != null)
            message.nRatio = object.nRatio | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_task_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_task_not
     * @static
     * @param {mahjong_ermj_task_not} message mahjong_ermj_task_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_task_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nChairId = 0;
            object.nType = 0;
            object.nTargetValue = 0;
            object.nCardValue = 0;
            object.nRatio = 0;
        }
        if (message.nChairId != null && message.hasOwnProperty("nChairId"))
            object.nChairId = message.nChairId;
        if (message.nType != null && message.hasOwnProperty("nType"))
            object.nType = message.nType;
        if (message.nTargetValue != null && message.hasOwnProperty("nTargetValue"))
            object.nTargetValue = message.nTargetValue;
        if (message.nCardValue != null && message.hasOwnProperty("nCardValue"))
            object.nCardValue = message.nCardValue;
        if (message.nRatio != null && message.hasOwnProperty("nRatio"))
            object.nRatio = message.nRatio;
        return object;
    };

    /**
     * Converts this mahjong_ermj_task_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_task_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_task_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_task_not;
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

$root.mahjong_ermj_hudouble_req = (function() {

    /**
     * Properties of a mahjong_ermj_hudouble_req.
     * @exports Imahjong_ermj_hudouble_req
     * @interface Imahjong_ermj_hudouble_req
     * @property {number} nFan mahjong_ermj_hudouble_req nFan
     * @property {number} nScore mahjong_ermj_hudouble_req nScore
     */

    /**
     * Constructs a new mahjong_ermj_hudouble_req.
     * @exports mahjong_ermj_hudouble_req
     * @classdesc Represents a mahjong_ermj_hudouble_req.
     * @implements Imahjong_ermj_hudouble_req
     * @constructor
     * @param {Imahjong_ermj_hudouble_req=} [properties] Properties to set
     */
    function mahjong_ermj_hudouble_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_hudouble_req nFan.
     * @member {number} nFan
     * @memberof mahjong_ermj_hudouble_req
     * @instance
     */
    mahjong_ermj_hudouble_req.prototype.nFan = 0;

    /**
     * mahjong_ermj_hudouble_req nScore.
     * @member {number} nScore
     * @memberof mahjong_ermj_hudouble_req
     * @instance
     */
    mahjong_ermj_hudouble_req.prototype.nScore = 0;

    /**
     * Creates a new mahjong_ermj_hudouble_req instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_hudouble_req
     * @static
     * @param {Imahjong_ermj_hudouble_req=} [properties] Properties to set
     * @returns {mahjong_ermj_hudouble_req} mahjong_ermj_hudouble_req instance
     */
    mahjong_ermj_hudouble_req.create = function create(properties) {
        return new mahjong_ermj_hudouble_req(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_hudouble_req message. Does not implicitly {@link mahjong_ermj_hudouble_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_hudouble_req
     * @static
     * @param {Imahjong_ermj_hudouble_req} message mahjong_ermj_hudouble_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_hudouble_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nFan);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nScore);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_hudouble_req message, length delimited. Does not implicitly {@link mahjong_ermj_hudouble_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_hudouble_req
     * @static
     * @param {Imahjong_ermj_hudouble_req} message mahjong_ermj_hudouble_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_hudouble_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_hudouble_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_hudouble_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_hudouble_req} mahjong_ermj_hudouble_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_hudouble_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_hudouble_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nFan = reader.int32();
                break;
            case 2:
                message.nScore = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nFan"))
            throw $util.ProtocolError("missing required 'nFan'", { instance: message });
        if (!message.hasOwnProperty("nScore"))
            throw $util.ProtocolError("missing required 'nScore'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_hudouble_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_hudouble_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_hudouble_req} mahjong_ermj_hudouble_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_hudouble_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_hudouble_req message.
     * @function verify
     * @memberof mahjong_ermj_hudouble_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_hudouble_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nFan))
            return "nFan: integer expected";
        if (!$util.isInteger(message.nScore))
            return "nScore: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_hudouble_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_hudouble_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_hudouble_req} mahjong_ermj_hudouble_req
     */
    mahjong_ermj_hudouble_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_hudouble_req)
            return object;
        var message = new $root.mahjong_ermj_hudouble_req();
        if (object.nFan != null)
            message.nFan = object.nFan | 0;
        if (object.nScore != null)
            message.nScore = object.nScore | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_hudouble_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_hudouble_req
     * @static
     * @param {mahjong_ermj_hudouble_req} message mahjong_ermj_hudouble_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_hudouble_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nFan = 0;
            object.nScore = 0;
        }
        if (message.nFan != null && message.hasOwnProperty("nFan"))
            object.nFan = message.nFan;
        if (message.nScore != null && message.hasOwnProperty("nScore"))
            object.nScore = message.nScore;
        return object;
    };

    /**
     * Converts this mahjong_ermj_hudouble_req to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_hudouble_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_hudouble_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_hudouble_req;
})();

$root.mahjong_ermj_robot_req = (function() {

    /**
     * Properties of a mahjong_ermj_robot_req.
     * @exports Imahjong_ermj_robot_req
     * @interface Imahjong_ermj_robot_req
     * @property {number} nType mahjong_ermj_robot_req nType
     * @property {number} nIndex mahjong_ermj_robot_req nIndex
     * @property {number} cCard mahjong_ermj_robot_req cCard
     */

    /**
     * Constructs a new mahjong_ermj_robot_req.
     * @exports mahjong_ermj_robot_req
     * @classdesc Represents a mahjong_ermj_robot_req.
     * @implements Imahjong_ermj_robot_req
     * @constructor
     * @param {Imahjong_ermj_robot_req=} [properties] Properties to set
     */
    function mahjong_ermj_robot_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_robot_req nType.
     * @member {number} nType
     * @memberof mahjong_ermj_robot_req
     * @instance
     */
    mahjong_ermj_robot_req.prototype.nType = 0;

    /**
     * mahjong_ermj_robot_req nIndex.
     * @member {number} nIndex
     * @memberof mahjong_ermj_robot_req
     * @instance
     */
    mahjong_ermj_robot_req.prototype.nIndex = 0;

    /**
     * mahjong_ermj_robot_req cCard.
     * @member {number} cCard
     * @memberof mahjong_ermj_robot_req
     * @instance
     */
    mahjong_ermj_robot_req.prototype.cCard = 0;

    /**
     * Creates a new mahjong_ermj_robot_req instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_robot_req
     * @static
     * @param {Imahjong_ermj_robot_req=} [properties] Properties to set
     * @returns {mahjong_ermj_robot_req} mahjong_ermj_robot_req instance
     */
    mahjong_ermj_robot_req.create = function create(properties) {
        return new mahjong_ermj_robot_req(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_robot_req message. Does not implicitly {@link mahjong_ermj_robot_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_robot_req
     * @static
     * @param {Imahjong_ermj_robot_req} message mahjong_ermj_robot_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_robot_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nType);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nIndex);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cCard);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_robot_req message, length delimited. Does not implicitly {@link mahjong_ermj_robot_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_robot_req
     * @static
     * @param {Imahjong_ermj_robot_req} message mahjong_ermj_robot_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_robot_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_robot_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_robot_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_robot_req} mahjong_ermj_robot_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_robot_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_robot_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nType = reader.int32();
                break;
            case 2:
                message.nIndex = reader.int32();
                break;
            case 3:
                message.cCard = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nType"))
            throw $util.ProtocolError("missing required 'nType'", { instance: message });
        if (!message.hasOwnProperty("nIndex"))
            throw $util.ProtocolError("missing required 'nIndex'", { instance: message });
        if (!message.hasOwnProperty("cCard"))
            throw $util.ProtocolError("missing required 'cCard'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_robot_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_robot_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_robot_req} mahjong_ermj_robot_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_robot_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_robot_req message.
     * @function verify
     * @memberof mahjong_ermj_robot_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_robot_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nType))
            return "nType: integer expected";
        if (!$util.isInteger(message.nIndex))
            return "nIndex: integer expected";
        if (!$util.isInteger(message.cCard))
            return "cCard: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_robot_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_robot_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_robot_req} mahjong_ermj_robot_req
     */
    mahjong_ermj_robot_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_robot_req)
            return object;
        var message = new $root.mahjong_ermj_robot_req();
        if (object.nType != null)
            message.nType = object.nType | 0;
        if (object.nIndex != null)
            message.nIndex = object.nIndex | 0;
        if (object.cCard != null)
            message.cCard = object.cCard | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_robot_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_robot_req
     * @static
     * @param {mahjong_ermj_robot_req} message mahjong_ermj_robot_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_robot_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nType = 0;
            object.nIndex = 0;
            object.cCard = 0;
        }
        if (message.nType != null && message.hasOwnProperty("nType"))
            object.nType = message.nType;
        if (message.nIndex != null && message.hasOwnProperty("nIndex"))
            object.nIndex = message.nIndex;
        if (message.cCard != null && message.hasOwnProperty("cCard"))
            object.cCard = message.cCard;
        return object;
    };

    /**
     * Converts this mahjong_ermj_robot_req to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_robot_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_robot_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_robot_req;
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

$root.mahjong_ermj_hupai_ratio_rsp = (function() {

    /**
     * Properties of a mahjong_ermj_hupai_ratio_rsp.
     * @exports Imahjong_ermj_hupai_ratio_rsp
     * @interface Imahjong_ermj_hupai_ratio_rsp
     * @property {number} nChairId mahjong_ermj_hupai_ratio_rsp nChairId
     * @property {number} nRet mahjong_ermj_hupai_ratio_rsp nRet
     */

    /**
     * Constructs a new mahjong_ermj_hupai_ratio_rsp.
     * @exports mahjong_ermj_hupai_ratio_rsp
     * @classdesc Represents a mahjong_ermj_hupai_ratio_rsp.
     * @implements Imahjong_ermj_hupai_ratio_rsp
     * @constructor
     * @param {Imahjong_ermj_hupai_ratio_rsp=} [properties] Properties to set
     */
    function mahjong_ermj_hupai_ratio_rsp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_hupai_ratio_rsp nChairId.
     * @member {number} nChairId
     * @memberof mahjong_ermj_hupai_ratio_rsp
     * @instance
     */
    mahjong_ermj_hupai_ratio_rsp.prototype.nChairId = 0;

    /**
     * mahjong_ermj_hupai_ratio_rsp nRet.
     * @member {number} nRet
     * @memberof mahjong_ermj_hupai_ratio_rsp
     * @instance
     */
    mahjong_ermj_hupai_ratio_rsp.prototype.nRet = 0;

    /**
     * Creates a new mahjong_ermj_hupai_ratio_rsp instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_hupai_ratio_rsp
     * @static
     * @param {Imahjong_ermj_hupai_ratio_rsp=} [properties] Properties to set
     * @returns {mahjong_ermj_hupai_ratio_rsp} mahjong_ermj_hupai_ratio_rsp instance
     */
    mahjong_ermj_hupai_ratio_rsp.create = function create(properties) {
        return new mahjong_ermj_hupai_ratio_rsp(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_hupai_ratio_rsp message. Does not implicitly {@link mahjong_ermj_hupai_ratio_rsp.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_hupai_ratio_rsp
     * @static
     * @param {Imahjong_ermj_hupai_ratio_rsp} message mahjong_ermj_hupai_ratio_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_hupai_ratio_rsp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nRet);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_hupai_ratio_rsp message, length delimited. Does not implicitly {@link mahjong_ermj_hupai_ratio_rsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_hupai_ratio_rsp
     * @static
     * @param {Imahjong_ermj_hupai_ratio_rsp} message mahjong_ermj_hupai_ratio_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_hupai_ratio_rsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_hupai_ratio_rsp message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_hupai_ratio_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_hupai_ratio_rsp} mahjong_ermj_hupai_ratio_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_hupai_ratio_rsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_hupai_ratio_rsp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nChairId = reader.int32();
                break;
            case 2:
                message.nRet = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nChairId"))
            throw $util.ProtocolError("missing required 'nChairId'", { instance: message });
        if (!message.hasOwnProperty("nRet"))
            throw $util.ProtocolError("missing required 'nRet'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_hupai_ratio_rsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_hupai_ratio_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_hupai_ratio_rsp} mahjong_ermj_hupai_ratio_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_hupai_ratio_rsp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_hupai_ratio_rsp message.
     * @function verify
     * @memberof mahjong_ermj_hupai_ratio_rsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_hupai_ratio_rsp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nChairId))
            return "nChairId: integer expected";
        if (!$util.isInteger(message.nRet))
            return "nRet: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_hupai_ratio_rsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_hupai_ratio_rsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_hupai_ratio_rsp} mahjong_ermj_hupai_ratio_rsp
     */
    mahjong_ermj_hupai_ratio_rsp.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_hupai_ratio_rsp)
            return object;
        var message = new $root.mahjong_ermj_hupai_ratio_rsp();
        if (object.nChairId != null)
            message.nChairId = object.nChairId | 0;
        if (object.nRet != null)
            message.nRet = object.nRet | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_hupai_ratio_rsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_hupai_ratio_rsp
     * @static
     * @param {mahjong_ermj_hupai_ratio_rsp} message mahjong_ermj_hupai_ratio_rsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_hupai_ratio_rsp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nChairId = 0;
            object.nRet = 0;
        }
        if (message.nChairId != null && message.hasOwnProperty("nChairId"))
            object.nChairId = message.nChairId;
        if (message.nRet != null && message.hasOwnProperty("nRet"))
            object.nRet = message.nRet;
        return object;
    };

    /**
     * Converts this mahjong_ermj_hupai_ratio_rsp to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_hupai_ratio_rsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_hupai_ratio_rsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_hupai_ratio_rsp;
})();

$root.mahjong_ermj_baopai_change_req = (function() {

    /**
     * Properties of a mahjong_ermj_baopai_change_req.
     * @exports Imahjong_ermj_baopai_change_req
     * @interface Imahjong_ermj_baopai_change_req
     * @property {number} nChairId mahjong_ermj_baopai_change_req nChairId
     */

    /**
     * Constructs a new mahjong_ermj_baopai_change_req.
     * @exports mahjong_ermj_baopai_change_req
     * @classdesc Represents a mahjong_ermj_baopai_change_req.
     * @implements Imahjong_ermj_baopai_change_req
     * @constructor
     * @param {Imahjong_ermj_baopai_change_req=} [properties] Properties to set
     */
    function mahjong_ermj_baopai_change_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_baopai_change_req nChairId.
     * @member {number} nChairId
     * @memberof mahjong_ermj_baopai_change_req
     * @instance
     */
    mahjong_ermj_baopai_change_req.prototype.nChairId = 0;

    /**
     * Creates a new mahjong_ermj_baopai_change_req instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_baopai_change_req
     * @static
     * @param {Imahjong_ermj_baopai_change_req=} [properties] Properties to set
     * @returns {mahjong_ermj_baopai_change_req} mahjong_ermj_baopai_change_req instance
     */
    mahjong_ermj_baopai_change_req.create = function create(properties) {
        return new mahjong_ermj_baopai_change_req(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_baopai_change_req message. Does not implicitly {@link mahjong_ermj_baopai_change_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_baopai_change_req
     * @static
     * @param {Imahjong_ermj_baopai_change_req} message mahjong_ermj_baopai_change_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_baopai_change_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nChairId);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_baopai_change_req message, length delimited. Does not implicitly {@link mahjong_ermj_baopai_change_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_baopai_change_req
     * @static
     * @param {Imahjong_ermj_baopai_change_req} message mahjong_ermj_baopai_change_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_baopai_change_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_baopai_change_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_baopai_change_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_baopai_change_req} mahjong_ermj_baopai_change_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_baopai_change_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_baopai_change_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nChairId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nChairId"))
            throw $util.ProtocolError("missing required 'nChairId'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_baopai_change_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_baopai_change_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_baopai_change_req} mahjong_ermj_baopai_change_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_baopai_change_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_baopai_change_req message.
     * @function verify
     * @memberof mahjong_ermj_baopai_change_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_baopai_change_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nChairId))
            return "nChairId: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_baopai_change_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_baopai_change_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_baopai_change_req} mahjong_ermj_baopai_change_req
     */
    mahjong_ermj_baopai_change_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_baopai_change_req)
            return object;
        var message = new $root.mahjong_ermj_baopai_change_req();
        if (object.nChairId != null)
            message.nChairId = object.nChairId | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_baopai_change_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_baopai_change_req
     * @static
     * @param {mahjong_ermj_baopai_change_req} message mahjong_ermj_baopai_change_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_baopai_change_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.nChairId = 0;
        if (message.nChairId != null && message.hasOwnProperty("nChairId"))
            object.nChairId = message.nChairId;
        return object;
    };

    /**
     * Converts this mahjong_ermj_baopai_change_req to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_baopai_change_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_baopai_change_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_baopai_change_req;
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

$root.mahjong_ermj_dice_not = (function() {

    /**
     * Properties of a mahjong_ermj_dice_not.
     * @exports Imahjong_ermj_dice_not
     * @interface Imahjong_ermj_dice_not
     * @property {number} cBanker mahjong_ermj_dice_not cBanker
     * @property {Array.<number>|null} [vecDice] mahjong_ermj_dice_not vecDice
     * @property {number} cWallEndChair mahjong_ermj_dice_not cWallEndChair
     * @property {number} cWallEndPos mahjong_ermj_dice_not cWallEndPos
     */

    /**
     * Constructs a new mahjong_ermj_dice_not.
     * @exports mahjong_ermj_dice_not
     * @classdesc Represents a mahjong_ermj_dice_not.
     * @implements Imahjong_ermj_dice_not
     * @constructor
     * @param {Imahjong_ermj_dice_not=} [properties] Properties to set
     */
    function mahjong_ermj_dice_not(properties) {
        this.vecDice = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_dice_not cBanker.
     * @member {number} cBanker
     * @memberof mahjong_ermj_dice_not
     * @instance
     */
    mahjong_ermj_dice_not.prototype.cBanker = 0;

    /**
     * mahjong_ermj_dice_not vecDice.
     * @member {Array.<number>} vecDice
     * @memberof mahjong_ermj_dice_not
     * @instance
     */
    mahjong_ermj_dice_not.prototype.vecDice = $util.emptyArray;

    /**
     * mahjong_ermj_dice_not cWallEndChair.
     * @member {number} cWallEndChair
     * @memberof mahjong_ermj_dice_not
     * @instance
     */
    mahjong_ermj_dice_not.prototype.cWallEndChair = 0;

    /**
     * mahjong_ermj_dice_not cWallEndPos.
     * @member {number} cWallEndPos
     * @memberof mahjong_ermj_dice_not
     * @instance
     */
    mahjong_ermj_dice_not.prototype.cWallEndPos = 0;

    /**
     * Creates a new mahjong_ermj_dice_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_dice_not
     * @static
     * @param {Imahjong_ermj_dice_not=} [properties] Properties to set
     * @returns {mahjong_ermj_dice_not} mahjong_ermj_dice_not instance
     */
    mahjong_ermj_dice_not.create = function create(properties) {
        return new mahjong_ermj_dice_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_dice_not message. Does not implicitly {@link mahjong_ermj_dice_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_dice_not
     * @static
     * @param {Imahjong_ermj_dice_not} message mahjong_ermj_dice_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_dice_not.encode = function encode(message, writer) {
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
     * Encodes the specified mahjong_ermj_dice_not message, length delimited. Does not implicitly {@link mahjong_ermj_dice_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_dice_not
     * @static
     * @param {Imahjong_ermj_dice_not} message mahjong_ermj_dice_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_dice_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_dice_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_dice_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_dice_not} mahjong_ermj_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_dice_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_dice_not();
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
     * Decodes a mahjong_ermj_dice_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_dice_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_dice_not} mahjong_ermj_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_dice_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_dice_not message.
     * @function verify
     * @memberof mahjong_ermj_dice_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_dice_not.verify = function verify(message) {
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
     * Creates a mahjong_ermj_dice_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_dice_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_dice_not} mahjong_ermj_dice_not
     */
    mahjong_ermj_dice_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_dice_not)
            return object;
        var message = new $root.mahjong_ermj_dice_not();
        if (object.cBanker != null)
            message.cBanker = object.cBanker | 0;
        if (object.vecDice) {
            if (!Array.isArray(object.vecDice))
                throw TypeError(".mahjong_ermj_dice_not.vecDice: array expected");
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
     * Creates a plain object from a mahjong_ermj_dice_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_dice_not
     * @static
     * @param {mahjong_ermj_dice_not} message mahjong_ermj_dice_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_dice_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_ermj_dice_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_dice_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_dice_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_dice_not;
})();

$root.mahjong_ermj_achieve_req = (function() {

    /**
     * Properties of a mahjong_ermj_achieve_req.
     * @exports Imahjong_ermj_achieve_req
     * @interface Imahjong_ermj_achieve_req
     * @property {number} nChairId mahjong_ermj_achieve_req nChairId
     * @property {number} nType mahjong_ermj_achieve_req nType
     */

    /**
     * Constructs a new mahjong_ermj_achieve_req.
     * @exports mahjong_ermj_achieve_req
     * @classdesc Represents a mahjong_ermj_achieve_req.
     * @implements Imahjong_ermj_achieve_req
     * @constructor
     * @param {Imahjong_ermj_achieve_req=} [properties] Properties to set
     */
    function mahjong_ermj_achieve_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_achieve_req nChairId.
     * @member {number} nChairId
     * @memberof mahjong_ermj_achieve_req
     * @instance
     */
    mahjong_ermj_achieve_req.prototype.nChairId = 0;

    /**
     * mahjong_ermj_achieve_req nType.
     * @member {number} nType
     * @memberof mahjong_ermj_achieve_req
     * @instance
     */
    mahjong_ermj_achieve_req.prototype.nType = 0;

    /**
     * Creates a new mahjong_ermj_achieve_req instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_achieve_req
     * @static
     * @param {Imahjong_ermj_achieve_req=} [properties] Properties to set
     * @returns {mahjong_ermj_achieve_req} mahjong_ermj_achieve_req instance
     */
    mahjong_ermj_achieve_req.create = function create(properties) {
        return new mahjong_ermj_achieve_req(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_achieve_req message. Does not implicitly {@link mahjong_ermj_achieve_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_achieve_req
     * @static
     * @param {Imahjong_ermj_achieve_req} message mahjong_ermj_achieve_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_achieve_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nType);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_achieve_req message, length delimited. Does not implicitly {@link mahjong_ermj_achieve_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_achieve_req
     * @static
     * @param {Imahjong_ermj_achieve_req} message mahjong_ermj_achieve_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_achieve_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_achieve_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_achieve_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_achieve_req} mahjong_ermj_achieve_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_achieve_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_achieve_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nChairId = reader.int32();
                break;
            case 2:
                message.nType = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nChairId"))
            throw $util.ProtocolError("missing required 'nChairId'", { instance: message });
        if (!message.hasOwnProperty("nType"))
            throw $util.ProtocolError("missing required 'nType'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_achieve_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_achieve_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_achieve_req} mahjong_ermj_achieve_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_achieve_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_achieve_req message.
     * @function verify
     * @memberof mahjong_ermj_achieve_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_achieve_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nChairId))
            return "nChairId: integer expected";
        if (!$util.isInteger(message.nType))
            return "nType: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_achieve_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_achieve_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_achieve_req} mahjong_ermj_achieve_req
     */
    mahjong_ermj_achieve_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_achieve_req)
            return object;
        var message = new $root.mahjong_ermj_achieve_req();
        if (object.nChairId != null)
            message.nChairId = object.nChairId | 0;
        if (object.nType != null)
            message.nType = object.nType | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_achieve_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_achieve_req
     * @static
     * @param {mahjong_ermj_achieve_req} message mahjong_ermj_achieve_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_achieve_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nChairId = 0;
            object.nType = 0;
        }
        if (message.nChairId != null && message.hasOwnProperty("nChairId"))
            object.nChairId = message.nChairId;
        if (message.nType != null && message.hasOwnProperty("nType"))
            object.nType = message.nType;
        return object;
    };

    /**
     * Converts this mahjong_ermj_achieve_req to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_achieve_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_achieve_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_achieve_req;
})();

$root.mahjong_ermj_readyting_not = (function() {

    /**
     * Properties of a mahjong_ermj_readyting_not.
     * @exports Imahjong_ermj_readyting_not
     * @interface Imahjong_ermj_readyting_not
     * @property {number} cChi mahjong_ermj_readyting_not cChi
     * @property {number} cPeng mahjong_ermj_readyting_not cPeng
     * @property {number} cCard mahjong_ermj_readyting_not cCard
     * @property {Array.<number>|null} [vecChiType] mahjong_ermj_readyting_not vecChiType
     */

    /**
     * Constructs a new mahjong_ermj_readyting_not.
     * @exports mahjong_ermj_readyting_not
     * @classdesc Represents a mahjong_ermj_readyting_not.
     * @implements Imahjong_ermj_readyting_not
     * @constructor
     * @param {Imahjong_ermj_readyting_not=} [properties] Properties to set
     */
    function mahjong_ermj_readyting_not(properties) {
        this.vecChiType = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_readyting_not cChi.
     * @member {number} cChi
     * @memberof mahjong_ermj_readyting_not
     * @instance
     */
    mahjong_ermj_readyting_not.prototype.cChi = 0;

    /**
     * mahjong_ermj_readyting_not cPeng.
     * @member {number} cPeng
     * @memberof mahjong_ermj_readyting_not
     * @instance
     */
    mahjong_ermj_readyting_not.prototype.cPeng = 0;

    /**
     * mahjong_ermj_readyting_not cCard.
     * @member {number} cCard
     * @memberof mahjong_ermj_readyting_not
     * @instance
     */
    mahjong_ermj_readyting_not.prototype.cCard = 0;

    /**
     * mahjong_ermj_readyting_not vecChiType.
     * @member {Array.<number>} vecChiType
     * @memberof mahjong_ermj_readyting_not
     * @instance
     */
    mahjong_ermj_readyting_not.prototype.vecChiType = $util.emptyArray;

    /**
     * Creates a new mahjong_ermj_readyting_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_readyting_not
     * @static
     * @param {Imahjong_ermj_readyting_not=} [properties] Properties to set
     * @returns {mahjong_ermj_readyting_not} mahjong_ermj_readyting_not instance
     */
    mahjong_ermj_readyting_not.create = function create(properties) {
        return new mahjong_ermj_readyting_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_readyting_not message. Does not implicitly {@link mahjong_ermj_readyting_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_readyting_not
     * @static
     * @param {Imahjong_ermj_readyting_not} message mahjong_ermj_readyting_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_readyting_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChi);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cPeng);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cCard);
        if (message.vecChiType != null && message.vecChiType.length)
            for (var i = 0; i < message.vecChiType.length; ++i)
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.vecChiType[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_readyting_not message, length delimited. Does not implicitly {@link mahjong_ermj_readyting_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_readyting_not
     * @static
     * @param {Imahjong_ermj_readyting_not} message mahjong_ermj_readyting_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_readyting_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_readyting_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_readyting_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_readyting_not} mahjong_ermj_readyting_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_readyting_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_readyting_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChi = reader.int32();
                break;
            case 2:
                message.cPeng = reader.int32();
                break;
            case 3:
                message.cCard = reader.int32();
                break;
            case 4:
                if (!(message.vecChiType && message.vecChiType.length))
                    message.vecChiType = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecChiType.push(reader.int32());
                } else
                    message.vecChiType.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChi"))
            throw $util.ProtocolError("missing required 'cChi'", { instance: message });
        if (!message.hasOwnProperty("cPeng"))
            throw $util.ProtocolError("missing required 'cPeng'", { instance: message });
        if (!message.hasOwnProperty("cCard"))
            throw $util.ProtocolError("missing required 'cCard'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_readyting_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_readyting_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_readyting_not} mahjong_ermj_readyting_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_readyting_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_readyting_not message.
     * @function verify
     * @memberof mahjong_ermj_readyting_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_readyting_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChi))
            return "cChi: integer expected";
        if (!$util.isInteger(message.cPeng))
            return "cPeng: integer expected";
        if (!$util.isInteger(message.cCard))
            return "cCard: integer expected";
        if (message.vecChiType != null && message.hasOwnProperty("vecChiType")) {
            if (!Array.isArray(message.vecChiType))
                return "vecChiType: array expected";
            for (var i = 0; i < message.vecChiType.length; ++i)
                if (!$util.isInteger(message.vecChiType[i]))
                    return "vecChiType: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_ermj_readyting_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_readyting_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_readyting_not} mahjong_ermj_readyting_not
     */
    mahjong_ermj_readyting_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_readyting_not)
            return object;
        var message = new $root.mahjong_ermj_readyting_not();
        if (object.cChi != null)
            message.cChi = object.cChi | 0;
        if (object.cPeng != null)
            message.cPeng = object.cPeng | 0;
        if (object.cCard != null)
            message.cCard = object.cCard | 0;
        if (object.vecChiType) {
            if (!Array.isArray(object.vecChiType))
                throw TypeError(".mahjong_ermj_readyting_not.vecChiType: array expected");
            message.vecChiType = [];
            for (var i = 0; i < object.vecChiType.length; ++i)
                message.vecChiType[i] = object.vecChiType[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_readyting_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_readyting_not
     * @static
     * @param {mahjong_ermj_readyting_not} message mahjong_ermj_readyting_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_readyting_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecChiType = [];
        if (options.defaults) {
            object.cChi = 0;
            object.cPeng = 0;
            object.cCard = 0;
        }
        if (message.cChi != null && message.hasOwnProperty("cChi"))
            object.cChi = message.cChi;
        if (message.cPeng != null && message.hasOwnProperty("cPeng"))
            object.cPeng = message.cPeng;
        if (message.cCard != null && message.hasOwnProperty("cCard"))
            object.cCard = message.cCard;
        if (message.vecChiType && message.vecChiType.length) {
            object.vecChiType = [];
            for (var j = 0; j < message.vecChiType.length; ++j)
                object.vecChiType[j] = message.vecChiType[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_ermj_readyting_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_readyting_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_readyting_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_readyting_not;
})();

$root.mahjong_ermj_task_complete_not = (function() {

    /**
     * Properties of a mahjong_ermj_task_complete_not.
     * @exports Imahjong_ermj_task_complete_not
     * @interface Imahjong_ermj_task_complete_not
     * @property {number} nRet mahjong_ermj_task_complete_not nRet
     * @property {number} unReachValue mahjong_ermj_task_complete_not unReachValue
     */

    /**
     * Constructs a new mahjong_ermj_task_complete_not.
     * @exports mahjong_ermj_task_complete_not
     * @classdesc Represents a mahjong_ermj_task_complete_not.
     * @implements Imahjong_ermj_task_complete_not
     * @constructor
     * @param {Imahjong_ermj_task_complete_not=} [properties] Properties to set
     */
    function mahjong_ermj_task_complete_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_task_complete_not nRet.
     * @member {number} nRet
     * @memberof mahjong_ermj_task_complete_not
     * @instance
     */
    mahjong_ermj_task_complete_not.prototype.nRet = 0;

    /**
     * mahjong_ermj_task_complete_not unReachValue.
     * @member {number} unReachValue
     * @memberof mahjong_ermj_task_complete_not
     * @instance
     */
    mahjong_ermj_task_complete_not.prototype.unReachValue = 0;

    /**
     * Creates a new mahjong_ermj_task_complete_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_task_complete_not
     * @static
     * @param {Imahjong_ermj_task_complete_not=} [properties] Properties to set
     * @returns {mahjong_ermj_task_complete_not} mahjong_ermj_task_complete_not instance
     */
    mahjong_ermj_task_complete_not.create = function create(properties) {
        return new mahjong_ermj_task_complete_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_task_complete_not message. Does not implicitly {@link mahjong_ermj_task_complete_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_task_complete_not
     * @static
     * @param {Imahjong_ermj_task_complete_not} message mahjong_ermj_task_complete_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_task_complete_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nRet);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.unReachValue);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_task_complete_not message, length delimited. Does not implicitly {@link mahjong_ermj_task_complete_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_task_complete_not
     * @static
     * @param {Imahjong_ermj_task_complete_not} message mahjong_ermj_task_complete_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_task_complete_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_task_complete_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_task_complete_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_task_complete_not} mahjong_ermj_task_complete_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_task_complete_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_task_complete_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nRet = reader.int32();
                break;
            case 2:
                message.unReachValue = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nRet"))
            throw $util.ProtocolError("missing required 'nRet'", { instance: message });
        if (!message.hasOwnProperty("unReachValue"))
            throw $util.ProtocolError("missing required 'unReachValue'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_task_complete_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_task_complete_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_task_complete_not} mahjong_ermj_task_complete_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_task_complete_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_task_complete_not message.
     * @function verify
     * @memberof mahjong_ermj_task_complete_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_task_complete_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nRet))
            return "nRet: integer expected";
        if (!$util.isInteger(message.unReachValue))
            return "unReachValue: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_task_complete_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_task_complete_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_task_complete_not} mahjong_ermj_task_complete_not
     */
    mahjong_ermj_task_complete_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_task_complete_not)
            return object;
        var message = new $root.mahjong_ermj_task_complete_not();
        if (object.nRet != null)
            message.nRet = object.nRet | 0;
        if (object.unReachValue != null)
            message.unReachValue = object.unReachValue | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_task_complete_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_task_complete_not
     * @static
     * @param {mahjong_ermj_task_complete_not} message mahjong_ermj_task_complete_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_task_complete_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nRet = 0;
            object.unReachValue = 0;
        }
        if (message.nRet != null && message.hasOwnProperty("nRet"))
            object.nRet = message.nRet;
        if (message.unReachValue != null && message.hasOwnProperty("unReachValue"))
            object.unReachValue = message.unReachValue;
        return object;
    };

    /**
     * Converts this mahjong_ermj_task_complete_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_task_complete_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_task_complete_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_task_complete_not;
})();

$root.mahjong_st_gameresult = (function() {

    /**
     * Properties of a mahjong_st_gameresult.
     * @exports Imahjong_st_gameresult
     * @interface Imahjong_st_gameresult
     * @property {number} cChairID mahjong_st_gameresult cChairID
     * @property {Array.<number>|null} [vecResult] mahjong_st_gameresult vecResult
     * @property {number} nScore mahjong_st_gameresult nScore
     * @property {number} nFan mahjong_st_gameresult nFan
     * @property {number} nAllScore mahjong_st_gameresult nAllScore
     * @property {number} cMingGangNum mahjong_st_gameresult cMingGangNum
     * @property {number} cAnGangNum mahjong_st_gameresult cAnGangNum
     * @property {number} cBuGangNum mahjong_st_gameresult cBuGangNum
     * @property {number} cDianGangNum mahjong_st_gameresult cDianGangNum
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
        this.vecResult = [];
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
     * mahjong_st_gameresult vecResult.
     * @member {Array.<number>} vecResult
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.vecResult = $util.emptyArray;

    /**
     * mahjong_st_gameresult nScore.
     * @member {number} nScore
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.nScore = 0;

    /**
     * mahjong_st_gameresult nFan.
     * @member {number} nFan
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.nFan = 0;

    /**
     * mahjong_st_gameresult nAllScore.
     * @member {number} nAllScore
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.nAllScore = 0;

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
     * mahjong_st_gameresult cDianGangNum.
     * @member {number} cDianGangNum
     * @memberof mahjong_st_gameresult
     * @instance
     */
    mahjong_st_gameresult.prototype.cDianGangNum = 0;

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
        if (message.vecResult != null && message.vecResult.length)
            for (var i = 0; i < message.vecResult.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.vecResult[i]);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nScore);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nFan);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nAllScore);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cMingGangNum);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.cAnGangNum);
        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.cBuGangNum);
        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.cDianGangNum);
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
                if (!(message.vecResult && message.vecResult.length))
                    message.vecResult = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecResult.push(reader.int32());
                } else
                    message.vecResult.push(reader.int32());
                break;
            case 3:
                message.nScore = reader.int32();
                break;
            case 4:
                message.nFan = reader.int32();
                break;
            case 5:
                message.nAllScore = reader.int32();
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
                message.cDianGangNum = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairID"))
            throw $util.ProtocolError("missing required 'cChairID'", { instance: message });
        if (!message.hasOwnProperty("nScore"))
            throw $util.ProtocolError("missing required 'nScore'", { instance: message });
        if (!message.hasOwnProperty("nFan"))
            throw $util.ProtocolError("missing required 'nFan'", { instance: message });
        if (!message.hasOwnProperty("nAllScore"))
            throw $util.ProtocolError("missing required 'nAllScore'", { instance: message });
        if (!message.hasOwnProperty("cMingGangNum"))
            throw $util.ProtocolError("missing required 'cMingGangNum'", { instance: message });
        if (!message.hasOwnProperty("cAnGangNum"))
            throw $util.ProtocolError("missing required 'cAnGangNum'", { instance: message });
        if (!message.hasOwnProperty("cBuGangNum"))
            throw $util.ProtocolError("missing required 'cBuGangNum'", { instance: message });
        if (!message.hasOwnProperty("cDianGangNum"))
            throw $util.ProtocolError("missing required 'cDianGangNum'", { instance: message });
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
        if (message.vecResult != null && message.hasOwnProperty("vecResult")) {
            if (!Array.isArray(message.vecResult))
                return "vecResult: array expected";
            for (var i = 0; i < message.vecResult.length; ++i)
                if (!$util.isInteger(message.vecResult[i]))
                    return "vecResult: integer[] expected";
        }
        if (!$util.isInteger(message.nScore))
            return "nScore: integer expected";
        if (!$util.isInteger(message.nFan))
            return "nFan: integer expected";
        if (!$util.isInteger(message.nAllScore))
            return "nAllScore: integer expected";
        if (!$util.isInteger(message.cMingGangNum))
            return "cMingGangNum: integer expected";
        if (!$util.isInteger(message.cAnGangNum))
            return "cAnGangNum: integer expected";
        if (!$util.isInteger(message.cBuGangNum))
            return "cBuGangNum: integer expected";
        if (!$util.isInteger(message.cDianGangNum))
            return "cDianGangNum: integer expected";
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
        if (object.vecResult) {
            if (!Array.isArray(object.vecResult))
                throw TypeError(".mahjong_st_gameresult.vecResult: array expected");
            message.vecResult = [];
            for (var i = 0; i < object.vecResult.length; ++i)
                message.vecResult[i] = object.vecResult[i] | 0;
        }
        if (object.nScore != null)
            message.nScore = object.nScore | 0;
        if (object.nFan != null)
            message.nFan = object.nFan | 0;
        if (object.nAllScore != null)
            message.nAllScore = object.nAllScore | 0;
        if (object.cMingGangNum != null)
            message.cMingGangNum = object.cMingGangNum | 0;
        if (object.cAnGangNum != null)
            message.cAnGangNum = object.cAnGangNum | 0;
        if (object.cBuGangNum != null)
            message.cBuGangNum = object.cBuGangNum | 0;
        if (object.cDianGangNum != null)
            message.cDianGangNum = object.cDianGangNum | 0;
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
        if (options.arrays || options.defaults)
            object.vecResult = [];
        if (options.defaults) {
            object.cChairID = 0;
            object.nScore = 0;
            object.nFan = 0;
            object.nAllScore = 0;
            object.cMingGangNum = 0;
            object.cAnGangNum = 0;
            object.cBuGangNum = 0;
            object.cDianGangNum = 0;
        }
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.vecResult && message.vecResult.length) {
            object.vecResult = [];
            for (var j = 0; j < message.vecResult.length; ++j)
                object.vecResult[j] = message.vecResult[j];
        }
        if (message.nScore != null && message.hasOwnProperty("nScore"))
            object.nScore = message.nScore;
        if (message.nFan != null && message.hasOwnProperty("nFan"))
            object.nFan = message.nFan;
        if (message.nAllScore != null && message.hasOwnProperty("nAllScore"))
            object.nAllScore = message.nAllScore;
        if (message.cMingGangNum != null && message.hasOwnProperty("cMingGangNum"))
            object.cMingGangNum = message.cMingGangNum;
        if (message.cAnGangNum != null && message.hasOwnProperty("cAnGangNum"))
            object.cAnGangNum = message.cAnGangNum;
        if (message.cBuGangNum != null && message.hasOwnProperty("cBuGangNum"))
            object.cBuGangNum = message.cBuGangNum;
        if (message.cDianGangNum != null && message.hasOwnProperty("cDianGangNum"))
            object.cDianGangNum = message.cDianGangNum;
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

$root.mahjong_ermj_svr_dizhu_not = (function() {

    /**
     * Properties of a mahjong_ermj_svr_dizhu_not.
     * @exports Imahjong_ermj_svr_dizhu_not
     * @interface Imahjong_ermj_svr_dizhu_not
     * @property {number} nDiZhu mahjong_ermj_svr_dizhu_not nDiZhu
     */

    /**
     * Constructs a new mahjong_ermj_svr_dizhu_not.
     * @exports mahjong_ermj_svr_dizhu_not
     * @classdesc Represents a mahjong_ermj_svr_dizhu_not.
     * @implements Imahjong_ermj_svr_dizhu_not
     * @constructor
     * @param {Imahjong_ermj_svr_dizhu_not=} [properties] Properties to set
     */
    function mahjong_ermj_svr_dizhu_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_svr_dizhu_not nDiZhu.
     * @member {number} nDiZhu
     * @memberof mahjong_ermj_svr_dizhu_not
     * @instance
     */
    mahjong_ermj_svr_dizhu_not.prototype.nDiZhu = 0;

    /**
     * Creates a new mahjong_ermj_svr_dizhu_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_svr_dizhu_not
     * @static
     * @param {Imahjong_ermj_svr_dizhu_not=} [properties] Properties to set
     * @returns {mahjong_ermj_svr_dizhu_not} mahjong_ermj_svr_dizhu_not instance
     */
    mahjong_ermj_svr_dizhu_not.create = function create(properties) {
        return new mahjong_ermj_svr_dizhu_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_svr_dizhu_not message. Does not implicitly {@link mahjong_ermj_svr_dizhu_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_svr_dizhu_not
     * @static
     * @param {Imahjong_ermj_svr_dizhu_not} message mahjong_ermj_svr_dizhu_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_svr_dizhu_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nDiZhu);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_svr_dizhu_not message, length delimited. Does not implicitly {@link mahjong_ermj_svr_dizhu_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_svr_dizhu_not
     * @static
     * @param {Imahjong_ermj_svr_dizhu_not} message mahjong_ermj_svr_dizhu_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_svr_dizhu_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_svr_dizhu_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_svr_dizhu_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_svr_dizhu_not} mahjong_ermj_svr_dizhu_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_svr_dizhu_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_svr_dizhu_not();
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
     * Decodes a mahjong_ermj_svr_dizhu_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_svr_dizhu_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_svr_dizhu_not} mahjong_ermj_svr_dizhu_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_svr_dizhu_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_svr_dizhu_not message.
     * @function verify
     * @memberof mahjong_ermj_svr_dizhu_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_svr_dizhu_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nDiZhu))
            return "nDiZhu: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_svr_dizhu_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_svr_dizhu_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_svr_dizhu_not} mahjong_ermj_svr_dizhu_not
     */
    mahjong_ermj_svr_dizhu_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_svr_dizhu_not)
            return object;
        var message = new $root.mahjong_ermj_svr_dizhu_not();
        if (object.nDiZhu != null)
            message.nDiZhu = object.nDiZhu | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_svr_dizhu_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_svr_dizhu_not
     * @static
     * @param {mahjong_ermj_svr_dizhu_not} message mahjong_ermj_svr_dizhu_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_svr_dizhu_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_ermj_svr_dizhu_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_svr_dizhu_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_svr_dizhu_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_svr_dizhu_not;
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

$root.mahjong_ermj_playcard_req_new = (function() {

    /**
     * Properties of a mahjong_ermj_playcard_req_new.
     * @exports Imahjong_ermj_playcard_req_new
     * @interface Imahjong_ermj_playcard_req_new
     * @property {number} cChairID mahjong_ermj_playcard_req_new cChairID
     * @property {number} nOpcode mahjong_ermj_playcard_req_new nOpcode
     * @property {number} cPrevCard mahjong_ermj_playcard_req_new cPrevCard
     * @property {Array.<number>|null} [vecTingPutCards] mahjong_ermj_playcard_req_new vecTingPutCards
     * @property {Array.<number>|null} [vecTingHuCards] mahjong_ermj_playcard_req_new vecTingHuCards
     * @property {Array.<Imahjong_gang_info>|null} [vecGangInfo] mahjong_ermj_playcard_req_new vecGangInfo
     * @property {number} sSerialID mahjong_ermj_playcard_req_new sSerialID
     */

    /**
     * Constructs a new mahjong_ermj_playcard_req_new.
     * @exports mahjong_ermj_playcard_req_new
     * @classdesc Represents a mahjong_ermj_playcard_req_new.
     * @implements Imahjong_ermj_playcard_req_new
     * @constructor
     * @param {Imahjong_ermj_playcard_req_new=} [properties] Properties to set
     */
    function mahjong_ermj_playcard_req_new(properties) {
        this.vecTingPutCards = [];
        this.vecTingHuCards = [];
        this.vecGangInfo = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_playcard_req_new cChairID.
     * @member {number} cChairID
     * @memberof mahjong_ermj_playcard_req_new
     * @instance
     */
    mahjong_ermj_playcard_req_new.prototype.cChairID = 0;

    /**
     * mahjong_ermj_playcard_req_new nOpcode.
     * @member {number} nOpcode
     * @memberof mahjong_ermj_playcard_req_new
     * @instance
     */
    mahjong_ermj_playcard_req_new.prototype.nOpcode = 0;

    /**
     * mahjong_ermj_playcard_req_new cPrevCard.
     * @member {number} cPrevCard
     * @memberof mahjong_ermj_playcard_req_new
     * @instance
     */
    mahjong_ermj_playcard_req_new.prototype.cPrevCard = 0;

    /**
     * mahjong_ermj_playcard_req_new vecTingPutCards.
     * @member {Array.<number>} vecTingPutCards
     * @memberof mahjong_ermj_playcard_req_new
     * @instance
     */
    mahjong_ermj_playcard_req_new.prototype.vecTingPutCards = $util.emptyArray;

    /**
     * mahjong_ermj_playcard_req_new vecTingHuCards.
     * @member {Array.<number>} vecTingHuCards
     * @memberof mahjong_ermj_playcard_req_new
     * @instance
     */
    mahjong_ermj_playcard_req_new.prototype.vecTingHuCards = $util.emptyArray;

    /**
     * mahjong_ermj_playcard_req_new vecGangInfo.
     * @member {Array.<Imahjong_gang_info>} vecGangInfo
     * @memberof mahjong_ermj_playcard_req_new
     * @instance
     */
    mahjong_ermj_playcard_req_new.prototype.vecGangInfo = $util.emptyArray;

    /**
     * mahjong_ermj_playcard_req_new sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_ermj_playcard_req_new
     * @instance
     */
    mahjong_ermj_playcard_req_new.prototype.sSerialID = 0;

    /**
     * Creates a new mahjong_ermj_playcard_req_new instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_playcard_req_new
     * @static
     * @param {Imahjong_ermj_playcard_req_new=} [properties] Properties to set
     * @returns {mahjong_ermj_playcard_req_new} mahjong_ermj_playcard_req_new instance
     */
    mahjong_ermj_playcard_req_new.create = function create(properties) {
        return new mahjong_ermj_playcard_req_new(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_playcard_req_new message. Does not implicitly {@link mahjong_ermj_playcard_req_new.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_playcard_req_new
     * @static
     * @param {Imahjong_ermj_playcard_req_new} message mahjong_ermj_playcard_req_new message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_playcard_req_new.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nOpcode);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cPrevCard);
        if (message.vecTingPutCards != null && message.vecTingPutCards.length)
            for (var i = 0; i < message.vecTingPutCards.length; ++i)
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.vecTingPutCards[i]);
        if (message.vecTingHuCards != null && message.vecTingHuCards.length)
            for (var i = 0; i < message.vecTingHuCards.length; ++i)
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.vecTingHuCards[i]);
        if (message.vecGangInfo != null && message.vecGangInfo.length)
            for (var i = 0; i < message.vecGangInfo.length; ++i)
                $root.mahjong_gang_info.encode(message.vecGangInfo[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.sSerialID);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_playcard_req_new message, length delimited. Does not implicitly {@link mahjong_ermj_playcard_req_new.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_playcard_req_new
     * @static
     * @param {Imahjong_ermj_playcard_req_new} message mahjong_ermj_playcard_req_new message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_playcard_req_new.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_playcard_req_new message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_playcard_req_new
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_playcard_req_new} mahjong_ermj_playcard_req_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_playcard_req_new.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_playcard_req_new();
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
                if (!(message.vecGangInfo && message.vecGangInfo.length))
                    message.vecGangInfo = [];
                message.vecGangInfo.push($root.mahjong_gang_info.decode(reader, reader.uint32()));
                break;
            case 7:
                message.sSerialID = reader.int32();
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
        if (!message.hasOwnProperty("cPrevCard"))
            throw $util.ProtocolError("missing required 'cPrevCard'", { instance: message });
        if (!message.hasOwnProperty("sSerialID"))
            throw $util.ProtocolError("missing required 'sSerialID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_playcard_req_new message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_playcard_req_new
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_playcard_req_new} mahjong_ermj_playcard_req_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_playcard_req_new.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_playcard_req_new message.
     * @function verify
     * @memberof mahjong_ermj_playcard_req_new
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_playcard_req_new.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
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
        if (message.vecGangInfo != null && message.hasOwnProperty("vecGangInfo")) {
            if (!Array.isArray(message.vecGangInfo))
                return "vecGangInfo: array expected";
            for (var i = 0; i < message.vecGangInfo.length; ++i) {
                var error = $root.mahjong_gang_info.verify(message.vecGangInfo[i]);
                if (error)
                    return "vecGangInfo." + error;
            }
        }
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_playcard_req_new message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_playcard_req_new
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_playcard_req_new} mahjong_ermj_playcard_req_new
     */
    mahjong_ermj_playcard_req_new.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_playcard_req_new)
            return object;
        var message = new $root.mahjong_ermj_playcard_req_new();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.nOpcode != null)
            message.nOpcode = object.nOpcode | 0;
        if (object.cPrevCard != null)
            message.cPrevCard = object.cPrevCard | 0;
        if (object.vecTingPutCards) {
            if (!Array.isArray(object.vecTingPutCards))
                throw TypeError(".mahjong_ermj_playcard_req_new.vecTingPutCards: array expected");
            message.vecTingPutCards = [];
            for (var i = 0; i < object.vecTingPutCards.length; ++i)
                message.vecTingPutCards[i] = object.vecTingPutCards[i] | 0;
        }
        if (object.vecTingHuCards) {
            if (!Array.isArray(object.vecTingHuCards))
                throw TypeError(".mahjong_ermj_playcard_req_new.vecTingHuCards: array expected");
            message.vecTingHuCards = [];
            for (var i = 0; i < object.vecTingHuCards.length; ++i)
                message.vecTingHuCards[i] = object.vecTingHuCards[i] | 0;
        }
        if (object.vecGangInfo) {
            if (!Array.isArray(object.vecGangInfo))
                throw TypeError(".mahjong_ermj_playcard_req_new.vecGangInfo: array expected");
            message.vecGangInfo = [];
            for (var i = 0; i < object.vecGangInfo.length; ++i) {
                if (typeof object.vecGangInfo[i] !== "object")
                    throw TypeError(".mahjong_ermj_playcard_req_new.vecGangInfo: object expected");
                message.vecGangInfo[i] = $root.mahjong_gang_info.fromObject(object.vecGangInfo[i]);
            }
        }
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_playcard_req_new message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_playcard_req_new
     * @static
     * @param {mahjong_ermj_playcard_req_new} message mahjong_ermj_playcard_req_new
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_playcard_req_new.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecTingPutCards = [];
            object.vecTingHuCards = [];
            object.vecGangInfo = [];
        }
        if (options.defaults) {
            object.cChairID = 0;
            object.nOpcode = 0;
            object.cPrevCard = 0;
            object.sSerialID = 0;
        }
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
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
        if (message.vecGangInfo && message.vecGangInfo.length) {
            object.vecGangInfo = [];
            for (var j = 0; j < message.vecGangInfo.length; ++j)
                object.vecGangInfo[j] = $root.mahjong_gang_info.toObject(message.vecGangInfo[j], options);
        }
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        return object;
    };

    /**
     * Converts this mahjong_ermj_playcard_req_new to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_playcard_req_new
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_playcard_req_new.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_playcard_req_new;
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

$root.mahjong_ermj_visi_compdata_not = (function() {

    /**
     * Properties of a mahjong_ermj_visi_compdata_not.
     * @exports Imahjong_ermj_visi_compdata_not
     * @interface Imahjong_ermj_visi_compdata_not
     * @property {number} cBanker mahjong_ermj_visi_compdata_not cBanker
     * @property {number} nLeftCards mahjong_ermj_visi_compdata_not nLeftCards
     * @property {number} nDizhu mahjong_ermj_visi_compdata_not nDizhu
     * @property {number} nTaifei mahjong_ermj_visi_compdata_not nTaifei
     * @property {number} cCurrPly mahjong_ermj_visi_compdata_not cCurrPly
     * @property {number} cPrioPly mahjong_ermj_visi_compdata_not cPrioPly
     * @property {number} cAdminPly mahjong_ermj_visi_compdata_not cAdminPly
     * @property {number} cInvitePly mahjong_ermj_visi_compdata_not cInvitePly
     * @property {Array.<Imahjong_ermj_changecard_not>|null} [vecPlyData] mahjong_ermj_visi_compdata_not vecPlyData
     * @property {Array.<number>|null} [vecTingPly] mahjong_ermj_visi_compdata_not vecTingPly
     * @property {Array.<number>|null} [vecHuaNum] mahjong_ermj_visi_compdata_not vecHuaNum
     * @property {number} nParam1 mahjong_ermj_visi_compdata_not nParam1
     * @property {number} nParam2 mahjong_ermj_visi_compdata_not nParam2
     * @property {string} strParam1 mahjong_ermj_visi_compdata_not strParam1
     * @property {string} strParam2 mahjong_ermj_visi_compdata_not strParam2
     */

    /**
     * Constructs a new mahjong_ermj_visi_compdata_not.
     * @exports mahjong_ermj_visi_compdata_not
     * @classdesc Represents a mahjong_ermj_visi_compdata_not.
     * @implements Imahjong_ermj_visi_compdata_not
     * @constructor
     * @param {Imahjong_ermj_visi_compdata_not=} [properties] Properties to set
     */
    function mahjong_ermj_visi_compdata_not(properties) {
        this.vecPlyData = [];
        this.vecTingPly = [];
        this.vecHuaNum = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_visi_compdata_not cBanker.
     * @member {number} cBanker
     * @memberof mahjong_ermj_visi_compdata_not
     * @instance
     */
    mahjong_ermj_visi_compdata_not.prototype.cBanker = 0;

    /**
     * mahjong_ermj_visi_compdata_not nLeftCards.
     * @member {number} nLeftCards
     * @memberof mahjong_ermj_visi_compdata_not
     * @instance
     */
    mahjong_ermj_visi_compdata_not.prototype.nLeftCards = 0;

    /**
     * mahjong_ermj_visi_compdata_not nDizhu.
     * @member {number} nDizhu
     * @memberof mahjong_ermj_visi_compdata_not
     * @instance
     */
    mahjong_ermj_visi_compdata_not.prototype.nDizhu = 0;

    /**
     * mahjong_ermj_visi_compdata_not nTaifei.
     * @member {number} nTaifei
     * @memberof mahjong_ermj_visi_compdata_not
     * @instance
     */
    mahjong_ermj_visi_compdata_not.prototype.nTaifei = 0;

    /**
     * mahjong_ermj_visi_compdata_not cCurrPly.
     * @member {number} cCurrPly
     * @memberof mahjong_ermj_visi_compdata_not
     * @instance
     */
    mahjong_ermj_visi_compdata_not.prototype.cCurrPly = 0;

    /**
     * mahjong_ermj_visi_compdata_not cPrioPly.
     * @member {number} cPrioPly
     * @memberof mahjong_ermj_visi_compdata_not
     * @instance
     */
    mahjong_ermj_visi_compdata_not.prototype.cPrioPly = 0;

    /**
     * mahjong_ermj_visi_compdata_not cAdminPly.
     * @member {number} cAdminPly
     * @memberof mahjong_ermj_visi_compdata_not
     * @instance
     */
    mahjong_ermj_visi_compdata_not.prototype.cAdminPly = 0;

    /**
     * mahjong_ermj_visi_compdata_not cInvitePly.
     * @member {number} cInvitePly
     * @memberof mahjong_ermj_visi_compdata_not
     * @instance
     */
    mahjong_ermj_visi_compdata_not.prototype.cInvitePly = 0;

    /**
     * mahjong_ermj_visi_compdata_not vecPlyData.
     * @member {Array.<Imahjong_ermj_changecard_not>} vecPlyData
     * @memberof mahjong_ermj_visi_compdata_not
     * @instance
     */
    mahjong_ermj_visi_compdata_not.prototype.vecPlyData = $util.emptyArray;

    /**
     * mahjong_ermj_visi_compdata_not vecTingPly.
     * @member {Array.<number>} vecTingPly
     * @memberof mahjong_ermj_visi_compdata_not
     * @instance
     */
    mahjong_ermj_visi_compdata_not.prototype.vecTingPly = $util.emptyArray;

    /**
     * mahjong_ermj_visi_compdata_not vecHuaNum.
     * @member {Array.<number>} vecHuaNum
     * @memberof mahjong_ermj_visi_compdata_not
     * @instance
     */
    mahjong_ermj_visi_compdata_not.prototype.vecHuaNum = $util.emptyArray;

    /**
     * mahjong_ermj_visi_compdata_not nParam1.
     * @member {number} nParam1
     * @memberof mahjong_ermj_visi_compdata_not
     * @instance
     */
    mahjong_ermj_visi_compdata_not.prototype.nParam1 = 0;

    /**
     * mahjong_ermj_visi_compdata_not nParam2.
     * @member {number} nParam2
     * @memberof mahjong_ermj_visi_compdata_not
     * @instance
     */
    mahjong_ermj_visi_compdata_not.prototype.nParam2 = 0;

    /**
     * mahjong_ermj_visi_compdata_not strParam1.
     * @member {string} strParam1
     * @memberof mahjong_ermj_visi_compdata_not
     * @instance
     */
    mahjong_ermj_visi_compdata_not.prototype.strParam1 = "";

    /**
     * mahjong_ermj_visi_compdata_not strParam2.
     * @member {string} strParam2
     * @memberof mahjong_ermj_visi_compdata_not
     * @instance
     */
    mahjong_ermj_visi_compdata_not.prototype.strParam2 = "";

    /**
     * Creates a new mahjong_ermj_visi_compdata_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_visi_compdata_not
     * @static
     * @param {Imahjong_ermj_visi_compdata_not=} [properties] Properties to set
     * @returns {mahjong_ermj_visi_compdata_not} mahjong_ermj_visi_compdata_not instance
     */
    mahjong_ermj_visi_compdata_not.create = function create(properties) {
        return new mahjong_ermj_visi_compdata_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_visi_compdata_not message. Does not implicitly {@link mahjong_ermj_visi_compdata_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_visi_compdata_not
     * @static
     * @param {Imahjong_ermj_visi_compdata_not} message mahjong_ermj_visi_compdata_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_visi_compdata_not.encode = function encode(message, writer) {
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
        if (message.vecPlyData != null && message.vecPlyData.length)
            for (var i = 0; i < message.vecPlyData.length; ++i)
                $root.mahjong_ermj_changecard_not.encode(message.vecPlyData[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.vecTingPly != null && message.vecTingPly.length)
            for (var i = 0; i < message.vecTingPly.length; ++i)
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.vecTingPly[i]);
        if (message.vecHuaNum != null && message.vecHuaNum.length)
            for (var i = 0; i < message.vecHuaNum.length; ++i)
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.vecHuaNum[i]);
        writer.uint32(/* id 12, wireType 0 =*/96).int32(message.nParam1);
        writer.uint32(/* id 13, wireType 0 =*/104).int32(message.nParam2);
        writer.uint32(/* id 14, wireType 2 =*/114).string(message.strParam1);
        writer.uint32(/* id 15, wireType 2 =*/122).string(message.strParam2);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_visi_compdata_not message, length delimited. Does not implicitly {@link mahjong_ermj_visi_compdata_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_visi_compdata_not
     * @static
     * @param {Imahjong_ermj_visi_compdata_not} message mahjong_ermj_visi_compdata_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_visi_compdata_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_visi_compdata_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_visi_compdata_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_visi_compdata_not} mahjong_ermj_visi_compdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_visi_compdata_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_visi_compdata_not();
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
                if (!(message.vecPlyData && message.vecPlyData.length))
                    message.vecPlyData = [];
                message.vecPlyData.push($root.mahjong_ermj_changecard_not.decode(reader, reader.uint32()));
                break;
            case 10:
                if (!(message.vecTingPly && message.vecTingPly.length))
                    message.vecTingPly = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecTingPly.push(reader.int32());
                } else
                    message.vecTingPly.push(reader.int32());
                break;
            case 11:
                if (!(message.vecHuaNum && message.vecHuaNum.length))
                    message.vecHuaNum = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecHuaNum.push(reader.int32());
                } else
                    message.vecHuaNum.push(reader.int32());
                break;
            case 12:
                message.nParam1 = reader.int32();
                break;
            case 13:
                message.nParam2 = reader.int32();
                break;
            case 14:
                message.strParam1 = reader.string();
                break;
            case 15:
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
     * Decodes a mahjong_ermj_visi_compdata_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_visi_compdata_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_visi_compdata_not} mahjong_ermj_visi_compdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_visi_compdata_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_visi_compdata_not message.
     * @function verify
     * @memberof mahjong_ermj_visi_compdata_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_visi_compdata_not.verify = function verify(message) {
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
        if (message.vecPlyData != null && message.hasOwnProperty("vecPlyData")) {
            if (!Array.isArray(message.vecPlyData))
                return "vecPlyData: array expected";
            for (var i = 0; i < message.vecPlyData.length; ++i) {
                var error = $root.mahjong_ermj_changecard_not.verify(message.vecPlyData[i]);
                if (error)
                    return "vecPlyData." + error;
            }
        }
        if (message.vecTingPly != null && message.hasOwnProperty("vecTingPly")) {
            if (!Array.isArray(message.vecTingPly))
                return "vecTingPly: array expected";
            for (var i = 0; i < message.vecTingPly.length; ++i)
                if (!$util.isInteger(message.vecTingPly[i]))
                    return "vecTingPly: integer[] expected";
        }
        if (message.vecHuaNum != null && message.hasOwnProperty("vecHuaNum")) {
            if (!Array.isArray(message.vecHuaNum))
                return "vecHuaNum: array expected";
            for (var i = 0; i < message.vecHuaNum.length; ++i)
                if (!$util.isInteger(message.vecHuaNum[i]))
                    return "vecHuaNum: integer[] expected";
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
     * Creates a mahjong_ermj_visi_compdata_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_visi_compdata_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_visi_compdata_not} mahjong_ermj_visi_compdata_not
     */
    mahjong_ermj_visi_compdata_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_visi_compdata_not)
            return object;
        var message = new $root.mahjong_ermj_visi_compdata_not();
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
        if (object.vecPlyData) {
            if (!Array.isArray(object.vecPlyData))
                throw TypeError(".mahjong_ermj_visi_compdata_not.vecPlyData: array expected");
            message.vecPlyData = [];
            for (var i = 0; i < object.vecPlyData.length; ++i) {
                if (typeof object.vecPlyData[i] !== "object")
                    throw TypeError(".mahjong_ermj_visi_compdata_not.vecPlyData: object expected");
                message.vecPlyData[i] = $root.mahjong_ermj_changecard_not.fromObject(object.vecPlyData[i]);
            }
        }
        if (object.vecTingPly) {
            if (!Array.isArray(object.vecTingPly))
                throw TypeError(".mahjong_ermj_visi_compdata_not.vecTingPly: array expected");
            message.vecTingPly = [];
            for (var i = 0; i < object.vecTingPly.length; ++i)
                message.vecTingPly[i] = object.vecTingPly[i] | 0;
        }
        if (object.vecHuaNum) {
            if (!Array.isArray(object.vecHuaNum))
                throw TypeError(".mahjong_ermj_visi_compdata_not.vecHuaNum: array expected");
            message.vecHuaNum = [];
            for (var i = 0; i < object.vecHuaNum.length; ++i)
                message.vecHuaNum[i] = object.vecHuaNum[i] | 0;
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
     * Creates a plain object from a mahjong_ermj_visi_compdata_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_visi_compdata_not
     * @static
     * @param {mahjong_ermj_visi_compdata_not} message mahjong_ermj_visi_compdata_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_visi_compdata_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecPlyData = [];
            object.vecTingPly = [];
            object.vecHuaNum = [];
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
        if (message.vecPlyData && message.vecPlyData.length) {
            object.vecPlyData = [];
            for (var j = 0; j < message.vecPlyData.length; ++j)
                object.vecPlyData[j] = $root.mahjong_ermj_changecard_not.toObject(message.vecPlyData[j], options);
        }
        if (message.vecTingPly && message.vecTingPly.length) {
            object.vecTingPly = [];
            for (var j = 0; j < message.vecTingPly.length; ++j)
                object.vecTingPly[j] = message.vecTingPly[j];
        }
        if (message.vecHuaNum && message.vecHuaNum.length) {
            object.vecHuaNum = [];
            for (var j = 0; j < message.vecHuaNum.length; ++j)
                object.vecHuaNum[j] = message.vecHuaNum[j];
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
     * Converts this mahjong_ermj_visi_compdata_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_visi_compdata_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_visi_compdata_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_visi_compdata_not;
})();

$root.mahjong_ermj_gc_clienttimer_not = (function() {

    /**
     * Properties of a mahjong_ermj_gc_clienttimer_not.
     * @exports Imahjong_ermj_gc_clienttimer_not
     * @interface Imahjong_ermj_gc_clienttimer_not
     * @property {number} chairId mahjong_ermj_gc_clienttimer_not chairId
     * @property {number} sPeriod mahjong_ermj_gc_clienttimer_not sPeriod
     */

    /**
     * Constructs a new mahjong_ermj_gc_clienttimer_not.
     * @exports mahjong_ermj_gc_clienttimer_not
     * @classdesc Represents a mahjong_ermj_gc_clienttimer_not.
     * @implements Imahjong_ermj_gc_clienttimer_not
     * @constructor
     * @param {Imahjong_ermj_gc_clienttimer_not=} [properties] Properties to set
     */
    function mahjong_ermj_gc_clienttimer_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_gc_clienttimer_not chairId.
     * @member {number} chairId
     * @memberof mahjong_ermj_gc_clienttimer_not
     * @instance
     */
    mahjong_ermj_gc_clienttimer_not.prototype.chairId = 0;

    /**
     * mahjong_ermj_gc_clienttimer_not sPeriod.
     * @member {number} sPeriod
     * @memberof mahjong_ermj_gc_clienttimer_not
     * @instance
     */
    mahjong_ermj_gc_clienttimer_not.prototype.sPeriod = 0;

    /**
     * Creates a new mahjong_ermj_gc_clienttimer_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_gc_clienttimer_not
     * @static
     * @param {Imahjong_ermj_gc_clienttimer_not=} [properties] Properties to set
     * @returns {mahjong_ermj_gc_clienttimer_not} mahjong_ermj_gc_clienttimer_not instance
     */
    mahjong_ermj_gc_clienttimer_not.create = function create(properties) {
        return new mahjong_ermj_gc_clienttimer_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_gc_clienttimer_not message. Does not implicitly {@link mahjong_ermj_gc_clienttimer_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_gc_clienttimer_not
     * @static
     * @param {Imahjong_ermj_gc_clienttimer_not} message mahjong_ermj_gc_clienttimer_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_gc_clienttimer_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sPeriod);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_gc_clienttimer_not message, length delimited. Does not implicitly {@link mahjong_ermj_gc_clienttimer_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_gc_clienttimer_not
     * @static
     * @param {Imahjong_ermj_gc_clienttimer_not} message mahjong_ermj_gc_clienttimer_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_gc_clienttimer_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_gc_clienttimer_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_gc_clienttimer_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_gc_clienttimer_not} mahjong_ermj_gc_clienttimer_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_gc_clienttimer_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_gc_clienttimer_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.chairId = reader.int32();
                break;
            case 2:
                message.sPeriod = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("chairId"))
            throw $util.ProtocolError("missing required 'chairId'", { instance: message });
        if (!message.hasOwnProperty("sPeriod"))
            throw $util.ProtocolError("missing required 'sPeriod'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_gc_clienttimer_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_gc_clienttimer_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_gc_clienttimer_not} mahjong_ermj_gc_clienttimer_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_gc_clienttimer_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_gc_clienttimer_not message.
     * @function verify
     * @memberof mahjong_ermj_gc_clienttimer_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_gc_clienttimer_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.chairId))
            return "chairId: integer expected";
        if (!$util.isInteger(message.sPeriod))
            return "sPeriod: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_gc_clienttimer_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_gc_clienttimer_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_gc_clienttimer_not} mahjong_ermj_gc_clienttimer_not
     */
    mahjong_ermj_gc_clienttimer_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_gc_clienttimer_not)
            return object;
        var message = new $root.mahjong_ermj_gc_clienttimer_not();
        if (object.chairId != null)
            message.chairId = object.chairId | 0;
        if (object.sPeriod != null)
            message.sPeriod = object.sPeriod | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_gc_clienttimer_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_gc_clienttimer_not
     * @static
     * @param {mahjong_ermj_gc_clienttimer_not} message mahjong_ermj_gc_clienttimer_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_gc_clienttimer_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.chairId = 0;
            object.sPeriod = 0;
        }
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            object.chairId = message.chairId;
        if (message.sPeriod != null && message.hasOwnProperty("sPeriod"))
            object.sPeriod = message.sPeriod;
        return object;
    };

    /**
     * Converts this mahjong_ermj_gc_clienttimer_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_gc_clienttimer_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_gc_clienttimer_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_gc_clienttimer_not;
})();

$root.mahjong_ermj_gameresult_not_jj = (function() {

    /**
     * Properties of a mahjong_ermj_gameresult_not_jj.
     * @exports Imahjong_ermj_gameresult_not_jj
     * @interface Imahjong_ermj_gameresult_not_jj
     * @property {number} cWinChairID mahjong_ermj_gameresult_not_jj cWinChairID
     * @property {Array.<Imahjong_st_gameresult>|null} [vecGameResult] mahjong_ermj_gameresult_not_jj vecGameResult
     * @property {number} cType mahjong_ermj_gameresult_not_jj cType
     * @property {number} nBei mahjong_ermj_gameresult_not_jj nBei
     * @property {number} nHua mahjong_ermj_gameresult_not_jj nHua
     * @property {number} nBanker mahjong_ermj_gameresult_not_jj nBanker
     * @property {number} nHuDouble mahjong_ermj_gameresult_not_jj nHuDouble
     * @property {number} nMingRatio mahjong_ermj_gameresult_not_jj nMingRatio
     * @property {number} nTaskRatio mahjong_ermj_gameresult_not_jj nTaskRatio
     * @property {number} nBaopaiRatio mahjong_ermj_gameresult_not_jj nBaopaiRatio
     * @property {number} nAwardAll mahjong_ermj_gameresult_not_jj nAwardAll
     * @property {Array.<Imahjong_fan_award_data>|null} [vecFanAward] mahjong_ermj_gameresult_not_jj vecFanAward
     */

    /**
     * Constructs a new mahjong_ermj_gameresult_not_jj.
     * @exports mahjong_ermj_gameresult_not_jj
     * @classdesc Represents a mahjong_ermj_gameresult_not_jj.
     * @implements Imahjong_ermj_gameresult_not_jj
     * @constructor
     * @param {Imahjong_ermj_gameresult_not_jj=} [properties] Properties to set
     */
    function mahjong_ermj_gameresult_not_jj(properties) {
        this.vecGameResult = [];
        this.vecFanAward = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_gameresult_not_jj cWinChairID.
     * @member {number} cWinChairID
     * @memberof mahjong_ermj_gameresult_not_jj
     * @instance
     */
    mahjong_ermj_gameresult_not_jj.prototype.cWinChairID = 0;

    /**
     * mahjong_ermj_gameresult_not_jj vecGameResult.
     * @member {Array.<Imahjong_st_gameresult>} vecGameResult
     * @memberof mahjong_ermj_gameresult_not_jj
     * @instance
     */
    mahjong_ermj_gameresult_not_jj.prototype.vecGameResult = $util.emptyArray;

    /**
     * mahjong_ermj_gameresult_not_jj cType.
     * @member {number} cType
     * @memberof mahjong_ermj_gameresult_not_jj
     * @instance
     */
    mahjong_ermj_gameresult_not_jj.prototype.cType = 0;

    /**
     * mahjong_ermj_gameresult_not_jj nBei.
     * @member {number} nBei
     * @memberof mahjong_ermj_gameresult_not_jj
     * @instance
     */
    mahjong_ermj_gameresult_not_jj.prototype.nBei = 0;

    /**
     * mahjong_ermj_gameresult_not_jj nHua.
     * @member {number} nHua
     * @memberof mahjong_ermj_gameresult_not_jj
     * @instance
     */
    mahjong_ermj_gameresult_not_jj.prototype.nHua = 0;

    /**
     * mahjong_ermj_gameresult_not_jj nBanker.
     * @member {number} nBanker
     * @memberof mahjong_ermj_gameresult_not_jj
     * @instance
     */
    mahjong_ermj_gameresult_not_jj.prototype.nBanker = 0;

    /**
     * mahjong_ermj_gameresult_not_jj nHuDouble.
     * @member {number} nHuDouble
     * @memberof mahjong_ermj_gameresult_not_jj
     * @instance
     */
    mahjong_ermj_gameresult_not_jj.prototype.nHuDouble = 0;

    /**
     * mahjong_ermj_gameresult_not_jj nMingRatio.
     * @member {number} nMingRatio
     * @memberof mahjong_ermj_gameresult_not_jj
     * @instance
     */
    mahjong_ermj_gameresult_not_jj.prototype.nMingRatio = 0;

    /**
     * mahjong_ermj_gameresult_not_jj nTaskRatio.
     * @member {number} nTaskRatio
     * @memberof mahjong_ermj_gameresult_not_jj
     * @instance
     */
    mahjong_ermj_gameresult_not_jj.prototype.nTaskRatio = 0;

    /**
     * mahjong_ermj_gameresult_not_jj nBaopaiRatio.
     * @member {number} nBaopaiRatio
     * @memberof mahjong_ermj_gameresult_not_jj
     * @instance
     */
    mahjong_ermj_gameresult_not_jj.prototype.nBaopaiRatio = 0;

    /**
     * mahjong_ermj_gameresult_not_jj nAwardAll.
     * @member {number} nAwardAll
     * @memberof mahjong_ermj_gameresult_not_jj
     * @instance
     */
    mahjong_ermj_gameresult_not_jj.prototype.nAwardAll = 0;

    /**
     * mahjong_ermj_gameresult_not_jj vecFanAward.
     * @member {Array.<Imahjong_fan_award_data>} vecFanAward
     * @memberof mahjong_ermj_gameresult_not_jj
     * @instance
     */
    mahjong_ermj_gameresult_not_jj.prototype.vecFanAward = $util.emptyArray;

    /**
     * Creates a new mahjong_ermj_gameresult_not_jj instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_gameresult_not_jj
     * @static
     * @param {Imahjong_ermj_gameresult_not_jj=} [properties] Properties to set
     * @returns {mahjong_ermj_gameresult_not_jj} mahjong_ermj_gameresult_not_jj instance
     */
    mahjong_ermj_gameresult_not_jj.create = function create(properties) {
        return new mahjong_ermj_gameresult_not_jj(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_gameresult_not_jj message. Does not implicitly {@link mahjong_ermj_gameresult_not_jj.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_gameresult_not_jj
     * @static
     * @param {Imahjong_ermj_gameresult_not_jj} message mahjong_ermj_gameresult_not_jj message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_gameresult_not_jj.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cWinChairID);
        if (message.vecGameResult != null && message.vecGameResult.length)
            for (var i = 0; i < message.vecGameResult.length; ++i)
                $root.mahjong_st_gameresult.encode(message.vecGameResult[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cType);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nBei);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nHua);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.nBanker);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.nHuDouble);
        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.nMingRatio);
        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.nTaskRatio);
        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.nBaopaiRatio);
        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.nAwardAll);
        if (message.vecFanAward != null && message.vecFanAward.length)
            for (var i = 0; i < message.vecFanAward.length; ++i)
                $root.mahjong_fan_award_data.encode(message.vecFanAward[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_gameresult_not_jj message, length delimited. Does not implicitly {@link mahjong_ermj_gameresult_not_jj.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_gameresult_not_jj
     * @static
     * @param {Imahjong_ermj_gameresult_not_jj} message mahjong_ermj_gameresult_not_jj message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_gameresult_not_jj.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_gameresult_not_jj message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_gameresult_not_jj
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_gameresult_not_jj} mahjong_ermj_gameresult_not_jj
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_gameresult_not_jj.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_gameresult_not_jj();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cWinChairID = reader.int32();
                break;
            case 2:
                if (!(message.vecGameResult && message.vecGameResult.length))
                    message.vecGameResult = [];
                message.vecGameResult.push($root.mahjong_st_gameresult.decode(reader, reader.uint32()));
                break;
            case 3:
                message.cType = reader.int32();
                break;
            case 4:
                message.nBei = reader.int32();
                break;
            case 5:
                message.nHua = reader.int32();
                break;
            case 6:
                message.nBanker = reader.int32();
                break;
            case 7:
                message.nHuDouble = reader.int32();
                break;
            case 8:
                message.nMingRatio = reader.int32();
                break;
            case 9:
                message.nTaskRatio = reader.int32();
                break;
            case 10:
                message.nBaopaiRatio = reader.int32();
                break;
            case 11:
                message.nAwardAll = reader.int32();
                break;
            case 12:
                if (!(message.vecFanAward && message.vecFanAward.length))
                    message.vecFanAward = [];
                message.vecFanAward.push($root.mahjong_fan_award_data.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cWinChairID"))
            throw $util.ProtocolError("missing required 'cWinChairID'", { instance: message });
        if (!message.hasOwnProperty("cType"))
            throw $util.ProtocolError("missing required 'cType'", { instance: message });
        if (!message.hasOwnProperty("nBei"))
            throw $util.ProtocolError("missing required 'nBei'", { instance: message });
        if (!message.hasOwnProperty("nHua"))
            throw $util.ProtocolError("missing required 'nHua'", { instance: message });
        if (!message.hasOwnProperty("nBanker"))
            throw $util.ProtocolError("missing required 'nBanker'", { instance: message });
        if (!message.hasOwnProperty("nHuDouble"))
            throw $util.ProtocolError("missing required 'nHuDouble'", { instance: message });
        if (!message.hasOwnProperty("nMingRatio"))
            throw $util.ProtocolError("missing required 'nMingRatio'", { instance: message });
        if (!message.hasOwnProperty("nTaskRatio"))
            throw $util.ProtocolError("missing required 'nTaskRatio'", { instance: message });
        if (!message.hasOwnProperty("nBaopaiRatio"))
            throw $util.ProtocolError("missing required 'nBaopaiRatio'", { instance: message });
        if (!message.hasOwnProperty("nAwardAll"))
            throw $util.ProtocolError("missing required 'nAwardAll'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_gameresult_not_jj message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_gameresult_not_jj
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_gameresult_not_jj} mahjong_ermj_gameresult_not_jj
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_gameresult_not_jj.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_gameresult_not_jj message.
     * @function verify
     * @memberof mahjong_ermj_gameresult_not_jj
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_gameresult_not_jj.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cWinChairID))
            return "cWinChairID: integer expected";
        if (message.vecGameResult != null && message.hasOwnProperty("vecGameResult")) {
            if (!Array.isArray(message.vecGameResult))
                return "vecGameResult: array expected";
            for (var i = 0; i < message.vecGameResult.length; ++i) {
                var error = $root.mahjong_st_gameresult.verify(message.vecGameResult[i]);
                if (error)
                    return "vecGameResult." + error;
            }
        }
        if (!$util.isInteger(message.cType))
            return "cType: integer expected";
        if (!$util.isInteger(message.nBei))
            return "nBei: integer expected";
        if (!$util.isInteger(message.nHua))
            return "nHua: integer expected";
        if (!$util.isInteger(message.nBanker))
            return "nBanker: integer expected";
        if (!$util.isInteger(message.nHuDouble))
            return "nHuDouble: integer expected";
        if (!$util.isInteger(message.nMingRatio))
            return "nMingRatio: integer expected";
        if (!$util.isInteger(message.nTaskRatio))
            return "nTaskRatio: integer expected";
        if (!$util.isInteger(message.nBaopaiRatio))
            return "nBaopaiRatio: integer expected";
        if (!$util.isInteger(message.nAwardAll))
            return "nAwardAll: integer expected";
        if (message.vecFanAward != null && message.hasOwnProperty("vecFanAward")) {
            if (!Array.isArray(message.vecFanAward))
                return "vecFanAward: array expected";
            for (var i = 0; i < message.vecFanAward.length; ++i) {
                var error = $root.mahjong_fan_award_data.verify(message.vecFanAward[i]);
                if (error)
                    return "vecFanAward." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_ermj_gameresult_not_jj message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_gameresult_not_jj
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_gameresult_not_jj} mahjong_ermj_gameresult_not_jj
     */
    mahjong_ermj_gameresult_not_jj.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_gameresult_not_jj)
            return object;
        var message = new $root.mahjong_ermj_gameresult_not_jj();
        if (object.cWinChairID != null)
            message.cWinChairID = object.cWinChairID | 0;
        if (object.vecGameResult) {
            if (!Array.isArray(object.vecGameResult))
                throw TypeError(".mahjong_ermj_gameresult_not_jj.vecGameResult: array expected");
            message.vecGameResult = [];
            for (var i = 0; i < object.vecGameResult.length; ++i) {
                if (typeof object.vecGameResult[i] !== "object")
                    throw TypeError(".mahjong_ermj_gameresult_not_jj.vecGameResult: object expected");
                message.vecGameResult[i] = $root.mahjong_st_gameresult.fromObject(object.vecGameResult[i]);
            }
        }
        if (object.cType != null)
            message.cType = object.cType | 0;
        if (object.nBei != null)
            message.nBei = object.nBei | 0;
        if (object.nHua != null)
            message.nHua = object.nHua | 0;
        if (object.nBanker != null)
            message.nBanker = object.nBanker | 0;
        if (object.nHuDouble != null)
            message.nHuDouble = object.nHuDouble | 0;
        if (object.nMingRatio != null)
            message.nMingRatio = object.nMingRatio | 0;
        if (object.nTaskRatio != null)
            message.nTaskRatio = object.nTaskRatio | 0;
        if (object.nBaopaiRatio != null)
            message.nBaopaiRatio = object.nBaopaiRatio | 0;
        if (object.nAwardAll != null)
            message.nAwardAll = object.nAwardAll | 0;
        if (object.vecFanAward) {
            if (!Array.isArray(object.vecFanAward))
                throw TypeError(".mahjong_ermj_gameresult_not_jj.vecFanAward: array expected");
            message.vecFanAward = [];
            for (var i = 0; i < object.vecFanAward.length; ++i) {
                if (typeof object.vecFanAward[i] !== "object")
                    throw TypeError(".mahjong_ermj_gameresult_not_jj.vecFanAward: object expected");
                message.vecFanAward[i] = $root.mahjong_fan_award_data.fromObject(object.vecFanAward[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_gameresult_not_jj message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_gameresult_not_jj
     * @static
     * @param {mahjong_ermj_gameresult_not_jj} message mahjong_ermj_gameresult_not_jj
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_gameresult_not_jj.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecGameResult = [];
            object.vecFanAward = [];
        }
        if (options.defaults) {
            object.cWinChairID = 0;
            object.cType = 0;
            object.nBei = 0;
            object.nHua = 0;
            object.nBanker = 0;
            object.nHuDouble = 0;
            object.nMingRatio = 0;
            object.nTaskRatio = 0;
            object.nBaopaiRatio = 0;
            object.nAwardAll = 0;
        }
        if (message.cWinChairID != null && message.hasOwnProperty("cWinChairID"))
            object.cWinChairID = message.cWinChairID;
        if (message.vecGameResult && message.vecGameResult.length) {
            object.vecGameResult = [];
            for (var j = 0; j < message.vecGameResult.length; ++j)
                object.vecGameResult[j] = $root.mahjong_st_gameresult.toObject(message.vecGameResult[j], options);
        }
        if (message.cType != null && message.hasOwnProperty("cType"))
            object.cType = message.cType;
        if (message.nBei != null && message.hasOwnProperty("nBei"))
            object.nBei = message.nBei;
        if (message.nHua != null && message.hasOwnProperty("nHua"))
            object.nHua = message.nHua;
        if (message.nBanker != null && message.hasOwnProperty("nBanker"))
            object.nBanker = message.nBanker;
        if (message.nHuDouble != null && message.hasOwnProperty("nHuDouble"))
            object.nHuDouble = message.nHuDouble;
        if (message.nMingRatio != null && message.hasOwnProperty("nMingRatio"))
            object.nMingRatio = message.nMingRatio;
        if (message.nTaskRatio != null && message.hasOwnProperty("nTaskRatio"))
            object.nTaskRatio = message.nTaskRatio;
        if (message.nBaopaiRatio != null && message.hasOwnProperty("nBaopaiRatio"))
            object.nBaopaiRatio = message.nBaopaiRatio;
        if (message.nAwardAll != null && message.hasOwnProperty("nAwardAll"))
            object.nAwardAll = message.nAwardAll;
        if (message.vecFanAward && message.vecFanAward.length) {
            object.vecFanAward = [];
            for (var j = 0; j < message.vecFanAward.length; ++j)
                object.vecFanAward[j] = $root.mahjong_fan_award_data.toObject(message.vecFanAward[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_ermj_gameresult_not_jj to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_gameresult_not_jj
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_gameresult_not_jj.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_gameresult_not_jj;
})();

$root.mahjong_ermj_animate_ok_req = (function() {

    /**
     * Properties of a mahjong_ermj_animate_ok_req.
     * @exports Imahjong_ermj_animate_ok_req
     * @interface Imahjong_ermj_animate_ok_req
     */

    /**
     * Constructs a new mahjong_ermj_animate_ok_req.
     * @exports mahjong_ermj_animate_ok_req
     * @classdesc Represents a mahjong_ermj_animate_ok_req.
     * @implements Imahjong_ermj_animate_ok_req
     * @constructor
     * @param {Imahjong_ermj_animate_ok_req=} [properties] Properties to set
     */
    function mahjong_ermj_animate_ok_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_ermj_animate_ok_req instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_animate_ok_req
     * @static
     * @param {Imahjong_ermj_animate_ok_req=} [properties] Properties to set
     * @returns {mahjong_ermj_animate_ok_req} mahjong_ermj_animate_ok_req instance
     */
    mahjong_ermj_animate_ok_req.create = function create(properties) {
        return new mahjong_ermj_animate_ok_req(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_animate_ok_req message. Does not implicitly {@link mahjong_ermj_animate_ok_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_animate_ok_req
     * @static
     * @param {Imahjong_ermj_animate_ok_req} message mahjong_ermj_animate_ok_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_animate_ok_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_animate_ok_req message, length delimited. Does not implicitly {@link mahjong_ermj_animate_ok_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_animate_ok_req
     * @static
     * @param {Imahjong_ermj_animate_ok_req} message mahjong_ermj_animate_ok_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_animate_ok_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_animate_ok_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_animate_ok_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_animate_ok_req} mahjong_ermj_animate_ok_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_animate_ok_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_animate_ok_req();
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
     * Decodes a mahjong_ermj_animate_ok_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_animate_ok_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_animate_ok_req} mahjong_ermj_animate_ok_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_animate_ok_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_animate_ok_req message.
     * @function verify
     * @memberof mahjong_ermj_animate_ok_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_animate_ok_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_animate_ok_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_animate_ok_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_animate_ok_req} mahjong_ermj_animate_ok_req
     */
    mahjong_ermj_animate_ok_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_animate_ok_req)
            return object;
        return new $root.mahjong_ermj_animate_ok_req();
    };

    /**
     * Creates a plain object from a mahjong_ermj_animate_ok_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_animate_ok_req
     * @static
     * @param {mahjong_ermj_animate_ok_req} message mahjong_ermj_animate_ok_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_animate_ok_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_ermj_animate_ok_req to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_animate_ok_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_animate_ok_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_animate_ok_req;
})();

$root.mahjong_ermj_gameresult_not = (function() {

    /**
     * Properties of a mahjong_ermj_gameresult_not.
     * @exports Imahjong_ermj_gameresult_not
     * @interface Imahjong_ermj_gameresult_not
     * @property {number} cWinChairID mahjong_ermj_gameresult_not cWinChairID
     * @property {Array.<Imahjong_st_gameresult>|null} [vecGameResult] mahjong_ermj_gameresult_not vecGameResult
     * @property {number} cType mahjong_ermj_gameresult_not cType
     * @property {number} nBei mahjong_ermj_gameresult_not nBei
     * @property {number} nHua mahjong_ermj_gameresult_not nHua
     * @property {number} nBanker mahjong_ermj_gameresult_not nBanker
     * @property {number} nHuDouble mahjong_ermj_gameresult_not nHuDouble
     * @property {number} nMingRatio mahjong_ermj_gameresult_not nMingRatio
     * @property {number} nTaskRatio mahjong_ermj_gameresult_not nTaskRatio
     * @property {number} nBaopaiRatio mahjong_ermj_gameresult_not nBaopaiRatio
     */

    /**
     * Constructs a new mahjong_ermj_gameresult_not.
     * @exports mahjong_ermj_gameresult_not
     * @classdesc Represents a mahjong_ermj_gameresult_not.
     * @implements Imahjong_ermj_gameresult_not
     * @constructor
     * @param {Imahjong_ermj_gameresult_not=} [properties] Properties to set
     */
    function mahjong_ermj_gameresult_not(properties) {
        this.vecGameResult = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_gameresult_not cWinChairID.
     * @member {number} cWinChairID
     * @memberof mahjong_ermj_gameresult_not
     * @instance
     */
    mahjong_ermj_gameresult_not.prototype.cWinChairID = 0;

    /**
     * mahjong_ermj_gameresult_not vecGameResult.
     * @member {Array.<Imahjong_st_gameresult>} vecGameResult
     * @memberof mahjong_ermj_gameresult_not
     * @instance
     */
    mahjong_ermj_gameresult_not.prototype.vecGameResult = $util.emptyArray;

    /**
     * mahjong_ermj_gameresult_not cType.
     * @member {number} cType
     * @memberof mahjong_ermj_gameresult_not
     * @instance
     */
    mahjong_ermj_gameresult_not.prototype.cType = 0;

    /**
     * mahjong_ermj_gameresult_not nBei.
     * @member {number} nBei
     * @memberof mahjong_ermj_gameresult_not
     * @instance
     */
    mahjong_ermj_gameresult_not.prototype.nBei = 0;

    /**
     * mahjong_ermj_gameresult_not nHua.
     * @member {number} nHua
     * @memberof mahjong_ermj_gameresult_not
     * @instance
     */
    mahjong_ermj_gameresult_not.prototype.nHua = 0;

    /**
     * mahjong_ermj_gameresult_not nBanker.
     * @member {number} nBanker
     * @memberof mahjong_ermj_gameresult_not
     * @instance
     */
    mahjong_ermj_gameresult_not.prototype.nBanker = 0;

    /**
     * mahjong_ermj_gameresult_not nHuDouble.
     * @member {number} nHuDouble
     * @memberof mahjong_ermj_gameresult_not
     * @instance
     */
    mahjong_ermj_gameresult_not.prototype.nHuDouble = 0;

    /**
     * mahjong_ermj_gameresult_not nMingRatio.
     * @member {number} nMingRatio
     * @memberof mahjong_ermj_gameresult_not
     * @instance
     */
    mahjong_ermj_gameresult_not.prototype.nMingRatio = 0;

    /**
     * mahjong_ermj_gameresult_not nTaskRatio.
     * @member {number} nTaskRatio
     * @memberof mahjong_ermj_gameresult_not
     * @instance
     */
    mahjong_ermj_gameresult_not.prototype.nTaskRatio = 0;

    /**
     * mahjong_ermj_gameresult_not nBaopaiRatio.
     * @member {number} nBaopaiRatio
     * @memberof mahjong_ermj_gameresult_not
     * @instance
     */
    mahjong_ermj_gameresult_not.prototype.nBaopaiRatio = 0;

    /**
     * Creates a new mahjong_ermj_gameresult_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_gameresult_not
     * @static
     * @param {Imahjong_ermj_gameresult_not=} [properties] Properties to set
     * @returns {mahjong_ermj_gameresult_not} mahjong_ermj_gameresult_not instance
     */
    mahjong_ermj_gameresult_not.create = function create(properties) {
        return new mahjong_ermj_gameresult_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_gameresult_not message. Does not implicitly {@link mahjong_ermj_gameresult_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_gameresult_not
     * @static
     * @param {Imahjong_ermj_gameresult_not} message mahjong_ermj_gameresult_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_gameresult_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cWinChairID);
        if (message.vecGameResult != null && message.vecGameResult.length)
            for (var i = 0; i < message.vecGameResult.length; ++i)
                $root.mahjong_st_gameresult.encode(message.vecGameResult[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cType);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nBei);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nHua);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.nBanker);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.nHuDouble);
        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.nMingRatio);
        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.nTaskRatio);
        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.nBaopaiRatio);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_gameresult_not message, length delimited. Does not implicitly {@link mahjong_ermj_gameresult_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_gameresult_not
     * @static
     * @param {Imahjong_ermj_gameresult_not} message mahjong_ermj_gameresult_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_gameresult_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_gameresult_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_gameresult_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_gameresult_not} mahjong_ermj_gameresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_gameresult_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_gameresult_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cWinChairID = reader.int32();
                break;
            case 2:
                if (!(message.vecGameResult && message.vecGameResult.length))
                    message.vecGameResult = [];
                message.vecGameResult.push($root.mahjong_st_gameresult.decode(reader, reader.uint32()));
                break;
            case 3:
                message.cType = reader.int32();
                break;
            case 4:
                message.nBei = reader.int32();
                break;
            case 5:
                message.nHua = reader.int32();
                break;
            case 6:
                message.nBanker = reader.int32();
                break;
            case 7:
                message.nHuDouble = reader.int32();
                break;
            case 8:
                message.nMingRatio = reader.int32();
                break;
            case 9:
                message.nTaskRatio = reader.int32();
                break;
            case 10:
                message.nBaopaiRatio = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cWinChairID"))
            throw $util.ProtocolError("missing required 'cWinChairID'", { instance: message });
        if (!message.hasOwnProperty("cType"))
            throw $util.ProtocolError("missing required 'cType'", { instance: message });
        if (!message.hasOwnProperty("nBei"))
            throw $util.ProtocolError("missing required 'nBei'", { instance: message });
        if (!message.hasOwnProperty("nHua"))
            throw $util.ProtocolError("missing required 'nHua'", { instance: message });
        if (!message.hasOwnProperty("nBanker"))
            throw $util.ProtocolError("missing required 'nBanker'", { instance: message });
        if (!message.hasOwnProperty("nHuDouble"))
            throw $util.ProtocolError("missing required 'nHuDouble'", { instance: message });
        if (!message.hasOwnProperty("nMingRatio"))
            throw $util.ProtocolError("missing required 'nMingRatio'", { instance: message });
        if (!message.hasOwnProperty("nTaskRatio"))
            throw $util.ProtocolError("missing required 'nTaskRatio'", { instance: message });
        if (!message.hasOwnProperty("nBaopaiRatio"))
            throw $util.ProtocolError("missing required 'nBaopaiRatio'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_gameresult_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_gameresult_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_gameresult_not} mahjong_ermj_gameresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_gameresult_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_gameresult_not message.
     * @function verify
     * @memberof mahjong_ermj_gameresult_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_gameresult_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cWinChairID))
            return "cWinChairID: integer expected";
        if (message.vecGameResult != null && message.hasOwnProperty("vecGameResult")) {
            if (!Array.isArray(message.vecGameResult))
                return "vecGameResult: array expected";
            for (var i = 0; i < message.vecGameResult.length; ++i) {
                var error = $root.mahjong_st_gameresult.verify(message.vecGameResult[i]);
                if (error)
                    return "vecGameResult." + error;
            }
        }
        if (!$util.isInteger(message.cType))
            return "cType: integer expected";
        if (!$util.isInteger(message.nBei))
            return "nBei: integer expected";
        if (!$util.isInteger(message.nHua))
            return "nHua: integer expected";
        if (!$util.isInteger(message.nBanker))
            return "nBanker: integer expected";
        if (!$util.isInteger(message.nHuDouble))
            return "nHuDouble: integer expected";
        if (!$util.isInteger(message.nMingRatio))
            return "nMingRatio: integer expected";
        if (!$util.isInteger(message.nTaskRatio))
            return "nTaskRatio: integer expected";
        if (!$util.isInteger(message.nBaopaiRatio))
            return "nBaopaiRatio: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_gameresult_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_gameresult_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_gameresult_not} mahjong_ermj_gameresult_not
     */
    mahjong_ermj_gameresult_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_gameresult_not)
            return object;
        var message = new $root.mahjong_ermj_gameresult_not();
        if (object.cWinChairID != null)
            message.cWinChairID = object.cWinChairID | 0;
        if (object.vecGameResult) {
            if (!Array.isArray(object.vecGameResult))
                throw TypeError(".mahjong_ermj_gameresult_not.vecGameResult: array expected");
            message.vecGameResult = [];
            for (var i = 0; i < object.vecGameResult.length; ++i) {
                if (typeof object.vecGameResult[i] !== "object")
                    throw TypeError(".mahjong_ermj_gameresult_not.vecGameResult: object expected");
                message.vecGameResult[i] = $root.mahjong_st_gameresult.fromObject(object.vecGameResult[i]);
            }
        }
        if (object.cType != null)
            message.cType = object.cType | 0;
        if (object.nBei != null)
            message.nBei = object.nBei | 0;
        if (object.nHua != null)
            message.nHua = object.nHua | 0;
        if (object.nBanker != null)
            message.nBanker = object.nBanker | 0;
        if (object.nHuDouble != null)
            message.nHuDouble = object.nHuDouble | 0;
        if (object.nMingRatio != null)
            message.nMingRatio = object.nMingRatio | 0;
        if (object.nTaskRatio != null)
            message.nTaskRatio = object.nTaskRatio | 0;
        if (object.nBaopaiRatio != null)
            message.nBaopaiRatio = object.nBaopaiRatio | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_gameresult_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_gameresult_not
     * @static
     * @param {mahjong_ermj_gameresult_not} message mahjong_ermj_gameresult_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_gameresult_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecGameResult = [];
        if (options.defaults) {
            object.cWinChairID = 0;
            object.cType = 0;
            object.nBei = 0;
            object.nHua = 0;
            object.nBanker = 0;
            object.nHuDouble = 0;
            object.nMingRatio = 0;
            object.nTaskRatio = 0;
            object.nBaopaiRatio = 0;
        }
        if (message.cWinChairID != null && message.hasOwnProperty("cWinChairID"))
            object.cWinChairID = message.cWinChairID;
        if (message.vecGameResult && message.vecGameResult.length) {
            object.vecGameResult = [];
            for (var j = 0; j < message.vecGameResult.length; ++j)
                object.vecGameResult[j] = $root.mahjong_st_gameresult.toObject(message.vecGameResult[j], options);
        }
        if (message.cType != null && message.hasOwnProperty("cType"))
            object.cType = message.cType;
        if (message.nBei != null && message.hasOwnProperty("nBei"))
            object.nBei = message.nBei;
        if (message.nHua != null && message.hasOwnProperty("nHua"))
            object.nHua = message.nHua;
        if (message.nBanker != null && message.hasOwnProperty("nBanker"))
            object.nBanker = message.nBanker;
        if (message.nHuDouble != null && message.hasOwnProperty("nHuDouble"))
            object.nHuDouble = message.nHuDouble;
        if (message.nMingRatio != null && message.hasOwnProperty("nMingRatio"))
            object.nMingRatio = message.nMingRatio;
        if (message.nTaskRatio != null && message.hasOwnProperty("nTaskRatio"))
            object.nTaskRatio = message.nTaskRatio;
        if (message.nBaopaiRatio != null && message.hasOwnProperty("nBaopaiRatio"))
            object.nBaopaiRatio = message.nBaopaiRatio;
        return object;
    };

    /**
     * Converts this mahjong_ermj_gameresult_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_gameresult_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_gameresult_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_gameresult_not;
})();

$root.mahjong_ermj_winstreak_req = (function() {

    /**
     * Properties of a mahjong_ermj_winstreak_req.
     * @exports Imahjong_ermj_winstreak_req
     * @interface Imahjong_ermj_winstreak_req
     * @property {number} nChairId mahjong_ermj_winstreak_req nChairId
     * @property {number} nNum mahjong_ermj_winstreak_req nNum
     */

    /**
     * Constructs a new mahjong_ermj_winstreak_req.
     * @exports mahjong_ermj_winstreak_req
     * @classdesc Represents a mahjong_ermj_winstreak_req.
     * @implements Imahjong_ermj_winstreak_req
     * @constructor
     * @param {Imahjong_ermj_winstreak_req=} [properties] Properties to set
     */
    function mahjong_ermj_winstreak_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_winstreak_req nChairId.
     * @member {number} nChairId
     * @memberof mahjong_ermj_winstreak_req
     * @instance
     */
    mahjong_ermj_winstreak_req.prototype.nChairId = 0;

    /**
     * mahjong_ermj_winstreak_req nNum.
     * @member {number} nNum
     * @memberof mahjong_ermj_winstreak_req
     * @instance
     */
    mahjong_ermj_winstreak_req.prototype.nNum = 0;

    /**
     * Creates a new mahjong_ermj_winstreak_req instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_winstreak_req
     * @static
     * @param {Imahjong_ermj_winstreak_req=} [properties] Properties to set
     * @returns {mahjong_ermj_winstreak_req} mahjong_ermj_winstreak_req instance
     */
    mahjong_ermj_winstreak_req.create = function create(properties) {
        return new mahjong_ermj_winstreak_req(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_winstreak_req message. Does not implicitly {@link mahjong_ermj_winstreak_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_winstreak_req
     * @static
     * @param {Imahjong_ermj_winstreak_req} message mahjong_ermj_winstreak_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_winstreak_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nNum);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_winstreak_req message, length delimited. Does not implicitly {@link mahjong_ermj_winstreak_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_winstreak_req
     * @static
     * @param {Imahjong_ermj_winstreak_req} message mahjong_ermj_winstreak_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_winstreak_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_winstreak_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_winstreak_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_winstreak_req} mahjong_ermj_winstreak_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_winstreak_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_winstreak_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nChairId = reader.int32();
                break;
            case 2:
                message.nNum = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nChairId"))
            throw $util.ProtocolError("missing required 'nChairId'", { instance: message });
        if (!message.hasOwnProperty("nNum"))
            throw $util.ProtocolError("missing required 'nNum'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_winstreak_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_winstreak_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_winstreak_req} mahjong_ermj_winstreak_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_winstreak_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_winstreak_req message.
     * @function verify
     * @memberof mahjong_ermj_winstreak_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_winstreak_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nChairId))
            return "nChairId: integer expected";
        if (!$util.isInteger(message.nNum))
            return "nNum: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_winstreak_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_winstreak_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_winstreak_req} mahjong_ermj_winstreak_req
     */
    mahjong_ermj_winstreak_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_winstreak_req)
            return object;
        var message = new $root.mahjong_ermj_winstreak_req();
        if (object.nChairId != null)
            message.nChairId = object.nChairId | 0;
        if (object.nNum != null)
            message.nNum = object.nNum | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_winstreak_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_winstreak_req
     * @static
     * @param {mahjong_ermj_winstreak_req} message mahjong_ermj_winstreak_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_winstreak_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nChairId = 0;
            object.nNum = 0;
        }
        if (message.nChairId != null && message.hasOwnProperty("nChairId"))
            object.nChairId = message.nChairId;
        if (message.nNum != null && message.hasOwnProperty("nNum"))
            object.nNum = message.nNum;
        return object;
    };

    /**
     * Converts this mahjong_ermj_winstreak_req to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_winstreak_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_winstreak_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_winstreak_req;
})();

$root.mahjong_ermj_robot_not = (function() {

    /**
     * Properties of a mahjong_ermj_robot_not.
     * @exports Imahjong_ermj_robot_not
     * @interface Imahjong_ermj_robot_not
     * @property {number} nType mahjong_ermj_robot_not nType
     * @property {Array.<number>|null} [vecCards] mahjong_ermj_robot_not vecCards
     */

    /**
     * Constructs a new mahjong_ermj_robot_not.
     * @exports mahjong_ermj_robot_not
     * @classdesc Represents a mahjong_ermj_robot_not.
     * @implements Imahjong_ermj_robot_not
     * @constructor
     * @param {Imahjong_ermj_robot_not=} [properties] Properties to set
     */
    function mahjong_ermj_robot_not(properties) {
        this.vecCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_robot_not nType.
     * @member {number} nType
     * @memberof mahjong_ermj_robot_not
     * @instance
     */
    mahjong_ermj_robot_not.prototype.nType = 0;

    /**
     * mahjong_ermj_robot_not vecCards.
     * @member {Array.<number>} vecCards
     * @memberof mahjong_ermj_robot_not
     * @instance
     */
    mahjong_ermj_robot_not.prototype.vecCards = $util.emptyArray;

    /**
     * Creates a new mahjong_ermj_robot_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_robot_not
     * @static
     * @param {Imahjong_ermj_robot_not=} [properties] Properties to set
     * @returns {mahjong_ermj_robot_not} mahjong_ermj_robot_not instance
     */
    mahjong_ermj_robot_not.create = function create(properties) {
        return new mahjong_ermj_robot_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_robot_not message. Does not implicitly {@link mahjong_ermj_robot_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_robot_not
     * @static
     * @param {Imahjong_ermj_robot_not} message mahjong_ermj_robot_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_robot_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nType);
        if (message.vecCards != null && message.vecCards.length)
            for (var i = 0; i < message.vecCards.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.vecCards[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_robot_not message, length delimited. Does not implicitly {@link mahjong_ermj_robot_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_robot_not
     * @static
     * @param {Imahjong_ermj_robot_not} message mahjong_ermj_robot_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_robot_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_robot_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_robot_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_robot_not} mahjong_ermj_robot_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_robot_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_robot_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nType = reader.int32();
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
        if (!message.hasOwnProperty("nType"))
            throw $util.ProtocolError("missing required 'nType'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_robot_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_robot_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_robot_not} mahjong_ermj_robot_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_robot_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_robot_not message.
     * @function verify
     * @memberof mahjong_ermj_robot_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_robot_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nType))
            return "nType: integer expected";
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
     * Creates a mahjong_ermj_robot_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_robot_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_robot_not} mahjong_ermj_robot_not
     */
    mahjong_ermj_robot_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_robot_not)
            return object;
        var message = new $root.mahjong_ermj_robot_not();
        if (object.nType != null)
            message.nType = object.nType | 0;
        if (object.vecCards) {
            if (!Array.isArray(object.vecCards))
                throw TypeError(".mahjong_ermj_robot_not.vecCards: array expected");
            message.vecCards = [];
            for (var i = 0; i < object.vecCards.length; ++i)
                message.vecCards[i] = object.vecCards[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_robot_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_robot_not
     * @static
     * @param {mahjong_ermj_robot_not} message mahjong_ermj_robot_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_robot_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecCards = [];
        if (options.defaults)
            object.nType = 0;
        if (message.nType != null && message.hasOwnProperty("nType"))
            object.nType = message.nType;
        if (message.vecCards && message.vecCards.length) {
            object.vecCards = [];
            for (var j = 0; j < message.vecCards.length; ++j)
                object.vecCards[j] = message.vecCards[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_ermj_robot_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_robot_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_robot_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_robot_not;
})();

$root.mahjong_fan_award_data = (function() {

    /**
     * Properties of a mahjong_fan_award_data.
     * @exports Imahjong_fan_award_data
     * @interface Imahjong_fan_award_data
     * @property {string} sFanName mahjong_fan_award_data sFanName
     * @property {number} nFan mahjong_fan_award_data nFan
     * @property {number} nAwardNum mahjong_fan_award_data nAwardNum
     */

    /**
     * Constructs a new mahjong_fan_award_data.
     * @exports mahjong_fan_award_data
     * @classdesc Represents a mahjong_fan_award_data.
     * @implements Imahjong_fan_award_data
     * @constructor
     * @param {Imahjong_fan_award_data=} [properties] Properties to set
     */
    function mahjong_fan_award_data(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_fan_award_data sFanName.
     * @member {string} sFanName
     * @memberof mahjong_fan_award_data
     * @instance
     */
    mahjong_fan_award_data.prototype.sFanName = "";

    /**
     * mahjong_fan_award_data nFan.
     * @member {number} nFan
     * @memberof mahjong_fan_award_data
     * @instance
     */
    mahjong_fan_award_data.prototype.nFan = 0;

    /**
     * mahjong_fan_award_data nAwardNum.
     * @member {number} nAwardNum
     * @memberof mahjong_fan_award_data
     * @instance
     */
    mahjong_fan_award_data.prototype.nAwardNum = 0;

    /**
     * Creates a new mahjong_fan_award_data instance using the specified properties.
     * @function create
     * @memberof mahjong_fan_award_data
     * @static
     * @param {Imahjong_fan_award_data=} [properties] Properties to set
     * @returns {mahjong_fan_award_data} mahjong_fan_award_data instance
     */
    mahjong_fan_award_data.create = function create(properties) {
        return new mahjong_fan_award_data(properties);
    };

    /**
     * Encodes the specified mahjong_fan_award_data message. Does not implicitly {@link mahjong_fan_award_data.verify|verify} messages.
     * @function encode
     * @memberof mahjong_fan_award_data
     * @static
     * @param {Imahjong_fan_award_data} message mahjong_fan_award_data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_fan_award_data.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.sFanName);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nFan);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nAwardNum);
        return writer;
    };

    /**
     * Encodes the specified mahjong_fan_award_data message, length delimited. Does not implicitly {@link mahjong_fan_award_data.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_fan_award_data
     * @static
     * @param {Imahjong_fan_award_data} message mahjong_fan_award_data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_fan_award_data.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_fan_award_data message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_fan_award_data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_fan_award_data} mahjong_fan_award_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_fan_award_data.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_fan_award_data();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sFanName = reader.string();
                break;
            case 2:
                message.nFan = reader.int32();
                break;
            case 3:
                message.nAwardNum = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("sFanName"))
            throw $util.ProtocolError("missing required 'sFanName'", { instance: message });
        if (!message.hasOwnProperty("nFan"))
            throw $util.ProtocolError("missing required 'nFan'", { instance: message });
        if (!message.hasOwnProperty("nAwardNum"))
            throw $util.ProtocolError("missing required 'nAwardNum'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_fan_award_data message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_fan_award_data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_fan_award_data} mahjong_fan_award_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_fan_award_data.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_fan_award_data message.
     * @function verify
     * @memberof mahjong_fan_award_data
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_fan_award_data.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.sFanName))
            return "sFanName: string expected";
        if (!$util.isInteger(message.nFan))
            return "nFan: integer expected";
        if (!$util.isInteger(message.nAwardNum))
            return "nAwardNum: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_fan_award_data message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_fan_award_data
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_fan_award_data} mahjong_fan_award_data
     */
    mahjong_fan_award_data.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_fan_award_data)
            return object;
        var message = new $root.mahjong_fan_award_data();
        if (object.sFanName != null)
            message.sFanName = String(object.sFanName);
        if (object.nFan != null)
            message.nFan = object.nFan | 0;
        if (object.nAwardNum != null)
            message.nAwardNum = object.nAwardNum | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_fan_award_data message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_fan_award_data
     * @static
     * @param {mahjong_fan_award_data} message mahjong_fan_award_data
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_fan_award_data.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.sFanName = "";
            object.nFan = 0;
            object.nAwardNum = 0;
        }
        if (message.sFanName != null && message.hasOwnProperty("sFanName"))
            object.sFanName = message.sFanName;
        if (message.nFan != null && message.hasOwnProperty("nFan"))
            object.nFan = message.nFan;
        if (message.nAwardNum != null && message.hasOwnProperty("nAwardNum"))
            object.nAwardNum = message.nAwardNum;
        return object;
    };

    /**
     * Converts this mahjong_fan_award_data to JSON.
     * @function toJSON
     * @memberof mahjong_fan_award_data
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_fan_award_data.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_fan_award_data;
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

$root.mahjong_ermj_gc_expression_not = (function() {

    /**
     * Properties of a mahjong_ermj_gc_expression_not.
     * @exports Imahjong_ermj_gc_expression_not
     * @interface Imahjong_ermj_gc_expression_not
     * @property {number} expressionType mahjong_ermj_gc_expression_not expressionType
     * @property {number} expressionNum mahjong_ermj_gc_expression_not expressionNum
     */

    /**
     * Constructs a new mahjong_ermj_gc_expression_not.
     * @exports mahjong_ermj_gc_expression_not
     * @classdesc Represents a mahjong_ermj_gc_expression_not.
     * @implements Imahjong_ermj_gc_expression_not
     * @constructor
     * @param {Imahjong_ermj_gc_expression_not=} [properties] Properties to set
     */
    function mahjong_ermj_gc_expression_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_gc_expression_not expressionType.
     * @member {number} expressionType
     * @memberof mahjong_ermj_gc_expression_not
     * @instance
     */
    mahjong_ermj_gc_expression_not.prototype.expressionType = 0;

    /**
     * mahjong_ermj_gc_expression_not expressionNum.
     * @member {number} expressionNum
     * @memberof mahjong_ermj_gc_expression_not
     * @instance
     */
    mahjong_ermj_gc_expression_not.prototype.expressionNum = 0;

    /**
     * Creates a new mahjong_ermj_gc_expression_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_gc_expression_not
     * @static
     * @param {Imahjong_ermj_gc_expression_not=} [properties] Properties to set
     * @returns {mahjong_ermj_gc_expression_not} mahjong_ermj_gc_expression_not instance
     */
    mahjong_ermj_gc_expression_not.create = function create(properties) {
        return new mahjong_ermj_gc_expression_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_gc_expression_not message. Does not implicitly {@link mahjong_ermj_gc_expression_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_gc_expression_not
     * @static
     * @param {Imahjong_ermj_gc_expression_not} message mahjong_ermj_gc_expression_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_gc_expression_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.expressionType);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.expressionNum);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_gc_expression_not message, length delimited. Does not implicitly {@link mahjong_ermj_gc_expression_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_gc_expression_not
     * @static
     * @param {Imahjong_ermj_gc_expression_not} message mahjong_ermj_gc_expression_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_gc_expression_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_gc_expression_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_gc_expression_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_gc_expression_not} mahjong_ermj_gc_expression_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_gc_expression_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_gc_expression_not();
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
     * Decodes a mahjong_ermj_gc_expression_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_gc_expression_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_gc_expression_not} mahjong_ermj_gc_expression_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_gc_expression_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_gc_expression_not message.
     * @function verify
     * @memberof mahjong_ermj_gc_expression_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_gc_expression_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.expressionType))
            return "expressionType: integer expected";
        if (!$util.isInteger(message.expressionNum))
            return "expressionNum: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_gc_expression_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_gc_expression_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_gc_expression_not} mahjong_ermj_gc_expression_not
     */
    mahjong_ermj_gc_expression_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_gc_expression_not)
            return object;
        var message = new $root.mahjong_ermj_gc_expression_not();
        if (object.expressionType != null)
            message.expressionType = object.expressionType | 0;
        if (object.expressionNum != null)
            message.expressionNum = object.expressionNum | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_gc_expression_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_gc_expression_not
     * @static
     * @param {mahjong_ermj_gc_expression_not} message mahjong_ermj_gc_expression_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_gc_expression_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_ermj_gc_expression_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_gc_expression_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_gc_expression_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_gc_expression_not;
})();

$root.mahjong_mj_replay_data_not = (function() {

    /**
     * Properties of a mahjong_mj_replay_data_not.
     * @exports Imahjong_mj_replay_data_not
     * @interface Imahjong_mj_replay_data_not
     * @property {Array.<Imahjong_ermj_changecard_not_new>|null} [vecChangeCards] mahjong_mj_replay_data_not vecChangeCards
     */

    /**
     * Constructs a new mahjong_mj_replay_data_not.
     * @exports mahjong_mj_replay_data_not
     * @classdesc Represents a mahjong_mj_replay_data_not.
     * @implements Imahjong_mj_replay_data_not
     * @constructor
     * @param {Imahjong_mj_replay_data_not=} [properties] Properties to set
     */
    function mahjong_mj_replay_data_not(properties) {
        this.vecChangeCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_mj_replay_data_not vecChangeCards.
     * @member {Array.<Imahjong_ermj_changecard_not_new>} vecChangeCards
     * @memberof mahjong_mj_replay_data_not
     * @instance
     */
    mahjong_mj_replay_data_not.prototype.vecChangeCards = $util.emptyArray;

    /**
     * Creates a new mahjong_mj_replay_data_not instance using the specified properties.
     * @function create
     * @memberof mahjong_mj_replay_data_not
     * @static
     * @param {Imahjong_mj_replay_data_not=} [properties] Properties to set
     * @returns {mahjong_mj_replay_data_not} mahjong_mj_replay_data_not instance
     */
    mahjong_mj_replay_data_not.create = function create(properties) {
        return new mahjong_mj_replay_data_not(properties);
    };

    /**
     * Encodes the specified mahjong_mj_replay_data_not message. Does not implicitly {@link mahjong_mj_replay_data_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_mj_replay_data_not
     * @static
     * @param {Imahjong_mj_replay_data_not} message mahjong_mj_replay_data_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_replay_data_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vecChangeCards != null && message.vecChangeCards.length)
            for (var i = 0; i < message.vecChangeCards.length; ++i)
                $root.mahjong_ermj_changecard_not_new.encode(message.vecChangeCards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_mj_replay_data_not message, length delimited. Does not implicitly {@link mahjong_mj_replay_data_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_mj_replay_data_not
     * @static
     * @param {Imahjong_mj_replay_data_not} message mahjong_mj_replay_data_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_mj_replay_data_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_mj_replay_data_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_mj_replay_data_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_mj_replay_data_not} mahjong_mj_replay_data_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_replay_data_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_mj_replay_data_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.vecChangeCards && message.vecChangeCards.length))
                    message.vecChangeCards = [];
                message.vecChangeCards.push($root.mahjong_ermj_changecard_not_new.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_mj_replay_data_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_mj_replay_data_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_mj_replay_data_not} mahjong_mj_replay_data_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_mj_replay_data_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_mj_replay_data_not message.
     * @function verify
     * @memberof mahjong_mj_replay_data_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_mj_replay_data_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.vecChangeCards != null && message.hasOwnProperty("vecChangeCards")) {
            if (!Array.isArray(message.vecChangeCards))
                return "vecChangeCards: array expected";
            for (var i = 0; i < message.vecChangeCards.length; ++i) {
                var error = $root.mahjong_ermj_changecard_not_new.verify(message.vecChangeCards[i]);
                if (error)
                    return "vecChangeCards." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_mj_replay_data_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_mj_replay_data_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_mj_replay_data_not} mahjong_mj_replay_data_not
     */
    mahjong_mj_replay_data_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_mj_replay_data_not)
            return object;
        var message = new $root.mahjong_mj_replay_data_not();
        if (object.vecChangeCards) {
            if (!Array.isArray(object.vecChangeCards))
                throw TypeError(".mahjong_mj_replay_data_not.vecChangeCards: array expected");
            message.vecChangeCards = [];
            for (var i = 0; i < object.vecChangeCards.length; ++i) {
                if (typeof object.vecChangeCards[i] !== "object")
                    throw TypeError(".mahjong_mj_replay_data_not.vecChangeCards: object expected");
                message.vecChangeCards[i] = $root.mahjong_ermj_changecard_not_new.fromObject(object.vecChangeCards[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_mj_replay_data_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_mj_replay_data_not
     * @static
     * @param {mahjong_mj_replay_data_not} message mahjong_mj_replay_data_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_mj_replay_data_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecChangeCards = [];
        if (message.vecChangeCards && message.vecChangeCards.length) {
            object.vecChangeCards = [];
            for (var j = 0; j < message.vecChangeCards.length; ++j)
                object.vecChangeCards[j] = $root.mahjong_ermj_changecard_not_new.toObject(message.vecChangeCards[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_mj_replay_data_not to JSON.
     * @function toJSON
     * @memberof mahjong_mj_replay_data_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_mj_replay_data_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_mj_replay_data_not;
})();

$root.mahjong_ermj_winstreak_rsp = (function() {

    /**
     * Properties of a mahjong_ermj_winstreak_rsp.
     * @exports Imahjong_ermj_winstreak_rsp
     * @interface Imahjong_ermj_winstreak_rsp
     * @property {number} nChairId mahjong_ermj_winstreak_rsp nChairId
     * @property {number} nRet mahjong_ermj_winstreak_rsp nRet
     * @property {number} nNum mahjong_ermj_winstreak_rsp nNum
     */

    /**
     * Constructs a new mahjong_ermj_winstreak_rsp.
     * @exports mahjong_ermj_winstreak_rsp
     * @classdesc Represents a mahjong_ermj_winstreak_rsp.
     * @implements Imahjong_ermj_winstreak_rsp
     * @constructor
     * @param {Imahjong_ermj_winstreak_rsp=} [properties] Properties to set
     */
    function mahjong_ermj_winstreak_rsp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_winstreak_rsp nChairId.
     * @member {number} nChairId
     * @memberof mahjong_ermj_winstreak_rsp
     * @instance
     */
    mahjong_ermj_winstreak_rsp.prototype.nChairId = 0;

    /**
     * mahjong_ermj_winstreak_rsp nRet.
     * @member {number} nRet
     * @memberof mahjong_ermj_winstreak_rsp
     * @instance
     */
    mahjong_ermj_winstreak_rsp.prototype.nRet = 0;

    /**
     * mahjong_ermj_winstreak_rsp nNum.
     * @member {number} nNum
     * @memberof mahjong_ermj_winstreak_rsp
     * @instance
     */
    mahjong_ermj_winstreak_rsp.prototype.nNum = 0;

    /**
     * Creates a new mahjong_ermj_winstreak_rsp instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_winstreak_rsp
     * @static
     * @param {Imahjong_ermj_winstreak_rsp=} [properties] Properties to set
     * @returns {mahjong_ermj_winstreak_rsp} mahjong_ermj_winstreak_rsp instance
     */
    mahjong_ermj_winstreak_rsp.create = function create(properties) {
        return new mahjong_ermj_winstreak_rsp(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_winstreak_rsp message. Does not implicitly {@link mahjong_ermj_winstreak_rsp.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_winstreak_rsp
     * @static
     * @param {Imahjong_ermj_winstreak_rsp} message mahjong_ermj_winstreak_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_winstreak_rsp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nRet);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nNum);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_winstreak_rsp message, length delimited. Does not implicitly {@link mahjong_ermj_winstreak_rsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_winstreak_rsp
     * @static
     * @param {Imahjong_ermj_winstreak_rsp} message mahjong_ermj_winstreak_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_winstreak_rsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_winstreak_rsp message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_winstreak_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_winstreak_rsp} mahjong_ermj_winstreak_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_winstreak_rsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_winstreak_rsp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nChairId = reader.int32();
                break;
            case 2:
                message.nRet = reader.int32();
                break;
            case 3:
                message.nNum = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nChairId"))
            throw $util.ProtocolError("missing required 'nChairId'", { instance: message });
        if (!message.hasOwnProperty("nRet"))
            throw $util.ProtocolError("missing required 'nRet'", { instance: message });
        if (!message.hasOwnProperty("nNum"))
            throw $util.ProtocolError("missing required 'nNum'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_winstreak_rsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_winstreak_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_winstreak_rsp} mahjong_ermj_winstreak_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_winstreak_rsp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_winstreak_rsp message.
     * @function verify
     * @memberof mahjong_ermj_winstreak_rsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_winstreak_rsp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nChairId))
            return "nChairId: integer expected";
        if (!$util.isInteger(message.nRet))
            return "nRet: integer expected";
        if (!$util.isInteger(message.nNum))
            return "nNum: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_winstreak_rsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_winstreak_rsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_winstreak_rsp} mahjong_ermj_winstreak_rsp
     */
    mahjong_ermj_winstreak_rsp.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_winstreak_rsp)
            return object;
        var message = new $root.mahjong_ermj_winstreak_rsp();
        if (object.nChairId != null)
            message.nChairId = object.nChairId | 0;
        if (object.nRet != null)
            message.nRet = object.nRet | 0;
        if (object.nNum != null)
            message.nNum = object.nNum | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_winstreak_rsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_winstreak_rsp
     * @static
     * @param {mahjong_ermj_winstreak_rsp} message mahjong_ermj_winstreak_rsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_winstreak_rsp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nChairId = 0;
            object.nRet = 0;
            object.nNum = 0;
        }
        if (message.nChairId != null && message.hasOwnProperty("nChairId"))
            object.nChairId = message.nChairId;
        if (message.nRet != null && message.hasOwnProperty("nRet"))
            object.nRet = message.nRet;
        if (message.nNum != null && message.hasOwnProperty("nNum"))
            object.nNum = message.nNum;
        return object;
    };

    /**
     * Converts this mahjong_ermj_winstreak_rsp to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_winstreak_rsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_winstreak_rsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_winstreak_rsp;
})();

$root.mahjong_ermj_baopai_change_rsp = (function() {

    /**
     * Properties of a mahjong_ermj_baopai_change_rsp.
     * @exports Imahjong_ermj_baopai_change_rsp
     * @interface Imahjong_ermj_baopai_change_rsp
     * @property {number} nChairId mahjong_ermj_baopai_change_rsp nChairId
     * @property {number} nRet mahjong_ermj_baopai_change_rsp nRet
     */

    /**
     * Constructs a new mahjong_ermj_baopai_change_rsp.
     * @exports mahjong_ermj_baopai_change_rsp
     * @classdesc Represents a mahjong_ermj_baopai_change_rsp.
     * @implements Imahjong_ermj_baopai_change_rsp
     * @constructor
     * @param {Imahjong_ermj_baopai_change_rsp=} [properties] Properties to set
     */
    function mahjong_ermj_baopai_change_rsp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_baopai_change_rsp nChairId.
     * @member {number} nChairId
     * @memberof mahjong_ermj_baopai_change_rsp
     * @instance
     */
    mahjong_ermj_baopai_change_rsp.prototype.nChairId = 0;

    /**
     * mahjong_ermj_baopai_change_rsp nRet.
     * @member {number} nRet
     * @memberof mahjong_ermj_baopai_change_rsp
     * @instance
     */
    mahjong_ermj_baopai_change_rsp.prototype.nRet = 0;

    /**
     * Creates a new mahjong_ermj_baopai_change_rsp instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_baopai_change_rsp
     * @static
     * @param {Imahjong_ermj_baopai_change_rsp=} [properties] Properties to set
     * @returns {mahjong_ermj_baopai_change_rsp} mahjong_ermj_baopai_change_rsp instance
     */
    mahjong_ermj_baopai_change_rsp.create = function create(properties) {
        return new mahjong_ermj_baopai_change_rsp(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_baopai_change_rsp message. Does not implicitly {@link mahjong_ermj_baopai_change_rsp.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_baopai_change_rsp
     * @static
     * @param {Imahjong_ermj_baopai_change_rsp} message mahjong_ermj_baopai_change_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_baopai_change_rsp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nRet);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_baopai_change_rsp message, length delimited. Does not implicitly {@link mahjong_ermj_baopai_change_rsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_baopai_change_rsp
     * @static
     * @param {Imahjong_ermj_baopai_change_rsp} message mahjong_ermj_baopai_change_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_baopai_change_rsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_baopai_change_rsp message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_baopai_change_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_baopai_change_rsp} mahjong_ermj_baopai_change_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_baopai_change_rsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_baopai_change_rsp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nChairId = reader.int32();
                break;
            case 2:
                message.nRet = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nChairId"))
            throw $util.ProtocolError("missing required 'nChairId'", { instance: message });
        if (!message.hasOwnProperty("nRet"))
            throw $util.ProtocolError("missing required 'nRet'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_baopai_change_rsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_baopai_change_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_baopai_change_rsp} mahjong_ermj_baopai_change_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_baopai_change_rsp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_baopai_change_rsp message.
     * @function verify
     * @memberof mahjong_ermj_baopai_change_rsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_baopai_change_rsp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nChairId))
            return "nChairId: integer expected";
        if (!$util.isInteger(message.nRet))
            return "nRet: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_baopai_change_rsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_baopai_change_rsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_baopai_change_rsp} mahjong_ermj_baopai_change_rsp
     */
    mahjong_ermj_baopai_change_rsp.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_baopai_change_rsp)
            return object;
        var message = new $root.mahjong_ermj_baopai_change_rsp();
        if (object.nChairId != null)
            message.nChairId = object.nChairId | 0;
        if (object.nRet != null)
            message.nRet = object.nRet | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_baopai_change_rsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_baopai_change_rsp
     * @static
     * @param {mahjong_ermj_baopai_change_rsp} message mahjong_ermj_baopai_change_rsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_baopai_change_rsp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nChairId = 0;
            object.nRet = 0;
        }
        if (message.nChairId != null && message.hasOwnProperty("nChairId"))
            object.nChairId = message.nChairId;
        if (message.nRet != null && message.hasOwnProperty("nRet"))
            object.nRet = message.nRet;
        return object;
    };

    /**
     * Converts this mahjong_ermj_baopai_change_rsp to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_baopai_change_rsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_baopai_change_rsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_baopai_change_rsp;
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

$root.mahjong_ermj_Cli_Auto_Req = (function() {

    /**
     * Properties of a mahjong_ermj_Cli_Auto_Req.
     * @exports Imahjong_ermj_Cli_Auto_Req
     * @interface Imahjong_ermj_Cli_Auto_Req
     * @property {number} cAuto mahjong_ermj_Cli_Auto_Req cAuto
     * @property {number} iAutoType mahjong_ermj_Cli_Auto_Req iAutoType
     */

    /**
     * Constructs a new mahjong_ermj_Cli_Auto_Req.
     * @exports mahjong_ermj_Cli_Auto_Req
     * @classdesc Represents a mahjong_ermj_Cli_Auto_Req.
     * @implements Imahjong_ermj_Cli_Auto_Req
     * @constructor
     * @param {Imahjong_ermj_Cli_Auto_Req=} [properties] Properties to set
     */
    function mahjong_ermj_Cli_Auto_Req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_Cli_Auto_Req cAuto.
     * @member {number} cAuto
     * @memberof mahjong_ermj_Cli_Auto_Req
     * @instance
     */
    mahjong_ermj_Cli_Auto_Req.prototype.cAuto = 0;

    /**
     * mahjong_ermj_Cli_Auto_Req iAutoType.
     * @member {number} iAutoType
     * @memberof mahjong_ermj_Cli_Auto_Req
     * @instance
     */
    mahjong_ermj_Cli_Auto_Req.prototype.iAutoType = 0;

    /**
     * Creates a new mahjong_ermj_Cli_Auto_Req instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_Cli_Auto_Req
     * @static
     * @param {Imahjong_ermj_Cli_Auto_Req=} [properties] Properties to set
     * @returns {mahjong_ermj_Cli_Auto_Req} mahjong_ermj_Cli_Auto_Req instance
     */
    mahjong_ermj_Cli_Auto_Req.create = function create(properties) {
        return new mahjong_ermj_Cli_Auto_Req(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_Cli_Auto_Req message. Does not implicitly {@link mahjong_ermj_Cli_Auto_Req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_Cli_Auto_Req
     * @static
     * @param {Imahjong_ermj_Cli_Auto_Req} message mahjong_ermj_Cli_Auto_Req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_Cli_Auto_Req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cAuto);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.iAutoType);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_Cli_Auto_Req message, length delimited. Does not implicitly {@link mahjong_ermj_Cli_Auto_Req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_Cli_Auto_Req
     * @static
     * @param {Imahjong_ermj_Cli_Auto_Req} message mahjong_ermj_Cli_Auto_Req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_Cli_Auto_Req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_Cli_Auto_Req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_Cli_Auto_Req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_Cli_Auto_Req} mahjong_ermj_Cli_Auto_Req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_Cli_Auto_Req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_Cli_Auto_Req();
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
     * Decodes a mahjong_ermj_Cli_Auto_Req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_Cli_Auto_Req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_Cli_Auto_Req} mahjong_ermj_Cli_Auto_Req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_Cli_Auto_Req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_Cli_Auto_Req message.
     * @function verify
     * @memberof mahjong_ermj_Cli_Auto_Req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_Cli_Auto_Req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cAuto))
            return "cAuto: integer expected";
        if (!$util.isInteger(message.iAutoType))
            return "iAutoType: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_Cli_Auto_Req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_Cli_Auto_Req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_Cli_Auto_Req} mahjong_ermj_Cli_Auto_Req
     */
    mahjong_ermj_Cli_Auto_Req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_Cli_Auto_Req)
            return object;
        var message = new $root.mahjong_ermj_Cli_Auto_Req();
        if (object.cAuto != null)
            message.cAuto = object.cAuto | 0;
        if (object.iAutoType != null)
            message.iAutoType = object.iAutoType | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_Cli_Auto_Req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_Cli_Auto_Req
     * @static
     * @param {mahjong_ermj_Cli_Auto_Req} message mahjong_ermj_Cli_Auto_Req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_Cli_Auto_Req.toObject = function toObject(message, options) {
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
     * Converts this mahjong_ermj_Cli_Auto_Req to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_Cli_Auto_Req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_Cli_Auto_Req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_Cli_Auto_Req;
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

$root.mahjong_ermj_gc_clienttimer_not_new = (function() {

    /**
     * Properties of a mahjong_ermj_gc_clienttimer_not_new.
     * @exports Imahjong_ermj_gc_clienttimer_not_new
     * @interface Imahjong_ermj_gc_clienttimer_not_new
     * @property {number} cChairId mahjong_ermj_gc_clienttimer_not_new cChairId
     * @property {number} cNextChairId mahjong_ermj_gc_clienttimer_not_new cNextChairId
     * @property {number} nPeriod mahjong_ermj_gc_clienttimer_not_new nPeriod
     * @property {number} nOpcode mahjong_ermj_gc_clienttimer_not_new nOpcode
     */

    /**
     * Constructs a new mahjong_ermj_gc_clienttimer_not_new.
     * @exports mahjong_ermj_gc_clienttimer_not_new
     * @classdesc Represents a mahjong_ermj_gc_clienttimer_not_new.
     * @implements Imahjong_ermj_gc_clienttimer_not_new
     * @constructor
     * @param {Imahjong_ermj_gc_clienttimer_not_new=} [properties] Properties to set
     */
    function mahjong_ermj_gc_clienttimer_not_new(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_gc_clienttimer_not_new cChairId.
     * @member {number} cChairId
     * @memberof mahjong_ermj_gc_clienttimer_not_new
     * @instance
     */
    mahjong_ermj_gc_clienttimer_not_new.prototype.cChairId = 0;

    /**
     * mahjong_ermj_gc_clienttimer_not_new cNextChairId.
     * @member {number} cNextChairId
     * @memberof mahjong_ermj_gc_clienttimer_not_new
     * @instance
     */
    mahjong_ermj_gc_clienttimer_not_new.prototype.cNextChairId = 0;

    /**
     * mahjong_ermj_gc_clienttimer_not_new nPeriod.
     * @member {number} nPeriod
     * @memberof mahjong_ermj_gc_clienttimer_not_new
     * @instance
     */
    mahjong_ermj_gc_clienttimer_not_new.prototype.nPeriod = 0;

    /**
     * mahjong_ermj_gc_clienttimer_not_new nOpcode.
     * @member {number} nOpcode
     * @memberof mahjong_ermj_gc_clienttimer_not_new
     * @instance
     */
    mahjong_ermj_gc_clienttimer_not_new.prototype.nOpcode = 0;

    /**
     * Creates a new mahjong_ermj_gc_clienttimer_not_new instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_gc_clienttimer_not_new
     * @static
     * @param {Imahjong_ermj_gc_clienttimer_not_new=} [properties] Properties to set
     * @returns {mahjong_ermj_gc_clienttimer_not_new} mahjong_ermj_gc_clienttimer_not_new instance
     */
    mahjong_ermj_gc_clienttimer_not_new.create = function create(properties) {
        return new mahjong_ermj_gc_clienttimer_not_new(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_gc_clienttimer_not_new message. Does not implicitly {@link mahjong_ermj_gc_clienttimer_not_new.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_gc_clienttimer_not_new
     * @static
     * @param {Imahjong_ermj_gc_clienttimer_not_new} message mahjong_ermj_gc_clienttimer_not_new message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_gc_clienttimer_not_new.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cNextChairId);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nPeriod);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nOpcode);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_gc_clienttimer_not_new message, length delimited. Does not implicitly {@link mahjong_ermj_gc_clienttimer_not_new.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_gc_clienttimer_not_new
     * @static
     * @param {Imahjong_ermj_gc_clienttimer_not_new} message mahjong_ermj_gc_clienttimer_not_new message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_gc_clienttimer_not_new.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_gc_clienttimer_not_new message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_gc_clienttimer_not_new
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_gc_clienttimer_not_new} mahjong_ermj_gc_clienttimer_not_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_gc_clienttimer_not_new.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_gc_clienttimer_not_new();
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
     * Decodes a mahjong_ermj_gc_clienttimer_not_new message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_gc_clienttimer_not_new
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_gc_clienttimer_not_new} mahjong_ermj_gc_clienttimer_not_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_gc_clienttimer_not_new.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_gc_clienttimer_not_new message.
     * @function verify
     * @memberof mahjong_ermj_gc_clienttimer_not_new
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_gc_clienttimer_not_new.verify = function verify(message) {
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
     * Creates a mahjong_ermj_gc_clienttimer_not_new message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_gc_clienttimer_not_new
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_gc_clienttimer_not_new} mahjong_ermj_gc_clienttimer_not_new
     */
    mahjong_ermj_gc_clienttimer_not_new.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_gc_clienttimer_not_new)
            return object;
        var message = new $root.mahjong_ermj_gc_clienttimer_not_new();
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
     * Creates a plain object from a mahjong_ermj_gc_clienttimer_not_new message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_gc_clienttimer_not_new
     * @static
     * @param {mahjong_ermj_gc_clienttimer_not_new} message mahjong_ermj_gc_clienttimer_not_new
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_gc_clienttimer_not_new.toObject = function toObject(message, options) {
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
     * Converts this mahjong_ermj_gc_clienttimer_not_new to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_gc_clienttimer_not_new
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_gc_clienttimer_not_new.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_gc_clienttimer_not_new;
})();

$root.mahjong_ermj_changecard_not = (function() {

    /**
     * Properties of a mahjong_ermj_changecard_not.
     * @exports Imahjong_ermj_changecard_not
     * @interface Imahjong_ermj_changecard_not
     * @property {number} cChairID mahjong_ermj_changecard_not cChairID
     * @property {Array.<number>|null} [vecDisplayCards] mahjong_ermj_changecard_not vecDisplayCards
     * @property {Array.<number>|null} [vecDisplayHua] mahjong_ermj_changecard_not vecDisplayHua
     * @property {Array.<number>|null} [vecLeftCards] mahjong_ermj_changecard_not vecLeftCards
     * @property {Array.<number>|null} [vecHandCards] mahjong_ermj_changecard_not vecHandCards
     */

    /**
     * Constructs a new mahjong_ermj_changecard_not.
     * @exports mahjong_ermj_changecard_not
     * @classdesc Represents a mahjong_ermj_changecard_not.
     * @implements Imahjong_ermj_changecard_not
     * @constructor
     * @param {Imahjong_ermj_changecard_not=} [properties] Properties to set
     */
    function mahjong_ermj_changecard_not(properties) {
        this.vecDisplayCards = [];
        this.vecDisplayHua = [];
        this.vecLeftCards = [];
        this.vecHandCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_changecard_not cChairID.
     * @member {number} cChairID
     * @memberof mahjong_ermj_changecard_not
     * @instance
     */
    mahjong_ermj_changecard_not.prototype.cChairID = 0;

    /**
     * mahjong_ermj_changecard_not vecDisplayCards.
     * @member {Array.<number>} vecDisplayCards
     * @memberof mahjong_ermj_changecard_not
     * @instance
     */
    mahjong_ermj_changecard_not.prototype.vecDisplayCards = $util.emptyArray;

    /**
     * mahjong_ermj_changecard_not vecDisplayHua.
     * @member {Array.<number>} vecDisplayHua
     * @memberof mahjong_ermj_changecard_not
     * @instance
     */
    mahjong_ermj_changecard_not.prototype.vecDisplayHua = $util.emptyArray;

    /**
     * mahjong_ermj_changecard_not vecLeftCards.
     * @member {Array.<number>} vecLeftCards
     * @memberof mahjong_ermj_changecard_not
     * @instance
     */
    mahjong_ermj_changecard_not.prototype.vecLeftCards = $util.emptyArray;

    /**
     * mahjong_ermj_changecard_not vecHandCards.
     * @member {Array.<number>} vecHandCards
     * @memberof mahjong_ermj_changecard_not
     * @instance
     */
    mahjong_ermj_changecard_not.prototype.vecHandCards = $util.emptyArray;

    /**
     * Creates a new mahjong_ermj_changecard_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_changecard_not
     * @static
     * @param {Imahjong_ermj_changecard_not=} [properties] Properties to set
     * @returns {mahjong_ermj_changecard_not} mahjong_ermj_changecard_not instance
     */
    mahjong_ermj_changecard_not.create = function create(properties) {
        return new mahjong_ermj_changecard_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_changecard_not message. Does not implicitly {@link mahjong_ermj_changecard_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_changecard_not
     * @static
     * @param {Imahjong_ermj_changecard_not} message mahjong_ermj_changecard_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_changecard_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        if (message.vecDisplayCards != null && message.vecDisplayCards.length)
            for (var i = 0; i < message.vecDisplayCards.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.vecDisplayCards[i]);
        if (message.vecDisplayHua != null && message.vecDisplayHua.length)
            for (var i = 0; i < message.vecDisplayHua.length; ++i)
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.vecDisplayHua[i]);
        if (message.vecLeftCards != null && message.vecLeftCards.length)
            for (var i = 0; i < message.vecLeftCards.length; ++i)
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.vecLeftCards[i]);
        if (message.vecHandCards != null && message.vecHandCards.length)
            for (var i = 0; i < message.vecHandCards.length; ++i)
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.vecHandCards[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_changecard_not message, length delimited. Does not implicitly {@link mahjong_ermj_changecard_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_changecard_not
     * @static
     * @param {Imahjong_ermj_changecard_not} message mahjong_ermj_changecard_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_changecard_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_changecard_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_changecard_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_changecard_not} mahjong_ermj_changecard_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_changecard_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_changecard_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairID = reader.int32();
                break;
            case 2:
                if (!(message.vecDisplayCards && message.vecDisplayCards.length))
                    message.vecDisplayCards = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecDisplayCards.push(reader.int32());
                } else
                    message.vecDisplayCards.push(reader.int32());
                break;
            case 3:
                if (!(message.vecDisplayHua && message.vecDisplayHua.length))
                    message.vecDisplayHua = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecDisplayHua.push(reader.int32());
                } else
                    message.vecDisplayHua.push(reader.int32());
                break;
            case 4:
                if (!(message.vecLeftCards && message.vecLeftCards.length))
                    message.vecLeftCards = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecLeftCards.push(reader.int32());
                } else
                    message.vecLeftCards.push(reader.int32());
                break;
            case 5:
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
        return message;
    };

    /**
     * Decodes a mahjong_ermj_changecard_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_changecard_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_changecard_not} mahjong_ermj_changecard_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_changecard_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_changecard_not message.
     * @function verify
     * @memberof mahjong_ermj_changecard_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_changecard_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
        if (message.vecDisplayCards != null && message.hasOwnProperty("vecDisplayCards")) {
            if (!Array.isArray(message.vecDisplayCards))
                return "vecDisplayCards: array expected";
            for (var i = 0; i < message.vecDisplayCards.length; ++i)
                if (!$util.isInteger(message.vecDisplayCards[i]))
                    return "vecDisplayCards: integer[] expected";
        }
        if (message.vecDisplayHua != null && message.hasOwnProperty("vecDisplayHua")) {
            if (!Array.isArray(message.vecDisplayHua))
                return "vecDisplayHua: array expected";
            for (var i = 0; i < message.vecDisplayHua.length; ++i)
                if (!$util.isInteger(message.vecDisplayHua[i]))
                    return "vecDisplayHua: integer[] expected";
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
     * Creates a mahjong_ermj_changecard_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_changecard_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_changecard_not} mahjong_ermj_changecard_not
     */
    mahjong_ermj_changecard_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_changecard_not)
            return object;
        var message = new $root.mahjong_ermj_changecard_not();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.vecDisplayCards) {
            if (!Array.isArray(object.vecDisplayCards))
                throw TypeError(".mahjong_ermj_changecard_not.vecDisplayCards: array expected");
            message.vecDisplayCards = [];
            for (var i = 0; i < object.vecDisplayCards.length; ++i)
                message.vecDisplayCards[i] = object.vecDisplayCards[i] | 0;
        }
        if (object.vecDisplayHua) {
            if (!Array.isArray(object.vecDisplayHua))
                throw TypeError(".mahjong_ermj_changecard_not.vecDisplayHua: array expected");
            message.vecDisplayHua = [];
            for (var i = 0; i < object.vecDisplayHua.length; ++i)
                message.vecDisplayHua[i] = object.vecDisplayHua[i] | 0;
        }
        if (object.vecLeftCards) {
            if (!Array.isArray(object.vecLeftCards))
                throw TypeError(".mahjong_ermj_changecard_not.vecLeftCards: array expected");
            message.vecLeftCards = [];
            for (var i = 0; i < object.vecLeftCards.length; ++i)
                message.vecLeftCards[i] = object.vecLeftCards[i] | 0;
        }
        if (object.vecHandCards) {
            if (!Array.isArray(object.vecHandCards))
                throw TypeError(".mahjong_ermj_changecard_not.vecHandCards: array expected");
            message.vecHandCards = [];
            for (var i = 0; i < object.vecHandCards.length; ++i)
                message.vecHandCards[i] = object.vecHandCards[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_changecard_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_changecard_not
     * @static
     * @param {mahjong_ermj_changecard_not} message mahjong_ermj_changecard_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_changecard_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecDisplayCards = [];
            object.vecDisplayHua = [];
            object.vecLeftCards = [];
            object.vecHandCards = [];
        }
        if (options.defaults)
            object.cChairID = 0;
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.vecDisplayCards && message.vecDisplayCards.length) {
            object.vecDisplayCards = [];
            for (var j = 0; j < message.vecDisplayCards.length; ++j)
                object.vecDisplayCards[j] = message.vecDisplayCards[j];
        }
        if (message.vecDisplayHua && message.vecDisplayHua.length) {
            object.vecDisplayHua = [];
            for (var j = 0; j < message.vecDisplayHua.length; ++j)
                object.vecDisplayHua[j] = message.vecDisplayHua[j];
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
     * Converts this mahjong_ermj_changecard_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_changecard_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_changecard_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_changecard_not;
})();

$root.mahjong_ermj_completedata_req = (function() {

    /**
     * Properties of a mahjong_ermj_completedata_req.
     * @exports Imahjong_ermj_completedata_req
     * @interface Imahjong_ermj_completedata_req
     */

    /**
     * Constructs a new mahjong_ermj_completedata_req.
     * @exports mahjong_ermj_completedata_req
     * @classdesc Represents a mahjong_ermj_completedata_req.
     * @implements Imahjong_ermj_completedata_req
     * @constructor
     * @param {Imahjong_ermj_completedata_req=} [properties] Properties to set
     */
    function mahjong_ermj_completedata_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_ermj_completedata_req instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_completedata_req
     * @static
     * @param {Imahjong_ermj_completedata_req=} [properties] Properties to set
     * @returns {mahjong_ermj_completedata_req} mahjong_ermj_completedata_req instance
     */
    mahjong_ermj_completedata_req.create = function create(properties) {
        return new mahjong_ermj_completedata_req(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_completedata_req message. Does not implicitly {@link mahjong_ermj_completedata_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_completedata_req
     * @static
     * @param {Imahjong_ermj_completedata_req} message mahjong_ermj_completedata_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_completedata_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_completedata_req message, length delimited. Does not implicitly {@link mahjong_ermj_completedata_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_completedata_req
     * @static
     * @param {Imahjong_ermj_completedata_req} message mahjong_ermj_completedata_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_completedata_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_completedata_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_completedata_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_completedata_req} mahjong_ermj_completedata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_completedata_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_completedata_req();
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
     * Decodes a mahjong_ermj_completedata_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_completedata_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_completedata_req} mahjong_ermj_completedata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_completedata_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_completedata_req message.
     * @function verify
     * @memberof mahjong_ermj_completedata_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_completedata_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_completedata_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_completedata_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_completedata_req} mahjong_ermj_completedata_req
     */
    mahjong_ermj_completedata_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_completedata_req)
            return object;
        return new $root.mahjong_ermj_completedata_req();
    };

    /**
     * Creates a plain object from a mahjong_ermj_completedata_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_completedata_req
     * @static
     * @param {mahjong_ermj_completedata_req} message mahjong_ermj_completedata_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_completedata_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_ermj_completedata_req to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_completedata_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_completedata_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_completedata_req;
})();

$root.mahjong_ermj_hupai_ratio_req = (function() {

    /**
     * Properties of a mahjong_ermj_hupai_ratio_req.
     * @exports Imahjong_ermj_hupai_ratio_req
     * @interface Imahjong_ermj_hupai_ratio_req
     * @property {number} nChairId mahjong_ermj_hupai_ratio_req nChairId
     */

    /**
     * Constructs a new mahjong_ermj_hupai_ratio_req.
     * @exports mahjong_ermj_hupai_ratio_req
     * @classdesc Represents a mahjong_ermj_hupai_ratio_req.
     * @implements Imahjong_ermj_hupai_ratio_req
     * @constructor
     * @param {Imahjong_ermj_hupai_ratio_req=} [properties] Properties to set
     */
    function mahjong_ermj_hupai_ratio_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_hupai_ratio_req nChairId.
     * @member {number} nChairId
     * @memberof mahjong_ermj_hupai_ratio_req
     * @instance
     */
    mahjong_ermj_hupai_ratio_req.prototype.nChairId = 0;

    /**
     * Creates a new mahjong_ermj_hupai_ratio_req instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_hupai_ratio_req
     * @static
     * @param {Imahjong_ermj_hupai_ratio_req=} [properties] Properties to set
     * @returns {mahjong_ermj_hupai_ratio_req} mahjong_ermj_hupai_ratio_req instance
     */
    mahjong_ermj_hupai_ratio_req.create = function create(properties) {
        return new mahjong_ermj_hupai_ratio_req(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_hupai_ratio_req message. Does not implicitly {@link mahjong_ermj_hupai_ratio_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_hupai_ratio_req
     * @static
     * @param {Imahjong_ermj_hupai_ratio_req} message mahjong_ermj_hupai_ratio_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_hupai_ratio_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nChairId);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_hupai_ratio_req message, length delimited. Does not implicitly {@link mahjong_ermj_hupai_ratio_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_hupai_ratio_req
     * @static
     * @param {Imahjong_ermj_hupai_ratio_req} message mahjong_ermj_hupai_ratio_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_hupai_ratio_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_hupai_ratio_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_hupai_ratio_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_hupai_ratio_req} mahjong_ermj_hupai_ratio_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_hupai_ratio_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_hupai_ratio_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nChairId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nChairId"))
            throw $util.ProtocolError("missing required 'nChairId'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_hupai_ratio_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_hupai_ratio_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_hupai_ratio_req} mahjong_ermj_hupai_ratio_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_hupai_ratio_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_hupai_ratio_req message.
     * @function verify
     * @memberof mahjong_ermj_hupai_ratio_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_hupai_ratio_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nChairId))
            return "nChairId: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_hupai_ratio_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_hupai_ratio_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_hupai_ratio_req} mahjong_ermj_hupai_ratio_req
     */
    mahjong_ermj_hupai_ratio_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_hupai_ratio_req)
            return object;
        var message = new $root.mahjong_ermj_hupai_ratio_req();
        if (object.nChairId != null)
            message.nChairId = object.nChairId | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_hupai_ratio_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_hupai_ratio_req
     * @static
     * @param {mahjong_ermj_hupai_ratio_req} message mahjong_ermj_hupai_ratio_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_hupai_ratio_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.nChairId = 0;
        if (message.nChairId != null && message.hasOwnProperty("nChairId"))
            object.nChairId = message.nChairId;
        return object;
    };

    /**
     * Converts this mahjong_ermj_hupai_ratio_req to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_hupai_ratio_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_hupai_ratio_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_hupai_ratio_req;
})();

$root.mahjong_ermj_Svr_Auto_Not = (function() {

    /**
     * Properties of a mahjong_ermj_Svr_Auto_Not.
     * @exports Imahjong_ermj_Svr_Auto_Not
     * @interface Imahjong_ermj_Svr_Auto_Not
     * @property {number} cChairID mahjong_ermj_Svr_Auto_Not cChairID
     * @property {number} cAuto mahjong_ermj_Svr_Auto_Not cAuto
     * @property {number} iAutoType mahjong_ermj_Svr_Auto_Not iAutoType
     */

    /**
     * Constructs a new mahjong_ermj_Svr_Auto_Not.
     * @exports mahjong_ermj_Svr_Auto_Not
     * @classdesc Represents a mahjong_ermj_Svr_Auto_Not.
     * @implements Imahjong_ermj_Svr_Auto_Not
     * @constructor
     * @param {Imahjong_ermj_Svr_Auto_Not=} [properties] Properties to set
     */
    function mahjong_ermj_Svr_Auto_Not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_Svr_Auto_Not cChairID.
     * @member {number} cChairID
     * @memberof mahjong_ermj_Svr_Auto_Not
     * @instance
     */
    mahjong_ermj_Svr_Auto_Not.prototype.cChairID = 0;

    /**
     * mahjong_ermj_Svr_Auto_Not cAuto.
     * @member {number} cAuto
     * @memberof mahjong_ermj_Svr_Auto_Not
     * @instance
     */
    mahjong_ermj_Svr_Auto_Not.prototype.cAuto = 0;

    /**
     * mahjong_ermj_Svr_Auto_Not iAutoType.
     * @member {number} iAutoType
     * @memberof mahjong_ermj_Svr_Auto_Not
     * @instance
     */
    mahjong_ermj_Svr_Auto_Not.prototype.iAutoType = 0;

    /**
     * Creates a new mahjong_ermj_Svr_Auto_Not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_Svr_Auto_Not
     * @static
     * @param {Imahjong_ermj_Svr_Auto_Not=} [properties] Properties to set
     * @returns {mahjong_ermj_Svr_Auto_Not} mahjong_ermj_Svr_Auto_Not instance
     */
    mahjong_ermj_Svr_Auto_Not.create = function create(properties) {
        return new mahjong_ermj_Svr_Auto_Not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_Svr_Auto_Not message. Does not implicitly {@link mahjong_ermj_Svr_Auto_Not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_Svr_Auto_Not
     * @static
     * @param {Imahjong_ermj_Svr_Auto_Not} message mahjong_ermj_Svr_Auto_Not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_Svr_Auto_Not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cAuto);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.iAutoType);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_Svr_Auto_Not message, length delimited. Does not implicitly {@link mahjong_ermj_Svr_Auto_Not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_Svr_Auto_Not
     * @static
     * @param {Imahjong_ermj_Svr_Auto_Not} message mahjong_ermj_Svr_Auto_Not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_Svr_Auto_Not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_Svr_Auto_Not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_Svr_Auto_Not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_Svr_Auto_Not} mahjong_ermj_Svr_Auto_Not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_Svr_Auto_Not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_Svr_Auto_Not();
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
     * Decodes a mahjong_ermj_Svr_Auto_Not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_Svr_Auto_Not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_Svr_Auto_Not} mahjong_ermj_Svr_Auto_Not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_Svr_Auto_Not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_Svr_Auto_Not message.
     * @function verify
     * @memberof mahjong_ermj_Svr_Auto_Not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_Svr_Auto_Not.verify = function verify(message) {
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
     * Creates a mahjong_ermj_Svr_Auto_Not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_Svr_Auto_Not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_Svr_Auto_Not} mahjong_ermj_Svr_Auto_Not
     */
    mahjong_ermj_Svr_Auto_Not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_Svr_Auto_Not)
            return object;
        var message = new $root.mahjong_ermj_Svr_Auto_Not();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.cAuto != null)
            message.cAuto = object.cAuto | 0;
        if (object.iAutoType != null)
            message.iAutoType = object.iAutoType | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_Svr_Auto_Not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_Svr_Auto_Not
     * @static
     * @param {mahjong_ermj_Svr_Auto_Not} message mahjong_ermj_Svr_Auto_Not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_Svr_Auto_Not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_ermj_Svr_Auto_Not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_Svr_Auto_Not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_Svr_Auto_Not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_Svr_Auto_Not;
})();

$root.mahjong_ermj_mingpai_ratio_not = (function() {

    /**
     * Properties of a mahjong_ermj_mingpai_ratio_not.
     * @exports Imahjong_ermj_mingpai_ratio_not
     * @interface Imahjong_ermj_mingpai_ratio_not
     * @property {number} nChairId mahjong_ermj_mingpai_ratio_not nChairId
     * @property {number} nValue mahjong_ermj_mingpai_ratio_not nValue
     */

    /**
     * Constructs a new mahjong_ermj_mingpai_ratio_not.
     * @exports mahjong_ermj_mingpai_ratio_not
     * @classdesc Represents a mahjong_ermj_mingpai_ratio_not.
     * @implements Imahjong_ermj_mingpai_ratio_not
     * @constructor
     * @param {Imahjong_ermj_mingpai_ratio_not=} [properties] Properties to set
     */
    function mahjong_ermj_mingpai_ratio_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_mingpai_ratio_not nChairId.
     * @member {number} nChairId
     * @memberof mahjong_ermj_mingpai_ratio_not
     * @instance
     */
    mahjong_ermj_mingpai_ratio_not.prototype.nChairId = 0;

    /**
     * mahjong_ermj_mingpai_ratio_not nValue.
     * @member {number} nValue
     * @memberof mahjong_ermj_mingpai_ratio_not
     * @instance
     */
    mahjong_ermj_mingpai_ratio_not.prototype.nValue = 0;

    /**
     * Creates a new mahjong_ermj_mingpai_ratio_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_mingpai_ratio_not
     * @static
     * @param {Imahjong_ermj_mingpai_ratio_not=} [properties] Properties to set
     * @returns {mahjong_ermj_mingpai_ratio_not} mahjong_ermj_mingpai_ratio_not instance
     */
    mahjong_ermj_mingpai_ratio_not.create = function create(properties) {
        return new mahjong_ermj_mingpai_ratio_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_mingpai_ratio_not message. Does not implicitly {@link mahjong_ermj_mingpai_ratio_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_mingpai_ratio_not
     * @static
     * @param {Imahjong_ermj_mingpai_ratio_not} message mahjong_ermj_mingpai_ratio_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_mingpai_ratio_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nValue);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_mingpai_ratio_not message, length delimited. Does not implicitly {@link mahjong_ermj_mingpai_ratio_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_mingpai_ratio_not
     * @static
     * @param {Imahjong_ermj_mingpai_ratio_not} message mahjong_ermj_mingpai_ratio_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_mingpai_ratio_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_mingpai_ratio_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_mingpai_ratio_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_mingpai_ratio_not} mahjong_ermj_mingpai_ratio_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_mingpai_ratio_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_mingpai_ratio_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nChairId = reader.int32();
                break;
            case 2:
                message.nValue = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nChairId"))
            throw $util.ProtocolError("missing required 'nChairId'", { instance: message });
        if (!message.hasOwnProperty("nValue"))
            throw $util.ProtocolError("missing required 'nValue'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_mingpai_ratio_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_mingpai_ratio_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_mingpai_ratio_not} mahjong_ermj_mingpai_ratio_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_mingpai_ratio_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_mingpai_ratio_not message.
     * @function verify
     * @memberof mahjong_ermj_mingpai_ratio_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_mingpai_ratio_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nChairId))
            return "nChairId: integer expected";
        if (!$util.isInteger(message.nValue))
            return "nValue: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_mingpai_ratio_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_mingpai_ratio_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_mingpai_ratio_not} mahjong_ermj_mingpai_ratio_not
     */
    mahjong_ermj_mingpai_ratio_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_mingpai_ratio_not)
            return object;
        var message = new $root.mahjong_ermj_mingpai_ratio_not();
        if (object.nChairId != null)
            message.nChairId = object.nChairId | 0;
        if (object.nValue != null)
            message.nValue = object.nValue | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_mingpai_ratio_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_mingpai_ratio_not
     * @static
     * @param {mahjong_ermj_mingpai_ratio_not} message mahjong_ermj_mingpai_ratio_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_mingpai_ratio_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nChairId = 0;
            object.nValue = 0;
        }
        if (message.nChairId != null && message.hasOwnProperty("nChairId"))
            object.nChairId = message.nChairId;
        if (message.nValue != null && message.hasOwnProperty("nValue"))
            object.nValue = message.nValue;
        return object;
    };

    /**
     * Converts this mahjong_ermj_mingpai_ratio_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_mingpai_ratio_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_mingpai_ratio_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_mingpai_ratio_not;
})();

$root.mahjong_ermj_completedata_not_new = (function() {

    /**
     * Properties of a mahjong_ermj_completedata_not_new.
     * @exports Imahjong_ermj_completedata_not_new
     * @interface Imahjong_ermj_completedata_not_new
     * @property {number} nDiZhu mahjong_ermj_completedata_not_new nDiZhu
     * @property {number} cBanker mahjong_ermj_completedata_not_new cBanker
     * @property {number} nAllScore mahjong_ermj_completedata_not_new nAllScore
     * @property {number} cWallEndChair mahjong_ermj_completedata_not_new cWallEndChair
     * @property {number} cWallEndPos mahjong_ermj_completedata_not_new cWallEndPos
     * @property {number} cWallCardNum mahjong_ermj_completedata_not_new cWallCardNum
     * @property {number} cGangTotalNum mahjong_ermj_completedata_not_new cGangTotalNum
     * @property {Array.<number>|null} [vecHuaNum] mahjong_ermj_completedata_not_new vecHuaNum
     * @property {number} cAutoState mahjong_ermj_completedata_not_new cAutoState
     * @property {number} cAutoType mahjong_ermj_completedata_not_new cAutoType
     * @property {number} nChuPai mahjong_ermj_completedata_not_new nChuPai
     * @property {number} nVisitorAmount mahjong_ermj_completedata_not_new nVisitorAmount
     * @property {number} sSerialID mahjong_ermj_completedata_not_new sSerialID
     * @property {Array.<Imahjong_ermj_changecard_not>|null} [vecPlyData] mahjong_ermj_completedata_not_new vecPlyData
     * @property {Array.<number|Long>|null} [vecFakeScores] mahjong_ermj_completedata_not_new vecFakeScores
     * @property {Array.<number>|null} [vecTingPly] mahjong_ermj_completedata_not_new vecTingPly
     */

    /**
     * Constructs a new mahjong_ermj_completedata_not_new.
     * @exports mahjong_ermj_completedata_not_new
     * @classdesc Represents a mahjong_ermj_completedata_not_new.
     * @implements Imahjong_ermj_completedata_not_new
     * @constructor
     * @param {Imahjong_ermj_completedata_not_new=} [properties] Properties to set
     */
    function mahjong_ermj_completedata_not_new(properties) {
        this.vecHuaNum = [];
        this.vecPlyData = [];
        this.vecFakeScores = [];
        this.vecTingPly = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_completedata_not_new nDiZhu.
     * @member {number} nDiZhu
     * @memberof mahjong_ermj_completedata_not_new
     * @instance
     */
    mahjong_ermj_completedata_not_new.prototype.nDiZhu = 0;

    /**
     * mahjong_ermj_completedata_not_new cBanker.
     * @member {number} cBanker
     * @memberof mahjong_ermj_completedata_not_new
     * @instance
     */
    mahjong_ermj_completedata_not_new.prototype.cBanker = 0;

    /**
     * mahjong_ermj_completedata_not_new nAllScore.
     * @member {number} nAllScore
     * @memberof mahjong_ermj_completedata_not_new
     * @instance
     */
    mahjong_ermj_completedata_not_new.prototype.nAllScore = 0;

    /**
     * mahjong_ermj_completedata_not_new cWallEndChair.
     * @member {number} cWallEndChair
     * @memberof mahjong_ermj_completedata_not_new
     * @instance
     */
    mahjong_ermj_completedata_not_new.prototype.cWallEndChair = 0;

    /**
     * mahjong_ermj_completedata_not_new cWallEndPos.
     * @member {number} cWallEndPos
     * @memberof mahjong_ermj_completedata_not_new
     * @instance
     */
    mahjong_ermj_completedata_not_new.prototype.cWallEndPos = 0;

    /**
     * mahjong_ermj_completedata_not_new cWallCardNum.
     * @member {number} cWallCardNum
     * @memberof mahjong_ermj_completedata_not_new
     * @instance
     */
    mahjong_ermj_completedata_not_new.prototype.cWallCardNum = 0;

    /**
     * mahjong_ermj_completedata_not_new cGangTotalNum.
     * @member {number} cGangTotalNum
     * @memberof mahjong_ermj_completedata_not_new
     * @instance
     */
    mahjong_ermj_completedata_not_new.prototype.cGangTotalNum = 0;

    /**
     * mahjong_ermj_completedata_not_new vecHuaNum.
     * @member {Array.<number>} vecHuaNum
     * @memberof mahjong_ermj_completedata_not_new
     * @instance
     */
    mahjong_ermj_completedata_not_new.prototype.vecHuaNum = $util.emptyArray;

    /**
     * mahjong_ermj_completedata_not_new cAutoState.
     * @member {number} cAutoState
     * @memberof mahjong_ermj_completedata_not_new
     * @instance
     */
    mahjong_ermj_completedata_not_new.prototype.cAutoState = 0;

    /**
     * mahjong_ermj_completedata_not_new cAutoType.
     * @member {number} cAutoType
     * @memberof mahjong_ermj_completedata_not_new
     * @instance
     */
    mahjong_ermj_completedata_not_new.prototype.cAutoType = 0;

    /**
     * mahjong_ermj_completedata_not_new nChuPai.
     * @member {number} nChuPai
     * @memberof mahjong_ermj_completedata_not_new
     * @instance
     */
    mahjong_ermj_completedata_not_new.prototype.nChuPai = 0;

    /**
     * mahjong_ermj_completedata_not_new nVisitorAmount.
     * @member {number} nVisitorAmount
     * @memberof mahjong_ermj_completedata_not_new
     * @instance
     */
    mahjong_ermj_completedata_not_new.prototype.nVisitorAmount = 0;

    /**
     * mahjong_ermj_completedata_not_new sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_ermj_completedata_not_new
     * @instance
     */
    mahjong_ermj_completedata_not_new.prototype.sSerialID = 0;

    /**
     * mahjong_ermj_completedata_not_new vecPlyData.
     * @member {Array.<Imahjong_ermj_changecard_not>} vecPlyData
     * @memberof mahjong_ermj_completedata_not_new
     * @instance
     */
    mahjong_ermj_completedata_not_new.prototype.vecPlyData = $util.emptyArray;

    /**
     * mahjong_ermj_completedata_not_new vecFakeScores.
     * @member {Array.<number|Long>} vecFakeScores
     * @memberof mahjong_ermj_completedata_not_new
     * @instance
     */
    mahjong_ermj_completedata_not_new.prototype.vecFakeScores = $util.emptyArray;

    /**
     * mahjong_ermj_completedata_not_new vecTingPly.
     * @member {Array.<number>} vecTingPly
     * @memberof mahjong_ermj_completedata_not_new
     * @instance
     */
    mahjong_ermj_completedata_not_new.prototype.vecTingPly = $util.emptyArray;

    /**
     * Creates a new mahjong_ermj_completedata_not_new instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_completedata_not_new
     * @static
     * @param {Imahjong_ermj_completedata_not_new=} [properties] Properties to set
     * @returns {mahjong_ermj_completedata_not_new} mahjong_ermj_completedata_not_new instance
     */
    mahjong_ermj_completedata_not_new.create = function create(properties) {
        return new mahjong_ermj_completedata_not_new(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_completedata_not_new message. Does not implicitly {@link mahjong_ermj_completedata_not_new.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_completedata_not_new
     * @static
     * @param {Imahjong_ermj_completedata_not_new} message mahjong_ermj_completedata_not_new message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_completedata_not_new.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nDiZhu);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cBanker);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nAllScore);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cWallEndChair);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cWallEndPos);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cWallCardNum);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.cGangTotalNum);
        if (message.vecHuaNum != null && message.vecHuaNum.length)
            for (var i = 0; i < message.vecHuaNum.length; ++i)
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.vecHuaNum[i]);
        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.cAutoState);
        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.cAutoType);
        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.nChuPai);
        writer.uint32(/* id 12, wireType 0 =*/96).int32(message.nVisitorAmount);
        writer.uint32(/* id 13, wireType 0 =*/104).int32(message.sSerialID);
        if (message.vecPlyData != null && message.vecPlyData.length)
            for (var i = 0; i < message.vecPlyData.length; ++i)
                $root.mahjong_ermj_changecard_not.encode(message.vecPlyData[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.vecFakeScores != null && message.vecFakeScores.length)
            for (var i = 0; i < message.vecFakeScores.length; ++i)
                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.vecFakeScores[i]);
        if (message.vecTingPly != null && message.vecTingPly.length)
            for (var i = 0; i < message.vecTingPly.length; ++i)
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.vecTingPly[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_completedata_not_new message, length delimited. Does not implicitly {@link mahjong_ermj_completedata_not_new.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_completedata_not_new
     * @static
     * @param {Imahjong_ermj_completedata_not_new} message mahjong_ermj_completedata_not_new message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_completedata_not_new.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_completedata_not_new message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_completedata_not_new
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_completedata_not_new} mahjong_ermj_completedata_not_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_completedata_not_new.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_completedata_not_new();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nDiZhu = reader.int32();
                break;
            case 2:
                message.cBanker = reader.int32();
                break;
            case 3:
                message.nAllScore = reader.int32();
                break;
            case 4:
                message.cWallEndChair = reader.int32();
                break;
            case 5:
                message.cWallEndPos = reader.int32();
                break;
            case 6:
                message.cWallCardNum = reader.int32();
                break;
            case 7:
                message.cGangTotalNum = reader.int32();
                break;
            case 8:
                if (!(message.vecHuaNum && message.vecHuaNum.length))
                    message.vecHuaNum = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecHuaNum.push(reader.int32());
                } else
                    message.vecHuaNum.push(reader.int32());
                break;
            case 9:
                message.cAutoState = reader.int32();
                break;
            case 10:
                message.cAutoType = reader.int32();
                break;
            case 11:
                message.nChuPai = reader.int32();
                break;
            case 12:
                message.nVisitorAmount = reader.int32();
                break;
            case 13:
                message.sSerialID = reader.int32();
                break;
            case 14:
                if (!(message.vecPlyData && message.vecPlyData.length))
                    message.vecPlyData = [];
                message.vecPlyData.push($root.mahjong_ermj_changecard_not.decode(reader, reader.uint32()));
                break;
            case 15:
                if (!(message.vecFakeScores && message.vecFakeScores.length))
                    message.vecFakeScores = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecFakeScores.push(reader.int64());
                } else
                    message.vecFakeScores.push(reader.int64());
                break;
            case 16:
                if (!(message.vecTingPly && message.vecTingPly.length))
                    message.vecTingPly = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecTingPly.push(reader.int32());
                } else
                    message.vecTingPly.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nDiZhu"))
            throw $util.ProtocolError("missing required 'nDiZhu'", { instance: message });
        if (!message.hasOwnProperty("cBanker"))
            throw $util.ProtocolError("missing required 'cBanker'", { instance: message });
        if (!message.hasOwnProperty("nAllScore"))
            throw $util.ProtocolError("missing required 'nAllScore'", { instance: message });
        if (!message.hasOwnProperty("cWallEndChair"))
            throw $util.ProtocolError("missing required 'cWallEndChair'", { instance: message });
        if (!message.hasOwnProperty("cWallEndPos"))
            throw $util.ProtocolError("missing required 'cWallEndPos'", { instance: message });
        if (!message.hasOwnProperty("cWallCardNum"))
            throw $util.ProtocolError("missing required 'cWallCardNum'", { instance: message });
        if (!message.hasOwnProperty("cGangTotalNum"))
            throw $util.ProtocolError("missing required 'cGangTotalNum'", { instance: message });
        if (!message.hasOwnProperty("cAutoState"))
            throw $util.ProtocolError("missing required 'cAutoState'", { instance: message });
        if (!message.hasOwnProperty("cAutoType"))
            throw $util.ProtocolError("missing required 'cAutoType'", { instance: message });
        if (!message.hasOwnProperty("nChuPai"))
            throw $util.ProtocolError("missing required 'nChuPai'", { instance: message });
        if (!message.hasOwnProperty("nVisitorAmount"))
            throw $util.ProtocolError("missing required 'nVisitorAmount'", { instance: message });
        if (!message.hasOwnProperty("sSerialID"))
            throw $util.ProtocolError("missing required 'sSerialID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_completedata_not_new message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_completedata_not_new
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_completedata_not_new} mahjong_ermj_completedata_not_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_completedata_not_new.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_completedata_not_new message.
     * @function verify
     * @memberof mahjong_ermj_completedata_not_new
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_completedata_not_new.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nDiZhu))
            return "nDiZhu: integer expected";
        if (!$util.isInteger(message.cBanker))
            return "cBanker: integer expected";
        if (!$util.isInteger(message.nAllScore))
            return "nAllScore: integer expected";
        if (!$util.isInteger(message.cWallEndChair))
            return "cWallEndChair: integer expected";
        if (!$util.isInteger(message.cWallEndPos))
            return "cWallEndPos: integer expected";
        if (!$util.isInteger(message.cWallCardNum))
            return "cWallCardNum: integer expected";
        if (!$util.isInteger(message.cGangTotalNum))
            return "cGangTotalNum: integer expected";
        if (message.vecHuaNum != null && message.hasOwnProperty("vecHuaNum")) {
            if (!Array.isArray(message.vecHuaNum))
                return "vecHuaNum: array expected";
            for (var i = 0; i < message.vecHuaNum.length; ++i)
                if (!$util.isInteger(message.vecHuaNum[i]))
                    return "vecHuaNum: integer[] expected";
        }
        if (!$util.isInteger(message.cAutoState))
            return "cAutoState: integer expected";
        if (!$util.isInteger(message.cAutoType))
            return "cAutoType: integer expected";
        if (!$util.isInteger(message.nChuPai))
            return "nChuPai: integer expected";
        if (!$util.isInteger(message.nVisitorAmount))
            return "nVisitorAmount: integer expected";
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        if (message.vecPlyData != null && message.hasOwnProperty("vecPlyData")) {
            if (!Array.isArray(message.vecPlyData))
                return "vecPlyData: array expected";
            for (var i = 0; i < message.vecPlyData.length; ++i) {
                var error = $root.mahjong_ermj_changecard_not.verify(message.vecPlyData[i]);
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
        if (message.vecTingPly != null && message.hasOwnProperty("vecTingPly")) {
            if (!Array.isArray(message.vecTingPly))
                return "vecTingPly: array expected";
            for (var i = 0; i < message.vecTingPly.length; ++i)
                if (!$util.isInteger(message.vecTingPly[i]))
                    return "vecTingPly: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_ermj_completedata_not_new message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_completedata_not_new
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_completedata_not_new} mahjong_ermj_completedata_not_new
     */
    mahjong_ermj_completedata_not_new.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_completedata_not_new)
            return object;
        var message = new $root.mahjong_ermj_completedata_not_new();
        if (object.nDiZhu != null)
            message.nDiZhu = object.nDiZhu | 0;
        if (object.cBanker != null)
            message.cBanker = object.cBanker | 0;
        if (object.nAllScore != null)
            message.nAllScore = object.nAllScore | 0;
        if (object.cWallEndChair != null)
            message.cWallEndChair = object.cWallEndChair | 0;
        if (object.cWallEndPos != null)
            message.cWallEndPos = object.cWallEndPos | 0;
        if (object.cWallCardNum != null)
            message.cWallCardNum = object.cWallCardNum | 0;
        if (object.cGangTotalNum != null)
            message.cGangTotalNum = object.cGangTotalNum | 0;
        if (object.vecHuaNum) {
            if (!Array.isArray(object.vecHuaNum))
                throw TypeError(".mahjong_ermj_completedata_not_new.vecHuaNum: array expected");
            message.vecHuaNum = [];
            for (var i = 0; i < object.vecHuaNum.length; ++i)
                message.vecHuaNum[i] = object.vecHuaNum[i] | 0;
        }
        if (object.cAutoState != null)
            message.cAutoState = object.cAutoState | 0;
        if (object.cAutoType != null)
            message.cAutoType = object.cAutoType | 0;
        if (object.nChuPai != null)
            message.nChuPai = object.nChuPai | 0;
        if (object.nVisitorAmount != null)
            message.nVisitorAmount = object.nVisitorAmount | 0;
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        if (object.vecPlyData) {
            if (!Array.isArray(object.vecPlyData))
                throw TypeError(".mahjong_ermj_completedata_not_new.vecPlyData: array expected");
            message.vecPlyData = [];
            for (var i = 0; i < object.vecPlyData.length; ++i) {
                if (typeof object.vecPlyData[i] !== "object")
                    throw TypeError(".mahjong_ermj_completedata_not_new.vecPlyData: object expected");
                message.vecPlyData[i] = $root.mahjong_ermj_changecard_not.fromObject(object.vecPlyData[i]);
            }
        }
        if (object.vecFakeScores) {
            if (!Array.isArray(object.vecFakeScores))
                throw TypeError(".mahjong_ermj_completedata_not_new.vecFakeScores: array expected");
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
        if (object.vecTingPly) {
            if (!Array.isArray(object.vecTingPly))
                throw TypeError(".mahjong_ermj_completedata_not_new.vecTingPly: array expected");
            message.vecTingPly = [];
            for (var i = 0; i < object.vecTingPly.length; ++i)
                message.vecTingPly[i] = object.vecTingPly[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_completedata_not_new message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_completedata_not_new
     * @static
     * @param {mahjong_ermj_completedata_not_new} message mahjong_ermj_completedata_not_new
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_completedata_not_new.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecHuaNum = [];
            object.vecPlyData = [];
            object.vecFakeScores = [];
            object.vecTingPly = [];
        }
        if (options.defaults) {
            object.nDiZhu = 0;
            object.cBanker = 0;
            object.nAllScore = 0;
            object.cWallEndChair = 0;
            object.cWallEndPos = 0;
            object.cWallCardNum = 0;
            object.cGangTotalNum = 0;
            object.cAutoState = 0;
            object.cAutoType = 0;
            object.nChuPai = 0;
            object.nVisitorAmount = 0;
            object.sSerialID = 0;
        }
        if (message.nDiZhu != null && message.hasOwnProperty("nDiZhu"))
            object.nDiZhu = message.nDiZhu;
        if (message.cBanker != null && message.hasOwnProperty("cBanker"))
            object.cBanker = message.cBanker;
        if (message.nAllScore != null && message.hasOwnProperty("nAllScore"))
            object.nAllScore = message.nAllScore;
        if (message.cWallEndChair != null && message.hasOwnProperty("cWallEndChair"))
            object.cWallEndChair = message.cWallEndChair;
        if (message.cWallEndPos != null && message.hasOwnProperty("cWallEndPos"))
            object.cWallEndPos = message.cWallEndPos;
        if (message.cWallCardNum != null && message.hasOwnProperty("cWallCardNum"))
            object.cWallCardNum = message.cWallCardNum;
        if (message.cGangTotalNum != null && message.hasOwnProperty("cGangTotalNum"))
            object.cGangTotalNum = message.cGangTotalNum;
        if (message.vecHuaNum && message.vecHuaNum.length) {
            object.vecHuaNum = [];
            for (var j = 0; j < message.vecHuaNum.length; ++j)
                object.vecHuaNum[j] = message.vecHuaNum[j];
        }
        if (message.cAutoState != null && message.hasOwnProperty("cAutoState"))
            object.cAutoState = message.cAutoState;
        if (message.cAutoType != null && message.hasOwnProperty("cAutoType"))
            object.cAutoType = message.cAutoType;
        if (message.nChuPai != null && message.hasOwnProperty("nChuPai"))
            object.nChuPai = message.nChuPai;
        if (message.nVisitorAmount != null && message.hasOwnProperty("nVisitorAmount"))
            object.nVisitorAmount = message.nVisitorAmount;
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        if (message.vecPlyData && message.vecPlyData.length) {
            object.vecPlyData = [];
            for (var j = 0; j < message.vecPlyData.length; ++j)
                object.vecPlyData[j] = $root.mahjong_ermj_changecard_not.toObject(message.vecPlyData[j], options);
        }
        if (message.vecFakeScores && message.vecFakeScores.length) {
            object.vecFakeScores = [];
            for (var j = 0; j < message.vecFakeScores.length; ++j)
                if (typeof message.vecFakeScores[j] === "number")
                    object.vecFakeScores[j] = options.longs === String ? String(message.vecFakeScores[j]) : message.vecFakeScores[j];
                else
                    object.vecFakeScores[j] = options.longs === String ? $util.Long.prototype.toString.call(message.vecFakeScores[j]) : options.longs === Number ? new $util.LongBits(message.vecFakeScores[j].low >>> 0, message.vecFakeScores[j].high >>> 0).toNumber() : message.vecFakeScores[j];
        }
        if (message.vecTingPly && message.vecTingPly.length) {
            object.vecTingPly = [];
            for (var j = 0; j < message.vecTingPly.length; ++j)
                object.vecTingPly[j] = message.vecTingPly[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_ermj_completedata_not_new to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_completedata_not_new
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_completedata_not_new.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_completedata_not_new;
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

$root.mahjong_ermj_playcard_ack = (function() {

    /**
     * Properties of a mahjong_ermj_playcard_ack.
     * @exports Imahjong_ermj_playcard_ack
     * @interface Imahjong_ermj_playcard_ack
     * @property {number} nOpcode mahjong_ermj_playcard_ack nOpcode
     * @property {number} cOpCard mahjong_ermj_playcard_ack cOpCard
     * @property {Array.<number>|null} [vecHunCards] mahjong_ermj_playcard_ack vecHunCards
     * @property {number} sSerialID mahjong_ermj_playcard_ack sSerialID
     */

    /**
     * Constructs a new mahjong_ermj_playcard_ack.
     * @exports mahjong_ermj_playcard_ack
     * @classdesc Represents a mahjong_ermj_playcard_ack.
     * @implements Imahjong_ermj_playcard_ack
     * @constructor
     * @param {Imahjong_ermj_playcard_ack=} [properties] Properties to set
     */
    function mahjong_ermj_playcard_ack(properties) {
        this.vecHunCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_playcard_ack nOpcode.
     * @member {number} nOpcode
     * @memberof mahjong_ermj_playcard_ack
     * @instance
     */
    mahjong_ermj_playcard_ack.prototype.nOpcode = 0;

    /**
     * mahjong_ermj_playcard_ack cOpCard.
     * @member {number} cOpCard
     * @memberof mahjong_ermj_playcard_ack
     * @instance
     */
    mahjong_ermj_playcard_ack.prototype.cOpCard = 0;

    /**
     * mahjong_ermj_playcard_ack vecHunCards.
     * @member {Array.<number>} vecHunCards
     * @memberof mahjong_ermj_playcard_ack
     * @instance
     */
    mahjong_ermj_playcard_ack.prototype.vecHunCards = $util.emptyArray;

    /**
     * mahjong_ermj_playcard_ack sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_ermj_playcard_ack
     * @instance
     */
    mahjong_ermj_playcard_ack.prototype.sSerialID = 0;

    /**
     * Creates a new mahjong_ermj_playcard_ack instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_playcard_ack
     * @static
     * @param {Imahjong_ermj_playcard_ack=} [properties] Properties to set
     * @returns {mahjong_ermj_playcard_ack} mahjong_ermj_playcard_ack instance
     */
    mahjong_ermj_playcard_ack.create = function create(properties) {
        return new mahjong_ermj_playcard_ack(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_playcard_ack message. Does not implicitly {@link mahjong_ermj_playcard_ack.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_playcard_ack
     * @static
     * @param {Imahjong_ermj_playcard_ack} message mahjong_ermj_playcard_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_playcard_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nOpcode);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cOpCard);
        if (message.vecHunCards != null && message.vecHunCards.length)
            for (var i = 0; i < message.vecHunCards.length; ++i)
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.vecHunCards[i]);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sSerialID);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_playcard_ack message, length delimited. Does not implicitly {@link mahjong_ermj_playcard_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_playcard_ack
     * @static
     * @param {Imahjong_ermj_playcard_ack} message mahjong_ermj_playcard_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_playcard_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_playcard_ack message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_playcard_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_playcard_ack} mahjong_ermj_playcard_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_playcard_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_playcard_ack();
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
                if (!(message.vecHunCards && message.vecHunCards.length))
                    message.vecHunCards = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecHunCards.push(reader.int32());
                } else
                    message.vecHunCards.push(reader.int32());
                break;
            case 4:
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
     * Decodes a mahjong_ermj_playcard_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_playcard_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_playcard_ack} mahjong_ermj_playcard_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_playcard_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_playcard_ack message.
     * @function verify
     * @memberof mahjong_ermj_playcard_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_playcard_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nOpcode))
            return "nOpcode: integer expected";
        if (!$util.isInteger(message.cOpCard))
            return "cOpCard: integer expected";
        if (message.vecHunCards != null && message.hasOwnProperty("vecHunCards")) {
            if (!Array.isArray(message.vecHunCards))
                return "vecHunCards: array expected";
            for (var i = 0; i < message.vecHunCards.length; ++i)
                if (!$util.isInteger(message.vecHunCards[i]))
                    return "vecHunCards: integer[] expected";
        }
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_playcard_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_playcard_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_playcard_ack} mahjong_ermj_playcard_ack
     */
    mahjong_ermj_playcard_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_playcard_ack)
            return object;
        var message = new $root.mahjong_ermj_playcard_ack();
        if (object.nOpcode != null)
            message.nOpcode = object.nOpcode | 0;
        if (object.cOpCard != null)
            message.cOpCard = object.cOpCard | 0;
        if (object.vecHunCards) {
            if (!Array.isArray(object.vecHunCards))
                throw TypeError(".mahjong_ermj_playcard_ack.vecHunCards: array expected");
            message.vecHunCards = [];
            for (var i = 0; i < object.vecHunCards.length; ++i)
                message.vecHunCards[i] = object.vecHunCards[i] | 0;
        }
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_playcard_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_playcard_ack
     * @static
     * @param {mahjong_ermj_playcard_ack} message mahjong_ermj_playcard_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_playcard_ack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecHunCards = [];
        if (options.defaults) {
            object.nOpcode = 0;
            object.cOpCard = 0;
            object.sSerialID = 0;
        }
        if (message.nOpcode != null && message.hasOwnProperty("nOpcode"))
            object.nOpcode = message.nOpcode;
        if (message.cOpCard != null && message.hasOwnProperty("cOpCard"))
            object.cOpCard = message.cOpCard;
        if (message.vecHunCards && message.vecHunCards.length) {
            object.vecHunCards = [];
            for (var j = 0; j < message.vecHunCards.length; ++j)
                object.vecHunCards[j] = message.vecHunCards[j];
        }
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        return object;
    };

    /**
     * Converts this mahjong_ermj_playcard_ack to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_playcard_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_playcard_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_playcard_ack;
})();

$root.mahjong_ermj_changecard_not_new = (function() {

    /**
     * Properties of a mahjong_ermj_changecard_not_new.
     * @exports Imahjong_ermj_changecard_not_new
     * @interface Imahjong_ermj_changecard_not_new
     * @property {number} cChairID mahjong_ermj_changecard_not_new cChairID
     * @property {number} cHuPai mahjong_ermj_changecard_not_new cHuPai
     * @property {Array.<number>|null} [vecDisplayCards] mahjong_ermj_changecard_not_new vecDisplayCards
     * @property {Array.<number>|null} [vecDisplayHua] mahjong_ermj_changecard_not_new vecDisplayHua
     * @property {Array.<number>|null} [vecLeftCards] mahjong_ermj_changecard_not_new vecLeftCards
     * @property {Array.<number>|null} [vecHandCards] mahjong_ermj_changecard_not_new vecHandCards
     */

    /**
     * Constructs a new mahjong_ermj_changecard_not_new.
     * @exports mahjong_ermj_changecard_not_new
     * @classdesc Represents a mahjong_ermj_changecard_not_new.
     * @implements Imahjong_ermj_changecard_not_new
     * @constructor
     * @param {Imahjong_ermj_changecard_not_new=} [properties] Properties to set
     */
    function mahjong_ermj_changecard_not_new(properties) {
        this.vecDisplayCards = [];
        this.vecDisplayHua = [];
        this.vecLeftCards = [];
        this.vecHandCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_changecard_not_new cChairID.
     * @member {number} cChairID
     * @memberof mahjong_ermj_changecard_not_new
     * @instance
     */
    mahjong_ermj_changecard_not_new.prototype.cChairID = 0;

    /**
     * mahjong_ermj_changecard_not_new cHuPai.
     * @member {number} cHuPai
     * @memberof mahjong_ermj_changecard_not_new
     * @instance
     */
    mahjong_ermj_changecard_not_new.prototype.cHuPai = 0;

    /**
     * mahjong_ermj_changecard_not_new vecDisplayCards.
     * @member {Array.<number>} vecDisplayCards
     * @memberof mahjong_ermj_changecard_not_new
     * @instance
     */
    mahjong_ermj_changecard_not_new.prototype.vecDisplayCards = $util.emptyArray;

    /**
     * mahjong_ermj_changecard_not_new vecDisplayHua.
     * @member {Array.<number>} vecDisplayHua
     * @memberof mahjong_ermj_changecard_not_new
     * @instance
     */
    mahjong_ermj_changecard_not_new.prototype.vecDisplayHua = $util.emptyArray;

    /**
     * mahjong_ermj_changecard_not_new vecLeftCards.
     * @member {Array.<number>} vecLeftCards
     * @memberof mahjong_ermj_changecard_not_new
     * @instance
     */
    mahjong_ermj_changecard_not_new.prototype.vecLeftCards = $util.emptyArray;

    /**
     * mahjong_ermj_changecard_not_new vecHandCards.
     * @member {Array.<number>} vecHandCards
     * @memberof mahjong_ermj_changecard_not_new
     * @instance
     */
    mahjong_ermj_changecard_not_new.prototype.vecHandCards = $util.emptyArray;

    /**
     * Creates a new mahjong_ermj_changecard_not_new instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_changecard_not_new
     * @static
     * @param {Imahjong_ermj_changecard_not_new=} [properties] Properties to set
     * @returns {mahjong_ermj_changecard_not_new} mahjong_ermj_changecard_not_new instance
     */
    mahjong_ermj_changecard_not_new.create = function create(properties) {
        return new mahjong_ermj_changecard_not_new(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_changecard_not_new message. Does not implicitly {@link mahjong_ermj_changecard_not_new.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_changecard_not_new
     * @static
     * @param {Imahjong_ermj_changecard_not_new} message mahjong_ermj_changecard_not_new message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_changecard_not_new.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cHuPai);
        if (message.vecDisplayCards != null && message.vecDisplayCards.length)
            for (var i = 0; i < message.vecDisplayCards.length; ++i)
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.vecDisplayCards[i]);
        if (message.vecDisplayHua != null && message.vecDisplayHua.length)
            for (var i = 0; i < message.vecDisplayHua.length; ++i)
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.vecDisplayHua[i]);
        if (message.vecLeftCards != null && message.vecLeftCards.length)
            for (var i = 0; i < message.vecLeftCards.length; ++i)
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.vecLeftCards[i]);
        if (message.vecHandCards != null && message.vecHandCards.length)
            for (var i = 0; i < message.vecHandCards.length; ++i)
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.vecHandCards[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_changecard_not_new message, length delimited. Does not implicitly {@link mahjong_ermj_changecard_not_new.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_changecard_not_new
     * @static
     * @param {Imahjong_ermj_changecard_not_new} message mahjong_ermj_changecard_not_new message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_changecard_not_new.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_changecard_not_new message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_changecard_not_new
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_changecard_not_new} mahjong_ermj_changecard_not_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_changecard_not_new.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_changecard_not_new();
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
                if (!(message.vecDisplayCards && message.vecDisplayCards.length))
                    message.vecDisplayCards = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecDisplayCards.push(reader.int32());
                } else
                    message.vecDisplayCards.push(reader.int32());
                break;
            case 4:
                if (!(message.vecDisplayHua && message.vecDisplayHua.length))
                    message.vecDisplayHua = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecDisplayHua.push(reader.int32());
                } else
                    message.vecDisplayHua.push(reader.int32());
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
        return message;
    };

    /**
     * Decodes a mahjong_ermj_changecard_not_new message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_changecard_not_new
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_changecard_not_new} mahjong_ermj_changecard_not_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_changecard_not_new.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_changecard_not_new message.
     * @function verify
     * @memberof mahjong_ermj_changecard_not_new
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_changecard_not_new.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
        if (!$util.isInteger(message.cHuPai))
            return "cHuPai: integer expected";
        if (message.vecDisplayCards != null && message.hasOwnProperty("vecDisplayCards")) {
            if (!Array.isArray(message.vecDisplayCards))
                return "vecDisplayCards: array expected";
            for (var i = 0; i < message.vecDisplayCards.length; ++i)
                if (!$util.isInteger(message.vecDisplayCards[i]))
                    return "vecDisplayCards: integer[] expected";
        }
        if (message.vecDisplayHua != null && message.hasOwnProperty("vecDisplayHua")) {
            if (!Array.isArray(message.vecDisplayHua))
                return "vecDisplayHua: array expected";
            for (var i = 0; i < message.vecDisplayHua.length; ++i)
                if (!$util.isInteger(message.vecDisplayHua[i]))
                    return "vecDisplayHua: integer[] expected";
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
     * Creates a mahjong_ermj_changecard_not_new message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_changecard_not_new
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_changecard_not_new} mahjong_ermj_changecard_not_new
     */
    mahjong_ermj_changecard_not_new.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_changecard_not_new)
            return object;
        var message = new $root.mahjong_ermj_changecard_not_new();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.cHuPai != null)
            message.cHuPai = object.cHuPai | 0;
        if (object.vecDisplayCards) {
            if (!Array.isArray(object.vecDisplayCards))
                throw TypeError(".mahjong_ermj_changecard_not_new.vecDisplayCards: array expected");
            message.vecDisplayCards = [];
            for (var i = 0; i < object.vecDisplayCards.length; ++i)
                message.vecDisplayCards[i] = object.vecDisplayCards[i] | 0;
        }
        if (object.vecDisplayHua) {
            if (!Array.isArray(object.vecDisplayHua))
                throw TypeError(".mahjong_ermj_changecard_not_new.vecDisplayHua: array expected");
            message.vecDisplayHua = [];
            for (var i = 0; i < object.vecDisplayHua.length; ++i)
                message.vecDisplayHua[i] = object.vecDisplayHua[i] | 0;
        }
        if (object.vecLeftCards) {
            if (!Array.isArray(object.vecLeftCards))
                throw TypeError(".mahjong_ermj_changecard_not_new.vecLeftCards: array expected");
            message.vecLeftCards = [];
            for (var i = 0; i < object.vecLeftCards.length; ++i)
                message.vecLeftCards[i] = object.vecLeftCards[i] | 0;
        }
        if (object.vecHandCards) {
            if (!Array.isArray(object.vecHandCards))
                throw TypeError(".mahjong_ermj_changecard_not_new.vecHandCards: array expected");
            message.vecHandCards = [];
            for (var i = 0; i < object.vecHandCards.length; ++i)
                message.vecHandCards[i] = object.vecHandCards[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_changecard_not_new message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_changecard_not_new
     * @static
     * @param {mahjong_ermj_changecard_not_new} message mahjong_ermj_changecard_not_new
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_changecard_not_new.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecDisplayCards = [];
            object.vecDisplayHua = [];
            object.vecLeftCards = [];
            object.vecHandCards = [];
        }
        if (options.defaults) {
            object.cChairID = 0;
            object.cHuPai = 0;
        }
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.cHuPai != null && message.hasOwnProperty("cHuPai"))
            object.cHuPai = message.cHuPai;
        if (message.vecDisplayCards && message.vecDisplayCards.length) {
            object.vecDisplayCards = [];
            for (var j = 0; j < message.vecDisplayCards.length; ++j)
                object.vecDisplayCards[j] = message.vecDisplayCards[j];
        }
        if (message.vecDisplayHua && message.vecDisplayHua.length) {
            object.vecDisplayHua = [];
            for (var j = 0; j < message.vecDisplayHua.length; ++j)
                object.vecDisplayHua[j] = message.vecDisplayHua[j];
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
     * Converts this mahjong_ermj_changecard_not_new to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_changecard_not_new
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_changecard_not_new.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_changecard_not_new;
})();

$root.mahjong_gang_info = (function() {

    /**
     * Properties of a mahjong_gang_info.
     * @exports Imahjong_gang_info
     * @interface Imahjong_gang_info
     * @property {number} nOpcode mahjong_gang_info nOpcode
     * @property {Array.<number>|null} [vecGangCards] mahjong_gang_info vecGangCards
     */

    /**
     * Constructs a new mahjong_gang_info.
     * @exports mahjong_gang_info
     * @classdesc Represents a mahjong_gang_info.
     * @implements Imahjong_gang_info
     * @constructor
     * @param {Imahjong_gang_info=} [properties] Properties to set
     */
    function mahjong_gang_info(properties) {
        this.vecGangCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_gang_info nOpcode.
     * @member {number} nOpcode
     * @memberof mahjong_gang_info
     * @instance
     */
    mahjong_gang_info.prototype.nOpcode = 0;

    /**
     * mahjong_gang_info vecGangCards.
     * @member {Array.<number>} vecGangCards
     * @memberof mahjong_gang_info
     * @instance
     */
    mahjong_gang_info.prototype.vecGangCards = $util.emptyArray;

    /**
     * Creates a new mahjong_gang_info instance using the specified properties.
     * @function create
     * @memberof mahjong_gang_info
     * @static
     * @param {Imahjong_gang_info=} [properties] Properties to set
     * @returns {mahjong_gang_info} mahjong_gang_info instance
     */
    mahjong_gang_info.create = function create(properties) {
        return new mahjong_gang_info(properties);
    };

    /**
     * Encodes the specified mahjong_gang_info message. Does not implicitly {@link mahjong_gang_info.verify|verify} messages.
     * @function encode
     * @memberof mahjong_gang_info
     * @static
     * @param {Imahjong_gang_info} message mahjong_gang_info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_gang_info.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nOpcode);
        if (message.vecGangCards != null && message.vecGangCards.length)
            for (var i = 0; i < message.vecGangCards.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.vecGangCards[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_gang_info message, length delimited. Does not implicitly {@link mahjong_gang_info.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_gang_info
     * @static
     * @param {Imahjong_gang_info} message mahjong_gang_info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_gang_info.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_gang_info message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_gang_info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_gang_info} mahjong_gang_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_gang_info.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_gang_info();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nOpcode = reader.int32();
                break;
            case 2:
                if (!(message.vecGangCards && message.vecGangCards.length))
                    message.vecGangCards = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecGangCards.push(reader.int32());
                } else
                    message.vecGangCards.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nOpcode"))
            throw $util.ProtocolError("missing required 'nOpcode'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_gang_info message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_gang_info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_gang_info} mahjong_gang_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_gang_info.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_gang_info message.
     * @function verify
     * @memberof mahjong_gang_info
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_gang_info.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nOpcode))
            return "nOpcode: integer expected";
        if (message.vecGangCards != null && message.hasOwnProperty("vecGangCards")) {
            if (!Array.isArray(message.vecGangCards))
                return "vecGangCards: array expected";
            for (var i = 0; i < message.vecGangCards.length; ++i)
                if (!$util.isInteger(message.vecGangCards[i]))
                    return "vecGangCards: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_gang_info message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_gang_info
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_gang_info} mahjong_gang_info
     */
    mahjong_gang_info.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_gang_info)
            return object;
        var message = new $root.mahjong_gang_info();
        if (object.nOpcode != null)
            message.nOpcode = object.nOpcode | 0;
        if (object.vecGangCards) {
            if (!Array.isArray(object.vecGangCards))
                throw TypeError(".mahjong_gang_info.vecGangCards: array expected");
            message.vecGangCards = [];
            for (var i = 0; i < object.vecGangCards.length; ++i)
                message.vecGangCards[i] = object.vecGangCards[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_gang_info message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_gang_info
     * @static
     * @param {mahjong_gang_info} message mahjong_gang_info
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_gang_info.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecGangCards = [];
        if (options.defaults)
            object.nOpcode = 0;
        if (message.nOpcode != null && message.hasOwnProperty("nOpcode"))
            object.nOpcode = message.nOpcode;
        if (message.vecGangCards && message.vecGangCards.length) {
            object.vecGangCards = [];
            for (var j = 0; j < message.vecGangCards.length; ++j)
                object.vecGangCards[j] = message.vecGangCards[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_gang_info to JSON.
     * @function toJSON
     * @memberof mahjong_gang_info
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_gang_info.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_gang_info;
})();

$root.mahjong_ermj_playcard_req = (function() {

    /**
     * Properties of a mahjong_ermj_playcard_req.
     * @exports Imahjong_ermj_playcard_req
     * @interface Imahjong_ermj_playcard_req
     * @property {number} nOpcode mahjong_ermj_playcard_req nOpcode
     * @property {number} cPrevCard mahjong_ermj_playcard_req cPrevCard
     * @property {Array.<number>|null} [vecTingPutCards] mahjong_ermj_playcard_req vecTingPutCards
     * @property {Array.<number>|null} [vecTingHuCards] mahjong_ermj_playcard_req vecTingHuCards
     * @property {Array.<Imahjong_gang_info>|null} [vecGangInfo] mahjong_ermj_playcard_req vecGangInfo
     * @property {number} sSerialID mahjong_ermj_playcard_req sSerialID
     */

    /**
     * Constructs a new mahjong_ermj_playcard_req.
     * @exports mahjong_ermj_playcard_req
     * @classdesc Represents a mahjong_ermj_playcard_req.
     * @implements Imahjong_ermj_playcard_req
     * @constructor
     * @param {Imahjong_ermj_playcard_req=} [properties] Properties to set
     */
    function mahjong_ermj_playcard_req(properties) {
        this.vecTingPutCards = [];
        this.vecTingHuCards = [];
        this.vecGangInfo = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_playcard_req nOpcode.
     * @member {number} nOpcode
     * @memberof mahjong_ermj_playcard_req
     * @instance
     */
    mahjong_ermj_playcard_req.prototype.nOpcode = 0;

    /**
     * mahjong_ermj_playcard_req cPrevCard.
     * @member {number} cPrevCard
     * @memberof mahjong_ermj_playcard_req
     * @instance
     */
    mahjong_ermj_playcard_req.prototype.cPrevCard = 0;

    /**
     * mahjong_ermj_playcard_req vecTingPutCards.
     * @member {Array.<number>} vecTingPutCards
     * @memberof mahjong_ermj_playcard_req
     * @instance
     */
    mahjong_ermj_playcard_req.prototype.vecTingPutCards = $util.emptyArray;

    /**
     * mahjong_ermj_playcard_req vecTingHuCards.
     * @member {Array.<number>} vecTingHuCards
     * @memberof mahjong_ermj_playcard_req
     * @instance
     */
    mahjong_ermj_playcard_req.prototype.vecTingHuCards = $util.emptyArray;

    /**
     * mahjong_ermj_playcard_req vecGangInfo.
     * @member {Array.<Imahjong_gang_info>} vecGangInfo
     * @memberof mahjong_ermj_playcard_req
     * @instance
     */
    mahjong_ermj_playcard_req.prototype.vecGangInfo = $util.emptyArray;

    /**
     * mahjong_ermj_playcard_req sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_ermj_playcard_req
     * @instance
     */
    mahjong_ermj_playcard_req.prototype.sSerialID = 0;

    /**
     * Creates a new mahjong_ermj_playcard_req instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_playcard_req
     * @static
     * @param {Imahjong_ermj_playcard_req=} [properties] Properties to set
     * @returns {mahjong_ermj_playcard_req} mahjong_ermj_playcard_req instance
     */
    mahjong_ermj_playcard_req.create = function create(properties) {
        return new mahjong_ermj_playcard_req(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_playcard_req message. Does not implicitly {@link mahjong_ermj_playcard_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_playcard_req
     * @static
     * @param {Imahjong_ermj_playcard_req} message mahjong_ermj_playcard_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_playcard_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nOpcode);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cPrevCard);
        if (message.vecTingPutCards != null && message.vecTingPutCards.length)
            for (var i = 0; i < message.vecTingPutCards.length; ++i)
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.vecTingPutCards[i]);
        if (message.vecTingHuCards != null && message.vecTingHuCards.length)
            for (var i = 0; i < message.vecTingHuCards.length; ++i)
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.vecTingHuCards[i]);
        if (message.vecGangInfo != null && message.vecGangInfo.length)
            for (var i = 0; i < message.vecGangInfo.length; ++i)
                $root.mahjong_gang_info.encode(message.vecGangInfo[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.sSerialID);
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_playcard_req message, length delimited. Does not implicitly {@link mahjong_ermj_playcard_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_playcard_req
     * @static
     * @param {Imahjong_ermj_playcard_req} message mahjong_ermj_playcard_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_playcard_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_playcard_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_playcard_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_playcard_req} mahjong_ermj_playcard_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_playcard_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_playcard_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nOpcode = reader.int32();
                break;
            case 2:
                message.cPrevCard = reader.int32();
                break;
            case 3:
                if (!(message.vecTingPutCards && message.vecTingPutCards.length))
                    message.vecTingPutCards = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecTingPutCards.push(reader.int32());
                } else
                    message.vecTingPutCards.push(reader.int32());
                break;
            case 4:
                if (!(message.vecTingHuCards && message.vecTingHuCards.length))
                    message.vecTingHuCards = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecTingHuCards.push(reader.int32());
                } else
                    message.vecTingHuCards.push(reader.int32());
                break;
            case 5:
                if (!(message.vecGangInfo && message.vecGangInfo.length))
                    message.vecGangInfo = [];
                message.vecGangInfo.push($root.mahjong_gang_info.decode(reader, reader.uint32()));
                break;
            case 6:
                message.sSerialID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nOpcode"))
            throw $util.ProtocolError("missing required 'nOpcode'", { instance: message });
        if (!message.hasOwnProperty("cPrevCard"))
            throw $util.ProtocolError("missing required 'cPrevCard'", { instance: message });
        if (!message.hasOwnProperty("sSerialID"))
            throw $util.ProtocolError("missing required 'sSerialID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_ermj_playcard_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_playcard_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_playcard_req} mahjong_ermj_playcard_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_playcard_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_playcard_req message.
     * @function verify
     * @memberof mahjong_ermj_playcard_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_playcard_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
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
        if (message.vecGangInfo != null && message.hasOwnProperty("vecGangInfo")) {
            if (!Array.isArray(message.vecGangInfo))
                return "vecGangInfo: array expected";
            for (var i = 0; i < message.vecGangInfo.length; ++i) {
                var error = $root.mahjong_gang_info.verify(message.vecGangInfo[i]);
                if (error)
                    return "vecGangInfo." + error;
            }
        }
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_ermj_playcard_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_playcard_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_playcard_req} mahjong_ermj_playcard_req
     */
    mahjong_ermj_playcard_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_playcard_req)
            return object;
        var message = new $root.mahjong_ermj_playcard_req();
        if (object.nOpcode != null)
            message.nOpcode = object.nOpcode | 0;
        if (object.cPrevCard != null)
            message.cPrevCard = object.cPrevCard | 0;
        if (object.vecTingPutCards) {
            if (!Array.isArray(object.vecTingPutCards))
                throw TypeError(".mahjong_ermj_playcard_req.vecTingPutCards: array expected");
            message.vecTingPutCards = [];
            for (var i = 0; i < object.vecTingPutCards.length; ++i)
                message.vecTingPutCards[i] = object.vecTingPutCards[i] | 0;
        }
        if (object.vecTingHuCards) {
            if (!Array.isArray(object.vecTingHuCards))
                throw TypeError(".mahjong_ermj_playcard_req.vecTingHuCards: array expected");
            message.vecTingHuCards = [];
            for (var i = 0; i < object.vecTingHuCards.length; ++i)
                message.vecTingHuCards[i] = object.vecTingHuCards[i] | 0;
        }
        if (object.vecGangInfo) {
            if (!Array.isArray(object.vecGangInfo))
                throw TypeError(".mahjong_ermj_playcard_req.vecGangInfo: array expected");
            message.vecGangInfo = [];
            for (var i = 0; i < object.vecGangInfo.length; ++i) {
                if (typeof object.vecGangInfo[i] !== "object")
                    throw TypeError(".mahjong_ermj_playcard_req.vecGangInfo: object expected");
                message.vecGangInfo[i] = $root.mahjong_gang_info.fromObject(object.vecGangInfo[i]);
            }
        }
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_playcard_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_playcard_req
     * @static
     * @param {mahjong_ermj_playcard_req} message mahjong_ermj_playcard_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_playcard_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecTingPutCards = [];
            object.vecTingHuCards = [];
            object.vecGangInfo = [];
        }
        if (options.defaults) {
            object.nOpcode = 0;
            object.cPrevCard = 0;
            object.sSerialID = 0;
        }
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
        if (message.vecGangInfo && message.vecGangInfo.length) {
            object.vecGangInfo = [];
            for (var j = 0; j < message.vecGangInfo.length; ++j)
                object.vecGangInfo[j] = $root.mahjong_gang_info.toObject(message.vecGangInfo[j], options);
        }
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        return object;
    };

    /**
     * Converts this mahjong_ermj_playcard_req to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_playcard_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_playcard_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_playcard_req;
})();

$root.mahjong_ermj_gc_task_not = (function() {

    /**
     * Properties of a mahjong_ermj_gc_task_not.
     * @exports Imahjong_ermj_gc_task_not
     * @interface Imahjong_ermj_gc_task_not
     * @property {Imahjong_TaskItem} taskItem mahjong_ermj_gc_task_not taskItem
     */

    /**
     * Constructs a new mahjong_ermj_gc_task_not.
     * @exports mahjong_ermj_gc_task_not
     * @classdesc Represents a mahjong_ermj_gc_task_not.
     * @implements Imahjong_ermj_gc_task_not
     * @constructor
     * @param {Imahjong_ermj_gc_task_not=} [properties] Properties to set
     */
    function mahjong_ermj_gc_task_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_ermj_gc_task_not taskItem.
     * @member {Imahjong_TaskItem} taskItem
     * @memberof mahjong_ermj_gc_task_not
     * @instance
     */
    mahjong_ermj_gc_task_not.prototype.taskItem = null;

    /**
     * Creates a new mahjong_ermj_gc_task_not instance using the specified properties.
     * @function create
     * @memberof mahjong_ermj_gc_task_not
     * @static
     * @param {Imahjong_ermj_gc_task_not=} [properties] Properties to set
     * @returns {mahjong_ermj_gc_task_not} mahjong_ermj_gc_task_not instance
     */
    mahjong_ermj_gc_task_not.create = function create(properties) {
        return new mahjong_ermj_gc_task_not(properties);
    };

    /**
     * Encodes the specified mahjong_ermj_gc_task_not message. Does not implicitly {@link mahjong_ermj_gc_task_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_ermj_gc_task_not
     * @static
     * @param {Imahjong_ermj_gc_task_not} message mahjong_ermj_gc_task_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_gc_task_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        $root.mahjong_TaskItem.encode(message.taskItem, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_ermj_gc_task_not message, length delimited. Does not implicitly {@link mahjong_ermj_gc_task_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_ermj_gc_task_not
     * @static
     * @param {Imahjong_ermj_gc_task_not} message mahjong_ermj_gc_task_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_ermj_gc_task_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_ermj_gc_task_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_ermj_gc_task_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_ermj_gc_task_not} mahjong_ermj_gc_task_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_gc_task_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_ermj_gc_task_not();
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
     * Decodes a mahjong_ermj_gc_task_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_ermj_gc_task_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_ermj_gc_task_not} mahjong_ermj_gc_task_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_ermj_gc_task_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_ermj_gc_task_not message.
     * @function verify
     * @memberof mahjong_ermj_gc_task_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_ermj_gc_task_not.verify = function verify(message) {
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
     * Creates a mahjong_ermj_gc_task_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_ermj_gc_task_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_ermj_gc_task_not} mahjong_ermj_gc_task_not
     */
    mahjong_ermj_gc_task_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_ermj_gc_task_not)
            return object;
        var message = new $root.mahjong_ermj_gc_task_not();
        if (object.taskItem != null) {
            if (typeof object.taskItem !== "object")
                throw TypeError(".mahjong_ermj_gc_task_not.taskItem: object expected");
            message.taskItem = $root.mahjong_TaskItem.fromObject(object.taskItem);
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_ermj_gc_task_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_ermj_gc_task_not
     * @static
     * @param {mahjong_ermj_gc_task_not} message mahjong_ermj_gc_task_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_ermj_gc_task_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_ermj_gc_task_not to JSON.
     * @function toJSON
     * @memberof mahjong_ermj_gc_task_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_ermj_gc_task_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_ermj_gc_task_not;
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

$root.mahjong_cb_create_table_req = (function() {

    /**
     * Properties of a mahjong_cb_create_table_req.
     * @exports Imahjong_cb_create_table_req
     * @interface Imahjong_cb_create_table_req
     * @property {string} name mahjong_cb_create_table_req name
     * @property {string} password mahjong_cb_create_table_req password
     * @property {number} baseScore mahjong_cb_create_table_req baseScore
     * @property {number} tableTime mahjong_cb_create_table_req tableTime
     * @property {number} flag mahjong_cb_create_table_req flag
     * @property {number} gameRule mahjong_cb_create_table_req gameRule
     * @property {number} initScore mahjong_cb_create_table_req initScore
     * @property {Array.<number>|null} [gameRuleGroup] mahjong_cb_create_table_req gameRuleGroup
     * @property {string} gameJson mahjong_cb_create_table_req gameJson
     * @property {number} mode mahjong_cb_create_table_req mode
     * @property {number} clubUid mahjong_cb_create_table_req clubUid
     * @property {string} tinyJson mahjong_cb_create_table_req tinyJson
     * @property {number} clubRuleId mahjong_cb_create_table_req clubRuleId
     */

    /**
     * Constructs a new mahjong_cb_create_table_req.
     * @exports mahjong_cb_create_table_req
     * @classdesc Represents a mahjong_cb_create_table_req.
     * @implements Imahjong_cb_create_table_req
     * @constructor
     * @param {Imahjong_cb_create_table_req=} [properties] Properties to set
     */
    function mahjong_cb_create_table_req(properties) {
        this.gameRuleGroup = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_cb_create_table_req name.
     * @member {string} name
     * @memberof mahjong_cb_create_table_req
     * @instance
     */
    mahjong_cb_create_table_req.prototype.name = "";

    /**
     * mahjong_cb_create_table_req password.
     * @member {string} password
     * @memberof mahjong_cb_create_table_req
     * @instance
     */
    mahjong_cb_create_table_req.prototype.password = "";

    /**
     * mahjong_cb_create_table_req baseScore.
     * @member {number} baseScore
     * @memberof mahjong_cb_create_table_req
     * @instance
     */
    mahjong_cb_create_table_req.prototype.baseScore = 0;

    /**
     * mahjong_cb_create_table_req tableTime.
     * @member {number} tableTime
     * @memberof mahjong_cb_create_table_req
     * @instance
     */
    mahjong_cb_create_table_req.prototype.tableTime = 0;

    /**
     * mahjong_cb_create_table_req flag.
     * @member {number} flag
     * @memberof mahjong_cb_create_table_req
     * @instance
     */
    mahjong_cb_create_table_req.prototype.flag = 0;

    /**
     * mahjong_cb_create_table_req gameRule.
     * @member {number} gameRule
     * @memberof mahjong_cb_create_table_req
     * @instance
     */
    mahjong_cb_create_table_req.prototype.gameRule = 0;

    /**
     * mahjong_cb_create_table_req initScore.
     * @member {number} initScore
     * @memberof mahjong_cb_create_table_req
     * @instance
     */
    mahjong_cb_create_table_req.prototype.initScore = 0;

    /**
     * mahjong_cb_create_table_req gameRuleGroup.
     * @member {Array.<number>} gameRuleGroup
     * @memberof mahjong_cb_create_table_req
     * @instance
     */
    mahjong_cb_create_table_req.prototype.gameRuleGroup = $util.emptyArray;

    /**
     * mahjong_cb_create_table_req gameJson.
     * @member {string} gameJson
     * @memberof mahjong_cb_create_table_req
     * @instance
     */
    mahjong_cb_create_table_req.prototype.gameJson = "";

    /**
     * mahjong_cb_create_table_req mode.
     * @member {number} mode
     * @memberof mahjong_cb_create_table_req
     * @instance
     */
    mahjong_cb_create_table_req.prototype.mode = 0;

    /**
     * mahjong_cb_create_table_req clubUid.
     * @member {number} clubUid
     * @memberof mahjong_cb_create_table_req
     * @instance
     */
    mahjong_cb_create_table_req.prototype.clubUid = 0;

    /**
     * mahjong_cb_create_table_req tinyJson.
     * @member {string} tinyJson
     * @memberof mahjong_cb_create_table_req
     * @instance
     */
    mahjong_cb_create_table_req.prototype.tinyJson = "";

    /**
     * mahjong_cb_create_table_req clubRuleId.
     * @member {number} clubRuleId
     * @memberof mahjong_cb_create_table_req
     * @instance
     */
    mahjong_cb_create_table_req.prototype.clubRuleId = 0;

    /**
     * Creates a new mahjong_cb_create_table_req instance using the specified properties.
     * @function create
     * @memberof mahjong_cb_create_table_req
     * @static
     * @param {Imahjong_cb_create_table_req=} [properties] Properties to set
     * @returns {mahjong_cb_create_table_req} mahjong_cb_create_table_req instance
     */
    mahjong_cb_create_table_req.create = function create(properties) {
        return new mahjong_cb_create_table_req(properties);
    };

    /**
     * Encodes the specified mahjong_cb_create_table_req message. Does not implicitly {@link mahjong_cb_create_table_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_cb_create_table_req
     * @static
     * @param {Imahjong_cb_create_table_req} message mahjong_cb_create_table_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_cb_create_table_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.baseScore);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.tableTime);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.flag);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.gameRule);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.initScore);
        if (message.gameRuleGroup != null && message.gameRuleGroup.length)
            for (var i = 0; i < message.gameRuleGroup.length; ++i)
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.gameRuleGroup[i]);
        writer.uint32(/* id 9, wireType 2 =*/74).string(message.gameJson);
        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.mode);
        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.clubUid);
        writer.uint32(/* id 12, wireType 2 =*/98).string(message.tinyJson);
        writer.uint32(/* id 13, wireType 0 =*/104).int32(message.clubRuleId);
        return writer;
    };

    /**
     * Encodes the specified mahjong_cb_create_table_req message, length delimited. Does not implicitly {@link mahjong_cb_create_table_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_cb_create_table_req
     * @static
     * @param {Imahjong_cb_create_table_req} message mahjong_cb_create_table_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_cb_create_table_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_cb_create_table_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_cb_create_table_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_cb_create_table_req} mahjong_cb_create_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_cb_create_table_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_cb_create_table_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.password = reader.string();
                break;
            case 3:
                message.baseScore = reader.int32();
                break;
            case 4:
                message.tableTime = reader.int32();
                break;
            case 5:
                message.flag = reader.int32();
                break;
            case 6:
                message.gameRule = reader.int32();
                break;
            case 7:
                message.initScore = reader.int32();
                break;
            case 8:
                if (!(message.gameRuleGroup && message.gameRuleGroup.length))
                    message.gameRuleGroup = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.gameRuleGroup.push(reader.int32());
                } else
                    message.gameRuleGroup.push(reader.int32());
                break;
            case 9:
                message.gameJson = reader.string();
                break;
            case 10:
                message.mode = reader.int32();
                break;
            case 11:
                message.clubUid = reader.int32();
                break;
            case 12:
                message.tinyJson = reader.string();
                break;
            case 13:
                message.clubRuleId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: message });
        if (!message.hasOwnProperty("password"))
            throw $util.ProtocolError("missing required 'password'", { instance: message });
        if (!message.hasOwnProperty("baseScore"))
            throw $util.ProtocolError("missing required 'baseScore'", { instance: message });
        if (!message.hasOwnProperty("tableTime"))
            throw $util.ProtocolError("missing required 'tableTime'", { instance: message });
        if (!message.hasOwnProperty("flag"))
            throw $util.ProtocolError("missing required 'flag'", { instance: message });
        if (!message.hasOwnProperty("gameRule"))
            throw $util.ProtocolError("missing required 'gameRule'", { instance: message });
        if (!message.hasOwnProperty("initScore"))
            throw $util.ProtocolError("missing required 'initScore'", { instance: message });
        if (!message.hasOwnProperty("gameJson"))
            throw $util.ProtocolError("missing required 'gameJson'", { instance: message });
        if (!message.hasOwnProperty("mode"))
            throw $util.ProtocolError("missing required 'mode'", { instance: message });
        if (!message.hasOwnProperty("clubUid"))
            throw $util.ProtocolError("missing required 'clubUid'", { instance: message });
        if (!message.hasOwnProperty("tinyJson"))
            throw $util.ProtocolError("missing required 'tinyJson'", { instance: message });
        if (!message.hasOwnProperty("clubRuleId"))
            throw $util.ProtocolError("missing required 'clubRuleId'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_cb_create_table_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_cb_create_table_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_cb_create_table_req} mahjong_cb_create_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_cb_create_table_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_cb_create_table_req message.
     * @function verify
     * @memberof mahjong_cb_create_table_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_cb_create_table_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.name))
            return "name: string expected";
        if (!$util.isString(message.password))
            return "password: string expected";
        if (!$util.isInteger(message.baseScore))
            return "baseScore: integer expected";
        if (!$util.isInteger(message.tableTime))
            return "tableTime: integer expected";
        if (!$util.isInteger(message.flag))
            return "flag: integer expected";
        if (!$util.isInteger(message.gameRule))
            return "gameRule: integer expected";
        if (!$util.isInteger(message.initScore))
            return "initScore: integer expected";
        if (message.gameRuleGroup != null && message.hasOwnProperty("gameRuleGroup")) {
            if (!Array.isArray(message.gameRuleGroup))
                return "gameRuleGroup: array expected";
            for (var i = 0; i < message.gameRuleGroup.length; ++i)
                if (!$util.isInteger(message.gameRuleGroup[i]))
                    return "gameRuleGroup: integer[] expected";
        }
        if (!$util.isString(message.gameJson))
            return "gameJson: string expected";
        if (!$util.isInteger(message.mode))
            return "mode: integer expected";
        if (!$util.isInteger(message.clubUid))
            return "clubUid: integer expected";
        if (!$util.isString(message.tinyJson))
            return "tinyJson: string expected";
        if (!$util.isInteger(message.clubRuleId))
            return "clubRuleId: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_cb_create_table_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_cb_create_table_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_cb_create_table_req} mahjong_cb_create_table_req
     */
    mahjong_cb_create_table_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_cb_create_table_req)
            return object;
        var message = new $root.mahjong_cb_create_table_req();
        if (object.name != null)
            message.name = String(object.name);
        if (object.password != null)
            message.password = String(object.password);
        if (object.baseScore != null)
            message.baseScore = object.baseScore | 0;
        if (object.tableTime != null)
            message.tableTime = object.tableTime | 0;
        if (object.flag != null)
            message.flag = object.flag | 0;
        if (object.gameRule != null)
            message.gameRule = object.gameRule | 0;
        if (object.initScore != null)
            message.initScore = object.initScore | 0;
        if (object.gameRuleGroup) {
            if (!Array.isArray(object.gameRuleGroup))
                throw TypeError(".mahjong_cb_create_table_req.gameRuleGroup: array expected");
            message.gameRuleGroup = [];
            for (var i = 0; i < object.gameRuleGroup.length; ++i)
                message.gameRuleGroup[i] = object.gameRuleGroup[i] | 0;
        }
        if (object.gameJson != null)
            message.gameJson = String(object.gameJson);
        if (object.mode != null)
            message.mode = object.mode | 0;
        if (object.clubUid != null)
            message.clubUid = object.clubUid | 0;
        if (object.tinyJson != null)
            message.tinyJson = String(object.tinyJson);
        if (object.clubRuleId != null)
            message.clubRuleId = object.clubRuleId | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_cb_create_table_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_cb_create_table_req
     * @static
     * @param {mahjong_cb_create_table_req} message mahjong_cb_create_table_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_cb_create_table_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.gameRuleGroup = [];
        if (options.defaults) {
            object.name = "";
            object.password = "";
            object.baseScore = 0;
            object.tableTime = 0;
            object.flag = 0;
            object.gameRule = 0;
            object.initScore = 0;
            object.gameJson = "";
            object.mode = 0;
            object.clubUid = 0;
            object.tinyJson = "";
            object.clubRuleId = 0;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        if (message.baseScore != null && message.hasOwnProperty("baseScore"))
            object.baseScore = message.baseScore;
        if (message.tableTime != null && message.hasOwnProperty("tableTime"))
            object.tableTime = message.tableTime;
        if (message.flag != null && message.hasOwnProperty("flag"))
            object.flag = message.flag;
        if (message.gameRule != null && message.hasOwnProperty("gameRule"))
            object.gameRule = message.gameRule;
        if (message.initScore != null && message.hasOwnProperty("initScore"))
            object.initScore = message.initScore;
        if (message.gameRuleGroup && message.gameRuleGroup.length) {
            object.gameRuleGroup = [];
            for (var j = 0; j < message.gameRuleGroup.length; ++j)
                object.gameRuleGroup[j] = message.gameRuleGroup[j];
        }
        if (message.gameJson != null && message.hasOwnProperty("gameJson"))
            object.gameJson = message.gameJson;
        if (message.mode != null && message.hasOwnProperty("mode"))
            object.mode = message.mode;
        if (message.clubUid != null && message.hasOwnProperty("clubUid"))
            object.clubUid = message.clubUid;
        if (message.tinyJson != null && message.hasOwnProperty("tinyJson"))
            object.tinyJson = message.tinyJson;
        if (message.clubRuleId != null && message.hasOwnProperty("clubRuleId"))
            object.clubRuleId = message.clubRuleId;
        return object;
    };

    /**
     * Converts this mahjong_cb_create_table_req to JSON.
     * @function toJSON
     * @memberof mahjong_cb_create_table_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_cb_create_table_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_cb_create_table_req;
})();

$root.mahjong_bc_create_table_ack = (function() {

    /**
     * Properties of a mahjong_bc_create_table_ack.
     * @exports Imahjong_bc_create_table_ack
     * @interface Imahjong_bc_create_table_ack
     * @property {number} ret mahjong_bc_create_table_ack ret
     * @property {Imahjong_TableAttr} tableAttrs mahjong_bc_create_table_ack tableAttrs
     * @property {string} errMsg mahjong_bc_create_table_ack errMsg
     */

    /**
     * Constructs a new mahjong_bc_create_table_ack.
     * @exports mahjong_bc_create_table_ack
     * @classdesc Represents a mahjong_bc_create_table_ack.
     * @implements Imahjong_bc_create_table_ack
     * @constructor
     * @param {Imahjong_bc_create_table_ack=} [properties] Properties to set
     */
    function mahjong_bc_create_table_ack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_bc_create_table_ack ret.
     * @member {number} ret
     * @memberof mahjong_bc_create_table_ack
     * @instance
     */
    mahjong_bc_create_table_ack.prototype.ret = 0;

    /**
     * mahjong_bc_create_table_ack tableAttrs.
     * @member {Imahjong_TableAttr} tableAttrs
     * @memberof mahjong_bc_create_table_ack
     * @instance
     */
    mahjong_bc_create_table_ack.prototype.tableAttrs = null;

    /**
     * mahjong_bc_create_table_ack errMsg.
     * @member {string} errMsg
     * @memberof mahjong_bc_create_table_ack
     * @instance
     */
    mahjong_bc_create_table_ack.prototype.errMsg = "";

    /**
     * Creates a new mahjong_bc_create_table_ack instance using the specified properties.
     * @function create
     * @memberof mahjong_bc_create_table_ack
     * @static
     * @param {Imahjong_bc_create_table_ack=} [properties] Properties to set
     * @returns {mahjong_bc_create_table_ack} mahjong_bc_create_table_ack instance
     */
    mahjong_bc_create_table_ack.create = function create(properties) {
        return new mahjong_bc_create_table_ack(properties);
    };

    /**
     * Encodes the specified mahjong_bc_create_table_ack message. Does not implicitly {@link mahjong_bc_create_table_ack.verify|verify} messages.
     * @function encode
     * @memberof mahjong_bc_create_table_ack
     * @static
     * @param {Imahjong_bc_create_table_ack} message mahjong_bc_create_table_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_create_table_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
        $root.mahjong_TableAttr.encode(message.tableAttrs, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.errMsg);
        return writer;
    };

    /**
     * Encodes the specified mahjong_bc_create_table_ack message, length delimited. Does not implicitly {@link mahjong_bc_create_table_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_bc_create_table_ack
     * @static
     * @param {Imahjong_bc_create_table_ack} message mahjong_bc_create_table_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_create_table_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_bc_create_table_ack message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_bc_create_table_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_bc_create_table_ack} mahjong_bc_create_table_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_create_table_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_bc_create_table_ack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ret = reader.int32();
                break;
            case 2:
                message.tableAttrs = $root.mahjong_TableAttr.decode(reader, reader.uint32());
                break;
            case 3:
                message.errMsg = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("ret"))
            throw $util.ProtocolError("missing required 'ret'", { instance: message });
        if (!message.hasOwnProperty("tableAttrs"))
            throw $util.ProtocolError("missing required 'tableAttrs'", { instance: message });
        if (!message.hasOwnProperty("errMsg"))
            throw $util.ProtocolError("missing required 'errMsg'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_bc_create_table_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_bc_create_table_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_bc_create_table_ack} mahjong_bc_create_table_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_create_table_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_bc_create_table_ack message.
     * @function verify
     * @memberof mahjong_bc_create_table_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_bc_create_table_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.ret))
            return "ret: integer expected";
        {
            var error = $root.mahjong_TableAttr.verify(message.tableAttrs);
            if (error)
                return "tableAttrs." + error;
        }
        if (!$util.isString(message.errMsg))
            return "errMsg: string expected";
        return null;
    };

    /**
     * Creates a mahjong_bc_create_table_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_bc_create_table_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_bc_create_table_ack} mahjong_bc_create_table_ack
     */
    mahjong_bc_create_table_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_bc_create_table_ack)
            return object;
        var message = new $root.mahjong_bc_create_table_ack();
        if (object.ret != null)
            message.ret = object.ret | 0;
        if (object.tableAttrs != null) {
            if (typeof object.tableAttrs !== "object")
                throw TypeError(".mahjong_bc_create_table_ack.tableAttrs: object expected");
            message.tableAttrs = $root.mahjong_TableAttr.fromObject(object.tableAttrs);
        }
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        return message;
    };

    /**
     * Creates a plain object from a mahjong_bc_create_table_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_bc_create_table_ack
     * @static
     * @param {mahjong_bc_create_table_ack} message mahjong_bc_create_table_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_bc_create_table_ack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ret = 0;
            object.tableAttrs = null;
            object.errMsg = "";
        }
        if (message.ret != null && message.hasOwnProperty("ret"))
            object.ret = message.ret;
        if (message.tableAttrs != null && message.hasOwnProperty("tableAttrs"))
            object.tableAttrs = $root.mahjong_TableAttr.toObject(message.tableAttrs, options);
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            object.errMsg = message.errMsg;
        return object;
    };

    /**
     * Converts this mahjong_bc_create_table_ack to JSON.
     * @function toJSON
     * @memberof mahjong_bc_create_table_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_bc_create_table_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_bc_create_table_ack;
})();

$root.mahjong_TableAttr = (function() {

    /**
     * Properties of a mahjong_TableAttr.
     * @exports Imahjong_TableAttr
     * @interface Imahjong_TableAttr
     * @property {number} tableId mahjong_TableAttr tableId
     * @property {string} name mahjong_TableAttr name
     * @property {number} lock mahjong_TableAttr lock
     * @property {Array.<Imahjong_PlyBaseData>|null} [players] mahjong_TableAttr players
     */

    /**
     * Constructs a new mahjong_TableAttr.
     * @exports mahjong_TableAttr
     * @classdesc Represents a mahjong_TableAttr.
     * @implements Imahjong_TableAttr
     * @constructor
     * @param {Imahjong_TableAttr=} [properties] Properties to set
     */
    function mahjong_TableAttr(properties) {
        this.players = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_TableAttr tableId.
     * @member {number} tableId
     * @memberof mahjong_TableAttr
     * @instance
     */
    mahjong_TableAttr.prototype.tableId = 0;

    /**
     * mahjong_TableAttr name.
     * @member {string} name
     * @memberof mahjong_TableAttr
     * @instance
     */
    mahjong_TableAttr.prototype.name = "";

    /**
     * mahjong_TableAttr lock.
     * @member {number} lock
     * @memberof mahjong_TableAttr
     * @instance
     */
    mahjong_TableAttr.prototype.lock = 0;

    /**
     * mahjong_TableAttr players.
     * @member {Array.<Imahjong_PlyBaseData>} players
     * @memberof mahjong_TableAttr
     * @instance
     */
    mahjong_TableAttr.prototype.players = $util.emptyArray;

    /**
     * Creates a new mahjong_TableAttr instance using the specified properties.
     * @function create
     * @memberof mahjong_TableAttr
     * @static
     * @param {Imahjong_TableAttr=} [properties] Properties to set
     * @returns {mahjong_TableAttr} mahjong_TableAttr instance
     */
    mahjong_TableAttr.create = function create(properties) {
        return new mahjong_TableAttr(properties);
    };

    /**
     * Encodes the specified mahjong_TableAttr message. Does not implicitly {@link mahjong_TableAttr.verify|verify} messages.
     * @function encode
     * @memberof mahjong_TableAttr
     * @static
     * @param {Imahjong_TableAttr} message mahjong_TableAttr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_TableAttr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tableId);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.lock);
        if (message.players != null && message.players.length)
            for (var i = 0; i < message.players.length; ++i)
                $root.mahjong_PlyBaseData.encode(message.players[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_TableAttr message, length delimited. Does not implicitly {@link mahjong_TableAttr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_TableAttr
     * @static
     * @param {Imahjong_TableAttr} message mahjong_TableAttr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_TableAttr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_TableAttr message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_TableAttr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_TableAttr} mahjong_TableAttr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_TableAttr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_TableAttr();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.tableId = reader.int32();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.lock = reader.int32();
                break;
            case 4:
                if (!(message.players && message.players.length))
                    message.players = [];
                message.players.push($root.mahjong_PlyBaseData.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("tableId"))
            throw $util.ProtocolError("missing required 'tableId'", { instance: message });
        if (!message.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: message });
        if (!message.hasOwnProperty("lock"))
            throw $util.ProtocolError("missing required 'lock'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_TableAttr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_TableAttr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_TableAttr} mahjong_TableAttr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_TableAttr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_TableAttr message.
     * @function verify
     * @memberof mahjong_TableAttr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_TableAttr.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.tableId))
            return "tableId: integer expected";
        if (!$util.isString(message.name))
            return "name: string expected";
        if (!$util.isInteger(message.lock))
            return "lock: integer expected";
        if (message.players != null && message.hasOwnProperty("players")) {
            if (!Array.isArray(message.players))
                return "players: array expected";
            for (var i = 0; i < message.players.length; ++i) {
                var error = $root.mahjong_PlyBaseData.verify(message.players[i]);
                if (error)
                    return "players." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_TableAttr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_TableAttr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_TableAttr} mahjong_TableAttr
     */
    mahjong_TableAttr.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_TableAttr)
            return object;
        var message = new $root.mahjong_TableAttr();
        if (object.tableId != null)
            message.tableId = object.tableId | 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.lock != null)
            message.lock = object.lock | 0;
        if (object.players) {
            if (!Array.isArray(object.players))
                throw TypeError(".mahjong_TableAttr.players: array expected");
            message.players = [];
            for (var i = 0; i < object.players.length; ++i) {
                if (typeof object.players[i] !== "object")
                    throw TypeError(".mahjong_TableAttr.players: object expected");
                message.players[i] = $root.mahjong_PlyBaseData.fromObject(object.players[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_TableAttr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_TableAttr
     * @static
     * @param {mahjong_TableAttr} message mahjong_TableAttr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_TableAttr.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.players = [];
        if (options.defaults) {
            object.tableId = 0;
            object.name = "";
            object.lock = 0;
        }
        if (message.tableId != null && message.hasOwnProperty("tableId"))
            object.tableId = message.tableId;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.lock != null && message.hasOwnProperty("lock"))
            object.lock = message.lock;
        if (message.players && message.players.length) {
            object.players = [];
            for (var j = 0; j < message.players.length; ++j)
                object.players[j] = $root.mahjong_PlyBaseData.toObject(message.players[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_TableAttr to JSON.
     * @function toJSON
     * @memberof mahjong_TableAttr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_TableAttr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_TableAttr;
})();

$root.mahjong_PlyBaseData = (function() {

    /**
     * Properties of a mahjong_PlyBaseData.
     * @exports Imahjong_PlyBaseData
     * @interface Imahjong_PlyBaseData
     * @property {number|Long} plyGuid mahjong_PlyBaseData plyGuid
     * @property {string} nickname mahjong_PlyBaseData nickname
     * @property {number} sex mahjong_PlyBaseData sex
     * @property {number} gift mahjong_PlyBaseData gift
     * @property {number|Long} money mahjong_PlyBaseData money
     * @property {number} score mahjong_PlyBaseData score
     * @property {number} won mahjong_PlyBaseData won
     * @property {number} lost mahjong_PlyBaseData lost
     * @property {number} dogfall mahjong_PlyBaseData dogfall
     * @property {number} tableId mahjong_PlyBaseData tableId
     * @property {number} param_1 mahjong_PlyBaseData param_1
     * @property {number} param_2 mahjong_PlyBaseData param_2
     * @property {number} chairId mahjong_PlyBaseData chairId
     * @property {number} ready mahjong_PlyBaseData ready
     * @property {Imahjong_VipData} plyVip mahjong_PlyBaseData plyVip
     */

    /**
     * Constructs a new mahjong_PlyBaseData.
     * @exports mahjong_PlyBaseData
     * @classdesc Represents a mahjong_PlyBaseData.
     * @implements Imahjong_PlyBaseData
     * @constructor
     * @param {Imahjong_PlyBaseData=} [properties] Properties to set
     */
    function mahjong_PlyBaseData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_PlyBaseData plyGuid.
     * @member {number|Long} plyGuid
     * @memberof mahjong_PlyBaseData
     * @instance
     */
    mahjong_PlyBaseData.prototype.plyGuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * mahjong_PlyBaseData nickname.
     * @member {string} nickname
     * @memberof mahjong_PlyBaseData
     * @instance
     */
    mahjong_PlyBaseData.prototype.nickname = "";

    /**
     * mahjong_PlyBaseData sex.
     * @member {number} sex
     * @memberof mahjong_PlyBaseData
     * @instance
     */
    mahjong_PlyBaseData.prototype.sex = 0;

    /**
     * mahjong_PlyBaseData gift.
     * @member {number} gift
     * @memberof mahjong_PlyBaseData
     * @instance
     */
    mahjong_PlyBaseData.prototype.gift = 0;

    /**
     * mahjong_PlyBaseData money.
     * @member {number|Long} money
     * @memberof mahjong_PlyBaseData
     * @instance
     */
    mahjong_PlyBaseData.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * mahjong_PlyBaseData score.
     * @member {number} score
     * @memberof mahjong_PlyBaseData
     * @instance
     */
    mahjong_PlyBaseData.prototype.score = 0;

    /**
     * mahjong_PlyBaseData won.
     * @member {number} won
     * @memberof mahjong_PlyBaseData
     * @instance
     */
    mahjong_PlyBaseData.prototype.won = 0;

    /**
     * mahjong_PlyBaseData lost.
     * @member {number} lost
     * @memberof mahjong_PlyBaseData
     * @instance
     */
    mahjong_PlyBaseData.prototype.lost = 0;

    /**
     * mahjong_PlyBaseData dogfall.
     * @member {number} dogfall
     * @memberof mahjong_PlyBaseData
     * @instance
     */
    mahjong_PlyBaseData.prototype.dogfall = 0;

    /**
     * mahjong_PlyBaseData tableId.
     * @member {number} tableId
     * @memberof mahjong_PlyBaseData
     * @instance
     */
    mahjong_PlyBaseData.prototype.tableId = 0;

    /**
     * mahjong_PlyBaseData param_1.
     * @member {number} param_1
     * @memberof mahjong_PlyBaseData
     * @instance
     */
    mahjong_PlyBaseData.prototype.param_1 = 0;

    /**
     * mahjong_PlyBaseData param_2.
     * @member {number} param_2
     * @memberof mahjong_PlyBaseData
     * @instance
     */
    mahjong_PlyBaseData.prototype.param_2 = 0;

    /**
     * mahjong_PlyBaseData chairId.
     * @member {number} chairId
     * @memberof mahjong_PlyBaseData
     * @instance
     */
    mahjong_PlyBaseData.prototype.chairId = 0;

    /**
     * mahjong_PlyBaseData ready.
     * @member {number} ready
     * @memberof mahjong_PlyBaseData
     * @instance
     */
    mahjong_PlyBaseData.prototype.ready = 0;

    /**
     * mahjong_PlyBaseData plyVip.
     * @member {Imahjong_VipData} plyVip
     * @memberof mahjong_PlyBaseData
     * @instance
     */
    mahjong_PlyBaseData.prototype.plyVip = null;

    /**
     * Creates a new mahjong_PlyBaseData instance using the specified properties.
     * @function create
     * @memberof mahjong_PlyBaseData
     * @static
     * @param {Imahjong_PlyBaseData=} [properties] Properties to set
     * @returns {mahjong_PlyBaseData} mahjong_PlyBaseData instance
     */
    mahjong_PlyBaseData.create = function create(properties) {
        return new mahjong_PlyBaseData(properties);
    };

    /**
     * Encodes the specified mahjong_PlyBaseData message. Does not implicitly {@link mahjong_PlyBaseData.verify|verify} messages.
     * @function encode
     * @memberof mahjong_PlyBaseData
     * @static
     * @param {Imahjong_PlyBaseData} message mahjong_PlyBaseData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_PlyBaseData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.plyGuid);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sex);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.gift);
        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.money);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.score);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.won);
        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.lost);
        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.dogfall);
        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.tableId);
        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.param_1);
        writer.uint32(/* id 12, wireType 0 =*/96).int32(message.param_2);
        writer.uint32(/* id 13, wireType 0 =*/104).int32(message.chairId);
        writer.uint32(/* id 14, wireType 0 =*/112).int32(message.ready);
        $root.mahjong_VipData.encode(message.plyVip, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_PlyBaseData message, length delimited. Does not implicitly {@link mahjong_PlyBaseData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_PlyBaseData
     * @static
     * @param {Imahjong_PlyBaseData} message mahjong_PlyBaseData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_PlyBaseData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_PlyBaseData message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_PlyBaseData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_PlyBaseData} mahjong_PlyBaseData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_PlyBaseData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_PlyBaseData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.plyGuid = reader.int64();
                break;
            case 2:
                message.nickname = reader.string();
                break;
            case 3:
                message.sex = reader.int32();
                break;
            case 4:
                message.gift = reader.int32();
                break;
            case 5:
                message.money = reader.int64();
                break;
            case 6:
                message.score = reader.int32();
                break;
            case 7:
                message.won = reader.int32();
                break;
            case 8:
                message.lost = reader.int32();
                break;
            case 9:
                message.dogfall = reader.int32();
                break;
            case 10:
                message.tableId = reader.int32();
                break;
            case 11:
                message.param_1 = reader.int32();
                break;
            case 12:
                message.param_2 = reader.int32();
                break;
            case 13:
                message.chairId = reader.int32();
                break;
            case 14:
                message.ready = reader.int32();
                break;
            case 15:
                message.plyVip = $root.mahjong_VipData.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("plyGuid"))
            throw $util.ProtocolError("missing required 'plyGuid'", { instance: message });
        if (!message.hasOwnProperty("nickname"))
            throw $util.ProtocolError("missing required 'nickname'", { instance: message });
        if (!message.hasOwnProperty("sex"))
            throw $util.ProtocolError("missing required 'sex'", { instance: message });
        if (!message.hasOwnProperty("gift"))
            throw $util.ProtocolError("missing required 'gift'", { instance: message });
        if (!message.hasOwnProperty("money"))
            throw $util.ProtocolError("missing required 'money'", { instance: message });
        if (!message.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: message });
        if (!message.hasOwnProperty("won"))
            throw $util.ProtocolError("missing required 'won'", { instance: message });
        if (!message.hasOwnProperty("lost"))
            throw $util.ProtocolError("missing required 'lost'", { instance: message });
        if (!message.hasOwnProperty("dogfall"))
            throw $util.ProtocolError("missing required 'dogfall'", { instance: message });
        if (!message.hasOwnProperty("tableId"))
            throw $util.ProtocolError("missing required 'tableId'", { instance: message });
        if (!message.hasOwnProperty("param_1"))
            throw $util.ProtocolError("missing required 'param_1'", { instance: message });
        if (!message.hasOwnProperty("param_2"))
            throw $util.ProtocolError("missing required 'param_2'", { instance: message });
        if (!message.hasOwnProperty("chairId"))
            throw $util.ProtocolError("missing required 'chairId'", { instance: message });
        if (!message.hasOwnProperty("ready"))
            throw $util.ProtocolError("missing required 'ready'", { instance: message });
        if (!message.hasOwnProperty("plyVip"))
            throw $util.ProtocolError("missing required 'plyVip'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_PlyBaseData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_PlyBaseData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_PlyBaseData} mahjong_PlyBaseData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_PlyBaseData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_PlyBaseData message.
     * @function verify
     * @memberof mahjong_PlyBaseData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_PlyBaseData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.plyGuid) && !(message.plyGuid && $util.isInteger(message.plyGuid.low) && $util.isInteger(message.plyGuid.high)))
            return "plyGuid: integer|Long expected";
        if (!$util.isString(message.nickname))
            return "nickname: string expected";
        if (!$util.isInteger(message.sex))
            return "sex: integer expected";
        if (!$util.isInteger(message.gift))
            return "gift: integer expected";
        if (!$util.isInteger(message.money) && !(message.money && $util.isInteger(message.money.low) && $util.isInteger(message.money.high)))
            return "money: integer|Long expected";
        if (!$util.isInteger(message.score))
            return "score: integer expected";
        if (!$util.isInteger(message.won))
            return "won: integer expected";
        if (!$util.isInteger(message.lost))
            return "lost: integer expected";
        if (!$util.isInteger(message.dogfall))
            return "dogfall: integer expected";
        if (!$util.isInteger(message.tableId))
            return "tableId: integer expected";
        if (!$util.isInteger(message.param_1))
            return "param_1: integer expected";
        if (!$util.isInteger(message.param_2))
            return "param_2: integer expected";
        if (!$util.isInteger(message.chairId))
            return "chairId: integer expected";
        if (!$util.isInteger(message.ready))
            return "ready: integer expected";
        {
            var error = $root.mahjong_VipData.verify(message.plyVip);
            if (error)
                return "plyVip." + error;
        }
        return null;
    };

    /**
     * Creates a mahjong_PlyBaseData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_PlyBaseData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_PlyBaseData} mahjong_PlyBaseData
     */
    mahjong_PlyBaseData.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_PlyBaseData)
            return object;
        var message = new $root.mahjong_PlyBaseData();
        if (object.plyGuid != null)
            if ($util.Long)
                (message.plyGuid = $util.Long.fromValue(object.plyGuid)).unsigned = false;
            else if (typeof object.plyGuid === "string")
                message.plyGuid = parseInt(object.plyGuid, 10);
            else if (typeof object.plyGuid === "number")
                message.plyGuid = object.plyGuid;
            else if (typeof object.plyGuid === "object")
                message.plyGuid = new $util.LongBits(object.plyGuid.low >>> 0, object.plyGuid.high >>> 0).toNumber();
        if (object.nickname != null)
            message.nickname = String(object.nickname);
        if (object.sex != null)
            message.sex = object.sex | 0;
        if (object.gift != null)
            message.gift = object.gift | 0;
        if (object.money != null)
            if ($util.Long)
                (message.money = $util.Long.fromValue(object.money)).unsigned = false;
            else if (typeof object.money === "string")
                message.money = parseInt(object.money, 10);
            else if (typeof object.money === "number")
                message.money = object.money;
            else if (typeof object.money === "object")
                message.money = new $util.LongBits(object.money.low >>> 0, object.money.high >>> 0).toNumber();
        if (object.score != null)
            message.score = object.score | 0;
        if (object.won != null)
            message.won = object.won | 0;
        if (object.lost != null)
            message.lost = object.lost | 0;
        if (object.dogfall != null)
            message.dogfall = object.dogfall | 0;
        if (object.tableId != null)
            message.tableId = object.tableId | 0;
        if (object.param_1 != null)
            message.param_1 = object.param_1 | 0;
        if (object.param_2 != null)
            message.param_2 = object.param_2 | 0;
        if (object.chairId != null)
            message.chairId = object.chairId | 0;
        if (object.ready != null)
            message.ready = object.ready | 0;
        if (object.plyVip != null) {
            if (typeof object.plyVip !== "object")
                throw TypeError(".mahjong_PlyBaseData.plyVip: object expected");
            message.plyVip = $root.mahjong_VipData.fromObject(object.plyVip);
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_PlyBaseData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_PlyBaseData
     * @static
     * @param {mahjong_PlyBaseData} message mahjong_PlyBaseData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_PlyBaseData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.plyGuid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.plyGuid = options.longs === String ? "0" : 0;
            object.nickname = "";
            object.sex = 0;
            object.gift = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.money = options.longs === String ? "0" : 0;
            object.score = 0;
            object.won = 0;
            object.lost = 0;
            object.dogfall = 0;
            object.tableId = 0;
            object.param_1 = 0;
            object.param_2 = 0;
            object.chairId = 0;
            object.ready = 0;
            object.plyVip = null;
        }
        if (message.plyGuid != null && message.hasOwnProperty("plyGuid"))
            if (typeof message.plyGuid === "number")
                object.plyGuid = options.longs === String ? String(message.plyGuid) : message.plyGuid;
            else
                object.plyGuid = options.longs === String ? $util.Long.prototype.toString.call(message.plyGuid) : options.longs === Number ? new $util.LongBits(message.plyGuid.low >>> 0, message.plyGuid.high >>> 0).toNumber() : message.plyGuid;
        if (message.nickname != null && message.hasOwnProperty("nickname"))
            object.nickname = message.nickname;
        if (message.sex != null && message.hasOwnProperty("sex"))
            object.sex = message.sex;
        if (message.gift != null && message.hasOwnProperty("gift"))
            object.gift = message.gift;
        if (message.money != null && message.hasOwnProperty("money"))
            if (typeof message.money === "number")
                object.money = options.longs === String ? String(message.money) : message.money;
            else
                object.money = options.longs === String ? $util.Long.prototype.toString.call(message.money) : options.longs === Number ? new $util.LongBits(message.money.low >>> 0, message.money.high >>> 0).toNumber() : message.money;
        if (message.score != null && message.hasOwnProperty("score"))
            object.score = message.score;
        if (message.won != null && message.hasOwnProperty("won"))
            object.won = message.won;
        if (message.lost != null && message.hasOwnProperty("lost"))
            object.lost = message.lost;
        if (message.dogfall != null && message.hasOwnProperty("dogfall"))
            object.dogfall = message.dogfall;
        if (message.tableId != null && message.hasOwnProperty("tableId"))
            object.tableId = message.tableId;
        if (message.param_1 != null && message.hasOwnProperty("param_1"))
            object.param_1 = message.param_1;
        if (message.param_2 != null && message.hasOwnProperty("param_2"))
            object.param_2 = message.param_2;
        if (message.chairId != null && message.hasOwnProperty("chairId"))
            object.chairId = message.chairId;
        if (message.ready != null && message.hasOwnProperty("ready"))
            object.ready = message.ready;
        if (message.plyVip != null && message.hasOwnProperty("plyVip"))
            object.plyVip = $root.mahjong_VipData.toObject(message.plyVip, options);
        return object;
    };

    /**
     * Converts this mahjong_PlyBaseData to JSON.
     * @function toJSON
     * @memberof mahjong_PlyBaseData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_PlyBaseData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_PlyBaseData;
})();

$root.mahjong_VipData = (function() {

    /**
     * Properties of a mahjong_VipData.
     * @exports Imahjong_VipData
     * @interface Imahjong_VipData
     * @property {number} level mahjong_VipData level
     * @property {number} nexLevelTotalDays mahjong_VipData nexLevelTotalDays
     * @property {number} autoUpgradeDay mahjong_VipData autoUpgradeDay
     * @property {number} loginAward mahjong_VipData loginAward
     * @property {number} friendCount mahjong_VipData friendCount
     * @property {number} nextLevelDueDays mahjong_VipData nextLevelDueDays
     * @property {number} remainDueDays mahjong_VipData remainDueDays
     * @property {number} status mahjong_VipData status
     */

    /**
     * Constructs a new mahjong_VipData.
     * @exports mahjong_VipData
     * @classdesc Represents a mahjong_VipData.
     * @implements Imahjong_VipData
     * @constructor
     * @param {Imahjong_VipData=} [properties] Properties to set
     */
    function mahjong_VipData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_VipData level.
     * @member {number} level
     * @memberof mahjong_VipData
     * @instance
     */
    mahjong_VipData.prototype.level = 0;

    /**
     * mahjong_VipData nexLevelTotalDays.
     * @member {number} nexLevelTotalDays
     * @memberof mahjong_VipData
     * @instance
     */
    mahjong_VipData.prototype.nexLevelTotalDays = 0;

    /**
     * mahjong_VipData autoUpgradeDay.
     * @member {number} autoUpgradeDay
     * @memberof mahjong_VipData
     * @instance
     */
    mahjong_VipData.prototype.autoUpgradeDay = 0;

    /**
     * mahjong_VipData loginAward.
     * @member {number} loginAward
     * @memberof mahjong_VipData
     * @instance
     */
    mahjong_VipData.prototype.loginAward = 0;

    /**
     * mahjong_VipData friendCount.
     * @member {number} friendCount
     * @memberof mahjong_VipData
     * @instance
     */
    mahjong_VipData.prototype.friendCount = 0;

    /**
     * mahjong_VipData nextLevelDueDays.
     * @member {number} nextLevelDueDays
     * @memberof mahjong_VipData
     * @instance
     */
    mahjong_VipData.prototype.nextLevelDueDays = 0;

    /**
     * mahjong_VipData remainDueDays.
     * @member {number} remainDueDays
     * @memberof mahjong_VipData
     * @instance
     */
    mahjong_VipData.prototype.remainDueDays = 0;

    /**
     * mahjong_VipData status.
     * @member {number} status
     * @memberof mahjong_VipData
     * @instance
     */
    mahjong_VipData.prototype.status = 0;

    /**
     * Creates a new mahjong_VipData instance using the specified properties.
     * @function create
     * @memberof mahjong_VipData
     * @static
     * @param {Imahjong_VipData=} [properties] Properties to set
     * @returns {mahjong_VipData} mahjong_VipData instance
     */
    mahjong_VipData.create = function create(properties) {
        return new mahjong_VipData(properties);
    };

    /**
     * Encodes the specified mahjong_VipData message. Does not implicitly {@link mahjong_VipData.verify|verify} messages.
     * @function encode
     * @memberof mahjong_VipData
     * @static
     * @param {Imahjong_VipData} message mahjong_VipData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_VipData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.level);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nexLevelTotalDays);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.autoUpgradeDay);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.loginAward);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.friendCount);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.nextLevelDueDays);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.remainDueDays);
        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.status);
        return writer;
    };

    /**
     * Encodes the specified mahjong_VipData message, length delimited. Does not implicitly {@link mahjong_VipData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_VipData
     * @static
     * @param {Imahjong_VipData} message mahjong_VipData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_VipData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_VipData message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_VipData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_VipData} mahjong_VipData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_VipData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_VipData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.level = reader.int32();
                break;
            case 2:
                message.nexLevelTotalDays = reader.int32();
                break;
            case 3:
                message.autoUpgradeDay = reader.int32();
                break;
            case 4:
                message.loginAward = reader.int32();
                break;
            case 5:
                message.friendCount = reader.int32();
                break;
            case 6:
                message.nextLevelDueDays = reader.int32();
                break;
            case 7:
                message.remainDueDays = reader.int32();
                break;
            case 8:
                message.status = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("level"))
            throw $util.ProtocolError("missing required 'level'", { instance: message });
        if (!message.hasOwnProperty("nexLevelTotalDays"))
            throw $util.ProtocolError("missing required 'nexLevelTotalDays'", { instance: message });
        if (!message.hasOwnProperty("autoUpgradeDay"))
            throw $util.ProtocolError("missing required 'autoUpgradeDay'", { instance: message });
        if (!message.hasOwnProperty("loginAward"))
            throw $util.ProtocolError("missing required 'loginAward'", { instance: message });
        if (!message.hasOwnProperty("friendCount"))
            throw $util.ProtocolError("missing required 'friendCount'", { instance: message });
        if (!message.hasOwnProperty("nextLevelDueDays"))
            throw $util.ProtocolError("missing required 'nextLevelDueDays'", { instance: message });
        if (!message.hasOwnProperty("remainDueDays"))
            throw $util.ProtocolError("missing required 'remainDueDays'", { instance: message });
        if (!message.hasOwnProperty("status"))
            throw $util.ProtocolError("missing required 'status'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_VipData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_VipData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_VipData} mahjong_VipData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_VipData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_VipData message.
     * @function verify
     * @memberof mahjong_VipData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_VipData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.level))
            return "level: integer expected";
        if (!$util.isInteger(message.nexLevelTotalDays))
            return "nexLevelTotalDays: integer expected";
        if (!$util.isInteger(message.autoUpgradeDay))
            return "autoUpgradeDay: integer expected";
        if (!$util.isInteger(message.loginAward))
            return "loginAward: integer expected";
        if (!$util.isInteger(message.friendCount))
            return "friendCount: integer expected";
        if (!$util.isInteger(message.nextLevelDueDays))
            return "nextLevelDueDays: integer expected";
        if (!$util.isInteger(message.remainDueDays))
            return "remainDueDays: integer expected";
        if (!$util.isInteger(message.status))
            return "status: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_VipData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_VipData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_VipData} mahjong_VipData
     */
    mahjong_VipData.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_VipData)
            return object;
        var message = new $root.mahjong_VipData();
        if (object.level != null)
            message.level = object.level | 0;
        if (object.nexLevelTotalDays != null)
            message.nexLevelTotalDays = object.nexLevelTotalDays | 0;
        if (object.autoUpgradeDay != null)
            message.autoUpgradeDay = object.autoUpgradeDay | 0;
        if (object.loginAward != null)
            message.loginAward = object.loginAward | 0;
        if (object.friendCount != null)
            message.friendCount = object.friendCount | 0;
        if (object.nextLevelDueDays != null)
            message.nextLevelDueDays = object.nextLevelDueDays | 0;
        if (object.remainDueDays != null)
            message.remainDueDays = object.remainDueDays | 0;
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_VipData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_VipData
     * @static
     * @param {mahjong_VipData} message mahjong_VipData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_VipData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.level = 0;
            object.nexLevelTotalDays = 0;
            object.autoUpgradeDay = 0;
            object.loginAward = 0;
            object.friendCount = 0;
            object.nextLevelDueDays = 0;
            object.remainDueDays = 0;
            object.status = 0;
        }
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = message.level;
        if (message.nexLevelTotalDays != null && message.hasOwnProperty("nexLevelTotalDays"))
            object.nexLevelTotalDays = message.nexLevelTotalDays;
        if (message.autoUpgradeDay != null && message.hasOwnProperty("autoUpgradeDay"))
            object.autoUpgradeDay = message.autoUpgradeDay;
        if (message.loginAward != null && message.hasOwnProperty("loginAward"))
            object.loginAward = message.loginAward;
        if (message.friendCount != null && message.hasOwnProperty("friendCount"))
            object.friendCount = message.friendCount;
        if (message.nextLevelDueDays != null && message.hasOwnProperty("nextLevelDueDays"))
            object.nextLevelDueDays = message.nextLevelDueDays;
        if (message.remainDueDays != null && message.hasOwnProperty("remainDueDays"))
            object.remainDueDays = message.remainDueDays;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this mahjong_VipData to JSON.
     * @function toJSON
     * @memberof mahjong_VipData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_VipData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_VipData;
})();

module.exports = $root;
