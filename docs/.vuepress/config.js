module.exports = {
    title: '婷的小黑屋',
<<<<<<< HEAD
    description: '你问全世界哪里是最美\r\n答案是你身边',
    // '婷，和色也\r\n夏天里流动的风情\r\n是停不住的舞步和唱不完的情歌\r\n当玫瑰花瓣飘飞的那一刻\r\n风会带走所有的想念.......',
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    base: '/',
    theme: 'reco',
    plugins: {
        'vuepress-plugin-helper-live2d': {
            live2d: {
                enable: true,
                model: 'miku',
                display: {
                    position: "left",
                    width: 150,
                    height: 250,
                    hOffset: 0,
                    vOffset: 0,
                },
                react: {
                    opacity: 0.9
                }
            }
        },

        // '@vssue/vuepress-plugin-vssue': {
        //     platform: 'github',
        //     owner: 'tingMayday',
        //     repo: 'tingMayday.github.io',
        //     clientId: 'dd5d07b499f6f2bed808',
        //     clientSecret: 'ca7079d1baf48433496d5bf08b0a84975b40cd08',
        //     autoCreateIssue: true
        // },
    },
=======
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
>>>>>>> 7aaaa4f9ff7c1ecda15a0f7666ef95539765cd3f
    themeConfig: {
        type: 'blog',
        themePicker: false,
        startYear: '2019',
        logo: '/logo.png',
<<<<<<< HEAD
        author: '婷  ',
        authorAvatar: '/avatar.png',
=======
        author: 'Ating',
        // valineConfig: {
        //     appId: 'hcdXCJOhT3Yt7K8ACH8AumLy-gzGzoHsz',
        //     appKey: 'FcUDJ6jKk68vhnwhWDt2tT10',
        //     hideListAccessNumber: true,
        //     avatar:'mp', 
        //     placeholder: 'da da da',
        //     meta: ['nick','mail']
        // },
>>>>>>> 7aaaa4f9ff7c1ecda15a0f7666ef95539765cd3f
        vssueConfig: {
            platform: 'github',
            owner: 'tingMayday',
            repo: 'tingMayday.github.io',
            clientId: 'dd5d07b499f6f2bed808',
<<<<<<< HEAD
            clientSecret: 'ca7079d1baf48433496d5bf08b0a84975b40cd08',
            // autoCreateIssue: true
=======
            clientSecret: 'ca7079d1baf48433496d5bf08b0a84975b40cd08'
>>>>>>> 7aaaa4f9ff7c1ecda15a0f7666ef95539765cd3f
        },
        nav: [
            { text: 'Home', link: '/', icon: 'reco-home' },
            {
                text: 'Category',
                items: [
<<<<<<< HEAD
                    { text: '前端', link: '/categories/Front/' },
                    { text: '后端', link: '/categories/Back/' },
                    { text: '每周一练', link: '/categories/exercise/' },
                    { text: 'Notes', link: '/categories/notes/' },
                    { text: 'Essay', link: '/categories/essay/' },
=======
                    { text: 'frontEnd', link: '/categories/frontEnd/' },
                    { text: 'Notes', link: '/categories/notes/' },
                    { text: 'Essay', link: '/categories/essay/' }
>>>>>>> 7aaaa4f9ff7c1ecda15a0f7666ef95539765cd3f
                ],
                icon: 'reco-category'
            },
            { text: 'Tags', link: '/tag/', icon: 'reco-tag' },
            { text: 'TimeLine', link: '/timeLine/', icon: 'reco-date' },
            { text: 'About', link: '/About/', icon: 'reco-account' },
            { text: 'Github', link: 'https://github.com/tingMayday', icon: 'reco-github' },
        ],
<<<<<<< HEAD
        // 友情链接
        friendLink: [
            {
                title: 'juejin',
                desc: '掘金是一个帮助开发者成长的社区，是给开发者用的 Hacker News，给设计师用的 Designer News，和给产品经理用的 Medium',
                avatar: 'https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg',
                link: 'https://juejin.im/user/5b7e16616fb9a019b953de06'
            },
            {
=======
        sidebar: {
        },
        // 友情链接
        friendLink: [
            {
>>>>>>> 7aaaa4f9ff7c1ecda15a0f7666ef95539765cd3f
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