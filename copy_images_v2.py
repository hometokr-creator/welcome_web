import shutil
import os

source_dir = "figma-export/images"
target_dir = "public/images"

if not os.path.exists(target_dir):
    os.makedirs(target_dir)

files = [
    "Rectangle_116_753x545.png",
    "___4_2_196x270.png",
    "___5_2_268x199.png",
    "icon_check_3D_268x199.png",
    "icon_home_3D__299x253.png",
    "icon_paper_3D_196x270.png",
    "icon_people_3D_228x205.png"
]

results = []
results.append(f"CWD: {os.getcwd()}")

for f in files:
    src = os.path.join(source_dir, f)
    dst = os.path.join(target_dir, f)
    try:
        if os.path.exists(src):
            shutil.copy2(src, dst)
            results.append(f"Copied: {f}")
        else:
            results.append(f"Not Found: {src}")
    except Exception as e:
        results.append(f"Failed {f}: {str(e)}")

with open("copy_results.txt", "w") as out:
    out.write("\n".join(results))
