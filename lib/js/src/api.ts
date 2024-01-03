// @generated by protobuf-ts 2.9.3 with parameter long_type_string,optimize_code_size
// @generated from protobuf file "api.proto" (syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message Empty
 */
export interface Empty {
}
/**
 * @generated from protobuf message EmbedOptions
 */
export interface EmbedOptions {
    /**
     * @generated from protobuf field: string model = 1;
     */
    model: string;
    /**
     * @generated from protobuf field: int64 maxSeqLength = 2;
     */
    maxSeqLength: string;
}
/**
 * @generated from protobuf message EmbedRequest
 */
export interface EmbedRequest {
    /**
     * @generated from protobuf field: repeated string sentences = 1;
     */
    sentences: string[];
    /**
     * @generated from protobuf field: bool normalizeEmbeddings = 2;
     */
    normalizeEmbeddings: boolean;
}
/**
 * @generated from protobuf message FloatArray
 */
export interface FloatArray {
    /**
     * @generated from protobuf field: repeated float array = 1;
     */
    array: number[];
}
/**
 * @generated from protobuf message Embeddings
 */
export interface Embeddings {
    /**
     * @generated from protobuf field: repeated FloatArray tensor = 1;
     */
    tensor: FloatArray[];
}
// @generated message type with reflection information, may provide speed optimized methods
class Empty$Type extends MessageType<Empty> {
    constructor() {
        super("Empty", []);
    }
}
/**
 * @generated MessageType for protobuf message Empty
 */
export const Empty = new Empty$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EmbedOptions$Type extends MessageType<EmbedOptions> {
    constructor() {
        super("EmbedOptions", [
            { no: 1, name: "model", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "maxSeqLength", kind: "scalar", T: 3 /*ScalarType.INT64*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message EmbedOptions
 */
export const EmbedOptions = new EmbedOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EmbedRequest$Type extends MessageType<EmbedRequest> {
    constructor() {
        super("EmbedRequest", [
            { no: 1, name: "sentences", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "normalizeEmbeddings", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message EmbedRequest
 */
export const EmbedRequest = new EmbedRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FloatArray$Type extends MessageType<FloatArray> {
    constructor() {
        super("FloatArray", [
            { no: 1, name: "array", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message FloatArray
 */
export const FloatArray = new FloatArray$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Embeddings$Type extends MessageType<Embeddings> {
    constructor() {
        super("Embeddings", [
            { no: 1, name: "tensor", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FloatArray }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message Embeddings
 */
export const Embeddings = new Embeddings$Type();
/**
 * @generated ServiceType for protobuf service EmbedServer
 */
export const EmbedServer = new ServiceType("EmbedServer", [
    { name: "Configure", options: {}, I: EmbedOptions, O: Empty },
    { name: "Embed", options: {}, I: EmbedRequest, O: Embeddings }
]);