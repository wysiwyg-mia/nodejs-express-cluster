# Nodejs-express-cluster

The clustering process is a form of horizontal scaling and allows applications to fully utilize all available processor power despite Node.js being single-threaded.

Clustering is the launch of multiple instances of the same application to distribute the processing of incoming requests between them.

For maximum performance, the number of running instances should not exceed the number of processor cores. Additional (child) instances are created by the main process, are independent stand-alone servers, and bind to the same port where the main process is running. The collection of primary and child instances is called a cluster.

## Installation

```bash
npm install
npm i autocannon -g
```

## Usage

Open terminal. Type 

```node
node cluster.js
```

Open second terminal. Type 

```node
autocannon -c 200 -d 10 http://localhost:9000/
```

Now you can see how many requests the server can do in 10 seconds and also the average number of requests in seconds.
