import * as $protobuf from "protobufjs";
/** Properties of a mahjong_mj_completedata_not_v1_1_0. */
export interface Imahjong_mj_completedata_not_v1_1_0 {

    /** mahjong_mj_completedata_not_v1_1_0 nDiZhu */
    nDiZhu: number;

    /** mahjong_mj_completedata_not_v1_1_0 nTaifei */
    nTaifei: number;

    /** mahjong_mj_completedata_not_v1_1_0 nLeftCards */
    nLeftCards: number;

    /** mahjong_mj_completedata_not_v1_1_0 cBanker */
    cBanker: number;

    /** mahjong_mj_completedata_not_v1_1_0 cCurrPly */
    cCurrPly: number;

    /** mahjong_mj_completedata_not_v1_1_0 cAutoState */
    cAutoState: number;

    /** mahjong_mj_completedata_not_v1_1_0 cAutoType */
    cAutoType: number;

    /** mahjong_mj_completedata_not_v1_1_0 sSerialID */
    sSerialID: number;

    /** mahjong_mj_completedata_not_v1_1_0 vecPlyData */
    vecPlyData?: (Imahjong_mj_changecard_not[]|null);

    /** mahjong_mj_completedata_not_v1_1_0 vecFakeScores */
    vecFakeScores?: ((number|Long)[]|null);
}

/** Represents a mahjong_mj_completedata_not_v1_1_0. */
export class mahjong_mj_completedata_not_v1_1_0 implements Imahjong_mj_completedata_not_v1_1_0 {

    /**
     * Constructs a new mahjong_mj_completedata_not_v1_1_0.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_completedata_not_v1_1_0);

    /** mahjong_mj_completedata_not_v1_1_0 nDiZhu. */
    public nDiZhu: number;

    /** mahjong_mj_completedata_not_v1_1_0 nTaifei. */
    public nTaifei: number;

    /** mahjong_mj_completedata_not_v1_1_0 nLeftCards. */
    public nLeftCards: number;

    /** mahjong_mj_completedata_not_v1_1_0 cBanker. */
    public cBanker: number;

    /** mahjong_mj_completedata_not_v1_1_0 cCurrPly. */
    public cCurrPly: number;

    /** mahjong_mj_completedata_not_v1_1_0 cAutoState. */
    public cAutoState: number;

    /** mahjong_mj_completedata_not_v1_1_0 cAutoType. */
    public cAutoType: number;

    /** mahjong_mj_completedata_not_v1_1_0 sSerialID. */
    public sSerialID: number;

    /** mahjong_mj_completedata_not_v1_1_0 vecPlyData. */
    public vecPlyData: Imahjong_mj_changecard_not[];

    /** mahjong_mj_completedata_not_v1_1_0 vecFakeScores. */
    public vecFakeScores: (number|Long)[];

    /**
     * Creates a new mahjong_mj_completedata_not_v1_1_0 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_completedata_not_v1_1_0 instance
     */
    public static create(properties?: Imahjong_mj_completedata_not_v1_1_0): mahjong_mj_completedata_not_v1_1_0;

    /**
     * Encodes the specified mahjong_mj_completedata_not_v1_1_0 message. Does not implicitly {@link mahjong_mj_completedata_not_v1_1_0.verify|verify} messages.
     * @param message mahjong_mj_completedata_not_v1_1_0 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_completedata_not_v1_1_0, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_completedata_not_v1_1_0 message, length delimited. Does not implicitly {@link mahjong_mj_completedata_not_v1_1_0.verify|verify} messages.
     * @param message mahjong_mj_completedata_not_v1_1_0 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_completedata_not_v1_1_0, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_completedata_not_v1_1_0 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_completedata_not_v1_1_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_completedata_not_v1_1_0;

    /**
     * Decodes a mahjong_mj_completedata_not_v1_1_0 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_completedata_not_v1_1_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_completedata_not_v1_1_0;

    /**
     * Verifies a mahjong_mj_completedata_not_v1_1_0 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_completedata_not_v1_1_0 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_completedata_not_v1_1_0
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_completedata_not_v1_1_0;

    /**
     * Creates a plain object from a mahjong_mj_completedata_not_v1_1_0 message. Also converts values to other types if specified.
     * @param message mahjong_mj_completedata_not_v1_1_0
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_completedata_not_v1_1_0, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_completedata_not_v1_1_0 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_tingfan_not. */
export interface Imahjong_mj_tingfan_not {

    /** mahjong_mj_tingfan_not sSerialID */
    sSerialID: number;

    /** mahjong_mj_tingfan_not vecTingFan */
    vecTingFan?: (Imahjong_tingfan_data[]|null);
}

/** Represents a mahjong_mj_tingfan_not. */
export class mahjong_mj_tingfan_not implements Imahjong_mj_tingfan_not {

    /**
     * Constructs a new mahjong_mj_tingfan_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_tingfan_not);

    /** mahjong_mj_tingfan_not sSerialID. */
    public sSerialID: number;

    /** mahjong_mj_tingfan_not vecTingFan. */
    public vecTingFan: Imahjong_tingfan_data[];

    /**
     * Creates a new mahjong_mj_tingfan_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_tingfan_not instance
     */
    public static create(properties?: Imahjong_mj_tingfan_not): mahjong_mj_tingfan_not;

    /**
     * Encodes the specified mahjong_mj_tingfan_not message. Does not implicitly {@link mahjong_mj_tingfan_not.verify|verify} messages.
     * @param message mahjong_mj_tingfan_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_tingfan_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_tingfan_not message, length delimited. Does not implicitly {@link mahjong_mj_tingfan_not.verify|verify} messages.
     * @param message mahjong_mj_tingfan_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_tingfan_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_tingfan_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_tingfan_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_tingfan_not;

    /**
     * Decodes a mahjong_mj_tingfan_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_tingfan_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_tingfan_not;

    /**
     * Verifies a mahjong_mj_tingfan_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_tingfan_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_tingfan_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_tingfan_not;

    /**
     * Creates a plain object from a mahjong_mj_tingfan_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_tingfan_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_tingfan_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_tingfan_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_wait_game_not. */
export interface Imahjong_mj_wait_game_not {

    /** mahjong_mj_wait_game_not nTimer */
    nTimer: number;

    /** mahjong_mj_wait_game_not vecChairid */
    vecChairid?: (number[]|null);

    /** mahjong_mj_wait_game_not vecType */
    vecType?: (number[]|null);
}

/** Represents a mahjong_mj_wait_game_not. */
export class mahjong_mj_wait_game_not implements Imahjong_mj_wait_game_not {

    /**
     * Constructs a new mahjong_mj_wait_game_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_wait_game_not);

    /** mahjong_mj_wait_game_not nTimer. */
    public nTimer: number;

    /** mahjong_mj_wait_game_not vecChairid. */
    public vecChairid: number[];

    /** mahjong_mj_wait_game_not vecType. */
    public vecType: number[];

    /**
     * Creates a new mahjong_mj_wait_game_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_wait_game_not instance
     */
    public static create(properties?: Imahjong_mj_wait_game_not): mahjong_mj_wait_game_not;

    /**
     * Encodes the specified mahjong_mj_wait_game_not message. Does not implicitly {@link mahjong_mj_wait_game_not.verify|verify} messages.
     * @param message mahjong_mj_wait_game_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_wait_game_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_wait_game_not message, length delimited. Does not implicitly {@link mahjong_mj_wait_game_not.verify|verify} messages.
     * @param message mahjong_mj_wait_game_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_wait_game_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_wait_game_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_wait_game_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_wait_game_not;

    /**
     * Decodes a mahjong_mj_wait_game_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_wait_game_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_wait_game_not;

    /**
     * Verifies a mahjong_mj_wait_game_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_wait_game_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_wait_game_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_wait_game_not;

    /**
     * Creates a plain object from a mahjong_mj_wait_game_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_wait_game_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_wait_game_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_wait_game_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_hudouble_req. */
export interface Imahjong_mj_hudouble_req {
}

/** Represents a mahjong_mj_hudouble_req. */
export class mahjong_mj_hudouble_req implements Imahjong_mj_hudouble_req {

    /**
     * Constructs a new mahjong_mj_hudouble_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_hudouble_req);

    /**
     * Creates a new mahjong_mj_hudouble_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_hudouble_req instance
     */
    public static create(properties?: Imahjong_mj_hudouble_req): mahjong_mj_hudouble_req;

    /**
     * Encodes the specified mahjong_mj_hudouble_req message. Does not implicitly {@link mahjong_mj_hudouble_req.verify|verify} messages.
     * @param message mahjong_mj_hudouble_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_hudouble_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_hudouble_req message, length delimited. Does not implicitly {@link mahjong_mj_hudouble_req.verify|verify} messages.
     * @param message mahjong_mj_hudouble_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_hudouble_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_hudouble_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_hudouble_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_hudouble_req;

    /**
     * Decodes a mahjong_mj_hudouble_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_hudouble_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_hudouble_req;

    /**
     * Verifies a mahjong_mj_hudouble_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_hudouble_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_hudouble_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_hudouble_req;

    /**
     * Creates a plain object from a mahjong_mj_hudouble_req message. Also converts values to other types if specified.
     * @param message mahjong_mj_hudouble_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_hudouble_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_hudouble_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_gc_task_not. */
export interface Imahjong_gc_task_not {

    /** mahjong_gc_task_not taskItem */
    taskItem: Imahjong_TaskItem;
}

/** Represents a mahjong_gc_task_not. */
export class mahjong_gc_task_not implements Imahjong_gc_task_not {

    /**
     * Constructs a new mahjong_gc_task_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_gc_task_not);

    /** mahjong_gc_task_not taskItem. */
    public taskItem: Imahjong_TaskItem;

    /**
     * Creates a new mahjong_gc_task_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_gc_task_not instance
     */
    public static create(properties?: Imahjong_gc_task_not): mahjong_gc_task_not;

    /**
     * Encodes the specified mahjong_gc_task_not message. Does not implicitly {@link mahjong_gc_task_not.verify|verify} messages.
     * @param message mahjong_gc_task_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_gc_task_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_gc_task_not message, length delimited. Does not implicitly {@link mahjong_gc_task_not.verify|verify} messages.
     * @param message mahjong_gc_task_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_gc_task_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_gc_task_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_gc_task_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_gc_task_not;

    /**
     * Decodes a mahjong_gc_task_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_gc_task_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_gc_task_not;

    /**
     * Verifies a mahjong_gc_task_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_gc_task_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_gc_task_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_gc_task_not;

    /**
     * Creates a plain object from a mahjong_gc_task_not message. Also converts values to other types if specified.
     * @param message mahjong_gc_task_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_gc_task_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_gc_task_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_cg_get_redpackets_88yuan_award_req. */
export interface Imahjong_cg_get_redpackets_88yuan_award_req {

    /** mahjong_cg_get_redpackets_88yuan_award_req type */
    type: number;
}

/** Represents a mahjong_cg_get_redpackets_88yuan_award_req. */
export class mahjong_cg_get_redpackets_88yuan_award_req implements Imahjong_cg_get_redpackets_88yuan_award_req {

    /**
     * Constructs a new mahjong_cg_get_redpackets_88yuan_award_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_cg_get_redpackets_88yuan_award_req);

    /** mahjong_cg_get_redpackets_88yuan_award_req type. */
    public type: number;

    /**
     * Creates a new mahjong_cg_get_redpackets_88yuan_award_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_cg_get_redpackets_88yuan_award_req instance
     */
    public static create(properties?: Imahjong_cg_get_redpackets_88yuan_award_req): mahjong_cg_get_redpackets_88yuan_award_req;

    /**
     * Encodes the specified mahjong_cg_get_redpackets_88yuan_award_req message. Does not implicitly {@link mahjong_cg_get_redpackets_88yuan_award_req.verify|verify} messages.
     * @param message mahjong_cg_get_redpackets_88yuan_award_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_cg_get_redpackets_88yuan_award_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_cg_get_redpackets_88yuan_award_req message, length delimited. Does not implicitly {@link mahjong_cg_get_redpackets_88yuan_award_req.verify|verify} messages.
     * @param message mahjong_cg_get_redpackets_88yuan_award_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_cg_get_redpackets_88yuan_award_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_cg_get_redpackets_88yuan_award_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_cg_get_redpackets_88yuan_award_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_cg_get_redpackets_88yuan_award_req;

    /**
     * Decodes a mahjong_cg_get_redpackets_88yuan_award_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_cg_get_redpackets_88yuan_award_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_cg_get_redpackets_88yuan_award_req;

    /**
     * Verifies a mahjong_cg_get_redpackets_88yuan_award_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_cg_get_redpackets_88yuan_award_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_cg_get_redpackets_88yuan_award_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_cg_get_redpackets_88yuan_award_req;

    /**
     * Creates a plain object from a mahjong_cg_get_redpackets_88yuan_award_req message. Also converts values to other types if specified.
     * @param message mahjong_cg_get_redpackets_88yuan_award_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_cg_get_redpackets_88yuan_award_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_cg_get_redpackets_88yuan_award_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_scmj_gc_expression_not. */
export interface Imahjong_scmj_gc_expression_not {

    /** mahjong_scmj_gc_expression_not expressionType */
    expressionType: number;

    /** mahjong_scmj_gc_expression_not expressionNum */
    expressionNum: number;
}

/** Represents a mahjong_scmj_gc_expression_not. */
export class mahjong_scmj_gc_expression_not implements Imahjong_scmj_gc_expression_not {

    /**
     * Constructs a new mahjong_scmj_gc_expression_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_scmj_gc_expression_not);

    /** mahjong_scmj_gc_expression_not expressionType. */
    public expressionType: number;

    /** mahjong_scmj_gc_expression_not expressionNum. */
    public expressionNum: number;

    /**
     * Creates a new mahjong_scmj_gc_expression_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_scmj_gc_expression_not instance
     */
    public static create(properties?: Imahjong_scmj_gc_expression_not): mahjong_scmj_gc_expression_not;

    /**
     * Encodes the specified mahjong_scmj_gc_expression_not message. Does not implicitly {@link mahjong_scmj_gc_expression_not.verify|verify} messages.
     * @param message mahjong_scmj_gc_expression_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_scmj_gc_expression_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_scmj_gc_expression_not message, length delimited. Does not implicitly {@link mahjong_scmj_gc_expression_not.verify|verify} messages.
     * @param message mahjong_scmj_gc_expression_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_scmj_gc_expression_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_scmj_gc_expression_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_scmj_gc_expression_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_scmj_gc_expression_not;

    /**
     * Decodes a mahjong_scmj_gc_expression_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_scmj_gc_expression_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_scmj_gc_expression_not;

    /**
     * Verifies a mahjong_scmj_gc_expression_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_scmj_gc_expression_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_scmj_gc_expression_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_scmj_gc_expression_not;

    /**
     * Creates a plain object from a mahjong_scmj_gc_expression_not message. Also converts values to other types if specified.
     * @param message mahjong_scmj_gc_expression_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_scmj_gc_expression_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_scmj_gc_expression_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_robot_not. */
export interface Imahjong_mj_robot_not {

    /** mahjong_mj_robot_not nType */
    nType: number;

    /** mahjong_mj_robot_not cChairId */
    cChairId: number;

    /** mahjong_mj_robot_not vecCards */
    vecCards?: (number[]|null);
}

/** Represents a mahjong_mj_robot_not. */
export class mahjong_mj_robot_not implements Imahjong_mj_robot_not {

    /**
     * Constructs a new mahjong_mj_robot_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_robot_not);

    /** mahjong_mj_robot_not nType. */
    public nType: number;

    /** mahjong_mj_robot_not cChairId. */
    public cChairId: number;

    /** mahjong_mj_robot_not vecCards. */
    public vecCards: number[];

    /**
     * Creates a new mahjong_mj_robot_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_robot_not instance
     */
    public static create(properties?: Imahjong_mj_robot_not): mahjong_mj_robot_not;

    /**
     * Encodes the specified mahjong_mj_robot_not message. Does not implicitly {@link mahjong_mj_robot_not.verify|verify} messages.
     * @param message mahjong_mj_robot_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_robot_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_robot_not message, length delimited. Does not implicitly {@link mahjong_mj_robot_not.verify|verify} messages.
     * @param message mahjong_mj_robot_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_robot_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_robot_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_robot_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_robot_not;

    /**
     * Decodes a mahjong_mj_robot_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_robot_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_robot_not;

    /**
     * Verifies a mahjong_mj_robot_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_robot_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_robot_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_robot_not;

    /**
     * Creates a plain object from a mahjong_mj_robot_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_robot_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_robot_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_robot_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_Cli_Auto_Req. */
export interface Imahjong_Cli_Auto_Req {

    /** mahjong_Cli_Auto_Req cAuto */
    cAuto: number;

    /** mahjong_Cli_Auto_Req iAutoType */
    iAutoType: number;
}

/** Represents a mahjong_Cli_Auto_Req. */
export class mahjong_Cli_Auto_Req implements Imahjong_Cli_Auto_Req {

    /**
     * Constructs a new mahjong_Cli_Auto_Req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_Cli_Auto_Req);

    /** mahjong_Cli_Auto_Req cAuto. */
    public cAuto: number;

    /** mahjong_Cli_Auto_Req iAutoType. */
    public iAutoType: number;

    /**
     * Creates a new mahjong_Cli_Auto_Req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_Cli_Auto_Req instance
     */
    public static create(properties?: Imahjong_Cli_Auto_Req): mahjong_Cli_Auto_Req;

    /**
     * Encodes the specified mahjong_Cli_Auto_Req message. Does not implicitly {@link mahjong_Cli_Auto_Req.verify|verify} messages.
     * @param message mahjong_Cli_Auto_Req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_Cli_Auto_Req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_Cli_Auto_Req message, length delimited. Does not implicitly {@link mahjong_Cli_Auto_Req.verify|verify} messages.
     * @param message mahjong_Cli_Auto_Req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_Cli_Auto_Req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_Cli_Auto_Req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_Cli_Auto_Req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_Cli_Auto_Req;

    /**
     * Decodes a mahjong_Cli_Auto_Req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_Cli_Auto_Req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_Cli_Auto_Req;

    /**
     * Verifies a mahjong_Cli_Auto_Req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_Cli_Auto_Req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_Cli_Auto_Req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_Cli_Auto_Req;

    /**
     * Creates a plain object from a mahjong_Cli_Auto_Req message. Also converts values to other types if specified.
     * @param message mahjong_Cli_Auto_Req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_Cli_Auto_Req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_Cli_Auto_Req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_st_gameresult_v2_1_4. */
export interface Imahjong_st_gameresult_v2_1_4 {

    /** mahjong_st_gameresult_v2_1_4 cChairID */
    cChairID: number;

    /** mahjong_st_gameresult_v2_1_4 cWonLose */
    cWonLose: number;

    /** mahjong_st_gameresult_v2_1_4 nScore */
    nScore: (number|Long);

    /** mahjong_st_gameresult_v2_1_4 nHuType */
    nHuType: number;

    /** mahjong_st_gameresult_v2_1_4 cMingGangNum */
    cMingGangNum: number;

    /** mahjong_st_gameresult_v2_1_4 cAnGangNum */
    cAnGangNum: number;

    /** mahjong_st_gameresult_v2_1_4 cBuGangNum */
    cBuGangNum: number;

    /** mahjong_st_gameresult_v2_1_4 cChaJiao */
    cChaJiao: number;

    /** mahjong_st_gameresult_v2_1_4 bGangHua */
    bGangHua: number;

    /** mahjong_st_gameresult_v2_1_4 cGenNum */
    cGenNum: number;

    /** mahjong_st_gameresult_v2_1_4 nTax */
    nTax: number;

    /** mahjong_st_gameresult_v2_1_4 vecGangData */
    vecGangData?: (Imahjong_gang_data[]|null);

