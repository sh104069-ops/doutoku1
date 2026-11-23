/* =========================================================
   どうとく「ずるい？ずるくない？」 ― 公平・公正について考えよう
   特別支援学校 中学部（小学部2〜3段階の学習内容）向け
   ・おはなし（SCENES）や ことばの説明（KOTOBA）は
     このファイルの上の方を書きかえると 変更できます。
   ========================================================= */
'use strict';

/* ---------- 1. おはなし（シチュエーション） ----------
   bg   : はいけい  mori / kouen / kyoushitsu / taiikukan / rouka
   parts: 絵の パーツ  e=絵文字 label=なまえ say=ふきだし s=大きさ(xl/s)
   kind : kouhei（こうへい） / kousei（こうせい）
   ------------------------------------------------------ */
const SCENES = [
  {
    id: 'kinomi', icon: '🌰', title: 'きのみとり',
    frames: [
      { bg: 'mori', caption: 'きのみとり きょうそう。さくらさんは せが ひくくて、てが とどかない。',
        parts: [{ e: '🌳', s: 'xl' }, { e: '🧑', label: 'ゆうと', say: 'とれた！' }, { e: '👧', label: 'さくら', say: 'とどかない…', s: 's' }] },
      { bg: 'mori', caption: 'さくらさんは ふみだいに のって、きのみを とった。',
        parts: [{ e: '🌳', s: 'xl' }, { e: '👧', label: 'さくら', say: 'とどいた！' }, { e: '📦', label: 'ふみだい', s: 's' }] }
    ],
    question: 'さくらさんが ふみだいを つかうのは、ずるい？ ずるくない？',
    kind: 'kousei',
    point: 'せの たかさは ひとりひとり ちがうね。ふみだいを つかうと、さくらさんも みんなと おなじように きょうそうに さんか できるよ。「みんなが できるように する くふう」は ずるく ないね。'
  },
  {
    id: 'kakekko', icon: '🏁', title: 'かけっこ',
    frames: [
      { bg: 'taiikukan', caption: 'みんなで かけっこを する。ゆうとさんは くるまいすで はしる。',
        parts: [{ e: '🏃', label: 'あおい' }, { e: '🧑‍🦽', label: 'ゆうと' }, { e: '🏁', s: 's' }] },
      { bg: 'taiikukan', caption: 'せんせいと みんなで はなしあって、ゆうとさんの スタートを すこし まえに した。',
        parts: [{ e: '🏃', label: 'あおい' }, { e: '➡️', s: 's' }, { e: '🧑‍🦽', label: 'ゆうと', say: 'がんばるぞ！' }, { e: '🏁', s: 's' }] }
    ],
    question: 'ゆうとさんの スタートが まえなのは、ずるい？ ずるくない？',
    kind: 'kousei',
    point: 'みんなで はなしあって きめた ルールだね。ゆうとさんも ほかの ひとも、ほんきで しょうぶが できるように する くふうだよ。'
  },
  {
    id: 'suberidai', icon: '🛝', title: 'すべりだいの れつ',
    frames: [
      { bg: 'kouen', caption: 'すべりだいに のる ために、みんなで じゅんばんに ならんで いる。',
        parts: [{ e: '🛝', s: 'xl' }, { e: '👧' }, { e: '🧒' }, { e: '👦' }] },
      { bg: 'kouen', caption: 'あとから きた たけしさんが、いちばん まえに はいった。',
        parts: [{ e: '🛝', s: 'xl' }, { e: '👦', label: 'たけし', say: 'さきに いい？' }, { e: '👧', say: 'えっ！' }, { e: '🧒' }] }
    ],
    question: 'たけしさんが まえに はいったのは、ずるい？ ずるくない？',
    kind: 'kouhei',
    point: 'ならんで まって いる ひとが いるね。じゅんばんを まもらないと、まって いた ひとが そんを して しまうよ。'
  },
  {
    id: 'dessert', icon: '🍮', title: 'きゅうしょくの デザート',
    frames: [
      { bg: 'kyoushitsu', caption: 'きょうの デザートは プリン。ひとり ひとつずつ。',
        parts: [{ e: '🍮', s: 's' }, { e: '🍮', s: 's' }, { e: '🍮', s: 's' }, { e: '🍮', s: 's' }, { e: '🧑' }, { e: '👧' }, { e: '👦' }, { e: '🧒' }] },
      { bg: 'kyoushitsu', caption: 'ひとりが プリンを ふたつ とった。さいごの ひとの ぶんが ない。',
        parts: [{ e: '👦', say: 'ふたつ もらお！' }, { e: '🍮', s: 's' }, { e: '🍮', s: 's' }, { e: '🧒', label: 'さいごの ひと', say: 'ない…' }] }
    ],
    question: 'プリンを ふたつ とったのは、ずるい？ ずるくない？',
    kind: 'kouhei',
    point: '「ひとり ひとつ」は みんなの ための きまり。ひとりだけ おおく とると、ほかの ひとが こまって しまうね。'
  },
  {
    id: 'matoate', icon: '🎯', title: 'まとあて ゲーム',
    frames: [
      { bg: 'taiikukan', caption: 'まとあて ゲーム。ルールは 「ひとり 3かい なげる」。',
        parts: [{ e: '🎯', s: 'xl' }, { e: '🧑', label: 'かかり' }, { e: '👧' }, { e: '👦' }] },
      { bg: 'taiikukan', caption: 'かかりの ひとが、なかよしの ともだちに だけ 「5かい なげて いいよ」と いった。',
        parts: [{ e: '🎯', s: 'xl' }, { e: '🧑', label: 'かかり', say: '5かい いいよ' }, { e: '😄', label: 'なかよし' }, { e: '😟', label: 'ほかの こ' }] }
    ],
    question: 'なかよしの ともだちに だけ 5かいに したのは、ずるい？ ずるくない？',
    kind: 'kousei',
    point: 'ルールを かえる ときは、みんなに おなじように して、みんなで きめるのが だいじ。なかよしだから とくべつに するのは 「えこひいき」だよ。'
  },
  {
    id: 'print', icon: '📄', title: 'おおきい もじの プリント',
    frames: [
      { bg: 'kyoushitsu', caption: 'みんなに プリントが くばられた。はるさんは めが みえにくくて、ちいさい もじが よめない。',
        parts: [{ e: '📄', s: 's' }, { e: '🧑' }, { e: '👧', label: 'はる', say: 'よめない…' }] },
      { bg: 'kyoushitsu', caption: 'せんせいは、はるさんに もじの おおきい プリントを わたした。',
        parts: [{ e: '🧑‍🏫', label: 'せんせい' }, { e: '🔠', label: 'おおきい もじ' }, { e: '👧', label: 'はる', say: 'よめる！' }] }
    ],
    question: 'はるさんだけ おおきい もじの プリントなのは、ずるい？ ずるくない？',
    kind: 'kousei',
    point: 'みんなと おなじ プリントだと、はるさんは べんきょう できないね。ひとりひとりに あわせると、みんなが おなじように べんきょう できるよ。'
  },
  {
    id: 'tablet', icon: '📱', title: 'タブレットの ひとりじめ',
    frames: [
      { bg: 'kyoushitsu', caption: 'やすみじかん。みんなで つかう タブレットが 1だい ある。',
        parts: [{ e: '📱' }, { e: '👦' }, { e: '👧' }, { e: '🧒' }] },
      { bg: 'kyoushitsu', caption: 'ひとりが ずっと タブレットを つかって いて、ほかの ひとが つかえない。',
        parts: [{ e: '👦', say: 'まだ つかう！' }, { e: '📱', s: 's' }, { e: '😢', label: 'つかいたい' }, { e: '😢', label: 'まってる' }] }
    ],
    question: 'タブレットを ひとりじめ するのは、ずるい？ ずるくない？',
    kind: 'kouhei',
    point: 'みんなの ものは、みんなが じゅんばんに つかえるように したいね。「つぎ どうぞ」と ゆずると、みんなが うれしいよ。'
  },
  {
    id: 'elevator', icon: '🛗', title: 'エレベーター',
    frames: [
      { bg: 'rouka', caption: 'みんなは かいだんで 2かいの きょうしつへ いく。',
        parts: [{ e: '🪜', label: 'かいだん' }, { e: '🧑' }, { e: '👧' }, { e: '👦' }] },
      { bg: 'rouka', caption: 'あしを けがした りくさんは、エレベーターで 2かいへ いった。',
        parts: [{ e: '🛗', label: 'エレベーター' }, { e: '🧑', label: 'りく', say: 'あしが いたい' }, { e: '🩹', s: 's' }] }
    ],
    question: 'りくさんが エレベーターを つかうのは、ずるい？ ずるくない？',
    kind: 'kousei',
    point: 'りくさんは かいだんを のぼるのが たいへん。こまって いる ひとに あわせた やりかたは、ずるく ないね。'
  },
  {
    id: 'janken', icon: '✊', title: 'かかりを きめる',
    frames: [
      { bg: 'kyoushitsu', caption: 'でんきを けす かかりは ひとり。やりたい ひとが 3にん いる。',
        parts: [{ e: '💡' }, { e: '🙋', label: 'やりたい' }, { e: '🙋‍♀️', label: 'やりたい' }, { e: '🙋‍♂️', label: 'やりたい' }] },
      { bg: 'kyoushitsu', caption: 'みんなで そうだんして、じゃんけんで きめた。',
        parts: [{ e: '✊' }, { e: '✌️' }, { e: '✋' }, { e: '🙂', say: 'つぎ がんばる！' }] }
    ],
    question: 'じゃんけんで きめたのは、ずるい？ ずるくない？',
    kind: 'kouhei',
    point: 'じゃんけんは だれでも かつ チャンスが おなじ。みんなが なっとく できる きめかただね。'
  }
];

