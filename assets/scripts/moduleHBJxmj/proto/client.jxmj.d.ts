import * as $protobuf from "protobufjs";
/** Properties of a mahjong_jxmj_tingfan_not. */
export interface Imahjong_jxmj_tingfan_not {

    /** mahjong_jxmj_tingfan_not sSerialID */
    sSerialID: number;

    /** mahjong_jxmj_tingfan_not vecTingFan */
    vecTingFan?: (Imahjong_jxmj_tingfan_data[]|null);
}

/** Represents a mahjong_jxmj_tingfan_not. */
export class mahjong_jxmj_tingfan_not implements Imahjong_jxmj_tingfan_not {

    /**
     * Constructs a new mahjong_jxmj_tingfan_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_tingfan_not);

    /** mahjong_jxmj_tingfan_not sSerialID. */
    public sSerialID: number;

    /** mahjong_jxmj_tingfan_not vecTingFan. */
    public vecTingFan: Imahjong_jxmj_tingfan_data[];

    /**
     * Creates a new mahjong_jxmj_tingfan_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_tingfan_not instance
     */
    public static create(properties?: Imahjong_jxmj_tingfan_not): mahjong_jxmj_tingfan_not;

    /**
     * Encodes the specified mahjong_jxmj_tingfan_not message. Does not implicitly {@link mahjong_jxmj_tingfan_not.verify|verify} messages.
     * @param message mahjong_jxmj_tingfan_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_tingfan_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_tingfan_not message, length delimited. Does not implicitly {@link mahjong_jxmj_tingfan_not.verify|verify} messages.
     * @param message mahjong_jxmj_tingfan_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_tingfan_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_tingfan_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_tingfan_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_tingfan_not;

    /**
     * Decodes a mahjong_jxmj_tingfan_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_tingfan_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_tingfan_not;

    /**
     * Verifies a mahjong_jxmj_tingfan_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_tingfan_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_tingfan_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_tingfan_not;

    /**
     * Creates a plain object from a mahjong_jxmj_tingfan_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_tingfan_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_tingfan_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_tingfan_not to JSON.
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

/** Properties of a mahjong_jxmj_pause_game_not. */
export interface Imahjong_jxmj_pause_game_not {

    /** mahjong_jxmj_pause_game_not nFlag */
    nFlag: number;

    /** mahjong_jxmj_pause_game_not nWaitTime */
    nWaitTime: number;

    /** mahjong_jxmj_pause_game_not nLeftTime */
    nLeftTime: number;

    /** mahjong_jxmj_pause_game_not cChairId */
    cChairId: number;

    /** mahjong_jxmj_pause_game_not sNickName */
    sNickName: string;
}

/** Represents a mahjong_jxmj_pause_game_not. */
export class mahjong_jxmj_pause_game_not implements Imahjong_jxmj_pause_game_not {

    /**
     * Constructs a new mahjong_jxmj_pause_game_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_pause_game_not);

    /** mahjong_jxmj_pause_game_not nFlag. */
    public nFlag: number;

    /** mahjong_jxmj_pause_game_not nWaitTime. */
    public nWaitTime: number;

    /** mahjong_jxmj_pause_game_not nLeftTime. */
    public nLeftTime: number;

    /** mahjong_jxmj_pause_game_not cChairId. */
    public cChairId: number;

    /** mahjong_jxmj_pause_game_not sNickName. */
    public sNickName: string;

    /**
     * Creates a new mahjong_jxmj_pause_game_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_pause_game_not instance
     */
    public static create(properties?: Imahjong_jxmj_pause_game_not): mahjong_jxmj_pause_game_not;

    /**
     * Encodes the specified mahjong_jxmj_pause_game_not message. Does not implicitly {@link mahjong_jxmj_pause_game_not.verify|verify} messages.
     * @param message mahjong_jxmj_pause_game_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_pause_game_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_pause_game_not message, length delimited. Does not implicitly {@link mahjong_jxmj_pause_game_not.verify|verify} messages.
     * @param message mahjong_jxmj_pause_game_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_pause_game_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_pause_game_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_pause_game_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_pause_game_not;

    /**
     * Decodes a mahjong_jxmj_pause_game_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_pause_game_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_pause_game_not;

    /**
     * Verifies a mahjong_jxmj_pause_game_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_pause_game_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_pause_game_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_pause_game_not;

    /**
     * Creates a plain object from a mahjong_jxmj_pause_game_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_pause_game_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_pause_game_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_pause_game_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_cb_leave_table_req. */
export interface Imahjong_cb_leave_table_req {
}

/** Represents a mahjong_cb_leave_table_req. */
export class mahjong_cb_leave_table_req implements Imahjong_cb_leave_table_req {

    /**
     * Constructs a new mahjong_cb_leave_table_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_cb_leave_table_req);

    /**
     * Creates a new mahjong_cb_leave_table_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_cb_leave_table_req instance
     */
    public static create(properties?: Imahjong_cb_leave_table_req): mahjong_cb_leave_table_req;

    /**
     * Encodes the specified mahjong_cb_leave_table_req message. Does not implicitly {@link mahjong_cb_leave_table_req.verify|verify} messages.
     * @param message mahjong_cb_leave_table_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_cb_leave_table_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_cb_leave_table_req message, length delimited. Does not implicitly {@link mahjong_cb_leave_table_req.verify|verify} messages.
     * @param message mahjong_cb_leave_table_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_cb_leave_table_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_cb_leave_table_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_cb_leave_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_cb_leave_table_req;

    /**
     * Decodes a mahjong_cb_leave_table_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_cb_leave_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_cb_leave_table_req;

    /**
     * Verifies a mahjong_cb_leave_table_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_cb_leave_table_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_cb_leave_table_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_cb_leave_table_req;

    /**
     * Creates a plain object from a mahjong_cb_leave_table_req message. Also converts values to other types if specified.
     * @param message mahjong_cb_leave_table_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_cb_leave_table_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_cb_leave_table_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_changecard_not. */
export interface Imahjong_jxmj_changecard_not {

    /** mahjong_jxmj_changecard_not cChairID */
    cChairID: number;

    /** mahjong_jxmj_changecard_not cHuPai */
    cHuPai: number;

    /** mahjong_jxmj_changecard_not cCurrCards */
    cCurrCards: number;

    /** mahjong_jxmj_changecard_not vecDisplayCards */
    vecDisplayCards?: (number[]|null);

    /** mahjong_jxmj_changecard_not vecLeftCards */
    vecLeftCards?: (number[]|null);

    /** mahjong_jxmj_changecard_not vecHandCards */
    vecHandCards?: (number[]|null);

    /** mahjong_jxmj_changecard_not nFrontPassedNum */
    nFrontPassedNum: number;

    /** mahjong_jxmj_changecard_not nBehidePassedNum */
    nBehidePassedNum: number;

    /** mahjong_jxmj_changecard_not nTingPos */
    nTingPos: number;
}

/** Represents a mahjong_jxmj_changecard_not. */
export class mahjong_jxmj_changecard_not implements Imahjong_jxmj_changecard_not {

    /**
     * Constructs a new mahjong_jxmj_changecard_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_changecard_not);

    /** mahjong_jxmj_changecard_not cChairID. */
    public cChairID: number;

    /** mahjong_jxmj_changecard_not cHuPai. */
    public cHuPai: number;

    /** mahjong_jxmj_changecard_not cCurrCards. */
    public cCurrCards: number;

    /** mahjong_jxmj_changecard_not vecDisplayCards. */
    public vecDisplayCards: number[];

    /** mahjong_jxmj_changecard_not vecLeftCards. */
    public vecLeftCards: number[];

    /** mahjong_jxmj_changecard_not vecHandCards. */
    public vecHandCards: number[];

    /** mahjong_jxmj_changecard_not nFrontPassedNum. */
    public nFrontPassedNum: number;

    /** mahjong_jxmj_changecard_not nBehidePassedNum. */
    public nBehidePassedNum: number;

    /** mahjong_jxmj_changecard_not nTingPos. */
    public nTingPos: number;

    /**
     * Creates a new mahjong_jxmj_changecard_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_changecard_not instance
     */
    public static create(properties?: Imahjong_jxmj_changecard_not): mahjong_jxmj_changecard_not;

    /**
     * Encodes the specified mahjong_jxmj_changecard_not message. Does not implicitly {@link mahjong_jxmj_changecard_not.verify|verify} messages.
     * @param message mahjong_jxmj_changecard_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_changecard_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_changecard_not message, length delimited. Does not implicitly {@link mahjong_jxmj_changecard_not.verify|verify} messages.
     * @param message mahjong_jxmj_changecard_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_changecard_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_changecard_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_changecard_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_changecard_not;

    /**
     * Decodes a mahjong_jxmj_changecard_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_changecard_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_changecard_not;

    /**
     * Verifies a mahjong_jxmj_changecard_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_changecard_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_changecard_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_changecard_not;

    /**
     * Creates a plain object from a mahjong_jxmj_changecard_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_changecard_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_changecard_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_changecard_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_playcard_ack. */
export interface Imahjong_jxmj_playcard_ack {

    /** mahjong_jxmj_playcard_ack nOpcode */
    nOpcode: number;

    /** mahjong_jxmj_playcard_ack cOpCard */
    cOpCard: number;

    /** mahjong_jxmj_playcard_ack sSerialID */
    sSerialID: number;
}

/** Represents a mahjong_jxmj_playcard_ack. */
export class mahjong_jxmj_playcard_ack implements Imahjong_jxmj_playcard_ack {

    /**
     * Constructs a new mahjong_jxmj_playcard_ack.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_playcard_ack);

    /** mahjong_jxmj_playcard_ack nOpcode. */
    public nOpcode: number;

    /** mahjong_jxmj_playcard_ack cOpCard. */
    public cOpCard: number;

    /** mahjong_jxmj_playcard_ack sSerialID. */
    public sSerialID: number;

    /**
     * Creates a new mahjong_jxmj_playcard_ack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_playcard_ack instance
     */
    public static create(properties?: Imahjong_jxmj_playcard_ack): mahjong_jxmj_playcard_ack;

    /**
     * Encodes the specified mahjong_jxmj_playcard_ack message. Does not implicitly {@link mahjong_jxmj_playcard_ack.verify|verify} messages.
     * @param message mahjong_jxmj_playcard_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_playcard_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_playcard_ack message, length delimited. Does not implicitly {@link mahjong_jxmj_playcard_ack.verify|verify} messages.
     * @param message mahjong_jxmj_playcard_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_playcard_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_playcard_ack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_playcard_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_playcard_ack;

    /**
     * Decodes a mahjong_jxmj_playcard_ack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_playcard_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_playcard_ack;

    /**
     * Verifies a mahjong_jxmj_playcard_ack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_playcard_ack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_playcard_ack
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_playcard_ack;

    /**
     * Creates a plain object from a mahjong_jxmj_playcard_ack message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_playcard_ack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_playcard_ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_playcard_ack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_gc_expression_not. */
export interface Imahjong_jxmj_gc_expression_not {

    /** mahjong_jxmj_gc_expression_not expressionType */
    expressionType: number;

    /** mahjong_jxmj_gc_expression_not expressionNum */
    expressionNum: number;
}

/** Represents a mahjong_jxmj_gc_expression_not. */
export class mahjong_jxmj_gc_expression_not implements Imahjong_jxmj_gc_expression_not {

    /**
     * Constructs a new mahjong_jxmj_gc_expression_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_gc_expression_not);

    /** mahjong_jxmj_gc_expression_not expressionType. */
    public expressionType: number;

    /** mahjong_jxmj_gc_expression_not expressionNum. */
    public expressionNum: number;

    /**
     * Creates a new mahjong_jxmj_gc_expression_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_gc_expression_not instance
     */
    public static create(properties?: Imahjong_jxmj_gc_expression_not): mahjong_jxmj_gc_expression_not;

    /**
     * Encodes the specified mahjong_jxmj_gc_expression_not message. Does not implicitly {@link mahjong_jxmj_gc_expression_not.verify|verify} messages.
     * @param message mahjong_jxmj_gc_expression_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_gc_expression_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_gc_expression_not message, length delimited. Does not implicitly {@link mahjong_jxmj_gc_expression_not.verify|verify} messages.
     * @param message mahjong_jxmj_gc_expression_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_gc_expression_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_gc_expression_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_gc_expression_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_gc_expression_not;

    /**
     * Decodes a mahjong_jxmj_gc_expression_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_gc_expression_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_gc_expression_not;

    /**
     * Verifies a mahjong_jxmj_gc_expression_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_gc_expression_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_gc_expression_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_gc_expression_not;

    /**
     * Creates a plain object from a mahjong_jxmj_gc_expression_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_gc_expression_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_gc_expression_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_gc_expression_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_bc_cli_timer_not. */
export interface Imahjong_bc_cli_timer_not {

    /** mahjong_bc_cli_timer_not plyGuid */
    plyGuid: (number|Long);

    /** mahjong_bc_cli_timer_not idleTime */
    idleTime: number;
}

/** Represents a mahjong_bc_cli_timer_not. */
export class mahjong_bc_cli_timer_not implements Imahjong_bc_cli_timer_not {

    /**
     * Constructs a new mahjong_bc_cli_timer_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_bc_cli_timer_not);

    /** mahjong_bc_cli_timer_not plyGuid. */
    public plyGuid: (number|Long);

    /** mahjong_bc_cli_timer_not idleTime. */
    public idleTime: number;

    /**
     * Creates a new mahjong_bc_cli_timer_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_bc_cli_timer_not instance
     */
    public static create(properties?: Imahjong_bc_cli_timer_not): mahjong_bc_cli_timer_not;

    /**
     * Encodes the specified mahjong_bc_cli_timer_not message. Does not implicitly {@link mahjong_bc_cli_timer_not.verify|verify} messages.
     * @param message mahjong_bc_cli_timer_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_bc_cli_timer_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_bc_cli_timer_not message, length delimited. Does not implicitly {@link mahjong_bc_cli_timer_not.verify|verify} messages.
     * @param message mahjong_bc_cli_timer_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_bc_cli_timer_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_bc_cli_timer_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_bc_cli_timer_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_bc_cli_timer_not;

    /**
     * Decodes a mahjong_bc_cli_timer_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_bc_cli_timer_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_bc_cli_timer_not;

    /**
     * Verifies a mahjong_bc_cli_timer_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_bc_cli_timer_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_bc_cli_timer_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_bc_cli_timer_not;

    /**
     * Creates a plain object from a mahjong_bc_cli_timer_not message. Also converts values to other types if specified.
     * @param message mahjong_bc_cli_timer_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_bc_cli_timer_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_bc_cli_timer_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_visi_compdata_not. */
export interface Imahjong_jxmj_visi_compdata_not {

    /** mahjong_jxmj_visi_compdata_not cBanker */
    cBanker: number;

    /** mahjong_jxmj_visi_compdata_not nLeftCards */
    nLeftCards: number;

    /** mahjong_jxmj_visi_compdata_not nDizhu */
    nDizhu: number;

    /** mahjong_jxmj_visi_compdata_not nTaifei */
    nTaifei: number;

    /** mahjong_jxmj_visi_compdata_not cCurrPly */
    cCurrPly: number;

    /** mahjong_jxmj_visi_compdata_not cPrioPly */
    cPrioPly: number;

    /** mahjong_jxmj_visi_compdata_not cAdminPly */
    cAdminPly: number;

    /** mahjong_jxmj_visi_compdata_not cInvitePly */
    cInvitePly: number;

    /** mahjong_jxmj_visi_compdata_not vecFakeScores */
    vecFakeScores?: ((number|Long)[]|null);

    /** mahjong_jxmj_visi_compdata_not vecPlyData */
    vecPlyData?: (Imahjong_jxmj_changecard_not[]|null);

    /** mahjong_jxmj_visi_compdata_not nParam1 */
    nParam1: number;

    /** mahjong_jxmj_visi_compdata_not nParam2 */
    nParam2: number;

    /** mahjong_jxmj_visi_compdata_not strParam1 */
    strParam1: string;

    /** mahjong_jxmj_visi_compdata_not strParam2 */
    strParam2: string;
}

/** Represents a mahjong_jxmj_visi_compdata_not. */
export class mahjong_jxmj_visi_compdata_not implements Imahjong_jxmj_visi_compdata_not {

    /**
     * Constructs a new mahjong_jxmj_visi_compdata_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_visi_compdata_not);

    /** mahjong_jxmj_visi_compdata_not cBanker. */
    public cBanker: number;