    /** mahjong_st_gameresult_v2_1_4 vecHu */
    vecHu?: (Imahjong_fan_data[]|null);

    /** mahjong_st_gameresult_v2_1_4 vecHued */
    vecHued?: (Imahjong_fan_data[]|null);

    /** mahjong_st_gameresult_v2_1_4 vecGangPao */
    vecGangPao?: (Imahjong_fan_data[]|null);

    /** mahjong_st_gameresult_v2_1_4 vecChaJiao */
    vecChaJiao?: (Imahjong_fan_data[]|null);

    /** mahjong_st_gameresult_v2_1_4 vecWuJiaoGang */
    vecWuJiaoGang?: (Imahjong_fan_data[]|null);

    /** mahjong_st_gameresult_v2_1_4 vecHuaZhu */
    vecHuaZhu?: (Imahjong_fan_data[]|null);
}

/** Represents a mahjong_st_gameresult_v2_1_4. */
export class mahjong_st_gameresult_v2_1_4 implements Imahjong_st_gameresult_v2_1_4 {

    /**
     * Constructs a new mahjong_st_gameresult_v2_1_4.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_st_gameresult_v2_1_4);

    /** mahjong_st_gameresult_v2_1_4 cChairID. */
    public cChairID: number;

    /** mahjong_st_gameresult_v2_1_4 cWonLose. */
    public cWonLose: number;

    /** mahjong_st_gameresult_v2_1_4 nScore. */
    public nScore: (number|Long);

    /** mahjong_st_gameresult_v2_1_4 nHuType. */
    public nHuType: number;

    /** mahjong_st_gameresult_v2_1_4 cMingGangNum. */
    public cMingGangNum: number;

    /** mahjong_st_gameresult_v2_1_4 cAnGangNum. */
    public cAnGangNum: number;

    /** mahjong_st_gameresult_v2_1_4 cBuGangNum. */
    public cBuGangNum: number;

    /** mahjong_st_gameresult_v2_1_4 cChaJiao. */
    public cChaJiao: number;

    /** mahjong_st_gameresult_v2_1_4 bGangHua. */
    public bGangHua: number;

    /** mahjong_st_gameresult_v2_1_4 cGenNum. */
    public cGenNum: number;

    /** mahjong_st_gameresult_v2_1_4 nTax. */
    public nTax: number;

    /** mahjong_st_gameresult_v2_1_4 vecGangData. */
    public vecGangData: Imahjong_gang_data[];

    /** mahjong_st_gameresult_v2_1_4 vecHu. */
    public vecHu: Imahjong_fan_data[];

    /** mahjong_st_gameresult_v2_1_4 vecHued. */
    public vecHued: Imahjong_fan_data[];

    /** mahjong_st_gameresult_v2_1_4 vecGangPao. */
    public vecGangPao: Imahjong_fan_data[];

    /** mahjong_st_gameresult_v2_1_4 vecChaJiao. */
    public vecChaJiao: Imahjong_fan_data[];

    /** mahjong_st_gameresult_v2_1_4 vecWuJiaoGang. */
    public vecWuJiaoGang: Imahjong_fan_data[];

    /** mahjong_st_gameresult_v2_1_4 vecHuaZhu. */
    public vecHuaZhu: Imahjong_fan_data[];

    /**
     * Creates a new mahjong_st_gameresult_v2_1_4 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_st_gameresult_v2_1_4 instance
     */
    public static create(properties?: Imahjong_st_gameresult_v2_1_4): mahjong_st_gameresult_v2_1_4;

    /**
     * Encodes the specified mahjong_st_gameresult_v2_1_4 message. Does not implicitly {@link mahjong_st_gameresult_v2_1_4.verify|verify} messages.
     * @param message mahjong_st_gameresult_v2_1_4 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_st_gameresult_v2_1_4, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_st_gameresult_v2_1_4 message, length delimited. Does not implicitly {@link mahjong_st_gameresult_v2_1_4.verify|verify} messages.
     * @param message mahjong_st_gameresult_v2_1_4 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_st_gameresult_v2_1_4, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_st_gameresult_v2_1_4 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_st_gameresult_v2_1_4
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_st_gameresult_v2_1_4;

    /**
     * Decodes a mahjong_st_gameresult_v2_1_4 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_st_gameresult_v2_1_4
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_st_gameresult_v2_1_4;

    /**
     * Verifies a mahjong_st_gameresult_v2_1_4 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_st_gameresult_v2_1_4 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_st_gameresult_v2_1_4
     */
    public static fromObject(object: { [k: string]: any }): mahjong_st_gameresult_v2_1_4;

    /**
     * Creates a plain object from a mahjong_st_gameresult_v2_1_4 message. Also converts values to other types if specified.
     * @param message mahjong_st_gameresult_v2_1_4
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_st_gameresult_v2_1_4, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_st_gameresult_v2_1_4 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_Cli_leave_game_req. */
export interface Imahjong_Cli_leave_game_req {
}

/** Represents a mahjong_Cli_leave_game_req. */
export class mahjong_Cli_leave_game_req implements Imahjong_Cli_leave_game_req {

    /**
     * Constructs a new mahjong_Cli_leave_game_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_Cli_leave_game_req);

    /**
     * Creates a new mahjong_Cli_leave_game_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_Cli_leave_game_req instance
     */
    public static create(properties?: Imahjong_Cli_leave_game_req): mahjong_Cli_leave_game_req;

    /**
     * Encodes the specified mahjong_Cli_leave_game_req message. Does not implicitly {@link mahjong_Cli_leave_game_req.verify|verify} messages.
     * @param message mahjong_Cli_leave_game_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_Cli_leave_game_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_Cli_leave_game_req message, length delimited. Does not implicitly {@link mahjong_Cli_leave_game_req.verify|verify} messages.
     * @param message mahjong_Cli_leave_game_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_Cli_leave_game_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_Cli_leave_game_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_Cli_leave_game_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_Cli_leave_game_req;

    /**
     * Decodes a mahjong_Cli_leave_game_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_Cli_leave_game_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_Cli_leave_game_req;

    /**
     * Verifies a mahjong_Cli_leave_game_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_Cli_leave_game_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_Cli_leave_game_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_Cli_leave_game_req;

    /**
     * Creates a plain object from a mahjong_Cli_leave_game_req message. Also converts values to other types if specified.
     * @param message mahjong_Cli_leave_game_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_Cli_leave_game_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_Cli_leave_game_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_dice_not. */
export interface Imahjong_mj_dice_not {

    /** mahjong_mj_dice_not cBanker */
    cBanker: number;

    /** mahjong_mj_dice_not vecDice */
    vecDice?: (number[]|null);

    /** mahjong_mj_dice_not cWallEndChair */
    cWallEndChair: number;

    /** mahjong_mj_dice_not cWallEndPos */
    cWallEndPos: number;
}

/** Represents a mahjong_mj_dice_not. */
export class mahjong_mj_dice_not implements Imahjong_mj_dice_not {

    /**
     * Constructs a new mahjong_mj_dice_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_dice_not);

    /** mahjong_mj_dice_not cBanker. */
    public cBanker: number;

    /** mahjong_mj_dice_not vecDice. */
    public vecDice: number[];

    /** mahjong_mj_dice_not cWallEndChair. */
    public cWallEndChair: number;

    /** mahjong_mj_dice_not cWallEndPos. */
    public cWallEndPos: number;

    /**
     * Creates a new mahjong_mj_dice_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_dice_not instance
     */
    public static create(properties?: Imahjong_mj_dice_not): mahjong_mj_dice_not;

    /**
     * Encodes the specified mahjong_mj_dice_not message. Does not implicitly {@link mahjong_mj_dice_not.verify|verify} messages.
     * @param message mahjong_mj_dice_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_dice_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_dice_not message, length delimited. Does not implicitly {@link mahjong_mj_dice_not.verify|verify} messages.
     * @param message mahjong_mj_dice_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_dice_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_dice_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_dice_not;

    /**
     * Decodes a mahjong_mj_dice_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_dice_not;

    /**
     * Verifies a mahjong_mj_dice_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_dice_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_dice_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_dice_not;

    /**
     * Creates a plain object from a mahjong_mj_dice_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_dice_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_dice_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_dice_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_svr_choose_ratio_rsp. */
export interface Imahjong_svr_choose_ratio_rsp {

    /** mahjong_svr_choose_ratio_rsp nRatio */
    nRatio: number;

    /** mahjong_svr_choose_ratio_rsp sSerialID */
    sSerialID: number;
}

/** Represents a mahjong_svr_choose_ratio_rsp. */
export class mahjong_svr_choose_ratio_rsp implements Imahjong_svr_choose_ratio_rsp {

    /**
     * Constructs a new mahjong_svr_choose_ratio_rsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_svr_choose_ratio_rsp);

    /** mahjong_svr_choose_ratio_rsp nRatio. */
    public nRatio: number;

    /** mahjong_svr_choose_ratio_rsp sSerialID. */
    public sSerialID: number;

    /**
     * Creates a new mahjong_svr_choose_ratio_rsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_svr_choose_ratio_rsp instance
     */
    public static create(properties?: Imahjong_svr_choose_ratio_rsp): mahjong_svr_choose_ratio_rsp;

    /**
     * Encodes the specified mahjong_svr_choose_ratio_rsp message. Does not implicitly {@link mahjong_svr_choose_ratio_rsp.verify|verify} messages.
     * @param message mahjong_svr_choose_ratio_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_svr_choose_ratio_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_svr_choose_ratio_rsp message, length delimited. Does not implicitly {@link mahjong_svr_choose_ratio_rsp.verify|verify} messages.
     * @param message mahjong_svr_choose_ratio_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_svr_choose_ratio_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_svr_choose_ratio_rsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_svr_choose_ratio_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_svr_choose_ratio_rsp;

    /**
     * Decodes a mahjong_svr_choose_ratio_rsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_svr_choose_ratio_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_svr_choose_ratio_rsp;

    /**
     * Verifies a mahjong_svr_choose_ratio_rsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_svr_choose_ratio_rsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_svr_choose_ratio_rsp
     */
    public static fromObject(object: { [k: string]: any }): mahjong_svr_choose_ratio_rsp;

    /**
     * Creates a plain object from a mahjong_svr_choose_ratio_rsp message. Also converts values to other types if specified.
     * @param message mahjong_svr_choose_ratio_rsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_svr_choose_ratio_rsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_svr_choose_ratio_rsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_huedcards_not. */
export interface Imahjong_mj_huedcards_not {

    /** mahjong_mj_huedcards_not cChairID */
    cChairID: number;

    /** mahjong_mj_huedcards_not vecCards */
    vecCards?: (number[]|null);
}

/** Represents a mahjong_mj_huedcards_not. */
export class mahjong_mj_huedcards_not implements Imahjong_mj_huedcards_not {

    /**
     * Constructs a new mahjong_mj_huedcards_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_huedcards_not);

    /** mahjong_mj_huedcards_not cChairID. */
    public cChairID: number;

    /** mahjong_mj_huedcards_not vecCards. */
    public vecCards: number[];

    /**
     * Creates a new mahjong_mj_huedcards_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_huedcards_not instance
     */
    public static create(properties?: Imahjong_mj_huedcards_not): mahjong_mj_huedcards_not;

    /**
     * Encodes the specified mahjong_mj_huedcards_not message. Does not implicitly {@link mahjong_mj_huedcards_not.verify|verify} messages.
     * @param message mahjong_mj_huedcards_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_huedcards_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_huedcards_not message, length delimited. Does not implicitly {@link mahjong_mj_huedcards_not.verify|verify} messages.
     * @param message mahjong_mj_huedcards_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_huedcards_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_huedcards_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_huedcards_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_huedcards_not;

    /**
     * Decodes a mahjong_mj_huedcards_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_huedcards_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_huedcards_not;

    /**
     * Verifies a mahjong_mj_huedcards_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_huedcards_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_huedcards_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_huedcards_not;

    /**
     * Creates a plain object from a mahjong_mj_huedcards_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_huedcards_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_huedcards_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_huedcards_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_st_gameresult_v2_2_0. */
export interface Imahjong_st_gameresult_v2_2_0 {

    /** mahjong_st_gameresult_v2_2_0 cChairID */
    cChairID: number;

    /** mahjong_st_gameresult_v2_2_0 cWonLose */
    cWonLose: number;

    /** mahjong_st_gameresult_v2_2_0 nScore */
    nScore: (number|Long);

    /** mahjong_st_gameresult_v2_2_0 cChaJiao */
    cChaJiao: number;

    /** mahjong_st_gameresult_v2_2_0 nTax */
    nTax: number;

    /** mahjong_st_gameresult_v2_2_0 vecGangData */
    vecGangData?: (Imahjong_gang_data[]|null);

    /** mahjong_st_gameresult_v2_2_0 vecHu */
    vecHu?: (Imahjong_fan_data_v2_2_0[]|null);

    /** mahjong_st_gameresult_v2_2_0 vecHued */
    vecHued?: (Imahjong_fan_data_v2_2_0[]|null);

    /** mahjong_st_gameresult_v2_2_0 vecGangPao */
    vecGangPao?: (Imahjong_fan_data_v2_2_0[]|null);

    /** mahjong_st_gameresult_v2_2_0 vecChaJiao */
    vecChaJiao?: (Imahjong_fan_data_v2_2_0[]|null);

    /** mahjong_st_gameresult_v2_2_0 vecWuJiaoGang */
    vecWuJiaoGang?: (Imahjong_fan_data_v2_2_0[]|null);

    /** mahjong_st_gameresult_v2_2_0 vecHuaZhu */
    vecHuaZhu?: (Imahjong_fan_data_v2_2_0[]|null);
}

/** Represents a mahjong_st_gameresult_v2_2_0. */
export class mahjong_st_gameresult_v2_2_0 implements Imahjong_st_gameresult_v2_2_0 {

    /**
     * Constructs a new mahjong_st_gameresult_v2_2_0.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_st_gameresult_v2_2_0);

    /** mahjong_st_gameresult_v2_2_0 cChairID. */
    public cChairID: number;

    /** mahjong_st_gameresult_v2_2_0 cWonLose. */
    public cWonLose: number;

    /** mahjong_st_gameresult_v2_2_0 nScore. */
    public nScore: (number|Long);

    /** mahjong_st_gameresult_v2_2_0 cChaJiao. */
    public cChaJiao: number;

    /** mahjong_st_gameresult_v2_2_0 nTax. */
    public nTax: number;

    /** mahjong_st_gameresult_v2_2_0 vecGangData. */
    public vecGangData: Imahjong_gang_data[];

    /** mahjong_st_gameresult_v2_2_0 vecHu. */
    public vecHu: Imahjong_fan_data_v2_2_0[];

    /** mahjong_st_gameresult_v2_2_0 vecHued. */
    public vecHued: Imahjong_fan_data_v2_2_0[];

    /** mahjong_st_gameresult_v2_2_0 vecGangPao. */
    public vecGangPao: Imahjong_fan_data_v2_2_0[];

    /** mahjong_st_gameresult_v2_2_0 vecChaJiao. */
    public vecChaJiao: Imahjong_fan_data_v2_2_0[];

    /** mahjong_st_gameresult_v2_2_0 vecWuJiaoGang. */
    public vecWuJiaoGang: Imahjong_fan_data_v2_2_0[];

    /** mahjong_st_gameresult_v2_2_0 vecHuaZhu. */
    public vecHuaZhu: Imahjong_fan_data_v2_2_0[];

    /**
     * Creates a new mahjong_st_gameresult_v2_2_0 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_st_gameresult_v2_2_0 instance
     */
    public static create(properties?: Imahjong_st_gameresult_v2_2_0): mahjong_st_gameresult_v2_2_0;

    /**
     * Encodes the specified mahjong_st_gameresult_v2_2_0 message. Does not implicitly {@link mahjong_st_gameresult_v2_2_0.verify|verify} messages.
     * @param message mahjong_st_gameresult_v2_2_0 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_st_gameresult_v2_2_0, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_st_gameresult_v2_2_0 message, length delimited. Does not implicitly {@link mahjong_st_gameresult_v2_2_0.verify|verify} messages.
     * @param message mahjong_st_gameresult_v2_2_0 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_st_gameresult_v2_2_0, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_st_gameresult_v2_2_0 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_st_gameresult_v2_2_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_st_gameresult_v2_2_0;

    /**
     * Decodes a mahjong_st_gameresult_v2_2_0 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_st_gameresult_v2_2_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_st_gameresult_v2_2_0;

    /**
     * Verifies a mahjong_st_gameresult_v2_2_0 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_st_gameresult_v2_2_0 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_st_gameresult_v2_2_0
     */
    public static fromObject(object: { [k: string]: any }): mahjong_st_gameresult_v2_2_0;

    /**
     * Creates a plain object from a mahjong_st_gameresult_v2_2_0 message. Also converts values to other types if specified.
     * @param message mahjong_st_gameresult_v2_2_0
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_st_gameresult_v2_2_0, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_st_gameresult_v2_2_0 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_svr_fake_score_not. */
export interface Imahjong_svr_fake_score_not {

    /** mahjong_svr_fake_score_not scores */
    scores?: ((number|Long)[]|null);
}

/** Represents a mahjong_svr_fake_score_not. */
export class mahjong_svr_fake_score_not implements Imahjong_svr_fake_score_not {

    /**
     * Constructs a new mahjong_svr_fake_score_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_svr_fake_score_not);

    /** mahjong_svr_fake_score_not scores. */
    public scores: (number|Long)[];

    /**
     * Creates a new mahjong_svr_fake_score_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_svr_fake_score_not instance
     */
    public static create(properties?: Imahjong_svr_fake_score_not): mahjong_svr_fake_score_not;

    /**
     * Encodes the specified mahjong_svr_fake_score_not message. Does not implicitly {@link mahjong_svr_fake_score_not.verify|verify} messages.
     * @param message mahjong_svr_fake_score_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_svr_fake_score_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_svr_fake_score_not message, length delimited. Does not implicitly {@link mahjong_svr_fake_score_not.verify|verify} messages.
     * @param message mahjong_svr_fake_score_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_svr_fake_score_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_svr_fake_score_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_svr_fake_score_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_svr_fake_score_not;

    /**
     * Decodes a mahjong_svr_fake_score_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_svr_fake_score_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_svr_fake_score_not;

    /**
     * Verifies a mahjong_svr_fake_score_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_svr_fake_score_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_svr_fake_score_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_svr_fake_score_not;

    /**
     * Creates a plain object from a mahjong_svr_fake_score_not message. Also converts values to other types if specified.
     * @param message mahjong_svr_fake_score_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_svr_fake_score_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_svr_fake_score_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_get_mj_private_room_result_req. */
export interface Imahjong_get_mj_private_room_result_req {
}

/** Represents a mahjong_get_mj_private_room_result_req. */
export class mahjong_get_mj_private_room_result_req implements Imahjong_get_mj_private_room_result_req {

    /**
     * Constructs a new mahjong_get_mj_private_room_result_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_get_mj_private_room_result_req);

    /**
     * Creates a new mahjong_get_mj_private_room_result_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_get_mj_private_room_result_req instance
     */
    public static create(properties?: Imahjong_get_mj_private_room_result_req): mahjong_get_mj_private_room_result_req;

    /**
     * Encodes the specified mahjong_get_mj_private_room_result_req message. Does not implicitly {@link mahjong_get_mj_private_room_result_req.verify|verify} messages.
     * @param message mahjong_get_mj_private_room_result_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_get_mj_private_room_result_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_get_mj_private_room_result_req message, length delimited. Does not implicitly {@link mahjong_get_mj_private_room_result_req.verify|verify} messages.
     * @param message mahjong_get_mj_private_room_result_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_get_mj_private_room_result_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_get_mj_private_room_result_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_get_mj_private_room_result_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_get_mj_private_room_result_req;

    /**
     * Decodes a mahjong_get_mj_private_room_result_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_get_mj_private_room_result_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_get_mj_private_room_result_req;

    /**
     * Verifies a mahjong_get_mj_private_room_result_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_get_mj_private_room_result_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_get_mj_private_room_result_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_get_mj_private_room_result_req;

    /**
     * Creates a plain object from a mahjong_get_mj_private_room_result_req message. Also converts values to other types if specified.
     * @param message mahjong_get_mj_private_room_result_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_get_mj_private_room_result_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_get_mj_private_room_result_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_dingque_req. */
export interface Imahjong_mj_dingque_req {

