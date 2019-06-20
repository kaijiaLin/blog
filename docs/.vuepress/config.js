module.exports = {
            title: 'Title',
            description: 'description',
            theme: 'yubisaki',
            head: [
                ['link', { rel: 'icon', href: '/favicon.ico' }]
            ],
            base: '/blog/',
            repo: 'https://github.com/kaijiaLin/blog',
            dest: './docs/.vuepress/dist',
            ga: '',
            serviceWorker: true,
            evergreen: true,
            themeConfig: {
                background: '/img/',
                logo: '/images/logo.png',
                accentColor: '#ac3e40',
                // footer: '', // 显示在博客的 footer 中

                // 是否显示文章的最近更新时间
                lastUpdated: true,
                github: 'kaijiaLin',
                per_page: 6,
                date_format: 'yyyy-MM-dd HH:mm:ss',

                // 设置顶部导航栏
                nav: [
                    {text: 'Home', link: '/'},
                    { text: 'TAGS', link: '/tag/' },
                    {text: 'About', link: '/about/'},
                    {text: 'Github', link: 'https://github.com/kaijiaLin'},
                ],

                // 评论功能
                comment: {
                    clientId: '<GitHub Application Client ID>',
                    clientSecret: '<GitHub Application Client Secret>',
                    repo: 'blog',
                    owner: 'kaijiaLin',
                    perPage: 5,
                    locale: 'zh-CN',
                }
            },
            markdown: {
                lineNumbers: true, // 代码块显示行数
                anchor: {
                    permalink: true
                },
                toc: {
                    includeLevel: [1, 2]
                },
                config: md => {
                    // 使用更多 markdown-it 插件
                    md.use(require('markdown-it-task-lists'))
                        .use(require('markdown-it-imsize'), { autofill: true })
                }
            },
            postcss: {
                plugins: [require('autoprefixer')]
            },
        }