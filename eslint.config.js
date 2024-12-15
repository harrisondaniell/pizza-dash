// eslint.config.js
import js from "@eslint/js";
import { sortUserPlugins } from "vite";

export default [
    js.configs.recommended,

    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
            "simple-import-sort/imports": "error"
        }
    },
    sortUserPlugins
];