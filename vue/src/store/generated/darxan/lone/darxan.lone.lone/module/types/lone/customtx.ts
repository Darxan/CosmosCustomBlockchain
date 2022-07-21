/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "darxan.lone.lone";

export interface Customtx {
  index: string;
  creator: string;
  sender: string;
  receiver: string;
  amount: string;
  feePercentage: string;
  feeReceiver: string;
  servieName: string;
}

const baseCustomtx: object = {
  index: "",
  creator: "",
  sender: "",
  receiver: "",
  amount: "",
  feePercentage: "",
  feeReceiver: "",
  servieName: "",
};

export const Customtx = {
  encode(message: Customtx, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.feePercentage !== "") {
      writer.uint32(50).string(message.feePercentage);
    }
    if (message.feeReceiver !== "") {
      writer.uint32(58).string(message.feeReceiver);
    }
    if (message.servieName !== "") {
      writer.uint32(66).string(message.servieName);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Customtx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCustomtx } as Customtx;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.feePercentage = reader.string();
          break;
        case 7:
          message.feeReceiver = reader.string();
          break;
        case 8:
          message.servieName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Customtx {
    const message = { ...baseCustomtx } as Customtx;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
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
    if (object.servieName !== undefined && object.servieName !== null) {
      message.servieName = String(object.servieName);
    } else {
      message.servieName = "";
    }
    return message;
  },

  toJSON(message: Customtx): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.creator !== undefined && (obj.creator = message.creator);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount);
    message.feePercentage !== undefined &&
      (obj.feePercentage = message.feePercentage);
    message.feeReceiver !== undefined &&
      (obj.feeReceiver = message.feeReceiver);
    message.servieName !== undefined && (obj.servieName = message.servieName);
    return obj;
  },

  fromPartial(object: DeepPartial<Customtx>): Customtx {
    const message = { ...baseCustomtx } as Customtx;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
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
    if (object.servieName !== undefined && object.servieName !== null) {
      message.servieName = object.servieName;
    } else {
      message.servieName = "";
    }
    return message;
  },
};

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
