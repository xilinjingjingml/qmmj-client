import * as $protobuf from "protobufjs";
/** Properties of a mahjong_ermj_completedata_not. */
export interface Imahjong_ermj_completedata_not {

    /** mahjong_ermj_completedata_not nDiZhu */
    nDiZhu: number;

    /** mahjong_ermj_completedata_not cBanker */
    cBanker: number;

    /** mahjong_ermj_completedata_not nAllScore */
    nAllScore: number;

    /** mahjong_ermj_completedata_not cWallEndChair */
    cWallEndChair: number;

    /** mahjong_ermj_completedata_not cWallEndPos */
    cWallEndPos: number;

    /** mahjong_ermj_completedata_not cWallCardNum */
    cWallCardNum: number;

    /** mahjong_ermj_completedata_not cGangTotalNum */
    cGangTotalNum: number;

    /** mahjong_ermj_completedata_not vecHuaNum */
    vecHuaNum?: (number[]|null);

    /** mahjong_ermj_completedata_not cAutoState */
    cAutoState: number;

    /** mahjong_ermj_completedata_not cAutoType */
    cAutoType: number;

    /** mahjong_ermj_completedata_not nChuPai */
    nChuPai: number;

    /** mahjong_ermj_completedata_not nVisitorAmount */
    nVisitorAmount: number;

    /** mahjong_ermj_completedata_not sSerialID */
    sSerialID: number;

    /** mahjong_ermj_completedata_not vecPlyData */
    vecPlyData?: (Imahjong_ermj_changecard_not[]|null);

    /** mahjong_ermj_completedata_not vecTingPly */
    vecTingPly?: (number[]|null);
}

/** Represents a mahjong_ermj_completedata_not. */
export class mahjong_ermj_completedata_not implements Imahjong_ermj_completedata_not {

    /**
     * Constructs a new mahjong_ermj_completedata_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_completedata_not);

    /** mahjong_ermj_completedata_not nDiZhu. */
    public nDiZhu: number;

    /** mahjong_ermj_completedata_not cBanker. */
    public cBanker: number;

    /** mahjong_ermj_completedata_not nAllScore. */
    public nAllScore: number;

    /** mahjong_ermj_completedata_not cWallEndChair. */
    public cWallEndChair: number;

    /** mahjong_ermj_completedata_not cWallEndPos. */
    public cWallEndPos: number;

    /** mahjong_ermj_completedata_not cWallCardNum. */
    public cWallCardNum: number;

    /** mahjong_ermj_completedata_not cGangTotalNum. */
    public cGangTotalNum: number;

    /** mahjong_ermj_completedata_not vecHuaNum. */
    public vecHuaNum: number[];

    /** mahjong_ermj_completedata_not cAutoState. */
    public cAutoState: number;

    /** mahjong_ermj_completedata_not cAutoType. */
    public cAutoType: number;

    /** mahjong_ermj_completedata_not nChuPai. */
    public nChuPai: number;

    /** mahjong_ermj_completedata_not nVisitorAmount. */
    public nVisitorAmount: number;

    /** mahjong_ermj_completedata_not sSerialID. */
    public sSerialID: number;

    /** mahjong_ermj_completedata_not vecPlyData. */
    public vecPlyData: Imahjong_ermj_changecard_not[];

    /** mahjong_ermj_completedata_not vecTingPly. */
    public vecTingPly: number[];

    /**
     * Creates a new mahjong_ermj_completedata_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_completedata_not instance
     */
    public static create(properties?: Imahjong_ermj_completedata_not): mahjong_ermj_completedata_not;

    /**
     * Encodes the specified mahjong_ermj_completedata_not message. Does not implicitly {@link mahjong_ermj_completedata_not.verify|verify} messages.
     * @param message mahjong_ermj_completedata_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_completedata_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_completedata_not message, length delimited. Does not implicitly {@link mahjong_ermj_completedata_not.verify|verify} messages.
     * @param message mahjong_ermj_completedata_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_completedata_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_completedata_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_completedata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_completedata_not;

    /**
     * Decodes a mahjong_ermj_completedata_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_completedata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_completedata_not;

    /**
     * Verifies a mahjong_ermj_completedata_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_completedata_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_completedata_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_completedata_not;

    /**
     * Creates a plain object from a mahjong_ermj_completedata_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_completedata_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_completedata_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_completedata_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_taifei_not. */
export interface Imahjong_ermj_taifei_not {

    /** mahjong_ermj_taifei_not nChairId */
    nChairId: number;

    /** mahjong_ermj_taifei_not nValue */
    nValue: number;
}

/** Represents a mahjong_ermj_taifei_not. */
export class mahjong_ermj_taifei_not implements Imahjong_ermj_taifei_not {

    /**
     * Constructs a new mahjong_ermj_taifei_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_taifei_not);

    /** mahjong_ermj_taifei_not nChairId. */
    public nChairId: number;

    /** mahjong_ermj_taifei_not nValue. */
    public nValue: number;

    /**
     * Creates a new mahjong_ermj_taifei_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_taifei_not instance
     */
    public static create(properties?: Imahjong_ermj_taifei_not): mahjong_ermj_taifei_not;

    /**
     * Encodes the specified mahjong_ermj_taifei_not message. Does not implicitly {@link mahjong_ermj_taifei_not.verify|verify} messages.
     * @param message mahjong_ermj_taifei_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_taifei_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_taifei_not message, length delimited. Does not implicitly {@link mahjong_ermj_taifei_not.verify|verify} messages.
     * @param message mahjong_ermj_taifei_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_taifei_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_taifei_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_taifei_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_taifei_not;

    /**
     * Decodes a mahjong_ermj_taifei_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_taifei_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_taifei_not;

    /**
     * Verifies a mahjong_ermj_taifei_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_taifei_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_taifei_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_taifei_not;

    /**
     * Creates a plain object from a mahjong_ermj_taifei_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_taifei_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_taifei_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_taifei_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_hupai_ratio_not. */
export interface Imahjong_ermj_hupai_ratio_not {

    /** mahjong_ermj_hupai_ratio_not nChairId */
    nChairId: number;

    /** mahjong_ermj_hupai_ratio_not nValue */
    nValue: number;
}

/** Represents a mahjong_ermj_hupai_ratio_not. */
export class mahjong_ermj_hupai_ratio_not implements Imahjong_ermj_hupai_ratio_not {

    /**
     * Constructs a new mahjong_ermj_hupai_ratio_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_hupai_ratio_not);

    /** mahjong_ermj_hupai_ratio_not nChairId. */
    public nChairId: number;

    /** mahjong_ermj_hupai_ratio_not nValue. */
    public nValue: number;

    /**
     * Creates a new mahjong_ermj_hupai_ratio_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_hupai_ratio_not instance
     */
    public static create(properties?: Imahjong_ermj_hupai_ratio_not): mahjong_ermj_hupai_ratio_not;

    /**
     * Encodes the specified mahjong_ermj_hupai_ratio_not message. Does not implicitly {@link mahjong_ermj_hupai_ratio_not.verify|verify} messages.
     * @param message mahjong_ermj_hupai_ratio_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_hupai_ratio_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_hupai_ratio_not message, length delimited. Does not implicitly {@link mahjong_ermj_hupai_ratio_not.verify|verify} messages.
     * @param message mahjong_ermj_hupai_ratio_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_hupai_ratio_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_hupai_ratio_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_hupai_ratio_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_hupai_ratio_not;

    /**
     * Decodes a mahjong_ermj_hupai_ratio_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_hupai_ratio_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_hupai_ratio_not;

    /**
     * Verifies a mahjong_ermj_hupai_ratio_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_hupai_ratio_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_hupai_ratio_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_hupai_ratio_not;

    /**
     * Creates a plain object from a mahjong_ermj_hupai_ratio_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_hupai_ratio_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_hupai_ratio_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_hupai_ratio_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_task_change_req. */
export interface Imahjong_ermj_task_change_req {

    /** mahjong_ermj_task_change_req nChairId */
    nChairId: number;
}

/** Represents a mahjong_ermj_task_change_req. */
export class mahjong_ermj_task_change_req implements Imahjong_ermj_task_change_req {

    /**
     * Constructs a new mahjong_ermj_task_change_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_task_change_req);

    /** mahjong_ermj_task_change_req nChairId. */
    public nChairId: number;

    /**
     * Creates a new mahjong_ermj_task_change_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_task_change_req instance
     */
    public static create(properties?: Imahjong_ermj_task_change_req): mahjong_ermj_task_change_req;

    /**
     * Encodes the specified mahjong_ermj_task_change_req message. Does not implicitly {@link mahjong_ermj_task_change_req.verify|verify} messages.
     * @param message mahjong_ermj_task_change_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_task_change_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_task_change_req message, length delimited. Does not implicitly {@link mahjong_ermj_task_change_req.verify|verify} messages.
     * @param message mahjong_ermj_task_change_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_task_change_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_task_change_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_task_change_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_task_change_req;

    /**
     * Decodes a mahjong_ermj_task_change_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_task_change_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_task_change_req;

    /**
     * Verifies a mahjong_ermj_task_change_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_task_change_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_task_change_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_task_change_req;

    /**
     * Creates a plain object from a mahjong_ermj_task_change_req message. Also converts values to other types if specified.
     * @param message mahjong_ermj_task_change_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_task_change_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_task_change_req to JSON.
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

/** Properties of a mahjong_ermj_hudouble_req_new. */
export interface Imahjong_ermj_hudouble_req_new {

    /** mahjong_ermj_hudouble_req_new cChairId */
    cChairId: number;

    /** mahjong_ermj_hudouble_req_new nFan */
    nFan: number;

    /** mahjong_ermj_hudouble_req_new nScore */
    nScore: number;
}

/** Represents a mahjong_ermj_hudouble_req_new. */
export class mahjong_ermj_hudouble_req_new implements Imahjong_ermj_hudouble_req_new {

    /**
     * Constructs a new mahjong_ermj_hudouble_req_new.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_hudouble_req_new);

    /** mahjong_ermj_hudouble_req_new cChairId. */
    public cChairId: number;

    /** mahjong_ermj_hudouble_req_new nFan. */
    public nFan: number;

    /** mahjong_ermj_hudouble_req_new nScore. */
    public nScore: number;

    /**
     * Creates a new mahjong_ermj_hudouble_req_new instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_hudouble_req_new instance
     */
    public static create(properties?: Imahjong_ermj_hudouble_req_new): mahjong_ermj_hudouble_req_new;

    /**
     * Encodes the specified mahjong_ermj_hudouble_req_new message. Does not implicitly {@link mahjong_ermj_hudouble_req_new.verify|verify} messages.
     * @param message mahjong_ermj_hudouble_req_new message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_hudouble_req_new, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_hudouble_req_new message, length delimited. Does not implicitly {@link mahjong_ermj_hudouble_req_new.verify|verify} messages.
     * @param message mahjong_ermj_hudouble_req_new message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_hudouble_req_new, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_hudouble_req_new message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_hudouble_req_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_hudouble_req_new;

    /**
     * Decodes a mahjong_ermj_hudouble_req_new message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_hudouble_req_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_hudouble_req_new;

    /**
     * Verifies a mahjong_ermj_hudouble_req_new message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_hudouble_req_new message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_hudouble_req_new
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_hudouble_req_new;

    /**
     * Creates a plain object from a mahjong_ermj_hudouble_req_new message. Also converts values to other types if specified.
     * @param message mahjong_ermj_hudouble_req_new
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_hudouble_req_new, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_hudouble_req_new to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_tingfan_not. */
export interface Imahjong_ermj_tingfan_not {

    /** mahjong_ermj_tingfan_not sSerialID */
    sSerialID: number;

    /** mahjong_ermj_tingfan_not vecTingFan */
    vecTingFan?: (Imahjong_tingfan_data[]|null);
}

/** Represents a mahjong_ermj_tingfan_not. */
export class mahjong_ermj_tingfan_not implements Imahjong_ermj_tingfan_not {

    /**
     * Constructs a new mahjong_ermj_tingfan_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_tingfan_not);

    /** mahjong_ermj_tingfan_not sSerialID. */
    public sSerialID: number;

    /** mahjong_ermj_tingfan_not vecTingFan. */
    public vecTingFan: Imahjong_tingfan_data[];

    /**
     * Creates a new mahjong_ermj_tingfan_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_tingfan_not instance
     */
    public static create(properties?: Imahjong_ermj_tingfan_not): mahjong_ermj_tingfan_not;

    /**
     * Encodes the specified mahjong_ermj_tingfan_not message. Does not implicitly {@link mahjong_ermj_tingfan_not.verify|verify} messages.
     * @param message mahjong_ermj_tingfan_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_tingfan_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_tingfan_not message, length delimited. Does not implicitly {@link mahjong_ermj_tingfan_not.verify|verify} messages.
     * @param message mahjong_ermj_tingfan_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_tingfan_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_tingfan_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_tingfan_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_tingfan_not;

    /**
     * Decodes a mahjong_ermj_tingfan_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_tingfan_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_tingfan_not;

    /**
     * Verifies a mahjong_ermj_tingfan_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_tingfan_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_tingfan_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_tingfan_not;

    /**
     * Creates a plain object from a mahjong_ermj_tingfan_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_tingfan_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_tingfan_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_tingfan_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_hudouble_ack. */
export interface Imahjong_ermj_hudouble_ack {

    /** mahjong_ermj_hudouble_ack cDoubleStyle */
    cDoubleStyle: number;
}

/** Represents a mahjong_ermj_hudouble_ack. */
export class mahjong_ermj_hudouble_ack implements Imahjong_ermj_hudouble_ack {

    /**
     * Constructs a new mahjong_ermj_hudouble_ack.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_hudouble_ack);

    /** mahjong_ermj_hudouble_ack cDoubleStyle. */
    public cDoubleStyle: number;

    /**
     * Creates a new mahjong_ermj_hudouble_ack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_hudouble_ack instance
     */
    public static create(properties?: Imahjong_ermj_hudouble_ack): mahjong_ermj_hudouble_ack;

    /**
     * Encodes the specified mahjong_ermj_hudouble_ack message. Does not implicitly {@link mahjong_ermj_hudouble_ack.verify|verify} messages.
     * @param message mahjong_ermj_hudouble_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_hudouble_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_hudouble_ack message, length delimited. Does not implicitly {@link mahjong_ermj_hudouble_ack.verify|verify} messages.
     * @param message mahjong_ermj_hudouble_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_hudouble_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_hudouble_ack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_hudouble_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_hudouble_ack;

    /**
     * Decodes a mahjong_ermj_hudouble_ack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_hudouble_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_hudouble_ack;

    /**
     * Verifies a mahjong_ermj_hudouble_ack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_hudouble_ack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_hudouble_ack
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_hudouble_ack;

    /**
     * Creates a plain object from a mahjong_ermj_hudouble_ack message. Also converts values to other types if specified.
     * @param message mahjong_ermj_hudouble_ack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_hudouble_ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_hudouble_ack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_gc_task_complete_not. */
export interface Imahjong_ermj_gc_task_complete_not {

    /** mahjong_ermj_gc_task_complete_not chairId */
    chairId: number;

    /** mahjong_ermj_gc_task_complete_not taskStatus */
    taskStatus: number;

    /** mahjong_ermj_gc_task_complete_not money */
    money: number;

    /** mahjong_ermj_gc_task_complete_not gift */
    gift: number;
}

/** Represents a mahjong_ermj_gc_task_complete_not. */
export class mahjong_ermj_gc_task_complete_not implements Imahjong_ermj_gc_task_complete_not {

    /**
     * Constructs a new mahjong_ermj_gc_task_complete_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_gc_task_complete_not);

    /** mahjong_ermj_gc_task_complete_not chairId. */
    public chairId: number;

    /** mahjong_ermj_gc_task_complete_not taskStatus. */
    public taskStatus: number;

