/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../lone/params";
import { Whois } from "../lone/whois";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { CustomTransaction } from "../lone/customTransaction";
import { Customtx } from "../lone/customtx";

export const protobufPackage = "darxan.lone.lone";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetWhoisRequest {
  index: string;
}

export interface QueryGetWhoisResponse {
  whois: Whois | undefined;
}

export interface QueryAllWhoisRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllWhoisResponse {
  whois: Whois[];
  pagination: PageResponse | undefined;
}

export interface QueryCustomtransactionsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryCustomtransactionsResponse {
  sender: string;
  receiver: string;
  CustomTransaction: CustomTransaction[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCustomtxRequest {
  index: string;
}

export interface QueryGetCustomtxResponse {
  customtx: Customtx | undefined;
}

export interface QueryAllCustomtxRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCustomtxResponse {
  customtx: Customtx[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetWhoisRequest: object = { index: "" };

export const QueryGetWhoisRequest = {
  encode(
    message: QueryGetWhoisRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetWhoisRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetWhoisRequest } as QueryGetWhoisRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhoisRequest {
    const message = { ...baseQueryGetWhoisRequest } as QueryGetWhoisRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetWhoisRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetWhoisRequest>): QueryGetWhoisRequest {
    const message = { ...baseQueryGetWhoisRequest } as QueryGetWhoisRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetWhoisResponse: object = {};

export const QueryGetWhoisResponse = {
  encode(
    message: QueryGetWhoisResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.whois !== undefined) {
      Whois.encode(message.whois, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetWhoisResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetWhoisResponse } as QueryGetWhoisResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whois = Whois.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhoisResponse {
    const message = { ...baseQueryGetWhoisResponse } as QueryGetWhoisResponse;
    if (object.whois !== undefined && object.whois !== null) {
      message.whois = Whois.fromJSON(object.whois);
    } else {
      message.whois = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetWhoisResponse): unknown {
    const obj: any = {};
    message.whois !== undefined &&
      (obj.whois = message.whois ? Whois.toJSON(message.whois) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWhoisResponse>
  ): QueryGetWhoisResponse {
    const message = { ...baseQueryGetWhoisResponse } as QueryGetWhoisResponse;
    if (object.whois !== undefined && object.whois !== null) {
      message.whois = Whois.fromPartial(object.whois);
    } else {
      message.whois = undefined;
    }
    return message;
  },
};

const baseQueryAllWhoisRequest: object = {};

export const QueryAllWhoisRequest = {
  encode(
    message: QueryAllWhoisRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllWhoisRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllWhoisRequest } as QueryAllWhoisRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhoisRequest {
    const message = { ...baseQueryAllWhoisRequest } as QueryAllWhoisRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWhoisRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllWhoisRequest>): QueryAllWhoisRequest {
    const message = { ...baseQueryAllWhoisRequest } as QueryAllWhoisRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllWhoisResponse: object = {};

export const QueryAllWhoisResponse = {
  encode(
    message: QueryAllWhoisResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.whois) {
      Whois.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllWhoisResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllWhoisResponse } as QueryAllWhoisResponse;
    message.whois = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whois.push(Whois.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhoisResponse {
    const message = { ...baseQueryAllWhoisResponse } as QueryAllWhoisResponse;
    message.whois = [];
    if (object.whois !== undefined && object.whois !== null) {
      for (const e of object.whois) {
        message.whois.push(Whois.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWhoisResponse): unknown {
    const obj: any = {};
    if (message.whois) {
      obj.whois = message.whois.map((e) => (e ? Whois.toJSON(e) : undefined));
    } else {
      obj.whois = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWhoisResponse>
  ): QueryAllWhoisResponse {
    const message = { ...baseQueryAllWhoisResponse } as QueryAllWhoisResponse;
    message.whois = [];
    if (object.whois !== undefined && object.whois !== null) {
      for (const e of object.whois) {
        message.whois.push(Whois.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryCustomtransactionsRequest: object = {};

export const QueryCustomtransactionsRequest = {
  encode(
    message: QueryCustomtransactionsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCustomtransactionsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCustomtransactionsRequest,
    } as QueryCustomtransactionsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCustomtransactionsRequest {
    const message = {
      ...baseQueryCustomtransactionsRequest,
    } as QueryCustomtransactionsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryCustomtransactionsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCustomtransactionsRequest>
  ): QueryCustomtransactionsRequest {
    const message = {
      ...baseQueryCustomtransactionsRequest,
    } as QueryCustomtransactionsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryCustomtransactionsResponse: object = {
  sender: "",
  receiver: "",
};

export const QueryCustomtransactionsResponse = {
  encode(
    message: QueryCustomtransactionsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    for (const v of message.CustomTransaction) {
      CustomTransaction.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCustomtransactionsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCustomtransactionsResponse,
    } as QueryCustomtransactionsResponse;
    message.CustomTransaction = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.CustomTransaction.push(
            CustomTransaction.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCustomtransactionsResponse {
    const message = {
      ...baseQueryCustomtransactionsResponse,
    } as QueryCustomtransactionsResponse;
    message.CustomTransaction = [];
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
    if (
      object.CustomTransaction !== undefined &&
      object.CustomTransaction !== null
    ) {
      for (const e of object.CustomTransaction) {
        message.CustomTransaction.push(CustomTransaction.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryCustomtransactionsResponse): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    if (message.CustomTransaction) {
      obj.CustomTransaction = message.CustomTransaction.map((e) =>
        e ? CustomTransaction.toJSON(e) : undefined
      );
    } else {
      obj.CustomTransaction = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCustomtransactionsResponse>
  ): QueryCustomtransactionsResponse {
    const message = {
      ...baseQueryCustomtransactionsResponse,
    } as QueryCustomtransactionsResponse;
    message.CustomTransaction = [];
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
    if (
      object.CustomTransaction !== undefined &&
      object.CustomTransaction !== null
    ) {
      for (const e of object.CustomTransaction) {
        message.CustomTransaction.push(CustomTransaction.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCustomtxRequest: object = { index: "" };

export const QueryGetCustomtxRequest = {
  encode(
    message: QueryGetCustomtxRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCustomtxRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCustomtxRequest,
    } as QueryGetCustomtxRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCustomtxRequest {
    const message = {
      ...baseQueryGetCustomtxRequest,
    } as QueryGetCustomtxRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetCustomtxRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCustomtxRequest>
  ): QueryGetCustomtxRequest {
    const message = {
      ...baseQueryGetCustomtxRequest,
    } as QueryGetCustomtxRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetCustomtxResponse: object = {};

export const QueryGetCustomtxResponse = {
  encode(
    message: QueryGetCustomtxResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.customtx !== undefined) {
      Customtx.encode(message.customtx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCustomtxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCustomtxResponse,
    } as QueryGetCustomtxResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customtx = Customtx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCustomtxResponse {
    const message = {
      ...baseQueryGetCustomtxResponse,
    } as QueryGetCustomtxResponse;
    if (object.customtx !== undefined && object.customtx !== null) {
      message.customtx = Customtx.fromJSON(object.customtx);
    } else {
      message.customtx = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCustomtxResponse): unknown {
    const obj: any = {};
    message.customtx !== undefined &&
      (obj.customtx = message.customtx
        ? Customtx.toJSON(message.customtx)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCustomtxResponse>
  ): QueryGetCustomtxResponse {
    const message = {
      ...baseQueryGetCustomtxResponse,
    } as QueryGetCustomtxResponse;
    if (object.customtx !== undefined && object.customtx !== null) {
      message.customtx = Customtx.fromPartial(object.customtx);
    } else {
      message.customtx = undefined;
    }
    return message;
  },
};

const baseQueryAllCustomtxRequest: object = {};

export const QueryAllCustomtxRequest = {
  encode(
    message: QueryAllCustomtxRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCustomtxRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCustomtxRequest,
    } as QueryAllCustomtxRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCustomtxRequest {
    const message = {
      ...baseQueryAllCustomtxRequest,
    } as QueryAllCustomtxRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCustomtxRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCustomtxRequest>
  ): QueryAllCustomtxRequest {
    const message = {
      ...baseQueryAllCustomtxRequest,
    } as QueryAllCustomtxRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCustomtxResponse: object = {};

export const QueryAllCustomtxResponse = {
  encode(
    message: QueryAllCustomtxResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.customtx) {
      Customtx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCustomtxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCustomtxResponse,
    } as QueryAllCustomtxResponse;
    message.customtx = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customtx.push(Customtx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCustomtxResponse {
    const message = {
      ...baseQueryAllCustomtxResponse,
    } as QueryAllCustomtxResponse;
    message.customtx = [];
    if (object.customtx !== undefined && object.customtx !== null) {
      for (const e of object.customtx) {
        message.customtx.push(Customtx.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCustomtxResponse): unknown {
    const obj: any = {};
    if (message.customtx) {
      obj.customtx = message.customtx.map((e) =>
        e ? Customtx.toJSON(e) : undefined
      );
    } else {
      obj.customtx = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCustomtxResponse>
  ): QueryAllCustomtxResponse {
    const message = {
      ...baseQueryAllCustomtxResponse,
    } as QueryAllCustomtxResponse;
    message.customtx = [];
    if (object.customtx !== undefined && object.customtx !== null) {
      for (const e of object.customtx) {
        message.customtx.push(Customtx.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Whois by index. */
  Whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse>;
  /** Queries a list of Whois items. */
  WhoisAll(request: QueryAllWhoisRequest): Promise<QueryAllWhoisResponse>;
  /** Queries a list of Customtransactions items. */
  Customtransactions(
    request: QueryCustomtransactionsRequest
  ): Promise<QueryCustomtransactionsResponse>;
  /** Queries a Customtx by index. */
  Customtx(request: QueryGetCustomtxRequest): Promise<QueryGetCustomtxResponse>;
  /** Queries a list of Customtx items. */
  CustomtxAll(
    request: QueryAllCustomtxRequest
  ): Promise<QueryAllCustomtxResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("darxan.lone.lone.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse> {
    const data = QueryGetWhoisRequest.encode(request).finish();
    const promise = this.rpc.request("darxan.lone.lone.Query", "Whois", data);
    return promise.then((data) =>
      QueryGetWhoisResponse.decode(new Reader(data))
    );
  }

  WhoisAll(request: QueryAllWhoisRequest): Promise<QueryAllWhoisResponse> {
    const data = QueryAllWhoisRequest.encode(request).finish();
    const promise = this.rpc.request(
      "darxan.lone.lone.Query",
      "WhoisAll",
      data
    );
    return promise.then((data) =>
      QueryAllWhoisResponse.decode(new Reader(data))
    );
  }

  Customtransactions(
    request: QueryCustomtransactionsRequest
  ): Promise<QueryCustomtransactionsResponse> {
    const data = QueryCustomtransactionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "darxan.lone.lone.Query",
      "Customtransactions",
      data
    );
    return promise.then((data) =>
      QueryCustomtransactionsResponse.decode(new Reader(data))
    );
  }

  Customtx(
    request: QueryGetCustomtxRequest
  ): Promise<QueryGetCustomtxResponse> {
    const data = QueryGetCustomtxRequest.encode(request).finish();
    const promise = this.rpc.request(
      "darxan.lone.lone.Query",
      "Customtx",
      data
    );
    return promise.then((data) =>
      QueryGetCustomtxResponse.decode(new Reader(data))
    );
  }

  CustomtxAll(
    request: QueryAllCustomtxRequest
  ): Promise<QueryAllCustomtxResponse> {
    const data = QueryAllCustomtxRequest.encode(request).finish();
    const promise = this.rpc.request(
      "darxan.lone.lone.Query",
      "CustomtxAll",
      data
    );
    return promise.then((data) =>
      QueryAllCustomtxResponse.decode(new Reader(data))
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
