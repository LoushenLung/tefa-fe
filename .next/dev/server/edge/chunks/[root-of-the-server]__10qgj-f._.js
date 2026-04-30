(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/[root-of-the-server]__10qgj-f._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/middleware.ts [middleware-edge] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config
]);
(()=>{
    const e = new Error("Cannot find module 'next-auth/middleware'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const config = {
    // Specify the routes that should be protected
    // Here we protect everything EXCEPT sign-in, sign-up, and public assets
    matcher: [
        /*
     * Match all request paths except for the ones starting with:
     * - api/auth (auth API routes)
     * - sign-in (login page)
     * - sign-up (registration page)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */ "/((?!api/auth|sign-in|sign-up|_next/static|_next/image|favicon.ico).*)"
    ]
};
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$middleware$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["config"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$middleware$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/middleware.ts [middleware-edge] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module 'next-auth/middleware'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__10qgj-f._.js.map