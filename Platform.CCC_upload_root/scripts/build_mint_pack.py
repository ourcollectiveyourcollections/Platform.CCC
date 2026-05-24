#!/usr/bin/env python3
"""Build a local mint-pack folder.

Usage:
  python scripts/build_mint_pack.py templates/nft_metadata.template.json /tmp/mint_pack
"""

import json
import shutil
import sys
from pathlib import Path
from datetime import datetime, timezone

def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: build_mint_pack.py <metadata_json> <output_dir>")
        return 2

    metadata_path = Path(sys.argv[1])
    output_dir = Path(sys.argv[2])
    output_dir.mkdir(parents=True, exist_ok=True)

    metadata = json.loads(metadata_path.read_text(encoding="utf-8"))
    (output_dir / "metadata.json").write_text(json.dumps(metadata, indent=2), encoding="utf-8")

    manifest = {
        "built_at": datetime.now(timezone.utc).isoformat(),
        "source_metadata": str(metadata_path),
        "files": ["metadata.json"],
        "status": "draft_review_required",
        "notes": "No live mint until legal, metadata and permission review is complete."
    }
    (output_dir / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(f"Mint pack written to {output_dir}")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
