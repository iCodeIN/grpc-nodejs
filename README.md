#### GRPC NodeJS

* Docs - https://grpc.io/docs/languages/node/basics/

* RPC - An RPC (Remote Procedure Call) framework in general is a set of tools that enable the programmer to call a piece of code in a remote process, be it on a different machine or just another process on the same machine.

* Developed at Google. Now part of CNCF.

* gRPC is a modern open source high performance RPC framework that can run in any environment. It can efficiently connect services in and across data centers with pluggable support for load balancing, tracing, health checking, and authentication. It’s backed in HTTP/2, cross platform, and open source. It’s also compact in regards to its size.

* Leverages HTTP2 and protocol buffers.

* VSCode Plugin - https://marketplace.visualstudio.com/items?itemName=zxh404.vscode-proto3

##### Features
1. Four RPC types
2. Metadata
3. Authentication
4. Deadlines and Cancellation
5. Compression
6. Load Balancing
7. Automatically generated boilerplate

##### Protocol Buffers

* Protocol Buffers is a method of serializing structured data.
* Google Protobuf - https://developers.google.com/protocol-buffers/docs/reference/google.protobuf

```
syntax = "proto3"

// Define message types
message EchoMessage = {
    string value = 1;
}

// Define Service and RPCs
service EchoService {
    rpc EchoUnary (EchoMessage) returns (EchoMessage);
    rpc EchoClientStream (stream EchoMessage) returns (EchoMessage);
    rpc EchoServerStream (EchoMessage) returns (stream EchoMessage);
    rpc EchoBidiStream (stream EchoMessage) returns (stream EchoMessage); // BiDirectional
}
```

##### gRPC and JavaScript
1. Two primary environments: Browser and Node.js
2. Browser has limitations regarding gRPC
    a. Might not support HTTP2 at all
    b. Lacks API for line-grained control over HTTP2
3. Node.js is a typical backend environment

![grpc](https://i.imgur.com/sYHVpLo.png)

##### Install
```
npm install --save grpc
npm install @grpc/grpc-js // Beta
```

##### Project Installation
```
1. yarn init -y
2. yarn add typescript -D
3. yarn run tsc --init    
4. yarn add grpc
5. yarn add ts-node grpc-tools @types/google-protobuf grpc_tools_node_protoc_ts -D

6. yarn build // Generate JS and TS proto files
```

##### Project Installation
```
1. yarn server
2. yarn client
```

##### Client Example

```
import { User, UserRequest } from "../proto/users_pb";
import { UsersClient } from "../proto/users_grpc_pb";
import { credentials } from "grpc";

const port = 3000;

// Contains connection to the GRPC Server
const client = new UsersClient(
    `localhost:${port}`,
    credentials.createInsecure(),
);

function getUsers(id: number) {
    return new Promise<User>((resolve, reject) => {
        const request = new UserRequest();
        request.setId(1);

        client.getUser(request, (err, user) => {
            if (err) reject(err);
            else resolve(user);
        });
    });
}
```

![grpcscreenshot](https://i.imgur.com/Y98sEL8.png)
