module.exports = {
    title: '婷的小黑屋',
    // description: '逆风的方向，更适合飞翔',
    description: 'The direction of the headwind is more suitable for flying',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }]
    ],
    base: '/',
    theme: 'reco',
    plugins: [
        [
            'vuepress-plugin-helper-live2d', {
                live2d: {
                    enable: true,
                    model: 'miku',
                    display: {
                        position: "left",
                        width: 250,
                        height: 350,
                        hOffset: 30,
                        vOffset: 20,
                    },
                    react: {
                        opacity: 0.9
                    }
                }
            }
        ]
    ],
    themeConfig: {
        type: 'blog',
        themePicker: false,
        startYear: '2019',
        logo: '/logo.png',
        author: 'Ating',
        // valineConfig: {
        //     appId: 'hcdXCJOhT3Yt7K8ACH8AumLy-gzGzoHsz',
        //     appKey: 'FcUDJ6jKk68vhnwhWDt2tT10',
        //     hideListAccessNumber: true,
        //     avatar:'mp', 
        //     placeholder: 'da da da',
        //     meta: ['nick','mail']
        // },
        vssueConfig: {
            platform: 'github',
            owner: 'tingMayday',
            repo: 'tingMayday.github.io',
            clientId: 'dd5d07b499f6f2bed808',
            clientSecret: 'ca7079d1baf48433496d5bf08b0a84975b40cd08'
        },
        nav: [
            { text: 'Home', link: '/', icon: 'reco-home' },
            {
                text: 'Category',
                items: [
                    { text: 'frontEnd', link: '/categories/frontEnd/' },
                    { text: 'Notes', link: '/categories/notes/' },
                    { text: 'Essay', link: '/categories/essay/' }
                ],
                icon: 'reco-category'
            },
            { text: 'Tags', link: '/tag/', icon: 'reco-tag' },
            { text: 'TimeLine', link: '/timeLine/', icon: 'reco-date' },
            { text: 'About', link: '/About/', icon: 'reco-account' },
            { text: 'Github', link: 'https://github.com/tingMayday', icon: 'reco-github' },
        ],
        sidebar: {
        },
        // 友情链接
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
                title: 'github',
                desc: 'Using the Hello World guide, you’ll create a repository, start a branch, write comments, and open a pull request.',
                link: 'https://github.com'
            }
        ]
    }
}