    /** mahjong_ermj_gc_task_complete_not money. */
    public money: number;

    /** mahjong_ermj_gc_task_complete_not gift. */
    public gift: number;

    /**
     * Creates a new mahjong_ermj_gc_task_complete_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_gc_task_complete_not instance
     */
    public static create(properties?: Imahjong_ermj_gc_task_complete_not): mahjong_ermj_gc_task_complete_not;

    /**
     * Encodes the specified mahjong_ermj_gc_task_complete_not message. Does not implicitly {@link mahjong_ermj_gc_task_complete_not.verify|verify} messages.
     * @param message mahjong_ermj_gc_task_complete_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_gc_task_complete_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_gc_task_complete_not message, length delimited. Does not implicitly {@link mahjong_ermj_gc_task_complete_not.verify|verify} messages.
     * @param message mahjong_ermj_gc_task_complete_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_gc_task_complete_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_gc_task_complete_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_gc_task_complete_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_gc_task_complete_not;

    /**
     * Decodes a mahjong_ermj_gc_task_complete_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_gc_task_complete_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_gc_task_complete_not;

    /**
     * Verifies a mahjong_ermj_gc_task_complete_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_gc_task_complete_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_gc_task_complete_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_gc_task_complete_not;

    /**
     * Creates a plain object from a mahjong_ermj_gc_task_complete_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_gc_task_complete_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_gc_task_complete_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_gc_task_complete_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_hudouble_not. */
export interface Imahjong_ermj_hudouble_not {

    /** mahjong_ermj_hudouble_not cChairID */
    cChairID: number;

    /** mahjong_ermj_hudouble_not sDoubleNum */
    sDoubleNum: number;
}

/** Represents a mahjong_ermj_hudouble_not. */
export class mahjong_ermj_hudouble_not implements Imahjong_ermj_hudouble_not {

    /**
     * Constructs a new mahjong_ermj_hudouble_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_hudouble_not);

    /** mahjong_ermj_hudouble_not cChairID. */
    public cChairID: number;

    /** mahjong_ermj_hudouble_not sDoubleNum. */
    public sDoubleNum: number;

    /**
     * Creates a new mahjong_ermj_hudouble_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_hudouble_not instance
     */
    public static create(properties?: Imahjong_ermj_hudouble_not): mahjong_ermj_hudouble_not;

    /**
     * Encodes the specified mahjong_ermj_hudouble_not message. Does not implicitly {@link mahjong_ermj_hudouble_not.verify|verify} messages.
     * @param message mahjong_ermj_hudouble_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_hudouble_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_hudouble_not message, length delimited. Does not implicitly {@link mahjong_ermj_hudouble_not.verify|verify} messages.
     * @param message mahjong_ermj_hudouble_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_hudouble_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_hudouble_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_hudouble_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_hudouble_not;

    /**
     * Decodes a mahjong_ermj_hudouble_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_hudouble_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_hudouble_not;

    /**
     * Verifies a mahjong_ermj_hudouble_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_hudouble_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_hudouble_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_hudouble_not;

    /**
     * Creates a plain object from a mahjong_ermj_hudouble_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_hudouble_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_hudouble_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_hudouble_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_visi_compdata_req. */
export interface Imahjong_ermj_visi_compdata_req {
}

/** Represents a mahjong_ermj_visi_compdata_req. */
export class mahjong_ermj_visi_compdata_req implements Imahjong_ermj_visi_compdata_req {

    /**
     * Constructs a new mahjong_ermj_visi_compdata_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_visi_compdata_req);

    /**
     * Creates a new mahjong_ermj_visi_compdata_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_visi_compdata_req instance
     */
    public static create(properties?: Imahjong_ermj_visi_compdata_req): mahjong_ermj_visi_compdata_req;

    /**
     * Encodes the specified mahjong_ermj_visi_compdata_req message. Does not implicitly {@link mahjong_ermj_visi_compdata_req.verify|verify} messages.
     * @param message mahjong_ermj_visi_compdata_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_visi_compdata_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_visi_compdata_req message, length delimited. Does not implicitly {@link mahjong_ermj_visi_compdata_req.verify|verify} messages.
     * @param message mahjong_ermj_visi_compdata_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_visi_compdata_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_visi_compdata_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_visi_compdata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_visi_compdata_req;

    /**
     * Decodes a mahjong_ermj_visi_compdata_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_visi_compdata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_visi_compdata_req;

    /**
     * Verifies a mahjong_ermj_visi_compdata_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_visi_compdata_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_visi_compdata_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_visi_compdata_req;

    /**
     * Creates a plain object from a mahjong_ermj_visi_compdata_req message. Also converts values to other types if specified.
     * @param message mahjong_ermj_visi_compdata_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_visi_compdata_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_visi_compdata_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_task_change_rsp. */
export interface Imahjong_ermj_task_change_rsp {

    /** mahjong_ermj_task_change_rsp nChairId */
    nChairId: number;

    /** mahjong_ermj_task_change_rsp nRet */
    nRet: number;
}

/** Represents a mahjong_ermj_task_change_rsp. */
export class mahjong_ermj_task_change_rsp implements Imahjong_ermj_task_change_rsp {

    /**
     * Constructs a new mahjong_ermj_task_change_rsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_task_change_rsp);

    /** mahjong_ermj_task_change_rsp nChairId. */
    public nChairId: number;

    /** mahjong_ermj_task_change_rsp nRet. */
    public nRet: number;

    /**
     * Creates a new mahjong_ermj_task_change_rsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_task_change_rsp instance
     */
    public static create(properties?: Imahjong_ermj_task_change_rsp): mahjong_ermj_task_change_rsp;

    /**
     * Encodes the specified mahjong_ermj_task_change_rsp message. Does not implicitly {@link mahjong_ermj_task_change_rsp.verify|verify} messages.
     * @param message mahjong_ermj_task_change_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_task_change_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_task_change_rsp message, length delimited. Does not implicitly {@link mahjong_ermj_task_change_rsp.verify|verify} messages.
     * @param message mahjong_ermj_task_change_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_task_change_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_task_change_rsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_task_change_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_task_change_rsp;

    /**
     * Decodes a mahjong_ermj_task_change_rsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_task_change_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_task_change_rsp;

    /**
     * Verifies a mahjong_ermj_task_change_rsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_task_change_rsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_task_change_rsp
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_task_change_rsp;

    /**
     * Creates a plain object from a mahjong_ermj_task_change_rsp message. Also converts values to other types if specified.
     * @param message mahjong_ermj_task_change_rsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_task_change_rsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_task_change_rsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_Cli_TingType_req. */
export interface Imahjong_ermj_Cli_TingType_req {

    /** mahjong_ermj_Cli_TingType_req cAutoGang */
    cAutoGang: number;

    /** mahjong_ermj_Cli_TingType_req cZimoOnly */
    cZimoOnly: number;
}

/** Represents a mahjong_ermj_Cli_TingType_req. */
export class mahjong_ermj_Cli_TingType_req implements Imahjong_ermj_Cli_TingType_req {

    /**
     * Constructs a new mahjong_ermj_Cli_TingType_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_Cli_TingType_req);

    /** mahjong_ermj_Cli_TingType_req cAutoGang. */
    public cAutoGang: number;

    /** mahjong_ermj_Cli_TingType_req cZimoOnly. */
    public cZimoOnly: number;

    /**
     * Creates a new mahjong_ermj_Cli_TingType_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_Cli_TingType_req instance
     */
    public static create(properties?: Imahjong_ermj_Cli_TingType_req): mahjong_ermj_Cli_TingType_req;

    /**
     * Encodes the specified mahjong_ermj_Cli_TingType_req message. Does not implicitly {@link mahjong_ermj_Cli_TingType_req.verify|verify} messages.
     * @param message mahjong_ermj_Cli_TingType_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_Cli_TingType_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_Cli_TingType_req message, length delimited. Does not implicitly {@link mahjong_ermj_Cli_TingType_req.verify|verify} messages.
     * @param message mahjong_ermj_Cli_TingType_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_Cli_TingType_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_Cli_TingType_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_Cli_TingType_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_Cli_TingType_req;

    /**
     * Decodes a mahjong_ermj_Cli_TingType_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_Cli_TingType_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_Cli_TingType_req;

    /**
     * Verifies a mahjong_ermj_Cli_TingType_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_Cli_TingType_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_Cli_TingType_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_Cli_TingType_req;

    /**
     * Creates a plain object from a mahjong_ermj_Cli_TingType_req message. Also converts values to other types if specified.
     * @param message mahjong_ermj_Cli_TingType_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_Cli_TingType_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_Cli_TingType_req to JSON.
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

/** Properties of a mahjong_ermj_baopai_not. */
export interface Imahjong_ermj_baopai_not {

    /** mahjong_ermj_baopai_not nChairId */
    nChairId: number;

    /** mahjong_ermj_baopai_not nCardValue */
    nCardValue: number;
}

/** Represents a mahjong_ermj_baopai_not. */
export class mahjong_ermj_baopai_not implements Imahjong_ermj_baopai_not {

    /**
     * Constructs a new mahjong_ermj_baopai_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_baopai_not);

    /** mahjong_ermj_baopai_not nChairId. */
    public nChairId: number;

    /** mahjong_ermj_baopai_not nCardValue. */
    public nCardValue: number;

    /**
     * Creates a new mahjong_ermj_baopai_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_baopai_not instance
     */
    public static create(properties?: Imahjong_ermj_baopai_not): mahjong_ermj_baopai_not;

    /**
     * Encodes the specified mahjong_ermj_baopai_not message. Does not implicitly {@link mahjong_ermj_baopai_not.verify|verify} messages.
     * @param message mahjong_ermj_baopai_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_baopai_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_baopai_not message, length delimited. Does not implicitly {@link mahjong_ermj_baopai_not.verify|verify} messages.
     * @param message mahjong_ermj_baopai_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_baopai_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_baopai_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_baopai_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_baopai_not;

    /**
     * Decodes a mahjong_ermj_baopai_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_baopai_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_baopai_not;

    /**
     * Verifies a mahjong_ermj_baopai_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_baopai_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_baopai_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_baopai_not;

    /**
     * Creates a plain object from a mahjong_ermj_baopai_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_baopai_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_baopai_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_baopai_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_operate_not. */
export interface Imahjong_ermj_operate_not {

    /** mahjong_ermj_operate_not cChairID */
    cChairID: number;

    /** mahjong_ermj_operate_not nOpcode */
    nOpcode: number;

    /** mahjong_ermj_operate_not cCard */
    cCard: number;

    /** mahjong_ermj_operate_not cWallCardNum */
    cWallCardNum: number;

    /** mahjong_ermj_operate_not bRobot */
    bRobot: number;

    /** mahjong_ermj_operate_not vecCards */
    vecCards?: (number[]|null);
}

/** Represents a mahjong_ermj_operate_not. */
export class mahjong_ermj_operate_not implements Imahjong_ermj_operate_not {

    /**
     * Constructs a new mahjong_ermj_operate_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_operate_not);

    /** mahjong_ermj_operate_not cChairID. */
    public cChairID: number;

    /** mahjong_ermj_operate_not nOpcode. */
    public nOpcode: number;

    /** mahjong_ermj_operate_not cCard. */
    public cCard: number;

    /** mahjong_ermj_operate_not cWallCardNum. */
    public cWallCardNum: number;

    /** mahjong_ermj_operate_not bRobot. */
    public bRobot: number;

    /** mahjong_ermj_operate_not vecCards. */
    public vecCards: number[];

    /**
     * Creates a new mahjong_ermj_operate_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_operate_not instance
     */
    public static create(properties?: Imahjong_ermj_operate_not): mahjong_ermj_operate_not;

    /**
     * Encodes the specified mahjong_ermj_operate_not message. Does not implicitly {@link mahjong_ermj_operate_not.verify|verify} messages.
     * @param message mahjong_ermj_operate_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_operate_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_operate_not message, length delimited. Does not implicitly {@link mahjong_ermj_operate_not.verify|verify} messages.
     * @param message mahjong_ermj_operate_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_operate_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_operate_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_operate_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_operate_not;

    /**
     * Decodes a mahjong_ermj_operate_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_operate_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_operate_not;

    /**
     * Verifies a mahjong_ermj_operate_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_operate_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_operate_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_operate_not;

    /**
     * Creates a plain object from a mahjong_ermj_operate_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_operate_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_operate_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_operate_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_mingpai_ratio_req. */
export interface Imahjong_ermj_mingpai_ratio_req {

    /** mahjong_ermj_mingpai_ratio_req nChairId */
    nChairId: number;

    /** mahjong_ermj_mingpai_ratio_req nValue */
    nValue: number;
}

/** Represents a mahjong_ermj_mingpai_ratio_req. */
export class mahjong_ermj_mingpai_ratio_req implements Imahjong_ermj_mingpai_ratio_req {

    /**
     * Constructs a new mahjong_ermj_mingpai_ratio_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_mingpai_ratio_req);

    /** mahjong_ermj_mingpai_ratio_req nChairId. */
    public nChairId: number;

    /** mahjong_ermj_mingpai_ratio_req nValue. */
    public nValue: number;

    /**
     * Creates a new mahjong_ermj_mingpai_ratio_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_mingpai_ratio_req instance
     */
    public static create(properties?: Imahjong_ermj_mingpai_ratio_req): mahjong_ermj_mingpai_ratio_req;

    /**
     * Encodes the specified mahjong_ermj_mingpai_ratio_req message. Does not implicitly {@link mahjong_ermj_mingpai_ratio_req.verify|verify} messages.
     * @param message mahjong_ermj_mingpai_ratio_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_mingpai_ratio_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_mingpai_ratio_req message, length delimited. Does not implicitly {@link mahjong_ermj_mingpai_ratio_req.verify|verify} messages.
     * @param message mahjong_ermj_mingpai_ratio_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_mingpai_ratio_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_mingpai_ratio_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_mingpai_ratio_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_mingpai_ratio_req;

    /**
     * Decodes a mahjong_ermj_mingpai_ratio_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_mingpai_ratio_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_mingpai_ratio_req;

    /**
     * Verifies a mahjong_ermj_mingpai_ratio_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_mingpai_ratio_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_mingpai_ratio_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_mingpai_ratio_req;

    /**
     * Creates a plain object from a mahjong_ermj_mingpai_ratio_req message. Also converts values to other types if specified.
     * @param message mahjong_ermj_mingpai_ratio_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_mingpai_ratio_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_mingpai_ratio_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_tingcards_not. */
export interface Imahjong_ermj_tingcards_not {

    /** mahjong_ermj_tingcards_not vecCards */
    vecCards?: (number[]|null);
}

/** Represents a mahjong_ermj_tingcards_not. */
export class mahjong_ermj_tingcards_not implements Imahjong_ermj_tingcards_not {

    /**
     * Constructs a new mahjong_ermj_tingcards_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_tingcards_not);

    /** mahjong_ermj_tingcards_not vecCards. */
    public vecCards: number[];

    /**
     * Creates a new mahjong_ermj_tingcards_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_tingcards_not instance
     */
    public static create(properties?: Imahjong_ermj_tingcards_not): mahjong_ermj_tingcards_not;

    /**
     * Encodes the specified mahjong_ermj_tingcards_not message. Does not implicitly {@link mahjong_ermj_tingcards_not.verify|verify} messages.
     * @param message mahjong_ermj_tingcards_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_tingcards_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_tingcards_not message, length delimited. Does not implicitly {@link mahjong_ermj_tingcards_not.verify|verify} messages.
     * @param message mahjong_ermj_tingcards_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_tingcards_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_tingcards_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_tingcards_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_tingcards_not;

    /**
     * Decodes a mahjong_ermj_tingcards_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_tingcards_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_tingcards_not;

    /**
     * Verifies a mahjong_ermj_tingcards_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_tingcards_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_tingcards_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_tingcards_not;

    /**
     * Creates a plain object from a mahjong_ermj_tingcards_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_tingcards_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_tingcards_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_tingcards_not to JSON.
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

/** Properties of a mahjong_ermj_task_not. */
export interface Imahjong_ermj_task_not {

