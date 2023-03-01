/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto_cb_login_req = (function() {

    /**
     * Properties of a proto_cb_login_req.
     * @exports Iproto_cb_login_req
     * @interface Iproto_cb_login_req
     * @property {number|Long} plyGuid proto_cb_login_req plyGuid
     * @property {string} plyTicket proto_cb_login_req plyTicket
     * @property {number} version proto_cb_login_req version
     * @property {string} extParam proto_cb_login_req extParam
     * @property {number} mainGameId proto_cb_login_req mainGameId
     * @property {number} gameGroup proto_cb_login_req gameGroup
     */

    /**
     * Constructs a new proto_cb_login_req.
     * @exports proto_cb_login_req
     * @classdesc Represents a proto_cb_login_req.
     * @implements Iproto_cb_login_req
     * @constructor
     * @param {Iproto_cb_login_req=} [properties] Properties to set
     */
    function proto_cb_login_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_cb_login_req plyGuid.
     * @member {number|Long} plyGuid
     * @memberof proto_cb_login_req
     * @instance
     */
    proto_cb_login_req.prototype.plyGuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * proto_cb_login_req plyTicket.
     * @member {string} plyTicket
     * @memberof proto_cb_login_req
     * @instance
     */
    proto_cb_login_req.prototype.plyTicket = "";

    /**
     * proto_cb_login_req version.
     * @member {number} version
     * @memberof proto_cb_login_req
     * @instance
     */
    proto_cb_login_req.prototype.version = 0;

    /**
     * proto_cb_login_req extParam.
     * @member {string} extParam
     * @memberof proto_cb_login_req
     * @instance
     */
    proto_cb_login_req.prototype.extParam = "";

    /**
     * proto_cb_login_req mainGameId.
     * @member {number} mainGameId
     * @memberof proto_cb_login_req
     * @instance
     */
    proto_cb_login_req.prototype.mainGameId = 0;

    /**
     * proto_cb_login_req gameGroup.
     * @member {number} gameGroup
     * @memberof proto_cb_login_req
     * @instance
     */
    proto_cb_login_req.prototype.gameGroup = 0;

    /**
     * Creates a new proto_cb_login_req instance using the specified properties.
     * @function create
     * @memberof proto_cb_login_req
     * @static
     * @param {Iproto_cb_login_req=} [properties] Properties to set
     * @returns {proto_cb_login_req} proto_cb_login_req instance
     */
    proto_cb_login_req.create = function create(properties) {
        return new proto_cb_login_req(properties);
    };

    /**
     * Encodes the specified proto_cb_login_req message. Does not implicitly {@link proto_cb_login_req.verify|verify} messages.
     * @function encode
     * @memberof proto_cb_login_req
     * @static
     * @param {Iproto_cb_login_req} message proto_cb_login_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_cb_login_req.encode = function encode(message, writer) {
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
     * Encodes the specified proto_cb_login_req message, length delimited. Does not implicitly {@link proto_cb_login_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_cb_login_req
     * @static
     * @param {Iproto_cb_login_req} message proto_cb_login_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_cb_login_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_cb_login_req message from the specified reader or buffer.
     * @function decode
     * @memberof proto_cb_login_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_cb_login_req} proto_cb_login_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_cb_login_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_cb_login_req();
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
     * Decodes a proto_cb_login_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_cb_login_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_cb_login_req} proto_cb_login_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_cb_login_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_cb_login_req message.
     * @function verify
     * @memberof proto_cb_login_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_cb_login_req.verify = function verify(message) {
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
     * Creates a proto_cb_login_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_cb_login_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_cb_login_req} proto_cb_login_req
     */
    proto_cb_login_req.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_cb_login_req)
            return object;
        var message = new $root.proto_cb_login_req();
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
     * Creates a plain object from a proto_cb_login_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_cb_login_req
     * @static
     * @param {proto_cb_login_req} message proto_cb_login_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_cb_login_req.toObject = function toObject(message, options) {
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
     * Converts this proto_cb_login_req to JSON.
     * @function toJSON
     * @memberof proto_cb_login_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_cb_login_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_cb_login_req;
})();

$root.proto_bc_login_ack = (function() {

    /**
     * Properties of a proto_bc_login_ack.
     * @exports Iproto_bc_login_ack
     * @interface Iproto_bc_login_ack
     * @property {number} ret proto_bc_login_ack ret
     * @property {Iproto_PlyBaseData} plyBaseData proto_bc_login_ack plyBaseData
     * @property {Iproto_PlayerStatus} plyStatus proto_bc_login_ack plyStatus
     * @property {string} errorMsg proto_bc_login_ack errorMsg
     */

    /**
     * Constructs a new proto_bc_login_ack.
     * @exports proto_bc_login_ack
     * @classdesc Represents a proto_bc_login_ack.
     * @implements Iproto_bc_login_ack
     * @constructor
     * @param {Iproto_bc_login_ack=} [properties] Properties to set
     */
    function proto_bc_login_ack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_bc_login_ack ret.
     * @member {number} ret
     * @memberof proto_bc_login_ack
     * @instance
     */
    proto_bc_login_ack.prototype.ret = 0;

    /**
     * proto_bc_login_ack plyBaseData.
     * @member {Iproto_PlyBaseData} plyBaseData
     * @memberof proto_bc_login_ack
     * @instance
     */
    proto_bc_login_ack.prototype.plyBaseData = null;

    /**
     * proto_bc_login_ack plyStatus.
     * @member {Iproto_PlayerStatus} plyStatus
     * @memberof proto_bc_login_ack
     * @instance
     */
    proto_bc_login_ack.prototype.plyStatus = null;

    /**
     * proto_bc_login_ack errorMsg.
     * @member {string} errorMsg
     * @memberof proto_bc_login_ack
     * @instance
     */
    proto_bc_login_ack.prototype.errorMsg = "";

    /**
     * Creates a new proto_bc_login_ack instance using the specified properties.
     * @function create
     * @memberof proto_bc_login_ack
     * @static
     * @param {Iproto_bc_login_ack=} [properties] Properties to set
     * @returns {proto_bc_login_ack} proto_bc_login_ack instance
     */
    proto_bc_login_ack.create = function create(properties) {
        return new proto_bc_login_ack(properties);
    };

    /**
     * Encodes the specified proto_bc_login_ack message. Does not implicitly {@link proto_bc_login_ack.verify|verify} messages.
     * @function encode
     * @memberof proto_bc_login_ack
     * @static
     * @param {Iproto_bc_login_ack} message proto_bc_login_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_login_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
        $root.proto_PlyBaseData.encode(message.plyBaseData, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        $root.proto_PlayerStatus.encode(message.plyStatus, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.errorMsg);
        return writer;
    };

    /**
     * Encodes the specified proto_bc_login_ack message, length delimited. Does not implicitly {@link proto_bc_login_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_bc_login_ack
     * @static
     * @param {Iproto_bc_login_ack} message proto_bc_login_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_login_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_bc_login_ack message from the specified reader or buffer.
     * @function decode
     * @memberof proto_bc_login_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_bc_login_ack} proto_bc_login_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_login_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_bc_login_ack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ret = reader.int32();
                    break;
                case 2:
                    message.plyBaseData = $root.proto_PlyBaseData.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.plyStatus = $root.proto_PlayerStatus.decode(reader, reader.uint32());
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
     * Decodes a proto_bc_login_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_bc_login_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_bc_login_ack} proto_bc_login_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_login_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_bc_login_ack message.
     * @function verify
     * @memberof proto_bc_login_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_bc_login_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.ret))
            return "ret: integer expected";
        {
            var error = $root.proto_PlyBaseData.verify(message.plyBaseData);
            if (error)
                return "plyBaseData." + error;
        }
        {
            var error = $root.proto_PlayerStatus.verify(message.plyStatus);
            if (error)
                return "plyStatus." + error;
        }
        if (!$util.isString(message.errorMsg))
            return "errorMsg: string expected";
        return null;
    };

    /**
     * Creates a proto_bc_login_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_bc_login_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_bc_login_ack} proto_bc_login_ack
     */
    proto_bc_login_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_bc_login_ack)
            return object;
        var message = new $root.proto_bc_login_ack();
        if (object.ret != null)
            message.ret = object.ret | 0;
        if (object.plyBaseData != null) {
            if (typeof object.plyBaseData !== "object")
                throw TypeError(".proto_bc_login_ack.plyBaseData: object expected");
            message.plyBaseData = $root.proto_PlyBaseData.fromObject(object.plyBaseData);
        }
        if (object.plyStatus != null) {
            if (typeof object.plyStatus !== "object")
                throw TypeError(".proto_bc_login_ack.plyStatus: object expected");
            message.plyStatus = $root.proto_PlayerStatus.fromObject(object.plyStatus);
        }
        if (object.errorMsg != null)
            message.errorMsg = String(object.errorMsg);
        return message;
    };

    /**
     * Creates a plain object from a proto_bc_login_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_bc_login_ack
     * @static
     * @param {proto_bc_login_ack} message proto_bc_login_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_bc_login_ack.toObject = function toObject(message, options) {
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
            object.plyBaseData = $root.proto_PlyBaseData.toObject(message.plyBaseData, options);
        if (message.plyStatus != null && message.hasOwnProperty("plyStatus"))
            object.plyStatus = $root.proto_PlayerStatus.toObject(message.plyStatus, options);
        if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
            object.errorMsg = message.errorMsg;
        return object;
    };

    /**
     * Converts this proto_bc_login_ack to JSON.
     * @function toJSON
     * @memberof proto_bc_login_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_bc_login_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_bc_login_ack;
})();

$root.proto_PlyBaseData = (function() {

    /**
     * Properties of a proto_PlyBaseData.
     * @exports Iproto_PlyBaseData
     * @interface Iproto_PlyBaseData
     * @property {number|Long} plyGuid proto_PlyBaseData plyGuid
     * @property {string} nickname proto_PlyBaseData nickname
     * @property {number} sex proto_PlyBaseData sex
     * @property {number} gift proto_PlyBaseData gift
     * @property {number|Long} money proto_PlyBaseData money
     * @property {number} score proto_PlyBaseData score
     * @property {number} won proto_PlyBaseData won
     * @property {number} lost proto_PlyBaseData lost
     * @property {number} dogfall proto_PlyBaseData dogfall
     * @property {number} tableId proto_PlyBaseData tableId
     * @property {number} param_1 proto_PlyBaseData param_1
     * @property {number} param_2 proto_PlyBaseData param_2
     * @property {number} chairId proto_PlyBaseData chairId
     * @property {number} ready proto_PlyBaseData ready
     * @property {Iproto_VipData} plyVip proto_PlyBaseData plyVip
     */

    /**
     * Constructs a new proto_PlyBaseData.
     * @exports proto_PlyBaseData
     * @classdesc Represents a proto_PlyBaseData.
     * @implements Iproto_PlyBaseData
     * @constructor
     * @param {Iproto_PlyBaseData=} [properties] Properties to set
     */
    function proto_PlyBaseData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_PlyBaseData plyGuid.
     * @member {number|Long} plyGuid
     * @memberof proto_PlyBaseData
     * @instance
     */
    proto_PlyBaseData.prototype.plyGuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * proto_PlyBaseData nickname.
     * @member {string} nickname
     * @memberof proto_PlyBaseData
     * @instance
     */
    proto_PlyBaseData.prototype.nickname = "";

    /**
     * proto_PlyBaseData sex.
     * @member {number} sex
     * @memberof proto_PlyBaseData
     * @instance
     */
    proto_PlyBaseData.prototype.sex = 0;

    /**
     * proto_PlyBaseData gift.
     * @member {number} gift
     * @memberof proto_PlyBaseData
     * @instance
     */
    proto_PlyBaseData.prototype.gift = 0;

    /**
     * proto_PlyBaseData money.
     * @member {number|Long} money
     * @memberof proto_PlyBaseData
     * @instance
     */
    proto_PlyBaseData.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * proto_PlyBaseData score.
     * @member {number} score
     * @memberof proto_PlyBaseData
     * @instance
     */
    proto_PlyBaseData.prototype.score = 0;

    /**
     * proto_PlyBaseData won.
     * @member {number} won
     * @memberof proto_PlyBaseData
     * @instance
     */
    proto_PlyBaseData.prototype.won = 0;

    /**
     * proto_PlyBaseData lost.
     * @member {number} lost
     * @memberof proto_PlyBaseData
     * @instance
     */
    proto_PlyBaseData.prototype.lost = 0;

    /**
     * proto_PlyBaseData dogfall.
     * @member {number} dogfall
     * @memberof proto_PlyBaseData
     * @instance
     */
    proto_PlyBaseData.prototype.dogfall = 0;

    /**
     * proto_PlyBaseData tableId.
     * @member {number} tableId
     * @memberof proto_PlyBaseData
     * @instance
     */
    proto_PlyBaseData.prototype.tableId = 0;

    /**
     * proto_PlyBaseData param_1.
     * @member {number} param_1
     * @memberof proto_PlyBaseData
     * @instance
     */
    proto_PlyBaseData.prototype.param_1 = 0;

    /**
     * proto_PlyBaseData param_2.
     * @member {number} param_2
     * @memberof proto_PlyBaseData
     * @instance
     */
    proto_PlyBaseData.prototype.param_2 = 0;

    /**
     * proto_PlyBaseData chairId.
     * @member {number} chairId
     * @memberof proto_PlyBaseData
     * @instance
     */
    proto_PlyBaseData.prototype.chairId = 0;

    /**
     * proto_PlyBaseData ready.
     * @member {number} ready
     * @memberof proto_PlyBaseData
     * @instance
     */
    proto_PlyBaseData.prototype.ready = 0;

    /**
     * proto_PlyBaseData plyVip.
     * @member {Iproto_VipData} plyVip
     * @memberof proto_PlyBaseData
     * @instance
     */
    proto_PlyBaseData.prototype.plyVip = null;

    /**
     * Creates a new proto_PlyBaseData instance using the specified properties.
     * @function create
     * @memberof proto_PlyBaseData
     * @static
     * @param {Iproto_PlyBaseData=} [properties] Properties to set
     * @returns {proto_PlyBaseData} proto_PlyBaseData instance
     */
    proto_PlyBaseData.create = function create(properties) {
        return new proto_PlyBaseData(properties);
    };

    /**
     * Encodes the specified proto_PlyBaseData message. Does not implicitly {@link proto_PlyBaseData.verify|verify} messages.
     * @function encode
     * @memberof proto_PlyBaseData
     * @static
     * @param {Iproto_PlyBaseData} message proto_PlyBaseData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_PlyBaseData.encode = function encode(message, writer) {
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
        $root.proto_VipData.encode(message.plyVip, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified proto_PlyBaseData message, length delimited. Does not implicitly {@link proto_PlyBaseData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_PlyBaseData
     * @static
     * @param {Iproto_PlyBaseData} message proto_PlyBaseData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_PlyBaseData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_PlyBaseData message from the specified reader or buffer.
     * @function decode
     * @memberof proto_PlyBaseData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_PlyBaseData} proto_PlyBaseData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_PlyBaseData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_PlyBaseData();
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
                    message.plyVip = $root.proto_VipData.decode(reader, reader.uint32());
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
     * Decodes a proto_PlyBaseData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_PlyBaseData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_PlyBaseData} proto_PlyBaseData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_PlyBaseData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_PlyBaseData message.
     * @function verify
     * @memberof proto_PlyBaseData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_PlyBaseData.verify = function verify(message) {
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
            var error = $root.proto_VipData.verify(message.plyVip);
            if (error)
                return "plyVip." + error;
        }
        return null;
    };

    /**
     * Creates a proto_PlyBaseData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_PlyBaseData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_PlyBaseData} proto_PlyBaseData
     */
    proto_PlyBaseData.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_PlyBaseData)
            return object;
        var message = new $root.proto_PlyBaseData();
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
                throw TypeError(".proto_PlyBaseData.plyVip: object expected");
            message.plyVip = $root.proto_VipData.fromObject(object.plyVip);
        }
        return message;
    };

    /**
     * Creates a plain object from a proto_PlyBaseData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_PlyBaseData
     * @static
     * @param {proto_PlyBaseData} message proto_PlyBaseData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_PlyBaseData.toObject = function toObject(message, options) {
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
            object.plyVip = $root.proto_VipData.toObject(message.plyVip, options);
        return object;
    };

    /**
     * Converts this proto_PlyBaseData to JSON.
     * @function toJSON
     * @memberof proto_PlyBaseData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_PlyBaseData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_PlyBaseData;
})();

$root.proto_PlayerStatus = (function() {

    /**
     * Properties of a proto_PlayerStatus.
     * @exports Iproto_PlayerStatus
     * @interface Iproto_PlayerStatus
     * @property {number|Long} plyGuid proto_PlayerStatus plyGuid
     * @property {string} plyNickname proto_PlayerStatus plyNickname
     * @property {number} plyStatus proto_PlayerStatus plyStatus
     * @property {number} sex proto_PlayerStatus sex
     * @property {number} gameId proto_PlayerStatus gameId
     * @property {number} gameServerId proto_PlayerStatus gameServerId
     * @property {number} tableId proto_PlayerStatus tableId
     * @property {number|Long} money proto_PlayerStatus money
     * @property {number} won proto_PlayerStatus won
     * @property {number} lost proto_PlayerStatus lost
     * @property {number} moneyRank proto_PlayerStatus moneyRank
     * @property {number} wonRank proto_PlayerStatus wonRank
     * @property {number} param_1 proto_PlayerStatus param_1
     * @property {number} param_2 proto_PlayerStatus param_2
     * @property {number} latitude proto_PlayerStatus latitude
     * @property {number} longitude proto_PlayerStatus longitude
     */

    /**
     * Constructs a new proto_PlayerStatus.
     * @exports proto_PlayerStatus
     * @classdesc Represents a proto_PlayerStatus.
     * @implements Iproto_PlayerStatus
     * @constructor
     * @param {Iproto_PlayerStatus=} [properties] Properties to set
     */
    function proto_PlayerStatus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_PlayerStatus plyGuid.
     * @member {number|Long} plyGuid
     * @memberof proto_PlayerStatus
     * @instance
     */
    proto_PlayerStatus.prototype.plyGuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * proto_PlayerStatus plyNickname.
     * @member {string} plyNickname
     * @memberof proto_PlayerStatus
     * @instance
     */
    proto_PlayerStatus.prototype.plyNickname = "";

    /**
     * proto_PlayerStatus plyStatus.
     * @member {number} plyStatus
     * @memberof proto_PlayerStatus
     * @instance
     */
    proto_PlayerStatus.prototype.plyStatus = 0;

    /**
     * proto_PlayerStatus sex.
     * @member {number} sex
     * @memberof proto_PlayerStatus
     * @instance
     */
    proto_PlayerStatus.prototype.sex = 0;

    /**
     * proto_PlayerStatus gameId.
     * @member {number} gameId
     * @memberof proto_PlayerStatus
     * @instance
     */
    proto_PlayerStatus.prototype.gameId = 0;

    /**
     * proto_PlayerStatus gameServerId.
     * @member {number} gameServerId
     * @memberof proto_PlayerStatus
     * @instance
     */
    proto_PlayerStatus.prototype.gameServerId = 0;

    /**
     * proto_PlayerStatus tableId.
     * @member {number} tableId
     * @memberof proto_PlayerStatus
     * @instance
     */
    proto_PlayerStatus.prototype.tableId = 0;

    /**
     * proto_PlayerStatus money.
     * @member {number|Long} money
     * @memberof proto_PlayerStatus
     * @instance
     */
    proto_PlayerStatus.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * proto_PlayerStatus won.
     * @member {number} won
     * @memberof proto_PlayerStatus
     * @instance
     */
    proto_PlayerStatus.prototype.won = 0;

    /**
     * proto_PlayerStatus lost.
     * @member {number} lost
     * @memberof proto_PlayerStatus
     * @instance
     */
    proto_PlayerStatus.prototype.lost = 0;

    /**
     * proto_PlayerStatus moneyRank.
     * @member {number} moneyRank
     * @memberof proto_PlayerStatus
     * @instance
     */
    proto_PlayerStatus.prototype.moneyRank = 0;

    /**
     * proto_PlayerStatus wonRank.
     * @member {number} wonRank
     * @memberof proto_PlayerStatus
     * @instance
     */
    proto_PlayerStatus.prototype.wonRank = 0;

    /**
     * proto_PlayerStatus param_1.
     * @member {number} param_1
     * @memberof proto_PlayerStatus
     * @instance
     */
    proto_PlayerStatus.prototype.param_1 = 0;

    /**
     * proto_PlayerStatus param_2.
     * @member {number} param_2
     * @memberof proto_PlayerStatus
     * @instance
     */
    proto_PlayerStatus.prototype.param_2 = 0;

    /**
     * proto_PlayerStatus latitude.
     * @member {number} latitude
     * @memberof proto_PlayerStatus
     * @instance
     */
    proto_PlayerStatus.prototype.latitude = 0;

    /**
     * proto_PlayerStatus longitude.
     * @member {number} longitude
     * @memberof proto_PlayerStatus
     * @instance
     */
    proto_PlayerStatus.prototype.longitude = 0;

    /**
     * Creates a new proto_PlayerStatus instance using the specified properties.
     * @function create
     * @memberof proto_PlayerStatus
     * @static
     * @param {Iproto_PlayerStatus=} [properties] Properties to set
     * @returns {proto_PlayerStatus} proto_PlayerStatus instance
     */
    proto_PlayerStatus.create = function create(properties) {
        return new proto_PlayerStatus(properties);
    };

    /**
     * Encodes the specified proto_PlayerStatus message. Does not implicitly {@link proto_PlayerStatus.verify|verify} messages.
     * @function encode
     * @memberof proto_PlayerStatus
     * @static
     * @param {Iproto_PlayerStatus} message proto_PlayerStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_PlayerStatus.encode = function encode(message, writer) {
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
     * Encodes the specified proto_PlayerStatus message, length delimited. Does not implicitly {@link proto_PlayerStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_PlayerStatus
     * @static
     * @param {Iproto_PlayerStatus} message proto_PlayerStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_PlayerStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_PlayerStatus message from the specified reader or buffer.
     * @function decode
     * @memberof proto_PlayerStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_PlayerStatus} proto_PlayerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_PlayerStatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_PlayerStatus();
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
     * Decodes a proto_PlayerStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_PlayerStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_PlayerStatus} proto_PlayerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_PlayerStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_PlayerStatus message.
     * @function verify
     * @memberof proto_PlayerStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_PlayerStatus.verify = function verify(message) {
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
     * Creates a proto_PlayerStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_PlayerStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_PlayerStatus} proto_PlayerStatus
     */
    proto_PlayerStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_PlayerStatus)
            return object;
        var message = new $root.proto_PlayerStatus();
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
     * Creates a plain object from a proto_PlayerStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_PlayerStatus
     * @static
     * @param {proto_PlayerStatus} message proto_PlayerStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_PlayerStatus.toObject = function toObject(message, options) {
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
     * Converts this proto_PlayerStatus to JSON.
     * @function toJSON
     * @memberof proto_PlayerStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_PlayerStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_PlayerStatus;
})();

