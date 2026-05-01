# Gandora Design System

> **Editorial Orgânico** — A transformação sensorial guiada pelo conhecimento e pelo aconchego.

Gandora é uma marca de **velas e produtos artesanais** criada por Gabriela Diniz. Não vende velas — vende o cenário perfeito para a introspecção: o equilíbrio entre a estabilidade do lar (Âncora) e a descoberta intelectual (Pandora). É a luz que ilumina a jornada literária.

- **Categoria:** Lifestyle / Decoração Sensorial / Artesanato Premium
- **Público:** Leitores ávidos, entusiastas de rituais de bem-estar, colecionadores de livros, praticantes do *slow living*.
- **Personalidade:** Intelectual, acolhedora, artesanal, sofisticada.
- **Referências visuais:** Bibliotecas antigas, a luz de uma chama em uma escrivaninha de madeira, o cheiro de papel misturado a aromas naturais, a elegância do silêncio.
- **Local:** Campinas · SP

---

## Sources used to build this system

- **Identidade Visual Gandora handoff** — original brand book + applications. Mounted at `Identidade Visual Gandora-handoff/identidade-visual-gandora/project/`. Copies preserved in `reference/`.
- **Logo uploads** — full logo collection in three palette themes (carvão, terracota, sálvia) plus a dark-background variant, in horizontal/stacked/collection/initial-only/sem-tema permutations. All in `assets/`.
- **Brief from the user** — Diretriz Manual v3.0: paleta de 5 cores terrosos, tipografia tripartite (Cinzel Decorative + Montserrat + Great Vibes), monograma chama-folha-página.

---

## Index — files in this system

| File | Purpose |
|---|---|
| `README.md` | This file. Brand context, content + visual fundamentals, iconography. |
| `SKILL.md` | Front-matter for use as an Agent Skill. |
| `colors_and_type.css` | All design tokens — color, type, spacing, radii, shadow, motion. Single source of truth. |
| `assets/` | Logos (all themes) + brand imagery. Use these directly — never redraw. |
| `preview/*.html` | Specimen cards for the Design System tab. |
| `ui_kits/site/` | Brand site / e-commerce UI kit (clickable HTML). |
| `reference/` | Original brand book HTML/CSS/JSX kept for cross-reference. |

---

## CONTENT FUNDAMENTALS

**Language.** Brazilian Portuguese (pt-BR). Always. English only when explicitly requested for international comms.

**Voice.** Editorial, contemplative, never urgent. The brand whispers. Sentences are written to be read at the pace of someone with a book in their lap. Short sentences carry weight; long sentences carry imagery. Never exclamation marks. Never call-to-action verbs in caps. Never "compre agora", "limited time", "imperdível".

**Person.** Mostly **third-person impersonal** ("a Gandora vive...", "cada vela carrega..."). When addressing the reader, use **você** in a soft tone, never "compre você", more like "para você descobrir...". Gabriela assina em primeira pessoa apenas em mensagens manuscritas (Great Vibes), nunca no corpo.

**Casing.**
- Títulos serifados em **Cinzel** geralmente em CAIXA ALTA com tracking generoso (`0.04–0.08em`) — herdam a postura das inscrições romanas.
- Microcopy técnico (`220g · 40h queima`) em **Montserrat** com `·` como separador, em caixa alta para eyebrows e caixa baixa para corpo.
- Assinatura em **Great Vibes** sempre em caixa baixa, primeira letra maiúscula apenas onde gramaticalmente necessário ("por Gabriela Diniz").

**Pontuação característica.**
- **Travessão longo (—)** para incisos editoriais. Generoso.
- **Ponto-mediano (·)** como separador entre dados técnicos e em eyebrows.
- **& comercial** preferido a "e" em títulos (`Luz & Tempo`, `Cedro & Tabaco`) — sabor editorial.
- Algarismos romanos em datas oficiais (`MMXXVI`).

**Vibe.** *Slow living*, ritual, pausa, biblioteca, escrivaninha, jardim monástico, luz baixa, cera derretida, papel envelhecido. Nunca: "produtividade", "hack", "boost", "transformação 360°", "experiência premium" (vazio).

**Emoji.** **Não.** Nem ícones florais 🌿, nem velas 🕯️. A marca usa o monograma quando precisa de um signo. Unicode chars como `·` `—` `&` `№` `§` são bem-vindos.

