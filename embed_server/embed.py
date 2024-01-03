from sentence_transformers import SentenceTransformer


class Transformer:
    def __init__(self, model="all-MiniLM-L6-v2", max_seq_length=1024):
        self.model = SentenceTransformer(model)
        self.model.max_seq_length = max_seq_length

    def embed(self, sentences: list[str]):
        embeddings = self.model.encode(sentences, normalize_embeddings=True)
        return embeddings


if __name__ == "__main__":
    transformer = Transformer()
    print(transformer.embed(["what the heck?"]))