$root.proto_VipData = (function() {

    /**
     * Properties of a proto_VipData.
     * @exports Iproto_VipData
     * @interface Iproto_VipData
     * @property {number} level proto_VipData level
     * @property {number} nexLevelTotalDays proto_VipData nexLevelTotalDays
     * @property {number} autoUpgradeDay proto_VipData autoUpgradeDay
     * @property {number} loginAward proto_VipData loginAward
     * @property {number} friendCount proto_VipData friendCount
     * @property {number} nextLevelDueDays proto_VipData nextLevelDueDays
     * @property {number} remainDueDays proto_VipData remainDueDays
     * @property {number} status proto_VipData status
     */

    /**
     * Constructs a new proto_VipData.
     * @exports proto_VipData
     * @classdesc Represents a proto_VipData.
     * @implements Iproto_VipData
     * @constructor
     * @param {Iproto_VipData=} [properties] Properties to set
     */
    function proto_VipData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_VipData level.
     * @member {number} level
     * @memberof proto_VipData
     * @instance
     */
    proto_VipData.prototype.level = 0;

    /**
     * proto_VipData nexLevelTotalDays.
     * @member {number} nexLevelTotalDays
     * @memberof proto_VipData
     * @instance
     */
    proto_VipData.prototype.nexLevelTotalDays = 0;

    /**
     * proto_VipData autoUpgradeDay.
     * @member {number} autoUpgradeDay
     * @memberof proto_VipData
     * @instance
     */
    proto_VipData.prototype.autoUpgradeDay = 0;

    /**
     * proto_VipData loginAward.
     * @member {number} loginAward
     * @memberof proto_VipData
     * @instance
     */
    proto_VipData.prototype.loginAward = 0;

    /**
     * proto_VipData friendCount.
     * @member {number} friendCount
     * @memberof proto_VipData
     * @instance
     */
    proto_VipData.prototype.friendCount = 0;

    /**
     * proto_VipData nextLevelDueDays.
     * @member {number} nextLevelDueDays
     * @memberof proto_VipData
     * @instance
     */
    proto_VipData.prototype.nextLevelDueDays = 0;

    /**
     * proto_VipData remainDueDays.
     * @member {number} remainDueDays
     * @memberof proto_VipData
     * @instance
     */
    proto_VipData.prototype.remainDueDays = 0;

    /**
     * proto_VipData status.
     * @member {number} status
     * @memberof proto_VipData
     * @instance
     */
    proto_VipData.prototype.status = 0;

    /**
     * Creates a new proto_VipData instance using the specified properties.
     * @function create
     * @memberof proto_VipData
     * @static
     * @param {Iproto_VipData=} [properties] Properties to set
     * @returns {proto_VipData} proto_VipData instance
     */
    proto_VipData.create = function create(properties) {
        return new proto_VipData(properties);
    };

    /**
     * Encodes the specified proto_VipData message. Does not implicitly {@link proto_VipData.verify|verify} messages.
     * @function encode
     * @memberof proto_VipData
     * @static
     * @param {Iproto_VipData} message proto_VipData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_VipData.encode = function encode(message, writer) {
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
     * Encodes the specified proto_VipData message, length delimited. Does not implicitly {@link proto_VipData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_VipData
     * @static
     * @param {Iproto_VipData} message proto_VipData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_VipData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_VipData message from the specified reader or buffer.
     * @function decode
     * @memberof proto_VipData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_VipData} proto_VipData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_VipData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_VipData();
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
     * Decodes a proto_VipData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_VipData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_VipData} proto_VipData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_VipData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_VipData message.
     * @function verify
     * @memberof proto_VipData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_VipData.verify = function verify(message) {
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
     * Creates a proto_VipData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_VipData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_VipData} proto_VipData
     */
    proto_VipData.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_VipData)
            return object;
        var message = new $root.proto_VipData();
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
     * Creates a plain object from a proto_VipData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_VipData
     * @static
     * @param {proto_VipData} message proto_VipData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_VipData.toObject = function toObject(message, options) {
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
     * Converts this proto_VipData to JSON.
     * @function toJSON
     * @memberof proto_VipData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_VipData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_VipData;
})();