**Examples (extraídos do brand book):**
- *"Acender uma vela é prolongar a tarde — e dar à página o tempo que ela merece."*
- *"Cedro vermelho do Líbano, tabaco curado em barrica de carvalho e o aroma quase imperceptível de papel envelhecido. Para tardes longas, poltronas fundas e capítulos sem pressa."*
- *"A Gandora vive na encruzilhada entre dois rituais silenciosos: acender uma chama e virar uma página."*
- Eyebrow: `Velas Artesanais · Nº 04`
- Caption técnica: `220g · 40h queima · cera vegetal`

---

## VISUAL FOUNDATIONS

**Atmosfera geral.** *Editorial Orgânico.* Pense numa biblioteca antiga ao fim de tarde — luz baixa, sombras longas, papel respirando. Recusa explícita ao minimalismo industrial frio e à estética "startup genérica". O sistema favorece **silêncio visual generoso**, espaço em branco como respiração, hierarquia clara guiada por tipografia (não por cor).

**Cores.** Cinco cores terrosas, todas com nome interno:
- `Cera Natural #F9F6F0` — fundo principal. Papel envelhecido. ~85% das superfícies.
- `Carvão Orgânico #333333` — texto e contraste. **Nunca preto puro** (#000) — perde calor.
- `Terracota Suave #C08261` — acento primário. Calor da cerâmica. Usar em pequenas porções: links, kickers, capitulares.
- `Verde Sálvia #8A9A5B` — segundo acento. Botânico, monástico. Para coleções herbais e categorias.
- `Kraft #D9C7A0` — cor de embalagem (sacolas, rótulos kraft).
- Escalas 200/400/600/800/900 disponíveis para cada acento, mas a marca vive nos tons centrais. Tints só para UI digital.

**Tipografia.** Sistema tripartite — três vozes que dialogam:
- **Cinzel Decorative** — display, títulos, nomes de coleção. Inscrição romana. Tracking sempre generoso (0.04–0.08em).
- **Montserrat** — corpo, rótulos, dados técnicos. Pesos 300 (preferido) e 400. Reservar 500 para destaque mínimo.
- **Great Vibes** — assinatura manuscrita, citações líricas, "por Gabriela Diniz". Nunca em corpo, nunca em caixa alta, nunca abaixo de 18px.
- **JetBrains Mono** — eyebrows, microcopy técnica, metadados (`Nº 04`, `MMXXVI`).
- *Substituições*: todas via Google Fonts. Se precisar local, use Cinzel Decorative + Montserrat + Great Vibes — todas livres.

**Backgrounds.** Sempre Cera Natural por padrão. Para variar: Carvão (modo dark / hero noturno), Terracota / Sálvia em blocos editoriais ou full-bleed para coleções, Kraft texturizado em packaging. **Nunca gradientes UI azuis-roxos.** Gradientes radiais quentes (chama) são permitidos como `gd-candle-glow`. Texturas: papel kraft (procedural, no CSS), grão de papel sutil via `gd-paper-noise` (radial-gradient noise overlay).

**Imagery.** Direção: *Luz suave, sombras longas.* Fotografia natural ao final da tarde, palette warm (âmbar, terra), nunca flash duro, nunca b&w, nunca filtros saturados. Composição editorial — espaço respirando ao redor. Velas, livros, cerâmica, plantas botânicas, mãos. Quando faltar foto real, usar bloco de cor sólido (Terracota ou Sálvia) com o monograma em negativo.

**Espaçamento.** Base 8pt. Generoso entre seções (`--space-9`/`--space-10`). Padding interno de cards `--space-6`/`--space-7`. **Sempre prefira mais respiro do que mais conteúdo.**

**Cantos.** **Quase sempre sharp (radius 0)** — postura editorial. `--radius-1: 2px` apenas em inputs e chips. `--radius-pill` somente em micro-elementos opcionais (badges de coleção). Nunca rounded corners genéricos de 8/12/16px estilo SaaS.

**Sombras.** Longas, baixas, quentes. Sempre com viés âmbar (`rgba(51,33,18,...)`) — nunca cinzas neutros frios. Cinco níveis: `rest`, `low`, `mid`, `deep`, `candle` (glow âmbar).

**Bordas.** `1px solid rgba(51,51,51,0.14)` é o tom padrão. Tracejadas para divisões internas de specs. Sem doubles, sem dotted.

**Cards.** Em geral **sem rounded corners**, com `1px solid var(--rule)` e fundo `--gd-cera-50`. Sombra apenas se for um item flutuante. Aspect-ratio definido (4/3, 1/1, 5/3). Header bar fina com label em mono uppercase.

**Animação.** Mínima e *breath-like*. Easing `cubic-bezier(0.36, 0.07, 0.19, 0.97)` (ease-candle). Durações 180–400ms para UI; 6s para `breathe` (chama). **Sem bounces, sem spring, sem parallax agressivo.** Fades suaves, escalas pequenas (`scale(1.05)`), translates pequenos (`translateY(-4px)` em hover).

**Hover states.** Texto: muda para `--gd-terracota` (link mood). Cards: `translateY(-4px)` + sombra um pouco mais profunda. Imagens: opacidade 0.85 → 1 ou crossfade suave. Nunca color-shift completo, nunca underline novo (já tem).

**Press states.** Encolher levemente (`scale(0.98)`) e escurecer 1 nível na escala da cor.

**Transparência & blur.** Raros. `rgba(51,51,51,0.14)` em rules é o uso típico. Glassmorphism *jamais.* Backdrop-filter blur somente em overlays modais sobre imagem (raro).

**Layout rules.** Grid editorial. Sidebar fixa quando aplicável (280px). Section header com `index` mono à esquerda + bloco de título serifado à direita. Footer minimalista em três colunas. **Largura de leitura sempre limitada a `--measure` (64ch).**

**Vibe da imagery.** Quente, granulada, baixa luz, palette restrita ao próprio sistema. Quando representar produtos: vela acesa em primeiro plano, livro/escrivaninha em segundo, fundo escurecido. Quando representar a marca: monograma sobre kraft, lacre de cera, mão segurando.

---

## ICONOGRAPHY

**Filosofia.** A marca evita iconografia decorativa. O **monograma chama-folha** (logo-mark) é o único ícone simbólico verdadeiro do sistema — usado em lacres de cera, favicons, marcas d'água, carimbos. É o *signo* da marca, não decoração.

**Approach.**
- **Logos como ícones.** Para qualquer aplicação até 32px, usar `logo-mark.png` (símbolo isolado) ou `logo-monogram.png` (G monograma).
- **Sem icon font built-in.** Quando absolutamente necessário (UI de e-commerce: carrinho, busca, menu), usar **Lucide** (https://lucide.dev) com `stroke-width="1.25"` (mais fino que o default 2 — combina com o ar editorial). **Flag: substituição feita por mim, não há set proprietário no brand book.** Cor sempre `--fg` ou `--fg-muted`, nunca cor de acento sólido.
- **SVGs vs PNGs.** Logos chegaram como PNG transparentes — usar como `<img>`. Lucide via CDN como SVG inline ou via `<i data-lucide="...">`.
- **Emoji.** Proibido em produto. Permitido em comms internas casuais apenas.
- **Unicode como ornamento.** Usar `·` `—` `&` `№` `§` `✦` (estrela mínima editorial) `❦` (ornamento de fim de capítulo, raro).
- **Numerais.** Algarismos romanos em datas oficiais (`MMXXVI`); arábicos com `Nº` para coleções (`Nº 04`).

**Available logos in `assets/`:**
- `logo-full.png` — versão principal vertical (símbolo + GANDORA + por Gabriela Diniz). Use 90% dos casos.
- `logo-mark.png` — apenas o símbolo (chama-folha).
- `logo-monogram.png` — G monograma (lacres, carimbos).
- `logo-carvao-horizontal.png` — wordmark horizontal carvão.
- `logo-horizontal-fundo-escuro.png` — wordmark horizontal para fundos escuros.
- `logo-terracota-nome.png` / `logo-verde-salvia-nome.png` / `logo-fundo-escuro-nome.png` — variações cromáticas do logo principal.
- `logo-terracota-colecao.png` / `logo-verde-salvia-colecao.png` / `logo-carvao-colecao.png` / `logo-fundo-escuro-colecao.png` — versões com tagline de coleção.
- `logo-{cor}-sem-tema.png` — sem assinatura manuscrita.
- `logo-inicial-carvao.png` — só a letra G inicial.
- `imagem-logo-terracota.png` / `imagem-logo-salvia.png` — apenas o símbolo nas cores.

---

## CAVEATS & SUBSTITUIÇÕES

- **Fontes:** todas via Google Fonts CDN. Nenhum arquivo `.ttf` no projeto. Se quiser self-host, baixar de fonts.google.com (todas livres).
- **Iconografia funcional:** Lucide foi escolhido como substituto para UI (carrinho, busca, menu). O brand book não define um icon set.
- **Foto real:** sem assets fotográficos — UI kit usa blocos cromáticos com monograma em vez de placeholders genéricos.