    /** mahjong_ermj_task_not nChairId */
    nChairId: number;

    /** mahjong_ermj_task_not nType */
    nType: number;

    /** mahjong_ermj_task_not nTargetValue */
    nTargetValue: number;

    /** mahjong_ermj_task_not nCardValue */
    nCardValue: number;

    /** mahjong_ermj_task_not nRatio */
    nRatio: number;
}

/** Represents a mahjong_ermj_task_not. */
export class mahjong_ermj_task_not implements Imahjong_ermj_task_not {

    /**
     * Constructs a new mahjong_ermj_task_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_task_not);

    /** mahjong_ermj_task_not nChairId. */
    public nChairId: number;

    /** mahjong_ermj_task_not nType. */
    public nType: number;

    /** mahjong_ermj_task_not nTargetValue. */
    public nTargetValue: number;

    /** mahjong_ermj_task_not nCardValue. */
    public nCardValue: number;

    /** mahjong_ermj_task_not nRatio. */
    public nRatio: number;

    /**
     * Creates a new mahjong_ermj_task_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_task_not instance
     */
    public static create(properties?: Imahjong_ermj_task_not): mahjong_ermj_task_not;

    /**
     * Encodes the specified mahjong_ermj_task_not message. Does not implicitly {@link mahjong_ermj_task_not.verify|verify} messages.
     * @param message mahjong_ermj_task_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_task_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_task_not message, length delimited. Does not implicitly {@link mahjong_ermj_task_not.verify|verify} messages.
     * @param message mahjong_ermj_task_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_task_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_task_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_task_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_task_not;

    /**
     * Decodes a mahjong_ermj_task_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_task_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_task_not;

    /**
     * Verifies a mahjong_ermj_task_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_task_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_task_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_task_not;

    /**
     * Creates a plain object from a mahjong_ermj_task_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_task_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_task_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_task_not to JSON.
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

/** Properties of a mahjong_ermj_hudouble_req. */
export interface Imahjong_ermj_hudouble_req {

    /** mahjong_ermj_hudouble_req nFan */
    nFan: number;

    /** mahjong_ermj_hudouble_req nScore */
    nScore: number;
}

/** Represents a mahjong_ermj_hudouble_req. */
export class mahjong_ermj_hudouble_req implements Imahjong_ermj_hudouble_req {

    /**
     * Constructs a new mahjong_ermj_hudouble_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_hudouble_req);

    /** mahjong_ermj_hudouble_req nFan. */
    public nFan: number;

    /** mahjong_ermj_hudouble_req nScore. */
    public nScore: number;

    /**
     * Creates a new mahjong_ermj_hudouble_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_hudouble_req instance
     */
    public static create(properties?: Imahjong_ermj_hudouble_req): mahjong_ermj_hudouble_req;

    /**
     * Encodes the specified mahjong_ermj_hudouble_req message. Does not implicitly {@link mahjong_ermj_hudouble_req.verify|verify} messages.
     * @param message mahjong_ermj_hudouble_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_hudouble_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_hudouble_req message, length delimited. Does not implicitly {@link mahjong_ermj_hudouble_req.verify|verify} messages.
     * @param message mahjong_ermj_hudouble_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_hudouble_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_hudouble_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_hudouble_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_hudouble_req;

    /**
     * Decodes a mahjong_ermj_hudouble_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_hudouble_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_hudouble_req;

    /**
     * Verifies a mahjong_ermj_hudouble_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_hudouble_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_hudouble_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_hudouble_req;

    /**
     * Creates a plain object from a mahjong_ermj_hudouble_req message. Also converts values to other types if specified.
     * @param message mahjong_ermj_hudouble_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_hudouble_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_hudouble_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_robot_req. */
export interface Imahjong_ermj_robot_req {

    /** mahjong_ermj_robot_req nType */
    nType: number;

    /** mahjong_ermj_robot_req nIndex */
    nIndex: number;

    /** mahjong_ermj_robot_req cCard */
    cCard: number;
}

/** Represents a mahjong_ermj_robot_req. */
export class mahjong_ermj_robot_req implements Imahjong_ermj_robot_req {

    /**
     * Constructs a new mahjong_ermj_robot_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_robot_req);

    /** mahjong_ermj_robot_req nType. */
    public nType: number;

    /** mahjong_ermj_robot_req nIndex. */
    public nIndex: number;

    /** mahjong_ermj_robot_req cCard. */
    public cCard: number;

    /**
     * Creates a new mahjong_ermj_robot_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_robot_req instance
     */
    public static create(properties?: Imahjong_ermj_robot_req): mahjong_ermj_robot_req;

    /**
     * Encodes the specified mahjong_ermj_robot_req message. Does not implicitly {@link mahjong_ermj_robot_req.verify|verify} messages.
     * @param message mahjong_ermj_robot_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_robot_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_robot_req message, length delimited. Does not implicitly {@link mahjong_ermj_robot_req.verify|verify} messages.
     * @param message mahjong_ermj_robot_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_robot_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_robot_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_robot_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_robot_req;

    /**
     * Decodes a mahjong_ermj_robot_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_robot_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_robot_req;

    /**
     * Verifies a mahjong_ermj_robot_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_robot_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_robot_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_robot_req;

    /**
     * Creates a plain object from a mahjong_ermj_robot_req message. Also converts values to other types if specified.
     * @param message mahjong_ermj_robot_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_robot_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_robot_req to JSON.
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

/** Properties of a mahjong_ermj_hupai_ratio_rsp. */
export interface Imahjong_ermj_hupai_ratio_rsp {

    /** mahjong_ermj_hupai_ratio_rsp nChairId */
    nChairId: number;

    /** mahjong_ermj_hupai_ratio_rsp nRet */
    nRet: number;
}

/** Represents a mahjong_ermj_hupai_ratio_rsp. */
export class mahjong_ermj_hupai_ratio_rsp implements Imahjong_ermj_hupai_ratio_rsp {

    /**
     * Constructs a new mahjong_ermj_hupai_ratio_rsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_hupai_ratio_rsp);

    /** mahjong_ermj_hupai_ratio_rsp nChairId. */
    public nChairId: number;

    /** mahjong_ermj_hupai_ratio_rsp nRet. */
    public nRet: number;

    /**
     * Creates a new mahjong_ermj_hupai_ratio_rsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_hupai_ratio_rsp instance
     */
    public static create(properties?: Imahjong_ermj_hupai_ratio_rsp): mahjong_ermj_hupai_ratio_rsp;

    /**
     * Encodes the specified mahjong_ermj_hupai_ratio_rsp message. Does not implicitly {@link mahjong_ermj_hupai_ratio_rsp.verify|verify} messages.
     * @param message mahjong_ermj_hupai_ratio_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_hupai_ratio_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_hupai_ratio_rsp message, length delimited. Does not implicitly {@link mahjong_ermj_hupai_ratio_rsp.verify|verify} messages.
     * @param message mahjong_ermj_hupai_ratio_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_hupai_ratio_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_hupai_ratio_rsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_hupai_ratio_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_hupai_ratio_rsp;

    /**
     * Decodes a mahjong_ermj_hupai_ratio_rsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_hupai_ratio_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_hupai_ratio_rsp;

    /**
     * Verifies a mahjong_ermj_hupai_ratio_rsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_hupai_ratio_rsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_hupai_ratio_rsp
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_hupai_ratio_rsp;

    /**
     * Creates a plain object from a mahjong_ermj_hupai_ratio_rsp message. Also converts values to other types if specified.
     * @param message mahjong_ermj_hupai_ratio_rsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_hupai_ratio_rsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_hupai_ratio_rsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_baopai_change_req. */
export interface Imahjong_ermj_baopai_change_req {

    /** mahjong_ermj_baopai_change_req nChairId */
    nChairId: number;
}

/** Represents a mahjong_ermj_baopai_change_req. */
export class mahjong_ermj_baopai_change_req implements Imahjong_ermj_baopai_change_req {

    /**
     * Constructs a new mahjong_ermj_baopai_change_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_baopai_change_req);

    /** mahjong_ermj_baopai_change_req nChairId. */
    public nChairId: number;

    /**
     * Creates a new mahjong_ermj_baopai_change_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_baopai_change_req instance
     */
    public static create(properties?: Imahjong_ermj_baopai_change_req): mahjong_ermj_baopai_change_req;

    /**
     * Encodes the specified mahjong_ermj_baopai_change_req message. Does not implicitly {@link mahjong_ermj_baopai_change_req.verify|verify} messages.
     * @param message mahjong_ermj_baopai_change_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_baopai_change_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_baopai_change_req message, length delimited. Does not implicitly {@link mahjong_ermj_baopai_change_req.verify|verify} messages.
     * @param message mahjong_ermj_baopai_change_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_baopai_change_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_baopai_change_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_baopai_change_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_baopai_change_req;

    /**
     * Decodes a mahjong_ermj_baopai_change_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_baopai_change_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_baopai_change_req;

    /**
     * Verifies a mahjong_ermj_baopai_change_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_baopai_change_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_baopai_change_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_baopai_change_req;

    /**
     * Creates a plain object from a mahjong_ermj_baopai_change_req message. Also converts values to other types if specified.
     * @param message mahjong_ermj_baopai_change_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_baopai_change_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_baopai_change_req to JSON.
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

/** Properties of a mahjong_ermj_dice_not. */
export interface Imahjong_ermj_dice_not {

    /** mahjong_ermj_dice_not cBanker */
    cBanker: number;

    /** mahjong_ermj_dice_not vecDice */
    vecDice?: (number[]|null);

    /** mahjong_ermj_dice_not cWallEndChair */
    cWallEndChair: number;

    /** mahjong_ermj_dice_not cWallEndPos */
    cWallEndPos: number;
}

/** Represents a mahjong_ermj_dice_not. */
export class mahjong_ermj_dice_not implements Imahjong_ermj_dice_not {

    /**
     * Constructs a new mahjong_ermj_dice_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_dice_not);

    /** mahjong_ermj_dice_not cBanker. */
    public cBanker: number;

    /** mahjong_ermj_dice_not vecDice. */
    public vecDice: number[];

    /** mahjong_ermj_dice_not cWallEndChair. */
    public cWallEndChair: number;

    /** mahjong_ermj_dice_not cWallEndPos. */
    public cWallEndPos: number;

    /**
     * Creates a new mahjong_ermj_dice_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_dice_not instance
     */
    public static create(properties?: Imahjong_ermj_dice_not): mahjong_ermj_dice_not;

    /**
     * Encodes the specified mahjong_ermj_dice_not message. Does not implicitly {@link mahjong_ermj_dice_not.verify|verify} messages.
     * @param message mahjong_ermj_dice_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_dice_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_dice_not message, length delimited. Does not implicitly {@link mahjong_ermj_dice_not.verify|verify} messages.
     * @param message mahjong_ermj_dice_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_dice_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_dice_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_dice_not;

    /**
     * Decodes a mahjong_ermj_dice_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_dice_not;

    /**
     * Verifies a mahjong_ermj_dice_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_dice_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_dice_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_dice_not;

    /**
     * Creates a plain object from a mahjong_ermj_dice_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_dice_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_dice_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_dice_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_achieve_req. */
export interface Imahjong_ermj_achieve_req {

    /** mahjong_ermj_achieve_req nChairId */
    nChairId: number;

    /** mahjong_ermj_achieve_req nType */
    nType: number;
}

/** Represents a mahjong_ermj_achieve_req. */
export class mahjong_ermj_achieve_req implements Imahjong_ermj_achieve_req {

    /**
     * Constructs a new mahjong_ermj_achieve_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_achieve_req);

    /** mahjong_ermj_achieve_req nChairId. */
    public nChairId: number;

    /** mahjong_ermj_achieve_req nType. */
    public nType: number;

    /**
     * Creates a new mahjong_ermj_achieve_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_achieve_req instance
     */
    public static create(properties?: Imahjong_ermj_achieve_req): mahjong_ermj_achieve_req;

    /**
     * Encodes the specified mahjong_ermj_achieve_req message. Does not implicitly {@link mahjong_ermj_achieve_req.verify|verify} messages.
     * @param message mahjong_ermj_achieve_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_achieve_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_achieve_req message, length delimited. Does not implicitly {@link mahjong_ermj_achieve_req.verify|verify} messages.
     * @param message mahjong_ermj_achieve_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_achieve_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_achieve_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_achieve_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_achieve_req;

    /**
     * Decodes a mahjong_ermj_achieve_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_achieve_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_achieve_req;

    /**
     * Verifies a mahjong_ermj_achieve_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_achieve_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_achieve_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_achieve_req;

    /**
     * Creates a plain object from a mahjong_ermj_achieve_req message. Also converts values to other types if specified.
     * @param message mahjong_ermj_achieve_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_achieve_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_achieve_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_readyting_not. */
export interface Imahjong_ermj_readyting_not {

    /** mahjong_ermj_readyting_not cChi */
    cChi: number;

    /** mahjong_ermj_readyting_not cPeng */
    cPeng: number;

    /** mahjong_ermj_readyting_not cCard */
    cCard: number;

    /** mahjong_ermj_readyting_not vecChiType */
    vecChiType?: (number[]|null);
}

/** Represents a mahjong_ermj_readyting_not. */
export class mahjong_ermj_readyting_not implements Imahjong_ermj_readyting_not {

    /**
     * Constructs a new mahjong_ermj_readyting_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_readyting_not);

    /** mahjong_ermj_readyting_not cChi. */
    public cChi: number;

    /** mahjong_ermj_readyting_not cPeng. */
    public cPeng: number;

    /** mahjong_ermj_readyting_not cCard. */
    public cCard: number;

    /** mahjong_ermj_readyting_not vecChiType. */
    public vecChiType: number[];

    /**
     * Creates a new mahjong_ermj_readyting_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_readyting_not instance
     */
    public static create(properties?: Imahjong_ermj_readyting_not): mahjong_ermj_readyting_not;

    /**
     * Encodes the specified mahjong_ermj_readyting_not message. Does not implicitly {@link mahjong_ermj_readyting_not.verify|verify} messages.
     * @param message mahjong_ermj_readyting_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_readyting_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_readyting_not message, length delimited. Does not implicitly {@link mahjong_ermj_readyting_not.verify|verify} messages.
     * @param message mahjong_ermj_readyting_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_readyting_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_readyting_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_readyting_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_readyting_not;

    /**
     * Decodes a mahjong_ermj_readyting_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_readyting_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_readyting_not;

    /**
     * Verifies a mahjong_ermj_readyting_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_readyting_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_readyting_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_readyting_not;

    /**
     * Creates a plain object from a mahjong_ermj_readyting_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_readyting_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_readyting_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_readyting_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_task_complete_not. */
export interface Imahjong_ermj_task_complete_not {

    /** mahjong_ermj_task_complete_not nRet */
    nRet: number;

    /** mahjong_ermj_task_complete_not unReachValue */
    unReachValue: number;
}

/** Represents a mahjong_ermj_task_complete_not. */
export class mahjong_ermj_task_complete_not implements Imahjong_ermj_task_complete_not {

    /**
     * Constructs a new mahjong_ermj_task_complete_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_task_complete_not);

    /** mahjong_ermj_task_complete_not nRet. */
    public nRet: number;

    /** mahjong_ermj_task_complete_not unReachValue. */
    public unReachValue: number;

    /**
     * Creates a new mahjong_ermj_task_complete_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_task_complete_not instance
     */
    public static create(properties?: Imahjong_ermj_task_complete_not): mahjong_ermj_task_complete_not;