    /** mahjong_jxmj_visi_compdata_not nLeftCards. */
    public nLeftCards: number;

    /** mahjong_jxmj_visi_compdata_not nDizhu. */
    public nDizhu: number;

    /** mahjong_jxmj_visi_compdata_not nTaifei. */
    public nTaifei: number;

    /** mahjong_jxmj_visi_compdata_not cCurrPly. */
    public cCurrPly: number;

    /** mahjong_jxmj_visi_compdata_not cPrioPly. */
    public cPrioPly: number;

    /** mahjong_jxmj_visi_compdata_not cAdminPly. */
    public cAdminPly: number;

    /** mahjong_jxmj_visi_compdata_not cInvitePly. */
    public cInvitePly: number;

    /** mahjong_jxmj_visi_compdata_not vecFakeScores. */
    public vecFakeScores: (number|Long)[];

    /** mahjong_jxmj_visi_compdata_not vecPlyData. */
    public vecPlyData: Imahjong_jxmj_changecard_not[];

    /** mahjong_jxmj_visi_compdata_not nParam1. */
    public nParam1: number;

    /** mahjong_jxmj_visi_compdata_not nParam2. */
    public nParam2: number;

    /** mahjong_jxmj_visi_compdata_not strParam1. */
    public strParam1: string;

    /** mahjong_jxmj_visi_compdata_not strParam2. */
    public strParam2: string;

    /**
     * Creates a new mahjong_jxmj_visi_compdata_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_visi_compdata_not instance
     */
    public static create(properties?: Imahjong_jxmj_visi_compdata_not): mahjong_jxmj_visi_compdata_not;

    /**
     * Encodes the specified mahjong_jxmj_visi_compdata_not message. Does not implicitly {@link mahjong_jxmj_visi_compdata_not.verify|verify} messages.
     * @param message mahjong_jxmj_visi_compdata_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_visi_compdata_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_visi_compdata_not message, length delimited. Does not implicitly {@link mahjong_jxmj_visi_compdata_not.verify|verify} messages.
     * @param message mahjong_jxmj_visi_compdata_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_visi_compdata_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_visi_compdata_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_visi_compdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_visi_compdata_not;

    /**
     * Decodes a mahjong_jxmj_visi_compdata_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_visi_compdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_visi_compdata_not;

    /**
     * Verifies a mahjong_jxmj_visi_compdata_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_visi_compdata_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_visi_compdata_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_visi_compdata_not;

    /**
     * Creates a plain object from a mahjong_jxmj_visi_compdata_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_visi_compdata_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_visi_compdata_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_visi_compdata_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_playcard_req. */
export interface Imahjong_jxmj_playcard_req {

    /** mahjong_jxmj_playcard_req chairId */
    chairId: number;

    /** mahjong_jxmj_playcard_req nOpcode */
    nOpcode: number;

    /** mahjong_jxmj_playcard_req cPrevCard */
    cPrevCard: number;

    /** mahjong_jxmj_playcard_req vecTingPutCards */
    vecTingPutCards?: (number[]|null);

    /** mahjong_jxmj_playcard_req vecTingHuCards */
    vecTingHuCards?: (number[]|null);

    /** mahjong_jxmj_playcard_req vecGangInfo */
    vecGangInfo?: (Imahjong_jxmj_gang_info[]|null);

    /** mahjong_jxmj_playcard_req sSerialID */
    sSerialID: number;
}

/** Represents a mahjong_jxmj_playcard_req. */
export class mahjong_jxmj_playcard_req implements Imahjong_jxmj_playcard_req {

    /**
     * Constructs a new mahjong_jxmj_playcard_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_playcard_req);

    /** mahjong_jxmj_playcard_req chairId. */
    public chairId: number;

    /** mahjong_jxmj_playcard_req nOpcode. */
    public nOpcode: number;

    /** mahjong_jxmj_playcard_req cPrevCard. */
    public cPrevCard: number;

    /** mahjong_jxmj_playcard_req vecTingPutCards. */
    public vecTingPutCards: number[];

    /** mahjong_jxmj_playcard_req vecTingHuCards. */
    public vecTingHuCards: number[];

    /** mahjong_jxmj_playcard_req vecGangInfo. */
    public vecGangInfo: Imahjong_jxmj_gang_info[];

    /** mahjong_jxmj_playcard_req sSerialID. */
    public sSerialID: number;

    /**
     * Creates a new mahjong_jxmj_playcard_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_playcard_req instance
     */
    public static create(properties?: Imahjong_jxmj_playcard_req): mahjong_jxmj_playcard_req;

    /**
     * Encodes the specified mahjong_jxmj_playcard_req message. Does not implicitly {@link mahjong_jxmj_playcard_req.verify|verify} messages.
     * @param message mahjong_jxmj_playcard_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_playcard_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_playcard_req message, length delimited. Does not implicitly {@link mahjong_jxmj_playcard_req.verify|verify} messages.
     * @param message mahjong_jxmj_playcard_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_playcard_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_playcard_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_playcard_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_playcard_req;

    /**
     * Decodes a mahjong_jxmj_playcard_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_playcard_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_playcard_req;

    /**
     * Verifies a mahjong_jxmj_playcard_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_playcard_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_playcard_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_playcard_req;

    /**
     * Creates a plain object from a mahjong_jxmj_playcard_req message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_playcard_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_playcard_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_playcard_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_bc_ply_leave_not. */
export interface Imahjong_bc_ply_leave_not {

    /** mahjong_bc_ply_leave_not plyGuid */
    plyGuid: (number|Long);
}

/** Represents a mahjong_bc_ply_leave_not. */
export class mahjong_bc_ply_leave_not implements Imahjong_bc_ply_leave_not {

    /**
     * Constructs a new mahjong_bc_ply_leave_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_bc_ply_leave_not);

    /** mahjong_bc_ply_leave_not plyGuid. */
    public plyGuid: (number|Long);

    /**
     * Creates a new mahjong_bc_ply_leave_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_bc_ply_leave_not instance
     */
    public static create(properties?: Imahjong_bc_ply_leave_not): mahjong_bc_ply_leave_not;

    /**
     * Encodes the specified mahjong_bc_ply_leave_not message. Does not implicitly {@link mahjong_bc_ply_leave_not.verify|verify} messages.
     * @param message mahjong_bc_ply_leave_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_bc_ply_leave_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_bc_ply_leave_not message, length delimited. Does not implicitly {@link mahjong_bc_ply_leave_not.verify|verify} messages.
     * @param message mahjong_bc_ply_leave_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_bc_ply_leave_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_bc_ply_leave_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_bc_ply_leave_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_bc_ply_leave_not;

    /**
     * Decodes a mahjong_bc_ply_leave_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_bc_ply_leave_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_bc_ply_leave_not;

    /**
     * Verifies a mahjong_bc_ply_leave_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_bc_ply_leave_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_bc_ply_leave_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_bc_ply_leave_not;

    /**
     * Creates a plain object from a mahjong_bc_ply_leave_not message. Also converts values to other types if specified.
     * @param message mahjong_bc_ply_leave_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_bc_ply_leave_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_bc_ply_leave_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_bc_leave_table_ack. */
export interface Imahjong_bc_leave_table_ack {

    /** mahjong_bc_leave_table_ack ret */
    ret: number;

    /** mahjong_bc_leave_table_ack plyNickname */
    plyNickname: string;
}

/** Represents a mahjong_bc_leave_table_ack. */
export class mahjong_bc_leave_table_ack implements Imahjong_bc_leave_table_ack {

    /**
     * Constructs a new mahjong_bc_leave_table_ack.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_bc_leave_table_ack);

    /** mahjong_bc_leave_table_ack ret. */
    public ret: number;

    /** mahjong_bc_leave_table_ack plyNickname. */
    public plyNickname: string;

    /**
     * Creates a new mahjong_bc_leave_table_ack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_bc_leave_table_ack instance
     */
    public static create(properties?: Imahjong_bc_leave_table_ack): mahjong_bc_leave_table_ack;

    /**
     * Encodes the specified mahjong_bc_leave_table_ack message. Does not implicitly {@link mahjong_bc_leave_table_ack.verify|verify} messages.
     * @param message mahjong_bc_leave_table_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_bc_leave_table_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_bc_leave_table_ack message, length delimited. Does not implicitly {@link mahjong_bc_leave_table_ack.verify|verify} messages.
     * @param message mahjong_bc_leave_table_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_bc_leave_table_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_bc_leave_table_ack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_bc_leave_table_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_bc_leave_table_ack;

    /**
     * Decodes a mahjong_bc_leave_table_ack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_bc_leave_table_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_bc_leave_table_ack;

    /**
     * Verifies a mahjong_bc_leave_table_ack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_bc_leave_table_ack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_bc_leave_table_ack
     */
    public static fromObject(object: { [k: string]: any }): mahjong_bc_leave_table_ack;

    /**
     * Creates a plain object from a mahjong_bc_leave_table_ack message. Also converts values to other types if specified.
     * @param message mahjong_bc_leave_table_ack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_bc_leave_table_ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_bc_leave_table_ack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_gangresult_not. */
export interface Imahjong_jxmj_gangresult_not {

    /** mahjong_jxmj_gangresult_not vecGangFen */
    vecGangFen?: (number[]|null);
}

/** Represents a mahjong_jxmj_gangresult_not. */
export class mahjong_jxmj_gangresult_not implements Imahjong_jxmj_gangresult_not {

    /**
     * Constructs a new mahjong_jxmj_gangresult_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_gangresult_not);

    /** mahjong_jxmj_gangresult_not vecGangFen. */
    public vecGangFen: number[];

    /**
     * Creates a new mahjong_jxmj_gangresult_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_gangresult_not instance
     */
    public static create(properties?: Imahjong_jxmj_gangresult_not): mahjong_jxmj_gangresult_not;

    /**
     * Encodes the specified mahjong_jxmj_gangresult_not message. Does not implicitly {@link mahjong_jxmj_gangresult_not.verify|verify} messages.
     * @param message mahjong_jxmj_gangresult_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_gangresult_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_gangresult_not message, length delimited. Does not implicitly {@link mahjong_jxmj_gangresult_not.verify|verify} messages.
     * @param message mahjong_jxmj_gangresult_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_gangresult_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_gangresult_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_gangresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_gangresult_not;

    /**
     * Decodes a mahjong_jxmj_gangresult_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_gangresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_gangresult_not;

    /**
     * Verifies a mahjong_jxmj_gangresult_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_gangresult_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_gangresult_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_gangresult_not;

    /**
     * Creates a plain object from a mahjong_jxmj_gangresult_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_gangresult_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_gangresult_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_gangresult_not to JSON.
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

/** Properties of a mahjong_jxmj_gang_data. */
export interface Imahjong_jxmj_gang_data {

    /** mahjong_jxmj_gang_data cNum */
    cNum: number;

    /** mahjong_jxmj_gang_data nScore */
    nScore: number;
}

/** Represents a mahjong_jxmj_gang_data. */
export class mahjong_jxmj_gang_data implements Imahjong_jxmj_gang_data {

    /**
     * Constructs a new mahjong_jxmj_gang_data.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_gang_data);

    /** mahjong_jxmj_gang_data cNum. */
    public cNum: number;

    /** mahjong_jxmj_gang_data nScore. */
    public nScore: number;

    /**
     * Creates a new mahjong_jxmj_gang_data instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_gang_data instance
     */
    public static create(properties?: Imahjong_jxmj_gang_data): mahjong_jxmj_gang_data;

    /**
     * Encodes the specified mahjong_jxmj_gang_data message. Does not implicitly {@link mahjong_jxmj_gang_data.verify|verify} messages.
     * @param message mahjong_jxmj_gang_data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_gang_data, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_gang_data message, length delimited. Does not implicitly {@link mahjong_jxmj_gang_data.verify|verify} messages.
     * @param message mahjong_jxmj_gang_data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_gang_data, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_gang_data message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_gang_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_gang_data;

    /**
     * Decodes a mahjong_jxmj_gang_data message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_gang_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_gang_data;

    /**
     * Verifies a mahjong_jxmj_gang_data message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_gang_data message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_gang_data
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_gang_data;

    /**
     * Creates a plain object from a mahjong_jxmj_gang_data message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_gang_data
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_gang_data, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_gang_data to JSON.
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

/** Properties of a mahjong_jxmj_Cli_Auto_Req. */
export interface Imahjong_jxmj_Cli_Auto_Req {

    /** mahjong_jxmj_Cli_Auto_Req cAuto */
    cAuto: number;

    /** mahjong_jxmj_Cli_Auto_Req iAutoType */
    iAutoType: number;
}

/** Represents a mahjong_jxmj_Cli_Auto_Req. */
export class mahjong_jxmj_Cli_Auto_Req implements Imahjong_jxmj_Cli_Auto_Req {

    /**
     * Constructs a new mahjong_jxmj_Cli_Auto_Req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_Cli_Auto_Req);

    /** mahjong_jxmj_Cli_Auto_Req cAuto. */
    public cAuto: number;

    /** mahjong_jxmj_Cli_Auto_Req iAutoType. */
    public iAutoType: number;

    /**
     * Creates a new mahjong_jxmj_Cli_Auto_Req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_Cli_Auto_Req instance
     */
    public static create(properties?: Imahjong_jxmj_Cli_Auto_Req): mahjong_jxmj_Cli_Auto_Req;

    /**
     * Encodes the specified mahjong_jxmj_Cli_Auto_Req message. Does not implicitly {@link mahjong_jxmj_Cli_Auto_Req.verify|verify} messages.
     * @param message mahjong_jxmj_Cli_Auto_Req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_Cli_Auto_Req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_Cli_Auto_Req message, length delimited. Does not implicitly {@link mahjong_jxmj_Cli_Auto_Req.verify|verify} messages.
     * @param message mahjong_jxmj_Cli_Auto_Req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_Cli_Auto_Req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_Cli_Auto_Req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_Cli_Auto_Req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_Cli_Auto_Req;

    /**
     * Decodes a mahjong_jxmj_Cli_Auto_Req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_Cli_Auto_Req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_Cli_Auto_Req;

    /**
     * Verifies a mahjong_jxmj_Cli_Auto_Req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_Cli_Auto_Req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_Cli_Auto_Req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_Cli_Auto_Req;

    /**
     * Creates a plain object from a mahjong_jxmj_Cli_Auto_Req message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_Cli_Auto_Req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_Cli_Auto_Req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_Cli_Auto_Req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_fan_data_v2_2_0. */
export interface Imahjong_jxmj_fan_data_v2_2_0 {

    /** mahjong_jxmj_fan_data_v2_2_0 cChairId */
    cChairId: number;

    /** mahjong_jxmj_fan_data_v2_2_0 nScore */
    nScore: number;

    /** mahjong_jxmj_fan_data_v2_2_0 cType */
    cType: number;

    /** mahjong_jxmj_fan_data_v2_2_0 nIndex */
    nIndex: number;
}

/** Represents a mahjong_jxmj_fan_data_v2_2_0. */
export class mahjong_jxmj_fan_data_v2_2_0 implements Imahjong_jxmj_fan_data_v2_2_0 {

    /**
     * Constructs a new mahjong_jxmj_fan_data_v2_2_0.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_fan_data_v2_2_0);

    /** mahjong_jxmj_fan_data_v2_2_0 cChairId. */
    public cChairId: number;

    /** mahjong_jxmj_fan_data_v2_2_0 nScore. */
    public nScore: number;

    /** mahjong_jxmj_fan_data_v2_2_0 cType. */
    public cType: number;

    /** mahjong_jxmj_fan_data_v2_2_0 nIndex. */
    public nIndex: number;

    /**
     * Creates a new mahjong_jxmj_fan_data_v2_2_0 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_fan_data_v2_2_0 instance
     */
    public static create(properties?: Imahjong_jxmj_fan_data_v2_2_0): mahjong_jxmj_fan_data_v2_2_0;

