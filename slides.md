---
theme: default
title: "Building Fast Without Fooling Yourself"
aspectRatio: 16/9
canvasWidth: 980
info: |
  IIM Ahmedabad Cloud Code Meetup talk.
  AI coding workflows, domain learning, trading platform build story.
class: text-left
drawings:
  persist: false
transition: slide-left
mdc: true
download: true
---

<div class="title-only">
<div class="meetup-label">IIM Ahmedabad / Claude Code Meetup</div>
<div class="opening-title">Building fast<br/>without fooling yourself</div>
<div class="opening-subtitle">How I used Claude Code in a domain where mistakes matter.</div>
</div>

<!--
Purpose:
- Open with the honest frame: this is not an AI magic talk or a trading alpha talk.
- Set up the antagonist: confident but unverified understanding.

Say:
- "I built a finance-grade trading platform in a domain I did not understand well yet."
- "The interesting part is not that AI helped write code."
- "The interesting part is that in a closed domain like finance, the model can sound right long before it is right."
- "So the real job became building a workflow that helped me learn safely instead of guessing confidently."

Transition:
- "That matters because in this kind of system, misunderstanding does not just create bugs. It creates bad decisions."
-->

---

<div class="kicker">The honest starting point</div>

<h1 class="headline-lg mt-4">The repo moved fast.<br/><span class="amber">The domain had to be earned.</span></h1>

<div class="stage-card metric-console mt-6 accent-blue">
  <div class="metric-console-head">
    <div class="metric-console-copy">
      <div class="comparison-label">Starting fact</div>
      <div class="metric-console-title">Speed was real. Trust was not automatic.</div>
    </div>
    <div class="metric-console-copy metric-console-note">
      <div class="comparison-label">Operating rule</div>
      <div class="metric-console-subtitle">Evidence first. Production confidence later.</div>
    </div>
  </div>
  <div class="metric-board">
    <div class="card metric-card">
      <div class="comparison-label">Velocity</div>
      <div class="metric-value mt-3">308</div>
      <div class="metric-label">commits</div>
    </div>
    <div class="card metric-card">
      <div class="comparison-label">Learning window</div>
      <div class="metric-value mt-3">11</div>
      <div class="metric-label">weeks</div>
    </div>
    <div class="card metric-card">
      <div class="comparison-label">Boundary</div>
      <div class="metric-value mt-3">0</div>
      <div class="metric-label">live trades before safety was credible</div>
    </div>
  </div>
</div>

<div class="mt-5 pill">The process became more important than the prompt.</div>

<!--
Purpose:
- Make the starting point concrete without repeating the first slide's cover layout.
- Land that zero live trades is discipline, not embarrassment.

Say:
- "Here is the honest starting point: the repo moved quickly."
- "There were hundreds of commits, weeks of iteration, and a lot of screens and backend systems."
- "But the number I want to emphasize is zero live trades."
- "In this domain, that is the responsible order: first research, risk, decisions, and control; then trust automation."

Office beat:
- "This was the 'somehow I manage' phase, except the lesson was: write it down before Michael touches production."

Transition:
- "The reason that matters is that a wrong answer can look extremely convincing."
-->

---

<div class="kicker">Why this is hard</div>

<h1 class="headline-lg">In some domains, a wrong answer looks convincing</h1>

<div class="mt-5 proof-grid">
  <div class="stage-card evidence-card accent-green">
    <div class="comparison-label">What fools you</div>
    <div>
      <div class="card-title text-2xl mt-2">Looks good</div>
      <div class="evidence-line mt-3">A polished dashboard, profitable backtest, and confident explanation can still tell the wrong story.</div>
    </div>
  </div>
  <div class="stage-card evidence-card accent-red">
    <div class="comparison-label">What can be hiding</div>
    <div>
      <div class="card-title text-2xl mt-2">Still wrong</div>
      <div class="evidence-line mt-3">Stale data, mismatched assumptions, or missing gates can turn confidence into risk.</div>
    </div>
  </div>
  <div class="meme-clean proof-meme">
    <div class="gif-panel proof-gif">
      <img src="./assets/dwight-false.gif" alt="Dwight Schrute saying False GIF" />
    </div>
    <div class="quiet-caption">The model sounded certain. Dwight asked for evidence.</div>
  </div>
</div>

<div class="mt-5 pill">The question is not "does it look right?" It is: <span class="amber">can we prove it?</span></div>

<!--
Purpose:
- Explain why surface polish is dangerous in finance and other high-context domains.
- Turn "looks right" into "prove it."

Say:
- "This is why the problem matters."
- "In a normal app, a bad assumption might break a page."
- "In a trading system, a bad assumption can create a decision that looks reasonable but is wrong."
- "A backtest can look good, a dashboard can look good, and the assistant can explain it beautifully."
- "But the real question is: is it actually true?"

