import * as $protobuf from "protobufjs";
/** Properties of a proto_gc_start_bet_ack. */
export interface Iproto_gc_start_bet_ack {

    /** proto_gc_start_bet_ack nAutoType */
    nAutoType: number;

    /** proto_gc_start_bet_ack nAwardMoney */
    nAwardMoney: (number|Long);

    /** proto_gc_start_bet_ack mBoard */
    mBoard?: (Iproto_VecAnimalTile[]|null);

    /** proto_gc_start_bet_ack mMatchedTiles */
    mMatchedTiles?: (Iproto_MatAnimalTile[]|null);
}

/** Represents a proto_gc_start_bet_ack. */
export class proto_gc_start_bet_ack implements Iproto_gc_start_bet_ack {

    /**
     * Constructs a new proto_gc_start_bet_ack.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iproto_gc_start_bet_ack);

    /** proto_gc_start_bet_ack nAutoType. */
    public nAutoType: number;

    /** proto_gc_start_bet_ack nAwardMoney. */
    public nAwardMoney: (number|Long);

    /** proto_gc_start_bet_ack mBoard. */
    public mBoard: Iproto_VecAnimalTile[];

    /** proto_gc_start_bet_ack mMatchedTiles. */
    public mMatchedTiles: Iproto_MatAnimalTile[];

    /**
     * Creates a new proto_gc_start_bet_ack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns proto_gc_start_bet_ack instance
     */
    public static create(properties?: Iproto_gc_start_bet_ack): proto_gc_start_bet_ack;

    /**
     * Encodes the specified proto_gc_start_bet_ack message. Does not implicitly {@link proto_gc_start_bet_ack.verify|verify} messages.
     * @param message proto_gc_start_bet_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iproto_gc_start_bet_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified proto_gc_start_bet_ack message, length delimited. Does not implicitly {@link proto_gc_start_bet_ack.verify|verify} messages.
     * @param message proto_gc_start_bet_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iproto_gc_start_bet_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a proto_gc_start_bet_ack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns proto_gc_start_bet_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto_gc_start_bet_ack;

    /**
     * Decodes a proto_gc_start_bet_ack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns proto_gc_start_bet_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto_gc_start_bet_ack;

    /**
     * Verifies a proto_gc_start_bet_ack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a proto_gc_start_bet_ack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns proto_gc_start_bet_ack
     */
    public static fromObject(object: { [k: string]: any }): proto_gc_start_bet_ack;

    /**
     * Creates a plain object from a proto_gc_start_bet_ack message. Also converts values to other types if specified.
     * @param message proto_gc_start_bet_ack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: proto_gc_start_bet_ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this proto_gc_start_bet_ack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a proto_VecAnimalTile. */
export interface Iproto_VecAnimalTile {

    /** proto_VecAnimalTile nValue */
    nValue: (number|Long);

    /** proto_VecAnimalTile data1D */
    data1D?: (Iproto_AnimalTilePack[]|null);
}

/** Represents a proto_VecAnimalTile. */
export class proto_VecAnimalTile implements Iproto_VecAnimalTile {

    /**
     * Constructs a new proto_VecAnimalTile.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iproto_VecAnimalTile);

    /** proto_VecAnimalTile nValue. */
    public nValue: (number|Long);

    /** proto_VecAnimalTile data1D. */
    public data1D: Iproto_AnimalTilePack[];

    /**
     * Creates a new proto_VecAnimalTile instance using the specified properties.
     * @param [properties] Properties to set
     * @returns proto_VecAnimalTile instance
     */
    public static create(properties?: Iproto_VecAnimalTile): proto_VecAnimalTile;