    /** mahjong_mj_dingque_req nTimer */
    nTimer: number;

    /** mahjong_mj_dingque_req sSerialID */
    sSerialID: number;

    /** mahjong_mj_dingque_req cQueType */
    cQueType: number;
}

/** Represents a mahjong_mj_dingque_req. */
export class mahjong_mj_dingque_req implements Imahjong_mj_dingque_req {

    /**
     * Constructs a new mahjong_mj_dingque_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_dingque_req);

    /** mahjong_mj_dingque_req nTimer. */
    public nTimer: number;

    /** mahjong_mj_dingque_req sSerialID. */
    public sSerialID: number;

    /** mahjong_mj_dingque_req cQueType. */
    public cQueType: number;

    /**
     * Creates a new mahjong_mj_dingque_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_dingque_req instance
     */
    public static create(properties?: Imahjong_mj_dingque_req): mahjong_mj_dingque_req;

    /**
     * Encodes the specified mahjong_mj_dingque_req message. Does not implicitly {@link mahjong_mj_dingque_req.verify|verify} messages.
     * @param message mahjong_mj_dingque_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_dingque_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_dingque_req message, length delimited. Does not implicitly {@link mahjong_mj_dingque_req.verify|verify} messages.
     * @param message mahjong_mj_dingque_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_dingque_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_dingque_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_dingque_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_dingque_req;

    /**
     * Decodes a mahjong_mj_dingque_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_dingque_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_dingque_req;

    /**
     * Verifies a mahjong_mj_dingque_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_dingque_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_dingque_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_dingque_req;

    /**
     * Creates a plain object from a mahjong_mj_dingque_req message. Also converts values to other types if specified.
     * @param message mahjong_mj_dingque_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_dingque_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_dingque_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_playcard_req. */
export interface Imahjong_mj_playcard_req {

    /** mahjong_mj_playcard_req chairId */
    chairId: number;

    /** mahjong_mj_playcard_req nOpcode */
    nOpcode: number;

    /** mahjong_mj_playcard_req cPrevCard */
    cPrevCard: number;

    /** mahjong_mj_playcard_req vecTingPutCards */
    vecTingPutCards?: (number[]|null);

    /** mahjong_mj_playcard_req vecTingHuCards */
    vecTingHuCards?: (number[]|null);

    /** mahjong_mj_playcard_req vecGangCards */
    vecGangCards?: (number[]|null);

    /** mahjong_mj_playcard_req sSerialID */
    sSerialID: number;
}

/** Represents a mahjong_mj_playcard_req. */
export class mahjong_mj_playcard_req implements Imahjong_mj_playcard_req {

    /**
     * Constructs a new mahjong_mj_playcard_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_playcard_req);

    /** mahjong_mj_playcard_req chairId. */
    public chairId: number;

    /** mahjong_mj_playcard_req nOpcode. */
    public nOpcode: number;

    /** mahjong_mj_playcard_req cPrevCard. */
    public cPrevCard: number;

    /** mahjong_mj_playcard_req vecTingPutCards. */
    public vecTingPutCards: number[];

    /** mahjong_mj_playcard_req vecTingHuCards. */
    public vecTingHuCards: number[];

    /** mahjong_mj_playcard_req vecGangCards. */
    public vecGangCards: number[];

    /** mahjong_mj_playcard_req sSerialID. */
    public sSerialID: number;

    /**
     * Creates a new mahjong_mj_playcard_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_playcard_req instance
     */
    public static create(properties?: Imahjong_mj_playcard_req): mahjong_mj_playcard_req;

    /**
     * Encodes the specified mahjong_mj_playcard_req message. Does not implicitly {@link mahjong_mj_playcard_req.verify|verify} messages.
     * @param message mahjong_mj_playcard_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_playcard_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_playcard_req message, length delimited. Does not implicitly {@link mahjong_mj_playcard_req.verify|verify} messages.
     * @param message mahjong_mj_playcard_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_playcard_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_playcard_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_playcard_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_playcard_req;

    /**
     * Decodes a mahjong_mj_playcard_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_playcard_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_playcard_req;

    /**
     * Verifies a mahjong_mj_playcard_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_playcard_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_playcard_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_playcard_req;

    /**
     * Creates a plain object from a mahjong_mj_playcard_req message. Also converts values to other types if specified.
     * @param message mahjong_mj_playcard_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_playcard_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_playcard_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_cg_get_redpackets_award_req. */
export interface Imahjong_cg_get_redpackets_award_req {

    /** mahjong_cg_get_redpackets_award_req type */
    type: number;
}

/** Represents a mahjong_cg_get_redpackets_award_req. */
export class mahjong_cg_get_redpackets_award_req implements Imahjong_cg_get_redpackets_award_req {

    /**
     * Constructs a new mahjong_cg_get_redpackets_award_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_cg_get_redpackets_award_req);

    /** mahjong_cg_get_redpackets_award_req type. */
    public type: number;

    /**
     * Creates a new mahjong_cg_get_redpackets_award_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_cg_get_redpackets_award_req instance
     */
    public static create(properties?: Imahjong_cg_get_redpackets_award_req): mahjong_cg_get_redpackets_award_req;

    /**
     * Encodes the specified mahjong_cg_get_redpackets_award_req message. Does not implicitly {@link mahjong_cg_get_redpackets_award_req.verify|verify} messages.
     * @param message mahjong_cg_get_redpackets_award_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_cg_get_redpackets_award_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_cg_get_redpackets_award_req message, length delimited. Does not implicitly {@link mahjong_cg_get_redpackets_award_req.verify|verify} messages.
     * @param message mahjong_cg_get_redpackets_award_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_cg_get_redpackets_award_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_cg_get_redpackets_award_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_cg_get_redpackets_award_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_cg_get_redpackets_award_req;

    /**
     * Decodes a mahjong_cg_get_redpackets_award_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_cg_get_redpackets_award_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_cg_get_redpackets_award_req;

    /**
     * Verifies a mahjong_cg_get_redpackets_award_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_cg_get_redpackets_award_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_cg_get_redpackets_award_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_cg_get_redpackets_award_req;

    /**
     * Creates a plain object from a mahjong_cg_get_redpackets_award_req message. Also converts values to other types if specified.
     * @param message mahjong_cg_get_redpackets_award_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_cg_get_redpackets_award_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_cg_get_redpackets_award_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_gameresult_not_v1_1_0. */
export interface Imahjong_mj_gameresult_not_v1_1_0 {

    /** mahjong_mj_gameresult_not_v1_1_0 vecGameResult */
    vecGameResult?: (Imahjong_st_gameresult_v1_1_0[]|null);
}

/** Represents a mahjong_mj_gameresult_not_v1_1_0. */
export class mahjong_mj_gameresult_not_v1_1_0 implements Imahjong_mj_gameresult_not_v1_1_0 {

    /**
     * Constructs a new mahjong_mj_gameresult_not_v1_1_0.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_gameresult_not_v1_1_0);

    /** mahjong_mj_gameresult_not_v1_1_0 vecGameResult. */
    public vecGameResult: Imahjong_st_gameresult_v1_1_0[];

    /**
     * Creates a new mahjong_mj_gameresult_not_v1_1_0 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_gameresult_not_v1_1_0 instance
     */
    public static create(properties?: Imahjong_mj_gameresult_not_v1_1_0): mahjong_mj_gameresult_not_v1_1_0;

    /**
     * Encodes the specified mahjong_mj_gameresult_not_v1_1_0 message. Does not implicitly {@link mahjong_mj_gameresult_not_v1_1_0.verify|verify} messages.
     * @param message mahjong_mj_gameresult_not_v1_1_0 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_gameresult_not_v1_1_0, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_gameresult_not_v1_1_0 message, length delimited. Does not implicitly {@link mahjong_mj_gameresult_not_v1_1_0.verify|verify} messages.
     * @param message mahjong_mj_gameresult_not_v1_1_0 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_gameresult_not_v1_1_0, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_gameresult_not_v1_1_0 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_gameresult_not_v1_1_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_gameresult_not_v1_1_0;

    /**
     * Decodes a mahjong_mj_gameresult_not_v1_1_0 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_gameresult_not_v1_1_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_gameresult_not_v1_1_0;

    /**
     * Verifies a mahjong_mj_gameresult_not_v1_1_0 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_gameresult_not_v1_1_0 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_gameresult_not_v1_1_0
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_gameresult_not_v1_1_0;

    /**
     * Creates a plain object from a mahjong_mj_gameresult_not_v1_1_0 message. Also converts values to other types if specified.
     * @param message mahjong_mj_gameresult_not_v1_1_0
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_gameresult_not_v1_1_0, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_gameresult_not_v1_1_0 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_private_room_result_not. */
export interface Imahjong_mj_private_room_result_not {

    /** mahjong_mj_private_room_result_not vecGameStatiscs */
    vecGameStatiscs?: (Imahjong_GameStatisc[]|null);
}

/** Represents a mahjong_mj_private_room_result_not. */
export class mahjong_mj_private_room_result_not implements Imahjong_mj_private_room_result_not {

    /**
     * Constructs a new mahjong_mj_private_room_result_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_private_room_result_not);

    /** mahjong_mj_private_room_result_not vecGameStatiscs. */
    public vecGameStatiscs: Imahjong_GameStatisc[];

    /**
     * Creates a new mahjong_mj_private_room_result_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_private_room_result_not instance
     */
    public static create(properties?: Imahjong_mj_private_room_result_not): mahjong_mj_private_room_result_not;

    /**
     * Encodes the specified mahjong_mj_private_room_result_not message. Does not implicitly {@link mahjong_mj_private_room_result_not.verify|verify} messages.
     * @param message mahjong_mj_private_room_result_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_private_room_result_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_private_room_result_not message, length delimited. Does not implicitly {@link mahjong_mj_private_room_result_not.verify|verify} messages.
     * @param message mahjong_mj_private_room_result_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_private_room_result_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_private_room_result_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_private_room_result_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_private_room_result_not;

    /**
     * Decodes a mahjong_mj_private_room_result_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_private_room_result_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_private_room_result_not;

    /**
     * Verifies a mahjong_mj_private_room_result_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_private_room_result_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_private_room_result_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_private_room_result_not;

    /**
     * Creates a plain object from a mahjong_mj_private_room_result_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_private_room_result_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_private_room_result_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_private_room_result_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_tingfan_data. */
export interface Imahjong_tingfan_data {

    /** mahjong_tingfan_data cPutCard */
    cPutCard: number;

    /** mahjong_tingfan_data cHuCard */
    cHuCard: number;

    /** mahjong_tingfan_data nFan */
    nFan: number;

    /** mahjong_tingfan_data nLeftNum */
    nLeftNum: number;
}

/** Represents a mahjong_tingfan_data. */
export class mahjong_tingfan_data implements Imahjong_tingfan_data {

    /**
     * Constructs a new mahjong_tingfan_data.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_tingfan_data);

    /** mahjong_tingfan_data cPutCard. */
    public cPutCard: number;

    /** mahjong_tingfan_data cHuCard. */
    public cHuCard: number;

    /** mahjong_tingfan_data nFan. */
    public nFan: number;

    /** mahjong_tingfan_data nLeftNum. */
    public nLeftNum: number;

    /**
     * Creates a new mahjong_tingfan_data instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_tingfan_data instance
     */
    public static create(properties?: Imahjong_tingfan_data): mahjong_tingfan_data;

    /**
     * Encodes the specified mahjong_tingfan_data message. Does not implicitly {@link mahjong_tingfan_data.verify|verify} messages.
     * @param message mahjong_tingfan_data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_tingfan_data, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_tingfan_data message, length delimited. Does not implicitly {@link mahjong_tingfan_data.verify|verify} messages.
     * @param message mahjong_tingfan_data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_tingfan_data, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_tingfan_data message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_tingfan_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_tingfan_data;

    /**
     * Decodes a mahjong_tingfan_data message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_tingfan_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_tingfan_data;

    /**
     * Verifies a mahjong_tingfan_data message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_tingfan_data message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_tingfan_data
     */
    public static fromObject(object: { [k: string]: any }): mahjong_tingfan_data;

    /**
     * Creates a plain object from a mahjong_tingfan_data message. Also converts values to other types if specified.
     * @param message mahjong_tingfan_data
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_tingfan_data, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_tingfan_data to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_gangresult_not. */
export interface Imahjong_mj_gangresult_not {

    /** mahjong_mj_gangresult_not vecGangFen */
    vecGangFen?: (number[]|null);
}

/** Represents a mahjong_mj_gangresult_not. */
export class mahjong_mj_gangresult_not implements Imahjong_mj_gangresult_not {

    /**
     * Constructs a new mahjong_mj_gangresult_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_gangresult_not);

    /** mahjong_mj_gangresult_not vecGangFen. */
    public vecGangFen: number[];

    /**
     * Creates a new mahjong_mj_gangresult_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_gangresult_not instance
     */
    public static create(properties?: Imahjong_mj_gangresult_not): mahjong_mj_gangresult_not;

    /**
     * Encodes the specified mahjong_mj_gangresult_not message. Does not implicitly {@link mahjong_mj_gangresult_not.verify|verify} messages.
     * @param message mahjong_mj_gangresult_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_gangresult_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_gangresult_not message, length delimited. Does not implicitly {@link mahjong_mj_gangresult_not.verify|verify} messages.
     * @param message mahjong_mj_gangresult_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_gangresult_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_gangresult_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_gangresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_gangresult_not;

    /**
     * Decodes a mahjong_mj_gangresult_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_gangresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_gangresult_not;

    /**
     * Verifies a mahjong_mj_gangresult_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_gangresult_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_gangresult_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_gangresult_not;

    /**
     * Creates a plain object from a mahjong_mj_gangresult_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_gangresult_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_gangresult_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_gangresult_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_seat_dice_not. */
export interface Imahjong_mj_seat_dice_not {

    /** mahjong_mj_seat_dice_not cChairID */
    cChairID: number;

    /** mahjong_mj_seat_dice_not vecDice */
    vecDice?: (number[]|null);
}

/** Represents a mahjong_mj_seat_dice_not. */
export class mahjong_mj_seat_dice_not implements Imahjong_mj_seat_dice_not {

    /**
     * Constructs a new mahjong_mj_seat_dice_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_seat_dice_not);

    /** mahjong_mj_seat_dice_not cChairID. */
    public cChairID: number;

    /** mahjong_mj_seat_dice_not vecDice. */
    public vecDice: number[];

    /**
     * Creates a new mahjong_mj_seat_dice_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_seat_dice_not instance
     */
    public static create(properties?: Imahjong_mj_seat_dice_not): mahjong_mj_seat_dice_not;

    /**
     * Encodes the specified mahjong_mj_seat_dice_not message. Does not implicitly {@link mahjong_mj_seat_dice_not.verify|verify} messages.
     * @param message mahjong_mj_seat_dice_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_seat_dice_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_seat_dice_not message, length delimited. Does not implicitly {@link mahjong_mj_seat_dice_not.verify|verify} messages.
     * @param message mahjong_mj_seat_dice_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_seat_dice_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_seat_dice_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_seat_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_seat_dice_not;

    /**
     * Decodes a mahjong_mj_seat_dice_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_seat_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_seat_dice_not;

    /**
     * Verifies a mahjong_mj_seat_dice_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_seat_dice_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_seat_dice_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_seat_dice_not;

    /**
     * Creates a plain object from a mahjong_mj_seat_dice_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_seat_dice_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_seat_dice_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_seat_dice_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_fan_data. */
export interface Imahjong_fan_data {

    /** mahjong_fan_data cChairId */
    cChairId: number;

    /** mahjong_fan_data nScore */
    nScore: number;

    /** mahjong_fan_data cType */
    cType: number;
}

/** Represents a mahjong_fan_data. */
export class mahjong_fan_data implements Imahjong_fan_data {

    /**
     * Constructs a new mahjong_fan_data.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_fan_data);

    /** mahjong_fan_data cChairId. */
    public cChairId: number;

    /** mahjong_fan_data nScore. */
    public nScore: number;

    /** mahjong_fan_data cType. */
    public cType: number;

    /**
     * Creates a new mahjong_fan_data instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_fan_data instance
     */
    public static create(properties?: Imahjong_fan_data): mahjong_fan_data;

    /**
     * Encodes the specified mahjong_fan_data message. Does not implicitly {@link mahjong_fan_data.verify|verify} messages.
     * @param message mahjong_fan_data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_fan_data, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_fan_data message, length delimited. Does not implicitly {@link mahjong_fan_data.verify|verify} messages.
     * @param message mahjong_fan_data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_fan_data, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_fan_data message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_fan_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_fan_data;

    /**
     * Decodes a mahjong_fan_data message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_fan_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_fan_data;

    /**
     * Verifies a mahjong_fan_data message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_fan_data message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_fan_data
     */
    public static fromObject(object: { [k: string]: any }): mahjong_fan_data;

    /**
     * Creates a plain object from a mahjong_fan_data message. Also converts values to other types if specified.
     * @param message mahjong_fan_data
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_fan_data, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_fan_data to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_GameStatisc. */
export interface Imahjong_GameStatisc {

    /** mahjong_GameStatisc nBankerNum */
    nBankerNum: number;

    /** mahjong_GameStatisc nLianBankerNum */
    nLianBankerNum: number;

    /** mahjong_GameStatisc nHuNum */
    nHuNum: number;

    /** mahjong_GameStatisc nDianPaoNum */
    nDianPaoNum: number;

    /** mahjong_GameStatisc nMoBaoNum */
    nMoBaoNum: number;

    /** mahjong_GameStatisc nBaoZhongBaoNum */
    nBaoZhongBaoNum: number;

    /** mahjong_GameStatisc nAmount */
    nAmount: (number|Long);
}

/** Represents a mahjong_GameStatisc. */
export class mahjong_GameStatisc implements Imahjong_GameStatisc {

    /**
     * Constructs a new mahjong_GameStatisc.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_GameStatisc);

    /** mahjong_GameStatisc nBankerNum. */
    public nBankerNum: number;

    /** mahjong_GameStatisc nLianBankerNum. */
    public nLianBankerNum: number;

    /** mahjong_GameStatisc nHuNum. */
    public nHuNum: number;

    /** mahjong_GameStatisc nDianPaoNum. */
    public nDianPaoNum: number;

    /** mahjong_GameStatisc nMoBaoNum. */
    public nMoBaoNum: number;

    /** mahjong_GameStatisc nBaoZhongBaoNum. */
    public nBaoZhongBaoNum: number;

    /** mahjong_GameStatisc nAmount. */
    public nAmount: (number|Long);

    /**
     * Creates a new mahjong_GameStatisc instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_GameStatisc instance
     */
    public static create(properties?: Imahjong_GameStatisc): mahjong_GameStatisc;

    /**
     * Encodes the specified mahjong_GameStatisc message. Does not implicitly {@link mahjong_GameStatisc.verify|verify} messages.
     * @param message mahjong_GameStatisc message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_GameStatisc, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_GameStatisc message, length delimited. Does not implicitly {@link mahjong_GameStatisc.verify|verify} messages.
     * @param message mahjong_GameStatisc message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_GameStatisc, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_GameStatisc message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_GameStatisc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_GameStatisc;

    /**
     * Decodes a mahjong_GameStatisc message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_GameStatisc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_GameStatisc;

    /**
     * Verifies a mahjong_GameStatisc message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_GameStatisc message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_GameStatisc
     */
    public static fromObject(object: { [k: string]: any }): mahjong_GameStatisc;

