#!/usr/bin/env bash
set -euo pipefail

HOST="${AUTOSERVIS_DEPLOY_HOST:-replikant3617.thinline.cz}"
PORT="${AUTOSERVIS_DEPLOY_PORT:-2295}"
USER="${AUTOSERVIS_DEPLOY_USER:-autoservisjanov_cz}"
REMOTE_DIR="${AUTOSERVIS_DEPLOY_REMOTE_DIR:-autoservisjanov.cz}"
LOCAL_DIR="${AUTOSERVIS_DEPLOY_LOCAL_DIR:-outputs/autoservis-janov-site-concept}"
DELETE_FLAG="${AUTOSERVIS_DEPLOY_DELETE:-0}"

if ! command -v lftp >/dev/null 2>&1; then
  echo "Missing lftp. Install it first, for example: brew install lftp" >&2
  exit 1
fi

if [[ -z "${AUTOSERVIS_DEPLOY_PASSWORD:-}" ]]; then
  echo "Missing AUTOSERVIS_DEPLOY_PASSWORD." >&2
  echo "Run: export AUTOSERVIS_DEPLOY_PASSWORD='...'" >&2
  exit 1
fi

if [[ ! -d "$LOCAL_DIR" ]]; then
  echo "Local deploy directory does not exist: $LOCAL_DIR" >&2
  exit 1
fi

MIRROR_ARGS=(
  --reverse
  --verbose
  --only-newer
  --exclude-glob .DS_Store
  --exclude-glob "Thumbs.db"
  --exclude-glob ".env"
  --exclude-glob ".env.*"
  --exclude-glob "node_modules/**"
  --exclude-glob "server.js"
  --exclude-glob "hash-password.js"
  --exclude-glob "package.json"
  --exclude-glob "package-lock.json"
)

if [[ "$DELETE_FLAG" == "1" ]]; then
  MIRROR_ARGS+=(--delete)
fi

lftp -u "$USER","$AUTOSERVIS_DEPLOY_PASSWORD" "sftp://$HOST:$PORT" <<LFTP
set sftp:auto-confirm yes
set net:max-retries 2
set net:timeout 20
mkdir -p "$REMOTE_DIR"
cd "$REMOTE_DIR"
mirror ${MIRROR_ARGS[*]} "$LOCAL_DIR" .
bye
LFTP