    /**
     * Encodes the specified mahjong_ermj_task_complete_not message. Does not implicitly {@link mahjong_ermj_task_complete_not.verify|verify} messages.
     * @param message mahjong_ermj_task_complete_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_task_complete_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_task_complete_not message, length delimited. Does not implicitly {@link mahjong_ermj_task_complete_not.verify|verify} messages.
     * @param message mahjong_ermj_task_complete_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_task_complete_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_task_complete_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_task_complete_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_task_complete_not;

    /**
     * Decodes a mahjong_ermj_task_complete_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_task_complete_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_task_complete_not;

    /**
     * Verifies a mahjong_ermj_task_complete_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_task_complete_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_task_complete_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_task_complete_not;

    /**
     * Creates a plain object from a mahjong_ermj_task_complete_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_task_complete_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_task_complete_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_task_complete_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_st_gameresult. */
export interface Imahjong_st_gameresult {

    /** mahjong_st_gameresult cChairID */
    cChairID: number;

    /** mahjong_st_gameresult vecResult */
    vecResult?: (number[]|null);

    /** mahjong_st_gameresult nScore */
    nScore: number;

    /** mahjong_st_gameresult nFan */
    nFan: number;

    /** mahjong_st_gameresult nAllScore */
    nAllScore: number;

    /** mahjong_st_gameresult cMingGangNum */
    cMingGangNum: number;

    /** mahjong_st_gameresult cAnGangNum */
    cAnGangNum: number;

    /** mahjong_st_gameresult cBuGangNum */
    cBuGangNum: number;

    /** mahjong_st_gameresult cDianGangNum */
    cDianGangNum: number;
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

    /** mahjong_st_gameresult vecResult. */
    public vecResult: number[];

    /** mahjong_st_gameresult nScore. */
    public nScore: number;

    /** mahjong_st_gameresult nFan. */
    public nFan: number;

    /** mahjong_st_gameresult nAllScore. */
    public nAllScore: number;

    /** mahjong_st_gameresult cMingGangNum. */
    public cMingGangNum: number;

    /** mahjong_st_gameresult cAnGangNum. */
    public cAnGangNum: number;

    /** mahjong_st_gameresult cBuGangNum. */
    public cBuGangNum: number;

    /** mahjong_st_gameresult cDianGangNum. */
    public cDianGangNum: number;

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

/** Properties of a mahjong_ermj_svr_dizhu_not. */
export interface Imahjong_ermj_svr_dizhu_not {

    /** mahjong_ermj_svr_dizhu_not nDiZhu */
    nDiZhu: number;
}

/** Represents a mahjong_ermj_svr_dizhu_not. */
export class mahjong_ermj_svr_dizhu_not implements Imahjong_ermj_svr_dizhu_not {

    /**
     * Constructs a new mahjong_ermj_svr_dizhu_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_svr_dizhu_not);

    /** mahjong_ermj_svr_dizhu_not nDiZhu. */
    public nDiZhu: number;

    /**
     * Creates a new mahjong_ermj_svr_dizhu_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_svr_dizhu_not instance
     */
    public static create(properties?: Imahjong_ermj_svr_dizhu_not): mahjong_ermj_svr_dizhu_not;

    /**
     * Encodes the specified mahjong_ermj_svr_dizhu_not message. Does not implicitly {@link mahjong_ermj_svr_dizhu_not.verify|verify} messages.
     * @param message mahjong_ermj_svr_dizhu_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_svr_dizhu_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_svr_dizhu_not message, length delimited. Does not implicitly {@link mahjong_ermj_svr_dizhu_not.verify|verify} messages.
     * @param message mahjong_ermj_svr_dizhu_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_svr_dizhu_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_svr_dizhu_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_svr_dizhu_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_svr_dizhu_not;

    /**
     * Decodes a mahjong_ermj_svr_dizhu_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_svr_dizhu_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_svr_dizhu_not;

    /**
     * Verifies a mahjong_ermj_svr_dizhu_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_svr_dizhu_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_svr_dizhu_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_svr_dizhu_not;

    /**
     * Creates a plain object from a mahjong_ermj_svr_dizhu_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_svr_dizhu_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_svr_dizhu_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_svr_dizhu_not to JSON.
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

/** Properties of a mahjong_ermj_playcard_req_new. */
export interface Imahjong_ermj_playcard_req_new {

    /** mahjong_ermj_playcard_req_new cChairID */
    cChairID: number;

    /** mahjong_ermj_playcard_req_new nOpcode */
    nOpcode: number;

    /** mahjong_ermj_playcard_req_new cPrevCard */
    cPrevCard: number;

    /** mahjong_ermj_playcard_req_new vecTingPutCards */
    vecTingPutCards?: (number[]|null);

    /** mahjong_ermj_playcard_req_new vecTingHuCards */
    vecTingHuCards?: (number[]|null);

    /** mahjong_ermj_playcard_req_new vecGangInfo */
    vecGangInfo?: (Imahjong_gang_info[]|null);

    /** mahjong_ermj_playcard_req_new sSerialID */
    sSerialID: number;
}

/** Represents a mahjong_ermj_playcard_req_new. */
export class mahjong_ermj_playcard_req_new implements Imahjong_ermj_playcard_req_new {

    /**
     * Constructs a new mahjong_ermj_playcard_req_new.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_playcard_req_new);

    /** mahjong_ermj_playcard_req_new cChairID. */
    public cChairID: number;

    /** mahjong_ermj_playcard_req_new nOpcode. */
    public nOpcode: number;

    /** mahjong_ermj_playcard_req_new cPrevCard. */
    public cPrevCard: number;

    /** mahjong_ermj_playcard_req_new vecTingPutCards. */
    public vecTingPutCards: number[];

    /** mahjong_ermj_playcard_req_new vecTingHuCards. */
    public vecTingHuCards: number[];

    /** mahjong_ermj_playcard_req_new vecGangInfo. */
    public vecGangInfo: Imahjong_gang_info[];

    /** mahjong_ermj_playcard_req_new sSerialID. */
    public sSerialID: number;

    /**
     * Creates a new mahjong_ermj_playcard_req_new instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_playcard_req_new instance
     */
    public static create(properties?: Imahjong_ermj_playcard_req_new): mahjong_ermj_playcard_req_new;

    /**
     * Encodes the specified mahjong_ermj_playcard_req_new message. Does not implicitly {@link mahjong_ermj_playcard_req_new.verify|verify} messages.
     * @param message mahjong_ermj_playcard_req_new message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_playcard_req_new, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_playcard_req_new message, length delimited. Does not implicitly {@link mahjong_ermj_playcard_req_new.verify|verify} messages.
     * @param message mahjong_ermj_playcard_req_new message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_playcard_req_new, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_playcard_req_new message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_playcard_req_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_playcard_req_new;

    /**
     * Decodes a mahjong_ermj_playcard_req_new message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_playcard_req_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_playcard_req_new;

    /**
     * Verifies a mahjong_ermj_playcard_req_new message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_playcard_req_new message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_playcard_req_new
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_playcard_req_new;

    /**
     * Creates a plain object from a mahjong_ermj_playcard_req_new message. Also converts values to other types if specified.
     * @param message mahjong_ermj_playcard_req_new
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_playcard_req_new, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_playcard_req_new to JSON.
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

/** Properties of a mahjong_ermj_visi_compdata_not. */
export interface Imahjong_ermj_visi_compdata_not {

    /** mahjong_ermj_visi_compdata_not cBanker */
    cBanker: number;

    /** mahjong_ermj_visi_compdata_not nLeftCards */
    nLeftCards: number;

    /** mahjong_ermj_visi_compdata_not nDizhu */
    nDizhu: number;

    /** mahjong_ermj_visi_compdata_not nTaifei */
    nTaifei: number;

    /** mahjong_ermj_visi_compdata_not cCurrPly */
    cCurrPly: number;

    /** mahjong_ermj_visi_compdata_not cPrioPly */
    cPrioPly: number;

    /** mahjong_ermj_visi_compdata_not cAdminPly */
    cAdminPly: number;

    /** mahjong_ermj_visi_compdata_not cInvitePly */
    cInvitePly: number;

    /** mahjong_ermj_visi_compdata_not vecPlyData */
    vecPlyData?: (Imahjong_ermj_changecard_not[]|null);

    /** mahjong_ermj_visi_compdata_not vecTingPly */
    vecTingPly?: (number[]|null);

    /** mahjong_ermj_visi_compdata_not vecHuaNum */
    vecHuaNum?: (number[]|null);

    /** mahjong_ermj_visi_compdata_not nParam1 */
    nParam1: number;

    /** mahjong_ermj_visi_compdata_not nParam2 */
    nParam2: number;

    /** mahjong_ermj_visi_compdata_not strParam1 */
    strParam1: string;

    /** mahjong_ermj_visi_compdata_not strParam2 */
    strParam2: string;
}

/** Represents a mahjong_ermj_visi_compdata_not. */
export class mahjong_ermj_visi_compdata_not implements Imahjong_ermj_visi_compdata_not {

    /**
     * Constructs a new mahjong_ermj_visi_compdata_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_visi_compdata_not);

    /** mahjong_ermj_visi_compdata_not cBanker. */
    public cBanker: number;

    /** mahjong_ermj_visi_compdata_not nLeftCards. */
    public nLeftCards: number;

    /** mahjong_ermj_visi_compdata_not nDizhu. */
    public nDizhu: number;

    /** mahjong_ermj_visi_compdata_not nTaifei. */
    public nTaifei: number;

    /** mahjong_ermj_visi_compdata_not cCurrPly. */
    public cCurrPly: number;

    /** mahjong_ermj_visi_compdata_not cPrioPly. */
    public cPrioPly: number;

    /** mahjong_ermj_visi_compdata_not cAdminPly. */
    public cAdminPly: number;

    /** mahjong_ermj_visi_compdata_not cInvitePly. */
    public cInvitePly: number;

    /** mahjong_ermj_visi_compdata_not vecPlyData. */
    public vecPlyData: Imahjong_ermj_changecard_not[];

    /** mahjong_ermj_visi_compdata_not vecTingPly. */
    public vecTingPly: number[];

    /** mahjong_ermj_visi_compdata_not vecHuaNum. */
    public vecHuaNum: number[];

    /** mahjong_ermj_visi_compdata_not nParam1. */
    public nParam1: number;

    /** mahjong_ermj_visi_compdata_not nParam2. */
    public nParam2: number;

    /** mahjong_ermj_visi_compdata_not strParam1. */
    public strParam1: string;

    /** mahjong_ermj_visi_compdata_not strParam2. */
    public strParam2: string;

    /**
     * Creates a new mahjong_ermj_visi_compdata_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_visi_compdata_not instance
     */
    public static create(properties?: Imahjong_ermj_visi_compdata_not): mahjong_ermj_visi_compdata_not;

    /**
     * Encodes the specified mahjong_ermj_visi_compdata_not message. Does not implicitly {@link mahjong_ermj_visi_compdata_not.verify|verify} messages.
     * @param message mahjong_ermj_visi_compdata_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_visi_compdata_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_visi_compdata_not message, length delimited. Does not implicitly {@link mahjong_ermj_visi_compdata_not.verify|verify} messages.
     * @param message mahjong_ermj_visi_compdata_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_visi_compdata_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_visi_compdata_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_visi_compdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_visi_compdata_not;

    /**
     * Decodes a mahjong_ermj_visi_compdata_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_visi_compdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_visi_compdata_not;

    /**
     * Verifies a mahjong_ermj_visi_compdata_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_visi_compdata_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_visi_compdata_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_visi_compdata_not;

    /**
     * Creates a plain object from a mahjong_ermj_visi_compdata_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_visi_compdata_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_visi_compdata_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_visi_compdata_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_gc_clienttimer_not. */
export interface Imahjong_ermj_gc_clienttimer_not {

    /** mahjong_ermj_gc_clienttimer_not chairId */
    chairId: number;

    /** mahjong_ermj_gc_clienttimer_not sPeriod */
    sPeriod: number;
}

/** Represents a mahjong_ermj_gc_clienttimer_not. */
export class mahjong_ermj_gc_clienttimer_not implements Imahjong_ermj_gc_clienttimer_not {

    /**
     * Constructs a new mahjong_ermj_gc_clienttimer_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_gc_clienttimer_not);

    /** mahjong_ermj_gc_clienttimer_not chairId. */
    public chairId: number;

    /** mahjong_ermj_gc_clienttimer_not sPeriod. */
    public sPeriod: number;

    /**
     * Creates a new mahjong_ermj_gc_clienttimer_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_gc_clienttimer_not instance
     */
    public static create(properties?: Imahjong_ermj_gc_clienttimer_not): mahjong_ermj_gc_clienttimer_not;

    /**
     * Encodes the specified mahjong_ermj_gc_clienttimer_not message. Does not implicitly {@link mahjong_ermj_gc_clienttimer_not.verify|verify} messages.
     * @param message mahjong_ermj_gc_clienttimer_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_gc_clienttimer_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_gc_clienttimer_not message, length delimited. Does not implicitly {@link mahjong_ermj_gc_clienttimer_not.verify|verify} messages.
     * @param message mahjong_ermj_gc_clienttimer_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_gc_clienttimer_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_gc_clienttimer_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_gc_clienttimer_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_gc_clienttimer_not;

    /**
     * Decodes a mahjong_ermj_gc_clienttimer_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_gc_clienttimer_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_gc_clienttimer_not;

    /**
     * Verifies a mahjong_ermj_gc_clienttimer_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_gc_clienttimer_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_gc_clienttimer_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_gc_clienttimer_not;

    /**
     * Creates a plain object from a mahjong_ermj_gc_clienttimer_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_gc_clienttimer_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_gc_clienttimer_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_gc_clienttimer_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_gameresult_not_jj. */
export interface Imahjong_ermj_gameresult_not_jj {

    /** mahjong_ermj_gameresult_not_jj cWinChairID */
    cWinChairID: number;

    /** mahjong_ermj_gameresult_not_jj vecGameResult */
    vecGameResult?: (Imahjong_st_gameresult[]|null);

    /** mahjong_ermj_gameresult_not_jj cType */
    cType: number;

    /** mahjong_ermj_gameresult_not_jj nBei */
    nBei: number;

    /** mahjong_ermj_gameresult_not_jj nHua */
    nHua: number;

    /** mahjong_ermj_gameresult_not_jj nBanker */
    nBanker: number;

    /** mahjong_ermj_gameresult_not_jj nHuDouble */
    nHuDouble: number;

    /** mahjong_ermj_gameresult_not_jj nMingRatio */
    nMingRatio: number;

    /** mahjong_ermj_gameresult_not_jj nTaskRatio */
    nTaskRatio: number;

    /** mahjong_ermj_gameresult_not_jj nBaopaiRatio */
    nBaopaiRatio: number;

    /** mahjong_ermj_gameresult_not_jj nAwardAll */
    nAwardAll: number;

    /** mahjong_ermj_gameresult_not_jj vecFanAward */
    vecFanAward?: (Imahjong_fan_award_data[]|null);
}

/** Represents a mahjong_ermj_gameresult_not_jj. */
export class mahjong_ermj_gameresult_not_jj implements Imahjong_ermj_gameresult_not_jj {

    /**
     * Constructs a new mahjong_ermj_gameresult_not_jj.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_gameresult_not_jj);

    /** mahjong_ermj_gameresult_not_jj cWinChairID. */
    public cWinChairID: number;

    /** mahjong_ermj_gameresult_not_jj vecGameResult. */
    public vecGameResult: Imahjong_st_gameresult[];

    /** mahjong_ermj_gameresult_not_jj cType. */
    public cType: number;

    /** mahjong_ermj_gameresult_not_jj nBei. */
    public nBei: number;

    /** mahjong_ermj_gameresult_not_jj nHua. */
    public nHua: number;

