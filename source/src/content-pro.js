/* ===== LESSONS: professional speech ===== */
const LESSONS_PRO = [
{
  id: "vocabulary", group: "profissional", deck: "vocab", mins: 7,
  title: "What Works Cities em português", en: "WWC & public-management vocabulary",
  blurb: "The 8 practice areas, the process, the levels and the pitch.",
  core: [
    "<b>Certificação What Works Cities</b>: free, led by <b>Results for America</b> with <b>Bloomberg Philanthropies</b>, since 2017; open to cities of <b>30,000+</b> residents in the US, Canada and Latin America.",
    "It measures how well a city uses <b>dados e evidências</b> to <i>embasar políticas públicas, alocar recursos, aprimorar serviços, avaliar programas e envolver a população</i>.",
    "<b>43 critérios</b> in <b>8 áreas</b>; levels <b>Prata, Ouro, Platina</b>; valid for <b>três anos</b>.",
    "Process words: <b>autoavaliação</b>, <b>avaliadores</b>, <b>visita técnica</b>, <b>plano de ação</b>, <b>comunidade de certificação</b>."
  ],
  body: [
    { h: "The 8 practice areas", table: { head: ["English", "em português", ""], rows: [
      ["Leadership & Capacity", "Liderança e capacidade", ""],
      ["Data Management", "Gestão de dados", ""],
      ["Performance & Analytics", "Desempenho e análise de dados", ""],
      ["Data-Driven Budgeting & Finance", "Orçamento e finanças orientados por dados", ""],
      ["Results-Driven Contracting", "Contratações orientadas a resultados", ""],
      ["Evaluations", "Avaliações (de políticas e programas)", ""],
      ["Open Data", "Dados abertos", ""],
      ["Stakeholder Engagement", "Engajamento da população / das partes interessadas", ""]
    ] } },
    { h: "The process, step by step", list: [
      "Inscrição e (opcional) <b>Data Snapshot</b>",
      "<b>Autoavaliação</b> on-line, com documentos de apoio",
      "<b>Análise dos avaliadores</b> e pesquisa própria da equipe WWC",
      "<b>Reunião de validação</b> (review call)",
      "<b>Visita técnica</b> às cidades com melhor desempenho",
      "<b>Pontuação final</b> e nível: <b>Prata</b> (22+ critérios), <b>Ouro</b> (29+), <b>Platina</b> (37+)"
    ] },
    { h: "Brazilian context you can cite", list: [
      "Brazilian cities already certified include <b>Fortaleza, Recife, Rio de Janeiro, Niterói, Porto Alegre, Belo Horizonte, Mogi das Cruzes</b> and <b>Caruaru</b>.",
      "The <b>EC 109/2021</b> added to art. 37 of the Constitution that public bodies must carry out the <i>avaliação das políticas públicas</i> and publish the results.",
      "Legal anchors officials will raise: <b>LAI</b> (Lei de Acesso à Informação, 12.527/2011), <b>LGPD</b> (13.709/2018), <b>Nova Lei de Licitações</b> (14.133/2021), <b>Lei do Governo Digital</b> (14.129/2021).",
      "Budget cycle: <b>PPA</b> (Plano Plurianual), <b>LDO</b> (Lei de Diretrizes Orçamentárias), <b>LOA</b> (Lei Orçamentária Anual)."
    ] },
    { h: "Glossary", table: { head: ["English", "português", ""], rows: [
      ["evidence-based management", "gestão baseada em evidências", ""],
      ["data-driven governance", "governança orientada por dados", ""],
      ["data governance", "governança de dados", ""],
      ["data inventory", "inventário de dados", ""],
      ["open data portal", "portal de dados abertos", ""],
      ["performance management", "gestão do desempenho", ""],
      ["key performance indicators", "indicadores-chave de desempenho", ""],
      ["targets", "metas", ""],
      ["dashboard", "painel de indicadores", ""],
      ["baseline", "linha de base", ""],
      ["impact evaluation", "avaliação de impacto", ""],
      ["randomized trial", "ensaio randomizado / experimento aleatorizado", ""],
      ["procurement", "compras públicas / licitações", ""],
      ["call for proposals / RFP", "edital", ""],
      ["agreement (between agencies)", "convênio / acordo de cooperação técnica", ""],
      ["accountability", "prestação de contas", ""],
      ["service delivery", "prestação de serviços", ""],
      ["capacity building", "capacitação", ""],
      ["pilot project", "projeto-piloto", ""],
      ["to scale up", "ampliar / escalar", ""],
      ["outputs / outcomes", "entregas / resultados", ""],
      ["feedback (formal)", "devolutiva", ""],
      ["meeting agenda (items)", "pauta", ""],
      ["an appointment with the mayor", "uma agenda com o prefeito", ""],
      ["minutes", "ata", ""],
      ["chief of staff", "chefe de gabinete", ""],
      ["department / department head", "secretaria / secretário(a)", ""],
      ["comptroller's office", "Controladoria-Geral do Município", ""],
      ["court of accounts", "Tribunal de Contas", ""],
      ["administration (current term)", "a gestão / o mandato", ""]
    ] } },
    { h: "Your 30-second pitch", ex: [
      ["A Certificação What Works Cities reconhece cidades que usam dados e evidências para tomar decisões melhores.", "The WWC Certification recognizes cities that use data and evidence to make better decisions."],
      ["Ela é gratuita e é conduzida pela Results for America, com apoio da Bloomberg Philanthropies.", "It's free and run by Results for America, with support from Bloomberg Philanthropies."],
      ["A cidade faz uma autoavaliação com base em quarenta e três critérios, distribuídos em oito áreas.", "The city does a self-assessment based on 43 criteria across eight areas."],
      ["Mesmo que a cidade não seja certificada de primeira, ela sai do processo com um diagnóstico e um plano de ação.", "Even if the city isn't certified the first time, it comes out with a diagnosis and an action plan."],
      ["Quando a cidade for certificada, ela passa a integrar uma rede de cidades das Américas que trocam boas práticas.", "Once certified, the city joins a network of cities across the Americas that share best practices."]
    ] }
  ],
  drills: [
    { t: "mc", q: "\"Self-assessment\" in Brazilian WWC materials:", o: ["autoavaliação", "autoevaluación", "auto-avaliação"], a: 0, x: "<b>autoavaliação</b>, one word, no hyphen." },
    { t: "mc", q: "\"Meeting agenda\" (list of topics) →", o: ["a agenda", "a pauta"], a: 1, x: "<b>Pauta</b> = agenda items. <i>Agenda</i> = schedule/appointment (<i>conseguir uma agenda com a prefeita</i>)." },
    { t: "fill", q: "Open data portal → portal de ___ abertos", a: ["dados"], x: "<b>portal de dados abertos</b>." },
    { t: "mc", q: "The certification levels are…", o: ["Plata, Oro, Platino", "Prata, Ouro, Platina", "Bronze, Prata, Ouro"], a: 1, x: "<b>Prata, Ouro, Platina</b>." },
    { t: "say", q: "The certification is free and is led by Results for America.", a: ["A certificação é gratuita e é conduzida pela Results for America.", "A certificação é gratuita e liderada pela Results for America.", "A certificação é gratuita e é coordenada pela Results for America."], x: "<b>gratuita</b>; <b>conduzida / liderada pela</b> Results for America (feminine: <i>a organização</i>)." },
    { t: "say", q: "We use data and evidence to make better decisions.", a: ["Usamos dados e evidências para tomar decisões melhores.", "Nós usamos dados e evidências para tomar melhores decisões."], x: "<b>tomar decisões</b> (not <i>fazer decisões</i>)." },
    { t: "shadow", q: "A Certificação What Works Cities reconhece cidades que usam dados e evidências para tomar decisões melhores.", x: "Listen, then say it. Nasal <b>-ões</b>, and <b>-dades</b> sounds like 'dadjis'." },
    { t: "shadow", q: "Mesmo que a cidade não seja certificada de primeira, ela sai do processo com um diagnóstico e um plano de ação.", x: "<b>Mesmo que + seja</b>. Nasalize <b>não</b> and <b>ação</b>." },
    { t: "mc", q: "\"Impact evaluation\" →", o: ["evaluación de impacto", "avaliação de impacto", "avaliação do impato"], a: 1, x: "<b>avaliação de impacto</b>. Note the <b>v</b>: Brazilians separate v and b." },
    { t: "mc", q: "\"Accountability\" in Brazilian public administration →", o: ["rendição de contas", "prestação de contas", "rendimento de contas"], a: 1, x: "<b>Prestação de contas</b> (Brazilians also say <i>accountability</i>)." }
  ]
},
{
  id: "register", group: "profissional", deck: "grammar", mins: 5,
  title: "Registro profissional", en: "Professional register & meeting phrases",
  blurb: "Open, frame, disagree politely, close with next steps.",
  core: [
    "Open with thanks: <b>Muito obrigado(a) pela oportunidade.</b> <b>Agradeço a disponibilidade do senhor / da senhora.</b>",
    "Frame and connect: <b>Em linhas gerais…</b>, <b>Vale ressaltar que…</b>, <b>Nesse sentido…</b>, <b>No que diz respeito a…</b>, <b>Ou seja…</b>",
    "Disagree softly: <b>Entendo a preocupação e, ao mesmo tempo…</b>, <b>Se me permite uma observação…</b>, <b>Faz todo o sentido; eu só acrescentaria que…</b>",
    "Close: <b>Como próximo passo, proponho…</b>, <b>Fico à disposição.</b>, <b>Vou encaminhar o material por e-mail.</b>"
  ],
  body: [
    { h: "Opening", list: [
      "Bom dia a todos. Muito obrigado(a) pela oportunidade de estar aqui.",
      "Agradeço a disponibilidade da senhora em nos receber.",
      "O objetivo desta conversa é apresentar a certificação e ouvir as prioridades da gestão."
    ] },
    { h: "Framing & connecting", list: [
      "<b>Em linhas gerais</b>, a certificação avalia oito áreas.",
      "<b>Vale ressaltar que</b> o processo é gratuito.",
      "<b>Nesse sentido</b>, a gestão de dados é o ponto de partida.",
      "<b>No que diz respeito à</b> LGPD, os dados pessoais não são publicados.",
      "<b>Por um lado</b>… <b>por outro</b>…",
      "<b>Ou seja</b>, a cidade sai com um plano de ação."
    ] },
    { h: "Pushback without friction", list: [
      "<b>Entendo perfeitamente a preocupação</b> e, ao mesmo tempo, os dados mostram que…",
      "<b>Com todo o respeito</b>, eu enxergo de outra forma.",
      "<b>Se me permite uma observação</b>…",
      "<b>Talvez valha a pena</b> considerar…",
      "<b>Faz todo o sentido.</b> Eu só acrescentaria que…"
    ] },
    { h: "Checking & closing", list: [
      "<b>Faz sentido?</b> / <b>Ficou claro?</b>",
      "O senhor <b>gostaria que eu detalhasse</b> algum ponto?",
      "<b>Como próximo passo</b>, proponho uma conversa com a equipe técnica.",
      "<b>Podemos combinar</b> uma data para a semana que vem?",
      "<b>Fico à disposição.</b> Vou encaminhar a apresentação por e-mail."
    ] },
    { h: "Natural Brazilian fillers", p: "<b>Então…</b>, <b>Olha…</b>, <b>Na verdade…</b>, <b>De fato…</b>, <b>Com certeza.</b>, <b>Pois é.</b>, <b>…, né?</b> Keep <i>tipo</i>, <i>beleza</i> and <i>cara</i> out of meetings with officials." },
    { trap: "Spanish fillers (<i>este…, bueno…, o sea…, vale</i>) and Spanish courtesy formulas (<i>con mucho gusto</i>, <i>a sus órdenes</i>) sound off. Brazilian equivalents: <b>com prazer</b>, <b>fico à disposição</b>, <b>às ordens</b> (informal)." }
  ],
  drills: [
    { t: "mc", q: "Most natural way to close a meeting with a secretary:", o: ["Vale, nos vemos.", "Fico à disposição. Vou encaminhar o material por e-mail.", "Beleza, valeu!"], a: 1, x: "<b>Fico à disposição</b> is the standard professional close." },
    { t: "mc", q: "Softening a disagreement with the mayor:", o: ["Não, isso está errado.", "Entendo a preocupação e, ao mesmo tempo, os dados mostram outra coisa.", "O sea, no es así."], a: 1, x: "Acknowledge first: <b>Entendo a preocupação e, ao mesmo tempo…</b>" },
    { t: "say", q: "Thank you for having us. The goal of this conversation is to present the certification.", a: ["Obrigado por nos receber. O objetivo desta conversa é apresentar a certificação.", "Obrigada por nos receber. O objetivo desta conversa é apresentar a certificação.", "Agradeço por nos receberem. O objetivo desta conversa é apresentar a certificação."], x: "<b>O objetivo desta conversa é</b> + infinitive." },
    { t: "say", q: "As a next step, I propose a meeting with the technical team.", a: ["Como próximo passo, proponho uma reunião com a equipe técnica.", "Como próximo passo, eu proponho uma conversa com a equipe técnica."], x: "<b>Como próximo passo, proponho…</b>" },
    { t: "fill", q: "Vale ___ que o processo é gratuito. (It's worth highlighting…)", a: ["ressaltar", "destacar", "lembrar"], x: "<b>Vale ressaltar que</b>…" },
    { t: "mc", q: "Spanish <i>con mucho gusto</i> → Brazilian professional:", o: ["com muito gosto", "com prazer", "com muito gusto"], a: 1, x: "<b>Com prazer</b>." }
  ]
},
{
  id: "pronunciation", group: "profissional", deck: "grammar", mins: 6,
  title: "Pronúncia", en: "Pronunciation for Spanish speakers",
  blurb: "Nasal vowels, b/v, s/z, final -e/-o, t/d before i, open vs closed vowels.",
  core: [
    "<b>Nasalize</b>: <b>não, ação, são, também, informações</b>. Saying <i>no</i> for <i>não</i> is the #1 Spanish tell.",
    "<b>B ≠ V</b> (<i>avaliação, governo, votar</i>), <b>S between vowels = [z]</b> (<i>casa, presidente</i>), <b>Z = [z]</b>, <b>J/G(e,i) = [ʒ]</b> (<i>gestão, projeto</i>), not the Spanish jota.",
    "Unstressed final <b>-e → [i]</b> and <b>-o → [u]</b>: <i>cidade</i> ≈ 'cidadji', <i>dados</i> ≈ 'dadus'. <b>T/D before [i] → 'tch/dj'</b> in most of Brazil.",
    "Final <b>-l → [w]</b> (<i>Brasil</i> ≈ 'Brasiu'); initial <b>r / rr → [h]</b> (<i>rede, Rio</i>); <b>lh</b> (trabalho) and <b>nh</b> (tenho)."
  ],
  body: [
    { h: "Why this module works differently", p: "Your answers come from iPhone dictation. If you say <i>no</i> instead of <b>não</b>, the recognizer often writes what it heard. Shadowing drills compare what it heard with the target sentence, so mismatches point to sounds to work on." },
    { h: "The big ones", table: { head: ["sound", "examples", "Spanish habit"], rows: [
      ["ão / õe / ãe", "não, gestão, informações, mães", "no, gestión, informaciones"],
      ["-em / -am (final)", "também, falam, sem", "también, hablan, sin"],
      ["v vs. b", "avaliação, governo, votar / bairro", "b = v"],
      ["s between vowels = z", "casa, mesa, presidente, análise", "[s]"],
      ["j / g(e,i) = ʒ", "gestão, já, projeto, agenda", "jota [x]"],
      ["-e final → i", "cidade, sete, presidente", "[e]"],
      ["-o final → u", "dados, resultado, município", "[o]"],
      ["t / d + i", "dia, cidade, gestão de dados, tipo", "[t] / [d]"],
      ["l final → w", "Brasil, final, municipal", "clear [l]"],
      ["r inicial / rr → h", "rede, Rio, recurso, carro", "trilled [r]"],
      ["é / ê, ó / ô", "pode / pôde, avó / avô, é / e", "one e, one o"]
    ] } },
    { h: "Stress shifts", p: "<b>burocracia</b> (bu-ro-cra-CI-a), <b>democracia</b> (de-mo-cra-CI-a), <b>polícia</b> (po-LÍ-cia), <b>nível</b> (NÍ-vel), <b>estratégia</b>, <b>acadêmico</b>." },
    { trap: "Spanish speakers sound fluent but foreign mostly because of <b>non-nasal vowels</b> and <b>b/v merging</b>. Exaggerate both in practice; they'll settle to natural." }
  ],
  drills: [
    { t: "shadow", q: "A gestão da cidade não tem informações suficientes.", x: "Nasal <b>ão</b>, <b>õe</b>; <b>g</b> in <i>gestão</i> = [ʒ]; <b>cidade</b> ≈ 'cidadji'." },
    { t: "shadow", q: "O governo vai avaliar a política de habitação.", x: "Three clear <b>v</b>'s: <i>governo, vai, avaliar</i>. <i>Polícia</i> vs <i>política</i>." },
    { t: "shadow", q: "Também precisamos de dados de saúde e de educação.", x: "<b>também</b> ends in a nasal diphthong; <b>de</b> ≈ 'dji'." },
    { t: "shadow", q: "As ações da prefeitura melhoraram o atendimento nos bairros.", x: "<b>ações</b> (nasal), <b>lh</b> in <i>melhoraram</i>, <b>b</b> in <i>bairros</i>." },
    { t: "shadow", q: "Os cidadãos podem acompanhar as metas no painel de indicadores.", x: "<b>cidadãos</b> (nasal), <b>nh</b> in <i>acompanhar</i>, final <b>-s</b>." },
    { t: "shadow", q: "A burocracia não pode impedir a democracia.", x: "Stress: bu-ro-cra-<b>CI</b>-a, de-mo-cra-<b>CI</b>-a." },
    { t: "mc", q: "Which word has a closed <b>ô</b> (past tense)?", o: ["pode", "pôde"], a: 1, x: "<b>pôde</b> (closed) = could; <i>pode</i> (open ó) = can." },
    { t: "mc", q: "In most of Brazil, <i>cidade</i> sounds like…", o: ["si-DA-de", "si-DA-dji", "thi-DA-de"], a: 1, x: "Final <b>-de</b> → 'dji'." }
  ]
},
{
  id: "numbers", group: "profissional", deck: "grammar", mins: 4,
  title: "Números e dados", en: "Numbers, percentages & money",
  blurb: "Três vírgula cinco por cento, dois bilhões de reais, duzentas escolas.",
  core: [
    "Brazil uses a <b>decimal comma</b>: 3,5% = <b>três vírgula cinco por cento</b>. Thousands use a dot: 1.200 = <i>mil e duzentos</i>.",
    "<b>bilhão</b> = 10⁹ (Spanish <i>mil millones</i>); <b>trilhão</b> = 10¹² (Spanish <i>billón</i>). Use <b>de</b> after milhão/bilhão: <i>dois bilhões <b>de</b> reais</i>; but <i>mil reais</i>.",
    "Numbers agree in gender: <b>duas</b> cidades, <b>duzentas</b> escolas, <b>uma</b> secretaria.",
    "Trend verbs: <b>aumentar, crescer, cair, reduzir, dobrar, atingir / superar / cumprir a meta</b>; <i>uma queda de 15%</i>, <i>um aumento de 20%</i>."
  ],
  body: [
    { h: "Saying data out loud", list: [
      "3,5% → <b>três vírgula cinco por cento</b>",
      "R$ 2,4 bilhões → <b>dois vírgula quatro bilhões de reais</b>",
      "R$ 1.500 → <b>mil e quinhentos reais</b>",
      "2026 → <b>dois mil e vinte e seis</b>",
      "14h30 → <b>catorze e trinta</b> / <b>duas e meia da tarde</b>",
      "1/3 → <b>um terço</b>; 50% → <b>metade</b>; 2× → <b>o dobro</b>",
      "+5 p.p. → <b>cinco pontos percentuais</b>"
    ] },
    { h: "Hundreds agree", table: { head: ["", "masculino", "feminino"], rows: [
      ["200", "duzentos municípios", "duzentas escolas"],
      ["300", "trezentos servidores", "trezentas vagas"],
      ["500", "quinhentos projetos", "quinhentas famílias"]
    ] } },
    { h: "Brazilian quirk", p: "When reading phone numbers, many Brazilians say <b>meia</b> (from <i>meia dúzia</i>) for 6." },
    { trap: "Spanish speakers often say <i>punto</i> for the decimal and <i>billón</i> for a thousand million. In Brazil: <b>vírgula</b> and <b>bilhão</b>. <i>Porcentaje</i> → <b>a porcentagem</b> / <b>o percentual</b>." }
  ],
  drills: [
    { t: "mc", q: "3,5% is read as…", o: ["três ponto cinco por cento", "três vírgula cinco por cento"], a: 1, x: "Decimal <b>vírgula</b>." },
    { t: "mc", q: "200 schools →", o: ["duzentos escolas", "duzentas escolas"], a: 1, x: "<b>duzentas</b> agrees with <i>escolas</i>." },
    { t: "mc", q: "R$ 2.000.000 →", o: ["dois milhões reais", "dois milhões de reais", "dois millones de reais"], a: 1, x: "<b>milhões de reais</b>." },
    { t: "fill", q: "As metas foram ___ (superar) em 2025.", a: ["superadas"], x: "<b>superadas</b> agrees with <i>as metas</i>." },
    { t: "say", q: "Response time fell by 30% in two years.", a: ["O tempo de resposta caiu 30% em dois anos.", "O tempo de resposta caiu trinta por cento em dois anos.", "O tempo de resposta teve uma queda de 30% em dois anos."], x: "<b>caiu 30%</b> / <b>uma queda de 30%</b>." },
    { t: "say", q: "The city reached 80% of its targets.", a: ["A cidade atingiu 80% das metas.", "A cidade atingiu oitenta por cento das metas.", "A cidade cumpriu 80% das metas."], x: "<b>atingir / cumprir</b> as metas; <b>das metas</b>." }
  ]
}
];