/* ---------- 2. りゆう の せんたくし ---------- */
const REASONS = {
  zurui: [
    { e: '👤', t: 'ひとりだけ とくを して いるから' },
    { e: '🙅', t: 'ルールを まもって いないから' },
    { e: '⏩', t: 'じゅんばんを まもって いないから' },
    { e: '😢', t: 'ほかの ひとが こまるから' }
  ],
  zurukunai: [
    { e: '🤝', t: 'みんなが できるように する ためだから' },
    { e: '🆘', t: 'こまって いる ひとを たすける ためだから' },
    { e: '📏', t: 'ルールを まもって いるから' },
    { e: '😊', t: 'みんなが なっとく して いるから' }
  ]
};

const CHOICES = [
  { key: 'zurui', label: 'ずるい', face: '😠' },
  { key: 'zurukunai', label: 'ずるくない', face: '😊' },
  { key: 'wakaranai', label: 'わからない', face: '🤔' }
];

/* ---------- 3. ことばの せつめい ---------- */
const KOTOBA = {
  kouhei: { ruby: '<ruby>公平<rt>こうへい</rt></ruby>', emoji: '⚖️',
    text: 'だれかだけ とくを したり、そんを したり しないこと。みんなを おなじように たいせつに すること。' },
  kousei: { ruby: '<ruby>公正<rt>こうせい</rt></ruby>', emoji: '🤝',
    text: 'ルールや きめかたが ただしいこと。ひとりひとりに あわせて、みんなが ちゃんと できるように すること。' }
};