    /**
     * Encodes the specified mahjong_jxmj_fan_data_v2_2_0 message. Does not implicitly {@link mahjong_jxmj_fan_data_v2_2_0.verify|verify} messages.
     * @param message mahjong_jxmj_fan_data_v2_2_0 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_fan_data_v2_2_0, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_fan_data_v2_2_0 message, length delimited. Does not implicitly {@link mahjong_jxmj_fan_data_v2_2_0.verify|verify} messages.
     * @param message mahjong_jxmj_fan_data_v2_2_0 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_fan_data_v2_2_0, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_fan_data_v2_2_0 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_fan_data_v2_2_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_fan_data_v2_2_0;

    /**
     * Decodes a mahjong_jxmj_fan_data_v2_2_0 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_fan_data_v2_2_0
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_fan_data_v2_2_0;

    /**
     * Verifies a mahjong_jxmj_fan_data_v2_2_0 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_fan_data_v2_2_0 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_fan_data_v2_2_0
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_fan_data_v2_2_0;

    /**
     * Creates a plain object from a mahjong_jxmj_fan_data_v2_2_0 message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_fan_data_v2_2_0
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_fan_data_v2_2_0, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_fan_data_v2_2_0 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_PlayerStatus. */
export interface Imahjong_PlayerStatus {

    /** mahjong_PlayerStatus plyGuid */
    plyGuid: (number|Long);

    /** mahjong_PlayerStatus plyNickname */
    plyNickname: string;

    /** mahjong_PlayerStatus plyStatus */
    plyStatus: number;

    /** mahjong_PlayerStatus sex */
    sex: number;

    /** mahjong_PlayerStatus gameId */
    gameId: number;

    /** mahjong_PlayerStatus gameServerId */
    gameServerId: number;

    /** mahjong_PlayerStatus tableId */
    tableId: number;

    /** mahjong_PlayerStatus money */
    money: (number|Long);

    /** mahjong_PlayerStatus won */
    won: number;

    /** mahjong_PlayerStatus lost */
    lost: number;

    /** mahjong_PlayerStatus moneyRank */
    moneyRank: number;

    /** mahjong_PlayerStatus wonRank */
    wonRank: number;

    /** mahjong_PlayerStatus param_1 */
    param_1: number;

    /** mahjong_PlayerStatus param_2 */
    param_2: number;

    /** mahjong_PlayerStatus latitude */
    latitude: number;

    /** mahjong_PlayerStatus longitude */
    longitude: number;
}

/** Represents a mahjong_PlayerStatus. */
export class mahjong_PlayerStatus implements Imahjong_PlayerStatus {

    /**
     * Constructs a new mahjong_PlayerStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_PlayerStatus);

    /** mahjong_PlayerStatus plyGuid. */
    public plyGuid: (number|Long);

    /** mahjong_PlayerStatus plyNickname. */
    public plyNickname: string;

    /** mahjong_PlayerStatus plyStatus. */
    public plyStatus: number;

    /** mahjong_PlayerStatus sex. */
    public sex: number;

    /** mahjong_PlayerStatus gameId. */
    public gameId: number;

    /** mahjong_PlayerStatus gameServerId. */
    public gameServerId: number;

    /** mahjong_PlayerStatus tableId. */
    public tableId: number;

    /** mahjong_PlayerStatus money. */
    public money: (number|Long);

    /** mahjong_PlayerStatus won. */
    public won: number;

    /** mahjong_PlayerStatus lost. */
    public lost: number;

    /** mahjong_PlayerStatus moneyRank. */
    public moneyRank: number;

    /** mahjong_PlayerStatus wonRank. */
    public wonRank: number;

    /** mahjong_PlayerStatus param_1. */
    public param_1: number;

    /** mahjong_PlayerStatus param_2. */
    public param_2: number;

    /** mahjong_PlayerStatus latitude. */
    public latitude: number;

    /** mahjong_PlayerStatus longitude. */
    public longitude: number;

    /**
     * Creates a new mahjong_PlayerStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_PlayerStatus instance
     */
    public static create(properties?: Imahjong_PlayerStatus): mahjong_PlayerStatus;

    /**
     * Encodes the specified mahjong_PlayerStatus message. Does not implicitly {@link mahjong_PlayerStatus.verify|verify} messages.
     * @param message mahjong_PlayerStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_PlayerStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_PlayerStatus message, length delimited. Does not implicitly {@link mahjong_PlayerStatus.verify|verify} messages.
     * @param message mahjong_PlayerStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_PlayerStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_PlayerStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_PlayerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_PlayerStatus;

    /**
     * Decodes a mahjong_PlayerStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_PlayerStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_PlayerStatus;

    /**
     * Verifies a mahjong_PlayerStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_PlayerStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_PlayerStatus
     */
    public static fromObject(object: { [k: string]: any }): mahjong_PlayerStatus;

    /**
     * Creates a plain object from a mahjong_PlayerStatus message. Also converts values to other types if specified.
     * @param message mahjong_PlayerStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_PlayerStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_PlayerStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_bc_update_ply_data_not. */
export interface Imahjong_bc_update_ply_data_not {

    /** mahjong_bc_update_ply_data_not plyGuid */
    plyGuid: (number|Long);

    /** mahjong_bc_update_ply_data_not uptReason */
    uptReason: number;

    /** mahjong_bc_update_ply_data_not uptType */
    uptType: number;

    /** mahjong_bc_update_ply_data_not variant */
    variant: number;

    /** mahjong_bc_update_ply_data_not amount */
    amount: (number|Long);
}

/** Represents a mahjong_bc_update_ply_data_not. */
export class mahjong_bc_update_ply_data_not implements Imahjong_bc_update_ply_data_not {

    /**
     * Constructs a new mahjong_bc_update_ply_data_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_bc_update_ply_data_not);

    /** mahjong_bc_update_ply_data_not plyGuid. */
    public plyGuid: (number|Long);

    /** mahjong_bc_update_ply_data_not uptReason. */
    public uptReason: number;

    /** mahjong_bc_update_ply_data_not uptType. */
    public uptType: number;

    /** mahjong_bc_update_ply_data_not variant. */
    public variant: number;

    /** mahjong_bc_update_ply_data_not amount. */
    public amount: (number|Long);

    /**
     * Creates a new mahjong_bc_update_ply_data_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_bc_update_ply_data_not instance
     */
    public static create(properties?: Imahjong_bc_update_ply_data_not): mahjong_bc_update_ply_data_not;

    /**
     * Encodes the specified mahjong_bc_update_ply_data_not message. Does not implicitly {@link mahjong_bc_update_ply_data_not.verify|verify} messages.
     * @param message mahjong_bc_update_ply_data_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_bc_update_ply_data_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_bc_update_ply_data_not message, length delimited. Does not implicitly {@link mahjong_bc_update_ply_data_not.verify|verify} messages.
     * @param message mahjong_bc_update_ply_data_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_bc_update_ply_data_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_bc_update_ply_data_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_bc_update_ply_data_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_bc_update_ply_data_not;

    /**
     * Decodes a mahjong_bc_update_ply_data_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_bc_update_ply_data_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_bc_update_ply_data_not;

    /**
     * Verifies a mahjong_bc_update_ply_data_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_bc_update_ply_data_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_bc_update_ply_data_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_bc_update_ply_data_not;

    /**
     * Creates a plain object from a mahjong_bc_update_ply_data_not message. Also converts values to other types if specified.
     * @param message mahjong_bc_update_ply_data_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_bc_update_ply_data_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_bc_update_ply_data_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_dice_not. */
export interface Imahjong_jxmj_dice_not {

    /** mahjong_jxmj_dice_not cChairID */
    cChairID: number;

    /** mahjong_jxmj_dice_not cBanker */
    cBanker: number;

    /** mahjong_jxmj_dice_not vecDice */
    vecDice?: (number[]|null);

    /** mahjong_jxmj_dice_not nFlag */
    nFlag: number;
}

/** Represents a mahjong_jxmj_dice_not. */
export class mahjong_jxmj_dice_not implements Imahjong_jxmj_dice_not {

    /**
     * Constructs a new mahjong_jxmj_dice_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_dice_not);

    /** mahjong_jxmj_dice_not cChairID. */
    public cChairID: number;

    /** mahjong_jxmj_dice_not cBanker. */
    public cBanker: number;

    /** mahjong_jxmj_dice_not vecDice. */
    public vecDice: number[];

    /** mahjong_jxmj_dice_not nFlag. */
    public nFlag: number;

    /**
     * Creates a new mahjong_jxmj_dice_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_dice_not instance
     */
    public static create(properties?: Imahjong_jxmj_dice_not): mahjong_jxmj_dice_not;

    /**
     * Encodes the specified mahjong_jxmj_dice_not message. Does not implicitly {@link mahjong_jxmj_dice_not.verify|verify} messages.
     * @param message mahjong_jxmj_dice_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_dice_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_dice_not message, length delimited. Does not implicitly {@link mahjong_jxmj_dice_not.verify|verify} messages.
     * @param message mahjong_jxmj_dice_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_dice_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_dice_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_dice_not;

    /**
     * Decodes a mahjong_jxmj_dice_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_dice_not;

    /**
     * Verifies a mahjong_jxmj_dice_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_dice_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_dice_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_dice_not;

    /**
     * Creates a plain object from a mahjong_jxmj_dice_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_dice_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_dice_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_dice_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_cb_join_table_req. */
export interface Imahjong_cb_join_table_req {

    /** mahjong_cb_join_table_req tableId */
    tableId: number;

    /** mahjong_cb_join_table_req password */
    password: string;

    /** mahjong_cb_join_table_req clubUid */
    clubUid: number;
}

/** Represents a mahjong_cb_join_table_req. */
export class mahjong_cb_join_table_req implements Imahjong_cb_join_table_req {

    /**
     * Constructs a new mahjong_cb_join_table_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_cb_join_table_req);

    /** mahjong_cb_join_table_req tableId. */
    public tableId: number;

    /** mahjong_cb_join_table_req password. */
    public password: string;

    /** mahjong_cb_join_table_req clubUid. */
    public clubUid: number;

    /**
     * Creates a new mahjong_cb_join_table_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_cb_join_table_req instance
     */
    public static create(properties?: Imahjong_cb_join_table_req): mahjong_cb_join_table_req;

    /**
     * Encodes the specified mahjong_cb_join_table_req message. Does not implicitly {@link mahjong_cb_join_table_req.verify|verify} messages.
     * @param message mahjong_cb_join_table_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_cb_join_table_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_cb_join_table_req message, length delimited. Does not implicitly {@link mahjong_cb_join_table_req.verify|verify} messages.
     * @param message mahjong_cb_join_table_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_cb_join_table_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_cb_join_table_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_cb_join_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_cb_join_table_req;

    /**
     * Decodes a mahjong_cb_join_table_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_cb_join_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_cb_join_table_req;

    /**
     * Verifies a mahjong_cb_join_table_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_cb_join_table_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_cb_join_table_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_cb_join_table_req;

    /**
     * Creates a plain object from a mahjong_cb_join_table_req message. Also converts values to other types if specified.
     * @param message mahjong_cb_join_table_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_cb_join_table_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_cb_join_table_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_bc_award_type_not. */
export interface Imahjong_bc_award_type_not {

    /** mahjong_bc_award_type_not type */
    type?: (number[]|null);
}

/** Represents a mahjong_bc_award_type_not. */
export class mahjong_bc_award_type_not implements Imahjong_bc_award_type_not {

    /**
     * Constructs a new mahjong_bc_award_type_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_bc_award_type_not);

    /** mahjong_bc_award_type_not type. */
    public type: number[];

    /**
     * Creates a new mahjong_bc_award_type_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_bc_award_type_not instance
     */
    public static create(properties?: Imahjong_bc_award_type_not): mahjong_bc_award_type_not;

    /**
     * Encodes the specified mahjong_bc_award_type_not message. Does not implicitly {@link mahjong_bc_award_type_not.verify|verify} messages.
     * @param message mahjong_bc_award_type_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_bc_award_type_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_bc_award_type_not message, length delimited. Does not implicitly {@link mahjong_bc_award_type_not.verify|verify} messages.
     * @param message mahjong_bc_award_type_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_bc_award_type_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_bc_award_type_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_bc_award_type_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_bc_award_type_not;

    /**
     * Decodes a mahjong_bc_award_type_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_bc_award_type_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_bc_award_type_not;

    /**
     * Verifies a mahjong_bc_award_type_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_bc_award_type_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_bc_award_type_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_bc_award_type_not;

    /**
     * Creates a plain object from a mahjong_bc_award_type_not message. Also converts values to other types if specified.
     * @param message mahjong_bc_award_type_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_bc_award_type_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_bc_award_type_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_svr_taifei_not. */
export interface Imahjong_jxmj_svr_taifei_not {

    /** mahjong_jxmj_svr_taifei_not nTaifei */
    nTaifei: number;
}

/** Represents a mahjong_jxmj_svr_taifei_not. */
export class mahjong_jxmj_svr_taifei_not implements Imahjong_jxmj_svr_taifei_not {

    /**
     * Constructs a new mahjong_jxmj_svr_taifei_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_svr_taifei_not);

    /** mahjong_jxmj_svr_taifei_not nTaifei. */
    public nTaifei: number;

    /**
     * Creates a new mahjong_jxmj_svr_taifei_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_svr_taifei_not instance
     */
    public static create(properties?: Imahjong_jxmj_svr_taifei_not): mahjong_jxmj_svr_taifei_not;

    /**
     * Encodes the specified mahjong_jxmj_svr_taifei_not message. Does not implicitly {@link mahjong_jxmj_svr_taifei_not.verify|verify} messages.
     * @param message mahjong_jxmj_svr_taifei_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_svr_taifei_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_svr_taifei_not message, length delimited. Does not implicitly {@link mahjong_jxmj_svr_taifei_not.verify|verify} messages.
     * @param message mahjong_jxmj_svr_taifei_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_svr_taifei_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_svr_taifei_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_svr_taifei_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_svr_taifei_not;

    /**
     * Decodes a mahjong_jxmj_svr_taifei_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_svr_taifei_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_svr_taifei_not;

    /**
     * Verifies a mahjong_jxmj_svr_taifei_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_svr_taifei_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_svr_taifei_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_svr_taifei_not;

    /**
     * Creates a plain object from a mahjong_jxmj_svr_taifei_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_svr_taifei_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_svr_taifei_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_svr_taifei_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_bc_login_ack. */
export interface Imahjong_bc_login_ack {

    /** mahjong_bc_login_ack ret */
    ret: number;

    /** mahjong_bc_login_ack plyBaseData */
    plyBaseData: Imahjong_PlyBaseData;

    /** mahjong_bc_login_ack plyStatus */
    plyStatus: Imahjong_PlayerStatus;

    /** mahjong_bc_login_ack errorMsg */
    errorMsg: string;
}

/** Represents a mahjong_bc_login_ack. */
export class mahjong_bc_login_ack implements Imahjong_bc_login_ack {

    /**
     * Constructs a new mahjong_bc_login_ack.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_bc_login_ack);

    /** mahjong_bc_login_ack ret. */
    public ret: number;

    /** mahjong_bc_login_ack plyBaseData. */
    public plyBaseData: Imahjong_PlyBaseData;

    /** mahjong_bc_login_ack plyStatus. */
    public plyStatus: Imahjong_PlayerStatus;

    /** mahjong_bc_login_ack errorMsg. */
    public errorMsg: string;

    /**
     * Creates a new mahjong_bc_login_ack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_bc_login_ack instance
     */
    public static create(properties?: Imahjong_bc_login_ack): mahjong_bc_login_ack;

    /**
     * Encodes the specified mahjong_bc_login_ack message. Does not implicitly {@link mahjong_bc_login_ack.verify|verify} messages.
     * @param message mahjong_bc_login_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_bc_login_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_bc_login_ack message, length delimited. Does not implicitly {@link mahjong_bc_login_ack.verify|verify} messages.
     * @param message mahjong_bc_login_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_bc_login_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_bc_login_ack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_bc_login_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_bc_login_ack;

    /**
     * Decodes a mahjong_bc_login_ack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_bc_login_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_bc_login_ack;

    /**
     * Verifies a mahjong_bc_login_ack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_bc_login_ack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_bc_login_ack
     */
    public static fromObject(object: { [k: string]: any }): mahjong_bc_login_ack;

    /**
     * Creates a plain object from a mahjong_bc_login_ack message. Also converts values to other types if specified.
     * @param message mahjong_bc_login_ack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_bc_login_ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_bc_login_ack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_gang_info. */
export interface Imahjong_jxmj_gang_info {

    /** mahjong_jxmj_gang_info nOpcode */
    nOpcode: number;

    /** mahjong_jxmj_gang_info vecGangCards */
    vecGangCards?: (number[]|null);
}

/** Represents a mahjong_jxmj_gang_info. */
export class mahjong_jxmj_gang_info implements Imahjong_jxmj_gang_info {

    /**
     * Constructs a new mahjong_jxmj_gang_info.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_gang_info);

    /** mahjong_jxmj_gang_info nOpcode. */
    public nOpcode: number;

