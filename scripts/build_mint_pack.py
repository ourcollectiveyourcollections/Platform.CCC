#!/usr/bin/env python3
"""Build a local review-gated mint pack.

This script does not deploy contracts, sign transactions or interact with wallets.
It packages metadata and a manifest for review.

Usage:
  python scripts/build_mint_pack.py templates/nft_metadata.template.json out/mint_pack
"""

import json
import sys
from datetime import datetime, timezone
from pathlib import Path


def read_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: build_mint_pack.py <metadata_json> <output_dir>")
        return 2

    metadata_path = Path(sys.argv[1])
    output_dir = Path(sys.argv[2])
    output_dir.mkdir(parents=True, exist_ok=True)

    metadata = read_json(metadata_path)
    metadata_out = output_dir / "metadata.json"
    metadata_out.write_text(json.dumps(metadata, indent=2), encoding="utf-8")

    manifest = {
        "built_at": datetime.now(timezone.utc).isoformat(),
        "source_metadata": str(metadata_path),
        "files": ["metadata.json"],
        "status": "draft_review_required",
        "deployment_allowed": False,
        "notes": "Review package only. No wallet signing, contract deployment, or live minting is performed."
    }
    (output_dir / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")

    print(f"Mint pack written to {output_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
