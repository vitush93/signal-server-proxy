// TODO use nginx proxy 

const fs = require('fs');
const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({
    ws: true,
    changeOrigin: true,
    ssl: {
        key: fs.readFileSync('/etc/ssl/privkey1.pem', 'utf8'),
        cert: fs.readFileSync('/etc/ssl/cert1.pem', 'utf8')
    }
});

const port = process.env.PORT || 443;

const proxyServer = http.createServer(function (req, res) {
    proxy.web(req, res, { target: 'http://' + process.env.GATEWAY_IP + ':9090/' });
}).listen(port, function () {
    console.log('proxy listening on port ' + port);
});

proxyServer.on('upgrade', function (req, socket, head) {
    proxy.ws(req, socket, head, { target: 'http://' + process.env.GATEWAY_IP + ':9090' });
});


process.on('SIGINT', function () {
    process.exit();
});