/* ---------- 4. まとめ の しつもん ---------- */
const SUMMARY_Q = [
  { id: 'ok', title: '「ずるくない」のは どんな とき？', head: 'わたしは、', tail: 'ときは、ずるく ないと おもいます。',
    opts: [
      { e: '🤝', t: 'みんなが できるように くふうする' },
      { e: '🆘', t: 'こまって いる ひとを たすける' },
      { e: '📏', t: 'みんなで きめた ルールを まもる' },
      { e: '✊', t: 'みんなが なっとく する きめかたを する' }
    ] },
  { id: 'ng', title: '「ずるい」のは どんな とき？', head: 'わたしは、', tail: 'ときは、ずるいと おもいます。',
    opts: [
      { e: '👤', t: 'じぶんだけ とくを する' },
      { e: '⏩', t: 'じゅんばんや ルールを まもらない' },
      { e: '💛', t: 'なかよしの ひとだけ とくべつに する' },
      { e: '😢', t: 'ほかの ひとが こまる ことを する' }
    ] },
  { id: 'next', title: 'これから どうしたい？', head: 'これからは、', tail: 'ように したいです。',
    opts: [
      { e: '👀', t: 'こまって いる ひとに きづける' },
      { e: '🤝', t: 'みんなが できる やりかたを かんがえる' },
      { e: '📏', t: 'ルールや じゅんばんを まもる' },
      { e: '🗣️', t: '「ずるい」と おもったら はなしあえる' }
    ] }
];

const VIDEO_URL = 'https://edu.web.nhk/school/watch/bangumi/?das_id=D0005130184_00000';

/* =========================================================
   ここから下は しくみ（ふつうは かえなくて OK）
   ========================================================= */
const STORE_KEY = 'doutoku_zurui_v1';

const defaultState = () => ({
  name: '',
  level: 1,          // 1: えらぶ  2: えらぶ＋かく
  tts: true,         // よみあげ
  enabled: SCENES.map(s => s.id),
  answers: {},       // { id: { choice, reasons:[], text } }
  summary: { ok: [], ng: [], next: [], text: '' }
});

