FROM alpine

RUN apk \
    --update-cache \
    --update add \
    bash alpine-sdk ca-certificates python python-dev py-pip build-base yarn \
    && pip install virtualenv \
    && rm -rf /var/cache/apk/*

RUN yarn global add libp2p-webrtc-star

# default port 9090
ENTRYPOINT ["star-signal"]