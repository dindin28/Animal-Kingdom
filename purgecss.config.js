const purgecss = require("@fullhuman/postcss-purgecss");

const vuePath = /\.vue(\?.+)?$/;

module.exports = {
  plugins: [
    purgecss({
      contentFunction: (sourceInputFile) => {
        if (vuePath.test(sourceInputFile)) {
          return [sourceInputFile.replace(vuePath, ".vue")];
        }
        return [
          "src/**/*.vue",
          "index.html",
        ];
      },
      defaultExtractor(content) {
        if (content.startsWith("<template")) {
          content = `${content.split("</template")[0]}</template>`;
        }
        return content.match(/[\w-/:]+(?<!:)/g) || [];
      },
      safelist: [/svg.*/, /fa.*/],
    }),
  ],
};
