// DEFINE ALL LOADERS.
var gulp = require("gulp"),
  pug = require("gulp-pug"),
  sass = require("gulp-sass"),
  image = require("gulp-image"),
  notify = require("gulp-notify"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  prefix = require("gulp-autoprefixer"),
  sourcemaps = require("gulp-sourcemaps");
// ====================

// SETUP pathsS.
var paths = {
  public: {
    public: "public",
    css: "public/css",
    js: "public/js",
    imgs: "public/imgs",
  },
  src: {
    images: "src/images",
    maps: "src/maps",
    markup: "src/markup",
    script: "src/script",
    style: "src/style",
  },
};

// MARKUP TASK
gulp.task("markup", function () {
  return gulp
    .src(`${paths.src.markup}/app-root.pug`)
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(concat("index.html"))
    .pipe(gulp.dest(paths.public.public))
    // .pipe(notify("HTML #done"));
});

// STYLES TASK
gulp.task("style", function () {
  return gulp
    .src([
      `${paths.src.style}/libs/*.css`,
      `${paths.src.style}/sass/app-root.scss`,
    ])
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(prefix())
    .pipe(concat("app-style.css"))
    .pipe(sourcemaps.write(`../../${paths.src.maps}`))
    .pipe(gulp.dest(paths.public.css));
  // .pipe(notify('CSS #done'))
});

// SCRIPT TASK
gulp.task("script", function () {
  return gulp
    .src([`${paths.src.script}/libs/*.js`, `${paths.src.script}/app-root.js`])
    .pipe(uglify())
    .pipe(concat("app-script.js"))
    .pipe(gulp.dest(paths.public.js));
  // .pipe(notify('JS #done'))
});

gulp.task("images_process", function () {
  return gulp
    .src(`${paths.src.imgs}/**/*.+(png|jpg|svg|gif)`)
    .pipe(image)
    .pipe(gulp.dest(paths.public.imgs));
});

// WATCH ALL FILES
gulp.task("shotAll", function () {
  gulp.watch(`${paths.src.markup}/**/*.*`, gulp.series("markup"));
  gulp.watch(`${paths.src.style}/**/*.*`, gulp.series("style"));
  gulp.watch(`${paths.src.script}/**/*.*`, gulp.series("script"));
});

// APPLY ALL CHANGES
gulp.task("default", gulp.series("shotAll"));