    /** mahjong_jxmj_gang_info vecGangCards. */
    public vecGangCards: number[];

    /**
     * Creates a new mahjong_jxmj_gang_info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_gang_info instance
     */
    public static create(properties?: Imahjong_jxmj_gang_info): mahjong_jxmj_gang_info;

    /**
     * Encodes the specified mahjong_jxmj_gang_info message. Does not implicitly {@link mahjong_jxmj_gang_info.verify|verify} messages.
     * @param message mahjong_jxmj_gang_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_gang_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_gang_info message, length delimited. Does not implicitly {@link mahjong_jxmj_gang_info.verify|verify} messages.
     * @param message mahjong_jxmj_gang_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_gang_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_gang_info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_gang_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_gang_info;

    /**
     * Decodes a mahjong_jxmj_gang_info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_gang_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_gang_info;

    /**
     * Verifies a mahjong_jxmj_gang_info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_gang_info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_gang_info
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_gang_info;

    /**
     * Creates a plain object from a mahjong_jxmj_gang_info message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_gang_info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_gang_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_gang_info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_visi_compdata_req. */
export interface Imahjong_jxmj_visi_compdata_req {
}

/** Represents a mahjong_jxmj_visi_compdata_req. */
export class mahjong_jxmj_visi_compdata_req implements Imahjong_jxmj_visi_compdata_req {

    /**
     * Constructs a new mahjong_jxmj_visi_compdata_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_visi_compdata_req);

    /**
     * Creates a new mahjong_jxmj_visi_compdata_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_visi_compdata_req instance
     */
    public static create(properties?: Imahjong_jxmj_visi_compdata_req): mahjong_jxmj_visi_compdata_req;

    /**
     * Encodes the specified mahjong_jxmj_visi_compdata_req message. Does not implicitly {@link mahjong_jxmj_visi_compdata_req.verify|verify} messages.
     * @param message mahjong_jxmj_visi_compdata_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_visi_compdata_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_visi_compdata_req message, length delimited. Does not implicitly {@link mahjong_jxmj_visi_compdata_req.verify|verify} messages.
     * @param message mahjong_jxmj_visi_compdata_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_visi_compdata_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_visi_compdata_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_visi_compdata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_visi_compdata_req;

    /**
     * Decodes a mahjong_jxmj_visi_compdata_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_visi_compdata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_visi_compdata_req;

    /**
     * Verifies a mahjong_jxmj_visi_compdata_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_visi_compdata_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_visi_compdata_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_visi_compdata_req;

    /**
     * Creates a plain object from a mahjong_jxmj_visi_compdata_req message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_visi_compdata_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_visi_compdata_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_visi_compdata_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_continue_banker_not. */
export interface Imahjong_jxmj_continue_banker_not {

    /** mahjong_jxmj_continue_banker_not flag */
    flag: number;
}

/** Represents a mahjong_jxmj_continue_banker_not. */
export class mahjong_jxmj_continue_banker_not implements Imahjong_jxmj_continue_banker_not {

    /**
     * Constructs a new mahjong_jxmj_continue_banker_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_continue_banker_not);

    /** mahjong_jxmj_continue_banker_not flag. */
    public flag: number;

    /**
     * Creates a new mahjong_jxmj_continue_banker_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_continue_banker_not instance
     */
    public static create(properties?: Imahjong_jxmj_continue_banker_not): mahjong_jxmj_continue_banker_not;

    /**
     * Encodes the specified mahjong_jxmj_continue_banker_not message. Does not implicitly {@link mahjong_jxmj_continue_banker_not.verify|verify} messages.
     * @param message mahjong_jxmj_continue_banker_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_continue_banker_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_continue_banker_not message, length delimited. Does not implicitly {@link mahjong_jxmj_continue_banker_not.verify|verify} messages.
     * @param message mahjong_jxmj_continue_banker_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_continue_banker_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_continue_banker_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_continue_banker_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_continue_banker_not;

    /**
     * Decodes a mahjong_jxmj_continue_banker_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_continue_banker_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_continue_banker_not;

    /**
     * Verifies a mahjong_jxmj_continue_banker_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_continue_banker_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_continue_banker_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_continue_banker_not;

    /**
     * Creates a plain object from a mahjong_jxmj_continue_banker_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_continue_banker_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_continue_banker_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_continue_banker_not to JSON.
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

/** Properties of a mahjong_jxmj_kaibao_not. */
export interface Imahjong_jxmj_kaibao_not {

    /** mahjong_jxmj_kaibao_not cCard */
    cCard: number;

    /** mahjong_jxmj_kaibao_not nDice */
    nDice: number;
}

/** Represents a mahjong_jxmj_kaibao_not. */
export class mahjong_jxmj_kaibao_not implements Imahjong_jxmj_kaibao_not {

    /**
     * Constructs a new mahjong_jxmj_kaibao_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_kaibao_not);

    /** mahjong_jxmj_kaibao_not cCard. */
    public cCard: number;

    /** mahjong_jxmj_kaibao_not nDice. */
    public nDice: number;

    /**
     * Creates a new mahjong_jxmj_kaibao_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_kaibao_not instance
     */
    public static create(properties?: Imahjong_jxmj_kaibao_not): mahjong_jxmj_kaibao_not;

    /**
     * Encodes the specified mahjong_jxmj_kaibao_not message. Does not implicitly {@link mahjong_jxmj_kaibao_not.verify|verify} messages.
     * @param message mahjong_jxmj_kaibao_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_kaibao_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_kaibao_not message, length delimited. Does not implicitly {@link mahjong_jxmj_kaibao_not.verify|verify} messages.
     * @param message mahjong_jxmj_kaibao_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_kaibao_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_kaibao_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_kaibao_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_kaibao_not;

    /**
     * Decodes a mahjong_jxmj_kaibao_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_kaibao_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_kaibao_not;

    /**
     * Verifies a mahjong_jxmj_kaibao_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_kaibao_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_kaibao_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_kaibao_not;

    /**
     * Creates a plain object from a mahjong_jxmj_kaibao_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_kaibao_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_kaibao_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_kaibao_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_bc_join_table_ack. */
export interface Imahjong_bc_join_table_ack {

    /** mahjong_bc_join_table_ack ret */
    ret: number;

    /** mahjong_bc_join_table_ack tableAttrs */
    tableAttrs: Imahjong_TableAttr;

    /** mahjong_bc_join_table_ack errMsg */
    errMsg: string;
}

/** Represents a mahjong_bc_join_table_ack. */
export class mahjong_bc_join_table_ack implements Imahjong_bc_join_table_ack {

    /**
     * Constructs a new mahjong_bc_join_table_ack.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_bc_join_table_ack);

    /** mahjong_bc_join_table_ack ret. */
    public ret: number;

    /** mahjong_bc_join_table_ack tableAttrs. */
    public tableAttrs: Imahjong_TableAttr;

    /** mahjong_bc_join_table_ack errMsg. */
    public errMsg: string;

    /**
     * Creates a new mahjong_bc_join_table_ack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_bc_join_table_ack instance
     */
    public static create(properties?: Imahjong_bc_join_table_ack): mahjong_bc_join_table_ack;

    /**
     * Encodes the specified mahjong_bc_join_table_ack message. Does not implicitly {@link mahjong_bc_join_table_ack.verify|verify} messages.
     * @param message mahjong_bc_join_table_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_bc_join_table_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_bc_join_table_ack message, length delimited. Does not implicitly {@link mahjong_bc_join_table_ack.verify|verify} messages.
     * @param message mahjong_bc_join_table_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_bc_join_table_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_bc_join_table_ack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_bc_join_table_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_bc_join_table_ack;

    /**
     * Decodes a mahjong_bc_join_table_ack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_bc_join_table_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_bc_join_table_ack;

    /**
     * Verifies a mahjong_bc_join_table_ack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_bc_join_table_ack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_bc_join_table_ack
     */
    public static fromObject(object: { [k: string]: any }): mahjong_bc_join_table_ack;

    /**
     * Creates a plain object from a mahjong_bc_join_table_ack message. Also converts values to other types if specified.
     * @param message mahjong_bc_join_table_ack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_bc_join_table_ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_bc_join_table_ack to JSON.
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
    fakeItem?: (Imahjong_jxmj_player_itemInfo[]|null);
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
    public fakeItem: Imahjong_jxmj_player_itemInfo[];

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

/** Properties of a mahjong_jxmj_banker_dice_not. */
export interface Imahjong_jxmj_banker_dice_not {

    /** mahjong_jxmj_banker_dice_not cChairID */
    cChairID: number;

    /** mahjong_jxmj_banker_dice_not cBanker */
    cBanker: number;

    /** mahjong_jxmj_banker_dice_not vecDice */
    vecDice?: (number[]|null);
}

/** Represents a mahjong_jxmj_banker_dice_not. */
export class mahjong_jxmj_banker_dice_not implements Imahjong_jxmj_banker_dice_not {

    /**
     * Constructs a new mahjong_jxmj_banker_dice_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_banker_dice_not);

    /** mahjong_jxmj_banker_dice_not cChairID. */
    public cChairID: number;

    /** mahjong_jxmj_banker_dice_not cBanker. */
    public cBanker: number;

    /** mahjong_jxmj_banker_dice_not vecDice. */
    public vecDice: number[];

    /**
     * Creates a new mahjong_jxmj_banker_dice_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_banker_dice_not instance
     */
    public static create(properties?: Imahjong_jxmj_banker_dice_not): mahjong_jxmj_banker_dice_not;

    /**
     * Encodes the specified mahjong_jxmj_banker_dice_not message. Does not implicitly {@link mahjong_jxmj_banker_dice_not.verify|verify} messages.
     * @param message mahjong_jxmj_banker_dice_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_banker_dice_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_banker_dice_not message, length delimited. Does not implicitly {@link mahjong_jxmj_banker_dice_not.verify|verify} messages.
     * @param message mahjong_jxmj_banker_dice_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_banker_dice_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_banker_dice_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_banker_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_banker_dice_not;

    /**
     * Decodes a mahjong_jxmj_banker_dice_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_banker_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_banker_dice_not;

    /**
     * Verifies a mahjong_jxmj_banker_dice_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_banker_dice_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_banker_dice_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_banker_dice_not;

    /**
     * Creates a plain object from a mahjong_jxmj_banker_dice_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_banker_dice_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_banker_dice_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_banker_dice_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_st_gameresult. */
export interface Imahjong_jxmj_st_gameresult {

    /** mahjong_jxmj_st_gameresult cChairID */
    cChairID: number;

    /** mahjong_jxmj_st_gameresult cWonLose */
    cWonLose: number;

    /** mahjong_jxmj_st_gameresult cHuType */
    cHuType: number;

    /** mahjong_jxmj_st_gameresult cPiaoType */
    cPiaoType: number;

    /** mahjong_jxmj_st_gameresult nScore */
    nScore: (number|Long);

    /** mahjong_jxmj_st_gameresult nTax */
    nTax: number;

    /** mahjong_jxmj_st_gameresult nCredits */
    nCredits: number;

    /** mahjong_jxmj_st_gameresult nHuCredits */
    nHuCredits: number;

    /** mahjong_jxmj_st_gameresult nGangCredits */
    nGangCredits: number;

    /** mahjong_jxmj_st_gameresult nHuChairid */
    nHuChairid: number;

    /** mahjong_jxmj_st_gameresult vecFanData */
    vecFanData?: (Imahjong_jxmj_fan_data[]|null);

    /** mahjong_jxmj_st_gameresult vecZhuaNiao */
    vecZhuaNiao?: (number[]|null);
}

/** Represents a mahjong_jxmj_st_gameresult. */
export class mahjong_jxmj_st_gameresult implements Imahjong_jxmj_st_gameresult {

    /**
     * Constructs a new mahjong_jxmj_st_gameresult.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_st_gameresult);

    /** mahjong_jxmj_st_gameresult cChairID. */
    public cChairID: number;

    /** mahjong_jxmj_st_gameresult cWonLose. */
    public cWonLose: number;

    /** mahjong_jxmj_st_gameresult cHuType. */
    public cHuType: number;

    /** mahjong_jxmj_st_gameresult cPiaoType. */
    public cPiaoType: number;

    /** mahjong_jxmj_st_gameresult nScore. */
    public nScore: (number|Long);

    /** mahjong_jxmj_st_gameresult nTax. */
    public nTax: number;

    /** mahjong_jxmj_st_gameresult nCredits. */
    public nCredits: number;

    /** mahjong_jxmj_st_gameresult nHuCredits. */
    public nHuCredits: number;

    /** mahjong_jxmj_st_gameresult nGangCredits. */
    public nGangCredits: number;

    /** mahjong_jxmj_st_gameresult nHuChairid. */
    public nHuChairid: number;

    /** mahjong_jxmj_st_gameresult vecFanData. */
    public vecFanData: Imahjong_jxmj_fan_data[];

    /** mahjong_jxmj_st_gameresult vecZhuaNiao. */
    public vecZhuaNiao: number[];

    /**
     * Creates a new mahjong_jxmj_st_gameresult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_st_gameresult instance
     */
    public static create(properties?: Imahjong_jxmj_st_gameresult): mahjong_jxmj_st_gameresult;

    /**
     * Encodes the specified mahjong_jxmj_st_gameresult message. Does not implicitly {@link mahjong_jxmj_st_gameresult.verify|verify} messages.
     * @param message mahjong_jxmj_st_gameresult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_st_gameresult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_st_gameresult message, length delimited. Does not implicitly {@link mahjong_jxmj_st_gameresult.verify|verify} messages.
     * @param message mahjong_jxmj_st_gameresult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_st_gameresult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_st_gameresult message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_st_gameresult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_st_gameresult;

    /**
     * Decodes a mahjong_jxmj_st_gameresult message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_st_gameresult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_st_gameresult;

    /**
     * Verifies a mahjong_jxmj_st_gameresult message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_st_gameresult message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_st_gameresult
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_st_gameresult;

    /**
     * Creates a plain object from a mahjong_jxmj_st_gameresult message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_st_gameresult
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_st_gameresult, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_st_gameresult to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_magic_emoji_noti. */
export interface Imahjong_jxmj_magic_emoji_noti {

    /** mahjong_jxmj_magic_emoji_noti cIsError */
    cIsError: number;

    /** mahjong_jxmj_magic_emoji_noti cEmojiIndex */
    cEmojiIndex: number;

    /** mahjong_jxmj_magic_emoji_noti cFromChairID */
    cFromChairID: number;

    /** mahjong_jxmj_magic_emoji_noti cToChairID */
    cToChairID: number;
}

/** Represents a mahjong_jxmj_magic_emoji_noti. */
export class mahjong_jxmj_magic_emoji_noti implements Imahjong_jxmj_magic_emoji_noti {

    /**
     * Constructs a new mahjong_jxmj_magic_emoji_noti.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_magic_emoji_noti);

    /** mahjong_jxmj_magic_emoji_noti cIsError. */
    public cIsError: number;

    /** mahjong_jxmj_magic_emoji_noti cEmojiIndex. */
    public cEmojiIndex: number;

    /** mahjong_jxmj_magic_emoji_noti cFromChairID. */
    public cFromChairID: number;

    /** mahjong_jxmj_magic_emoji_noti cToChairID. */
    public cToChairID: number;

    /**
     * Creates a new mahjong_jxmj_magic_emoji_noti instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_magic_emoji_noti instance
     */
    public static create(properties?: Imahjong_jxmj_magic_emoji_noti): mahjong_jxmj_magic_emoji_noti;

    /**
     * Encodes the specified mahjong_jxmj_magic_emoji_noti message. Does not implicitly {@link mahjong_jxmj_magic_emoji_noti.verify|verify} messages.
     * @param message mahjong_jxmj_magic_emoji_noti message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_magic_emoji_noti, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_magic_emoji_noti message, length delimited. Does not implicitly {@link mahjong_jxmj_magic_emoji_noti.verify|verify} messages.
     * @param message mahjong_jxmj_magic_emoji_noti message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_magic_emoji_noti, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_magic_emoji_noti message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_magic_emoji_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_magic_emoji_noti;

    /**
     * Decodes a mahjong_jxmj_magic_emoji_noti message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_magic_emoji_noti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_magic_emoji_noti;

    /**
     * Verifies a mahjong_jxmj_magic_emoji_noti message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_magic_emoji_noti message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_magic_emoji_noti
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_magic_emoji_noti;

    /**
     * Creates a plain object from a mahjong_jxmj_magic_emoji_noti message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_magic_emoji_noti
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_magic_emoji_noti, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_magic_emoji_noti to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_get_mj_private_room_result_req. */
export interface Imahjong_jxmj_get_mj_private_room_result_req {
}

/** Represents a mahjong_jxmj_get_mj_private_room_result_req. */
export class mahjong_jxmj_get_mj_private_room_result_req implements Imahjong_jxmj_get_mj_private_room_result_req {