$root.proto_cb_join_table_req = (function() {

    /**
     * Properties of a proto_cb_join_table_req.
     * @exports Iproto_cb_join_table_req
     * @interface Iproto_cb_join_table_req
     * @property {number} tableId proto_cb_join_table_req tableId
     * @property {string} password proto_cb_join_table_req password
     * @property {number} clubUid proto_cb_join_table_req clubUid
     */

    /**
     * Constructs a new proto_cb_join_table_req.
     * @exports proto_cb_join_table_req
     * @classdesc Represents a proto_cb_join_table_req.
     * @implements Iproto_cb_join_table_req
     * @constructor
     * @param {Iproto_cb_join_table_req=} [properties] Properties to set
     */
    function proto_cb_join_table_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_cb_join_table_req tableId.
     * @member {number} tableId
     * @memberof proto_cb_join_table_req
     * @instance
     */
    proto_cb_join_table_req.prototype.tableId = 0;

    /**
     * proto_cb_join_table_req password.
     * @member {string} password
     * @memberof proto_cb_join_table_req
     * @instance
     */
    proto_cb_join_table_req.prototype.password = "";

    /**
     * proto_cb_join_table_req clubUid.
     * @member {number} clubUid
     * @memberof proto_cb_join_table_req
     * @instance
     */
    proto_cb_join_table_req.prototype.clubUid = 0;

    /**
     * Creates a new proto_cb_join_table_req instance using the specified properties.
     * @function create
     * @memberof proto_cb_join_table_req
     * @static
     * @param {Iproto_cb_join_table_req=} [properties] Properties to set
     * @returns {proto_cb_join_table_req} proto_cb_join_table_req instance
     */
    proto_cb_join_table_req.create = function create(properties) {
        return new proto_cb_join_table_req(properties);
    };

    /**
     * Encodes the specified proto_cb_join_table_req message. Does not implicitly {@link proto_cb_join_table_req.verify|verify} messages.
     * @function encode
     * @memberof proto_cb_join_table_req
     * @static
     * @param {Iproto_cb_join_table_req} message proto_cb_join_table_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_cb_join_table_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tableId);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.clubUid);
        return writer;
    };

    /**
     * Encodes the specified proto_cb_join_table_req message, length delimited. Does not implicitly {@link proto_cb_join_table_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_cb_join_table_req
     * @static
     * @param {Iproto_cb_join_table_req} message proto_cb_join_table_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_cb_join_table_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_cb_join_table_req message from the specified reader or buffer.
     * @function decode
     * @memberof proto_cb_join_table_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_cb_join_table_req} proto_cb_join_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_cb_join_table_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_cb_join_table_req();
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
     * Decodes a proto_cb_join_table_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_cb_join_table_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_cb_join_table_req} proto_cb_join_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_cb_join_table_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_cb_join_table_req message.
     * @function verify
     * @memberof proto_cb_join_table_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_cb_join_table_req.verify = function verify(message) {
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
     * Creates a proto_cb_join_table_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_cb_join_table_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_cb_join_table_req} proto_cb_join_table_req
     */
    proto_cb_join_table_req.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_cb_join_table_req)
            return object;
        var message = new $root.proto_cb_join_table_req();
        if (object.tableId != null)
            message.tableId = object.tableId | 0;
        if (object.password != null)
            message.password = String(object.password);
        if (object.clubUid != null)
            message.clubUid = object.clubUid | 0;
        return message;
    };

    /**
     * Creates a plain object from a proto_cb_join_table_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_cb_join_table_req
     * @static
     * @param {proto_cb_join_table_req} message proto_cb_join_table_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_cb_join_table_req.toObject = function toObject(message, options) {
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
     * Converts this proto_cb_join_table_req to JSON.
     * @function toJSON
     * @memberof proto_cb_join_table_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_cb_join_table_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_cb_join_table_req;
})();

$root.proto_bc_join_table_ack = (function() {

    /**
     * Properties of a proto_bc_join_table_ack.
     * @exports Iproto_bc_join_table_ack
     * @interface Iproto_bc_join_table_ack
     * @property {number} ret proto_bc_join_table_ack ret
     * @property {Iproto_TableAttr} tableAttrs proto_bc_join_table_ack tableAttrs
     * @property {string} errMsg proto_bc_join_table_ack errMsg
     */

    /**
     * Constructs a new proto_bc_join_table_ack.
     * @exports proto_bc_join_table_ack
     * @classdesc Represents a proto_bc_join_table_ack.
     * @implements Iproto_bc_join_table_ack
     * @constructor
     * @param {Iproto_bc_join_table_ack=} [properties] Properties to set
     */
    function proto_bc_join_table_ack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_bc_join_table_ack ret.
     * @member {number} ret
     * @memberof proto_bc_join_table_ack
     * @instance
     */
    proto_bc_join_table_ack.prototype.ret = 0;

    /**
     * proto_bc_join_table_ack tableAttrs.
     * @member {Iproto_TableAttr} tableAttrs
     * @memberof proto_bc_join_table_ack
     * @instance
     */
    proto_bc_join_table_ack.prototype.tableAttrs = null;

    /**
     * proto_bc_join_table_ack errMsg.
     * @member {string} errMsg
     * @memberof proto_bc_join_table_ack
     * @instance
     */
    proto_bc_join_table_ack.prototype.errMsg = "";

    /**
     * Creates a new proto_bc_join_table_ack instance using the specified properties.
     * @function create
     * @memberof proto_bc_join_table_ack
     * @static
     * @param {Iproto_bc_join_table_ack=} [properties] Properties to set
     * @returns {proto_bc_join_table_ack} proto_bc_join_table_ack instance
     */
    proto_bc_join_table_ack.create = function create(properties) {
        return new proto_bc_join_table_ack(properties);
    };

    /**
     * Encodes the specified proto_bc_join_table_ack message. Does not implicitly {@link proto_bc_join_table_ack.verify|verify} messages.
     * @function encode
     * @memberof proto_bc_join_table_ack
     * @static
     * @param {Iproto_bc_join_table_ack} message proto_bc_join_table_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_join_table_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
        $root.proto_TableAttr.encode(message.tableAttrs, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.errMsg);
        return writer;
    };

    /**
     * Encodes the specified proto_bc_join_table_ack message, length delimited. Does not implicitly {@link proto_bc_join_table_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_bc_join_table_ack
     * @static
     * @param {Iproto_bc_join_table_ack} message proto_bc_join_table_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_join_table_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_bc_join_table_ack message from the specified reader or buffer.
     * @function decode
     * @memberof proto_bc_join_table_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_bc_join_table_ack} proto_bc_join_table_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_join_table_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_bc_join_table_ack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ret = reader.int32();
                    break;
                case 2:
                    message.tableAttrs = $root.proto_TableAttr.decode(reader, reader.uint32());
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
     * Decodes a proto_bc_join_table_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_bc_join_table_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_bc_join_table_ack} proto_bc_join_table_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_join_table_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_bc_join_table_ack message.
     * @function verify
     * @memberof proto_bc_join_table_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_bc_join_table_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.ret))
            return "ret: integer expected";
        {
            var error = $root.proto_TableAttr.verify(message.tableAttrs);
            if (error)
                return "tableAttrs." + error;
        }
        if (!$util.isString(message.errMsg))
            return "errMsg: string expected";
        return null;
    };

    /**
     * Creates a proto_bc_join_table_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_bc_join_table_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_bc_join_table_ack} proto_bc_join_table_ack
     */
    proto_bc_join_table_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_bc_join_table_ack)
            return object;
        var message = new $root.proto_bc_join_table_ack();
        if (object.ret != null)
            message.ret = object.ret | 0;
        if (object.tableAttrs != null) {
            if (typeof object.tableAttrs !== "object")
                throw TypeError(".proto_bc_join_table_ack.tableAttrs: object expected");
            message.tableAttrs = $root.proto_TableAttr.fromObject(object.tableAttrs);
        }
        if (object.errMsg != null)
            message.errMsg = String(object.errMsg);
        return message;
    };

    /**
     * Creates a plain object from a proto_bc_join_table_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_bc_join_table_ack
     * @static
     * @param {proto_bc_join_table_ack} message proto_bc_join_table_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_bc_join_table_ack.toObject = function toObject(message, options) {
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
            object.tableAttrs = $root.proto_TableAttr.toObject(message.tableAttrs, options);
        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
            object.errMsg = message.errMsg;
        return object;
    };

    /**
     * Converts this proto_bc_join_table_ack to JSON.
     * @function toJSON
     * @memberof proto_bc_join_table_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_bc_join_table_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_bc_join_table_ack;
})();

$root.proto_TableAttr = (function() {

    /**
     * Properties of a proto_TableAttr.
     * @exports Iproto_TableAttr
     * @interface Iproto_TableAttr
     * @property {number} tableId proto_TableAttr tableId
     * @property {string} name proto_TableAttr name
     * @property {number} lock proto_TableAttr lock
     * @property {Array.<Iproto_PlyBaseData>|null} [players] proto_TableAttr players
     */

    /**
     * Constructs a new proto_TableAttr.
     * @exports proto_TableAttr
     * @classdesc Represents a proto_TableAttr.
     * @implements Iproto_TableAttr
     * @constructor
     * @param {Iproto_TableAttr=} [properties] Properties to set
     */
    function proto_TableAttr(properties) {
        this.players = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_TableAttr tableId.
     * @member {number} tableId
     * @memberof proto_TableAttr
     * @instance
     */
    proto_TableAttr.prototype.tableId = 0;

    /**
     * proto_TableAttr name.
     * @member {string} name
     * @memberof proto_TableAttr
     * @instance
     */
    proto_TableAttr.prototype.name = "";

    /**
     * proto_TableAttr lock.
     * @member {number} lock
     * @memberof proto_TableAttr
     * @instance
     */
    proto_TableAttr.prototype.lock = 0;

    /**
     * proto_TableAttr players.
     * @member {Array.<Iproto_PlyBaseData>} players
     * @memberof proto_TableAttr
     * @instance
     */
    proto_TableAttr.prototype.players = $util.emptyArray;

    /**
     * Creates a new proto_TableAttr instance using the specified properties.
     * @function create
     * @memberof proto_TableAttr
     * @static
     * @param {Iproto_TableAttr=} [properties] Properties to set
     * @returns {proto_TableAttr} proto_TableAttr instance
     */
    proto_TableAttr.create = function create(properties) {
        return new proto_TableAttr(properties);
    };

    /**
     * Encodes the specified proto_TableAttr message. Does not implicitly {@link proto_TableAttr.verify|verify} messages.
     * @function encode
     * @memberof proto_TableAttr
     * @static
     * @param {Iproto_TableAttr} message proto_TableAttr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_TableAttr.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tableId);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.lock);
        if (message.players != null && message.players.length)
            for (var i = 0; i < message.players.length; ++i)
                $root.proto_PlyBaseData.encode(message.players[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified proto_TableAttr message, length delimited. Does not implicitly {@link proto_TableAttr.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_TableAttr
     * @static
     * @param {Iproto_TableAttr} message proto_TableAttr message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_TableAttr.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_TableAttr message from the specified reader or buffer.
     * @function decode
     * @memberof proto_TableAttr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_TableAttr} proto_TableAttr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_TableAttr.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_TableAttr();
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
                    message.players.push($root.proto_PlyBaseData.decode(reader, reader.uint32()));
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
     * Decodes a proto_TableAttr message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_TableAttr
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_TableAttr} proto_TableAttr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_TableAttr.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_TableAttr message.
     * @function verify
     * @memberof proto_TableAttr
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_TableAttr.verify = function verify(message) {
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
                var error = $root.proto_PlyBaseData.verify(message.players[i]);
                if (error)
                    return "players." + error;
            }
        }
        return null;
    };

    /**
     * Creates a proto_TableAttr message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_TableAttr
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_TableAttr} proto_TableAttr
     */
    proto_TableAttr.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_TableAttr)
            return object;
        var message = new $root.proto_TableAttr();
        if (object.tableId != null)
            message.tableId = object.tableId | 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.lock != null)
            message.lock = object.lock | 0;
        if (object.players) {
            if (!Array.isArray(object.players))
                throw TypeError(".proto_TableAttr.players: array expected");
            message.players = [];
            for (var i = 0; i < object.players.length; ++i) {
                if (typeof object.players[i] !== "object")
                    throw TypeError(".proto_TableAttr.players: object expected");
                message.players[i] = $root.proto_PlyBaseData.fromObject(object.players[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a proto_TableAttr message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_TableAttr
     * @static
     * @param {proto_TableAttr} message proto_TableAttr
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_TableAttr.toObject = function toObject(message, options) {
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
                object.players[j] = $root.proto_PlyBaseData.toObject(message.players[j], options);
        }
        return object;
    };

    /**
     * Converts this proto_TableAttr to JSON.
     * @function toJSON
     * @memberof proto_TableAttr
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_TableAttr.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_TableAttr;
})();

$root.proto_cb_leave_table_req = (function() {

    /**
     * Properties of a proto_cb_leave_table_req.
     * @exports Iproto_cb_leave_table_req
     * @interface Iproto_cb_leave_table_req
     */

    /**
     * Constructs a new proto_cb_leave_table_req.
     * @exports proto_cb_leave_table_req
     * @classdesc Represents a proto_cb_leave_table_req.
     * @implements Iproto_cb_leave_table_req
     * @constructor
     * @param {Iproto_cb_leave_table_req=} [properties] Properties to set
     */
    function proto_cb_leave_table_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new proto_cb_leave_table_req instance using the specified properties.
     * @function create
     * @memberof proto_cb_leave_table_req
     * @static
     * @param {Iproto_cb_leave_table_req=} [properties] Properties to set
     * @returns {proto_cb_leave_table_req} proto_cb_leave_table_req instance
     */
    proto_cb_leave_table_req.create = function create(properties) {
        return new proto_cb_leave_table_req(properties);
    };

    /**
     * Encodes the specified proto_cb_leave_table_req message. Does not implicitly {@link proto_cb_leave_table_req.verify|verify} messages.
     * @function encode
     * @memberof proto_cb_leave_table_req
     * @static
     * @param {Iproto_cb_leave_table_req} message proto_cb_leave_table_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_cb_leave_table_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified proto_cb_leave_table_req message, length delimited. Does not implicitly {@link proto_cb_leave_table_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_cb_leave_table_req
     * @static
     * @param {Iproto_cb_leave_table_req} message proto_cb_leave_table_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_cb_leave_table_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_cb_leave_table_req message from the specified reader or buffer.
     * @function decode
     * @memberof proto_cb_leave_table_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_cb_leave_table_req} proto_cb_leave_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_cb_leave_table_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_cb_leave_table_req();
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
     * Decodes a proto_cb_leave_table_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_cb_leave_table_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_cb_leave_table_req} proto_cb_leave_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_cb_leave_table_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_cb_leave_table_req message.
     * @function verify
     * @memberof proto_cb_leave_table_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_cb_leave_table_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a proto_cb_leave_table_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_cb_leave_table_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_cb_leave_table_req} proto_cb_leave_table_req
     */
    proto_cb_leave_table_req.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_cb_leave_table_req)
            return object;
        return new $root.proto_cb_leave_table_req();
    };

    /**
     * Creates a plain object from a proto_cb_leave_table_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_cb_leave_table_req
     * @static
     * @param {proto_cb_leave_table_req} message proto_cb_leave_table_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_cb_leave_table_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this proto_cb_leave_table_req to JSON.
     * @function toJSON
     * @memberof proto_cb_leave_table_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_cb_leave_table_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_cb_leave_table_req;
})();

$root.proto_bc_leave_table_ack = (function() {

    /**
     * Properties of a proto_bc_leave_table_ack.
     * @exports Iproto_bc_leave_table_ack
     * @interface Iproto_bc_leave_table_ack
     * @property {number} ret proto_bc_leave_table_ack ret
     * @property {string} plyNickname proto_bc_leave_table_ack plyNickname
     */

    /**
     * Constructs a new proto_bc_leave_table_ack.
     * @exports proto_bc_leave_table_ack
     * @classdesc Represents a proto_bc_leave_table_ack.
     * @implements Iproto_bc_leave_table_ack
     * @constructor
     * @param {Iproto_bc_leave_table_ack=} [properties] Properties to set
     */
    function proto_bc_leave_table_ack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_bc_leave_table_ack ret.
     * @member {number} ret
     * @memberof proto_bc_leave_table_ack
     * @instance
     */
    proto_bc_leave_table_ack.prototype.ret = 0;

    /**
     * proto_bc_leave_table_ack plyNickname.
     * @member {string} plyNickname
     * @memberof proto_bc_leave_table_ack
     * @instance
     */
    proto_bc_leave_table_ack.prototype.plyNickname = "";

    /**
     * Creates a new proto_bc_leave_table_ack instance using the specified properties.
     * @function create
     * @memberof proto_bc_leave_table_ack
     * @static
     * @param {Iproto_bc_leave_table_ack=} [properties] Properties to set
     * @returns {proto_bc_leave_table_ack} proto_bc_leave_table_ack instance
     */
    proto_bc_leave_table_ack.create = function create(properties) {
        return new proto_bc_leave_table_ack(properties);
    };

    /**
     * Encodes the specified proto_bc_leave_table_ack message. Does not implicitly {@link proto_bc_leave_table_ack.verify|verify} messages.
     * @function encode
     * @memberof proto_bc_leave_table_ack
     * @static
     * @param {Iproto_bc_leave_table_ack} message proto_bc_leave_table_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_leave_table_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.plyNickname);
        return writer;
    };

    /**
     * Encodes the specified proto_bc_leave_table_ack message, length delimited. Does not implicitly {@link proto_bc_leave_table_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_bc_leave_table_ack
     * @static
     * @param {Iproto_bc_leave_table_ack} message proto_bc_leave_table_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_leave_table_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_bc_leave_table_ack message from the specified reader or buffer.
     * @function decode
     * @memberof proto_bc_leave_table_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_bc_leave_table_ack} proto_bc_leave_table_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_leave_table_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_bc_leave_table_ack();
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
     * Decodes a proto_bc_leave_table_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_bc_leave_table_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_bc_leave_table_ack} proto_bc_leave_table_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_leave_table_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_bc_leave_table_ack message.
     * @function verify
     * @memberof proto_bc_leave_table_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_bc_leave_table_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.ret))
            return "ret: integer expected";
        if (!$util.isString(message.plyNickname))
            return "plyNickname: string expected";
        return null;
    };

    /**
     * Creates a proto_bc_leave_table_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_bc_leave_table_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_bc_leave_table_ack} proto_bc_leave_table_ack
     */
    proto_bc_leave_table_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_bc_leave_table_ack)
            return object;
        var message = new $root.proto_bc_leave_table_ack();
        if (object.ret != null)
            message.ret = object.ret | 0;
        if (object.plyNickname != null)
            message.plyNickname = String(object.plyNickname);
        return message;
    };

    /**
     * Creates a plain object from a proto_bc_leave_table_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_bc_leave_table_ack
     * @static
     * @param {proto_bc_leave_table_ack} message proto_bc_leave_table_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_bc_leave_table_ack.toObject = function toObject(message, options) {
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
     * Converts this proto_bc_leave_table_ack to JSON.
     * @function toJSON
     * @memberof proto_bc_leave_table_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_bc_leave_table_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_bc_leave_table_ack;
})();

$root.proto_bc_ply_join_not = (function() {

    /**
     * Properties of a proto_bc_ply_join_not.
     * @exports Iproto_bc_ply_join_not
     * @interface Iproto_bc_ply_join_not
     * @property {Iproto_PlyBaseData} plyData proto_bc_ply_join_not plyData
     */

    /**
     * Constructs a new proto_bc_ply_join_not.
     * @exports proto_bc_ply_join_not
     * @classdesc Represents a proto_bc_ply_join_not.
     * @implements Iproto_bc_ply_join_not
     * @constructor
     * @param {Iproto_bc_ply_join_not=} [properties] Properties to set
     */
    function proto_bc_ply_join_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_bc_ply_join_not plyData.
     * @member {Iproto_PlyBaseData} plyData
     * @memberof proto_bc_ply_join_not
     * @instance
     */
    proto_bc_ply_join_not.prototype.plyData = null;

    /**
     * Creates a new proto_bc_ply_join_not instance using the specified properties.
     * @function create
     * @memberof proto_bc_ply_join_not
     * @static
     * @param {Iproto_bc_ply_join_not=} [properties] Properties to set
     * @returns {proto_bc_ply_join_not} proto_bc_ply_join_not instance
     */
    proto_bc_ply_join_not.create = function create(properties) {
        return new proto_bc_ply_join_not(properties);
    };

    /**
     * Encodes the specified proto_bc_ply_join_not message. Does not implicitly {@link proto_bc_ply_join_not.verify|verify} messages.
     * @function encode
     * @memberof proto_bc_ply_join_not
     * @static
     * @param {Iproto_bc_ply_join_not} message proto_bc_ply_join_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_ply_join_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        $root.proto_PlyBaseData.encode(message.plyData, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified proto_bc_ply_join_not message, length delimited. Does not implicitly {@link proto_bc_ply_join_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_bc_ply_join_not
     * @static
     * @param {Iproto_bc_ply_join_not} message proto_bc_ply_join_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_ply_join_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_bc_ply_join_not message from the specified reader or buffer.
     * @function decode
     * @memberof proto_bc_ply_join_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_bc_ply_join_not} proto_bc_ply_join_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_ply_join_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_bc_ply_join_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.plyData = $root.proto_PlyBaseData.decode(reader, reader.uint32());
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
     * Decodes a proto_bc_ply_join_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_bc_ply_join_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_bc_ply_join_not} proto_bc_ply_join_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_ply_join_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_bc_ply_join_not message.
     * @function verify
     * @memberof proto_bc_ply_join_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_bc_ply_join_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        {
            var error = $root.proto_PlyBaseData.verify(message.plyData);
            if (error)
                return "plyData." + error;
        }
        return null;
    };

    /**
     * Creates a proto_bc_ply_join_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_bc_ply_join_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_bc_ply_join_not} proto_bc_ply_join_not
     */
    proto_bc_ply_join_not.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_bc_ply_join_not)
            return object;
        var message = new $root.proto_bc_ply_join_not();
        if (object.plyData != null) {
            if (typeof object.plyData !== "object")
                throw TypeError(".proto_bc_ply_join_not.plyData: object expected");
            message.plyData = $root.proto_PlyBaseData.fromObject(object.plyData);
        }
        return message;
    };

    /**
     * Creates a plain object from a proto_bc_ply_join_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_bc_ply_join_not
     * @static
     * @param {proto_bc_ply_join_not} message proto_bc_ply_join_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_bc_ply_join_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.plyData = null;
        if (message.plyData != null && message.hasOwnProperty("plyData"))
            object.plyData = $root.proto_PlyBaseData.toObject(message.plyData, options);
        return object;
    };

    /**
     * Converts this proto_bc_ply_join_not to JSON.
     * @function toJSON
     * @memberof proto_bc_ply_join_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_bc_ply_join_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_bc_ply_join_not;
})();

$root.proto_bc_ply_leave_not = (function() {

    /**
     * Properties of a proto_bc_ply_leave_not.
     * @exports Iproto_bc_ply_leave_not
     * @interface Iproto_bc_ply_leave_not
     * @property {number|Long} plyGuid proto_bc_ply_leave_not plyGuid
     */

    /**
     * Constructs a new proto_bc_ply_leave_not.
     * @exports proto_bc_ply_leave_not
     * @classdesc Represents a proto_bc_ply_leave_not.
     * @implements Iproto_bc_ply_leave_not
     * @constructor
     * @param {Iproto_bc_ply_leave_not=} [properties] Properties to set
     */
    function proto_bc_ply_leave_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_bc_ply_leave_not plyGuid.
     * @member {number|Long} plyGuid
     * @memberof proto_bc_ply_leave_not
     * @instance
     */
    proto_bc_ply_leave_not.prototype.plyGuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new proto_bc_ply_leave_not instance using the specified properties.
     * @function create
     * @memberof proto_bc_ply_leave_not
     * @static
     * @param {Iproto_bc_ply_leave_not=} [properties] Properties to set
     * @returns {proto_bc_ply_leave_not} proto_bc_ply_leave_not instance
     */
    proto_bc_ply_leave_not.create = function create(properties) {
        return new proto_bc_ply_leave_not(properties);
    };

    /**
     * Encodes the specified proto_bc_ply_leave_not message. Does not implicitly {@link proto_bc_ply_leave_not.verify|verify} messages.
     * @function encode
     * @memberof proto_bc_ply_leave_not
     * @static
     * @param {Iproto_bc_ply_leave_not} message proto_bc_ply_leave_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_ply_leave_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.plyGuid);
        return writer;
    };

    /**
     * Encodes the specified proto_bc_ply_leave_not message, length delimited. Does not implicitly {@link proto_bc_ply_leave_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_bc_ply_leave_not
     * @static
     * @param {Iproto_bc_ply_leave_not} message proto_bc_ply_leave_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_ply_leave_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_bc_ply_leave_not message from the specified reader or buffer.
     * @function decode
     * @memberof proto_bc_ply_leave_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_bc_ply_leave_not} proto_bc_ply_leave_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_ply_leave_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_bc_ply_leave_not();
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
     * Decodes a proto_bc_ply_leave_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_bc_ply_leave_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_bc_ply_leave_not} proto_bc_ply_leave_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_ply_leave_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_bc_ply_leave_not message.
     * @function verify
     * @memberof proto_bc_ply_leave_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_bc_ply_leave_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.plyGuid) && !(message.plyGuid && $util.isInteger(message.plyGuid.low) && $util.isInteger(message.plyGuid.high)))
            return "plyGuid: integer|Long expected";
        return null;
    };

    /**
     * Creates a proto_bc_ply_leave_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_bc_ply_leave_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_bc_ply_leave_not} proto_bc_ply_leave_not
     */
    proto_bc_ply_leave_not.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_bc_ply_leave_not)
            return object;
        var message = new $root.proto_bc_ply_leave_not();
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
     * Creates a plain object from a proto_bc_ply_leave_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_bc_ply_leave_not
     * @static
     * @param {proto_bc_ply_leave_not} message proto_bc_ply_leave_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_bc_ply_leave_not.toObject = function toObject(message, options) {
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
     * Converts this proto_bc_ply_leave_not to JSON.
     * @function toJSON
     * @memberof proto_bc_ply_leave_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_bc_ply_leave_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_bc_ply_leave_not;
})();

