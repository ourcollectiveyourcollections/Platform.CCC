#!/usr/bin/env python3
"""Convert registry CSV files into a simple dashboard JSON file.

Usage:
  python scripts/export_dashboard_json.py registries dashboard_export.json
"""

import csv
import json
import sys
from pathlib import Path
from datetime import datetime, timezone

def read_csv(path: Path):
    if not path.exists():
        return []
    with path.open(newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))

def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: export_dashboard_json.py <registry_dir> <output_json>")
        return 2

    registry_dir = Path(sys.argv[1])
    output = {
        "exported_at": datetime.now(timezone.utc).isoformat(),
        "platform": {"name": "Create Your Collective", "coin": "CCC"},
        "collectives": read_csv(registry_dir / "collectives.csv"),
        "sub_collectives": read_csv(registry_dir / "sub_collectives.csv"),
        "members": read_csv(registry_dir / "members.csv"),
        "assets": read_csv(registry_dir / "assets.csv"),
        "projects": read_csv(registry_dir / "projects.csv"),
        "mint_queue": read_csv(registry_dir / "mint_queue.csv")
    }

    Path(sys.argv[2]).write_text(json.dumps(output, indent=2), encoding="utf-8")
    print(f"Dashboard export written to {sys.argv[2]}")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