    /** mahjong_ermj_gameresult_not_jj nBanker. */
    public nBanker: number;

    /** mahjong_ermj_gameresult_not_jj nHuDouble. */
    public nHuDouble: number;

    /** mahjong_ermj_gameresult_not_jj nMingRatio. */
    public nMingRatio: number;

    /** mahjong_ermj_gameresult_not_jj nTaskRatio. */
    public nTaskRatio: number;

    /** mahjong_ermj_gameresult_not_jj nBaopaiRatio. */
    public nBaopaiRatio: number;

    /** mahjong_ermj_gameresult_not_jj nAwardAll. */
    public nAwardAll: number;

    /** mahjong_ermj_gameresult_not_jj vecFanAward. */
    public vecFanAward: Imahjong_fan_award_data[];

    /**
     * Creates a new mahjong_ermj_gameresult_not_jj instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_gameresult_not_jj instance
     */
    public static create(properties?: Imahjong_ermj_gameresult_not_jj): mahjong_ermj_gameresult_not_jj;

    /**
     * Encodes the specified mahjong_ermj_gameresult_not_jj message. Does not implicitly {@link mahjong_ermj_gameresult_not_jj.verify|verify} messages.
     * @param message mahjong_ermj_gameresult_not_jj message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_gameresult_not_jj, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_gameresult_not_jj message, length delimited. Does not implicitly {@link mahjong_ermj_gameresult_not_jj.verify|verify} messages.
     * @param message mahjong_ermj_gameresult_not_jj message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_gameresult_not_jj, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_gameresult_not_jj message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_gameresult_not_jj
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_gameresult_not_jj;

    /**
     * Decodes a mahjong_ermj_gameresult_not_jj message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_gameresult_not_jj
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_gameresult_not_jj;

    /**
     * Verifies a mahjong_ermj_gameresult_not_jj message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_gameresult_not_jj message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_gameresult_not_jj
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_gameresult_not_jj;

    /**
     * Creates a plain object from a mahjong_ermj_gameresult_not_jj message. Also converts values to other types if specified.
     * @param message mahjong_ermj_gameresult_not_jj
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_gameresult_not_jj, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_gameresult_not_jj to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_animate_ok_req. */
export interface Imahjong_ermj_animate_ok_req {
}

/** Represents a mahjong_ermj_animate_ok_req. */
export class mahjong_ermj_animate_ok_req implements Imahjong_ermj_animate_ok_req {

    /**
     * Constructs a new mahjong_ermj_animate_ok_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_animate_ok_req);

    /**
     * Creates a new mahjong_ermj_animate_ok_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_animate_ok_req instance
     */
    public static create(properties?: Imahjong_ermj_animate_ok_req): mahjong_ermj_animate_ok_req;

    /**
     * Encodes the specified mahjong_ermj_animate_ok_req message. Does not implicitly {@link mahjong_ermj_animate_ok_req.verify|verify} messages.
     * @param message mahjong_ermj_animate_ok_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_animate_ok_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_animate_ok_req message, length delimited. Does not implicitly {@link mahjong_ermj_animate_ok_req.verify|verify} messages.
     * @param message mahjong_ermj_animate_ok_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_animate_ok_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_animate_ok_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_animate_ok_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_animate_ok_req;

    /**
     * Decodes a mahjong_ermj_animate_ok_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_animate_ok_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_animate_ok_req;

    /**
     * Verifies a mahjong_ermj_animate_ok_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_animate_ok_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_animate_ok_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_animate_ok_req;

    /**
     * Creates a plain object from a mahjong_ermj_animate_ok_req message. Also converts values to other types if specified.
     * @param message mahjong_ermj_animate_ok_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_animate_ok_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_animate_ok_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_gameresult_not. */
export interface Imahjong_ermj_gameresult_not {

    /** mahjong_ermj_gameresult_not cWinChairID */
    cWinChairID: number;

    /** mahjong_ermj_gameresult_not vecGameResult */
    vecGameResult?: (Imahjong_st_gameresult[]|null);

    /** mahjong_ermj_gameresult_not cType */
    cType: number;

    /** mahjong_ermj_gameresult_not nBei */
    nBei: number;

    /** mahjong_ermj_gameresult_not nHua */
    nHua: number;

    /** mahjong_ermj_gameresult_not nBanker */
    nBanker: number;

    /** mahjong_ermj_gameresult_not nHuDouble */
    nHuDouble: number;

    /** mahjong_ermj_gameresult_not nMingRatio */
    nMingRatio: number;

    /** mahjong_ermj_gameresult_not nTaskRatio */
    nTaskRatio: number;

    /** mahjong_ermj_gameresult_not nBaopaiRatio */
    nBaopaiRatio: number;
}

/** Represents a mahjong_ermj_gameresult_not. */
export class mahjong_ermj_gameresult_not implements Imahjong_ermj_gameresult_not {

    /**
     * Constructs a new mahjong_ermj_gameresult_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_gameresult_not);

    /** mahjong_ermj_gameresult_not cWinChairID. */
    public cWinChairID: number;

    /** mahjong_ermj_gameresult_not vecGameResult. */
    public vecGameResult: Imahjong_st_gameresult[];

    /** mahjong_ermj_gameresult_not cType. */
    public cType: number;

    /** mahjong_ermj_gameresult_not nBei. */
    public nBei: number;

    /** mahjong_ermj_gameresult_not nHua. */
    public nHua: number;

    /** mahjong_ermj_gameresult_not nBanker. */
    public nBanker: number;

    /** mahjong_ermj_gameresult_not nHuDouble. */
    public nHuDouble: number;

    /** mahjong_ermj_gameresult_not nMingRatio. */
    public nMingRatio: number;

    /** mahjong_ermj_gameresult_not nTaskRatio. */
    public nTaskRatio: number;

    /** mahjong_ermj_gameresult_not nBaopaiRatio. */
    public nBaopaiRatio: number;

    /**
     * Creates a new mahjong_ermj_gameresult_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_gameresult_not instance
     */
    public static create(properties?: Imahjong_ermj_gameresult_not): mahjong_ermj_gameresult_not;

    /**
     * Encodes the specified mahjong_ermj_gameresult_not message. Does not implicitly {@link mahjong_ermj_gameresult_not.verify|verify} messages.
     * @param message mahjong_ermj_gameresult_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_gameresult_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_gameresult_not message, length delimited. Does not implicitly {@link mahjong_ermj_gameresult_not.verify|verify} messages.
     * @param message mahjong_ermj_gameresult_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_gameresult_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_gameresult_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_gameresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_gameresult_not;

    /**
     * Decodes a mahjong_ermj_gameresult_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_gameresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_gameresult_not;

    /**
     * Verifies a mahjong_ermj_gameresult_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_gameresult_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_gameresult_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_gameresult_not;

    /**
     * Creates a plain object from a mahjong_ermj_gameresult_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_gameresult_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_gameresult_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_gameresult_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_winstreak_req. */
export interface Imahjong_ermj_winstreak_req {

    /** mahjong_ermj_winstreak_req nChairId */
    nChairId: number;

    /** mahjong_ermj_winstreak_req nNum */
    nNum: number;
}

/** Represents a mahjong_ermj_winstreak_req. */
export class mahjong_ermj_winstreak_req implements Imahjong_ermj_winstreak_req {

    /**
     * Constructs a new mahjong_ermj_winstreak_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_winstreak_req);

    /** mahjong_ermj_winstreak_req nChairId. */
    public nChairId: number;

    /** mahjong_ermj_winstreak_req nNum. */
    public nNum: number;

    /**
     * Creates a new mahjong_ermj_winstreak_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_winstreak_req instance
     */
    public static create(properties?: Imahjong_ermj_winstreak_req): mahjong_ermj_winstreak_req;

    /**
     * Encodes the specified mahjong_ermj_winstreak_req message. Does not implicitly {@link mahjong_ermj_winstreak_req.verify|verify} messages.
     * @param message mahjong_ermj_winstreak_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_winstreak_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_winstreak_req message, length delimited. Does not implicitly {@link mahjong_ermj_winstreak_req.verify|verify} messages.
     * @param message mahjong_ermj_winstreak_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_winstreak_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_winstreak_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_winstreak_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_winstreak_req;

    /**
     * Decodes a mahjong_ermj_winstreak_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_winstreak_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_winstreak_req;

    /**
     * Verifies a mahjong_ermj_winstreak_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_winstreak_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_winstreak_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_winstreak_req;

    /**
     * Creates a plain object from a mahjong_ermj_winstreak_req message. Also converts values to other types if specified.
     * @param message mahjong_ermj_winstreak_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_winstreak_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_winstreak_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_robot_not. */
export interface Imahjong_ermj_robot_not {

    /** mahjong_ermj_robot_not nType */
    nType: number;

    /** mahjong_ermj_robot_not vecCards */
    vecCards?: (number[]|null);
}

/** Represents a mahjong_ermj_robot_not. */
export class mahjong_ermj_robot_not implements Imahjong_ermj_robot_not {

    /**
     * Constructs a new mahjong_ermj_robot_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_robot_not);

    /** mahjong_ermj_robot_not nType. */
    public nType: number;

    /** mahjong_ermj_robot_not vecCards. */
    public vecCards: number[];

    /**
     * Creates a new mahjong_ermj_robot_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_robot_not instance
     */
    public static create(properties?: Imahjong_ermj_robot_not): mahjong_ermj_robot_not;

    /**
     * Encodes the specified mahjong_ermj_robot_not message. Does not implicitly {@link mahjong_ermj_robot_not.verify|verify} messages.
     * @param message mahjong_ermj_robot_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_robot_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_robot_not message, length delimited. Does not implicitly {@link mahjong_ermj_robot_not.verify|verify} messages.
     * @param message mahjong_ermj_robot_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_robot_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_robot_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_robot_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_robot_not;

    /**
     * Decodes a mahjong_ermj_robot_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_robot_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_robot_not;

    /**
     * Verifies a mahjong_ermj_robot_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_robot_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_robot_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_robot_not;

    /**
     * Creates a plain object from a mahjong_ermj_robot_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_robot_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_robot_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_robot_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_fan_award_data. */
export interface Imahjong_fan_award_data {

    /** mahjong_fan_award_data sFanName */
    sFanName: string;

    /** mahjong_fan_award_data nFan */
    nFan: number;

    /** mahjong_fan_award_data nAwardNum */
    nAwardNum: number;
}

/** Represents a mahjong_fan_award_data. */
export class mahjong_fan_award_data implements Imahjong_fan_award_data {

    /**
     * Constructs a new mahjong_fan_award_data.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_fan_award_data);

    /** mahjong_fan_award_data sFanName. */
    public sFanName: string;

    /** mahjong_fan_award_data nFan. */
    public nFan: number;

    /** mahjong_fan_award_data nAwardNum. */
    public nAwardNum: number;

    /**
     * Creates a new mahjong_fan_award_data instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_fan_award_data instance
     */
    public static create(properties?: Imahjong_fan_award_data): mahjong_fan_award_data;

    /**
     * Encodes the specified mahjong_fan_award_data message. Does not implicitly {@link mahjong_fan_award_data.verify|verify} messages.
     * @param message mahjong_fan_award_data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_fan_award_data, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_fan_award_data message, length delimited. Does not implicitly {@link mahjong_fan_award_data.verify|verify} messages.
     * @param message mahjong_fan_award_data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_fan_award_data, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_fan_award_data message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_fan_award_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_fan_award_data;

    /**
     * Decodes a mahjong_fan_award_data message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_fan_award_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_fan_award_data;

    /**
     * Verifies a mahjong_fan_award_data message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_fan_award_data message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_fan_award_data
     */
    public static fromObject(object: { [k: string]: any }): mahjong_fan_award_data;

    /**
     * Creates a plain object from a mahjong_fan_award_data message. Also converts values to other types if specified.
     * @param message mahjong_fan_award_data
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_fan_award_data, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_fan_award_data to JSON.
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

/** Properties of a mahjong_ermj_gc_expression_not. */
export interface Imahjong_ermj_gc_expression_not {

    /** mahjong_ermj_gc_expression_not expressionType */
    expressionType: number;

    /** mahjong_ermj_gc_expression_not expressionNum */
    expressionNum: number;
}

/** Represents a mahjong_ermj_gc_expression_not. */
export class mahjong_ermj_gc_expression_not implements Imahjong_ermj_gc_expression_not {

    /**
     * Constructs a new mahjong_ermj_gc_expression_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_gc_expression_not);

    /** mahjong_ermj_gc_expression_not expressionType. */
    public expressionType: number;

    /** mahjong_ermj_gc_expression_not expressionNum. */
    public expressionNum: number;

    /**
     * Creates a new mahjong_ermj_gc_expression_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_gc_expression_not instance
     */
    public static create(properties?: Imahjong_ermj_gc_expression_not): mahjong_ermj_gc_expression_not;

    /**
     * Encodes the specified mahjong_ermj_gc_expression_not message. Does not implicitly {@link mahjong_ermj_gc_expression_not.verify|verify} messages.
     * @param message mahjong_ermj_gc_expression_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_gc_expression_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_gc_expression_not message, length delimited. Does not implicitly {@link mahjong_ermj_gc_expression_not.verify|verify} messages.
     * @param message mahjong_ermj_gc_expression_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_gc_expression_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_gc_expression_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_gc_expression_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_gc_expression_not;

    /**
     * Decodes a mahjong_ermj_gc_expression_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_gc_expression_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_gc_expression_not;

    /**
     * Verifies a mahjong_ermj_gc_expression_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_gc_expression_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_gc_expression_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_gc_expression_not;

    /**
     * Creates a plain object from a mahjong_ermj_gc_expression_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_gc_expression_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_gc_expression_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_gc_expression_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_mj_replay_data_not. */
export interface Imahjong_mj_replay_data_not {

    /** mahjong_mj_replay_data_not vecChangeCards */
    vecChangeCards?: (Imahjong_ermj_changecard_not_new[]|null);
}

/** Represents a mahjong_mj_replay_data_not. */
export class mahjong_mj_replay_data_not implements Imahjong_mj_replay_data_not {

    /**
     * Constructs a new mahjong_mj_replay_data_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_mj_replay_data_not);

    /** mahjong_mj_replay_data_not vecChangeCards. */
    public vecChangeCards: Imahjong_ermj_changecard_not_new[];

    /**
     * Creates a new mahjong_mj_replay_data_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_mj_replay_data_not instance
     */
    public static create(properties?: Imahjong_mj_replay_data_not): mahjong_mj_replay_data_not;

    /**
     * Encodes the specified mahjong_mj_replay_data_not message. Does not implicitly {@link mahjong_mj_replay_data_not.verify|verify} messages.
     * @param message mahjong_mj_replay_data_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_mj_replay_data_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_mj_replay_data_not message, length delimited. Does not implicitly {@link mahjong_mj_replay_data_not.verify|verify} messages.
     * @param message mahjong_mj_replay_data_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_mj_replay_data_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_mj_replay_data_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_mj_replay_data_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_mj_replay_data_not;

    /**
     * Decodes a mahjong_mj_replay_data_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_mj_replay_data_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_mj_replay_data_not;

    /**
     * Verifies a mahjong_mj_replay_data_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_mj_replay_data_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_mj_replay_data_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_mj_replay_data_not;

    /**
     * Creates a plain object from a mahjong_mj_replay_data_not message. Also converts values to other types if specified.
     * @param message mahjong_mj_replay_data_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_mj_replay_data_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_mj_replay_data_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_winstreak_rsp. */
export interface Imahjong_ermj_winstreak_rsp {

    /** mahjong_ermj_winstreak_rsp nChairId */
    nChairId: number;

    /** mahjong_ermj_winstreak_rsp nRet */
    nRet: number;