$root.proto_cb_ready_req = (function() {

    /**
     * Properties of a proto_cb_ready_req.
     * @exports Iproto_cb_ready_req
     * @interface Iproto_cb_ready_req
     */

    /**
     * Constructs a new proto_cb_ready_req.
     * @exports proto_cb_ready_req
     * @classdesc Represents a proto_cb_ready_req.
     * @implements Iproto_cb_ready_req
     * @constructor
     * @param {Iproto_cb_ready_req=} [properties] Properties to set
     */
    function proto_cb_ready_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new proto_cb_ready_req instance using the specified properties.
     * @function create
     * @memberof proto_cb_ready_req
     * @static
     * @param {Iproto_cb_ready_req=} [properties] Properties to set
     * @returns {proto_cb_ready_req} proto_cb_ready_req instance
     */
    proto_cb_ready_req.create = function create(properties) {
        return new proto_cb_ready_req(properties);
    };

    /**
     * Encodes the specified proto_cb_ready_req message. Does not implicitly {@link proto_cb_ready_req.verify|verify} messages.
     * @function encode
     * @memberof proto_cb_ready_req
     * @static
     * @param {Iproto_cb_ready_req} message proto_cb_ready_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_cb_ready_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified proto_cb_ready_req message, length delimited. Does not implicitly {@link proto_cb_ready_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_cb_ready_req
     * @static
     * @param {Iproto_cb_ready_req} message proto_cb_ready_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_cb_ready_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_cb_ready_req message from the specified reader or buffer.
     * @function decode
     * @memberof proto_cb_ready_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_cb_ready_req} proto_cb_ready_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_cb_ready_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_cb_ready_req();
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
     * Decodes a proto_cb_ready_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_cb_ready_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_cb_ready_req} proto_cb_ready_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_cb_ready_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_cb_ready_req message.
     * @function verify
     * @memberof proto_cb_ready_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_cb_ready_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a proto_cb_ready_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_cb_ready_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_cb_ready_req} proto_cb_ready_req
     */
    proto_cb_ready_req.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_cb_ready_req)
            return object;
        return new $root.proto_cb_ready_req();
    };

    /**
     * Creates a plain object from a proto_cb_ready_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_cb_ready_req
     * @static
     * @param {proto_cb_ready_req} message proto_cb_ready_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_cb_ready_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this proto_cb_ready_req to JSON.
     * @function toJSON
     * @memberof proto_cb_ready_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_cb_ready_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_cb_ready_req;
})();

$root.proto_bc_ready_not = (function() {

    /**
     * Properties of a proto_bc_ready_not.
     * @exports Iproto_bc_ready_not
     * @interface Iproto_bc_ready_not
     * @property {number|Long} plyGuid proto_bc_ready_not plyGuid
     */

    /**
     * Constructs a new proto_bc_ready_not.
     * @exports proto_bc_ready_not
     * @classdesc Represents a proto_bc_ready_not.
     * @implements Iproto_bc_ready_not
     * @constructor
     * @param {Iproto_bc_ready_not=} [properties] Properties to set
     */
    function proto_bc_ready_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_bc_ready_not plyGuid.
     * @member {number|Long} plyGuid
     * @memberof proto_bc_ready_not
     * @instance
     */
    proto_bc_ready_not.prototype.plyGuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new proto_bc_ready_not instance using the specified properties.
     * @function create
     * @memberof proto_bc_ready_not
     * @static
     * @param {Iproto_bc_ready_not=} [properties] Properties to set
     * @returns {proto_bc_ready_not} proto_bc_ready_not instance
     */
    proto_bc_ready_not.create = function create(properties) {
        return new proto_bc_ready_not(properties);
    };

    /**
     * Encodes the specified proto_bc_ready_not message. Does not implicitly {@link proto_bc_ready_not.verify|verify} messages.
     * @function encode
     * @memberof proto_bc_ready_not
     * @static
     * @param {Iproto_bc_ready_not} message proto_bc_ready_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_ready_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.plyGuid);
        return writer;
    };

    /**
     * Encodes the specified proto_bc_ready_not message, length delimited. Does not implicitly {@link proto_bc_ready_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_bc_ready_not
     * @static
     * @param {Iproto_bc_ready_not} message proto_bc_ready_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_ready_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_bc_ready_not message from the specified reader or buffer.
     * @function decode
     * @memberof proto_bc_ready_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_bc_ready_not} proto_bc_ready_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_ready_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_bc_ready_not();
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
     * Decodes a proto_bc_ready_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_bc_ready_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_bc_ready_not} proto_bc_ready_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_ready_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_bc_ready_not message.
     * @function verify
     * @memberof proto_bc_ready_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_bc_ready_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.plyGuid) && !(message.plyGuid && $util.isInteger(message.plyGuid.low) && $util.isInteger(message.plyGuid.high)))
            return "plyGuid: integer|Long expected";
        return null;
    };

    /**
     * Creates a proto_bc_ready_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_bc_ready_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_bc_ready_not} proto_bc_ready_not
     */
    proto_bc_ready_not.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_bc_ready_not)
            return object;
        var message = new $root.proto_bc_ready_not();
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
     * Creates a plain object from a proto_bc_ready_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_bc_ready_not
     * @static
     * @param {proto_bc_ready_not} message proto_bc_ready_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_bc_ready_not.toObject = function toObject(message, options) {
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
     * Converts this proto_bc_ready_not to JSON.
     * @function toJSON
     * @memberof proto_bc_ready_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_bc_ready_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_bc_ready_not;
})();

$root.proto_cb_change_table_req = (function() {

    /**
     * Properties of a proto_cb_change_table_req.
     * @exports Iproto_cb_change_table_req
     * @interface Iproto_cb_change_table_req
     */

    /**
     * Constructs a new proto_cb_change_table_req.
     * @exports proto_cb_change_table_req
     * @classdesc Represents a proto_cb_change_table_req.
     * @implements Iproto_cb_change_table_req
     * @constructor
     * @param {Iproto_cb_change_table_req=} [properties] Properties to set
     */
    function proto_cb_change_table_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new proto_cb_change_table_req instance using the specified properties.
     * @function create
     * @memberof proto_cb_change_table_req
     * @static
     * @param {Iproto_cb_change_table_req=} [properties] Properties to set
     * @returns {proto_cb_change_table_req} proto_cb_change_table_req instance
     */
    proto_cb_change_table_req.create = function create(properties) {
        return new proto_cb_change_table_req(properties);
    };

    /**
     * Encodes the specified proto_cb_change_table_req message. Does not implicitly {@link proto_cb_change_table_req.verify|verify} messages.
     * @function encode
     * @memberof proto_cb_change_table_req
     * @static
     * @param {Iproto_cb_change_table_req} message proto_cb_change_table_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_cb_change_table_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified proto_cb_change_table_req message, length delimited. Does not implicitly {@link proto_cb_change_table_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_cb_change_table_req
     * @static
     * @param {Iproto_cb_change_table_req} message proto_cb_change_table_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_cb_change_table_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_cb_change_table_req message from the specified reader or buffer.
     * @function decode
     * @memberof proto_cb_change_table_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_cb_change_table_req} proto_cb_change_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_cb_change_table_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_cb_change_table_req();
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
     * Decodes a proto_cb_change_table_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_cb_change_table_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_cb_change_table_req} proto_cb_change_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_cb_change_table_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_cb_change_table_req message.
     * @function verify
     * @memberof proto_cb_change_table_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_cb_change_table_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a proto_cb_change_table_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_cb_change_table_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_cb_change_table_req} proto_cb_change_table_req
     */
    proto_cb_change_table_req.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_cb_change_table_req)
            return object;
        return new $root.proto_cb_change_table_req();
    };

    /**
     * Creates a plain object from a proto_cb_change_table_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_cb_change_table_req
     * @static
     * @param {proto_cb_change_table_req} message proto_cb_change_table_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_cb_change_table_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this proto_cb_change_table_req to JSON.
     * @function toJSON
     * @memberof proto_cb_change_table_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_cb_change_table_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_cb_change_table_req;
})();

$root.proto_bc_update_ply_data_not = (function() {

    /**
     * Properties of a proto_bc_update_ply_data_not.
     * @exports Iproto_bc_update_ply_data_not
     * @interface Iproto_bc_update_ply_data_not
     * @property {number|Long} plyGuid proto_bc_update_ply_data_not plyGuid
     * @property {number} uptReason proto_bc_update_ply_data_not uptReason
     * @property {number} uptType proto_bc_update_ply_data_not uptType
     * @property {number} variant proto_bc_update_ply_data_not variant
     * @property {number|Long} amount proto_bc_update_ply_data_not amount
     */

    /**
     * Constructs a new proto_bc_update_ply_data_not.
     * @exports proto_bc_update_ply_data_not
     * @classdesc Represents a proto_bc_update_ply_data_not.
     * @implements Iproto_bc_update_ply_data_not
     * @constructor
     * @param {Iproto_bc_update_ply_data_not=} [properties] Properties to set
     */
    function proto_bc_update_ply_data_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_bc_update_ply_data_not plyGuid.
     * @member {number|Long} plyGuid
     * @memberof proto_bc_update_ply_data_not
     * @instance
     */
    proto_bc_update_ply_data_not.prototype.plyGuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * proto_bc_update_ply_data_not uptReason.
     * @member {number} uptReason
     * @memberof proto_bc_update_ply_data_not
     * @instance
     */
    proto_bc_update_ply_data_not.prototype.uptReason = 0;

    /**
     * proto_bc_update_ply_data_not uptType.
     * @member {number} uptType
     * @memberof proto_bc_update_ply_data_not
     * @instance
     */
    proto_bc_update_ply_data_not.prototype.uptType = 0;

    /**
     * proto_bc_update_ply_data_not variant.
     * @member {number} variant
     * @memberof proto_bc_update_ply_data_not
     * @instance
     */
    proto_bc_update_ply_data_not.prototype.variant = 0;

    /**
     * proto_bc_update_ply_data_not amount.
     * @member {number|Long} amount
     * @memberof proto_bc_update_ply_data_not
     * @instance
     */
    proto_bc_update_ply_data_not.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new proto_bc_update_ply_data_not instance using the specified properties.
     * @function create
     * @memberof proto_bc_update_ply_data_not
     * @static
     * @param {Iproto_bc_update_ply_data_not=} [properties] Properties to set
     * @returns {proto_bc_update_ply_data_not} proto_bc_update_ply_data_not instance
     */
    proto_bc_update_ply_data_not.create = function create(properties) {
        return new proto_bc_update_ply_data_not(properties);
    };

    /**
     * Encodes the specified proto_bc_update_ply_data_not message. Does not implicitly {@link proto_bc_update_ply_data_not.verify|verify} messages.
     * @function encode
     * @memberof proto_bc_update_ply_data_not
     * @static
     * @param {Iproto_bc_update_ply_data_not} message proto_bc_update_ply_data_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_update_ply_data_not.encode = function encode(message, writer) {
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
     * Encodes the specified proto_bc_update_ply_data_not message, length delimited. Does not implicitly {@link proto_bc_update_ply_data_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_bc_update_ply_data_not
     * @static
     * @param {Iproto_bc_update_ply_data_not} message proto_bc_update_ply_data_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_update_ply_data_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_bc_update_ply_data_not message from the specified reader or buffer.
     * @function decode
     * @memberof proto_bc_update_ply_data_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_bc_update_ply_data_not} proto_bc_update_ply_data_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_update_ply_data_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_bc_update_ply_data_not();
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
     * Decodes a proto_bc_update_ply_data_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_bc_update_ply_data_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_bc_update_ply_data_not} proto_bc_update_ply_data_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_update_ply_data_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_bc_update_ply_data_not message.
     * @function verify
     * @memberof proto_bc_update_ply_data_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_bc_update_ply_data_not.verify = function verify(message) {
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
     * Creates a proto_bc_update_ply_data_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_bc_update_ply_data_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_bc_update_ply_data_not} proto_bc_update_ply_data_not
     */
    proto_bc_update_ply_data_not.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_bc_update_ply_data_not)
            return object;
        var message = new $root.proto_bc_update_ply_data_not();
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
     * Creates a plain object from a proto_bc_update_ply_data_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_bc_update_ply_data_not
     * @static
     * @param {proto_bc_update_ply_data_not} message proto_bc_update_ply_data_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_bc_update_ply_data_not.toObject = function toObject(message, options) {
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
     * Converts this proto_bc_update_ply_data_not to JSON.
     * @function toJSON
     * @memberof proto_bc_update_ply_data_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_bc_update_ply_data_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_bc_update_ply_data_not;
})();

