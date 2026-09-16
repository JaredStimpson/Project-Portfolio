# Portfolio Documentation

Store durable project documentation in this folder. Local working notes and long change requests belong in the ignored `version plans` folder, while implementation lookup notes belong in the ignored root `vault.md` file.

## Photo workflow

1. Add original photos to the matching `projects/<project-name>/media` folder.
2. Run `tools\\launch.bat` from File Explorer or a terminal.
3. The launcher creates `.venv` when needed, installs the dependencies, generates missing optimized variants, and updates `image-variants.js`.
4. Keep project data pointed at the original image, not the generated file under `media/optimized`.
5. If you replace a photo but keep the same filename, run `tools\\launch.bat --force` to rebuild all variants.

The generated optimized images and `image-variants.js` are part of the deployed site and should be committed after review.