let state = load();
let view = { screen: 'start', sceneId: null, step: 'q', sumStep: 'learn' };

function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return Object.assign(defaultState(), JSON.parse(raw));
  } catch (e) { /* 保存できない環境では メモリだけで動く */ }
  return defaultState();
}
function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* noop */ }
}

const $app = document.getElementById('app');
const esc = s => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const stripTags = s => String(s).replace(/<rt>.*?<\/rt>/g, '').replace(/<[^>]+>/g, '');
const speakBtn = text => `<button class="speak" data-action="speak" data-say="${esc(stripTags(text))}" aria-label="よみあげ">🔊</button>`;
const sceneById = id => SCENES.find(s => s.id === id);
const activeScenes = () => SCENES.filter(s => state.enabled.includes(s.id));

/* ---------- よみあげ ---------- */
function speak(text) {
  if (!state.tts || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/\s+/g, ''));
    u.lang = 'ja-JP';
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  } catch (e) { /* noop */ }
}

function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1600);
}

function go(screen, extra) {
  if ('speechSynthesis' in window) { try { window.speechSynthesis.cancel(); } catch (e) {} }
  view = Object.assign({}, view, { screen }, extra || {});
  render();
  window.scrollTo(0, 0);
}

/* =========================================================
   がめん
   ========================================================= */
function render() {
  document.getElementById('who').textContent = state.name ? `${state.name} さん` : '';
  const r = { start: renderStart, menu: renderMenu, scene: renderScene, summary: renderSummary, sheet: renderSheet }[view.screen];
  $app.innerHTML = (r || renderStart)();
}

/* ---------- スタート ---------- */
function renderStart() {
  const sceneChecks = SCENES.map((s, i) => `
    <label><input type="checkbox" data-action="toggle-enabled" value="${s.id}" ${state.enabled.includes(s.id) ? 'checked' : ''}>
    ${i + 1}. ${s.icon} ${s.title}</label>`).join('');

  return `
  <section class="card hero">
    <div class="hero-emoji">😠❓😊</div>
    <h2>ずるい？ ずるくない？</h2>
    <p>いろいろな おはなしを みて、「ずるい」か 「ずるくない」か かんがえよう。${speakBtn('いろいろな おはなしを みて、ずるいか ずるくないか かんがえよう。')}</p>
    <p class="big">なまえを かこう</p>
    <input id="name" class="name-input" type="text" value="${esc(state.name)}" placeholder="なまえ" autocomplete="off">
    <div class="btn-row"><button class="btn green" data-action="start">はじめる ▶</button></div>
  </section>

  <section class="card">
    <details class="teacher">
      <summary>⚙️ せんせい よう せってい</summary>
      <div class="setting-row">
        <strong>こたえかた：</strong>
        <label><input type="radio" name="level" data-action="level" value="1" ${state.level === 1 ? 'checked' : ''}> レベル1（えらぶ）</label>
        <label><input type="radio" name="level" data-action="level" value="2" ${state.level === 2 ? 'checked' : ''}> レベル2（えらぶ ＋ かく）</label>
      </div>
      <div class="setting-row">
        <label><input type="checkbox" data-action="tts" ${state.tts ? 'checked' : ''}> 🔊 よみあげ を つかう</label>
      </div>
      <p><strong>つかう おはなし：</strong></p>
      <div class="scene-check">${sceneChecks}</div>
      <div class="btn-row">
        <button class="btn red" data-action="reset">こたえを ぜんぶ けす</button>
      </div>
      <p class="note">こたえは この たんまつの ブラウザに ほぞん されます。つぎの ひとが つかう ときは 「こたえを ぜんぶ けす」を おして ください。</p>
    </details>
  </section>`;
}

/* ---------- メニュー ---------- */
function renderMenu() {
  const list = activeScenes();
  const doneCount = list.filter(s => state.answers[s.id] && state.answers[s.id].choice).length;
  const items = list.map((s, i) => {
    const done = state.answers[s.id] && state.answers[s.id].choice;
    return `
    <button class="menu-item ${done ? 'done' : ''}" data-action="open-scene" data-id="${s.id}">
      <span class="mi-no">${i + 1}</span>
      ${done ? '<span class="stamp">✔</span>' : ''}
      <span class="mi-emoji">${s.icon}</span>
      <span class="mi-title">${s.title}</span>
    </button>`;
  }).join('');

  return `
  <section class="card video-card">
    <div class="v-emoji">📺</div>
    <div class="v-body">
      <div class="big">はじめに どうがを みよう</div>
      <div>NHK for School「ずるい？ずるくない？」</div>
      <div class="note">（インターネットに つながって いる ときに みられます）</div>
    </div>
    <a class="btn sub" href="${VIDEO_URL}" target="_blank" rel="noopener">どうがを ひらく</a>
  </section>

  <section class="card">
    <div class="big">おはなしを えらぼう ${speakBtn('おはなしを えらぼう')}</div>
    <p class="note">おわった おはなし： ${doneCount} ／ ${list.length}</p>
    <div class="menu-grid">${items}</div>
  </section>

  <div class="btn-row">
    <button class="btn orange" data-action="open-summary">📝 まとめ へ</button>
    <button class="btn sub" data-action="open-sheet">📋 ふりかえり シート</button>
  </div>`;
}

