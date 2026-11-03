/* ===== SCENARIOS, CATEGORIES, STARTER DECKS ===== */
const LESSONS = [...LESSONS_VERBS, ...LESSONS_STRUCTURE, ...LESSONS_PRO];
const LESSON = Object.fromEntries(LESSONS.map(l => [l.id, l]));

const GROUPS = [
  { id: "verbos", title: "Verbos e tempos", en: "Tenses, subjunctives, irregulars" },
  { id: "espanhol", title: "Espanhol → português", en: "Stop the portunhol" },
  { id: "estrutura", title: "Estrutura", en: "Prepositions, pronouns, agreement" },
  { id: "profissional", title: "Fala profissional", en: "WWC vocabulary, register, sounds, numbers" }
];

/* Error categories the coach can return. Each maps to a lesson. */
const CATS = {
  "subj-present":        { label: "Presente do subjuntivo", en: "present subjunctive", lesson: "subj-present", deck: "conj" },
  "subj-imperfect":      { label: "Imperfeito do subjuntivo", en: "past subjunctive", lesson: "subj-imperfect", deck: "conj" },
  "subj-future":         { label: "Futuro do subjuntivo", en: "future subjunctive", lesson: "subj-future", deck: "conj" },
  "past-tenses":         { label: "Perfeito × imperfeito", en: "past tenses", lesson: "past-tenses", deck: "conj" },
  "compound-tenses":     { label: "Tempos compostos", en: "compound tenses", lesson: "compound-tenses", deck: "conj" },
  "future-conditional":  { label: "Futuro & condicional", en: "future/conditional", lesson: "future-conditional", deck: "conj" },
  "personal-infinitive": { label: "Infinitivo pessoal", en: "personal infinitive", lesson: "personal-infinitive", deck: "conj" },
  "irregular-verbs":     { label: "Verbo irregular", en: "irregular verb", lesson: "irregular-verbs", deck: "conj" },
  "ser-estar-ficar":     { label: "Ser / estar / ficar", en: "ser/estar/ficar", lesson: "ser-estar-ficar", deck: "grammar" },
  "prepositions":        { label: "Preposição", en: "preposition", lesson: "prepositions", deck: "grammar" },
  "pronouns":            { label: "Pronome / tratamento", en: "pronoun or form of address", lesson: "pronouns", deck: "grammar" },
  "gender-agreement":    { label: "Gênero / concordância", en: "gender or agreement", lesson: "gender-agreement", deck: "vocab" },
  "false-friends":       { label: "Falso amigo", en: "false friend", lesson: "false-friends", deck: "vocab" },
  "portunhol":           { label: "Portunhol", en: "Spanish word or structure", lesson: "portunhol", deck: "vocab" },
  "vocabulary":          { label: "Vocabulário", en: "word choice", lesson: "vocabulary", deck: "vocab" },
  "register":            { label: "Registro", en: "register / politeness", lesson: "register", deck: "grammar" },
  "pronunciation":       { label: "Pronúncia", en: "pronunciation", lesson: "pronunciation", deck: "grammar" },
  "numbers":             { label: "Números", en: "numbers", lesson: "numbers", deck: "grammar" },
  "other":               { label: "Outro", en: "other", lesson: null, deck: "grammar" }
};

const DECKS = {
  vocab:   { label: "Vocabulário", en: "Vocabulary" },
  conj:    { label: "Conjugação", en: "Conjugation" },
  grammar: { label: "Gramática", en: "Grammar" }
};

const WWC_BRIEF = `FACTS YOU MAY RELY ON (do not invent other specifics; if pressed for details you don't know, say you'd need to check):
- What Works Cities (WWC) Certification: launched in 2017 by Bloomberg Philanthropies and led by Results for America (RFA). Free for cities. Open to cities with 30,000+ residents in the US, Canada and Latin America (Latin America since 2022). More than 100 cities in the Americas certified.
- It assesses how well a city uses data and evidence to set goals, allocate funding, improve services, evaluate programs and engage residents.
- 43 criteria in 8 practice areas: Leadership & Capacity (liderança e capacidade); Data Management (gestão de dados); Performance & Analytics (desempenho e análise); Data-Driven Budgeting & Finance (orçamento e finanças orientados por dados); Results-Driven Contracting (contratações orientadas a resultados); Evaluations (avaliações); Open Data (dados abertos); Stakeholder Engagement (engajamento da população).
- Levels: Prata/Silver (22+ criteria), Ouro/Gold (29+), Platina/Platinum (37+). Certification lasts three years.
- Process: online self-assessment (autoavaliação) with supporting documents, expert review, a review call, a site visit (visita técnica) for top performers, final score. Cities get a diagnosis and an action plan even if not certified, and join a peer network of cities.
- Brazilian cities already certified include Fortaleza, Recife, Rio de Janeiro, Niterói, Porto Alegre, Belo Horizonte, Mogi das Cruzes and Caruaru.
- Brazilian context: Constitutional Amendment 109/2021 (art. 37 §16) requires public bodies to evaluate public policies and publish results; LAI (Lei 12.527/2011); LGPD (Lei 13.709/2018); Nova Lei de Licitações (Lei 14.133/2021); Lei do Governo Digital (Lei 14.129/2021); budget cycle PPA/LDO/LOA; Tribunais de Contas audit municipalities.`;