$root.proto_bc_message_not = (function() {

    /**
     * Properties of a proto_bc_message_not.
     * @exports Iproto_bc_message_not
     * @interface Iproto_bc_message_not
     * @property {number} type proto_bc_message_not type
     * @property {string} message proto_bc_message_not message
     */

    /**
     * Constructs a new proto_bc_message_not.
     * @exports proto_bc_message_not
     * @classdesc Represents a proto_bc_message_not.
     * @implements Iproto_bc_message_not
     * @constructor
     * @param {Iproto_bc_message_not=} [properties] Properties to set
     */
    function proto_bc_message_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_bc_message_not type.
     * @member {number} type
     * @memberof proto_bc_message_not
     * @instance
     */
    proto_bc_message_not.prototype.type = 0;

    /**
     * proto_bc_message_not message.
     * @member {string} message
     * @memberof proto_bc_message_not
     * @instance
     */
    proto_bc_message_not.prototype.message = "";

    /**
     * Creates a new proto_bc_message_not instance using the specified properties.
     * @function create
     * @memberof proto_bc_message_not
     * @static
     * @param {Iproto_bc_message_not=} [properties] Properties to set
     * @returns {proto_bc_message_not} proto_bc_message_not instance
     */
    proto_bc_message_not.create = function create(properties) {
        return new proto_bc_message_not(properties);
    };

    /**
     * Encodes the specified proto_bc_message_not message. Does not implicitly {@link proto_bc_message_not.verify|verify} messages.
     * @function encode
     * @memberof proto_bc_message_not
     * @static
     * @param {Iproto_bc_message_not} message proto_bc_message_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_message_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
        return writer;
    };

    /**
     * Encodes the specified proto_bc_message_not message, length delimited. Does not implicitly {@link proto_bc_message_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_bc_message_not
     * @static
     * @param {Iproto_bc_message_not} message proto_bc_message_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_message_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_bc_message_not message from the specified reader or buffer.
     * @function decode
     * @memberof proto_bc_message_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_bc_message_not} proto_bc_message_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_message_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_bc_message_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
        if (!message.hasOwnProperty("message"))
            throw $util.ProtocolError("missing required 'message'", { instance: message });
        return message;
    };

    /**
     * Decodes a proto_bc_message_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_bc_message_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_bc_message_not} proto_bc_message_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_message_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_bc_message_not message.
     * @function verify
     * @memberof proto_bc_message_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_bc_message_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.type))
            return "type: integer expected";
        if (!$util.isString(message.message))
            return "message: string expected";
        return null;
    };

    /**
     * Creates a proto_bc_message_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_bc_message_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_bc_message_not} proto_bc_message_not
     */
    proto_bc_message_not.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_bc_message_not)
            return object;
        var message = new $root.proto_bc_message_not();
        if (object.type != null)
            message.type = object.type | 0;
        if (object.message != null)
            message.message = String(object.message);
        return message;
    };

    /**
     * Creates a plain object from a proto_bc_message_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_bc_message_not
     * @static
     * @param {proto_bc_message_not} message proto_bc_message_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_bc_message_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = 0;
            object.message = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        return object;
    };

    /**
     * Converts this proto_bc_message_not to JSON.
     * @function toJSON
     * @memberof proto_bc_message_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_bc_message_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_bc_message_not;
})();

$root.proto_bc_specify_item_update_not = (function() {

    /**
     * Properties of a proto_bc_specify_item_update_not.
     * @exports Iproto_bc_specify_item_update_not
     * @interface Iproto_bc_specify_item_update_not
     * @property {number|Long} plyGuid proto_bc_specify_item_update_not plyGuid
     * @property {number} index proto_bc_specify_item_update_not index
     * @property {number} num proto_bc_specify_item_update_not num
     */

    /**
     * Constructs a new proto_bc_specify_item_update_not.
     * @exports proto_bc_specify_item_update_not
     * @classdesc Represents a proto_bc_specify_item_update_not.
     * @implements Iproto_bc_specify_item_update_not
     * @constructor
     * @param {Iproto_bc_specify_item_update_not=} [properties] Properties to set
     */
    function proto_bc_specify_item_update_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_bc_specify_item_update_not plyGuid.
     * @member {number|Long} plyGuid
     * @memberof proto_bc_specify_item_update_not
     * @instance
     */
    proto_bc_specify_item_update_not.prototype.plyGuid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * proto_bc_specify_item_update_not index.
     * @member {number} index
     * @memberof proto_bc_specify_item_update_not
     * @instance
     */
    proto_bc_specify_item_update_not.prototype.index = 0;

    /**
     * proto_bc_specify_item_update_not num.
     * @member {number} num
     * @memberof proto_bc_specify_item_update_not
     * @instance
     */
    proto_bc_specify_item_update_not.prototype.num = 0;

    /**
     * Creates a new proto_bc_specify_item_update_not instance using the specified properties.
     * @function create
     * @memberof proto_bc_specify_item_update_not
     * @static
     * @param {Iproto_bc_specify_item_update_not=} [properties] Properties to set
     * @returns {proto_bc_specify_item_update_not} proto_bc_specify_item_update_not instance
     */
    proto_bc_specify_item_update_not.create = function create(properties) {
        return new proto_bc_specify_item_update_not(properties);
    };

    /**
     * Encodes the specified proto_bc_specify_item_update_not message. Does not implicitly {@link proto_bc_specify_item_update_not.verify|verify} messages.
     * @function encode
     * @memberof proto_bc_specify_item_update_not
     * @static
     * @param {Iproto_bc_specify_item_update_not} message proto_bc_specify_item_update_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_specify_item_update_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.plyGuid);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.index);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.num);
        return writer;
    };

    /**
     * Encodes the specified proto_bc_specify_item_update_not message, length delimited. Does not implicitly {@link proto_bc_specify_item_update_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_bc_specify_item_update_not
     * @static
     * @param {Iproto_bc_specify_item_update_not} message proto_bc_specify_item_update_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_bc_specify_item_update_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_bc_specify_item_update_not message from the specified reader or buffer.
     * @function decode
     * @memberof proto_bc_specify_item_update_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_bc_specify_item_update_not} proto_bc_specify_item_update_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_specify_item_update_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_bc_specify_item_update_not();
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
     * Decodes a proto_bc_specify_item_update_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_bc_specify_item_update_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_bc_specify_item_update_not} proto_bc_specify_item_update_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_bc_specify_item_update_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_bc_specify_item_update_not message.
     * @function verify
     * @memberof proto_bc_specify_item_update_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_bc_specify_item_update_not.verify = function verify(message) {
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
     * Creates a proto_bc_specify_item_update_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_bc_specify_item_update_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_bc_specify_item_update_not} proto_bc_specify_item_update_not
     */
    proto_bc_specify_item_update_not.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_bc_specify_item_update_not)
            return object;
        var message = new $root.proto_bc_specify_item_update_not();
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
     * Creates a plain object from a proto_bc_specify_item_update_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_bc_specify_item_update_not
     * @static
     * @param {proto_bc_specify_item_update_not} message proto_bc_specify_item_update_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_bc_specify_item_update_not.toObject = function toObject(message, options) {
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
     * Converts this proto_bc_specify_item_update_not to JSON.
     * @function toJSON
     * @memberof proto_bc_specify_item_update_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_bc_specify_item_update_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_bc_specify_item_update_not;
})();