/* ---------- おはなし ---------- */
function frameHTML(f, i) {
  const parts = f.parts.map(p => `
    <div class="part ${p.s || ''}">
      ${p.say ? `<span class="say">${esc(p.say)}</span>` : ''}
      <span class="emoji" aria-hidden="true">${p.e}</span>
      ${p.label ? `<span class="plabel">${esc(p.label)}</span>` : ''}
    </div>`).join('');
  return `
  <figure class="frame">
    <span class="frame-no">${i + 1}</span>
    <div class="stage bg-${f.bg}">${parts}</div>
    <figcaption>${esc(f.caption)} ${speakBtn(f.caption)}</figcaption>
  </figure>`;
}

function stepDots(cur) {
  const steps = ['q', 'why', 'point'];
  return `<div class="step-dots">${steps.map(s => `<span class="${s === cur ? 'on' : ''}"></span>`).join('')}</div>`;
}

function myAnswerBadge(choice) {
  const c = CHOICES.find(x => x.key === choice);
  return c ? `<span class="my-answer ${c.key}">${c.face} ${c.label}</span>` : '';
}

function renderScene() {
  const s = sceneById(view.sceneId);
  if (!s) return renderMenu();
  const a = state.answers[s.id] || { choice: null, reasons: [], text: '' };
  const idx = activeScenes().findIndex(x => x.id === s.id);
  const head = `<p class="big">${idx + 1}. ${s.icon} ${s.title}</p>`;

  if (view.step === 'q') {
    const btns = CHOICES.map(c => `
      <button class="choice ${c.key} ${a.choice === c.key ? 'picked' : ''}" data-action="choose" data-key="${c.key}">
        <span class="c-face">${c.face}</span>${c.label}
      </button>`).join('');
    return `
    ${stepDots('q')}${head}
    <div class="frames">${s.frames.map(frameHTML).join('')}</div>
    <div class="question">${esc(s.question)} ${speakBtn(s.question)}</div>
    <div class="choices">${btns}</div>
    <div class="btn-row"><button class="btn sub" data-action="menu">◀ メニュー</button></div>`;
  }

  if (view.step === 'why') {
    let body;
    if (a.choice === 'wakaranai') {
      body = `<div class="card center"><div class="big">🤔 わからなくても だいじょうぶ！</div>
        <p>つぎの ヒントを みて、もう いちど かんがえて みよう。${speakBtn('わからなくても だいじょうぶ。つぎの ヒントを みて、もう いちど かんがえて みよう。')}</p></div>`;
    } else {
      const opts = REASONS[a.choice].map((r, i) => `
        <button class="reason ${a.reasons.includes(r.t) ? 'picked' : ''}" data-action="reason" data-i="${i}">
          <span class="r-emoji">${r.e}</span><span>${r.t}</span>
        </button>`).join('');
      body = `<div class="question">どうして そう おもったの？ ${speakBtn('どうして そう おもったの？')}<div class="note">（いくつ えらんでも いいよ）</div></div>
        <div class="reasons">${opts}</div>`;
    }
    const write = state.level === 2 ? `
      <div class="card" style="margin-top:18px">
        <div class="big">✏️ じぶんの ことばで かこう ${speakBtn('じぶんの ことばで かこう')}</div>
        <textarea class="write" data-action="scene-text" placeholder="〇〇だから、ずるい（ずるくない）と おもいます。">${esc(a.text)}</textarea>
      </div>` : '';
    return `
    ${stepDots('why')}${head}
    <p>きみの こたえ： ${myAnswerBadge(a.choice)}</p>
    ${body}${write}
    <div class="btn-row">
      <button class="btn sub" data-action="step" data-step="q">◀ もどる</button>
      <button class="btn green" data-action="step" data-step="point">つぎへ ▶</button>
    </div>`;
  }

  // point
  const k = KOTOBA[s.kind];
  const list = activeScenes();
  const next = list[idx + 1];
  return `
  ${stepDots('point')}${head}
  <p>きみの こたえ： ${myAnswerBadge(a.choice)}</p>
  ${a.reasons.length ? `<p>りゆう： ${a.reasons.map(esc).join('、')}</p>` : ''}
  <section class="card hint">
    <h3>💡 こんな かんがえも あるよ ${speakBtn(s.point)}</h3>
    <p>${esc(s.point)}</p>
    <p><span class="tag ${s.kind}">${k.emoji} ${k.ruby}</span> に かんけい する おはなし</p>
  </section>
  ${a.choice === 'wakaranai' ? `<p class="center">ヒントを みて、こたえを かえても いいよ。</p>
    <div class="btn-row"><button class="btn sub" data-action="step" data-step="q">🔁 もう いちど えらぶ</button></div>` : ''}
  <div class="btn-row">
    <button class="btn sub" data-action="menu">◀ メニュー</button>
    ${next
      ? `<button class="btn green" data-action="open-scene" data-id="${next.id}">つぎの おはなし ▶</button>`
      : `<button class="btn orange" data-action="open-summary">📝 まとめ へ ▶</button>`}
  </div>`;
}

