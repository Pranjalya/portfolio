import os
from glob import glob

def get_all_items_excluding_folder(root_dir, excluded_folder):
    all_items = []
    for item in glob(f"{root_dir}/**/*.*", recursive=True):
        if not item.startswith(f"{excluded_folder}"):
            all_items.append(item)
    return all_items


def format_content_file(filepath, root="../"):
    with open(filepath) as f:
        data = f.read()
    structure = f"""```{filepath.replace("../", "")}
{data}
```

"""
    return structure


if __name__=="__main__":
    FILES_TO_ADD = get_all_items_excluding_folder("../src", "../src/assets")
    FILES_TO_ADD += ["../package.json"] + list(glob("../*.js"))

    SYSTEM_PROMPT = """Given the following project structure which was made using Vue 2, it contains all the relevant JS files, and the contents that are present in the `src` directory.
    I need to port the code to Vue 3. Please feel free to use any knowledge source or techniques to achieve this. Provided below are all the files of the project except the static files.

    """
    FILES_PROMPT = ""
    for present_file in FILES_TO_ADD:
        FILES_PROMPT += format_content_file(present_file)

    FINAL_PROMPT = "Given the above files, please port this code to latest Vue version that you can do, so that it runs."

    with open("prompt.txt", "w") as f:
        f.write(SYSTEM_PROMPT+FILES_PROMPT+FINAL_PROMPT)
