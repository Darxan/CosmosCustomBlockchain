/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "darxan.lone.lone";

export interface MsgCustomTransaction {
  creator: string;
  sender: string;
  receiver: string;
  amount: string;
  feePercentage: string;
  feeReceiver: string;
  serviceName: string;
}

export interface MsgCustomTransactionResponse {
  id: number;
}

const baseMsgCustomTransaction: object = {
  creator: "",
  sender: "",
  receiver: "",
  amount: "",
  feePercentage: "",
  feeReceiver: "",
  serviceName: "",
};

export const MsgCustomTransaction = {
  encode(
    message: MsgCustomTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.feePercentage !== "") {
      writer.uint32(42).string(message.feePercentage);
    }
    if (message.feeReceiver !== "") {
      writer.uint32(50).string(message.feeReceiver);
    }
    if (message.serviceName !== "") {
      writer.uint32(58).string(message.serviceName);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCustomTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCustomTransaction } as MsgCustomTransaction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.feePercentage = reader.string();
          break;
        case 6:
          message.feeReceiver = reader.string();
          break;
        case 7:
          message.serviceName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCustomTransaction {
    const message = { ...baseMsgCustomTransaction } as MsgCustomTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.feePercentage !== undefined && object.feePercentage !== null) {
      message.feePercentage = String(object.feePercentage);
    } else {
      message.feePercentage = "";
    }
    if (object.feeReceiver !== undefined && object.feeReceiver !== null) {
      message.feeReceiver = String(object.feeReceiver);
    } else {
      message.feeReceiver = "";
    }
    if (object.serviceName !== undefined && object.serviceName !== null) {
      message.serviceName = String(object.serviceName);
    } else {
      message.serviceName = "";
    }
    return message;
  },

  toJSON(message: MsgCustomTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount);
    message.feePercentage !== undefined &&
      (obj.feePercentage = message.feePercentage);
    message.feeReceiver !== undefined &&
      (obj.feeReceiver = message.feeReceiver);
    message.serviceName !== undefined &&
      (obj.serviceName = message.serviceName);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCustomTransaction>): MsgCustomTransaction {
    const message = { ...baseMsgCustomTransaction } as MsgCustomTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.feePercentage !== undefined && object.feePercentage !== null) {
      message.feePercentage = object.feePercentage;
    } else {
      message.feePercentage = "";
    }
    if (object.feeReceiver !== undefined && object.feeReceiver !== null) {
      message.feeReceiver = object.feeReceiver;
    } else {
      message.feeReceiver = "";
    }
    if (object.serviceName !== undefined && object.serviceName !== null) {
      message.serviceName = object.serviceName;
    } else {
      message.serviceName = "";
    }
    return message;
  },
};

const baseMsgCustomTransactionResponse: object = { id: 0 };

export const MsgCustomTransactionResponse = {
  encode(
    message: MsgCustomTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCustomTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCustomTransactionResponse,
    } as MsgCustomTransactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCustomTransactionResponse {
    const message = {
      ...baseMsgCustomTransactionResponse,
    } as MsgCustomTransactionResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCustomTransactionResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCustomTransactionResponse>
  ): MsgCustomTransactionResponse {
    const message = {
      ...baseMsgCustomTransactionResponse,
    } as MsgCustomTransactionResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CustomTransaction(
    request: MsgCustomTransaction
  ): Promise<MsgCustomTransactionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CustomTransaction(
    request: MsgCustomTransaction
  ): Promise<MsgCustomTransactionResponse> {
    const data = MsgCustomTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "darxan.lone.lone.Msg",
      "CustomTransaction",
      data
    );
    return promise.then((data) =>
      MsgCustomTransactionResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
