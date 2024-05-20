import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),

    theme: defaultTheme(
        {
            repo: 'DragonOS-Community/community',
            repoLabel: 'GitHub',
            // 默认是 false, 设置为 true 来启用
            editLinks: true,
            // 默认为 "Edit this page"
            editLinkText: '帮助我们改善此页面！',
            smoothScroll: true,
            docsBranch: 'master',
            logo: '/images/dragonos-full-logo.svg',
            nextLinks: true,
            navbar: [
                {
                    'text': '首页',
                    'link': '/',
                },
                {
                    'text': '社区治理',
                    'link': '/governance/',
                },
                {
                    'text': '交流',
                    'link': '/communication/',
                },
                {
                    'text': '贡献者',
                    'link': '/contributors/',
                },
                {
                    'text': 'SIGs',
                    'link': '/sigs/',
                },
            ],
            sidebar: {
                '/': 'heading',
                '/governance/': [
                    {
                        text: '社区治理',
                        children: [
                            '/governance/',
                            '/governance/community-membership.md',
                        ]
                    }
                ]
            }
        }
    ),
    lang: 'zh-CN',
    title: '',

})