    /**
     * Encodes the specified proto_VecAnimalTile message. Does not implicitly {@link proto_VecAnimalTile.verify|verify} messages.
     * @param message proto_VecAnimalTile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iproto_VecAnimalTile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified proto_VecAnimalTile message, length delimited. Does not implicitly {@link proto_VecAnimalTile.verify|verify} messages.
     * @param message proto_VecAnimalTile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iproto_VecAnimalTile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a proto_VecAnimalTile message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns proto_VecAnimalTile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto_VecAnimalTile;

    /**
     * Decodes a proto_VecAnimalTile message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns proto_VecAnimalTile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto_VecAnimalTile;

    /**
     * Verifies a proto_VecAnimalTile message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a proto_VecAnimalTile message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns proto_VecAnimalTile
     */
    public static fromObject(object: { [k: string]: any }): proto_VecAnimalTile;

    /**
     * Creates a plain object from a proto_VecAnimalTile message. Also converts values to other types if specified.
     * @param message proto_VecAnimalTile
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: proto_VecAnimalTile, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this proto_VecAnimalTile to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a proto_MatAnimalTile. */
export interface Iproto_MatAnimalTile {

    /** proto_MatAnimalTile data2D */
    data2D?: (Iproto_VecAnimalTile[]|null);
}

/** Represents a proto_MatAnimalTile. */
export class proto_MatAnimalTile implements Iproto_MatAnimalTile {

    /**
     * Constructs a new proto_MatAnimalTile.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iproto_MatAnimalTile);

    /** proto_MatAnimalTile data2D. */
    public data2D: Iproto_VecAnimalTile[];

    /**
     * Creates a new proto_MatAnimalTile instance using the specified properties.
     * @param [properties] Properties to set
     * @returns proto_MatAnimalTile instance
     */
    public static create(properties?: Iproto_MatAnimalTile): proto_MatAnimalTile;

    /**
     * Encodes the specified proto_MatAnimalTile message. Does not implicitly {@link proto_MatAnimalTile.verify|verify} messages.
     * @param message proto_MatAnimalTile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iproto_MatAnimalTile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified proto_MatAnimalTile message, length delimited. Does not implicitly {@link proto_MatAnimalTile.verify|verify} messages.
     * @param message proto_MatAnimalTile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iproto_MatAnimalTile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a proto_MatAnimalTile message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns proto_MatAnimalTile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto_MatAnimalTile;

    /**
     * Decodes a proto_MatAnimalTile message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns proto_MatAnimalTile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto_MatAnimalTile;

    /**
     * Verifies a proto_MatAnimalTile message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a proto_MatAnimalTile message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns proto_MatAnimalTile
     */
    public static fromObject(object: { [k: string]: any }): proto_MatAnimalTile;

    /**
     * Creates a plain object from a proto_MatAnimalTile message. Also converts values to other types if specified.
     * @param message proto_MatAnimalTile
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: proto_MatAnimalTile, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this proto_MatAnimalTile to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a proto_cg_start_bet_req. */
export interface Iproto_cg_start_bet_req {

    /** proto_cg_start_bet_req nAutoType */
    nAutoType: number;

    /** proto_cg_start_bet_req nBetMoney */
    nBetMoney?: ((number|Long)[]|null);
}

/** Represents a proto_cg_start_bet_req. */
export class proto_cg_start_bet_req implements Iproto_cg_start_bet_req {

    /**
     * Constructs a new proto_cg_start_bet_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iproto_cg_start_bet_req);

    /** proto_cg_start_bet_req nAutoType. */
    public nAutoType: number;

    /** proto_cg_start_bet_req nBetMoney. */
    public nBetMoney: (number|Long)[];

    /**
     * Creates a new proto_cg_start_bet_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns proto_cg_start_bet_req instance
     */
    public static create(properties?: Iproto_cg_start_bet_req): proto_cg_start_bet_req;

    /**
     * Encodes the specified proto_cg_start_bet_req message. Does not implicitly {@link proto_cg_start_bet_req.verify|verify} messages.
     * @param message proto_cg_start_bet_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iproto_cg_start_bet_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified proto_cg_start_bet_req message, length delimited. Does not implicitly {@link proto_cg_start_bet_req.verify|verify} messages.
     * @param message proto_cg_start_bet_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iproto_cg_start_bet_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a proto_cg_start_bet_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns proto_cg_start_bet_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto_cg_start_bet_req;

    /**
     * Decodes a proto_cg_start_bet_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns proto_cg_start_bet_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto_cg_start_bet_req;

    /**
     * Verifies a proto_cg_start_bet_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a proto_cg_start_bet_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns proto_cg_start_bet_req
     */
    public static fromObject(object: { [k: string]: any }): proto_cg_start_bet_req;

