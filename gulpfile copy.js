import gulp from "gulp"
import plumber from "gulp-plumber"
import less from "gulp-less"
import postcss from "gulp-postcss"
import autoprefixer from "autoprefixer"
import browser from "browser-sync"
import csso from "postcss-csso" //Уменьшение кода css
import rename from "gulp-rename" //Переименование в .мин
import htmlmin from "gulp-htmlmin" //Уменьшение кода html
import terser from "gulp-terser" //Уменьшение кода js
import squoosh from "gulp-libsquoosh" //Уменьшение картинок + WEBP
import svgo from "gulp-svgmin" //Уменьшение SVG
import svgstore from "gulp-svgstore" //SVG Спрайты
import del from "del" //Чистка проекта от мусора

// Styles
const styles = () => {
  return gulp
    .src("source/less/style.less", { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([autoprefixer(), csso()]))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css/", { sourcemaps: "." }))
    .pipe(browser.stream())
}

// HTML
const html = () => {
  return gulp
    .src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"))
}

//scripts
const scripts = () => {
  return gulp.src("source/js/*.js").pipe(terser()).pipe(gulp.dest("build/js")).pipe(browser.stream())
}

//images
const optimizeImages = () => {
  return gulp.src("source/img/*img*/*.{jpg,png}").pipe(squoosh()).pipe(gulp.dest("build/img"))
}

const copyImages = () => {
  return gulp.src("source/img/*img*/*.{jpg,png}").pipe(gulp.dest("build/img"))
}

//webp
const createWebp = () => {
  return gulp
    .src(["source/img/*webp*/*.{jpg,png}"])
    .pipe(
      squoosh({
        webp: {},
      })
    )
    .pipe(gulp.dest("build/img"))
}

//Простые SVG
const svg = () => {
  return gulp.src(["source/img/*svg*/*.svg", "!source/img/sprite/*.svg"]).pipe(svgo()).pipe(gulp.dest("build/img"))
}

//Спрайты SVG
const sprite = () => {
  return gulp
    .src("source/img/sprite/*.svg")
    .pipe(
      svgo({
        plugins: [
          {
            removeViewBox: false,
          },
        ],
      })
    )
    .pipe(
      svgstore({
        inlineSvg: true,
      })
    )
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img/sprite"))
}

//Copy
const copy = (done) => {
  gulp
    .src(["source/fonts/*.{woff2,woff}", "source/*.ico", "source/*.webmanifest"], { base: "source" })
    .pipe(gulp.dest("build"))
  done()
}

//del очистка bild
const clean = () => {
  return del("build")
}

// Server
const server = (done) => {
  browser.init({
    server: {
      baseDir: "build",
    },
    cors: true,
    notify: false,
    ui: false,
  })
  done()
}

// Watcher
const watcher = () => {
  gulp.watch("source/less/**/*.less", gulp.series(styles))
  gulp.watch("source/js/*.js", gulp.series(scripts))
  gulp.watch("source/*.html").on("change", gulp.series(html, scripts, browser.reload))
}

export const build = gulp.series(
  clean,
  optimizeImages,
  createWebp,

  gulp.parallel(copy, styles, html, scripts, svg, sprite)
)

export default gulp.series(
  clean,
  optimizeImages,
  createWebp,

  gulp.parallel(copy, styles, html, scripts, svg, sprite),

  server,
  watcher
)