    /** mahjong_ermj_winstreak_rsp nNum */
    nNum: number;
}

/** Represents a mahjong_ermj_winstreak_rsp. */
export class mahjong_ermj_winstreak_rsp implements Imahjong_ermj_winstreak_rsp {

    /**
     * Constructs a new mahjong_ermj_winstreak_rsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_winstreak_rsp);

    /** mahjong_ermj_winstreak_rsp nChairId. */
    public nChairId: number;

    /** mahjong_ermj_winstreak_rsp nRet. */
    public nRet: number;

    /** mahjong_ermj_winstreak_rsp nNum. */
    public nNum: number;

    /**
     * Creates a new mahjong_ermj_winstreak_rsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_winstreak_rsp instance
     */
    public static create(properties?: Imahjong_ermj_winstreak_rsp): mahjong_ermj_winstreak_rsp;

    /**
     * Encodes the specified mahjong_ermj_winstreak_rsp message. Does not implicitly {@link mahjong_ermj_winstreak_rsp.verify|verify} messages.
     * @param message mahjong_ermj_winstreak_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_winstreak_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_winstreak_rsp message, length delimited. Does not implicitly {@link mahjong_ermj_winstreak_rsp.verify|verify} messages.
     * @param message mahjong_ermj_winstreak_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_winstreak_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_winstreak_rsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_winstreak_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_winstreak_rsp;

    /**
     * Decodes a mahjong_ermj_winstreak_rsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_winstreak_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_winstreak_rsp;

    /**
     * Verifies a mahjong_ermj_winstreak_rsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_winstreak_rsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_winstreak_rsp
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_winstreak_rsp;

    /**
     * Creates a plain object from a mahjong_ermj_winstreak_rsp message. Also converts values to other types if specified.
     * @param message mahjong_ermj_winstreak_rsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_winstreak_rsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_winstreak_rsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_baopai_change_rsp. */
export interface Imahjong_ermj_baopai_change_rsp {

    /** mahjong_ermj_baopai_change_rsp nChairId */
    nChairId: number;

    /** mahjong_ermj_baopai_change_rsp nRet */
    nRet: number;
}

/** Represents a mahjong_ermj_baopai_change_rsp. */
export class mahjong_ermj_baopai_change_rsp implements Imahjong_ermj_baopai_change_rsp {

    /**
     * Constructs a new mahjong_ermj_baopai_change_rsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_baopai_change_rsp);

    /** mahjong_ermj_baopai_change_rsp nChairId. */
    public nChairId: number;

    /** mahjong_ermj_baopai_change_rsp nRet. */
    public nRet: number;

    /**
     * Creates a new mahjong_ermj_baopai_change_rsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_baopai_change_rsp instance
     */
    public static create(properties?: Imahjong_ermj_baopai_change_rsp): mahjong_ermj_baopai_change_rsp;

    /**
     * Encodes the specified mahjong_ermj_baopai_change_rsp message. Does not implicitly {@link mahjong_ermj_baopai_change_rsp.verify|verify} messages.
     * @param message mahjong_ermj_baopai_change_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_baopai_change_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_baopai_change_rsp message, length delimited. Does not implicitly {@link mahjong_ermj_baopai_change_rsp.verify|verify} messages.
     * @param message mahjong_ermj_baopai_change_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_baopai_change_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_baopai_change_rsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_baopai_change_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_baopai_change_rsp;

    /**
     * Decodes a mahjong_ermj_baopai_change_rsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_baopai_change_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_baopai_change_rsp;

    /**
     * Verifies a mahjong_ermj_baopai_change_rsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_baopai_change_rsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_baopai_change_rsp
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_baopai_change_rsp;

    /**
     * Creates a plain object from a mahjong_ermj_baopai_change_rsp message. Also converts values to other types if specified.
     * @param message mahjong_ermj_baopai_change_rsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_baopai_change_rsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_baopai_change_rsp to JSON.
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

/** Properties of a mahjong_ermj_Cli_Auto_Req. */
export interface Imahjong_ermj_Cli_Auto_Req {

    /** mahjong_ermj_Cli_Auto_Req cAuto */
    cAuto: number;

    /** mahjong_ermj_Cli_Auto_Req iAutoType */
    iAutoType: number;
}

/** Represents a mahjong_ermj_Cli_Auto_Req. */
export class mahjong_ermj_Cli_Auto_Req implements Imahjong_ermj_Cli_Auto_Req {

    /**
     * Constructs a new mahjong_ermj_Cli_Auto_Req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_Cli_Auto_Req);

    /** mahjong_ermj_Cli_Auto_Req cAuto. */
    public cAuto: number;

    /** mahjong_ermj_Cli_Auto_Req iAutoType. */
    public iAutoType: number;

    /**
     * Creates a new mahjong_ermj_Cli_Auto_Req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_Cli_Auto_Req instance
     */
    public static create(properties?: Imahjong_ermj_Cli_Auto_Req): mahjong_ermj_Cli_Auto_Req;

    /**
     * Encodes the specified mahjong_ermj_Cli_Auto_Req message. Does not implicitly {@link mahjong_ermj_Cli_Auto_Req.verify|verify} messages.
     * @param message mahjong_ermj_Cli_Auto_Req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_Cli_Auto_Req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_Cli_Auto_Req message, length delimited. Does not implicitly {@link mahjong_ermj_Cli_Auto_Req.verify|verify} messages.
     * @param message mahjong_ermj_Cli_Auto_Req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_Cli_Auto_Req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_Cli_Auto_Req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_Cli_Auto_Req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_Cli_Auto_Req;

    /**
     * Decodes a mahjong_ermj_Cli_Auto_Req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_Cli_Auto_Req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_Cli_Auto_Req;

    /**
     * Verifies a mahjong_ermj_Cli_Auto_Req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_Cli_Auto_Req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_Cli_Auto_Req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_Cli_Auto_Req;

    /**
     * Creates a plain object from a mahjong_ermj_Cli_Auto_Req message. Also converts values to other types if specified.
     * @param message mahjong_ermj_Cli_Auto_Req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_Cli_Auto_Req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_Cli_Auto_Req to JSON.
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

/** Properties of a mahjong_ermj_gc_clienttimer_not_new. */
export interface Imahjong_ermj_gc_clienttimer_not_new {

    /** mahjong_ermj_gc_clienttimer_not_new cChairId */
    cChairId: number;

    /** mahjong_ermj_gc_clienttimer_not_new cNextChairId */
    cNextChairId: number;

    /** mahjong_ermj_gc_clienttimer_not_new nPeriod */
    nPeriod: number;

    /** mahjong_ermj_gc_clienttimer_not_new nOpcode */
    nOpcode: number;
}

/** Represents a mahjong_ermj_gc_clienttimer_not_new. */
export class mahjong_ermj_gc_clienttimer_not_new implements Imahjong_ermj_gc_clienttimer_not_new {

    /**
     * Constructs a new mahjong_ermj_gc_clienttimer_not_new.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_gc_clienttimer_not_new);

    /** mahjong_ermj_gc_clienttimer_not_new cChairId. */
    public cChairId: number;

    /** mahjong_ermj_gc_clienttimer_not_new cNextChairId. */
    public cNextChairId: number;

    /** mahjong_ermj_gc_clienttimer_not_new nPeriod. */
    public nPeriod: number;

    /** mahjong_ermj_gc_clienttimer_not_new nOpcode. */
    public nOpcode: number;

    /**
     * Creates a new mahjong_ermj_gc_clienttimer_not_new instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_gc_clienttimer_not_new instance
     */
    public static create(properties?: Imahjong_ermj_gc_clienttimer_not_new): mahjong_ermj_gc_clienttimer_not_new;

    /**
     * Encodes the specified mahjong_ermj_gc_clienttimer_not_new message. Does not implicitly {@link mahjong_ermj_gc_clienttimer_not_new.verify|verify} messages.
     * @param message mahjong_ermj_gc_clienttimer_not_new message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_gc_clienttimer_not_new, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_gc_clienttimer_not_new message, length delimited. Does not implicitly {@link mahjong_ermj_gc_clienttimer_not_new.verify|verify} messages.
     * @param message mahjong_ermj_gc_clienttimer_not_new message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_gc_clienttimer_not_new, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_gc_clienttimer_not_new message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_gc_clienttimer_not_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_gc_clienttimer_not_new;

    /**
     * Decodes a mahjong_ermj_gc_clienttimer_not_new message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_gc_clienttimer_not_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_gc_clienttimer_not_new;

    /**
     * Verifies a mahjong_ermj_gc_clienttimer_not_new message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_gc_clienttimer_not_new message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_gc_clienttimer_not_new
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_gc_clienttimer_not_new;

    /**
     * Creates a plain object from a mahjong_ermj_gc_clienttimer_not_new message. Also converts values to other types if specified.
     * @param message mahjong_ermj_gc_clienttimer_not_new
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_gc_clienttimer_not_new, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_gc_clienttimer_not_new to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_changecard_not. */
export interface Imahjong_ermj_changecard_not {

    /** mahjong_ermj_changecard_not cChairID */
    cChairID: number;

    /** mahjong_ermj_changecard_not vecDisplayCards */
    vecDisplayCards?: (number[]|null);

    /** mahjong_ermj_changecard_not vecDisplayHua */
    vecDisplayHua?: (number[]|null);

    /** mahjong_ermj_changecard_not vecLeftCards */
    vecLeftCards?: (number[]|null);

    /** mahjong_ermj_changecard_not vecHandCards */
    vecHandCards?: (number[]|null);
}

/** Represents a mahjong_ermj_changecard_not. */
export class mahjong_ermj_changecard_not implements Imahjong_ermj_changecard_not {

    /**
     * Constructs a new mahjong_ermj_changecard_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_changecard_not);

    /** mahjong_ermj_changecard_not cChairID. */
    public cChairID: number;

    /** mahjong_ermj_changecard_not vecDisplayCards. */
    public vecDisplayCards: number[];

    /** mahjong_ermj_changecard_not vecDisplayHua. */
    public vecDisplayHua: number[];

    /** mahjong_ermj_changecard_not vecLeftCards. */
    public vecLeftCards: number[];

    /** mahjong_ermj_changecard_not vecHandCards. */
    public vecHandCards: number[];

    /**
     * Creates a new mahjong_ermj_changecard_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_changecard_not instance
     */
    public static create(properties?: Imahjong_ermj_changecard_not): mahjong_ermj_changecard_not;

    /**
     * Encodes the specified mahjong_ermj_changecard_not message. Does not implicitly {@link mahjong_ermj_changecard_not.verify|verify} messages.
     * @param message mahjong_ermj_changecard_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_changecard_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_changecard_not message, length delimited. Does not implicitly {@link mahjong_ermj_changecard_not.verify|verify} messages.
     * @param message mahjong_ermj_changecard_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_changecard_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_changecard_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_changecard_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_changecard_not;

    /**
     * Decodes a mahjong_ermj_changecard_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_changecard_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_changecard_not;

    /**
     * Verifies a mahjong_ermj_changecard_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_changecard_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_changecard_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_changecard_not;

    /**
     * Creates a plain object from a mahjong_ermj_changecard_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_changecard_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_changecard_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_changecard_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_completedata_req. */
export interface Imahjong_ermj_completedata_req {
}

/** Represents a mahjong_ermj_completedata_req. */
export class mahjong_ermj_completedata_req implements Imahjong_ermj_completedata_req {

    /**
     * Constructs a new mahjong_ermj_completedata_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_completedata_req);

    /**
     * Creates a new mahjong_ermj_completedata_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_completedata_req instance
     */
    public static create(properties?: Imahjong_ermj_completedata_req): mahjong_ermj_completedata_req;

    /**
     * Encodes the specified mahjong_ermj_completedata_req message. Does not implicitly {@link mahjong_ermj_completedata_req.verify|verify} messages.
     * @param message mahjong_ermj_completedata_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_completedata_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_completedata_req message, length delimited. Does not implicitly {@link mahjong_ermj_completedata_req.verify|verify} messages.
     * @param message mahjong_ermj_completedata_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_completedata_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_completedata_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_completedata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_completedata_req;

    /**
     * Decodes a mahjong_ermj_completedata_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_completedata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_completedata_req;

    /**
     * Verifies a mahjong_ermj_completedata_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_completedata_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_completedata_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_completedata_req;

    /**
     * Creates a plain object from a mahjong_ermj_completedata_req message. Also converts values to other types if specified.
     * @param message mahjong_ermj_completedata_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_completedata_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_completedata_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_hupai_ratio_req. */
export interface Imahjong_ermj_hupai_ratio_req {

    /** mahjong_ermj_hupai_ratio_req nChairId */
    nChairId: number;
}

/** Represents a mahjong_ermj_hupai_ratio_req. */
export class mahjong_ermj_hupai_ratio_req implements Imahjong_ermj_hupai_ratio_req {

    /**
     * Constructs a new mahjong_ermj_hupai_ratio_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_hupai_ratio_req);

    /** mahjong_ermj_hupai_ratio_req nChairId. */
    public nChairId: number;

    /**
     * Creates a new mahjong_ermj_hupai_ratio_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_hupai_ratio_req instance
     */
    public static create(properties?: Imahjong_ermj_hupai_ratio_req): mahjong_ermj_hupai_ratio_req;

    /**
     * Encodes the specified mahjong_ermj_hupai_ratio_req message. Does not implicitly {@link mahjong_ermj_hupai_ratio_req.verify|verify} messages.
     * @param message mahjong_ermj_hupai_ratio_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_hupai_ratio_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_hupai_ratio_req message, length delimited. Does not implicitly {@link mahjong_ermj_hupai_ratio_req.verify|verify} messages.
     * @param message mahjong_ermj_hupai_ratio_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_hupai_ratio_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_hupai_ratio_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_hupai_ratio_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_hupai_ratio_req;

    /**
     * Decodes a mahjong_ermj_hupai_ratio_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_hupai_ratio_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_hupai_ratio_req;

    /**
     * Verifies a mahjong_ermj_hupai_ratio_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_hupai_ratio_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_hupai_ratio_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_hupai_ratio_req;

    /**
     * Creates a plain object from a mahjong_ermj_hupai_ratio_req message. Also converts values to other types if specified.
     * @param message mahjong_ermj_hupai_ratio_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_hupai_ratio_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_hupai_ratio_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_Svr_Auto_Not. */
export interface Imahjong_ermj_Svr_Auto_Not {

    /** mahjong_ermj_Svr_Auto_Not cChairID */
    cChairID: number;

    /** mahjong_ermj_Svr_Auto_Not cAuto */
    cAuto: number;

    /** mahjong_ermj_Svr_Auto_Not iAutoType */
    iAutoType: number;
}

/** Represents a mahjong_ermj_Svr_Auto_Not. */
export class mahjong_ermj_Svr_Auto_Not implements Imahjong_ermj_Svr_Auto_Not {

    /**
     * Constructs a new mahjong_ermj_Svr_Auto_Not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_Svr_Auto_Not);

    /** mahjong_ermj_Svr_Auto_Not cChairID. */
    public cChairID: number;

    /** mahjong_ermj_Svr_Auto_Not cAuto. */
    public cAuto: number;

    /** mahjong_ermj_Svr_Auto_Not iAutoType. */
    public iAutoType: number;

    /**
     * Creates a new mahjong_ermj_Svr_Auto_Not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_Svr_Auto_Not instance
     */
    public static create(properties?: Imahjong_ermj_Svr_Auto_Not): mahjong_ermj_Svr_Auto_Not;