    /**
     * Creates a plain object from a mahjong_GameStatisc message. Also converts values to other types if specified.
     * @param message mahjong_GameStatisc
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_GameStatisc, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_GameStatisc to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_animate_ok_req. */
export interface Imahjong_animate_ok_req {
}

/** Represents a mahjong_animate_ok_req. */
export class mahjong_animate_ok_req implements Imahjong_animate_ok_req {

    /**
     * Constructs a new mahjong_animate_ok_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_animate_ok_req);

    /**
     * Creates a new mahjong_animate_ok_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_animate_ok_req instance
     */
    public static create(properties?: Imahjong_animate_ok_req): mahjong_animate_ok_req;

    /**
     * Encodes the specified mahjong_animate_ok_req message. Does not implicitly {@link mahjong_animate_ok_req.verify|verify} messages.
     * @param message mahjong_animate_ok_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_animate_ok_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_animate_ok_req message, length delimited. Does not implicitly {@link mahjong_animate_ok_req.verify|verify} messages.
     * @param message mahjong_animate_ok_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_animate_ok_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_animate_ok_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_animate_ok_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_animate_ok_req;

    /**
     * Decodes a mahjong_animate_ok_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_animate_ok_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_animate_ok_req;

    /**
     * Verifies a mahjong_animate_ok_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_animate_ok_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_animate_ok_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_animate_ok_req;

    /**
     * Creates a plain object from a mahjong_animate_ok_req message. Also converts values to other types if specified.
     * @param message mahjong_animate_ok_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_animate_ok_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_animate_ok_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_rount_count_not. */
export interface Imahjong_mj_rount_count_not {

    /** mahjong_mj_rount_count_not nMaJiangQuan */
    nMaJiangQuan: number;

    /** mahjong_mj_rount_count_not nMaJiangJu */
    nMaJiangJu: number;

    /** mahjong_mj_rount_count_not nMaJiangCount */
    nMaJiangCount: number;
}

/** Represents a mahjong_mj_rount_count_not. */
export class mahjong_mj_rount_count_not implements Imahjong_mj_rount_count_not {

    /**
     * Constructs a new mahjong_mj_rount_count_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_rount_count_not);

    /** mahjong_mj_rount_count_not nMaJiangQuan. */
    public nMaJiangQuan: number;

    /** mahjong_mj_rount_count_not nMaJiangJu. */
    public nMaJiangJu: number;

    /** mahjong_mj_rount_count_not nMaJiangCount. */
    public nMaJiangCount: number;

    /**
     * Creates a new mahjong_mj_rount_count_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_rount_count_not instance
     */
    public static create(properties?: Imahjong_mj_rount_count_not): mahjong_mj_rount_count_not;

    /**
     * Encodes the specified mahjong_mj_rount_count_not message. Does not implicitly {@link mahjong_mj_rount_count_not.verify|verify} messages.
     * @param message mahjong_mj_rount_count_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_rount_count_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_rount_count_not message, length delimited. Does not implicitly {@link mahjong_mj_rount_count_not.verify|verify} messages.
     * @param message mahjong_mj_rount_count_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_rount_count_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_rount_count_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_rount_count_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_rount_count_not;

    /**
     * Decodes a mahjong_mj_rount_count_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_rount_count_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_rount_count_not;

    /**
     * Verifies a mahjong_mj_rount_count_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_rount_count_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_rount_count_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_rount_count_not;

    /**
     * Creates a plain object from a mahjong_mj_rount_count_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_rount_count_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_rount_count_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_rount_count_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_player_itemInfo. */
export interface Imahjong_player_itemInfo {

    /** mahjong_player_itemInfo nItemIndex */
    nItemIndex: number;

    /** mahjong_player_itemInfo nItemNum */
    nItemNum: number;
}

/** Represents a mahjong_player_itemInfo. */
export class mahjong_player_itemInfo implements Imahjong_player_itemInfo {

    /**
     * Constructs a new mahjong_player_itemInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_player_itemInfo);

    /** mahjong_player_itemInfo nItemIndex. */
    public nItemIndex: number;

    /** mahjong_player_itemInfo nItemNum. */
    public nItemNum: number;

    /**
     * Creates a new mahjong_player_itemInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_player_itemInfo instance
     */
    public static create(properties?: Imahjong_player_itemInfo): mahjong_player_itemInfo;

    /**
     * Encodes the specified mahjong_player_itemInfo message. Does not implicitly {@link mahjong_player_itemInfo.verify|verify} messages.
     * @param message mahjong_player_itemInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_player_itemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_player_itemInfo message, length delimited. Does not implicitly {@link mahjong_player_itemInfo.verify|verify} messages.
     * @param message mahjong_player_itemInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_player_itemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_player_itemInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_player_itemInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_player_itemInfo;

    /**
     * Decodes a mahjong_player_itemInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_player_itemInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_player_itemInfo;

    /**
     * Verifies a mahjong_player_itemInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_player_itemInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_player_itemInfo
     */
    public static fromObject(object: { [k: string]: any }): mahjong_player_itemInfo;

    /**
     * Creates a plain object from a mahjong_player_itemInfo message. Also converts values to other types if specified.
     * @param message mahjong_player_itemInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_player_itemInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_player_itemInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_st_gameresult. */
export interface Imahjong_st_gameresult {

    /** mahjong_st_gameresult cChairID */
    cChairID: number;

    /** mahjong_st_gameresult cWonLose */
    cWonLose: number;

    /** mahjong_st_gameresult cResult */
    cResult: number;

    /** mahjong_st_gameresult nScore */
    nScore: (number|Long);

    /** mahjong_st_gameresult nHuType */
    nHuType: number;

    /** mahjong_st_gameresult cMingGangNum */
    cMingGangNum: number;

    /** mahjong_st_gameresult cAnGangNum */
    cAnGangNum: number;

    /** mahjong_st_gameresult cBuGangNum */
    cBuGangNum: number;

    /** mahjong_st_gameresult cDianPaoChair */
    cDianPaoChair: number;

    /** mahjong_st_gameresult cChaJiao */
    cChaJiao: number;

    /** mahjong_st_gameresult bQiangGang */
    bQiangGang: number;

    /** mahjong_st_gameresult bGangHua */
    bGangHua: number;

    /** mahjong_st_gameresult bGangPao */
    bGangPao: number;

    /** mahjong_st_gameresult cGenNum */
    cGenNum: number;
}

/** Represents a mahjong_st_gameresult. */
export class mahjong_st_gameresult implements Imahjong_st_gameresult {

    /**
     * Constructs a new mahjong_st_gameresult.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_st_gameresult);

    /** mahjong_st_gameresult cChairID. */
    public cChairID: number;

    /** mahjong_st_gameresult cWonLose. */
    public cWonLose: number;

    /** mahjong_st_gameresult cResult. */
    public cResult: number;

    /** mahjong_st_gameresult nScore. */
    public nScore: (number|Long);

    /** mahjong_st_gameresult nHuType. */
    public nHuType: number;

    /** mahjong_st_gameresult cMingGangNum. */
    public cMingGangNum: number;

    /** mahjong_st_gameresult cAnGangNum. */
    public cAnGangNum: number;

    /** mahjong_st_gameresult cBuGangNum. */
    public cBuGangNum: number;

    /** mahjong_st_gameresult cDianPaoChair. */
    public cDianPaoChair: number;

    /** mahjong_st_gameresult cChaJiao. */
    public cChaJiao: number;

    /** mahjong_st_gameresult bQiangGang. */
    public bQiangGang: number;

    /** mahjong_st_gameresult bGangHua. */
    public bGangHua: number;

    /** mahjong_st_gameresult bGangPao. */
    public bGangPao: number;

    /** mahjong_st_gameresult cGenNum. */
    public cGenNum: number;

    /**
     * Creates a new mahjong_st_gameresult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_st_gameresult instance
     */
    public static create(properties?: Imahjong_st_gameresult): mahjong_st_gameresult;

    /**
     * Encodes the specified mahjong_st_gameresult message. Does not implicitly {@link mahjong_st_gameresult.verify|verify} messages.
     * @param message mahjong_st_gameresult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_st_gameresult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_st_gameresult message, length delimited. Does not implicitly {@link mahjong_st_gameresult.verify|verify} messages.
     * @param message mahjong_st_gameresult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_st_gameresult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_st_gameresult message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_st_gameresult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_st_gameresult;

    /**
     * Decodes a mahjong_st_gameresult message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_st_gameresult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_st_gameresult;

    /**
     * Verifies a mahjong_st_gameresult message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_st_gameresult message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_st_gameresult
     */
    public static fromObject(object: { [k: string]: any }): mahjong_st_gameresult;

    /**
     * Creates a plain object from a mahjong_st_gameresult message. Also converts values to other types if specified.
     * @param message mahjong_st_gameresult
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_st_gameresult, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_st_gameresult to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_userdata_not. */
export interface Imahjong_mj_userdata_not {

    /** mahjong_mj_userdata_not cChairid */
    cChairid: number;

    /** mahjong_mj_userdata_not nType */
    nType: number;

    /** mahjong_mj_userdata_not nAmount */
    nAmount: (number|Long);

    /** mahjong_mj_userdata_not strParam */
    strParam: string;
}

/** Represents a mahjong_mj_userdata_not. */
export class mahjong_mj_userdata_not implements Imahjong_mj_userdata_not {

    /**
     * Constructs a new mahjong_mj_userdata_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_userdata_not);

    /** mahjong_mj_userdata_not cChairid. */
    public cChairid: number;

    /** mahjong_mj_userdata_not nType. */
    public nType: number;

    /** mahjong_mj_userdata_not nAmount. */
    public nAmount: (number|Long);

    /** mahjong_mj_userdata_not strParam. */
    public strParam: string;

    /**
     * Creates a new mahjong_mj_userdata_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_userdata_not instance
     */
    public static create(properties?: Imahjong_mj_userdata_not): mahjong_mj_userdata_not;

    /**
     * Encodes the specified mahjong_mj_userdata_not message. Does not implicitly {@link mahjong_mj_userdata_not.verify|verify} messages.
     * @param message mahjong_mj_userdata_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_userdata_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_userdata_not message, length delimited. Does not implicitly {@link mahjong_mj_userdata_not.verify|verify} messages.
     * @param message mahjong_mj_userdata_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_userdata_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_userdata_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_userdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_userdata_not;

    /**
     * Decodes a mahjong_mj_userdata_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_userdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_userdata_not;

    /**
     * Verifies a mahjong_mj_userdata_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_userdata_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_userdata_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_userdata_not;

    /**
     * Creates a plain object from a mahjong_mj_userdata_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_userdata_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_userdata_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_userdata_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_completedata_not. */
export interface Imahjong_mj_completedata_not {

    /** mahjong_mj_completedata_not nDiZhu */
    nDiZhu: number;

    /** mahjong_mj_completedata_not nLeftCards */
    nLeftCards: number;

    /** mahjong_mj_completedata_not cBanker */
    cBanker: number;

    /** mahjong_mj_completedata_not cCurrPly */
    cCurrPly: number;

    /** mahjong_mj_completedata_not cAutoState */
    cAutoState: number;

    /** mahjong_mj_completedata_not cAutoType */
    cAutoType: number;

    /** mahjong_mj_completedata_not sSerialID */
    sSerialID: number;

    /** mahjong_mj_completedata_not vecPlyData */
    vecPlyData?: (Imahjong_mj_changecard_not[]|null);
}

/** Represents a mahjong_mj_completedata_not. */
export class mahjong_mj_completedata_not implements Imahjong_mj_completedata_not {

    /**
     * Constructs a new mahjong_mj_completedata_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_completedata_not);

    /** mahjong_mj_completedata_not nDiZhu. */
    public nDiZhu: number;

    /** mahjong_mj_completedata_not nLeftCards. */
    public nLeftCards: number;

    /** mahjong_mj_completedata_not cBanker. */
    public cBanker: number;

    /** mahjong_mj_completedata_not cCurrPly. */
    public cCurrPly: number;

    /** mahjong_mj_completedata_not cAutoState. */
    public cAutoState: number;

    /** mahjong_mj_completedata_not cAutoType. */
    public cAutoType: number;

    /** mahjong_mj_completedata_not sSerialID. */
    public sSerialID: number;

    /** mahjong_mj_completedata_not vecPlyData. */
    public vecPlyData: Imahjong_mj_changecard_not[];

    /**
     * Creates a new mahjong_mj_completedata_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_completedata_not instance
     */
    public static create(properties?: Imahjong_mj_completedata_not): mahjong_mj_completedata_not;

    /**
     * Encodes the specified mahjong_mj_completedata_not message. Does not implicitly {@link mahjong_mj_completedata_not.verify|verify} messages.
     * @param message mahjong_mj_completedata_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_completedata_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_completedata_not message, length delimited. Does not implicitly {@link mahjong_mj_completedata_not.verify|verify} messages.
     * @param message mahjong_mj_completedata_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_completedata_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_completedata_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_completedata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_completedata_not;

    /**
     * Decodes a mahjong_mj_completedata_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_completedata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_completedata_not;

    /**
     * Verifies a mahjong_mj_completedata_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_completedata_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_completedata_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_completedata_not;

    /**
     * Creates a plain object from a mahjong_mj_completedata_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_completedata_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_completedata_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_completedata_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_TaskItem. */
export interface Imahjong_TaskItem {

    /** mahjong_TaskItem taskId */
    taskId: number;

    /** mahjong_TaskItem taskDesc */
    taskDesc: string;

    /** mahjong_TaskItem taskMission */
    taskMission: string;

    /** mahjong_TaskItem taskMoneyType */
    taskMoneyType: number;

    /** mahjong_TaskItem taskMoney */
    taskMoney: number;

    /** mahjong_TaskItem taskRate */
    taskRate: number;
}

/** Represents a mahjong_TaskItem. */
export class mahjong_TaskItem implements Imahjong_TaskItem {

    /**
     * Constructs a new mahjong_TaskItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_TaskItem);

    /** mahjong_TaskItem taskId. */
    public taskId: number;

    /** mahjong_TaskItem taskDesc. */
    public taskDesc: string;

    /** mahjong_TaskItem taskMission. */
    public taskMission: string;

    /** mahjong_TaskItem taskMoneyType. */
    public taskMoneyType: number;

    /** mahjong_TaskItem taskMoney. */
    public taskMoney: number;

    /** mahjong_TaskItem taskRate. */
    public taskRate: number;

    /**
     * Creates a new mahjong_TaskItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_TaskItem instance
     */
    public static create(properties?: Imahjong_TaskItem): mahjong_TaskItem;

    /**
     * Encodes the specified mahjong_TaskItem message. Does not implicitly {@link mahjong_TaskItem.verify|verify} messages.
     * @param message mahjong_TaskItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_TaskItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_TaskItem message, length delimited. Does not implicitly {@link mahjong_TaskItem.verify|verify} messages.
     * @param message mahjong_TaskItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_TaskItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_TaskItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_TaskItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_TaskItem;

    /**
     * Decodes a mahjong_TaskItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_TaskItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_TaskItem;

    /**
     * Verifies a mahjong_TaskItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_TaskItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_TaskItem
     */
    public static fromObject(object: { [k: string]: any }): mahjong_TaskItem;

    /**
     * Creates a plain object from a mahjong_TaskItem message. Also converts values to other types if specified.
     * @param message mahjong_TaskItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_TaskItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_TaskItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_gang_data. */
export interface Imahjong_gang_data {

    /** mahjong_gang_data cNum */
    cNum: number;

    /** mahjong_gang_data nScore */
    nScore: number;
}

/** Represents a mahjong_gang_data. */
export class mahjong_gang_data implements Imahjong_gang_data {

    /**
     * Constructs a new mahjong_gang_data.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_gang_data);

    /** mahjong_gang_data cNum. */
    public cNum: number;

    /** mahjong_gang_data nScore. */
    public nScore: number;

    /**
     * Creates a new mahjong_gang_data instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_gang_data instance
     */
    public static create(properties?: Imahjong_gang_data): mahjong_gang_data;

    /**
     * Encodes the specified mahjong_gang_data message. Does not implicitly {@link mahjong_gang_data.verify|verify} messages.
     * @param message mahjong_gang_data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_gang_data, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_gang_data message, length delimited. Does not implicitly {@link mahjong_gang_data.verify|verify} messages.
     * @param message mahjong_gang_data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_gang_data, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_gang_data message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_gang_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_gang_data;

    /**
     * Decodes a mahjong_gang_data message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_gang_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_gang_data;

    /**
     * Verifies a mahjong_gang_data message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_gang_data message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_gang_data
     */
    public static fromObject(object: { [k: string]: any }): mahjong_gang_data;

    /**
     * Creates a plain object from a mahjong_gang_data message. Also converts values to other types if specified.
     * @param message mahjong_gang_data
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_gang_data, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_gang_data to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_gc_get_redpackets_award_ack. */
export interface Imahjong_gc_get_redpackets_award_ack {

    /** mahjong_gc_get_redpackets_award_ack ret */
    ret: number;

    /** mahjong_gc_get_redpackets_award_ack curRounds */
    curRounds: number;

    /** mahjong_gc_get_redpackets_award_ack limitRounds */
    limitRounds: number;

    /** mahjong_gc_get_redpackets_award_ack nAmount */
    nAmount: number;

    /** mahjong_gc_get_redpackets_award_ack cItemtype */
    cItemtype: number;

    /** mahjong_gc_get_redpackets_award_ack taskId */
    taskId: number;

    /** mahjong_gc_get_redpackets_award_ack fakeItem */
    fakeItem?: (Imahjong_player_itemInfo[]|null);
}

/** Represents a mahjong_gc_get_redpackets_award_ack. */
export class mahjong_gc_get_redpackets_award_ack implements Imahjong_gc_get_redpackets_award_ack {

    /**
     * Constructs a new mahjong_gc_get_redpackets_award_ack.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_gc_get_redpackets_award_ack);

    /** mahjong_gc_get_redpackets_award_ack ret. */
    public ret: number;

    /** mahjong_gc_get_redpackets_award_ack curRounds. */
    public curRounds: number;

    /** mahjong_gc_get_redpackets_award_ack limitRounds. */
    public limitRounds: number;

    /** mahjong_gc_get_redpackets_award_ack nAmount. */
    public nAmount: number;

    /** mahjong_gc_get_redpackets_award_ack cItemtype. */
    public cItemtype: number;

    /** mahjong_gc_get_redpackets_award_ack taskId. */
    public taskId: number;

    /** mahjong_gc_get_redpackets_award_ack fakeItem. */
    public fakeItem: Imahjong_player_itemInfo[];

    /**
     * Creates a new mahjong_gc_get_redpackets_award_ack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_gc_get_redpackets_award_ack instance
     */
    public static create(properties?: Imahjong_gc_get_redpackets_award_ack): mahjong_gc_get_redpackets_award_ack;

    /**
     * Encodes the specified mahjong_gc_get_redpackets_award_ack message. Does not implicitly {@link mahjong_gc_get_redpackets_award_ack.verify|verify} messages.
     * @param message mahjong_gc_get_redpackets_award_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_gc_get_redpackets_award_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_gc_get_redpackets_award_ack message, length delimited. Does not implicitly {@link mahjong_gc_get_redpackets_award_ack.verify|verify} messages.
     * @param message mahjong_gc_get_redpackets_award_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_gc_get_redpackets_award_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_gc_get_redpackets_award_ack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_gc_get_redpackets_award_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_gc_get_redpackets_award_ack;

    /**
     * Decodes a mahjong_gc_get_redpackets_award_ack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_gc_get_redpackets_award_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_gc_get_redpackets_award_ack;

    /**
     * Verifies a mahjong_gc_get_redpackets_award_ack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_gc_get_redpackets_award_ack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_gc_get_redpackets_award_ack
     */
    public static fromObject(object: { [k: string]: any }): mahjong_gc_get_redpackets_award_ack;

