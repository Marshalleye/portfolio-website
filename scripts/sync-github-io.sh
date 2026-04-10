#!/usr/bin/env bash
# Build production bundle and sync into ../portfolio-website (Marshalleye.github.io clone).
# Usage:
#   bash scripts/sync-github-io.sh
#   bash scripts/sync-github-io.sh --push   # also git add/commit/push in deploy repo
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST="$(cd "$ROOT/../portfolio-website" && pwd)"
SRC="$ROOT/dist/portfolio-website/browser"

PUSH=false
for arg in "$@"; do
  case "$arg" in
    --push) PUSH=true ;;
  esac
done

cd "$ROOT"
echo "Building production bundle (base href /)..."
npx ng build --configuration production --base-href=/

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

if [[ "$PUSH" == true ]]; then
  cd "$DEST"
  git add -A
  if git diff --staged --quiet; then
    echo "Deploy repo: nothing to commit."
  else
    git commit -m "Deploy site (sync-github-io.sh)"
    git push origin main
    echo "Pushed to origin/main."
  fi
fi