    /**
     * Encodes the specified mahjong_ermj_Svr_Auto_Not message. Does not implicitly {@link mahjong_ermj_Svr_Auto_Not.verify|verify} messages.
     * @param message mahjong_ermj_Svr_Auto_Not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_Svr_Auto_Not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_Svr_Auto_Not message, length delimited. Does not implicitly {@link mahjong_ermj_Svr_Auto_Not.verify|verify} messages.
     * @param message mahjong_ermj_Svr_Auto_Not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_Svr_Auto_Not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_Svr_Auto_Not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_Svr_Auto_Not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_Svr_Auto_Not;

    /**
     * Decodes a mahjong_ermj_Svr_Auto_Not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_Svr_Auto_Not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_Svr_Auto_Not;

    /**
     * Verifies a mahjong_ermj_Svr_Auto_Not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_Svr_Auto_Not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_Svr_Auto_Not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_Svr_Auto_Not;

    /**
     * Creates a plain object from a mahjong_ermj_Svr_Auto_Not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_Svr_Auto_Not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_Svr_Auto_Not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_Svr_Auto_Not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_mingpai_ratio_not. */
export interface Imahjong_ermj_mingpai_ratio_not {

    /** mahjong_ermj_mingpai_ratio_not nChairId */
    nChairId: number;

    /** mahjong_ermj_mingpai_ratio_not nValue */
    nValue: number;
}

/** Represents a mahjong_ermj_mingpai_ratio_not. */
export class mahjong_ermj_mingpai_ratio_not implements Imahjong_ermj_mingpai_ratio_not {

    /**
     * Constructs a new mahjong_ermj_mingpai_ratio_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_mingpai_ratio_not);

    /** mahjong_ermj_mingpai_ratio_not nChairId. */
    public nChairId: number;

    /** mahjong_ermj_mingpai_ratio_not nValue. */
    public nValue: number;

    /**
     * Creates a new mahjong_ermj_mingpai_ratio_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_mingpai_ratio_not instance
     */
    public static create(properties?: Imahjong_ermj_mingpai_ratio_not): mahjong_ermj_mingpai_ratio_not;

    /**
     * Encodes the specified mahjong_ermj_mingpai_ratio_not message. Does not implicitly {@link mahjong_ermj_mingpai_ratio_not.verify|verify} messages.
     * @param message mahjong_ermj_mingpai_ratio_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_mingpai_ratio_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_mingpai_ratio_not message, length delimited. Does not implicitly {@link mahjong_ermj_mingpai_ratio_not.verify|verify} messages.
     * @param message mahjong_ermj_mingpai_ratio_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_mingpai_ratio_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_mingpai_ratio_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_mingpai_ratio_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_mingpai_ratio_not;

    /**
     * Decodes a mahjong_ermj_mingpai_ratio_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_mingpai_ratio_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_mingpai_ratio_not;

    /**
     * Verifies a mahjong_ermj_mingpai_ratio_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_mingpai_ratio_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_mingpai_ratio_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_mingpai_ratio_not;

    /**
     * Creates a plain object from a mahjong_ermj_mingpai_ratio_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_mingpai_ratio_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_mingpai_ratio_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_mingpai_ratio_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_completedata_not_new. */
export interface Imahjong_ermj_completedata_not_new {

    /** mahjong_ermj_completedata_not_new nDiZhu */
    nDiZhu: number;

    /** mahjong_ermj_completedata_not_new cBanker */
    cBanker: number;

    /** mahjong_ermj_completedata_not_new nAllScore */
    nAllScore: number;

    /** mahjong_ermj_completedata_not_new cWallEndChair */
    cWallEndChair: number;

    /** mahjong_ermj_completedata_not_new cWallEndPos */
    cWallEndPos: number;

    /** mahjong_ermj_completedata_not_new cWallCardNum */
    cWallCardNum: number;

    /** mahjong_ermj_completedata_not_new cGangTotalNum */
    cGangTotalNum: number;

    /** mahjong_ermj_completedata_not_new vecHuaNum */
    vecHuaNum?: (number[]|null);

    /** mahjong_ermj_completedata_not_new cAutoState */
    cAutoState: number;

    /** mahjong_ermj_completedata_not_new cAutoType */
    cAutoType: number;

    /** mahjong_ermj_completedata_not_new nChuPai */
    nChuPai: number;

    /** mahjong_ermj_completedata_not_new nVisitorAmount */
    nVisitorAmount: number;

    /** mahjong_ermj_completedata_not_new sSerialID */
    sSerialID: number;

    /** mahjong_ermj_completedata_not_new vecPlyData */
    vecPlyData?: (Imahjong_ermj_changecard_not[]|null);

    /** mahjong_ermj_completedata_not_new vecFakeScores */
    vecFakeScores?: ((number|Long)[]|null);

    /** mahjong_ermj_completedata_not_new vecTingPly */
    vecTingPly?: (number[]|null);
}

/** Represents a mahjong_ermj_completedata_not_new. */
export class mahjong_ermj_completedata_not_new implements Imahjong_ermj_completedata_not_new {

    /**
     * Constructs a new mahjong_ermj_completedata_not_new.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_completedata_not_new);

    /** mahjong_ermj_completedata_not_new nDiZhu. */
    public nDiZhu: number;

    /** mahjong_ermj_completedata_not_new cBanker. */
    public cBanker: number;

    /** mahjong_ermj_completedata_not_new nAllScore. */
    public nAllScore: number;

    /** mahjong_ermj_completedata_not_new cWallEndChair. */
    public cWallEndChair: number;

    /** mahjong_ermj_completedata_not_new cWallEndPos. */
    public cWallEndPos: number;

    /** mahjong_ermj_completedata_not_new cWallCardNum. */
    public cWallCardNum: number;

    /** mahjong_ermj_completedata_not_new cGangTotalNum. */
    public cGangTotalNum: number;

    /** mahjong_ermj_completedata_not_new vecHuaNum. */
    public vecHuaNum: number[];

    /** mahjong_ermj_completedata_not_new cAutoState. */
    public cAutoState: number;

    /** mahjong_ermj_completedata_not_new cAutoType. */
    public cAutoType: number;

    /** mahjong_ermj_completedata_not_new nChuPai. */
    public nChuPai: number;

    /** mahjong_ermj_completedata_not_new nVisitorAmount. */
    public nVisitorAmount: number;

    /** mahjong_ermj_completedata_not_new sSerialID. */
    public sSerialID: number;

    /** mahjong_ermj_completedata_not_new vecPlyData. */
    public vecPlyData: Imahjong_ermj_changecard_not[];

    /** mahjong_ermj_completedata_not_new vecFakeScores. */
    public vecFakeScores: (number|Long)[];

    /** mahjong_ermj_completedata_not_new vecTingPly. */
    public vecTingPly: number[];

    /**
     * Creates a new mahjong_ermj_completedata_not_new instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_completedata_not_new instance
     */
    public static create(properties?: Imahjong_ermj_completedata_not_new): mahjong_ermj_completedata_not_new;

    /**
     * Encodes the specified mahjong_ermj_completedata_not_new message. Does not implicitly {@link mahjong_ermj_completedata_not_new.verify|verify} messages.
     * @param message mahjong_ermj_completedata_not_new message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_completedata_not_new, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_completedata_not_new message, length delimited. Does not implicitly {@link mahjong_ermj_completedata_not_new.verify|verify} messages.
     * @param message mahjong_ermj_completedata_not_new message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_completedata_not_new, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_completedata_not_new message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_completedata_not_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_completedata_not_new;

    /**
     * Decodes a mahjong_ermj_completedata_not_new message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_completedata_not_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_completedata_not_new;

    /**
     * Verifies a mahjong_ermj_completedata_not_new message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_completedata_not_new message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_completedata_not_new
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_completedata_not_new;

    /**
     * Creates a plain object from a mahjong_ermj_completedata_not_new message. Also converts values to other types if specified.
     * @param message mahjong_ermj_completedata_not_new
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_completedata_not_new, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_completedata_not_new to JSON.
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

/** Properties of a mahjong_ermj_playcard_ack. */
export interface Imahjong_ermj_playcard_ack {

    /** mahjong_ermj_playcard_ack nOpcode */
    nOpcode: number;

    /** mahjong_ermj_playcard_ack cOpCard */
    cOpCard: number;

    /** mahjong_ermj_playcard_ack vecHunCards */
    vecHunCards?: (number[]|null);

    /** mahjong_ermj_playcard_ack sSerialID */
    sSerialID: number;
}

/** Represents a mahjong_ermj_playcard_ack. */
export class mahjong_ermj_playcard_ack implements Imahjong_ermj_playcard_ack {

    /**
     * Constructs a new mahjong_ermj_playcard_ack.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_playcard_ack);

    /** mahjong_ermj_playcard_ack nOpcode. */
    public nOpcode: number;

    /** mahjong_ermj_playcard_ack cOpCard. */
    public cOpCard: number;

    /** mahjong_ermj_playcard_ack vecHunCards. */
    public vecHunCards: number[];

    /** mahjong_ermj_playcard_ack sSerialID. */
    public sSerialID: number;

    /**
     * Creates a new mahjong_ermj_playcard_ack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_playcard_ack instance
     */
    public static create(properties?: Imahjong_ermj_playcard_ack): mahjong_ermj_playcard_ack;

    /**
     * Encodes the specified mahjong_ermj_playcard_ack message. Does not implicitly {@link mahjong_ermj_playcard_ack.verify|verify} messages.
     * @param message mahjong_ermj_playcard_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_playcard_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_playcard_ack message, length delimited. Does not implicitly {@link mahjong_ermj_playcard_ack.verify|verify} messages.
     * @param message mahjong_ermj_playcard_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_playcard_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_playcard_ack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_playcard_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_playcard_ack;

    /**
     * Decodes a mahjong_ermj_playcard_ack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_playcard_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_playcard_ack;

    /**
     * Verifies a mahjong_ermj_playcard_ack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_playcard_ack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_playcard_ack
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_playcard_ack;

    /**
     * Creates a plain object from a mahjong_ermj_playcard_ack message. Also converts values to other types if specified.
     * @param message mahjong_ermj_playcard_ack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_playcard_ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_playcard_ack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_changecard_not_new. */
export interface Imahjong_ermj_changecard_not_new {

    /** mahjong_ermj_changecard_not_new cChairID */
    cChairID: number;

    /** mahjong_ermj_changecard_not_new cHuPai */
    cHuPai: number;

    /** mahjong_ermj_changecard_not_new vecDisplayCards */
    vecDisplayCards?: (number[]|null);

    /** mahjong_ermj_changecard_not_new vecDisplayHua */
    vecDisplayHua?: (number[]|null);

    /** mahjong_ermj_changecard_not_new vecLeftCards */
    vecLeftCards?: (number[]|null);

    /** mahjong_ermj_changecard_not_new vecHandCards */
    vecHandCards?: (number[]|null);
}

/** Represents a mahjong_ermj_changecard_not_new. */
export class mahjong_ermj_changecard_not_new implements Imahjong_ermj_changecard_not_new {

    /**
     * Constructs a new mahjong_ermj_changecard_not_new.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_changecard_not_new);

    /** mahjong_ermj_changecard_not_new cChairID. */
    public cChairID: number;

    /** mahjong_ermj_changecard_not_new cHuPai. */
    public cHuPai: number;

    /** mahjong_ermj_changecard_not_new vecDisplayCards. */
    public vecDisplayCards: number[];

    /** mahjong_ermj_changecard_not_new vecDisplayHua. */
    public vecDisplayHua: number[];

    /** mahjong_ermj_changecard_not_new vecLeftCards. */
    public vecLeftCards: number[];

    /** mahjong_ermj_changecard_not_new vecHandCards. */
    public vecHandCards: number[];

    /**
     * Creates a new mahjong_ermj_changecard_not_new instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_changecard_not_new instance
     */
    public static create(properties?: Imahjong_ermj_changecard_not_new): mahjong_ermj_changecard_not_new;

    /**
     * Encodes the specified mahjong_ermj_changecard_not_new message. Does not implicitly {@link mahjong_ermj_changecard_not_new.verify|verify} messages.
     * @param message mahjong_ermj_changecard_not_new message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_changecard_not_new, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_changecard_not_new message, length delimited. Does not implicitly {@link mahjong_ermj_changecard_not_new.verify|verify} messages.
     * @param message mahjong_ermj_changecard_not_new message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_changecard_not_new, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_changecard_not_new message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_changecard_not_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_changecard_not_new;

    /**
     * Decodes a mahjong_ermj_changecard_not_new message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_changecard_not_new
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_changecard_not_new;

    /**
     * Verifies a mahjong_ermj_changecard_not_new message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_changecard_not_new message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_changecard_not_new
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_changecard_not_new;

    /**
     * Creates a plain object from a mahjong_ermj_changecard_not_new message. Also converts values to other types if specified.
     * @param message mahjong_ermj_changecard_not_new
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_changecard_not_new, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_changecard_not_new to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_gang_info. */
export interface Imahjong_gang_info {

    /** mahjong_gang_info nOpcode */
    nOpcode: number;

    /** mahjong_gang_info vecGangCards */
    vecGangCards?: (number[]|null);
}

/** Represents a mahjong_gang_info. */
export class mahjong_gang_info implements Imahjong_gang_info {

    /**
     * Constructs a new mahjong_gang_info.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_gang_info);

    /** mahjong_gang_info nOpcode. */
    public nOpcode: number;

    /** mahjong_gang_info vecGangCards. */
    public vecGangCards: number[];

    /**
     * Creates a new mahjong_gang_info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_gang_info instance
     */
    public static create(properties?: Imahjong_gang_info): mahjong_gang_info;

    /**
     * Encodes the specified mahjong_gang_info message. Does not implicitly {@link mahjong_gang_info.verify|verify} messages.
     * @param message mahjong_gang_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_gang_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_gang_info message, length delimited. Does not implicitly {@link mahjong_gang_info.verify|verify} messages.
     * @param message mahjong_gang_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_gang_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_gang_info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_gang_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_gang_info;

    /**
     * Decodes a mahjong_gang_info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_gang_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_gang_info;

    /**
     * Verifies a mahjong_gang_info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_gang_info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_gang_info
     */
    public static fromObject(object: { [k: string]: any }): mahjong_gang_info;

    /**
     * Creates a plain object from a mahjong_gang_info message. Also converts values to other types if specified.
     * @param message mahjong_gang_info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_gang_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_gang_info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_playcard_req. */
export interface Imahjong_ermj_playcard_req {

    /** mahjong_ermj_playcard_req nOpcode */
    nOpcode: number;

    /** mahjong_ermj_playcard_req cPrevCard */
    cPrevCard: number;

    /** mahjong_ermj_playcard_req vecTingPutCards */
    vecTingPutCards?: (number[]|null);

    /** mahjong_ermj_playcard_req vecTingHuCards */
    vecTingHuCards?: (number[]|null);

    /** mahjong_ermj_playcard_req vecGangInfo */
    vecGangInfo?: (Imahjong_gang_info[]|null);

    /** mahjong_ermj_playcard_req sSerialID */
    sSerialID: number;
}

/** Represents a mahjong_ermj_playcard_req. */
export class mahjong_ermj_playcard_req implements Imahjong_ermj_playcard_req {

    /**
     * Constructs a new mahjong_ermj_playcard_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_playcard_req);

    /** mahjong_ermj_playcard_req nOpcode. */
    public nOpcode: number;

    /** mahjong_ermj_playcard_req cPrevCard. */
    public cPrevCard: number;

    /** mahjong_ermj_playcard_req vecTingPutCards. */
    public vecTingPutCards: number[];

    /** mahjong_ermj_playcard_req vecTingHuCards. */
    public vecTingHuCards: number[];

    /** mahjong_ermj_playcard_req vecGangInfo. */
    public vecGangInfo: Imahjong_gang_info[];

    /** mahjong_ermj_playcard_req sSerialID. */
    public sSerialID: number;

    /**
     * Creates a new mahjong_ermj_playcard_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_playcard_req instance
     */
    public static create(properties?: Imahjong_ermj_playcard_req): mahjong_ermj_playcard_req;