const SCENARIOS = [
  {
    id: "cafezinho", level: 1, title: "Cafezinho antes da reunião", en: "Small talk before the meeting",
    persona: { id: "marcos", name: "Marcos Tavares", role: "Chefe de gabinete", gender: "m", pitch: 1.0, rate: 1.0, tone: "warm, chatty, curious about the visitor; talks about the trip, the city, the weather, food and football, then gently transitions to the meeting" },
    setup: "Before a meeting at city hall in a mid-sized Brazilian city, the mayor's chief of staff chats with the visitor over coffee.",
    goal: "Warm up. Tell stories in the past (trip, career) and react naturally.",
    targets: ["past-tenses", "ser-estar-ficar", "portunhol"],
    vocab: [["o voo", "the flight"], ["o trânsito", "traffic"], ["o cafezinho", "small coffee"], ["a gestão", "the administration"], ["que bom!", "how nice!"]],
    opening: "Bom dia! Que bom que deu tudo certo com a viagem. Como foi o voo até aqui? Já conhecia a cidade?"
  },
  {
    id: "prefeita", level: 2, title: "Apresentando a certificação à prefeita", en: "Pitching the certification to the mayor",
    persona: { id: "helena", name: "Prefeita Helena Duarte", role: "Prefeita", gender: "f", pitch: 1.0, rate: 1.0, tone: "pragmatic, busy, politically savvy; wants concrete benefits for residents, worries about political risk and staff time; interrupts with sharp follow-ups" },
    setup: "A 15-minute slot with the mayor of a Brazilian city of about 400,000 residents. The visitor is pitching the What Works Cities Certification.",
    goal: "Explain what the certification is and why the city should apply, in under a minute per answer.",
    targets: ["subj-present", "subj-future", "register"],
    vocab: [["a autoavaliação", "self-assessment"], ["gratuita", "free of charge"], ["o plano de ação", "action plan"], ["a rede de cidades", "network of cities"], ["embasar decisões", "ground decisions"]],
    opening: "Tenho uns quinze minutos antes da próxima agenda. Me explique, de forma bem objetiva: o que é essa certificação e por que a nossa cidade deveria participar?"
  },
  {
    id: "planejamento", level: 2, title: "Metas com o Secretário de Planejamento", en: "Targets & dashboards with the Planning Secretary",
    persona: { id: "ricardo", name: "Ricardo Menezes", role: "Secretário Municipal de Planejamento", gender: "m", pitch: 0.95, rate: 1.0, tone: "technocratic, proud of the city's existing targets plan and dashboard, skeptical of outside frameworks, likes numbers" },
    setup: "The planning secretary already runs a targets plan (Plano de Metas) and an indicators dashboard. He wants to know what the certification adds.",
    goal: "Show what WWC adds to existing performance management. Use hypotheticals and numbers.",
    targets: ["subj-imperfect", "personal-infinitive", "numbers"],
    vocab: [["o Plano de Metas", "targets plan"], ["o painel de indicadores", "dashboard"], ["a linha de base", "baseline"], ["acompanhar", "to monitor"], ["a reunião de desempenho", "performance review meeting"]],
    opening: "Aqui a gente já tem um Plano de Metas e um painel de indicadores atualizado todo mês. Sinceramente, o que a certificação acrescentaria ao que já fazemos?"
  },
  {
    id: "controladoria", level: 2, title: "Dados abertos e LGPD", en: "Open data & privacy with the Comptroller",
    persona: { id: "carla", name: "Carla Nogueira", role: "Controladora-Geral do Município", gender: "f", pitch: 1.05, rate: 0.98, tone: "careful, legalistic, values transparency (LAI) but worries about LGPD, data quality and audits by the Tribunal de Contas" },
    setup: "The city's comptroller supports transparency but fears exposing personal data and publishing low-quality data.",
    goal: "Reassure on privacy and data quality. Use subjunctive with embora, caso, desde que, para que.",
    targets: ["subj-present", "prepositions", "vocabulary"],
    vocab: [["a LGPD", "data-protection law"], ["a LAI", "access-to-information law"], ["anonimizar", "to anonymize"], ["o inventário de dados", "data inventory"], ["a governança de dados", "data governance"]],
    opening: "Transparência é prioridade para nós, mas eu me preocupo com a LGPD. Como garantir que a abertura de dados não exponha informações pessoais dos cidadãos?"
  },
  {
    id: "fazenda", level: 3, title: "Orçamento com a Fazenda", en: "Budget talk with the Finance Secretary",
    persona: { id: "paulo", name: "Paulo Sérgio Brandão", role: "Secretário Municipal da Fazenda", gender: "m", pitch: 0.9, rate: 0.97, tone: "fiscally conservative, blunt, short on patience; every answer must mention cost, return and the budget cycle (PPA, LDO, LOA)" },
    setup: "The finance secretary controls the budget and is skeptical of any new initiative during a tight fiscal year.",
    goal: "Handle cost objections. Use the conditional and past subjunctive for hypotheticals.",
    targets: ["future-conditional", "subj-imperfect", "numbers"],
    vocab: [["o orçamento", "budget"], ["a LOA", "annual budget law"], ["realocar recursos", "reallocate funds"], ["o retorno", "return"], ["o custo-benefício", "cost-benefit"]],
    opening: "O orçamento deste ano já está bem apertado. Quanto isso vai custar para a prefeitura e de onde sairiam os recursos?"
  },
  {
    id: "compras", level: 3, title: "Contratações orientadas a resultados", en: "Results-driven contracting with Procurement",
    persona: { id: "juliana", name: "Juliana Ramos", role: "Diretora de Compras e Licitações", gender: "f", pitch: 1.0, rate: 1.02, tone: "detail-oriented, knows the Nova Lei de Licitações (14.133/2021) well, fears audits; asks practical 'how' questions" },
    setup: "The procurement director has already adapted processes to the new procurement law and wants practical examples of results-driven contracting.",
    goal: "Explain results-driven contracting in practical terms. Use compound tenses and correct prepositions.",
    targets: ["compound-tenses", "prepositions", "vocabulary"],
    vocab: [["a licitação", "procurement process"], ["o edital", "RFP"], ["o fornecedor", "supplier"], ["os indicadores de desempenho", "performance indicators"], ["a fiscalização do contrato", "contract oversight"]],
    opening: "Com a Nova Lei de Licitações, a gente já mudou muita coisa nos nossos processos. Na prática, o que significa fazer uma contratação orientada a resultados?"
  },
  {
    id: "avaliacao", level: 3, title: "Avaliação de impacto", en: "Impact evaluation with the data team",
    persona: { id: "thiago", name: "Thiago Albuquerque", role: "Coordenador de Dados e Avaliação", gender: "m", pitch: 1.05, rate: 1.05, tone: "academic, fast talker, enthusiastic but methodologically demanding; asks about methods, sample sizes and partnerships with universities" },
    setup: "The city's data and evaluation lead has administrative data but has never run a rigorous evaluation.",
    goal: "Discuss how to start evaluating programs. Use hypotheses and the personal infinitive.",
    targets: ["subj-imperfect", "personal-infinitive", "compound-tenses"],
    vocab: [["a avaliação de impacto", "impact evaluation"], ["o grupo de controle", "control group"], ["a amostra", "sample"], ["os dados administrativos", "administrative data"], ["a universidade parceira", "partner university"]],
    opening: "Nós temos dados administrativos de vários programas, mas nunca fizemos uma avaliação de impacto de verdade. Por onde vocês recomendariam começar?"
  },
  {
    id: "camara", level: 3, title: "Audiência na Câmara Municipal", en: "Hearing with an opposition council member",
    persona: { id: "anabeatriz", name: "Vereadora Ana Beatriz Lima", role: "Vereadora da oposição", gender: "f", pitch: 1.08, rate: 1.03, tone: "combative but fair, speaks for the opposition, suspects the program is mayoral marketing; demands proof of benefits for poorer neighborhoods" },
    setup: "A public hearing at the city council. An opposition council member questions the initiative.",
    goal: "Stay calm and courteous under pressure. Disagree politely and back claims with examples.",
    targets: ["register", "subj-present", "subj-imperfect"],
    vocab: [["a audiência pública", "public hearing"], ["a oposição", "opposition"], ["a periferia", "outlying low-income areas"], ["a prestação de contas", "accountability"], ["com todo o respeito", "with all due respect"]],
    opening: "Com todo o respeito, isso me parece mais uma ação de marketing da gestão do que uma melhoria real para a população. Por que a Câmara deveria apoiar essa iniciativa?"
  },
  {
    id: "radio", level: 2, title: "Entrevista na rádio local", en: "Live radio interview",
    persona: { id: "rodrigo", name: "Rodrigo Pacheco", role: "Jornalista da Rádio Cidade", gender: "m", pitch: 1.0, rate: 1.08, tone: "energetic radio host, short questions, wants plain-language sound bites for listeners, interrupts long answers" },
    setup: "A live morning radio interview. Listeners are ordinary residents.",
    goal: "Short, plain-language answers. No jargon. Use the future and numbers.",
    targets: ["future-conditional", "numbers", "portunhol"],
    vocab: [["ao vivo", "live"], ["o ouvinte", "listener"], ["na prática", "in practice"], ["o dia a dia", "daily life"], ["o serviço público", "public service"]],
    opening: "Bom dia, você está ao vivo na Rádio Cidade. Em poucas palavras: o que muda na vida do cidadão com essa certificação?"
  },
  {
    id: "moradores", level: 1, title: "Associação de moradores", en: "Neighborhood association",
    persona: { id: "lucia", name: "Dona Lúcia Ferreira", role: "Presidente da associação de moradores", gender: "f", pitch: 0.95, rate: 0.95, tone: "down-to-earth, distrustful of 'dados' and consultants, cares about potholes, buses, health clinics; uses colloquial Brazilian speech" },
    setup: "A meeting with a neighborhood association leader in a working-class area.",
    goal: "Explain in plain words how data helps the neighborhood. Avoid jargon and Spanish words.",
    targets: ["register", "ser-estar-ficar", "portunhol"],
    vocab: [["o bairro", "neighborhood"], ["o posto de saúde", "health clinic"], ["o buraco na rua", "pothole"], ["a linha de ônibus", "bus line"], ["ouvir a comunidade", "listen to the community"]],
    opening: "Olha, aqui no bairro a gente já respondeu um monte de pesquisa e nada mudou. Por que agora seria diferente?"
  },
  {
    id: "entrevista", level: 2, title: "Entrevista para a vaga", en: "Job interview for the role",
    persona: { id: "fernanda", name: "Fernanda Costa", role: "Diretora de programas no Brasil", gender: "f", pitch: 1.02, rate: 1.0, tone: "friendly but probing interviewer for a role supporting Brazilian cities on the WWC Certification; asks about experience, examples, Portuguese fluency and handling difficult stakeholders" },
    setup: "A job interview, in Portuguese, for a role supporting Brazilian cities through the What Works Cities Certification.",
    goal: "Tell your story and give concrete examples. Mix perfeito, imperfeito and compound tenses.",
    targets: ["past-tenses", "compound-tenses", "register"],
    vocab: [["a trajetória", "career path"], ["liderar", "to lead"], ["as partes interessadas", "stakeholders"], ["um desafio", "a challenge"], ["aprendi que", "I learned that"]],
    opening: "Obrigada por conversar com a gente hoje. Para começar, me conte um pouco sobre a sua trajetória e por que você se interessou por essa vaga."
  }
];
const SCEN = Object.fromEntries(SCENARIOS.map(s => [s.id, s]));

