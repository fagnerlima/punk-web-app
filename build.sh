#!/bin/bash
docker build \
  -t fagnerlima/unipe-punk-web-app:$1 \
  -t fagnerlima/unipe-punk-web-app:latest \
  .