    /**
     * Constructs a new mahjong_jxmj_get_mj_private_room_result_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_get_mj_private_room_result_req);

    /**
     * Creates a new mahjong_jxmj_get_mj_private_room_result_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_get_mj_private_room_result_req instance
     */
    public static create(properties?: Imahjong_jxmj_get_mj_private_room_result_req): mahjong_jxmj_get_mj_private_room_result_req;

    /**
     * Encodes the specified mahjong_jxmj_get_mj_private_room_result_req message. Does not implicitly {@link mahjong_jxmj_get_mj_private_room_result_req.verify|verify} messages.
     * @param message mahjong_jxmj_get_mj_private_room_result_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_get_mj_private_room_result_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_get_mj_private_room_result_req message, length delimited. Does not implicitly {@link mahjong_jxmj_get_mj_private_room_result_req.verify|verify} messages.
     * @param message mahjong_jxmj_get_mj_private_room_result_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_get_mj_private_room_result_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_get_mj_private_room_result_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_get_mj_private_room_result_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_get_mj_private_room_result_req;

    /**
     * Decodes a mahjong_jxmj_get_mj_private_room_result_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_get_mj_private_room_result_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_get_mj_private_room_result_req;

    /**
     * Verifies a mahjong_jxmj_get_mj_private_room_result_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_get_mj_private_room_result_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_get_mj_private_room_result_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_get_mj_private_room_result_req;

    /**
     * Creates a plain object from a mahjong_jxmj_get_mj_private_room_result_req message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_get_mj_private_room_result_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_get_mj_private_room_result_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_get_mj_private_room_result_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_private_room_result_not. */
export interface Imahjong_jxmj_private_room_result_not {

    /** mahjong_jxmj_private_room_result_not vecGameStatiscs */
    vecGameStatiscs?: (Imahjong_jxmj_GameStatisc[]|null);
}

/** Represents a mahjong_jxmj_private_room_result_not. */
export class mahjong_jxmj_private_room_result_not implements Imahjong_jxmj_private_room_result_not {

    /**
     * Constructs a new mahjong_jxmj_private_room_result_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_private_room_result_not);

    /** mahjong_jxmj_private_room_result_not vecGameStatiscs. */
    public vecGameStatiscs: Imahjong_jxmj_GameStatisc[];

    /**
     * Creates a new mahjong_jxmj_private_room_result_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_private_room_result_not instance
     */
    public static create(properties?: Imahjong_jxmj_private_room_result_not): mahjong_jxmj_private_room_result_not;

    /**
     * Encodes the specified mahjong_jxmj_private_room_result_not message. Does not implicitly {@link mahjong_jxmj_private_room_result_not.verify|verify} messages.
     * @param message mahjong_jxmj_private_room_result_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_private_room_result_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_private_room_result_not message, length delimited. Does not implicitly {@link mahjong_jxmj_private_room_result_not.verify|verify} messages.
     * @param message mahjong_jxmj_private_room_result_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_private_room_result_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_private_room_result_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_private_room_result_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_private_room_result_not;

    /**
     * Decodes a mahjong_jxmj_private_room_result_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_private_room_result_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_private_room_result_not;

    /**
     * Verifies a mahjong_jxmj_private_room_result_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_private_room_result_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_private_room_result_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_private_room_result_not;

    /**
     * Creates a plain object from a mahjong_jxmj_private_room_result_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_private_room_result_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_private_room_result_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_private_room_result_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_magic_emoji_req. */
export interface Imahjong_jxmj_magic_emoji_req {

    /** mahjong_jxmj_magic_emoji_req cEmojiIndex */
    cEmojiIndex: number;

    /** mahjong_jxmj_magic_emoji_req cToChairID */
    cToChairID: number;
}

/** Represents a mahjong_jxmj_magic_emoji_req. */
export class mahjong_jxmj_magic_emoji_req implements Imahjong_jxmj_magic_emoji_req {

    /**
     * Constructs a new mahjong_jxmj_magic_emoji_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_magic_emoji_req);

    /** mahjong_jxmj_magic_emoji_req cEmojiIndex. */
    public cEmojiIndex: number;

    /** mahjong_jxmj_magic_emoji_req cToChairID. */
    public cToChairID: number;

    /**
     * Creates a new mahjong_jxmj_magic_emoji_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_magic_emoji_req instance
     */
    public static create(properties?: Imahjong_jxmj_magic_emoji_req): mahjong_jxmj_magic_emoji_req;

    /**
     * Encodes the specified mahjong_jxmj_magic_emoji_req message. Does not implicitly {@link mahjong_jxmj_magic_emoji_req.verify|verify} messages.
     * @param message mahjong_jxmj_magic_emoji_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_magic_emoji_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_magic_emoji_req message, length delimited. Does not implicitly {@link mahjong_jxmj_magic_emoji_req.verify|verify} messages.
     * @param message mahjong_jxmj_magic_emoji_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_magic_emoji_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_magic_emoji_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_magic_emoji_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_magic_emoji_req;

    /**
     * Decodes a mahjong_jxmj_magic_emoji_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_magic_emoji_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_magic_emoji_req;

    /**
     * Verifies a mahjong_jxmj_magic_emoji_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_magic_emoji_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_magic_emoji_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_magic_emoji_req;

    /**
     * Creates a plain object from a mahjong_jxmj_magic_emoji_req message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_magic_emoji_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_magic_emoji_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_magic_emoji_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_bc_specify_item_update_not. */
export interface Imahjong_bc_specify_item_update_not {

    /** mahjong_bc_specify_item_update_not plyGuid */
    plyGuid: (number|Long);

    /** mahjong_bc_specify_item_update_not index */
    index: number;

    /** mahjong_bc_specify_item_update_not num */
    num: number;
}

/** Represents a mahjong_bc_specify_item_update_not. */
export class mahjong_bc_specify_item_update_not implements Imahjong_bc_specify_item_update_not {

    /**
     * Constructs a new mahjong_bc_specify_item_update_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_bc_specify_item_update_not);

    /** mahjong_bc_specify_item_update_not plyGuid. */
    public plyGuid: (number|Long);

    /** mahjong_bc_specify_item_update_not index. */
    public index: number;

    /** mahjong_bc_specify_item_update_not num. */
    public num: number;

    /**
     * Creates a new mahjong_bc_specify_item_update_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_bc_specify_item_update_not instance
     */
    public static create(properties?: Imahjong_bc_specify_item_update_not): mahjong_bc_specify_item_update_not;

    /**
     * Encodes the specified mahjong_bc_specify_item_update_not message. Does not implicitly {@link mahjong_bc_specify_item_update_not.verify|verify} messages.
     * @param message mahjong_bc_specify_item_update_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_bc_specify_item_update_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_bc_specify_item_update_not message, length delimited. Does not implicitly {@link mahjong_bc_specify_item_update_not.verify|verify} messages.
     * @param message mahjong_bc_specify_item_update_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_bc_specify_item_update_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_bc_specify_item_update_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_bc_specify_item_update_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_bc_specify_item_update_not;

    /**
     * Decodes a mahjong_bc_specify_item_update_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_bc_specify_item_update_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_bc_specify_item_update_not;

    /**
     * Verifies a mahjong_bc_specify_item_update_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_bc_specify_item_update_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_bc_specify_item_update_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_bc_specify_item_update_not;

    /**
     * Creates a plain object from a mahjong_bc_specify_item_update_not message. Also converts values to other types if specified.
     * @param message mahjong_bc_specify_item_update_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_bc_specify_item_update_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_bc_specify_item_update_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_hu_card_data_not. */
export interface Imahjong_jxmj_hu_card_data_not {

    /** mahjong_jxmj_hu_card_data_not vecHuCards */
    vecHuCards?: (number[]|null);

    /** mahjong_jxmj_hu_card_data_not vecHuCardsLeftNum */
    vecHuCardsLeftNum?: (number[]|null);

    /** mahjong_jxmj_hu_card_data_not vecHuCardsFan */
    vecHuCardsFan?: (number[]|null);
}

/** Represents a mahjong_jxmj_hu_card_data_not. */
export class mahjong_jxmj_hu_card_data_not implements Imahjong_jxmj_hu_card_data_not {

    /**
     * Constructs a new mahjong_jxmj_hu_card_data_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_hu_card_data_not);

    /** mahjong_jxmj_hu_card_data_not vecHuCards. */
    public vecHuCards: number[];

    /** mahjong_jxmj_hu_card_data_not vecHuCardsLeftNum. */
    public vecHuCardsLeftNum: number[];

    /** mahjong_jxmj_hu_card_data_not vecHuCardsFan. */
    public vecHuCardsFan: number[];

    /**
     * Creates a new mahjong_jxmj_hu_card_data_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_hu_card_data_not instance
     */
    public static create(properties?: Imahjong_jxmj_hu_card_data_not): mahjong_jxmj_hu_card_data_not;

    /**
     * Encodes the specified mahjong_jxmj_hu_card_data_not message. Does not implicitly {@link mahjong_jxmj_hu_card_data_not.verify|verify} messages.
     * @param message mahjong_jxmj_hu_card_data_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_hu_card_data_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_hu_card_data_not message, length delimited. Does not implicitly {@link mahjong_jxmj_hu_card_data_not.verify|verify} messages.
     * @param message mahjong_jxmj_hu_card_data_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_hu_card_data_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_hu_card_data_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_hu_card_data_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_hu_card_data_not;

    /**
     * Decodes a mahjong_jxmj_hu_card_data_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_hu_card_data_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_hu_card_data_not;

    /**
     * Verifies a mahjong_jxmj_hu_card_data_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_hu_card_data_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_hu_card_data_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_hu_card_data_not;

    /**
     * Creates a plain object from a mahjong_jxmj_hu_card_data_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_hu_card_data_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_hu_card_data_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_hu_card_data_not to JSON.
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

/** Properties of a mahjong_cb_ready_req. */
export interface Imahjong_cb_ready_req {
}

/** Represents a mahjong_cb_ready_req. */
export class mahjong_cb_ready_req implements Imahjong_cb_ready_req {

    /**
     * Constructs a new mahjong_cb_ready_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_cb_ready_req);

    /**
     * Creates a new mahjong_cb_ready_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_cb_ready_req instance
     */
    public static create(properties?: Imahjong_cb_ready_req): mahjong_cb_ready_req;

    /**
     * Encodes the specified mahjong_cb_ready_req message. Does not implicitly {@link mahjong_cb_ready_req.verify|verify} messages.
     * @param message mahjong_cb_ready_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_cb_ready_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_cb_ready_req message, length delimited. Does not implicitly {@link mahjong_cb_ready_req.verify|verify} messages.
     * @param message mahjong_cb_ready_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_cb_ready_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_cb_ready_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_cb_ready_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_cb_ready_req;

    /**
     * Decodes a mahjong_cb_ready_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_cb_ready_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_cb_ready_req;

    /**
     * Verifies a mahjong_cb_ready_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_cb_ready_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_cb_ready_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_cb_ready_req;

    /**
     * Creates a plain object from a mahjong_cb_ready_req message. Also converts values to other types if specified.
     * @param message mahjong_cb_ready_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_cb_ready_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_cb_ready_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_gc_update_player_tokenmoney_not. */
export interface Imahjong_gc_update_player_tokenmoney_not {

    /** mahjong_gc_update_player_tokenmoney_not plyChairid */
    plyChairid: number;

    /** mahjong_gc_update_player_tokenmoney_not itemInfo */
    itemInfo?: (Imahjong_jxmj_player_itemInfo[]|null);
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
    public itemInfo: Imahjong_jxmj_player_itemInfo[];

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

/** Properties of a mahjong_jxmj_gameresult_not. */
export interface Imahjong_jxmj_gameresult_not {

    /** mahjong_jxmj_gameresult_not vecGameResult */
    vecGameResult?: (Imahjong_jxmj_st_gameresult[]|null);

    /** mahjong_jxmj_gameresult_not isMobao */
    isMobao: number;
}

/** Represents a mahjong_jxmj_gameresult_not. */
export class mahjong_jxmj_gameresult_not implements Imahjong_jxmj_gameresult_not {

    /**
     * Constructs a new mahjong_jxmj_gameresult_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_gameresult_not);

    /** mahjong_jxmj_gameresult_not vecGameResult. */
    public vecGameResult: Imahjong_jxmj_st_gameresult[];

    /** mahjong_jxmj_gameresult_not isMobao. */
    public isMobao: number;

    /**
     * Creates a new mahjong_jxmj_gameresult_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_gameresult_not instance
     */
    public static create(properties?: Imahjong_jxmj_gameresult_not): mahjong_jxmj_gameresult_not;

    /**
     * Encodes the specified mahjong_jxmj_gameresult_not message. Does not implicitly {@link mahjong_jxmj_gameresult_not.verify|verify} messages.
     * @param message mahjong_jxmj_gameresult_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_gameresult_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_gameresult_not message, length delimited. Does not implicitly {@link mahjong_jxmj_gameresult_not.verify|verify} messages.
     * @param message mahjong_jxmj_gameresult_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_gameresult_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_gameresult_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_gameresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_gameresult_not;

    /**
     * Decodes a mahjong_jxmj_gameresult_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_gameresult_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_gameresult_not;

    /**
     * Verifies a mahjong_jxmj_gameresult_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_gameresult_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_gameresult_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_gameresult_not;

    /**
     * Creates a plain object from a mahjong_jxmj_gameresult_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_gameresult_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_gameresult_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_gameresult_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_player_itemInfo. */
export interface Imahjong_jxmj_player_itemInfo {

    /** mahjong_jxmj_player_itemInfo nItemIndex */
    nItemIndex: number;

    /** mahjong_jxmj_player_itemInfo nItemNum */
    nItemNum: number;
}

/** Represents a mahjong_jxmj_player_itemInfo. */
export class mahjong_jxmj_player_itemInfo implements Imahjong_jxmj_player_itemInfo {

    /**
     * Constructs a new mahjong_jxmj_player_itemInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_player_itemInfo);

    /** mahjong_jxmj_player_itemInfo nItemIndex. */
    public nItemIndex: number;

    /** mahjong_jxmj_player_itemInfo nItemNum. */
    public nItemNum: number;

    /**
     * Creates a new mahjong_jxmj_player_itemInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_player_itemInfo instance
     */
    public static create(properties?: Imahjong_jxmj_player_itemInfo): mahjong_jxmj_player_itemInfo;

    /**
     * Encodes the specified mahjong_jxmj_player_itemInfo message. Does not implicitly {@link mahjong_jxmj_player_itemInfo.verify|verify} messages.
     * @param message mahjong_jxmj_player_itemInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_player_itemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_player_itemInfo message, length delimited. Does not implicitly {@link mahjong_jxmj_player_itemInfo.verify|verify} messages.
     * @param message mahjong_jxmj_player_itemInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_player_itemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_player_itemInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_player_itemInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_player_itemInfo;

    /**
     * Decodes a mahjong_jxmj_player_itemInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_player_itemInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_player_itemInfo;

    /**
     * Verifies a mahjong_jxmj_player_itemInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_player_itemInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_player_itemInfo
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_player_itemInfo;

    /**
     * Creates a plain object from a mahjong_jxmj_player_itemInfo message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_player_itemInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_player_itemInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_player_itemInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_bc_ready_ack. */
export interface Imahjong_bc_ready_ack {

    /** mahjong_bc_ready_ack ret */
    ret: number;
}

/** Represents a mahjong_bc_ready_ack. */
export class mahjong_bc_ready_ack implements Imahjong_bc_ready_ack {

    /**
     * Constructs a new mahjong_bc_ready_ack.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_bc_ready_ack);

    /** mahjong_bc_ready_ack ret. */
    public ret: number;

    /**
     * Creates a new mahjong_bc_ready_ack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_bc_ready_ack instance
     */
    public static create(properties?: Imahjong_bc_ready_ack): mahjong_bc_ready_ack;

