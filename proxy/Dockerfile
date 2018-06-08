FROM alpine

WORKDIR /code

RUN apk \
    --update-cache \
    --update add \
    bash alpine-sdk ca-certificates python python-dev py-pip build-base yarn \
    && pip install virtualenv \
    && rm -rf /var/cache/apk/*

RUN openssl req \
            -new \
            -newkey rsa:4096 \
            -days 1095 \
            -nodes \
            -x509 \
            -subj "/C=FK/ST=Fake/L=Fake/O=Fake/CN=0.0.0.0" \
            -keyout /etc/ssl/privkey1.pem \
            -out /etc/ssl/cert1.pem

RUN yarn add http-proxy

COPY proxy.js ./

ENTRYPOINT ["node", "proxy.js"]