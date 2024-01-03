pb:
	poetry run python -m grpc_tools.protoc \
		-I=proto \
		--python_out=embed_server/pb \
		--pyi_out=embed_server/pb \
		--grpc_python_out=embed_server/pb \
		proto/*.proto
	sed -i 's/import api_pb2/import embed_server.pb.api_pb2/' embed_server/pb/api_pb2_grpc.py

lib-go:
	protoc \
		-I=proto \
		--go_out=lib/go \
		--go_opt=paths=source_relative \
		--go-grpc_out=lib/go \
		--go-grpc_opt=paths=source_relative \
		proto/*.proto

lib-js:
	cd lib/js && \
		bun install && \
		bunx protoc \
			--proto_path=../../proto \
			--ts_out=src \
			--ts_opt long_type_string \
			--ts_opt optimize_code_size \
			../../proto/*.proto

lib: lib-go lib-js