    /**
     * Encodes the specified mahjong_bc_ready_ack message. Does not implicitly {@link mahjong_bc_ready_ack.verify|verify} messages.
     * @param message mahjong_bc_ready_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_bc_ready_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_bc_ready_ack message, length delimited. Does not implicitly {@link mahjong_bc_ready_ack.verify|verify} messages.
     * @param message mahjong_bc_ready_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_bc_ready_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_bc_ready_ack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_bc_ready_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_bc_ready_ack;

    /**
     * Decodes a mahjong_bc_ready_ack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_bc_ready_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_bc_ready_ack;

    /**
     * Verifies a mahjong_bc_ready_ack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_bc_ready_ack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_bc_ready_ack
     */
    public static fromObject(object: { [k: string]: any }): mahjong_bc_ready_ack;

    /**
     * Creates a plain object from a mahjong_bc_ready_ack message. Also converts values to other types if specified.
     * @param message mahjong_bc_ready_ack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_bc_ready_ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_bc_ready_ack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_completedata_req. */
export interface Imahjong_jxmj_completedata_req {
}

/** Represents a mahjong_jxmj_completedata_req. */
export class mahjong_jxmj_completedata_req implements Imahjong_jxmj_completedata_req {

    /**
     * Constructs a new mahjong_jxmj_completedata_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_completedata_req);

    /**
     * Creates a new mahjong_jxmj_completedata_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_completedata_req instance
     */
    public static create(properties?: Imahjong_jxmj_completedata_req): mahjong_jxmj_completedata_req;

    /**
     * Encodes the specified mahjong_jxmj_completedata_req message. Does not implicitly {@link mahjong_jxmj_completedata_req.verify|verify} messages.
     * @param message mahjong_jxmj_completedata_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_completedata_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_completedata_req message, length delimited. Does not implicitly {@link mahjong_jxmj_completedata_req.verify|verify} messages.
     * @param message mahjong_jxmj_completedata_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_completedata_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_completedata_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_completedata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_completedata_req;

    /**
     * Decodes a mahjong_jxmj_completedata_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_completedata_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_completedata_req;

    /**
     * Verifies a mahjong_jxmj_completedata_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_completedata_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_completedata_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_completedata_req;

    /**
     * Creates a plain object from a mahjong_jxmj_completedata_req message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_completedata_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_completedata_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_completedata_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_Svr_Auto_Not. */
export interface Imahjong_jxmj_Svr_Auto_Not {

    /** mahjong_jxmj_Svr_Auto_Not cChairID */
    cChairID: number;

    /** mahjong_jxmj_Svr_Auto_Not cAuto */
    cAuto: number;

    /** mahjong_jxmj_Svr_Auto_Not iAutoType */
    iAutoType: number;
}

/** Represents a mahjong_jxmj_Svr_Auto_Not. */
export class mahjong_jxmj_Svr_Auto_Not implements Imahjong_jxmj_Svr_Auto_Not {

    /**
     * Constructs a new mahjong_jxmj_Svr_Auto_Not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_Svr_Auto_Not);

    /** mahjong_jxmj_Svr_Auto_Not cChairID. */
    public cChairID: number;

    /** mahjong_jxmj_Svr_Auto_Not cAuto. */
    public cAuto: number;

    /** mahjong_jxmj_Svr_Auto_Not iAutoType. */
    public iAutoType: number;

    /**
     * Creates a new mahjong_jxmj_Svr_Auto_Not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_Svr_Auto_Not instance
     */
    public static create(properties?: Imahjong_jxmj_Svr_Auto_Not): mahjong_jxmj_Svr_Auto_Not;

    /**
     * Encodes the specified mahjong_jxmj_Svr_Auto_Not message. Does not implicitly {@link mahjong_jxmj_Svr_Auto_Not.verify|verify} messages.
     * @param message mahjong_jxmj_Svr_Auto_Not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_Svr_Auto_Not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_Svr_Auto_Not message, length delimited. Does not implicitly {@link mahjong_jxmj_Svr_Auto_Not.verify|verify} messages.
     * @param message mahjong_jxmj_Svr_Auto_Not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_Svr_Auto_Not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_Svr_Auto_Not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_Svr_Auto_Not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_Svr_Auto_Not;

    /**
     * Decodes a mahjong_jxmj_Svr_Auto_Not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_Svr_Auto_Not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_Svr_Auto_Not;

    /**
     * Verifies a mahjong_jxmj_Svr_Auto_Not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_Svr_Auto_Not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_Svr_Auto_Not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_Svr_Auto_Not;

    /**
     * Creates a plain object from a mahjong_jxmj_Svr_Auto_Not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_Svr_Auto_Not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_Svr_Auto_Not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_Svr_Auto_Not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_svr_dizhu_not. */
export interface Imahjong_jxmj_svr_dizhu_not {

    /** mahjong_jxmj_svr_dizhu_not nDiZhu */
    nDiZhu: number;
}

/** Represents a mahjong_jxmj_svr_dizhu_not. */
export class mahjong_jxmj_svr_dizhu_not implements Imahjong_jxmj_svr_dizhu_not {

    /**
     * Constructs a new mahjong_jxmj_svr_dizhu_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_svr_dizhu_not);

    /** mahjong_jxmj_svr_dizhu_not nDiZhu. */
    public nDiZhu: number;

    /**
     * Creates a new mahjong_jxmj_svr_dizhu_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_svr_dizhu_not instance
     */
    public static create(properties?: Imahjong_jxmj_svr_dizhu_not): mahjong_jxmj_svr_dizhu_not;

    /**
     * Encodes the specified mahjong_jxmj_svr_dizhu_not message. Does not implicitly {@link mahjong_jxmj_svr_dizhu_not.verify|verify} messages.
     * @param message mahjong_jxmj_svr_dizhu_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_svr_dizhu_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_svr_dizhu_not message, length delimited. Does not implicitly {@link mahjong_jxmj_svr_dizhu_not.verify|verify} messages.
     * @param message mahjong_jxmj_svr_dizhu_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_svr_dizhu_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_svr_dizhu_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_svr_dizhu_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_svr_dizhu_not;

    /**
     * Decodes a mahjong_jxmj_svr_dizhu_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_svr_dizhu_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_svr_dizhu_not;

    /**
     * Verifies a mahjong_jxmj_svr_dizhu_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_svr_dizhu_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_svr_dizhu_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_svr_dizhu_not;

    /**
     * Creates a plain object from a mahjong_jxmj_svr_dizhu_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_svr_dizhu_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_svr_dizhu_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_svr_dizhu_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_userdata_not. */
export interface Imahjong_jxmj_userdata_not {

    /** mahjong_jxmj_userdata_not cChairid */
    cChairid: number;

    /** mahjong_jxmj_userdata_not nType */
    nType: number;

    /** mahjong_jxmj_userdata_not nAmount */
    nAmount: (number|Long);

    /** mahjong_jxmj_userdata_not strParam */
    strParam: string;
}

/** Represents a mahjong_jxmj_userdata_not. */
export class mahjong_jxmj_userdata_not implements Imahjong_jxmj_userdata_not {

    /**
     * Constructs a new mahjong_jxmj_userdata_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_userdata_not);

    /** mahjong_jxmj_userdata_not cChairid. */
    public cChairid: number;

    /** mahjong_jxmj_userdata_not nType. */
    public nType: number;

    /** mahjong_jxmj_userdata_not nAmount. */
    public nAmount: (number|Long);

    /** mahjong_jxmj_userdata_not strParam. */
    public strParam: string;

    /**
     * Creates a new mahjong_jxmj_userdata_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_userdata_not instance
     */
    public static create(properties?: Imahjong_jxmj_userdata_not): mahjong_jxmj_userdata_not;

    /**
     * Encodes the specified mahjong_jxmj_userdata_not message. Does not implicitly {@link mahjong_jxmj_userdata_not.verify|verify} messages.
     * @param message mahjong_jxmj_userdata_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_userdata_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_userdata_not message, length delimited. Does not implicitly {@link mahjong_jxmj_userdata_not.verify|verify} messages.
     * @param message mahjong_jxmj_userdata_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_userdata_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_userdata_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_userdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_userdata_not;

    /**
     * Decodes a mahjong_jxmj_userdata_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_userdata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_userdata_not;

    /**
     * Verifies a mahjong_jxmj_userdata_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_userdata_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_userdata_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_userdata_not;

    /**
     * Creates a plain object from a mahjong_jxmj_userdata_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_userdata_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_userdata_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_userdata_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_bc_ready_not. */
export interface Imahjong_bc_ready_not {

    /** mahjong_bc_ready_not plyGuid */
    plyGuid: (number|Long);
}

/** Represents a mahjong_bc_ready_not. */
export class mahjong_bc_ready_not implements Imahjong_bc_ready_not {

    /**
     * Constructs a new mahjong_bc_ready_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_bc_ready_not);

    /** mahjong_bc_ready_not plyGuid. */
    public plyGuid: (number|Long);

    /**
     * Creates a new mahjong_bc_ready_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_bc_ready_not instance
     */
    public static create(properties?: Imahjong_bc_ready_not): mahjong_bc_ready_not;

    /**
     * Encodes the specified mahjong_bc_ready_not message. Does not implicitly {@link mahjong_bc_ready_not.verify|verify} messages.
     * @param message mahjong_bc_ready_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_bc_ready_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_bc_ready_not message, length delimited. Does not implicitly {@link mahjong_bc_ready_not.verify|verify} messages.
     * @param message mahjong_bc_ready_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_bc_ready_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_bc_ready_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_bc_ready_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_bc_ready_not;

    /**
     * Decodes a mahjong_bc_ready_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_bc_ready_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_bc_ready_not;

    /**
     * Verifies a mahjong_bc_ready_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_bc_ready_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_bc_ready_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_bc_ready_not;

    /**
     * Creates a plain object from a mahjong_bc_ready_not message. Also converts values to other types if specified.
     * @param message mahjong_bc_ready_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_bc_ready_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_bc_ready_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_animate_ok_req. */
export interface Imahjong_jxmj_animate_ok_req {
}

/** Represents a mahjong_jxmj_animate_ok_req. */
export class mahjong_jxmj_animate_ok_req implements Imahjong_jxmj_animate_ok_req {

    /**
     * Constructs a new mahjong_jxmj_animate_ok_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_animate_ok_req);

    /**
     * Creates a new mahjong_jxmj_animate_ok_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_animate_ok_req instance
     */
    public static create(properties?: Imahjong_jxmj_animate_ok_req): mahjong_jxmj_animate_ok_req;

    /**
     * Encodes the specified mahjong_jxmj_animate_ok_req message. Does not implicitly {@link mahjong_jxmj_animate_ok_req.verify|verify} messages.
     * @param message mahjong_jxmj_animate_ok_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_animate_ok_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_animate_ok_req message, length delimited. Does not implicitly {@link mahjong_jxmj_animate_ok_req.verify|verify} messages.
     * @param message mahjong_jxmj_animate_ok_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_animate_ok_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_animate_ok_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_animate_ok_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_animate_ok_req;

    /**
     * Decodes a mahjong_jxmj_animate_ok_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_animate_ok_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_animate_ok_req;

    /**
     * Verifies a mahjong_jxmj_animate_ok_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_animate_ok_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_animate_ok_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_animate_ok_req;

    /**
     * Creates a plain object from a mahjong_jxmj_animate_ok_req message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_animate_ok_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_animate_ok_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_animate_ok_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_completedata_not. */
export interface Imahjong_jxmj_completedata_not {

    /** mahjong_jxmj_completedata_not nDiZhu */
    nDiZhu: number;

    /** mahjong_jxmj_completedata_not nLeftCards */
    nLeftCards: number;

    /** mahjong_jxmj_completedata_not cBanker */
    cBanker: number;

    /** mahjong_jxmj_completedata_not cCurrPly */
    cCurrPly: number;

    /** mahjong_jxmj_completedata_not cAutoState */
    cAutoState: number;

    /** mahjong_jxmj_completedata_not cAutoType */
    cAutoType: number;

    /** mahjong_jxmj_completedata_not sSerialID */
    sSerialID: number;

    /** mahjong_jxmj_completedata_not vecPlyData */
    vecPlyData?: (Imahjong_jxmj_changecard_not[]|null);

    /** mahjong_jxmj_completedata_not vecTingStatue */
    vecTingStatue?: (number[]|null);

    /** mahjong_jxmj_completedata_not vecHuaNum */
    vecHuaNum?: (number[]|null);
}

/** Represents a mahjong_jxmj_completedata_not. */
export class mahjong_jxmj_completedata_not implements Imahjong_jxmj_completedata_not {

    /**
     * Constructs a new mahjong_jxmj_completedata_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_completedata_not);

    /** mahjong_jxmj_completedata_not nDiZhu. */
    public nDiZhu: number;

    /** mahjong_jxmj_completedata_not nLeftCards. */
    public nLeftCards: number;

    /** mahjong_jxmj_completedata_not cBanker. */
    public cBanker: number;

    /** mahjong_jxmj_completedata_not cCurrPly. */
    public cCurrPly: number;

    /** mahjong_jxmj_completedata_not cAutoState. */
    public cAutoState: number;

    /** mahjong_jxmj_completedata_not cAutoType. */
    public cAutoType: number;

    /** mahjong_jxmj_completedata_not sSerialID. */
    public sSerialID: number;

    /** mahjong_jxmj_completedata_not vecPlyData. */
    public vecPlyData: Imahjong_jxmj_changecard_not[];

    /** mahjong_jxmj_completedata_not vecTingStatue. */
    public vecTingStatue: number[];

    /** mahjong_jxmj_completedata_not vecHuaNum. */
    public vecHuaNum: number[];

    /**
     * Creates a new mahjong_jxmj_completedata_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_completedata_not instance
     */
    public static create(properties?: Imahjong_jxmj_completedata_not): mahjong_jxmj_completedata_not;

    /**
     * Encodes the specified mahjong_jxmj_completedata_not message. Does not implicitly {@link mahjong_jxmj_completedata_not.verify|verify} messages.
     * @param message mahjong_jxmj_completedata_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_completedata_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_completedata_not message, length delimited. Does not implicitly {@link mahjong_jxmj_completedata_not.verify|verify} messages.
     * @param message mahjong_jxmj_completedata_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_completedata_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_completedata_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_completedata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_completedata_not;

    /**
     * Decodes a mahjong_jxmj_completedata_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_completedata_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_completedata_not;

    /**
     * Verifies a mahjong_jxmj_completedata_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_completedata_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_completedata_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_completedata_not;

    /**
     * Creates a plain object from a mahjong_jxmj_completedata_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_completedata_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_completedata_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_completedata_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_get_mj_private_room_result_ack. */
export interface Imahjong_jxmj_get_mj_private_room_result_ack {

    /** mahjong_jxmj_get_mj_private_room_result_ack vecGameStatiscs */
    vecGameStatiscs?: (Imahjong_jxmj_GameStatisc[]|null);
}

/** Represents a mahjong_jxmj_get_mj_private_room_result_ack. */
export class mahjong_jxmj_get_mj_private_room_result_ack implements Imahjong_jxmj_get_mj_private_room_result_ack {

    /**
     * Constructs a new mahjong_jxmj_get_mj_private_room_result_ack.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_get_mj_private_room_result_ack);

    /** mahjong_jxmj_get_mj_private_room_result_ack vecGameStatiscs. */
    public vecGameStatiscs: Imahjong_jxmj_GameStatisc[];

    /**
     * Creates a new mahjong_jxmj_get_mj_private_room_result_ack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_get_mj_private_room_result_ack instance
     */
    public static create(properties?: Imahjong_jxmj_get_mj_private_room_result_ack): mahjong_jxmj_get_mj_private_room_result_ack;

    /**
     * Encodes the specified mahjong_jxmj_get_mj_private_room_result_ack message. Does not implicitly {@link mahjong_jxmj_get_mj_private_room_result_ack.verify|verify} messages.
     * @param message mahjong_jxmj_get_mj_private_room_result_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_get_mj_private_room_result_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_get_mj_private_room_result_ack message, length delimited. Does not implicitly {@link mahjong_jxmj_get_mj_private_room_result_ack.verify|verify} messages.
     * @param message mahjong_jxmj_get_mj_private_room_result_ack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_get_mj_private_room_result_ack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_get_mj_private_room_result_ack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_get_mj_private_room_result_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_get_mj_private_room_result_ack;

    /**
     * Decodes a mahjong_jxmj_get_mj_private_room_result_ack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_get_mj_private_room_result_ack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_get_mj_private_room_result_ack;

    /**
     * Verifies a mahjong_jxmj_get_mj_private_room_result_ack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_get_mj_private_room_result_ack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_get_mj_private_room_result_ack
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_get_mj_private_room_result_ack;

    /**
     * Creates a plain object from a mahjong_jxmj_get_mj_private_room_result_ack message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_get_mj_private_room_result_ack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_get_mj_private_room_result_ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_get_mj_private_room_result_ack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_dingpiao_rsp. */
export interface Imahjong_jxmj_dingpiao_rsp {