/* ===== Starter decks: added to reviews on request ===== */
const STARTERS = [
  { id: "wwc", title: "Vocabulário WWC", en: "Public management & WWC terms (EN → PT)", deck: "vocab", lesson: "vocabulary",
    cards: [
      ["self-assessment", "a autoavaliação"], ["evidence-based management", "a gestão baseada em evidências"], ["data-driven governance", "a governança orientada por dados"],
      ["data governance", "a governança de dados"], ["data inventory", "o inventário de dados"], ["open data portal", "o portal de dados abertos"],
      ["performance management", "a gestão do desempenho"], ["targets", "as metas"], ["dashboard", "o painel de indicadores"],
      ["baseline", "a linha de base"], ["impact evaluation", "a avaliação de impacto"], ["procurement process", "a licitação"],
      ["RFP / call for proposals", "o edital"], ["inter-agency agreement", "o convênio / o acordo de cooperação técnica"], ["accountability", "a prestação de contas"],
      ["service delivery", "a prestação de serviços"], ["capacity building", "a capacitação"], ["pilot project", "o projeto-piloto"],
      ["outputs", "as entregas"], ["formal feedback", "a devolutiva"], ["meeting agenda (items)", "a pauta"],
      ["appointment with the mayor", "uma agenda com o prefeito"], ["meeting minutes", "a ata"], ["chief of staff", "o chefe de gabinete"],
      ["comptroller's office", "a Controladoria-Geral do Município"], ["court of accounts", "o Tribunal de Contas"], ["city council member", "o vereador / a vereadora"],
      ["civil servant", "o servidor público"], ["to ground decisions in data", "embasar as decisões em dados"], ["site visit", "a visita técnica"],
      ["annual budget law", "a LOA (Lei Orçamentária Anual)"], ["multi-year plan", "o PPA (Plano Plurianual)"], ["best practices", "as boas práticas"]
    ] },
  { id: "falsos", title: "Falsos amigos", en: "Spanish → Portuguese traps", deck: "vocab", lesson: "false-friends",
    cards: [
      ["ES propina (tip) → PT ?", "a gorjeta — propina = bribe"], ["ES presupuesto → PT ?", "o orçamento — pressuposto = assumption"], ["ES oficina → PT ?", "o escritório — oficina = workshop"],
      ["ES contestar → PT ?", "responder — contestar = to dispute"], ["ES funcionario público → PT ?", "o servidor público"], ["ES investigación (research) → PT ?", "a pesquisa"],
      ["ES encuesta → PT ?", "a pesquisa / a enquete"], ["ES largo (long) → PT ?", "longo / comprido — largo = wide"], ["ES apellido → PT ?", "o sobrenome — apelido = nickname"],
      ["ES todavía → PT ?", "ainda — todavia = however"], ["ES pronto (soon) → PT ?", "logo / em breve — pronto = ready"], ["ES acordarse → PT ?", "lembrar(-se) — acordar = wake up"],
      ["ES borrar → PT ?", "apagar — borrar = smudge"], ["ES fecha → PT ?", "a data — fecha = closes"], ["ES billón (10¹²) → PT ?", "um trilhão — bilhão = 10⁹"],
      ["ES apenas (barely) → PT ?", "mal — apenas = only"], ["ES quitar → PT ?", "tirar / remover — quitar = pay off"], ["ES firmar (sign) → PT ?", "assinar"],
      ["ES despacho (office) → PT ?", "o gabinete / a sala"], ["ES competencia (rivalry) → PT ?", "a concorrência"], ["ES exquisito → PT ?", "delicioso — esquisito = weird"],
      ["ES embarazada → PT ?", "grávida — embaraçada = embarrassed"], ["ES rato (a while) → PT ?", "um instante — rato = rat"], ["ES taza → PT ?", "a xícara — taça = wine glass"]
    ] },
  { id: "portunhol", title: "Portunhol → português", en: "Spanish words that slip out", deck: "vocab", lesson: "portunhol",
    cards: [
      ["ES pero → PT ?", "mas / porém"], ["ES entonces → PT ?", "então"], ["ES también → PT ?", "também"], ["ES muy / mucho → PT ?", "muito"],
      ["ES ya → PT ?", "já"], ["ES hay → PT ?", "há / tem"], ["ES aunque → PT ?", "embora (+ subjuntivo)"], ["ES sin embargo → PT ?", "no entanto / porém"],
      ["ES además → PT ?", "além disso"], ["ES o sea → PT ?", "ou seja"], ["ES hasta → PT ?", "até"], ["ES alcalde → PT ?", "o prefeito / a prefeita"],
      ["ES ayuntamiento → PT ?", "a prefeitura"], ["ES concejal → PT ?", "o vereador / a vereadora"], ["ES desarrollo → PT ?", "o desenvolvimento"], ["ES plazo → PT ?", "o prazo"],
      ["ES herramienta → PT ?", "a ferramenta"], ["ES seguimiento → PT ?", "o acompanhamento"], ["ES rendición de cuentas → PT ?", "a prestação de contas"], ["ES mejora → PT ?", "a melhoria"],
      ["ES hay que → PT ?", "é preciso / temos que"], ["ES vamos a hacer → PT ?", "vamos fazer"], ["ES suelo trabajar → PT ?", "costumo trabalhar"], ["ES llevo 3 años aquí → PT ?", "estou aqui há 3 anos"],
      ["ES responsable → PT ?", "responsável"], ["ES sostenible → PT ?", "sustentável"], ["ES planificación → PT ?", "o planejamento"], ["ES el equipo → PT ?", "a equipe"]
    ] },
  { id: "irregulares", title: "Verbos irregulares", en: "The forms that trip you up", deck: "conj", lesson: "irregular-verbs",
    cards: [
      ["fazer · pretérito · eu / ele", "fiz / fez"], ["dizer · pretérito · eu / ele", "disse / disse"], ["ter · pretérito · eu / ele", "tive / teve"], ["estar · pretérito · eu / ele", "estive / esteve"],
      ["poder · pretérito · eu / ele", "pude / pôde"], ["pôr · pretérito · eu / ele", "pus / pôs"], ["vir · pretérito · eu / ele", "vim / veio"], ["ver · pretérito · eu / ele", "vi / viu"],
      ["trazer · pretérito · eu / ele", "trouxe / trouxe"], ["querer · pretérito · eu / ele", "quis / quis"], ["saber · pretérito · eu / ele", "soube / soube"], ["dar · pretérito · eu / ele", "dei / deu"],
      ["ser / ir · pretérito · nós", "fomos"], ["ter · presente · eles", "têm"], ["vir · presente · eles", "vêm"], ["ver · presente · eles", "veem"],
      ["ser · subj. futuro · ele", "for"], ["ter · subj. futuro · nós", "tivermos"], ["poder · subj. futuro · eu", "puder"], ["ver · subj. futuro · eu", "vir"],
      ["vir · subj. futuro · eles", "vierem"], ["fazer · subj. futuro · eles", "fizerem"], ["querer · subj. futuro · ele", "quiser"], ["estar · subj. futuro · ela", "estiver"],
      ["ser · subj. imperfeito · nós", "fôssemos"], ["ter · subj. imperfeito · eu", "tivesse"], ["poder · subj. imperfeito · ele", "pudesse"], ["fazer · subj. imperfeito · nós", "fizéssemos"],
      ["saber · subj. presente · eu", "saiba"], ["haver · subj. presente", "haja"], ["dar · subj. presente · eles", "deem"], ["ir · subj. presente · ele", "vá"],
      ["fazer · condicional · nós", "faríamos"], ["dizer · condicional · eu", "diria"], ["trazer · futuro · eu", "trarei"], ["ter · condicional · nós", "teríamos (ES tendríamos)"]
    ] },
  { id: "gatilhos", title: "Gatilhos do subjuntivo", en: "Which mood after which trigger?", deck: "grammar", lesson: "subj-future",
    cards: [
      ["Quando a cidade ___ certificada… (ser, future)", "for — quando + futuro do subjuntivo"], ["Se o senhor ___ tempo… (ter, real future)", "tiver — se + futuro do subjuntivo"],
      ["Se a cidade ___ dados… (ter, unreal)", "tivesse — se + imperfeito do subjuntivo → condicional"], ["Embora o processo ___ longo… (ser)", "seja — embora + presente do subjuntivo"],
      ["É importante que a equipe ___ os dados. (publicar)", "publique — é importante que + presente do subjuntivo"], ["Assim que nós ___ o diagnóstico… (ter)", "tivermos — assim que + futuro do subjuntivo"],
      ["O prefeito pediu que nós ___ o relatório. (enviar)", "enviássemos — past trigger → imperfeito do subjuntivo"], ["Ela fala como se ___ fácil. (ser)", "fosse — como se + imperfeito do subjuntivo"],
      ["Talvez a gente ___ começar pela avaliação. (poder)", "possa — talvez + presente do subjuntivo"], ["Acho que a proposta ___ boa. (ser)", "é — achar que (affirmative) + indicativo"],
      ["Não acho que ___ simples. (ser)", "seja — não achar que + subjuntivo"], ["Para nós ___ a meta… (atingir)", "atingirmos — infinitivo pessoal"],
      ["Quem ___ participar, é bem-vindo. (querer)", "quiser — quem + futuro do subjuntivo"], ["Caso vocês ___ dúvidas… (ter)", "tenham — caso + presente do subjuntivo"],
      ["Gostaria que vocês ___ a proposta. (considerar)", "considerassem — gostaria que + imperfeito do subjuntivo"], ["Precisamos de um sistema que ___ os dados. (integrar)", "integre — unknown antecedent → subjuntivo"]
    ] }
];
