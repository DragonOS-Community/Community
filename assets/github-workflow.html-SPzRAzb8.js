import{_ as r,c,a as s,d as e,w as a,b as n,e as o,r as i,o as d}from"./app-CQ7BEopN.js";const u={},p=s("h1",{id:"github-工作流程",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#github-工作流程"},[s("span",null,"GitHub 工作流程")])],-1),h=s("p",null,"本文旨在向您介绍DragonOS社区的GitHub工作流程。包括一些用于帮助你维持本地环境与社区上游仓库同步的建议，还有一些git提交规范等等。",-1),m=s("p",null,[s("strong",null,"本文以DragonOS主仓库为例，社区的其他仓库亦适用此工作流程")],-1),g={class:"table-of-contents"},b=o(`<h2 id="_1-在github上创建一个fork" tabindex="-1"><a class="header-anchor" href="#_1-在github上创建一个fork"><span>1. 在GitHub上创建一个Fork</span></a></h2><ol><li>打开 https://github.com/DragonOS-Community/DragonOS</li><li>点击页面右上角的<code>Fork</code>按钮，在你自己的账户下创建一个fork</li></ol><h2 id="_2-克隆主仓库到你的电脑" tabindex="-1"><a class="header-anchor" href="#_2-克隆主仓库到你的电脑"><span>2. 克隆主仓库到你的电脑</span></a></h2><p>把<strong>主仓库</strong>克隆到你的电脑（注意不是你账户下Fork后的仓库）</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"></span>
<span class="line"><span class="token function">git</span> clone https://github.com/DragonOS-Community/DragonOS</span>
<span class="line"><span class="token comment"># 或者是 git clone git@github.com:DragonOS-Community/DragonOS</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">cd</span> DragonOS</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，添加你fork的仓库，假设你的名字叫<code>zhangsan</code>，那么就执行以下命令：</p><p><em>注意替换url为你账号下的仓库的链接</em></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"></span>
<span class="line"><span class="token function">git</span> remote <span class="token function">add</span> zhangsan https://github.com/zhangsan/DragonOS</span>
<span class="line"><span class="token comment"># 或者是 git remote add zhangsan git@github.com:zhangsan/DragonOS</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置永远不推送到远程的master分支</span></span>
<span class="line"><span class="token function">git</span> remote set-url <span class="token parameter variable">--push</span> origin no_push</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 确认你设置的远程已经生效</span></span>
<span class="line"><span class="token function">git</span> remote <span class="token parameter variable">-v</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-创建工作分支" tabindex="-1"><a class="header-anchor" href="#_3-创建工作分支"><span>3. 创建工作分支</span></a></h2><p><strong>请记住：</strong> 永远不要在你本地的master分支上进行提交。请保持master分支与社区仓库的master一致。</p><p>在开发之前，需要创建新的分支。每个PR都要使用一个新的、干净的分支。</p><p>首先，请切换到本地的master分支（或者main分支），然后让它与远程同步。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> fetch origin</span>
<span class="line">gir checkout master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建你的工作分支：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> patch-my-feature</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>请注意，分支名字应当能简短的说明这个pr是干啥的。</p><p>接着，你就可以开始开发了！</p><h2 id="_4-使你的分支与远程最新的代码保持同步" tabindex="-1"><a class="header-anchor" href="#_4-使你的分支与远程最新的代码保持同步"><span>4. 使你的分支与远程最新的代码保持同步</span></a></h2><p>在开发过程中，您需要周期性的从社区主仓库合并代码到你本地的工作分支。如果您长期不同步主仓库代码，那么就会产生很多的冲突，甚至导致您的更改难以合并到主仓库。</p><p>在执行以下命令之前，请您先切换到您的开发分支，然后执行以下命令：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> fetch origin</span>
<span class="line"><span class="token function">git</span> rebase origin/master</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，不要使用<code>git pull</code>来合并主仓库代码到你的开发分支。请务必使用以上命令。因为，<code>git pull</code> 会创建merge commits，这会让提交历史变得混乱，使得您的PR的commit历史记录就变得难以理解了。</p><h2 id="_5-提交你的更改" tabindex="-1"><a class="header-anchor" href="#_5-提交你的更改"><span>5. 提交你的更改</span></a></h2><p>一般来说，直接提交就行。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>你可能会经常把你的更改进行commit，以便能够回退更改.</p><h2 id="_6-推送到github" tabindex="-1"><a class="header-anchor" href="#_6-推送到github"><span>6. 推送到GitHub</span></a></h2><p>当你的PR已经完成，能够准备进行审查的时候，请你把工作分支推送到你在GitHub上的仓库。</p><p>以上面的远程<code>zhangsan</code>为例，命令如下：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> push zhangsan patch-my-feature</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_7-创建新的pull-request" tabindex="-1"><a class="header-anchor" href="#_7-创建新的pull-request"><span>7. 创建新的Pull Request</span></a></h2>`,31),v=s("li",null,[n("打开你在GitHub上Fork的仓库 "),s("code",null,"https://github.com/<username>/DragonOS")],-1),_=s("li",null,[n("点击右上角的"),s("code",null,"Compare & Pull Request"),n("按钮，然后选择分支"),s("code",null,"patch-my-feature"),n("，目标为社区主仓库的"),s("code",null,"master"),n("分支（或"),s("code",null,"main"),n("分支）。")],-1);function f(k,x){const l=i("router-link"),t=i("RouteLink");return d(),c("div",null,[p,h,m,s("nav",g,[s("ul",null,[s("li",null,[e(l,{to:"#_1-在github上创建一个fork"},{default:a(()=>[n("1. 在GitHub上创建一个Fork")]),_:1})]),s("li",null,[e(l,{to:"#_2-克隆主仓库到你的电脑"},{default:a(()=>[n("2. 克隆主仓库到你的电脑")]),_:1})]),s("li",null,[e(l,{to:"#_3-创建工作分支"},{default:a(()=>[n("3. 创建工作分支")]),_:1})]),s("li",null,[e(l,{to:"#_4-使你的分支与远程最新的代码保持同步"},{default:a(()=>[n("4. 使你的分支与远程最新的代码保持同步")]),_:1})]),s("li",null,[e(l,{to:"#_5-提交你的更改"},{default:a(()=>[n("5. 提交你的更改")]),_:1})]),s("li",null,[e(l,{to:"#_6-推送到github"},{default:a(()=>[n("6. 推送到GitHub")]),_:1})]),s("li",null,[e(l,{to:"#_7-创建新的pull-request"},{default:a(()=>[n("7. 创建新的Pull Request")]),_:1})])])]),b,s("ol",null,[v,_,s("li",null,[n("关于Pull Request的进一步要求，请查看"),e(t,{to:"/contributors/pull-requests.html"},{default:a(()=>[n("Pull Request流程介绍")]),_:1})])])])}const O=r(u,[["render",f],["__file","github-workflow.html.vue"]]),y=JSON.parse('{"path":"/contributors/github-workflow.html","title":"GitHub 工作流程","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1. 在GitHub上创建一个Fork","slug":"_1-在github上创建一个fork","link":"#_1-在github上创建一个fork","children":[]},{"level":2,"title":"2. 克隆主仓库到你的电脑","slug":"_2-克隆主仓库到你的电脑","link":"#_2-克隆主仓库到你的电脑","children":[]},{"level":2,"title":"3. 创建工作分支","slug":"_3-创建工作分支","link":"#_3-创建工作分支","children":[]},{"level":2,"title":"4. 使你的分支与远程最新的代码保持同步","slug":"_4-使你的分支与远程最新的代码保持同步","link":"#_4-使你的分支与远程最新的代码保持同步","children":[]},{"level":2,"title":"5. 提交你的更改","slug":"_5-提交你的更改","link":"#_5-提交你的更改","children":[]},{"level":2,"title":"6. 推送到GitHub","slug":"_6-推送到github","link":"#_6-推送到github","children":[]},{"level":2,"title":"7. 创建新的Pull Request","slug":"_7-创建新的pull-request","link":"#_7-创建新的pull-request","children":[]}],"git":{"updatedTime":1720015494000,"contributors":[{"name":"LoGin","email":"longjin@DragonOS.org","commits":1}]},"filePathRelative":"contributors/github-workflow.md"}');export{O as comp,y as data};