    /**
     * Creates a plain object from a mahjong_gc_get_redpackets_award_ack message. Also converts values to other types if specified.
     * @param message mahjong_gc_get_redpackets_award_ack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_gc_get_redpackets_award_ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_gc_get_redpackets_award_ack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_charged_ack. */
export interface Imahjong_mj_charged_ack {

    /** mahjong_mj_charged_ack cRet */
    cRet: number;

    /** mahjong_mj_charged_ack sSerialID */
    sSerialID: number;
}

/** Represents a mahjong_mj_charged_ack. */
export class mahjong_mj_charged_ack implements Imahjong_mj_charged_ack {

    /**
     * Constructs a new mahjong_mj_charged_ack.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_charged_ack);

    /** mahjong_mj_charged_ack cRet. */
    public cRet: number;

    /** mahjong_mj_charged_ack sSerialID. */
    public sSerialID: number;

    /**
     * Creates a new mahjong_mj_charged_ack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_charged_ack instance
     */
    public static create(properties?: Imahjong_mj_charged_ack): mahjong_mj_charged_ack;

    /**
     * Encodes the specified mahjong_mj_charged_ack message. Does not implicitly {@link mahjong_mj_charged_ack.verify|verify} messages.
     * @param message mahjong_mj_charged_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_charged_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_charged_ack message, length delimited. Does not implicitly {@link mahjong_mj_charged_ack.verify|verify} messages.
     * @param message mahjong_mj_charged_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_charged_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_charged_ack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_charged_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_charged_ack;

    /**
     * Decodes a mahjong_mj_charged_ack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_charged_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_charged_ack;

    /**
     * Verifies a mahjong_mj_charged_ack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_charged_ack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_charged_ack
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_charged_ack;

    /**
     * Creates a plain object from a mahjong_mj_charged_ack message. Also converts values to other types if specified.
     * @param message mahjong_mj_charged_ack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_charged_ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_charged_ack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_visi_compdata_req. */
export interface Imahjong_mj_visi_compdata_req {
}

/** Represents a mahjong_mj_visi_compdata_req. */
export class mahjong_mj_visi_compdata_req implements Imahjong_mj_visi_compdata_req {

    /**
     * Constructs a new mahjong_mj_visi_compdata_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_visi_compdata_req);

    /**
     * Creates a new mahjong_mj_visi_compdata_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_visi_compdata_req instance
     */
    public static create(properties?: Imahjong_mj_visi_compdata_req): mahjong_mj_visi_compdata_req;

    /**
     * Encodes the specified mahjong_mj_visi_compdata_req message. Does not implicitly {@link mahjong_mj_visi_compdata_req.verify|verify} messages.
     * @param message mahjong_mj_visi_compdata_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_visi_compdata_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_visi_compdata_req message, length delimited. Does not implicitly {@link mahjong_mj_visi_compdata_req.verify|verify} messages.
     * @param message mahjong_mj_visi_compdata_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_visi_compdata_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_visi_compdata_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_visi_compdata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_visi_compdata_req;

    /**
     * Decodes a mahjong_mj_visi_compdata_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_visi_compdata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_visi_compdata_req;

    /**
     * Verifies a mahjong_mj_visi_compdata_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_visi_compdata_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_visi_compdata_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_visi_compdata_req;

    /**
     * Creates a plain object from a mahjong_mj_visi_compdata_req message. Also converts values to other types if specified.
     * @param message mahjong_mj_visi_compdata_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_visi_compdata_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_visi_compdata_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_fan_data_v2_2_0. */
export interface Imahjong_fan_data_v2_2_0 {

    /** mahjong_fan_data_v2_2_0 cChairId */
    cChairId: number;

    /** mahjong_fan_data_v2_2_0 nScore */
    nScore: number;

    /** mahjong_fan_data_v2_2_0 cType */
    cType: number;

    /** mahjong_fan_data_v2_2_0 nIndex */
    nIndex: number;
}

/** Represents a mahjong_fan_data_v2_2_0. */
export class mahjong_fan_data_v2_2_0 implements Imahjong_fan_data_v2_2_0 {

    /**
     * Constructs a new mahjong_fan_data_v2_2_0.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_fan_data_v2_2_0);

    /** mahjong_fan_data_v2_2_0 cChairId. */
    public cChairId: number;

    /** mahjong_fan_data_v2_2_0 nScore. */
    public nScore: number;

    /** mahjong_fan_data_v2_2_0 cType. */
    public cType: number;

    /** mahjong_fan_data_v2_2_0 nIndex. */
    public nIndex: number;

    /**
     * Creates a new mahjong_fan_data_v2_2_0 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_fan_data_v2_2_0 instance
     */
    public static create(properties?: Imahjong_fan_data_v2_2_0): mahjong_fan_data_v2_2_0;

    /**
     * Encodes the specified mahjong_fan_data_v2_2_0 message. Does not implicitly {@link mahjong_fan_data_v2_2_0.verify|verify} messages.
     * @param message mahjong_fan_data_v2_2_0 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_fan_data_v2_2_0, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_fan_data_v2_2_0 message, length delimited. Does not implicitly {@link mahjong_fan_data_v2_2_0.verify|verify} messages.
     * @param message mahjong_fan_data_v2_2_0 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_fan_data_v2_2_0, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_fan_data_v2_2_0 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_fan_data_v2_2_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_fan_data_v2_2_0;

    /**
     * Decodes a mahjong_fan_data_v2_2_0 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_fan_data_v2_2_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_fan_data_v2_2_0;

    /**
     * Verifies a mahjong_fan_data_v2_2_0 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_fan_data_v2_2_0 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_fan_data_v2_2_0
     */
    public static fromObject(object: { [k: string]: any }): mahjong_fan_data_v2_2_0;

    /**
     * Creates a plain object from a mahjong_fan_data_v2_2_0 message. Also converts values to other types if specified.
     * @param message mahjong_fan_data_v2_2_0
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_fan_data_v2_2_0, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_fan_data_v2_2_0 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_gc_get_redpackets_88yuan_award_ack. */
export interface Imahjong_gc_get_redpackets_88yuan_award_ack {

    /** mahjong_gc_get_redpackets_88yuan_award_ack ret */
    ret: number;

    /** mahjong_gc_get_redpackets_88yuan_award_ack curRounds */
    curRounds: number;

    /** mahjong_gc_get_redpackets_88yuan_award_ack limitRounds */
    limitRounds: number;

    /** mahjong_gc_get_redpackets_88yuan_award_ack nAmount */
    nAmount: number;

    /** mahjong_gc_get_redpackets_88yuan_award_ack cItemtype */
    cItemtype: number;

    /** mahjong_gc_get_redpackets_88yuan_award_ack taskId */
    taskId: number;
}

/** Represents a mahjong_gc_get_redpackets_88yuan_award_ack. */
export class mahjong_gc_get_redpackets_88yuan_award_ack implements Imahjong_gc_get_redpackets_88yuan_award_ack {

    /**
     * Constructs a new mahjong_gc_get_redpackets_88yuan_award_ack.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_gc_get_redpackets_88yuan_award_ack);

    /** mahjong_gc_get_redpackets_88yuan_award_ack ret. */
    public ret: number;

    /** mahjong_gc_get_redpackets_88yuan_award_ack curRounds. */
    public curRounds: number;

    /** mahjong_gc_get_redpackets_88yuan_award_ack limitRounds. */
    public limitRounds: number;

    /** mahjong_gc_get_redpackets_88yuan_award_ack nAmount. */
    public nAmount: number;

    /** mahjong_gc_get_redpackets_88yuan_award_ack cItemtype. */
    public cItemtype: number;

    /** mahjong_gc_get_redpackets_88yuan_award_ack taskId. */
    public taskId: number;

    /**
     * Creates a new mahjong_gc_get_redpackets_88yuan_award_ack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_gc_get_redpackets_88yuan_award_ack instance
     */
    public static create(properties?: Imahjong_gc_get_redpackets_88yuan_award_ack): mahjong_gc_get_redpackets_88yuan_award_ack;

    /**
     * Encodes the specified mahjong_gc_get_redpackets_88yuan_award_ack message. Does not implicitly {@link mahjong_gc_get_redpackets_88yuan_award_ack.verify|verify} messages.
     * @param message mahjong_gc_get_redpackets_88yuan_award_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_gc_get_redpackets_88yuan_award_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_gc_get_redpackets_88yuan_award_ack message, length delimited. Does not implicitly {@link mahjong_gc_get_redpackets_88yuan_award_ack.verify|verify} messages.
     * @param message mahjong_gc_get_redpackets_88yuan_award_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_gc_get_redpackets_88yuan_award_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_gc_get_redpackets_88yuan_award_ack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_gc_get_redpackets_88yuan_award_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_gc_get_redpackets_88yuan_award_ack;

    /**
     * Decodes a mahjong_gc_get_redpackets_88yuan_award_ack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_gc_get_redpackets_88yuan_award_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_gc_get_redpackets_88yuan_award_ack;

    /**
     * Verifies a mahjong_gc_get_redpackets_88yuan_award_ack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_gc_get_redpackets_88yuan_award_ack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_gc_get_redpackets_88yuan_award_ack
     */
    public static fromObject(object: { [k: string]: any }): mahjong_gc_get_redpackets_88yuan_award_ack;

    /**
     * Creates a plain object from a mahjong_gc_get_redpackets_88yuan_award_ack message. Also converts values to other types if specified.
     * @param message mahjong_gc_get_redpackets_88yuan_award_ack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_gc_get_redpackets_88yuan_award_ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_gc_get_redpackets_88yuan_award_ack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_gang_score_not. */
export interface Imahjong_mj_gang_score_not {

    /** mahjong_mj_gang_score_not chairId */
    chairId: number;

    /** mahjong_mj_gang_score_not type */
    type: number;

    /** mahjong_mj_gang_score_not score */
    score: number;
}

/** Represents a mahjong_mj_gang_score_not. */
export class mahjong_mj_gang_score_not implements Imahjong_mj_gang_score_not {

    /**
     * Constructs a new mahjong_mj_gang_score_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_gang_score_not);

    /** mahjong_mj_gang_score_not chairId. */
    public chairId: number;

    /** mahjong_mj_gang_score_not type. */
    public type: number;

    /** mahjong_mj_gang_score_not score. */
    public score: number;

    /**
     * Creates a new mahjong_mj_gang_score_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_gang_score_not instance
     */
    public static create(properties?: Imahjong_mj_gang_score_not): mahjong_mj_gang_score_not;

    /**
     * Encodes the specified mahjong_mj_gang_score_not message. Does not implicitly {@link mahjong_mj_gang_score_not.verify|verify} messages.
     * @param message mahjong_mj_gang_score_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_gang_score_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_gang_score_not message, length delimited. Does not implicitly {@link mahjong_mj_gang_score_not.verify|verify} messages.
     * @param message mahjong_mj_gang_score_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_gang_score_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_gang_score_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_gang_score_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_gang_score_not;

    /**
     * Decodes a mahjong_mj_gang_score_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_gang_score_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_gang_score_not;

    /**
     * Verifies a mahjong_mj_gang_score_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_gang_score_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_gang_score_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_gang_score_not;

    /**
     * Creates a plain object from a mahjong_mj_gang_score_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_gang_score_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_gang_score_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_gang_score_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_pause_game_not. */
export interface Imahjong_mj_pause_game_not {

    /** mahjong_mj_pause_game_not nFlag */
    nFlag: number;

    /** mahjong_mj_pause_game_not nWaitTime */
    nWaitTime: number;

    /** mahjong_mj_pause_game_not nLeftTime */
    nLeftTime: number;

    /** mahjong_mj_pause_game_not cChairId */
    cChairId: number;

    /** mahjong_mj_pause_game_not sNickName */
    sNickName: string;
}

/** Represents a mahjong_mj_pause_game_not. */
export class mahjong_mj_pause_game_not implements Imahjong_mj_pause_game_not {

    /**
     * Constructs a new mahjong_mj_pause_game_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_pause_game_not);

    /** mahjong_mj_pause_game_not nFlag. */
    public nFlag: number;

    /** mahjong_mj_pause_game_not nWaitTime. */
    public nWaitTime: number;

    /** mahjong_mj_pause_game_not nLeftTime. */
    public nLeftTime: number;

    /** mahjong_mj_pause_game_not cChairId. */
    public cChairId: number;

    /** mahjong_mj_pause_game_not sNickName. */
    public sNickName: string;

    /**
     * Creates a new mahjong_mj_pause_game_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_pause_game_not instance
     */
    public static create(properties?: Imahjong_mj_pause_game_not): mahjong_mj_pause_game_not;

    /**
     * Encodes the specified mahjong_mj_pause_game_not message. Does not implicitly {@link mahjong_mj_pause_game_not.verify|verify} messages.
     * @param message mahjong_mj_pause_game_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_pause_game_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_pause_game_not message, length delimited. Does not implicitly {@link mahjong_mj_pause_game_not.verify|verify} messages.
     * @param message mahjong_mj_pause_game_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_pause_game_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_pause_game_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_pause_game_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_pause_game_not;

    /**
     * Decodes a mahjong_mj_pause_game_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_pause_game_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_pause_game_not;

    /**
     * Verifies a mahjong_mj_pause_game_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_pause_game_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_pause_game_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_pause_game_not;

    /**
     * Creates a plain object from a mahjong_mj_pause_game_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_pause_game_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_pause_game_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_pause_game_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_dingque_not. */
export interface Imahjong_mj_dingque_not {

    /** mahjong_mj_dingque_not cChairid */
    cChairid: number;

    /** mahjong_mj_dingque_not cCardType */
    cCardType: number;

    /** mahjong_mj_dingque_not cResend */
    cResend: number;
}

/** Represents a mahjong_mj_dingque_not. */
export class mahjong_mj_dingque_not implements Imahjong_mj_dingque_not {

    /**
     * Constructs a new mahjong_mj_dingque_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_dingque_not);

    /** mahjong_mj_dingque_not cChairid. */
    public cChairid: number;

    /** mahjong_mj_dingque_not cCardType. */
    public cCardType: number;

    /** mahjong_mj_dingque_not cResend. */
    public cResend: number;

    /**
     * Creates a new mahjong_mj_dingque_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_dingque_not instance
     */
    public static create(properties?: Imahjong_mj_dingque_not): mahjong_mj_dingque_not;

    /**
     * Encodes the specified mahjong_mj_dingque_not message. Does not implicitly {@link mahjong_mj_dingque_not.verify|verify} messages.
     * @param message mahjong_mj_dingque_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_dingque_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_dingque_not message, length delimited. Does not implicitly {@link mahjong_mj_dingque_not.verify|verify} messages.
     * @param message mahjong_mj_dingque_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_dingque_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_dingque_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_dingque_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_dingque_not;

    /**
     * Decodes a mahjong_mj_dingque_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_dingque_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_dingque_not;

    /**
     * Verifies a mahjong_mj_dingque_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_dingque_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_dingque_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_dingque_not;

    /**
     * Creates a plain object from a mahjong_mj_dingque_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_dingque_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_dingque_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_dingque_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_changecard_not. */
export interface Imahjong_mj_changecard_not {

    /** mahjong_mj_changecard_not cChairID */
    cChairID: number;

    /** mahjong_mj_changecard_not cHuPai */
    cHuPai: number;

    /** mahjong_mj_changecard_not cCurrCards */
    cCurrCards: number;

    /** mahjong_mj_changecard_not vecDisplayCards */
    vecDisplayCards?: (number[]|null);

    /** mahjong_mj_changecard_not vecLeftCards */
    vecLeftCards?: (number[]|null);

    /** mahjong_mj_changecard_not vecHandCards */
    vecHandCards?: (number[]|null);
}

/** Represents a mahjong_mj_changecard_not. */
export class mahjong_mj_changecard_not implements Imahjong_mj_changecard_not {

    /**
     * Constructs a new mahjong_mj_changecard_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_changecard_not);

    /** mahjong_mj_changecard_not cChairID. */
    public cChairID: number;

    /** mahjong_mj_changecard_not cHuPai. */
    public cHuPai: number;

    /** mahjong_mj_changecard_not cCurrCards. */
    public cCurrCards: number;

    /** mahjong_mj_changecard_not vecDisplayCards. */
    public vecDisplayCards: number[];

    /** mahjong_mj_changecard_not vecLeftCards. */
    public vecLeftCards: number[];

    /** mahjong_mj_changecard_not vecHandCards. */
    public vecHandCards: number[];

    /**
     * Creates a new mahjong_mj_changecard_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_changecard_not instance
     */
    public static create(properties?: Imahjong_mj_changecard_not): mahjong_mj_changecard_not;

    /**
     * Encodes the specified mahjong_mj_changecard_not message. Does not implicitly {@link mahjong_mj_changecard_not.verify|verify} messages.
     * @param message mahjong_mj_changecard_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_changecard_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_changecard_not message, length delimited. Does not implicitly {@link mahjong_mj_changecard_not.verify|verify} messages.
     * @param message mahjong_mj_changecard_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_changecard_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_changecard_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_changecard_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_changecard_not;

    /**
     * Decodes a mahjong_mj_changecard_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_changecard_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_changecard_not;

    /**
     * Verifies a mahjong_mj_changecard_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_changecard_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_changecard_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_changecard_not;

    /**
     * Creates a plain object from a mahjong_mj_changecard_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_changecard_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_changecard_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_changecard_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_get_mj_private_room_result_ack. */
export interface Imahjong_get_mj_private_room_result_ack {

    /** mahjong_get_mj_private_room_result_ack vecGameStatiscs */
    vecGameStatiscs?: (Imahjong_GameStatisc[]|null);
}

/** Represents a mahjong_get_mj_private_room_result_ack. */
export class mahjong_get_mj_private_room_result_ack implements Imahjong_get_mj_private_room_result_ack {

    /**
     * Constructs a new mahjong_get_mj_private_room_result_ack.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_get_mj_private_room_result_ack);

    /** mahjong_get_mj_private_room_result_ack vecGameStatiscs. */
    public vecGameStatiscs: Imahjong_GameStatisc[];

    /**
     * Creates a new mahjong_get_mj_private_room_result_ack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_get_mj_private_room_result_ack instance
     */
    public static create(properties?: Imahjong_get_mj_private_room_result_ack): mahjong_get_mj_private_room_result_ack;

    /**
     * Encodes the specified mahjong_get_mj_private_room_result_ack message. Does not implicitly {@link mahjong_get_mj_private_room_result_ack.verify|verify} messages.
     * @param message mahjong_get_mj_private_room_result_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_get_mj_private_room_result_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_get_mj_private_room_result_ack message, length delimited. Does not implicitly {@link mahjong_get_mj_private_room_result_ack.verify|verify} messages.
     * @param message mahjong_get_mj_private_room_result_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_get_mj_private_room_result_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_get_mj_private_room_result_ack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_get_mj_private_room_result_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_get_mj_private_room_result_ack;

    /**
     * Decodes a mahjong_get_mj_private_room_result_ack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_get_mj_private_room_result_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_get_mj_private_room_result_ack;

    /**
     * Verifies a mahjong_get_mj_private_room_result_ack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_get_mj_private_room_result_ack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_get_mj_private_room_result_ack
     */
    public static fromObject(object: { [k: string]: any }): mahjong_get_mj_private_room_result_ack;

    /**
     * Creates a plain object from a mahjong_get_mj_private_room_result_ack message. Also converts values to other types if specified.
     * @param message mahjong_get_mj_private_room_result_ack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_get_mj_private_room_result_ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_get_mj_private_room_result_ack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_gameresult_not. */
export interface Imahjong_mj_gameresult_not {

