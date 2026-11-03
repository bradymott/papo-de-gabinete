/* ===== LESSONS: verbs & tenses ===== */
const P4 = ["", "eu", "você / ele / ela", "nós", "vocês / eles"];

const LESSONS_VERBS = [
{
  id: "subj-present", group: "verbos", deck: "conj", mins: 5,
  title: "Presente do subjuntivo", en: "Present subjunctive",
  blurb: "Espero que, é importante que, embora, caso, para que…",
  core: [
    "Use it after <b>wishes, needs, doubts, emotions and purpose</b> when the clause has its own subject: <i>é importante que</i>, <i>espero que</i>, <i>recomendo que</i>, <i>para que</i>, <i>embora</i>, <i>caso</i>, <i>talvez</i>.",
    "Form it from the <b>eu</b> form of the present: drop <b>-o</b>, add the opposite vowel. <b>-ar → -e</b>, <b>-er/-ir → -a</b>: faço → <b>faça</b>, tenho → <b>tenha</b>, digo → <b>diga</b>, posso → <b>possa</b>.",
    "Seven true irregulars: <b>seja, esteja, vá, haja, saiba, queira, dê</b>.",
    "For a <b>future</b> condition after <i>quando / se / assim que</i>, Portuguese switches to the <b>future subjunctive</b>: <i>quando você puder</i>, never <s>quando você possa</s>."
  ],
  body: [
    { h: "How to form it", p: "Start from the <b>eu</b> form of the present indicative, remove the <b>-o</b>, and add the endings. Anything irregular in <i>eu</i> carries over automatically." },
    { table: { head: P4, rows: [
      ["publicar (publico)", "publique", "publique", "publiquemos", "publiquem"],
      ["fazer (faço)", "faça", "faça", "façamos", "façam"],
      ["ter (tenho)", "tenha", "tenha", "tenhamos", "tenham"],
      ["poder (posso)", "possa", "possa", "possamos", "possam"],
      ["pedir (peço)", "peça", "peça", "peçamos", "peçam"]
    ] } },
    { h: "The seven you must memorize", table: { head: P4, rows: [
      ["ser", "seja", "seja", "sejamos", "sejam"],
      ["estar", "esteja", "esteja", "estejamos", "estejam"],
      ["ir", "vá", "vá", "vamos", "vão"],
      ["haver", "haja", "haja", "hajamos", "hajam"],
      ["saber", "saiba", "saiba", "saibamos", "saibam"],
      ["querer", "queira", "queira", "queiramos", "queiram"],
      ["dar", "dê", "dê", "demos", "deem"]
    ] } },
    { h: "Spelling shifts keep the sound", list: [
      "-car → <b>-que</b>: publicar → publique, indicar → indique",
      "-gar → <b>-gue</b>: chegar → chegue, entregar → entregue",
      "-çar → <b>-ce</b>: começar → comece, alcançar → alcance",
      "-ger / -gir → <b>-ja</b>: proteger → proteja, dirigir → dirija"
    ] },
    { h: "Triggers you will use in meetings", list: [
      "<b>Recommendation:</b> recomendamos que, sugiro que, proponho que, pedimos que",
      "<b>Necessity:</b> é importante / fundamental / essencial / necessário que, é preciso que",
      "<b>Wish & emotion:</b> espero que, tomara que, fico feliz que, lamento que",
      "<b>Doubt:</b> talvez, duvido que, não acho que, não creio que",
      "<b>Conjunctions:</b> para que, embora, mesmo que, caso, desde que, a menos que, antes que, sem que",
      "<b>Unknown antecedent:</b> precisamos de um sistema que <b>integre</b> os dados"
    ] },
    { trap: "Spanish uses the present subjunctive after <i>cuando</i> for the future (<i>cuando sea</i>, <i>cuando tengamos</i>). Portuguese does not: <b>quando for</b>, <b>quando tivermos</b>. Also watch <i>haya → <b>haja</b></i> (from <i>haver</i>) and <i>ojalá → <b>tomara que</b></i>." },
    { ex: [
      ["É fundamental que a prefeitura publique os dados em formato aberto.", "It's essential that city hall publish the data in an open format."],
      ["Recomendamos que cada secretaria tenha um responsável por dados.", "We recommend that each department have a data lead."],
      ["Embora o processo seja exigente, a certificação é gratuita.", "Although the process is demanding, the certification is free."],
      ["Caso a equipe precise de apoio, nós podemos ajudar.", "In case the team needs support, we can help."],
      ["Talvez seja melhor começarmos pela gestão de dados.", "Maybe it's better if we start with data management."]
    ] }
  ],
  drills: [
    { t: "mc", q: "É importante que todas as secretarias ___ os dados.", o: ["compartilham", "compartilhem", "compartilhassem"], a: 1, x: "<i>É importante que</i> + present subjunctive. -ar verbs take <b>-e</b>: compartilhem." },
    { t: "fill", q: "Recomendamos que a prefeitura ___ (criar) um comitê de dados.", a: ["crie"], x: "crio → cri- → <b>crie</b>. Recommendation + que → subjunctive." },
    { t: "fill", q: "Embora o processo ___ (ser) longo, vale a pena.", a: ["seja"], x: "<i>Embora</i> always takes the subjunctive. <i>Ser</i> → <b>seja</b>." },
    { t: "fill", q: "Precisamos de um painel que ___ (mostrar) os resultados em tempo real.", a: ["mostre"], x: "The panel doesn't exist yet (unknown antecedent) → subjunctive: <b>mostre</b>." },
    { t: "mc", q: "Talvez a gente ___ começar pela avaliação.", o: ["pode", "possa", "puder"], a: 1, x: "<i>Talvez</i> before the verb → present subjunctive: <b>possa</b>. (<i>Puder</i> is future subjunctive.)" },
    { t: "fill", q: "Caso vocês ___ (ter) dúvidas, podem me ligar.", a: ["tenham"], x: "<i>Caso</i> + present subjunctive: tenho → <b>tenham</b>." },
    { t: "fix", q: "Espero que a equipe sabe usar os dados.", a: ["Espero que a equipe saiba usar os dados."], x: "<i>Espero que</i> triggers the subjunctive; <i>saber</i> is irregular: <b>saiba</b>." },
    { t: "fix", q: "Es importante que la ciudad haya un plan.", a: ["É importante que a cidade tenha um plano.", "É importante que a cidade tenha um plano de ação."], x: "Spanish words (es, la, ciudad) and wrong verb: a city <b>has</b> a plan → <b>tenha</b>. <i>Haja</i> means 'there be'." },
    { t: "say", q: "It's essential that the mayor be involved from the start.", a: ["É essencial que o prefeito esteja envolvido desde o início.", "É essencial que a prefeita esteja envolvida desde o início.", "É essencial que o prefeito participe desde o começo."], x: "<i>É essencial que</i> + <b>esteja</b> (estar) or <b>participe</b>." },
    { t: "mc", q: "Acho que a proposta ___ boa.", o: ["é", "seja"], a: 0, x: "<i>Achar que</i> (affirmative) takes the <b>indicative</b>: é. Only <i>não acho que</i> takes the subjunctive: <i>não acho que seja</i>." }
  ]
},
{
  id: "subj-imperfect", group: "verbos", deck: "conj", mins: 6,
  title: "Imperfeito do subjuntivo", en: "Past (imperfect) subjunctive",
  blurb: "Se a cidade tivesse… seria ótimo se o senhor pudesse…",
  core: [
    "Form: take <b>eles</b> in the preterite, drop <b>-ram</b>, add <b>-sse</b>: fizeram → <b>fizesse</b>, tiveram → <b>tivesse</b>, foram → <b>fosse</b>, puderam → <b>pudesse</b>.",
    "Hypotheticals: <b>se + imperfeito do subjuntivo → futuro do pretérito</b>. <i>Se tivéssemos dados, poderíamos priorizar.</i>",
    "After a <b>past or conditional</b> main verb: <i>pediu que</i>, <i>queria que</i>, <i>seria bom que</i>, <i>era importante que</i> → <b>-sse</b>.",
    "Always after <b>como se</b>. Spanish <i>-ra</i> forms (<i>tuviera</i>) do <b>not</b> exist in spoken Portuguese: say <b>tivesse</b>, never <s>tivera</s>."
  ],
  body: [
    { h: "How to form it", p: "Every verb, regular or not, builds this tense from the <b>eles</b> form of the pretérito perfeito. Drop <b>-ram</b> and add <b>-sse, -sse, -ssemos, -ssem</b>. The <b>nós</b> form takes an accent." },
    { table: { head: P4, rows: [
      ["falar (falaram)", "falasse", "falasse", "falássemos", "falassem"],
      ["ser / ir (foram)", "fosse", "fosse", "fôssemos", "fossem"],
      ["ter (tiveram)", "tivesse", "tivesse", "tivéssemos", "tivessem"],
      ["estar (estiveram)", "estivesse", "estivesse", "estivéssemos", "estivessem"],
      ["fazer (fizeram)", "fizesse", "fizesse", "fizéssemos", "fizessem"],
      ["poder (puderam)", "pudesse", "pudesse", "pudéssemos", "pudessem"],
      ["dizer (disseram)", "dissesse", "dissesse", "disséssemos", "dissessem"],
      ["querer (quiseram)", "quisesse", "quisesse", "quiséssemos", "quisessem"],
      ["saber (souberam)", "soubesse", "soubesse", "soubéssemos", "soubessem"],
      ["trazer (trouxeram)", "trouxesse", "trouxesse", "trouxéssemos", "trouxessem"],
      ["vir (vieram)", "viesse", "viesse", "viéssemos", "viessem"],
      ["ver (viram)", "visse", "visse", "víssemos", "vissem"],
      ["dar (deram)", "desse", "desse", "déssemos", "dessem"],
      ["haver (houveram)", "houvesse", "houvesse", "—", "—"]
    ] } },
    { h: "When to use it", list: [
      "<b>Unreal conditions:</b> Se a cidade <b>tivesse</b> um painel, os secretários <b>decidiriam</b> mais rápido.",
      "<b>Polite requests:</b> Seria ótimo se o senhor <b>pudesse</b> participar. Gostaria que vocês <b>considerassem</b> a proposta.",
      "<b>Past triggers:</b> O prefeito pediu que nós <b>enviássemos</b> o relatório. Era importante que todos <b>entendessem</b>.",
      "<b>Como se:</b> Ele fala como se os dados <b>fossem</b> perfeitos.",
      "<b>Wishes:</b> Quem dera <b>tivéssemos</b> mais tempo!"
    ] },
    { h: "Register note", p: "In casual speech Brazilians often swap the conditional for the imperfect (<i>se eu pudesse, eu ia</i>). With officials, the full form sounds sharper: <b>se eu pudesse, eu iria / faria / poderia</b>." },
    { trap: "Spanish has two forms (<i>tuviera / tuviese</i>). Portuguese only has <b>-sse</b>. The Portuguese <i>-ra</i> form (<i>tivera, fora</i>) is a literary <b>past perfect</b>, so <i>se tivera</i> sounds wrong. Also never put the conditional after <i>se</i>: <s>se a prefeitura publicaria</s> → <b>se a prefeitura publicasse</b>." },
    { ex: [
      ["Se tivéssemos dados mais confiáveis, poderíamos priorizar melhor.", "If we had more reliable data, we could prioritize better."],
      ["Seria ótimo se a senhora pudesse indicar uma pessoa da sua equipe.", "It would be great if you could designate someone from your team."],
      ["A secretária pediu que nós apresentássemos os critérios.", "The secretary asked us to present the criteria."],
      ["Se a cidade fosse certificada, isso abriria portas para parcerias.", "If the city were certified, it would open doors to partnerships."]
    ] }
  ],
  drills: [
    { t: "fill", q: "Se a prefeitura ___ (ter) um painel de indicadores, os secretários decidiriam mais rápido.", a: ["tivesse"], x: "Unreal condition: <b>se + tivesse</b> … decidiriam." },
    { t: "fill", q: "Seria ótimo se o senhor ___ (poder) participar da reunião.", a: ["pudesse"], x: "puderam → <b>pudesse</b>. <i>Seria ótimo se</i> + imperfect subjunctive." },
    { t: "mc", q: "O prefeito pediu que nós ___ o relatório até sexta.", o: ["enviamos", "enviássemos", "enviemos"], a: 1, x: "Past trigger (<i>pediu que</i>) → imperfect subjunctive, nós form with accent: <b>enviássemos</b>." },
    { t: "fill", q: "Ela fala como se a certificação ___ (ser) impossível.", a: ["fosse"], x: "<i>Como se</i> always takes the imperfect subjunctive: <b>fosse</b>." },
    { t: "fix", q: "Si la ciudad tuviera más datos, podría mejorar los servicios.", a: ["Se a cidade tivesse mais dados, poderia melhorar os serviços."], x: "Si → <b>Se</b>; tuviera → <b>tivesse</b> (only -sse in Portuguese); mejorar → <b>melhorar</b>; los → <b>os</b>." },
    { t: "fix", q: "Se nós fazíamos uma avaliação, saberíamos o impacto.", a: ["Se nós fizéssemos uma avaliação, saberíamos o impacto.", "Se fizéssemos uma avaliação, saberíamos o impacto."], x: "After hypothetical <i>se</i>, use the subjunctive: fizeram → <b>fizéssemos</b>." },
    { t: "fill", q: "Gostaria que vocês ___ (considerar) a certificação para o próximo ano.", a: ["considerassem"], x: "<i>Gostaria que</i> (conditional) → imperfect subjunctive: <b>considerassem</b>." },
    { t: "mc", q: "Quem dera nós ___ mais tempo para a avaliação!", o: ["temos", "tivéssemos", "tenhamos"], a: 1, x: "<i>Quem dera</i> expresses an unreal wish → <b>tivéssemos</b>." },
    { t: "say", q: "If we had more reliable data, we could prioritize better.", a: ["Se tivéssemos dados mais confiáveis, poderíamos priorizar melhor.", "Se nós tivéssemos dados mais confiáveis, poderíamos priorizar melhor."], x: "<b>Se tivéssemos</b> … <b>poderíamos</b>." },
    { t: "fill", q: "Se eu ___ (saber) disso antes, teria trazido os números.", a: ["soubesse"], x: "souberam → <b>soubesse</b>." }
  ]
},
{
  id: "subj-future", group: "verbos", deck: "conj", mins: 6,
  title: "Futuro do subjuntivo", en: "Future subjunctive",
  blurb: "The tense Spanish speakers forget: quando eu tiver, se você puder.",
  core: [
    "Use it for <b>future conditions and times</b>: after <b>se, quando, assim que, logo que, depois que, enquanto, sempre que, conforme, como</b>, and after <b>quem / o que / onde</b> about the future.",
    "Form: <b>eles</b> preterite minus <b>-ram</b> + <b>-r</b>: tiveram → <b>tiver</b>, foram → <b>for</b>, fizeram → <b>fizer</b>, puderam → <b>puder</b>, quiseram → <b>quiser</b>.",
    "For regular verbs it looks like the infinitive (<i>se a cidade publicar</i>), which is why people forget the irregulars: <s>se eu poder</s> → <b>se eu puder</b>.",
    "Spanish says <i>cuando sea / si puedes</i>; Portuguese says <b>quando for / se puder</b>."
  ],
  body: [
    { h: "How to form it", p: "Same stem as the past subjunctive: the <b>eles</b> preterite without <b>-ram</b>. Then add <b>-r, -r, -rmos, -rem</b>." },
    { table: { head: P4, rows: [
      ["publicar (publicaram)", "publicar", "publicar", "publicarmos", "publicarem"],
      ["ser / ir (foram)", "for", "for", "formos", "forem"],
      ["ter (tiveram)", "tiver", "tiver", "tivermos", "tiverem"],
      ["estar (estiveram)", "estiver", "estiver", "estivermos", "estiverem"],
      ["fazer (fizeram)", "fizer", "fizer", "fizermos", "fizerem"],
      ["poder (puderam)", "puder", "puder", "pudermos", "puderem"],
      ["querer (quiseram)", "quiser", "quiser", "quisermos", "quiserem"],
      ["dizer (disseram)", "disser", "disser", "dissermos", "disserem"],
      ["saber (souberam)", "souber", "souber", "soubermos", "souberem"],
      ["trazer (trouxeram)", "trouxer", "trouxer", "trouxermos", "trouxerem"],
      ["vir (vieram)", "vier", "vier", "viermos", "vierem"],
      ["ver (viram)", "vir", "vir", "virmos", "virem"],
      ["pôr (puseram)", "puser", "puser", "pusermos", "puserem"],
      ["dar (deram)", "der", "der", "dermos", "derem"],
      ["haver (houveram)", "houver", "houver", "—", "—"]
    ] } },
    { h: "Watch out: ver vs. vir", p: "<i>Quando eu <b>vir</b> os dados</i> = when I <b>see</b> the data (from <i>ver</i>). <i>Quando ele <b>vier</b></i> = when he <b>comes</b> (from <i>vir</i>)." },
    { h: "Where it shows up", list: [
      "<b>Se</b> (real future possibility): Se a cidade <b>for</b> certificada, vai entrar para uma rede internacional.",
      "<b>Quando</b>: Quando os dados <b>estiverem</b> prontos, publicamos.",
      "<b>Assim que / logo que</b>: Assim que <b>tivermos</b> o diagnóstico, marcamos uma reunião.",
      "<b>Enquanto / sempre que</b>: Sempre que <b>houver</b> dúvida, a equipe técnica responde.",
      "<b>Como / conforme</b>: Faremos como o senhor <b>preferir</b>.",
      "<b>Quem / o que</b>: Quem <b>quiser</b> participar será bem-vindo. O que vocês <b>decidirem</b>, nós apoiamos."
    ] },
    { h: "Se: three levels of reality", list: [
      "Fact or habit → indicative: Se a cidade <b>publica</b> os dados, os cidadãos acompanham.",
      "Real future → future subjunctive: Se a cidade <b>publicar</b> os dados, os cidadãos vão acompanhar.",
      "Unreal → past subjunctive: Se a cidade <b>publicasse</b> os dados, os cidadãos acompanhariam."
    ] },
    { trap: "This is the single most common slip for Spanish speakers. <i>Cuando tengamos</i> → <b>quando tivermos</b>; <i>cuando sea</i> → <b>quando for</b>; <i>si puedes</i> → <b>se puder</b>; <i>cuando vea</i> → <b>quando vir</b>. Never use the present subjunctive after <i>quando</i> for the future." },
    { ex: [
      ["Quando a cidade for certificada, vamos divulgar o resultado juntos.", "When the city is certified, we'll announce the result together."],
      ["Se o senhor tiver alguns minutos, posso explicar os critérios.", "If you have a few minutes, I can explain the criteria."],
      ["Assim que a equipe estiver pronta, começamos a autoavaliação.", "As soon as the team is ready, we'll start the self-assessment."],
      ["Quem quiser entender a metodologia pode participar da oficina.", "Anyone who wants to understand the methodology can join the workshop."]
    ] }
  ],
  drills: [
    { t: "fill", q: "Quando a cidade ___ (ser) certificada, vamos divulgar o resultado.", a: ["for"], x: "<i>Quando</i> + future → future subjunctive: foram → <b>for</b>." },
    { t: "fill", q: "Se o senhor ___ (ter) alguns minutos, posso explicar os critérios.", a: ["tiver"], x: "Real future possibility: <b>se + tiver</b>." },
    { t: "fill", q: "Assim que nós ___ (fazer) o diagnóstico, enviamos o relatório.", a: ["fizermos"], x: "fizeram → <b>fizermos</b>." },
    { t: "mc", q: "Quando eu ___ os dados, te aviso.", o: ["ver", "vir", "vier"], a: 1, x: "<i>Ver</i> → viram → <b>vir</b>. (<i>Vier</i> is from <i>vir</i>, 'to come'.)" },
    { t: "fill", q: "Se vocês ___ (poder), mandem a lista de indicadores.", a: ["puderem"], x: "puderam → <b>puderem</b>. Never <s>poderem</s>." },
    { t: "fill", q: "Quem ___ (querer) participar do comitê pode se inscrever.", a: ["quiser"], x: "<i>Quem</i> about the future → <b>quiser</b>." },
    { t: "fix", q: "Cuando tengamos los datos, vamos a publicar.", a: ["Quando tivermos os dados, vamos publicar.", "Quando tivermos os dados, nós vamos publicar."], x: "cuando tengamos → <b>quando tivermos</b>; los → <b>os</b>; <i>vamos a publicar</i> → <b>vamos publicar</b> (no 'a')." },
    { t: "fix", q: "Quando a prefeitura seja certificada, vai receber reconhecimento internacional.", a: ["Quando a prefeitura for certificada, vai receber reconhecimento internacional."], x: "Spanish pattern (<i>cuando sea</i>). Portuguese: <b>quando for</b>." },
    { t: "say", q: "As soon as the team is ready, we will start the assessment.", a: ["Assim que a equipe estiver pronta, vamos começar a avaliação.", "Assim que a equipe estiver pronta, começaremos a avaliação.", "Logo que a equipe estiver pronta, vamos começar a avaliação."], x: "<b>Assim que + estiver</b>. Note <i>a equipe</i> is feminine → <i>pronta</i>." },
    { t: "mc", q: "Se a cidade ___ dados abertos, os cidadãos vão poder acompanhar as metas.", o: ["publicar", "publique", "publicasse"], a: 0, x: "Real future condition → future subjunctive, which for regular verbs looks like the infinitive: <b>publicar</b>." },
    { t: "fill", q: "Se vocês ___ (vir) a Brasília, avisem a gente.", a: ["vierem"], x: "<i>Vir</i> (to come) → vieram → <b>vierem</b>." }
  ]
},
{
  id: "past-tenses", group: "verbos", deck: "conj", mins: 5,
  title: "Perfeito × imperfeito", en: "Simple past vs. imperfect",
  blurb: "Fiz ou fazia? Foi ou era? Plus the irregular preterites.",
  core: [
    "<b>Perfeito</b> = completed event, a specific moment, a sequence: <i>Em 2024 a cidade <b>lançou</b> o portal.</i>",
    "<b>Imperfeito</b> = background, habits, ongoing states, 'used to', descriptions: <i>Antes, cada secretaria <b>guardava</b> os dados em planilhas.</i>",
    "Interruption: <b>imperfeito</b> for the background, <b>perfeito</b> for what cuts in: <i><b>Estávamos</b> discutindo o orçamento quando o prefeito <b>chegou</b>.</i>",
    "Irregular preterites differ from Spanish: <b>fiz/fez, disse, tive/teve, estive/esteve, pude/pôde, pus/pôs, vim/veio, vi/viu, trouxe, quis, soube, dei/deu</b>."
  ],
  body: [
    { h: "Irregular preterites", table: { head: P4, rows: [
      ["ser / ir", "fui", "foi", "fomos", "foram"],
      ["ter", "tive", "teve", "tivemos", "tiveram"],
      ["estar", "estive", "esteve", "estivemos", "estiveram"],
      ["fazer", "fiz", "fez", "fizemos", "fizeram"],
      ["poder", "pude", "pôde", "pudemos", "puderam"],
      ["dizer", "disse", "disse", "dissemos", "disseram"],
      ["querer", "quis", "quis", "quisemos", "quiseram"],
      ["saber", "soube", "soube", "soubemos", "souberam"],
      ["trazer", "trouxe", "trouxe", "trouxemos", "trouxeram"],
      ["vir", "vim", "veio", "viemos", "vieram"],
      ["ver", "vi", "viu", "vimos", "viram"],
      ["pôr", "pus", "pôs", "pusemos", "puseram"],
      ["dar", "dei", "deu", "demos", "deram"]
    ] } },
    { h: "Regular endings", table: { head: P4, rows: [
      ["-ar (falar)", "falei", "falou", "falamos", "falaram"],
      ["-er (vender)", "vendi", "vendeu", "vendemos", "venderam"],
      ["-ir (decidir)", "decidi", "decidiu", "decidimos", "decidiram"]
    ] } },
    { h: "Only four irregular imperfects", p: "<b>ser</b> → era · <b>ter</b> → tinha · <b>vir</b> → vinha · <b>pôr</b> → punha. Everything else is regular: -ava (-ar), -ia (-er/-ir)." },
    { h: "Pôde vs. pode", p: "<b>pôde</b> (closed ô) = could, past. <b>pode</b> (open ó) = can, present. The accent marks a real sound difference you should hear and produce." },
    { h: "Polite imperfect", p: "<i>Eu <b>queria</b> saber se…</i> and <i><b>Vim</b> aqui para…</i> are natural, soft openers in Brazilian speech." },
    { trap: "fue → <b>foi</b> · hizo → <b>fez</b> · dijo → <b>disse</b> · tuvo → <b>teve</b> · estuvo → <b>esteve</b> · vino → <b>veio</b> · pudo → <b>pôde</b> · puso → <b>pôs</b> · trajo → <b>trouxe</b> · dio → <b>deu</b> · fuimos → <b>fomos</b>. And -ar endings: hablé / habló → <b>falei / falou</b>." },
    { ex: [
      ["Quando eu trabalhava em Nova York, a gente fazia reuniões semanais de desempenho.", "When I worked in New York, we used to hold weekly performance meetings."],
      ["Em 2023, Fortaleza foi uma das primeiras cidades brasileiras certificadas.", "In 2023, Fortaleza was one of the first Brazilian cities certified."],
      ["A equipe estava revisando os indicadores quando recebemos a notícia.", "The team was reviewing the indicators when we got the news."]
    ] }
  ],
  drills: [
    { t: "mc", q: "Quando eu ___ em Nova York, trabalhava com dados de desempenho.", o: ["morei", "morava"], a: 1, x: "Background state over time → imperfeito: <b>morava</b>." },
    { t: "fill", q: "Em 2024, a prefeitura ___ (fazer) um diagnóstico completo.", a: ["fez"], x: "Completed event in a specific year → <b>fez</b>." },
    { t: "fill", q: "Ontem a secretária ___ (dizer) que o projeto é prioridade.", a: ["disse"], x: "<i>Dizer</i> → <b>disse</b> (eu and ela are the same)." },
    { t: "fill", q: "Nós ___ (ter) uma reunião excelente com a equipe técnica.", a: ["tivemos"], x: "<i>Ter</i> → <b>tivemos</b>." },
    { t: "mc", q: "Antes do portal, os cidadãos não ___ acessar os dados.", o: ["puderam", "podiam"], a: 1, x: "Ongoing situation in the past → <b>podiam</b>." },
    { t: "fix", q: "El año pasado la ciudad hizo una evaluación y fue un éxito.", a: ["No ano passado, a cidade fez uma avaliação e foi um sucesso.", "No ano passado a cidade fez uma avaliação e foi um sucesso."], x: "El año pasado → <b>No ano passado</b>; hizo → <b>fez</b>; fue → <b>foi</b>; éxito → <b>sucesso</b>." },
    { t: "fill", q: "O prefeito ___ (vir) à reunião pessoalmente.", a: ["veio"], x: "<i>Vir</i> → <b>veio</b> (ele). Spanish <i>vino</i> is a trap." },
    { t: "fill", q: "Vocês ___ (ver) o relatório que eu mandei?", a: ["viram"], x: "<i>Ver</i> → <b>viram</b>." },
    { t: "mc", q: "Ele não ___ vir ontem porque estava em Brasília.", o: ["pode", "pôde"], a: 1, x: "Past → <b>pôde</b> (closed ô)." },
    { t: "say", q: "When I arrived, the team was already analyzing the data.", a: ["Quando eu cheguei, a equipe já estava analisando os dados.", "Quando cheguei, a equipe já estava analisando os dados."], x: "<b>cheguei</b> (event) + <b>estava analisando</b> (background)." },
    { t: "fill", q: "A secretária ___ (pôr) os novos indicadores no painel.", a: ["pôs"], x: "<i>Pôr</i> → <b>pôs</b>." }
  ]
},
{
  id: "compound-tenses", group: "verbos", deck: "conj", mins: 5,
  title: "Tempos compostos", en: "Compound tenses (tenho feito, tinha feito)",
  blurb: "Why 'tenho feito' ≠ 'he hecho' ≠ 'I have done'.",
  core: [
    "<b>Tenho + particípio</b> means a <b>repeated or ongoing</b> action up to now: <i>temos conversado com várias cidades</i> = we've been talking with several cities.",
    "For a single completed action ('I have done', <i>he hecho</i>) use the <b>simple past</b>: <i>já <b>falei</b> com o prefeito</i>, not <s>tenho falado</s>.",
    "<b>Tinha + particípio</b> = had done (before another past event). <i>Quando a lei foi aprovada, a cidade já <b>tinha criado</b> o portal.</i>",
    "Key irregular participles: <b>feito, dito, visto, vindo, posto, escrito, aberto</b>. With ser/estar: <b>entregue, pago, aceito, eleito</b>."
  ],
  body: [
    { h: "Pretérito perfeito composto", p: "<b>ter (present) + particípio</b>. It describes something that started in the past and keeps happening or repeating. It does <b>not</b> mean a one-off completed action." },
    { list: [
      "✓ <i>Temos trabalhado muito com a equipe de dados.</i> (We've been working a lot…)",
      "✓ <i>Eu já visitei Recife duas vezes.</i> (I have visited Recife twice.)",
      "✗ <i>Eu tenho visitado Recife uma vez.</i>"
    ] },
    { h: "Mais-que-perfeito", p: "<b>tinha + particípio</b> in speech; <i>havia</i> is more formal; the simple form (<i>fizera</i>) is literary, so don't use it in conversation." },
    { h: "Participles", table: { head: ["verbo", "particípio", "", "", ""], rows: [
      ["fazer", "feito", "dizer", "dito", ""],
      ["ver", "visto", "vir", "vindo", ""],
      ["pôr", "posto", "escrever", "escrito", ""],
      ["abrir", "aberto", "cobrir", "coberto", ""]
    ] } },
    { h: "Double participles", p: "Rule of thumb: <b>ter + -ado</b>, <b>ser/estar + short form</b>. <i>Tinha entregado</i> / <i>foi entregue</i>; <i>tinha aceitado</i> / <i>foi aceito</i>; <i>foi eleito</i>. In Brazil, <i>tinha pago / gasto / ganho</i> are standard too." },
    { h: "Acabar de", p: "<b>Acabei de receber</b> o relatório = I just received the report." },
    { trap: "Spanish <i>he hablado con el alcalde</i> → <b>já falei com o prefeito</b>. Spanish <i>habían hecho</i> → <b>tinham feito</b> (Portuguese uses <b>ter</b>, not <i>haver</i>, as the everyday auxiliary)." },
    { ex: [
      ["Temos conversado com várias prefeituras sobre a certificação.", "We've been talking with several city halls about the certification."],
      ["Quando a equipe chegou, a secretária já tinha preparado os dados.", "When the team arrived, the secretary had already prepared the data."],
      ["O relatório foi entregue ao prefeito ontem.", "The report was delivered to the mayor yesterday."]
    ] }
  ],
  drills: [
    { t: "mc", q: "\"I have already met the mayor.\"", o: ["Eu tenho conhecido o prefeito.", "Eu já conheci o prefeito."], a: 1, x: "A one-off completed action → simple past: <b>já conheci</b>." },
    { t: "mc", q: "\"We've been talking to several cities lately.\"", o: ["Temos conversado com várias cidades ultimamente.", "Tínhamos conversado com várias cidades ultimamente."], a: 0, x: "Ongoing/repeated up to now → <b>temos conversado</b>." },
    { t: "fill", q: "Quando a lei foi aprovada, a cidade já ___ (criar) o portal.", a: ["tinha criado", "havia criado"], x: "Earlier past → <b>tinha criado</b>." },
    { t: "fill", q: "O relatório já foi ___ (entregar) ao prefeito.", a: ["entregue"], x: "With <i>ser</i> → short participle: <b>entregue</b>." },
    { t: "fill", q: "Nós ___ (acabar) de receber os dados da Secretaria de Saúde.", a: ["acabamos"], x: "<b>Acabar de</b> + infinitive = to have just done." },
    { t: "fix", q: "He hablado con la secretaria esta mañana.", a: ["Falei com a secretária hoje de manhã.", "Eu falei com a secretária hoje de manhã.", "Falei com a secretária hoje cedo."], x: "Single completed action → <b>falei</b>; esta mañana → <b>hoje de manhã</b>." },
    { t: "fill", q: "A equipe tinha ___ (fazer) um bom trabalho antes da transição.", a: ["feito"], x: "<i>Fazer</i> → <b>feito</b>." },
    { t: "say", q: "Before the meeting, I had already read the report.", a: ["Antes da reunião, eu já tinha lido o relatório.", "Antes da reunião, já tinha lido o relatório."], x: "<b>tinha lido</b>: an action before another past point." },
    { t: "fill", q: "Os dados foram ___ (abrir) ao público no ano passado.", a: ["abertos"], x: "<i>Abrir</i> → <b>aberto</b>, agreeing with <i>os dados</i> → <b>abertos</b>." }
  ]
},
{
  id: "future-conditional", group: "verbos", deck: "conj", mins: 5,
  title: "Futuro & condicional", en: "Future & conditional (politeness)",
  blurb: "Gostaria de, seria possível, poderíamos… and Será que…?",
  core: [
    "In speech, the future is usually <b>ir + infinitivo</b> (<i>vamos publicar</i>). The synthetic future (<i>publicaremos, será</i>) sounds formal and polished in a presentation.",
    "Only <b>fazer, dizer, trazer</b> are irregular: <b>farei/faria, direi/diria, trarei/traria</b>. Everything else adds endings to the infinitive: <i>teria, poderia, saberia, viria</i>.",
    "The conditional is your politeness tool: <b>Gostaria de…, Seria possível…?, Poderíamos…, Eu diria que…</b>",
    "<b>Será que…?</b> = I wonder if…: <i>Será que a prefeita vai aprovar?</i>"
  ],
  body: [
    { table: { head: ["", "futuro (eu)", "condicional (eu)", "condicional (nós)", "condicional (eles)"], rows: [
      ["fazer", "farei", "faria", "faríamos", "fariam"],
      ["dizer", "direi", "diria", "diríamos", "diriam"],
      ["trazer", "trarei", "traria", "traríamos", "trariam"],
      ["ter", "terei", "teria", "teríamos", "teriam"],
      ["poder", "poderei", "poderia", "poderíamos", "poderiam"],
      ["vir", "virei", "viria", "viríamos", "viriam"],
      ["pôr", "porei", "poria", "poríamos", "poriam"],
      ["saber", "saberei", "saberia", "saberíamos", "saberiam"]
    ] } },
    { h: "Phrases for meetings", list: [
      "<b>Gostaria de</b> apresentar rapidamente a certificação.",
      "<b>Seria possível</b> marcarmos uma conversa com a equipe técnica?",
      "<b>Poderíamos</b> começar pela gestão de dados.",
      "<b>Eu diria que</b> o primeiro passo é a autoavaliação.",
      "<b>Faria sentido</b> envolver a Controladoria desde o início?"
    ] },
    { h: "Mesóclise", p: "Formal writing attaches pronouns inside the future (<i>far-se-á</i>). Nobody says this in a meeting. Say <b>vamos fazer</b> or <b>será feito</b>." },
    { trap: "Spanish irregulars do <b>not</b> carry over: tendría → <b>teria</b>; podría → <b>poderia</b>; sabría → <b>saberia</b>; vendría → <b>viria</b>; pondría → <b>poria</b>; saldría → <b>sairia</b>; habrá → <b>haverá</b>; tendré → <b>terei</b>." },
    { ex: [
      ["Gostaria de agradecer a disponibilidade da senhora.", "I'd like to thank you for your time."],
      ["Seria possível marcarmos uma reunião na semana que vem?", "Would it be possible to schedule a meeting next week?"],
      ["Será que a Câmara vai apoiar a proposta?", "I wonder whether the council will support the proposal."]
    ] }
  ],
  drills: [
    { t: "fill", q: "Se tivéssemos mais tempo, nós ___ (fazer) uma avaliação de impacto.", a: ["faríamos"], x: "<i>Fazer</i> is irregular: <b>faríamos</b>." },
    { t: "fill", q: "Eu ___ (dizer) que a gestão de dados é o primeiro passo.", a: ["diria"], x: "Softened opinion → conditional: <b>diria</b>." },
    { t: "mc", q: "Spanish <i>podría</i> in Portuguese is…", o: ["podría", "poderia", "pôderia"], a: 1, x: "Regular in Portuguese: <b>poderia</b>." },
    { t: "fill", q: "A equipe ___ (trazer) os números na próxima reunião.", a: ["trará", "vai trazer"], x: "<b>trará</b> (formal) or <b>vai trazer</b> (spoken)." },
    { t: "mc", q: "The most polite opening:", o: ["Quero apresentar a certificação.", "Gostaria de apresentar a certificação.", "Vou apresentar a certificação."], a: 1, x: "<b>Gostaria de</b> is the standard courteous opener." },
    { t: "fix", q: "Tendríamos que hablar con el secretario de hacienda.", a: ["Teríamos que falar com o secretário da Fazenda.", "Teríamos que falar com o secretário de Fazenda.", "Precisaríamos falar com o secretário da Fazenda."], x: "tendríamos → <b>teríamos</b>; hablar → <b>falar</b>; con → <b>com</b>; hacienda → <b>Fazenda</b>." },
    { t: "say", q: "Would it be possible to schedule a meeting next week?", a: ["Seria possível marcarmos uma reunião na semana que vem?", "Seria possível marcar uma reunião na próxima semana?", "Seria possível agendar uma reunião na semana que vem?"], x: "<b>Seria possível</b> + infinitive. <i>Marcar/agendar</i> uma reunião." },
    { t: "fill", q: "___ que o prefeito vai aprovar o plano? (I wonder if…)", a: ["Será"], x: "<b>Será que…?</b> is the Brazilian 'I wonder if…'." }
  ]
},
{
  id: "personal-infinitive", group: "verbos", deck: "conj", mins: 4,
  title: "Infinitivo pessoal", en: "Personal infinitive",
  blurb: "Para nós conseguirmos… é importante as secretarias compartilharem…",
  core: [
    "Only Portuguese has it: the infinitive takes person endings <b>-, -, -mos, -em</b> when it has its own subject.",
    "Use it after prepositions and impersonal phrases: <b>para nós conseguirmos</b>, <b>antes de vocês decidirem</b>, <b>é importante as secretarias compartilharem</b>.",
    "It's a shortcut around the subjunctive: <i>para que consigamos</i> = <b>para conseguirmos</b>.",
    "Perfect form: <b>por terem participado</b>, <b>depois de termos analisado</b>."
  ],
  body: [
    { table: { head: P4, rows: [
      ["fazer", "fazer", "fazer", "fazermos", "fazerem"],
      ["ter", "ter", "ter", "termos", "terem"],
      ["vir", "vir", "vir", "virmos", "virem"],
      ["analisar", "analisar", "analisar", "analisarmos", "analisarem"]
    ] } },
    { h: "Typical patterns", list: [
      "<b>Para</b> nós <b>avançarmos</b>, precisamos de um plano de ação.",
      "<b>Antes de</b> vocês <b>decidirem</b>, vale a pena ver os critérios.",
      "<b>Depois de</b> os técnicos <b>analisarem</b> os dados, apresentamos as conclusões.",
      "<b>É fundamental</b> as secretarias <b>trabalharem</b> juntas.",
      "Obrigado <b>por</b> vocês <b>terem vindo</b>."
    ] },
    { trap: "Spanish has no personal infinitive, so Spanish speakers overuse <i>para que + subjuntivo</i>. Spanish <i>para que podamos</i> → natural Portuguese: <b>para podermos</b>. <i>Antes de que decidan</i> → <b>antes de vocês decidirem</b>." },
    { ex: [
      ["Para conseguirmos a certificação, precisamos de um plano claro.", "For us to get the certification, we need a clear plan."],
      ["É importante as secretarias compartilharem os dados entre si.", "It's important for the departments to share data with each other."],
      ["Obrigado por terem nos recebido.", "Thank you for having received us."]
    ] }
  ],
  drills: [
    { t: "fill", q: "Para nós ___ (conseguir) a certificação, precisamos de um plano claro.", a: ["conseguirmos"], x: "Own subject (nós) after <i>para</i> → <b>conseguirmos</b>." },
    { t: "fill", q: "É fundamental as secretarias ___ (trabalhar) juntas.", a: ["trabalharem"], x: "Subject <i>as secretarias</i> → <b>trabalharem</b>." },
    { t: "fill", q: "Obrigado por vocês ___ (vir) à reunião.", a: ["virem"], x: "<i>Vir</i> → <b>virem</b>." },
    { t: "mc", q: "Antes de vocês ___, vejam os dados.", o: ["decidam", "decidirem", "decidir"], a: 1, x: "<i>Antes de</i> + own subject → <b>decidirem</b>." },
    { t: "fix", q: "Para que podamos avanzar, necesitamos datos.", a: ["Para podermos avançar, precisamos de dados.", "Para que possamos avançar, precisamos de dados."], x: "Most natural: <b>Para podermos avançar</b>. Also: necesitamos → <b>precisamos de</b>; datos → <b>dados</b>." },
    { t: "say", q: "Thank you for having received us.", a: ["Obrigado por terem nos recebido.", "Obrigada por terem nos recebido.", "Obrigado por nos receberem.", "Obrigada por nos receberem."], x: "<b>por terem nos recebido</b>; <i>obrigado/obrigada</i> agrees with the speaker." },
    { t: "fill", q: "Depois de os técnicos ___ (analisar) os dados, apresentamos as conclusões.", a: ["analisarem"], x: "<b>analisarem</b>: the technicians are the subject." }
  ]
},
{
  id: "irregular-verbs", group: "verbos", deck: "conj", mins: 6,
  title: "Verbos irregulares", en: "Essential irregular verbs",
  blurb: "Tenho, faço, trago, ponho, posso, sei, dou… and their pasts.",
  core: [
    "Present <b>eu</b> forms that betray Spanish speakers: <b>tenho, faço, digo, trago, ponho, posso, quero, sei, dou, vou, venho, vejo, saio, ouço, peço, perco</b>.",
    "Plural accents: <b>têm</b> (they have), <b>vêm</b> (they come), <b>veem</b> (they see), <b>leem</b>, <b>deem</b>.",
    "<b>Vir</b> vs <b>ver</b>: vim/veio (came) vs vi/viu (saw). <b>Vimos</b> = we saw <i>and</i> we come.",
    "The <b>eu</b> present form feeds the present subjunctive, and the <b>eles</b> preterite feeds both past and future subjunctives."
  ],
  body: [
    { h: "Present indicative", table: { head: ["", "eu", "ele", "nós", "eles"], rows: [
      ["ser", "sou", "é", "somos", "são"],
      ["estar", "estou", "está", "estamos", "estão"],
      ["ter", "tenho", "tem", "temos", "têm"],
      ["ir", "vou", "vai", "vamos", "vão"],
      ["vir", "venho", "vem", "vimos", "vêm"],
      ["ver", "vejo", "vê", "vemos", "veem"],
      ["fazer", "faço", "faz", "fazemos", "fazem"],
      ["dizer", "digo", "diz", "dizemos", "dizem"],
      ["trazer", "trago", "traz", "trazemos", "trazem"],
      ["pôr", "ponho", "põe", "pomos", "põem"],
      ["poder", "posso", "pode", "podemos", "podem"],
      ["querer", "quero", "quer", "queremos", "querem"],
      ["saber", "sei", "sabe", "sabemos", "sabem"],
      ["dar", "dou", "dá", "damos", "dão"],
      ["haver", "hei", "há", "havemos", "hão"],
      ["ouvir", "ouço", "ouve", "ouvimos", "ouvem"],
      ["pedir", "peço", "pede", "pedimos", "pedem"],
      ["perder", "perco", "perde", "perdemos", "perdem"],
      ["sair", "saio", "sai", "saímos", "saem"],
      ["ler", "leio", "lê", "lemos", "leem"]
    ] } },
    { h: "One verb, all the tenses", table: { head: ["", "pretérito (eu/ele)", "subj. presente", "subj. imperfeito", "subj. futuro"], rows: [
      ["ser", "fui / foi", "seja", "fosse", "for"],
      ["ter", "tive / teve", "tenha", "tivesse", "tiver"],
      ["estar", "estive / esteve", "esteja", "estivesse", "estiver"],
      ["fazer", "fiz / fez", "faça", "fizesse", "fizer"],
      ["poder", "pude / pôde", "possa", "pudesse", "puder"],
      ["dizer", "disse / disse", "diga", "dissesse", "disser"],
      ["querer", "quis / quis", "queira", "quisesse", "quiser"],
      ["saber", "soube / soube", "saiba", "soubesse", "souber"],
      ["trazer", "trouxe / trouxe", "traga", "trouxesse", "trouxer"],
      ["vir", "vim / veio", "venha", "viesse", "vier"],
      ["ver", "vi / viu", "veja", "visse", "vir"],
      ["pôr", "pus / pôs", "ponha", "pusesse", "puser"],
      ["dar", "dei / deu", "dê", "desse", "der"],
      ["ir", "fui / foi", "vá", "fosse", "for"]
    ] } },
    { trap: "tengo → <b>tenho</b> · hago → <b>faço</b> · traigo → <b>trago</b> · pongo → <b>ponho</b> · puedo → <b>posso</b> · quiero → <b>quero</b> · sé → <b>sei</b> · doy → <b>dou</b> · voy → <b>vou</b> · vengo → <b>venho</b> · veo → <b>vejo</b> · salgo → <b>saio</b> · oigo → <b>ouço</b> · pido → <b>peço</b> · pierdo → <b>perco</b>." }
  ],
  drills: [
    { t: "fill", q: "Eu ___ (fazer) parte da equipe de dados desde 2020.", a: ["faço"], x: "<i>Fazer</i>, eu, present → <b>faço</b>." },
    { t: "fill", q: "Ontem nós ___ (ir) à Câmara apresentar o projeto.", a: ["fomos"], x: "<i>Ir</i> preterite, nós → <b>fomos</b>." },
    { t: "fill", q: "Eles ___ (ter) muita experiência com avaliação.", a: ["têm"], x: "Plural <b>têm</b> carries a circumflex." },
    { t: "fill", q: "Eu ___ (vir) de Washington só para esta reunião.", a: ["vim"], x: "<i>Vir</i> preterite, eu → <b>vim</b>." },
    { t: "mc", q: "Spanish <i>traje los datos</i> →", o: ["trouxe os dados", "traje os dados", "trazi os dados"], a: 0, x: "<i>Trazer</i> → <b>trouxe</b>." },
    { t: "fill", q: "Eu ___ (saber) que o prazo é curto.", a: ["sei"], x: "<i>Saber</i>, eu → <b>sei</b>." },
    { t: "fill", q: "Eu não ___ (poder) ir ontem.", a: ["pude"], x: "<i>Poder</i> preterite, eu → <b>pude</b>." },
    { t: "fill", q: "Eu ___ (pedir) desculpas pelo atraso.", a: ["peço"], x: "<i>Pedir</i>, eu → <b>peço</b>." },
    { t: "fill", q: "O que o secretário ___ (dizer) na reunião de ontem?", a: ["disse"], x: "<b>disse</b>." },
    { t: "fill", q: "Os técnicos ___ (vir) de várias secretarias.", a: ["vêm", "vieram"], x: "Present: <b>vêm</b>; past: <b>vieram</b>." },
    { t: "fill", q: "Onde vocês ___ (pôr) a apresentação?", a: ["puseram", "põem"], x: "<i>Pôr</i> preterite → <b>puseram</b>." }
  ]
}
];
