/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["xxl"] || ($protobuf.roots["xxl"] = {});

$root.proto_gc_start_bet_ack = (function() {

    /**
     * Properties of a proto_gc_start_bet_ack.
     * @exports Iproto_gc_start_bet_ack
     * @interface Iproto_gc_start_bet_ack
     * @property {number} nAutoType proto_gc_start_bet_ack nAutoType
     * @property {number|Long} nAwardMoney proto_gc_start_bet_ack nAwardMoney
     * @property {Array.<Iproto_VecAnimalTile>|null} [mBoard] proto_gc_start_bet_ack mBoard
     * @property {Array.<Iproto_MatAnimalTile>|null} [mMatchedTiles] proto_gc_start_bet_ack mMatchedTiles
     */

    /**
     * Constructs a new proto_gc_start_bet_ack.
     * @exports proto_gc_start_bet_ack
     * @classdesc Represents a proto_gc_start_bet_ack.
     * @implements Iproto_gc_start_bet_ack
     * @constructor
     * @param {Iproto_gc_start_bet_ack=} [properties] Properties to set
     */
    function proto_gc_start_bet_ack(properties) {
        this.mBoard = [];
        this.mMatchedTiles = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_gc_start_bet_ack nAutoType.
     * @member {number} nAutoType
     * @memberof proto_gc_start_bet_ack
     * @instance
     */
    proto_gc_start_bet_ack.prototype.nAutoType = 0;

    /**
     * proto_gc_start_bet_ack nAwardMoney.
     * @member {number|Long} nAwardMoney
     * @memberof proto_gc_start_bet_ack
     * @instance
     */
    proto_gc_start_bet_ack.prototype.nAwardMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * proto_gc_start_bet_ack mBoard.
     * @member {Array.<Iproto_VecAnimalTile>} mBoard
     * @memberof proto_gc_start_bet_ack
     * @instance
     */
    proto_gc_start_bet_ack.prototype.mBoard = $util.emptyArray;

    /**
     * proto_gc_start_bet_ack mMatchedTiles.
     * @member {Array.<Iproto_MatAnimalTile>} mMatchedTiles
     * @memberof proto_gc_start_bet_ack
     * @instance
     */
    proto_gc_start_bet_ack.prototype.mMatchedTiles = $util.emptyArray;

    /**
     * Creates a new proto_gc_start_bet_ack instance using the specified properties.
     * @function create
     * @memberof proto_gc_start_bet_ack
     * @static
     * @param {Iproto_gc_start_bet_ack=} [properties] Properties to set
     * @returns {proto_gc_start_bet_ack} proto_gc_start_bet_ack instance
     */
    proto_gc_start_bet_ack.create = function create(properties) {
        return new proto_gc_start_bet_ack(properties);
    };

    /**
     * Encodes the specified proto_gc_start_bet_ack message. Does not implicitly {@link proto_gc_start_bet_ack.verify|verify} messages.
     * @function encode
     * @memberof proto_gc_start_bet_ack
     * @static
     * @param {Iproto_gc_start_bet_ack} message proto_gc_start_bet_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_gc_start_bet_ack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nAutoType);
        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.nAwardMoney);
        if (message.mBoard != null && message.mBoard.length)
            for (var i = 0; i < message.mBoard.length; ++i)
                $root.proto_VecAnimalTile.encode(message.mBoard[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.mMatchedTiles != null && message.mMatchedTiles.length)
            for (var i = 0; i < message.mMatchedTiles.length; ++i)
                $root.proto_MatAnimalTile.encode(message.mMatchedTiles[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified proto_gc_start_bet_ack message, length delimited. Does not implicitly {@link proto_gc_start_bet_ack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_gc_start_bet_ack
     * @static
     * @param {Iproto_gc_start_bet_ack} message proto_gc_start_bet_ack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_gc_start_bet_ack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_gc_start_bet_ack message from the specified reader or buffer.
     * @function decode
     * @memberof proto_gc_start_bet_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_gc_start_bet_ack} proto_gc_start_bet_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_gc_start_bet_ack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_gc_start_bet_ack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nAutoType = reader.int32();
                break;
            case 2:
                message.nAwardMoney = reader.int64();
                break;
            case 3:
                if (!(message.mBoard && message.mBoard.length))
                    message.mBoard = [];
                message.mBoard.push($root.proto_VecAnimalTile.decode(reader, reader.uint32()));
                break;
            case 4:
                if (!(message.mMatchedTiles && message.mMatchedTiles.length))
                    message.mMatchedTiles = [];
                message.mMatchedTiles.push($root.proto_MatAnimalTile.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nAutoType"))
            throw $util.ProtocolError("missing required 'nAutoType'", { instance: message });
        if (!message.hasOwnProperty("nAwardMoney"))
            throw $util.ProtocolError("missing required 'nAwardMoney'", { instance: message });
        return message;
    };

    /**
     * Decodes a proto_gc_start_bet_ack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_gc_start_bet_ack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_gc_start_bet_ack} proto_gc_start_bet_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_gc_start_bet_ack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_gc_start_bet_ack message.
     * @function verify
     * @memberof proto_gc_start_bet_ack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_gc_start_bet_ack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nAutoType))
            return "nAutoType: integer expected";
        if (!$util.isInteger(message.nAwardMoney) && !(message.nAwardMoney && $util.isInteger(message.nAwardMoney.low) && $util.isInteger(message.nAwardMoney.high)))
            return "nAwardMoney: integer|Long expected";
        if (message.mBoard != null && message.hasOwnProperty("mBoard")) {
            if (!Array.isArray(message.mBoard))
                return "mBoard: array expected";
            for (var i = 0; i < message.mBoard.length; ++i) {
                var error = $root.proto_VecAnimalTile.verify(message.mBoard[i]);
                if (error)
                    return "mBoard." + error;
            }
        }
        if (message.mMatchedTiles != null && message.hasOwnProperty("mMatchedTiles")) {
            if (!Array.isArray(message.mMatchedTiles))
                return "mMatchedTiles: array expected";
            for (var i = 0; i < message.mMatchedTiles.length; ++i) {
                var error = $root.proto_MatAnimalTile.verify(message.mMatchedTiles[i]);
                if (error)
                    return "mMatchedTiles." + error;
            }
        }
        return null;
    };

    /**
     * Creates a proto_gc_start_bet_ack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_gc_start_bet_ack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_gc_start_bet_ack} proto_gc_start_bet_ack
     */
    proto_gc_start_bet_ack.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_gc_start_bet_ack)
            return object;
        var message = new $root.proto_gc_start_bet_ack();
        if (object.nAutoType != null)
            message.nAutoType = object.nAutoType | 0;
        if (object.nAwardMoney != null)
            if ($util.Long)
                (message.nAwardMoney = $util.Long.fromValue(object.nAwardMoney)).unsigned = false;
            else if (typeof object.nAwardMoney === "string")
                message.nAwardMoney = parseInt(object.nAwardMoney, 10);
            else if (typeof object.nAwardMoney === "number")
                message.nAwardMoney = object.nAwardMoney;
            else if (typeof object.nAwardMoney === "object")
                message.nAwardMoney = new $util.LongBits(object.nAwardMoney.low >>> 0, object.nAwardMoney.high >>> 0).toNumber();
        if (object.mBoard) {
            if (!Array.isArray(object.mBoard))
                throw TypeError(".proto_gc_start_bet_ack.mBoard: array expected");
            message.mBoard = [];
            for (var i = 0; i < object.mBoard.length; ++i) {
                if (typeof object.mBoard[i] !== "object")
                    throw TypeError(".proto_gc_start_bet_ack.mBoard: object expected");
                message.mBoard[i] = $root.proto_VecAnimalTile.fromObject(object.mBoard[i]);
            }
        }
        if (object.mMatchedTiles) {
            if (!Array.isArray(object.mMatchedTiles))
                throw TypeError(".proto_gc_start_bet_ack.mMatchedTiles: array expected");
            message.mMatchedTiles = [];
            for (var i = 0; i < object.mMatchedTiles.length; ++i) {
                if (typeof object.mMatchedTiles[i] !== "object")
                    throw TypeError(".proto_gc_start_bet_ack.mMatchedTiles: object expected");
                message.mMatchedTiles[i] = $root.proto_MatAnimalTile.fromObject(object.mMatchedTiles[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a proto_gc_start_bet_ack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_gc_start_bet_ack
     * @static
     * @param {proto_gc_start_bet_ack} message proto_gc_start_bet_ack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_gc_start_bet_ack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.mBoard = [];
            object.mMatchedTiles = [];
        }
        if (options.defaults) {
            object.nAutoType = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.nAwardMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.nAwardMoney = options.longs === String ? "0" : 0;
        }
        if (message.nAutoType != null && message.hasOwnProperty("nAutoType"))
            object.nAutoType = message.nAutoType;
        if (message.nAwardMoney != null && message.hasOwnProperty("nAwardMoney"))
            if (typeof message.nAwardMoney === "number")
                object.nAwardMoney = options.longs === String ? String(message.nAwardMoney) : message.nAwardMoney;
            else
                object.nAwardMoney = options.longs === String ? $util.Long.prototype.toString.call(message.nAwardMoney) : options.longs === Number ? new $util.LongBits(message.nAwardMoney.low >>> 0, message.nAwardMoney.high >>> 0).toNumber() : message.nAwardMoney;
        if (message.mBoard && message.mBoard.length) {
            object.mBoard = [];
            for (var j = 0; j < message.mBoard.length; ++j)
                object.mBoard[j] = $root.proto_VecAnimalTile.toObject(message.mBoard[j], options);
        }
        if (message.mMatchedTiles && message.mMatchedTiles.length) {
            object.mMatchedTiles = [];
            for (var j = 0; j < message.mMatchedTiles.length; ++j)
                object.mMatchedTiles[j] = $root.proto_MatAnimalTile.toObject(message.mMatchedTiles[j], options);
        }
        return object;
    };

    /**
     * Converts this proto_gc_start_bet_ack to JSON.
     * @function toJSON
     * @memberof proto_gc_start_bet_ack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_gc_start_bet_ack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_gc_start_bet_ack;
})();

$root.proto_VecAnimalTile = (function() {

    /**
     * Properties of a proto_VecAnimalTile.
     * @exports Iproto_VecAnimalTile
     * @interface Iproto_VecAnimalTile
     * @property {number|Long} nValue proto_VecAnimalTile nValue
     * @property {Array.<Iproto_AnimalTilePack>|null} [data1D] proto_VecAnimalTile data1D
     */

    /**
     * Constructs a new proto_VecAnimalTile.
     * @exports proto_VecAnimalTile
     * @classdesc Represents a proto_VecAnimalTile.
     * @implements Iproto_VecAnimalTile
     * @constructor
     * @param {Iproto_VecAnimalTile=} [properties] Properties to set
     */
    function proto_VecAnimalTile(properties) {
        this.data1D = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_VecAnimalTile nValue.
     * @member {number|Long} nValue
     * @memberof proto_VecAnimalTile
     * @instance
     */
    proto_VecAnimalTile.prototype.nValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * proto_VecAnimalTile data1D.
     * @member {Array.<Iproto_AnimalTilePack>} data1D
     * @memberof proto_VecAnimalTile
     * @instance
     */
    proto_VecAnimalTile.prototype.data1D = $util.emptyArray;

    /**
     * Creates a new proto_VecAnimalTile instance using the specified properties.
     * @function create
     * @memberof proto_VecAnimalTile
     * @static
     * @param {Iproto_VecAnimalTile=} [properties] Properties to set
     * @returns {proto_VecAnimalTile} proto_VecAnimalTile instance
     */
    proto_VecAnimalTile.create = function create(properties) {
        return new proto_VecAnimalTile(properties);
    };

    /**
     * Encodes the specified proto_VecAnimalTile message. Does not implicitly {@link proto_VecAnimalTile.verify|verify} messages.
     * @function encode
     * @memberof proto_VecAnimalTile
     * @static
     * @param {Iproto_VecAnimalTile} message proto_VecAnimalTile message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_VecAnimalTile.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.nValue);
        if (message.data1D != null && message.data1D.length)
            for (var i = 0; i < message.data1D.length; ++i)
                $root.proto_AnimalTilePack.encode(message.data1D[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified proto_VecAnimalTile message, length delimited. Does not implicitly {@link proto_VecAnimalTile.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_VecAnimalTile
     * @static
     * @param {Iproto_VecAnimalTile} message proto_VecAnimalTile message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_VecAnimalTile.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_VecAnimalTile message from the specified reader or buffer.
     * @function decode
     * @memberof proto_VecAnimalTile
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_VecAnimalTile} proto_VecAnimalTile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_VecAnimalTile.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_VecAnimalTile();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nValue = reader.int64();
                break;
            case 2:
                if (!(message.data1D && message.data1D.length))
                    message.data1D = [];
                message.data1D.push($root.proto_AnimalTilePack.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nValue"))
            throw $util.ProtocolError("missing required 'nValue'", { instance: message });
        return message;
    };

    /**
     * Decodes a proto_VecAnimalTile message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_VecAnimalTile
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_VecAnimalTile} proto_VecAnimalTile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_VecAnimalTile.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_VecAnimalTile message.
     * @function verify
     * @memberof proto_VecAnimalTile
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_VecAnimalTile.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nValue) && !(message.nValue && $util.isInteger(message.nValue.low) && $util.isInteger(message.nValue.high)))
            return "nValue: integer|Long expected";
        if (message.data1D != null && message.hasOwnProperty("data1D")) {
            if (!Array.isArray(message.data1D))
                return "data1D: array expected";
            for (var i = 0; i < message.data1D.length; ++i) {
                var error = $root.proto_AnimalTilePack.verify(message.data1D[i]);
                if (error)
                    return "data1D." + error;
            }
        }
        return null;
    };

    /**
     * Creates a proto_VecAnimalTile message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_VecAnimalTile
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_VecAnimalTile} proto_VecAnimalTile
     */
    proto_VecAnimalTile.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_VecAnimalTile)
            return object;
        var message = new $root.proto_VecAnimalTile();
        if (object.nValue != null)
            if ($util.Long)
                (message.nValue = $util.Long.fromValue(object.nValue)).unsigned = false;
            else if (typeof object.nValue === "string")
                message.nValue = parseInt(object.nValue, 10);
            else if (typeof object.nValue === "number")
                message.nValue = object.nValue;
            else if (typeof object.nValue === "object")
                message.nValue = new $util.LongBits(object.nValue.low >>> 0, object.nValue.high >>> 0).toNumber();
        if (object.data1D) {
            if (!Array.isArray(object.data1D))
                throw TypeError(".proto_VecAnimalTile.data1D: array expected");
            message.data1D = [];
            for (var i = 0; i < object.data1D.length; ++i) {
                if (typeof object.data1D[i] !== "object")
                    throw TypeError(".proto_VecAnimalTile.data1D: object expected");
                message.data1D[i] = $root.proto_AnimalTilePack.fromObject(object.data1D[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a proto_VecAnimalTile message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_VecAnimalTile
     * @static
     * @param {proto_VecAnimalTile} message proto_VecAnimalTile
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_VecAnimalTile.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.data1D = [];
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.nValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.nValue = options.longs === String ? "0" : 0;
        if (message.nValue != null && message.hasOwnProperty("nValue"))
            if (typeof message.nValue === "number")
                object.nValue = options.longs === String ? String(message.nValue) : message.nValue;
            else
                object.nValue = options.longs === String ? $util.Long.prototype.toString.call(message.nValue) : options.longs === Number ? new $util.LongBits(message.nValue.low >>> 0, message.nValue.high >>> 0).toNumber() : message.nValue;
        if (message.data1D && message.data1D.length) {
            object.data1D = [];
            for (var j = 0; j < message.data1D.length; ++j)
                object.data1D[j] = $root.proto_AnimalTilePack.toObject(message.data1D[j], options);
        }
        return object;
    };

    /**
     * Converts this proto_VecAnimalTile to JSON.
     * @function toJSON
     * @memberof proto_VecAnimalTile
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_VecAnimalTile.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_VecAnimalTile;
})();

$root.proto_MatAnimalTile = (function() {

    /**
     * Properties of a proto_MatAnimalTile.
     * @exports Iproto_MatAnimalTile
     * @interface Iproto_MatAnimalTile
     * @property {Array.<Iproto_VecAnimalTile>|null} [data2D] proto_MatAnimalTile data2D
     */

    /**
     * Constructs a new proto_MatAnimalTile.
     * @exports proto_MatAnimalTile
     * @classdesc Represents a proto_MatAnimalTile.
     * @implements Iproto_MatAnimalTile
     * @constructor
     * @param {Iproto_MatAnimalTile=} [properties] Properties to set
     */
    function proto_MatAnimalTile(properties) {
        this.data2D = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_MatAnimalTile data2D.
     * @member {Array.<Iproto_VecAnimalTile>} data2D
     * @memberof proto_MatAnimalTile
     * @instance
     */
    proto_MatAnimalTile.prototype.data2D = $util.emptyArray;

    /**
     * Creates a new proto_MatAnimalTile instance using the specified properties.
     * @function create
     * @memberof proto_MatAnimalTile
     * @static
     * @param {Iproto_MatAnimalTile=} [properties] Properties to set
     * @returns {proto_MatAnimalTile} proto_MatAnimalTile instance
     */
    proto_MatAnimalTile.create = function create(properties) {
        return new proto_MatAnimalTile(properties);
    };

    /**
     * Encodes the specified proto_MatAnimalTile message. Does not implicitly {@link proto_MatAnimalTile.verify|verify} messages.
     * @function encode
     * @memberof proto_MatAnimalTile
     * @static
     * @param {Iproto_MatAnimalTile} message proto_MatAnimalTile message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_MatAnimalTile.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.data2D != null && message.data2D.length)
            for (var i = 0; i < message.data2D.length; ++i)
                $root.proto_VecAnimalTile.encode(message.data2D[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified proto_MatAnimalTile message, length delimited. Does not implicitly {@link proto_MatAnimalTile.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_MatAnimalTile
     * @static
     * @param {Iproto_MatAnimalTile} message proto_MatAnimalTile message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_MatAnimalTile.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_MatAnimalTile message from the specified reader or buffer.
     * @function decode
     * @memberof proto_MatAnimalTile
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_MatAnimalTile} proto_MatAnimalTile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_MatAnimalTile.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_MatAnimalTile();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.data2D && message.data2D.length))
                    message.data2D = [];
                message.data2D.push($root.proto_VecAnimalTile.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a proto_MatAnimalTile message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_MatAnimalTile
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_MatAnimalTile} proto_MatAnimalTile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_MatAnimalTile.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_MatAnimalTile message.
     * @function verify
     * @memberof proto_MatAnimalTile
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_MatAnimalTile.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.data2D != null && message.hasOwnProperty("data2D")) {
            if (!Array.isArray(message.data2D))
                return "data2D: array expected";
            for (var i = 0; i < message.data2D.length; ++i) {
                var error = $root.proto_VecAnimalTile.verify(message.data2D[i]);
                if (error)
                    return "data2D." + error;
            }
        }
        return null;
    };

    /**
     * Creates a proto_MatAnimalTile message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_MatAnimalTile
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_MatAnimalTile} proto_MatAnimalTile
     */
    proto_MatAnimalTile.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_MatAnimalTile)
            return object;
        var message = new $root.proto_MatAnimalTile();
        if (object.data2D) {
            if (!Array.isArray(object.data2D))
                throw TypeError(".proto_MatAnimalTile.data2D: array expected");
            message.data2D = [];
            for (var i = 0; i < object.data2D.length; ++i) {
                if (typeof object.data2D[i] !== "object")
                    throw TypeError(".proto_MatAnimalTile.data2D: object expected");
                message.data2D[i] = $root.proto_VecAnimalTile.fromObject(object.data2D[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a proto_MatAnimalTile message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_MatAnimalTile
     * @static
     * @param {proto_MatAnimalTile} message proto_MatAnimalTile
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_MatAnimalTile.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.data2D = [];
        if (message.data2D && message.data2D.length) {
            object.data2D = [];
            for (var j = 0; j < message.data2D.length; ++j)
                object.data2D[j] = $root.proto_VecAnimalTile.toObject(message.data2D[j], options);
        }
        return object;
    };

    /**
     * Converts this proto_MatAnimalTile to JSON.
     * @function toJSON
     * @memberof proto_MatAnimalTile
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_MatAnimalTile.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_MatAnimalTile;
})();

$root.proto_cg_start_bet_req = (function() {

    /**
     * Properties of a proto_cg_start_bet_req.
     * @exports Iproto_cg_start_bet_req
     * @interface Iproto_cg_start_bet_req
     * @property {number} nAutoType proto_cg_start_bet_req nAutoType
     * @property {Array.<number|Long>|null} [nBetMoney] proto_cg_start_bet_req nBetMoney
     */

    /**
     * Constructs a new proto_cg_start_bet_req.
     * @exports proto_cg_start_bet_req
     * @classdesc Represents a proto_cg_start_bet_req.
     * @implements Iproto_cg_start_bet_req
     * @constructor
     * @param {Iproto_cg_start_bet_req=} [properties] Properties to set
     */
    function proto_cg_start_bet_req(properties) {
        this.nBetMoney = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_cg_start_bet_req nAutoType.
     * @member {number} nAutoType
     * @memberof proto_cg_start_bet_req
     * @instance
     */
    proto_cg_start_bet_req.prototype.nAutoType = 0;

    /**
     * proto_cg_start_bet_req nBetMoney.
     * @member {Array.<number|Long>} nBetMoney
     * @memberof proto_cg_start_bet_req
     * @instance
     */
    proto_cg_start_bet_req.prototype.nBetMoney = $util.emptyArray;

    /**
     * Creates a new proto_cg_start_bet_req instance using the specified properties.
     * @function create
     * @memberof proto_cg_start_bet_req
     * @static
     * @param {Iproto_cg_start_bet_req=} [properties] Properties to set
     * @returns {proto_cg_start_bet_req} proto_cg_start_bet_req instance
     */
    proto_cg_start_bet_req.create = function create(properties) {
        return new proto_cg_start_bet_req(properties);
    };

    /**
     * Encodes the specified proto_cg_start_bet_req message. Does not implicitly {@link proto_cg_start_bet_req.verify|verify} messages.
     * @function encode
     * @memberof proto_cg_start_bet_req
     * @static
     * @param {Iproto_cg_start_bet_req} message proto_cg_start_bet_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_cg_start_bet_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nAutoType);
        if (message.nBetMoney != null && message.nBetMoney.length)
            for (var i = 0; i < message.nBetMoney.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.nBetMoney[i]);
        return writer;
    };

    /**
     * Encodes the specified proto_cg_start_bet_req message, length delimited. Does not implicitly {@link proto_cg_start_bet_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_cg_start_bet_req
     * @static
     * @param {Iproto_cg_start_bet_req} message proto_cg_start_bet_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_cg_start_bet_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_cg_start_bet_req message from the specified reader or buffer.
     * @function decode
     * @memberof proto_cg_start_bet_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_cg_start_bet_req} proto_cg_start_bet_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_cg_start_bet_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_cg_start_bet_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nAutoType = reader.int32();
                break;
            case 2:
                if (!(message.nBetMoney && message.nBetMoney.length))
                    message.nBetMoney = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.nBetMoney.push(reader.int64());
                } else
                    message.nBetMoney.push(reader.int64());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nAutoType"))
            throw $util.ProtocolError("missing required 'nAutoType'", { instance: message });
        return message;
    };

    /**
     * Decodes a proto_cg_start_bet_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_cg_start_bet_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_cg_start_bet_req} proto_cg_start_bet_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_cg_start_bet_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_cg_start_bet_req message.
     * @function verify
     * @memberof proto_cg_start_bet_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_cg_start_bet_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nAutoType))
            return "nAutoType: integer expected";
        if (message.nBetMoney != null && message.hasOwnProperty("nBetMoney")) {
            if (!Array.isArray(message.nBetMoney))
                return "nBetMoney: array expected";
            for (var i = 0; i < message.nBetMoney.length; ++i)
                if (!$util.isInteger(message.nBetMoney[i]) && !(message.nBetMoney[i] && $util.isInteger(message.nBetMoney[i].low) && $util.isInteger(message.nBetMoney[i].high)))
                    return "nBetMoney: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates a proto_cg_start_bet_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_cg_start_bet_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_cg_start_bet_req} proto_cg_start_bet_req
     */
    proto_cg_start_bet_req.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_cg_start_bet_req)
            return object;
        var message = new $root.proto_cg_start_bet_req();
        if (object.nAutoType != null)
            message.nAutoType = object.nAutoType | 0;
        if (object.nBetMoney) {
            if (!Array.isArray(object.nBetMoney))
                throw TypeError(".proto_cg_start_bet_req.nBetMoney: array expected");
            message.nBetMoney = [];
            for (var i = 0; i < object.nBetMoney.length; ++i)
                if ($util.Long)
                    (message.nBetMoney[i] = $util.Long.fromValue(object.nBetMoney[i])).unsigned = false;
                else if (typeof object.nBetMoney[i] === "string")
                    message.nBetMoney[i] = parseInt(object.nBetMoney[i], 10);
                else if (typeof object.nBetMoney[i] === "number")
                    message.nBetMoney[i] = object.nBetMoney[i];
                else if (typeof object.nBetMoney[i] === "object")
                    message.nBetMoney[i] = new $util.LongBits(object.nBetMoney[i].low >>> 0, object.nBetMoney[i].high >>> 0).toNumber();
        }
        return message;
    };

    /**
     * Creates a plain object from a proto_cg_start_bet_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_cg_start_bet_req
     * @static
     * @param {proto_cg_start_bet_req} message proto_cg_start_bet_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_cg_start_bet_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.nBetMoney = [];
        if (options.defaults)
            object.nAutoType = 0;
        if (message.nAutoType != null && message.hasOwnProperty("nAutoType"))
            object.nAutoType = message.nAutoType;
        if (message.nBetMoney && message.nBetMoney.length) {
            object.nBetMoney = [];
            for (var j = 0; j < message.nBetMoney.length; ++j)
                if (typeof message.nBetMoney[j] === "number")
                    object.nBetMoney[j] = options.longs === String ? String(message.nBetMoney[j]) : message.nBetMoney[j];
                else
                    object.nBetMoney[j] = options.longs === String ? $util.Long.prototype.toString.call(message.nBetMoney[j]) : options.longs === Number ? new $util.LongBits(message.nBetMoney[j].low >>> 0, message.nBetMoney[j].high >>> 0).toNumber() : message.nBetMoney[j];
        }
        return object;
    };

    /**
     * Converts this proto_cg_start_bet_req to JSON.
     * @function toJSON
     * @memberof proto_cg_start_bet_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_cg_start_bet_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_cg_start_bet_req;
})();

$root.proto_AnimalTilePack = (function() {

    /**
     * Properties of a proto_AnimalTilePack.
     * @exports Iproto_AnimalTilePack
     * @interface Iproto_AnimalTilePack
     * @property {number} nType proto_AnimalTilePack nType
     * @property {number} nPosX proto_AnimalTilePack nPosX
     * @property {number} nPosY proto_AnimalTilePack nPosY
     * @property {number} nInfo proto_AnimalTilePack nInfo
     */

    /**
     * Constructs a new proto_AnimalTilePack.
     * @exports proto_AnimalTilePack
     * @classdesc Represents a proto_AnimalTilePack.
     * @implements Iproto_AnimalTilePack
     * @constructor
     * @param {Iproto_AnimalTilePack=} [properties] Properties to set
     */
    function proto_AnimalTilePack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_AnimalTilePack nType.
     * @member {number} nType
     * @memberof proto_AnimalTilePack
     * @instance
     */
    proto_AnimalTilePack.prototype.nType = 0;

    /**
     * proto_AnimalTilePack nPosX.
     * @member {number} nPosX
     * @memberof proto_AnimalTilePack
     * @instance
     */
    proto_AnimalTilePack.prototype.nPosX = 0;

    /**
     * proto_AnimalTilePack nPosY.
     * @member {number} nPosY
     * @memberof proto_AnimalTilePack
     * @instance
     */
    proto_AnimalTilePack.prototype.nPosY = 0;

    /**
     * proto_AnimalTilePack nInfo.
     * @member {number} nInfo
     * @memberof proto_AnimalTilePack
     * @instance
     */
    proto_AnimalTilePack.prototype.nInfo = 0;

    /**
     * Creates a new proto_AnimalTilePack instance using the specified properties.
     * @function create
     * @memberof proto_AnimalTilePack
     * @static
     * @param {Iproto_AnimalTilePack=} [properties] Properties to set
     * @returns {proto_AnimalTilePack} proto_AnimalTilePack instance
     */
    proto_AnimalTilePack.create = function create(properties) {
        return new proto_AnimalTilePack(properties);
    };

    /**
     * Encodes the specified proto_AnimalTilePack message. Does not implicitly {@link proto_AnimalTilePack.verify|verify} messages.
     * @function encode
     * @memberof proto_AnimalTilePack
     * @static
     * @param {Iproto_AnimalTilePack} message proto_AnimalTilePack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_AnimalTilePack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nType);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nPosX);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nPosY);
        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nInfo);
        return writer;
    };

    /**
     * Encodes the specified proto_AnimalTilePack message, length delimited. Does not implicitly {@link proto_AnimalTilePack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_AnimalTilePack
     * @static
     * @param {Iproto_AnimalTilePack} message proto_AnimalTilePack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_AnimalTilePack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_AnimalTilePack message from the specified reader or buffer.
     * @function decode
     * @memberof proto_AnimalTilePack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_AnimalTilePack} proto_AnimalTilePack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_AnimalTilePack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_AnimalTilePack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nType = reader.int32();
                break;
            case 2:
                message.nPosX = reader.int32();
                break;
            case 3:
                message.nPosY = reader.int32();
                break;
            case 4:
                message.nInfo = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nType"))
            throw $util.ProtocolError("missing required 'nType'", { instance: message });
        if (!message.hasOwnProperty("nPosX"))
            throw $util.ProtocolError("missing required 'nPosX'", { instance: message });
        if (!message.hasOwnProperty("nPosY"))
            throw $util.ProtocolError("missing required 'nPosY'", { instance: message });
        if (!message.hasOwnProperty("nInfo"))
            throw $util.ProtocolError("missing required 'nInfo'", { instance: message });
        return message;
    };

    /**
     * Decodes a proto_AnimalTilePack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_AnimalTilePack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_AnimalTilePack} proto_AnimalTilePack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_AnimalTilePack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_AnimalTilePack message.
     * @function verify
     * @memberof proto_AnimalTilePack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_AnimalTilePack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nType))
            return "nType: integer expected";
        if (!$util.isInteger(message.nPosX))
            return "nPosX: integer expected";
        if (!$util.isInteger(message.nPosY))
            return "nPosY: integer expected";
        if (!$util.isInteger(message.nInfo))
            return "nInfo: integer expected";
        return null;
    };

    /**
     * Creates a proto_AnimalTilePack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_AnimalTilePack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_AnimalTilePack} proto_AnimalTilePack
     */
    proto_AnimalTilePack.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_AnimalTilePack)
            return object;
        var message = new $root.proto_AnimalTilePack();
        if (object.nType != null)
            message.nType = object.nType | 0;
        if (object.nPosX != null)
            message.nPosX = object.nPosX | 0;
        if (object.nPosY != null)
            message.nPosY = object.nPosY | 0;
        if (object.nInfo != null)
            message.nInfo = object.nInfo | 0;
        return message;
    };

    /**
     * Creates a plain object from a proto_AnimalTilePack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_AnimalTilePack
     * @static
     * @param {proto_AnimalTilePack} message proto_AnimalTilePack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_AnimalTilePack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nType = 0;
            object.nPosX = 0;
            object.nPosY = 0;
            object.nInfo = 0;
        }
        if (message.nType != null && message.hasOwnProperty("nType"))
            object.nType = message.nType;
        if (message.nPosX != null && message.hasOwnProperty("nPosX"))
            object.nPosX = message.nPosX;
        if (message.nPosY != null && message.hasOwnProperty("nPosY"))
            object.nPosY = message.nPosY;
        if (message.nInfo != null && message.hasOwnProperty("nInfo"))
            object.nInfo = message.nInfo;
        return object;
    };

    /**
     * Converts this proto_AnimalTilePack to JSON.
     * @function toJSON
     * @memberof proto_AnimalTilePack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_AnimalTilePack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_AnimalTilePack;
})();

$root.proto_gc_common_not = (function() {

    /**
     * Properties of a proto_gc_common_not.
     * @exports Iproto_gc_common_not
     * @interface Iproto_gc_common_not
     * @property {number} nOp proto_gc_common_not nOp
     * @property {number} cChairID proto_gc_common_not cChairID
     * @property {number} nValue proto_gc_common_not nValue
     */

    /**
     * Constructs a new proto_gc_common_not.
     * @exports proto_gc_common_not
     * @classdesc Represents a proto_gc_common_not.
     * @implements Iproto_gc_common_not
     * @constructor
     * @param {Iproto_gc_common_not=} [properties] Properties to set
     */
    function proto_gc_common_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_gc_common_not nOp.
     * @member {number} nOp
     * @memberof proto_gc_common_not
     * @instance
     */
    proto_gc_common_not.prototype.nOp = 0;

    /**
     * proto_gc_common_not cChairID.
     * @member {number} cChairID
     * @memberof proto_gc_common_not
     * @instance
     */
    proto_gc_common_not.prototype.cChairID = 0;

    /**
     * proto_gc_common_not nValue.
     * @member {number} nValue
     * @memberof proto_gc_common_not
     * @instance
     */
    proto_gc_common_not.prototype.nValue = 0;

    /**
     * Creates a new proto_gc_common_not instance using the specified properties.
     * @function create
     * @memberof proto_gc_common_not
     * @static
     * @param {Iproto_gc_common_not=} [properties] Properties to set
     * @returns {proto_gc_common_not} proto_gc_common_not instance
     */
    proto_gc_common_not.create = function create(properties) {
        return new proto_gc_common_not(properties);
    };

    /**
     * Encodes the specified proto_gc_common_not message. Does not implicitly {@link proto_gc_common_not.verify|verify} messages.
     * @function encode
     * @memberof proto_gc_common_not
     * @static
     * @param {Iproto_gc_common_not} message proto_gc_common_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_gc_common_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nOp);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cChairID);
        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.nValue);
        return writer;
    };

    /**
     * Encodes the specified proto_gc_common_not message, length delimited. Does not implicitly {@link proto_gc_common_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_gc_common_not
     * @static
     * @param {Iproto_gc_common_not} message proto_gc_common_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_gc_common_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_gc_common_not message from the specified reader or buffer.
     * @function decode
     * @memberof proto_gc_common_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_gc_common_not} proto_gc_common_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_gc_common_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_gc_common_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nOp = reader.int32();
                break;
            case 2:
                message.cChairID = reader.int32();
                break;
            case 3:
                message.nValue = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nOp"))
            throw $util.ProtocolError("missing required 'nOp'", { instance: message });
        if (!message.hasOwnProperty("cChairID"))
            throw $util.ProtocolError("missing required 'cChairID'", { instance: message });
        if (!message.hasOwnProperty("nValue"))
            throw $util.ProtocolError("missing required 'nValue'", { instance: message });
        return message;
    };

    /**
     * Decodes a proto_gc_common_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_gc_common_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_gc_common_not} proto_gc_common_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_gc_common_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_gc_common_not message.
     * @function verify
     * @memberof proto_gc_common_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_gc_common_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nOp))
            return "nOp: integer expected";
        if (!$util.isInteger(message.cChairID))
            return "cChairID: integer expected";
        if (!$util.isInteger(message.nValue))
            return "nValue: integer expected";
        return null;
    };

    /**
     * Creates a proto_gc_common_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_gc_common_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_gc_common_not} proto_gc_common_not
     */
    proto_gc_common_not.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_gc_common_not)
            return object;
        var message = new $root.proto_gc_common_not();
        if (object.nOp != null)
            message.nOp = object.nOp | 0;
        if (object.cChairID != null)
            message.cChairID = object.cChairID | 0;
        if (object.nValue != null)
            message.nValue = object.nValue | 0;
        return message;
    };

    /**
     * Creates a plain object from a proto_gc_common_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_gc_common_not
     * @static
     * @param {proto_gc_common_not} message proto_gc_common_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_gc_common_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nOp = 0;
            object.cChairID = 0;
            object.nValue = 0;
        }
        if (message.nOp != null && message.hasOwnProperty("nOp"))
            object.nOp = message.nOp;
        if (message.cChairID != null && message.hasOwnProperty("cChairID"))
            object.cChairID = message.cChairID;
        if (message.nValue != null && message.hasOwnProperty("nValue"))
            object.nValue = message.nValue;
        return object;
    };

    /**
     * Converts this proto_gc_common_not to JSON.
     * @function toJSON
     * @memberof proto_gc_common_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_gc_common_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_gc_common_not;
})();

$root.proto_cg_super_award_req = (function() {

    /**
     * Properties of a proto_cg_super_award_req.
     * @exports Iproto_cg_super_award_req
     * @interface Iproto_cg_super_award_req
     * @property {number} nOp proto_cg_super_award_req nOp
     * @property {number} nValue proto_cg_super_award_req nValue
     */

    /**
     * Constructs a new proto_cg_super_award_req.
     * @exports proto_cg_super_award_req
     * @classdesc Represents a proto_cg_super_award_req.
     * @implements Iproto_cg_super_award_req
     * @constructor
     * @param {Iproto_cg_super_award_req=} [properties] Properties to set
     */
    function proto_cg_super_award_req(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_cg_super_award_req nOp.
     * @member {number} nOp
     * @memberof proto_cg_super_award_req
     * @instance
     */
    proto_cg_super_award_req.prototype.nOp = 0;

    /**
     * proto_cg_super_award_req nValue.
     * @member {number} nValue
     * @memberof proto_cg_super_award_req
     * @instance
     */
    proto_cg_super_award_req.prototype.nValue = 0;

    /**
     * Creates a new proto_cg_super_award_req instance using the specified properties.
     * @function create
     * @memberof proto_cg_super_award_req
     * @static
     * @param {Iproto_cg_super_award_req=} [properties] Properties to set
     * @returns {proto_cg_super_award_req} proto_cg_super_award_req instance
     */
    proto_cg_super_award_req.create = function create(properties) {
        return new proto_cg_super_award_req(properties);
    };

    /**
     * Encodes the specified proto_cg_super_award_req message. Does not implicitly {@link proto_cg_super_award_req.verify|verify} messages.
     * @function encode
     * @memberof proto_cg_super_award_req
     * @static
     * @param {Iproto_cg_super_award_req} message proto_cg_super_award_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_cg_super_award_req.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nOp);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nValue);
        return writer;
    };

    /**
     * Encodes the specified proto_cg_super_award_req message, length delimited. Does not implicitly {@link proto_cg_super_award_req.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_cg_super_award_req
     * @static
     * @param {Iproto_cg_super_award_req} message proto_cg_super_award_req message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_cg_super_award_req.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_cg_super_award_req message from the specified reader or buffer.
     * @function decode
     * @memberof proto_cg_super_award_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_cg_super_award_req} proto_cg_super_award_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_cg_super_award_req.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_cg_super_award_req();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nOp = reader.int32();
                break;
            case 2:
                message.nValue = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nOp"))
            throw $util.ProtocolError("missing required 'nOp'", { instance: message });
        if (!message.hasOwnProperty("nValue"))
            throw $util.ProtocolError("missing required 'nValue'", { instance: message });
        return message;
    };

    /**
     * Decodes a proto_cg_super_award_req message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_cg_super_award_req
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_cg_super_award_req} proto_cg_super_award_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_cg_super_award_req.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_cg_super_award_req message.
     * @function verify
     * @memberof proto_cg_super_award_req
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_cg_super_award_req.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nOp))
            return "nOp: integer expected";
        if (!$util.isInteger(message.nValue))
            return "nValue: integer expected";
        return null;
    };

    /**
     * Creates a proto_cg_super_award_req message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_cg_super_award_req
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_cg_super_award_req} proto_cg_super_award_req
     */
    proto_cg_super_award_req.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_cg_super_award_req)
            return object;
        var message = new $root.proto_cg_super_award_req();
        if (object.nOp != null)
            message.nOp = object.nOp | 0;
        if (object.nValue != null)
            message.nValue = object.nValue | 0;
        return message;
    };

    /**
     * Creates a plain object from a proto_cg_super_award_req message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_cg_super_award_req
     * @static
     * @param {proto_cg_super_award_req} message proto_cg_super_award_req
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_cg_super_award_req.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nOp = 0;
            object.nValue = 0;
        }
        if (message.nOp != null && message.hasOwnProperty("nOp"))
            object.nOp = message.nOp;
        if (message.nValue != null && message.hasOwnProperty("nValue"))
            object.nValue = message.nValue;
        return object;
    };

    /**
     * Converts this proto_cg_super_award_req to JSON.
     * @function toJSON
     * @memberof proto_cg_super_award_req
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_cg_super_award_req.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_cg_super_award_req;
})();

$root.proto_gc_super_award_not = (function() {

    /**
     * Properties of a proto_gc_super_award_not.
     * @exports Iproto_gc_super_award_not
     * @interface Iproto_gc_super_award_not
     * @property {number} nRet proto_gc_super_award_not nRet
     * @property {number} nValue proto_gc_super_award_not nValue
     */

    /**
     * Constructs a new proto_gc_super_award_not.
     * @exports proto_gc_super_award_not
     * @classdesc Represents a proto_gc_super_award_not.
     * @implements Iproto_gc_super_award_not
     * @constructor
     * @param {Iproto_gc_super_award_not=} [properties] Properties to set
     */
    function proto_gc_super_award_not(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * proto_gc_super_award_not nRet.
     * @member {number} nRet
     * @memberof proto_gc_super_award_not
     * @instance
     */
    proto_gc_super_award_not.prototype.nRet = 0;

    /**
     * proto_gc_super_award_not nValue.
     * @member {number} nValue
     * @memberof proto_gc_super_award_not
     * @instance
     */
    proto_gc_super_award_not.prototype.nValue = 0;

    /**
     * Creates a new proto_gc_super_award_not instance using the specified properties.
     * @function create
     * @memberof proto_gc_super_award_not
     * @static
     * @param {Iproto_gc_super_award_not=} [properties] Properties to set
     * @returns {proto_gc_super_award_not} proto_gc_super_award_not instance
     */
    proto_gc_super_award_not.create = function create(properties) {
        return new proto_gc_super_award_not(properties);
    };

    /**
     * Encodes the specified proto_gc_super_award_not message. Does not implicitly {@link proto_gc_super_award_not.verify|verify} messages.
     * @function encode
     * @memberof proto_gc_super_award_not
     * @static
     * @param {Iproto_gc_super_award_not} message proto_gc_super_award_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_gc_super_award_not.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nRet);
        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nValue);
        return writer;
    };

    /**
     * Encodes the specified proto_gc_super_award_not message, length delimited. Does not implicitly {@link proto_gc_super_award_not.verify|verify} messages.
     * @function encodeDelimited
     * @memberof proto_gc_super_award_not
     * @static
     * @param {Iproto_gc_super_award_not} message proto_gc_super_award_not message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    proto_gc_super_award_not.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a proto_gc_super_award_not message from the specified reader or buffer.
     * @function decode
     * @memberof proto_gc_super_award_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {proto_gc_super_award_not} proto_gc_super_award_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_gc_super_award_not.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto_gc_super_award_not();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nRet = reader.int32();
                break;
            case 2:
                message.nValue = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("nRet"))
            throw $util.ProtocolError("missing required 'nRet'", { instance: message });
        if (!message.hasOwnProperty("nValue"))
            throw $util.ProtocolError("missing required 'nValue'", { instance: message });
        return message;
    };

    /**
     * Decodes a proto_gc_super_award_not message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof proto_gc_super_award_not
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {proto_gc_super_award_not} proto_gc_super_award_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    proto_gc_super_award_not.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a proto_gc_super_award_not message.
     * @function verify
     * @memberof proto_gc_super_award_not
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    proto_gc_super_award_not.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.nRet))
            return "nRet: integer expected";
        if (!$util.isInteger(message.nValue))
            return "nValue: integer expected";
        return null;
    };

    /**
     * Creates a proto_gc_super_award_not message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof proto_gc_super_award_not
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {proto_gc_super_award_not} proto_gc_super_award_not
     */
    proto_gc_super_award_not.fromObject = function fromObject(object) {
        if (object instanceof $root.proto_gc_super_award_not)
            return object;
        var message = new $root.proto_gc_super_award_not();
        if (object.nRet != null)
            message.nRet = object.nRet | 0;
        if (object.nValue != null)
            message.nValue = object.nValue | 0;
        return message;
    };

    /**
     * Creates a plain object from a proto_gc_super_award_not message. Also converts values to other types if specified.
     * @function toObject
     * @memberof proto_gc_super_award_not
     * @static
     * @param {proto_gc_super_award_not} message proto_gc_super_award_not
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    proto_gc_super_award_not.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nRet = 0;
            object.nValue = 0;
        }
        if (message.nRet != null && message.hasOwnProperty("nRet"))
            object.nRet = message.nRet;
        if (message.nValue != null && message.hasOwnProperty("nValue"))
            object.nValue = message.nValue;
        return object;
    };

    /**
     * Converts this proto_gc_super_award_not to JSON.
     * @function toJSON
     * @memberof proto_gc_super_award_not
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    proto_gc_super_award_not.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return proto_gc_super_award_not;
})();

module.exports = $root;