    /** mahjong_mj_gameresult_not vecGameResult */
    vecGameResult?: (Imahjong_st_gameresult[]|null);
}

/** Represents a mahjong_mj_gameresult_not. */
export class mahjong_mj_gameresult_not implements Imahjong_mj_gameresult_not {

    /**
     * Constructs a new mahjong_mj_gameresult_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_gameresult_not);

    /** mahjong_mj_gameresult_not vecGameResult. */
    public vecGameResult: Imahjong_st_gameresult[];

    /**
     * Creates a new mahjong_mj_gameresult_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_gameresult_not instance
     */
    public static create(properties?: Imahjong_mj_gameresult_not): mahjong_mj_gameresult_not;

    /**
     * Encodes the specified mahjong_mj_gameresult_not message. Does not implicitly {@link mahjong_mj_gameresult_not.verify|verify} messages.
     * @param message mahjong_mj_gameresult_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_gameresult_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_gameresult_not message, length delimited. Does not implicitly {@link mahjong_mj_gameresult_not.verify|verify} messages.
     * @param message mahjong_mj_gameresult_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_gameresult_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_gameresult_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_gameresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_gameresult_not;

    /**
     * Decodes a mahjong_mj_gameresult_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_gameresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_gameresult_not;

    /**
     * Verifies a mahjong_mj_gameresult_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_gameresult_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_gameresult_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_gameresult_not;

    /**
     * Creates a plain object from a mahjong_mj_gameresult_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_gameresult_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_gameresult_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_gameresult_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_Svr_Auto_Not. */
export interface Imahjong_Svr_Auto_Not {

    /** mahjong_Svr_Auto_Not cChairID */
    cChairID: number;

    /** mahjong_Svr_Auto_Not cAuto */
    cAuto: number;

    /** mahjong_Svr_Auto_Not iAutoType */
    iAutoType: number;
}

/** Represents a mahjong_Svr_Auto_Not. */
export class mahjong_Svr_Auto_Not implements Imahjong_Svr_Auto_Not {

    /**
     * Constructs a new mahjong_Svr_Auto_Not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_Svr_Auto_Not);

    /** mahjong_Svr_Auto_Not cChairID. */
    public cChairID: number;

    /** mahjong_Svr_Auto_Not cAuto. */
    public cAuto: number;

    /** mahjong_Svr_Auto_Not iAutoType. */
    public iAutoType: number;

    /**
     * Creates a new mahjong_Svr_Auto_Not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_Svr_Auto_Not instance
     */
    public static create(properties?: Imahjong_Svr_Auto_Not): mahjong_Svr_Auto_Not;

    /**
     * Encodes the specified mahjong_Svr_Auto_Not message. Does not implicitly {@link mahjong_Svr_Auto_Not.verify|verify} messages.
     * @param message mahjong_Svr_Auto_Not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_Svr_Auto_Not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_Svr_Auto_Not message, length delimited. Does not implicitly {@link mahjong_Svr_Auto_Not.verify|verify} messages.
     * @param message mahjong_Svr_Auto_Not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_Svr_Auto_Not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_Svr_Auto_Not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_Svr_Auto_Not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_Svr_Auto_Not;

    /**
     * Decodes a mahjong_Svr_Auto_Not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_Svr_Auto_Not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_Svr_Auto_Not;

    /**
     * Verifies a mahjong_Svr_Auto_Not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_Svr_Auto_Not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_Svr_Auto_Not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_Svr_Auto_Not;

    /**
     * Creates a plain object from a mahjong_Svr_Auto_Not message. Also converts values to other types if specified.
     * @param message mahjong_Svr_Auto_Not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_Svr_Auto_Not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_Svr_Auto_Not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_hudouble_ack. */
export interface Imahjong_mj_hudouble_ack {

    /** mahjong_mj_hudouble_ack cDoubleStyle */
    cDoubleStyle: number;
}

/** Represents a mahjong_mj_hudouble_ack. */
export class mahjong_mj_hudouble_ack implements Imahjong_mj_hudouble_ack {

    /**
     * Constructs a new mahjong_mj_hudouble_ack.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_hudouble_ack);

    /** mahjong_mj_hudouble_ack cDoubleStyle. */
    public cDoubleStyle: number;

    /**
     * Creates a new mahjong_mj_hudouble_ack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_hudouble_ack instance
     */
    public static create(properties?: Imahjong_mj_hudouble_ack): mahjong_mj_hudouble_ack;

    /**
     * Encodes the specified mahjong_mj_hudouble_ack message. Does not implicitly {@link mahjong_mj_hudouble_ack.verify|verify} messages.
     * @param message mahjong_mj_hudouble_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_hudouble_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_hudouble_ack message, length delimited. Does not implicitly {@link mahjong_mj_hudouble_ack.verify|verify} messages.
     * @param message mahjong_mj_hudouble_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_hudouble_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_hudouble_ack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_hudouble_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_hudouble_ack;

    /**
     * Decodes a mahjong_mj_hudouble_ack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_hudouble_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_hudouble_ack;

    /**
     * Verifies a mahjong_mj_hudouble_ack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_hudouble_ack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_hudouble_ack
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_hudouble_ack;

    /**
     * Creates a plain object from a mahjong_mj_hudouble_ack message. Also converts values to other types if specified.
     * @param message mahjong_mj_hudouble_ack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_hudouble_ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_hudouble_ack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_operate_not. */
export interface Imahjong_mj_operate_not {

    /** mahjong_mj_operate_not cChairID */
    cChairID: number;

    /** mahjong_mj_operate_not nOpcode */
    nOpcode: number;

    /** mahjong_mj_operate_not cCard */
    cCard: number;

    /** mahjong_mj_operate_not cWallCardNum */
    cWallCardNum: number;
}

/** Represents a mahjong_mj_operate_not. */
export class mahjong_mj_operate_not implements Imahjong_mj_operate_not {

    /**
     * Constructs a new mahjong_mj_operate_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_operate_not);

    /** mahjong_mj_operate_not cChairID. */
    public cChairID: number;

    /** mahjong_mj_operate_not nOpcode. */
    public nOpcode: number;

    /** mahjong_mj_operate_not cCard. */
    public cCard: number;

    /** mahjong_mj_operate_not cWallCardNum. */
    public cWallCardNum: number;

    /**
     * Creates a new mahjong_mj_operate_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_operate_not instance
     */
    public static create(properties?: Imahjong_mj_operate_not): mahjong_mj_operate_not;

    /**
     * Encodes the specified mahjong_mj_operate_not message. Does not implicitly {@link mahjong_mj_operate_not.verify|verify} messages.
     * @param message mahjong_mj_operate_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_operate_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_operate_not message, length delimited. Does not implicitly {@link mahjong_mj_operate_not.verify|verify} messages.
     * @param message mahjong_mj_operate_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_operate_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_operate_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_operate_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_operate_not;

    /**
     * Decodes a mahjong_mj_operate_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_operate_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_operate_not;

    /**
     * Verifies a mahjong_mj_operate_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_operate_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_operate_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_operate_not;

    /**
     * Creates a plain object from a mahjong_mj_operate_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_operate_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_operate_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_operate_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_gc_clienttimer_not. */
export interface Imahjong_gc_clienttimer_not {

    /** mahjong_gc_clienttimer_not cChairId */
    cChairId: number;

    /** mahjong_gc_clienttimer_not cNextChairId */
    cNextChairId: number;

    /** mahjong_gc_clienttimer_not nPeriod */
    nPeriod: number;

    /** mahjong_gc_clienttimer_not nOpcode */
    nOpcode: number;
}

/** Represents a mahjong_gc_clienttimer_not. */
export class mahjong_gc_clienttimer_not implements Imahjong_gc_clienttimer_not {

    /**
     * Constructs a new mahjong_gc_clienttimer_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_gc_clienttimer_not);

    /** mahjong_gc_clienttimer_not cChairId. */
    public cChairId: number;

    /** mahjong_gc_clienttimer_not cNextChairId. */
    public cNextChairId: number;

    /** mahjong_gc_clienttimer_not nPeriod. */
    public nPeriod: number;

    /** mahjong_gc_clienttimer_not nOpcode. */
    public nOpcode: number;

    /**
     * Creates a new mahjong_gc_clienttimer_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_gc_clienttimer_not instance
     */
    public static create(properties?: Imahjong_gc_clienttimer_not): mahjong_gc_clienttimer_not;

    /**
     * Encodes the specified mahjong_gc_clienttimer_not message. Does not implicitly {@link mahjong_gc_clienttimer_not.verify|verify} messages.
     * @param message mahjong_gc_clienttimer_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_gc_clienttimer_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_gc_clienttimer_not message, length delimited. Does not implicitly {@link mahjong_gc_clienttimer_not.verify|verify} messages.
     * @param message mahjong_gc_clienttimer_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_gc_clienttimer_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_gc_clienttimer_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_gc_clienttimer_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_gc_clienttimer_not;

    /**
     * Decodes a mahjong_gc_clienttimer_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_gc_clienttimer_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_gc_clienttimer_not;

    /**
     * Verifies a mahjong_gc_clienttimer_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_gc_clienttimer_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_gc_clienttimer_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_gc_clienttimer_not;

    /**
     * Creates a plain object from a mahjong_gc_clienttimer_not message. Also converts values to other types if specified.
     * @param message mahjong_gc_clienttimer_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_gc_clienttimer_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_gc_clienttimer_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_Cli_TingType_req. */
export interface Imahjong_Cli_TingType_req {

    /** mahjong_Cli_TingType_req cAutoGang */
    cAutoGang: number;

    /** mahjong_Cli_TingType_req cZimoOnly */
    cZimoOnly: number;
}

/** Represents a mahjong_Cli_TingType_req. */
export class mahjong_Cli_TingType_req implements Imahjong_Cli_TingType_req {

    /**
     * Constructs a new mahjong_Cli_TingType_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_Cli_TingType_req);

    /** mahjong_Cli_TingType_req cAutoGang. */
    public cAutoGang: number;

    /** mahjong_Cli_TingType_req cZimoOnly. */
    public cZimoOnly: number;

    /**
     * Creates a new mahjong_Cli_TingType_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_Cli_TingType_req instance
     */
    public static create(properties?: Imahjong_Cli_TingType_req): mahjong_Cli_TingType_req;

    /**
     * Encodes the specified mahjong_Cli_TingType_req message. Does not implicitly {@link mahjong_Cli_TingType_req.verify|verify} messages.
     * @param message mahjong_Cli_TingType_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_Cli_TingType_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_Cli_TingType_req message, length delimited. Does not implicitly {@link mahjong_Cli_TingType_req.verify|verify} messages.
     * @param message mahjong_Cli_TingType_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_Cli_TingType_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_Cli_TingType_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_Cli_TingType_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_Cli_TingType_req;

    /**
     * Decodes a mahjong_Cli_TingType_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_Cli_TingType_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_Cli_TingType_req;

    /**
     * Verifies a mahjong_Cli_TingType_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_Cli_TingType_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_Cli_TingType_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_Cli_TingType_req;

    /**
     * Creates a plain object from a mahjong_Cli_TingType_req message. Also converts values to other types if specified.
     * @param message mahjong_Cli_TingType_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_Cli_TingType_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_Cli_TingType_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_need_charge_req. */
export interface Imahjong_mj_need_charge_req {

    /** mahjong_mj_need_charge_req nTimer */
    nTimer: number;

    /** mahjong_mj_need_charge_req nType */
    nType: number;

    /** mahjong_mj_need_charge_req sSerialID */
    sSerialID: number;
}

/** Represents a mahjong_mj_need_charge_req. */
export class mahjong_mj_need_charge_req implements Imahjong_mj_need_charge_req {

    /**
     * Constructs a new mahjong_mj_need_charge_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_need_charge_req);

    /** mahjong_mj_need_charge_req nTimer. */
    public nTimer: number;

    /** mahjong_mj_need_charge_req nType. */
    public nType: number;

    /** mahjong_mj_need_charge_req sSerialID. */
    public sSerialID: number;

    /**
     * Creates a new mahjong_mj_need_charge_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_need_charge_req instance
     */
    public static create(properties?: Imahjong_mj_need_charge_req): mahjong_mj_need_charge_req;

    /**
     * Encodes the specified mahjong_mj_need_charge_req message. Does not implicitly {@link mahjong_mj_need_charge_req.verify|verify} messages.
     * @param message mahjong_mj_need_charge_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_need_charge_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_need_charge_req message, length delimited. Does not implicitly {@link mahjong_mj_need_charge_req.verify|verify} messages.
     * @param message mahjong_mj_need_charge_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_need_charge_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_need_charge_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_need_charge_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_need_charge_req;

    /**
     * Decodes a mahjong_mj_need_charge_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_need_charge_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_need_charge_req;

    /**
     * Verifies a mahjong_mj_need_charge_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_need_charge_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_need_charge_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_need_charge_req;

    /**
     * Creates a plain object from a mahjong_mj_need_charge_req message. Also converts values to other types if specified.
     * @param message mahjong_mj_need_charge_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_need_charge_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_need_charge_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_hudouble_not. */
export interface Imahjong_mj_hudouble_not {

    /** mahjong_mj_hudouble_not cChairID */
    cChairID: number;

    /** mahjong_mj_hudouble_not sDoubleNum */
    sDoubleNum: number;
}

/** Represents a mahjong_mj_hudouble_not. */
export class mahjong_mj_hudouble_not implements Imahjong_mj_hudouble_not {

    /**
     * Constructs a new mahjong_mj_hudouble_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_hudouble_not);

    /** mahjong_mj_hudouble_not cChairID. */
    public cChairID: number;

    /** mahjong_mj_hudouble_not sDoubleNum. */
    public sDoubleNum: number;

    /**
     * Creates a new mahjong_mj_hudouble_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_hudouble_not instance
     */
    public static create(properties?: Imahjong_mj_hudouble_not): mahjong_mj_hudouble_not;

    /**
     * Encodes the specified mahjong_mj_hudouble_not message. Does not implicitly {@link mahjong_mj_hudouble_not.verify|verify} messages.
     * @param message mahjong_mj_hudouble_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_hudouble_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_hudouble_not message, length delimited. Does not implicitly {@link mahjong_mj_hudouble_not.verify|verify} messages.
     * @param message mahjong_mj_hudouble_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_hudouble_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_hudouble_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_hudouble_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_hudouble_not;

    /**
     * Decodes a mahjong_mj_hudouble_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_hudouble_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_hudouble_not;

    /**
     * Verifies a mahjong_mj_hudouble_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_hudouble_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_hudouble_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_hudouble_not;

    /**
     * Creates a plain object from a mahjong_mj_hudouble_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_hudouble_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_hudouble_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_hudouble_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_gc_update_player_tokenmoney_not. */
export interface Imahjong_gc_update_player_tokenmoney_not {

    /** mahjong_gc_update_player_tokenmoney_not plyChairid */
    plyChairid: number;

    /** mahjong_gc_update_player_tokenmoney_not itemInfo */
    itemInfo?: (Imahjong_player_itemInfo[]|null);
}

/** Represents a mahjong_gc_update_player_tokenmoney_not. */
export class mahjong_gc_update_player_tokenmoney_not implements Imahjong_gc_update_player_tokenmoney_not {

    /**
     * Constructs a new mahjong_gc_update_player_tokenmoney_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_gc_update_player_tokenmoney_not);

    /** mahjong_gc_update_player_tokenmoney_not plyChairid. */
    public plyChairid: number;

    /** mahjong_gc_update_player_tokenmoney_not itemInfo. */
    public itemInfo: Imahjong_player_itemInfo[];

    /**
     * Creates a new mahjong_gc_update_player_tokenmoney_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_gc_update_player_tokenmoney_not instance
     */
    public static create(properties?: Imahjong_gc_update_player_tokenmoney_not): mahjong_gc_update_player_tokenmoney_not;

    /**
     * Encodes the specified mahjong_gc_update_player_tokenmoney_not message. Does not implicitly {@link mahjong_gc_update_player_tokenmoney_not.verify|verify} messages.
     * @param message mahjong_gc_update_player_tokenmoney_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_gc_update_player_tokenmoney_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_gc_update_player_tokenmoney_not message, length delimited. Does not implicitly {@link mahjong_gc_update_player_tokenmoney_not.verify|verify} messages.
     * @param message mahjong_gc_update_player_tokenmoney_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_gc_update_player_tokenmoney_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_gc_update_player_tokenmoney_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_gc_update_player_tokenmoney_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_gc_update_player_tokenmoney_not;

    /**
     * Decodes a mahjong_gc_update_player_tokenmoney_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_gc_update_player_tokenmoney_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_gc_update_player_tokenmoney_not;

    /**
     * Verifies a mahjong_gc_update_player_tokenmoney_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_gc_update_player_tokenmoney_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_gc_update_player_tokenmoney_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_gc_update_player_tokenmoney_not;

    /**
     * Creates a plain object from a mahjong_gc_update_player_tokenmoney_not message. Also converts values to other types if specified.
     * @param message mahjong_gc_update_player_tokenmoney_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_gc_update_player_tokenmoney_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_gc_update_player_tokenmoney_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_svr_dizhu_not. */
export interface Imahjong_svr_dizhu_not {

    /** mahjong_svr_dizhu_not nDiZhu */
    nDiZhu: number;
}

/** Represents a mahjong_svr_dizhu_not. */
export class mahjong_svr_dizhu_not implements Imahjong_svr_dizhu_not {

    /**
     * Constructs a new mahjong_svr_dizhu_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_svr_dizhu_not);

    /** mahjong_svr_dizhu_not nDiZhu. */
    public nDiZhu: number;

    /**
     * Creates a new mahjong_svr_dizhu_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_svr_dizhu_not instance
     */
    public static create(properties?: Imahjong_svr_dizhu_not): mahjong_svr_dizhu_not;

    /**
     * Encodes the specified mahjong_svr_dizhu_not message. Does not implicitly {@link mahjong_svr_dizhu_not.verify|verify} messages.
     * @param message mahjong_svr_dizhu_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_svr_dizhu_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_svr_dizhu_not message, length delimited. Does not implicitly {@link mahjong_svr_dizhu_not.verify|verify} messages.
     * @param message mahjong_svr_dizhu_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_svr_dizhu_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_svr_dizhu_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_svr_dizhu_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_svr_dizhu_not;

    /**
     * Decodes a mahjong_svr_dizhu_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_svr_dizhu_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_svr_dizhu_not;

    /**
     * Verifies a mahjong_svr_dizhu_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_svr_dizhu_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_svr_dizhu_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_svr_dizhu_not;

    /**
     * Creates a plain object from a mahjong_svr_dizhu_not message. Also converts values to other types if specified.
     * @param message mahjong_svr_dizhu_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_svr_dizhu_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_svr_dizhu_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_svr_portrait_req. */
export interface Imahjong_svr_portrait_req {
}

/** Represents a mahjong_svr_portrait_req. */
export class mahjong_svr_portrait_req implements Imahjong_svr_portrait_req {

    /**
     * Constructs a new mahjong_svr_portrait_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_svr_portrait_req);

    /**
     * Creates a new mahjong_svr_portrait_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_svr_portrait_req instance
     */
    public static create(properties?: Imahjong_svr_portrait_req): mahjong_svr_portrait_req;

    /**
     * Encodes the specified mahjong_svr_portrait_req message. Does not implicitly {@link mahjong_svr_portrait_req.verify|verify} messages.
     * @param message mahjong_svr_portrait_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_svr_portrait_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_svr_portrait_req message, length delimited. Does not implicitly {@link mahjong_svr_portrait_req.verify|verify} messages.
     * @param message mahjong_svr_portrait_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_svr_portrait_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_svr_portrait_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_svr_portrait_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_svr_portrait_req;

    /**
     * Decodes a mahjong_svr_portrait_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_svr_portrait_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_svr_portrait_req;

    /**
     * Verifies a mahjong_svr_portrait_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_svr_portrait_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_svr_portrait_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_svr_portrait_req;

    /**
     * Creates a plain object from a mahjong_svr_portrait_req message. Also converts values to other types if specified.
     * @param message mahjong_svr_portrait_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_svr_portrait_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_svr_portrait_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_completedata_req. */
export interface Imahjong_mj_completedata_req {
}

/** Represents a mahjong_mj_completedata_req. */
export class mahjong_mj_completedata_req implements Imahjong_mj_completedata_req {

