#!/usr/bin/env python3
"""Basic metadata validator for Platform.CCC.

Usage:
  python scripts/validate_metadata.py examples/ccc/collective.json
"""

import json
import sys
from pathlib import Path

REQUIRED_BY_KIND = {
    "collective": ["collective_id", "name", "coin", "scope", "status"],
    "member": ["member_id", "display_name", "platform_coin", "status"],
    "asset": ["asset_id", "asset_title", "asset_type", "collective_scope", "status"],
    "project": ["project_id", "project_title", "project_type", "collective_scope", "status"],
    "mint_pack": ["mint_pack_id", "asset_id", "token_standard_target", "network", "status"],
}

def infer_kind(data: dict) -> str:
    if "collective_id" in data:
        return "collective"
    if "member_id" in data:
        return "member"
    if "asset_id" in data and "asset_title" in data:
        return "asset"
    if "project_id" in data:
        return "project"
    if "mint_pack_id" in data:
        return "mint_pack"
    return "unknown"

def validate(path: Path) -> list[str]:
    data = json.loads(path.read_text(encoding="utf-8"))
    kind = infer_kind(data)
    if kind == "unknown":
        return [f"{path}: unknown record kind"]
    missing = [field for field in REQUIRED_BY_KIND[kind] if field not in data or data[field] in ("", None)]
    return [f"{path}: missing required field `{field}`" for field in missing]

def main() -> int:
    if len(sys.argv) < 2:
        print("Provide one or more JSON files.")
        return 2
    errors = []
    for arg in sys.argv[1:]:
        errors.extend(validate(Path(arg)))
    if errors:
        print("VALIDATION FAILED")
        for error in errors:
            print("-", error)
        return 1
    print("VALIDATION PASSED")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
