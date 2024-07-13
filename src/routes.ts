
const routes = [
    
    { path: "/docs", component: "docs/docs",
        routes: [
            { path: '/docs/docsfont', component: "@/pages/docs/components/DocsFont" }
        ]
        
    },
    { path: "/", component: "index", 
        wrappers: [
            '@/wrappers/auth',
          ],
        // redirect: '/docs/docsfont'
    },
    { path: "/products", component: "products" },
    { path: '/login', component: '@/pages/Login.tsx', layout: false },
    { path: '/*', component: '@/pages/404.tsx' },
    
]

export default routes