    /**
     * Constructs a new mahjong_mj_completedata_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_completedata_req);

    /**
     * Creates a new mahjong_mj_completedata_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_completedata_req instance
     */
    public static create(properties?: Imahjong_mj_completedata_req): mahjong_mj_completedata_req;

    /**
     * Encodes the specified mahjong_mj_completedata_req message. Does not implicitly {@link mahjong_mj_completedata_req.verify|verify} messages.
     * @param message mahjong_mj_completedata_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_completedata_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_completedata_req message, length delimited. Does not implicitly {@link mahjong_mj_completedata_req.verify|verify} messages.
     * @param message mahjong_mj_completedata_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_completedata_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_completedata_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_completedata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_completedata_req;

    /**
     * Decodes a mahjong_mj_completedata_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_completedata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_completedata_req;

    /**
     * Verifies a mahjong_mj_completedata_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_completedata_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_completedata_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_completedata_req;

    /**
     * Creates a plain object from a mahjong_mj_completedata_req message. Also converts values to other types if specified.
     * @param message mahjong_mj_completedata_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_completedata_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_completedata_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_svr_leave_enable_not. */
export interface Imahjong_svr_leave_enable_not {
}

/** Represents a mahjong_svr_leave_enable_not. */
export class mahjong_svr_leave_enable_not implements Imahjong_svr_leave_enable_not {

    /**
     * Constructs a new mahjong_svr_leave_enable_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_svr_leave_enable_not);

    /**
     * Creates a new mahjong_svr_leave_enable_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_svr_leave_enable_not instance
     */
    public static create(properties?: Imahjong_svr_leave_enable_not): mahjong_svr_leave_enable_not;

    /**
     * Encodes the specified mahjong_svr_leave_enable_not message. Does not implicitly {@link mahjong_svr_leave_enable_not.verify|verify} messages.
     * @param message mahjong_svr_leave_enable_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_svr_leave_enable_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_svr_leave_enable_not message, length delimited. Does not implicitly {@link mahjong_svr_leave_enable_not.verify|verify} messages.
     * @param message mahjong_svr_leave_enable_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_svr_leave_enable_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_svr_leave_enable_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_svr_leave_enable_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_svr_leave_enable_not;

    /**
     * Decodes a mahjong_svr_leave_enable_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_svr_leave_enable_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_svr_leave_enable_not;

    /**
     * Verifies a mahjong_svr_leave_enable_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_svr_leave_enable_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_svr_leave_enable_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_svr_leave_enable_not;

    /**
     * Creates a plain object from a mahjong_svr_leave_enable_not message. Also converts values to other types if specified.
     * @param message mahjong_svr_leave_enable_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_svr_leave_enable_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_svr_leave_enable_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_visi_compdata_not. */
export interface Imahjong_mj_visi_compdata_not {

    /** mahjong_mj_visi_compdata_not cBanker */
    cBanker: number;

    /** mahjong_mj_visi_compdata_not nLeftCards */
    nLeftCards: number;

    /** mahjong_mj_visi_compdata_not nDizhu */
    nDizhu: number;

    /** mahjong_mj_visi_compdata_not nTaifei */
    nTaifei: number;

    /** mahjong_mj_visi_compdata_not cCurrPly */
    cCurrPly: number;

    /** mahjong_mj_visi_compdata_not cPrioPly */
    cPrioPly: number;

    /** mahjong_mj_visi_compdata_not cAdminPly */
    cAdminPly: number;

    /** mahjong_mj_visi_compdata_not cInvitePly */
    cInvitePly: number;

    /** mahjong_mj_visi_compdata_not vecFakeScores */
    vecFakeScores?: ((number|Long)[]|null);

    /** mahjong_mj_visi_compdata_not vecPlyData */
    vecPlyData?: (Imahjong_mj_changecard_not[]|null);

    /** mahjong_mj_visi_compdata_not nParam1 */
    nParam1: number;

    /** mahjong_mj_visi_compdata_not nParam2 */
    nParam2: number;

    /** mahjong_mj_visi_compdata_not strParam1 */
    strParam1: string;

    /** mahjong_mj_visi_compdata_not strParam2 */
    strParam2: string;
}

/** Represents a mahjong_mj_visi_compdata_not. */
export class mahjong_mj_visi_compdata_not implements Imahjong_mj_visi_compdata_not {

    /**
     * Constructs a new mahjong_mj_visi_compdata_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_visi_compdata_not);

    /** mahjong_mj_visi_compdata_not cBanker. */
    public cBanker: number;

    /** mahjong_mj_visi_compdata_not nLeftCards. */
    public nLeftCards: number;

    /** mahjong_mj_visi_compdata_not nDizhu. */
    public nDizhu: number;

    /** mahjong_mj_visi_compdata_not nTaifei. */
    public nTaifei: number;

    /** mahjong_mj_visi_compdata_not cCurrPly. */
    public cCurrPly: number;

    /** mahjong_mj_visi_compdata_not cPrioPly. */
    public cPrioPly: number;

    /** mahjong_mj_visi_compdata_not cAdminPly. */
    public cAdminPly: number;

    /** mahjong_mj_visi_compdata_not cInvitePly. */
    public cInvitePly: number;

    /** mahjong_mj_visi_compdata_not vecFakeScores. */
    public vecFakeScores: (number|Long)[];

    /** mahjong_mj_visi_compdata_not vecPlyData. */
    public vecPlyData: Imahjong_mj_changecard_not[];

    /** mahjong_mj_visi_compdata_not nParam1. */
    public nParam1: number;

    /** mahjong_mj_visi_compdata_not nParam2. */
    public nParam2: number;

    /** mahjong_mj_visi_compdata_not strParam1. */
    public strParam1: string;

    /** mahjong_mj_visi_compdata_not strParam2. */
    public strParam2: string;

    /**
     * Creates a new mahjong_mj_visi_compdata_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_visi_compdata_not instance
     */
    public static create(properties?: Imahjong_mj_visi_compdata_not): mahjong_mj_visi_compdata_not;

    /**
     * Encodes the specified mahjong_mj_visi_compdata_not message. Does not implicitly {@link mahjong_mj_visi_compdata_not.verify|verify} messages.
     * @param message mahjong_mj_visi_compdata_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_visi_compdata_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_visi_compdata_not message, length delimited. Does not implicitly {@link mahjong_mj_visi_compdata_not.verify|verify} messages.
     * @param message mahjong_mj_visi_compdata_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_visi_compdata_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_visi_compdata_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_visi_compdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_visi_compdata_not;

    /**
     * Decodes a mahjong_mj_visi_compdata_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_visi_compdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_visi_compdata_not;

    /**
     * Verifies a mahjong_mj_visi_compdata_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_visi_compdata_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_visi_compdata_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_visi_compdata_not;

    /**
     * Creates a plain object from a mahjong_mj_visi_compdata_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_visi_compdata_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_visi_compdata_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_visi_compdata_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_svr_fake_score_not_v1_1_0. */
export interface Imahjong_svr_fake_score_not_v1_1_0 {

    /** mahjong_svr_fake_score_not_v1_1_0 scores */
    scores?: ((number|Long)[]|null);
}

/** Represents a mahjong_svr_fake_score_not_v1_1_0. */
export class mahjong_svr_fake_score_not_v1_1_0 implements Imahjong_svr_fake_score_not_v1_1_0 {

    /**
     * Constructs a new mahjong_svr_fake_score_not_v1_1_0.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_svr_fake_score_not_v1_1_0);

    /** mahjong_svr_fake_score_not_v1_1_0 scores. */
    public scores: (number|Long)[];

    /**
     * Creates a new mahjong_svr_fake_score_not_v1_1_0 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_svr_fake_score_not_v1_1_0 instance
     */
    public static create(properties?: Imahjong_svr_fake_score_not_v1_1_0): mahjong_svr_fake_score_not_v1_1_0;

    /**
     * Encodes the specified mahjong_svr_fake_score_not_v1_1_0 message. Does not implicitly {@link mahjong_svr_fake_score_not_v1_1_0.verify|verify} messages.
     * @param message mahjong_svr_fake_score_not_v1_1_0 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_svr_fake_score_not_v1_1_0, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_svr_fake_score_not_v1_1_0 message, length delimited. Does not implicitly {@link mahjong_svr_fake_score_not_v1_1_0.verify|verify} messages.
     * @param message mahjong_svr_fake_score_not_v1_1_0 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_svr_fake_score_not_v1_1_0, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_svr_fake_score_not_v1_1_0 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_svr_fake_score_not_v1_1_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_svr_fake_score_not_v1_1_0;

    /**
     * Decodes a mahjong_svr_fake_score_not_v1_1_0 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_svr_fake_score_not_v1_1_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_svr_fake_score_not_v1_1_0;

    /**
     * Verifies a mahjong_svr_fake_score_not_v1_1_0 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_svr_fake_score_not_v1_1_0 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_svr_fake_score_not_v1_1_0
     */
    public static fromObject(object: { [k: string]: any }): mahjong_svr_fake_score_not_v1_1_0;

    /**
     * Creates a plain object from a mahjong_svr_fake_score_not_v1_1_0 message. Also converts values to other types if specified.
     * @param message mahjong_svr_fake_score_not_v1_1_0
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_svr_fake_score_not_v1_1_0, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_svr_fake_score_not_v1_1_0 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_gameresult_not_v2_2_0. */
export interface Imahjong_mj_gameresult_not_v2_2_0 {

    /** mahjong_mj_gameresult_not_v2_2_0 vecGameResult */
    vecGameResult?: (Imahjong_st_gameresult_v2_2_0[]|null);
}

/** Represents a mahjong_mj_gameresult_not_v2_2_0. */
export class mahjong_mj_gameresult_not_v2_2_0 implements Imahjong_mj_gameresult_not_v2_2_0 {

    /**
     * Constructs a new mahjong_mj_gameresult_not_v2_2_0.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_gameresult_not_v2_2_0);

    /** mahjong_mj_gameresult_not_v2_2_0 vecGameResult. */
    public vecGameResult: Imahjong_st_gameresult_v2_2_0[];

    /**
     * Creates a new mahjong_mj_gameresult_not_v2_2_0 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_gameresult_not_v2_2_0 instance
     */
    public static create(properties?: Imahjong_mj_gameresult_not_v2_2_0): mahjong_mj_gameresult_not_v2_2_0;

    /**
     * Encodes the specified mahjong_mj_gameresult_not_v2_2_0 message. Does not implicitly {@link mahjong_mj_gameresult_not_v2_2_0.verify|verify} messages.
     * @param message mahjong_mj_gameresult_not_v2_2_0 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_gameresult_not_v2_2_0, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_gameresult_not_v2_2_0 message, length delimited. Does not implicitly {@link mahjong_mj_gameresult_not_v2_2_0.verify|verify} messages.
     * @param message mahjong_mj_gameresult_not_v2_2_0 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_gameresult_not_v2_2_0, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_gameresult_not_v2_2_0 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_gameresult_not_v2_2_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_gameresult_not_v2_2_0;

    /**
     * Decodes a mahjong_mj_gameresult_not_v2_2_0 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_gameresult_not_v2_2_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_gameresult_not_v2_2_0;

    /**
     * Verifies a mahjong_mj_gameresult_not_v2_2_0 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_gameresult_not_v2_2_0 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_gameresult_not_v2_2_0
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_gameresult_not_v2_2_0;

    /**
     * Creates a plain object from a mahjong_mj_gameresult_not_v2_2_0 message. Also converts values to other types if specified.
     * @param message mahjong_mj_gameresult_not_v2_2_0
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_gameresult_not_v2_2_0, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_gameresult_not_v2_2_0 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_dingque_rsp. */
export interface Imahjong_mj_dingque_rsp {

    /** mahjong_mj_dingque_rsp cCardType */
    cCardType: number;

    /** mahjong_mj_dingque_rsp sSerialID */
    sSerialID: number;
}

/** Represents a mahjong_mj_dingque_rsp. */
export class mahjong_mj_dingque_rsp implements Imahjong_mj_dingque_rsp {

    /**
     * Constructs a new mahjong_mj_dingque_rsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_dingque_rsp);

    /** mahjong_mj_dingque_rsp cCardType. */
    public cCardType: number;

    /** mahjong_mj_dingque_rsp sSerialID. */
    public sSerialID: number;

    /**
     * Creates a new mahjong_mj_dingque_rsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_dingque_rsp instance
     */
    public static create(properties?: Imahjong_mj_dingque_rsp): mahjong_mj_dingque_rsp;

    /**
     * Encodes the specified mahjong_mj_dingque_rsp message. Does not implicitly {@link mahjong_mj_dingque_rsp.verify|verify} messages.
     * @param message mahjong_mj_dingque_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_dingque_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_dingque_rsp message, length delimited. Does not implicitly {@link mahjong_mj_dingque_rsp.verify|verify} messages.
     * @param message mahjong_mj_dingque_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_dingque_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_dingque_rsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_dingque_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_dingque_rsp;

    /**
     * Decodes a mahjong_mj_dingque_rsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_dingque_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_dingque_rsp;

    /**
     * Verifies a mahjong_mj_dingque_rsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_dingque_rsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_dingque_rsp
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_dingque_rsp;

    /**
     * Creates a plain object from a mahjong_mj_dingque_rsp message. Also converts values to other types if specified.
     * @param message mahjong_mj_dingque_rsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_dingque_rsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_dingque_rsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_giveup_not. */
export interface Imahjong_mj_giveup_not {

    /** mahjong_mj_giveup_not vecChairid */
    vecChairid?: (number[]|null);
}

/** Represents a mahjong_mj_giveup_not. */
export class mahjong_mj_giveup_not implements Imahjong_mj_giveup_not {

    /**
     * Constructs a new mahjong_mj_giveup_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_giveup_not);

    /** mahjong_mj_giveup_not vecChairid. */
    public vecChairid: number[];

    /**
     * Creates a new mahjong_mj_giveup_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_giveup_not instance
     */
    public static create(properties?: Imahjong_mj_giveup_not): mahjong_mj_giveup_not;

    /**
     * Encodes the specified mahjong_mj_giveup_not message. Does not implicitly {@link mahjong_mj_giveup_not.verify|verify} messages.
     * @param message mahjong_mj_giveup_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_giveup_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_giveup_not message, length delimited. Does not implicitly {@link mahjong_mj_giveup_not.verify|verify} messages.
     * @param message mahjong_mj_giveup_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_giveup_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_giveup_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_giveup_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_giveup_not;

    /**
     * Decodes a mahjong_mj_giveup_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_giveup_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_giveup_not;

    /**
     * Verifies a mahjong_mj_giveup_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_giveup_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_giveup_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_giveup_not;

    /**
     * Creates a plain object from a mahjong_mj_giveup_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_giveup_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_giveup_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_giveup_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_svr_taifei_not. */
export interface Imahjong_svr_taifei_not {

    /** mahjong_svr_taifei_not nTaifei */
    nTaifei: number;
}

/** Represents a mahjong_svr_taifei_not. */
export class mahjong_svr_taifei_not implements Imahjong_svr_taifei_not {

    /**
     * Constructs a new mahjong_svr_taifei_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_svr_taifei_not);

    /** mahjong_svr_taifei_not nTaifei. */
    public nTaifei: number;

    /**
     * Creates a new mahjong_svr_taifei_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_svr_taifei_not instance
     */
    public static create(properties?: Imahjong_svr_taifei_not): mahjong_svr_taifei_not;

    /**
     * Encodes the specified mahjong_svr_taifei_not message. Does not implicitly {@link mahjong_svr_taifei_not.verify|verify} messages.
     * @param message mahjong_svr_taifei_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_svr_taifei_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_svr_taifei_not message, length delimited. Does not implicitly {@link mahjong_svr_taifei_not.verify|verify} messages.
     * @param message mahjong_svr_taifei_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_svr_taifei_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_svr_taifei_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_svr_taifei_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_svr_taifei_not;

    /**
     * Decodes a mahjong_svr_taifei_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_svr_taifei_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_svr_taifei_not;

    /**
     * Verifies a mahjong_svr_taifei_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_svr_taifei_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_svr_taifei_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_svr_taifei_not;

    /**
     * Creates a plain object from a mahjong_svr_taifei_not message. Also converts values to other types if specified.
     * @param message mahjong_svr_taifei_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_svr_taifei_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_svr_taifei_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_playcard_ack. */
export interface Imahjong_mj_playcard_ack {

    /** mahjong_mj_playcard_ack nOpcode */
    nOpcode: number;

    /** mahjong_mj_playcard_ack cOpCard */
    cOpCard: number;

    /** mahjong_mj_playcard_ack sSerialID */
    sSerialID: number;
}

/** Represents a mahjong_mj_playcard_ack. */
export class mahjong_mj_playcard_ack implements Imahjong_mj_playcard_ack {

    /**
     * Constructs a new mahjong_mj_playcard_ack.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_playcard_ack);

    /** mahjong_mj_playcard_ack nOpcode. */
    public nOpcode: number;

    /** mahjong_mj_playcard_ack cOpCard. */
    public cOpCard: number;

    /** mahjong_mj_playcard_ack sSerialID. */
    public sSerialID: number;

    /**
     * Creates a new mahjong_mj_playcard_ack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_playcard_ack instance
     */
    public static create(properties?: Imahjong_mj_playcard_ack): mahjong_mj_playcard_ack;

    /**
     * Encodes the specified mahjong_mj_playcard_ack message. Does not implicitly {@link mahjong_mj_playcard_ack.verify|verify} messages.
     * @param message mahjong_mj_playcard_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_playcard_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_playcard_ack message, length delimited. Does not implicitly {@link mahjong_mj_playcard_ack.verify|verify} messages.
     * @param message mahjong_mj_playcard_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_playcard_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_playcard_ack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_playcard_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_playcard_ack;

    /**
     * Decodes a mahjong_mj_playcard_ack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_playcard_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_playcard_ack;

    /**
     * Verifies a mahjong_mj_playcard_ack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_playcard_ack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_playcard_ack
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_playcard_ack;

    /**
     * Creates a plain object from a mahjong_mj_playcard_ack message. Also converts values to other types if specified.
     * @param message mahjong_mj_playcard_ack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_playcard_ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_playcard_ack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_need_charge_rsp. */
export interface Imahjong_mj_need_charge_rsp {

    /** mahjong_mj_need_charge_rsp cRet */
    cRet: number;

    /** mahjong_mj_need_charge_rsp sSerialID */
    sSerialID: number;
}

/** Represents a mahjong_mj_need_charge_rsp. */
export class mahjong_mj_need_charge_rsp implements Imahjong_mj_need_charge_rsp {

    /**
     * Constructs a new mahjong_mj_need_charge_rsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_need_charge_rsp);

    /** mahjong_mj_need_charge_rsp cRet. */
    public cRet: number;

    /** mahjong_mj_need_charge_rsp sSerialID. */
    public sSerialID: number;

    /**
     * Creates a new mahjong_mj_need_charge_rsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_need_charge_rsp instance
     */
    public static create(properties?: Imahjong_mj_need_charge_rsp): mahjong_mj_need_charge_rsp;