    /**
     * Creates a plain object from a proto_cg_start_bet_req message. Also converts values to other types if specified.
     * @param message proto_cg_start_bet_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: proto_cg_start_bet_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this proto_cg_start_bet_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a proto_AnimalTilePack. */
export interface Iproto_AnimalTilePack {

    /** proto_AnimalTilePack nType */
    nType: number;

    /** proto_AnimalTilePack nPosX */
    nPosX: number;

    /** proto_AnimalTilePack nPosY */
    nPosY: number;

    /** proto_AnimalTilePack nInfo */
    nInfo: number;
}

/** Represents a proto_AnimalTilePack. */
export class proto_AnimalTilePack implements Iproto_AnimalTilePack {

    /**
     * Constructs a new proto_AnimalTilePack.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iproto_AnimalTilePack);

    /** proto_AnimalTilePack nType. */
    public nType: number;

    /** proto_AnimalTilePack nPosX. */
    public nPosX: number;

    /** proto_AnimalTilePack nPosY. */
    public nPosY: number;

    /** proto_AnimalTilePack nInfo. */
    public nInfo: number;

    /**
     * Creates a new proto_AnimalTilePack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns proto_AnimalTilePack instance
     */
    public static create(properties?: Iproto_AnimalTilePack): proto_AnimalTilePack;

    /**
     * Encodes the specified proto_AnimalTilePack message. Does not implicitly {@link proto_AnimalTilePack.verify|verify} messages.
     * @param message proto_AnimalTilePack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iproto_AnimalTilePack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified proto_AnimalTilePack message, length delimited. Does not implicitly {@link proto_AnimalTilePack.verify|verify} messages.
     * @param message proto_AnimalTilePack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iproto_AnimalTilePack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a proto_AnimalTilePack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns proto_AnimalTilePack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto_AnimalTilePack;

    /**
     * Decodes a proto_AnimalTilePack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns proto_AnimalTilePack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto_AnimalTilePack;

    /**
     * Verifies a proto_AnimalTilePack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a proto_AnimalTilePack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns proto_AnimalTilePack
     */
    public static fromObject(object: { [k: string]: any }): proto_AnimalTilePack;

    /**
     * Creates a plain object from a proto_AnimalTilePack message. Also converts values to other types if specified.
     * @param message proto_AnimalTilePack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: proto_AnimalTilePack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this proto_AnimalTilePack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a proto_gc_common_not. */
export interface Iproto_gc_common_not {

    /** proto_gc_common_not nOp */
    nOp: number;

    /** proto_gc_common_not cChairID */
    cChairID: number;

    /** proto_gc_common_not nValue */
    nValue: number;
}

/** Represents a proto_gc_common_not. */
export class proto_gc_common_not implements Iproto_gc_common_not {

    /**
     * Constructs a new proto_gc_common_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iproto_gc_common_not);

    /** proto_gc_common_not nOp. */
    public nOp: number;

    /** proto_gc_common_not cChairID. */
    public cChairID: number;

    /** proto_gc_common_not nValue. */
    public nValue: number;

    /**
     * Creates a new proto_gc_common_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns proto_gc_common_not instance
     */
    public static create(properties?: Iproto_gc_common_not): proto_gc_common_not;

    /**
     * Encodes the specified proto_gc_common_not message. Does not implicitly {@link proto_gc_common_not.verify|verify} messages.
     * @param message proto_gc_common_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iproto_gc_common_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified proto_gc_common_not message, length delimited. Does not implicitly {@link proto_gc_common_not.verify|verify} messages.
     * @param message proto_gc_common_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iproto_gc_common_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a proto_gc_common_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns proto_gc_common_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto_gc_common_not;

    /**
     * Decodes a proto_gc_common_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns proto_gc_common_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto_gc_common_not;

    /**
     * Verifies a proto_gc_common_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a proto_gc_common_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns proto_gc_common_not
     */
    public static fromObject(object: { [k: string]: any }): proto_gc_common_not;

