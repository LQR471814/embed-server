from embed_server.embed import Transformer
from embed_server.pb.api_pb2 import (
    EmbedOptions,
    EmbedRequest,
    Embeddings,
    Empty,
    FloatArray,
)
from embed_server.pb.api_pb2_grpc import (
    add_EmbedServerServicer_to_server,
    EmbedServerServicer,
)
from concurrent import futures
import grpc


class EmbedServerServicer(EmbedServerServicer):
    def __init__(self) -> None:
        self.transformer = Transformer()
        super().__init__()

    def Configure(self, request: EmbedOptions, context):
        self.transformer = Transformer(request.model, request.maxSeqLength)
        return Empty()

    def Embed(self, request: EmbedRequest, context):
        tensor = self.transformer.embed(list(request.sentences))
        return Embeddings([FloatArray(arr) for arr in tensor])


def serve(port = 8200):
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    add_EmbedServerServicer_to_server(EmbedServerServicer(), server)
    server.add_insecure_port(f"[::]:{port}")
    server.start()
    print(f"listening on port {port}...")
    server.wait_for_termination()
