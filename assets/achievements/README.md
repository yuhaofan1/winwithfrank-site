# Achievement slideshow images

Drop `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`, or `.gif` images into this folder.

When the site runs locally with `python3 -m http.server`, images in this folder
are discovered automatically and rotate every five seconds.

For deployment, add filenames to `slides.json` in display order:

```json
{
  "slides": [
    "project-01.jpg",
    "project-02.webp",
    "project-03.png"
  ]
}
```

Use landscape images where possible. A 16:9 crop at 1600 × 900 pixels works well.
