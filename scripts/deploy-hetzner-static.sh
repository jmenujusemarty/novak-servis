#!/usr/bin/env bash
set -euo pipefail

REMOTE_HOST="${AUTOSERVIS_DEPLOY_HOST:-root@204.168.158.92}"
REMOTE_DIR="${AUTOSERVIS_DEPLOY_REMOTE_DIR:-/opt/deploy/autoservisjanov}"
LOCAL_DIR="${AUTOSERVIS_DEPLOY_LOCAL_DIR:-outputs/autoservis-janov-site-concept}"
CADDY_DIR="${AUTOSERVIS_CADDY_DIR:-/opt/listmonk}"

if ! command -v rsync >/dev/null 2>&1; then
  echo "Missing rsync." >&2
  exit 1
fi

if [[ ! -d "$LOCAL_DIR" ]]; then
  echo "Local deploy directory does not exist: $LOCAL_DIR" >&2
  exit 1
fi

echo "[deploy] Sync static site -> ${REMOTE_HOST}:${REMOTE_DIR}"
rsync -az --delete \
  --exclude ".DS_Store" \
  --exclude "Thumbs.db" \
  --exclude ".env" \
  --exclude ".env.*" \
  --exclude "node_modules/" \
  "$LOCAL_DIR/" "${REMOTE_HOST}:${REMOTE_DIR}/"

echo "[deploy] Reload Caddy"
ssh "$REMOTE_HOST" "cd ${CADDY_DIR} && docker compose up -d caddy && docker exec listmonk-caddy-1 caddy validate --config /etc/caddy/Caddyfile >/dev/null"

echo "[deploy] Done"
