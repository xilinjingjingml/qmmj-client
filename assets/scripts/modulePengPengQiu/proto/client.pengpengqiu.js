/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto_ppq_cg_set_bet_req = (function() {

    /**
     * Properties of a proto_ppq_cg_set_bet_req.
     * @exports Iproto_ppq_cg_set_bet_req
     * @interface Iproto_ppq_cg_set_bet_req
     * @property {number} bet proto_ppq_cg_set_bet_req bet
     * @property {number} angle proto_ppq_cg_set_bet_req angle
     */

    /**
     * Constructs a new proto_ppq_cg_set_bet_req.
     * @exports proto_ppq_cg_set_bet_req
     * @classdesc Represents a proto_ppq_cg_set_bet_req.
     * @implements Iproto_ppq_cg_set_bet_req
     * @constructor
     * @param {Iproto_ppq_cg_set_bet_req=} [properties] Properties to set
     */
    function proto_ppq_cg_set_bet_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_ppq_cg_set_bet_req bet.
     * @member {number} bet
     * @memberof proto_ppq_cg_set_bet_req
     * @instance
     */
    proto_ppq_cg_set_bet_req.prototype.bet = 0;

    /**
     * proto_ppq_cg_set_bet_req angle.
     * @member {number} angle
     * @memberof proto_ppq_cg_set_bet_req
     * @instance
     */
    proto_ppq_cg_set_bet_req.prototype.angle = 0;

    /**
     * Creates a new proto_ppq_cg_set_bet_req instance using the specified properties.
     * @function create
     * @memberof proto_ppq_cg_set_bet_req
     * @static
     * @param {Iproto_ppq_cg_set_bet_req=} [properties] Properties to set
     * @returns {proto_ppq_cg_set_bet_req} proto_ppq_cg_set_bet_req instance
     */
    proto_ppq_cg_set_bet_req.create = function create(properties) {
        return new proto_ppq_cg_set_bet_req(properties);
    };

    /**
     * Encodes the specified proto_ppq_cg_set_bet_req message. Does not implicitly {@link proto_ppq_cg_set_bet_req.verify|verify} messages.
     * @function encode
     * @memberof proto_ppq_cg_set_bet_req
     * @static
     * @param {Iproto_ppq_cg_set_bet_req} message proto_ppq_cg_set_bet_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_ppq_cg_set_bet_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.bet);
        writer.uint32(/* id 2, wireType 5 =*/21).float(message.angle);
        return writer;
    };

    /**
     * Encodes the specified proto_ppq_cg_set_bet_req message, length delimited. Does not implicitly {@link proto_ppq_cg_set_bet_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_ppq_cg_set_bet_req
     * @static
     * @param {Iproto_ppq_cg_set_bet_req} message proto_ppq_cg_set_bet_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_ppq_cg_set_bet_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_ppq_cg_set_bet_req message from the specified reader or buffer.
     * @function decode
     * @memberof proto_ppq_cg_set_bet_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_ppq_cg_set_bet_req} proto_ppq_cg_set_bet_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_ppq_cg_set_bet_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_ppq_cg_set_bet_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bet = reader.int32();
                    break;
                case 2:
                    message.angle = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        if (!message.hasOwnProperty("bet"))
            throw $util.ProtocolError("missing required 'bet'", { instance: message });
        if (!message.hasOwnProperty("angle"))
            throw $util.ProtocolError("missing required 'angle'", { instance: message });
        return message;
    };

    /**
     * Decodes a proto_ppq_cg_set_bet_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_ppq_cg_set_bet_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_ppq_cg_set_bet_req} proto_ppq_cg_set_bet_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_ppq_cg_set_bet_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_ppq_cg_set_bet_req message.
     * @function verify
     * @memberof proto_ppq_cg_set_bet_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_ppq_cg_set_bet_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.bet))
            return "bet: integer expected";
        if (typeof message.angle !== "number")
            return "angle: number expected";
        return null;
    };

    /**
     * Creates a proto_ppq_cg_set_bet_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_ppq_cg_set_bet_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_ppq_cg_set_bet_req} proto_ppq_cg_set_bet_req
     */
    proto_ppq_cg_set_bet_req.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_ppq_cg_set_bet_req)
            return object;
        var message = new $root.proto_ppq_cg_set_bet_req();
        if (object.bet != null)
            message.bet = object.bet | 0;
        if (object.angle != null)
            message.angle = Number(object.angle);
        return message;
    };

    /**
     * Creates a plain object from a proto_ppq_cg_set_bet_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_ppq_cg_set_bet_req
     * @static
     * @param {proto_ppq_cg_set_bet_req} message proto_ppq_cg_set_bet_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_ppq_cg_set_bet_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.bet = 0;
            object.angle = 0;
        }
        if (message.bet != null && message.hasOwnProperty("bet"))
            object.bet = message.bet;
        if (message.angle != null && message.hasOwnProperty("angle"))
            object.angle = options.json && !isFinite(message.angle) ? String(message.angle) : message.angle;
        return object;
    };

    /**
     * Converts this proto_ppq_cg_set_bet_req to JSON.
     * @function toJSON
     * @memberof proto_ppq_cg_set_bet_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_ppq_cg_set_bet_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_ppq_cg_set_bet_req;
})();

$root.proto_ppq_gc_set_bet_ack = (function() {

    /**
     * Properties of a proto_ppq_gc_set_bet_ack.
     * @exports Iproto_ppq_gc_set_bet_ack
     * @interface Iproto_ppq_gc_set_bet_ack
     * @property {number} ret proto_ppq_gc_set_bet_ack ret
     * @property {string} msg proto_ppq_gc_set_bet_ack msg
     */

    /**
     * Constructs a new proto_ppq_gc_set_bet_ack.
     * @exports proto_ppq_gc_set_bet_ack
     * @classdesc Represents a proto_ppq_gc_set_bet_ack.
     * @implements Iproto_ppq_gc_set_bet_ack
     * @constructor
     * @param {Iproto_ppq_gc_set_bet_ack=} [properties] Properties to set
     */
    function proto_ppq_gc_set_bet_ack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_ppq_gc_set_bet_ack ret.
     * @member {number} ret
     * @memberof proto_ppq_gc_set_bet_ack
     * @instance
     */
    proto_ppq_gc_set_bet_ack.prototype.ret = 0;

    /**
     * proto_ppq_gc_set_bet_ack msg.
     * @member {string} msg
     * @memberof proto_ppq_gc_set_bet_ack
     * @instance
     */
    proto_ppq_gc_set_bet_ack.prototype.msg = "";

    /**
     * Creates a new proto_ppq_gc_set_bet_ack instance using the specified properties.
     * @function create
     * @memberof proto_ppq_gc_set_bet_ack
     * @static
     * @param {Iproto_ppq_gc_set_bet_ack=} [properties] Properties to set
     * @returns {proto_ppq_gc_set_bet_ack} proto_ppq_gc_set_bet_ack instance
     */
    proto_ppq_gc_set_bet_ack.create = function create(properties) {
        return new proto_ppq_gc_set_bet_ack(properties);
    };

    /**
     * Encodes the specified proto_ppq_gc_set_bet_ack message. Does not implicitly {@link proto_ppq_gc_set_bet_ack.verify|verify} messages.
     * @function encode
     * @memberof proto_ppq_gc_set_bet_ack
     * @static
     * @param {Iproto_ppq_gc_set_bet_ack} message proto_ppq_gc_set_bet_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_ppq_gc_set_bet_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
        return writer;
    };

    /**
     * Encodes the specified proto_ppq_gc_set_bet_ack message, length delimited. Does not implicitly {@link proto_ppq_gc_set_bet_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_ppq_gc_set_bet_ack
     * @static
     * @param {Iproto_ppq_gc_set_bet_ack} message proto_ppq_gc_set_bet_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_ppq_gc_set_bet_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_ppq_gc_set_bet_ack message from the specified reader or buffer.
     * @function decode
     * @memberof proto_ppq_gc_set_bet_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_ppq_gc_set_bet_ack} proto_ppq_gc_set_bet_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_ppq_gc_set_bet_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_ppq_gc_set_bet_ack();
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
     * Decodes a proto_ppq_gc_set_bet_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_ppq_gc_set_bet_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_ppq_gc_set_bet_ack} proto_ppq_gc_set_bet_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_ppq_gc_set_bet_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_ppq_gc_set_bet_ack message.
     * @function verify
     * @memberof proto_ppq_gc_set_bet_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_ppq_gc_set_bet_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.ret))
            return "ret: integer expected";
        if (!$util.isString(message.msg))
            return "msg: string expected";
        return null;
    };

    /**
     * Creates a proto_ppq_gc_set_bet_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_ppq_gc_set_bet_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_ppq_gc_set_bet_ack} proto_ppq_gc_set_bet_ack
     */
    proto_ppq_gc_set_bet_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_ppq_gc_set_bet_ack)
            return object;
        var message = new $root.proto_ppq_gc_set_bet_ack();
        if (object.ret != null)
            message.ret = object.ret | 0;
        if (object.msg != null)
            message.msg = String(object.msg);
        return message;
    };

    /**
     * Creates a plain object from a proto_ppq_gc_set_bet_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_ppq_gc_set_bet_ack
     * @static
     * @param {proto_ppq_gc_set_bet_ack} message proto_ppq_gc_set_bet_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_ppq_gc_set_bet_ack.toObject = function toObject(message, options) {
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
     * Converts this proto_ppq_gc_set_bet_ack to JSON.
     * @function toJSON
     * @memberof proto_ppq_gc_set_bet_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_ppq_gc_set_bet_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_ppq_gc_set_bet_ack;
})();

$root.proto_ppq_gc_game_end_noti = (function() {

    /**
     * Properties of a proto_ppq_gc_game_end_noti.
     * @exports Iproto_ppq_gc_game_end_noti
     * @interface Iproto_ppq_gc_game_end_noti
     * @property {number} ret proto_ppq_gc_game_end_noti ret
     * @property {number|Long} score proto_ppq_gc_game_end_noti score
     * @property {number} angle proto_ppq_gc_game_end_noti angle
     * @property {number} speed proto_ppq_gc_game_end_noti speed
     * @property {number} multi proto_ppq_gc_game_end_noti multi
     * @property {string} p proto_ppq_gc_game_end_noti p
     */

    /**
     * Constructs a new proto_ppq_gc_game_end_noti.
     * @exports proto_ppq_gc_game_end_noti
     * @classdesc Represents a proto_ppq_gc_game_end_noti.
     * @implements Iproto_ppq_gc_game_end_noti
     * @constructor
     * @param {Iproto_ppq_gc_game_end_noti=} [properties] Properties to set
     */
    function proto_ppq_gc_game_end_noti(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_ppq_gc_game_end_noti ret.
     * @member {number} ret
     * @memberof proto_ppq_gc_game_end_noti
     * @instance
     */
    proto_ppq_gc_game_end_noti.prototype.ret = 0;

    /**
     * proto_ppq_gc_game_end_noti score.
     * @member {number|Long} score
     * @memberof proto_ppq_gc_game_end_noti
     * @instance
     */
    proto_ppq_gc_game_end_noti.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * proto_ppq_gc_game_end_noti angle.
     * @member {number} angle
     * @memberof proto_ppq_gc_game_end_noti
     * @instance
     */
    proto_ppq_gc_game_end_noti.prototype.angle = 0;

    /**
     * proto_ppq_gc_game_end_noti speed.
     * @member {number} speed
     * @memberof proto_ppq_gc_game_end_noti
     * @instance
     */
    proto_ppq_gc_game_end_noti.prototype.speed = 0;

    /**
     * proto_ppq_gc_game_end_noti multi.
     * @member {number} multi
     * @memberof proto_ppq_gc_game_end_noti
     * @instance
     */
    proto_ppq_gc_game_end_noti.prototype.multi = 0;

    /**
     * proto_ppq_gc_game_end_noti p.
     * @member {string} p
     * @memberof proto_ppq_gc_game_end_noti
     * @instance
     */
    proto_ppq_gc_game_end_noti.prototype.p = "";

    /**
     * Creates a new proto_ppq_gc_game_end_noti instance using the specified properties.
     * @function create
     * @memberof proto_ppq_gc_game_end_noti
     * @static
     * @param {Iproto_ppq_gc_game_end_noti=} [properties] Properties to set
     * @returns {proto_ppq_gc_game_end_noti} proto_ppq_gc_game_end_noti instance
     */
    proto_ppq_gc_game_end_noti.create = function create(properties) {
        return new proto_ppq_gc_game_end_noti(properties);
    };

    /**
     * Encodes the specified proto_ppq_gc_game_end_noti message. Does not implicitly {@link proto_ppq_gc_game_end_noti.verify|verify} messages.
     * @function encode
     * @memberof proto_ppq_gc_game_end_noti
     * @static
     * @param {Iproto_ppq_gc_game_end_noti} message proto_ppq_gc_game_end_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_ppq_gc_game_end_noti.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.score);
        writer.uint32(/* id 3, wireType 5 =*/29).float(message.angle);
        writer.uint32(/* id 4, wireType 5 =*/37).float(message.speed);
        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.multi);
        writer.uint32(/* id 6, wireType 2 =*/50).string(message.p);
        return writer;
    };

    /**
     * Encodes the specified proto_ppq_gc_game_end_noti message, length delimited. Does not implicitly {@link proto_ppq_gc_game_end_noti.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_ppq_gc_game_end_noti
     * @static
     * @param {Iproto_ppq_gc_game_end_noti} message proto_ppq_gc_game_end_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_ppq_gc_game_end_noti.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_ppq_gc_game_end_noti message from the specified reader or buffer.
     * @function decode
     * @memberof proto_ppq_gc_game_end_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_ppq_gc_game_end_noti} proto_ppq_gc_game_end_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_ppq_gc_game_end_noti.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_ppq_gc_game_end_noti();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ret = reader.int32();
                    break;
                case 2:
                    message.score = reader.int64();
                    break;
                case 3:
                    message.angle = reader.float();
                    break;
                case 4:
                    message.speed = reader.float();
                    break;
                case 5:
                    message.multi = reader.int32();
                    break;
                case 6:
                    message.p = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        if (!message.hasOwnProperty("ret"))
            throw $util.ProtocolError("missing required 'ret'", { instance: message });
        if (!message.hasOwnProperty("score"))
            throw $util.ProtocolError("missing required 'score'", { instance: message });
        if (!message.hasOwnProperty("angle"))
            throw $util.ProtocolError("missing required 'angle'", { instance: message });
        if (!message.hasOwnProperty("speed"))
            throw $util.ProtocolError("missing required 'speed'", { instance: message });
        if (!message.hasOwnProperty("multi"))
            throw $util.ProtocolError("missing required 'multi'", { instance: message });
        if (!message.hasOwnProperty("p"))
            throw $util.ProtocolError("missing required 'p'", { instance: message });
        return message;
    };

    /**
     * Decodes a proto_ppq_gc_game_end_noti message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_ppq_gc_game_end_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_ppq_gc_game_end_noti} proto_ppq_gc_game_end_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_ppq_gc_game_end_noti.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_ppq_gc_game_end_noti message.
     * @function verify
     * @memberof proto_ppq_gc_game_end_noti
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_ppq_gc_game_end_noti.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.ret))
            return "ret: integer expected";
        if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
            return "score: integer|Long expected";
        if (typeof message.angle !== "number")
            return "angle: number expected";
        if (typeof message.speed !== "number")
            return "speed: number expected";
        if (!$util.isInteger(message.multi))
            return "multi: integer expected";
        if (!$util.isString(message.p))
            return "p: string expected";
        return null;
    };

    /**
     * Creates a proto_ppq_gc_game_end_noti message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_ppq_gc_game_end_noti
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_ppq_gc_game_end_noti} proto_ppq_gc_game_end_noti
     */
    proto_ppq_gc_game_end_noti.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_ppq_gc_game_end_noti)
            return object;
        var message = new $root.proto_ppq_gc_game_end_noti();
        if (object.ret != null)
            message.ret = object.ret | 0;
        if (object.score != null)
            if ($util.Long)
                (message.score = $util.Long.fromValue(object.score)).unsigned = false;
            else if (typeof object.score === "string")
                message.score = parseInt(object.score, 10);
            else if (typeof object.score === "number")
                message.score = object.score;
            else if (typeof object.score === "object")
                message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
        if (object.angle != null)
            message.angle = Number(object.angle);
        if (object.speed != null)
            message.speed = Number(object.speed);
        if (object.multi != null)
            message.multi = object.multi | 0;
        if (object.p != null)
            message.p = String(object.p);
        return message;
    };

    /**
     * Creates a plain object from a proto_ppq_gc_game_end_noti message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_ppq_gc_game_end_noti
     * @static
     * @param {proto_ppq_gc_game_end_noti} message proto_ppq_gc_game_end_noti
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_ppq_gc_game_end_noti.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ret = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.score = options.longs === String ? "0" : 0;
            object.angle = 0;
            object.speed = 0;
            object.multi = 0;
            object.p = "";
        }
        if (message.ret != null && message.hasOwnProperty("ret"))
            object.ret = message.ret;
        if (message.score != null && message.hasOwnProperty("score"))
            if (typeof message.score === "number")
                object.score = options.longs === String ? String(message.score) : message.score;
            else
                object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
        if (message.angle != null && message.hasOwnProperty("angle"))
            object.angle = options.json && !isFinite(message.angle) ? String(message.angle) : message.angle;
        if (message.speed != null && message.hasOwnProperty("speed"))
            object.speed = options.json && !isFinite(message.speed) ? String(message.speed) : message.speed;
        if (message.multi != null && message.hasOwnProperty("multi"))
            object.multi = message.multi;
        if (message.p != null && message.hasOwnProperty("p"))
            object.p = message.p;
        return object;
    };

    /**
     * Converts this proto_ppq_gc_game_end_noti to JSON.
     * @function toJSON
     * @memberof proto_ppq_gc_game_end_noti
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_ppq_gc_game_end_noti.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_ppq_gc_game_end_noti;
})();

$root.proto_ppq_gc_table_info_noti = (function() {

    /**
     * Properties of a proto_ppq_gc_table_info_noti.
     * @exports Iproto_ppq_gc_table_info_noti
     * @interface Iproto_ppq_gc_table_info_noti
     * @property {Array.<Iproto_ppq_kv_pair>|null} [infoList] proto_ppq_gc_table_info_noti infoList
     */

    /**
     * Constructs a new proto_ppq_gc_table_info_noti.
     * @exports proto_ppq_gc_table_info_noti
     * @classdesc Represents a proto_ppq_gc_table_info_noti.
     * @implements Iproto_ppq_gc_table_info_noti
     * @constructor
     * @param {Iproto_ppq_gc_table_info_noti=} [properties] Properties to set
     */
    function proto_ppq_gc_table_info_noti(properties) {
        this.infoList = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_ppq_gc_table_info_noti infoList.
     * @member {Array.<Iproto_ppq_kv_pair>} infoList
     * @memberof proto_ppq_gc_table_info_noti
     * @instance
     */
    proto_ppq_gc_table_info_noti.prototype.infoList = $util.emptyArray;

    /**
     * Creates a new proto_ppq_gc_table_info_noti instance using the specified properties.
     * @function create
     * @memberof proto_ppq_gc_table_info_noti
     * @static
     * @param {Iproto_ppq_gc_table_info_noti=} [properties] Properties to set
     * @returns {proto_ppq_gc_table_info_noti} proto_ppq_gc_table_info_noti instance
     */
    proto_ppq_gc_table_info_noti.create = function create(properties) {
        return new proto_ppq_gc_table_info_noti(properties);
    };

    /**
     * Encodes the specified proto_ppq_gc_table_info_noti message. Does not implicitly {@link proto_ppq_gc_table_info_noti.verify|verify} messages.
     * @function encode
     * @memberof proto_ppq_gc_table_info_noti
     * @static
     * @param {Iproto_ppq_gc_table_info_noti} message proto_ppq_gc_table_info_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_ppq_gc_table_info_noti.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.infoList != null && message.infoList.length)
            for (var i = 0; i < message.infoList.length; ++i)
                $root.proto_ppq_kv_pair.encode(message.infoList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified proto_ppq_gc_table_info_noti message, length delimited. Does not implicitly {@link proto_ppq_gc_table_info_noti.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_ppq_gc_table_info_noti
     * @static
     * @param {Iproto_ppq_gc_table_info_noti} message proto_ppq_gc_table_info_noti message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_ppq_gc_table_info_noti.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_ppq_gc_table_info_noti message from the specified reader or buffer.
     * @function decode
     * @memberof proto_ppq_gc_table_info_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_ppq_gc_table_info_noti} proto_ppq_gc_table_info_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_ppq_gc_table_info_noti.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_ppq_gc_table_info_noti();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (!(message.infoList && message.infoList.length))
                        message.infoList = [];
                    message.infoList.push($root.proto_ppq_kv_pair.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };

    /**
     * Decodes a proto_ppq_gc_table_info_noti message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_ppq_gc_table_info_noti
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_ppq_gc_table_info_noti} proto_ppq_gc_table_info_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_ppq_gc_table_info_noti.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_ppq_gc_table_info_noti message.
     * @function verify
     * @memberof proto_ppq_gc_table_info_noti
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_ppq_gc_table_info_noti.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.infoList != null && message.hasOwnProperty("infoList")) {
            if (!Array.isArray(message.infoList))
                return "infoList: array expected";
            for (var i = 0; i < message.infoList.length; ++i) {
                var error = $root.proto_ppq_kv_pair.verify(message.infoList[i]);
                if (error)
                    return "infoList." + error;
            }
        }
        return null;
    };

    /**
     * Creates a proto_ppq_gc_table_info_noti message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_ppq_gc_table_info_noti
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_ppq_gc_table_info_noti} proto_ppq_gc_table_info_noti
     */
    proto_ppq_gc_table_info_noti.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_ppq_gc_table_info_noti)
            return object;
        var message = new $root.proto_ppq_gc_table_info_noti();
        if (object.infoList) {
            if (!Array.isArray(object.infoList))
                throw TypeError(".proto_ppq_gc_table_info_noti.infoList: array expected");
            message.infoList = [];
            for (var i = 0; i < object.infoList.length; ++i) {
                if (typeof object.infoList[i] !== "object")
                    throw TypeError(".proto_ppq_gc_table_info_noti.infoList: object expected");
                message.infoList[i] = $root.proto_ppq_kv_pair.fromObject(object.infoList[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a proto_ppq_gc_table_info_noti message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_ppq_gc_table_info_noti
     * @static
     * @param {proto_ppq_gc_table_info_noti} message proto_ppq_gc_table_info_noti
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_ppq_gc_table_info_noti.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.infoList = [];
        if (message.infoList && message.infoList.length) {
            object.infoList = [];
            for (var j = 0; j < message.infoList.length; ++j)
                object.infoList[j] = $root.proto_ppq_kv_pair.toObject(message.infoList[j], options);
        }
        return object;
    };

    /**
     * Converts this proto_ppq_gc_table_info_noti to JSON.
     * @function toJSON
     * @memberof proto_ppq_gc_table_info_noti
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_ppq_gc_table_info_noti.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_ppq_gc_table_info_noti;
})();

$root.proto_ppq_kv_pair = (function() {

    /**
     * Properties of a proto_ppq_kv_pair.
     * @exports Iproto_ppq_kv_pair
     * @interface Iproto_ppq_kv_pair
     * @property {string} key proto_ppq_kv_pair key
     * @property {string} value proto_ppq_kv_pair value
     */

    /**
     * Constructs a new proto_ppq_kv_pair.
     * @exports proto_ppq_kv_pair
     * @classdesc Represents a proto_ppq_kv_pair.
     * @implements Iproto_ppq_kv_pair
     * @constructor
     * @param {Iproto_ppq_kv_pair=} [properties] Properties to set
     */
    function proto_ppq_kv_pair(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_ppq_kv_pair key.
     * @member {string} key
     * @memberof proto_ppq_kv_pair
     * @instance
     */
    proto_ppq_kv_pair.prototype.key = "";

    /**
     * proto_ppq_kv_pair value.
     * @member {string} value
     * @memberof proto_ppq_kv_pair
     * @instance
     */
    proto_ppq_kv_pair.prototype.value = "";

    /**
     * Creates a new proto_ppq_kv_pair instance using the specified properties.
     * @function create
     * @memberof proto_ppq_kv_pair
     * @static
     * @param {Iproto_ppq_kv_pair=} [properties] Properties to set
     * @returns {proto_ppq_kv_pair} proto_ppq_kv_pair instance
     */
    proto_ppq_kv_pair.create = function create(properties) {
        return new proto_ppq_kv_pair(properties);
    };

    /**
     * Encodes the specified proto_ppq_kv_pair message. Does not implicitly {@link proto_ppq_kv_pair.verify|verify} messages.
     * @function encode
     * @memberof proto_ppq_kv_pair
     * @static
     * @param {Iproto_ppq_kv_pair} message proto_ppq_kv_pair message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_ppq_kv_pair.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
        return writer;
    };

    /**
     * Encodes the specified proto_ppq_kv_pair message, length delimited. Does not implicitly {@link proto_ppq_kv_pair.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_ppq_kv_pair
     * @static
     * @param {Iproto_ppq_kv_pair} message proto_ppq_kv_pair message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_ppq_kv_pair.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_ppq_kv_pair message from the specified reader or buffer.
     * @function decode
     * @memberof proto_ppq_kv_pair
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_ppq_kv_pair} proto_ppq_kv_pair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_ppq_kv_pair.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_ppq_kv_pair();
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
     * Decodes a proto_ppq_kv_pair message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_ppq_kv_pair
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_ppq_kv_pair} proto_ppq_kv_pair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_ppq_kv_pair.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_ppq_kv_pair message.
     * @function verify
     * @memberof proto_ppq_kv_pair
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_ppq_kv_pair.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.key))
            return "key: string expected";
        if (!$util.isString(message.value))
            return "value: string expected";
        return null;
    };

    /**
     * Creates a proto_ppq_kv_pair message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_ppq_kv_pair
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_ppq_kv_pair} proto_ppq_kv_pair
     */
    proto_ppq_kv_pair.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_ppq_kv_pair)
            return object;
        var message = new $root.proto_ppq_kv_pair();
        if (object.key != null)
            message.key = String(object.key);
        if (object.value != null)
            message.value = String(object.value);
        return message;
    };

    /**
     * Creates a plain object from a proto_ppq_kv_pair message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_ppq_kv_pair
     * @static
     * @param {proto_ppq_kv_pair} message proto_ppq_kv_pair
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_ppq_kv_pair.toObject = function toObject(message, options) {
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
     * Converts this proto_ppq_kv_pair to JSON.
     * @function toJSON
     * @memberof proto_ppq_kv_pair
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_ppq_kv_pair.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_ppq_kv_pair;
})();

module.exports = $root;
