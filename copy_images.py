import shutil
import os

source_dir = "/Users/taegi/Documents/홈투게더/예창패/figma-export/images"
target_dir = "/Users/taegi/Documents/홈투게더/예창패/public/images"

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

for f in files:
    src = os.path.join(source_dir, f)
    dst = os.path.join(target_dir, f)
    try:
        shutil.copy2(src, dst)
        results.append(f"Copied: {f}")
    except Exception as e:
        results.append(f"Failed {f}: {str(e)}")

with open("/Users/taegi/Documents/홈투게더/예창패/copy_results.txt", "w") as out:
    out.write("\n".join(results))
    out.write("\n" + str(os.listdir(target_dir)))
