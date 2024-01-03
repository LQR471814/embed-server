from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Empty(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class EmbedOptions(_message.Message):
    __slots__ = ("model", "maxSeqLength")
    MODEL_FIELD_NUMBER: _ClassVar[int]
    MAXSEQLENGTH_FIELD_NUMBER: _ClassVar[int]
    model: str
    maxSeqLength: int
    def __init__(self, model: _Optional[str] = ..., maxSeqLength: _Optional[int] = ...) -> None: ...

class EmbedRequest(_message.Message):
    __slots__ = ("sentences", "normalizeEmbeddings")
    SENTENCES_FIELD_NUMBER: _ClassVar[int]
    NORMALIZEEMBEDDINGS_FIELD_NUMBER: _ClassVar[int]
    sentences: _containers.RepeatedScalarFieldContainer[str]
    normalizeEmbeddings: bool
    def __init__(self, sentences: _Optional[_Iterable[str]] = ..., normalizeEmbeddings: bool = ...) -> None: ...

class FloatArray(_message.Message):
    __slots__ = ("array",)
    ARRAY_FIELD_NUMBER: _ClassVar[int]
    array: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, array: _Optional[_Iterable[float]] = ...) -> None: ...

class Embeddings(_message.Message):
    __slots__ = ("tensor",)
    TENSOR_FIELD_NUMBER: _ClassVar[int]
    tensor: _containers.RepeatedCompositeFieldContainer[FloatArray]
    def __init__(self, tensor: _Optional[_Iterable[_Union[FloatArray, _Mapping]]] = ...) -> None: ...
