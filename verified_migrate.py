import shutil
import os

# Using absolute paths for maximum reliability
source_dir = "/Users/taegi/Documents/홈투게더/예창패/figma-export/images"
target_dir = "/Users/taegi/Documents/홈투게더/예창패/public/images"
log_file = "/Users/taegi/Documents/홈투게더/예창패/migration_report.txt"

def migrate():
    with open(log_file, "w") as log:
        log.write("--- MIGRATION START ---\n")
        
        if not os.path.exists(target_dir):
            os.makedirs(target_dir, exist_ok=True)
            log.write(f"Created target directory: {target_dir}\n")
        
        if not os.path.exists(source_dir):
            log.write(f"ERROR: Source directory not found: {source_dir}\n")
            return

        files = [f for f in os.listdir(source_dir) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.svg', '.webp'))]
        log.write(f"Found {len(files)} image files in source: {files}\n\n")

        for f in files:
            src = os.path.join(source_dir, f)
            dst = os.path.join(target_dir, f)
            try:
                shutil.copy2(src, dst)
                size = os.path.getsize(dst)
                log.write(f"SUCCESS: Copied {f} ({size} bytes)\n")
            except Exception as e:
                log.write(f"FAILED: Could not copy {f}. Error: {str(e)}\n")

        log.write("\n--- TARGET DIRECTORY CHECK ---\n")
        final_files = os.listdir(target_dir)
        for f in final_files:
            size = os.path.getsize(os.path.join(target_dir, f))
            log.write(f"{f}: {size} bytes\n")
        
        log.write("\n--- MIGRATION END ---")

if __name__ == "__main__":
    migrate()
    print("Migration complete. Check migration_report.txt for details.")