$root.proto_zq_gc_pouch_ball_noti = (function() {

    /**
     * Properties of a proto_zq_gc_pouch_ball_noti.
     * @exports Iproto_zq_gc_pouch_ball_noti
     * @interface Iproto_zq_gc_pouch_ball_noti
     * @property {Array.<Iproto_pouch_ball_info>|null} [ballList] proto_zq_gc_pouch_ball_noti ballList
     */

    /**
     * Constructs a new proto_zq_gc_pouch_ball_noti.
     * @exports proto_zq_gc_pouch_ball_noti
     * @classdesc Represents a proto_zq_gc_pouch_ball_noti.
     * @implements Iproto_zq_gc_pouch_ball_noti
     * @constructor
     * @param {Iproto_zq_gc_pouch_ball_noti=} [properties] Properties to set
     */
    function proto_zq_gc_pouch_ball_noti(properties) {
        this.ballList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_zq_gc_pouch_ball_noti ballList.
     * @member {Array.<Iproto_pouch_ball_info>} ballList
     * @memberof proto_zq_gc_pouch_ball_noti
     * @instance
     */
    proto_zq_gc_pouch_ball_noti.prototype.ballList = $util.emptyArray;

    /**
     * Creates a new proto_zq_gc_pouch_ball_noti instance using the specified properties.
     * @function create
     * @memberof proto_zq_gc_pouch_ball_noti
     * @static
     * @param {Iproto_zq_gc_pouch_ball_noti=} [properties] Properties to set
     * @returns {proto_zq_gc_pouch_ball_noti} proto_zq_gc_pouch_ball_noti instance
     */
    proto_zq_gc_pouch_ball_noti.create = function create(properties) {
        return new proto_zq_gc_pouch_ball_noti(properties);
    };

    /**
     * Encodes the specified proto_zq_gc_pouch_ball_noti message. Does not implicitly {@link proto_zq_gc_pouch_ball_noti.verify|verify} messages.
     * @function encode
     * @memberof proto_zq_gc_pouch_ball_noti
     * @static
     * @param {Iproto_zq_gc_pouch_ball_noti} message proto_zq_gc_pouch_ball_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_pouch_ball_noti.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ballList != null && message.ballList.length)
            for (var i = 0; i < message.ballList.length; ++i)
                $root.proto_pouch_ball_info.encode(message.ballList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified proto_zq_gc_pouch_ball_noti message, length delimited. Does not implicitly {@link proto_zq_gc_pouch_ball_noti.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_zq_gc_pouch_ball_noti
     * @static
     * @param {Iproto_zq_gc_pouch_ball_noti} message proto_zq_gc_pouch_ball_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_pouch_ball_noti.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_zq_gc_pouch_ball_noti message from the specified reader or buffer.
     * @function decode
     * @memberof proto_zq_gc_pouch_ball_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_zq_gc_pouch_ball_noti} proto_zq_gc_pouch_ball_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_pouch_ball_noti.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_zq_gc_pouch_ball_noti();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (!(message.ballList && message.ballList.length))
                        message.ballList = [];
                    message.ballList.push($root.proto_pouch_ball_info.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes a proto_zq_gc_pouch_ball_noti message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_zq_gc_pouch_ball_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_zq_gc_pouch_ball_noti} proto_zq_gc_pouch_ball_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_pouch_ball_noti.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_zq_gc_pouch_ball_noti message.
     * @function verify
     * @memberof proto_zq_gc_pouch_ball_noti
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_zq_gc_pouch_ball_noti.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ballList != null && message.hasOwnProperty("ballList")) {
            if (!Array.isArray(message.ballList))
                return "ballList: array expected";
            for (var i = 0; i < message.ballList.length; ++i) {
                var error = $root.proto_pouch_ball_info.verify(message.ballList[i]);
                if (error)
                    return "ballList." + error;
            }
        }
        return null;
    };

    /**
     * Creates a proto_zq_gc_pouch_ball_noti message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_zq_gc_pouch_ball_noti
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_zq_gc_pouch_ball_noti} proto_zq_gc_pouch_ball_noti
     */
    proto_zq_gc_pouch_ball_noti.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_zq_gc_pouch_ball_noti)
            return object;
        var message = new $root.proto_zq_gc_pouch_ball_noti();
        if (object.ballList) {
            if (!Array.isArray(object.ballList))
                throw TypeError(".proto_zq_gc_pouch_ball_noti.ballList: array expected");
            message.ballList = [];
            for (var i = 0; i < object.ballList.length; ++i) {
                if (typeof object.ballList[i] !== "object")
                    throw TypeError(".proto_zq_gc_pouch_ball_noti.ballList: object expected");
                message.ballList[i] = $root.proto_pouch_ball_info.fromObject(object.ballList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a proto_zq_gc_pouch_ball_noti message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_zq_gc_pouch_ball_noti
     * @static
     * @param {proto_zq_gc_pouch_ball_noti} message proto_zq_gc_pouch_ball_noti
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_zq_gc_pouch_ball_noti.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ballList = [];
        if (message.ballList && message.ballList.length) {
            object.ballList = [];
            for (var j = 0; j < message.ballList.length; ++j)
                object.ballList[j] = $root.proto_pouch_ball_info.toObject(message.ballList[j], options);
        }
        return object;
    };

    /**
     * Converts this proto_zq_gc_pouch_ball_noti to JSON.
     * @function toJSON
     * @memberof proto_zq_gc_pouch_ball_noti
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_zq_gc_pouch_ball_noti.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_zq_gc_pouch_ball_noti;
})();

$root.proto_zq_gc_table_info_noti = (function() {

    /**
     * Properties of a proto_zq_gc_table_info_noti.
     * @exports Iproto_zq_gc_table_info_noti
     * @interface Iproto_zq_gc_table_info_noti
     * @property {Array.<Iproto_zq_kv_pair>|null} [infoList] proto_zq_gc_table_info_noti infoList
     */

    /**
     * Constructs a new proto_zq_gc_table_info_noti.
     * @exports proto_zq_gc_table_info_noti
     * @classdesc Represents a proto_zq_gc_table_info_noti.
     * @implements Iproto_zq_gc_table_info_noti
     * @constructor
     * @param {Iproto_zq_gc_table_info_noti=} [properties] Properties to set
     */
    function proto_zq_gc_table_info_noti(properties) {
        this.infoList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_zq_gc_table_info_noti infoList.
     * @member {Array.<Iproto_zq_kv_pair>} infoList
     * @memberof proto_zq_gc_table_info_noti
     * @instance
     */
    proto_zq_gc_table_info_noti.prototype.infoList = $util.emptyArray;

    /**
     * Creates a new proto_zq_gc_table_info_noti instance using the specified properties.
     * @function create
     * @memberof proto_zq_gc_table_info_noti
     * @static
     * @param {Iproto_zq_gc_table_info_noti=} [properties] Properties to set
     * @returns {proto_zq_gc_table_info_noti} proto_zq_gc_table_info_noti instance
     */
    proto_zq_gc_table_info_noti.create = function create(properties) {
        return new proto_zq_gc_table_info_noti(properties);
    };

    /**
     * Encodes the specified proto_zq_gc_table_info_noti message. Does not implicitly {@link proto_zq_gc_table_info_noti.verify|verify} messages.
     * @function encode
     * @memberof proto_zq_gc_table_info_noti
     * @static
     * @param {Iproto_zq_gc_table_info_noti} message proto_zq_gc_table_info_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_table_info_noti.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.infoList != null && message.infoList.length)
            for (var i = 0; i < message.infoList.length; ++i)
                $root.proto_zq_kv_pair.encode(message.infoList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified proto_zq_gc_table_info_noti message, length delimited. Does not implicitly {@link proto_zq_gc_table_info_noti.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_zq_gc_table_info_noti
     * @static
     * @param {Iproto_zq_gc_table_info_noti} message proto_zq_gc_table_info_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_table_info_noti.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_zq_gc_table_info_noti message from the specified reader or buffer.
     * @function decode
     * @memberof proto_zq_gc_table_info_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_zq_gc_table_info_noti} proto_zq_gc_table_info_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_table_info_noti.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_zq_gc_table_info_noti();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (!(message.infoList && message.infoList.length))
                        message.infoList = [];
                    message.infoList.push($root.proto_zq_kv_pair.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes a proto_zq_gc_table_info_noti message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_zq_gc_table_info_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_zq_gc_table_info_noti} proto_zq_gc_table_info_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_table_info_noti.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_zq_gc_table_info_noti message.
     * @function verify
     * @memberof proto_zq_gc_table_info_noti
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_zq_gc_table_info_noti.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.infoList != null && message.hasOwnProperty("infoList")) {
            if (!Array.isArray(message.infoList))
                return "infoList: array expected";
            for (var i = 0; i < message.infoList.length; ++i) {
                var error = $root.proto_zq_kv_pair.verify(message.infoList[i]);
                if (error)
                    return "infoList." + error;
            }
        }
        return null;
    };

    /**
     * Creates a proto_zq_gc_table_info_noti message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_zq_gc_table_info_noti
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_zq_gc_table_info_noti} proto_zq_gc_table_info_noti
     */
    proto_zq_gc_table_info_noti.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_zq_gc_table_info_noti)
            return object;
        var message = new $root.proto_zq_gc_table_info_noti();
        if (object.infoList) {
            if (!Array.isArray(object.infoList))
                throw TypeError(".proto_zq_gc_table_info_noti.infoList: array expected");
            message.infoList = [];
            for (var i = 0; i < object.infoList.length; ++i) {
                if (typeof object.infoList[i] !== "object")
                    throw TypeError(".proto_zq_gc_table_info_noti.infoList: object expected");
                message.infoList[i] = $root.proto_zq_kv_pair.fromObject(object.infoList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a proto_zq_gc_table_info_noti message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_zq_gc_table_info_noti
     * @static
     * @param {proto_zq_gc_table_info_noti} message proto_zq_gc_table_info_noti
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_zq_gc_table_info_noti.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.infoList = [];
        if (message.infoList && message.infoList.length) {
            object.infoList = [];
            for (var j = 0; j < message.infoList.length; ++j)
                object.infoList[j] = $root.proto_zq_kv_pair.toObject(message.infoList[j], options);
        }
        return object;
    };

    /**
     * Converts this proto_zq_gc_table_info_noti to JSON.
     * @function toJSON
     * @memberof proto_zq_gc_table_info_noti
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_zq_gc_table_info_noti.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_zq_gc_table_info_noti;
})();

$root.proto_zq_gc_game_end_noti = (function() {

    /**
     * Properties of a proto_zq_gc_game_end_noti.
     * @exports Iproto_zq_gc_game_end_noti
     * @interface Iproto_zq_gc_game_end_noti
     */

    /**
     * Constructs a new proto_zq_gc_game_end_noti.
     * @exports proto_zq_gc_game_end_noti
     * @classdesc Represents a proto_zq_gc_game_end_noti.
     * @implements Iproto_zq_gc_game_end_noti
     * @constructor
     * @param {Iproto_zq_gc_game_end_noti=} [properties] Properties to set
     */
    function proto_zq_gc_game_end_noti(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new proto_zq_gc_game_end_noti instance using the specified properties.
     * @function create
     * @memberof proto_zq_gc_game_end_noti
     * @static
     * @param {Iproto_zq_gc_game_end_noti=} [properties] Properties to set
     * @returns {proto_zq_gc_game_end_noti} proto_zq_gc_game_end_noti instance
     */
    proto_zq_gc_game_end_noti.create = function create(properties) {
        return new proto_zq_gc_game_end_noti(properties);
    };

    /**
     * Encodes the specified proto_zq_gc_game_end_noti message. Does not implicitly {@link proto_zq_gc_game_end_noti.verify|verify} messages.
     * @function encode
     * @memberof proto_zq_gc_game_end_noti
     * @static
     * @param {Iproto_zq_gc_game_end_noti} message proto_zq_gc_game_end_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_game_end_noti.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified proto_zq_gc_game_end_noti message, length delimited. Does not implicitly {@link proto_zq_gc_game_end_noti.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_zq_gc_game_end_noti
     * @static
     * @param {Iproto_zq_gc_game_end_noti} message proto_zq_gc_game_end_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_game_end_noti.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_zq_gc_game_end_noti message from the specified reader or buffer.
     * @function decode
     * @memberof proto_zq_gc_game_end_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_zq_gc_game_end_noti} proto_zq_gc_game_end_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_game_end_noti.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_zq_gc_game_end_noti();
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
     * Decodes a proto_zq_gc_game_end_noti message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_zq_gc_game_end_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_zq_gc_game_end_noti} proto_zq_gc_game_end_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_game_end_noti.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_zq_gc_game_end_noti message.
     * @function verify
     * @memberof proto_zq_gc_game_end_noti
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_zq_gc_game_end_noti.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a proto_zq_gc_game_end_noti message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_zq_gc_game_end_noti
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_zq_gc_game_end_noti} proto_zq_gc_game_end_noti
     */
    proto_zq_gc_game_end_noti.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_zq_gc_game_end_noti)
            return object;
        return new $root.proto_zq_gc_game_end_noti();
    };

    /**
     * Creates a plain object from a proto_zq_gc_game_end_noti message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_zq_gc_game_end_noti
     * @static
     * @param {proto_zq_gc_game_end_noti} message proto_zq_gc_game_end_noti
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_zq_gc_game_end_noti.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this proto_zq_gc_game_end_noti to JSON.
     * @function toJSON
     * @memberof proto_zq_gc_game_end_noti
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_zq_gc_game_end_noti.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_zq_gc_game_end_noti;
})();

$root.proto_zq_gc_game_start_noti = (function() {

    /**
     * Properties of a proto_zq_gc_game_start_noti.
     * @exports Iproto_zq_gc_game_start_noti
     * @interface Iproto_zq_gc_game_start_noti
     */

    /**
     * Constructs a new proto_zq_gc_game_start_noti.
     * @exports proto_zq_gc_game_start_noti
     * @classdesc Represents a proto_zq_gc_game_start_noti.
     * @implements Iproto_zq_gc_game_start_noti
     * @constructor
     * @param {Iproto_zq_gc_game_start_noti=} [properties] Properties to set
     */
    function proto_zq_gc_game_start_noti(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new proto_zq_gc_game_start_noti instance using the specified properties.
     * @function create
     * @memberof proto_zq_gc_game_start_noti
     * @static
     * @param {Iproto_zq_gc_game_start_noti=} [properties] Properties to set
     * @returns {proto_zq_gc_game_start_noti} proto_zq_gc_game_start_noti instance
     */
    proto_zq_gc_game_start_noti.create = function create(properties) {
        return new proto_zq_gc_game_start_noti(properties);
    };

    /**
     * Encodes the specified proto_zq_gc_game_start_noti message. Does not implicitly {@link proto_zq_gc_game_start_noti.verify|verify} messages.
     * @function encode
     * @memberof proto_zq_gc_game_start_noti
     * @static
     * @param {Iproto_zq_gc_game_start_noti} message proto_zq_gc_game_start_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_game_start_noti.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified proto_zq_gc_game_start_noti message, length delimited. Does not implicitly {@link proto_zq_gc_game_start_noti.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_zq_gc_game_start_noti
     * @static
     * @param {Iproto_zq_gc_game_start_noti} message proto_zq_gc_game_start_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_game_start_noti.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_zq_gc_game_start_noti message from the specified reader or buffer.
     * @function decode
     * @memberof proto_zq_gc_game_start_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_zq_gc_game_start_noti} proto_zq_gc_game_start_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_game_start_noti.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_zq_gc_game_start_noti();
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
     * Decodes a proto_zq_gc_game_start_noti message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_zq_gc_game_start_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_zq_gc_game_start_noti} proto_zq_gc_game_start_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_game_start_noti.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_zq_gc_game_start_noti message.
     * @function verify
     * @memberof proto_zq_gc_game_start_noti
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_zq_gc_game_start_noti.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a proto_zq_gc_game_start_noti message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_zq_gc_game_start_noti
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_zq_gc_game_start_noti} proto_zq_gc_game_start_noti
     */
    proto_zq_gc_game_start_noti.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_zq_gc_game_start_noti)
            return object;
        return new $root.proto_zq_gc_game_start_noti();
    };

    /**
     * Creates a plain object from a proto_zq_gc_game_start_noti message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_zq_gc_game_start_noti
     * @static
     * @param {proto_zq_gc_game_start_noti} message proto_zq_gc_game_start_noti
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_zq_gc_game_start_noti.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this proto_zq_gc_game_start_noti to JSON.
     * @function toJSON
     * @memberof proto_zq_gc_game_start_noti
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_zq_gc_game_start_noti.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_zq_gc_game_start_noti;
})();

$root.proto_zq_cg_ready_req = (function() {

    /**
     * Properties of a proto_zq_cg_ready_req.
     * @exports Iproto_zq_cg_ready_req
     * @interface Iproto_zq_cg_ready_req
     */

    /**
     * Constructs a new proto_zq_cg_ready_req.
     * @exports proto_zq_cg_ready_req
     * @classdesc Represents a proto_zq_cg_ready_req.
     * @implements Iproto_zq_cg_ready_req
     * @constructor
     * @param {Iproto_zq_cg_ready_req=} [properties] Properties to set
     */
    function proto_zq_cg_ready_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new proto_zq_cg_ready_req instance using the specified properties.
     * @function create
     * @memberof proto_zq_cg_ready_req
     * @static
     * @param {Iproto_zq_cg_ready_req=} [properties] Properties to set
     * @returns {proto_zq_cg_ready_req} proto_zq_cg_ready_req instance
     */
    proto_zq_cg_ready_req.create = function create(properties) {
        return new proto_zq_cg_ready_req(properties);
    };

    /**
     * Encodes the specified proto_zq_cg_ready_req message. Does not implicitly {@link proto_zq_cg_ready_req.verify|verify} messages.
     * @function encode
     * @memberof proto_zq_cg_ready_req
     * @static
     * @param {Iproto_zq_cg_ready_req} message proto_zq_cg_ready_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_cg_ready_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified proto_zq_cg_ready_req message, length delimited. Does not implicitly {@link proto_zq_cg_ready_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_zq_cg_ready_req
     * @static
     * @param {Iproto_zq_cg_ready_req} message proto_zq_cg_ready_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_cg_ready_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_zq_cg_ready_req message from the specified reader or buffer.
     * @function decode
     * @memberof proto_zq_cg_ready_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_zq_cg_ready_req} proto_zq_cg_ready_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_cg_ready_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_zq_cg_ready_req();
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
     * Decodes a proto_zq_cg_ready_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_zq_cg_ready_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_zq_cg_ready_req} proto_zq_cg_ready_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_cg_ready_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_zq_cg_ready_req message.
     * @function verify
     * @memberof proto_zq_cg_ready_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_zq_cg_ready_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a proto_zq_cg_ready_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_zq_cg_ready_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_zq_cg_ready_req} proto_zq_cg_ready_req
     */
    proto_zq_cg_ready_req.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_zq_cg_ready_req)
            return object;
        return new $root.proto_zq_cg_ready_req();
    };

    /**
     * Creates a plain object from a proto_zq_cg_ready_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_zq_cg_ready_req
     * @static
     * @param {proto_zq_cg_ready_req} message proto_zq_cg_ready_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_zq_cg_ready_req.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this proto_zq_cg_ready_req to JSON.
     * @function toJSON
     * @memberof proto_zq_cg_ready_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_zq_cg_ready_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_zq_cg_ready_req;
})();

$root.proto_zq_gc_set_bet_ack = (function() {

    /**
     * Properties of a proto_zq_gc_set_bet_ack.
     * @exports Iproto_zq_gc_set_bet_ack
     * @interface Iproto_zq_gc_set_bet_ack
     * @property {number} ret proto_zq_gc_set_bet_ack ret
     * @property {string} msg proto_zq_gc_set_bet_ack msg
     */

    /**
     * Constructs a new proto_zq_gc_set_bet_ack.
     * @exports proto_zq_gc_set_bet_ack
     * @classdesc Represents a proto_zq_gc_set_bet_ack.
     * @implements Iproto_zq_gc_set_bet_ack
     * @constructor
     * @param {Iproto_zq_gc_set_bet_ack=} [properties] Properties to set
     */
    function proto_zq_gc_set_bet_ack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_zq_gc_set_bet_ack ret.
     * @member {number} ret
     * @memberof proto_zq_gc_set_bet_ack
     * @instance
     */
    proto_zq_gc_set_bet_ack.prototype.ret = 0;

    /**
     * proto_zq_gc_set_bet_ack msg.
     * @member {string} msg
     * @memberof proto_zq_gc_set_bet_ack
     * @instance
     */
    proto_zq_gc_set_bet_ack.prototype.msg = "";

    /**
     * Creates a new proto_zq_gc_set_bet_ack instance using the specified properties.
     * @function create
     * @memberof proto_zq_gc_set_bet_ack
     * @static
     * @param {Iproto_zq_gc_set_bet_ack=} [properties] Properties to set
     * @returns {proto_zq_gc_set_bet_ack} proto_zq_gc_set_bet_ack instance
     */
    proto_zq_gc_set_bet_ack.create = function create(properties) {
        return new proto_zq_gc_set_bet_ack(properties);
    };

    /**
     * Encodes the specified proto_zq_gc_set_bet_ack message. Does not implicitly {@link proto_zq_gc_set_bet_ack.verify|verify} messages.
     * @function encode
     * @memberof proto_zq_gc_set_bet_ack
     * @static
     * @param {Iproto_zq_gc_set_bet_ack} message proto_zq_gc_set_bet_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_set_bet_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
        return writer;
    };

    /**
     * Encodes the specified proto_zq_gc_set_bet_ack message, length delimited. Does not implicitly {@link proto_zq_gc_set_bet_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_zq_gc_set_bet_ack
     * @static
     * @param {Iproto_zq_gc_set_bet_ack} message proto_zq_gc_set_bet_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_set_bet_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_zq_gc_set_bet_ack message from the specified reader or buffer.
     * @function decode
     * @memberof proto_zq_gc_set_bet_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_zq_gc_set_bet_ack} proto_zq_gc_set_bet_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_set_bet_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_zq_gc_set_bet_ack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ret = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        if (!message.hasOwnProperty("ret"))
            throw $util.ProtocolError("missing required 'ret'", { instance: message });
        if (!message.hasOwnProperty("msg"))
            throw $util.ProtocolError("missing required 'msg'", { instance: message });
        return message;
    };

    /**
     * Decodes a proto_zq_gc_set_bet_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_zq_gc_set_bet_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_zq_gc_set_bet_ack} proto_zq_gc_set_bet_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_set_bet_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_zq_gc_set_bet_ack message.
     * @function verify
     * @memberof proto_zq_gc_set_bet_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_zq_gc_set_bet_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.ret))
            return "ret: integer expected";
        if (!$util.isString(message.msg))
            return "msg: string expected";
        return null;
    };

    /**
     * Creates a proto_zq_gc_set_bet_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_zq_gc_set_bet_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_zq_gc_set_bet_ack} proto_zq_gc_set_bet_ack
     */
    proto_zq_gc_set_bet_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_zq_gc_set_bet_ack)
            return object;
        var message = new $root.proto_zq_gc_set_bet_ack();
        if (object.ret != null)
            message.ret = object.ret | 0;
        if (object.msg != null)
            message.msg = String(object.msg);
        return message;
    };

    /**
     * Creates a plain object from a proto_zq_gc_set_bet_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_zq_gc_set_bet_ack
     * @static
     * @param {proto_zq_gc_set_bet_ack} message proto_zq_gc_set_bet_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_zq_gc_set_bet_ack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ret = 0;
            object.msg = "";
        }
        if (message.ret != null && message.hasOwnProperty("ret"))
            object.ret = message.ret;
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        return object;
    };

    /**
     * Converts this proto_zq_gc_set_bet_ack to JSON.
     * @function toJSON
     * @memberof proto_zq_gc_set_bet_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_zq_gc_set_bet_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_zq_gc_set_bet_ack;
})();

$root.proto_zq_gc_9ball_oneshot_score_noti = (function() {

    /**
     * Properties of a proto_zq_gc_9ball_oneshot_score_noti.
     * @exports Iproto_zq_gc_9ball_oneshot_score_noti
     * @interface Iproto_zq_gc_9ball_oneshot_score_noti
     * @property {number} oneshotRet proto_zq_gc_9ball_oneshot_score_noti oneshotRet
     * @property {number} oneshotScore proto_zq_gc_9ball_oneshot_score_noti oneshotScore
     * @property {string} shotParams proto_zq_gc_9ball_oneshot_score_noti shotParams
     * @property {Array.<Iproto_pouch_ball_info>|null} [ballList] proto_zq_gc_9ball_oneshot_score_noti ballList
     */

    /**
     * Constructs a new proto_zq_gc_9ball_oneshot_score_noti.
     * @exports proto_zq_gc_9ball_oneshot_score_noti
     * @classdesc Represents a proto_zq_gc_9ball_oneshot_score_noti.
     * @implements Iproto_zq_gc_9ball_oneshot_score_noti
     * @constructor
     * @param {Iproto_zq_gc_9ball_oneshot_score_noti=} [properties] Properties to set
     */
    function proto_zq_gc_9ball_oneshot_score_noti(properties) {
        this.ballList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_zq_gc_9ball_oneshot_score_noti oneshotRet.
     * @member {number} oneshotRet
     * @memberof proto_zq_gc_9ball_oneshot_score_noti
     * @instance
     */
    proto_zq_gc_9ball_oneshot_score_noti.prototype.oneshotRet = 0;

    /**
     * proto_zq_gc_9ball_oneshot_score_noti oneshotScore.
     * @member {number} oneshotScore
     * @memberof proto_zq_gc_9ball_oneshot_score_noti
     * @instance
     */
    proto_zq_gc_9ball_oneshot_score_noti.prototype.oneshotScore = 0;

    /**
     * proto_zq_gc_9ball_oneshot_score_noti shotParams.
     * @member {string} shotParams
     * @memberof proto_zq_gc_9ball_oneshot_score_noti
     * @instance
     */
    proto_zq_gc_9ball_oneshot_score_noti.prototype.shotParams = "";

    /**
     * proto_zq_gc_9ball_oneshot_score_noti ballList.
     * @member {Array.<Iproto_pouch_ball_info>} ballList
     * @memberof proto_zq_gc_9ball_oneshot_score_noti
     * @instance
     */
    proto_zq_gc_9ball_oneshot_score_noti.prototype.ballList = $util.emptyArray;

    /**
     * Creates a new proto_zq_gc_9ball_oneshot_score_noti instance using the specified properties.
     * @function create
     * @memberof proto_zq_gc_9ball_oneshot_score_noti
     * @static
     * @param {Iproto_zq_gc_9ball_oneshot_score_noti=} [properties] Properties to set
     * @returns {proto_zq_gc_9ball_oneshot_score_noti} proto_zq_gc_9ball_oneshot_score_noti instance
     */
    proto_zq_gc_9ball_oneshot_score_noti.create = function create(properties) {
        return new proto_zq_gc_9ball_oneshot_score_noti(properties);
    };

    /**
     * Encodes the specified proto_zq_gc_9ball_oneshot_score_noti message. Does not implicitly {@link proto_zq_gc_9ball_oneshot_score_noti.verify|verify} messages.
     * @function encode
     * @memberof proto_zq_gc_9ball_oneshot_score_noti
     * @static
     * @param {Iproto_zq_gc_9ball_oneshot_score_noti} message proto_zq_gc_9ball_oneshot_score_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_9ball_oneshot_score_noti.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.oneshotRet);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.oneshotScore);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.shotParams);
        if (message.ballList != null && message.ballList.length)
            for (var i = 0; i < message.ballList.length; ++i)
                $root.proto_pouch_ball_info.encode(message.ballList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified proto_zq_gc_9ball_oneshot_score_noti message, length delimited. Does not implicitly {@link proto_zq_gc_9ball_oneshot_score_noti.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_zq_gc_9ball_oneshot_score_noti
     * @static
     * @param {Iproto_zq_gc_9ball_oneshot_score_noti} message proto_zq_gc_9ball_oneshot_score_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_9ball_oneshot_score_noti.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_zq_gc_9ball_oneshot_score_noti message from the specified reader or buffer.
     * @function decode
     * @memberof proto_zq_gc_9ball_oneshot_score_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_zq_gc_9ball_oneshot_score_noti} proto_zq_gc_9ball_oneshot_score_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_9ball_oneshot_score_noti.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_zq_gc_9ball_oneshot_score_noti();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oneshotRet = reader.int32();
                    break;
                case 2:
                    message.oneshotScore = reader.int32();
                    break;
                case 3:
                    message.shotParams = reader.string();
                    break;
                case 4:
                    if (!(message.ballList && message.ballList.length))
                        message.ballList = [];
                    message.ballList.push($root.proto_pouch_ball_info.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        if (!message.hasOwnProperty("oneshotRet"))
            throw $util.ProtocolError("missing required 'oneshotRet'", { instance: message });
        if (!message.hasOwnProperty("oneshotScore"))
            throw $util.ProtocolError("missing required 'oneshotScore'", { instance: message });
        if (!message.hasOwnProperty("shotParams"))
            throw $util.ProtocolError("missing required 'shotParams'", { instance: message });
        return message;
    };

    /**
     * Decodes a proto_zq_gc_9ball_oneshot_score_noti message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_zq_gc_9ball_oneshot_score_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_zq_gc_9ball_oneshot_score_noti} proto_zq_gc_9ball_oneshot_score_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_9ball_oneshot_score_noti.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_zq_gc_9ball_oneshot_score_noti message.
     * @function verify
     * @memberof proto_zq_gc_9ball_oneshot_score_noti
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_zq_gc_9ball_oneshot_score_noti.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.oneshotRet))
            return "oneshotRet: integer expected";
        if (!$util.isInteger(message.oneshotScore))
            return "oneshotScore: integer expected";
        if (!$util.isString(message.shotParams))
            return "shotParams: string expected";
        if (message.ballList != null && message.hasOwnProperty("ballList")) {
            if (!Array.isArray(message.ballList))
                return "ballList: array expected";
            for (var i = 0; i < message.ballList.length; ++i) {
                var error = $root.proto_pouch_ball_info.verify(message.ballList[i]);
                if (error)
                    return "ballList." + error;
            }
        }
        return null;
    };

    /**
     * Creates a proto_zq_gc_9ball_oneshot_score_noti message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_zq_gc_9ball_oneshot_score_noti
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_zq_gc_9ball_oneshot_score_noti} proto_zq_gc_9ball_oneshot_score_noti
     */
    proto_zq_gc_9ball_oneshot_score_noti.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_zq_gc_9ball_oneshot_score_noti)
            return object;
        var message = new $root.proto_zq_gc_9ball_oneshot_score_noti();
        if (object.oneshotRet != null)
            message.oneshotRet = object.oneshotRet | 0;
        if (object.oneshotScore != null)
            message.oneshotScore = object.oneshotScore | 0;
        if (object.shotParams != null)
            message.shotParams = String(object.shotParams);
        if (object.ballList) {
            if (!Array.isArray(object.ballList))
                throw TypeError(".proto_zq_gc_9ball_oneshot_score_noti.ballList: array expected");
            message.ballList = [];
            for (var i = 0; i < object.ballList.length; ++i) {
                if (typeof object.ballList[i] !== "object")
                    throw TypeError(".proto_zq_gc_9ball_oneshot_score_noti.ballList: object expected");
                message.ballList[i] = $root.proto_pouch_ball_info.fromObject(object.ballList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a proto_zq_gc_9ball_oneshot_score_noti message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_zq_gc_9ball_oneshot_score_noti
     * @static
     * @param {proto_zq_gc_9ball_oneshot_score_noti} message proto_zq_gc_9ball_oneshot_score_noti
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_zq_gc_9ball_oneshot_score_noti.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ballList = [];
        if (options.defaults) {
            object.oneshotRet = 0;
            object.oneshotScore = 0;
            object.shotParams = "";
        }
        if (message.oneshotRet != null && message.hasOwnProperty("oneshotRet"))
            object.oneshotRet = message.oneshotRet;
        if (message.oneshotScore != null && message.hasOwnProperty("oneshotScore"))
            object.oneshotScore = message.oneshotScore;
        if (message.shotParams != null && message.hasOwnProperty("shotParams"))
            object.shotParams = message.shotParams;
        if (message.ballList && message.ballList.length) {
            object.ballList = [];
            for (var j = 0; j < message.ballList.length; ++j)
                object.ballList[j] = $root.proto_pouch_ball_info.toObject(message.ballList[j], options);
        }
        return object;
    };

    /**
     * Converts this proto_zq_gc_9ball_oneshot_score_noti to JSON.
     * @function toJSON
     * @memberof proto_zq_gc_9ball_oneshot_score_noti
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_zq_gc_9ball_oneshot_score_noti.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_zq_gc_9ball_oneshot_score_noti;
})();

$root.proto_zq_gc_bet_list_ack = (function() {

    /**
     * Properties of a proto_zq_gc_bet_list_ack.
     * @exports Iproto_zq_gc_bet_list_ack
     * @interface Iproto_zq_gc_bet_list_ack
     * @property {Array.<number>|null} [enableList] proto_zq_gc_bet_list_ack enableList
     * @property {Array.<number>|null} [disableList] proto_zq_gc_bet_list_ack disableList
     */

    /**
     * Constructs a new proto_zq_gc_bet_list_ack.
     * @exports proto_zq_gc_bet_list_ack
     * @classdesc Represents a proto_zq_gc_bet_list_ack.
     * @implements Iproto_zq_gc_bet_list_ack
     * @constructor
     * @param {Iproto_zq_gc_bet_list_ack=} [properties] Properties to set
     */
    function proto_zq_gc_bet_list_ack(properties) {
        this.enableList = [];
        this.disableList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_zq_gc_bet_list_ack enableList.
     * @member {Array.<number>} enableList
     * @memberof proto_zq_gc_bet_list_ack
     * @instance
     */
    proto_zq_gc_bet_list_ack.prototype.enableList = $util.emptyArray;

    /**
     * proto_zq_gc_bet_list_ack disableList.
     * @member {Array.<number>} disableList
     * @memberof proto_zq_gc_bet_list_ack
     * @instance
     */
    proto_zq_gc_bet_list_ack.prototype.disableList = $util.emptyArray;

    /**
     * Creates a new proto_zq_gc_bet_list_ack instance using the specified properties.
     * @function create
     * @memberof proto_zq_gc_bet_list_ack
     * @static
     * @param {Iproto_zq_gc_bet_list_ack=} [properties] Properties to set
     * @returns {proto_zq_gc_bet_list_ack} proto_zq_gc_bet_list_ack instance
     */
    proto_zq_gc_bet_list_ack.create = function create(properties) {
        return new proto_zq_gc_bet_list_ack(properties);
    };

    /**
     * Encodes the specified proto_zq_gc_bet_list_ack message. Does not implicitly {@link proto_zq_gc_bet_list_ack.verify|verify} messages.
     * @function encode
     * @memberof proto_zq_gc_bet_list_ack
     * @static
     * @param {Iproto_zq_gc_bet_list_ack} message proto_zq_gc_bet_list_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_bet_list_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.enableList != null && message.enableList.length)
            for (var i = 0; i < message.enableList.length; ++i)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.enableList[i]);
        if (message.disableList != null && message.disableList.length)
            for (var i = 0; i < message.disableList.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.disableList[i]);
        return writer;
    };

    /**
     * Encodes the specified proto_zq_gc_bet_list_ack message, length delimited. Does not implicitly {@link proto_zq_gc_bet_list_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_zq_gc_bet_list_ack
     * @static
     * @param {Iproto_zq_gc_bet_list_ack} message proto_zq_gc_bet_list_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_bet_list_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_zq_gc_bet_list_ack message from the specified reader or buffer.
     * @function decode
     * @memberof proto_zq_gc_bet_list_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_zq_gc_bet_list_ack} proto_zq_gc_bet_list_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_bet_list_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_zq_gc_bet_list_ack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (!(message.enableList && message.enableList.length))
                        message.enableList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.enableList.push(reader.int32());
                    } else
                        message.enableList.push(reader.int32());
                    break;
                case 2:
                    if (!(message.disableList && message.disableList.length))
                        message.disableList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.disableList.push(reader.int32());
                    } else
                        message.disableList.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes a proto_zq_gc_bet_list_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_zq_gc_bet_list_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_zq_gc_bet_list_ack} proto_zq_gc_bet_list_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_bet_list_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_zq_gc_bet_list_ack message.
     * @function verify
     * @memberof proto_zq_gc_bet_list_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_zq_gc_bet_list_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.enableList != null && message.hasOwnProperty("enableList")) {
            if (!Array.isArray(message.enableList))
                return "enableList: array expected";
            for (var i = 0; i < message.enableList.length; ++i)
                if (!$util.isInteger(message.enableList[i]))
                    return "enableList: integer[] expected";
        }
        if (message.disableList != null && message.hasOwnProperty("disableList")) {
            if (!Array.isArray(message.disableList))
                return "disableList: array expected";
            for (var i = 0; i < message.disableList.length; ++i)
                if (!$util.isInteger(message.disableList[i]))
                    return "disableList: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a proto_zq_gc_bet_list_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_zq_gc_bet_list_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_zq_gc_bet_list_ack} proto_zq_gc_bet_list_ack
     */
    proto_zq_gc_bet_list_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_zq_gc_bet_list_ack)
            return object;
        var message = new $root.proto_zq_gc_bet_list_ack();
        if (object.enableList) {
            if (!Array.isArray(object.enableList))
                throw TypeError(".proto_zq_gc_bet_list_ack.enableList: array expected");
            message.enableList = [];
            for (var i = 0; i < object.enableList.length; ++i)
                message.enableList[i] = object.enableList[i] | 0;
        }
        if (object.disableList) {
            if (!Array.isArray(object.disableList))
                throw TypeError(".proto_zq_gc_bet_list_ack.disableList: array expected");
            message.disableList = [];
            for (var i = 0; i < object.disableList.length; ++i)
                message.disableList[i] = object.disableList[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a proto_zq_gc_bet_list_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_zq_gc_bet_list_ack
     * @static
     * @param {proto_zq_gc_bet_list_ack} message proto_zq_gc_bet_list_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_zq_gc_bet_list_ack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.enableList = [];
            object.disableList = [];
        }
        if (message.enableList && message.enableList.length) {
            object.enableList = [];
            for (var j = 0; j < message.enableList.length; ++j)
                object.enableList[j] = message.enableList[j];
        }
        if (message.disableList && message.disableList.length) {
            object.disableList = [];
            for (var j = 0; j < message.disableList.length; ++j)
                object.disableList[j] = message.disableList[j];
        }
        return object;
    };

    /**
     * Converts this proto_zq_gc_bet_list_ack to JSON.
     * @function toJSON
     * @memberof proto_zq_gc_bet_list_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_zq_gc_bet_list_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_zq_gc_bet_list_ack;
})();

$root.proto_zq_cg_set_bet_req = (function() {

    /**
     * Properties of a proto_zq_cg_set_bet_req.
     * @exports Iproto_zq_cg_set_bet_req
     * @interface Iproto_zq_cg_set_bet_req
     * @property {number} bet proto_zq_cg_set_bet_req bet
     */

    /**
     * Constructs a new proto_zq_cg_set_bet_req.
     * @exports proto_zq_cg_set_bet_req
     * @classdesc Represents a proto_zq_cg_set_bet_req.
     * @implements Iproto_zq_cg_set_bet_req
     * @constructor
     * @param {Iproto_zq_cg_set_bet_req=} [properties] Properties to set
     */
    function proto_zq_cg_set_bet_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_zq_cg_set_bet_req bet.
     * @member {number} bet
     * @memberof proto_zq_cg_set_bet_req
     * @instance
     */
    proto_zq_cg_set_bet_req.prototype.bet = 0;

    /**
     * Creates a new proto_zq_cg_set_bet_req instance using the specified properties.
     * @function create
     * @memberof proto_zq_cg_set_bet_req
     * @static
     * @param {Iproto_zq_cg_set_bet_req=} [properties] Properties to set
     * @returns {proto_zq_cg_set_bet_req} proto_zq_cg_set_bet_req instance
     */
    proto_zq_cg_set_bet_req.create = function create(properties) {
        return new proto_zq_cg_set_bet_req(properties);
    };

    /**
     * Encodes the specified proto_zq_cg_set_bet_req message. Does not implicitly {@link proto_zq_cg_set_bet_req.verify|verify} messages.
     * @function encode
     * @memberof proto_zq_cg_set_bet_req
     * @static
     * @param {Iproto_zq_cg_set_bet_req} message proto_zq_cg_set_bet_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_cg_set_bet_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.bet);
        return writer;
    };

    /**
     * Encodes the specified proto_zq_cg_set_bet_req message, length delimited. Does not implicitly {@link proto_zq_cg_set_bet_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_zq_cg_set_bet_req
     * @static
     * @param {Iproto_zq_cg_set_bet_req} message proto_zq_cg_set_bet_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_cg_set_bet_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_zq_cg_set_bet_req message from the specified reader or buffer.
     * @function decode
     * @memberof proto_zq_cg_set_bet_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_zq_cg_set_bet_req} proto_zq_cg_set_bet_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_cg_set_bet_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_zq_cg_set_bet_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bet = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        if (!message.hasOwnProperty("bet"))
            throw $util.ProtocolError("missing required 'bet'", { instance: message });
        return message;
    };

    /**
     * Decodes a proto_zq_cg_set_bet_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_zq_cg_set_bet_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_zq_cg_set_bet_req} proto_zq_cg_set_bet_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_cg_set_bet_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_zq_cg_set_bet_req message.
     * @function verify
     * @memberof proto_zq_cg_set_bet_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_zq_cg_set_bet_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.bet))
            return "bet: integer expected";
        return null;
    };

    /**
     * Creates a proto_zq_cg_set_bet_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_zq_cg_set_bet_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_zq_cg_set_bet_req} proto_zq_cg_set_bet_req
     */
    proto_zq_cg_set_bet_req.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_zq_cg_set_bet_req)
            return object;
        var message = new $root.proto_zq_cg_set_bet_req();
        if (object.bet != null)
            message.bet = object.bet | 0;
        return message;
    };

    /**
     * Creates a plain object from a proto_zq_cg_set_bet_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_zq_cg_set_bet_req
     * @static
     * @param {proto_zq_cg_set_bet_req} message proto_zq_cg_set_bet_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_zq_cg_set_bet_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.bet = 0;
        if (message.bet != null && message.hasOwnProperty("bet"))
            object.bet = message.bet;
        return object;
    };

    /**
     * Converts this proto_zq_cg_set_bet_req to JSON.
     * @function toJSON
     * @memberof proto_zq_cg_set_bet_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_zq_cg_set_bet_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_zq_cg_set_bet_req;
})();

$root.proto_zq_gc_set_bet_noti = (function() {

    /**
     * Properties of a proto_zq_gc_set_bet_noti.
     * @exports Iproto_zq_gc_set_bet_noti
     * @interface Iproto_zq_gc_set_bet_noti
     * @property {number} bet proto_zq_gc_set_bet_noti bet
     */

    /**
     * Constructs a new proto_zq_gc_set_bet_noti.
     * @exports proto_zq_gc_set_bet_noti
     * @classdesc Represents a proto_zq_gc_set_bet_noti.
     * @implements Iproto_zq_gc_set_bet_noti
     * @constructor
     * @param {Iproto_zq_gc_set_bet_noti=} [properties] Properties to set
     */
    function proto_zq_gc_set_bet_noti(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_zq_gc_set_bet_noti bet.
     * @member {number} bet
     * @memberof proto_zq_gc_set_bet_noti
     * @instance
     */
    proto_zq_gc_set_bet_noti.prototype.bet = 0;

    /**
     * Creates a new proto_zq_gc_set_bet_noti instance using the specified properties.
     * @function create
     * @memberof proto_zq_gc_set_bet_noti
     * @static
     * @param {Iproto_zq_gc_set_bet_noti=} [properties] Properties to set
     * @returns {proto_zq_gc_set_bet_noti} proto_zq_gc_set_bet_noti instance
     */
    proto_zq_gc_set_bet_noti.create = function create(properties) {
        return new proto_zq_gc_set_bet_noti(properties);
    };

    /**
     * Encodes the specified proto_zq_gc_set_bet_noti message. Does not implicitly {@link proto_zq_gc_set_bet_noti.verify|verify} messages.
     * @function encode
     * @memberof proto_zq_gc_set_bet_noti
     * @static
     * @param {Iproto_zq_gc_set_bet_noti} message proto_zq_gc_set_bet_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_set_bet_noti.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.bet);
        return writer;
    };

    /**
     * Encodes the specified proto_zq_gc_set_bet_noti message, length delimited. Does not implicitly {@link proto_zq_gc_set_bet_noti.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_zq_gc_set_bet_noti
     * @static
     * @param {Iproto_zq_gc_set_bet_noti} message proto_zq_gc_set_bet_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_set_bet_noti.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_zq_gc_set_bet_noti message from the specified reader or buffer.
     * @function decode
     * @memberof proto_zq_gc_set_bet_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_zq_gc_set_bet_noti} proto_zq_gc_set_bet_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_set_bet_noti.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_zq_gc_set_bet_noti();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bet = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        if (!message.hasOwnProperty("bet"))
            throw $util.ProtocolError("missing required 'bet'", { instance: message });
        return message;
    };

    /**
     * Decodes a proto_zq_gc_set_bet_noti message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_zq_gc_set_bet_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_zq_gc_set_bet_noti} proto_zq_gc_set_bet_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_set_bet_noti.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_zq_gc_set_bet_noti message.
     * @function verify
     * @memberof proto_zq_gc_set_bet_noti
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_zq_gc_set_bet_noti.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.bet))
            return "bet: integer expected";
        return null;
    };

    /**
     * Creates a proto_zq_gc_set_bet_noti message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_zq_gc_set_bet_noti
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_zq_gc_set_bet_noti} proto_zq_gc_set_bet_noti
     */
    proto_zq_gc_set_bet_noti.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_zq_gc_set_bet_noti)
            return object;
        var message = new $root.proto_zq_gc_set_bet_noti();
        if (object.bet != null)
            message.bet = object.bet | 0;
        return message;
    };

    /**
     * Creates a plain object from a proto_zq_gc_set_bet_noti message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_zq_gc_set_bet_noti
     * @static
     * @param {proto_zq_gc_set_bet_noti} message proto_zq_gc_set_bet_noti
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_zq_gc_set_bet_noti.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.bet = 0;
        if (message.bet != null && message.hasOwnProperty("bet"))
            object.bet = message.bet;
        return object;
    };

    /**
     * Converts this proto_zq_gc_set_bet_noti to JSON.
     * @function toJSON
     * @memberof proto_zq_gc_set_bet_noti
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_zq_gc_set_bet_noti.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_zq_gc_set_bet_noti;
})();

$root.proto_zq_kv_pair = (function() {

    /**
     * Properties of a proto_zq_kv_pair.
     * @exports Iproto_zq_kv_pair
     * @interface Iproto_zq_kv_pair
     * @property {string} key proto_zq_kv_pair key
     * @property {string} value proto_zq_kv_pair value
     */

    /**
     * Constructs a new proto_zq_kv_pair.
     * @exports proto_zq_kv_pair
     * @classdesc Represents a proto_zq_kv_pair.
     * @implements Iproto_zq_kv_pair
     * @constructor
     * @param {Iproto_zq_kv_pair=} [properties] Properties to set
     */
    function proto_zq_kv_pair(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_zq_kv_pair key.
     * @member {string} key
     * @memberof proto_zq_kv_pair
     * @instance
     */
    proto_zq_kv_pair.prototype.key = "";

    /**
     * proto_zq_kv_pair value.
     * @member {string} value
     * @memberof proto_zq_kv_pair
     * @instance
     */
    proto_zq_kv_pair.prototype.value = "";

    /**
     * Creates a new proto_zq_kv_pair instance using the specified properties.
     * @function create
     * @memberof proto_zq_kv_pair
     * @static
     * @param {Iproto_zq_kv_pair=} [properties] Properties to set
     * @returns {proto_zq_kv_pair} proto_zq_kv_pair instance
     */
    proto_zq_kv_pair.create = function create(properties) {
        return new proto_zq_kv_pair(properties);
    };

    /**
     * Encodes the specified proto_zq_kv_pair message. Does not implicitly {@link proto_zq_kv_pair.verify|verify} messages.
     * @function encode
     * @memberof proto_zq_kv_pair
     * @static
     * @param {Iproto_zq_kv_pair} message proto_zq_kv_pair message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_kv_pair.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
        return writer;
    };

    /**
     * Encodes the specified proto_zq_kv_pair message, length delimited. Does not implicitly {@link proto_zq_kv_pair.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_zq_kv_pair
     * @static
     * @param {Iproto_zq_kv_pair} message proto_zq_kv_pair message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_kv_pair.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_zq_kv_pair message from the specified reader or buffer.
     * @function decode
     * @memberof proto_zq_kv_pair
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_zq_kv_pair} proto_zq_kv_pair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_kv_pair.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_zq_kv_pair();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        if (!message.hasOwnProperty("key"))
            throw $util.ProtocolError("missing required 'key'", { instance: message });
        if (!message.hasOwnProperty("value"))
            throw $util.ProtocolError("missing required 'value'", { instance: message });
        return message;
    };

    /**
     * Decodes a proto_zq_kv_pair message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_zq_kv_pair
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_zq_kv_pair} proto_zq_kv_pair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_kv_pair.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_zq_kv_pair message.
     * @function verify
     * @memberof proto_zq_kv_pair
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_zq_kv_pair.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.key))
            return "key: string expected";
        if (!$util.isString(message.value))
            return "value: string expected";
        return null;
    };

    /**
     * Creates a proto_zq_kv_pair message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_zq_kv_pair
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_zq_kv_pair} proto_zq_kv_pair
     */
    proto_zq_kv_pair.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_zq_kv_pair)
            return object;
        var message = new $root.proto_zq_kv_pair();
        if (object.key != null)
            message.key = String(object.key);
        if (object.value != null)
            message.value = String(object.value);
        return message;
    };

    /**
     * Creates a plain object from a proto_zq_kv_pair message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_zq_kv_pair
     * @static
     * @param {proto_zq_kv_pair} message proto_zq_kv_pair
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_zq_kv_pair.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.key = "";
            object.value = "";
        }
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this proto_zq_kv_pair to JSON.
     * @function toJSON
     * @memberof proto_zq_kv_pair
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_zq_kv_pair.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_zq_kv_pair;
})();

$root.proto_zq_gc_ready_ack = (function() {

    /**
     * Properties of a proto_zq_gc_ready_ack.
     * @exports Iproto_zq_gc_ready_ack
     * @interface Iproto_zq_gc_ready_ack
     * @property {number} ret proto_zq_gc_ready_ack ret
     */

    /**
     * Constructs a new proto_zq_gc_ready_ack.
     * @exports proto_zq_gc_ready_ack
     * @classdesc Represents a proto_zq_gc_ready_ack.
     * @implements Iproto_zq_gc_ready_ack
     * @constructor
     * @param {Iproto_zq_gc_ready_ack=} [properties] Properties to set
     */
    function proto_zq_gc_ready_ack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_zq_gc_ready_ack ret.
     * @member {number} ret
     * @memberof proto_zq_gc_ready_ack
     * @instance
     */
    proto_zq_gc_ready_ack.prototype.ret = 0;

    /**
     * Creates a new proto_zq_gc_ready_ack instance using the specified properties.
     * @function create
     * @memberof proto_zq_gc_ready_ack
     * @static
     * @param {Iproto_zq_gc_ready_ack=} [properties] Properties to set
     * @returns {proto_zq_gc_ready_ack} proto_zq_gc_ready_ack instance
     */
    proto_zq_gc_ready_ack.create = function create(properties) {
        return new proto_zq_gc_ready_ack(properties);
    };

    /**
     * Encodes the specified proto_zq_gc_ready_ack message. Does not implicitly {@link proto_zq_gc_ready_ack.verify|verify} messages.
     * @function encode
     * @memberof proto_zq_gc_ready_ack
     * @static
     * @param {Iproto_zq_gc_ready_ack} message proto_zq_gc_ready_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_ready_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
        return writer;
    };

    /**
     * Encodes the specified proto_zq_gc_ready_ack message, length delimited. Does not implicitly {@link proto_zq_gc_ready_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_zq_gc_ready_ack
     * @static
     * @param {Iproto_zq_gc_ready_ack} message proto_zq_gc_ready_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_zq_gc_ready_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_zq_gc_ready_ack message from the specified reader or buffer.
     * @function decode
     * @memberof proto_zq_gc_ready_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_zq_gc_ready_ack} proto_zq_gc_ready_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_ready_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_zq_gc_ready_ack();
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
     * Decodes a proto_zq_gc_ready_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_zq_gc_ready_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_zq_gc_ready_ack} proto_zq_gc_ready_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_zq_gc_ready_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_zq_gc_ready_ack message.
     * @function verify
     * @memberof proto_zq_gc_ready_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_zq_gc_ready_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.ret))
            return "ret: integer expected";
        return null;
    };

    /**
     * Creates a proto_zq_gc_ready_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_zq_gc_ready_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_zq_gc_ready_ack} proto_zq_gc_ready_ack
     */
    proto_zq_gc_ready_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_zq_gc_ready_ack)
            return object;
        var message = new $root.proto_zq_gc_ready_ack();
        if (object.ret != null)
            message.ret = object.ret | 0;
        return message;
    };

    /**
     * Creates a plain object from a proto_zq_gc_ready_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_zq_gc_ready_ack
     * @static
     * @param {proto_zq_gc_ready_ack} message proto_zq_gc_ready_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_zq_gc_ready_ack.toObject = function toObject(message, options) {
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
     * Converts this proto_zq_gc_ready_ack to JSON.
     * @function toJSON
     * @memberof proto_zq_gc_ready_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_zq_gc_ready_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_zq_gc_ready_ack;
})();

$root.proto_pouch_ball_info = (function() {

    /**
     * Properties of a proto_pouch_ball_info.
     * @exports Iproto_pouch_ball_info
     * @interface Iproto_pouch_ball_info
     * @property {number} ball proto_pouch_ball_info ball
     * @property {number} pouchIndex proto_pouch_ball_info pouchIndex
     * @property {number} score proto_pouch_ball_info score
     */

    /**
     * Constructs a new proto_pouch_ball_info.
     * @exports proto_pouch_ball_info
     * @classdesc Represents a proto_pouch_ball_info.
     * @implements Iproto_pouch_ball_info
     * @constructor
     * @param {Iproto_pouch_ball_info=} [properties] Properties to set
     */
    function proto_pouch_ball_info(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_pouch_ball_info ball.
     * @member {number} ball
     * @memberof proto_pouch_ball_info
     * @instance
     */
    proto_pouch_ball_info.prototype.ball = 0;

    /**
     * proto_pouch_ball_info pouchIndex.
     * @member {number} pouchIndex
     * @memberof proto_pouch_ball_info
     * @instance
     */
    proto_pouch_ball_info.prototype.pouchIndex = 0;

    /**
     * proto_pouch_ball_info score.
     * @member {number} score
     * @memberof proto_pouch_ball_info
     * @instance
     */
    proto_pouch_ball_info.prototype.score = 0;

    /**
     * Creates a new proto_pouch_ball_info instance using the specified properties.
     * @function create
     * @memberof proto_pouch_ball_info
     * @static
     * @param {Iproto_pouch_ball_info=} [properties] Properties to set
     * @returns {proto_pouch_ball_info} proto_pouch_ball_info instance
     */
    proto_pouch_ball_info.create = function create(properties) {
        return new proto_pouch_ball_info(properties);
    };

    /**
     * Encodes the specified proto_pouch_ball_info message. Does not implicitly {@link proto_pouch_ball_info.verify|verify} messages.
     * @function encode
     * @memberof proto_pouch_ball_info
     * @static
     * @param {Iproto_pouch_ball_info} message proto_pouch_ball_info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_pouch_ball_info.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ball);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pouchIndex);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.score);
        return writer;
    };

    /**
     * Encodes the specified proto_pouch_ball_info message, length delimited. Does not implicitly {@link proto_pouch_ball_info.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_pouch_ball_info
     * @static
     * @param {Iproto_pouch_ball_info} message proto_pouch_ball_info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_pouch_ball_info.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_pouch_ball_info message from the specified reader or buffer.
     * @function decode
     * @memberof proto_pouch_ball_info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_pouch_ball_info} proto_pouch_ball_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_pouch_ball_info.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_pouch_ball_info();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ball = reader.int32();
                    break;
                case 2:
                    message.pouchIndex = reader.int32();
                    break;
                case 3:
                    message.score = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        if (!message.hasOwnProperty("ball"))
            throw $util.ProtocolError("missing required 'ball'", { instance: message });
        if (!message.hasOwnProperty("pouchIndex"))
            throw $util.ProtocolError("missing required 'pouchIndex'", { instance: message });
        if (!message.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: message });
        return message;
    };

    /**
     * Decodes a proto_pouch_ball_info message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_pouch_ball_info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_pouch_ball_info} proto_pouch_ball_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_pouch_ball_info.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_pouch_ball_info message.
     * @function verify
     * @memberof proto_pouch_ball_info
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_pouch_ball_info.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.ball))
            return "ball: integer expected";
        if (!$util.isInteger(message.pouchIndex))
            return "pouchIndex: integer expected";
        if (!$util.isInteger(message.score))
            return "score: integer expected";
        return null;
    };

    /**
     * Creates a proto_pouch_ball_info message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_pouch_ball_info
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_pouch_ball_info} proto_pouch_ball_info
     */
    proto_pouch_ball_info.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_pouch_ball_info)
            return object;
        var message = new $root.proto_pouch_ball_info();
        if (object.ball != null)
            message.ball = object.ball | 0;
        if (object.pouchIndex != null)
            message.pouchIndex = object.pouchIndex | 0;
        if (object.score != null)
            message.score = object.score | 0;
        return message;
    };

    /**
     * Creates a plain object from a proto_pouch_ball_info message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_pouch_ball_info
     * @static
     * @param {proto_pouch_ball_info} message proto_pouch_ball_info
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_pouch_ball_info.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ball = 0;
            object.pouchIndex = 0;
            object.score = 0;
        }
        if (message.ball != null && message.hasOwnProperty("ball"))
            object.ball = message.ball;
        if (message.pouchIndex != null && message.hasOwnProperty("pouchIndex"))
            object.pouchIndex = message.pouchIndex;
        if (message.score != null && message.hasOwnProperty("score"))
            object.score = message.score;
        return object;
    };

    /**
     * Converts this proto_pouch_ball_info to JSON.
     * @function toJSON
     * @memberof proto_pouch_ball_info
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_pouch_ball_info.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_pouch_ball_info;
})();

module.exports = $root;
