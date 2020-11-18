import https from "https";

export default function ({ $axios, redirect }) {
    /* Disable only in development mode */
    if (process.env.NODE_ENV === "development") {
        $axios.defaults.httpsAgent = new https.Agent({
            /* disable client verification */
            rejectUnauthorized: false,
        });
    }
}
