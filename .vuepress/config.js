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
                            '/governance/staff-info.md',
                        ]
                    },
                    {
                        text: 'SIG治理',
                        children: [
                            '/governance/sig-governance/',
                            '/governance/sig-governance/sig-charter-guide.md',
                        ]
                    },
                    {
                        text: 'WG治理',
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
                            '/contributors/code-style.md',
                            '/contributors/github-workflow.md',
                            '/contributors/pull-requests.md',
                            '/contributors/cheat-sheet.md',
                            '/contributors/code_of_conduct.md',
                            '/contributors/expectation.md',
                            '/contributors/resources.md',
                        ]
                    }
                ],

                '/sigs/': [
                    '/sigs/',
                    {
                        text: 'SIG模版',
                        children: [
                            '/sigs/sig-template/',
                            '/sigs/sig-template/charter.md',
                            '/sigs/sig-template/contributing.md',
                        ],
                    },
                    {

                        text: 'SIG Main',
                        children: [
                            '/sigs/sig-main/',
                            '/sigs/sig-main/charter.md',
                            '/sigs/sig-main/contributing.md',
                        ]
                    },
                    {
                        text: 'SIG Cloud Provider',
                        children: [
                            '/sigs/sig-cloud-provider/',
                            '/sigs/sig-cloud-provider/charter.md',
                            '/sigs/sig-cloud-provider/contributing.md',
                        ]
                    },
                    {
                        text: 'SIG Network',
                        children: [
                            '/sigs/sig-network/',
                            '/sigs/sig-network/charter.md',
                            '/sigs/sig-network/contributing.md',
                        ]
                    },
                    {
                        text: 'SIG Virtualization',
                        children: [
                            '/sigs/sig-virtualization/',
                            '/sigs/sig-virtualization/charter.md',
                            '/sigs/sig-virtualization/contributing.md',
                        ]
                    },
                    {
                        text: 'SIG Observation & Testing',
                        children: [
                            '/sigs/sig-observation-testing/',
                            '/sigs/sig-observation-testing/charter.md',
                            '/sigs/sig-observation-testing/contributing.md',
                        ]
                    },
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
                '/mentorship/': [
                    {
                        text: '导师制',
                        children: [
                            '/mentorship/',
                            '/mentorship/mentee-guide.md',
                            '/mentorship/mentor-guide.md',
                        ]
                    },
                    {
                        text: '指导计划',
                        children: [
                            '/mentorship/programs/educational-learning-courses.md',
                            '/mentorship/programs/project-based-mentorship.md',
                            '/mentorship/programs/ospp.md',
                        ]
                    }
                ],

            }
        }
    ),
    lang: 'zh-CN',
    title: '',

})
