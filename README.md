# Dockerized WebRTC signaling server with SSL proxy

Make sure to configure the `GATEWAY_IP` env variable in `docker-compose.yml`. 

To find out your container gateway IP run: 

```bash
docker inspect <container-id>
```