Office beat:
- "Every time something looked too confidently correct, I needed a little Dwight in my head saying: False. Check it."

Transition:
- "So the platform had to be more than a dashboard."
-->

---

<div class="kicker">What I built</div>

<h1 class="headline-lg">A decision system, not a dashboard</h1>

<div class="mt-3 text-2xl muted">Every screen had to answer context, risk, or evidence.</div>

<div class="mt-7 layer-map">
  <div class="stage-card layer-card large accent-structure">
    <div class="layer-number">1</div>
    <div>
      <div class="card-title text-3xl">Human screens</div>
      <div class="screen-stack">
        <div class="screen-chip">Trading Day</div>
        <div class="screen-chip">Discovery</div>
        <div class="screen-chip">Backtest Lab</div>
        <div class="screen-chip">Pipeline</div>
      </div>
    </div>
  </div>
  <div class="stage-card layer-card accent-structure">
    <div class="layer-number">2</div>
    <div>
      <div class="card-title">Rules engine</div>
      <div class="card-text">Strategies, schedules, execution logic</div>
    </div>
  </div>
  <div class="stage-card layer-card accent-structure">
    <div class="layer-number">3</div>
    <div>
      <div class="card-title">Safety layer</div>
      <div class="card-text">Risk limits, approvals, fail-closed behavior</div>
    </div>
  </div>
  <div class="stage-card layer-card accent-structure">
    <div class="layer-number">4</div>
    <div>
      <div class="card-title">Evidence layer</div>
      <div class="card-text">Market state, backtests, decision history</div>
    </div>
  </div>
  <div class="stage-card layer-card accent-structure">
    <div class="layer-number">5</div>
    <div>
      <div class="card-title">Broker boundary</div>
      <div class="card-text">Actual order execution stays behind controls</div>
    </div>
  </div>
</div>

<div class="mt-6 pill">AI helped build parts of this, but it does not get to bypass the checks.</div>

<!--
Purpose:
- Orient the audience to the platform without turning the talk into a product tour.
- Merge the old product walkthrough and context/risk/evidence slides into one system beat.

Say:
- "The product is not just a dashboard. It is a decision system."
- "The human screens are Trading Day, Discovery, Backtest Lab, and Pipeline."
- "Trading Day gives context. Discovery and Backtest Lab handle ideas and evidence. Pipeline and Strategy Studio control what can move forward."
- "Behind that are rules, safety checks, evidence, and a broker boundary."
- "The same three questions show up everywhere: what context are we in, what are we allowed to do, and can we explain later why the system said yes or no?"
- "AI helped build and understand pieces across these layers, but it does not get to skip the checks."

Office beat:
- "Michael can have an idea. The idea still has to pass through a few adults first."

Transition:
- "The product changed, but more importantly, the repo's character changed over time."
-->

---

<div class="kicker">Maturity curve</div>

<h1 class="headline-lg">The git history tells the story</h1>

<div class="mt-5 maturity-timeline">
  <div class="card era-card accent-structure">
    <div class="era-number">01</div>
    <div class="era-title">Fast build</div>
    <div class="era-text">Vertical slices and broad feature commits.</div>
  </div>
  <div class="card era-card accent-structure">
    <div class="era-number">02</div>
    <div class="era-title">Phases</div>
    <div class="era-text">Plans, trackers, smaller task boundaries.</div>
  </div>
  <div class="card era-card accent-structure">
    <div class="era-number">03</div>
    <div class="era-title">Hardening</div>
    <div class="era-text">Audits, silent failure modes, fail-closed paths.</div>
  </div>
  <div class="card era-card accent-structure">
    <div class="era-number">04</div>
    <div class="era-title">Realism</div>
    <div class="era-text">Backtests had to match production assumptions.</div>
  </div>
  <div class="card era-card accent-structure">
    <div class="era-number">05</div>
    <div class="era-title">Governance</div>
    <div class="era-text">Approvals, lineage, and control-plane thinking.</div>
  </div>
</div>

<div class="mt-6 pill">The repo moved from "can we build it?" to "can we trust it?"</div>

<!--
Purpose:
- Add the missing evidence beat from the source brief.
- Show that the talk is about workflow maturity, not just screens.

Say:
- "The git history is useful because it shows the project changing character."
- "Early on, the work was fast vertical building."
- "Then it became more phased and tracked."
- "Then audits and hardening started mattering more than new screens."
- "Then research had to become more realistic, especially around backtest behavior."
- "Finally, the system needed governance: approvals, lineage, and control."

Office beat:
- "It starts with startup energy and ends with regulated adulthood."

Transition:
- "That maturity came from changing how I used AI in a domain I was still learning."
-->

