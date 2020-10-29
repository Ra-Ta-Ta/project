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
        ],
        script: [
            {
                src:
                    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/gsap.min.js",
            },
            {
                src:
                    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js",
            },
        ],
        link: [
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&display=swap",
            },
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css2?family=Grandstander:wght@100;200;300;400;500;600;700;800;900&display=swap",
            },
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap",
            },
        ],
    },
    /*
     ** Global CSS
     */
    css: ["@/assets/css/style.css"],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: ["~/plugins/lazysizes.client.js"],
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
    ],
    /*
     ** Nuxt.js modules
     */
    modules: ["@aceforth/nuxt-optimized-images"],
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
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
    build: {
        postcss: {
            // 添加插件名称作为键，参数作为值
            // 使用npm或yarn安装它们
            plugins: {
                // 通过传递 false 来禁用插件
                "postcss-url": false,
                "postcss-nested": {},
                "postcss-responsive-type": {},
                "postcss-hexrgba": {},
            },
            preset: {
                // 更改postcss-preset-env 设置
                autoprefixer: {
                    grid: false,
                },
            },
        },
        transpile: ["gsap"],
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
};