    /** mahjong_jxmj_dingpiao_rsp cPiaoType */
    cPiaoType: number;

    /** mahjong_jxmj_dingpiao_rsp sSerialID */
    sSerialID: number;
}

/** Represents a mahjong_jxmj_dingpiao_rsp. */
export class mahjong_jxmj_dingpiao_rsp implements Imahjong_jxmj_dingpiao_rsp {

    /**
     * Constructs a new mahjong_jxmj_dingpiao_rsp.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_dingpiao_rsp);

    /** mahjong_jxmj_dingpiao_rsp cPiaoType. */
    public cPiaoType: number;

    /** mahjong_jxmj_dingpiao_rsp sSerialID. */
    public sSerialID: number;

    /**
     * Creates a new mahjong_jxmj_dingpiao_rsp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_dingpiao_rsp instance
     */
    public static create(properties?: Imahjong_jxmj_dingpiao_rsp): mahjong_jxmj_dingpiao_rsp;

    /**
     * Encodes the specified mahjong_jxmj_dingpiao_rsp message. Does not implicitly {@link mahjong_jxmj_dingpiao_rsp.verify|verify} messages.
     * @param message mahjong_jxmj_dingpiao_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_dingpiao_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_dingpiao_rsp message, length delimited. Does not implicitly {@link mahjong_jxmj_dingpiao_rsp.verify|verify} messages.
     * @param message mahjong_jxmj_dingpiao_rsp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_dingpiao_rsp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_dingpiao_rsp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_dingpiao_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_dingpiao_rsp;

    /**
     * Decodes a mahjong_jxmj_dingpiao_rsp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_dingpiao_rsp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_dingpiao_rsp;

    /**
     * Verifies a mahjong_jxmj_dingpiao_rsp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_dingpiao_rsp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_dingpiao_rsp
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_dingpiao_rsp;

    /**
     * Creates a plain object from a mahjong_jxmj_dingpiao_rsp message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_dingpiao_rsp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_dingpiao_rsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_dingpiao_rsp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_rount_count_not. */
export interface Imahjong_jxmj_rount_count_not {

    /** mahjong_jxmj_rount_count_not nMaJiangQuan */
    nMaJiangQuan: number;

    /** mahjong_jxmj_rount_count_not nMaJiangJu */
    nMaJiangJu: number;

    /** mahjong_jxmj_rount_count_not nMaJiangCount */
    nMaJiangCount: number;
}

/** Represents a mahjong_jxmj_rount_count_not. */
export class mahjong_jxmj_rount_count_not implements Imahjong_jxmj_rount_count_not {

    /**
     * Constructs a new mahjong_jxmj_rount_count_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_rount_count_not);

    /** mahjong_jxmj_rount_count_not nMaJiangQuan. */
    public nMaJiangQuan: number;

    /** mahjong_jxmj_rount_count_not nMaJiangJu. */
    public nMaJiangJu: number;

    /** mahjong_jxmj_rount_count_not nMaJiangCount. */
    public nMaJiangCount: number;

    /**
     * Creates a new mahjong_jxmj_rount_count_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_rount_count_not instance
     */
    public static create(properties?: Imahjong_jxmj_rount_count_not): mahjong_jxmj_rount_count_not;

    /**
     * Encodes the specified mahjong_jxmj_rount_count_not message. Does not implicitly {@link mahjong_jxmj_rount_count_not.verify|verify} messages.
     * @param message mahjong_jxmj_rount_count_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_rount_count_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_rount_count_not message, length delimited. Does not implicitly {@link mahjong_jxmj_rount_count_not.verify|verify} messages.
     * @param message mahjong_jxmj_rount_count_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_rount_count_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_rount_count_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_rount_count_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_rount_count_not;

    /**
     * Decodes a mahjong_jxmj_rount_count_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_rount_count_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_rount_count_not;

    /**
     * Verifies a mahjong_jxmj_rount_count_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_rount_count_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_rount_count_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_rount_count_not;

    /**
     * Creates a plain object from a mahjong_jxmj_rount_count_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_rount_count_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_rount_count_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_rount_count_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_bc_ply_join_not. */
export interface Imahjong_bc_ply_join_not {

    /** mahjong_bc_ply_join_not plyData */
    plyData: Imahjong_PlyBaseData;
}

/** Represents a mahjong_bc_ply_join_not. */
export class mahjong_bc_ply_join_not implements Imahjong_bc_ply_join_not {

    /**
     * Constructs a new mahjong_bc_ply_join_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_bc_ply_join_not);

    /** mahjong_bc_ply_join_not plyData. */
    public plyData: Imahjong_PlyBaseData;

    /**
     * Creates a new mahjong_bc_ply_join_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_bc_ply_join_not instance
     */
    public static create(properties?: Imahjong_bc_ply_join_not): mahjong_bc_ply_join_not;

    /**
     * Encodes the specified mahjong_bc_ply_join_not message. Does not implicitly {@link mahjong_bc_ply_join_not.verify|verify} messages.
     * @param message mahjong_bc_ply_join_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_bc_ply_join_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_bc_ply_join_not message, length delimited. Does not implicitly {@link mahjong_bc_ply_join_not.verify|verify} messages.
     * @param message mahjong_bc_ply_join_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_bc_ply_join_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_bc_ply_join_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_bc_ply_join_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_bc_ply_join_not;

    /**
     * Decodes a mahjong_bc_ply_join_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_bc_ply_join_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_bc_ply_join_not;

    /**
     * Verifies a mahjong_bc_ply_join_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_bc_ply_join_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_bc_ply_join_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_bc_ply_join_not;

    /**
     * Creates a plain object from a mahjong_bc_ply_join_not message. Also converts values to other types if specified.
     * @param message mahjong_bc_ply_join_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_bc_ply_join_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_bc_ply_join_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_dingpiao_req. */
export interface Imahjong_jxmj_dingpiao_req {

    /** mahjong_jxmj_dingpiao_req sSerialID */
    sSerialID: number;
}

/** Represents a mahjong_jxmj_dingpiao_req. */
export class mahjong_jxmj_dingpiao_req implements Imahjong_jxmj_dingpiao_req {

    /**
     * Constructs a new mahjong_jxmj_dingpiao_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_dingpiao_req);

    /** mahjong_jxmj_dingpiao_req sSerialID. */
    public sSerialID: number;

    /**
     * Creates a new mahjong_jxmj_dingpiao_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_dingpiao_req instance
     */
    public static create(properties?: Imahjong_jxmj_dingpiao_req): mahjong_jxmj_dingpiao_req;

    /**
     * Encodes the specified mahjong_jxmj_dingpiao_req message. Does not implicitly {@link mahjong_jxmj_dingpiao_req.verify|verify} messages.
     * @param message mahjong_jxmj_dingpiao_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_dingpiao_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_dingpiao_req message, length delimited. Does not implicitly {@link mahjong_jxmj_dingpiao_req.verify|verify} messages.
     * @param message mahjong_jxmj_dingpiao_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_dingpiao_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_dingpiao_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_dingpiao_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_dingpiao_req;

    /**
     * Decodes a mahjong_jxmj_dingpiao_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_dingpiao_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_dingpiao_req;

    /**
     * Verifies a mahjong_jxmj_dingpiao_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_dingpiao_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_dingpiao_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_dingpiao_req;

    /**
     * Creates a plain object from a mahjong_jxmj_dingpiao_req message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_dingpiao_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_dingpiao_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_dingpiao_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_seat_dice_not. */
export interface Imahjong_jxmj_seat_dice_not {

    /** mahjong_jxmj_seat_dice_not cChairID */
    cChairID: number;

    /** mahjong_jxmj_seat_dice_not vecDice */
    vecDice?: (number[]|null);
}

/** Represents a mahjong_jxmj_seat_dice_not. */
export class mahjong_jxmj_seat_dice_not implements Imahjong_jxmj_seat_dice_not {

    /**
     * Constructs a new mahjong_jxmj_seat_dice_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_seat_dice_not);

    /** mahjong_jxmj_seat_dice_not cChairID. */
    public cChairID: number;

    /** mahjong_jxmj_seat_dice_not vecDice. */
    public vecDice: number[];

    /**
     * Creates a new mahjong_jxmj_seat_dice_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_seat_dice_not instance
     */
    public static create(properties?: Imahjong_jxmj_seat_dice_not): mahjong_jxmj_seat_dice_not;

    /**
     * Encodes the specified mahjong_jxmj_seat_dice_not message. Does not implicitly {@link mahjong_jxmj_seat_dice_not.verify|verify} messages.
     * @param message mahjong_jxmj_seat_dice_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_seat_dice_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_seat_dice_not message, length delimited. Does not implicitly {@link mahjong_jxmj_seat_dice_not.verify|verify} messages.
     * @param message mahjong_jxmj_seat_dice_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_seat_dice_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_seat_dice_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_seat_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_seat_dice_not;

    /**
     * Decodes a mahjong_jxmj_seat_dice_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_seat_dice_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_seat_dice_not;

    /**
     * Verifies a mahjong_jxmj_seat_dice_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_seat_dice_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_seat_dice_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_seat_dice_not;

    /**
     * Creates a plain object from a mahjong_jxmj_seat_dice_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_seat_dice_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_seat_dice_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_seat_dice_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_tingcards_not. */
export interface Imahjong_jxmj_tingcards_not {

    /** mahjong_jxmj_tingcards_not vecCards */
    vecCards?: (number[]|null);
}

/** Represents a mahjong_jxmj_tingcards_not. */
export class mahjong_jxmj_tingcards_not implements Imahjong_jxmj_tingcards_not {

    /**
     * Constructs a new mahjong_jxmj_tingcards_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_tingcards_not);

    /** mahjong_jxmj_tingcards_not vecCards. */
    public vecCards: number[];

    /**
     * Creates a new mahjong_jxmj_tingcards_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_tingcards_not instance
     */
    public static create(properties?: Imahjong_jxmj_tingcards_not): mahjong_jxmj_tingcards_not;

    /**
     * Encodes the specified mahjong_jxmj_tingcards_not message. Does not implicitly {@link mahjong_jxmj_tingcards_not.verify|verify} messages.
     * @param message mahjong_jxmj_tingcards_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_tingcards_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_tingcards_not message, length delimited. Does not implicitly {@link mahjong_jxmj_tingcards_not.verify|verify} messages.
     * @param message mahjong_jxmj_tingcards_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_tingcards_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_tingcards_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_tingcards_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_tingcards_not;

    /**
     * Decodes a mahjong_jxmj_tingcards_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_tingcards_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_tingcards_not;

    /**
     * Verifies a mahjong_jxmj_tingcards_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_tingcards_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_tingcards_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_tingcards_not;

    /**
     * Creates a plain object from a mahjong_jxmj_tingcards_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_tingcards_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_tingcards_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_tingcards_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_cb_change_table_req. */
export interface Imahjong_cb_change_table_req {
}

/** Represents a mahjong_cb_change_table_req. */
export class mahjong_cb_change_table_req implements Imahjong_cb_change_table_req {

    /**
     * Constructs a new mahjong_cb_change_table_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_cb_change_table_req);

    /**
     * Creates a new mahjong_cb_change_table_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_cb_change_table_req instance
     */
    public static create(properties?: Imahjong_cb_change_table_req): mahjong_cb_change_table_req;

    /**
     * Encodes the specified mahjong_cb_change_table_req message. Does not implicitly {@link mahjong_cb_change_table_req.verify|verify} messages.
     * @param message mahjong_cb_change_table_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_cb_change_table_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_cb_change_table_req message, length delimited. Does not implicitly {@link mahjong_cb_change_table_req.verify|verify} messages.
     * @param message mahjong_cb_change_table_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_cb_change_table_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_cb_change_table_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_cb_change_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_cb_change_table_req;

    /**
     * Decodes a mahjong_cb_change_table_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_cb_change_table_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_cb_change_table_req;

    /**
     * Verifies a mahjong_cb_change_table_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_cb_change_table_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_cb_change_table_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_cb_change_table_req;

    /**
     * Creates a plain object from a mahjong_cb_change_table_req message. Also converts values to other types if specified.
     * @param message mahjong_cb_change_table_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_cb_change_table_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_cb_change_table_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_tingfan_data. */
export interface Imahjong_jxmj_tingfan_data {

    /** mahjong_jxmj_tingfan_data cPutCard */
    cPutCard: number;

    /** mahjong_jxmj_tingfan_data cHuCard */
    cHuCard: number;

    /** mahjong_jxmj_tingfan_data nFan */
    nFan: number;

    /** mahjong_jxmj_tingfan_data nLeftNum */
    nLeftNum: number;
}

/** Represents a mahjong_jxmj_tingfan_data. */
export class mahjong_jxmj_tingfan_data implements Imahjong_jxmj_tingfan_data {

    /**
     * Constructs a new mahjong_jxmj_tingfan_data.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_tingfan_data);

    /** mahjong_jxmj_tingfan_data cPutCard. */
    public cPutCard: number;

    /** mahjong_jxmj_tingfan_data cHuCard. */
    public cHuCard: number;

    /** mahjong_jxmj_tingfan_data nFan. */
    public nFan: number;

    /** mahjong_jxmj_tingfan_data nLeftNum. */
    public nLeftNum: number;

    /**
     * Creates a new mahjong_jxmj_tingfan_data instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_tingfan_data instance
     */
    public static create(properties?: Imahjong_jxmj_tingfan_data): mahjong_jxmj_tingfan_data;

    /**
     * Encodes the specified mahjong_jxmj_tingfan_data message. Does not implicitly {@link mahjong_jxmj_tingfan_data.verify|verify} messages.
     * @param message mahjong_jxmj_tingfan_data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_tingfan_data, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_tingfan_data message, length delimited. Does not implicitly {@link mahjong_jxmj_tingfan_data.verify|verify} messages.
     * @param message mahjong_jxmj_tingfan_data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_tingfan_data, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_tingfan_data message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_tingfan_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_tingfan_data;

    /**
     * Decodes a mahjong_jxmj_tingfan_data message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_tingfan_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_tingfan_data;

    /**
     * Verifies a mahjong_jxmj_tingfan_data message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_tingfan_data message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_tingfan_data
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_tingfan_data;

    /**
     * Creates a plain object from a mahjong_jxmj_tingfan_data message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_tingfan_data
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_tingfan_data, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_tingfan_data to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_dingpiao_not. */
export interface Imahjong_jxmj_dingpiao_not {

    /** mahjong_jxmj_dingpiao_not cChairid */
    cChairid: number;

    /** mahjong_jxmj_dingpiao_not cPiaoType */
    cPiaoType: number;

    /** mahjong_jxmj_dingpiao_not cResend */
    cResend: number;
}

/** Represents a mahjong_jxmj_dingpiao_not. */
export class mahjong_jxmj_dingpiao_not implements Imahjong_jxmj_dingpiao_not {

    /**
     * Constructs a new mahjong_jxmj_dingpiao_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_dingpiao_not);

    /** mahjong_jxmj_dingpiao_not cChairid. */
    public cChairid: number;

    /** mahjong_jxmj_dingpiao_not cPiaoType. */
    public cPiaoType: number;

    /** mahjong_jxmj_dingpiao_not cResend. */
    public cResend: number;

    /**
     * Creates a new mahjong_jxmj_dingpiao_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_dingpiao_not instance
     */
    public static create(properties?: Imahjong_jxmj_dingpiao_not): mahjong_jxmj_dingpiao_not;

    /**
     * Encodes the specified mahjong_jxmj_dingpiao_not message. Does not implicitly {@link mahjong_jxmj_dingpiao_not.verify|verify} messages.
     * @param message mahjong_jxmj_dingpiao_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_dingpiao_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_dingpiao_not message, length delimited. Does not implicitly {@link mahjong_jxmj_dingpiao_not.verify|verify} messages.
     * @param message mahjong_jxmj_dingpiao_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_dingpiao_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_dingpiao_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_dingpiao_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_dingpiao_not;

    /**
     * Decodes a mahjong_jxmj_dingpiao_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_dingpiao_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_dingpiao_not;

    /**
     * Verifies a mahjong_jxmj_dingpiao_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_dingpiao_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_dingpiao_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_dingpiao_not;

    /**
     * Creates a plain object from a mahjong_jxmj_dingpiao_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_dingpiao_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_dingpiao_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_dingpiao_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_GameStatisc. */
export interface Imahjong_jxmj_GameStatisc {