/* ---------- 「おなじ」と「ひとりひとりに あわせる」の え（SVG） ---------- */
function treeSVG(boxes, title) {
  // boxes: 3にん それぞれの ふみだいの かず
  const W = 320, H = 260, ground = 236;
  const kids = [
    { x: 70, h: 152, color: '#5b8def' },
    { x: 160, h: 124, color: '#f0a43a' },
    { x: 250, h: 96, color: '#e3657a' }
  ];
  const box = 28, nutY = 56;
  let g = `<rect x="0" y="0" width="${W}" height="${ground}" fill="#dff3ff"/>
    <rect x="0" y="${ground}" width="${W}" height="${H - ground}" fill="#b8e09a"/>
    <rect x="148" y="40" width="24" height="${ground - 40}" fill="#9a6b3f" opacity=".35"/>
    <ellipse cx="160" cy="28" rx="170" ry="34" fill="#6cbf5a"/>`;
  kids.forEach((k, i) => {
    g += `<line x1="${k.x}" y1="40" x2="${k.x}" y2="${nutY - 8}" stroke="#7a5230" stroke-width="2"/>
      <circle cx="${k.x}" cy="${nutY}" r="8" fill="#8a5a2b"/>`;
    const n = boxes[i];
    for (let b = 0; b < n; b++) {
      const y = ground - box * (b + 1);
      g += `<rect x="${k.x - 22}" y="${y}" width="44" height="${box}" rx="3" fill="#d8a35d" stroke="#8a5a2b" stroke-width="2"/>`;
    }
    const feet = ground - box * n;
    const top = feet - k.h;
    const reach = top - 22;
    const ok = reach <= nutY + 8;
    g += `<rect x="${k.x - 13}" y="${top + 28}" width="26" height="${k.h - 28}" rx="10" fill="${k.color}"/>
      <circle cx="${k.x}" cy="${top + 14}" r="14" fill="#ffd9b3" stroke="#c99b6b" stroke-width="2"/>
      <line x1="${k.x + 8}" y1="${top + 34}" x2="${k.x + 4}" y2="${reach}" stroke="${k.color}" stroke-width="7" stroke-linecap="round"/>
      <text x="${k.x - 44}" y="${top + 24}" font-size="22">${ok ? '😊' : '😢'}</text>`;
  });
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${title}">${g}</svg>`;
}

