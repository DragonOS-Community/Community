import{_ as o,c as r,a as n,b as e,d as a,w as i,e as t,r as s,o as c}from"./app-D_giGikB.js";const p={},d=t('<h1 id="开发群" tabindex="-1"><a class="header-anchor" href="#开发群"><span>开发群</span></a></h1><p>开发群是DragonOS社区最重要的组织，由以下类型的子组组成：</p><ul><li>SIG（特别兴趣小组） <ul><li>子项目</li></ul></li><li>工作组</li><li>项目管理委员会</li></ul><h2 id="sig-特别兴趣小组" tabindex="-1"><a class="header-anchor" href="#sig-特别兴趣小组"><span>SIG（特别兴趣小组）</span></a></h2><p>这是DragonOS开发群最主要的组织，每个SIG由对该领域作出贡献，或感兴趣的成员组成。其共同目的是为了推进特定主题的项目。 我们的目标是实现分布式决策结构和代码所有权，并提供用于完成工作、制定决策和加入新贡献者的集中论坛。项目的每个可识别的 子部分（例如，github org、存储库、子目录、API、测试、issue、PR）都旨在由某个 SIG 拥有。</p><p>SIG 涵盖的领域可能垂直集中于特定组件或功能，也可能是横向/跨领域的，跨越项目的许多/所有功能领域，或者支持项目本身。如：</p><ul><li>垂直领域：网络子系统、调度子系统、虚拟化</li><li>横向：可扩展性、多架构支持</li><li>项目：测试、发布、文档、项目管理、贡献者体验</li></ul><p>SIG 在任何特定时间都必须至少拥有一名、最好是两名 SIG 主席。 SIG 主席旨在成为组织者和促进者，负责 SIG 的运营以及与 其他 SIG、项目管理委员会和更广泛社区的沟通和协调。</p>',8),h=t('<h2 id="子项目" tabindex="-1"><a class="header-anchor" href="#子项目"><span>子项目</span></a></h2><p>SIG 内的具体工作分为多个子项目。 DragonOS 代码和文档的每个部分都必须属于某个子项目。一些 SIG 可能只有一个子项目，但许多 SIG 拥有多个重要的子项目， 这些子项目具有不同的（尽管有时重叠）一组贡献者和Maintainer，他们充当子项目的技术领导者：负责愿景、方向和总体设计等。</p><p>一些 SIG 的子项目示例：</p><ul><li>文件系统SIG：虚拟文件系统、FAT文件系统等</li></ul><p>每个 SIG 的子项目都记录在其目录下的<strong>subprojects.md</strong>中。</p><h2 id="wg-工作组" tabindex="-1"><a class="header-anchor" href="#wg-工作组"><span>WG（工作组）</span></a></h2><p>工作组用来促进短暂的或者是跨越多个 SIG 的主题的讨论/工作。</p><p>工作组主要用于促进DragonOS范围内但跨 SIG的讨论主题。如果社区中的一群人想要聚在一起讨论某个主题，他们可以在不成立工作组的情况下这样做。</p>',8),g=t('<h2 id="项目管理委员会-pmc" tabindex="-1"><a class="header-anchor" href="#项目管理委员会-pmc"><span>项目管理委员会（PMC）</span></a></h2><p>项目管理委员会负责管理管理各个SIG以及WG，制定及管理项目发展方向。</p><ul><li>PMC负责审阅、批准、驳回SIG和WG的成立、变更、撤销等事项。</li><li>PMC负责决定项目的发展方向。</li><li>所有技术责任均应委托给 SIG（即PMC本身不应保留技术责任）</li><li>PMC负责与项目促进群的各团队进行沟通协调。</li><li>制定和完善定义新社区团体的政策(3)，并为这些团体制定透明度和问责政策。</li><li>定义并维护SIG和WG的治理结构和政策。</li><li>PMC负责与特殊职能的委员会进行事项对接，但涉及的事项应当同时抄送给社区管理委员会。若涉及重大/敏感事项，应获得CMC的同意。</li><li>应当每个月以书面形式，向社区管理委员会(CMC)汇报其工作进展.</li><li>对于项目的重大事件及变更，以及财务、法务事件，均需在48小时内告知社区管理委员会。</li><li>PMC成员的任免，在经过PMC的投票机制后，应得到CMC的半数以上成员的同意。</li></ul>',3);function G(S,u){const l=s("RouteLink");return c(),r("div",null,[d,n("p",null,[e("每个 SIG 必须有一份章程，规定其范围（主题、子系统、代码存储库和目录）、职责、权限范围、如何选择/授予权限/领导力的成员和角色、 如何做出决策以及如何解决冲突。有关如何管理特许权的详细信息，请参阅"),a(l,{to:"/governance/sig-governance/sig-charter-guide.html"},{default:i(()=>[e("SIG章程指南")]),_:1}),e("。在跨 SIG 流程 （例如，项目集成测试、发布上线等流程）和资产（例如，存储库）施加的一些广泛的指导方针和约束范围内，SIG 应该相对自由地定制或更改其运作方式。")]),n("p",null,[e("SIG 存在的主要原因是作为协作论坛。SIG 中的许多工作都应该保留在该 SIG 的本地范围内。然而，SIG 必须公开沟通，确保其他 SIG 和 社区成员可以找到会议、讨论、设计和决策的记录，并定期向社区传达 SIG 工作的高级摘要。有关当前 SIG 操作机制的更多详细信息， 例如论坛板块、会议时间等，请参阅"),a(l,{to:"/governance/sig-governance/"},{default:i(()=>[e("SIG治理文档")]),_:1})]),h,n("p",null,[e("有关组建和解散工作组的更多详细信息，请参阅"),a(l,{to:"/governance/wg-governance/"},{default:i(()=>[e("工作组治理")]),_:1}),e("。 工作组记录在"),a(l,{to:"/wgs/"},{default:i(()=>[e("工作组文档")]),_:1}),e("中。")]),g])}const _=o(p,[["render",G],["__file","dev-group.html.vue"]]),m=JSON.parse('{"path":"/governance/dev-group.html","title":"开发群","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"SIG（特别兴趣小组）","slug":"sig-特别兴趣小组","link":"#sig-特别兴趣小组","children":[]},{"level":2,"title":"子项目","slug":"子项目","link":"#子项目","children":[]},{"level":2,"title":"WG（工作组）","slug":"wg-工作组","link":"#wg-工作组","children":[]},{"level":2,"title":"项目管理委员会（PMC）","slug":"项目管理委员会-pmc","link":"#项目管理委员会-pmc","children":[]}],"git":{"updatedTime":1721148113000,"contributors":[{"name":"LoGin","email":"longjin@DragonOS.org","commits":1}]},"filePathRelative":"governance/dev-group.md"}');export{_ as comp,m as data};
