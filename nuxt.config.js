const fs = require("fs");
const path = require("path");
export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: "universal",
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: "server",
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content:
                    "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content:
                    process.env.npm_package_description ||
                    "",
            },
            {
                property: "og:title",
                content: "Sugar Tongue",
            },
            {
                property: "og:description",
                content: "Connoisseurs of Confectionery",
            },
            {
                property: "og:site_name",
                content: "Sugar Tongue",
            },
            { property: "og:locale", content: "zh_TW" },
            {
                property: "og:image",
                content: "~/assets/images/bg/face.svg",
            },
            {
                name: "msapplication-TileImage",
                content: "~/assets/images/bg/face.svg",
            },
            {
                name: "msapplication-TileColor",
                content: "rgba(235, 206, 146, 0.75)",
            },
        ],
        script: [
            {
                src:
                    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js",
                integrity:
                    "sha384-aeOf8PUQ30Impyyio8FDxFHefK/3nHBJWjuT1u1FnJHZU+ro9q9E9cXUzfWBk0kT",
                crossorigin: "anonymous",
            },
            {
                src:
                    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js",
                integrity:
                    "sha384-IqFDa6K9SJzsScnaQ67Y8rd0qD38ZdhpMnvvHT8HyIIo4zwrxa/YDL5edt/MmN8W",
                crossorigin: "anonymous",
            },
        ],
        link: [
            {
                rel: "shortcut icon",
                type: "image/x-icon",
                href: "/favicon.ico",
            },
            {
                rel: "mask-icon",
                href: "~/assets/images/bg/face.svg",
            },
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&display=swap",
            },
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css2?family=Grandstander:wght@400;700&display=swap",
            },
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap",
            },
        ],
    },
    /*
     ** Global CSS
     */
    css: [
        "~/assets/css/style.css",
        "~/assets/scss/variable.scss",
        "~/assets/scss/mixin.scss",
    ],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    styleResources: {
        scss: "~/assets/scss/*.scss",
    },
    plugins: [
        { src: "~/plugins/lazysizes.js", mode: "client" },
        { src: "~/plugins/axios.js" },
        { src: "~/plugins/filter.js" },
        {
            src: "~/plugins/vue-notification.js",
        },
    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        "@nuxtjs/tailwindcss",
        "@nuxtjs/style-resources",
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        "@aceforth/nuxt-optimized-images",
        "@nuxtjs/style-resources",
        "@nuxtjs/axios",
        "@nuxtjs/proxy",
        ["cookie-universal-nuxt"],
    ],
    /*npm
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */

    build: {
        transpile: ["gsap"],
        vendor: ["axios"],
        //分析打包後的 js 檔案內各個 module 佔的大小
        analyze: true,
        ////打包正式環境版本時將 css 提取至單獨文件
        extractCSS: process.env.DEPLOY_ENV === "production",
        //打包正式環境版本時做最小化壓縮
        minimize: process.env.DEPLOY_ENV === "production",
        postcss: {
            plugins: {
                "postcss-url": false,
                "postcss-nested": {},
                "postcss-responsive-type": {},
                "postcss-hexrgba": {},
            },
            preset: {
                autoprefixer: {
                    grid: false,
                },
            },
        },
        extend(config, { isDev, loaders: { vue } }) {
            if (isDev && process.client) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/,
                });
            }
            if (process.client) {
                vue.transformAssetUrls.img = [
                    "data-src",
                    "src",
                ];
                vue.transformAssetUrls.source = [
                    "data-srcset",
                    "srcset",
                ];
            }
        },
    },
    generate: {
        // 設置錯誤頁面，當 nuxt 呈現未知路由時，會轉至此文件
        fallback: "error",
    },
    optimizedImages: {
        inlineImageLimit: -1,
        handleImages: ["jpeg", "png", "svg", "webp", "gif"],
        optimizeImages: true,
        optimizeImagesInDev: true,
        defaultImageLoader: "img-loader",
        mozjpeg: {
            quality: 85,
        },
        optipng: false,
        pngquant: {
            speed: 7,
            quality: [0.65, 0.8],
        },
        webp: {
            quality: 85,
        },
    },
    loading: "~/components/loading/loading.vue",

    server: {
        port: 3000,
        host: "localhost",
        timing: false,
        https: {
            key: fs.readFileSync(
                path.resolve(
                    __dirname,
                    "localhost-key.pem",
                ),
            ),
            cert: fs.readFileSync(
                path.resolve(__dirname, "localhost.pem"),
            ),
        },
    },
    env: {
        baseUrl: "https://vue-course-api.hexschool.io",
    },
    axios: {
        https: true,
        proxy: true,
        credentials: true,
    },
    proxy: {
        "/api": {
            target: `https://vue-course-api.hexschool.io`,
            pathRewrite: {
                "^/api": "",
            },
        },
    },
};
