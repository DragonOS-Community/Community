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
                    'text': '社区交流',
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
                {
                    'text': '工作组',
                    'link': '/wgs/',
                },
                {
                    'text': "导师制",
                    'link': '/mentorship/',
                }
            ],
            sidebar: {
                '/': 'heading',
                '/governance/': [
                    {
                        text: '社区治理',
                        children: [
                            '/governance/',
                            '/governance/community-membership.md',
                            '/governance/dev-group.md',
                            '/governance/sig-wg-lifecycle.md',
                            
                        ]
                    },
                    {
                        text:'SIG治理',
                        children: [
                            '/governance/sig-governance/',
                            '/governance/sig-governance/sig-charter-guide.md',
                        ]
                    },
                    {
                        text:'WG治理',
                        children: [
                            '/governance/wg-governance/',
                        ]
                    }
                ],
                '/communication/': [
                    {
                        text: '社区交流',
                        children: [
                            '/communication/',
                            '/communication/dragonos-community-conference.md',
                        ]
                    }
                ],
                '/contributors/': [
                    {
                        text: '贡献者指南',
                        children: [
                            '/contributors/',
                            '/contributors/guide.md',
                            '/contributors/cheat-sheet.md',
                            '/contributors/code_of_conduct.md',
                            '/contributors/expectation.md',
                        ]
                    }
                ],
                
                '/sigs/': [
                    {
                        text: 'SIGs',
                        children: [
                            '/sigs/',
                            '/sigs/sig-list.md',
                        ]
                    },
                    {
                        text: 'SIG模版',
                        children: [
                            '/sigs/sig-template/',
                            '/sigs/sig-template/charter.md',
                            '/sigs/sig-template/contributing.md',
                        ]
                    }
                ],
                '/wgs/': [
                    {
                        text: '工作组',
                        children: [
                            '/wgs/',
                            '/wgs/wg-list.md',
                        ]
                    },
                    {
                        text: '工作组模版',
                        children: [
                            '/wgs/wg-template/',
                        ]
                    }
                ],

            }
        }
    ),
    lang: 'zh-CN',
    title: '',

})