---

<div class="kicker">Domain learning</div>

<h1 class="headline-lg">How I did not let the model fake finance</h1>

<div class="mt-6 guardrail-grid">
  <div class="stage-card guardrail-card guardrail-question accent-blue">
    <div class="guardrail-top"><div class="guardrail-step">01</div><div class="comparison-label">Interrogate</div></div>
    <div class="card-title text-2xl mt-3">Ask from multiple angles</div>
    <div class="card-text mt-3">Use the model to surface assumptions, not to certify them.</div>
  </div>
  <div class="stage-card guardrail-card guardrail-write accent-violet">
    <div class="guardrail-top"><div class="guardrail-step">02</div><div class="comparison-label">Write</div></div>
    <div class="card-title text-2xl mt-3">Turn uncertainty into artifacts</div>
    <div class="card-text mt-3">Docs, specs, and design notes became the working memory.</div>
  </div>
  <div class="stage-card guardrail-card guardrail-package accent-amber">
    <div class="guardrail-top"><div class="guardrail-step">03</div><div class="comparison-label">Package</div></div>
    <div class="card-title text-2xl mt-3">Convert ideas into task packs</div>
    <div class="card-text mt-3">Acceptance criteria made work reviewable before code changed.</div>
  </div>
  <div class="stage-card guardrail-card guardrail-verify accent-green">
    <div class="guardrail-top"><div class="guardrail-step">04</div><div class="comparison-label">Verify</div></div>
    <div class="card-title text-2xl mt-3">Treat first answers as drafts</div>
    <div class="card-text mt-3">Tests, audits, and corrections decided what was true.</div>
  </div>
</div>

<!--
Purpose:
- Explain where AI helped without implying the model became a finance expert.
- Make the "learning loop" more concrete than ask/build/test/review alone.

Say:
- "The model was useful, but not because it magically knew trading."
- "It was useful because it made interrogation faster."
- "I could ask from multiple perspectives, write down the answers, turn them into task packs, and then verify."
- "The conversation was not the source of truth. The artifacts and checks were."
- "A first answer was a draft, not a decision."

Office beat:
- "A lot of this was 'explain it to me like I'm five,' except the five-year-old was me and the topic was market microstructure."

Transition:
- "Once that clicked, the actual coding workflow changed too."
-->

---

<div class="kicker">Workflow maturity</div>

<h1 class="headline-lg">The workflow that actually worked</h1>

<div class="mt-6 workflow-board">
  <div class="stage-card accent-red">
    <div class="comparison-label">Early</div>
    <div class="card-title text-3xl mt-3">Big prompt</div>
    <div class="phase-stack mt-5">
      <div class="phase-item"><div class="step-num">1</div><div><div class="step-title">Ask broadly</div><div class="step-text">The task sounded clear until the diff arrived.</div></div></div>
      <div class="phase-item"><div class="step-num">2</div><div><div class="step-title">Big diff</div><div class="step-text">Too much changed at once.</div></div></div>
      <div class="phase-item"><div class="step-num">3</div><div><div class="step-title">Review painfully</div><div class="step-text">Correctness was hard to see.</div></div></div>
    </div>
  </div>
  <div class="stage-card accent-green">
    <div class="comparison-label">Later</div>
    <div class="card-title text-3xl mt-3">Smaller contract</div>
    <div class="phase-stack mt-5">
      <div class="phase-item"><div class="step-num">1</div><div><div class="step-title">Spec + plan</div><div class="step-text">Write the domain and acceptance criteria first.</div></div></div>
      <div class="phase-item"><div class="step-num">2</div><div><div class="step-title">Isolate + parallelize</div><div class="step-text">Use agents only when boundaries are clear.</div></div></div>
      <div class="phase-item"><div class="step-num">3</div><div><div class="step-title">Test + review</div><div class="step-text">Verify, then merge.</div></div></div>
    </div>
  </div>
</div>

<div class="workflow-divider mt-5">Productivity came from reducing confusion, not giving the model unlimited freedom.</div>

<!--
Purpose:
- Show the workflow maturity curve in a readable before/after shape.
- Make isolation, parallel agents, tests, and review the practical cloud-code lesson.

Say:
- "Early on, I was asking for big things and getting big diffs."
- "That is exciting, but it is hard to review."
- "Later, the workflow became more boring, and that was the point."
- "Write the spec. Make a plan. Isolate the work. Use parallel agents only when the boundaries are clear."
- "Then test, review, and merge."
- "The productivity came from reducing confusion, not from giving the model unlimited freedom."

Office beat:
- "The early workflow was very 'big meeting, no agenda.' Later it became agenda, notes, action items, and fewer Jim camera looks."