/* ---------- まとめ ---------- */
function renderSummary() {
  if (view.sumStep === 'learn') {
    return `
    <div class="step-dots"><span class="on"></span><span></span></div>
    <section class="card">
      <div class="big">📝 まとめ ①　2つの え を くらべよう ${speakBtn('2つの えを くらべよう')}</div>
      <div class="compare">
        <figure>${treeSVG([1, 1, 1], 'みんな おなじ かず の ふみだい')}
          <figcaption>Ａ　みんな おなじ（ふみだい 1こずつ）<br>👉 とどかない ひとが いる ${speakBtn('エー。みんな おなじ。とどかない ひとが いる。')}</figcaption></figure>
        <figure>${treeSVG([0, 1, 2], 'ひとりひとりに あわせた ふみだい')}
          <figcaption>Ｂ　ひとりひとりに あわせる<br>👉 みんな とどく ${speakBtn('ビー。ひとりひとりに あわせる。みんな とどく。')}</figcaption></figure>
      </div>
      <p class="center">「おなじ」に するだけでは、こまる ひとが いる ことも あるね。</p>
    </section>

    <section class="kotoba">
      <div class="card kouhei-card">
        <div class="k-head"><span class="k-emoji">${KOTOBA.kouhei.emoji}</span>${KOTOBA.kouhei.ruby}</div>
        <p>${KOTOBA.kouhei.text} ${speakBtn('こうへい。' + KOTOBA.kouhei.text)}</p>
      </div>
      <div class="card kousei-card">
        <div class="k-head"><span class="k-emoji">${KOTOBA.kousei.emoji}</span>${KOTOBA.kousei.ruby}</div>
        <p>${KOTOBA.kousei.text} ${speakBtn('こうせい。' + KOTOBA.kousei.text)}</p>
      </div>
    </section>

    <div class="btn-row">
      <button class="btn sub" data-action="menu">◀ メニュー</button>
      <button class="btn green" data-action="sum-step" data-step="mine">じぶんの かんがえへ ▶</button>
    </div>`;
  }

  // mine
  const blocks = SUMMARY_Q.map(q => {
    const opts = q.opts.map((o, i) => `
      <button class="reason ${state.summary[q.id].includes(o.t) ? 'picked' : ''}" data-action="sum-pick" data-q="${q.id}" data-i="${i}">
        <span class="r-emoji">${o.e}</span><span>${o.t}</span>
      </button>`).join('');
    return `
    <section class="card">
      <div class="question" style="margin-top:0">${q.title} ${speakBtn(q.title)}</div>
      <div class="reasons">${opts}</div>
    </section>`;
  }).join('');

  const write = state.level === 2 ? `
    <section class="card">
      <div class="big">✏️ 「${KOTOBA.kouhei.ruby}」「${KOTOBA.kousei.ruby}」に ついて、じぶんの かんがえを かこう</div>
      <textarea class="write" data-action="sum-text" placeholder="わたしは、〜と かんがえました。">${esc(state.summary.text)}</textarea>
    </section>` : '';

  return `
  <div class="step-dots"><span></span><span class="on"></span></div>
  <p class="big">📝 まとめ ②　じぶんの かんがえ ${speakBtn('じぶんの かんがえを えらぼう')}</p>
  ${blocks}
  <section class="card">
    <div class="big">🗒️ きみの かんがえ ${speakBtn(stripTags(summarySentences().join('')) || 'まだ えらんで いないよ')}</div>
    <div class="sentence" id="sentence">${summarySentencesHTML()}</div>
  </section>
  ${write}
  <div class="btn-row">
    <button class="btn sub" data-action="sum-step" data-step="learn">◀ もどる</button>
    <button class="btn orange" data-action="open-sheet">📋 ふりかえり シートへ ▶</button>
  </div>`;
}

function summarySentences() {
  return SUMMARY_Q.filter(q => state.summary[q.id].length)
    .map(q => `${q.head}${state.summary[q.id].join('、')} ${q.tail}`);
}
function summarySentencesHTML() {
  const s = summarySentences();
  return s.length ? s.map(x => `<p style="margin:4px 0">${esc(x)}</p>`).join('') : '<span class="note">うえの カードを えらぶと、ここに ぶんが できるよ。</span>';
}

/* ---------- ふりかえりシート ---------- */
function renderSheet() {
  const d = new Date();
  const date = `${d.getFullYear()}ねん ${d.getMonth() + 1}がつ ${d.getDate()}にち`;
  const rows = activeScenes().map((s, i) => {
    const a = state.answers[s.id] || {};
    return `<tr>
      <td class="t-emoji">${s.icon}</td>
      <td>${i + 1}. ${esc(s.title)}</td>
      <td>${a.choice ? myAnswerBadge(a.choice) : '<span class="note">まだ</span>'}</td>
      <td>${(a.reasons || []).map(esc).join('<br>')}${a.text ? `<br>✏️ ${esc(a.text)}` : ''}</td>
    </tr>`;
  }).join('');

  return `
  <section class="card">
    <div class="sheet-head">
      <h2 style="margin:0">📋 ふりかえり シート「ずるい？ ずるくない？」</h2>
      <div>${date}　なまえ：<strong>${esc(state.name) || '　　　　　'}</strong></div>
    </div>
  </section>
  <section class="card">
    <table class="sheet-table">
      <thead><tr><th></th><th>おはなし</th><th>こたえ</th><th>りゆう・かいた こと</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </section>
  <section class="card">
    <div class="big">🗒️ わたしの かんがえ（${KOTOBA.kouhei.ruby}・${KOTOBA.kousei.ruby}）</div>
    <div class="sentence">${summarySentencesHTML()}
      ${state.summary.text ? `<p style="margin:8px 0 0">✏️ ${esc(state.summary.text)}</p>` : ''}</div>
  </section>
  <div class="btn-row">
    <button class="btn sub" data-action="menu">◀ メニュー</button>
    <button class="btn" data-action="print">🖨️ いんさつ</button>
  </div>`;
}