    /**
     * Creates a plain object from a proto_gc_common_not message. Also converts values to other types if specified.
     * @param message proto_gc_common_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: proto_gc_common_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this proto_gc_common_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a proto_cg_super_award_req. */
export interface Iproto_cg_super_award_req {

    /** proto_cg_super_award_req nOp */
    nOp: number;

    /** proto_cg_super_award_req nValue */
    nValue: number;
}

/** Represents a proto_cg_super_award_req. */
export class proto_cg_super_award_req implements Iproto_cg_super_award_req {

    /**
     * Constructs a new proto_cg_super_award_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iproto_cg_super_award_req);

    /** proto_cg_super_award_req nOp. */
    public nOp: number;

    /** proto_cg_super_award_req nValue. */
    public nValue: number;

    /**
     * Creates a new proto_cg_super_award_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns proto_cg_super_award_req instance
     */
    public static create(properties?: Iproto_cg_super_award_req): proto_cg_super_award_req;

    /**
     * Encodes the specified proto_cg_super_award_req message. Does not implicitly {@link proto_cg_super_award_req.verify|verify} messages.
     * @param message proto_cg_super_award_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iproto_cg_super_award_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified proto_cg_super_award_req message, length delimited. Does not implicitly {@link proto_cg_super_award_req.verify|verify} messages.
     * @param message proto_cg_super_award_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iproto_cg_super_award_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a proto_cg_super_award_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns proto_cg_super_award_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto_cg_super_award_req;

    /**
     * Decodes a proto_cg_super_award_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns proto_cg_super_award_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto_cg_super_award_req;

    /**
     * Verifies a proto_cg_super_award_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a proto_cg_super_award_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns proto_cg_super_award_req
     */
    public static fromObject(object: { [k: string]: any }): proto_cg_super_award_req;

    /**
     * Creates a plain object from a proto_cg_super_award_req message. Also converts values to other types if specified.
     * @param message proto_cg_super_award_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: proto_cg_super_award_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this proto_cg_super_award_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a proto_gc_super_award_not. */
export interface Iproto_gc_super_award_not {

    /** proto_gc_super_award_not nRet */
    nRet: number;

    /** proto_gc_super_award_not nValue */
    nValue: number;
}

/** Represents a proto_gc_super_award_not. */
export class proto_gc_super_award_not implements Iproto_gc_super_award_not {

    /**
     * Constructs a new proto_gc_super_award_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iproto_gc_super_award_not);

    /** proto_gc_super_award_not nRet. */
    public nRet: number;

    /** proto_gc_super_award_not nValue. */
    public nValue: number;

    /**
     * Creates a new proto_gc_super_award_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns proto_gc_super_award_not instance
     */
    public static create(properties?: Iproto_gc_super_award_not): proto_gc_super_award_not;

    /**
     * Encodes the specified proto_gc_super_award_not message. Does not implicitly {@link proto_gc_super_award_not.verify|verify} messages.
     * @param message proto_gc_super_award_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iproto_gc_super_award_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified proto_gc_super_award_not message, length delimited. Does not implicitly {@link proto_gc_super_award_not.verify|verify} messages.
     * @param message proto_gc_super_award_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iproto_gc_super_award_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a proto_gc_super_award_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns proto_gc_super_award_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto_gc_super_award_not;

    /**
     * Decodes a proto_gc_super_award_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns proto_gc_super_award_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto_gc_super_award_not;

    /**
     * Verifies a proto_gc_super_award_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a proto_gc_super_award_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns proto_gc_super_award_not
     */
    public static fromObject(object: { [k: string]: any }): proto_gc_super_award_not;

    /**
     * Creates a plain object from a proto_gc_super_award_not message. Also converts values to other types if specified.
     * @param message proto_gc_super_award_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: proto_gc_super_award_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this proto_gc_super_award_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