    /** mahjong_jxmj_GameStatisc nBankerNum */
    nBankerNum: number;

    /** mahjong_jxmj_GameStatisc nHuNum */
    nHuNum: number;

    /** mahjong_jxmj_GameStatisc nDianPaoNum */
    nDianPaoNum: number;

    /** mahjong_jxmj_GameStatisc nMoBaoNum */
    nMoBaoNum: number;

    /** mahjong_jxmj_GameStatisc nBaoZhongBaoNum */
    nBaoZhongBaoNum: number;

    /** mahjong_jxmj_GameStatisc nAmount */
    nAmount: (number|Long);
}

/** Represents a mahjong_jxmj_GameStatisc. */
export class mahjong_jxmj_GameStatisc implements Imahjong_jxmj_GameStatisc {

    /**
     * Constructs a new mahjong_jxmj_GameStatisc.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_GameStatisc);

    /** mahjong_jxmj_GameStatisc nBankerNum. */
    public nBankerNum: number;

    /** mahjong_jxmj_GameStatisc nHuNum. */
    public nHuNum: number;

    /** mahjong_jxmj_GameStatisc nDianPaoNum. */
    public nDianPaoNum: number;

    /** mahjong_jxmj_GameStatisc nMoBaoNum. */
    public nMoBaoNum: number;

    /** mahjong_jxmj_GameStatisc nBaoZhongBaoNum. */
    public nBaoZhongBaoNum: number;

    /** mahjong_jxmj_GameStatisc nAmount. */
    public nAmount: (number|Long);

    /**
     * Creates a new mahjong_jxmj_GameStatisc instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_GameStatisc instance
     */
    public static create(properties?: Imahjong_jxmj_GameStatisc): mahjong_jxmj_GameStatisc;

    /**
     * Encodes the specified mahjong_jxmj_GameStatisc message. Does not implicitly {@link mahjong_jxmj_GameStatisc.verify|verify} messages.
     * @param message mahjong_jxmj_GameStatisc message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_GameStatisc, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_GameStatisc message, length delimited. Does not implicitly {@link mahjong_jxmj_GameStatisc.verify|verify} messages.
     * @param message mahjong_jxmj_GameStatisc message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_GameStatisc, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_GameStatisc message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_GameStatisc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_GameStatisc;

    /**
     * Decodes a mahjong_jxmj_GameStatisc message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_GameStatisc
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_GameStatisc;

    /**
     * Verifies a mahjong_jxmj_GameStatisc message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_GameStatisc message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_GameStatisc
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_GameStatisc;

    /**
     * Creates a plain object from a mahjong_jxmj_GameStatisc message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_GameStatisc
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_GameStatisc, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_GameStatisc to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_Cli_TingType_req. */
export interface Imahjong_jxmj_Cli_TingType_req {

    /** mahjong_jxmj_Cli_TingType_req cAutoGang */
    cAutoGang: number;

    /** mahjong_jxmj_Cli_TingType_req cZimoOnly */
    cZimoOnly: number;
}

/** Represents a mahjong_jxmj_Cli_TingType_req. */
export class mahjong_jxmj_Cli_TingType_req implements Imahjong_jxmj_Cli_TingType_req {

    /**
     * Constructs a new mahjong_jxmj_Cli_TingType_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_Cli_TingType_req);

    /** mahjong_jxmj_Cli_TingType_req cAutoGang. */
    public cAutoGang: number;

    /** mahjong_jxmj_Cli_TingType_req cZimoOnly. */
    public cZimoOnly: number;

    /**
     * Creates a new mahjong_jxmj_Cli_TingType_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_Cli_TingType_req instance
     */
    public static create(properties?: Imahjong_jxmj_Cli_TingType_req): mahjong_jxmj_Cli_TingType_req;

    /**
     * Encodes the specified mahjong_jxmj_Cli_TingType_req message. Does not implicitly {@link mahjong_jxmj_Cli_TingType_req.verify|verify} messages.
     * @param message mahjong_jxmj_Cli_TingType_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_Cli_TingType_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_Cli_TingType_req message, length delimited. Does not implicitly {@link mahjong_jxmj_Cli_TingType_req.verify|verify} messages.
     * @param message mahjong_jxmj_Cli_TingType_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_Cli_TingType_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_Cli_TingType_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_Cli_TingType_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_Cli_TingType_req;

    /**
     * Decodes a mahjong_jxmj_Cli_TingType_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_Cli_TingType_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_Cli_TingType_req;

    /**
     * Verifies a mahjong_jxmj_Cli_TingType_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_Cli_TingType_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_Cli_TingType_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_Cli_TingType_req;

    /**
     * Creates a plain object from a mahjong_jxmj_Cli_TingType_req message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_Cli_TingType_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_Cli_TingType_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_Cli_TingType_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_robot_not. */
export interface Imahjong_jxmj_robot_not {

    /** mahjong_jxmj_robot_not nType */
    nType: number;

    /** mahjong_jxmj_robot_not cChairId */
    cChairId: number;

    /** mahjong_jxmj_robot_not vecCards */
    vecCards?: (number[]|null);
}

/** Represents a mahjong_jxmj_robot_not. */
export class mahjong_jxmj_robot_not implements Imahjong_jxmj_robot_not {

    /**
     * Constructs a new mahjong_jxmj_robot_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_robot_not);

    /** mahjong_jxmj_robot_not nType. */
    public nType: number;

    /** mahjong_jxmj_robot_not cChairId. */
    public cChairId: number;

    /** mahjong_jxmj_robot_not vecCards. */
    public vecCards: number[];

    /**
     * Creates a new mahjong_jxmj_robot_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_robot_not instance
     */
    public static create(properties?: Imahjong_jxmj_robot_not): mahjong_jxmj_robot_not;

    /**
     * Encodes the specified mahjong_jxmj_robot_not message. Does not implicitly {@link mahjong_jxmj_robot_not.verify|verify} messages.
     * @param message mahjong_jxmj_robot_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_robot_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_robot_not message, length delimited. Does not implicitly {@link mahjong_jxmj_robot_not.verify|verify} messages.
     * @param message mahjong_jxmj_robot_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_robot_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_robot_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_robot_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_robot_not;

    /**
     * Decodes a mahjong_jxmj_robot_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_robot_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_robot_not;

    /**
     * Verifies a mahjong_jxmj_robot_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_robot_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_robot_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_robot_not;

    /**
     * Creates a plain object from a mahjong_jxmj_robot_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_robot_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_robot_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_robot_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_cb_login_req. */
export interface Imahjong_cb_login_req {

    /** mahjong_cb_login_req plyGuid */
    plyGuid: (number|Long);

    /** mahjong_cb_login_req plyTicket */
    plyTicket: string;

    /** mahjong_cb_login_req version */
    version: number;

    /** mahjong_cb_login_req extParam */
    extParam: string;

    /** mahjong_cb_login_req mainGameId */
    mainGameId: number;

    /** mahjong_cb_login_req gameGroup */
    gameGroup: number;
}

/** Represents a mahjong_cb_login_req. */
export class mahjong_cb_login_req implements Imahjong_cb_login_req {

    /**
     * Constructs a new mahjong_cb_login_req.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_cb_login_req);

    /** mahjong_cb_login_req plyGuid. */
    public plyGuid: (number|Long);

    /** mahjong_cb_login_req plyTicket. */
    public plyTicket: string;

    /** mahjong_cb_login_req version. */
    public version: number;

    /** mahjong_cb_login_req extParam. */
    public extParam: string;

    /** mahjong_cb_login_req mainGameId. */
    public mainGameId: number;

    /** mahjong_cb_login_req gameGroup. */
    public gameGroup: number;

    /**
     * Creates a new mahjong_cb_login_req instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_cb_login_req instance
     */
    public static create(properties?: Imahjong_cb_login_req): mahjong_cb_login_req;

    /**
     * Encodes the specified mahjong_cb_login_req message. Does not implicitly {@link mahjong_cb_login_req.verify|verify} messages.
     * @param message mahjong_cb_login_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_cb_login_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_cb_login_req message, length delimited. Does not implicitly {@link mahjong_cb_login_req.verify|verify} messages.
     * @param message mahjong_cb_login_req message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_cb_login_req, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_cb_login_req message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_cb_login_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_cb_login_req;

    /**
     * Decodes a mahjong_cb_login_req message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_cb_login_req
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_cb_login_req;

    /**
     * Verifies a mahjong_cb_login_req message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_cb_login_req message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_cb_login_req
     */
    public static fromObject(object: { [k: string]: any }): mahjong_cb_login_req;

    /**
     * Creates a plain object from a mahjong_cb_login_req message. Also converts values to other types if specified.
     * @param message mahjong_cb_login_req
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_cb_login_req, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_cb_login_req to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_gc_clienttimer_not. */
export interface Imahjong_jxmj_gc_clienttimer_not {

    /** mahjong_jxmj_gc_clienttimer_not cChairId */
    cChairId: number;

    /** mahjong_jxmj_gc_clienttimer_not cNextChairId */
    cNextChairId: number;

    /** mahjong_jxmj_gc_clienttimer_not nPeriod */
    nPeriod: number;

    /** mahjong_jxmj_gc_clienttimer_not nOpcode */
    nOpcode: number;
}

/** Represents a mahjong_jxmj_gc_clienttimer_not. */
export class mahjong_jxmj_gc_clienttimer_not implements Imahjong_jxmj_gc_clienttimer_not {

    /**
     * Constructs a new mahjong_jxmj_gc_clienttimer_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_gc_clienttimer_not);

    /** mahjong_jxmj_gc_clienttimer_not cChairId. */
    public cChairId: number;

    /** mahjong_jxmj_gc_clienttimer_not cNextChairId. */
    public cNextChairId: number;

    /** mahjong_jxmj_gc_clienttimer_not nPeriod. */
    public nPeriod: number;

    /** mahjong_jxmj_gc_clienttimer_not nOpcode. */
    public nOpcode: number;

    /**
     * Creates a new mahjong_jxmj_gc_clienttimer_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_gc_clienttimer_not instance
     */
    public static create(properties?: Imahjong_jxmj_gc_clienttimer_not): mahjong_jxmj_gc_clienttimer_not;

    /**
     * Encodes the specified mahjong_jxmj_gc_clienttimer_not message. Does not implicitly {@link mahjong_jxmj_gc_clienttimer_not.verify|verify} messages.
     * @param message mahjong_jxmj_gc_clienttimer_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_gc_clienttimer_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_gc_clienttimer_not message, length delimited. Does not implicitly {@link mahjong_jxmj_gc_clienttimer_not.verify|verify} messages.
     * @param message mahjong_jxmj_gc_clienttimer_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_gc_clienttimer_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_gc_clienttimer_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_gc_clienttimer_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_gc_clienttimer_not;

    /**
     * Decodes a mahjong_jxmj_gc_clienttimer_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_gc_clienttimer_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_gc_clienttimer_not;

    /**
     * Verifies a mahjong_jxmj_gc_clienttimer_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_gc_clienttimer_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_gc_clienttimer_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_gc_clienttimer_not;

    /**
     * Creates a plain object from a mahjong_jxmj_gc_clienttimer_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_gc_clienttimer_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_gc_clienttimer_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_gc_clienttimer_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a mahjong_jxmj_fan_data. */
export interface Imahjong_jxmj_fan_data {

    /** mahjong_jxmj_fan_data cChairId */
    cChairId: number;

    /** mahjong_jxmj_fan_data nCredits */
    nCredits: number;

    /** mahjong_jxmj_fan_data cType */
    cType: number;

    /** mahjong_jxmj_fan_data vecFan */
    vecFan?: (number[]|null);
}

/** Represents a mahjong_jxmj_fan_data. */
export class mahjong_jxmj_fan_data implements Imahjong_jxmj_fan_data {

    /**
     * Constructs a new mahjong_jxmj_fan_data.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_fan_data);

    /** mahjong_jxmj_fan_data cChairId. */
    public cChairId: number;

    /** mahjong_jxmj_fan_data nCredits. */
    public nCredits: number;

    /** mahjong_jxmj_fan_data cType. */
    public cType: number;

    /** mahjong_jxmj_fan_data vecFan. */
    public vecFan: number[];

    /**
     * Creates a new mahjong_jxmj_fan_data instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_fan_data instance
     */
    public static create(properties?: Imahjong_jxmj_fan_data): mahjong_jxmj_fan_data;

    /**
     * Encodes the specified mahjong_jxmj_fan_data message. Does not implicitly {@link mahjong_jxmj_fan_data.verify|verify} messages.
     * @param message mahjong_jxmj_fan_data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_fan_data, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_fan_data message, length delimited. Does not implicitly {@link mahjong_jxmj_fan_data.verify|verify} messages.
     * @param message mahjong_jxmj_fan_data message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_fan_data, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_fan_data message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_fan_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_fan_data;

    /**
     * Decodes a mahjong_jxmj_fan_data message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_fan_data
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_fan_data;

    /**
     * Verifies a mahjong_jxmj_fan_data message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_fan_data message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_fan_data
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_fan_data;

    /**
     * Creates a plain object from a mahjong_jxmj_fan_data message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_fan_data
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_fan_data, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_fan_data to JSON.
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

/** Properties of a mahjong_jxmj_operate_not. */
export interface Imahjong_jxmj_operate_not {

    /** mahjong_jxmj_operate_not cChairID */
    cChairID: number;

    /** mahjong_jxmj_operate_not nOpcode */
    nOpcode: number;

    /** mahjong_jxmj_operate_not cCard */
    cCard: number;

    /** mahjong_jxmj_operate_not cWallCardNum */
    cWallCardNum: number;

    /** mahjong_jxmj_operate_not cPaiChairID */
    cPaiChairID: number;

    /** mahjong_jxmj_operate_not nFrontPassedNum */
    nFrontPassedNum: number;

    /** mahjong_jxmj_operate_not nBehidePassedNum */
    nBehidePassedNum: number;
}

/** Represents a mahjong_jxmj_operate_not. */
export class mahjong_jxmj_operate_not implements Imahjong_jxmj_operate_not {

    /**
     * Constructs a new mahjong_jxmj_operate_not.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_jxmj_operate_not);

    /** mahjong_jxmj_operate_not cChairID. */
    public cChairID: number;

    /** mahjong_jxmj_operate_not nOpcode. */
    public nOpcode: number;

    /** mahjong_jxmj_operate_not cCard. */
    public cCard: number;

    /** mahjong_jxmj_operate_not cWallCardNum. */
    public cWallCardNum: number;

    /** mahjong_jxmj_operate_not cPaiChairID. */
    public cPaiChairID: number;

    /** mahjong_jxmj_operate_not nFrontPassedNum. */
    public nFrontPassedNum: number;

    /** mahjong_jxmj_operate_not nBehidePassedNum. */
    public nBehidePassedNum: number;

    /**
     * Creates a new mahjong_jxmj_operate_not instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_jxmj_operate_not instance
     */
    public static create(properties?: Imahjong_jxmj_operate_not): mahjong_jxmj_operate_not;

    /**
     * Encodes the specified mahjong_jxmj_operate_not message. Does not implicitly {@link mahjong_jxmj_operate_not.verify|verify} messages.
     * @param message mahjong_jxmj_operate_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_jxmj_operate_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_jxmj_operate_not message, length delimited. Does not implicitly {@link mahjong_jxmj_operate_not.verify|verify} messages.
     * @param message mahjong_jxmj_operate_not message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_jxmj_operate_not, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_jxmj_operate_not message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_jxmj_operate_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_jxmj_operate_not;

    /**
     * Decodes a mahjong_jxmj_operate_not message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_jxmj_operate_not
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_jxmj_operate_not;

    /**
     * Verifies a mahjong_jxmj_operate_not message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_jxmj_operate_not message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_jxmj_operate_not
     */
    public static fromObject(object: { [k: string]: any }): mahjong_jxmj_operate_not;

    /**
     * Creates a plain object from a mahjong_jxmj_operate_not message. Also converts values to other types if specified.
     * @param message mahjong_jxmj_operate_not
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_jxmj_operate_not, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_jxmj_operate_not to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
