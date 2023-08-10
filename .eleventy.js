const Image = require("@11ty/eleventy-img");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/media");
  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addLiquidShortcode("myImage", async function (src, alt, className, describedById) {
    if (!src) {
      throw new Error(`Missing \`src\` on myImage shortcode from: ${src}`);
    }

    let imagePath = path.join("src/media", path.basename(src));
    let metadata = await Image(imagePath, {
      widths: [384, 768, 1207, 2414, 1536],
      formats: ["png", "webp", "avif", "jpg"],
      outputDir: "_site/media",
      urlPath: "/media",
    });

    let imageSources = [];
    let sizes = "";
    let imgWidths = "";
    let mediaQuery = "";

    if (className === "about-img") {
      sizes = `
        (min-width: 1448px) 768px,
        (min-width: 668px)  384px,
        100vw
      `;
      imgWidths = "768px";
      mediaQuery = `(-webkit-min-device-pixel-ratio: 1.5)`;
    } else if (className === "example-img") {
      sizes = `
        (min-width: 1448px) 1207px,
        (min-width: 668px)  826px,
        100vw
      `;
      imgWidths = "1207px";
      mediaQuery = `(-webkit-min-device-pixel-ratio: 1.5)`;
    } else if (className === "cover-img") {
      sizes = `
        (min-width: 1448px) 586px,
        (min-width: 668px)  396px,
        100vw
      `;
      imgWidths = "768px";
      mediaQuery = `(-webkit-min-device-pixel-ratio: 1.5)`;
    } else if (className === "tryptich-img") {
      sizes = `
      (min-width: 1448px) 768px,
      (min-width: 668px)  384px,
      100vw
    `;
      imgWidths = "768px";
      mediaQuery = `(-webkit-min-device-pixel-ratio: 1.5)`;
    }
    

    for (let format in metadata) {
      let imageData = metadata[format];
      if (imageData && imageData.length > 0) {
        let srcset = imageData
          .map((image) => `/media/${path.basename(image.url)} ${image.width}w`)
          .join(", ");

        let sourceTag = `<source media="${mediaQuery}" srcset="${srcset}" sizes="${sizes}" type="image/${format}">`;

        imageSources.push(sourceTag);
      }
    }

    let defaultImage = metadata.png[0];
    let imgTag = `<img src="/media/${path.basename(defaultImage.url)}" alt="${alt}" width="${imgWidths}" height="auto" loading="lazy"`;
    
    if (describedById) {
      imgTag += ` aria-describedby="${describedById}"`;
    }
    
    imgTag += `>`;

    return `<picture>${imageSources.join("")}${imgTag}</picture>`;
  });

  eleventyConfig.addCollection("work", function (collectionApi) {
    // Filter the collection to include only the posts you want in the `work` collection
    return collectionApi.getFilteredByGlob("**/work/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};