/* =========================================================
   そうさ
   ========================================================= */
document.addEventListener('click', e => {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const act = el.dataset.action;
  const s = sceneById(view.sceneId);

  switch (act) {
    case 'speak': speak(el.dataset.say); break;

    case 'start': {
      const n = document.getElementById('name');
      state.name = n ? n.value.trim() : state.name;
      save(); go('menu'); break;
    }
    case 'menu': go(view.screen === 'start' && !state.name ? 'start' : 'menu'); break;

    case 'open-scene': go('scene', { sceneId: el.dataset.id, step: 'q' }); break;
    case 'open-summary': go('summary', { sumStep: 'learn' }); break;
    case 'open-sheet': go('sheet'); break;

    case 'choose': {
      const prev = state.answers[s.id] || { reasons: [], text: '' };
      const key = el.dataset.key;
      state.answers[s.id] = {
        choice: key,
        reasons: prev.choice === key ? prev.reasons : [],
        text: prev.text || ''
      };
      save();
      const c = CHOICES.find(x => x.key === key);
      speak(c.label);
      go('scene', { step: 'why' });
      break;
    }
    case 'reason': {
      const a = state.answers[s.id];
      const r = REASONS[a.choice][+el.dataset.i].t;
      a.reasons = a.reasons.includes(r) ? a.reasons.filter(x => x !== r) : a.reasons.concat(r);
      save(); el.classList.toggle('picked');
      if (el.classList.contains('picked')) speak(r);
      break;
    }
    case 'step':
      if (view.step === 'q' && el.dataset.step === 'point') break;
      go('scene', { step: el.dataset.step });
      if (el.dataset.step === 'point') {
        const done = activeScenes().filter(x => state.answers[x.id] && state.answers[x.id].choice).length;
        toast(`よく かんがえたね！ ✔ ${done}こ`);
      }
      break;

    case 'sum-step': go('summary', { sumStep: el.dataset.step }); break;
    case 'sum-pick': {
      const q = SUMMARY_Q.find(x => x.id === el.dataset.q);
      const t = q.opts[+el.dataset.i].t;
      const arr = state.summary[q.id];
      state.summary[q.id] = arr.includes(t) ? arr.filter(x => x !== t) : arr.concat(t);
      save(); el.classList.toggle('picked');
      if (el.classList.contains('picked')) speak(t);
      const box = document.getElementById('sentence');
      if (box) box.innerHTML = summarySentencesHTML();
      break;
    }

    case 'print': window.print(); break;

    case 'reset':
      if (confirm('こたえを ぜんぶ けしますか？（なまえも けします）')) {
        const keep = { level: state.level, tts: state.tts, enabled: state.enabled };
        state = Object.assign(defaultState(), keep);
        save(); go('start'); toast('けしました');
      }
      break;
  }
});

document.addEventListener('change', e => {
  const el = e.target;
  const act = el.dataset.action;
  if (act === 'level') { state.level = +el.value; save(); }
  if (act === 'tts') { state.tts = el.checked; save(); }
  if (act === 'toggle-enabled') {
    const id = el.value;
    state.enabled = el.checked
      ? SCENES.map(s => s.id).filter(x => x === id || state.enabled.includes(x))
      : state.enabled.filter(x => x !== id);
    if (!state.enabled.length) { state.enabled = [id]; el.checked = true; alert('1つ いじょう えらんで ください'); }
    save();
  }
});

document.addEventListener('input', e => {
  const el = e.target;
  if (el.dataset.action === 'scene-text') {
    const s = sceneById(view.sceneId);
    if (s && state.answers[s.id]) { state.answers[s.id].text = el.value; save(); }
  }
  if (el.dataset.action === 'sum-text') { state.summary.text = el.value; save(); }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.id === 'name') {
    e.preventDefault();
    state.name = e.target.value.trim(); save(); go('menu');
  }
});

/* はじめ */
view.screen = state.name ? 'menu' : 'start';
render();
