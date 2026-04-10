#!/usr/bin/env bash
set -euo pipefail

# Copy production browser bundle into Marshalleye.github.io clone (sibling folder).
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$ROOT/dist/portfolio-website/browser"
DEST="$(cd "$ROOT/../portfolio-website" && pwd)"

if [[ ! -d "$SRC" ]]; then
  echo "Missing $SRC — run npm run build:github-pages first" >&2
  exit 1
fi

if [[ ! -d "$DEST/.git" ]]; then
  echo "Missing git repo at $DEST — clone https://github.com/Marshalleye/Marshalleye.github.io there" >&2
  exit 1
fi

rsync -av --delete \
  --exclude '.git/' \
  --exclude '.DS_Store' \
  "$SRC/" "$DEST/"

touch "$DEST/.nojekyll"
echo "Synced to $DEST"