    /**
     * Encodes the specified mahjong_ermj_playcard_req message. Does not implicitly {@link mahjong_ermj_playcard_req.verify|verify} messages.
     * @param message mahjong_ermj_playcard_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_playcard_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_playcard_req message, length delimited. Does not implicitly {@link mahjong_ermj_playcard_req.verify|verify} messages.
     * @param message mahjong_ermj_playcard_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_playcard_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_playcard_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_playcard_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_playcard_req;

    /**
     * Decodes a mahjong_ermj_playcard_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_playcard_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_playcard_req;

    /**
     * Verifies a mahjong_ermj_playcard_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_playcard_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_playcard_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_playcard_req;

    /**
     * Creates a plain object from a mahjong_ermj_playcard_req message. Also converts values to other types if specified.
     * @param message mahjong_ermj_playcard_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_playcard_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_playcard_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_ermj_gc_task_not. */
export interface Imahjong_ermj_gc_task_not {

    /** mahjong_ermj_gc_task_not taskItem */
    taskItem: Imahjong_TaskItem;
}

/** Represents a mahjong_ermj_gc_task_not. */
export class mahjong_ermj_gc_task_not implements Imahjong_ermj_gc_task_not {

    /**
     * Constructs a new mahjong_ermj_gc_task_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_ermj_gc_task_not);

    /** mahjong_ermj_gc_task_not taskItem. */
    public taskItem: Imahjong_TaskItem;

    /**
     * Creates a new mahjong_ermj_gc_task_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_ermj_gc_task_not instance
     */
    public static create(properties?: Imahjong_ermj_gc_task_not): mahjong_ermj_gc_task_not;

    /**
     * Encodes the specified mahjong_ermj_gc_task_not message. Does not implicitly {@link mahjong_ermj_gc_task_not.verify|verify} messages.
     * @param message mahjong_ermj_gc_task_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_ermj_gc_task_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_ermj_gc_task_not message, length delimited. Does not implicitly {@link mahjong_ermj_gc_task_not.verify|verify} messages.
     * @param message mahjong_ermj_gc_task_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_ermj_gc_task_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_ermj_gc_task_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_ermj_gc_task_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_ermj_gc_task_not;

    /**
     * Decodes a mahjong_ermj_gc_task_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_ermj_gc_task_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_ermj_gc_task_not;

    /**
     * Verifies a mahjong_ermj_gc_task_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_ermj_gc_task_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_ermj_gc_task_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_ermj_gc_task_not;

    /**
     * Creates a plain object from a mahjong_ermj_gc_task_not message. Also converts values to other types if specified.
     * @param message mahjong_ermj_gc_task_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_ermj_gc_task_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_ermj_gc_task_not to JSON.
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

/** Properties of a mahjong_cb_create_table_req. */
export interface Imahjong_cb_create_table_req {

    /** mahjong_cb_create_table_req name */
    name: string;

    /** mahjong_cb_create_table_req password */
    password: string;

    /** mahjong_cb_create_table_req baseScore */
    baseScore: number;

    /** mahjong_cb_create_table_req tableTime */
    tableTime: number;

    /** mahjong_cb_create_table_req flag */
    flag: number;

    /** mahjong_cb_create_table_req gameRule */
    gameRule: number;

    /** mahjong_cb_create_table_req initScore */
    initScore: number;

    /** mahjong_cb_create_table_req gameRuleGroup */
    gameRuleGroup?: (number[]|null);

    /** mahjong_cb_create_table_req gameJson */
    gameJson: string;

    /** mahjong_cb_create_table_req mode */
    mode: number;

    /** mahjong_cb_create_table_req clubUid */
    clubUid: number;

    /** mahjong_cb_create_table_req tinyJson */
    tinyJson: string;

    /** mahjong_cb_create_table_req clubRuleId */
    clubRuleId: number;
}

/** Represents a mahjong_cb_create_table_req. */
export class mahjong_cb_create_table_req implements Imahjong_cb_create_table_req {

    /**
     * Constructs a new mahjong_cb_create_table_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_cb_create_table_req);

    /** mahjong_cb_create_table_req name. */
    public name: string;

    /** mahjong_cb_create_table_req password. */
    public password: string;

    /** mahjong_cb_create_table_req baseScore. */
    public baseScore: number;

    /** mahjong_cb_create_table_req tableTime. */
    public tableTime: number;

    /** mahjong_cb_create_table_req flag. */
    public flag: number;

    /** mahjong_cb_create_table_req gameRule. */
    public gameRule: number;

    /** mahjong_cb_create_table_req initScore. */
    public initScore: number;

    /** mahjong_cb_create_table_req gameRuleGroup. */
    public gameRuleGroup: number[];

    /** mahjong_cb_create_table_req gameJson. */
    public gameJson: string;

    /** mahjong_cb_create_table_req mode. */
    public mode: number;

    /** mahjong_cb_create_table_req clubUid. */
    public clubUid: number;

    /** mahjong_cb_create_table_req tinyJson. */
    public tinyJson: string;

    /** mahjong_cb_create_table_req clubRuleId. */
    public clubRuleId: number;

    /**
     * Creates a new mahjong_cb_create_table_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_cb_create_table_req instance
     */
    public static create(properties?: Imahjong_cb_create_table_req): mahjong_cb_create_table_req;

    /**
     * Encodes the specified mahjong_cb_create_table_req message. Does not implicitly {@link mahjong_cb_create_table_req.verify|verify} messages.
     * @param message mahjong_cb_create_table_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_cb_create_table_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_cb_create_table_req message, length delimited. Does not implicitly {@link mahjong_cb_create_table_req.verify|verify} messages.
     * @param message mahjong_cb_create_table_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_cb_create_table_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_cb_create_table_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_cb_create_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_cb_create_table_req;

    /**
     * Decodes a mahjong_cb_create_table_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_cb_create_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_cb_create_table_req;

    /**
     * Verifies a mahjong_cb_create_table_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_cb_create_table_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_cb_create_table_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_cb_create_table_req;

    /**
     * Creates a plain object from a mahjong_cb_create_table_req message. Also converts values to other types if specified.
     * @param message mahjong_cb_create_table_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_cb_create_table_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_cb_create_table_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_bc_create_table_ack. */
export interface Imahjong_bc_create_table_ack {

    /** mahjong_bc_create_table_ack ret */
    ret: number;

    /** mahjong_bc_create_table_ack tableAttrs */
    tableAttrs: Imahjong_TableAttr;

    /** mahjong_bc_create_table_ack errMsg */
    errMsg: string;
}

/** Represents a mahjong_bc_create_table_ack. */
export class mahjong_bc_create_table_ack implements Imahjong_bc_create_table_ack {

    /**
     * Constructs a new mahjong_bc_create_table_ack.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_bc_create_table_ack);

    /** mahjong_bc_create_table_ack ret. */
    public ret: number;

    /** mahjong_bc_create_table_ack tableAttrs. */
    public tableAttrs: Imahjong_TableAttr;

    /** mahjong_bc_create_table_ack errMsg. */
    public errMsg: string;

    /**
     * Creates a new mahjong_bc_create_table_ack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_bc_create_table_ack instance
     */
    public static create(properties?: Imahjong_bc_create_table_ack): mahjong_bc_create_table_ack;

    /**
     * Encodes the specified mahjong_bc_create_table_ack message. Does not implicitly {@link mahjong_bc_create_table_ack.verify|verify} messages.
     * @param message mahjong_bc_create_table_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_bc_create_table_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_bc_create_table_ack message, length delimited. Does not implicitly {@link mahjong_bc_create_table_ack.verify|verify} messages.
     * @param message mahjong_bc_create_table_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_bc_create_table_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_bc_create_table_ack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_bc_create_table_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_bc_create_table_ack;

    /**
     * Decodes a mahjong_bc_create_table_ack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_bc_create_table_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_bc_create_table_ack;

    /**
     * Verifies a mahjong_bc_create_table_ack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_bc_create_table_ack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_bc_create_table_ack
     */
    public static fromObject(object: { [k: string]: any }): mahjong_bc_create_table_ack;

    /**
     * Creates a plain object from a mahjong_bc_create_table_ack message. Also converts values to other types if specified.
     * @param message mahjong_bc_create_table_ack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_bc_create_table_ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_bc_create_table_ack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_TableAttr. */
export interface Imahjong_TableAttr {

    /** mahjong_TableAttr tableId */
    tableId: number;

    /** mahjong_TableAttr name */
    name: string;

    /** mahjong_TableAttr lock */
    lock: number;

    /** mahjong_TableAttr players */
    players?: (Imahjong_PlyBaseData[]|null);
}

/** Represents a mahjong_TableAttr. */
export class mahjong_TableAttr implements Imahjong_TableAttr {

    /**
     * Constructs a new mahjong_TableAttr.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_TableAttr);

    /** mahjong_TableAttr tableId. */
    public tableId: number;

    /** mahjong_TableAttr name. */
    public name: string;

    /** mahjong_TableAttr lock. */
    public lock: number;

    /** mahjong_TableAttr players. */
    public players: Imahjong_PlyBaseData[];

    /**
     * Creates a new mahjong_TableAttr instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_TableAttr instance
     */
    public static create(properties?: Imahjong_TableAttr): mahjong_TableAttr;

    /**
     * Encodes the specified mahjong_TableAttr message. Does not implicitly {@link mahjong_TableAttr.verify|verify} messages.
     * @param message mahjong_TableAttr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_TableAttr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_TableAttr message, length delimited. Does not implicitly {@link mahjong_TableAttr.verify|verify} messages.
     * @param message mahjong_TableAttr message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_TableAttr, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_TableAttr message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_TableAttr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_TableAttr;

    /**
     * Decodes a mahjong_TableAttr message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_TableAttr
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_TableAttr;

    /**
     * Verifies a mahjong_TableAttr message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_TableAttr message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_TableAttr
     */
    public static fromObject(object: { [k: string]: any }): mahjong_TableAttr;

    /**
     * Creates a plain object from a mahjong_TableAttr message. Also converts values to other types if specified.
     * @param message mahjong_TableAttr
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_TableAttr, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_TableAttr to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_PlyBaseData. */
export interface Imahjong_PlyBaseData {

    /** mahjong_PlyBaseData plyGuid */
    plyGuid: (number|Long);

    /** mahjong_PlyBaseData nickname */
    nickname: string;

    /** mahjong_PlyBaseData sex */
    sex: number;

    /** mahjong_PlyBaseData gift */
    gift: number;

    /** mahjong_PlyBaseData money */
    money: (number|Long);

    /** mahjong_PlyBaseData score */
    score: number;

    /** mahjong_PlyBaseData won */
    won: number;

    /** mahjong_PlyBaseData lost */
    lost: number;

    /** mahjong_PlyBaseData dogfall */
    dogfall: number;

    /** mahjong_PlyBaseData tableId */
    tableId: number;

    /** mahjong_PlyBaseData param_1 */
    param_1: number;

    /** mahjong_PlyBaseData param_2 */
    param_2: number;

    /** mahjong_PlyBaseData chairId */
    chairId: number;

    /** mahjong_PlyBaseData ready */
    ready: number;

    /** mahjong_PlyBaseData plyVip */
    plyVip: Imahjong_VipData;
}

/** Represents a mahjong_PlyBaseData. */
export class mahjong_PlyBaseData implements Imahjong_PlyBaseData {

    /**
     * Constructs a new mahjong_PlyBaseData.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_PlyBaseData);

    /** mahjong_PlyBaseData plyGuid. */
    public plyGuid: (number|Long);

    /** mahjong_PlyBaseData nickname. */
    public nickname: string;

    /** mahjong_PlyBaseData sex. */
    public sex: number;

    /** mahjong_PlyBaseData gift. */
    public gift: number;

    /** mahjong_PlyBaseData money. */
    public money: (number|Long);

    /** mahjong_PlyBaseData score. */
    public score: number;

    /** mahjong_PlyBaseData won. */
    public won: number;

    /** mahjong_PlyBaseData lost. */
    public lost: number;

    /** mahjong_PlyBaseData dogfall. */
    public dogfall: number;

    /** mahjong_PlyBaseData tableId. */
    public tableId: number;

    /** mahjong_PlyBaseData param_1. */
    public param_1: number;

    /** mahjong_PlyBaseData param_2. */
    public param_2: number;

    /** mahjong_PlyBaseData chairId. */
    public chairId: number;

    /** mahjong_PlyBaseData ready. */
    public ready: number;

    /** mahjong_PlyBaseData plyVip. */
    public plyVip: Imahjong_VipData;

    /**
     * Creates a new mahjong_PlyBaseData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_PlyBaseData instance
     */
    public static create(properties?: Imahjong_PlyBaseData): mahjong_PlyBaseData;

    /**
     * Encodes the specified mahjong_PlyBaseData message. Does not implicitly {@link mahjong_PlyBaseData.verify|verify} messages.
     * @param message mahjong_PlyBaseData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_PlyBaseData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_PlyBaseData message, length delimited. Does not implicitly {@link mahjong_PlyBaseData.verify|verify} messages.
     * @param message mahjong_PlyBaseData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_PlyBaseData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_PlyBaseData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_PlyBaseData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_PlyBaseData;

    /**
     * Decodes a mahjong_PlyBaseData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_PlyBaseData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_PlyBaseData;

    /**
     * Verifies a mahjong_PlyBaseData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_PlyBaseData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_PlyBaseData
     */
    public static fromObject(object: { [k: string]: any }): mahjong_PlyBaseData;

    /**
     * Creates a plain object from a mahjong_PlyBaseData message. Also converts values to other types if specified.
     * @param message mahjong_PlyBaseData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_PlyBaseData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_PlyBaseData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_VipData. */
export interface Imahjong_VipData {

    /** mahjong_VipData level */
    level: number;

    /** mahjong_VipData nexLevelTotalDays */
    nexLevelTotalDays: number;

    /** mahjong_VipData autoUpgradeDay */
    autoUpgradeDay: number;

    /** mahjong_VipData loginAward */
    loginAward: number;

    /** mahjong_VipData friendCount */
    friendCount: number;

    /** mahjong_VipData nextLevelDueDays */
    nextLevelDueDays: number;

    /** mahjong_VipData remainDueDays */
    remainDueDays: number;

    /** mahjong_VipData status */
    status: number;
}

/** Represents a mahjong_VipData. */
export class mahjong_VipData implements Imahjong_VipData {

    /**
     * Constructs a new mahjong_VipData.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_VipData);

    /** mahjong_VipData level. */
    public level: number;

    /** mahjong_VipData nexLevelTotalDays. */
    public nexLevelTotalDays: number;

    /** mahjong_VipData autoUpgradeDay. */
    public autoUpgradeDay: number;

    /** mahjong_VipData loginAward. */
    public loginAward: number;

    /** mahjong_VipData friendCount. */
    public friendCount: number;

    /** mahjong_VipData nextLevelDueDays. */
    public nextLevelDueDays: number;

    /** mahjong_VipData remainDueDays. */
    public remainDueDays: number;

    /** mahjong_VipData status. */
    public status: number;

    /**
     * Creates a new mahjong_VipData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_VipData instance
     */
    public static create(properties?: Imahjong_VipData): mahjong_VipData;

    /**
     * Encodes the specified mahjong_VipData message. Does not implicitly {@link mahjong_VipData.verify|verify} messages.
     * @param message mahjong_VipData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_VipData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_VipData message, length delimited. Does not implicitly {@link mahjong_VipData.verify|verify} messages.
     * @param message mahjong_VipData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_VipData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_VipData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_VipData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_VipData;

    /**
     * Decodes a mahjong_VipData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_VipData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_VipData;

    /**
     * Verifies a mahjong_VipData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_VipData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_VipData
     */
    public static fromObject(object: { [k: string]: any }): mahjong_VipData;

    /**
     * Creates a plain object from a mahjong_VipData message. Also converts values to other types if specified.
     * @param message mahjong_VipData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_VipData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_VipData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