Transition:
- "That workflow mattered most when the system forced hard pivots."
-->

---

<div class="kicker">Hard lessons</div>

<h1 class="headline-lg">The places I had to rethink everything</h1>

<div class="mt-6 lesson-grid">
  <div class="stage-card evidence-card accent-red">
    <div class="comparison-label">Backtest realism</div>
    <div>
      <div class="card-title text-2xl">Research had to match live behavior</div>
      <div class="evidence-line mt-4">If sizing assumptions drift, the backtest can tell a confident wrong story.</div>
    </div>
  </div>
  <div class="stage-card evidence-card accent-amber">
    <div class="comparison-label">Fail-closed</div>
    <div>
      <div class="card-title text-2xl">Unclear should mean blocked</div>
      <div class="evidence-line mt-4">Permissive defaults are dangerous when money or decisions are involved.</div>
    </div>
  </div>
  <div class="stage-card evidence-card accent-green">
    <div class="comparison-label">Governance</div>
    <div>
      <div class="card-title text-2xl">Approval needs a paper trail</div>
      <div class="evidence-line mt-4">Lineage, approvals, and decision history made the system explainable later.</div>
    </div>
  </div>
</div>

<div class="mt-6 pill">The hardest work was truthfulness, not feature count.</div>

<!--
Purpose:
- Broaden the old single pivot slide into the three hard lessons from the source brief.
- Keep the backtest/live sizing mismatch as the most concrete example.

Say:
- "The hardest work was not adding more features. It was making the system more truthful."
- "First: backtest realism. The backtest and live system cannot be telling different stories about risk."
- "Second: fail-closed behavior. When the system is unsure, the safer answer should be no."
- "Third: governance and lineage. Once strategies can move toward deployment, you need to know what was approved, by whom, and against what evidence."
- "This is where the domain taught the workflow what mattered."

Office beat:
- "You cannot just declare a backtest realistic. That is not how that works."

Transition:
- "The useful part is that this pattern travels beyond trading."
-->

---

<div class="kicker">What you can reuse</div>

<h1 class="headline-lg">What you can use on Monday</h1>

<div class="mt-6 action-grid">
  <div class="card action-card accent-structure">
    <div class="action-title">Don't invent the domain</div>
    <div class="action-text">Use AI to expose gaps, not to hide them.</div>
  </div>
  <div class="card action-card accent-structure">
    <div class="action-title">Write the risks</div>
    <div class="action-text">Name the things that must not go wrong.</div>
  </div>
  <div class="card action-card accent-structure">
    <div class="action-title">Split the work</div>
    <div class="action-text">Turn broad ideas into task packs and acceptance checks.</div>
  </div>
  <div class="card action-card accent-structure">
    <div class="action-title">Ask for proof</div>
    <div class="action-text">Tests, audits, and logs beat fluent explanations.</div>
  </div>
  <div class="card action-card accent-red">
    <div class="action-title">Keep humans in control</div>
    <div class="action-text">Risky actions need approval, not automation theater.</div>
  </div>
</div>

<div class="reuse-closing-line">Use AI to learn faster, not to skip thinking.</div>

<!--
Purpose:
- Generalize the talk into practical Monday-morning behaviors.
- Merge the old closing slide into one final, usable takeaway slide.

Say:
- "This is the part that applies outside trading."
- "If you are in healthcare, law, finance, product, operations, or engineering, the pattern is the same."
- "Do not let the model invent the domain."
- "Write down what must not go wrong. Split the work. Ask for tests. Keep humans in the loop for risky actions."
- "Use AI to learn faster, not to skip thinking."

Office beat:
- "In Office terms: less 'somehow I manage,' more 'write it down before it becomes a meeting.'"

Transition:
- "Thank you. Now let's do questions."
-->

---
layout: center
class: text-center
---

<div class="full-bleed-meme">
  <div class="gif-panel thank-you-panel">
    <img src="./assets/michael-thank-you.gif" alt="Michael Scott saying thank you GIF" />
  </div>
</div>

<!--
Purpose:
- Give the room one clean, funny closing beat before Q&A.

Say:
- "Thank you."

Transition:
- "Now let's do questions."
-->

---
layout: center
class: text-center
---

<div class="qa-hold">
  <div class="kicker">Q&A</div>
  <div class="qa-title mt-4">Questions?</div>
  <div class="qa-subtitle">Screens, code, workflow, mistakes, or what changed over time.</div>
</div>

<!--
Purpose:
- Hold the room for Q&A with a clean institutional close.

Say:
- "Happy to take questions."
- "Architecture, workflow, the trading-platform build, mistakes, or how the process changed are all fair game."

Office beat:
- If someone asks about letting AI run everything unchecked: "That is where the 'No God, please no' meme belongs."
-->
