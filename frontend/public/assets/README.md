Place the design images in this folder using the following filenames so the site references them automatically.

Hero and benefits

- hero-1.jpg (large hero image shown on homepage)
- benefit-1.jpg
- benefit-2.jpg
- benefit-3.jpg
- benefit-4.jpg

Services (order matters: 1-6)

- service-1.jpg
- service-2.jpg
- service-3.jpg
- service-4.jpg
- service-5.jpg
- service-6.jpg

Projects

- project-1.jpg
- project-2.jpg
- project-3.jpg
- project-4.jpg
- project-5.jpg
- project-6.jpg

Logos & team

- logo.png
- team-1.jpg
- team-2.jpg

Optimization (recommended)

- Use `sharp` or `squoosh` to create webp and resized variants for thumbnails.
- Example using `sharp` (node):

  const sharp = require('sharp')
  await sharp('orig.jpg').resize(1200).webp({quality:80}).toFile('project-1.jpg')

- Commit the originals to a private storage or keep them out of git; add optimized files to the repo.

Notes

- Filenames must be lowercase and match the names above for the site to pick them up automatically.
- If you want me to copy the images from the chat attachments into this folder, upload them to the workspace or tell me to proceed and I will fetch them if available.
