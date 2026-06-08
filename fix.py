import json
from pathlib import Path

notebook_path = Path('notebooks/all_interactions.ipynb')

with open(notebook_path, "r", encoding="utf-8") as f:
    nb = json.load(f)

nb.get("metadata", {}).pop("widgets", None)

with open(notebook_path, "w", encoding="utf-8") as f:
    json.dump(nb, f, indent=1, ensure_ascii=False)

print("Fixed notebook metadata")