    /**
     * Encodes the specified mahjong_mj_need_charge_rsp message. Does not implicitly {@link mahjong_mj_need_charge_rsp.verify|verify} messages.
     * @param message mahjong_mj_need_charge_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_need_charge_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_need_charge_rsp message, length delimited. Does not implicitly {@link mahjong_mj_need_charge_rsp.verify|verify} messages.
     * @param message mahjong_mj_need_charge_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_need_charge_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_need_charge_rsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_need_charge_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_need_charge_rsp;

    /**
     * Decodes a mahjong_mj_need_charge_rsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_need_charge_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_need_charge_rsp;

    /**
     * Verifies a mahjong_mj_need_charge_rsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_need_charge_rsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_need_charge_rsp
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_need_charge_rsp;

    /**
     * Creates a plain object from a mahjong_mj_need_charge_rsp message. Also converts values to other types if specified.
     * @param message mahjong_mj_need_charge_rsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_need_charge_rsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_need_charge_rsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_svr_choose_ratio_not. */
export interface Imahjong_svr_choose_ratio_not {

    /** mahjong_svr_choose_ratio_not cChairID */
    cChairID: number;

    /** mahjong_svr_choose_ratio_not nRatio */
    nRatio: number;

    /** mahjong_svr_choose_ratio_not nCurRatio */
    nCurRatio: number;
}

/** Represents a mahjong_svr_choose_ratio_not. */
export class mahjong_svr_choose_ratio_not implements Imahjong_svr_choose_ratio_not {

    /**
     * Constructs a new mahjong_svr_choose_ratio_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_svr_choose_ratio_not);

    /** mahjong_svr_choose_ratio_not cChairID. */
    public cChairID: number;

    /** mahjong_svr_choose_ratio_not nRatio. */
    public nRatio: number;

    /** mahjong_svr_choose_ratio_not nCurRatio. */
    public nCurRatio: number;

    /**
     * Creates a new mahjong_svr_choose_ratio_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_svr_choose_ratio_not instance
     */
    public static create(properties?: Imahjong_svr_choose_ratio_not): mahjong_svr_choose_ratio_not;

    /**
     * Encodes the specified mahjong_svr_choose_ratio_not message. Does not implicitly {@link mahjong_svr_choose_ratio_not.verify|verify} messages.
     * @param message mahjong_svr_choose_ratio_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_svr_choose_ratio_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_svr_choose_ratio_not message, length delimited. Does not implicitly {@link mahjong_svr_choose_ratio_not.verify|verify} messages.
     * @param message mahjong_svr_choose_ratio_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_svr_choose_ratio_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_svr_choose_ratio_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_svr_choose_ratio_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_svr_choose_ratio_not;

    /**
     * Decodes a mahjong_svr_choose_ratio_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_svr_choose_ratio_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_svr_choose_ratio_not;

    /**
     * Verifies a mahjong_svr_choose_ratio_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_svr_choose_ratio_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_svr_choose_ratio_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_svr_choose_ratio_not;

    /**
     * Creates a plain object from a mahjong_svr_choose_ratio_not message. Also converts values to other types if specified.
     * @param message mahjong_svr_choose_ratio_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_svr_choose_ratio_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_svr_choose_ratio_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_svr_choose_ratio_req. */
export interface Imahjong_svr_choose_ratio_req {

    /** mahjong_svr_choose_ratio_req nMin */
    nMin: number;

    /** mahjong_svr_choose_ratio_req nPeriod */
    nPeriod: number;

    /** mahjong_svr_choose_ratio_req sSerialID */
    sSerialID: number;
}

/** Represents a mahjong_svr_choose_ratio_req. */
export class mahjong_svr_choose_ratio_req implements Imahjong_svr_choose_ratio_req {

    /**
     * Constructs a new mahjong_svr_choose_ratio_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_svr_choose_ratio_req);

    /** mahjong_svr_choose_ratio_req nMin. */
    public nMin: number;

    /** mahjong_svr_choose_ratio_req nPeriod. */
    public nPeriod: number;

    /** mahjong_svr_choose_ratio_req sSerialID. */
    public sSerialID: number;

    /**
     * Creates a new mahjong_svr_choose_ratio_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_svr_choose_ratio_req instance
     */
    public static create(properties?: Imahjong_svr_choose_ratio_req): mahjong_svr_choose_ratio_req;

    /**
     * Encodes the specified mahjong_svr_choose_ratio_req message. Does not implicitly {@link mahjong_svr_choose_ratio_req.verify|verify} messages.
     * @param message mahjong_svr_choose_ratio_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_svr_choose_ratio_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_svr_choose_ratio_req message, length delimited. Does not implicitly {@link mahjong_svr_choose_ratio_req.verify|verify} messages.
     * @param message mahjong_svr_choose_ratio_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_svr_choose_ratio_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_svr_choose_ratio_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_svr_choose_ratio_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_svr_choose_ratio_req;

    /**
     * Decodes a mahjong_svr_choose_ratio_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_svr_choose_ratio_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_svr_choose_ratio_req;

    /**
     * Verifies a mahjong_svr_choose_ratio_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_svr_choose_ratio_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_svr_choose_ratio_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_svr_choose_ratio_req;

    /**
     * Creates a plain object from a mahjong_svr_choose_ratio_req message. Also converts values to other types if specified.
     * @param message mahjong_svr_choose_ratio_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_svr_choose_ratio_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_svr_choose_ratio_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_st_gameresult_v1_1_0. */
export interface Imahjong_st_gameresult_v1_1_0 {

    /** mahjong_st_gameresult_v1_1_0 cChairID */
    cChairID: number;

    /** mahjong_st_gameresult_v1_1_0 cWonLose */
    cWonLose: number;

    /** mahjong_st_gameresult_v1_1_0 cResult */
    cResult: number;

    /** mahjong_st_gameresult_v1_1_0 nScore */
    nScore: (number|Long);

    /** mahjong_st_gameresult_v1_1_0 nHuType */
    nHuType: number;

    /** mahjong_st_gameresult_v1_1_0 cMingGangNum */
    cMingGangNum: number;

    /** mahjong_st_gameresult_v1_1_0 cAnGangNum */
    cAnGangNum: number;

    /** mahjong_st_gameresult_v1_1_0 cBuGangNum */
    cBuGangNum: number;

    /** mahjong_st_gameresult_v1_1_0 cDianPaoChair */
    cDianPaoChair: number;

    /** mahjong_st_gameresult_v1_1_0 cChaJiao */
    cChaJiao: number;

    /** mahjong_st_gameresult_v1_1_0 bQiangGang */
    bQiangGang: number;

    /** mahjong_st_gameresult_v1_1_0 bGangHua */
    bGangHua: number;

    /** mahjong_st_gameresult_v1_1_0 bGangPao */
    bGangPao: number;

    /** mahjong_st_gameresult_v1_1_0 cGenNum */
    cGenNum: number;

    /** mahjong_st_gameresult_v1_1_0 nTax */
    nTax: number;

    /** mahjong_st_gameresult_v1_1_0 vecGangData */
    vecGangData?: (Imahjong_gang_data[]|null);

    /** mahjong_st_gameresult_v1_1_0 vecHu */
    vecHu?: (Imahjong_fan_data[]|null);

    /** mahjong_st_gameresult_v1_1_0 vecHued */
    vecHued?: (Imahjong_fan_data[]|null);

    /** mahjong_st_gameresult_v1_1_0 vecGangPao */
    vecGangPao?: (Imahjong_fan_data[]|null);

    /** mahjong_st_gameresult_v1_1_0 vecChaJiao */
    vecChaJiao?: (Imahjong_fan_data[]|null);

    /** mahjong_st_gameresult_v1_1_0 vecWuJiaoGang */
    vecWuJiaoGang?: (Imahjong_fan_data[]|null);

    /** mahjong_st_gameresult_v1_1_0 vecHuaZhu */
    vecHuaZhu?: (Imahjong_fan_data[]|null);
}

/** Represents a mahjong_st_gameresult_v1_1_0. */
export class mahjong_st_gameresult_v1_1_0 implements Imahjong_st_gameresult_v1_1_0 {

    /**
     * Constructs a new mahjong_st_gameresult_v1_1_0.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_st_gameresult_v1_1_0);

    /** mahjong_st_gameresult_v1_1_0 cChairID. */
    public cChairID: number;

    /** mahjong_st_gameresult_v1_1_0 cWonLose. */
    public cWonLose: number;

    /** mahjong_st_gameresult_v1_1_0 cResult. */
    public cResult: number;

    /** mahjong_st_gameresult_v1_1_0 nScore. */
    public nScore: (number|Long);

    /** mahjong_st_gameresult_v1_1_0 nHuType. */
    public nHuType: number;

    /** mahjong_st_gameresult_v1_1_0 cMingGangNum. */
    public cMingGangNum: number;

    /** mahjong_st_gameresult_v1_1_0 cAnGangNum. */
    public cAnGangNum: number;

    /** mahjong_st_gameresult_v1_1_0 cBuGangNum. */
    public cBuGangNum: number;

    /** mahjong_st_gameresult_v1_1_0 cDianPaoChair. */
    public cDianPaoChair: number;

    /** mahjong_st_gameresult_v1_1_0 cChaJiao. */
    public cChaJiao: number;

    /** mahjong_st_gameresult_v1_1_0 bQiangGang. */
    public bQiangGang: number;

    /** mahjong_st_gameresult_v1_1_0 bGangHua. */
    public bGangHua: number;

    /** mahjong_st_gameresult_v1_1_0 bGangPao. */
    public bGangPao: number;

    /** mahjong_st_gameresult_v1_1_0 cGenNum. */
    public cGenNum: number;

    /** mahjong_st_gameresult_v1_1_0 nTax. */
    public nTax: number;

    /** mahjong_st_gameresult_v1_1_0 vecGangData. */
    public vecGangData: Imahjong_gang_data[];

    /** mahjong_st_gameresult_v1_1_0 vecHu. */
    public vecHu: Imahjong_fan_data[];

    /** mahjong_st_gameresult_v1_1_0 vecHued. */
    public vecHued: Imahjong_fan_data[];

    /** mahjong_st_gameresult_v1_1_0 vecGangPao. */
    public vecGangPao: Imahjong_fan_data[];

    /** mahjong_st_gameresult_v1_1_0 vecChaJiao. */
    public vecChaJiao: Imahjong_fan_data[];

    /** mahjong_st_gameresult_v1_1_0 vecWuJiaoGang. */
    public vecWuJiaoGang: Imahjong_fan_data[];

    /** mahjong_st_gameresult_v1_1_0 vecHuaZhu. */
    public vecHuaZhu: Imahjong_fan_data[];

    /**
     * Creates a new mahjong_st_gameresult_v1_1_0 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_st_gameresult_v1_1_0 instance
     */
    public static create(properties?: Imahjong_st_gameresult_v1_1_0): mahjong_st_gameresult_v1_1_0;

    /**
     * Encodes the specified mahjong_st_gameresult_v1_1_0 message. Does not implicitly {@link mahjong_st_gameresult_v1_1_0.verify|verify} messages.
     * @param message mahjong_st_gameresult_v1_1_0 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_st_gameresult_v1_1_0, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_st_gameresult_v1_1_0 message, length delimited. Does not implicitly {@link mahjong_st_gameresult_v1_1_0.verify|verify} messages.
     * @param message mahjong_st_gameresult_v1_1_0 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_st_gameresult_v1_1_0, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_st_gameresult_v1_1_0 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_st_gameresult_v1_1_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_st_gameresult_v1_1_0;

    /**
     * Decodes a mahjong_st_gameresult_v1_1_0 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_st_gameresult_v1_1_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_st_gameresult_v1_1_0;

    /**
     * Verifies a mahjong_st_gameresult_v1_1_0 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_st_gameresult_v1_1_0 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_st_gameresult_v1_1_0
     */
    public static fromObject(object: { [k: string]: any }): mahjong_st_gameresult_v1_1_0;

    /**
     * Creates a plain object from a mahjong_st_gameresult_v1_1_0 message. Also converts values to other types if specified.
     * @param message mahjong_st_gameresult_v1_1_0
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_st_gameresult_v1_1_0, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_st_gameresult_v1_1_0 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_svr_portrait_rsp. */
export interface Imahjong_svr_portrait_rsp {

    /** mahjong_svr_portrait_rsp chairId */
    chairId?: (number[]|null);

    /** mahjong_svr_portrait_rsp portraitId */
    portraitId?: (number[]|null);
}

/** Represents a mahjong_svr_portrait_rsp. */
export class mahjong_svr_portrait_rsp implements Imahjong_svr_portrait_rsp {

    /**
     * Constructs a new mahjong_svr_portrait_rsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_svr_portrait_rsp);

    /** mahjong_svr_portrait_rsp chairId. */
    public chairId: number[];

    /** mahjong_svr_portrait_rsp portraitId. */
    public portraitId: number[];

    /**
     * Creates a new mahjong_svr_portrait_rsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_svr_portrait_rsp instance
     */
    public static create(properties?: Imahjong_svr_portrait_rsp): mahjong_svr_portrait_rsp;

    /**
     * Encodes the specified mahjong_svr_portrait_rsp message. Does not implicitly {@link mahjong_svr_portrait_rsp.verify|verify} messages.
     * @param message mahjong_svr_portrait_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_svr_portrait_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_svr_portrait_rsp message, length delimited. Does not implicitly {@link mahjong_svr_portrait_rsp.verify|verify} messages.
     * @param message mahjong_svr_portrait_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_svr_portrait_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_svr_portrait_rsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_svr_portrait_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_svr_portrait_rsp;

    /**
     * Decodes a mahjong_svr_portrait_rsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_svr_portrait_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_svr_portrait_rsp;

    /**
     * Verifies a mahjong_svr_portrait_rsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_svr_portrait_rsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_svr_portrait_rsp
     */
    public static fromObject(object: { [k: string]: any }): mahjong_svr_portrait_rsp;

    /**
     * Creates a plain object from a mahjong_svr_portrait_rsp message. Also converts values to other types if specified.
     * @param message mahjong_svr_portrait_rsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_svr_portrait_rsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_svr_portrait_rsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_gameresult_not_v2_1_4. */
export interface Imahjong_mj_gameresult_not_v2_1_4 {

    /** mahjong_mj_gameresult_not_v2_1_4 vecGameResult */
    vecGameResult?: (Imahjong_st_gameresult_v2_1_4[]|null);
}

/** Represents a mahjong_mj_gameresult_not_v2_1_4. */
export class mahjong_mj_gameresult_not_v2_1_4 implements Imahjong_mj_gameresult_not_v2_1_4 {

    /**
     * Constructs a new mahjong_mj_gameresult_not_v2_1_4.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_gameresult_not_v2_1_4);

    /** mahjong_mj_gameresult_not_v2_1_4 vecGameResult. */
    public vecGameResult: Imahjong_st_gameresult_v2_1_4[];

    /**
     * Creates a new mahjong_mj_gameresult_not_v2_1_4 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_gameresult_not_v2_1_4 instance
     */
    public static create(properties?: Imahjong_mj_gameresult_not_v2_1_4): mahjong_mj_gameresult_not_v2_1_4;

    /**
     * Encodes the specified mahjong_mj_gameresult_not_v2_1_4 message. Does not implicitly {@link mahjong_mj_gameresult_not_v2_1_4.verify|verify} messages.
     * @param message mahjong_mj_gameresult_not_v2_1_4 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_gameresult_not_v2_1_4, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_gameresult_not_v2_1_4 message, length delimited. Does not implicitly {@link mahjong_mj_gameresult_not_v2_1_4.verify|verify} messages.
     * @param message mahjong_mj_gameresult_not_v2_1_4 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_gameresult_not_v2_1_4, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_gameresult_not_v2_1_4 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_gameresult_not_v2_1_4
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_gameresult_not_v2_1_4;

    /**
     * Decodes a mahjong_mj_gameresult_not_v2_1_4 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_gameresult_not_v2_1_4
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_gameresult_not_v2_1_4;

    /**
     * Verifies a mahjong_mj_gameresult_not_v2_1_4 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_gameresult_not_v2_1_4 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_gameresult_not_v2_1_4
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_gameresult_not_v2_1_4;

    /**
     * Creates a plain object from a mahjong_mj_gameresult_not_v2_1_4 message. Also converts values to other types if specified.
     * @param message mahjong_mj_gameresult_not_v2_1_4
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_gameresult_not_v2_1_4, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_gameresult_not_v2_1_4 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_banker_dice_not. */
export interface Imahjong_mj_banker_dice_not {

    /** mahjong_mj_banker_dice_not cBanker */
    cBanker: number;

    /** mahjong_mj_banker_dice_not vecDice */
    vecDice?: (number[]|null);
}

/** Represents a mahjong_mj_banker_dice_not. */
export class mahjong_mj_banker_dice_not implements Imahjong_mj_banker_dice_not {

    /**
     * Constructs a new mahjong_mj_banker_dice_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_banker_dice_not);

    /** mahjong_mj_banker_dice_not cBanker. */
    public cBanker: number;

    /** mahjong_mj_banker_dice_not vecDice. */
    public vecDice: number[];

    /**
     * Creates a new mahjong_mj_banker_dice_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_banker_dice_not instance
     */
    public static create(properties?: Imahjong_mj_banker_dice_not): mahjong_mj_banker_dice_not;

    /**
     * Encodes the specified mahjong_mj_banker_dice_not message. Does not implicitly {@link mahjong_mj_banker_dice_not.verify|verify} messages.
     * @param message mahjong_mj_banker_dice_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_banker_dice_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_banker_dice_not message, length delimited. Does not implicitly {@link mahjong_mj_banker_dice_not.verify|verify} messages.
     * @param message mahjong_mj_banker_dice_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_banker_dice_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_banker_dice_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_banker_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_banker_dice_not;

    /**
     * Decodes a mahjong_mj_banker_dice_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_banker_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_banker_dice_not;

    /**
     * Verifies a mahjong_mj_banker_dice_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_banker_dice_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_banker_dice_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_banker_dice_not;

    /**
     * Creates a plain object from a mahjong_mj_banker_dice_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_banker_dice_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_banker_dice_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_banker_dice_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_gc_task_complete_not. */
export interface Imahjong_gc_task_complete_not {

    /** mahjong_gc_task_complete_not chairId */
    chairId: number;

    /** mahjong_gc_task_complete_not taskStatus */
    taskStatus: number;

    /** mahjong_gc_task_complete_not money */
    money: number;

    /** mahjong_gc_task_complete_not gift */
    gift: number;
}

/** Represents a mahjong_gc_task_complete_not. */
export class mahjong_gc_task_complete_not implements Imahjong_gc_task_complete_not {

    /**
     * Constructs a new mahjong_gc_task_complete_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_gc_task_complete_not);

    /** mahjong_gc_task_complete_not chairId. */
    public chairId: number;

    /** mahjong_gc_task_complete_not taskStatus. */
    public taskStatus: number;

    /** mahjong_gc_task_complete_not money. */
    public money: number;

    /** mahjong_gc_task_complete_not gift. */
    public gift: number;

    /**
     * Creates a new mahjong_gc_task_complete_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_gc_task_complete_not instance
     */
    public static create(properties?: Imahjong_gc_task_complete_not): mahjong_gc_task_complete_not;

    /**
     * Encodes the specified mahjong_gc_task_complete_not message. Does not implicitly {@link mahjong_gc_task_complete_not.verify|verify} messages.
     * @param message mahjong_gc_task_complete_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_gc_task_complete_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_gc_task_complete_not message, length delimited. Does not implicitly {@link mahjong_gc_task_complete_not.verify|verify} messages.
     * @param message mahjong_gc_task_complete_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_gc_task_complete_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_gc_task_complete_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_gc_task_complete_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_gc_task_complete_not;

    /**
     * Decodes a mahjong_gc_task_complete_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_gc_task_complete_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_gc_task_complete_not;

    /**
     * Verifies a mahjong_gc_task_complete_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_gc_task_complete_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_gc_task_complete_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_gc_task_complete_not;

    /**
     * Creates a plain object from a mahjong_gc_task_complete_not message. Also converts values to other types if specified.
     * @param message mahjong_gc_task_complete_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_gc_task_complete_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_gc_task_complete_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
