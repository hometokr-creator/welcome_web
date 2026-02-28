import shutil
import os

source_dir = "figma-export/images"
target_dir = "public/images"

if not os.path.exists(target_dir):
    os.makedirs(target_dir, exist_ok=True)

files = os.listdir(source_dir)
print(f"Source files: {files}")

for f in files:
    src = os.path.join(source_dir, f)
    dst = os.path.join(target_dir, f)
    if os.path.isfile(src):
        shutil.copy2(src, dst)
        print(f"Copied {src} to {dst}")

print(f"Target directory content: {os.listdir(target_dir)}")
