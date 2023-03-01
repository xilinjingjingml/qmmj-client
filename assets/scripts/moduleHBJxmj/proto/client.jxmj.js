/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["jxmj"] || ($protobuf.roots["jxmj"] = {});

$root.mahjong_jxmj_tingfan_not = (function() {

    /**
     * Properties of a mahjong_jxmj_tingfan_not.
     * @exports Imahjong_jxmj_tingfan_not
     * @interface Imahjong_jxmj_tingfan_not
     * @property {number} sSerialID mahjong_jxmj_tingfan_not sSerialID
     * @property {Array.<Imahjong_jxmj_tingfan_data>|null} [vecTingFan] mahjong_jxmj_tingfan_not vecTingFan
     */

    /**
     * Constructs a new mahjong_jxmj_tingfan_not.
     * @exports mahjong_jxmj_tingfan_not
     * @classdesc Represents a mahjong_jxmj_tingfan_not.
     * @implements Imahjong_jxmj_tingfan_not
     * @constructor
     * @param {Imahjong_jxmj_tingfan_not=} [properties] Properties to set
     */
    function mahjong_jxmj_tingfan_not(properties) {
        this.vecTingFan = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_tingfan_not sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_jxmj_tingfan_not
     * @instance
     */
    mahjong_jxmj_tingfan_not.prototype.sSerialID = 0;

    /**
     * mahjong_jxmj_tingfan_not vecTingFan.
     * @member {Array.<Imahjong_jxmj_tingfan_data>} vecTingFan
     * @memberof mahjong_jxmj_tingfan_not
     * @instance
     */
    mahjong_jxmj_tingfan_not.prototype.vecTingFan = $util.emptyArray;

    /**
     * Creates a new mahjong_jxmj_tingfan_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_tingfan_not
     * @static
     * @param {Imahjong_jxmj_tingfan_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_tingfan_not} mahjong_jxmj_tingfan_not instance
     */
    mahjong_jxmj_tingfan_not.create = function create(properties) {
        return new mahjong_jxmj_tingfan_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_tingfan_not message. Does not implicitly {@link mahjong_jxmj_tingfan_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_tingfan_not
     * @static
     * @param {Imahjong_jxmj_tingfan_not} message mahjong_jxmj_tingfan_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_tingfan_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sSerialID);
        if (message.vecTingFan != null && message.vecTingFan.length)
            for (var i = 0; i < message.vecTingFan.length; ++i)
                $root.mahjong_jxmj_tingfan_data.encode(message.vecTingFan[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_tingfan_not message, length delimited. Does not implicitly {@link mahjong_jxmj_tingfan_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_tingfan_not
     * @static
     * @param {Imahjong_jxmj_tingfan_not} message mahjong_jxmj_tingfan_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_tingfan_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_tingfan_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_tingfan_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_tingfan_not} mahjong_jxmj_tingfan_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_tingfan_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_tingfan_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sSerialID = reader.int32();
                break;
            case 2:
                if (!(message.vecTingFan && message.vecTingFan.length))
                    message.vecTingFan = [];
                message.vecTingFan.push($root.mahjong_jxmj_tingfan_data.decode(reader, reader.uint32()));
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
     * Decodes a mahjong_jxmj_tingfan_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_tingfan_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_tingfan_not} mahjong_jxmj_tingfan_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_tingfan_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_tingfan_not message.
     * @function verify
     * @memberof mahjong_jxmj_tingfan_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_tingfan_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        if (message.vecTingFan != null && message.hasOwnProperty("vecTingFan")) {
            if (!Array.isArray(message.vecTingFan))
                return "vecTingFan: array expected";
            for (var i = 0; i < message.vecTingFan.length; ++i) {
                var error = $root.mahjong_jxmj_tingfan_data.verify(message.vecTingFan[i]);
                if (error)
                    return "vecTingFan." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_jxmj_tingfan_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_tingfan_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_tingfan_not} mahjong_jxmj_tingfan_not
     */
    mahjong_jxmj_tingfan_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_tingfan_not)
            return object;
        var message = new $root.mahjong_jxmj_tingfan_not();
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        if (object.vecTingFan) {
            if (!Array.isArray(object.vecTingFan))
                throw TypeError(".mahjong_jxmj_tingfan_not.vecTingFan: array expected");
            message.vecTingFan = [];
            for (var i = 0; i < object.vecTingFan.length; ++i) {
                if (typeof object.vecTingFan[i] !== "object")
                    throw TypeError(".mahjong_jxmj_tingfan_not.vecTingFan: object expected");
                message.vecTingFan[i] = $root.mahjong_jxmj_tingfan_data.fromObject(object.vecTingFan[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_tingfan_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_tingfan_not
     * @static
     * @param {mahjong_jxmj_tingfan_not} message mahjong_jxmj_tingfan_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_tingfan_not.toObject = function toObject(message, options) {
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
                object.vecTingFan[j] = $root.mahjong_jxmj_tingfan_data.toObject(message.vecTingFan[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_jxmj_tingfan_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_tingfan_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_tingfan_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_tingfan_not;
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

$root.mahjong_jxmj_pause_game_not = (function() {

    /**
     * Properties of a mahjong_jxmj_pause_game_not.
     * @exports Imahjong_jxmj_pause_game_not
     * @interface Imahjong_jxmj_pause_game_not
     * @property {number} nFlag mahjong_jxmj_pause_game_not nFlag
     * @property {number} nWaitTime mahjong_jxmj_pause_game_not nWaitTime
     * @property {number} nLeftTime mahjong_jxmj_pause_game_not nLeftTime
     * @property {number} cChairId mahjong_jxmj_pause_game_not cChairId
     * @property {string} sNickName mahjong_jxmj_pause_game_not sNickName
     */

    /**
     * Constructs a new mahjong_jxmj_pause_game_not.
     * @exports mahjong_jxmj_pause_game_not
     * @classdesc Represents a mahjong_jxmj_pause_game_not.
     * @implements Imahjong_jxmj_pause_game_not
     * @constructor
     * @param {Imahjong_jxmj_pause_game_not=} [properties] Properties to set
     */
    function mahjong_jxmj_pause_game_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_pause_game_not nFlag.
     * @member {number} nFlag
     * @memberof mahjong_jxmj_pause_game_not
     * @instance
     */
    mahjong_jxmj_pause_game_not.prototype.nFlag = 0;

    /**
     * mahjong_jxmj_pause_game_not nWaitTime.
     * @member {number} nWaitTime
     * @memberof mahjong_jxmj_pause_game_not
     * @instance
     */
    mahjong_jxmj_pause_game_not.prototype.nWaitTime = 0;

    /**
     * mahjong_jxmj_pause_game_not nLeftTime.
     * @member {number} nLeftTime
     * @memberof mahjong_jxmj_pause_game_not
     * @instance
     */
    mahjong_jxmj_pause_game_not.prototype.nLeftTime = 0;

    /**
     * mahjong_jxmj_pause_game_not cChairId.
     * @member {number} cChairId
     * @memberof mahjong_jxmj_pause_game_not
     * @instance
     */
    mahjong_jxmj_pause_game_not.prototype.cChairId = 0;

    /**
     * mahjong_jxmj_pause_game_not sNickName.
     * @member {string} sNickName
     * @memberof mahjong_jxmj_pause_game_not
     * @instance
     */
    mahjong_jxmj_pause_game_not.prototype.sNickName = "";

    /**
     * Creates a new mahjong_jxmj_pause_game_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_pause_game_not
     * @static
     * @param {Imahjong_jxmj_pause_game_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_pause_game_not} mahjong_jxmj_pause_game_not instance
     */
    mahjong_jxmj_pause_game_not.create = function create(properties) {
        return new mahjong_jxmj_pause_game_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_pause_game_not message. Does not implicitly {@link mahjong_jxmj_pause_game_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_pause_game_not
     * @static
     * @param {Imahjong_jxmj_pause_game_not} message mahjong_jxmj_pause_game_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_pause_game_not.encode = function encode(message, writer) {
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
     * Encodes the specified mahjong_jxmj_pause_game_not message, length delimited. Does not implicitly {@link mahjong_jxmj_pause_game_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_pause_game_not
     * @static
     * @param {Imahjong_jxmj_pause_game_not} message mahjong_jxmj_pause_game_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_pause_game_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_pause_game_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_pause_game_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_pause_game_not} mahjong_jxmj_pause_game_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_pause_game_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_pause_game_not();
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
     * Decodes a mahjong_jxmj_pause_game_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_pause_game_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_pause_game_not} mahjong_jxmj_pause_game_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_pause_game_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_pause_game_not message.
     * @function verify
     * @memberof mahjong_jxmj_pause_game_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_pause_game_not.verify = function verify(message) {
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
     * Creates a mahjong_jxmj_pause_game_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_pause_game_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_pause_game_not} mahjong_jxmj_pause_game_not
     */
    mahjong_jxmj_pause_game_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_pause_game_not)
            return object;
        var message = new $root.mahjong_jxmj_pause_game_not();
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
     * Creates a plain object from a mahjong_jxmj_pause_game_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_pause_game_not
     * @static
     * @param {mahjong_jxmj_pause_game_not} message mahjong_jxmj_pause_game_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_pause_game_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_pause_game_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_pause_game_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_pause_game_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_pause_game_not;
})();

$root.mahjong_cb_leave_table_req = (function() {

    /**
     * Properties of a mahjong_cb_leave_table_req.
     * @exports Imahjong_cb_leave_table_req
     * @interface Imahjong_cb_leave_table_req
     */

    /**
     * Constructs a new mahjong_cb_leave_table_req.
     * @exports mahjong_cb_leave_table_req
     * @classdesc Represents a mahjong_cb_leave_table_req.
     * @implements Imahjong_cb_leave_table_req
     * @constructor
     * @param {Imahjong_cb_leave_table_req=} [properties] Properties to set
     */
    function mahjong_cb_leave_table_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_cb_leave_table_req instance using the specified properties.
     * @function create
     * @memberof mahjong_cb_leave_table_req
     * @static
     * @param {Imahjong_cb_leave_table_req=} [properties] Properties to set
     * @returns {mahjong_cb_leave_table_req} mahjong_cb_leave_table_req instance
     */
    mahjong_cb_leave_table_req.create = function create(properties) {
        return new mahjong_cb_leave_table_req(properties);
    };

    /**
     * Encodes the specified mahjong_cb_leave_table_req message. Does not implicitly {@link mahjong_cb_leave_table_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_cb_leave_table_req
     * @static
     * @param {Imahjong_cb_leave_table_req} message mahjong_cb_leave_table_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_cb_leave_table_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_cb_leave_table_req message, length delimited. Does not implicitly {@link mahjong_cb_leave_table_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_cb_leave_table_req
     * @static
     * @param {Imahjong_cb_leave_table_req} message mahjong_cb_leave_table_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_cb_leave_table_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_cb_leave_table_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_cb_leave_table_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_cb_leave_table_req} mahjong_cb_leave_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_cb_leave_table_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_cb_leave_table_req();
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
     * Decodes a mahjong_cb_leave_table_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_cb_leave_table_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_cb_leave_table_req} mahjong_cb_leave_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_cb_leave_table_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_cb_leave_table_req message.
     * @function verify
     * @memberof mahjong_cb_leave_table_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_cb_leave_table_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_cb_leave_table_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_cb_leave_table_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_cb_leave_table_req} mahjong_cb_leave_table_req
     */
    mahjong_cb_leave_table_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_cb_leave_table_req)
            return object;
        return new $root.mahjong_cb_leave_table_req();
    };

    /**
     * Creates a plain object from a mahjong_cb_leave_table_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_cb_leave_table_req
     * @static
     * @param {mahjong_cb_leave_table_req} message mahjong_cb_leave_table_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_cb_leave_table_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_cb_leave_table_req to JSON.
     * @function toJSON
     * @memberof mahjong_cb_leave_table_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_cb_leave_table_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_cb_leave_table_req;
})();

$root.mahjong_jxmj_changecard_not = (function() {

    /**
     * Properties of a mahjong_jxmj_changecard_not.
     * @exports Imahjong_jxmj_changecard_not
     * @interface Imahjong_jxmj_changecard_not
     * @property {number} cChairID mahjong_jxmj_changecard_not cChairID
     * @property {number} cHuPai mahjong_jxmj_changecard_not cHuPai
     * @property {number} cCurrCards mahjong_jxmj_changecard_not cCurrCards
     * @property {Array.<number>|null} [vecDisplayCards] mahjong_jxmj_changecard_not vecDisplayCards
     * @property {Array.<number>|null} [vecLeftCards] mahjong_jxmj_changecard_not vecLeftCards
     * @property {Array.<number>|null} [vecHandCards] mahjong_jxmj_changecard_not vecHandCards
     * @property {number} nFrontPassedNum mahjong_jxmj_changecard_not nFrontPassedNum
     * @property {number} nBehidePassedNum mahjong_jxmj_changecard_not nBehidePassedNum
     * @property {number} nTingPos mahjong_jxmj_changecard_not nTingPos
     */

    /**
     * Constructs a new mahjong_jxmj_changecard_not.
     * @exports mahjong_jxmj_changecard_not
     * @classdesc Represents a mahjong_jxmj_changecard_not.
     * @implements Imahjong_jxmj_changecard_not
     * @constructor
     * @param {Imahjong_jxmj_changecard_not=} [properties] Properties to set
     */
    function mahjong_jxmj_changecard_not(properties) {
        this.vecDisplayCards = [];
        this.vecLeftCards = [];
        this.vecHandCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_changecard_not cChairID.
     * @member {number} cChairID
     * @memberof mahjong_jxmj_changecard_not
     * @instance
     */
    mahjong_jxmj_changecard_not.prototype.cChairID = 0;

    /**
     * mahjong_jxmj_changecard_not cHuPai.
     * @member {number} cHuPai
     * @memberof mahjong_jxmj_changecard_not
     * @instance
     */
    mahjong_jxmj_changecard_not.prototype.cHuPai = 0;

    /**
     * mahjong_jxmj_changecard_not cCurrCards.
     * @member {number} cCurrCards
     * @memberof mahjong_jxmj_changecard_not
     * @instance
     */
    mahjong_jxmj_changecard_not.prototype.cCurrCards = 0;

    /**
     * mahjong_jxmj_changecard_not vecDisplayCards.
     * @member {Array.<number>} vecDisplayCards
     * @memberof mahjong_jxmj_changecard_not
     * @instance
     */
    mahjong_jxmj_changecard_not.prototype.vecDisplayCards = $util.emptyArray;

    /**
     * mahjong_jxmj_changecard_not vecLeftCards.
     * @member {Array.<number>} vecLeftCards
     * @memberof mahjong_jxmj_changecard_not
     * @instance
     */
    mahjong_jxmj_changecard_not.prototype.vecLeftCards = $util.emptyArray;

    /**
     * mahjong_jxmj_changecard_not vecHandCards.
     * @member {Array.<number>} vecHandCards
     * @memberof mahjong_jxmj_changecard_not
     * @instance
     */
    mahjong_jxmj_changecard_not.prototype.vecHandCards = $util.emptyArray;

    /**
     * mahjong_jxmj_changecard_not nFrontPassedNum.
     * @member {number} nFrontPassedNum
     * @memberof mahjong_jxmj_changecard_not
     * @instance
     */
    mahjong_jxmj_changecard_not.prototype.nFrontPassedNum = 0;

    /**
     * mahjong_jxmj_changecard_not nBehidePassedNum.
     * @member {number} nBehidePassedNum
     * @memberof mahjong_jxmj_changecard_not
     * @instance
     */
    mahjong_jxmj_changecard_not.prototype.nBehidePassedNum = 0;

    /**
     * mahjong_jxmj_changecard_not nTingPos.
     * @member {number} nTingPos
     * @memberof mahjong_jxmj_changecard_not
     * @instance
     */
    mahjong_jxmj_changecard_not.prototype.nTingPos = 0;

    /**
     * Creates a new mahjong_jxmj_changecard_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_changecard_not
     * @static
     * @param {Imahjong_jxmj_changecard_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_changecard_not} mahjong_jxmj_changecard_not instance
     */
    mahjong_jxmj_changecard_not.create = function create(properties) {
        return new mahjong_jxmj_changecard_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_changecard_not message. Does not implicitly {@link mahjong_jxmj_changecard_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_changecard_not
     * @static
     * @param {Imahjong_jxmj_changecard_not} message mahjong_jxmj_changecard_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_changecard_not.encode = function encode(message, writer) {
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
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.nFrontPassedNum);
        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.nBehidePassedNum);
        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.nTingPos);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_changecard_not message, length delimited. Does not implicitly {@link mahjong_jxmj_changecard_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_changecard_not
     * @static
     * @param {Imahjong_jxmj_changecard_not} message mahjong_jxmj_changecard_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_changecard_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_changecard_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_changecard_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_changecard_not} mahjong_jxmj_changecard_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_changecard_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_changecard_not();
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
            case 7:
                message.nFrontPassedNum = reader.int32();
                break;
            case 8:
                message.nBehidePassedNum = reader.int32();
                break;
            case 9:
                message.nTingPos = reader.int32();
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
        if (!message.hasOwnProperty("nFrontPassedNum"))
            throw $util.ProtocolError("missing required 'nFrontPassedNum'", { instance: message });
        if (!message.hasOwnProperty("nBehidePassedNum"))
            throw $util.ProtocolError("missing required 'nBehidePassedNum'", { instance: message });
        if (!message.hasOwnProperty("nTingPos"))
            throw $util.ProtocolError("missing required 'nTingPos'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_jxmj_changecard_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_changecard_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_changecard_not} mahjong_jxmj_changecard_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_changecard_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_changecard_not message.
     * @function verify
     * @memberof mahjong_jxmj_changecard_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_changecard_not.verify = function verify(message) {
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
        if (!$util.isInteger(message.nFrontPassedNum))
            return "nFrontPassedNum: integer expected";
        if (!$util.isInteger(message.nBehidePassedNum))
            return "nBehidePassedNum: integer expected";
        if (!$util.isInteger(message.nTingPos))
            return "nTingPos: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_changecard_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_changecard_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_changecard_not} mahjong_jxmj_changecard_not
     */
    mahjong_jxmj_changecard_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_changecard_not)
            return object;
        var message = new $root.mahjong_jxmj_changecard_not();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.cHuPai != null)
            message.cHuPai = object.cHuPai | 0;
        if (object.cCurrCards != null)
            message.cCurrCards = object.cCurrCards | 0;
        if (object.vecDisplayCards) {
            if (!Array.isArray(object.vecDisplayCards))
                throw TypeError(".mahjong_jxmj_changecard_not.vecDisplayCards: array expected");
            message.vecDisplayCards = [];
            for (var i = 0; i < object.vecDisplayCards.length; ++i)
                message.vecDisplayCards[i] = object.vecDisplayCards[i] | 0;
        }
        if (object.vecLeftCards) {
            if (!Array.isArray(object.vecLeftCards))
                throw TypeError(".mahjong_jxmj_changecard_not.vecLeftCards: array expected");
            message.vecLeftCards = [];
            for (var i = 0; i < object.vecLeftCards.length; ++i)
                message.vecLeftCards[i] = object.vecLeftCards[i] | 0;
        }
        if (object.vecHandCards) {
            if (!Array.isArray(object.vecHandCards))
                throw TypeError(".mahjong_jxmj_changecard_not.vecHandCards: array expected");
            message.vecHandCards = [];
            for (var i = 0; i < object.vecHandCards.length; ++i)
                message.vecHandCards[i] = object.vecHandCards[i] | 0;
        }
        if (object.nFrontPassedNum != null)
            message.nFrontPassedNum = object.nFrontPassedNum | 0;
        if (object.nBehidePassedNum != null)
            message.nBehidePassedNum = object.nBehidePassedNum | 0;
        if (object.nTingPos != null)
            message.nTingPos = object.nTingPos | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_changecard_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_changecard_not
     * @static
     * @param {mahjong_jxmj_changecard_not} message mahjong_jxmj_changecard_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_changecard_not.toObject = function toObject(message, options) {
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
            object.nFrontPassedNum = 0;
            object.nBehidePassedNum = 0;
            object.nTingPos = 0;
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
        if (message.nFrontPassedNum != null && message.hasOwnProperty("nFrontPassedNum"))
            object.nFrontPassedNum = message.nFrontPassedNum;
        if (message.nBehidePassedNum != null && message.hasOwnProperty("nBehidePassedNum"))
            object.nBehidePassedNum = message.nBehidePassedNum;
        if (message.nTingPos != null && message.hasOwnProperty("nTingPos"))
            object.nTingPos = message.nTingPos;
        return object;
    };

    /**
     * Converts this mahjong_jxmj_changecard_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_changecard_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_changecard_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_changecard_not;
})();

$root.mahjong_jxmj_playcard_ack = (function() {

    /**
     * Properties of a mahjong_jxmj_playcard_ack.
     * @exports Imahjong_jxmj_playcard_ack
     * @interface Imahjong_jxmj_playcard_ack
     * @property {number} nOpcode mahjong_jxmj_playcard_ack nOpcode
     * @property {number} cOpCard mahjong_jxmj_playcard_ack cOpCard
     * @property {number} sSerialID mahjong_jxmj_playcard_ack sSerialID
     */

    /**
     * Constructs a new mahjong_jxmj_playcard_ack.
     * @exports mahjong_jxmj_playcard_ack
     * @classdesc Represents a mahjong_jxmj_playcard_ack.
     * @implements Imahjong_jxmj_playcard_ack
     * @constructor
     * @param {Imahjong_jxmj_playcard_ack=} [properties] Properties to set
     */
    function mahjong_jxmj_playcard_ack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_playcard_ack nOpcode.
     * @member {number} nOpcode
     * @memberof mahjong_jxmj_playcard_ack
     * @instance
     */
    mahjong_jxmj_playcard_ack.prototype.nOpcode = 0;

    /**
     * mahjong_jxmj_playcard_ack cOpCard.
     * @member {number} cOpCard
     * @memberof mahjong_jxmj_playcard_ack
     * @instance
     */
    mahjong_jxmj_playcard_ack.prototype.cOpCard = 0;

    /**
     * mahjong_jxmj_playcard_ack sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_jxmj_playcard_ack
     * @instance
     */
    mahjong_jxmj_playcard_ack.prototype.sSerialID = 0;

    /**
     * Creates a new mahjong_jxmj_playcard_ack instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_playcard_ack
     * @static
     * @param {Imahjong_jxmj_playcard_ack=} [properties] Properties to set
     * @returns {mahjong_jxmj_playcard_ack} mahjong_jxmj_playcard_ack instance
     */
    mahjong_jxmj_playcard_ack.create = function create(properties) {
        return new mahjong_jxmj_playcard_ack(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_playcard_ack message. Does not implicitly {@link mahjong_jxmj_playcard_ack.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_playcard_ack
     * @static
     * @param {Imahjong_jxmj_playcard_ack} message mahjong_jxmj_playcard_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_playcard_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nOpcode);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cOpCard);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sSerialID);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_playcard_ack message, length delimited. Does not implicitly {@link mahjong_jxmj_playcard_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_playcard_ack
     * @static
     * @param {Imahjong_jxmj_playcard_ack} message mahjong_jxmj_playcard_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_playcard_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_playcard_ack message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_playcard_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_playcard_ack} mahjong_jxmj_playcard_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_playcard_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_playcard_ack();
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
     * Decodes a mahjong_jxmj_playcard_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_playcard_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_playcard_ack} mahjong_jxmj_playcard_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_playcard_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_playcard_ack message.
     * @function verify
     * @memberof mahjong_jxmj_playcard_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_playcard_ack.verify = function verify(message) {
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
     * Creates a mahjong_jxmj_playcard_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_playcard_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_playcard_ack} mahjong_jxmj_playcard_ack
     */
    mahjong_jxmj_playcard_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_playcard_ack)
            return object;
        var message = new $root.mahjong_jxmj_playcard_ack();
        if (object.nOpcode != null)
            message.nOpcode = object.nOpcode | 0;
        if (object.cOpCard != null)
            message.cOpCard = object.cOpCard | 0;
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_playcard_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_playcard_ack
     * @static
     * @param {mahjong_jxmj_playcard_ack} message mahjong_jxmj_playcard_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_playcard_ack.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_playcard_ack to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_playcard_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_playcard_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_playcard_ack;
})();

$root.mahjong_jxmj_gc_expression_not = (function() {

    /**
     * Properties of a mahjong_jxmj_gc_expression_not.
     * @exports Imahjong_jxmj_gc_expression_not
     * @interface Imahjong_jxmj_gc_expression_not
     * @property {number} expressionType mahjong_jxmj_gc_expression_not expressionType
     * @property {number} expressionNum mahjong_jxmj_gc_expression_not expressionNum
     */

    /**
     * Constructs a new mahjong_jxmj_gc_expression_not.
     * @exports mahjong_jxmj_gc_expression_not
     * @classdesc Represents a mahjong_jxmj_gc_expression_not.
     * @implements Imahjong_jxmj_gc_expression_not
     * @constructor
     * @param {Imahjong_jxmj_gc_expression_not=} [properties] Properties to set
     */
    function mahjong_jxmj_gc_expression_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_gc_expression_not expressionType.
     * @member {number} expressionType
     * @memberof mahjong_jxmj_gc_expression_not
     * @instance
     */
    mahjong_jxmj_gc_expression_not.prototype.expressionType = 0;

    /**
     * mahjong_jxmj_gc_expression_not expressionNum.
     * @member {number} expressionNum
     * @memberof mahjong_jxmj_gc_expression_not
     * @instance
     */
    mahjong_jxmj_gc_expression_not.prototype.expressionNum = 0;

    /**
     * Creates a new mahjong_jxmj_gc_expression_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_gc_expression_not
     * @static
     * @param {Imahjong_jxmj_gc_expression_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_gc_expression_not} mahjong_jxmj_gc_expression_not instance
     */
    mahjong_jxmj_gc_expression_not.create = function create(properties) {
        return new mahjong_jxmj_gc_expression_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_gc_expression_not message. Does not implicitly {@link mahjong_jxmj_gc_expression_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_gc_expression_not
     * @static
     * @param {Imahjong_jxmj_gc_expression_not} message mahjong_jxmj_gc_expression_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_gc_expression_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.expressionType);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.expressionNum);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_gc_expression_not message, length delimited. Does not implicitly {@link mahjong_jxmj_gc_expression_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_gc_expression_not
     * @static
     * @param {Imahjong_jxmj_gc_expression_not} message mahjong_jxmj_gc_expression_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_gc_expression_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_gc_expression_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_gc_expression_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_gc_expression_not} mahjong_jxmj_gc_expression_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_gc_expression_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_gc_expression_not();
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
     * Decodes a mahjong_jxmj_gc_expression_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_gc_expression_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_gc_expression_not} mahjong_jxmj_gc_expression_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_gc_expression_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_gc_expression_not message.
     * @function verify
     * @memberof mahjong_jxmj_gc_expression_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_gc_expression_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.expressionType))
            return "expressionType: integer expected";
        if (!$util.isInteger(message.expressionNum))
            return "expressionNum: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_gc_expression_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_gc_expression_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_gc_expression_not} mahjong_jxmj_gc_expression_not
     */
    mahjong_jxmj_gc_expression_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_gc_expression_not)
            return object;
        var message = new $root.mahjong_jxmj_gc_expression_not();
        if (object.expressionType != null)
            message.expressionType = object.expressionType | 0;
        if (object.expressionNum != null)
            message.expressionNum = object.expressionNum | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_gc_expression_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_gc_expression_not
     * @static
     * @param {mahjong_jxmj_gc_expression_not} message mahjong_jxmj_gc_expression_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_gc_expression_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_gc_expression_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_gc_expression_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_gc_expression_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_gc_expression_not;
})();

$root.mahjong_bc_cli_timer_not = (function() {

    /**
     * Properties of a mahjong_bc_cli_timer_not.
     * @exports Imahjong_bc_cli_timer_not
     * @interface Imahjong_bc_cli_timer_not
     * @property {number|Long} plyGuid mahjong_bc_cli_timer_not plyGuid
     * @property {number} idleTime mahjong_bc_cli_timer_not idleTime
     */

    /**
     * Constructs a new mahjong_bc_cli_timer_not.
     * @exports mahjong_bc_cli_timer_not
     * @classdesc Represents a mahjong_bc_cli_timer_not.
     * @implements Imahjong_bc_cli_timer_not
     * @constructor
     * @param {Imahjong_bc_cli_timer_not=} [properties] Properties to set
     */
    function mahjong_bc_cli_timer_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_bc_cli_timer_not plyGuid.
     * @member {number|Long} plyGuid
     * @memberof mahjong_bc_cli_timer_not
     * @instance
     */
    mahjong_bc_cli_timer_not.prototype.plyGuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * mahjong_bc_cli_timer_not idleTime.
     * @member {number} idleTime
     * @memberof mahjong_bc_cli_timer_not
     * @instance
     */
    mahjong_bc_cli_timer_not.prototype.idleTime = 0;

    /**
     * Creates a new mahjong_bc_cli_timer_not instance using the specified properties.
     * @function create
     * @memberof mahjong_bc_cli_timer_not
     * @static
     * @param {Imahjong_bc_cli_timer_not=} [properties] Properties to set
     * @returns {mahjong_bc_cli_timer_not} mahjong_bc_cli_timer_not instance
     */
    mahjong_bc_cli_timer_not.create = function create(properties) {
        return new mahjong_bc_cli_timer_not(properties);
    };

    /**
     * Encodes the specified mahjong_bc_cli_timer_not message. Does not implicitly {@link mahjong_bc_cli_timer_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_bc_cli_timer_not
     * @static
     * @param {Imahjong_bc_cli_timer_not} message mahjong_bc_cli_timer_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_cli_timer_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.plyGuid);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.idleTime);
        return writer;
    };

    /**
     * Encodes the specified mahjong_bc_cli_timer_not message, length delimited. Does not implicitly {@link mahjong_bc_cli_timer_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_bc_cli_timer_not
     * @static
     * @param {Imahjong_bc_cli_timer_not} message mahjong_bc_cli_timer_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_cli_timer_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_bc_cli_timer_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_bc_cli_timer_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_bc_cli_timer_not} mahjong_bc_cli_timer_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_cli_timer_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_bc_cli_timer_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.plyGuid = reader.int64();
                break;
            case 2:
                message.idleTime = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("plyGuid"))
            throw $util.ProtocolError("missing required 'plyGuid'", { instance: message });
        if (!message.hasOwnProperty("idleTime"))
            throw $util.ProtocolError("missing required 'idleTime'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_bc_cli_timer_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_bc_cli_timer_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_bc_cli_timer_not} mahjong_bc_cli_timer_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_cli_timer_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_bc_cli_timer_not message.
     * @function verify
     * @memberof mahjong_bc_cli_timer_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_bc_cli_timer_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.plyGuid) && !(message.plyGuid && $util.isInteger(message.plyGuid.low) && $util.isInteger(message.plyGuid.high)))
            return "plyGuid: integer|Long expected";
        if (!$util.isInteger(message.idleTime))
            return "idleTime: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_bc_cli_timer_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_bc_cli_timer_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_bc_cli_timer_not} mahjong_bc_cli_timer_not
     */
    mahjong_bc_cli_timer_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_bc_cli_timer_not)
            return object;
        var message = new $root.mahjong_bc_cli_timer_not();
        if (object.plyGuid != null)
            if ($util.Long)
                (message.plyGuid = $util.Long.fromValue(object.plyGuid)).unsigned = false;
            else if (typeof object.plyGuid === "string")
                message.plyGuid = parseInt(object.plyGuid, 10);
            else if (typeof object.plyGuid === "number")
                message.plyGuid = object.plyGuid;
            else if (typeof object.plyGuid === "object")
                message.plyGuid = new $util.LongBits(object.plyGuid.low >>> 0, object.plyGuid.high >>> 0).toNumber();
        if (object.idleTime != null)
            message.idleTime = object.idleTime | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_bc_cli_timer_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_bc_cli_timer_not
     * @static
     * @param {mahjong_bc_cli_timer_not} message mahjong_bc_cli_timer_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_bc_cli_timer_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.plyGuid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.plyGuid = options.longs === String ? "0" : 0;
            object.idleTime = 0;
        }
        if (message.plyGuid != null && message.hasOwnProperty("plyGuid"))
            if (typeof message.plyGuid === "number")
                object.plyGuid = options.longs === String ? String(message.plyGuid) : message.plyGuid;
            else
                object.plyGuid = options.longs === String ? $util.Long.prototype.toString.call(message.plyGuid) : options.longs === Number ? new $util.LongBits(message.plyGuid.low >>> 0, message.plyGuid.high >>> 0).toNumber() : message.plyGuid;
        if (message.idleTime != null && message.hasOwnProperty("idleTime"))
            object.idleTime = message.idleTime;
        return object;
    };

    /**
     * Converts this mahjong_bc_cli_timer_not to JSON.
     * @function toJSON
     * @memberof mahjong_bc_cli_timer_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_bc_cli_timer_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_bc_cli_timer_not;
})();

$root.mahjong_jxmj_visi_compdata_not = (function() {

    /**
     * Properties of a mahjong_jxmj_visi_compdata_not.
     * @exports Imahjong_jxmj_visi_compdata_not
     * @interface Imahjong_jxmj_visi_compdata_not
     * @property {number} cBanker mahjong_jxmj_visi_compdata_not cBanker
     * @property {number} nLeftCards mahjong_jxmj_visi_compdata_not nLeftCards
     * @property {number} nDizhu mahjong_jxmj_visi_compdata_not nDizhu
     * @property {number} nTaifei mahjong_jxmj_visi_compdata_not nTaifei
     * @property {number} cCurrPly mahjong_jxmj_visi_compdata_not cCurrPly
     * @property {number} cPrioPly mahjong_jxmj_visi_compdata_not cPrioPly
     * @property {number} cAdminPly mahjong_jxmj_visi_compdata_not cAdminPly
     * @property {number} cInvitePly mahjong_jxmj_visi_compdata_not cInvitePly
     * @property {Array.<number|Long>|null} [vecFakeScores] mahjong_jxmj_visi_compdata_not vecFakeScores
     * @property {Array.<Imahjong_jxmj_changecard_not>|null} [vecPlyData] mahjong_jxmj_visi_compdata_not vecPlyData
     * @property {number} nParam1 mahjong_jxmj_visi_compdata_not nParam1
     * @property {number} nParam2 mahjong_jxmj_visi_compdata_not nParam2
     * @property {string} strParam1 mahjong_jxmj_visi_compdata_not strParam1
     * @property {string} strParam2 mahjong_jxmj_visi_compdata_not strParam2
     */

    /**
     * Constructs a new mahjong_jxmj_visi_compdata_not.
     * @exports mahjong_jxmj_visi_compdata_not
     * @classdesc Represents a mahjong_jxmj_visi_compdata_not.
     * @implements Imahjong_jxmj_visi_compdata_not
     * @constructor
     * @param {Imahjong_jxmj_visi_compdata_not=} [properties] Properties to set
     */
    function mahjong_jxmj_visi_compdata_not(properties) {
        this.vecFakeScores = [];
        this.vecPlyData = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_visi_compdata_not cBanker.
     * @member {number} cBanker
     * @memberof mahjong_jxmj_visi_compdata_not
     * @instance
     */
    mahjong_jxmj_visi_compdata_not.prototype.cBanker = 0;

    /**
     * mahjong_jxmj_visi_compdata_not nLeftCards.
     * @member {number} nLeftCards
     * @memberof mahjong_jxmj_visi_compdata_not
     * @instance
     */
    mahjong_jxmj_visi_compdata_not.prototype.nLeftCards = 0;

    /**
     * mahjong_jxmj_visi_compdata_not nDizhu.
     * @member {number} nDizhu
     * @memberof mahjong_jxmj_visi_compdata_not
     * @instance
     */
    mahjong_jxmj_visi_compdata_not.prototype.nDizhu = 0;

    /**
     * mahjong_jxmj_visi_compdata_not nTaifei.
     * @member {number} nTaifei
     * @memberof mahjong_jxmj_visi_compdata_not
     * @instance
     */
    mahjong_jxmj_visi_compdata_not.prototype.nTaifei = 0;

    /**
     * mahjong_jxmj_visi_compdata_not cCurrPly.
     * @member {number} cCurrPly
     * @memberof mahjong_jxmj_visi_compdata_not
     * @instance
     */
    mahjong_jxmj_visi_compdata_not.prototype.cCurrPly = 0;

    /**
     * mahjong_jxmj_visi_compdata_not cPrioPly.
     * @member {number} cPrioPly
     * @memberof mahjong_jxmj_visi_compdata_not
     * @instance
     */
    mahjong_jxmj_visi_compdata_not.prototype.cPrioPly = 0;

    /**
     * mahjong_jxmj_visi_compdata_not cAdminPly.
     * @member {number} cAdminPly
     * @memberof mahjong_jxmj_visi_compdata_not
     * @instance
     */
    mahjong_jxmj_visi_compdata_not.prototype.cAdminPly = 0;

    /**
     * mahjong_jxmj_visi_compdata_not cInvitePly.
     * @member {number} cInvitePly
     * @memberof mahjong_jxmj_visi_compdata_not
     * @instance
     */
    mahjong_jxmj_visi_compdata_not.prototype.cInvitePly = 0;

    /**
     * mahjong_jxmj_visi_compdata_not vecFakeScores.
     * @member {Array.<number|Long>} vecFakeScores
     * @memberof mahjong_jxmj_visi_compdata_not
     * @instance
     */
    mahjong_jxmj_visi_compdata_not.prototype.vecFakeScores = $util.emptyArray;

    /**
     * mahjong_jxmj_visi_compdata_not vecPlyData.
     * @member {Array.<Imahjong_jxmj_changecard_not>} vecPlyData
     * @memberof mahjong_jxmj_visi_compdata_not
     * @instance
     */
    mahjong_jxmj_visi_compdata_not.prototype.vecPlyData = $util.emptyArray;

    /**
     * mahjong_jxmj_visi_compdata_not nParam1.
     * @member {number} nParam1
     * @memberof mahjong_jxmj_visi_compdata_not
     * @instance
     */
    mahjong_jxmj_visi_compdata_not.prototype.nParam1 = 0;

    /**
     * mahjong_jxmj_visi_compdata_not nParam2.
     * @member {number} nParam2
     * @memberof mahjong_jxmj_visi_compdata_not
     * @instance
     */
    mahjong_jxmj_visi_compdata_not.prototype.nParam2 = 0;

    /**
     * mahjong_jxmj_visi_compdata_not strParam1.
     * @member {string} strParam1
     * @memberof mahjong_jxmj_visi_compdata_not
     * @instance
     */
    mahjong_jxmj_visi_compdata_not.prototype.strParam1 = "";

    /**
     * mahjong_jxmj_visi_compdata_not strParam2.
     * @member {string} strParam2
     * @memberof mahjong_jxmj_visi_compdata_not
     * @instance
     */
    mahjong_jxmj_visi_compdata_not.prototype.strParam2 = "";

    /**
     * Creates a new mahjong_jxmj_visi_compdata_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_visi_compdata_not
     * @static
     * @param {Imahjong_jxmj_visi_compdata_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_visi_compdata_not} mahjong_jxmj_visi_compdata_not instance
     */
    mahjong_jxmj_visi_compdata_not.create = function create(properties) {
        return new mahjong_jxmj_visi_compdata_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_visi_compdata_not message. Does not implicitly {@link mahjong_jxmj_visi_compdata_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_visi_compdata_not
     * @static
     * @param {Imahjong_jxmj_visi_compdata_not} message mahjong_jxmj_visi_compdata_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_visi_compdata_not.encode = function encode(message, writer) {
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
                $root.mahjong_jxmj_changecard_not.encode(message.vecPlyData[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.nParam1);
        writer.uint32(/* id 12, wireType 0 =*/96).int32(message.nParam2);
        writer.uint32(/* id 13, wireType 2 =*/106).string(message.strParam1);
        writer.uint32(/* id 14, wireType 2 =*/114).string(message.strParam2);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_visi_compdata_not message, length delimited. Does not implicitly {@link mahjong_jxmj_visi_compdata_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_visi_compdata_not
     * @static
     * @param {Imahjong_jxmj_visi_compdata_not} message mahjong_jxmj_visi_compdata_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_visi_compdata_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_visi_compdata_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_visi_compdata_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_visi_compdata_not} mahjong_jxmj_visi_compdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_visi_compdata_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_visi_compdata_not();
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
                message.vecPlyData.push($root.mahjong_jxmj_changecard_not.decode(reader, reader.uint32()));
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
     * Decodes a mahjong_jxmj_visi_compdata_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_visi_compdata_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_visi_compdata_not} mahjong_jxmj_visi_compdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_visi_compdata_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_visi_compdata_not message.
     * @function verify
     * @memberof mahjong_jxmj_visi_compdata_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_visi_compdata_not.verify = function verify(message) {
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
                var error = $root.mahjong_jxmj_changecard_not.verify(message.vecPlyData[i]);
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
     * Creates a mahjong_jxmj_visi_compdata_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_visi_compdata_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_visi_compdata_not} mahjong_jxmj_visi_compdata_not
     */
    mahjong_jxmj_visi_compdata_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_visi_compdata_not)
            return object;
        var message = new $root.mahjong_jxmj_visi_compdata_not();
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
                throw TypeError(".mahjong_jxmj_visi_compdata_not.vecFakeScores: array expected");
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
                throw TypeError(".mahjong_jxmj_visi_compdata_not.vecPlyData: array expected");
            message.vecPlyData = [];
            for (var i = 0; i < object.vecPlyData.length; ++i) {
                if (typeof object.vecPlyData[i] !== "object")
                    throw TypeError(".mahjong_jxmj_visi_compdata_not.vecPlyData: object expected");
                message.vecPlyData[i] = $root.mahjong_jxmj_changecard_not.fromObject(object.vecPlyData[i]);
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
     * Creates a plain object from a mahjong_jxmj_visi_compdata_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_visi_compdata_not
     * @static
     * @param {mahjong_jxmj_visi_compdata_not} message mahjong_jxmj_visi_compdata_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_visi_compdata_not.toObject = function toObject(message, options) {
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
                object.vecPlyData[j] = $root.mahjong_jxmj_changecard_not.toObject(message.vecPlyData[j], options);
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
     * Converts this mahjong_jxmj_visi_compdata_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_visi_compdata_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_visi_compdata_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_visi_compdata_not;
})();

$root.mahjong_jxmj_playcard_req = (function() {

    /**
     * Properties of a mahjong_jxmj_playcard_req.
     * @exports Imahjong_jxmj_playcard_req
     * @interface Imahjong_jxmj_playcard_req
     * @property {number} chairId mahjong_jxmj_playcard_req chairId
     * @property {number} nOpcode mahjong_jxmj_playcard_req nOpcode
     * @property {number} cPrevCard mahjong_jxmj_playcard_req cPrevCard
     * @property {Array.<number>|null} [vecTingPutCards] mahjong_jxmj_playcard_req vecTingPutCards
     * @property {Array.<number>|null} [vecTingHuCards] mahjong_jxmj_playcard_req vecTingHuCards
     * @property {Array.<Imahjong_jxmj_gang_info>|null} [vecGangInfo] mahjong_jxmj_playcard_req vecGangInfo
     * @property {number} sSerialID mahjong_jxmj_playcard_req sSerialID
     */

    /**
     * Constructs a new mahjong_jxmj_playcard_req.
     * @exports mahjong_jxmj_playcard_req
     * @classdesc Represents a mahjong_jxmj_playcard_req.
     * @implements Imahjong_jxmj_playcard_req
     * @constructor
     * @param {Imahjong_jxmj_playcard_req=} [properties] Properties to set
     */
    function mahjong_jxmj_playcard_req(properties) {
        this.vecTingPutCards = [];
        this.vecTingHuCards = [];
        this.vecGangInfo = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_playcard_req chairId.
     * @member {number} chairId
     * @memberof mahjong_jxmj_playcard_req
     * @instance
     */
    mahjong_jxmj_playcard_req.prototype.chairId = 0;

    /**
     * mahjong_jxmj_playcard_req nOpcode.
     * @member {number} nOpcode
     * @memberof mahjong_jxmj_playcard_req
     * @instance
     */
    mahjong_jxmj_playcard_req.prototype.nOpcode = 0;

    /**
     * mahjong_jxmj_playcard_req cPrevCard.
     * @member {number} cPrevCard
     * @memberof mahjong_jxmj_playcard_req
     * @instance
     */
    mahjong_jxmj_playcard_req.prototype.cPrevCard = 0;

    /**
     * mahjong_jxmj_playcard_req vecTingPutCards.
     * @member {Array.<number>} vecTingPutCards
     * @memberof mahjong_jxmj_playcard_req
     * @instance
     */
    mahjong_jxmj_playcard_req.prototype.vecTingPutCards = $util.emptyArray;

    /**
     * mahjong_jxmj_playcard_req vecTingHuCards.
     * @member {Array.<number>} vecTingHuCards
     * @memberof mahjong_jxmj_playcard_req
     * @instance
     */
    mahjong_jxmj_playcard_req.prototype.vecTingHuCards = $util.emptyArray;

    /**
     * mahjong_jxmj_playcard_req vecGangInfo.
     * @member {Array.<Imahjong_jxmj_gang_info>} vecGangInfo
     * @memberof mahjong_jxmj_playcard_req
     * @instance
     */
    mahjong_jxmj_playcard_req.prototype.vecGangInfo = $util.emptyArray;

    /**
     * mahjong_jxmj_playcard_req sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_jxmj_playcard_req
     * @instance
     */
    mahjong_jxmj_playcard_req.prototype.sSerialID = 0;

    /**
     * Creates a new mahjong_jxmj_playcard_req instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_playcard_req
     * @static
     * @param {Imahjong_jxmj_playcard_req=} [properties] Properties to set
     * @returns {mahjong_jxmj_playcard_req} mahjong_jxmj_playcard_req instance
     */
    mahjong_jxmj_playcard_req.create = function create(properties) {
        return new mahjong_jxmj_playcard_req(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_playcard_req message. Does not implicitly {@link mahjong_jxmj_playcard_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_playcard_req
     * @static
     * @param {Imahjong_jxmj_playcard_req} message mahjong_jxmj_playcard_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_playcard_req.encode = function encode(message, writer) {
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
        if (message.vecGangInfo != null && message.vecGangInfo.length)
            for (var i = 0; i < message.vecGangInfo.length; ++i)
                $root.mahjong_jxmj_gang_info.encode(message.vecGangInfo[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.sSerialID);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_playcard_req message, length delimited. Does not implicitly {@link mahjong_jxmj_playcard_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_playcard_req
     * @static
     * @param {Imahjong_jxmj_playcard_req} message mahjong_jxmj_playcard_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_playcard_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_playcard_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_playcard_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_playcard_req} mahjong_jxmj_playcard_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_playcard_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_playcard_req();
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
                if (!(message.vecGangInfo && message.vecGangInfo.length))
                    message.vecGangInfo = [];
                message.vecGangInfo.push($root.mahjong_jxmj_gang_info.decode(reader, reader.uint32()));
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
     * Decodes a mahjong_jxmj_playcard_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_playcard_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_playcard_req} mahjong_jxmj_playcard_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_playcard_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_playcard_req message.
     * @function verify
     * @memberof mahjong_jxmj_playcard_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_playcard_req.verify = function verify(message) {
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
        if (message.vecGangInfo != null && message.hasOwnProperty("vecGangInfo")) {
            if (!Array.isArray(message.vecGangInfo))
                return "vecGangInfo: array expected";
            for (var i = 0; i < message.vecGangInfo.length; ++i) {
                var error = $root.mahjong_jxmj_gang_info.verify(message.vecGangInfo[i]);
                if (error)
                    return "vecGangInfo." + error;
            }
        }
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_playcard_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_playcard_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_playcard_req} mahjong_jxmj_playcard_req
     */
    mahjong_jxmj_playcard_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_playcard_req)
            return object;
        var message = new $root.mahjong_jxmj_playcard_req();
        if (object.chairId != null)
            message.chairId = object.chairId | 0;
        if (object.nOpcode != null)
            message.nOpcode = object.nOpcode | 0;
        if (object.cPrevCard != null)
            message.cPrevCard = object.cPrevCard | 0;
        if (object.vecTingPutCards) {
            if (!Array.isArray(object.vecTingPutCards))
                throw TypeError(".mahjong_jxmj_playcard_req.vecTingPutCards: array expected");
            message.vecTingPutCards = [];
            for (var i = 0; i < object.vecTingPutCards.length; ++i)
                message.vecTingPutCards[i] = object.vecTingPutCards[i] | 0;
        }
        if (object.vecTingHuCards) {
            if (!Array.isArray(object.vecTingHuCards))
                throw TypeError(".mahjong_jxmj_playcard_req.vecTingHuCards: array expected");
            message.vecTingHuCards = [];
            for (var i = 0; i < object.vecTingHuCards.length; ++i)
                message.vecTingHuCards[i] = object.vecTingHuCards[i] | 0;
        }
        if (object.vecGangInfo) {
            if (!Array.isArray(object.vecGangInfo))
                throw TypeError(".mahjong_jxmj_playcard_req.vecGangInfo: array expected");
            message.vecGangInfo = [];
            for (var i = 0; i < object.vecGangInfo.length; ++i) {
                if (typeof object.vecGangInfo[i] !== "object")
                    throw TypeError(".mahjong_jxmj_playcard_req.vecGangInfo: object expected");
                message.vecGangInfo[i] = $root.mahjong_jxmj_gang_info.fromObject(object.vecGangInfo[i]);
            }
        }
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_playcard_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_playcard_req
     * @static
     * @param {mahjong_jxmj_playcard_req} message mahjong_jxmj_playcard_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_playcard_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecTingPutCards = [];
            object.vecTingHuCards = [];
            object.vecGangInfo = [];
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
        if (message.vecGangInfo && message.vecGangInfo.length) {
            object.vecGangInfo = [];
            for (var j = 0; j < message.vecGangInfo.length; ++j)
                object.vecGangInfo[j] = $root.mahjong_jxmj_gang_info.toObject(message.vecGangInfo[j], options);
        }
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        return object;
    };

    /**
     * Converts this mahjong_jxmj_playcard_req to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_playcard_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_playcard_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_playcard_req;
})();

$root.mahjong_bc_ply_leave_not = (function() {

    /**
     * Properties of a mahjong_bc_ply_leave_not.
     * @exports Imahjong_bc_ply_leave_not
     * @interface Imahjong_bc_ply_leave_not
     * @property {number|Long} plyGuid mahjong_bc_ply_leave_not plyGuid
     */

    /**
     * Constructs a new mahjong_bc_ply_leave_not.
     * @exports mahjong_bc_ply_leave_not
     * @classdesc Represents a mahjong_bc_ply_leave_not.
     * @implements Imahjong_bc_ply_leave_not
     * @constructor
     * @param {Imahjong_bc_ply_leave_not=} [properties] Properties to set
     */
    function mahjong_bc_ply_leave_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_bc_ply_leave_not plyGuid.
     * @member {number|Long} plyGuid
     * @memberof mahjong_bc_ply_leave_not
     * @instance
     */
    mahjong_bc_ply_leave_not.prototype.plyGuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new mahjong_bc_ply_leave_not instance using the specified properties.
     * @function create
     * @memberof mahjong_bc_ply_leave_not
     * @static
     * @param {Imahjong_bc_ply_leave_not=} [properties] Properties to set
     * @returns {mahjong_bc_ply_leave_not} mahjong_bc_ply_leave_not instance
     */
    mahjong_bc_ply_leave_not.create = function create(properties) {
        return new mahjong_bc_ply_leave_not(properties);
    };

    /**
     * Encodes the specified mahjong_bc_ply_leave_not message. Does not implicitly {@link mahjong_bc_ply_leave_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_bc_ply_leave_not
     * @static
     * @param {Imahjong_bc_ply_leave_not} message mahjong_bc_ply_leave_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_ply_leave_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.plyGuid);
        return writer;
    };

    /**
     * Encodes the specified mahjong_bc_ply_leave_not message, length delimited. Does not implicitly {@link mahjong_bc_ply_leave_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_bc_ply_leave_not
     * @static
     * @param {Imahjong_bc_ply_leave_not} message mahjong_bc_ply_leave_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_ply_leave_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_bc_ply_leave_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_bc_ply_leave_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_bc_ply_leave_not} mahjong_bc_ply_leave_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_ply_leave_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_bc_ply_leave_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.plyGuid = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("plyGuid"))
            throw $util.ProtocolError("missing required 'plyGuid'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_bc_ply_leave_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_bc_ply_leave_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_bc_ply_leave_not} mahjong_bc_ply_leave_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_ply_leave_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_bc_ply_leave_not message.
     * @function verify
     * @memberof mahjong_bc_ply_leave_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_bc_ply_leave_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.plyGuid) && !(message.plyGuid && $util.isInteger(message.plyGuid.low) && $util.isInteger(message.plyGuid.high)))
            return "plyGuid: integer|Long expected";
        return null;
    };

    /**
     * Creates a mahjong_bc_ply_leave_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_bc_ply_leave_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_bc_ply_leave_not} mahjong_bc_ply_leave_not
     */
    mahjong_bc_ply_leave_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_bc_ply_leave_not)
            return object;
        var message = new $root.mahjong_bc_ply_leave_not();
        if (object.plyGuid != null)
            if ($util.Long)
                (message.plyGuid = $util.Long.fromValue(object.plyGuid)).unsigned = false;
            else if (typeof object.plyGuid === "string")
                message.plyGuid = parseInt(object.plyGuid, 10);
            else if (typeof object.plyGuid === "number")
                message.plyGuid = object.plyGuid;
            else if (typeof object.plyGuid === "object")
                message.plyGuid = new $util.LongBits(object.plyGuid.low >>> 0, object.plyGuid.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a mahjong_bc_ply_leave_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_bc_ply_leave_not
     * @static
     * @param {mahjong_bc_ply_leave_not} message mahjong_bc_ply_leave_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_bc_ply_leave_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.plyGuid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.plyGuid = options.longs === String ? "0" : 0;
        if (message.plyGuid != null && message.hasOwnProperty("plyGuid"))
            if (typeof message.plyGuid === "number")
                object.plyGuid = options.longs === String ? String(message.plyGuid) : message.plyGuid;
            else
                object.plyGuid = options.longs === String ? $util.Long.prototype.toString.call(message.plyGuid) : options.longs === Number ? new $util.LongBits(message.plyGuid.low >>> 0, message.plyGuid.high >>> 0).toNumber() : message.plyGuid;
        return object;
    };

    /**
     * Converts this mahjong_bc_ply_leave_not to JSON.
     * @function toJSON
     * @memberof mahjong_bc_ply_leave_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_bc_ply_leave_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_bc_ply_leave_not;
})();

$root.mahjong_bc_leave_table_ack = (function() {

    /**
     * Properties of a mahjong_bc_leave_table_ack.
     * @exports Imahjong_bc_leave_table_ack
     * @interface Imahjong_bc_leave_table_ack
     * @property {number} ret mahjong_bc_leave_table_ack ret
     * @property {string} plyNickname mahjong_bc_leave_table_ack plyNickname
     */

    /**
     * Constructs a new mahjong_bc_leave_table_ack.
     * @exports mahjong_bc_leave_table_ack
     * @classdesc Represents a mahjong_bc_leave_table_ack.
     * @implements Imahjong_bc_leave_table_ack
     * @constructor
     * @param {Imahjong_bc_leave_table_ack=} [properties] Properties to set
     */
    function mahjong_bc_leave_table_ack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_bc_leave_table_ack ret.
     * @member {number} ret
     * @memberof mahjong_bc_leave_table_ack
     * @instance
     */
    mahjong_bc_leave_table_ack.prototype.ret = 0;

    /**
     * mahjong_bc_leave_table_ack plyNickname.
     * @member {string} plyNickname
     * @memberof mahjong_bc_leave_table_ack
     * @instance
     */
    mahjong_bc_leave_table_ack.prototype.plyNickname = "";

    /**
     * Creates a new mahjong_bc_leave_table_ack instance using the specified properties.
     * @function create
     * @memberof mahjong_bc_leave_table_ack
     * @static
     * @param {Imahjong_bc_leave_table_ack=} [properties] Properties to set
     * @returns {mahjong_bc_leave_table_ack} mahjong_bc_leave_table_ack instance
     */
    mahjong_bc_leave_table_ack.create = function create(properties) {
        return new mahjong_bc_leave_table_ack(properties);
    };

    /**
     * Encodes the specified mahjong_bc_leave_table_ack message. Does not implicitly {@link mahjong_bc_leave_table_ack.verify|verify} messages.
     * @function encode
     * @memberof mahjong_bc_leave_table_ack
     * @static
     * @param {Imahjong_bc_leave_table_ack} message mahjong_bc_leave_table_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_leave_table_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.plyNickname);
        return writer;
    };

    /**
     * Encodes the specified mahjong_bc_leave_table_ack message, length delimited. Does not implicitly {@link mahjong_bc_leave_table_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_bc_leave_table_ack
     * @static
     * @param {Imahjong_bc_leave_table_ack} message mahjong_bc_leave_table_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_leave_table_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_bc_leave_table_ack message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_bc_leave_table_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_bc_leave_table_ack} mahjong_bc_leave_table_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_leave_table_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_bc_leave_table_ack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ret = reader.int32();
                break;
            case 2:
                message.plyNickname = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("ret"))
            throw $util.ProtocolError("missing required 'ret'", { instance: message });
        if (!message.hasOwnProperty("plyNickname"))
            throw $util.ProtocolError("missing required 'plyNickname'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_bc_leave_table_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_bc_leave_table_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_bc_leave_table_ack} mahjong_bc_leave_table_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_leave_table_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_bc_leave_table_ack message.
     * @function verify
     * @memberof mahjong_bc_leave_table_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_bc_leave_table_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.ret))
            return "ret: integer expected";
        if (!$util.isString(message.plyNickname))
            return "plyNickname: string expected";
        return null;
    };

    /**
     * Creates a mahjong_bc_leave_table_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_bc_leave_table_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_bc_leave_table_ack} mahjong_bc_leave_table_ack
     */
    mahjong_bc_leave_table_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_bc_leave_table_ack)
            return object;
        var message = new $root.mahjong_bc_leave_table_ack();
        if (object.ret != null)
            message.ret = object.ret | 0;
        if (object.plyNickname != null)
            message.plyNickname = String(object.plyNickname);
        return message;
    };

    /**
     * Creates a plain object from a mahjong_bc_leave_table_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_bc_leave_table_ack
     * @static
     * @param {mahjong_bc_leave_table_ack} message mahjong_bc_leave_table_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_bc_leave_table_ack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ret = 0;
            object.plyNickname = "";
        }
        if (message.ret != null && message.hasOwnProperty("ret"))
            object.ret = message.ret;
        if (message.plyNickname != null && message.hasOwnProperty("plyNickname"))
            object.plyNickname = message.plyNickname;
        return object;
    };

    /**
     * Converts this mahjong_bc_leave_table_ack to JSON.
     * @function toJSON
     * @memberof mahjong_bc_leave_table_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_bc_leave_table_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_bc_leave_table_ack;
})();

$root.mahjong_jxmj_gangresult_not = (function() {

    /**
     * Properties of a mahjong_jxmj_gangresult_not.
     * @exports Imahjong_jxmj_gangresult_not
     * @interface Imahjong_jxmj_gangresult_not
     * @property {Array.<number>|null} [vecGangFen] mahjong_jxmj_gangresult_not vecGangFen
     */

    /**
     * Constructs a new mahjong_jxmj_gangresult_not.
     * @exports mahjong_jxmj_gangresult_not
     * @classdesc Represents a mahjong_jxmj_gangresult_not.
     * @implements Imahjong_jxmj_gangresult_not
     * @constructor
     * @param {Imahjong_jxmj_gangresult_not=} [properties] Properties to set
     */
    function mahjong_jxmj_gangresult_not(properties) {
        this.vecGangFen = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_gangresult_not vecGangFen.
     * @member {Array.<number>} vecGangFen
     * @memberof mahjong_jxmj_gangresult_not
     * @instance
     */
    mahjong_jxmj_gangresult_not.prototype.vecGangFen = $util.emptyArray;

    /**
     * Creates a new mahjong_jxmj_gangresult_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_gangresult_not
     * @static
     * @param {Imahjong_jxmj_gangresult_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_gangresult_not} mahjong_jxmj_gangresult_not instance
     */
    mahjong_jxmj_gangresult_not.create = function create(properties) {
        return new mahjong_jxmj_gangresult_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_gangresult_not message. Does not implicitly {@link mahjong_jxmj_gangresult_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_gangresult_not
     * @static
     * @param {Imahjong_jxmj_gangresult_not} message mahjong_jxmj_gangresult_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_gangresult_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vecGangFen != null && message.vecGangFen.length)
            for (var i = 0; i < message.vecGangFen.length; ++i)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.vecGangFen[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_gangresult_not message, length delimited. Does not implicitly {@link mahjong_jxmj_gangresult_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_gangresult_not
     * @static
     * @param {Imahjong_jxmj_gangresult_not} message mahjong_jxmj_gangresult_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_gangresult_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_gangresult_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_gangresult_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_gangresult_not} mahjong_jxmj_gangresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_gangresult_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_gangresult_not();
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
     * Decodes a mahjong_jxmj_gangresult_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_gangresult_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_gangresult_not} mahjong_jxmj_gangresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_gangresult_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_gangresult_not message.
     * @function verify
     * @memberof mahjong_jxmj_gangresult_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_gangresult_not.verify = function verify(message) {
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
     * Creates a mahjong_jxmj_gangresult_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_gangresult_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_gangresult_not} mahjong_jxmj_gangresult_not
     */
    mahjong_jxmj_gangresult_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_gangresult_not)
            return object;
        var message = new $root.mahjong_jxmj_gangresult_not();
        if (object.vecGangFen) {
            if (!Array.isArray(object.vecGangFen))
                throw TypeError(".mahjong_jxmj_gangresult_not.vecGangFen: array expected");
            message.vecGangFen = [];
            for (var i = 0; i < object.vecGangFen.length; ++i)
                message.vecGangFen[i] = object.vecGangFen[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_gangresult_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_gangresult_not
     * @static
     * @param {mahjong_jxmj_gangresult_not} message mahjong_jxmj_gangresult_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_gangresult_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_gangresult_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_gangresult_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_gangresult_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_gangresult_not;
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

$root.mahjong_jxmj_gang_data = (function() {

    /**
     * Properties of a mahjong_jxmj_gang_data.
     * @exports Imahjong_jxmj_gang_data
     * @interface Imahjong_jxmj_gang_data
     * @property {number} cNum mahjong_jxmj_gang_data cNum
     * @property {number} nScore mahjong_jxmj_gang_data nScore
     */

    /**
     * Constructs a new mahjong_jxmj_gang_data.
     * @exports mahjong_jxmj_gang_data
     * @classdesc Represents a mahjong_jxmj_gang_data.
     * @implements Imahjong_jxmj_gang_data
     * @constructor
     * @param {Imahjong_jxmj_gang_data=} [properties] Properties to set
     */
    function mahjong_jxmj_gang_data(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_gang_data cNum.
     * @member {number} cNum
     * @memberof mahjong_jxmj_gang_data
     * @instance
     */
    mahjong_jxmj_gang_data.prototype.cNum = 0;

    /**
     * mahjong_jxmj_gang_data nScore.
     * @member {number} nScore
     * @memberof mahjong_jxmj_gang_data
     * @instance
     */
    mahjong_jxmj_gang_data.prototype.nScore = 0;

    /**
     * Creates a new mahjong_jxmj_gang_data instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_gang_data
     * @static
     * @param {Imahjong_jxmj_gang_data=} [properties] Properties to set
     * @returns {mahjong_jxmj_gang_data} mahjong_jxmj_gang_data instance
     */
    mahjong_jxmj_gang_data.create = function create(properties) {
        return new mahjong_jxmj_gang_data(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_gang_data message. Does not implicitly {@link mahjong_jxmj_gang_data.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_gang_data
     * @static
     * @param {Imahjong_jxmj_gang_data} message mahjong_jxmj_gang_data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_gang_data.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cNum);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nScore);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_gang_data message, length delimited. Does not implicitly {@link mahjong_jxmj_gang_data.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_gang_data
     * @static
     * @param {Imahjong_jxmj_gang_data} message mahjong_jxmj_gang_data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_gang_data.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_gang_data message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_gang_data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_gang_data} mahjong_jxmj_gang_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_gang_data.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_gang_data();
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
     * Decodes a mahjong_jxmj_gang_data message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_gang_data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_gang_data} mahjong_jxmj_gang_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_gang_data.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_gang_data message.
     * @function verify
     * @memberof mahjong_jxmj_gang_data
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_gang_data.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cNum))
            return "cNum: integer expected";
        if (!$util.isInteger(message.nScore))
            return "nScore: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_gang_data message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_gang_data
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_gang_data} mahjong_jxmj_gang_data
     */
    mahjong_jxmj_gang_data.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_gang_data)
            return object;
        var message = new $root.mahjong_jxmj_gang_data();
        if (object.cNum != null)
            message.cNum = object.cNum | 0;
        if (object.nScore != null)
            message.nScore = object.nScore | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_gang_data message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_gang_data
     * @static
     * @param {mahjong_jxmj_gang_data} message mahjong_jxmj_gang_data
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_gang_data.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_gang_data to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_gang_data
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_gang_data.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_gang_data;
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

$root.mahjong_jxmj_Cli_Auto_Req = (function() {

    /**
     * Properties of a mahjong_jxmj_Cli_Auto_Req.
     * @exports Imahjong_jxmj_Cli_Auto_Req
     * @interface Imahjong_jxmj_Cli_Auto_Req
     * @property {number} cAuto mahjong_jxmj_Cli_Auto_Req cAuto
     * @property {number} iAutoType mahjong_jxmj_Cli_Auto_Req iAutoType
     */

    /**
     * Constructs a new mahjong_jxmj_Cli_Auto_Req.
     * @exports mahjong_jxmj_Cli_Auto_Req
     * @classdesc Represents a mahjong_jxmj_Cli_Auto_Req.
     * @implements Imahjong_jxmj_Cli_Auto_Req
     * @constructor
     * @param {Imahjong_jxmj_Cli_Auto_Req=} [properties] Properties to set
     */
    function mahjong_jxmj_Cli_Auto_Req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_Cli_Auto_Req cAuto.
     * @member {number} cAuto
     * @memberof mahjong_jxmj_Cli_Auto_Req
     * @instance
     */
    mahjong_jxmj_Cli_Auto_Req.prototype.cAuto = 0;

    /**
     * mahjong_jxmj_Cli_Auto_Req iAutoType.
     * @member {number} iAutoType
     * @memberof mahjong_jxmj_Cli_Auto_Req
     * @instance
     */
    mahjong_jxmj_Cli_Auto_Req.prototype.iAutoType = 0;

    /**
     * Creates a new mahjong_jxmj_Cli_Auto_Req instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_Cli_Auto_Req
     * @static
     * @param {Imahjong_jxmj_Cli_Auto_Req=} [properties] Properties to set
     * @returns {mahjong_jxmj_Cli_Auto_Req} mahjong_jxmj_Cli_Auto_Req instance
     */
    mahjong_jxmj_Cli_Auto_Req.create = function create(properties) {
        return new mahjong_jxmj_Cli_Auto_Req(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_Cli_Auto_Req message. Does not implicitly {@link mahjong_jxmj_Cli_Auto_Req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_Cli_Auto_Req
     * @static
     * @param {Imahjong_jxmj_Cli_Auto_Req} message mahjong_jxmj_Cli_Auto_Req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_Cli_Auto_Req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cAuto);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.iAutoType);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_Cli_Auto_Req message, length delimited. Does not implicitly {@link mahjong_jxmj_Cli_Auto_Req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_Cli_Auto_Req
     * @static
     * @param {Imahjong_jxmj_Cli_Auto_Req} message mahjong_jxmj_Cli_Auto_Req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_Cli_Auto_Req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_Cli_Auto_Req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_Cli_Auto_Req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_Cli_Auto_Req} mahjong_jxmj_Cli_Auto_Req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_Cli_Auto_Req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_Cli_Auto_Req();
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
     * Decodes a mahjong_jxmj_Cli_Auto_Req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_Cli_Auto_Req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_Cli_Auto_Req} mahjong_jxmj_Cli_Auto_Req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_Cli_Auto_Req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_Cli_Auto_Req message.
     * @function verify
     * @memberof mahjong_jxmj_Cli_Auto_Req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_Cli_Auto_Req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cAuto))
            return "cAuto: integer expected";
        if (!$util.isInteger(message.iAutoType))
            return "iAutoType: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_Cli_Auto_Req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_Cli_Auto_Req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_Cli_Auto_Req} mahjong_jxmj_Cli_Auto_Req
     */
    mahjong_jxmj_Cli_Auto_Req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_Cli_Auto_Req)
            return object;
        var message = new $root.mahjong_jxmj_Cli_Auto_Req();
        if (object.cAuto != null)
            message.cAuto = object.cAuto | 0;
        if (object.iAutoType != null)
            message.iAutoType = object.iAutoType | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_Cli_Auto_Req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_Cli_Auto_Req
     * @static
     * @param {mahjong_jxmj_Cli_Auto_Req} message mahjong_jxmj_Cli_Auto_Req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_Cli_Auto_Req.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_Cli_Auto_Req to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_Cli_Auto_Req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_Cli_Auto_Req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_Cli_Auto_Req;
})();

$root.mahjong_jxmj_fan_data_v2_2_0 = (function() {

    /**
     * Properties of a mahjong_jxmj_fan_data_v2_2_0.
     * @exports Imahjong_jxmj_fan_data_v2_2_0
     * @interface Imahjong_jxmj_fan_data_v2_2_0
     * @property {number} cChairId mahjong_jxmj_fan_data_v2_2_0 cChairId
     * @property {number} nScore mahjong_jxmj_fan_data_v2_2_0 nScore
     * @property {number} cType mahjong_jxmj_fan_data_v2_2_0 cType
     * @property {number} nIndex mahjong_jxmj_fan_data_v2_2_0 nIndex
     */

    /**
     * Constructs a new mahjong_jxmj_fan_data_v2_2_0.
     * @exports mahjong_jxmj_fan_data_v2_2_0
     * @classdesc Represents a mahjong_jxmj_fan_data_v2_2_0.
     * @implements Imahjong_jxmj_fan_data_v2_2_0
     * @constructor
     * @param {Imahjong_jxmj_fan_data_v2_2_0=} [properties] Properties to set
     */
    function mahjong_jxmj_fan_data_v2_2_0(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_fan_data_v2_2_0 cChairId.
     * @member {number} cChairId
     * @memberof mahjong_jxmj_fan_data_v2_2_0
     * @instance
     */
    mahjong_jxmj_fan_data_v2_2_0.prototype.cChairId = 0;

    /**
     * mahjong_jxmj_fan_data_v2_2_0 nScore.
     * @member {number} nScore
     * @memberof mahjong_jxmj_fan_data_v2_2_0
     * @instance
     */
    mahjong_jxmj_fan_data_v2_2_0.prototype.nScore = 0;

    /**
     * mahjong_jxmj_fan_data_v2_2_0 cType.
     * @member {number} cType
     * @memberof mahjong_jxmj_fan_data_v2_2_0
     * @instance
     */
    mahjong_jxmj_fan_data_v2_2_0.prototype.cType = 0;

    /**
     * mahjong_jxmj_fan_data_v2_2_0 nIndex.
     * @member {number} nIndex
     * @memberof mahjong_jxmj_fan_data_v2_2_0
     * @instance
     */
    mahjong_jxmj_fan_data_v2_2_0.prototype.nIndex = 0;

    /**
     * Creates a new mahjong_jxmj_fan_data_v2_2_0 instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_fan_data_v2_2_0
     * @static
     * @param {Imahjong_jxmj_fan_data_v2_2_0=} [properties] Properties to set
     * @returns {mahjong_jxmj_fan_data_v2_2_0} mahjong_jxmj_fan_data_v2_2_0 instance
     */
    mahjong_jxmj_fan_data_v2_2_0.create = function create(properties) {
        return new mahjong_jxmj_fan_data_v2_2_0(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_fan_data_v2_2_0 message. Does not implicitly {@link mahjong_jxmj_fan_data_v2_2_0.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_fan_data_v2_2_0
     * @static
     * @param {Imahjong_jxmj_fan_data_v2_2_0} message mahjong_jxmj_fan_data_v2_2_0 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_fan_data_v2_2_0.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nScore);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cType);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nIndex);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_fan_data_v2_2_0 message, length delimited. Does not implicitly {@link mahjong_jxmj_fan_data_v2_2_0.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_fan_data_v2_2_0
     * @static
     * @param {Imahjong_jxmj_fan_data_v2_2_0} message mahjong_jxmj_fan_data_v2_2_0 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_fan_data_v2_2_0.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_fan_data_v2_2_0 message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_fan_data_v2_2_0
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_fan_data_v2_2_0} mahjong_jxmj_fan_data_v2_2_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_fan_data_v2_2_0.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_fan_data_v2_2_0();
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
     * Decodes a mahjong_jxmj_fan_data_v2_2_0 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_fan_data_v2_2_0
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_fan_data_v2_2_0} mahjong_jxmj_fan_data_v2_2_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_fan_data_v2_2_0.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_fan_data_v2_2_0 message.
     * @function verify
     * @memberof mahjong_jxmj_fan_data_v2_2_0
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_fan_data_v2_2_0.verify = function verify(message) {
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
     * Creates a mahjong_jxmj_fan_data_v2_2_0 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_fan_data_v2_2_0
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_fan_data_v2_2_0} mahjong_jxmj_fan_data_v2_2_0
     */
    mahjong_jxmj_fan_data_v2_2_0.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_fan_data_v2_2_0)
            return object;
        var message = new $root.mahjong_jxmj_fan_data_v2_2_0();
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
     * Creates a plain object from a mahjong_jxmj_fan_data_v2_2_0 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_fan_data_v2_2_0
     * @static
     * @param {mahjong_jxmj_fan_data_v2_2_0} message mahjong_jxmj_fan_data_v2_2_0
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_fan_data_v2_2_0.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_fan_data_v2_2_0 to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_fan_data_v2_2_0
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_fan_data_v2_2_0.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_fan_data_v2_2_0;
})();

$root.mahjong_PlayerStatus = (function() {

    /**
     * Properties of a mahjong_PlayerStatus.
     * @exports Imahjong_PlayerStatus
     * @interface Imahjong_PlayerStatus
     * @property {number|Long} plyGuid mahjong_PlayerStatus plyGuid
     * @property {string} plyNickname mahjong_PlayerStatus plyNickname
     * @property {number} plyStatus mahjong_PlayerStatus plyStatus
     * @property {number} sex mahjong_PlayerStatus sex
     * @property {number} gameId mahjong_PlayerStatus gameId
     * @property {number} gameServerId mahjong_PlayerStatus gameServerId
     * @property {number} tableId mahjong_PlayerStatus tableId
     * @property {number|Long} money mahjong_PlayerStatus money
     * @property {number} won mahjong_PlayerStatus won
     * @property {number} lost mahjong_PlayerStatus lost
     * @property {number} moneyRank mahjong_PlayerStatus moneyRank
     * @property {number} wonRank mahjong_PlayerStatus wonRank
     * @property {number} param_1 mahjong_PlayerStatus param_1
     * @property {number} param_2 mahjong_PlayerStatus param_2
     * @property {number} latitude mahjong_PlayerStatus latitude
     * @property {number} longitude mahjong_PlayerStatus longitude
     */

    /**
     * Constructs a new mahjong_PlayerStatus.
     * @exports mahjong_PlayerStatus
     * @classdesc Represents a mahjong_PlayerStatus.
     * @implements Imahjong_PlayerStatus
     * @constructor
     * @param {Imahjong_PlayerStatus=} [properties] Properties to set
     */
    function mahjong_PlayerStatus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_PlayerStatus plyGuid.
     * @member {number|Long} plyGuid
     * @memberof mahjong_PlayerStatus
     * @instance
     */
    mahjong_PlayerStatus.prototype.plyGuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * mahjong_PlayerStatus plyNickname.
     * @member {string} plyNickname
     * @memberof mahjong_PlayerStatus
     * @instance
     */
    mahjong_PlayerStatus.prototype.plyNickname = "";

    /**
     * mahjong_PlayerStatus plyStatus.
     * @member {number} plyStatus
     * @memberof mahjong_PlayerStatus
     * @instance
     */
    mahjong_PlayerStatus.prototype.plyStatus = 0;

    /**
     * mahjong_PlayerStatus sex.
     * @member {number} sex
     * @memberof mahjong_PlayerStatus
     * @instance
     */
    mahjong_PlayerStatus.prototype.sex = 0;

    /**
     * mahjong_PlayerStatus gameId.
     * @member {number} gameId
     * @memberof mahjong_PlayerStatus
     * @instance
     */
    mahjong_PlayerStatus.prototype.gameId = 0;

    /**
     * mahjong_PlayerStatus gameServerId.
     * @member {number} gameServerId
     * @memberof mahjong_PlayerStatus
     * @instance
     */
    mahjong_PlayerStatus.prototype.gameServerId = 0;

    /**
     * mahjong_PlayerStatus tableId.
     * @member {number} tableId
     * @memberof mahjong_PlayerStatus
     * @instance
     */
    mahjong_PlayerStatus.prototype.tableId = 0;

    /**
     * mahjong_PlayerStatus money.
     * @member {number|Long} money
     * @memberof mahjong_PlayerStatus
     * @instance
     */
    mahjong_PlayerStatus.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * mahjong_PlayerStatus won.
     * @member {number} won
     * @memberof mahjong_PlayerStatus
     * @instance
     */
    mahjong_PlayerStatus.prototype.won = 0;

    /**
     * mahjong_PlayerStatus lost.
     * @member {number} lost
     * @memberof mahjong_PlayerStatus
     * @instance
     */
    mahjong_PlayerStatus.prototype.lost = 0;

    /**
     * mahjong_PlayerStatus moneyRank.
     * @member {number} moneyRank
     * @memberof mahjong_PlayerStatus
     * @instance
     */
    mahjong_PlayerStatus.prototype.moneyRank = 0;

    /**
     * mahjong_PlayerStatus wonRank.
     * @member {number} wonRank
     * @memberof mahjong_PlayerStatus
     * @instance
     */
    mahjong_PlayerStatus.prototype.wonRank = 0;

    /**
     * mahjong_PlayerStatus param_1.
     * @member {number} param_1
     * @memberof mahjong_PlayerStatus
     * @instance
     */
    mahjong_PlayerStatus.prototype.param_1 = 0;

    /**
     * mahjong_PlayerStatus param_2.
     * @member {number} param_2
     * @memberof mahjong_PlayerStatus
     * @instance
     */
    mahjong_PlayerStatus.prototype.param_2 = 0;

    /**
     * mahjong_PlayerStatus latitude.
     * @member {number} latitude
     * @memberof mahjong_PlayerStatus
     * @instance
     */
    mahjong_PlayerStatus.prototype.latitude = 0;

    /**
     * mahjong_PlayerStatus longitude.
     * @member {number} longitude
     * @memberof mahjong_PlayerStatus
     * @instance
     */
    mahjong_PlayerStatus.prototype.longitude = 0;

    /**
     * Creates a new mahjong_PlayerStatus instance using the specified properties.
     * @function create
     * @memberof mahjong_PlayerStatus
     * @static
     * @param {Imahjong_PlayerStatus=} [properties] Properties to set
     * @returns {mahjong_PlayerStatus} mahjong_PlayerStatus instance
     */
    mahjong_PlayerStatus.create = function create(properties) {
        return new mahjong_PlayerStatus(properties);
    };

    /**
     * Encodes the specified mahjong_PlayerStatus message. Does not implicitly {@link mahjong_PlayerStatus.verify|verify} messages.
     * @function encode
     * @memberof mahjong_PlayerStatus
     * @static
     * @param {Imahjong_PlayerStatus} message mahjong_PlayerStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_PlayerStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.plyGuid);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.plyNickname);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.plyStatus);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sex);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.gameId);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.gameServerId);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.tableId);
        writer.uint32(/* id 8, wireType 0 =*/64).int64(message.money);
        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.won);
        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.lost);
        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.moneyRank);
        writer.uint32(/* id 12, wireType 0 =*/96).int32(message.wonRank);
        writer.uint32(/* id 13, wireType 0 =*/104).int32(message.param_1);
        writer.uint32(/* id 14, wireType 0 =*/112).int32(message.param_2);
        writer.uint32(/* id 15, wireType 5 =*/125).float(message.latitude);
        writer.uint32(/* id 16, wireType 5 =*/133).float(message.longitude);
        return writer;
    };

    /**
     * Encodes the specified mahjong_PlayerStatus message, length delimited. Does not implicitly {@link mahjong_PlayerStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_PlayerStatus
     * @static
     * @param {Imahjong_PlayerStatus} message mahjong_PlayerStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_PlayerStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_PlayerStatus message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_PlayerStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_PlayerStatus} mahjong_PlayerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_PlayerStatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_PlayerStatus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.plyGuid = reader.int64();
                break;
            case 2:
                message.plyNickname = reader.string();
                break;
            case 3:
                message.plyStatus = reader.int32();
                break;
            case 4:
                message.sex = reader.int32();
                break;
            case 5:
                message.gameId = reader.int32();
                break;
            case 6:
                message.gameServerId = reader.int32();
                break;
            case 7:
                message.tableId = reader.int32();
                break;
            case 8:
                message.money = reader.int64();
                break;
            case 9:
                message.won = reader.int32();
                break;
            case 10:
                message.lost = reader.int32();
                break;
            case 11:
                message.moneyRank = reader.int32();
                break;
            case 12:
                message.wonRank = reader.int32();
                break;
            case 13:
                message.param_1 = reader.int32();
                break;
            case 14:
                message.param_2 = reader.int32();
                break;
            case 15:
                message.latitude = reader.float();
                break;
            case 16:
                message.longitude = reader.float();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("plyGuid"))
            throw $util.ProtocolError("missing required 'plyGuid'", { instance: message });
        if (!message.hasOwnProperty("plyNickname"))
            throw $util.ProtocolError("missing required 'plyNickname'", { instance: message });
        if (!message.hasOwnProperty("plyStatus"))
            throw $util.ProtocolError("missing required 'plyStatus'", { instance: message });
        if (!message.hasOwnProperty("sex"))
            throw $util.ProtocolError("missing required 'sex'", { instance: message });
        if (!message.hasOwnProperty("gameId"))
            throw $util.ProtocolError("missing required 'gameId'", { instance: message });
        if (!message.hasOwnProperty("gameServerId"))
            throw $util.ProtocolError("missing required 'gameServerId'", { instance: message });
        if (!message.hasOwnProperty("tableId"))
            throw $util.ProtocolError("missing required 'tableId'", { instance: message });
        if (!message.hasOwnProperty("money"))
            throw $util.ProtocolError("missing required 'money'", { instance: message });
        if (!message.hasOwnProperty("won"))
            throw $util.ProtocolError("missing required 'won'", { instance: message });
        if (!message.hasOwnProperty("lost"))
            throw $util.ProtocolError("missing required 'lost'", { instance: message });
        if (!message.hasOwnProperty("moneyRank"))
            throw $util.ProtocolError("missing required 'moneyRank'", { instance: message });
        if (!message.hasOwnProperty("wonRank"))
            throw $util.ProtocolError("missing required 'wonRank'", { instance: message });
        if (!message.hasOwnProperty("param_1"))
            throw $util.ProtocolError("missing required 'param_1'", { instance: message });
        if (!message.hasOwnProperty("param_2"))
            throw $util.ProtocolError("missing required 'param_2'", { instance: message });
        if (!message.hasOwnProperty("latitude"))
            throw $util.ProtocolError("missing required 'latitude'", { instance: message });
        if (!message.hasOwnProperty("longitude"))
            throw $util.ProtocolError("missing required 'longitude'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_PlayerStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_PlayerStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_PlayerStatus} mahjong_PlayerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_PlayerStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_PlayerStatus message.
     * @function verify
     * @memberof mahjong_PlayerStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_PlayerStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.plyGuid) && !(message.plyGuid && $util.isInteger(message.plyGuid.low) && $util.isInteger(message.plyGuid.high)))
            return "plyGuid: integer|Long expected";
        if (!$util.isString(message.plyNickname))
            return "plyNickname: string expected";
        if (!$util.isInteger(message.plyStatus))
            return "plyStatus: integer expected";
        if (!$util.isInteger(message.sex))
            return "sex: integer expected";
        if (!$util.isInteger(message.gameId))
            return "gameId: integer expected";
        if (!$util.isInteger(message.gameServerId))
            return "gameServerId: integer expected";
        if (!$util.isInteger(message.tableId))
            return "tableId: integer expected";
        if (!$util.isInteger(message.money) && !(message.money && $util.isInteger(message.money.low) && $util.isInteger(message.money.high)))
            return "money: integer|Long expected";
        if (!$util.isInteger(message.won))
            return "won: integer expected";
        if (!$util.isInteger(message.lost))
            return "lost: integer expected";
        if (!$util.isInteger(message.moneyRank))
            return "moneyRank: integer expected";
        if (!$util.isInteger(message.wonRank))
            return "wonRank: integer expected";
        if (!$util.isInteger(message.param_1))
            return "param_1: integer expected";
        if (!$util.isInteger(message.param_2))
            return "param_2: integer expected";
        if (typeof message.latitude !== "number")
            return "latitude: number expected";
        if (typeof message.longitude !== "number")
            return "longitude: number expected";
        return null;
    };

    /**
     * Creates a mahjong_PlayerStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_PlayerStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_PlayerStatus} mahjong_PlayerStatus
     */
    mahjong_PlayerStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_PlayerStatus)
            return object;
        var message = new $root.mahjong_PlayerStatus();
        if (object.plyGuid != null)
            if ($util.Long)
                (message.plyGuid = $util.Long.fromValue(object.plyGuid)).unsigned = false;
            else if (typeof object.plyGuid === "string")
                message.plyGuid = parseInt(object.plyGuid, 10);
            else if (typeof object.plyGuid === "number")
                message.plyGuid = object.plyGuid;
            else if (typeof object.plyGuid === "object")
                message.plyGuid = new $util.LongBits(object.plyGuid.low >>> 0, object.plyGuid.high >>> 0).toNumber();
        if (object.plyNickname != null)
            message.plyNickname = String(object.plyNickname);
        if (object.plyStatus != null)
            message.plyStatus = object.plyStatus | 0;
        if (object.sex != null)
            message.sex = object.sex | 0;
        if (object.gameId != null)
            message.gameId = object.gameId | 0;
        if (object.gameServerId != null)
            message.gameServerId = object.gameServerId | 0;
        if (object.tableId != null)
            message.tableId = object.tableId | 0;
        if (object.money != null)
            if ($util.Long)
                (message.money = $util.Long.fromValue(object.money)).unsigned = false;
            else if (typeof object.money === "string")
                message.money = parseInt(object.money, 10);
            else if (typeof object.money === "number")
                message.money = object.money;
            else if (typeof object.money === "object")
                message.money = new $util.LongBits(object.money.low >>> 0, object.money.high >>> 0).toNumber();
        if (object.won != null)
            message.won = object.won | 0;
        if (object.lost != null)
            message.lost = object.lost | 0;
        if (object.moneyRank != null)
            message.moneyRank = object.moneyRank | 0;
        if (object.wonRank != null)
            message.wonRank = object.wonRank | 0;
        if (object.param_1 != null)
            message.param_1 = object.param_1 | 0;
        if (object.param_2 != null)
            message.param_2 = object.param_2 | 0;
        if (object.latitude != null)
            message.latitude = Number(object.latitude);
        if (object.longitude != null)
            message.longitude = Number(object.longitude);
        return message;
    };

    /**
     * Creates a plain object from a mahjong_PlayerStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_PlayerStatus
     * @static
     * @param {mahjong_PlayerStatus} message mahjong_PlayerStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_PlayerStatus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.plyGuid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.plyGuid = options.longs === String ? "0" : 0;
            object.plyNickname = "";
            object.plyStatus = 0;
            object.sex = 0;
            object.gameId = 0;
            object.gameServerId = 0;
            object.tableId = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.money = options.longs === String ? "0" : 0;
            object.won = 0;
            object.lost = 0;
            object.moneyRank = 0;
            object.wonRank = 0;
            object.param_1 = 0;
            object.param_2 = 0;
            object.latitude = 0;
            object.longitude = 0;
        }
        if (message.plyGuid != null && message.hasOwnProperty("plyGuid"))
            if (typeof message.plyGuid === "number")
                object.plyGuid = options.longs === String ? String(message.plyGuid) : message.plyGuid;
            else
                object.plyGuid = options.longs === String ? $util.Long.prototype.toString.call(message.plyGuid) : options.longs === Number ? new $util.LongBits(message.plyGuid.low >>> 0, message.plyGuid.high >>> 0).toNumber() : message.plyGuid;
        if (message.plyNickname != null && message.hasOwnProperty("plyNickname"))
            object.plyNickname = message.plyNickname;
        if (message.plyStatus != null && message.hasOwnProperty("plyStatus"))
            object.plyStatus = message.plyStatus;
        if (message.sex != null && message.hasOwnProperty("sex"))
            object.sex = message.sex;
        if (message.gameId != null && message.hasOwnProperty("gameId"))
            object.gameId = message.gameId;
        if (message.gameServerId != null && message.hasOwnProperty("gameServerId"))
            object.gameServerId = message.gameServerId;
        if (message.tableId != null && message.hasOwnProperty("tableId"))
            object.tableId = message.tableId;
        if (message.money != null && message.hasOwnProperty("money"))
            if (typeof message.money === "number")
                object.money = options.longs === String ? String(message.money) : message.money;
            else
                object.money = options.longs === String ? $util.Long.prototype.toString.call(message.money) : options.longs === Number ? new $util.LongBits(message.money.low >>> 0, message.money.high >>> 0).toNumber() : message.money;
        if (message.won != null && message.hasOwnProperty("won"))
            object.won = message.won;
        if (message.lost != null && message.hasOwnProperty("lost"))
            object.lost = message.lost;
        if (message.moneyRank != null && message.hasOwnProperty("moneyRank"))
            object.moneyRank = message.moneyRank;
        if (message.wonRank != null && message.hasOwnProperty("wonRank"))
            object.wonRank = message.wonRank;
        if (message.param_1 != null && message.hasOwnProperty("param_1"))
            object.param_1 = message.param_1;
        if (message.param_2 != null && message.hasOwnProperty("param_2"))
            object.param_2 = message.param_2;
        if (message.latitude != null && message.hasOwnProperty("latitude"))
            object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
        if (message.longitude != null && message.hasOwnProperty("longitude"))
            object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
        return object;
    };

    /**
     * Converts this mahjong_PlayerStatus to JSON.
     * @function toJSON
     * @memberof mahjong_PlayerStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_PlayerStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_PlayerStatus;
})();

$root.mahjong_bc_update_ply_data_not = (function() {

    /**
     * Properties of a mahjong_bc_update_ply_data_not.
     * @exports Imahjong_bc_update_ply_data_not
     * @interface Imahjong_bc_update_ply_data_not
     * @property {number|Long} plyGuid mahjong_bc_update_ply_data_not plyGuid
     * @property {number} uptReason mahjong_bc_update_ply_data_not uptReason
     * @property {number} uptType mahjong_bc_update_ply_data_not uptType
     * @property {number} variant mahjong_bc_update_ply_data_not variant
     * @property {number|Long} amount mahjong_bc_update_ply_data_not amount
     */

    /**
     * Constructs a new mahjong_bc_update_ply_data_not.
     * @exports mahjong_bc_update_ply_data_not
     * @classdesc Represents a mahjong_bc_update_ply_data_not.
     * @implements Imahjong_bc_update_ply_data_not
     * @constructor
     * @param {Imahjong_bc_update_ply_data_not=} [properties] Properties to set
     */
    function mahjong_bc_update_ply_data_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_bc_update_ply_data_not plyGuid.
     * @member {number|Long} plyGuid
     * @memberof mahjong_bc_update_ply_data_not
     * @instance
     */
    mahjong_bc_update_ply_data_not.prototype.plyGuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * mahjong_bc_update_ply_data_not uptReason.
     * @member {number} uptReason
     * @memberof mahjong_bc_update_ply_data_not
     * @instance
     */
    mahjong_bc_update_ply_data_not.prototype.uptReason = 0;

    /**
     * mahjong_bc_update_ply_data_not uptType.
     * @member {number} uptType
     * @memberof mahjong_bc_update_ply_data_not
     * @instance
     */
    mahjong_bc_update_ply_data_not.prototype.uptType = 0;

    /**
     * mahjong_bc_update_ply_data_not variant.
     * @member {number} variant
     * @memberof mahjong_bc_update_ply_data_not
     * @instance
     */
    mahjong_bc_update_ply_data_not.prototype.variant = 0;

    /**
     * mahjong_bc_update_ply_data_not amount.
     * @member {number|Long} amount
     * @memberof mahjong_bc_update_ply_data_not
     * @instance
     */
    mahjong_bc_update_ply_data_not.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new mahjong_bc_update_ply_data_not instance using the specified properties.
     * @function create
     * @memberof mahjong_bc_update_ply_data_not
     * @static
     * @param {Imahjong_bc_update_ply_data_not=} [properties] Properties to set
     * @returns {mahjong_bc_update_ply_data_not} mahjong_bc_update_ply_data_not instance
     */
    mahjong_bc_update_ply_data_not.create = function create(properties) {
        return new mahjong_bc_update_ply_data_not(properties);
    };

    /**
     * Encodes the specified mahjong_bc_update_ply_data_not message. Does not implicitly {@link mahjong_bc_update_ply_data_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_bc_update_ply_data_not
     * @static
     * @param {Imahjong_bc_update_ply_data_not} message mahjong_bc_update_ply_data_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_update_ply_data_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.plyGuid);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.uptReason);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.uptType);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.variant);
        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.amount);
        return writer;
    };

    /**
     * Encodes the specified mahjong_bc_update_ply_data_not message, length delimited. Does not implicitly {@link mahjong_bc_update_ply_data_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_bc_update_ply_data_not
     * @static
     * @param {Imahjong_bc_update_ply_data_not} message mahjong_bc_update_ply_data_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_update_ply_data_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_bc_update_ply_data_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_bc_update_ply_data_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_bc_update_ply_data_not} mahjong_bc_update_ply_data_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_update_ply_data_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_bc_update_ply_data_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.plyGuid = reader.int64();
                break;
            case 2:
                message.uptReason = reader.int32();
                break;
            case 3:
                message.uptType = reader.int32();
                break;
            case 4:
                message.variant = reader.int32();
                break;
            case 5:
                message.amount = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("plyGuid"))
            throw $util.ProtocolError("missing required 'plyGuid'", { instance: message });
        if (!message.hasOwnProperty("uptReason"))
            throw $util.ProtocolError("missing required 'uptReason'", { instance: message });
        if (!message.hasOwnProperty("uptType"))
            throw $util.ProtocolError("missing required 'uptType'", { instance: message });
        if (!message.hasOwnProperty("variant"))
            throw $util.ProtocolError("missing required 'variant'", { instance: message });
        if (!message.hasOwnProperty("amount"))
            throw $util.ProtocolError("missing required 'amount'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_bc_update_ply_data_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_bc_update_ply_data_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_bc_update_ply_data_not} mahjong_bc_update_ply_data_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_update_ply_data_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_bc_update_ply_data_not message.
     * @function verify
     * @memberof mahjong_bc_update_ply_data_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_bc_update_ply_data_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.plyGuid) && !(message.plyGuid && $util.isInteger(message.plyGuid.low) && $util.isInteger(message.plyGuid.high)))
            return "plyGuid: integer|Long expected";
        if (!$util.isInteger(message.uptReason))
            return "uptReason: integer expected";
        if (!$util.isInteger(message.uptType))
            return "uptType: integer expected";
        if (!$util.isInteger(message.variant))
            return "variant: integer expected";
        if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
            return "amount: integer|Long expected";
        return null;
    };

    /**
     * Creates a mahjong_bc_update_ply_data_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_bc_update_ply_data_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_bc_update_ply_data_not} mahjong_bc_update_ply_data_not
     */
    mahjong_bc_update_ply_data_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_bc_update_ply_data_not)
            return object;
        var message = new $root.mahjong_bc_update_ply_data_not();
        if (object.plyGuid != null)
            if ($util.Long)
                (message.plyGuid = $util.Long.fromValue(object.plyGuid)).unsigned = false;
            else if (typeof object.plyGuid === "string")
                message.plyGuid = parseInt(object.plyGuid, 10);
            else if (typeof object.plyGuid === "number")
                message.plyGuid = object.plyGuid;
            else if (typeof object.plyGuid === "object")
                message.plyGuid = new $util.LongBits(object.plyGuid.low >>> 0, object.plyGuid.high >>> 0).toNumber();
        if (object.uptReason != null)
            message.uptReason = object.uptReason | 0;
        if (object.uptType != null)
            message.uptType = object.uptType | 0;
        if (object.variant != null)
            message.variant = object.variant | 0;
        if (object.amount != null)
            if ($util.Long)
                (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
            else if (typeof object.amount === "string")
                message.amount = parseInt(object.amount, 10);
            else if (typeof object.amount === "number")
                message.amount = object.amount;
            else if (typeof object.amount === "object")
                message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a mahjong_bc_update_ply_data_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_bc_update_ply_data_not
     * @static
     * @param {mahjong_bc_update_ply_data_not} message mahjong_bc_update_ply_data_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_bc_update_ply_data_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.plyGuid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.plyGuid = options.longs === String ? "0" : 0;
            object.uptReason = 0;
            object.uptType = 0;
            object.variant = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.amount = options.longs === String ? "0" : 0;
        }
        if (message.plyGuid != null && message.hasOwnProperty("plyGuid"))
            if (typeof message.plyGuid === "number")
                object.plyGuid = options.longs === String ? String(message.plyGuid) : message.plyGuid;
            else
                object.plyGuid = options.longs === String ? $util.Long.prototype.toString.call(message.plyGuid) : options.longs === Number ? new $util.LongBits(message.plyGuid.low >>> 0, message.plyGuid.high >>> 0).toNumber() : message.plyGuid;
        if (message.uptReason != null && message.hasOwnProperty("uptReason"))
            object.uptReason = message.uptReason;
        if (message.uptType != null && message.hasOwnProperty("uptType"))
            object.uptType = message.uptType;
        if (message.variant != null && message.hasOwnProperty("variant"))
            object.variant = message.variant;
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (typeof message.amount === "number")
                object.amount = options.longs === String ? String(message.amount) : message.amount;
            else
                object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
        return object;
    };

    /**
     * Converts this mahjong_bc_update_ply_data_not to JSON.
     * @function toJSON
     * @memberof mahjong_bc_update_ply_data_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_bc_update_ply_data_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_bc_update_ply_data_not;
})();

$root.mahjong_jxmj_dice_not = (function() {

    /**
     * Properties of a mahjong_jxmj_dice_not.
     * @exports Imahjong_jxmj_dice_not
     * @interface Imahjong_jxmj_dice_not
     * @property {number} cChairID mahjong_jxmj_dice_not cChairID
     * @property {number} cBanker mahjong_jxmj_dice_not cBanker
     * @property {Array.<number>|null} [vecDice] mahjong_jxmj_dice_not vecDice
     * @property {number} nFlag mahjong_jxmj_dice_not nFlag
     */

    /**
     * Constructs a new mahjong_jxmj_dice_not.
     * @exports mahjong_jxmj_dice_not
     * @classdesc Represents a mahjong_jxmj_dice_not.
     * @implements Imahjong_jxmj_dice_not
     * @constructor
     * @param {Imahjong_jxmj_dice_not=} [properties] Properties to set
     */
    function mahjong_jxmj_dice_not(properties) {
        this.vecDice = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_dice_not cChairID.
     * @member {number} cChairID
     * @memberof mahjong_jxmj_dice_not
     * @instance
     */
    mahjong_jxmj_dice_not.prototype.cChairID = 0;

    /**
     * mahjong_jxmj_dice_not cBanker.
     * @member {number} cBanker
     * @memberof mahjong_jxmj_dice_not
     * @instance
     */
    mahjong_jxmj_dice_not.prototype.cBanker = 0;

    /**
     * mahjong_jxmj_dice_not vecDice.
     * @member {Array.<number>} vecDice
     * @memberof mahjong_jxmj_dice_not
     * @instance
     */
    mahjong_jxmj_dice_not.prototype.vecDice = $util.emptyArray;

    /**
     * mahjong_jxmj_dice_not nFlag.
     * @member {number} nFlag
     * @memberof mahjong_jxmj_dice_not
     * @instance
     */
    mahjong_jxmj_dice_not.prototype.nFlag = 0;

    /**
     * Creates a new mahjong_jxmj_dice_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_dice_not
     * @static
     * @param {Imahjong_jxmj_dice_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_dice_not} mahjong_jxmj_dice_not instance
     */
    mahjong_jxmj_dice_not.create = function create(properties) {
        return new mahjong_jxmj_dice_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_dice_not message. Does not implicitly {@link mahjong_jxmj_dice_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_dice_not
     * @static
     * @param {Imahjong_jxmj_dice_not} message mahjong_jxmj_dice_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_dice_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cBanker);
        if (message.vecDice != null && message.vecDice.length)
            for (var i = 0; i < message.vecDice.length; ++i)
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.vecDice[i]);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nFlag);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_dice_not message, length delimited. Does not implicitly {@link mahjong_jxmj_dice_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_dice_not
     * @static
     * @param {Imahjong_jxmj_dice_not} message mahjong_jxmj_dice_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_dice_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_dice_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_dice_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_dice_not} mahjong_jxmj_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_dice_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_dice_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairID = reader.int32();
                break;
            case 2:
                message.cBanker = reader.int32();
                break;
            case 3:
                if (!(message.vecDice && message.vecDice.length))
                    message.vecDice = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecDice.push(reader.int32());
                } else
                    message.vecDice.push(reader.int32());
                break;
            case 4:
                message.nFlag = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairID"))
            throw $util.ProtocolError("missing required 'cChairID'", { instance: message });
        if (!message.hasOwnProperty("cBanker"))
            throw $util.ProtocolError("missing required 'cBanker'", { instance: message });
        if (!message.hasOwnProperty("nFlag"))
            throw $util.ProtocolError("missing required 'nFlag'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_jxmj_dice_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_dice_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_dice_not} mahjong_jxmj_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_dice_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_dice_not message.
     * @function verify
     * @memberof mahjong_jxmj_dice_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_dice_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
        if (!$util.isInteger(message.cBanker))
            return "cBanker: integer expected";
        if (message.vecDice != null && message.hasOwnProperty("vecDice")) {
            if (!Array.isArray(message.vecDice))
                return "vecDice: array expected";
            for (var i = 0; i < message.vecDice.length; ++i)
                if (!$util.isInteger(message.vecDice[i]))
                    return "vecDice: integer[] expected";
        }
        if (!$util.isInteger(message.nFlag))
            return "nFlag: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_dice_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_dice_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_dice_not} mahjong_jxmj_dice_not
     */
    mahjong_jxmj_dice_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_dice_not)
            return object;
        var message = new $root.mahjong_jxmj_dice_not();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.cBanker != null)
            message.cBanker = object.cBanker | 0;
        if (object.vecDice) {
            if (!Array.isArray(object.vecDice))
                throw TypeError(".mahjong_jxmj_dice_not.vecDice: array expected");
            message.vecDice = [];
            for (var i = 0; i < object.vecDice.length; ++i)
                message.vecDice[i] = object.vecDice[i] | 0;
        }
        if (object.nFlag != null)
            message.nFlag = object.nFlag | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_dice_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_dice_not
     * @static
     * @param {mahjong_jxmj_dice_not} message mahjong_jxmj_dice_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_dice_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecDice = [];
        if (options.defaults) {
            object.cChairID = 0;
            object.cBanker = 0;
            object.nFlag = 0;
        }
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.cBanker != null && message.hasOwnProperty("cBanker"))
            object.cBanker = message.cBanker;
        if (message.vecDice && message.vecDice.length) {
            object.vecDice = [];
            for (var j = 0; j < message.vecDice.length; ++j)
                object.vecDice[j] = message.vecDice[j];
        }
        if (message.nFlag != null && message.hasOwnProperty("nFlag"))
            object.nFlag = message.nFlag;
        return object;
    };

    /**
     * Converts this mahjong_jxmj_dice_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_dice_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_dice_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_dice_not;
})();

$root.mahjong_cb_join_table_req = (function() {

    /**
     * Properties of a mahjong_cb_join_table_req.
     * @exports Imahjong_cb_join_table_req
     * @interface Imahjong_cb_join_table_req
     * @property {number} tableId mahjong_cb_join_table_req tableId
     * @property {string} password mahjong_cb_join_table_req password
     * @property {number} clubUid mahjong_cb_join_table_req clubUid
     */

    /**
     * Constructs a new mahjong_cb_join_table_req.
     * @exports mahjong_cb_join_table_req
     * @classdesc Represents a mahjong_cb_join_table_req.
     * @implements Imahjong_cb_join_table_req
     * @constructor
     * @param {Imahjong_cb_join_table_req=} [properties] Properties to set
     */
    function mahjong_cb_join_table_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_cb_join_table_req tableId.
     * @member {number} tableId
     * @memberof mahjong_cb_join_table_req
     * @instance
     */
    mahjong_cb_join_table_req.prototype.tableId = 0;

    /**
     * mahjong_cb_join_table_req password.
     * @member {string} password
     * @memberof mahjong_cb_join_table_req
     * @instance
     */
    mahjong_cb_join_table_req.prototype.password = "";

    /**
     * mahjong_cb_join_table_req clubUid.
     * @member {number} clubUid
     * @memberof mahjong_cb_join_table_req
     * @instance
     */
    mahjong_cb_join_table_req.prototype.clubUid = 0;

    /**
     * Creates a new mahjong_cb_join_table_req instance using the specified properties.
     * @function create
     * @memberof mahjong_cb_join_table_req
     * @static
     * @param {Imahjong_cb_join_table_req=} [properties] Properties to set
     * @returns {mahjong_cb_join_table_req} mahjong_cb_join_table_req instance
     */
    mahjong_cb_join_table_req.create = function create(properties) {
        return new mahjong_cb_join_table_req(properties);
    };

    /**
     * Encodes the specified mahjong_cb_join_table_req message. Does not implicitly {@link mahjong_cb_join_table_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_cb_join_table_req
     * @static
     * @param {Imahjong_cb_join_table_req} message mahjong_cb_join_table_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_cb_join_table_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tableId);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.clubUid);
        return writer;
    };

    /**
     * Encodes the specified mahjong_cb_join_table_req message, length delimited. Does not implicitly {@link mahjong_cb_join_table_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_cb_join_table_req
     * @static
     * @param {Imahjong_cb_join_table_req} message mahjong_cb_join_table_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_cb_join_table_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_cb_join_table_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_cb_join_table_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_cb_join_table_req} mahjong_cb_join_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_cb_join_table_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_cb_join_table_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.tableId = reader.int32();
                break;
            case 2:
                message.password = reader.string();
                break;
            case 3:
                message.clubUid = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("tableId"))
            throw $util.ProtocolError("missing required 'tableId'", { instance: message });
        if (!message.hasOwnProperty("password"))
            throw $util.ProtocolError("missing required 'password'", { instance: message });
        if (!message.hasOwnProperty("clubUid"))
            throw $util.ProtocolError("missing required 'clubUid'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_cb_join_table_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_cb_join_table_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_cb_join_table_req} mahjong_cb_join_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_cb_join_table_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_cb_join_table_req message.
     * @function verify
     * @memberof mahjong_cb_join_table_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_cb_join_table_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.tableId))
            return "tableId: integer expected";
        if (!$util.isString(message.password))
            return "password: string expected";
        if (!$util.isInteger(message.clubUid))
            return "clubUid: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_cb_join_table_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_cb_join_table_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_cb_join_table_req} mahjong_cb_join_table_req
     */
    mahjong_cb_join_table_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_cb_join_table_req)
            return object;
        var message = new $root.mahjong_cb_join_table_req();
        if (object.tableId != null)
            message.tableId = object.tableId | 0;
        if (object.password != null)
            message.password = String(object.password);
        if (object.clubUid != null)
            message.clubUid = object.clubUid | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_cb_join_table_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_cb_join_table_req
     * @static
     * @param {mahjong_cb_join_table_req} message mahjong_cb_join_table_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_cb_join_table_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.tableId = 0;
            object.password = "";
            object.clubUid = 0;
        }
        if (message.tableId != null && message.hasOwnProperty("tableId"))
            object.tableId = message.tableId;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        if (message.clubUid != null && message.hasOwnProperty("clubUid"))
            object.clubUid = message.clubUid;
        return object;
    };

    /**
     * Converts this mahjong_cb_join_table_req to JSON.
     * @function toJSON
     * @memberof mahjong_cb_join_table_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_cb_join_table_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_cb_join_table_req;
})();

$root.mahjong_bc_award_type_not = (function() {

    /**
     * Properties of a mahjong_bc_award_type_not.
     * @exports Imahjong_bc_award_type_not
     * @interface Imahjong_bc_award_type_not
     * @property {Array.<number>|null} [type] mahjong_bc_award_type_not type
     */

    /**
     * Constructs a new mahjong_bc_award_type_not.
     * @exports mahjong_bc_award_type_not
     * @classdesc Represents a mahjong_bc_award_type_not.
     * @implements Imahjong_bc_award_type_not
     * @constructor
     * @param {Imahjong_bc_award_type_not=} [properties] Properties to set
     */
    function mahjong_bc_award_type_not(properties) {
        this.type = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_bc_award_type_not type.
     * @member {Array.<number>} type
     * @memberof mahjong_bc_award_type_not
     * @instance
     */
    mahjong_bc_award_type_not.prototype.type = $util.emptyArray;

    /**
     * Creates a new mahjong_bc_award_type_not instance using the specified properties.
     * @function create
     * @memberof mahjong_bc_award_type_not
     * @static
     * @param {Imahjong_bc_award_type_not=} [properties] Properties to set
     * @returns {mahjong_bc_award_type_not} mahjong_bc_award_type_not instance
     */
    mahjong_bc_award_type_not.create = function create(properties) {
        return new mahjong_bc_award_type_not(properties);
    };

    /**
     * Encodes the specified mahjong_bc_award_type_not message. Does not implicitly {@link mahjong_bc_award_type_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_bc_award_type_not
     * @static
     * @param {Imahjong_bc_award_type_not} message mahjong_bc_award_type_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_award_type_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && message.type.length)
            for (var i = 0; i < message.type.length; ++i)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_bc_award_type_not message, length delimited. Does not implicitly {@link mahjong_bc_award_type_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_bc_award_type_not
     * @static
     * @param {Imahjong_bc_award_type_not} message mahjong_bc_award_type_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_award_type_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_bc_award_type_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_bc_award_type_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_bc_award_type_not} mahjong_bc_award_type_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_award_type_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_bc_award_type_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.type && message.type.length))
                    message.type = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.type.push(reader.int32());
                } else
                    message.type.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_bc_award_type_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_bc_award_type_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_bc_award_type_not} mahjong_bc_award_type_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_award_type_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_bc_award_type_not message.
     * @function verify
     * @memberof mahjong_bc_award_type_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_bc_award_type_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type")) {
            if (!Array.isArray(message.type))
                return "type: array expected";
            for (var i = 0; i < message.type.length; ++i)
                if (!$util.isInteger(message.type[i]))
                    return "type: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_bc_award_type_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_bc_award_type_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_bc_award_type_not} mahjong_bc_award_type_not
     */
    mahjong_bc_award_type_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_bc_award_type_not)
            return object;
        var message = new $root.mahjong_bc_award_type_not();
        if (object.type) {
            if (!Array.isArray(object.type))
                throw TypeError(".mahjong_bc_award_type_not.type: array expected");
            message.type = [];
            for (var i = 0; i < object.type.length; ++i)
                message.type[i] = object.type[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_bc_award_type_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_bc_award_type_not
     * @static
     * @param {mahjong_bc_award_type_not} message mahjong_bc_award_type_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_bc_award_type_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.type = [];
        if (message.type && message.type.length) {
            object.type = [];
            for (var j = 0; j < message.type.length; ++j)
                object.type[j] = message.type[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_bc_award_type_not to JSON.
     * @function toJSON
     * @memberof mahjong_bc_award_type_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_bc_award_type_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_bc_award_type_not;
})();

$root.mahjong_jxmj_svr_taifei_not = (function() {

    /**
     * Properties of a mahjong_jxmj_svr_taifei_not.
     * @exports Imahjong_jxmj_svr_taifei_not
     * @interface Imahjong_jxmj_svr_taifei_not
     * @property {number} nTaifei mahjong_jxmj_svr_taifei_not nTaifei
     */

    /**
     * Constructs a new mahjong_jxmj_svr_taifei_not.
     * @exports mahjong_jxmj_svr_taifei_not
     * @classdesc Represents a mahjong_jxmj_svr_taifei_not.
     * @implements Imahjong_jxmj_svr_taifei_not
     * @constructor
     * @param {Imahjong_jxmj_svr_taifei_not=} [properties] Properties to set
     */
    function mahjong_jxmj_svr_taifei_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_svr_taifei_not nTaifei.
     * @member {number} nTaifei
     * @memberof mahjong_jxmj_svr_taifei_not
     * @instance
     */
    mahjong_jxmj_svr_taifei_not.prototype.nTaifei = 0;

    /**
     * Creates a new mahjong_jxmj_svr_taifei_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_svr_taifei_not
     * @static
     * @param {Imahjong_jxmj_svr_taifei_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_svr_taifei_not} mahjong_jxmj_svr_taifei_not instance
     */
    mahjong_jxmj_svr_taifei_not.create = function create(properties) {
        return new mahjong_jxmj_svr_taifei_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_svr_taifei_not message. Does not implicitly {@link mahjong_jxmj_svr_taifei_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_svr_taifei_not
     * @static
     * @param {Imahjong_jxmj_svr_taifei_not} message mahjong_jxmj_svr_taifei_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_svr_taifei_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nTaifei);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_svr_taifei_not message, length delimited. Does not implicitly {@link mahjong_jxmj_svr_taifei_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_svr_taifei_not
     * @static
     * @param {Imahjong_jxmj_svr_taifei_not} message mahjong_jxmj_svr_taifei_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_svr_taifei_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_svr_taifei_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_svr_taifei_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_svr_taifei_not} mahjong_jxmj_svr_taifei_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_svr_taifei_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_svr_taifei_not();
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
     * Decodes a mahjong_jxmj_svr_taifei_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_svr_taifei_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_svr_taifei_not} mahjong_jxmj_svr_taifei_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_svr_taifei_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_svr_taifei_not message.
     * @function verify
     * @memberof mahjong_jxmj_svr_taifei_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_svr_taifei_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nTaifei))
            return "nTaifei: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_svr_taifei_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_svr_taifei_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_svr_taifei_not} mahjong_jxmj_svr_taifei_not
     */
    mahjong_jxmj_svr_taifei_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_svr_taifei_not)
            return object;
        var message = new $root.mahjong_jxmj_svr_taifei_not();
        if (object.nTaifei != null)
            message.nTaifei = object.nTaifei | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_svr_taifei_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_svr_taifei_not
     * @static
     * @param {mahjong_jxmj_svr_taifei_not} message mahjong_jxmj_svr_taifei_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_svr_taifei_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_svr_taifei_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_svr_taifei_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_svr_taifei_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_svr_taifei_not;
})();

$root.mahjong_bc_login_ack = (function() {

    /**
     * Properties of a mahjong_bc_login_ack.
     * @exports Imahjong_bc_login_ack
     * @interface Imahjong_bc_login_ack
     * @property {number} ret mahjong_bc_login_ack ret
     * @property {Imahjong_PlyBaseData} plyBaseData mahjong_bc_login_ack plyBaseData
     * @property {Imahjong_PlayerStatus} plyStatus mahjong_bc_login_ack plyStatus
     * @property {string} errorMsg mahjong_bc_login_ack errorMsg
     */

    /**
     * Constructs a new mahjong_bc_login_ack.
     * @exports mahjong_bc_login_ack
     * @classdesc Represents a mahjong_bc_login_ack.
     * @implements Imahjong_bc_login_ack
     * @constructor
     * @param {Imahjong_bc_login_ack=} [properties] Properties to set
     */
    function mahjong_bc_login_ack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_bc_login_ack ret.
     * @member {number} ret
     * @memberof mahjong_bc_login_ack
     * @instance
     */
    mahjong_bc_login_ack.prototype.ret = 0;

    /**
     * mahjong_bc_login_ack plyBaseData.
     * @member {Imahjong_PlyBaseData} plyBaseData
     * @memberof mahjong_bc_login_ack
     * @instance
     */
    mahjong_bc_login_ack.prototype.plyBaseData = null;

    /**
     * mahjong_bc_login_ack plyStatus.
     * @member {Imahjong_PlayerStatus} plyStatus
     * @memberof mahjong_bc_login_ack
     * @instance
     */
    mahjong_bc_login_ack.prototype.plyStatus = null;

    /**
     * mahjong_bc_login_ack errorMsg.
     * @member {string} errorMsg
     * @memberof mahjong_bc_login_ack
     * @instance
     */
    mahjong_bc_login_ack.prototype.errorMsg = "";

    /**
     * Creates a new mahjong_bc_login_ack instance using the specified properties.
     * @function create
     * @memberof mahjong_bc_login_ack
     * @static
     * @param {Imahjong_bc_login_ack=} [properties] Properties to set
     * @returns {mahjong_bc_login_ack} mahjong_bc_login_ack instance
     */
    mahjong_bc_login_ack.create = function create(properties) {
        return new mahjong_bc_login_ack(properties);
    };

    /**
     * Encodes the specified mahjong_bc_login_ack message. Does not implicitly {@link mahjong_bc_login_ack.verify|verify} messages.
     * @function encode
     * @memberof mahjong_bc_login_ack
     * @static
     * @param {Imahjong_bc_login_ack} message mahjong_bc_login_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_login_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
        $root.mahjong_PlyBaseData.encode(message.plyBaseData, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        $root.mahjong_PlayerStatus.encode(message.plyStatus, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.errorMsg);
        return writer;
    };

    /**
     * Encodes the specified mahjong_bc_login_ack message, length delimited. Does not implicitly {@link mahjong_bc_login_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_bc_login_ack
     * @static
     * @param {Imahjong_bc_login_ack} message mahjong_bc_login_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_login_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_bc_login_ack message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_bc_login_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_bc_login_ack} mahjong_bc_login_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_login_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_bc_login_ack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ret = reader.int32();
                break;
            case 2:
                message.plyBaseData = $root.mahjong_PlyBaseData.decode(reader, reader.uint32());
                break;
            case 3:
                message.plyStatus = $root.mahjong_PlayerStatus.decode(reader, reader.uint32());
                break;
            case 4:
                message.errorMsg = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("ret"))
            throw $util.ProtocolError("missing required 'ret'", { instance: message });
        if (!message.hasOwnProperty("plyBaseData"))
            throw $util.ProtocolError("missing required 'plyBaseData'", { instance: message });
        if (!message.hasOwnProperty("plyStatus"))
            throw $util.ProtocolError("missing required 'plyStatus'", { instance: message });
        if (!message.hasOwnProperty("errorMsg"))
            throw $util.ProtocolError("missing required 'errorMsg'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_bc_login_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_bc_login_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_bc_login_ack} mahjong_bc_login_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_login_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_bc_login_ack message.
     * @function verify
     * @memberof mahjong_bc_login_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_bc_login_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.ret))
            return "ret: integer expected";
        {
            var error = $root.mahjong_PlyBaseData.verify(message.plyBaseData);
            if (error)
                return "plyBaseData." + error;
        }
        {
            var error = $root.mahjong_PlayerStatus.verify(message.plyStatus);
            if (error)
                return "plyStatus." + error;
        }
        if (!$util.isString(message.errorMsg))
            return "errorMsg: string expected";
        return null;
    };

    /**
     * Creates a mahjong_bc_login_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_bc_login_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_bc_login_ack} mahjong_bc_login_ack
     */
    mahjong_bc_login_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_bc_login_ack)
            return object;
        var message = new $root.mahjong_bc_login_ack();
        if (object.ret != null)
            message.ret = object.ret | 0;
        if (object.plyBaseData != null) {
            if (typeof object.plyBaseData !== "object")
                throw TypeError(".mahjong_bc_login_ack.plyBaseData: object expected");
            message.plyBaseData = $root.mahjong_PlyBaseData.fromObject(object.plyBaseData);
        }
        if (object.plyStatus != null) {
            if (typeof object.plyStatus !== "object")
                throw TypeError(".mahjong_bc_login_ack.plyStatus: object expected");
            message.plyStatus = $root.mahjong_PlayerStatus.fromObject(object.plyStatus);
        }
        if (object.errorMsg != null)
            message.errorMsg = String(object.errorMsg);
        return message;
    };

    /**
     * Creates a plain object from a mahjong_bc_login_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_bc_login_ack
     * @static
     * @param {mahjong_bc_login_ack} message mahjong_bc_login_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_bc_login_ack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ret = 0;
            object.plyBaseData = null;
            object.plyStatus = null;
            object.errorMsg = "";
        }
        if (message.ret != null && message.hasOwnProperty("ret"))
            object.ret = message.ret;
        if (message.plyBaseData != null && message.hasOwnProperty("plyBaseData"))
            object.plyBaseData = $root.mahjong_PlyBaseData.toObject(message.plyBaseData, options);
        if (message.plyStatus != null && message.hasOwnProperty("plyStatus"))
            object.plyStatus = $root.mahjong_PlayerStatus.toObject(message.plyStatus, options);
        if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
            object.errorMsg = message.errorMsg;
        return object;
    };

    /**
     * Converts this mahjong_bc_login_ack to JSON.
     * @function toJSON
     * @memberof mahjong_bc_login_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_bc_login_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_bc_login_ack;
})();

$root.mahjong_jxmj_gang_info = (function() {

    /**
     * Properties of a mahjong_jxmj_gang_info.
     * @exports Imahjong_jxmj_gang_info
     * @interface Imahjong_jxmj_gang_info
     * @property {number} nOpcode mahjong_jxmj_gang_info nOpcode
     * @property {Array.<number>|null} [vecGangCards] mahjong_jxmj_gang_info vecGangCards
     */

    /**
     * Constructs a new mahjong_jxmj_gang_info.
     * @exports mahjong_jxmj_gang_info
     * @classdesc Represents a mahjong_jxmj_gang_info.
     * @implements Imahjong_jxmj_gang_info
     * @constructor
     * @param {Imahjong_jxmj_gang_info=} [properties] Properties to set
     */
    function mahjong_jxmj_gang_info(properties) {
        this.vecGangCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_gang_info nOpcode.
     * @member {number} nOpcode
     * @memberof mahjong_jxmj_gang_info
     * @instance
     */
    mahjong_jxmj_gang_info.prototype.nOpcode = 0;

    /**
     * mahjong_jxmj_gang_info vecGangCards.
     * @member {Array.<number>} vecGangCards
     * @memberof mahjong_jxmj_gang_info
     * @instance
     */
    mahjong_jxmj_gang_info.prototype.vecGangCards = $util.emptyArray;

    /**
     * Creates a new mahjong_jxmj_gang_info instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_gang_info
     * @static
     * @param {Imahjong_jxmj_gang_info=} [properties] Properties to set
     * @returns {mahjong_jxmj_gang_info} mahjong_jxmj_gang_info instance
     */
    mahjong_jxmj_gang_info.create = function create(properties) {
        return new mahjong_jxmj_gang_info(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_gang_info message. Does not implicitly {@link mahjong_jxmj_gang_info.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_gang_info
     * @static
     * @param {Imahjong_jxmj_gang_info} message mahjong_jxmj_gang_info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_gang_info.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nOpcode);
        if (message.vecGangCards != null && message.vecGangCards.length)
            for (var i = 0; i < message.vecGangCards.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.vecGangCards[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_gang_info message, length delimited. Does not implicitly {@link mahjong_jxmj_gang_info.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_gang_info
     * @static
     * @param {Imahjong_jxmj_gang_info} message mahjong_jxmj_gang_info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_gang_info.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_gang_info message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_gang_info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_gang_info} mahjong_jxmj_gang_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_gang_info.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_gang_info();
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
     * Decodes a mahjong_jxmj_gang_info message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_gang_info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_gang_info} mahjong_jxmj_gang_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_gang_info.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_gang_info message.
     * @function verify
     * @memberof mahjong_jxmj_gang_info
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_gang_info.verify = function verify(message) {
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
     * Creates a mahjong_jxmj_gang_info message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_gang_info
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_gang_info} mahjong_jxmj_gang_info
     */
    mahjong_jxmj_gang_info.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_gang_info)
            return object;
        var message = new $root.mahjong_jxmj_gang_info();
        if (object.nOpcode != null)
            message.nOpcode = object.nOpcode | 0;
        if (object.vecGangCards) {
            if (!Array.isArray(object.vecGangCards))
                throw TypeError(".mahjong_jxmj_gang_info.vecGangCards: array expected");
            message.vecGangCards = [];
            for (var i = 0; i < object.vecGangCards.length; ++i)
                message.vecGangCards[i] = object.vecGangCards[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_gang_info message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_gang_info
     * @static
     * @param {mahjong_jxmj_gang_info} message mahjong_jxmj_gang_info
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_gang_info.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_gang_info to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_gang_info
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_gang_info.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_gang_info;
})();

$root.mahjong_jxmj_visi_compdata_req = (function() {

    /**
     * Properties of a mahjong_jxmj_visi_compdata_req.
     * @exports Imahjong_jxmj_visi_compdata_req
     * @interface Imahjong_jxmj_visi_compdata_req
     */

    /**
     * Constructs a new mahjong_jxmj_visi_compdata_req.
     * @exports mahjong_jxmj_visi_compdata_req
     * @classdesc Represents a mahjong_jxmj_visi_compdata_req.
     * @implements Imahjong_jxmj_visi_compdata_req
     * @constructor
     * @param {Imahjong_jxmj_visi_compdata_req=} [properties] Properties to set
     */
    function mahjong_jxmj_visi_compdata_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_jxmj_visi_compdata_req instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_visi_compdata_req
     * @static
     * @param {Imahjong_jxmj_visi_compdata_req=} [properties] Properties to set
     * @returns {mahjong_jxmj_visi_compdata_req} mahjong_jxmj_visi_compdata_req instance
     */
    mahjong_jxmj_visi_compdata_req.create = function create(properties) {
        return new mahjong_jxmj_visi_compdata_req(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_visi_compdata_req message. Does not implicitly {@link mahjong_jxmj_visi_compdata_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_visi_compdata_req
     * @static
     * @param {Imahjong_jxmj_visi_compdata_req} message mahjong_jxmj_visi_compdata_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_visi_compdata_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_visi_compdata_req message, length delimited. Does not implicitly {@link mahjong_jxmj_visi_compdata_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_visi_compdata_req
     * @static
     * @param {Imahjong_jxmj_visi_compdata_req} message mahjong_jxmj_visi_compdata_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_visi_compdata_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_visi_compdata_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_visi_compdata_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_visi_compdata_req} mahjong_jxmj_visi_compdata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_visi_compdata_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_visi_compdata_req();
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
     * Decodes a mahjong_jxmj_visi_compdata_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_visi_compdata_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_visi_compdata_req} mahjong_jxmj_visi_compdata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_visi_compdata_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_visi_compdata_req message.
     * @function verify
     * @memberof mahjong_jxmj_visi_compdata_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_visi_compdata_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_visi_compdata_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_visi_compdata_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_visi_compdata_req} mahjong_jxmj_visi_compdata_req
     */
    mahjong_jxmj_visi_compdata_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_visi_compdata_req)
            return object;
        return new $root.mahjong_jxmj_visi_compdata_req();
    };

    /**
     * Creates a plain object from a mahjong_jxmj_visi_compdata_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_visi_compdata_req
     * @static
     * @param {mahjong_jxmj_visi_compdata_req} message mahjong_jxmj_visi_compdata_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_visi_compdata_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_jxmj_visi_compdata_req to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_visi_compdata_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_visi_compdata_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_visi_compdata_req;
})();

$root.mahjong_jxmj_continue_banker_not = (function() {

    /**
     * Properties of a mahjong_jxmj_continue_banker_not.
     * @exports Imahjong_jxmj_continue_banker_not
     * @interface Imahjong_jxmj_continue_banker_not
     * @property {number} flag mahjong_jxmj_continue_banker_not flag
     */

    /**
     * Constructs a new mahjong_jxmj_continue_banker_not.
     * @exports mahjong_jxmj_continue_banker_not
     * @classdesc Represents a mahjong_jxmj_continue_banker_not.
     * @implements Imahjong_jxmj_continue_banker_not
     * @constructor
     * @param {Imahjong_jxmj_continue_banker_not=} [properties] Properties to set
     */
    function mahjong_jxmj_continue_banker_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_continue_banker_not flag.
     * @member {number} flag
     * @memberof mahjong_jxmj_continue_banker_not
     * @instance
     */
    mahjong_jxmj_continue_banker_not.prototype.flag = 0;

    /**
     * Creates a new mahjong_jxmj_continue_banker_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_continue_banker_not
     * @static
     * @param {Imahjong_jxmj_continue_banker_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_continue_banker_not} mahjong_jxmj_continue_banker_not instance
     */
    mahjong_jxmj_continue_banker_not.create = function create(properties) {
        return new mahjong_jxmj_continue_banker_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_continue_banker_not message. Does not implicitly {@link mahjong_jxmj_continue_banker_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_continue_banker_not
     * @static
     * @param {Imahjong_jxmj_continue_banker_not} message mahjong_jxmj_continue_banker_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_continue_banker_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.flag);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_continue_banker_not message, length delimited. Does not implicitly {@link mahjong_jxmj_continue_banker_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_continue_banker_not
     * @static
     * @param {Imahjong_jxmj_continue_banker_not} message mahjong_jxmj_continue_banker_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_continue_banker_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_continue_banker_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_continue_banker_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_continue_banker_not} mahjong_jxmj_continue_banker_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_continue_banker_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_continue_banker_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.flag = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("flag"))
            throw $util.ProtocolError("missing required 'flag'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_jxmj_continue_banker_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_continue_banker_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_continue_banker_not} mahjong_jxmj_continue_banker_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_continue_banker_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_continue_banker_not message.
     * @function verify
     * @memberof mahjong_jxmj_continue_banker_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_continue_banker_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.flag))
            return "flag: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_continue_banker_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_continue_banker_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_continue_banker_not} mahjong_jxmj_continue_banker_not
     */
    mahjong_jxmj_continue_banker_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_continue_banker_not)
            return object;
        var message = new $root.mahjong_jxmj_continue_banker_not();
        if (object.flag != null)
            message.flag = object.flag | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_continue_banker_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_continue_banker_not
     * @static
     * @param {mahjong_jxmj_continue_banker_not} message mahjong_jxmj_continue_banker_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_continue_banker_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.flag = 0;
        if (message.flag != null && message.hasOwnProperty("flag"))
            object.flag = message.flag;
        return object;
    };

    /**
     * Converts this mahjong_jxmj_continue_banker_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_continue_banker_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_continue_banker_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_continue_banker_not;
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

$root.mahjong_jxmj_kaibao_not = (function() {

    /**
     * Properties of a mahjong_jxmj_kaibao_not.
     * @exports Imahjong_jxmj_kaibao_not
     * @interface Imahjong_jxmj_kaibao_not
     * @property {number} cCard mahjong_jxmj_kaibao_not cCard
     * @property {number} nDice mahjong_jxmj_kaibao_not nDice
     */

    /**
     * Constructs a new mahjong_jxmj_kaibao_not.
     * @exports mahjong_jxmj_kaibao_not
     * @classdesc Represents a mahjong_jxmj_kaibao_not.
     * @implements Imahjong_jxmj_kaibao_not
     * @constructor
     * @param {Imahjong_jxmj_kaibao_not=} [properties] Properties to set
     */
    function mahjong_jxmj_kaibao_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_kaibao_not cCard.
     * @member {number} cCard
     * @memberof mahjong_jxmj_kaibao_not
     * @instance
     */
    mahjong_jxmj_kaibao_not.prototype.cCard = 0;

    /**
     * mahjong_jxmj_kaibao_not nDice.
     * @member {number} nDice
     * @memberof mahjong_jxmj_kaibao_not
     * @instance
     */
    mahjong_jxmj_kaibao_not.prototype.nDice = 0;

    /**
     * Creates a new mahjong_jxmj_kaibao_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_kaibao_not
     * @static
     * @param {Imahjong_jxmj_kaibao_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_kaibao_not} mahjong_jxmj_kaibao_not instance
     */
    mahjong_jxmj_kaibao_not.create = function create(properties) {
        return new mahjong_jxmj_kaibao_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_kaibao_not message. Does not implicitly {@link mahjong_jxmj_kaibao_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_kaibao_not
     * @static
     * @param {Imahjong_jxmj_kaibao_not} message mahjong_jxmj_kaibao_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_kaibao_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cCard);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nDice);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_kaibao_not message, length delimited. Does not implicitly {@link mahjong_jxmj_kaibao_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_kaibao_not
     * @static
     * @param {Imahjong_jxmj_kaibao_not} message mahjong_jxmj_kaibao_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_kaibao_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_kaibao_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_kaibao_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_kaibao_not} mahjong_jxmj_kaibao_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_kaibao_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_kaibao_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cCard = reader.int32();
                break;
            case 2:
                message.nDice = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cCard"))
            throw $util.ProtocolError("missing required 'cCard'", { instance: message });
        if (!message.hasOwnProperty("nDice"))
            throw $util.ProtocolError("missing required 'nDice'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_jxmj_kaibao_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_kaibao_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_kaibao_not} mahjong_jxmj_kaibao_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_kaibao_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_kaibao_not message.
     * @function verify
     * @memberof mahjong_jxmj_kaibao_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_kaibao_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cCard))
            return "cCard: integer expected";
        if (!$util.isInteger(message.nDice))
            return "nDice: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_kaibao_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_kaibao_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_kaibao_not} mahjong_jxmj_kaibao_not
     */
    mahjong_jxmj_kaibao_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_kaibao_not)
            return object;
        var message = new $root.mahjong_jxmj_kaibao_not();
        if (object.cCard != null)
            message.cCard = object.cCard | 0;
        if (object.nDice != null)
            message.nDice = object.nDice | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_kaibao_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_kaibao_not
     * @static
     * @param {mahjong_jxmj_kaibao_not} message mahjong_jxmj_kaibao_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_kaibao_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cCard = 0;
            object.nDice = 0;
        }
        if (message.cCard != null && message.hasOwnProperty("cCard"))
            object.cCard = message.cCard;
        if (message.nDice != null && message.hasOwnProperty("nDice"))
            object.nDice = message.nDice;
        return object;
    };

    /**
     * Converts this mahjong_jxmj_kaibao_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_kaibao_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_kaibao_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_kaibao_not;
})();

$root.mahjong_bc_join_table_ack = (function() {

    /**
     * Properties of a mahjong_bc_join_table_ack.
     * @exports Imahjong_bc_join_table_ack
     * @interface Imahjong_bc_join_table_ack
     * @property {number} ret mahjong_bc_join_table_ack ret
     * @property {Imahjong_TableAttr} tableAttrs mahjong_bc_join_table_ack tableAttrs
     * @property {string} errMsg mahjong_bc_join_table_ack errMsg
     */

    /**
     * Constructs a new mahjong_bc_join_table_ack.
     * @exports mahjong_bc_join_table_ack
     * @classdesc Represents a mahjong_bc_join_table_ack.
     * @implements Imahjong_bc_join_table_ack
     * @constructor
     * @param {Imahjong_bc_join_table_ack=} [properties] Properties to set
     */
    function mahjong_bc_join_table_ack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_bc_join_table_ack ret.
     * @member {number} ret
     * @memberof mahjong_bc_join_table_ack
     * @instance
     */
    mahjong_bc_join_table_ack.prototype.ret = 0;

    /**
     * mahjong_bc_join_table_ack tableAttrs.
     * @member {Imahjong_TableAttr} tableAttrs
     * @memberof mahjong_bc_join_table_ack
     * @instance
     */
    mahjong_bc_join_table_ack.prototype.tableAttrs = null;

    /**
     * mahjong_bc_join_table_ack errMsg.
     * @member {string} errMsg
     * @memberof mahjong_bc_join_table_ack
     * @instance
     */
    mahjong_bc_join_table_ack.prototype.errMsg = "";

    /**
     * Creates a new mahjong_bc_join_table_ack instance using the specified properties.
     * @function create
     * @memberof mahjong_bc_join_table_ack
     * @static
     * @param {Imahjong_bc_join_table_ack=} [properties] Properties to set
     * @returns {mahjong_bc_join_table_ack} mahjong_bc_join_table_ack instance
     */
    mahjong_bc_join_table_ack.create = function create(properties) {
        return new mahjong_bc_join_table_ack(properties);
    };

    /**
     * Encodes the specified mahjong_bc_join_table_ack message. Does not implicitly {@link mahjong_bc_join_table_ack.verify|verify} messages.
     * @function encode
     * @memberof mahjong_bc_join_table_ack
     * @static
     * @param {Imahjong_bc_join_table_ack} message mahjong_bc_join_table_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_join_table_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
        $root.mahjong_TableAttr.encode(message.tableAttrs, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.errMsg);
        return writer;
    };

    /**
     * Encodes the specified mahjong_bc_join_table_ack message, length delimited. Does not implicitly {@link mahjong_bc_join_table_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_bc_join_table_ack
     * @static
     * @param {Imahjong_bc_join_table_ack} message mahjong_bc_join_table_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_join_table_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_bc_join_table_ack message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_bc_join_table_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_bc_join_table_ack} mahjong_bc_join_table_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_join_table_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_bc_join_table_ack();
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
     * Decodes a mahjong_bc_join_table_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_bc_join_table_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_bc_join_table_ack} mahjong_bc_join_table_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_join_table_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_bc_join_table_ack message.
     * @function verify
     * @memberof mahjong_bc_join_table_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_bc_join_table_ack.verify = function verify(message) {
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
     * Creates a mahjong_bc_join_table_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_bc_join_table_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_bc_join_table_ack} mahjong_bc_join_table_ack
     */
    mahjong_bc_join_table_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_bc_join_table_ack)
            return object;
        var message = new $root.mahjong_bc_join_table_ack();
        if (object.ret != null)
            message.ret = object.ret | 0;
        if (object.tableAttrs != null) {
            if (typeof object.tableAttrs !== "object")
                throw TypeError(".mahjong_bc_join_table_ack.tableAttrs: object expected");
            message.tableAttrs = $root.mahjong_TableAttr.fromObject(object.tableAttrs);
        }
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        return message;
    };

    /**
     * Creates a plain object from a mahjong_bc_join_table_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_bc_join_table_ack
     * @static
     * @param {mahjong_bc_join_table_ack} message mahjong_bc_join_table_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_bc_join_table_ack.toObject = function toObject(message, options) {
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
     * Converts this mahjong_bc_join_table_ack to JSON.
     * @function toJSON
     * @memberof mahjong_bc_join_table_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_bc_join_table_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_bc_join_table_ack;
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
     * @property {Array.<Imahjong_jxmj_player_itemInfo>|null} [fakeItem] mahjong_gc_get_redpackets_award_ack fakeItem
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
     * @member {Array.<Imahjong_jxmj_player_itemInfo>} fakeItem
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
                $root.mahjong_jxmj_player_itemInfo.encode(message.fakeItem[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
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
                message.fakeItem.push($root.mahjong_jxmj_player_itemInfo.decode(reader, reader.uint32()));
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
                var error = $root.mahjong_jxmj_player_itemInfo.verify(message.fakeItem[i]);
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
                message.fakeItem[i] = $root.mahjong_jxmj_player_itemInfo.fromObject(object.fakeItem[i]);
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
                object.fakeItem[j] = $root.mahjong_jxmj_player_itemInfo.toObject(message.fakeItem[j], options);
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

$root.mahjong_jxmj_banker_dice_not = (function() {

    /**
     * Properties of a mahjong_jxmj_banker_dice_not.
     * @exports Imahjong_jxmj_banker_dice_not
     * @interface Imahjong_jxmj_banker_dice_not
     * @property {number} cChairID mahjong_jxmj_banker_dice_not cChairID
     * @property {number} cBanker mahjong_jxmj_banker_dice_not cBanker
     * @property {Array.<number>|null} [vecDice] mahjong_jxmj_banker_dice_not vecDice
     */

    /**
     * Constructs a new mahjong_jxmj_banker_dice_not.
     * @exports mahjong_jxmj_banker_dice_not
     * @classdesc Represents a mahjong_jxmj_banker_dice_not.
     * @implements Imahjong_jxmj_banker_dice_not
     * @constructor
     * @param {Imahjong_jxmj_banker_dice_not=} [properties] Properties to set
     */
    function mahjong_jxmj_banker_dice_not(properties) {
        this.vecDice = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_banker_dice_not cChairID.
     * @member {number} cChairID
     * @memberof mahjong_jxmj_banker_dice_not
     * @instance
     */
    mahjong_jxmj_banker_dice_not.prototype.cChairID = 0;

    /**
     * mahjong_jxmj_banker_dice_not cBanker.
     * @member {number} cBanker
     * @memberof mahjong_jxmj_banker_dice_not
     * @instance
     */
    mahjong_jxmj_banker_dice_not.prototype.cBanker = 0;

    /**
     * mahjong_jxmj_banker_dice_not vecDice.
     * @member {Array.<number>} vecDice
     * @memberof mahjong_jxmj_banker_dice_not
     * @instance
     */
    mahjong_jxmj_banker_dice_not.prototype.vecDice = $util.emptyArray;

    /**
     * Creates a new mahjong_jxmj_banker_dice_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_banker_dice_not
     * @static
     * @param {Imahjong_jxmj_banker_dice_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_banker_dice_not} mahjong_jxmj_banker_dice_not instance
     */
    mahjong_jxmj_banker_dice_not.create = function create(properties) {
        return new mahjong_jxmj_banker_dice_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_banker_dice_not message. Does not implicitly {@link mahjong_jxmj_banker_dice_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_banker_dice_not
     * @static
     * @param {Imahjong_jxmj_banker_dice_not} message mahjong_jxmj_banker_dice_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_banker_dice_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cBanker);
        if (message.vecDice != null && message.vecDice.length)
            for (var i = 0; i < message.vecDice.length; ++i)
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.vecDice[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_banker_dice_not message, length delimited. Does not implicitly {@link mahjong_jxmj_banker_dice_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_banker_dice_not
     * @static
     * @param {Imahjong_jxmj_banker_dice_not} message mahjong_jxmj_banker_dice_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_banker_dice_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_banker_dice_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_banker_dice_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_banker_dice_not} mahjong_jxmj_banker_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_banker_dice_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_banker_dice_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairID = reader.int32();
                break;
            case 2:
                message.cBanker = reader.int32();
                break;
            case 3:
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
        if (!message.hasOwnProperty("cBanker"))
            throw $util.ProtocolError("missing required 'cBanker'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_jxmj_banker_dice_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_banker_dice_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_banker_dice_not} mahjong_jxmj_banker_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_banker_dice_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_banker_dice_not message.
     * @function verify
     * @memberof mahjong_jxmj_banker_dice_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_banker_dice_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
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
     * Creates a mahjong_jxmj_banker_dice_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_banker_dice_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_banker_dice_not} mahjong_jxmj_banker_dice_not
     */
    mahjong_jxmj_banker_dice_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_banker_dice_not)
            return object;
        var message = new $root.mahjong_jxmj_banker_dice_not();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.cBanker != null)
            message.cBanker = object.cBanker | 0;
        if (object.vecDice) {
            if (!Array.isArray(object.vecDice))
                throw TypeError(".mahjong_jxmj_banker_dice_not.vecDice: array expected");
            message.vecDice = [];
            for (var i = 0; i < object.vecDice.length; ++i)
                message.vecDice[i] = object.vecDice[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_banker_dice_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_banker_dice_not
     * @static
     * @param {mahjong_jxmj_banker_dice_not} message mahjong_jxmj_banker_dice_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_banker_dice_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecDice = [];
        if (options.defaults) {
            object.cChairID = 0;
            object.cBanker = 0;
        }
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
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
     * Converts this mahjong_jxmj_banker_dice_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_banker_dice_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_banker_dice_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_banker_dice_not;
})();

$root.mahjong_jxmj_st_gameresult = (function() {

    /**
     * Properties of a mahjong_jxmj_st_gameresult.
     * @exports Imahjong_jxmj_st_gameresult
     * @interface Imahjong_jxmj_st_gameresult
     * @property {number} cChairID mahjong_jxmj_st_gameresult cChairID
     * @property {number} cWonLose mahjong_jxmj_st_gameresult cWonLose
     * @property {number} cHuType mahjong_jxmj_st_gameresult cHuType
     * @property {number} cPiaoType mahjong_jxmj_st_gameresult cPiaoType
     * @property {number|Long} nScore mahjong_jxmj_st_gameresult nScore
     * @property {number} nTax mahjong_jxmj_st_gameresult nTax
     * @property {number} nCredits mahjong_jxmj_st_gameresult nCredits
     * @property {number} nHuCredits mahjong_jxmj_st_gameresult nHuCredits
     * @property {number} nGangCredits mahjong_jxmj_st_gameresult nGangCredits
     * @property {number} nHuChairid mahjong_jxmj_st_gameresult nHuChairid
     * @property {Array.<Imahjong_jxmj_fan_data>|null} [vecFanData] mahjong_jxmj_st_gameresult vecFanData
     * @property {Array.<number>|null} [vecZhuaNiao] mahjong_jxmj_st_gameresult vecZhuaNiao
     */

    /**
     * Constructs a new mahjong_jxmj_st_gameresult.
     * @exports mahjong_jxmj_st_gameresult
     * @classdesc Represents a mahjong_jxmj_st_gameresult.
     * @implements Imahjong_jxmj_st_gameresult
     * @constructor
     * @param {Imahjong_jxmj_st_gameresult=} [properties] Properties to set
     */
    function mahjong_jxmj_st_gameresult(properties) {
        this.vecFanData = [];
        this.vecZhuaNiao = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_st_gameresult cChairID.
     * @member {number} cChairID
     * @memberof mahjong_jxmj_st_gameresult
     * @instance
     */
    mahjong_jxmj_st_gameresult.prototype.cChairID = 0;

    /**
     * mahjong_jxmj_st_gameresult cWonLose.
     * @member {number} cWonLose
     * @memberof mahjong_jxmj_st_gameresult
     * @instance
     */
    mahjong_jxmj_st_gameresult.prototype.cWonLose = 0;

    /**
     * mahjong_jxmj_st_gameresult cHuType.
     * @member {number} cHuType
     * @memberof mahjong_jxmj_st_gameresult
     * @instance
     */
    mahjong_jxmj_st_gameresult.prototype.cHuType = 0;

    /**
     * mahjong_jxmj_st_gameresult cPiaoType.
     * @member {number} cPiaoType
     * @memberof mahjong_jxmj_st_gameresult
     * @instance
     */
    mahjong_jxmj_st_gameresult.prototype.cPiaoType = 0;

    /**
     * mahjong_jxmj_st_gameresult nScore.
     * @member {number|Long} nScore
     * @memberof mahjong_jxmj_st_gameresult
     * @instance
     */
    mahjong_jxmj_st_gameresult.prototype.nScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * mahjong_jxmj_st_gameresult nTax.
     * @member {number} nTax
     * @memberof mahjong_jxmj_st_gameresult
     * @instance
     */
    mahjong_jxmj_st_gameresult.prototype.nTax = 0;

    /**
     * mahjong_jxmj_st_gameresult nCredits.
     * @member {number} nCredits
     * @memberof mahjong_jxmj_st_gameresult
     * @instance
     */
    mahjong_jxmj_st_gameresult.prototype.nCredits = 0;

    /**
     * mahjong_jxmj_st_gameresult nHuCredits.
     * @member {number} nHuCredits
     * @memberof mahjong_jxmj_st_gameresult
     * @instance
     */
    mahjong_jxmj_st_gameresult.prototype.nHuCredits = 0;

    /**
     * mahjong_jxmj_st_gameresult nGangCredits.
     * @member {number} nGangCredits
     * @memberof mahjong_jxmj_st_gameresult
     * @instance
     */
    mahjong_jxmj_st_gameresult.prototype.nGangCredits = 0;

    /**
     * mahjong_jxmj_st_gameresult nHuChairid.
     * @member {number} nHuChairid
     * @memberof mahjong_jxmj_st_gameresult
     * @instance
     */
    mahjong_jxmj_st_gameresult.prototype.nHuChairid = 0;

    /**
     * mahjong_jxmj_st_gameresult vecFanData.
     * @member {Array.<Imahjong_jxmj_fan_data>} vecFanData
     * @memberof mahjong_jxmj_st_gameresult
     * @instance
     */
    mahjong_jxmj_st_gameresult.prototype.vecFanData = $util.emptyArray;

    /**
     * mahjong_jxmj_st_gameresult vecZhuaNiao.
     * @member {Array.<number>} vecZhuaNiao
     * @memberof mahjong_jxmj_st_gameresult
     * @instance
     */
    mahjong_jxmj_st_gameresult.prototype.vecZhuaNiao = $util.emptyArray;

    /**
     * Creates a new mahjong_jxmj_st_gameresult instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_st_gameresult
     * @static
     * @param {Imahjong_jxmj_st_gameresult=} [properties] Properties to set
     * @returns {mahjong_jxmj_st_gameresult} mahjong_jxmj_st_gameresult instance
     */
    mahjong_jxmj_st_gameresult.create = function create(properties) {
        return new mahjong_jxmj_st_gameresult(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_st_gameresult message. Does not implicitly {@link mahjong_jxmj_st_gameresult.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_st_gameresult
     * @static
     * @param {Imahjong_jxmj_st_gameresult} message mahjong_jxmj_st_gameresult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_st_gameresult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cWonLose);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cHuType);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cPiaoType);
        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.nScore);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.nTax);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.nCredits);
        writer.uint32(/* id 8, wireType 0 =*/64).int32(message.nHuCredits);
        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.nGangCredits);
        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.nHuChairid);
        if (message.vecFanData != null && message.vecFanData.length)
            for (var i = 0; i < message.vecFanData.length; ++i)
                $root.mahjong_jxmj_fan_data.encode(message.vecFanData[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.vecZhuaNiao != null && message.vecZhuaNiao.length)
            for (var i = 0; i < message.vecZhuaNiao.length; ++i)
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.vecZhuaNiao[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_st_gameresult message, length delimited. Does not implicitly {@link mahjong_jxmj_st_gameresult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_st_gameresult
     * @static
     * @param {Imahjong_jxmj_st_gameresult} message mahjong_jxmj_st_gameresult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_st_gameresult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_st_gameresult message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_st_gameresult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_st_gameresult} mahjong_jxmj_st_gameresult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_st_gameresult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_st_gameresult();
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
                message.cHuType = reader.int32();
                break;
            case 4:
                message.cPiaoType = reader.int32();
                break;
            case 5:
                message.nScore = reader.int64();
                break;
            case 6:
                message.nTax = reader.int32();
                break;
            case 7:
                message.nCredits = reader.int32();
                break;
            case 8:
                message.nHuCredits = reader.int32();
                break;
            case 9:
                message.nGangCredits = reader.int32();
                break;
            case 10:
                message.nHuChairid = reader.int32();
                break;
            case 11:
                if (!(message.vecFanData && message.vecFanData.length))
                    message.vecFanData = [];
                message.vecFanData.push($root.mahjong_jxmj_fan_data.decode(reader, reader.uint32()));
                break;
            case 12:
                if (!(message.vecZhuaNiao && message.vecZhuaNiao.length))
                    message.vecZhuaNiao = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecZhuaNiao.push(reader.int32());
                } else
                    message.vecZhuaNiao.push(reader.int32());
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
        if (!message.hasOwnProperty("cHuType"))
            throw $util.ProtocolError("missing required 'cHuType'", { instance: message });
        if (!message.hasOwnProperty("cPiaoType"))
            throw $util.ProtocolError("missing required 'cPiaoType'", { instance: message });
        if (!message.hasOwnProperty("nScore"))
            throw $util.ProtocolError("missing required 'nScore'", { instance: message });
        if (!message.hasOwnProperty("nTax"))
            throw $util.ProtocolError("missing required 'nTax'", { instance: message });
        if (!message.hasOwnProperty("nCredits"))
            throw $util.ProtocolError("missing required 'nCredits'", { instance: message });
        if (!message.hasOwnProperty("nHuCredits"))
            throw $util.ProtocolError("missing required 'nHuCredits'", { instance: message });
        if (!message.hasOwnProperty("nGangCredits"))
            throw $util.ProtocolError("missing required 'nGangCredits'", { instance: message });
        if (!message.hasOwnProperty("nHuChairid"))
            throw $util.ProtocolError("missing required 'nHuChairid'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_jxmj_st_gameresult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_st_gameresult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_st_gameresult} mahjong_jxmj_st_gameresult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_st_gameresult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_st_gameresult message.
     * @function verify
     * @memberof mahjong_jxmj_st_gameresult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_st_gameresult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
        if (!$util.isInteger(message.cWonLose))
            return "cWonLose: integer expected";
        if (!$util.isInteger(message.cHuType))
            return "cHuType: integer expected";
        if (!$util.isInteger(message.cPiaoType))
            return "cPiaoType: integer expected";
        if (!$util.isInteger(message.nScore) && !(message.nScore && $util.isInteger(message.nScore.low) && $util.isInteger(message.nScore.high)))
            return "nScore: integer|Long expected";
        if (!$util.isInteger(message.nTax))
            return "nTax: integer expected";
        if (!$util.isInteger(message.nCredits))
            return "nCredits: integer expected";
        if (!$util.isInteger(message.nHuCredits))
            return "nHuCredits: integer expected";
        if (!$util.isInteger(message.nGangCredits))
            return "nGangCredits: integer expected";
        if (!$util.isInteger(message.nHuChairid))
            return "nHuChairid: integer expected";
        if (message.vecFanData != null && message.hasOwnProperty("vecFanData")) {
            if (!Array.isArray(message.vecFanData))
                return "vecFanData: array expected";
            for (var i = 0; i < message.vecFanData.length; ++i) {
                var error = $root.mahjong_jxmj_fan_data.verify(message.vecFanData[i]);
                if (error)
                    return "vecFanData." + error;
            }
        }
        if (message.vecZhuaNiao != null && message.hasOwnProperty("vecZhuaNiao")) {
            if (!Array.isArray(message.vecZhuaNiao))
                return "vecZhuaNiao: array expected";
            for (var i = 0; i < message.vecZhuaNiao.length; ++i)
                if (!$util.isInteger(message.vecZhuaNiao[i]))
                    return "vecZhuaNiao: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_jxmj_st_gameresult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_st_gameresult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_st_gameresult} mahjong_jxmj_st_gameresult
     */
    mahjong_jxmj_st_gameresult.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_st_gameresult)
            return object;
        var message = new $root.mahjong_jxmj_st_gameresult();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.cWonLose != null)
            message.cWonLose = object.cWonLose | 0;
        if (object.cHuType != null)
            message.cHuType = object.cHuType | 0;
        if (object.cPiaoType != null)
            message.cPiaoType = object.cPiaoType | 0;
        if (object.nScore != null)
            if ($util.Long)
                (message.nScore = $util.Long.fromValue(object.nScore)).unsigned = false;
            else if (typeof object.nScore === "string")
                message.nScore = parseInt(object.nScore, 10);
            else if (typeof object.nScore === "number")
                message.nScore = object.nScore;
            else if (typeof object.nScore === "object")
                message.nScore = new $util.LongBits(object.nScore.low >>> 0, object.nScore.high >>> 0).toNumber();
        if (object.nTax != null)
            message.nTax = object.nTax | 0;
        if (object.nCredits != null)
            message.nCredits = object.nCredits | 0;
        if (object.nHuCredits != null)
            message.nHuCredits = object.nHuCredits | 0;
        if (object.nGangCredits != null)
            message.nGangCredits = object.nGangCredits | 0;
        if (object.nHuChairid != null)
            message.nHuChairid = object.nHuChairid | 0;
        if (object.vecFanData) {
            if (!Array.isArray(object.vecFanData))
                throw TypeError(".mahjong_jxmj_st_gameresult.vecFanData: array expected");
            message.vecFanData = [];
            for (var i = 0; i < object.vecFanData.length; ++i) {
                if (typeof object.vecFanData[i] !== "object")
                    throw TypeError(".mahjong_jxmj_st_gameresult.vecFanData: object expected");
                message.vecFanData[i] = $root.mahjong_jxmj_fan_data.fromObject(object.vecFanData[i]);
            }
        }
        if (object.vecZhuaNiao) {
            if (!Array.isArray(object.vecZhuaNiao))
                throw TypeError(".mahjong_jxmj_st_gameresult.vecZhuaNiao: array expected");
            message.vecZhuaNiao = [];
            for (var i = 0; i < object.vecZhuaNiao.length; ++i)
                message.vecZhuaNiao[i] = object.vecZhuaNiao[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_st_gameresult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_st_gameresult
     * @static
     * @param {mahjong_jxmj_st_gameresult} message mahjong_jxmj_st_gameresult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_st_gameresult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecFanData = [];
            object.vecZhuaNiao = [];
        }
        if (options.defaults) {
            object.cChairID = 0;
            object.cWonLose = 0;
            object.cHuType = 0;
            object.cPiaoType = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.nScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.nScore = options.longs === String ? "0" : 0;
            object.nTax = 0;
            object.nCredits = 0;
            object.nHuCredits = 0;
            object.nGangCredits = 0;
            object.nHuChairid = 0;
        }
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.cWonLose != null && message.hasOwnProperty("cWonLose"))
            object.cWonLose = message.cWonLose;
        if (message.cHuType != null && message.hasOwnProperty("cHuType"))
            object.cHuType = message.cHuType;
        if (message.cPiaoType != null && message.hasOwnProperty("cPiaoType"))
            object.cPiaoType = message.cPiaoType;
        if (message.nScore != null && message.hasOwnProperty("nScore"))
            if (typeof message.nScore === "number")
                object.nScore = options.longs === String ? String(message.nScore) : message.nScore;
            else
                object.nScore = options.longs === String ? $util.Long.prototype.toString.call(message.nScore) : options.longs === Number ? new $util.LongBits(message.nScore.low >>> 0, message.nScore.high >>> 0).toNumber() : message.nScore;
        if (message.nTax != null && message.hasOwnProperty("nTax"))
            object.nTax = message.nTax;
        if (message.nCredits != null && message.hasOwnProperty("nCredits"))
            object.nCredits = message.nCredits;
        if (message.nHuCredits != null && message.hasOwnProperty("nHuCredits"))
            object.nHuCredits = message.nHuCredits;
        if (message.nGangCredits != null && message.hasOwnProperty("nGangCredits"))
            object.nGangCredits = message.nGangCredits;
        if (message.nHuChairid != null && message.hasOwnProperty("nHuChairid"))
            object.nHuChairid = message.nHuChairid;
        if (message.vecFanData && message.vecFanData.length) {
            object.vecFanData = [];
            for (var j = 0; j < message.vecFanData.length; ++j)
                object.vecFanData[j] = $root.mahjong_jxmj_fan_data.toObject(message.vecFanData[j], options);
        }
        if (message.vecZhuaNiao && message.vecZhuaNiao.length) {
            object.vecZhuaNiao = [];
            for (var j = 0; j < message.vecZhuaNiao.length; ++j)
                object.vecZhuaNiao[j] = message.vecZhuaNiao[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_jxmj_st_gameresult to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_st_gameresult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_st_gameresult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_st_gameresult;
})();

$root.mahjong_jxmj_magic_emoji_noti = (function() {

    /**
     * Properties of a mahjong_jxmj_magic_emoji_noti.
     * @exports Imahjong_jxmj_magic_emoji_noti
     * @interface Imahjong_jxmj_magic_emoji_noti
     * @property {number} cIsError mahjong_jxmj_magic_emoji_noti cIsError
     * @property {number} cEmojiIndex mahjong_jxmj_magic_emoji_noti cEmojiIndex
     * @property {number} cFromChairID mahjong_jxmj_magic_emoji_noti cFromChairID
     * @property {number} cToChairID mahjong_jxmj_magic_emoji_noti cToChairID
     */

    /**
     * Constructs a new mahjong_jxmj_magic_emoji_noti.
     * @exports mahjong_jxmj_magic_emoji_noti
     * @classdesc Represents a mahjong_jxmj_magic_emoji_noti.
     * @implements Imahjong_jxmj_magic_emoji_noti
     * @constructor
     * @param {Imahjong_jxmj_magic_emoji_noti=} [properties] Properties to set
     */
    function mahjong_jxmj_magic_emoji_noti(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_magic_emoji_noti cIsError.
     * @member {number} cIsError
     * @memberof mahjong_jxmj_magic_emoji_noti
     * @instance
     */
    mahjong_jxmj_magic_emoji_noti.prototype.cIsError = 0;

    /**
     * mahjong_jxmj_magic_emoji_noti cEmojiIndex.
     * @member {number} cEmojiIndex
     * @memberof mahjong_jxmj_magic_emoji_noti
     * @instance
     */
    mahjong_jxmj_magic_emoji_noti.prototype.cEmojiIndex = 0;

    /**
     * mahjong_jxmj_magic_emoji_noti cFromChairID.
     * @member {number} cFromChairID
     * @memberof mahjong_jxmj_magic_emoji_noti
     * @instance
     */
    mahjong_jxmj_magic_emoji_noti.prototype.cFromChairID = 0;

    /**
     * mahjong_jxmj_magic_emoji_noti cToChairID.
     * @member {number} cToChairID
     * @memberof mahjong_jxmj_magic_emoji_noti
     * @instance
     */
    mahjong_jxmj_magic_emoji_noti.prototype.cToChairID = 0;

    /**
     * Creates a new mahjong_jxmj_magic_emoji_noti instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_magic_emoji_noti
     * @static
     * @param {Imahjong_jxmj_magic_emoji_noti=} [properties] Properties to set
     * @returns {mahjong_jxmj_magic_emoji_noti} mahjong_jxmj_magic_emoji_noti instance
     */
    mahjong_jxmj_magic_emoji_noti.create = function create(properties) {
        return new mahjong_jxmj_magic_emoji_noti(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_magic_emoji_noti message. Does not implicitly {@link mahjong_jxmj_magic_emoji_noti.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_magic_emoji_noti
     * @static
     * @param {Imahjong_jxmj_magic_emoji_noti} message mahjong_jxmj_magic_emoji_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_magic_emoji_noti.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cIsError);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cEmojiIndex);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cFromChairID);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cToChairID);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_magic_emoji_noti message, length delimited. Does not implicitly {@link mahjong_jxmj_magic_emoji_noti.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_magic_emoji_noti
     * @static
     * @param {Imahjong_jxmj_magic_emoji_noti} message mahjong_jxmj_magic_emoji_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_magic_emoji_noti.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_magic_emoji_noti message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_magic_emoji_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_magic_emoji_noti} mahjong_jxmj_magic_emoji_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_magic_emoji_noti.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_magic_emoji_noti();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cIsError = reader.int32();
                break;
            case 2:
                message.cEmojiIndex = reader.int32();
                break;
            case 3:
                message.cFromChairID = reader.int32();
                break;
            case 4:
                message.cToChairID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cIsError"))
            throw $util.ProtocolError("missing required 'cIsError'", { instance: message });
        if (!message.hasOwnProperty("cEmojiIndex"))
            throw $util.ProtocolError("missing required 'cEmojiIndex'", { instance: message });
        if (!message.hasOwnProperty("cFromChairID"))
            throw $util.ProtocolError("missing required 'cFromChairID'", { instance: message });
        if (!message.hasOwnProperty("cToChairID"))
            throw $util.ProtocolError("missing required 'cToChairID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_jxmj_magic_emoji_noti message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_magic_emoji_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_magic_emoji_noti} mahjong_jxmj_magic_emoji_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_magic_emoji_noti.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_magic_emoji_noti message.
     * @function verify
     * @memberof mahjong_jxmj_magic_emoji_noti
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_magic_emoji_noti.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cIsError))
            return "cIsError: integer expected";
        if (!$util.isInteger(message.cEmojiIndex))
            return "cEmojiIndex: integer expected";
        if (!$util.isInteger(message.cFromChairID))
            return "cFromChairID: integer expected";
        if (!$util.isInteger(message.cToChairID))
            return "cToChairID: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_magic_emoji_noti message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_magic_emoji_noti
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_magic_emoji_noti} mahjong_jxmj_magic_emoji_noti
     */
    mahjong_jxmj_magic_emoji_noti.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_magic_emoji_noti)
            return object;
        var message = new $root.mahjong_jxmj_magic_emoji_noti();
        if (object.cIsError != null)
            message.cIsError = object.cIsError | 0;
        if (object.cEmojiIndex != null)
            message.cEmojiIndex = object.cEmojiIndex | 0;
        if (object.cFromChairID != null)
            message.cFromChairID = object.cFromChairID | 0;
        if (object.cToChairID != null)
            message.cToChairID = object.cToChairID | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_magic_emoji_noti message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_magic_emoji_noti
     * @static
     * @param {mahjong_jxmj_magic_emoji_noti} message mahjong_jxmj_magic_emoji_noti
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_magic_emoji_noti.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cIsError = 0;
            object.cEmojiIndex = 0;
            object.cFromChairID = 0;
            object.cToChairID = 0;
        }
        if (message.cIsError != null && message.hasOwnProperty("cIsError"))
            object.cIsError = message.cIsError;
        if (message.cEmojiIndex != null && message.hasOwnProperty("cEmojiIndex"))
            object.cEmojiIndex = message.cEmojiIndex;
        if (message.cFromChairID != null && message.hasOwnProperty("cFromChairID"))
            object.cFromChairID = message.cFromChairID;
        if (message.cToChairID != null && message.hasOwnProperty("cToChairID"))
            object.cToChairID = message.cToChairID;
        return object;
    };

    /**
     * Converts this mahjong_jxmj_magic_emoji_noti to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_magic_emoji_noti
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_magic_emoji_noti.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_magic_emoji_noti;
})();

$root.mahjong_jxmj_get_mj_private_room_result_req = (function() {

    /**
     * Properties of a mahjong_jxmj_get_mj_private_room_result_req.
     * @exports Imahjong_jxmj_get_mj_private_room_result_req
     * @interface Imahjong_jxmj_get_mj_private_room_result_req
     */

    /**
     * Constructs a new mahjong_jxmj_get_mj_private_room_result_req.
     * @exports mahjong_jxmj_get_mj_private_room_result_req
     * @classdesc Represents a mahjong_jxmj_get_mj_private_room_result_req.
     * @implements Imahjong_jxmj_get_mj_private_room_result_req
     * @constructor
     * @param {Imahjong_jxmj_get_mj_private_room_result_req=} [properties] Properties to set
     */
    function mahjong_jxmj_get_mj_private_room_result_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_jxmj_get_mj_private_room_result_req instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_get_mj_private_room_result_req
     * @static
     * @param {Imahjong_jxmj_get_mj_private_room_result_req=} [properties] Properties to set
     * @returns {mahjong_jxmj_get_mj_private_room_result_req} mahjong_jxmj_get_mj_private_room_result_req instance
     */
    mahjong_jxmj_get_mj_private_room_result_req.create = function create(properties) {
        return new mahjong_jxmj_get_mj_private_room_result_req(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_get_mj_private_room_result_req message. Does not implicitly {@link mahjong_jxmj_get_mj_private_room_result_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_get_mj_private_room_result_req
     * @static
     * @param {Imahjong_jxmj_get_mj_private_room_result_req} message mahjong_jxmj_get_mj_private_room_result_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_get_mj_private_room_result_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_get_mj_private_room_result_req message, length delimited. Does not implicitly {@link mahjong_jxmj_get_mj_private_room_result_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_get_mj_private_room_result_req
     * @static
     * @param {Imahjong_jxmj_get_mj_private_room_result_req} message mahjong_jxmj_get_mj_private_room_result_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_get_mj_private_room_result_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_get_mj_private_room_result_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_get_mj_private_room_result_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_get_mj_private_room_result_req} mahjong_jxmj_get_mj_private_room_result_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_get_mj_private_room_result_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_get_mj_private_room_result_req();
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
     * Decodes a mahjong_jxmj_get_mj_private_room_result_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_get_mj_private_room_result_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_get_mj_private_room_result_req} mahjong_jxmj_get_mj_private_room_result_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_get_mj_private_room_result_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_get_mj_private_room_result_req message.
     * @function verify
     * @memberof mahjong_jxmj_get_mj_private_room_result_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_get_mj_private_room_result_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_get_mj_private_room_result_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_get_mj_private_room_result_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_get_mj_private_room_result_req} mahjong_jxmj_get_mj_private_room_result_req
     */
    mahjong_jxmj_get_mj_private_room_result_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_get_mj_private_room_result_req)
            return object;
        return new $root.mahjong_jxmj_get_mj_private_room_result_req();
    };

    /**
     * Creates a plain object from a mahjong_jxmj_get_mj_private_room_result_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_get_mj_private_room_result_req
     * @static
     * @param {mahjong_jxmj_get_mj_private_room_result_req} message mahjong_jxmj_get_mj_private_room_result_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_get_mj_private_room_result_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_jxmj_get_mj_private_room_result_req to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_get_mj_private_room_result_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_get_mj_private_room_result_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_get_mj_private_room_result_req;
})();

$root.mahjong_jxmj_private_room_result_not = (function() {

    /**
     * Properties of a mahjong_jxmj_private_room_result_not.
     * @exports Imahjong_jxmj_private_room_result_not
     * @interface Imahjong_jxmj_private_room_result_not
     * @property {Array.<Imahjong_jxmj_GameStatisc>|null} [vecGameStatiscs] mahjong_jxmj_private_room_result_not vecGameStatiscs
     */

    /**
     * Constructs a new mahjong_jxmj_private_room_result_not.
     * @exports mahjong_jxmj_private_room_result_not
     * @classdesc Represents a mahjong_jxmj_private_room_result_not.
     * @implements Imahjong_jxmj_private_room_result_not
     * @constructor
     * @param {Imahjong_jxmj_private_room_result_not=} [properties] Properties to set
     */
    function mahjong_jxmj_private_room_result_not(properties) {
        this.vecGameStatiscs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_private_room_result_not vecGameStatiscs.
     * @member {Array.<Imahjong_jxmj_GameStatisc>} vecGameStatiscs
     * @memberof mahjong_jxmj_private_room_result_not
     * @instance
     */
    mahjong_jxmj_private_room_result_not.prototype.vecGameStatiscs = $util.emptyArray;

    /**
     * Creates a new mahjong_jxmj_private_room_result_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_private_room_result_not
     * @static
     * @param {Imahjong_jxmj_private_room_result_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_private_room_result_not} mahjong_jxmj_private_room_result_not instance
     */
    mahjong_jxmj_private_room_result_not.create = function create(properties) {
        return new mahjong_jxmj_private_room_result_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_private_room_result_not message. Does not implicitly {@link mahjong_jxmj_private_room_result_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_private_room_result_not
     * @static
     * @param {Imahjong_jxmj_private_room_result_not} message mahjong_jxmj_private_room_result_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_private_room_result_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vecGameStatiscs != null && message.vecGameStatiscs.length)
            for (var i = 0; i < message.vecGameStatiscs.length; ++i)
                $root.mahjong_jxmj_GameStatisc.encode(message.vecGameStatiscs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_private_room_result_not message, length delimited. Does not implicitly {@link mahjong_jxmj_private_room_result_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_private_room_result_not
     * @static
     * @param {Imahjong_jxmj_private_room_result_not} message mahjong_jxmj_private_room_result_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_private_room_result_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_private_room_result_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_private_room_result_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_private_room_result_not} mahjong_jxmj_private_room_result_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_private_room_result_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_private_room_result_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.vecGameStatiscs && message.vecGameStatiscs.length))
                    message.vecGameStatiscs = [];
                message.vecGameStatiscs.push($root.mahjong_jxmj_GameStatisc.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_jxmj_private_room_result_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_private_room_result_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_private_room_result_not} mahjong_jxmj_private_room_result_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_private_room_result_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_private_room_result_not message.
     * @function verify
     * @memberof mahjong_jxmj_private_room_result_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_private_room_result_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.vecGameStatiscs != null && message.hasOwnProperty("vecGameStatiscs")) {
            if (!Array.isArray(message.vecGameStatiscs))
                return "vecGameStatiscs: array expected";
            for (var i = 0; i < message.vecGameStatiscs.length; ++i) {
                var error = $root.mahjong_jxmj_GameStatisc.verify(message.vecGameStatiscs[i]);
                if (error)
                    return "vecGameStatiscs." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_jxmj_private_room_result_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_private_room_result_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_private_room_result_not} mahjong_jxmj_private_room_result_not
     */
    mahjong_jxmj_private_room_result_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_private_room_result_not)
            return object;
        var message = new $root.mahjong_jxmj_private_room_result_not();
        if (object.vecGameStatiscs) {
            if (!Array.isArray(object.vecGameStatiscs))
                throw TypeError(".mahjong_jxmj_private_room_result_not.vecGameStatiscs: array expected");
            message.vecGameStatiscs = [];
            for (var i = 0; i < object.vecGameStatiscs.length; ++i) {
                if (typeof object.vecGameStatiscs[i] !== "object")
                    throw TypeError(".mahjong_jxmj_private_room_result_not.vecGameStatiscs: object expected");
                message.vecGameStatiscs[i] = $root.mahjong_jxmj_GameStatisc.fromObject(object.vecGameStatiscs[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_private_room_result_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_private_room_result_not
     * @static
     * @param {mahjong_jxmj_private_room_result_not} message mahjong_jxmj_private_room_result_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_private_room_result_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecGameStatiscs = [];
        if (message.vecGameStatiscs && message.vecGameStatiscs.length) {
            object.vecGameStatiscs = [];
            for (var j = 0; j < message.vecGameStatiscs.length; ++j)
                object.vecGameStatiscs[j] = $root.mahjong_jxmj_GameStatisc.toObject(message.vecGameStatiscs[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_jxmj_private_room_result_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_private_room_result_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_private_room_result_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_private_room_result_not;
})();

$root.mahjong_jxmj_magic_emoji_req = (function() {

    /**
     * Properties of a mahjong_jxmj_magic_emoji_req.
     * @exports Imahjong_jxmj_magic_emoji_req
     * @interface Imahjong_jxmj_magic_emoji_req
     * @property {number} cEmojiIndex mahjong_jxmj_magic_emoji_req cEmojiIndex
     * @property {number} cToChairID mahjong_jxmj_magic_emoji_req cToChairID
     */

    /**
     * Constructs a new mahjong_jxmj_magic_emoji_req.
     * @exports mahjong_jxmj_magic_emoji_req
     * @classdesc Represents a mahjong_jxmj_magic_emoji_req.
     * @implements Imahjong_jxmj_magic_emoji_req
     * @constructor
     * @param {Imahjong_jxmj_magic_emoji_req=} [properties] Properties to set
     */
    function mahjong_jxmj_magic_emoji_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_magic_emoji_req cEmojiIndex.
     * @member {number} cEmojiIndex
     * @memberof mahjong_jxmj_magic_emoji_req
     * @instance
     */
    mahjong_jxmj_magic_emoji_req.prototype.cEmojiIndex = 0;

    /**
     * mahjong_jxmj_magic_emoji_req cToChairID.
     * @member {number} cToChairID
     * @memberof mahjong_jxmj_magic_emoji_req
     * @instance
     */
    mahjong_jxmj_magic_emoji_req.prototype.cToChairID = 0;

    /**
     * Creates a new mahjong_jxmj_magic_emoji_req instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_magic_emoji_req
     * @static
     * @param {Imahjong_jxmj_magic_emoji_req=} [properties] Properties to set
     * @returns {mahjong_jxmj_magic_emoji_req} mahjong_jxmj_magic_emoji_req instance
     */
    mahjong_jxmj_magic_emoji_req.create = function create(properties) {
        return new mahjong_jxmj_magic_emoji_req(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_magic_emoji_req message. Does not implicitly {@link mahjong_jxmj_magic_emoji_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_magic_emoji_req
     * @static
     * @param {Imahjong_jxmj_magic_emoji_req} message mahjong_jxmj_magic_emoji_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_magic_emoji_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cEmojiIndex);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cToChairID);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_magic_emoji_req message, length delimited. Does not implicitly {@link mahjong_jxmj_magic_emoji_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_magic_emoji_req
     * @static
     * @param {Imahjong_jxmj_magic_emoji_req} message mahjong_jxmj_magic_emoji_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_magic_emoji_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_magic_emoji_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_magic_emoji_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_magic_emoji_req} mahjong_jxmj_magic_emoji_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_magic_emoji_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_magic_emoji_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cEmojiIndex = reader.int32();
                break;
            case 2:
                message.cToChairID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cEmojiIndex"))
            throw $util.ProtocolError("missing required 'cEmojiIndex'", { instance: message });
        if (!message.hasOwnProperty("cToChairID"))
            throw $util.ProtocolError("missing required 'cToChairID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_jxmj_magic_emoji_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_magic_emoji_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_magic_emoji_req} mahjong_jxmj_magic_emoji_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_magic_emoji_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_magic_emoji_req message.
     * @function verify
     * @memberof mahjong_jxmj_magic_emoji_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_magic_emoji_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cEmojiIndex))
            return "cEmojiIndex: integer expected";
        if (!$util.isInteger(message.cToChairID))
            return "cToChairID: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_magic_emoji_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_magic_emoji_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_magic_emoji_req} mahjong_jxmj_magic_emoji_req
     */
    mahjong_jxmj_magic_emoji_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_magic_emoji_req)
            return object;
        var message = new $root.mahjong_jxmj_magic_emoji_req();
        if (object.cEmojiIndex != null)
            message.cEmojiIndex = object.cEmojiIndex | 0;
        if (object.cToChairID != null)
            message.cToChairID = object.cToChairID | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_magic_emoji_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_magic_emoji_req
     * @static
     * @param {mahjong_jxmj_magic_emoji_req} message mahjong_jxmj_magic_emoji_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_magic_emoji_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cEmojiIndex = 0;
            object.cToChairID = 0;
        }
        if (message.cEmojiIndex != null && message.hasOwnProperty("cEmojiIndex"))
            object.cEmojiIndex = message.cEmojiIndex;
        if (message.cToChairID != null && message.hasOwnProperty("cToChairID"))
            object.cToChairID = message.cToChairID;
        return object;
    };

    /**
     * Converts this mahjong_jxmj_magic_emoji_req to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_magic_emoji_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_magic_emoji_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_magic_emoji_req;
})();

$root.mahjong_bc_specify_item_update_not = (function() {

    /**
     * Properties of a mahjong_bc_specify_item_update_not.
     * @exports Imahjong_bc_specify_item_update_not
     * @interface Imahjong_bc_specify_item_update_not
     * @property {number|Long} plyGuid mahjong_bc_specify_item_update_not plyGuid
     * @property {number} index mahjong_bc_specify_item_update_not index
     * @property {number} num mahjong_bc_specify_item_update_not num
     */

    /**
     * Constructs a new mahjong_bc_specify_item_update_not.
     * @exports mahjong_bc_specify_item_update_not
     * @classdesc Represents a mahjong_bc_specify_item_update_not.
     * @implements Imahjong_bc_specify_item_update_not
     * @constructor
     * @param {Imahjong_bc_specify_item_update_not=} [properties] Properties to set
     */
    function mahjong_bc_specify_item_update_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_bc_specify_item_update_not plyGuid.
     * @member {number|Long} plyGuid
     * @memberof mahjong_bc_specify_item_update_not
     * @instance
     */
    mahjong_bc_specify_item_update_not.prototype.plyGuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * mahjong_bc_specify_item_update_not index.
     * @member {number} index
     * @memberof mahjong_bc_specify_item_update_not
     * @instance
     */
    mahjong_bc_specify_item_update_not.prototype.index = 0;

    /**
     * mahjong_bc_specify_item_update_not num.
     * @member {number} num
     * @memberof mahjong_bc_specify_item_update_not
     * @instance
     */
    mahjong_bc_specify_item_update_not.prototype.num = 0;

    /**
     * Creates a new mahjong_bc_specify_item_update_not instance using the specified properties.
     * @function create
     * @memberof mahjong_bc_specify_item_update_not
     * @static
     * @param {Imahjong_bc_specify_item_update_not=} [properties] Properties to set
     * @returns {mahjong_bc_specify_item_update_not} mahjong_bc_specify_item_update_not instance
     */
    mahjong_bc_specify_item_update_not.create = function create(properties) {
        return new mahjong_bc_specify_item_update_not(properties);
    };

    /**
     * Encodes the specified mahjong_bc_specify_item_update_not message. Does not implicitly {@link mahjong_bc_specify_item_update_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_bc_specify_item_update_not
     * @static
     * @param {Imahjong_bc_specify_item_update_not} message mahjong_bc_specify_item_update_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_specify_item_update_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.plyGuid);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.index);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.num);
        return writer;
    };

    /**
     * Encodes the specified mahjong_bc_specify_item_update_not message, length delimited. Does not implicitly {@link mahjong_bc_specify_item_update_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_bc_specify_item_update_not
     * @static
     * @param {Imahjong_bc_specify_item_update_not} message mahjong_bc_specify_item_update_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_specify_item_update_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_bc_specify_item_update_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_bc_specify_item_update_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_bc_specify_item_update_not} mahjong_bc_specify_item_update_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_specify_item_update_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_bc_specify_item_update_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.plyGuid = reader.int64();
                break;
            case 2:
                message.index = reader.int32();
                break;
            case 3:
                message.num = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("plyGuid"))
            throw $util.ProtocolError("missing required 'plyGuid'", { instance: message });
        if (!message.hasOwnProperty("index"))
            throw $util.ProtocolError("missing required 'index'", { instance: message });
        if (!message.hasOwnProperty("num"))
            throw $util.ProtocolError("missing required 'num'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_bc_specify_item_update_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_bc_specify_item_update_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_bc_specify_item_update_not} mahjong_bc_specify_item_update_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_specify_item_update_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_bc_specify_item_update_not message.
     * @function verify
     * @memberof mahjong_bc_specify_item_update_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_bc_specify_item_update_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.plyGuid) && !(message.plyGuid && $util.isInteger(message.plyGuid.low) && $util.isInteger(message.plyGuid.high)))
            return "plyGuid: integer|Long expected";
        if (!$util.isInteger(message.index))
            return "index: integer expected";
        if (!$util.isInteger(message.num))
            return "num: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_bc_specify_item_update_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_bc_specify_item_update_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_bc_specify_item_update_not} mahjong_bc_specify_item_update_not
     */
    mahjong_bc_specify_item_update_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_bc_specify_item_update_not)
            return object;
        var message = new $root.mahjong_bc_specify_item_update_not();
        if (object.plyGuid != null)
            if ($util.Long)
                (message.plyGuid = $util.Long.fromValue(object.plyGuid)).unsigned = false;
            else if (typeof object.plyGuid === "string")
                message.plyGuid = parseInt(object.plyGuid, 10);
            else if (typeof object.plyGuid === "number")
                message.plyGuid = object.plyGuid;
            else if (typeof object.plyGuid === "object")
                message.plyGuid = new $util.LongBits(object.plyGuid.low >>> 0, object.plyGuid.high >>> 0).toNumber();
        if (object.index != null)
            message.index = object.index | 0;
        if (object.num != null)
            message.num = object.num | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_bc_specify_item_update_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_bc_specify_item_update_not
     * @static
     * @param {mahjong_bc_specify_item_update_not} message mahjong_bc_specify_item_update_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_bc_specify_item_update_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.plyGuid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.plyGuid = options.longs === String ? "0" : 0;
            object.index = 0;
            object.num = 0;
        }
        if (message.plyGuid != null && message.hasOwnProperty("plyGuid"))
            if (typeof message.plyGuid === "number")
                object.plyGuid = options.longs === String ? String(message.plyGuid) : message.plyGuid;
            else
                object.plyGuid = options.longs === String ? $util.Long.prototype.toString.call(message.plyGuid) : options.longs === Number ? new $util.LongBits(message.plyGuid.low >>> 0, message.plyGuid.high >>> 0).toNumber() : message.plyGuid;
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.num != null && message.hasOwnProperty("num"))
            object.num = message.num;
        return object;
    };

    /**
     * Converts this mahjong_bc_specify_item_update_not to JSON.
     * @function toJSON
     * @memberof mahjong_bc_specify_item_update_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_bc_specify_item_update_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_bc_specify_item_update_not;
})();

$root.mahjong_jxmj_hu_card_data_not = (function() {

    /**
     * Properties of a mahjong_jxmj_hu_card_data_not.
     * @exports Imahjong_jxmj_hu_card_data_not
     * @interface Imahjong_jxmj_hu_card_data_not
     * @property {Array.<number>|null} [vecHuCards] mahjong_jxmj_hu_card_data_not vecHuCards
     * @property {Array.<number>|null} [vecHuCardsLeftNum] mahjong_jxmj_hu_card_data_not vecHuCardsLeftNum
     * @property {Array.<number>|null} [vecHuCardsFan] mahjong_jxmj_hu_card_data_not vecHuCardsFan
     */

    /**
     * Constructs a new mahjong_jxmj_hu_card_data_not.
     * @exports mahjong_jxmj_hu_card_data_not
     * @classdesc Represents a mahjong_jxmj_hu_card_data_not.
     * @implements Imahjong_jxmj_hu_card_data_not
     * @constructor
     * @param {Imahjong_jxmj_hu_card_data_not=} [properties] Properties to set
     */
    function mahjong_jxmj_hu_card_data_not(properties) {
        this.vecHuCards = [];
        this.vecHuCardsLeftNum = [];
        this.vecHuCardsFan = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_hu_card_data_not vecHuCards.
     * @member {Array.<number>} vecHuCards
     * @memberof mahjong_jxmj_hu_card_data_not
     * @instance
     */
    mahjong_jxmj_hu_card_data_not.prototype.vecHuCards = $util.emptyArray;

    /**
     * mahjong_jxmj_hu_card_data_not vecHuCardsLeftNum.
     * @member {Array.<number>} vecHuCardsLeftNum
     * @memberof mahjong_jxmj_hu_card_data_not
     * @instance
     */
    mahjong_jxmj_hu_card_data_not.prototype.vecHuCardsLeftNum = $util.emptyArray;

    /**
     * mahjong_jxmj_hu_card_data_not vecHuCardsFan.
     * @member {Array.<number>} vecHuCardsFan
     * @memberof mahjong_jxmj_hu_card_data_not
     * @instance
     */
    mahjong_jxmj_hu_card_data_not.prototype.vecHuCardsFan = $util.emptyArray;

    /**
     * Creates a new mahjong_jxmj_hu_card_data_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_hu_card_data_not
     * @static
     * @param {Imahjong_jxmj_hu_card_data_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_hu_card_data_not} mahjong_jxmj_hu_card_data_not instance
     */
    mahjong_jxmj_hu_card_data_not.create = function create(properties) {
        return new mahjong_jxmj_hu_card_data_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_hu_card_data_not message. Does not implicitly {@link mahjong_jxmj_hu_card_data_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_hu_card_data_not
     * @static
     * @param {Imahjong_jxmj_hu_card_data_not} message mahjong_jxmj_hu_card_data_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_hu_card_data_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vecHuCards != null && message.vecHuCards.length)
            for (var i = 0; i < message.vecHuCards.length; ++i)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.vecHuCards[i]);
        if (message.vecHuCardsLeftNum != null && message.vecHuCardsLeftNum.length)
            for (var i = 0; i < message.vecHuCardsLeftNum.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.vecHuCardsLeftNum[i]);
        if (message.vecHuCardsFan != null && message.vecHuCardsFan.length)
            for (var i = 0; i < message.vecHuCardsFan.length; ++i)
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.vecHuCardsFan[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_hu_card_data_not message, length delimited. Does not implicitly {@link mahjong_jxmj_hu_card_data_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_hu_card_data_not
     * @static
     * @param {Imahjong_jxmj_hu_card_data_not} message mahjong_jxmj_hu_card_data_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_hu_card_data_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_hu_card_data_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_hu_card_data_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_hu_card_data_not} mahjong_jxmj_hu_card_data_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_hu_card_data_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_hu_card_data_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.vecHuCards && message.vecHuCards.length))
                    message.vecHuCards = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecHuCards.push(reader.int32());
                } else
                    message.vecHuCards.push(reader.int32());
                break;
            case 2:
                if (!(message.vecHuCardsLeftNum && message.vecHuCardsLeftNum.length))
                    message.vecHuCardsLeftNum = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecHuCardsLeftNum.push(reader.int32());
                } else
                    message.vecHuCardsLeftNum.push(reader.int32());
                break;
            case 3:
                if (!(message.vecHuCardsFan && message.vecHuCardsFan.length))
                    message.vecHuCardsFan = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecHuCardsFan.push(reader.int32());
                } else
                    message.vecHuCardsFan.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_jxmj_hu_card_data_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_hu_card_data_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_hu_card_data_not} mahjong_jxmj_hu_card_data_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_hu_card_data_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_hu_card_data_not message.
     * @function verify
     * @memberof mahjong_jxmj_hu_card_data_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_hu_card_data_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.vecHuCards != null && message.hasOwnProperty("vecHuCards")) {
            if (!Array.isArray(message.vecHuCards))
                return "vecHuCards: array expected";
            for (var i = 0; i < message.vecHuCards.length; ++i)
                if (!$util.isInteger(message.vecHuCards[i]))
                    return "vecHuCards: integer[] expected";
        }
        if (message.vecHuCardsLeftNum != null && message.hasOwnProperty("vecHuCardsLeftNum")) {
            if (!Array.isArray(message.vecHuCardsLeftNum))
                return "vecHuCardsLeftNum: array expected";
            for (var i = 0; i < message.vecHuCardsLeftNum.length; ++i)
                if (!$util.isInteger(message.vecHuCardsLeftNum[i]))
                    return "vecHuCardsLeftNum: integer[] expected";
        }
        if (message.vecHuCardsFan != null && message.hasOwnProperty("vecHuCardsFan")) {
            if (!Array.isArray(message.vecHuCardsFan))
                return "vecHuCardsFan: array expected";
            for (var i = 0; i < message.vecHuCardsFan.length; ++i)
                if (!$util.isInteger(message.vecHuCardsFan[i]))
                    return "vecHuCardsFan: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_jxmj_hu_card_data_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_hu_card_data_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_hu_card_data_not} mahjong_jxmj_hu_card_data_not
     */
    mahjong_jxmj_hu_card_data_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_hu_card_data_not)
            return object;
        var message = new $root.mahjong_jxmj_hu_card_data_not();
        if (object.vecHuCards) {
            if (!Array.isArray(object.vecHuCards))
                throw TypeError(".mahjong_jxmj_hu_card_data_not.vecHuCards: array expected");
            message.vecHuCards = [];
            for (var i = 0; i < object.vecHuCards.length; ++i)
                message.vecHuCards[i] = object.vecHuCards[i] | 0;
        }
        if (object.vecHuCardsLeftNum) {
            if (!Array.isArray(object.vecHuCardsLeftNum))
                throw TypeError(".mahjong_jxmj_hu_card_data_not.vecHuCardsLeftNum: array expected");
            message.vecHuCardsLeftNum = [];
            for (var i = 0; i < object.vecHuCardsLeftNum.length; ++i)
                message.vecHuCardsLeftNum[i] = object.vecHuCardsLeftNum[i] | 0;
        }
        if (object.vecHuCardsFan) {
            if (!Array.isArray(object.vecHuCardsFan))
                throw TypeError(".mahjong_jxmj_hu_card_data_not.vecHuCardsFan: array expected");
            message.vecHuCardsFan = [];
            for (var i = 0; i < object.vecHuCardsFan.length; ++i)
                message.vecHuCardsFan[i] = object.vecHuCardsFan[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_hu_card_data_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_hu_card_data_not
     * @static
     * @param {mahjong_jxmj_hu_card_data_not} message mahjong_jxmj_hu_card_data_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_hu_card_data_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecHuCards = [];
            object.vecHuCardsLeftNum = [];
            object.vecHuCardsFan = [];
        }
        if (message.vecHuCards && message.vecHuCards.length) {
            object.vecHuCards = [];
            for (var j = 0; j < message.vecHuCards.length; ++j)
                object.vecHuCards[j] = message.vecHuCards[j];
        }
        if (message.vecHuCardsLeftNum && message.vecHuCardsLeftNum.length) {
            object.vecHuCardsLeftNum = [];
            for (var j = 0; j < message.vecHuCardsLeftNum.length; ++j)
                object.vecHuCardsLeftNum[j] = message.vecHuCardsLeftNum[j];
        }
        if (message.vecHuCardsFan && message.vecHuCardsFan.length) {
            object.vecHuCardsFan = [];
            for (var j = 0; j < message.vecHuCardsFan.length; ++j)
                object.vecHuCardsFan[j] = message.vecHuCardsFan[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_jxmj_hu_card_data_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_hu_card_data_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_hu_card_data_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_hu_card_data_not;
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

$root.mahjong_cb_ready_req = (function() {

    /**
     * Properties of a mahjong_cb_ready_req.
     * @exports Imahjong_cb_ready_req
     * @interface Imahjong_cb_ready_req
     */

    /**
     * Constructs a new mahjong_cb_ready_req.
     * @exports mahjong_cb_ready_req
     * @classdesc Represents a mahjong_cb_ready_req.
     * @implements Imahjong_cb_ready_req
     * @constructor
     * @param {Imahjong_cb_ready_req=} [properties] Properties to set
     */
    function mahjong_cb_ready_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_cb_ready_req instance using the specified properties.
     * @function create
     * @memberof mahjong_cb_ready_req
     * @static
     * @param {Imahjong_cb_ready_req=} [properties] Properties to set
     * @returns {mahjong_cb_ready_req} mahjong_cb_ready_req instance
     */
    mahjong_cb_ready_req.create = function create(properties) {
        return new mahjong_cb_ready_req(properties);
    };

    /**
     * Encodes the specified mahjong_cb_ready_req message. Does not implicitly {@link mahjong_cb_ready_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_cb_ready_req
     * @static
     * @param {Imahjong_cb_ready_req} message mahjong_cb_ready_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_cb_ready_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_cb_ready_req message, length delimited. Does not implicitly {@link mahjong_cb_ready_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_cb_ready_req
     * @static
     * @param {Imahjong_cb_ready_req} message mahjong_cb_ready_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_cb_ready_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_cb_ready_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_cb_ready_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_cb_ready_req} mahjong_cb_ready_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_cb_ready_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_cb_ready_req();
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
     * Decodes a mahjong_cb_ready_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_cb_ready_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_cb_ready_req} mahjong_cb_ready_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_cb_ready_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_cb_ready_req message.
     * @function verify
     * @memberof mahjong_cb_ready_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_cb_ready_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_cb_ready_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_cb_ready_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_cb_ready_req} mahjong_cb_ready_req
     */
    mahjong_cb_ready_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_cb_ready_req)
            return object;
        return new $root.mahjong_cb_ready_req();
    };

    /**
     * Creates a plain object from a mahjong_cb_ready_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_cb_ready_req
     * @static
     * @param {mahjong_cb_ready_req} message mahjong_cb_ready_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_cb_ready_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_cb_ready_req to JSON.
     * @function toJSON
     * @memberof mahjong_cb_ready_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_cb_ready_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_cb_ready_req;
})();

$root.mahjong_gc_update_player_tokenmoney_not = (function() {

    /**
     * Properties of a mahjong_gc_update_player_tokenmoney_not.
     * @exports Imahjong_gc_update_player_tokenmoney_not
     * @interface Imahjong_gc_update_player_tokenmoney_not
     * @property {number} plyChairid mahjong_gc_update_player_tokenmoney_not plyChairid
     * @property {Array.<Imahjong_jxmj_player_itemInfo>|null} [itemInfo] mahjong_gc_update_player_tokenmoney_not itemInfo
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
     * @member {Array.<Imahjong_jxmj_player_itemInfo>} itemInfo
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
                $root.mahjong_jxmj_player_itemInfo.encode(message.itemInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                message.itemInfo.push($root.mahjong_jxmj_player_itemInfo.decode(reader, reader.uint32()));
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
                var error = $root.mahjong_jxmj_player_itemInfo.verify(message.itemInfo[i]);
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
                message.itemInfo[i] = $root.mahjong_jxmj_player_itemInfo.fromObject(object.itemInfo[i]);
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
                object.itemInfo[j] = $root.mahjong_jxmj_player_itemInfo.toObject(message.itemInfo[j], options);
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

$root.mahjong_jxmj_gameresult_not = (function() {

    /**
     * Properties of a mahjong_jxmj_gameresult_not.
     * @exports Imahjong_jxmj_gameresult_not
     * @interface Imahjong_jxmj_gameresult_not
     * @property {Array.<Imahjong_jxmj_st_gameresult>|null} [vecGameResult] mahjong_jxmj_gameresult_not vecGameResult
     * @property {number} isMobao mahjong_jxmj_gameresult_not isMobao
     */

    /**
     * Constructs a new mahjong_jxmj_gameresult_not.
     * @exports mahjong_jxmj_gameresult_not
     * @classdesc Represents a mahjong_jxmj_gameresult_not.
     * @implements Imahjong_jxmj_gameresult_not
     * @constructor
     * @param {Imahjong_jxmj_gameresult_not=} [properties] Properties to set
     */
    function mahjong_jxmj_gameresult_not(properties) {
        this.vecGameResult = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_gameresult_not vecGameResult.
     * @member {Array.<Imahjong_jxmj_st_gameresult>} vecGameResult
     * @memberof mahjong_jxmj_gameresult_not
     * @instance
     */
    mahjong_jxmj_gameresult_not.prototype.vecGameResult = $util.emptyArray;

    /**
     * mahjong_jxmj_gameresult_not isMobao.
     * @member {number} isMobao
     * @memberof mahjong_jxmj_gameresult_not
     * @instance
     */
    mahjong_jxmj_gameresult_not.prototype.isMobao = 0;

    /**
     * Creates a new mahjong_jxmj_gameresult_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_gameresult_not
     * @static
     * @param {Imahjong_jxmj_gameresult_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_gameresult_not} mahjong_jxmj_gameresult_not instance
     */
    mahjong_jxmj_gameresult_not.create = function create(properties) {
        return new mahjong_jxmj_gameresult_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_gameresult_not message. Does not implicitly {@link mahjong_jxmj_gameresult_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_gameresult_not
     * @static
     * @param {Imahjong_jxmj_gameresult_not} message mahjong_jxmj_gameresult_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_gameresult_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vecGameResult != null && message.vecGameResult.length)
            for (var i = 0; i < message.vecGameResult.length; ++i)
                $root.mahjong_jxmj_st_gameresult.encode(message.vecGameResult[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.isMobao);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_gameresult_not message, length delimited. Does not implicitly {@link mahjong_jxmj_gameresult_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_gameresult_not
     * @static
     * @param {Imahjong_jxmj_gameresult_not} message mahjong_jxmj_gameresult_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_gameresult_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_gameresult_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_gameresult_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_gameresult_not} mahjong_jxmj_gameresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_gameresult_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_gameresult_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.vecGameResult && message.vecGameResult.length))
                    message.vecGameResult = [];
                message.vecGameResult.push($root.mahjong_jxmj_st_gameresult.decode(reader, reader.uint32()));
                break;
            case 2:
                message.isMobao = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("isMobao"))
            throw $util.ProtocolError("missing required 'isMobao'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_jxmj_gameresult_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_gameresult_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_gameresult_not} mahjong_jxmj_gameresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_gameresult_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_gameresult_not message.
     * @function verify
     * @memberof mahjong_jxmj_gameresult_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_gameresult_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.vecGameResult != null && message.hasOwnProperty("vecGameResult")) {
            if (!Array.isArray(message.vecGameResult))
                return "vecGameResult: array expected";
            for (var i = 0; i < message.vecGameResult.length; ++i) {
                var error = $root.mahjong_jxmj_st_gameresult.verify(message.vecGameResult[i]);
                if (error)
                    return "vecGameResult." + error;
            }
        }
        if (!$util.isInteger(message.isMobao))
            return "isMobao: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_gameresult_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_gameresult_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_gameresult_not} mahjong_jxmj_gameresult_not
     */
    mahjong_jxmj_gameresult_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_gameresult_not)
            return object;
        var message = new $root.mahjong_jxmj_gameresult_not();
        if (object.vecGameResult) {
            if (!Array.isArray(object.vecGameResult))
                throw TypeError(".mahjong_jxmj_gameresult_not.vecGameResult: array expected");
            message.vecGameResult = [];
            for (var i = 0; i < object.vecGameResult.length; ++i) {
                if (typeof object.vecGameResult[i] !== "object")
                    throw TypeError(".mahjong_jxmj_gameresult_not.vecGameResult: object expected");
                message.vecGameResult[i] = $root.mahjong_jxmj_st_gameresult.fromObject(object.vecGameResult[i]);
            }
        }
        if (object.isMobao != null)
            message.isMobao = object.isMobao | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_gameresult_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_gameresult_not
     * @static
     * @param {mahjong_jxmj_gameresult_not} message mahjong_jxmj_gameresult_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_gameresult_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecGameResult = [];
        if (options.defaults)
            object.isMobao = 0;
        if (message.vecGameResult && message.vecGameResult.length) {
            object.vecGameResult = [];
            for (var j = 0; j < message.vecGameResult.length; ++j)
                object.vecGameResult[j] = $root.mahjong_jxmj_st_gameresult.toObject(message.vecGameResult[j], options);
        }
        if (message.isMobao != null && message.hasOwnProperty("isMobao"))
            object.isMobao = message.isMobao;
        return object;
    };

    /**
     * Converts this mahjong_jxmj_gameresult_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_gameresult_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_gameresult_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_gameresult_not;
})();

$root.mahjong_jxmj_player_itemInfo = (function() {

    /**
     * Properties of a mahjong_jxmj_player_itemInfo.
     * @exports Imahjong_jxmj_player_itemInfo
     * @interface Imahjong_jxmj_player_itemInfo
     * @property {number} nItemIndex mahjong_jxmj_player_itemInfo nItemIndex
     * @property {number} nItemNum mahjong_jxmj_player_itemInfo nItemNum
     */

    /**
     * Constructs a new mahjong_jxmj_player_itemInfo.
     * @exports mahjong_jxmj_player_itemInfo
     * @classdesc Represents a mahjong_jxmj_player_itemInfo.
     * @implements Imahjong_jxmj_player_itemInfo
     * @constructor
     * @param {Imahjong_jxmj_player_itemInfo=} [properties] Properties to set
     */
    function mahjong_jxmj_player_itemInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_player_itemInfo nItemIndex.
     * @member {number} nItemIndex
     * @memberof mahjong_jxmj_player_itemInfo
     * @instance
     */
    mahjong_jxmj_player_itemInfo.prototype.nItemIndex = 0;

    /**
     * mahjong_jxmj_player_itemInfo nItemNum.
     * @member {number} nItemNum
     * @memberof mahjong_jxmj_player_itemInfo
     * @instance
     */
    mahjong_jxmj_player_itemInfo.prototype.nItemNum = 0;

    /**
     * Creates a new mahjong_jxmj_player_itemInfo instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_player_itemInfo
     * @static
     * @param {Imahjong_jxmj_player_itemInfo=} [properties] Properties to set
     * @returns {mahjong_jxmj_player_itemInfo} mahjong_jxmj_player_itemInfo instance
     */
    mahjong_jxmj_player_itemInfo.create = function create(properties) {
        return new mahjong_jxmj_player_itemInfo(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_player_itemInfo message. Does not implicitly {@link mahjong_jxmj_player_itemInfo.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_player_itemInfo
     * @static
     * @param {Imahjong_jxmj_player_itemInfo} message mahjong_jxmj_player_itemInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_player_itemInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nItemIndex);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nItemNum);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_player_itemInfo message, length delimited. Does not implicitly {@link mahjong_jxmj_player_itemInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_player_itemInfo
     * @static
     * @param {Imahjong_jxmj_player_itemInfo} message mahjong_jxmj_player_itemInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_player_itemInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_player_itemInfo message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_player_itemInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_player_itemInfo} mahjong_jxmj_player_itemInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_player_itemInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_player_itemInfo();
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
     * Decodes a mahjong_jxmj_player_itemInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_player_itemInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_player_itemInfo} mahjong_jxmj_player_itemInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_player_itemInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_player_itemInfo message.
     * @function verify
     * @memberof mahjong_jxmj_player_itemInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_player_itemInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nItemIndex))
            return "nItemIndex: integer expected";
        if (!$util.isInteger(message.nItemNum))
            return "nItemNum: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_player_itemInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_player_itemInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_player_itemInfo} mahjong_jxmj_player_itemInfo
     */
    mahjong_jxmj_player_itemInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_player_itemInfo)
            return object;
        var message = new $root.mahjong_jxmj_player_itemInfo();
        if (object.nItemIndex != null)
            message.nItemIndex = object.nItemIndex | 0;
        if (object.nItemNum != null)
            message.nItemNum = object.nItemNum | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_player_itemInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_player_itemInfo
     * @static
     * @param {mahjong_jxmj_player_itemInfo} message mahjong_jxmj_player_itemInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_player_itemInfo.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_player_itemInfo to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_player_itemInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_player_itemInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_player_itemInfo;
})();

$root.mahjong_bc_ready_ack = (function() {

    /**
     * Properties of a mahjong_bc_ready_ack.
     * @exports Imahjong_bc_ready_ack
     * @interface Imahjong_bc_ready_ack
     * @property {number} ret mahjong_bc_ready_ack ret
     */

    /**
     * Constructs a new mahjong_bc_ready_ack.
     * @exports mahjong_bc_ready_ack
     * @classdesc Represents a mahjong_bc_ready_ack.
     * @implements Imahjong_bc_ready_ack
     * @constructor
     * @param {Imahjong_bc_ready_ack=} [properties] Properties to set
     */
    function mahjong_bc_ready_ack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_bc_ready_ack ret.
     * @member {number} ret
     * @memberof mahjong_bc_ready_ack
     * @instance
     */
    mahjong_bc_ready_ack.prototype.ret = 0;

    /**
     * Creates a new mahjong_bc_ready_ack instance using the specified properties.
     * @function create
     * @memberof mahjong_bc_ready_ack
     * @static
     * @param {Imahjong_bc_ready_ack=} [properties] Properties to set
     * @returns {mahjong_bc_ready_ack} mahjong_bc_ready_ack instance
     */
    mahjong_bc_ready_ack.create = function create(properties) {
        return new mahjong_bc_ready_ack(properties);
    };

    /**
     * Encodes the specified mahjong_bc_ready_ack message. Does not implicitly {@link mahjong_bc_ready_ack.verify|verify} messages.
     * @function encode
     * @memberof mahjong_bc_ready_ack
     * @static
     * @param {Imahjong_bc_ready_ack} message mahjong_bc_ready_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_ready_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
        return writer;
    };

    /**
     * Encodes the specified mahjong_bc_ready_ack message, length delimited. Does not implicitly {@link mahjong_bc_ready_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_bc_ready_ack
     * @static
     * @param {Imahjong_bc_ready_ack} message mahjong_bc_ready_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_ready_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_bc_ready_ack message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_bc_ready_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_bc_ready_ack} mahjong_bc_ready_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_ready_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_bc_ready_ack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ret = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("ret"))
            throw $util.ProtocolError("missing required 'ret'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_bc_ready_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_bc_ready_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_bc_ready_ack} mahjong_bc_ready_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_ready_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_bc_ready_ack message.
     * @function verify
     * @memberof mahjong_bc_ready_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_bc_ready_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.ret))
            return "ret: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_bc_ready_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_bc_ready_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_bc_ready_ack} mahjong_bc_ready_ack
     */
    mahjong_bc_ready_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_bc_ready_ack)
            return object;
        var message = new $root.mahjong_bc_ready_ack();
        if (object.ret != null)
            message.ret = object.ret | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_bc_ready_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_bc_ready_ack
     * @static
     * @param {mahjong_bc_ready_ack} message mahjong_bc_ready_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_bc_ready_ack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.ret = 0;
        if (message.ret != null && message.hasOwnProperty("ret"))
            object.ret = message.ret;
        return object;
    };

    /**
     * Converts this mahjong_bc_ready_ack to JSON.
     * @function toJSON
     * @memberof mahjong_bc_ready_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_bc_ready_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_bc_ready_ack;
})();

$root.mahjong_jxmj_completedata_req = (function() {

    /**
     * Properties of a mahjong_jxmj_completedata_req.
     * @exports Imahjong_jxmj_completedata_req
     * @interface Imahjong_jxmj_completedata_req
     */

    /**
     * Constructs a new mahjong_jxmj_completedata_req.
     * @exports mahjong_jxmj_completedata_req
     * @classdesc Represents a mahjong_jxmj_completedata_req.
     * @implements Imahjong_jxmj_completedata_req
     * @constructor
     * @param {Imahjong_jxmj_completedata_req=} [properties] Properties to set
     */
    function mahjong_jxmj_completedata_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_jxmj_completedata_req instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_completedata_req
     * @static
     * @param {Imahjong_jxmj_completedata_req=} [properties] Properties to set
     * @returns {mahjong_jxmj_completedata_req} mahjong_jxmj_completedata_req instance
     */
    mahjong_jxmj_completedata_req.create = function create(properties) {
        return new mahjong_jxmj_completedata_req(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_completedata_req message. Does not implicitly {@link mahjong_jxmj_completedata_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_completedata_req
     * @static
     * @param {Imahjong_jxmj_completedata_req} message mahjong_jxmj_completedata_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_completedata_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_completedata_req message, length delimited. Does not implicitly {@link mahjong_jxmj_completedata_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_completedata_req
     * @static
     * @param {Imahjong_jxmj_completedata_req} message mahjong_jxmj_completedata_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_completedata_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_completedata_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_completedata_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_completedata_req} mahjong_jxmj_completedata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_completedata_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_completedata_req();
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
     * Decodes a mahjong_jxmj_completedata_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_completedata_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_completedata_req} mahjong_jxmj_completedata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_completedata_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_completedata_req message.
     * @function verify
     * @memberof mahjong_jxmj_completedata_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_completedata_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_completedata_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_completedata_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_completedata_req} mahjong_jxmj_completedata_req
     */
    mahjong_jxmj_completedata_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_completedata_req)
            return object;
        return new $root.mahjong_jxmj_completedata_req();
    };

    /**
     * Creates a plain object from a mahjong_jxmj_completedata_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_completedata_req
     * @static
     * @param {mahjong_jxmj_completedata_req} message mahjong_jxmj_completedata_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_completedata_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_jxmj_completedata_req to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_completedata_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_completedata_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_completedata_req;
})();

$root.mahjong_jxmj_Svr_Auto_Not = (function() {

    /**
     * Properties of a mahjong_jxmj_Svr_Auto_Not.
     * @exports Imahjong_jxmj_Svr_Auto_Not
     * @interface Imahjong_jxmj_Svr_Auto_Not
     * @property {number} cChairID mahjong_jxmj_Svr_Auto_Not cChairID
     * @property {number} cAuto mahjong_jxmj_Svr_Auto_Not cAuto
     * @property {number} iAutoType mahjong_jxmj_Svr_Auto_Not iAutoType
     */

    /**
     * Constructs a new mahjong_jxmj_Svr_Auto_Not.
     * @exports mahjong_jxmj_Svr_Auto_Not
     * @classdesc Represents a mahjong_jxmj_Svr_Auto_Not.
     * @implements Imahjong_jxmj_Svr_Auto_Not
     * @constructor
     * @param {Imahjong_jxmj_Svr_Auto_Not=} [properties] Properties to set
     */
    function mahjong_jxmj_Svr_Auto_Not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_Svr_Auto_Not cChairID.
     * @member {number} cChairID
     * @memberof mahjong_jxmj_Svr_Auto_Not
     * @instance
     */
    mahjong_jxmj_Svr_Auto_Not.prototype.cChairID = 0;

    /**
     * mahjong_jxmj_Svr_Auto_Not cAuto.
     * @member {number} cAuto
     * @memberof mahjong_jxmj_Svr_Auto_Not
     * @instance
     */
    mahjong_jxmj_Svr_Auto_Not.prototype.cAuto = 0;

    /**
     * mahjong_jxmj_Svr_Auto_Not iAutoType.
     * @member {number} iAutoType
     * @memberof mahjong_jxmj_Svr_Auto_Not
     * @instance
     */
    mahjong_jxmj_Svr_Auto_Not.prototype.iAutoType = 0;

    /**
     * Creates a new mahjong_jxmj_Svr_Auto_Not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_Svr_Auto_Not
     * @static
     * @param {Imahjong_jxmj_Svr_Auto_Not=} [properties] Properties to set
     * @returns {mahjong_jxmj_Svr_Auto_Not} mahjong_jxmj_Svr_Auto_Not instance
     */
    mahjong_jxmj_Svr_Auto_Not.create = function create(properties) {
        return new mahjong_jxmj_Svr_Auto_Not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_Svr_Auto_Not message. Does not implicitly {@link mahjong_jxmj_Svr_Auto_Not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_Svr_Auto_Not
     * @static
     * @param {Imahjong_jxmj_Svr_Auto_Not} message mahjong_jxmj_Svr_Auto_Not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_Svr_Auto_Not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cAuto);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.iAutoType);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_Svr_Auto_Not message, length delimited. Does not implicitly {@link mahjong_jxmj_Svr_Auto_Not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_Svr_Auto_Not
     * @static
     * @param {Imahjong_jxmj_Svr_Auto_Not} message mahjong_jxmj_Svr_Auto_Not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_Svr_Auto_Not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_Svr_Auto_Not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_Svr_Auto_Not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_Svr_Auto_Not} mahjong_jxmj_Svr_Auto_Not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_Svr_Auto_Not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_Svr_Auto_Not();
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
     * Decodes a mahjong_jxmj_Svr_Auto_Not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_Svr_Auto_Not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_Svr_Auto_Not} mahjong_jxmj_Svr_Auto_Not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_Svr_Auto_Not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_Svr_Auto_Not message.
     * @function verify
     * @memberof mahjong_jxmj_Svr_Auto_Not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_Svr_Auto_Not.verify = function verify(message) {
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
     * Creates a mahjong_jxmj_Svr_Auto_Not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_Svr_Auto_Not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_Svr_Auto_Not} mahjong_jxmj_Svr_Auto_Not
     */
    mahjong_jxmj_Svr_Auto_Not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_Svr_Auto_Not)
            return object;
        var message = new $root.mahjong_jxmj_Svr_Auto_Not();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.cAuto != null)
            message.cAuto = object.cAuto | 0;
        if (object.iAutoType != null)
            message.iAutoType = object.iAutoType | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_Svr_Auto_Not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_Svr_Auto_Not
     * @static
     * @param {mahjong_jxmj_Svr_Auto_Not} message mahjong_jxmj_Svr_Auto_Not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_Svr_Auto_Not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_Svr_Auto_Not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_Svr_Auto_Not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_Svr_Auto_Not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_Svr_Auto_Not;
})();

$root.mahjong_jxmj_svr_dizhu_not = (function() {

    /**
     * Properties of a mahjong_jxmj_svr_dizhu_not.
     * @exports Imahjong_jxmj_svr_dizhu_not
     * @interface Imahjong_jxmj_svr_dizhu_not
     * @property {number} nDiZhu mahjong_jxmj_svr_dizhu_not nDiZhu
     */

    /**
     * Constructs a new mahjong_jxmj_svr_dizhu_not.
     * @exports mahjong_jxmj_svr_dizhu_not
     * @classdesc Represents a mahjong_jxmj_svr_dizhu_not.
     * @implements Imahjong_jxmj_svr_dizhu_not
     * @constructor
     * @param {Imahjong_jxmj_svr_dizhu_not=} [properties] Properties to set
     */
    function mahjong_jxmj_svr_dizhu_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_svr_dizhu_not nDiZhu.
     * @member {number} nDiZhu
     * @memberof mahjong_jxmj_svr_dizhu_not
     * @instance
     */
    mahjong_jxmj_svr_dizhu_not.prototype.nDiZhu = 0;

    /**
     * Creates a new mahjong_jxmj_svr_dizhu_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_svr_dizhu_not
     * @static
     * @param {Imahjong_jxmj_svr_dizhu_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_svr_dizhu_not} mahjong_jxmj_svr_dizhu_not instance
     */
    mahjong_jxmj_svr_dizhu_not.create = function create(properties) {
        return new mahjong_jxmj_svr_dizhu_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_svr_dizhu_not message. Does not implicitly {@link mahjong_jxmj_svr_dizhu_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_svr_dizhu_not
     * @static
     * @param {Imahjong_jxmj_svr_dizhu_not} message mahjong_jxmj_svr_dizhu_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_svr_dizhu_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nDiZhu);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_svr_dizhu_not message, length delimited. Does not implicitly {@link mahjong_jxmj_svr_dizhu_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_svr_dizhu_not
     * @static
     * @param {Imahjong_jxmj_svr_dizhu_not} message mahjong_jxmj_svr_dizhu_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_svr_dizhu_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_svr_dizhu_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_svr_dizhu_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_svr_dizhu_not} mahjong_jxmj_svr_dizhu_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_svr_dizhu_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_svr_dizhu_not();
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
     * Decodes a mahjong_jxmj_svr_dizhu_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_svr_dizhu_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_svr_dizhu_not} mahjong_jxmj_svr_dizhu_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_svr_dizhu_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_svr_dizhu_not message.
     * @function verify
     * @memberof mahjong_jxmj_svr_dizhu_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_svr_dizhu_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nDiZhu))
            return "nDiZhu: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_svr_dizhu_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_svr_dizhu_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_svr_dizhu_not} mahjong_jxmj_svr_dizhu_not
     */
    mahjong_jxmj_svr_dizhu_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_svr_dizhu_not)
            return object;
        var message = new $root.mahjong_jxmj_svr_dizhu_not();
        if (object.nDiZhu != null)
            message.nDiZhu = object.nDiZhu | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_svr_dizhu_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_svr_dizhu_not
     * @static
     * @param {mahjong_jxmj_svr_dizhu_not} message mahjong_jxmj_svr_dizhu_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_svr_dizhu_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_svr_dizhu_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_svr_dizhu_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_svr_dizhu_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_svr_dizhu_not;
})();

$root.mahjong_jxmj_userdata_not = (function() {

    /**
     * Properties of a mahjong_jxmj_userdata_not.
     * @exports Imahjong_jxmj_userdata_not
     * @interface Imahjong_jxmj_userdata_not
     * @property {number} cChairid mahjong_jxmj_userdata_not cChairid
     * @property {number} nType mahjong_jxmj_userdata_not nType
     * @property {number|Long} nAmount mahjong_jxmj_userdata_not nAmount
     * @property {string} strParam mahjong_jxmj_userdata_not strParam
     */

    /**
     * Constructs a new mahjong_jxmj_userdata_not.
     * @exports mahjong_jxmj_userdata_not
     * @classdesc Represents a mahjong_jxmj_userdata_not.
     * @implements Imahjong_jxmj_userdata_not
     * @constructor
     * @param {Imahjong_jxmj_userdata_not=} [properties] Properties to set
     */
    function mahjong_jxmj_userdata_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_userdata_not cChairid.
     * @member {number} cChairid
     * @memberof mahjong_jxmj_userdata_not
     * @instance
     */
    mahjong_jxmj_userdata_not.prototype.cChairid = 0;

    /**
     * mahjong_jxmj_userdata_not nType.
     * @member {number} nType
     * @memberof mahjong_jxmj_userdata_not
     * @instance
     */
    mahjong_jxmj_userdata_not.prototype.nType = 0;

    /**
     * mahjong_jxmj_userdata_not nAmount.
     * @member {number|Long} nAmount
     * @memberof mahjong_jxmj_userdata_not
     * @instance
     */
    mahjong_jxmj_userdata_not.prototype.nAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * mahjong_jxmj_userdata_not strParam.
     * @member {string} strParam
     * @memberof mahjong_jxmj_userdata_not
     * @instance
     */
    mahjong_jxmj_userdata_not.prototype.strParam = "";

    /**
     * Creates a new mahjong_jxmj_userdata_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_userdata_not
     * @static
     * @param {Imahjong_jxmj_userdata_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_userdata_not} mahjong_jxmj_userdata_not instance
     */
    mahjong_jxmj_userdata_not.create = function create(properties) {
        return new mahjong_jxmj_userdata_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_userdata_not message. Does not implicitly {@link mahjong_jxmj_userdata_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_userdata_not
     * @static
     * @param {Imahjong_jxmj_userdata_not} message mahjong_jxmj_userdata_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_userdata_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairid);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nType);
        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.nAmount);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.strParam);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_userdata_not message, length delimited. Does not implicitly {@link mahjong_jxmj_userdata_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_userdata_not
     * @static
     * @param {Imahjong_jxmj_userdata_not} message mahjong_jxmj_userdata_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_userdata_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_userdata_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_userdata_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_userdata_not} mahjong_jxmj_userdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_userdata_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_userdata_not();
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
     * Decodes a mahjong_jxmj_userdata_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_userdata_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_userdata_not} mahjong_jxmj_userdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_userdata_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_userdata_not message.
     * @function verify
     * @memberof mahjong_jxmj_userdata_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_userdata_not.verify = function verify(message) {
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
     * Creates a mahjong_jxmj_userdata_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_userdata_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_userdata_not} mahjong_jxmj_userdata_not
     */
    mahjong_jxmj_userdata_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_userdata_not)
            return object;
        var message = new $root.mahjong_jxmj_userdata_not();
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
     * Creates a plain object from a mahjong_jxmj_userdata_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_userdata_not
     * @static
     * @param {mahjong_jxmj_userdata_not} message mahjong_jxmj_userdata_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_userdata_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_userdata_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_userdata_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_userdata_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_userdata_not;
})();

$root.mahjong_bc_ready_not = (function() {

    /**
     * Properties of a mahjong_bc_ready_not.
     * @exports Imahjong_bc_ready_not
     * @interface Imahjong_bc_ready_not
     * @property {number|Long} plyGuid mahjong_bc_ready_not plyGuid
     */

    /**
     * Constructs a new mahjong_bc_ready_not.
     * @exports mahjong_bc_ready_not
     * @classdesc Represents a mahjong_bc_ready_not.
     * @implements Imahjong_bc_ready_not
     * @constructor
     * @param {Imahjong_bc_ready_not=} [properties] Properties to set
     */
    function mahjong_bc_ready_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_bc_ready_not plyGuid.
     * @member {number|Long} plyGuid
     * @memberof mahjong_bc_ready_not
     * @instance
     */
    mahjong_bc_ready_not.prototype.plyGuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new mahjong_bc_ready_not instance using the specified properties.
     * @function create
     * @memberof mahjong_bc_ready_not
     * @static
     * @param {Imahjong_bc_ready_not=} [properties] Properties to set
     * @returns {mahjong_bc_ready_not} mahjong_bc_ready_not instance
     */
    mahjong_bc_ready_not.create = function create(properties) {
        return new mahjong_bc_ready_not(properties);
    };

    /**
     * Encodes the specified mahjong_bc_ready_not message. Does not implicitly {@link mahjong_bc_ready_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_bc_ready_not
     * @static
     * @param {Imahjong_bc_ready_not} message mahjong_bc_ready_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_ready_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.plyGuid);
        return writer;
    };

    /**
     * Encodes the specified mahjong_bc_ready_not message, length delimited. Does not implicitly {@link mahjong_bc_ready_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_bc_ready_not
     * @static
     * @param {Imahjong_bc_ready_not} message mahjong_bc_ready_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_ready_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_bc_ready_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_bc_ready_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_bc_ready_not} mahjong_bc_ready_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_ready_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_bc_ready_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.plyGuid = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("plyGuid"))
            throw $util.ProtocolError("missing required 'plyGuid'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_bc_ready_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_bc_ready_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_bc_ready_not} mahjong_bc_ready_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_ready_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_bc_ready_not message.
     * @function verify
     * @memberof mahjong_bc_ready_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_bc_ready_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.plyGuid) && !(message.plyGuid && $util.isInteger(message.plyGuid.low) && $util.isInteger(message.plyGuid.high)))
            return "plyGuid: integer|Long expected";
        return null;
    };

    /**
     * Creates a mahjong_bc_ready_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_bc_ready_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_bc_ready_not} mahjong_bc_ready_not
     */
    mahjong_bc_ready_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_bc_ready_not)
            return object;
        var message = new $root.mahjong_bc_ready_not();
        if (object.plyGuid != null)
            if ($util.Long)
                (message.plyGuid = $util.Long.fromValue(object.plyGuid)).unsigned = false;
            else if (typeof object.plyGuid === "string")
                message.plyGuid = parseInt(object.plyGuid, 10);
            else if (typeof object.plyGuid === "number")
                message.plyGuid = object.plyGuid;
            else if (typeof object.plyGuid === "object")
                message.plyGuid = new $util.LongBits(object.plyGuid.low >>> 0, object.plyGuid.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a mahjong_bc_ready_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_bc_ready_not
     * @static
     * @param {mahjong_bc_ready_not} message mahjong_bc_ready_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_bc_ready_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.plyGuid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.plyGuid = options.longs === String ? "0" : 0;
        if (message.plyGuid != null && message.hasOwnProperty("plyGuid"))
            if (typeof message.plyGuid === "number")
                object.plyGuid = options.longs === String ? String(message.plyGuid) : message.plyGuid;
            else
                object.plyGuid = options.longs === String ? $util.Long.prototype.toString.call(message.plyGuid) : options.longs === Number ? new $util.LongBits(message.plyGuid.low >>> 0, message.plyGuid.high >>> 0).toNumber() : message.plyGuid;
        return object;
    };

    /**
     * Converts this mahjong_bc_ready_not to JSON.
     * @function toJSON
     * @memberof mahjong_bc_ready_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_bc_ready_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_bc_ready_not;
})();

$root.mahjong_jxmj_animate_ok_req = (function() {

    /**
     * Properties of a mahjong_jxmj_animate_ok_req.
     * @exports Imahjong_jxmj_animate_ok_req
     * @interface Imahjong_jxmj_animate_ok_req
     */

    /**
     * Constructs a new mahjong_jxmj_animate_ok_req.
     * @exports mahjong_jxmj_animate_ok_req
     * @classdesc Represents a mahjong_jxmj_animate_ok_req.
     * @implements Imahjong_jxmj_animate_ok_req
     * @constructor
     * @param {Imahjong_jxmj_animate_ok_req=} [properties] Properties to set
     */
    function mahjong_jxmj_animate_ok_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_jxmj_animate_ok_req instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_animate_ok_req
     * @static
     * @param {Imahjong_jxmj_animate_ok_req=} [properties] Properties to set
     * @returns {mahjong_jxmj_animate_ok_req} mahjong_jxmj_animate_ok_req instance
     */
    mahjong_jxmj_animate_ok_req.create = function create(properties) {
        return new mahjong_jxmj_animate_ok_req(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_animate_ok_req message. Does not implicitly {@link mahjong_jxmj_animate_ok_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_animate_ok_req
     * @static
     * @param {Imahjong_jxmj_animate_ok_req} message mahjong_jxmj_animate_ok_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_animate_ok_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_animate_ok_req message, length delimited. Does not implicitly {@link mahjong_jxmj_animate_ok_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_animate_ok_req
     * @static
     * @param {Imahjong_jxmj_animate_ok_req} message mahjong_jxmj_animate_ok_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_animate_ok_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_animate_ok_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_animate_ok_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_animate_ok_req} mahjong_jxmj_animate_ok_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_animate_ok_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_animate_ok_req();
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
     * Decodes a mahjong_jxmj_animate_ok_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_animate_ok_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_animate_ok_req} mahjong_jxmj_animate_ok_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_animate_ok_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_animate_ok_req message.
     * @function verify
     * @memberof mahjong_jxmj_animate_ok_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_animate_ok_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_animate_ok_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_animate_ok_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_animate_ok_req} mahjong_jxmj_animate_ok_req
     */
    mahjong_jxmj_animate_ok_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_animate_ok_req)
            return object;
        return new $root.mahjong_jxmj_animate_ok_req();
    };

    /**
     * Creates a plain object from a mahjong_jxmj_animate_ok_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_animate_ok_req
     * @static
     * @param {mahjong_jxmj_animate_ok_req} message mahjong_jxmj_animate_ok_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_animate_ok_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_jxmj_animate_ok_req to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_animate_ok_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_animate_ok_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_animate_ok_req;
})();

$root.mahjong_jxmj_completedata_not = (function() {

    /**
     * Properties of a mahjong_jxmj_completedata_not.
     * @exports Imahjong_jxmj_completedata_not
     * @interface Imahjong_jxmj_completedata_not
     * @property {number} nDiZhu mahjong_jxmj_completedata_not nDiZhu
     * @property {number} nLeftCards mahjong_jxmj_completedata_not nLeftCards
     * @property {number} cBanker mahjong_jxmj_completedata_not cBanker
     * @property {number} cCurrPly mahjong_jxmj_completedata_not cCurrPly
     * @property {number} cAutoState mahjong_jxmj_completedata_not cAutoState
     * @property {number} cAutoType mahjong_jxmj_completedata_not cAutoType
     * @property {number} sSerialID mahjong_jxmj_completedata_not sSerialID
     * @property {Array.<Imahjong_jxmj_changecard_not>|null} [vecPlyData] mahjong_jxmj_completedata_not vecPlyData
     * @property {Array.<number>|null} [vecTingStatue] mahjong_jxmj_completedata_not vecTingStatue
     * @property {Array.<number>|null} [vecHuaNum] mahjong_jxmj_completedata_not vecHuaNum
     */

    /**
     * Constructs a new mahjong_jxmj_completedata_not.
     * @exports mahjong_jxmj_completedata_not
     * @classdesc Represents a mahjong_jxmj_completedata_not.
     * @implements Imahjong_jxmj_completedata_not
     * @constructor
     * @param {Imahjong_jxmj_completedata_not=} [properties] Properties to set
     */
    function mahjong_jxmj_completedata_not(properties) {
        this.vecPlyData = [];
        this.vecTingStatue = [];
        this.vecHuaNum = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_completedata_not nDiZhu.
     * @member {number} nDiZhu
     * @memberof mahjong_jxmj_completedata_not
     * @instance
     */
    mahjong_jxmj_completedata_not.prototype.nDiZhu = 0;

    /**
     * mahjong_jxmj_completedata_not nLeftCards.
     * @member {number} nLeftCards
     * @memberof mahjong_jxmj_completedata_not
     * @instance
     */
    mahjong_jxmj_completedata_not.prototype.nLeftCards = 0;

    /**
     * mahjong_jxmj_completedata_not cBanker.
     * @member {number} cBanker
     * @memberof mahjong_jxmj_completedata_not
     * @instance
     */
    mahjong_jxmj_completedata_not.prototype.cBanker = 0;

    /**
     * mahjong_jxmj_completedata_not cCurrPly.
     * @member {number} cCurrPly
     * @memberof mahjong_jxmj_completedata_not
     * @instance
     */
    mahjong_jxmj_completedata_not.prototype.cCurrPly = 0;

    /**
     * mahjong_jxmj_completedata_not cAutoState.
     * @member {number} cAutoState
     * @memberof mahjong_jxmj_completedata_not
     * @instance
     */
    mahjong_jxmj_completedata_not.prototype.cAutoState = 0;

    /**
     * mahjong_jxmj_completedata_not cAutoType.
     * @member {number} cAutoType
     * @memberof mahjong_jxmj_completedata_not
     * @instance
     */
    mahjong_jxmj_completedata_not.prototype.cAutoType = 0;

    /**
     * mahjong_jxmj_completedata_not sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_jxmj_completedata_not
     * @instance
     */
    mahjong_jxmj_completedata_not.prototype.sSerialID = 0;

    /**
     * mahjong_jxmj_completedata_not vecPlyData.
     * @member {Array.<Imahjong_jxmj_changecard_not>} vecPlyData
     * @memberof mahjong_jxmj_completedata_not
     * @instance
     */
    mahjong_jxmj_completedata_not.prototype.vecPlyData = $util.emptyArray;

    /**
     * mahjong_jxmj_completedata_not vecTingStatue.
     * @member {Array.<number>} vecTingStatue
     * @memberof mahjong_jxmj_completedata_not
     * @instance
     */
    mahjong_jxmj_completedata_not.prototype.vecTingStatue = $util.emptyArray;

    /**
     * mahjong_jxmj_completedata_not vecHuaNum.
     * @member {Array.<number>} vecHuaNum
     * @memberof mahjong_jxmj_completedata_not
     * @instance
     */
    mahjong_jxmj_completedata_not.prototype.vecHuaNum = $util.emptyArray;

    /**
     * Creates a new mahjong_jxmj_completedata_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_completedata_not
     * @static
     * @param {Imahjong_jxmj_completedata_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_completedata_not} mahjong_jxmj_completedata_not instance
     */
    mahjong_jxmj_completedata_not.create = function create(properties) {
        return new mahjong_jxmj_completedata_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_completedata_not message. Does not implicitly {@link mahjong_jxmj_completedata_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_completedata_not
     * @static
     * @param {Imahjong_jxmj_completedata_not} message mahjong_jxmj_completedata_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_completedata_not.encode = function encode(message, writer) {
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
                $root.mahjong_jxmj_changecard_not.encode(message.vecPlyData[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.vecTingStatue != null && message.vecTingStatue.length)
            for (var i = 0; i < message.vecTingStatue.length; ++i)
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.vecTingStatue[i]);
        if (message.vecHuaNum != null && message.vecHuaNum.length)
            for (var i = 0; i < message.vecHuaNum.length; ++i)
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.vecHuaNum[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_completedata_not message, length delimited. Does not implicitly {@link mahjong_jxmj_completedata_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_completedata_not
     * @static
     * @param {Imahjong_jxmj_completedata_not} message mahjong_jxmj_completedata_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_completedata_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_completedata_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_completedata_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_completedata_not} mahjong_jxmj_completedata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_completedata_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_completedata_not();
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
                message.vecPlyData.push($root.mahjong_jxmj_changecard_not.decode(reader, reader.uint32()));
                break;
            case 9:
                if (!(message.vecTingStatue && message.vecTingStatue.length))
                    message.vecTingStatue = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecTingStatue.push(reader.int32());
                } else
                    message.vecTingStatue.push(reader.int32());
                break;
            case 10:
                if (!(message.vecHuaNum && message.vecHuaNum.length))
                    message.vecHuaNum = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecHuaNum.push(reader.int32());
                } else
                    message.vecHuaNum.push(reader.int32());
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
     * Decodes a mahjong_jxmj_completedata_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_completedata_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_completedata_not} mahjong_jxmj_completedata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_completedata_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_completedata_not message.
     * @function verify
     * @memberof mahjong_jxmj_completedata_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_completedata_not.verify = function verify(message) {
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
                var error = $root.mahjong_jxmj_changecard_not.verify(message.vecPlyData[i]);
                if (error)
                    return "vecPlyData." + error;
            }
        }
        if (message.vecTingStatue != null && message.hasOwnProperty("vecTingStatue")) {
            if (!Array.isArray(message.vecTingStatue))
                return "vecTingStatue: array expected";
            for (var i = 0; i < message.vecTingStatue.length; ++i)
                if (!$util.isInteger(message.vecTingStatue[i]))
                    return "vecTingStatue: integer[] expected";
        }
        if (message.vecHuaNum != null && message.hasOwnProperty("vecHuaNum")) {
            if (!Array.isArray(message.vecHuaNum))
                return "vecHuaNum: array expected";
            for (var i = 0; i < message.vecHuaNum.length; ++i)
                if (!$util.isInteger(message.vecHuaNum[i]))
                    return "vecHuaNum: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_jxmj_completedata_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_completedata_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_completedata_not} mahjong_jxmj_completedata_not
     */
    mahjong_jxmj_completedata_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_completedata_not)
            return object;
        var message = new $root.mahjong_jxmj_completedata_not();
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
                throw TypeError(".mahjong_jxmj_completedata_not.vecPlyData: array expected");
            message.vecPlyData = [];
            for (var i = 0; i < object.vecPlyData.length; ++i) {
                if (typeof object.vecPlyData[i] !== "object")
                    throw TypeError(".mahjong_jxmj_completedata_not.vecPlyData: object expected");
                message.vecPlyData[i] = $root.mahjong_jxmj_changecard_not.fromObject(object.vecPlyData[i]);
            }
        }
        if (object.vecTingStatue) {
            if (!Array.isArray(object.vecTingStatue))
                throw TypeError(".mahjong_jxmj_completedata_not.vecTingStatue: array expected");
            message.vecTingStatue = [];
            for (var i = 0; i < object.vecTingStatue.length; ++i)
                message.vecTingStatue[i] = object.vecTingStatue[i] | 0;
        }
        if (object.vecHuaNum) {
            if (!Array.isArray(object.vecHuaNum))
                throw TypeError(".mahjong_jxmj_completedata_not.vecHuaNum: array expected");
            message.vecHuaNum = [];
            for (var i = 0; i < object.vecHuaNum.length; ++i)
                message.vecHuaNum[i] = object.vecHuaNum[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_completedata_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_completedata_not
     * @static
     * @param {mahjong_jxmj_completedata_not} message mahjong_jxmj_completedata_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_completedata_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.vecPlyData = [];
            object.vecTingStatue = [];
            object.vecHuaNum = [];
        }
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
                object.vecPlyData[j] = $root.mahjong_jxmj_changecard_not.toObject(message.vecPlyData[j], options);
        }
        if (message.vecTingStatue && message.vecTingStatue.length) {
            object.vecTingStatue = [];
            for (var j = 0; j < message.vecTingStatue.length; ++j)
                object.vecTingStatue[j] = message.vecTingStatue[j];
        }
        if (message.vecHuaNum && message.vecHuaNum.length) {
            object.vecHuaNum = [];
            for (var j = 0; j < message.vecHuaNum.length; ++j)
                object.vecHuaNum[j] = message.vecHuaNum[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_jxmj_completedata_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_completedata_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_completedata_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_completedata_not;
})();

$root.mahjong_jxmj_get_mj_private_room_result_ack = (function() {

    /**
     * Properties of a mahjong_jxmj_get_mj_private_room_result_ack.
     * @exports Imahjong_jxmj_get_mj_private_room_result_ack
     * @interface Imahjong_jxmj_get_mj_private_room_result_ack
     * @property {Array.<Imahjong_jxmj_GameStatisc>|null} [vecGameStatiscs] mahjong_jxmj_get_mj_private_room_result_ack vecGameStatiscs
     */

    /**
     * Constructs a new mahjong_jxmj_get_mj_private_room_result_ack.
     * @exports mahjong_jxmj_get_mj_private_room_result_ack
     * @classdesc Represents a mahjong_jxmj_get_mj_private_room_result_ack.
     * @implements Imahjong_jxmj_get_mj_private_room_result_ack
     * @constructor
     * @param {Imahjong_jxmj_get_mj_private_room_result_ack=} [properties] Properties to set
     */
    function mahjong_jxmj_get_mj_private_room_result_ack(properties) {
        this.vecGameStatiscs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_get_mj_private_room_result_ack vecGameStatiscs.
     * @member {Array.<Imahjong_jxmj_GameStatisc>} vecGameStatiscs
     * @memberof mahjong_jxmj_get_mj_private_room_result_ack
     * @instance
     */
    mahjong_jxmj_get_mj_private_room_result_ack.prototype.vecGameStatiscs = $util.emptyArray;

    /**
     * Creates a new mahjong_jxmj_get_mj_private_room_result_ack instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_get_mj_private_room_result_ack
     * @static
     * @param {Imahjong_jxmj_get_mj_private_room_result_ack=} [properties] Properties to set
     * @returns {mahjong_jxmj_get_mj_private_room_result_ack} mahjong_jxmj_get_mj_private_room_result_ack instance
     */
    mahjong_jxmj_get_mj_private_room_result_ack.create = function create(properties) {
        return new mahjong_jxmj_get_mj_private_room_result_ack(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_get_mj_private_room_result_ack message. Does not implicitly {@link mahjong_jxmj_get_mj_private_room_result_ack.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_get_mj_private_room_result_ack
     * @static
     * @param {Imahjong_jxmj_get_mj_private_room_result_ack} message mahjong_jxmj_get_mj_private_room_result_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_get_mj_private_room_result_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vecGameStatiscs != null && message.vecGameStatiscs.length)
            for (var i = 0; i < message.vecGameStatiscs.length; ++i)
                $root.mahjong_jxmj_GameStatisc.encode(message.vecGameStatiscs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_get_mj_private_room_result_ack message, length delimited. Does not implicitly {@link mahjong_jxmj_get_mj_private_room_result_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_get_mj_private_room_result_ack
     * @static
     * @param {Imahjong_jxmj_get_mj_private_room_result_ack} message mahjong_jxmj_get_mj_private_room_result_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_get_mj_private_room_result_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_get_mj_private_room_result_ack message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_get_mj_private_room_result_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_get_mj_private_room_result_ack} mahjong_jxmj_get_mj_private_room_result_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_get_mj_private_room_result_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_get_mj_private_room_result_ack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.vecGameStatiscs && message.vecGameStatiscs.length))
                    message.vecGameStatiscs = [];
                message.vecGameStatiscs.push($root.mahjong_jxmj_GameStatisc.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a mahjong_jxmj_get_mj_private_room_result_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_get_mj_private_room_result_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_get_mj_private_room_result_ack} mahjong_jxmj_get_mj_private_room_result_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_get_mj_private_room_result_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_get_mj_private_room_result_ack message.
     * @function verify
     * @memberof mahjong_jxmj_get_mj_private_room_result_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_get_mj_private_room_result_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.vecGameStatiscs != null && message.hasOwnProperty("vecGameStatiscs")) {
            if (!Array.isArray(message.vecGameStatiscs))
                return "vecGameStatiscs: array expected";
            for (var i = 0; i < message.vecGameStatiscs.length; ++i) {
                var error = $root.mahjong_jxmj_GameStatisc.verify(message.vecGameStatiscs[i]);
                if (error)
                    return "vecGameStatiscs." + error;
            }
        }
        return null;
    };

    /**
     * Creates a mahjong_jxmj_get_mj_private_room_result_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_get_mj_private_room_result_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_get_mj_private_room_result_ack} mahjong_jxmj_get_mj_private_room_result_ack
     */
    mahjong_jxmj_get_mj_private_room_result_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_get_mj_private_room_result_ack)
            return object;
        var message = new $root.mahjong_jxmj_get_mj_private_room_result_ack();
        if (object.vecGameStatiscs) {
            if (!Array.isArray(object.vecGameStatiscs))
                throw TypeError(".mahjong_jxmj_get_mj_private_room_result_ack.vecGameStatiscs: array expected");
            message.vecGameStatiscs = [];
            for (var i = 0; i < object.vecGameStatiscs.length; ++i) {
                if (typeof object.vecGameStatiscs[i] !== "object")
                    throw TypeError(".mahjong_jxmj_get_mj_private_room_result_ack.vecGameStatiscs: object expected");
                message.vecGameStatiscs[i] = $root.mahjong_jxmj_GameStatisc.fromObject(object.vecGameStatiscs[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_get_mj_private_room_result_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_get_mj_private_room_result_ack
     * @static
     * @param {mahjong_jxmj_get_mj_private_room_result_ack} message mahjong_jxmj_get_mj_private_room_result_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_get_mj_private_room_result_ack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecGameStatiscs = [];
        if (message.vecGameStatiscs && message.vecGameStatiscs.length) {
            object.vecGameStatiscs = [];
            for (var j = 0; j < message.vecGameStatiscs.length; ++j)
                object.vecGameStatiscs[j] = $root.mahjong_jxmj_GameStatisc.toObject(message.vecGameStatiscs[j], options);
        }
        return object;
    };

    /**
     * Converts this mahjong_jxmj_get_mj_private_room_result_ack to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_get_mj_private_room_result_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_get_mj_private_room_result_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_get_mj_private_room_result_ack;
})();

$root.mahjong_jxmj_dingpiao_rsp = (function() {

    /**
     * Properties of a mahjong_jxmj_dingpiao_rsp.
     * @exports Imahjong_jxmj_dingpiao_rsp
     * @interface Imahjong_jxmj_dingpiao_rsp
     * @property {number} cPiaoType mahjong_jxmj_dingpiao_rsp cPiaoType
     * @property {number} sSerialID mahjong_jxmj_dingpiao_rsp sSerialID
     */

    /**
     * Constructs a new mahjong_jxmj_dingpiao_rsp.
     * @exports mahjong_jxmj_dingpiao_rsp
     * @classdesc Represents a mahjong_jxmj_dingpiao_rsp.
     * @implements Imahjong_jxmj_dingpiao_rsp
     * @constructor
     * @param {Imahjong_jxmj_dingpiao_rsp=} [properties] Properties to set
     */
    function mahjong_jxmj_dingpiao_rsp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_dingpiao_rsp cPiaoType.
     * @member {number} cPiaoType
     * @memberof mahjong_jxmj_dingpiao_rsp
     * @instance
     */
    mahjong_jxmj_dingpiao_rsp.prototype.cPiaoType = 0;

    /**
     * mahjong_jxmj_dingpiao_rsp sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_jxmj_dingpiao_rsp
     * @instance
     */
    mahjong_jxmj_dingpiao_rsp.prototype.sSerialID = 0;

    /**
     * Creates a new mahjong_jxmj_dingpiao_rsp instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_dingpiao_rsp
     * @static
     * @param {Imahjong_jxmj_dingpiao_rsp=} [properties] Properties to set
     * @returns {mahjong_jxmj_dingpiao_rsp} mahjong_jxmj_dingpiao_rsp instance
     */
    mahjong_jxmj_dingpiao_rsp.create = function create(properties) {
        return new mahjong_jxmj_dingpiao_rsp(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_dingpiao_rsp message. Does not implicitly {@link mahjong_jxmj_dingpiao_rsp.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_dingpiao_rsp
     * @static
     * @param {Imahjong_jxmj_dingpiao_rsp} message mahjong_jxmj_dingpiao_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_dingpiao_rsp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cPiaoType);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sSerialID);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_dingpiao_rsp message, length delimited. Does not implicitly {@link mahjong_jxmj_dingpiao_rsp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_dingpiao_rsp
     * @static
     * @param {Imahjong_jxmj_dingpiao_rsp} message mahjong_jxmj_dingpiao_rsp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_dingpiao_rsp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_dingpiao_rsp message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_dingpiao_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_dingpiao_rsp} mahjong_jxmj_dingpiao_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_dingpiao_rsp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_dingpiao_rsp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cPiaoType = reader.int32();
                break;
            case 2:
                message.sSerialID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cPiaoType"))
            throw $util.ProtocolError("missing required 'cPiaoType'", { instance: message });
        if (!message.hasOwnProperty("sSerialID"))
            throw $util.ProtocolError("missing required 'sSerialID'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_jxmj_dingpiao_rsp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_dingpiao_rsp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_dingpiao_rsp} mahjong_jxmj_dingpiao_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_dingpiao_rsp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_dingpiao_rsp message.
     * @function verify
     * @memberof mahjong_jxmj_dingpiao_rsp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_dingpiao_rsp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cPiaoType))
            return "cPiaoType: integer expected";
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_dingpiao_rsp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_dingpiao_rsp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_dingpiao_rsp} mahjong_jxmj_dingpiao_rsp
     */
    mahjong_jxmj_dingpiao_rsp.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_dingpiao_rsp)
            return object;
        var message = new $root.mahjong_jxmj_dingpiao_rsp();
        if (object.cPiaoType != null)
            message.cPiaoType = object.cPiaoType | 0;
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_dingpiao_rsp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_dingpiao_rsp
     * @static
     * @param {mahjong_jxmj_dingpiao_rsp} message mahjong_jxmj_dingpiao_rsp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_dingpiao_rsp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cPiaoType = 0;
            object.sSerialID = 0;
        }
        if (message.cPiaoType != null && message.hasOwnProperty("cPiaoType"))
            object.cPiaoType = message.cPiaoType;
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        return object;
    };

    /**
     * Converts this mahjong_jxmj_dingpiao_rsp to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_dingpiao_rsp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_dingpiao_rsp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_dingpiao_rsp;
})();

$root.mahjong_jxmj_rount_count_not = (function() {

    /**
     * Properties of a mahjong_jxmj_rount_count_not.
     * @exports Imahjong_jxmj_rount_count_not
     * @interface Imahjong_jxmj_rount_count_not
     * @property {number} nMaJiangQuan mahjong_jxmj_rount_count_not nMaJiangQuan
     * @property {number} nMaJiangJu mahjong_jxmj_rount_count_not nMaJiangJu
     * @property {number} nMaJiangCount mahjong_jxmj_rount_count_not nMaJiangCount
     */

    /**
     * Constructs a new mahjong_jxmj_rount_count_not.
     * @exports mahjong_jxmj_rount_count_not
     * @classdesc Represents a mahjong_jxmj_rount_count_not.
     * @implements Imahjong_jxmj_rount_count_not
     * @constructor
     * @param {Imahjong_jxmj_rount_count_not=} [properties] Properties to set
     */
    function mahjong_jxmj_rount_count_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_rount_count_not nMaJiangQuan.
     * @member {number} nMaJiangQuan
     * @memberof mahjong_jxmj_rount_count_not
     * @instance
     */
    mahjong_jxmj_rount_count_not.prototype.nMaJiangQuan = 0;

    /**
     * mahjong_jxmj_rount_count_not nMaJiangJu.
     * @member {number} nMaJiangJu
     * @memberof mahjong_jxmj_rount_count_not
     * @instance
     */
    mahjong_jxmj_rount_count_not.prototype.nMaJiangJu = 0;

    /**
     * mahjong_jxmj_rount_count_not nMaJiangCount.
     * @member {number} nMaJiangCount
     * @memberof mahjong_jxmj_rount_count_not
     * @instance
     */
    mahjong_jxmj_rount_count_not.prototype.nMaJiangCount = 0;

    /**
     * Creates a new mahjong_jxmj_rount_count_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_rount_count_not
     * @static
     * @param {Imahjong_jxmj_rount_count_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_rount_count_not} mahjong_jxmj_rount_count_not instance
     */
    mahjong_jxmj_rount_count_not.create = function create(properties) {
        return new mahjong_jxmj_rount_count_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_rount_count_not message. Does not implicitly {@link mahjong_jxmj_rount_count_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_rount_count_not
     * @static
     * @param {Imahjong_jxmj_rount_count_not} message mahjong_jxmj_rount_count_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_rount_count_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nMaJiangQuan);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nMaJiangJu);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nMaJiangCount);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_rount_count_not message, length delimited. Does not implicitly {@link mahjong_jxmj_rount_count_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_rount_count_not
     * @static
     * @param {Imahjong_jxmj_rount_count_not} message mahjong_jxmj_rount_count_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_rount_count_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_rount_count_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_rount_count_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_rount_count_not} mahjong_jxmj_rount_count_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_rount_count_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_rount_count_not();
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
     * Decodes a mahjong_jxmj_rount_count_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_rount_count_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_rount_count_not} mahjong_jxmj_rount_count_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_rount_count_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_rount_count_not message.
     * @function verify
     * @memberof mahjong_jxmj_rount_count_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_rount_count_not.verify = function verify(message) {
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
     * Creates a mahjong_jxmj_rount_count_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_rount_count_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_rount_count_not} mahjong_jxmj_rount_count_not
     */
    mahjong_jxmj_rount_count_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_rount_count_not)
            return object;
        var message = new $root.mahjong_jxmj_rount_count_not();
        if (object.nMaJiangQuan != null)
            message.nMaJiangQuan = object.nMaJiangQuan | 0;
        if (object.nMaJiangJu != null)
            message.nMaJiangJu = object.nMaJiangJu | 0;
        if (object.nMaJiangCount != null)
            message.nMaJiangCount = object.nMaJiangCount | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_rount_count_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_rount_count_not
     * @static
     * @param {mahjong_jxmj_rount_count_not} message mahjong_jxmj_rount_count_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_rount_count_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_rount_count_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_rount_count_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_rount_count_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_rount_count_not;
})();

$root.mahjong_bc_ply_join_not = (function() {

    /**
     * Properties of a mahjong_bc_ply_join_not.
     * @exports Imahjong_bc_ply_join_not
     * @interface Imahjong_bc_ply_join_not
     * @property {Imahjong_PlyBaseData} plyData mahjong_bc_ply_join_not plyData
     */

    /**
     * Constructs a new mahjong_bc_ply_join_not.
     * @exports mahjong_bc_ply_join_not
     * @classdesc Represents a mahjong_bc_ply_join_not.
     * @implements Imahjong_bc_ply_join_not
     * @constructor
     * @param {Imahjong_bc_ply_join_not=} [properties] Properties to set
     */
    function mahjong_bc_ply_join_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_bc_ply_join_not plyData.
     * @member {Imahjong_PlyBaseData} plyData
     * @memberof mahjong_bc_ply_join_not
     * @instance
     */
    mahjong_bc_ply_join_not.prototype.plyData = null;

    /**
     * Creates a new mahjong_bc_ply_join_not instance using the specified properties.
     * @function create
     * @memberof mahjong_bc_ply_join_not
     * @static
     * @param {Imahjong_bc_ply_join_not=} [properties] Properties to set
     * @returns {mahjong_bc_ply_join_not} mahjong_bc_ply_join_not instance
     */
    mahjong_bc_ply_join_not.create = function create(properties) {
        return new mahjong_bc_ply_join_not(properties);
    };

    /**
     * Encodes the specified mahjong_bc_ply_join_not message. Does not implicitly {@link mahjong_bc_ply_join_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_bc_ply_join_not
     * @static
     * @param {Imahjong_bc_ply_join_not} message mahjong_bc_ply_join_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_ply_join_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        $root.mahjong_PlyBaseData.encode(message.plyData, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified mahjong_bc_ply_join_not message, length delimited. Does not implicitly {@link mahjong_bc_ply_join_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_bc_ply_join_not
     * @static
     * @param {Imahjong_bc_ply_join_not} message mahjong_bc_ply_join_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_bc_ply_join_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_bc_ply_join_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_bc_ply_join_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_bc_ply_join_not} mahjong_bc_ply_join_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_ply_join_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_bc_ply_join_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.plyData = $root.mahjong_PlyBaseData.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("plyData"))
            throw $util.ProtocolError("missing required 'plyData'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_bc_ply_join_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_bc_ply_join_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_bc_ply_join_not} mahjong_bc_ply_join_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_bc_ply_join_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_bc_ply_join_not message.
     * @function verify
     * @memberof mahjong_bc_ply_join_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_bc_ply_join_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        {
            var error = $root.mahjong_PlyBaseData.verify(message.plyData);
            if (error)
                return "plyData." + error;
        }
        return null;
    };

    /**
     * Creates a mahjong_bc_ply_join_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_bc_ply_join_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_bc_ply_join_not} mahjong_bc_ply_join_not
     */
    mahjong_bc_ply_join_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_bc_ply_join_not)
            return object;
        var message = new $root.mahjong_bc_ply_join_not();
        if (object.plyData != null) {
            if (typeof object.plyData !== "object")
                throw TypeError(".mahjong_bc_ply_join_not.plyData: object expected");
            message.plyData = $root.mahjong_PlyBaseData.fromObject(object.plyData);
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_bc_ply_join_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_bc_ply_join_not
     * @static
     * @param {mahjong_bc_ply_join_not} message mahjong_bc_ply_join_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_bc_ply_join_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.plyData = null;
        if (message.plyData != null && message.hasOwnProperty("plyData"))
            object.plyData = $root.mahjong_PlyBaseData.toObject(message.plyData, options);
        return object;
    };

    /**
     * Converts this mahjong_bc_ply_join_not to JSON.
     * @function toJSON
     * @memberof mahjong_bc_ply_join_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_bc_ply_join_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_bc_ply_join_not;
})();

$root.mahjong_jxmj_dingpiao_req = (function() {

    /**
     * Properties of a mahjong_jxmj_dingpiao_req.
     * @exports Imahjong_jxmj_dingpiao_req
     * @interface Imahjong_jxmj_dingpiao_req
     * @property {number} sSerialID mahjong_jxmj_dingpiao_req sSerialID
     */

    /**
     * Constructs a new mahjong_jxmj_dingpiao_req.
     * @exports mahjong_jxmj_dingpiao_req
     * @classdesc Represents a mahjong_jxmj_dingpiao_req.
     * @implements Imahjong_jxmj_dingpiao_req
     * @constructor
     * @param {Imahjong_jxmj_dingpiao_req=} [properties] Properties to set
     */
    function mahjong_jxmj_dingpiao_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_dingpiao_req sSerialID.
     * @member {number} sSerialID
     * @memberof mahjong_jxmj_dingpiao_req
     * @instance
     */
    mahjong_jxmj_dingpiao_req.prototype.sSerialID = 0;

    /**
     * Creates a new mahjong_jxmj_dingpiao_req instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_dingpiao_req
     * @static
     * @param {Imahjong_jxmj_dingpiao_req=} [properties] Properties to set
     * @returns {mahjong_jxmj_dingpiao_req} mahjong_jxmj_dingpiao_req instance
     */
    mahjong_jxmj_dingpiao_req.create = function create(properties) {
        return new mahjong_jxmj_dingpiao_req(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_dingpiao_req message. Does not implicitly {@link mahjong_jxmj_dingpiao_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_dingpiao_req
     * @static
     * @param {Imahjong_jxmj_dingpiao_req} message mahjong_jxmj_dingpiao_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_dingpiao_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sSerialID);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_dingpiao_req message, length delimited. Does not implicitly {@link mahjong_jxmj_dingpiao_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_dingpiao_req
     * @static
     * @param {Imahjong_jxmj_dingpiao_req} message mahjong_jxmj_dingpiao_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_dingpiao_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_dingpiao_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_dingpiao_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_dingpiao_req} mahjong_jxmj_dingpiao_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_dingpiao_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_dingpiao_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sSerialID = reader.int32();
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
     * Decodes a mahjong_jxmj_dingpiao_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_dingpiao_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_dingpiao_req} mahjong_jxmj_dingpiao_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_dingpiao_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_dingpiao_req message.
     * @function verify
     * @memberof mahjong_jxmj_dingpiao_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_dingpiao_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.sSerialID))
            return "sSerialID: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_dingpiao_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_dingpiao_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_dingpiao_req} mahjong_jxmj_dingpiao_req
     */
    mahjong_jxmj_dingpiao_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_dingpiao_req)
            return object;
        var message = new $root.mahjong_jxmj_dingpiao_req();
        if (object.sSerialID != null)
            message.sSerialID = object.sSerialID | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_dingpiao_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_dingpiao_req
     * @static
     * @param {mahjong_jxmj_dingpiao_req} message mahjong_jxmj_dingpiao_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_dingpiao_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.sSerialID = 0;
        if (message.sSerialID != null && message.hasOwnProperty("sSerialID"))
            object.sSerialID = message.sSerialID;
        return object;
    };

    /**
     * Converts this mahjong_jxmj_dingpiao_req to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_dingpiao_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_dingpiao_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_dingpiao_req;
})();

$root.mahjong_jxmj_seat_dice_not = (function() {

    /**
     * Properties of a mahjong_jxmj_seat_dice_not.
     * @exports Imahjong_jxmj_seat_dice_not
     * @interface Imahjong_jxmj_seat_dice_not
     * @property {number} cChairID mahjong_jxmj_seat_dice_not cChairID
     * @property {Array.<number>|null} [vecDice] mahjong_jxmj_seat_dice_not vecDice
     */

    /**
     * Constructs a new mahjong_jxmj_seat_dice_not.
     * @exports mahjong_jxmj_seat_dice_not
     * @classdesc Represents a mahjong_jxmj_seat_dice_not.
     * @implements Imahjong_jxmj_seat_dice_not
     * @constructor
     * @param {Imahjong_jxmj_seat_dice_not=} [properties] Properties to set
     */
    function mahjong_jxmj_seat_dice_not(properties) {
        this.vecDice = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_seat_dice_not cChairID.
     * @member {number} cChairID
     * @memberof mahjong_jxmj_seat_dice_not
     * @instance
     */
    mahjong_jxmj_seat_dice_not.prototype.cChairID = 0;

    /**
     * mahjong_jxmj_seat_dice_not vecDice.
     * @member {Array.<number>} vecDice
     * @memberof mahjong_jxmj_seat_dice_not
     * @instance
     */
    mahjong_jxmj_seat_dice_not.prototype.vecDice = $util.emptyArray;

    /**
     * Creates a new mahjong_jxmj_seat_dice_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_seat_dice_not
     * @static
     * @param {Imahjong_jxmj_seat_dice_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_seat_dice_not} mahjong_jxmj_seat_dice_not instance
     */
    mahjong_jxmj_seat_dice_not.create = function create(properties) {
        return new mahjong_jxmj_seat_dice_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_seat_dice_not message. Does not implicitly {@link mahjong_jxmj_seat_dice_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_seat_dice_not
     * @static
     * @param {Imahjong_jxmj_seat_dice_not} message mahjong_jxmj_seat_dice_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_seat_dice_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        if (message.vecDice != null && message.vecDice.length)
            for (var i = 0; i < message.vecDice.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.vecDice[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_seat_dice_not message, length delimited. Does not implicitly {@link mahjong_jxmj_seat_dice_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_seat_dice_not
     * @static
     * @param {Imahjong_jxmj_seat_dice_not} message mahjong_jxmj_seat_dice_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_seat_dice_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_seat_dice_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_seat_dice_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_seat_dice_not} mahjong_jxmj_seat_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_seat_dice_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_seat_dice_not();
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
     * Decodes a mahjong_jxmj_seat_dice_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_seat_dice_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_seat_dice_not} mahjong_jxmj_seat_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_seat_dice_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_seat_dice_not message.
     * @function verify
     * @memberof mahjong_jxmj_seat_dice_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_seat_dice_not.verify = function verify(message) {
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
     * Creates a mahjong_jxmj_seat_dice_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_seat_dice_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_seat_dice_not} mahjong_jxmj_seat_dice_not
     */
    mahjong_jxmj_seat_dice_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_seat_dice_not)
            return object;
        var message = new $root.mahjong_jxmj_seat_dice_not();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.vecDice) {
            if (!Array.isArray(object.vecDice))
                throw TypeError(".mahjong_jxmj_seat_dice_not.vecDice: array expected");
            message.vecDice = [];
            for (var i = 0; i < object.vecDice.length; ++i)
                message.vecDice[i] = object.vecDice[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_seat_dice_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_seat_dice_not
     * @static
     * @param {mahjong_jxmj_seat_dice_not} message mahjong_jxmj_seat_dice_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_seat_dice_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_seat_dice_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_seat_dice_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_seat_dice_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_seat_dice_not;
})();

$root.mahjong_jxmj_tingcards_not = (function() {

    /**
     * Properties of a mahjong_jxmj_tingcards_not.
     * @exports Imahjong_jxmj_tingcards_not
     * @interface Imahjong_jxmj_tingcards_not
     * @property {Array.<number>|null} [vecCards] mahjong_jxmj_tingcards_not vecCards
     */

    /**
     * Constructs a new mahjong_jxmj_tingcards_not.
     * @exports mahjong_jxmj_tingcards_not
     * @classdesc Represents a mahjong_jxmj_tingcards_not.
     * @implements Imahjong_jxmj_tingcards_not
     * @constructor
     * @param {Imahjong_jxmj_tingcards_not=} [properties] Properties to set
     */
    function mahjong_jxmj_tingcards_not(properties) {
        this.vecCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_tingcards_not vecCards.
     * @member {Array.<number>} vecCards
     * @memberof mahjong_jxmj_tingcards_not
     * @instance
     */
    mahjong_jxmj_tingcards_not.prototype.vecCards = $util.emptyArray;

    /**
     * Creates a new mahjong_jxmj_tingcards_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_tingcards_not
     * @static
     * @param {Imahjong_jxmj_tingcards_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_tingcards_not} mahjong_jxmj_tingcards_not instance
     */
    mahjong_jxmj_tingcards_not.create = function create(properties) {
        return new mahjong_jxmj_tingcards_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_tingcards_not message. Does not implicitly {@link mahjong_jxmj_tingcards_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_tingcards_not
     * @static
     * @param {Imahjong_jxmj_tingcards_not} message mahjong_jxmj_tingcards_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_tingcards_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vecCards != null && message.vecCards.length)
            for (var i = 0; i < message.vecCards.length; ++i)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.vecCards[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_tingcards_not message, length delimited. Does not implicitly {@link mahjong_jxmj_tingcards_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_tingcards_not
     * @static
     * @param {Imahjong_jxmj_tingcards_not} message mahjong_jxmj_tingcards_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_tingcards_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_tingcards_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_tingcards_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_tingcards_not} mahjong_jxmj_tingcards_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_tingcards_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_tingcards_not();
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
     * Decodes a mahjong_jxmj_tingcards_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_tingcards_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_tingcards_not} mahjong_jxmj_tingcards_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_tingcards_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_tingcards_not message.
     * @function verify
     * @memberof mahjong_jxmj_tingcards_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_tingcards_not.verify = function verify(message) {
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
     * Creates a mahjong_jxmj_tingcards_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_tingcards_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_tingcards_not} mahjong_jxmj_tingcards_not
     */
    mahjong_jxmj_tingcards_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_tingcards_not)
            return object;
        var message = new $root.mahjong_jxmj_tingcards_not();
        if (object.vecCards) {
            if (!Array.isArray(object.vecCards))
                throw TypeError(".mahjong_jxmj_tingcards_not.vecCards: array expected");
            message.vecCards = [];
            for (var i = 0; i < object.vecCards.length; ++i)
                message.vecCards[i] = object.vecCards[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_tingcards_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_tingcards_not
     * @static
     * @param {mahjong_jxmj_tingcards_not} message mahjong_jxmj_tingcards_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_tingcards_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_tingcards_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_tingcards_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_tingcards_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_tingcards_not;
})();

$root.mahjong_cb_change_table_req = (function() {

    /**
     * Properties of a mahjong_cb_change_table_req.
     * @exports Imahjong_cb_change_table_req
     * @interface Imahjong_cb_change_table_req
     */

    /**
     * Constructs a new mahjong_cb_change_table_req.
     * @exports mahjong_cb_change_table_req
     * @classdesc Represents a mahjong_cb_change_table_req.
     * @implements Imahjong_cb_change_table_req
     * @constructor
     * @param {Imahjong_cb_change_table_req=} [properties] Properties to set
     */
    function mahjong_cb_change_table_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new mahjong_cb_change_table_req instance using the specified properties.
     * @function create
     * @memberof mahjong_cb_change_table_req
     * @static
     * @param {Imahjong_cb_change_table_req=} [properties] Properties to set
     * @returns {mahjong_cb_change_table_req} mahjong_cb_change_table_req instance
     */
    mahjong_cb_change_table_req.create = function create(properties) {
        return new mahjong_cb_change_table_req(properties);
    };

    /**
     * Encodes the specified mahjong_cb_change_table_req message. Does not implicitly {@link mahjong_cb_change_table_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_cb_change_table_req
     * @static
     * @param {Imahjong_cb_change_table_req} message mahjong_cb_change_table_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_cb_change_table_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified mahjong_cb_change_table_req message, length delimited. Does not implicitly {@link mahjong_cb_change_table_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_cb_change_table_req
     * @static
     * @param {Imahjong_cb_change_table_req} message mahjong_cb_change_table_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_cb_change_table_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_cb_change_table_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_cb_change_table_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_cb_change_table_req} mahjong_cb_change_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_cb_change_table_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_cb_change_table_req();
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
     * Decodes a mahjong_cb_change_table_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_cb_change_table_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_cb_change_table_req} mahjong_cb_change_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_cb_change_table_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_cb_change_table_req message.
     * @function verify
     * @memberof mahjong_cb_change_table_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_cb_change_table_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a mahjong_cb_change_table_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_cb_change_table_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_cb_change_table_req} mahjong_cb_change_table_req
     */
    mahjong_cb_change_table_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_cb_change_table_req)
            return object;
        return new $root.mahjong_cb_change_table_req();
    };

    /**
     * Creates a plain object from a mahjong_cb_change_table_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_cb_change_table_req
     * @static
     * @param {mahjong_cb_change_table_req} message mahjong_cb_change_table_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_cb_change_table_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this mahjong_cb_change_table_req to JSON.
     * @function toJSON
     * @memberof mahjong_cb_change_table_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_cb_change_table_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_cb_change_table_req;
})();

$root.mahjong_jxmj_tingfan_data = (function() {

    /**
     * Properties of a mahjong_jxmj_tingfan_data.
     * @exports Imahjong_jxmj_tingfan_data
     * @interface Imahjong_jxmj_tingfan_data
     * @property {number} cPutCard mahjong_jxmj_tingfan_data cPutCard
     * @property {number} cHuCard mahjong_jxmj_tingfan_data cHuCard
     * @property {number} nFan mahjong_jxmj_tingfan_data nFan
     * @property {number} nLeftNum mahjong_jxmj_tingfan_data nLeftNum
     */

    /**
     * Constructs a new mahjong_jxmj_tingfan_data.
     * @exports mahjong_jxmj_tingfan_data
     * @classdesc Represents a mahjong_jxmj_tingfan_data.
     * @implements Imahjong_jxmj_tingfan_data
     * @constructor
     * @param {Imahjong_jxmj_tingfan_data=} [properties] Properties to set
     */
    function mahjong_jxmj_tingfan_data(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_tingfan_data cPutCard.
     * @member {number} cPutCard
     * @memberof mahjong_jxmj_tingfan_data
     * @instance
     */
    mahjong_jxmj_tingfan_data.prototype.cPutCard = 0;

    /**
     * mahjong_jxmj_tingfan_data cHuCard.
     * @member {number} cHuCard
     * @memberof mahjong_jxmj_tingfan_data
     * @instance
     */
    mahjong_jxmj_tingfan_data.prototype.cHuCard = 0;

    /**
     * mahjong_jxmj_tingfan_data nFan.
     * @member {number} nFan
     * @memberof mahjong_jxmj_tingfan_data
     * @instance
     */
    mahjong_jxmj_tingfan_data.prototype.nFan = 0;

    /**
     * mahjong_jxmj_tingfan_data nLeftNum.
     * @member {number} nLeftNum
     * @memberof mahjong_jxmj_tingfan_data
     * @instance
     */
    mahjong_jxmj_tingfan_data.prototype.nLeftNum = 0;

    /**
     * Creates a new mahjong_jxmj_tingfan_data instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_tingfan_data
     * @static
     * @param {Imahjong_jxmj_tingfan_data=} [properties] Properties to set
     * @returns {mahjong_jxmj_tingfan_data} mahjong_jxmj_tingfan_data instance
     */
    mahjong_jxmj_tingfan_data.create = function create(properties) {
        return new mahjong_jxmj_tingfan_data(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_tingfan_data message. Does not implicitly {@link mahjong_jxmj_tingfan_data.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_tingfan_data
     * @static
     * @param {Imahjong_jxmj_tingfan_data} message mahjong_jxmj_tingfan_data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_tingfan_data.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cPutCard);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cHuCard);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nFan);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nLeftNum);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_tingfan_data message, length delimited. Does not implicitly {@link mahjong_jxmj_tingfan_data.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_tingfan_data
     * @static
     * @param {Imahjong_jxmj_tingfan_data} message mahjong_jxmj_tingfan_data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_tingfan_data.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_tingfan_data message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_tingfan_data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_tingfan_data} mahjong_jxmj_tingfan_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_tingfan_data.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_tingfan_data();
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
     * Decodes a mahjong_jxmj_tingfan_data message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_tingfan_data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_tingfan_data} mahjong_jxmj_tingfan_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_tingfan_data.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_tingfan_data message.
     * @function verify
     * @memberof mahjong_jxmj_tingfan_data
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_tingfan_data.verify = function verify(message) {
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
     * Creates a mahjong_jxmj_tingfan_data message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_tingfan_data
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_tingfan_data} mahjong_jxmj_tingfan_data
     */
    mahjong_jxmj_tingfan_data.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_tingfan_data)
            return object;
        var message = new $root.mahjong_jxmj_tingfan_data();
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
     * Creates a plain object from a mahjong_jxmj_tingfan_data message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_tingfan_data
     * @static
     * @param {mahjong_jxmj_tingfan_data} message mahjong_jxmj_tingfan_data
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_tingfan_data.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_tingfan_data to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_tingfan_data
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_tingfan_data.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_tingfan_data;
})();

$root.mahjong_jxmj_dingpiao_not = (function() {

    /**
     * Properties of a mahjong_jxmj_dingpiao_not.
     * @exports Imahjong_jxmj_dingpiao_not
     * @interface Imahjong_jxmj_dingpiao_not
     * @property {number} cChairid mahjong_jxmj_dingpiao_not cChairid
     * @property {number} cPiaoType mahjong_jxmj_dingpiao_not cPiaoType
     * @property {number} cResend mahjong_jxmj_dingpiao_not cResend
     */

    /**
     * Constructs a new mahjong_jxmj_dingpiao_not.
     * @exports mahjong_jxmj_dingpiao_not
     * @classdesc Represents a mahjong_jxmj_dingpiao_not.
     * @implements Imahjong_jxmj_dingpiao_not
     * @constructor
     * @param {Imahjong_jxmj_dingpiao_not=} [properties] Properties to set
     */
    function mahjong_jxmj_dingpiao_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_dingpiao_not cChairid.
     * @member {number} cChairid
     * @memberof mahjong_jxmj_dingpiao_not
     * @instance
     */
    mahjong_jxmj_dingpiao_not.prototype.cChairid = 0;

    /**
     * mahjong_jxmj_dingpiao_not cPiaoType.
     * @member {number} cPiaoType
     * @memberof mahjong_jxmj_dingpiao_not
     * @instance
     */
    mahjong_jxmj_dingpiao_not.prototype.cPiaoType = 0;

    /**
     * mahjong_jxmj_dingpiao_not cResend.
     * @member {number} cResend
     * @memberof mahjong_jxmj_dingpiao_not
     * @instance
     */
    mahjong_jxmj_dingpiao_not.prototype.cResend = 0;

    /**
     * Creates a new mahjong_jxmj_dingpiao_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_dingpiao_not
     * @static
     * @param {Imahjong_jxmj_dingpiao_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_dingpiao_not} mahjong_jxmj_dingpiao_not instance
     */
    mahjong_jxmj_dingpiao_not.create = function create(properties) {
        return new mahjong_jxmj_dingpiao_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_dingpiao_not message. Does not implicitly {@link mahjong_jxmj_dingpiao_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_dingpiao_not
     * @static
     * @param {Imahjong_jxmj_dingpiao_not} message mahjong_jxmj_dingpiao_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_dingpiao_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairid);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cPiaoType);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cResend);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_dingpiao_not message, length delimited. Does not implicitly {@link mahjong_jxmj_dingpiao_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_dingpiao_not
     * @static
     * @param {Imahjong_jxmj_dingpiao_not} message mahjong_jxmj_dingpiao_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_dingpiao_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_dingpiao_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_dingpiao_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_dingpiao_not} mahjong_jxmj_dingpiao_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_dingpiao_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_dingpiao_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairid = reader.int32();
                break;
            case 2:
                message.cPiaoType = reader.int32();
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
        if (!message.hasOwnProperty("cPiaoType"))
            throw $util.ProtocolError("missing required 'cPiaoType'", { instance: message });
        if (!message.hasOwnProperty("cResend"))
            throw $util.ProtocolError("missing required 'cResend'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_jxmj_dingpiao_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_dingpiao_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_dingpiao_not} mahjong_jxmj_dingpiao_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_dingpiao_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_dingpiao_not message.
     * @function verify
     * @memberof mahjong_jxmj_dingpiao_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_dingpiao_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairid))
            return "cChairid: integer expected";
        if (!$util.isInteger(message.cPiaoType))
            return "cPiaoType: integer expected";
        if (!$util.isInteger(message.cResend))
            return "cResend: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_dingpiao_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_dingpiao_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_dingpiao_not} mahjong_jxmj_dingpiao_not
     */
    mahjong_jxmj_dingpiao_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_dingpiao_not)
            return object;
        var message = new $root.mahjong_jxmj_dingpiao_not();
        if (object.cChairid != null)
            message.cChairid = object.cChairid | 0;
        if (object.cPiaoType != null)
            message.cPiaoType = object.cPiaoType | 0;
        if (object.cResend != null)
            message.cResend = object.cResend | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_dingpiao_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_dingpiao_not
     * @static
     * @param {mahjong_jxmj_dingpiao_not} message mahjong_jxmj_dingpiao_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_dingpiao_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cChairid = 0;
            object.cPiaoType = 0;
            object.cResend = 0;
        }
        if (message.cChairid != null && message.hasOwnProperty("cChairid"))
            object.cChairid = message.cChairid;
        if (message.cPiaoType != null && message.hasOwnProperty("cPiaoType"))
            object.cPiaoType = message.cPiaoType;
        if (message.cResend != null && message.hasOwnProperty("cResend"))
            object.cResend = message.cResend;
        return object;
    };

    /**
     * Converts this mahjong_jxmj_dingpiao_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_dingpiao_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_dingpiao_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_dingpiao_not;
})();

$root.mahjong_jxmj_GameStatisc = (function() {

    /**
     * Properties of a mahjong_jxmj_GameStatisc.
     * @exports Imahjong_jxmj_GameStatisc
     * @interface Imahjong_jxmj_GameStatisc
     * @property {number} nBankerNum mahjong_jxmj_GameStatisc nBankerNum
     * @property {number} nHuNum mahjong_jxmj_GameStatisc nHuNum
     * @property {number} nDianPaoNum mahjong_jxmj_GameStatisc nDianPaoNum
     * @property {number} nMoBaoNum mahjong_jxmj_GameStatisc nMoBaoNum
     * @property {number} nBaoZhongBaoNum mahjong_jxmj_GameStatisc nBaoZhongBaoNum
     * @property {number|Long} nAmount mahjong_jxmj_GameStatisc nAmount
     */

    /**
     * Constructs a new mahjong_jxmj_GameStatisc.
     * @exports mahjong_jxmj_GameStatisc
     * @classdesc Represents a mahjong_jxmj_GameStatisc.
     * @implements Imahjong_jxmj_GameStatisc
     * @constructor
     * @param {Imahjong_jxmj_GameStatisc=} [properties] Properties to set
     */
    function mahjong_jxmj_GameStatisc(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_GameStatisc nBankerNum.
     * @member {number} nBankerNum
     * @memberof mahjong_jxmj_GameStatisc
     * @instance
     */
    mahjong_jxmj_GameStatisc.prototype.nBankerNum = 0;

    /**
     * mahjong_jxmj_GameStatisc nHuNum.
     * @member {number} nHuNum
     * @memberof mahjong_jxmj_GameStatisc
     * @instance
     */
    mahjong_jxmj_GameStatisc.prototype.nHuNum = 0;

    /**
     * mahjong_jxmj_GameStatisc nDianPaoNum.
     * @member {number} nDianPaoNum
     * @memberof mahjong_jxmj_GameStatisc
     * @instance
     */
    mahjong_jxmj_GameStatisc.prototype.nDianPaoNum = 0;

    /**
     * mahjong_jxmj_GameStatisc nMoBaoNum.
     * @member {number} nMoBaoNum
     * @memberof mahjong_jxmj_GameStatisc
     * @instance
     */
    mahjong_jxmj_GameStatisc.prototype.nMoBaoNum = 0;

    /**
     * mahjong_jxmj_GameStatisc nBaoZhongBaoNum.
     * @member {number} nBaoZhongBaoNum
     * @memberof mahjong_jxmj_GameStatisc
     * @instance
     */
    mahjong_jxmj_GameStatisc.prototype.nBaoZhongBaoNum = 0;

    /**
     * mahjong_jxmj_GameStatisc nAmount.
     * @member {number|Long} nAmount
     * @memberof mahjong_jxmj_GameStatisc
     * @instance
     */
    mahjong_jxmj_GameStatisc.prototype.nAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new mahjong_jxmj_GameStatisc instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_GameStatisc
     * @static
     * @param {Imahjong_jxmj_GameStatisc=} [properties] Properties to set
     * @returns {mahjong_jxmj_GameStatisc} mahjong_jxmj_GameStatisc instance
     */
    mahjong_jxmj_GameStatisc.create = function create(properties) {
        return new mahjong_jxmj_GameStatisc(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_GameStatisc message. Does not implicitly {@link mahjong_jxmj_GameStatisc.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_GameStatisc
     * @static
     * @param {Imahjong_jxmj_GameStatisc} message mahjong_jxmj_GameStatisc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_GameStatisc.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nBankerNum);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nHuNum);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nDianPaoNum);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nMoBaoNum);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nBaoZhongBaoNum);
        writer.uint32(/* id 6, wireType 0 =*/48).int64(message.nAmount);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_GameStatisc message, length delimited. Does not implicitly {@link mahjong_jxmj_GameStatisc.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_GameStatisc
     * @static
     * @param {Imahjong_jxmj_GameStatisc} message mahjong_jxmj_GameStatisc message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_GameStatisc.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_GameStatisc message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_GameStatisc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_GameStatisc} mahjong_jxmj_GameStatisc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_GameStatisc.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_GameStatisc();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nBankerNum = reader.int32();
                break;
            case 2:
                message.nHuNum = reader.int32();
                break;
            case 3:
                message.nDianPaoNum = reader.int32();
                break;
            case 4:
                message.nMoBaoNum = reader.int32();
                break;
            case 5:
                message.nBaoZhongBaoNum = reader.int32();
                break;
            case 6:
                message.nAmount = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nBankerNum"))
            throw $util.ProtocolError("missing required 'nBankerNum'", { instance: message });
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
     * Decodes a mahjong_jxmj_GameStatisc message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_GameStatisc
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_GameStatisc} mahjong_jxmj_GameStatisc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_GameStatisc.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_GameStatisc message.
     * @function verify
     * @memberof mahjong_jxmj_GameStatisc
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_GameStatisc.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nBankerNum))
            return "nBankerNum: integer expected";
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
     * Creates a mahjong_jxmj_GameStatisc message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_GameStatisc
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_GameStatisc} mahjong_jxmj_GameStatisc
     */
    mahjong_jxmj_GameStatisc.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_GameStatisc)
            return object;
        var message = new $root.mahjong_jxmj_GameStatisc();
        if (object.nBankerNum != null)
            message.nBankerNum = object.nBankerNum | 0;
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
     * Creates a plain object from a mahjong_jxmj_GameStatisc message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_GameStatisc
     * @static
     * @param {mahjong_jxmj_GameStatisc} message mahjong_jxmj_GameStatisc
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_GameStatisc.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nBankerNum = 0;
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
     * Converts this mahjong_jxmj_GameStatisc to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_GameStatisc
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_GameStatisc.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_GameStatisc;
})();

$root.mahjong_jxmj_Cli_TingType_req = (function() {

    /**
     * Properties of a mahjong_jxmj_Cli_TingType_req.
     * @exports Imahjong_jxmj_Cli_TingType_req
     * @interface Imahjong_jxmj_Cli_TingType_req
     * @property {number} cAutoGang mahjong_jxmj_Cli_TingType_req cAutoGang
     * @property {number} cZimoOnly mahjong_jxmj_Cli_TingType_req cZimoOnly
     */

    /**
     * Constructs a new mahjong_jxmj_Cli_TingType_req.
     * @exports mahjong_jxmj_Cli_TingType_req
     * @classdesc Represents a mahjong_jxmj_Cli_TingType_req.
     * @implements Imahjong_jxmj_Cli_TingType_req
     * @constructor
     * @param {Imahjong_jxmj_Cli_TingType_req=} [properties] Properties to set
     */
    function mahjong_jxmj_Cli_TingType_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_Cli_TingType_req cAutoGang.
     * @member {number} cAutoGang
     * @memberof mahjong_jxmj_Cli_TingType_req
     * @instance
     */
    mahjong_jxmj_Cli_TingType_req.prototype.cAutoGang = 0;

    /**
     * mahjong_jxmj_Cli_TingType_req cZimoOnly.
     * @member {number} cZimoOnly
     * @memberof mahjong_jxmj_Cli_TingType_req
     * @instance
     */
    mahjong_jxmj_Cli_TingType_req.prototype.cZimoOnly = 0;

    /**
     * Creates a new mahjong_jxmj_Cli_TingType_req instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_Cli_TingType_req
     * @static
     * @param {Imahjong_jxmj_Cli_TingType_req=} [properties] Properties to set
     * @returns {mahjong_jxmj_Cli_TingType_req} mahjong_jxmj_Cli_TingType_req instance
     */
    mahjong_jxmj_Cli_TingType_req.create = function create(properties) {
        return new mahjong_jxmj_Cli_TingType_req(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_Cli_TingType_req message. Does not implicitly {@link mahjong_jxmj_Cli_TingType_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_Cli_TingType_req
     * @static
     * @param {Imahjong_jxmj_Cli_TingType_req} message mahjong_jxmj_Cli_TingType_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_Cli_TingType_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cAutoGang);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cZimoOnly);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_Cli_TingType_req message, length delimited. Does not implicitly {@link mahjong_jxmj_Cli_TingType_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_Cli_TingType_req
     * @static
     * @param {Imahjong_jxmj_Cli_TingType_req} message mahjong_jxmj_Cli_TingType_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_Cli_TingType_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_Cli_TingType_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_Cli_TingType_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_Cli_TingType_req} mahjong_jxmj_Cli_TingType_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_Cli_TingType_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_Cli_TingType_req();
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
     * Decodes a mahjong_jxmj_Cli_TingType_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_Cli_TingType_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_Cli_TingType_req} mahjong_jxmj_Cli_TingType_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_Cli_TingType_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_Cli_TingType_req message.
     * @function verify
     * @memberof mahjong_jxmj_Cli_TingType_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_Cli_TingType_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cAutoGang))
            return "cAutoGang: integer expected";
        if (!$util.isInteger(message.cZimoOnly))
            return "cZimoOnly: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_Cli_TingType_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_Cli_TingType_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_Cli_TingType_req} mahjong_jxmj_Cli_TingType_req
     */
    mahjong_jxmj_Cli_TingType_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_Cli_TingType_req)
            return object;
        var message = new $root.mahjong_jxmj_Cli_TingType_req();
        if (object.cAutoGang != null)
            message.cAutoGang = object.cAutoGang | 0;
        if (object.cZimoOnly != null)
            message.cZimoOnly = object.cZimoOnly | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_Cli_TingType_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_Cli_TingType_req
     * @static
     * @param {mahjong_jxmj_Cli_TingType_req} message mahjong_jxmj_Cli_TingType_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_Cli_TingType_req.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_Cli_TingType_req to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_Cli_TingType_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_Cli_TingType_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_Cli_TingType_req;
})();

$root.mahjong_jxmj_robot_not = (function() {

    /**
     * Properties of a mahjong_jxmj_robot_not.
     * @exports Imahjong_jxmj_robot_not
     * @interface Imahjong_jxmj_robot_not
     * @property {number} nType mahjong_jxmj_robot_not nType
     * @property {number} cChairId mahjong_jxmj_robot_not cChairId
     * @property {Array.<number>|null} [vecCards] mahjong_jxmj_robot_not vecCards
     */

    /**
     * Constructs a new mahjong_jxmj_robot_not.
     * @exports mahjong_jxmj_robot_not
     * @classdesc Represents a mahjong_jxmj_robot_not.
     * @implements Imahjong_jxmj_robot_not
     * @constructor
     * @param {Imahjong_jxmj_robot_not=} [properties] Properties to set
     */
    function mahjong_jxmj_robot_not(properties) {
        this.vecCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_robot_not nType.
     * @member {number} nType
     * @memberof mahjong_jxmj_robot_not
     * @instance
     */
    mahjong_jxmj_robot_not.prototype.nType = 0;

    /**
     * mahjong_jxmj_robot_not cChairId.
     * @member {number} cChairId
     * @memberof mahjong_jxmj_robot_not
     * @instance
     */
    mahjong_jxmj_robot_not.prototype.cChairId = 0;

    /**
     * mahjong_jxmj_robot_not vecCards.
     * @member {Array.<number>} vecCards
     * @memberof mahjong_jxmj_robot_not
     * @instance
     */
    mahjong_jxmj_robot_not.prototype.vecCards = $util.emptyArray;

    /**
     * Creates a new mahjong_jxmj_robot_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_robot_not
     * @static
     * @param {Imahjong_jxmj_robot_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_robot_not} mahjong_jxmj_robot_not instance
     */
    mahjong_jxmj_robot_not.create = function create(properties) {
        return new mahjong_jxmj_robot_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_robot_not message. Does not implicitly {@link mahjong_jxmj_robot_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_robot_not
     * @static
     * @param {Imahjong_jxmj_robot_not} message mahjong_jxmj_robot_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_robot_not.encode = function encode(message, writer) {
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
     * Encodes the specified mahjong_jxmj_robot_not message, length delimited. Does not implicitly {@link mahjong_jxmj_robot_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_robot_not
     * @static
     * @param {Imahjong_jxmj_robot_not} message mahjong_jxmj_robot_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_robot_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_robot_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_robot_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_robot_not} mahjong_jxmj_robot_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_robot_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_robot_not();
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
     * Decodes a mahjong_jxmj_robot_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_robot_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_robot_not} mahjong_jxmj_robot_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_robot_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_robot_not message.
     * @function verify
     * @memberof mahjong_jxmj_robot_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_robot_not.verify = function verify(message) {
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
     * Creates a mahjong_jxmj_robot_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_robot_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_robot_not} mahjong_jxmj_robot_not
     */
    mahjong_jxmj_robot_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_robot_not)
            return object;
        var message = new $root.mahjong_jxmj_robot_not();
        if (object.nType != null)
            message.nType = object.nType | 0;
        if (object.cChairId != null)
            message.cChairId = object.cChairId | 0;
        if (object.vecCards) {
            if (!Array.isArray(object.vecCards))
                throw TypeError(".mahjong_jxmj_robot_not.vecCards: array expected");
            message.vecCards = [];
            for (var i = 0; i < object.vecCards.length; ++i)
                message.vecCards[i] = object.vecCards[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_robot_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_robot_not
     * @static
     * @param {mahjong_jxmj_robot_not} message mahjong_jxmj_robot_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_robot_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_robot_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_robot_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_robot_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_robot_not;
})();

$root.mahjong_cb_login_req = (function() {

    /**
     * Properties of a mahjong_cb_login_req.
     * @exports Imahjong_cb_login_req
     * @interface Imahjong_cb_login_req
     * @property {number|Long} plyGuid mahjong_cb_login_req plyGuid
     * @property {string} plyTicket mahjong_cb_login_req plyTicket
     * @property {number} version mahjong_cb_login_req version
     * @property {string} extParam mahjong_cb_login_req extParam
     * @property {number} mainGameId mahjong_cb_login_req mainGameId
     * @property {number} gameGroup mahjong_cb_login_req gameGroup
     */

    /**
     * Constructs a new mahjong_cb_login_req.
     * @exports mahjong_cb_login_req
     * @classdesc Represents a mahjong_cb_login_req.
     * @implements Imahjong_cb_login_req
     * @constructor
     * @param {Imahjong_cb_login_req=} [properties] Properties to set
     */
    function mahjong_cb_login_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_cb_login_req plyGuid.
     * @member {number|Long} plyGuid
     * @memberof mahjong_cb_login_req
     * @instance
     */
    mahjong_cb_login_req.prototype.plyGuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * mahjong_cb_login_req plyTicket.
     * @member {string} plyTicket
     * @memberof mahjong_cb_login_req
     * @instance
     */
    mahjong_cb_login_req.prototype.plyTicket = "";

    /**
     * mahjong_cb_login_req version.
     * @member {number} version
     * @memberof mahjong_cb_login_req
     * @instance
     */
    mahjong_cb_login_req.prototype.version = 0;

    /**
     * mahjong_cb_login_req extParam.
     * @member {string} extParam
     * @memberof mahjong_cb_login_req
     * @instance
     */
    mahjong_cb_login_req.prototype.extParam = "";

    /**
     * mahjong_cb_login_req mainGameId.
     * @member {number} mainGameId
     * @memberof mahjong_cb_login_req
     * @instance
     */
    mahjong_cb_login_req.prototype.mainGameId = 0;

    /**
     * mahjong_cb_login_req gameGroup.
     * @member {number} gameGroup
     * @memberof mahjong_cb_login_req
     * @instance
     */
    mahjong_cb_login_req.prototype.gameGroup = 0;

    /**
     * Creates a new mahjong_cb_login_req instance using the specified properties.
     * @function create
     * @memberof mahjong_cb_login_req
     * @static
     * @param {Imahjong_cb_login_req=} [properties] Properties to set
     * @returns {mahjong_cb_login_req} mahjong_cb_login_req instance
     */
    mahjong_cb_login_req.create = function create(properties) {
        return new mahjong_cb_login_req(properties);
    };

    /**
     * Encodes the specified mahjong_cb_login_req message. Does not implicitly {@link mahjong_cb_login_req.verify|verify} messages.
     * @function encode
     * @memberof mahjong_cb_login_req
     * @static
     * @param {Imahjong_cb_login_req} message mahjong_cb_login_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_cb_login_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.plyGuid);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.plyTicket);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.version);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.extParam);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.mainGameId);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.gameGroup);
        return writer;
    };

    /**
     * Encodes the specified mahjong_cb_login_req message, length delimited. Does not implicitly {@link mahjong_cb_login_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_cb_login_req
     * @static
     * @param {Imahjong_cb_login_req} message mahjong_cb_login_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_cb_login_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_cb_login_req message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_cb_login_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_cb_login_req} mahjong_cb_login_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_cb_login_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_cb_login_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.plyGuid = reader.int64();
                break;
            case 2:
                message.plyTicket = reader.string();
                break;
            case 3:
                message.version = reader.int32();
                break;
            case 4:
                message.extParam = reader.string();
                break;
            case 5:
                message.mainGameId = reader.int32();
                break;
            case 6:
                message.gameGroup = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("plyGuid"))
            throw $util.ProtocolError("missing required 'plyGuid'", { instance: message });
        if (!message.hasOwnProperty("plyTicket"))
            throw $util.ProtocolError("missing required 'plyTicket'", { instance: message });
        if (!message.hasOwnProperty("version"))
            throw $util.ProtocolError("missing required 'version'", { instance: message });
        if (!message.hasOwnProperty("extParam"))
            throw $util.ProtocolError("missing required 'extParam'", { instance: message });
        if (!message.hasOwnProperty("mainGameId"))
            throw $util.ProtocolError("missing required 'mainGameId'", { instance: message });
        if (!message.hasOwnProperty("gameGroup"))
            throw $util.ProtocolError("missing required 'gameGroup'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_cb_login_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_cb_login_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_cb_login_req} mahjong_cb_login_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_cb_login_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_cb_login_req message.
     * @function verify
     * @memberof mahjong_cb_login_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_cb_login_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.plyGuid) && !(message.plyGuid && $util.isInteger(message.plyGuid.low) && $util.isInteger(message.plyGuid.high)))
            return "plyGuid: integer|Long expected";
        if (!$util.isString(message.plyTicket))
            return "plyTicket: string expected";
        if (!$util.isInteger(message.version))
            return "version: integer expected";
        if (!$util.isString(message.extParam))
            return "extParam: string expected";
        if (!$util.isInteger(message.mainGameId))
            return "mainGameId: integer expected";
        if (!$util.isInteger(message.gameGroup))
            return "gameGroup: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_cb_login_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_cb_login_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_cb_login_req} mahjong_cb_login_req
     */
    mahjong_cb_login_req.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_cb_login_req)
            return object;
        var message = new $root.mahjong_cb_login_req();
        if (object.plyGuid != null)
            if ($util.Long)
                (message.plyGuid = $util.Long.fromValue(object.plyGuid)).unsigned = false;
            else if (typeof object.plyGuid === "string")
                message.plyGuid = parseInt(object.plyGuid, 10);
            else if (typeof object.plyGuid === "number")
                message.plyGuid = object.plyGuid;
            else if (typeof object.plyGuid === "object")
                message.plyGuid = new $util.LongBits(object.plyGuid.low >>> 0, object.plyGuid.high >>> 0).toNumber();
        if (object.plyTicket != null)
            message.plyTicket = String(object.plyTicket);
        if (object.version != null)
            message.version = object.version | 0;
        if (object.extParam != null)
            message.extParam = String(object.extParam);
        if (object.mainGameId != null)
            message.mainGameId = object.mainGameId | 0;
        if (object.gameGroup != null)
            message.gameGroup = object.gameGroup | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_cb_login_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_cb_login_req
     * @static
     * @param {mahjong_cb_login_req} message mahjong_cb_login_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_cb_login_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.plyGuid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.plyGuid = options.longs === String ? "0" : 0;
            object.plyTicket = "";
            object.version = 0;
            object.extParam = "";
            object.mainGameId = 0;
            object.gameGroup = 0;
        }
        if (message.plyGuid != null && message.hasOwnProperty("plyGuid"))
            if (typeof message.plyGuid === "number")
                object.plyGuid = options.longs === String ? String(message.plyGuid) : message.plyGuid;
            else
                object.plyGuid = options.longs === String ? $util.Long.prototype.toString.call(message.plyGuid) : options.longs === Number ? new $util.LongBits(message.plyGuid.low >>> 0, message.plyGuid.high >>> 0).toNumber() : message.plyGuid;
        if (message.plyTicket != null && message.hasOwnProperty("plyTicket"))
            object.plyTicket = message.plyTicket;
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        if (message.extParam != null && message.hasOwnProperty("extParam"))
            object.extParam = message.extParam;
        if (message.mainGameId != null && message.hasOwnProperty("mainGameId"))
            object.mainGameId = message.mainGameId;
        if (message.gameGroup != null && message.hasOwnProperty("gameGroup"))
            object.gameGroup = message.gameGroup;
        return object;
    };

    /**
     * Converts this mahjong_cb_login_req to JSON.
     * @function toJSON
     * @memberof mahjong_cb_login_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_cb_login_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_cb_login_req;
})();

$root.mahjong_jxmj_gc_clienttimer_not = (function() {

    /**
     * Properties of a mahjong_jxmj_gc_clienttimer_not.
     * @exports Imahjong_jxmj_gc_clienttimer_not
     * @interface Imahjong_jxmj_gc_clienttimer_not
     * @property {number} cChairId mahjong_jxmj_gc_clienttimer_not cChairId
     * @property {number} cNextChairId mahjong_jxmj_gc_clienttimer_not cNextChairId
     * @property {number} nPeriod mahjong_jxmj_gc_clienttimer_not nPeriod
     * @property {number} nOpcode mahjong_jxmj_gc_clienttimer_not nOpcode
     */

    /**
     * Constructs a new mahjong_jxmj_gc_clienttimer_not.
     * @exports mahjong_jxmj_gc_clienttimer_not
     * @classdesc Represents a mahjong_jxmj_gc_clienttimer_not.
     * @implements Imahjong_jxmj_gc_clienttimer_not
     * @constructor
     * @param {Imahjong_jxmj_gc_clienttimer_not=} [properties] Properties to set
     */
    function mahjong_jxmj_gc_clienttimer_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_gc_clienttimer_not cChairId.
     * @member {number} cChairId
     * @memberof mahjong_jxmj_gc_clienttimer_not
     * @instance
     */
    mahjong_jxmj_gc_clienttimer_not.prototype.cChairId = 0;

    /**
     * mahjong_jxmj_gc_clienttimer_not cNextChairId.
     * @member {number} cNextChairId
     * @memberof mahjong_jxmj_gc_clienttimer_not
     * @instance
     */
    mahjong_jxmj_gc_clienttimer_not.prototype.cNextChairId = 0;

    /**
     * mahjong_jxmj_gc_clienttimer_not nPeriod.
     * @member {number} nPeriod
     * @memberof mahjong_jxmj_gc_clienttimer_not
     * @instance
     */
    mahjong_jxmj_gc_clienttimer_not.prototype.nPeriod = 0;

    /**
     * mahjong_jxmj_gc_clienttimer_not nOpcode.
     * @member {number} nOpcode
     * @memberof mahjong_jxmj_gc_clienttimer_not
     * @instance
     */
    mahjong_jxmj_gc_clienttimer_not.prototype.nOpcode = 0;

    /**
     * Creates a new mahjong_jxmj_gc_clienttimer_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_gc_clienttimer_not
     * @static
     * @param {Imahjong_jxmj_gc_clienttimer_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_gc_clienttimer_not} mahjong_jxmj_gc_clienttimer_not instance
     */
    mahjong_jxmj_gc_clienttimer_not.create = function create(properties) {
        return new mahjong_jxmj_gc_clienttimer_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_gc_clienttimer_not message. Does not implicitly {@link mahjong_jxmj_gc_clienttimer_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_gc_clienttimer_not
     * @static
     * @param {Imahjong_jxmj_gc_clienttimer_not} message mahjong_jxmj_gc_clienttimer_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_gc_clienttimer_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cNextChairId);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nPeriod);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nOpcode);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_gc_clienttimer_not message, length delimited. Does not implicitly {@link mahjong_jxmj_gc_clienttimer_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_gc_clienttimer_not
     * @static
     * @param {Imahjong_jxmj_gc_clienttimer_not} message mahjong_jxmj_gc_clienttimer_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_gc_clienttimer_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_gc_clienttimer_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_gc_clienttimer_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_gc_clienttimer_not} mahjong_jxmj_gc_clienttimer_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_gc_clienttimer_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_gc_clienttimer_not();
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
     * Decodes a mahjong_jxmj_gc_clienttimer_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_gc_clienttimer_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_gc_clienttimer_not} mahjong_jxmj_gc_clienttimer_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_gc_clienttimer_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_gc_clienttimer_not message.
     * @function verify
     * @memberof mahjong_jxmj_gc_clienttimer_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_gc_clienttimer_not.verify = function verify(message) {
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
     * Creates a mahjong_jxmj_gc_clienttimer_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_gc_clienttimer_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_gc_clienttimer_not} mahjong_jxmj_gc_clienttimer_not
     */
    mahjong_jxmj_gc_clienttimer_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_gc_clienttimer_not)
            return object;
        var message = new $root.mahjong_jxmj_gc_clienttimer_not();
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
     * Creates a plain object from a mahjong_jxmj_gc_clienttimer_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_gc_clienttimer_not
     * @static
     * @param {mahjong_jxmj_gc_clienttimer_not} message mahjong_jxmj_gc_clienttimer_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_gc_clienttimer_not.toObject = function toObject(message, options) {
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
     * Converts this mahjong_jxmj_gc_clienttimer_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_gc_clienttimer_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_gc_clienttimer_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_gc_clienttimer_not;
})();

$root.mahjong_jxmj_fan_data = (function() {

    /**
     * Properties of a mahjong_jxmj_fan_data.
     * @exports Imahjong_jxmj_fan_data
     * @interface Imahjong_jxmj_fan_data
     * @property {number} cChairId mahjong_jxmj_fan_data cChairId
     * @property {number} nCredits mahjong_jxmj_fan_data nCredits
     * @property {number} cType mahjong_jxmj_fan_data cType
     * @property {Array.<number>|null} [vecFan] mahjong_jxmj_fan_data vecFan
     */

    /**
     * Constructs a new mahjong_jxmj_fan_data.
     * @exports mahjong_jxmj_fan_data
     * @classdesc Represents a mahjong_jxmj_fan_data.
     * @implements Imahjong_jxmj_fan_data
     * @constructor
     * @param {Imahjong_jxmj_fan_data=} [properties] Properties to set
     */
    function mahjong_jxmj_fan_data(properties) {
        this.vecFan = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_fan_data cChairId.
     * @member {number} cChairId
     * @memberof mahjong_jxmj_fan_data
     * @instance
     */
    mahjong_jxmj_fan_data.prototype.cChairId = 0;

    /**
     * mahjong_jxmj_fan_data nCredits.
     * @member {number} nCredits
     * @memberof mahjong_jxmj_fan_data
     * @instance
     */
    mahjong_jxmj_fan_data.prototype.nCredits = 0;

    /**
     * mahjong_jxmj_fan_data cType.
     * @member {number} cType
     * @memberof mahjong_jxmj_fan_data
     * @instance
     */
    mahjong_jxmj_fan_data.prototype.cType = 0;

    /**
     * mahjong_jxmj_fan_data vecFan.
     * @member {Array.<number>} vecFan
     * @memberof mahjong_jxmj_fan_data
     * @instance
     */
    mahjong_jxmj_fan_data.prototype.vecFan = $util.emptyArray;

    /**
     * Creates a new mahjong_jxmj_fan_data instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_fan_data
     * @static
     * @param {Imahjong_jxmj_fan_data=} [properties] Properties to set
     * @returns {mahjong_jxmj_fan_data} mahjong_jxmj_fan_data instance
     */
    mahjong_jxmj_fan_data.create = function create(properties) {
        return new mahjong_jxmj_fan_data(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_fan_data message. Does not implicitly {@link mahjong_jxmj_fan_data.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_fan_data
     * @static
     * @param {Imahjong_jxmj_fan_data} message mahjong_jxmj_fan_data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_fan_data.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairId);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nCredits);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cType);
        if (message.vecFan != null && message.vecFan.length)
            for (var i = 0; i < message.vecFan.length; ++i)
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.vecFan[i]);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_fan_data message, length delimited. Does not implicitly {@link mahjong_jxmj_fan_data.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_fan_data
     * @static
     * @param {Imahjong_jxmj_fan_data} message mahjong_jxmj_fan_data message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_fan_data.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_fan_data message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_fan_data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_fan_data} mahjong_jxmj_fan_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_fan_data.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_fan_data();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cChairId = reader.int32();
                break;
            case 2:
                message.nCredits = reader.int32();
                break;
            case 3:
                message.cType = reader.int32();
                break;
            case 4:
                if (!(message.vecFan && message.vecFan.length))
                    message.vecFan = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.vecFan.push(reader.int32());
                } else
                    message.vecFan.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("cChairId"))
            throw $util.ProtocolError("missing required 'cChairId'", { instance: message });
        if (!message.hasOwnProperty("nCredits"))
            throw $util.ProtocolError("missing required 'nCredits'", { instance: message });
        if (!message.hasOwnProperty("cType"))
            throw $util.ProtocolError("missing required 'cType'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_jxmj_fan_data message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_fan_data
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_fan_data} mahjong_jxmj_fan_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_fan_data.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_fan_data message.
     * @function verify
     * @memberof mahjong_jxmj_fan_data
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_fan_data.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.cChairId))
            return "cChairId: integer expected";
        if (!$util.isInteger(message.nCredits))
            return "nCredits: integer expected";
        if (!$util.isInteger(message.cType))
            return "cType: integer expected";
        if (message.vecFan != null && message.hasOwnProperty("vecFan")) {
            if (!Array.isArray(message.vecFan))
                return "vecFan: array expected";
            for (var i = 0; i < message.vecFan.length; ++i)
                if (!$util.isInteger(message.vecFan[i]))
                    return "vecFan: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a mahjong_jxmj_fan_data message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_fan_data
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_fan_data} mahjong_jxmj_fan_data
     */
    mahjong_jxmj_fan_data.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_fan_data)
            return object;
        var message = new $root.mahjong_jxmj_fan_data();
        if (object.cChairId != null)
            message.cChairId = object.cChairId | 0;
        if (object.nCredits != null)
            message.nCredits = object.nCredits | 0;
        if (object.cType != null)
            message.cType = object.cType | 0;
        if (object.vecFan) {
            if (!Array.isArray(object.vecFan))
                throw TypeError(".mahjong_jxmj_fan_data.vecFan: array expected");
            message.vecFan = [];
            for (var i = 0; i < object.vecFan.length; ++i)
                message.vecFan[i] = object.vecFan[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_fan_data message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_fan_data
     * @static
     * @param {mahjong_jxmj_fan_data} message mahjong_jxmj_fan_data
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_fan_data.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.vecFan = [];
        if (options.defaults) {
            object.cChairId = 0;
            object.nCredits = 0;
            object.cType = 0;
        }
        if (message.cChairId != null && message.hasOwnProperty("cChairId"))
            object.cChairId = message.cChairId;
        if (message.nCredits != null && message.hasOwnProperty("nCredits"))
            object.nCredits = message.nCredits;
        if (message.cType != null && message.hasOwnProperty("cType"))
            object.cType = message.cType;
        if (message.vecFan && message.vecFan.length) {
            object.vecFan = [];
            for (var j = 0; j < message.vecFan.length; ++j)
                object.vecFan[j] = message.vecFan[j];
        }
        return object;
    };

    /**
     * Converts this mahjong_jxmj_fan_data to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_fan_data
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_fan_data.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_fan_data;
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

$root.mahjong_jxmj_operate_not = (function() {

    /**
     * Properties of a mahjong_jxmj_operate_not.
     * @exports Imahjong_jxmj_operate_not
     * @interface Imahjong_jxmj_operate_not
     * @property {number} cChairID mahjong_jxmj_operate_not cChairID
     * @property {number} nOpcode mahjong_jxmj_operate_not nOpcode
     * @property {number} cCard mahjong_jxmj_operate_not cCard
     * @property {number} cWallCardNum mahjong_jxmj_operate_not cWallCardNum
     * @property {number} cPaiChairID mahjong_jxmj_operate_not cPaiChairID
     * @property {number} nFrontPassedNum mahjong_jxmj_operate_not nFrontPassedNum
     * @property {number} nBehidePassedNum mahjong_jxmj_operate_not nBehidePassedNum
     */

    /**
     * Constructs a new mahjong_jxmj_operate_not.
     * @exports mahjong_jxmj_operate_not
     * @classdesc Represents a mahjong_jxmj_operate_not.
     * @implements Imahjong_jxmj_operate_not
     * @constructor
     * @param {Imahjong_jxmj_operate_not=} [properties] Properties to set
     */
    function mahjong_jxmj_operate_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * mahjong_jxmj_operate_not cChairID.
     * @member {number} cChairID
     * @memberof mahjong_jxmj_operate_not
     * @instance
     */
    mahjong_jxmj_operate_not.prototype.cChairID = 0;

    /**
     * mahjong_jxmj_operate_not nOpcode.
     * @member {number} nOpcode
     * @memberof mahjong_jxmj_operate_not
     * @instance
     */
    mahjong_jxmj_operate_not.prototype.nOpcode = 0;

    /**
     * mahjong_jxmj_operate_not cCard.
     * @member {number} cCard
     * @memberof mahjong_jxmj_operate_not
     * @instance
     */
    mahjong_jxmj_operate_not.prototype.cCard = 0;

    /**
     * mahjong_jxmj_operate_not cWallCardNum.
     * @member {number} cWallCardNum
     * @memberof mahjong_jxmj_operate_not
     * @instance
     */
    mahjong_jxmj_operate_not.prototype.cWallCardNum = 0;

    /**
     * mahjong_jxmj_operate_not cPaiChairID.
     * @member {number} cPaiChairID
     * @memberof mahjong_jxmj_operate_not
     * @instance
     */
    mahjong_jxmj_operate_not.prototype.cPaiChairID = 0;

    /**
     * mahjong_jxmj_operate_not nFrontPassedNum.
     * @member {number} nFrontPassedNum
     * @memberof mahjong_jxmj_operate_not
     * @instance
     */
    mahjong_jxmj_operate_not.prototype.nFrontPassedNum = 0;

    /**
     * mahjong_jxmj_operate_not nBehidePassedNum.
     * @member {number} nBehidePassedNum
     * @memberof mahjong_jxmj_operate_not
     * @instance
     */
    mahjong_jxmj_operate_not.prototype.nBehidePassedNum = 0;

    /**
     * Creates a new mahjong_jxmj_operate_not instance using the specified properties.
     * @function create
     * @memberof mahjong_jxmj_operate_not
     * @static
     * @param {Imahjong_jxmj_operate_not=} [properties] Properties to set
     * @returns {mahjong_jxmj_operate_not} mahjong_jxmj_operate_not instance
     */
    mahjong_jxmj_operate_not.create = function create(properties) {
        return new mahjong_jxmj_operate_not(properties);
    };

    /**
     * Encodes the specified mahjong_jxmj_operate_not message. Does not implicitly {@link mahjong_jxmj_operate_not.verify|verify} messages.
     * @function encode
     * @memberof mahjong_jxmj_operate_not
     * @static
     * @param {Imahjong_jxmj_operate_not} message mahjong_jxmj_operate_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_operate_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cChairID);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nOpcode);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cCard);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cWallCardNum);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cPaiChairID);
        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.nFrontPassedNum);
        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.nBehidePassedNum);
        return writer;
    };

    /**
     * Encodes the specified mahjong_jxmj_operate_not message, length delimited. Does not implicitly {@link mahjong_jxmj_operate_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof mahjong_jxmj_operate_not
     * @static
     * @param {Imahjong_jxmj_operate_not} message mahjong_jxmj_operate_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    mahjong_jxmj_operate_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a mahjong_jxmj_operate_not message from the specified reader or buffer.
     * @function decode
     * @memberof mahjong_jxmj_operate_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {mahjong_jxmj_operate_not} mahjong_jxmj_operate_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_operate_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mahjong_jxmj_operate_not();
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
                message.cPaiChairID = reader.int32();
                break;
            case 6:
                message.nFrontPassedNum = reader.int32();
                break;
            case 7:
                message.nBehidePassedNum = reader.int32();
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
        if (!message.hasOwnProperty("cPaiChairID"))
            throw $util.ProtocolError("missing required 'cPaiChairID'", { instance: message });
        if (!message.hasOwnProperty("nFrontPassedNum"))
            throw $util.ProtocolError("missing required 'nFrontPassedNum'", { instance: message });
        if (!message.hasOwnProperty("nBehidePassedNum"))
            throw $util.ProtocolError("missing required 'nBehidePassedNum'", { instance: message });
        return message;
    };

    /**
     * Decodes a mahjong_jxmj_operate_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof mahjong_jxmj_operate_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {mahjong_jxmj_operate_not} mahjong_jxmj_operate_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    mahjong_jxmj_operate_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a mahjong_jxmj_operate_not message.
     * @function verify
     * @memberof mahjong_jxmj_operate_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    mahjong_jxmj_operate_not.verify = function verify(message) {
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
        if (!$util.isInteger(message.cPaiChairID))
            return "cPaiChairID: integer expected";
        if (!$util.isInteger(message.nFrontPassedNum))
            return "nFrontPassedNum: integer expected";
        if (!$util.isInteger(message.nBehidePassedNum))
            return "nBehidePassedNum: integer expected";
        return null;
    };

    /**
     * Creates a mahjong_jxmj_operate_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof mahjong_jxmj_operate_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {mahjong_jxmj_operate_not} mahjong_jxmj_operate_not
     */
    mahjong_jxmj_operate_not.fromObject = function fromObject(object) {
        if (object instanceof $root.mahjong_jxmj_operate_not)
            return object;
        var message = new $root.mahjong_jxmj_operate_not();
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.nOpcode != null)
            message.nOpcode = object.nOpcode | 0;
        if (object.cCard != null)
            message.cCard = object.cCard | 0;
        if (object.cWallCardNum != null)
            message.cWallCardNum = object.cWallCardNum | 0;
        if (object.cPaiChairID != null)
            message.cPaiChairID = object.cPaiChairID | 0;
        if (object.nFrontPassedNum != null)
            message.nFrontPassedNum = object.nFrontPassedNum | 0;
        if (object.nBehidePassedNum != null)
            message.nBehidePassedNum = object.nBehidePassedNum | 0;
        return message;
    };

    /**
     * Creates a plain object from a mahjong_jxmj_operate_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof mahjong_jxmj_operate_not
     * @static
     * @param {mahjong_jxmj_operate_not} message mahjong_jxmj_operate_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    mahjong_jxmj_operate_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cChairID = 0;
            object.nOpcode = 0;
            object.cCard = 0;
            object.cWallCardNum = 0;
            object.cPaiChairID = 0;
            object.nFrontPassedNum = 0;
            object.nBehidePassedNum = 0;
        }
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.nOpcode != null && message.hasOwnProperty("nOpcode"))
            object.nOpcode = message.nOpcode;
        if (message.cCard != null && message.hasOwnProperty("cCard"))
            object.cCard = message.cCard;
        if (message.cWallCardNum != null && message.hasOwnProperty("cWallCardNum"))
            object.cWallCardNum = message.cWallCardNum;
        if (message.cPaiChairID != null && message.hasOwnProperty("cPaiChairID"))
            object.cPaiChairID = message.cPaiChairID;
        if (message.nFrontPassedNum != null && message.hasOwnProperty("nFrontPassedNum"))
            object.nFrontPassedNum = message.nFrontPassedNum;
        if (message.nBehidePassedNum != null && message.hasOwnProperty("nBehidePassedNum"))
            object.nBehidePassedNum = message.nBehidePassedNum;
        return object;
    };

    /**
     * Converts this mahjong_jxmj_operate_not to JSON.
     * @function toJSON
     * @memberof mahjong_jxmj_operate_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    mahjong_jxmj_operate_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return mahjong_jxmj_operate_not;
})();

module.exports = $root;
