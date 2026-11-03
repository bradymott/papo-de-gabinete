"use strict";
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
/* ===== LESSONS: structure, Spanish interference ===== */
const LESSONS_STRUCTURE = [
{
  id: "ser-estar-ficar", group: "estrutura", deck: "grammar", mins: 4,
  title: "Ser, estar e ficar", en: "Ser vs. estar vs. ficar",
  blurb: "Onde fica a prefeitura? A reunião ficou para quinta.",
  core: [
    "<b>Ser</b>: identity, traits, time, origin, where an <i>event</i> takes place (<i>a reunião é no gabinete</i>), and the passive (<i>foi aprovado</i>).",
    "<b>Estar</b>: temporary states and where movable things or people are; <b>estar + gerúndio</b> for actions in progress (<i>estamos analisando</i>).",
    "<b>Ficar</b>: where buildings and places are (<b>onde fica a secretaria?</b>), changes of state (<i>ficou animado</i>), outcomes (<i>a reunião ficou para quinta</i>), and agreements (<i>ela ficou de mandar</i>).",
    "Spanish <i>quedar / quedarse / ponerse</i> usually becomes <b>ficar</b>."
  ],
  body: [
    { h: "Ficar does a lot of work", list: [
      "<b>Location of fixed places:</b> A prefeitura <b>fica</b> no centro.",
      "<b>Becoming:</b> O prefeito <b>ficou</b> animado com os resultados.",
      "<b>Outcome / rescheduling:</b> A reunião <b>ficou</b> para quinta-feira.",
      "<b>Promise to do:</b> A secretária <b>ficou de</b> enviar a planilha.",
      "<b>Pleasure:</b> <b>Fico feliz</b> em ajudar. / <b>Fico</b> à disposição.",
      "<b>Keep doing:</b> A equipe <b>ficou</b> revisando os dados até tarde."
    ] },
    { h: "Ser or estar with adjectives", p: "<i>O processo <b>é</b> rigoroso</i> (a feature of the process) vs. <i>Os dados <b>estão</b> desatualizados</i> (their current state)." },
    { trap: "<i>¿Dónde está el ayuntamiento?</i> → <b>Onde fica a prefeitura?</b> · <i>Quedamos en hablar</i> → <b>Ficamos de conversar</b> / <b>Combinamos de conversar</b> · <i>Me puse nervioso</i> → <b>Fiquei nervoso</b> · <i>Me quedo aquí</i> → <b>Fico aqui</b>." },
    { ex: [
      ["A Secretaria de Planejamento fica no segundo andar.", "The Planning Department is on the second floor."],
      ["A apresentação ficou ótima.", "The presentation turned out great."],
      ["Fico à disposição para qualquer dúvida.", "I'm available for any questions."]
    ] }
  ],
  drills: [
    { t: "mc", q: "Onde ___ a Secretaria de Planejamento?", o: ["está", "fica", "estão"], a: 1, x: "For buildings and places Brazilians say <b>fica</b> (<i>é</i> is also heard). <i>Está</i> sounds like Spanish here." },
    { t: "fill", q: "A reunião ___ (ficar) para quinta-feira.", a: ["ficou"], x: "Rescheduling outcome → <b>ficou</b>." },
    { t: "mc", q: "Os dados ___ desatualizados; precisamos de uma nova coleta.", o: ["são", "estão", "ficam"], a: 1, x: "Current state → <b>estão</b>." },
    { t: "fill", q: "A secretária ___ (ficar) de enviar a planilha até amanhã.", a: ["ficou"], x: "<b>Ficar de</b> + infinitive = to agree/promise to do." },
    { t: "fix", q: "Quedamos en hablar la próxima semana.", a: ["Ficamos de conversar na próxima semana.", "Combinamos de conversar na próxima semana.", "Ficamos de conversar na semana que vem.", "Combinamos de conversar na semana que vem."], x: "<i>Quedar en</i> → <b>ficar de / combinar de</b>; hablar → <b>conversar/falar</b>; la → <b>na</b>." },
    { t: "mc", q: "\"I'm glad to help.\"", o: ["Estoy contento de ayudar.", "Fico feliz em ajudar.", "Estou contento de ajudar."], a: 1, x: "<b>Fico feliz em</b> + infinitive is the natural phrase." },
    { t: "say", q: "The process is rigorous, but the team is ready.", a: ["O processo é rigoroso, mas a equipe está pronta.", "O processo é rigoroso, mas a equipe está preparada."], x: "<b>é</b> (trait) vs <b>está</b> (state). <i>Equipe</i> is feminine." }
  ]
},
{
  id: "prepositions", group: "estrutura", deck: "grammar", mins: 5,
  title: "Preposições e regência", en: "Prepositions, contractions & verb + preposition",
  blurb: "Na reunião, precisar de, participar de, vamos fazer (sem 'a').",
  core: [
    "Contractions are mandatory: <b>em + o = no</b>, <b>em + a = na</b>, <b>de + o = do</b>, <b>de + a = da</b>, <b>por + o = pelo</b>, <b>a + o = ao</b>.",
    "Verbs with fixed prepositions: <b>precisar de</b> (+ noun), <b>participar de</b>, <b>gostar de</b>, <b>concordar com</b>, <b>consistir em</b>, <b>depender de</b>, <b>contar com</b>, <b>investir em</b>.",
    "<b>Ir + infinitivo</b> has no <i>a</i>: <b>vamos publicar</b>, never <s>vamos a publicar</s>.",
    "No 'personal a': <i>conocí al alcalde</i> → <b>conheci o prefeito</b>."
  ],
  body: [
    { h: "Contractions", table: { head: ["", "o", "a", "os", "as"], rows: [
      ["em", "no", "na", "nos", "nas"],
      ["de", "do", "da", "dos", "das"],
      ["por", "pelo", "pela", "pelos", "pelas"],
      ["a", "ao", "à", "aos", "às"]
    ] } },
    { h: "Verbs and their prepositions", list: [
      "<b>precisar de</b> dados (but <i>precisamos fazer</i>: no <i>de</i> before an infinitive in speech)",
      "<b>participar de</b> uma reunião (Spanish: <i>participar en</i>)",
      "<b>gostar de</b>, <b>lembrar de</b> / <b>lembrar-se de</b>, <b>esquecer (de)</b>",
      "<b>concordar com</b>, <b>contar com</b>, <b>casar com</b>, <b>sonhar com</b>",
      "<b>consistir em</b>, <b>pensar em</b>, <b>apostar em</b>, <b>investir em</b>, <b>focar em</b>, <b>basear-se em</b>",
      "<b>depender de</b>, <b>tratar de</b>, <b>dar conta de</b>",
      "<b>interessar-se por</b>, <b>responsabilizar-se por</b>"
    ] },
    { h: "Para vs. por", list: [
      "<b>para</b>: destination, purpose, deadline, recipient: <i>um relatório <b>para</b> o prefeito até sexta</i>",
      "<b>por</b>: cause, means, through, exchange, agent: <i>obrigado <b>pelo</b> convite; enviado <b>por</b> e-mail; aprovado <b>pela</b> Câmara</i>"
    ] },
    { h: "Cities and articles", p: "Most cities take no article: <i>em São Paulo, em Brasília, em Fortaleza</i>. Some do: <b>no Rio</b>, and locals say <b>no Recife</b>. Countries usually do: <b>no Brasil</b>, <b>nos Estados Unidos</b>." },
    { h: "Days and times", p: "<i>El lunes</i> → <b>na segunda(-feira)</b>; <i>los lunes</i> → <b>às segundas</b>; <i>en 2026</i> → <b>em 2026</b>; <i>a las tres</i> → <b>às três</b>." },
    { trap: "en la reunión → <b>na reunião</b> · del → <b>do</b> · al → <b>ao</b> · con → <b>com</b> · necesitamos datos → <b>precisamos de dados</b> · participar en → <b>participar de</b> · vamos a hacer → <b>vamos fazer</b> · me gusta la idea → <b>gosto da ideia</b>." },
    { ex: [
      ["A cidade vai participar da certificação no ano que vem.", "The city will take part in the certification next year."],
      ["O projeto consiste em três etapas.", "The project consists of three stages."],
      ["Podemos contar com o apoio da Controladoria?", "Can we count on the Comptroller's Office's support?"]
    ] }
  ],
  drills: [
    { t: "fill", q: "Precisamos ___ mais dados sobre o transporte público.", a: ["de"], x: "<b>Precisar de</b> + noun." },
    { t: "fill", q: "A cidade vai participar ___ certificação.", a: ["da"], x: "<b>Participar de</b> + a certificação → <b>da</b>." },
    { t: "mc", q: "Spanish <i>Vamos a publicar los datos</i> →", o: ["Vamos a publicar os dados.", "Vamos publicar os dados."], a: 1, x: "<b>Ir + infinitivo</b>, no <i>a</i>." },
    { t: "fill", q: "O projeto consiste ___ três etapas.", a: ["em"], x: "<b>Consistir em</b>." },
    { t: "fill", q: "Concordo ___ a senhora.", a: ["com"], x: "<b>Concordar com</b>." },
    { t: "fix", q: "Conocí al alcalde en la reunión del lunes.", a: ["Conheci o prefeito na reunião de segunda-feira.", "Conheci o prefeito na reunião de segunda.", "Eu conheci o prefeito na reunião de segunda-feira."], x: "No personal <i>a</i>; alcalde → <b>prefeito</b>; en la → <b>na</b>; del lunes → <b>de segunda(-feira)</b>." },
    { t: "fill", q: "Obrigado ___ seu tempo.", a: ["pelo"], x: "Thanks <i>for</i> → <b>por</b> + o → <b>pelo</b>." },
    { t: "mc", q: "Trabalho ___ Rio de Janeiro.", o: ["em", "no", "en"], a: 1, x: "Rio takes the article: <b>no Rio</b>." },
    { t: "fill", q: "Vamos nos basear ___ evidências.", a: ["em"], x: "<b>Basear-se em</b>." },
    { t: "fix", q: "Me gusta mucho la propuesta del secretario.", a: ["Gosto muito da proposta do secretário.", "Eu gosto muito da proposta do secretário."], x: "Portuguese flips the structure: <b>eu gosto de</b> + <i>a proposta</i> → <b>da proposta</b>." }
  ]
},
{
  id: "pronouns", group: "estrutura", deck: "grammar", mins: 5,
  title: "Pronomes e tratamento", en: "Pronouns, placement & forms of address",
  blurb: "O senhor / a senhora, lhe, a gente, dele / dela.",
  core: [
    "Address officials as <b>o senhor / a senhora</b> (verb in 3rd person) until they invite <i>você</i>. Titles: <b>Prefeito(a)</b>, <b>Secretário(a)</b>, <b>Vereador(a)</b> + name.",
    "Brazilian speech puts pronouns <b>before</b> the main verb: <i>vou <b>lhe</b> enviar</i>, <i>a gente <b>se</b> fala</i>, <i><b>me</b> permita</i>.",
    "<b>A gente</b> = nós with a <b>singular</b> verb: <i>a gente <b>vai</b></i>, never <s>a gente vamos</s>.",
    "Avoid ambiguous <b>seu</b>: say <b>dele / dela / do senhor</b>."
  ],
  body: [
    { h: "Forms of address", list: [
      "Speaking to a mayor: <i>Prefeita, a senhora acredita que…?</i> · <i>O senhor gostaria que eu detalhasse?</i>",
      "Ceremonies and Câmara sessions: <b>Vossa Excelência</b> (verb in 3rd person).",
      "In writing: <b>Excelentíssimo(a) Senhor(a) Prefeito(a)</b>.",
      "<b>Doutor(a)</b> is a common courtesy for lawyers, prosecutors and judges.",
      "Peers and technical teams switch to <b>você</b> quickly; follow their lead."
    ] },
    { h: "Object pronouns in professional speech", list: [
      "<b>lhe</b> = to you (formal) / to him / to her: <i>Posso <b>lhe</b> fazer uma pergunta?</i>",
      "<b>o / a</b> = you / him / her as a direct object: <i>Vou <b>acompanhá-lo</b> até a sala.</i>",
      "Colloquial <i>vi ele</i> is everywhere, but in a meeting with officials prefer <i><b>o</b> vi</i> or rephrase.",
      "Safe and very Brazilian: <i>Vou enviar <b>para o senhor</b>.</i>"
    ] },
    { trap: "le dije → <b>eu disse a ele</b> / <b>eu lhe disse</b> · se lo envío → <b>envio para o senhor</b> · usted → <b>o senhor / a senhora</b> · ustedes → <b>vocês / os senhores</b> · nos vemos → <b>a gente se vê</b> · me gusta → <b>eu gosto de</b> · le interesa → <b>ele se interessa por</b>." },
    { ex: [
      ["A senhora me permite uma observação?", "Would you allow me one observation?"],
      ["Vou lhe enviar o material ainda hoje.", "I'll send you the material today."],
      ["A gente se fala na semana que vem.", "We'll talk next week."]
    ] }
  ],
  drills: [
    { t: "mc", q: "Addressing the mayor:", o: ["Você poderia nos receber?", "O senhor poderia nos receber?", "Usted podría recibirnos?"], a: 1, x: "<b>O senhor</b> with a 3rd-person verb." },
    { t: "fill", q: "Posso ___ fazer uma pergunta, Prefeita?", a: ["lhe"], x: "<b>lhe</b> = to you (formal)." },
    { t: "fix", q: "Me gusta mucho la propuesta.", a: ["Gosto muito da proposta.", "Eu gosto muito da proposta."], x: "<b>Gostar de</b>; the person is the subject." },
    { t: "mc", q: "A gente ___ conversar amanhã.", o: ["vamos", "vai"], a: 1, x: "<i>A gente</i> takes a singular verb: <b>vai</b>." },
    { t: "fix", q: "Le dije al secretario que los datos están listos.", a: ["Eu disse ao secretário que os dados estão prontos.", "Disse ao secretário que os dados estão prontos.", "Eu falei para o secretário que os dados estão prontos."], x: "le dije → <b>disse</b>; al → <b>ao</b>; listos → <b>prontos</b>." },
    { t: "mc", q: "\"His report\" (no ambiguity):", o: ["o seu relatório", "o relatório dele"], a: 1, x: "<b>dele</b> removes the his/your ambiguity of <i>seu</i>." },
    { t: "say", q: "Would you (sir) like me to go into more detail on any point?", a: ["O senhor gostaria que eu detalhasse algum ponto?", "O senhor gostaria que eu entrasse em mais detalhes sobre algum ponto?"], x: "<b>O senhor gostaria que eu</b> + past subjunctive." }
  ]
},
{
  id: "gender-agreement", group: "estrutura", deck: "vocab", mins: 4,
  title: "Gênero e concordância", en: "Gender & agreement",
  blurb: "A equipe, a análise, a porcentagem, a vantagem…",
  core: [
    "Nouns ending in <b>-agem</b> are <b>feminine</b>: <b>a</b> abordagem, mensagem, vantagem, porcentagem, linguagem, viagem. (Spanish: <i>el mensaje, el porcentaje</i>.)",
    "Work words that flip gender from Spanish: <b>a equipe</b> (el equipo), <b>a análise</b> (el análisis), <b>a origem</b>, <b>a dor</b>, <b>a cor</b>, <b>a ponte</b>; <b>o leite</b>, <b>o sangue</b>, <b>o costume</b>.",
    "Adjectives and participles agree: <i>as metas foram <b>cumpridas</b></i>, <i>a equipe está <b>pronta</b></i>.",
    "<b>Obrigado / obrigada</b> agrees with the speaker."
  ],
  body: [
    { h: "Heterogenéricos (gender differs from Spanish)", table: { head: ["português", "español", "", "", ""], rows: [
      ["a equipe", "el equipo", "", "", ""],
      ["a análise", "el análisis", "", "", ""],
      ["a porcentagem", "el porcentaje", "", "", ""],
      ["a abordagem", "el abordaje", "", "", ""],
      ["a mensagem", "el mensaje", "", "", ""],
      ["a origem", "el origen", "", "", ""],
      ["a ponte", "el puente", "", "", ""],
      ["a cor / a dor", "el color / el dolor", "", "", ""],
      ["o leite / o sangue", "la leche / la sangre", "", "", ""],
      ["o costume", "la costumbre", "", "", ""]
    ] } },
    { h: "Same as Spanish (don't overcorrect)", p: "<b>o problema, o sistema, o tema, o programa, o dilema</b> are masculine; <b>a certificação, a gestão, a cidade</b> are feminine." },
    { trap: "<i>El equipo hizo un análisis muy bueno</i> → <b>A equipe fez uma análise muito boa</b>. Three agreement changes in one sentence." },
    { ex: [
      ["A equipe da prefeitura fez uma análise muito boa.", "City hall's team did a very good analysis."],
      ["Essa abordagem tem muitas vantagens.", "This approach has many advantages."],
      ["A porcentagem de metas cumpridas subiu.", "The percentage of targets met went up."]
    ] }
  ],
  drills: [
    { t: "mc", q: "___ equipe da prefeitura é excelente.", o: ["O", "A"], a: 1, x: "<b>A equipe</b> is feminine." },
    { t: "mc", q: "Qual é ___ porcentagem de metas cumpridas?", o: ["o", "a"], a: 1, x: "-agem → feminine: <b>a porcentagem</b>." },
    { t: "fill", q: "Essa abordagem tem muitas ___ (vantagem).", a: ["vantagens"], x: "Plural of -agem → <b>-agens</b>." },
    { t: "mc", q: "___ análise dos dados ficou pronta.", o: ["O", "A"], a: 1, x: "<b>A análise</b> (el análisis in Spanish)." },
    { t: "fix", q: "El equipo hizo un análisis muy bueno.", a: ["A equipe fez uma análise muito boa.", "O time fez uma análise muito boa."], x: "<b>A equipe</b> / <b>uma análise muito boa</b>; hizo → <b>fez</b>; muy → <b>muito</b>." },
    { t: "mc", q: "Spanish <i>el origen de los datos</i> →", o: ["o origem dos dados", "a origem dos dados"], a: 1, x: "<b>A origem</b> is feminine." },
    { t: "fill", q: "As metas foram ___ (cumprir) antes do prazo.", a: ["cumpridas"], x: "Participle agrees with <i>as metas</i>: <b>cumpridas</b>." }
  ]
},
{
  id: "false-friends", group: "espanhol", deck: "vocab", mins: 5,
  title: "Falsos amigos", en: "Spanish → Portuguese false friends",
  blurb: "Propina, oficina, contestar, largo, apellido… and why they matter.",
  core: [
    "<b>propina</b> in Portuguese means a <b>bribe</b>. A tip is <b>gorjeta</b>. Never say it by accident in a government meeting.",
    "<b>presupuesto</b> → <b>orçamento</b>; <b>oficina</b> → <b>escritório</b>; <b>contestar</b> → <b>responder</b>; <b>largo</b> → <b>longo / comprido</b>.",
    "<b>funcionario público</b> → <b>servidor público</b>; <b>despacho</b> → <b>gabinete / sala</b>; <b>puesto</b> → <b>cargo</b>.",
    "<b>datos</b> → <b>dados</b>, but Portuguese <b>data</b> = date. <b>billón</b> (10¹²) → <b>trilhão</b>; <b>mil millones</b> → <b>um bilhão</b>."
  ],
  body: [
    { h: "Government & work", table: { head: ["español", "≠ português", "say instead", "", ""], rows: [
      ["propina (tip)", "propina = bribe", "gorjeta", "", ""],
      ["presupuesto", "pressuposto = assumption", "orçamento", "", ""],
      ["oficina (office)", "oficina = workshop/garage", "escritório", "", ""],
      ["contestar (answer)", "contestar = dispute", "responder", "", ""],
      ["funcionario público", "funcionário = employee", "servidor público", "", ""],
      ["despacho (office)", "despacho = ruling, dispatch", "gabinete / sala", "", ""],
      ["investigación (research)", "investigação = inquiry", "pesquisa", "", ""],
      ["encuesta", "—", "pesquisa / enquete", "", ""],
      ["competencia (rivalry)", "competência = skill, jurisdiction", "concorrência", "", ""],
      ["firmar (sign)", "firmar = establish", "assinar (o convênio)", "", ""],
      ["quitar (remove)", "quitar = pay off a debt", "tirar / remover", "", ""],
      ["apenas (barely)", "apenas = only", "mal", "", ""],
      ["todavía (still)", "todavia = however", "ainda", "", ""],
      ["pronto (soon)", "pronto = ready", "logo / em breve", "", ""],
      ["fecha (date)", "fecha = closes", "data", "", ""],
      ["billón (10¹²)", "bilhão = 10⁹", "trilhão", "", ""]
    ] } },
    { h: "Everyday traps", table: { head: ["español", "≠ português", "say instead", "", ""], rows: [
      ["largo (long)", "largo = wide", "longo / comprido", "", ""],
      ["apellido", "apelido = nickname", "sobrenome", "", ""],
      ["acordarse", "acordar = wake up / agree", "lembrar(-se)", "", ""],
      ["borrar (erase)", "borrar = smudge", "apagar", "", ""],
      ["exquisito", "esquisito = weird", "delicioso / requintado", "", ""],
      ["embarazada", "embaraçada = embarrassed", "grávida", "", ""],
      ["rato (a while)", "rato = rat", "um instante / um pouco", "", ""],
      ["cena (dinner)", "cena = scene", "jantar", "", ""],
      ["taza", "taça = wine glass", "xícara", "", ""],
      ["vaso (glass)", "vaso = vase", "copo", "", ""],
      ["sitio", "sítio = small farm", "lugar / local", "", ""],
      ["cola (line)", "cola = glue", "fila", "", ""],
      ["rojo", "roxo = purple", "vermelho", "", ""],
      ["ganancia (profit)", "ganância = greed", "lucro", "", ""],
      ["exprimir (squeeze)", "exprimir = express", "espremer", "", ""]
    ] } },
    { trap: "When in doubt, picture the meeting: <i>a propina</i>, <i>o funcionário</i> and <i>a investigação</i> change the meaning of a whole sentence. Use <b>gorjeta</b>, <b>servidor</b> and <b>pesquisa</b>." }
  ],
  drills: [
    { t: "mc", q: "Spanish <i>presupuesto</i> (budget) →", o: ["pressuposto", "orçamento", "presupuesto"], a: 1, x: "<b>Orçamento</b>. <i>Pressuposto</i> means assumption." },
    { t: "mc", q: "A tip for the waiter is…", o: ["a propina", "a gorjeta"], a: 1, x: "<b>Gorjeta</b>. <i>Propina</i> = bribe!" },
    { t: "mc", q: "\"Please answer by Friday.\"", o: ["Por favor, contestem até sexta.", "Por favor, respondam até sexta."], a: 1, x: "<b>Responder</b>. <i>Contestar</i> = to dispute." },
    { t: "mc", q: "\"Civil servants\" →", o: ["funcionários públicos", "servidores públicos"], a: 1, x: "<b>Servidores públicos</b> is the standard Brazilian term." },
    { t: "fix", q: "Vamos hacer una investigación con los ciudadanos.", a: ["Vamos fazer uma pesquisa com os cidadãos."], x: "Survey/research → <b>pesquisa</b>; <i>investigação</i> sounds like a police inquiry." },
    { t: "mc", q: "\"The meeting date\" →", o: ["a data da reunião", "a fecha da reunião", "o dado da reunião"], a: 0, x: "<b>Data</b> = date; <b>dados</b> = data." },
    { t: "fill", q: "Ainda não temos os números. (Spanish: <i>todavía</i>) → ___ não temos os números.", a: ["Ainda"], x: "<b>Ainda</b>. <i>Todavia</i> = however." },
    { t: "mc", q: "Spanish <i>mil millones de reales</i> →", o: ["um bilhão de reais", "mil milhões de reais", "um bilião de reais"], a: 0, x: "Brazil: <b>um bilhão</b> (10⁹). <i>Bilião</i> is Portugal." },
    { t: "mc", q: "\"What's your last name?\"", o: ["Qual é o seu apelido?", "Qual é o seu sobrenome?"], a: 1, x: "<b>Sobrenome</b>. <i>Apelido</i> = nickname." }
  ]
},
{
  id: "portunhol", group: "espanhol", deck: "vocab", mins: 6,
  title: "Portunhol", en: "Spanish words & structures creeping in",
  blurb: "pero → mas, muy → muito, hay → há/tem, -ción → -ção…",
  core: [
    "Small words leak first: <b>pero → mas / porém</b>, <b>entonces → então</b>, <b>también → também</b>, <b>muy / mucho → muito</b>, <b>ya → já</b>, <b>hay → há / tem</b>, <b>aunque → embora</b>, <b>o sea → ou seja</b>.",
    "Articles: <b>el → o</b>, <b>la → a</b>, <b>los → os</b>, <b>lo que → o que</b>, <b>del → do</b>, <b>al → ao</b>, <b>en → em / no / na</b>, <b>con → com</b>.",
    "Structures: <b>vamos a hacer → vamos fazer</b>; <b>hay que → é preciso / temos que</b>; <b>suelo → costumo</b>; <b>llevo tres años → trabalho há três anos</b>.",
    "Endings: <b>-ción → -ção</b>, <b>-dad → -dade</b>, <b>-ble → -vel</b> (responsable → responsável, sostenible → sustentável), <b>-miento → -mento</b>."
  ],
  body: [
    { h: "Connectors", table: { head: ["español", "português", "", "", ""], rows: [
      ["pero", "mas / porém", "", "", ""],
      ["sin embargo", "no entanto / porém / contudo", "", "", ""],
      ["aunque", "embora (+ subj.) / apesar de", "", "", ""],
      ["además", "além disso", "", "", ""],
      ["o sea / es decir", "ou seja / isto é", "", "", ""],
      ["entonces", "então", "", "", ""],
      ["bueno…", "bom… / bem…", "", "", ""],
      ["hasta", "até", "", "", ""],
      ["mientras", "enquanto", "", "", ""],
      ["según", "segundo / de acordo com", "", "", ""],
      ["a través de", "por meio de", "", "", ""],
      ["luego / después", "depois / logo", "", "", ""]
    ] } },
    { h: "Government nouns", table: { head: ["español", "português", "", "", ""], rows: [
      ["alcalde / intendente", "prefeito(a)", "", "", ""],
      ["ayuntamiento / alcaldía / municipalidad", "prefeitura", "", "", ""],
      ["concejo municipal / concejal", "Câmara Municipal / vereador(a)", "", "", ""],
      ["hacienda", "Fazenda", "", "", ""],
      ["ciudadanos", "cidadãos / munícipes", "", "", ""],
      ["desarrollo", "desenvolvimento", "", "", ""],
      ["plazo", "prazo", "", "", ""],
      ["herramienta", "ferramenta", "", "", ""],
      ["seguimiento", "acompanhamento / monitoramento", "", "", ""],
      ["tablero de control", "painel (de indicadores)", "", "", ""],
      ["rendición de cuentas", "prestação de contas", "", "", ""],
      ["mejora", "melhoria", "", "", ""],
      ["logro", "conquista / resultado", "", "", ""],
      ["planificación", "planejamento", "", "", ""]
    ] } },
    { h: "Structures", list: [
      "<i>Vamos a presentar</i> → <b>Vamos apresentar</b>",
      "<i>Hay que mejorar</i> → <b>É preciso melhorar</b> / <b>Temos que melhorar</b>",
      "<i>Suelo reunirme los lunes</i> → <b>Costumo me reunir às segundas</b>",
      "<i>Llevo cinco años en el gobierno</i> → <b>Estou no governo há cinco anos</b>",
      "<i>Volver a hacer</i> → <b>fazer de novo</b>",
      "<i>Darse cuenta</i> → <b>perceber</b>",
      "<i>Echar de menos</i> → <b>sentir falta de</b>"
    ] },
    { trap: "Spanish fillers give you away instantly: <i>este…</i>, <i>bueno…</i>, <i>o sea…</i>, <i>vale</i>. Brazilian fillers: <b>então…</b>, <b>bom…</b>, <b>olha…</b>, <b>na verdade…</b>, <b>né?</b>" }
  ],
  drills: [
    { t: "fix", q: "Pero el problema es que no hay datos.", a: ["Mas o problema é que não há dados.", "Mas o problema é que não tem dados.", "Porém o problema é que não há dados."], x: "pero → <b>mas</b>; el → <b>o</b>; es → <b>é</b>; no hay → <b>não há / não tem</b>; datos → <b>dados</b>." },
    { t: "fix", q: "Entonces, vamos a hacer una encuesta con los ciudadanos.", a: ["Então, vamos fazer uma pesquisa com os cidadãos.", "Então vamos fazer uma pesquisa com os cidadãos."], x: "<b>Então</b>, <b>vamos fazer</b> (no 'a'), <b>pesquisa</b>, <b>com os cidadãos</b>." },
    { t: "fix", q: "Llevo cinco años trabajando en el gobierno.", a: ["Trabalho no governo há cinco anos.", "Estou no governo há cinco anos.", "Faz cinco anos que trabalho no governo."], x: "<i>Llevar + time</i> → <b>há</b> + time or <b>faz … que</b>." },
    { t: "mc", q: "Spanish <i>hay que</i> →", o: ["hay que", "é preciso", "há que"], a: 1, x: "<b>É preciso</b> (or <i>temos que / tem que</i>)." },
    { t: "mc", q: "<i>sostenible</i> →", o: ["sostenível", "sustentável", "sustenível"], a: 1, x: "-ble → <b>-vel</b>: <b>sustentável</b>." },
    { t: "fix", q: "Es muy importante que el ayuntamiento publique los datos.", a: ["É muito importante que a prefeitura publique os dados."], x: "es → <b>é</b>; muy → <b>muito</b>; ayuntamiento → <b>prefeitura</b>; los → <b>os</b>." },
    { t: "fix", q: "Suelo reunirme con el alcalde los lunes.", a: ["Costumo me reunir com o prefeito às segundas.", "Costumo me reunir com o prefeito às segundas-feiras.", "Costumo me reunir com o prefeito na segunda-feira."], x: "<b>Costumo</b> + infinitive; con el alcalde → <b>com o prefeito</b>; los lunes → <b>às segundas</b>." },
    { t: "mc", q: "<i>responsable</i> →", o: ["responsable", "responsável", "responsábel"], a: 1, x: "<b>responsável</b>." },
    { t: "say", q: "However, there is a lot of data that nobody uses.", a: ["No entanto, há muitos dados que ninguém usa.", "Porém, há muitos dados que ninguém usa.", "No entanto, tem muitos dados que ninguém usa.", "Mas há muitos dados que ninguém usa."], x: "<b>No entanto / porém</b>, <b>há</b>, <b>muitos dados</b>, <b>ninguém</b>." },
    { t: "fix", q: "Además, la evaluación del programa fue muy positiva.", a: ["Além disso, a avaliação do programa foi muito positiva."], x: "<b>Além disso</b>, <b>a avaliação</b>, <b>do programa</b>, <b>foi muito</b>." }
  ]
}
];
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
/* ================= platform: installed app vs. inside Claude ================= */
const IN_CLAUDE = !!(window.claude && typeof window.claude.use === "function");
const STANDALONE_APP = !IN_CLAUDE && !!window.PAPO_STANDALONE;
const IS_INSTALLED = !!((window.matchMedia && matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true);
const IS_IOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

/* API keys live only in this device's storage and go only to the provider they belong to. */
const Keys = {
  v: {},
  load() { try { this.v = JSON.parse(localStorage.getItem("papo.keys") || "{}") || {}; } catch (e) { this.v = {}; } return this; },
  get(k) { return String(this.v[k] || "").trim(); },
  has(k) { return !!this.get(k); },
  set(k, val) { const s = String(val || "").trim(); if (s) this.v[k] = s; else delete this.v[k]; try { localStorage.setItem("papo.keys", JSON.stringify(this.v)); } catch (e) { /* storage blocked */ } },
  masked(k) { const s = this.get(k); return s ? s.slice(0, 7) + "…" + s.slice(-4) : ""; }
}.load();

/* ---------- Claude via the official Anthropic SDK (bundled as window.Anthropic) ---------- */
const ClaudeAPI = {
  client: null, clientKey: "",
  model: "claude-opus-5-5",
  ensure() {
    const key = Keys.get("anthropic");
    if (!key || !window.Anthropic) { this.client = null; return null; }
    if (!this.client || this.clientKey !== key) {
      this.client = new window.Anthropic({ apiKey: key, dangerouslyAllowBrowser: true, maxRetries: 2 });
      this.clientKey = key;
    }
    return this.client;
  },
  async call(prompt, opts = {}) {
    const client = this.ensure();
    if (!client) throw { code: "nokey" };
    const effort = opts.modelTier === "quick" ? "low" : "medium";
    let msg;
    try {
      const stream = client.beta.messages.stream({
        model: this.model,
        max_tokens: opts.maxTokens || 16000,
        betas: ["server-side-fallback-2026-07-01"],
        fallbacks: "default",
        output_config: { effort },
        messages: [{ role: "user", content: prompt }]
      }, opts.signal ? { signal: opts.signal } : undefined);
      if (opts.onText) stream.on("text", (delta, snapshot) => { try { opts.onText({ text: snapshot, delta }); } catch (e) { /* UI callback */ } });
      msg = await stream.finalMessage();
    } catch (e) { throw this.mapErr(e); }
    if (msg.stop_reason === "refusal") throw { code: "refused" };
    const text = msg.content.filter(b => b.type === "text").map(b => b.text).join("").trim();
    if (!text) throw { code: "empty_completion" };
    return { text, truncated: msg.stop_reason === "max_tokens" };
  },
  mapErr(e) {
    const A = window.Anthropic;
    if (!A || !e) return { code: "upstream_error" };
    if (e.code && !(e instanceof Error)) return e;
    if (e instanceof A.APIUserAbortError) return { code: "cancelled" };
    if (e instanceof A.AuthenticationError || e instanceof A.PermissionDeniedError) return { code: "bad_key" };
    if (e instanceof A.RateLimitError) return { code: "rate_limited" };
    if (e instanceof A.BadRequestError) return { code: "bad_request", message: e.message };
    if (e instanceof A.APIConnectionError) return { code: navigator.onLine === false ? "offline" : "upstream_error", message: e.message };
    if (e instanceof A.APIError) return { code: "upstream_error", message: e.message };
    return { code: "upstream_error", message: String(e.message || e) };
  }
};
function parseLooseJSON(t) {
  const s = String(t || "").trim();
  try { return JSON.parse(s); } catch (e) { /* try harder */ }
  const fence = s.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) { try { return JSON.parse(fence[1]); } catch (e) { /* continue */ } }
  const starts = ["{", "["].map(c => s.indexOf(c)).filter(i => i >= 0);
  const i = starts.length ? Math.min(...starts) : -1, j = Math.max(s.lastIndexOf("}"), s.lastIndexOf("]"));
  if (i >= 0 && j > i) { try { return JSON.parse(s.slice(i, j + 1)); } catch (e) { /* fall through */ } }
  throw { code: "invalid_json" };
}

/* ---------- realistic voices: OpenAI or ElevenLabs text-to-speech ---------- */
const OA_VOICES = [
  ["coral", "f"], ["nova", "f"], ["shimmer", "f"], ["sage", "f"], ["alloy", "f"],
  ["onyx", "m"], ["ash", "m"], ["echo", "m"], ["verse", "m"], ["ballad", "m"]
];
function silentWavURL() {
  const n = 800, buf = new ArrayBuffer(44 + n * 2), v = new DataView(buf);
  const w = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
  w(0, "RIFF"); v.setUint32(4, 36 + n * 2, true); w(8, "WAVE"); w(12, "fmt "); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, 16000, true); v.setUint32(28, 32000, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true); w(36, "data"); v.setUint32(40, n * 2, true);
  return URL.createObjectURL(new Blob([buf], { type: "audio/wav" }));
}
function oaInstructions(p) {
  const base = "Speak natural Brazilian Portuguese with a native Brazilian accent (São Paulo). Never use a European Portuguese, Spanish or American accent. Conversational pace, like a real work meeting.";
  return p ? `${base} You are ${p.name}, ${p.role}. Personality: ${p.tone}.` : `${base} You are a clear, friendly Portuguese teacher reading an example sentence.`;
}
const Cloud = {
  audio: null, silent: "", unlocked: false, cache: new Map(), elVoices: null, elLoading: null,
  provider() {
    if (IN_CLAUDE) return "device";
    const want = P.voiceProvider || "auto";
    if (want === "device") return "device";
    if (want === "openai") return Keys.has("openai") ? "openai" : "device";
    if (want === "elevenlabs") return Keys.has("elevenlabs") ? "elevenlabs" : "device";
    return Keys.has("elevenlabs") ? "elevenlabs" : Keys.has("openai") ? "openai" : "device";
  },
  initAudio() {
    if (this.audio || IN_CLAUDE) return;
    this.audio = new Audio();
    this.audio.setAttribute("playsinline", "");
    this.audio.preload = "auto";
    try { if (navigator.audioSession) navigator.audioSession.type = "playback"; } catch (e) { /* older iOS */ }
    this.silent = silentWavURL();
    const unlock = () => {
      if (this.unlocked) return;
      this.unlocked = true;
      try {
        this.audio.src = this.silent;
        const p = this.audio.play();
        if (p && p.then) p.then(() => { if (this.audio.src === this.silent) this.audio.pause(); }).catch(() => { this.unlocked = false; });
      } catch (e) { this.unlocked = false; }
    };
    document.addEventListener("touchend", unlock, { capture: true });
    document.addEventListener("click", unlock, { capture: true });
  },
  async loadElVoices(force) {
    if (!Keys.has("elevenlabs")) return [];
    if (this.elVoices && !force) return this.elVoices;
    if (this.elLoading && !force) return this.elLoading;
    this.elLoading = (async () => {
      const res = await fetch("https://api.elevenlabs.io/v1/voices", { headers: { "xi-api-key": Keys.get("elevenlabs") } });
      if (!res.ok) throw { code: "tts_http", provider: "elevenlabs", status: res.status };
      const j = await res.json();
      this.elVoices = (j.voices || []).map(v => ({ id: v.voice_id, name: v.name, labels: v.labels || {}, description: v.description || "" }));
      return this.elVoices;
    })();
    try { return await this.elLoading; } finally { this.elLoading = null; }
  },
  isBrazilian(v) {
    const t = [v.labels.accent, v.labels.language, v.labels.description, v.name, v.description].join(" ").toLowerCase();
    return /brazil|brasil|portugu|pt-br/.test(t);
  },
  voiceOptions(provider) {
    if (provider === "openai") return OA_VOICES.map(([id, g]) => ({ id, label: id + (g === "f" ? " · feminina" : " · masculina") }));
    if (provider === "elevenlabs") return (this.elVoices || []).map(v => ({ id: v.id, label: v.name + (this.isBrazilian(v) ? " · BR" : "") + (v.labels.gender ? " · " + v.labels.gender : "") }));
    return [];
  },
  voiceId(provider, personaId, gender) {
    const map = (P.voiceMaps && P.voiceMaps[provider]) || {};
    if (map[personaId]) return map[personaId];
    const order = gender && PERSONA_ORDER[gender] ? Math.max(0, PERSONA_ORDER[gender].indexOf(personaId)) : 0;
    if (provider === "openai") {
      if (personaId === "coach") return "sage";
      const list = OA_VOICES.filter(v => v[1] === (gender || "f")).map(v => v[0]);
      return list[order % list.length];
    }
    if (provider === "elevenlabs") {
      const all = this.elVoices || []; if (!all.length) return null;
      const br = all.filter(v => this.isBrazilian(v));
      const base = br.length ? br : all;
      const g = gender === "m" ? "male" : "female";
      const same = base.filter(v => String(v.labels.gender || "").toLowerCase() === g);
      const pool = same.length ? same : base;
      return pool[(personaId === "coach" ? 0 : order) % pool.length].id;
    }
    return null;
  },
  async fetchAudio(text, opts) {
    const provider = opts.provider || this.provider();
    const p = opts.persona || null;
    const pid = p ? p.id : "coach", gender = p ? p.gender : (opts.gender || "f");
    if (provider === "elevenlabs" && !this.elVoices) await this.loadElVoices();
    const vid = this.voiceId(provider, pid, gender);
    if (!vid) throw { code: "no_voice", provider };
    const ck = provider + "|" + vid + "|" + text;
    if (this.cache.has(ck)) return this.cache.get(ck);
    let res;
    if (provider === "openai") {
      res = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: { "Authorization": "Bearer " + Keys.get("openai"), "Content-Type": "application/json" },
        body: JSON.stringify({ model: "gpt-4o-mini-tts", voice: vid, input: text, response_format: "mp3", instructions: oaInstructions(p) })
      });
    } else {
      res = await fetch("https://api.elevenlabs.io/v1/text-to-speech/" + encodeURIComponent(vid) + "?output_format=mp3_44100_128", {
        method: "POST",
        headers: { "xi-api-key": Keys.get("elevenlabs"), "Content-Type": "application/json", "Accept": "audio/mpeg" },
        body: JSON.stringify({ text, model_id: "eleven_multilingual_v2", voice_settings: { stability: 0.45, similarity_boost: 0.8 } })
      });
    }
    if (!res.ok) throw { code: "tts_http", provider, status: res.status, message: (await res.text().catch(() => "")).slice(0, 240) };
    const url = URL.createObjectURL(await res.blob());
    this.cache.set(ck, url);
    if (this.cache.size > 80) { const [k0, u0] = this.cache.entries().next().value; URL.revokeObjectURL(u0); this.cache.delete(k0); }
    return url;
  },
  async play(text, opts, isCurrent) {
    this.initAudio();
    const url = await this.fetchAudio(text, opts);
    if (!isCurrent()) return;
    const a = this.audio;
    a.onended = a.onerror = null;
    a.src = url;
    a.defaultPlaybackRate = a.playbackRate = opts.rate || 1;
    try { a.preservesPitch = true; } catch (e) { /* not supported */ }
    a.onended = () => { if (isCurrent()) opts.onend && opts.onend(); };
    a.onerror = () => { if (isCurrent()) opts.onend && opts.onend(); };
    await a.play();
  },
  stop() { if (this.audio) { try { this.audio.pause(); } catch (e) { /* ignore */ } } }
};
function cloudErr(e) {
  const who = e && e.provider === "elevenlabs" ? "ElevenLabs" : "OpenAI";
  if (e && e.code === "tts_http" && (e.status === 401 || e.status === 403)) return who + " rejected the key. Check it in Conexões.";
  if (e && e.code === "tts_http" && e.status === 429) return who + ": usage limit reached. Using the iPhone voice for now.";
  if (e && e.code === "no_voice") return "No ElevenLabs voice found. Add one in your ElevenLabs account.";
  if (e && e.name === "NotAllowedError") return "Tap a play button to hear the voice.";
  return "The realistic voice didn't load. Using the iPhone voice instead.";
}

/* ---------- microphone: record, then transcribe (OpenAI) or recognize on device ---------- */
const Mic = {
  state: "idle", active: null, t0: 0,
  mode() {
    if (IN_CLAUDE) return null;
    const canRec = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
    if (canRec && Keys.has("openai")) return "openai";
    if (window.SpeechRecognition || window.webkitSpeechRecognition) return "browser";
    return null;
  },
  async start() {
    const m = this.mode();
    if (!m) throw { code: "no_mic" };
    if (this.state !== "idle") return;
    this.active = m; this.t0 = Date.now(); this.levels = [];
    if (m === "browser") {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      const sr = new SR();
      sr.lang = "pt-BR"; sr.continuous = true; sr.interimResults = true;
      this.final = ""; this.interim = ""; this.srErr = null;
      sr.onresult = e => { let f = "", n = ""; for (let i = 0; i < e.results.length; i++) { const r = e.results[i]; if (r.isFinal) f += r[0].transcript + " "; else n += r[0].transcript; } this.final = f; this.interim = n; };
      sr.onerror = e => { this.srErr = e.error; };
      this.srDone = new Promise(res => { sr.onend = () => res(); });
      sr.start(); this.sr = sr; this.state = "rec";
      return;
    }
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
    const type = ["audio/mp4", "audio/webm;codecs=opus", "audio/webm", "audio/ogg;codecs=opus"].find(t => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t)) || "";
    this.chunks = [];
    this.rec = new MediaRecorder(this.stream, type ? { mimeType: type } : undefined);
    this.rec.ondataavailable = e => { if (e.data && e.data.size) this.chunks.push(e.data); };
    this.rec.start(250);
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ac = new AC();
      const src = this.ac.createMediaStreamSource(this.stream);
      this.an = this.ac.createAnalyser(); this.an.fftSize = 512; src.connect(this.an);
    } catch (e) { this.an = null; }
    this.state = "rec";
  },
  level() {
    if (!this.an) return 0.15 + Math.random() * 0.25;
    const d = new Uint8Array(this.an.fftSize); this.an.getByteTimeDomainData(d);
    let s = 0; for (let i = 0; i < d.length; i++) { const x = (d[i] - 128) / 128; s += x * x; }
    return Math.min(1, Math.sqrt(s / d.length) * 5);
  },
  async stop() {
    if (this.state !== "rec") return "";
    this.state = "busy";
    try {
      if (this.active === "browser") {
        try { this.sr.stop(); } catch (e) { /* already stopped */ }
        await Promise.race([this.srDone, new Promise(r => setTimeout(r, 2500))]);
        if (this.srErr === "not-allowed" || this.srErr === "service-not-allowed") throw { code: "mic_denied" };
        return (this.final + " " + this.interim).replace(/\s+/g, " ").trim();
      }
      const rec = this.rec;
      const blob = await new Promise(res => {
        rec.onstop = () => res(new Blob(this.chunks, { type: rec.mimeType || "audio/mp4" }));
        try { rec.stop(); } catch (e) { res(new Blob(this.chunks, { type: rec.mimeType || "audio/mp4" })); }
      });
      this.release();
      if (blob.size < 1200) return "";
      return await this.transcribe(blob);
    } finally { this.release(); this.state = "idle"; }
  },
  cancel() {
    try { if (this.rec && this.rec.state !== "inactive") this.rec.stop(); } catch (e) { /* ignore */ }
    try { if (this.sr) this.sr.abort(); } catch (e) { /* ignore */ }
    this.release(); this.state = "idle";
  },
  release() {
    try { if (this.stream) this.stream.getTracks().forEach(t => t.stop()); } catch (e) { /* ignore */ }
    try { if (this.ac) this.ac.close(); } catch (e) { /* ignore */ }
    this.stream = null; this.ac = null; this.an = null; this.sr = null;
  },
  async transcribe(blob) {
    const ext = /mp4|m4a|aac/.test(blob.type) ? "m4a" : /ogg/.test(blob.type) ? "ogg" : "webm";
    const fd = new FormData();
    fd.append("file", blob, "resposta." + ext);
    fd.append("model", "gpt-4o-transcribe");
    fd.append("response_format", "json");
    fd.append("prompt", "Reunião de trabalho em português do Brasil sobre a Certificação What Works Cities, dados, metas e prefeituras. Transcreva exatamente o que a pessoa disse, sem corrigir a gramática. Se ela usar palavras do espanhol (pero, muy, entonces, ciudad, también), escreva-as em espanhol, como foram ditas.");
    const res = await fetch("https://api.openai.com/v1/audio/transcriptions", { method: "POST", headers: { "Authorization": "Bearer " + Keys.get("openai") }, body: fd });
    if (!res.ok) throw { code: "stt_http", status: res.status, message: (await res.text().catch(() => "")).slice(0, 240) };
    const j = await res.json();
    return String(j.text || "").trim();
  }
};
function micErr(e) {
  if (e && (e.name === "NotAllowedError" || e.code === "mic_denied")) return "Microphone access is off. Allow it in iPhone Settings, then try again.";
  if (e && e.code === "stt_http" && (e.status === 401 || e.status === 403)) return "OpenAI rejected the key. Check it in Conexões.";
  if (e && e.code === "stt_http" && e.status === 429) return "OpenAI usage limit reached. Type your answer for now.";
  if (e && e.code === "no_mic") return "Voice input isn't available here. Use keyboard dictation.";
  return "Couldn't transcribe that. Try again or type your answer.";
}

/* ================= utilities ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const stripHtml = s => String(s ?? "").replace(/<[^>]+>/g, "");
const DAY = 86400000;
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const pad2 = n => String(n).padStart(2, "0");
const dayKey = (d = new Date()) => d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
function hash(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36); }
const norm = s => String(s || "").toLowerCase().replace(/[“”"'.,!?;:¿¡()…—–\-]/g, " ").replace(/\s+/g, " ").trim();
const deaccent = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "");
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function seedOf(s) { return parseInt(hash(s), 36) || 7; }
let toastTimer;
function toast(msg) { const t = $("#toast"); if (!t) return; t.textContent = msg; t.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 2400); }
function relDays(ts) {
  const d = Math.round((ts - Date.now()) / DAY);
  if (ts <= Date.now()) return "agora";
  if (d <= 0) { const m = Math.max(1, Math.round((ts - Date.now()) / 60000)); return m < 60 ? m + " min" : Math.round(m / 60) + " h"; }
  return d === 1 ? "amanhã" : "em " + d + " dias";
}

/* ================= icons ================= */
const I = {
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5C6.5 4 9.5 4 12 5.5v14C9.5 18 6.5 18 4 19.5z"/><path d="M20 5.5C17.5 4 14.5 4 12 5.5v14c2.5-1.5 5.5-1.5 8 0z"/></svg>',
  cards: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="13" height="13" rx="2.5"/><path d="M8 4h10.5A2.5 2.5 0 0 1 21 6.5V17"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  slow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 1.5M9 2h6"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeOff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4M6.6 6.6C3.8 8.4 2 12 2 12s3.5 7 10 7c1.8 0 3.3-.5 4.6-1.2M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1 3.5 5 5.5 5 11a5 5 0 0 1-10 0c0-2.5 1.2-4 2.5-5.2.2 1.7 1 2.7 2 3.2-.6-3 .5-6.5.5-9z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8zM19 15l.9 2.6 2.6.9-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9z"/></svg>',
  bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  warn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 2 20h20zM12 10v4M12 17h.01"/></svg>',
  card1: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="14" rx="2.5"/><path d="M12 9v6M9 12h6"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/></svg>'
};

/* Azulejo motif in the spirit of Athos Bulcão: one tile, randomly rotated per cell. */
const MOTIFS = [
  '<path d="M0,0 H10 A10,10 0 0,1 0,10 Z"/>',
  '<path d="M0,10 A5,5 0 0,1 10,10 Z"/><rect x="0" y="0" width="10" height="2.4"/>',
  '<path d="M0,0 H10 V10 Z"/><circle cx="3" cy="7" r="1.8"/>',
  '<rect x="0" y="0" width="5" height="5"/><circle cx="7.5" cy="7.5" r="2.5"/>',
  '<path d="M0,5 A5,5 0 0,1 5,0 V5 Z"/><path d="M5,10 A5,5 0 0,1 10,5 V10 Z"/>'
];
function tiles(seed, cols, rows, motif, cls = "") {
  const rnd = mulberry32(seed);
  const m = MOTIFS[(motif ?? Math.floor(rnd() * MOTIFS.length)) % MOTIFS.length];
  let g = "";
  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
    const r = Math.floor(rnd() * 4) * 90;
    g += `<g transform="translate(${x * 10} ${y * 10}) rotate(${r} 5 5)">${m}</g>`;
  }
  return `<svg class="${cls}" viewBox="0 0 ${cols * 10} ${rows * 10}" preserveAspectRatio="xMidYMid slice" fill="currentColor" aria-hidden="true">${g}</svg>`;
}
function initials(name) { return name.replace(/^(Prefeita|Prefeito|Vereadora|Vereador|Dona|Dr\.|Dra\.)\s+/i, "").split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase(); }
function avatar(p, size = "") {
  return `<div class="avatar ${size}">${tiles(seedOf(p.id || p.name), 2, 2, (seedOf(p.name) % MOTIFS.length))}<span><em>${esc(initials(p.name))}</em></span></div>`;
}

/* ================= profile & storage ================= */
const DEFAULT_PROFILE = {
  v: 1, setupDone: false, address: "", myName: "",
  myRole: "representante da Results for America, que conduz a Certificação What Works Cities",
  explainLang: "en", depth: "thorough", rate: 1.0, hideText: true, autoplay: true,
  voiceMap: {}, voiceProvider: "auto", voiceMaps: {}, xp: 0, days: {}, lessons: {}, sessions: [], starters: {}, catHits: {}, scores: []
};
let P = JSON.parse(JSON.stringify(DEFAULT_PROFILE));

const Store = {
  mode: "local", db: null, uid: null, profileRef: null, cardsCol: null,
  cards: new Map(), status: "local", chain: Promise.resolve(), dirty: false, timer: null,
  loadLocal() {
    try {
      const raw = localStorage.getItem("papo.v1");
      if (raw) { const d = JSON.parse(raw); P = { ...JSON.parse(JSON.stringify(DEFAULT_PROFILE)), ...(d.profile || {}) }; this.cards = new Map((d.cards || []).map(c => [c.id, c])); }
    } catch (e) { /* storage unavailable */ }
  },
  persistLocal() {
    try { localStorage.setItem("papo.v1", JSON.stringify({ profile: P, cards: [...this.cards.values()] })); } catch (e) { /* ignore */ }
  },
  async init(onChange) {
    if (!window.claude || typeof window.claude.use !== "function") { this.status = "local"; return; }
    let db = null, user = null;
    try { [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]); } catch (e) { db = null; }
    if (!db || !user) { this.status = "local"; onChange(); return; }
    let id = null;
    try { id = await user.id(); } catch (e) { id = null; }
    if (!id) { this.status = "local"; onChange(); return; }
    this.db = db; this.uid = id; this.mode = "db"; this.status = "syncing";
    try {
      this.profileRef = db.doc("data/users/" + id + "/profile");
      this.cardsCol = this.profileRef.collection("cards");
    } catch (e) { this.mode = "local"; this.status = "local"; onChange(); return; }
    const timer = setTimeout(() => { if (this.status === "syncing") { this.status = "slow"; onChange(); } }, 10000);
    let gotProfile = false, gotCards = false;
    const settle = () => { if (gotProfile && gotCards) { clearTimeout(timer); this.status = "synced"; } };
    this.profileRef.onSnapshot(snap => {
      if (!snap.metadata.fromCache) gotProfile = true;
      if (snap.exists && !this.dirty) {
        P = { ...JSON.parse(JSON.stringify(DEFAULT_PROFILE)), ...JSON.parse(JSON.stringify(snap.data())) };
      } else if (!snap.exists && !snap.metadata.fromCache && (P.xp > 0 || P.setupDone)) {
        this.save(); // first sync: upload what this device already has
      }
      settle(); onChange("profile");
    }, err => { clearTimeout(timer); this.status = "error"; onChange(); });
    this.cardsCol.onSnapshot(snap => {
      if (!snap.metadata.fromCache) gotCards = true;
      this.cards = new Map(snap.docs.map(d => [d.id, JSON.parse(JSON.stringify(d.data()))]));
      settle(); onChange("cards");
    }, err => { clearTimeout(timer); this.status = "error"; onChange(); });
  },
  enqueue(fn) {
    this.chain = this.chain.then(fn).catch(e => {
      console.warn("db write failed", e);
      if (e && e.code === "quota_exceeded") toast("Armazenamento cheio: apague alguns cartões.");
    });
    return this.chain;
  },
  rev: 0,
  save() {
    this.dirty = true; this.rev++; this.persistLocal();
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      const r = this.rev;
      if (this.mode !== "db") { this.dirty = false; return; }
      const body = JSON.parse(JSON.stringify(P));
      this.enqueue(() => this.profileRef.set(body)).then(() => { if (this.rev === r) this.dirty = false; });
    }, 1200);
  },
  putCard(card) {
    this.cards.set(card.id, card);
    if (this.mode === "db") { const body = JSON.parse(JSON.stringify(card)); return this.enqueue(() => this.cardsCol.doc(card.id).set(body)); }
    this.persistLocal(); return Promise.resolve();
  },
  deleteCard(id) {
    this.cards.delete(id);
    if (this.mode === "db") return this.enqueue(() => this.cardsCol.doc(id).delete());
    this.persistLocal(); return Promise.resolve();
  }
};

/* ================= XP, streak, stats ================= */
const GOAL = 60;
function addXP(n) {
  P.xp = (P.xp || 0) + n;
  const k = dayKey();
  P.days = P.days || {};
  P.days[k] = (P.days[k] || 0) + n;
  const keys = Object.keys(P.days).sort();
  while (keys.length > 120) delete P.days[keys.shift()];
  Store.save();
  updateHeader();
}
function streak() {
  const d = new Date(); d.setHours(12, 0, 0, 0);
  if (!((P.days || {})[dayKey(d)] > 0)) d.setTime(d.getTime() - DAY);
  let n = 0;
  while ((P.days || {})[dayKey(d)] > 0) { n++; d.setTime(d.getTime() - DAY); }
  return n;
}
function todayXP() { return (P.days || {})[dayKey()] || 0; }
function catHit(cat, n = 1) {
  if (!CATS[cat] || cat === "other") return;
  P.catHits = P.catHits || {};
  const h = P.catHits[cat] || { n: 0, last: 0 };
  P.catHits[cat] = { n: h.n + n, last: Date.now() };
  Store.save();
}
function weakSpots() {
  const now = Date.now();
  return Object.entries(P.catHits || {})
    .filter(([c, h]) => CATS[c] && CATS[c].lesson && h.n > 0)
    .map(([c, h]) => ({ cat: c, n: h.n, last: h.last, w: h.n * (1 + Math.max(0, 1 - (now - h.last) / (14 * DAY))) }))
    .sort((a, b) => b.w - a.w);
}
function dueCards(deck) {
  const now = Date.now();
  return [...Store.cards.values()].filter(c => (c.due || 0) <= now && (!deck || deck === "all" || c.deck === deck)).sort((a, b) => (a.due || 0) - (b.due || 0));
}

/* ================= spaced repetition ================= */
function schedule(card, r, dry = false) {
  let { interval = 0, ease = 2.5, reps = 0, lapses = 0 } = card;
  let due;
  const now = Date.now();
  if (r === 0) { lapses++; reps = 0; ease = Math.max(1.3, ease - 0.2); interval = 0; due = now + 10 * 60000; }
  else {
    if (reps === 0) interval = r === 1 ? 1 : r === 2 ? 1 : 4;
    else if (reps === 1) interval = r === 1 ? 2 : r === 2 ? 3 : 6;
    else interval = Math.max(interval + 1, Math.round(interval * (r === 1 ? 1.2 : r === 2 ? ease : ease * 1.3)));
    ease = clamp(ease + (r === 1 ? -0.15 : r === 3 ? 0.15 : 0), 1.3, 3.0);
    reps++; due = now + interval * DAY;
  }
  if (dry) return r === 0 ? "10 min" : interval === 1 ? "1 dia" : interval + " dias";
  return { ...card, interval, ease, reps, lapses, due, lastReview: now };
}

/* ================= voices (Web Speech) ================= */
const PERSONA_ORDER = { f: [], m: [] };
SCENARIOS.forEach(s => { const p = s.persona; if (!PERSONA_ORDER[p.gender].includes(p.id)) PERSONA_ORDER[p.gender].push(p.id); });
const Voice = {
  ok: typeof window !== "undefined" && "speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined",
  list: [], token: 0, key: null,
  init(onChange) {
    if (!this.ok) return;
    const load = () => {
      let all = [];
      try { all = speechSynthesis.getVoices() || []; } catch (e) { all = []; }
      const br = all.filter(v => /^pt[-_]BR/i.test(v.lang));
      this.list = (br.length ? br : all.filter(v => /^pt/i.test(v.lang))).sort((a, b) => this.quality(b) - this.quality(a));
      this.european = !br.length && this.list.length > 0;
      onChange && onChange();
    };
    load();
    try { speechSynthesis.addEventListener("voiceschanged", load); } catch (e) { speechSynthesis.onvoiceschanged = load; }
  },
  quality(v) {
    const n = v.name.toLowerCase(); let q = 50;
    if (/premium|enhanced|aprimorad|melhorad|natural|neural|online|wavenet|studio|siri/.test(n)) q += 40;
    if (/google/.test(n)) q += 15;
    if (/luciana|felipe|francisca|antonio|antônio|thalita|brenda|donato|elza|fabio|giovanna|humberto|julio|leila|leticia|manuela|nicolau|valerio|yara|daniel|maria|heloisa|fernanda/.test(n)) q += 10;
    if (/eddy|flo\b|grandma|grandpa|reed|rocko|sandy|shelley|vovó|vovô|bad news|bahh|bells|boing|bubbles|cellos|wobble|good news|jester|organ|superstar|trinoids|whisper|zarvox|albert|fred|junior|kathy|ralph/.test(n)) q -= 45;
    if (v.localService === false) q += 5;
    return q;
  },
  gender(v) {
    const n = v.name.toLowerCase();
    if (/luciana|francisca|thalita|brenda|elza|giovanna|leila|let[ií]cia|manuela|yara|maria|heloisa|fernanda|\bflo\b|sandy|shelley|grandma|vovó|joana|catarina|raquel|camila|vit[oó]ria|female|feminin|google portugu/.test(n)) return "f";
    if (/felipe|ant[oô]nio|donato|f[aá]bio|humberto|j[uú]lio|nicolau|val[eé]rio|daniel|ricardo|eddy|reed|rocko|grandpa|vovô|cristiano|duarte|male|masculin/.test(n)) return "m";
    return null;
  },
  label(v) { return v.name.replace(/\s*\((Portuguese|português|Portugues).*?\)/i, "") + (/^pt[-_]PT/i.test(v.lang) ? " · Portugal" : ""); },
  pick(personaId, gender) {
    const map = P.voiceMap || {};
    if (map[personaId]) { const v = this.list.find(x => x.voiceURI === map[personaId]); if (v) return v; }
    if (!this.list.length) return null;
    const same = gender ? this.list.filter(v => this.gender(v) === gender) : this.list;
    const pool = same.length ? same : this.list;
    const best = this.quality(pool[0]);
    const top = pool.filter(v => this.quality(v) >= best - 25);
    const order = gender && PERSONA_ORDER[gender] ? Math.max(0, PERSONA_ORDER[gender].indexOf(personaId)) : 0;
    return top[order % top.length];
  },
  split(text) {
    const parts = String(text).match(/[^.!?…]+[.!?…]*["”']?\s*/g) || [String(text)];
    const out = [];
    for (const p of parts) { if (out.length && (out[out.length - 1].length < 40)) out[out.length - 1] += p; else out.push(p); }
    return out.map(s => s.trim()).filter(Boolean);
  },
  speak(text, opts = {}) {
    if (text && Cloud.provider() !== "device") return this.speakCloud(text, opts);
    return this.speakDevice(text, opts);
  },
  speakCloud(text, opts) {
    const token = ++this.token;
    this.key = opts.key || null;
    try { if (this.ok) speechSynthesis.cancel(); } catch (e) { /* ignore */ }
    Cloud.stop();
    markPlaying(this.key);
    const done = () => { if (token === this.token) { this.key = null; markPlaying(null); opts.onend && opts.onend(); } };
    Cloud.play(stripHtml(text), { persona: opts.persona || null, gender: opts.gender, rate: clamp((P.rate || 1) * (opts.rate || 1), 0.5, 1.6), onend: done }, () => token === this.token)
      .catch(e => {
        if (token !== this.token) return;
        console.warn("cloud voice failed", e);
        toast(cloudErr(e));
        this.key = null; markPlaying(null);
        this.speakDevice(text, opts);
      });
    return true;
  },
  speakDevice(text, opts = {}) {
    if (!this.ok || !text) { opts.onend && opts.onend(); return false; }
    const token = ++this.token;
    this.key = opts.key || null;
    const go = () => {
      if (token !== this.token) return;
      const v = this.pick(opts.personaId || "coach", opts.gender || null);
      const chunks = this.split(stripHtml(text));
      chunks.forEach((ch, i) => {
        const u = new SpeechSynthesisUtterance(ch);
        u.lang = v ? v.lang.replace("_", "-") : "pt-BR";
        if (v) u.voice = v;
        u.rate = clamp((P.rate || 1) * (opts.rate || 1), 0.5, 1.6);
        u.pitch = clamp(opts.pitch || 1, 0.6, 1.4);
        if (i === 0) u.onstart = () => { if (token === this.token) markPlaying(this.key); };
        if (i === chunks.length - 1) u.onend = u.onerror = () => { if (token === this.token) { this.key = null; markPlaying(null); opts.onend && opts.onend(); } };
        speechSynthesis.speak(u);
      });
    };
    let busy = false;
    try { busy = speechSynthesis.speaking || speechSynthesis.pending; } catch (e) { busy = false; }
    if (busy) { try { speechSynthesis.cancel(); } catch (e) {} setTimeout(go, 90); } else go();
    markPlaying(this.key);
    return true;
  },
  stop() { this.token++; this.key = null; try { speechSynthesis.cancel(); } catch (e) {} Cloud.stop(); markPlaying(null); }
};
function markPlaying(key) {
  $$("[data-play-key]").forEach(el => el.classList.toggle("playing", !!key && el.dataset.playKey === key));
}
function sayAs(text, persona, key, rateMul = 1) {
  if (!Voice.ok && Cloud.provider() === "device") { toast("Este navegador não tem voz em português."); return; }
  if (Voice.key === key) { Voice.stop(); return; }
  Voice.speak(text, { persona: persona || null, personaId: persona ? persona.id : "coach", gender: persona ? persona.gender : null, pitch: persona ? persona.pitch : 1, rate: (persona ? persona.rate : 1) * rateMul, key });
}

/* ================= AI (Claude via the sample capability) ================= */
const AI = {
  fn: null, status: "pending", ready: null, kind: null,
  init(onChange) {
    this.ready = (async () => {
      if (IN_CLAUDE) {
        this.kind = "claude";
        try { this.fn = await window.claude.use("sample"); } catch (e) { this.fn = null; }
        this.status = this.fn ? "ready" : "off";
        return;
      }
      this.kind = "api";
      this.refresh();
    })().then(() => onChange && onChange());
    return this.ready;
  },
  refresh() { if (this.kind === "api") this.status = !window.Anthropic ? "off" : Keys.has("anthropic") ? "ready" : "nokey"; },
  get ok() { return this.status === "ready"; },
  async text(prompt, opts = {}) {
    await this.ready;
    if (this.kind === "api") { try { return await ClaudeAPI.call(prompt, opts); } catch (e) { this.note(e); throw e; } }
    if (!this.fn) throw { code: "unavailable" };
    try { return await this.fn(prompt, opts); } catch (e) { this.note(e); throw e; }
  },
  async json(prompt, opts = {}) {
    await this.ready;
    if (this.kind === "api") { try { const r = await ClaudeAPI.call(prompt, opts); return parseLooseJSON(r.text); } catch (e) { this.note(e); throw e; } }
    if (!this.fn) throw { code: "unavailable" };
    try { return await this.fn.json(prompt, opts); } catch (e) { this.note(e); throw e; }
  },
  note(e) {
    const c = e && e.code;
    if (["not_granted", "sampling_disabled", "not_declared", "capability_disabled", "capability_removed"].includes(c)) { this.status = "denied"; updateHeader(); }
    if (c === "bad_key") { this.status = "badkey"; updateHeader(); }
    if (c === "nokey") { this.status = "nokey"; updateHeader(); }
  }
};
function errMsg(e) {
  const c = e && e.code;
  return ({
    unavailable: "The AI tutor works when this page is opened inside Claude (claude.ai or the Claude app).",
    not_granted: "Claude access wasn't allowed for this page. Open the page's Permissions menu to allow it, then reload.",
    sampling_disabled: "Claude isn't available for this account right now.",
    rate_limited: "You've hit a usage limit. Wait a little, then tap Try again.",
    session_expired: "Your Claude session expired. Sign in again, then try again.",
    invalid_json: "The tutor's answer came back garbled. Tap Try again.",
    refused: "The tutor couldn't answer that. Try rephrasing.",
    empty_completion: "The tutor didn't answer. Try rephrasing.",
    prompt_too_large: "This conversation got too long. End it and start a new one.",
    nokey: "Connect Claude first: add your Anthropic API key in Conexões.",
    bad_key: "Anthropic rejected your API key. Check it in Conexões.",
    offline: "You're offline. Connect to the internet and tap Try again.",
    bad_request: "Anthropic API: " + String((e && e.message) || "the request was rejected.").replace(/^\d{3}\s*/, "").slice(0, 200)
  })[c] || "Connection hiccup. Tap Try again.";
}
const isFatal = e => ["not_granted", "sampling_disabled", "not_declared", "capability_disabled", "capability_removed", "unavailable", "nokey", "bad_key"].includes(e && e.code);

/* ================= prompts ================= */
function addressLine() {
  return P.address === "senhor" ? 'Address the visitor formally as "o senhor".'
    : P.address === "senhora" ? 'Address the visitor formally as "a senhora".'
    : P.address === "voce" ? 'Address the visitor as "você".'
    : "Avoid gendered forms when addressing the visitor (no o senhor/a senhora, no bem-vindo/bem-vinda); use neutral phrasing or \"você\".";
}
function speakerGenderLine() {
  return P.address === "senhor" ? "The student is a man (obrigado, cansado, etc.)."
    : P.address === "senhora" ? "The student is a woman (obrigada, cansada, etc.)."
    : "Accept either masculine or feminine self-reference (obrigado/obrigada).";
}
function targetsText(s) { return (s.targets || []).map(t => LESSON[t] ? LESSON[t].title + " (" + LESSON[t].en + ")" : t).join("; "); }
function transcript(c, upto) {
  const p = c.scenario.persona;
  return c.turns.slice(0, upto).filter(t => t.text && (t.who === "me" || t.state === "done"))
    .slice(-18).map(t => (t.who === "me" ? "Visitante" : p.name) + ": " + t.text).join("\n");
}
function personaPrompt(c, upto) {
  const s = c.scenario, p = s.persona;
  return `You are role-playing ${p.name}, ${p.role}, in a realistic conversation held entirely in Brazilian Portuguese.
Character: ${p.tone}.
Situation: ${s.setup}
The visitor is ${P.myName ? P.myName + ", " : ""}${P.myRole}. ${addressLine()}

${WWC_BRIEF}

Rules:
- Speak only natural, spoken Brazilian Portuguese, exactly the way a real ${p.role} talks in a meeting. No English, no translations, no stage directions, no emojis, no speaker label, no quotation marks.
- 1 to 3 sentences, at most about 45 words. End most turns with a question or a challenge the visitor must answer.
- React to what the visitor actually said. If their answer is vague, push back realistically. Stay in character.
- Somewhere in your turns, naturally use these structures so the visitor hears them modeled: ${targetsText(s)}.
- Never correct the visitor's Portuguese. Never mention being an AI or an exercise. If the visitor slips into Spanish or English, react as a Brazilian would and continue in Portuguese.
- If the conversation reaches a natural end, close politely with a concrete next step.

Conversation so far:
${transcript(c, upto)}

Write only ${p.name}'s next line.`;
}
function coachPrompt(c, i) {
  const s = c.scenario, p = s.persona, me = c.turns[i];
  let prev = "";
  for (let j = i - 1; j >= 0; j--) if (c.turns[j].who === "npc" && c.turns[j].text) { prev = c.turns[j].text; break; }
  const lang = P.explainLang === "pt" ? "Brazilian Portuguese" : "English";
  return `You are an expert, encouraging coach of Brazilian Portuguese. Your student is fluent but rusty: a native English speaker who also speaks Spanish and often mixes Spanish words, structures and pronunciation into Portuguese ("portunhol"). They are rehearsing a professional conversation with Brazilian government officials about the What Works Cities Certification (Results for America).

Scenario: ${s.en} with ${p.name} (${p.role}). Grammar focus: ${targetsText(s)}.
${speakerGenderLine()} With officials the student should normally use "o senhor / a senhora" unless invited to use "você".
The official just said: "${prev}"
The student answered (captured by iPhone dictation in pt-BR, so ignore punctuation, capitalization and obvious recognizer glitches): "${me.text}"

Judge the answer against educated, spoken Brazilian Portuguese in a professional register. Flag only real errors or clearly unnatural choices; accept normal Brazilian spoken variants ("a gente", "me permita", "tem" for "há", "vou fazer"). Treat any Spanish word, spelling or structure in the transcript as real interference and flag each one. If the transcript shows forms a pt-BR recognizer would produce from Spanish-accented speech (for example "no" where "não" was meant, "con", "muy"), say so in "spanish". If the student used English, give the Portuguese.

Error categories (use exactly one id per error):
${Object.entries(CATS).map(([id, v]) => "- " + id + ": " + v.en).join("\n")}

Reply with only a JSON object:
{"score": integer 0-100 (95+ flawless and natural; 80-94 small slips; 60-79 several errors; under 60 hard to follow),
 "corrected": "the student's answer with the minimum edits needed to be correct, keeping their wording",
 "natural": "how a polished Brazilian professional would say the same thing, under 45 words",
 "praise": "one short, specific compliment in ${lang}",
 "errors": [{"cat": "category id", "wrong": "exact words from the student's answer", "right": "replacement", "why": "1-2 sentences in ${lang}: the rule as it applies here", "es": true or false (caused by Spanish), "card": {"front": "a prompt that tests this point without revealing the answer", "back": "the answer plus a very short note"}}],
 "spanish": "if Spanish showed up, one short sentence in ${lang} naming the pattern; otherwise an empty string"}
Card examples: {"front":"ES presupuesto → PT ?","back":"o orçamento"} · {"front":"Quando nós ___ os dados… (ter)","back":"tivermos — futuro do subjuntivo após quando"} · {"front":"Vamos ___ publicar os dados? (a / nada)","back":"Vamos publicar — sem 'a' depois de ir"}
List at most 5 errors, most important first. If the answer is correct and natural, "errors" is [].`;
}
function gradePrompt(item, ans) {
  const task = item.t === "fix" ? "Rewrite this sentence in correct, natural Brazilian Portuguese" : "Say this in Brazilian Portuguese";
  return `Grade one exercise for a fluent-but-rusty learner of Brazilian Portuguese (English native, frequent Spanish interference). Accept any answer that is correct, natural Brazilian Portuguese and does the task, even if it differs from the model answers. Ignore punctuation, capitalization and missing accent marks.
Task: ${task}: "${stripHtml(item.q)}"
Model answers: ${item.a.join(" | ")}
Learning point: ${stripHtml(item.x)}
Learner's answer: "${ans}"
Reply with only JSON: {"ok": true or false, "feedback": "1-2 sentences in English on what was right or wrong", "fixed": "the learner's answer corrected (same text if ok)"}`;
}
function genPrompt(lesson) {
  return `Create 8 new practice items for a fluent-but-rusty speaker of Brazilian Portuguese (English native, frequent Spanish interference) on this topic: ${lesson.title} (${lesson.en}).
Key rules: ${lesson.core.map(stripHtml).join(" ")}
Set every sentence in conversations with Brazilian municipal officials about the What Works Cities Certification (data management, open data, performance management, evaluations, results-driven contracting, budgeting, resident engagement).
Mix of types:
- 3 items {"t":"fill","q":"sentence with ___ and the base verb or hint in parentheses","a":["accepted answer", "..."],"x":"explanation"}
- 2 items {"t":"mc","q":"question","o":["option","option","option"],"a":index of the correct option,"x":"explanation"}
- 2 items {"t":"fix","q":"a sentence with one or two typical errors (at least one Spanish-interference error)","a":["corrected sentence", "..."],"x":"explanation"}
- 1 item {"t":"say","q":"an English sentence to say in Portuguese","a":["natural Brazilian translation", "..."],"x":"explanation"}
Explanations are 1-2 sentences in English. Every answer must be correct, natural Brazilian Portuguese. Reply with only a JSON array of the 8 items.`;
}
function hintPrompt(c) {
  const s = c.scenario, p = s.persona;
  let last = "";
  for (let j = c.turns.length - 1; j >= 0; j--) if (c.turns[j].who === "npc" && c.turns[j].text) { last = c.turns[j].text; break; }
  return `A learner is in a Brazilian Portuguese role-play about the What Works Cities Certification and must reply to ${p.name} (${p.role}), who just said: "${last}".
${addressLine().replace("the visitor", "the official").replace("Address", "The learner should address")}
Give two sample replies in natural, professional Brazilian Portuguese (under 40 words each): one simple and one more advanced that uses ${targetsText(s)}. Then three short useful phrases.
Reply with only JSON: {"answers":[{"pt":"...","en":"..."},{"pt":"...","en":"..."}],"phrases":[{"pt":"...","en":"..."}]}`;
}
function freePrompt(who, what, gender) {
  return `Design a role-play for practicing professional Brazilian Portuguese. The learner represents Results for America and the What Works Cities Certification in Brazil.
They will talk to: ${who || "a Brazilian municipal official"}
Situation: ${what || "a first meeting about the certification"}
The character is ${gender === "m" ? "a man" : "a woman"}.
${WWC_BRIEF}
Reply with only JSON: {"name":"realistic Brazilian name with title if fitting (fictional person)","role":"role in Portuguese","tone":"personality and concerns in English, 1 sentence","setup":"situation in English, 1-2 sentences","opening":"the character's first line in natural Brazilian Portuguese, ending with a question, under 40 words, without gendered address to the learner","targets":["2 or 3 ids from: ${LESSONS.map(l => l.id).join(", ")}"],"vocab":[["Portuguese term","English"], 4 more pairs]}`;
}
/* ================= state ================= */
const S = { tab: "conversar", stack: [], rec: null, keyStatus: {}, convo: null, drill: null, review: null, deck: "all", q: "", openCard: null, confirmDel: null, confirmReset: false, barSel: null, gen: {}, free: { who: "", what: "", gender: "f", busy: false }, custom: null };
const TABS = [["conversar", "Conversar", I.chat], ["aulas", "Aulas", I.book], ["cartoes", "Cartões", I.cards], ["progresso", "Progresso", I.chart]];
I.stop = '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2.5"/></svg>';
I.share = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3M8 7l4-4 4 4M5 11v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8"/></svg>';
I.key = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/></svg>';
const KIND = { mc: "Escolha", fill: "Complete", fix: "Corrija", say: "Diga em português", shadow: "Ouça e repita" };
const cap1 = s => s.charAt(0).toUpperCase() + s.slice(1);
const safeRich = s => esc(s).replace(/&lt;(\/?)(b|i|s|em|strong)&gt;/g, "<$1$2>");
const firstLine = s => String(s || "").split("\n")[0];
function speakable(back) { return String(back || "").split(/\s+—\s+|\s+-\s+|\n/)[0].replace(/\(.*?\)/g, "").trim(); }
function playBtn(text, key, label = "Ouvir", persona) {
  return `<button class="tool" data-act="say" data-say="${esc(text)}" data-play-key="${key}"${persona ? ` data-persona="${esc(persona)}"` : ""}>${I.play}${label ? " " + label : ""}</button>`;
}
function scenarioById(id) { return SCEN[id] || (S.custom && S.custom.id === id ? S.custom : null); }

/* ================= shell ================= */
function shell() {
  document.getElementById("app").innerHTML = `<div class="statusbar"></div>
<main id="view"></main>
<nav class="tabs" aria-label="Seções"><div class="row" id="tabrow"></div></nav>
<div id="screen-root"></div>
<div id="toast" role="status" aria-live="polite"></div>`;
}
function chipsHTML() {
  return `<span class="chip-stat streak" title="Dias seguidos">${I.flame}${streak()}</span><span class="chip-stat" title="Cartões para revisar">${I.cards}${dueCards().length}</span>`;
}
function bandHTML(title, sub, inner = "") {
  return `<header class="band">${tiles(seedOf(title), 6, 6, 0, "tiles-deco")}<div class="wrap">
    <div class="band-row"><h1 class="large-title">${esc(title)}</h1><div class="band-chips">${chipsHTML()}</div></div>
    ${sub ? `<p class="band-sub">${sub}</p>` : ""}${inner}</div></header>`;
}
function updateHeader() {
  $$(".band-chips").forEach(el => { el.innerHTML = chipsHTML(); });
  const due = dueCards().length, row = $("#tabrow");
  if (row) row.innerHTML = TABS.map(([id, label, icon]) => `<button class="tab" data-act="tab" data-id="${id}" ${S.tab === id ? 'aria-current="page"' : ""}>${icon}<span>${label}</span>${id === "cartoes" && due ? `<span class="badge">${due > 99 ? "99+" : due}</span>` : ""}</button>`).join("");
}
function render() { updateHeader(); renderTab(); }
function renderTab() {
  const v = $("#view"); if (!v) return;
  v.innerHTML = S.tab === "aulas" ? viewLessons() : S.tab === "cartoes" ? viewCards() : S.tab === "progresso" ? viewProgress() : viewHome();
}
function softRender() {
  updateHeader();
  const a = document.activeElement;
  if (S.stack.length) return;
  if (a && $("#view") && $("#view").contains(a) && /INPUT|TEXTAREA|SELECT/.test(a.tagName)) return;
  renderTab();
}

/* ================= home ================= */
function ring(pct, size = 46) {
  const r = 18, c = 2 * Math.PI * r;
  return `<svg viewBox="0 0 46 46" width="${size}" height="${size}" aria-hidden="true"><circle cx="23" cy="23" r="${r}" fill="none" stroke="currentColor" stroke-opacity=".25" stroke-width="6"/><circle cx="23" cy="23" r="${r}" fill="none" stroke="var(--ipe)" stroke-width="6" stroke-linecap="round" stroke-dasharray="${(c * pct).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 23 23)"/></svg>`;
}
function suggestScenario() {
  const ws = weakSpots();
  const done = new Set((P.sessions || []).map(s => s.id));
  if (ws.length) { const m = SCENARIOS.find(s => s.targets.includes(ws[0].cat) && !(P.sessions[0] && P.sessions[0].id === s.id)); if (m) return m; }
  return SCENARIOS.find(s => !done.has(s.id)) || SCENARIOS[(new Date().getDate()) % SCENARIOS.length];
}
function aiBanner() {
  let out = "";
  if (STANDALONE_APP && !IS_INSTALLED && IS_IOS) out += `<div class="banner info">${I.share}<div><b>Install the app.</b> In Safari, tap Share, then <b>Add to Home Screen</b>. It opens full-screen, with its own icon.</div></div>`;
  if (AI.kind === "api" && (AI.status === "nokey" || AI.status === "badkey")) out += `<div class="banner info">${I.spark}<div>${AI.status === "badkey" ? "Anthropic rejected your API key." : "Connect Claude to turn on conversations and corrections. Lessons, drills and flashcards already work."}<div style="margin-top:8px"><button class="btn btn-sm btn-primary" data-act="connect">${AI.status === "badkey" ? "Fix the key" : "Connect Claude"}</button></div></div></div>`;
  if (AI.status === "off" && !IN_CLAUDE && !STANDALONE_APP) out += `<div class="banner">${I.warn}<div>The AI tutor runs when this page is opened inside Claude or installed as the app. Lessons, built-in drills and flashcards work anywhere.</div></div>`;
  if (AI.status === "denied") out += `<div class="banner">${I.warn}<div>Claude access is turned off for this page, so conversations can't be corrected. <button class="btn btn-sm btn-ghost" style="margin-top:8px" data-act="perm">Abrir permissões</button></div></div>`;
  return out ? `<section class="section" style="gap:10px">${out}</section>` : "";
}
function setupCard() {
  if (P.setupDone) return "";
  const a = P.address;
  const addr = `<li><div><b>How should officials address you?</b>
      <div class="seg" role="group">${[["senhor", "o senhor"], ["senhora", "a senhora"], ["voce", "você"]].map(([k, l]) => `<button data-act="set-address" data-id="${k}" aria-pressed="${a === k}">${l}</button>`).join("")}</div>
      <p class="note">The coach also uses this to check obrigado / obrigada.</p></div></li>`;
  const steps = IN_CLAUDE ? addr + `
    <li><div><b>Answer by voice with iPhone dictation</b>
      <p class="note">You'll speak into the microphone on the Portuguese keyboard. The page then corrects what you said.</p>
      <details class="howto"><summary>How to set it up</summary><ol>
        <li>Settings → General → Keyboard → Keyboards → Add New Keyboard → <b>Português (Brasil)</b>.</li>
        <li>On the Keyboard screen, turn on <b>Enable Dictation</b>.</li>
        <li>In a conversation, tap the answer box, switch to the Portuguese keyboard with the globe key, then tap the microphone and speak.</li>
      </ol></details></div></li>
    <li><div><b>Get the most natural Brazilian voices</b>
      <p class="note">Settings → Accessibility → Spoken Content → Voices → Portuguese (Brazil). Download the <b>Enhanced</b> or <b>Premium</b> versions (for example Luciana and Felipe), then reopen this page.</p>
      <button class="btn btn-sm btn-soft" data-act="test-voice" data-id="helena" data-play-key="test-helena">${I.play} Ouvir uma voz</button></div></li>`
    : addr + `
    <li><div><b>Connect Claude</b><span class="note">Required for conversations. The tutor runs on your own Anthropic API key, about 3–5 US cents per answer.</span>
      ${Keys.has("anthropic") ? `<span class="status-line ok">${I.check} Claude connected</span>` : `<button class="btn btn-sm btn-primary" data-act="connect">${I.key} Connect Claude</button>`}</div></li>
    <li><div><b>Microphone and realistic voices</b><span class="note">Optional. An OpenAI key turns on the in-app microphone and natural Brazilian voices. An ElevenLabs key gives the most realistic voices.</span>
      ${Keys.has("openai") || Keys.has("elevenlabs") ? `<span class="status-line ok">${I.check} ${[Keys.has("openai") && "OpenAI", Keys.has("elevenlabs") && "ElevenLabs"].filter(Boolean).join(" + ")} connected</span>` : `<button class="btn btn-sm btn-soft" data-act="connect">Add voice keys</button>`}</div></li>`;
  return `<section class="section"><div class="card setup">
  <div><p class="mono muted">Antes de começar</p><h2 style="font-size:21px">Quick setup</h2></div>
  <ol>${steps}</ol>
  <button class="btn btn-primary" data-act="setup-done">Pronto, vamos lá</button>
</div></section>`;
}
function scnRow(s) {
  const n = (P.sessions || []).filter(x => x.id === s.id).length;
  return `<button class="scn" data-act="brief" data-id="${s.id}">
    ${avatar(s.persona)}
    <div class="scn-body"><span class="scn-title">${esc(s.title)}</span>
      <span class="scn-sub">${esc(s.persona.name)} · ${esc(s.persona.role)}</span>
      <div class="chips">${s.targets.map(t => `<span class="pill">${esc(LESSON[t].title)}</span>`).join("")}${n ? `<span class="pill pill-good">${I.check.replace("<svg ", '<svg width="12" height="12" ')} ${n}×</span>` : ""}</div></div>
    <div class="lvl" aria-label="nível ${s.level} de 3">${[1, 2, 3].map(k => `<i class="${k <= s.level ? "on" : ""}"></i>`).join("")}</div>
  </button>`;
}
function viewHome() {
  const h = new Date().getHours();
  const greet = h < 12 ? "Bom dia" : h < 18 ? "Boa tarde" : "Boa noite";
  const date = cap1(new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" }));
  const xp = todayXP(), sug = suggestScenario();
  const inner = `<div class="home-hero"><p class="band-sub">${esc(date)}. Vamos conversar?</p>
    <div class="hero-row"><div class="goal">${ring(Math.min(1, xp / GOAL))}<div><b>${xp}/${GOAL} XP</b><span>meta de hoje</span></div></div>
    <button class="btn btn-sm btn-light" data-act="brief" data-id="${sug.id}">${esc(sug.title)} ${I.arrow}</button></div></div>`;
  return bandHTML(greet + (P.myName ? ", " + P.myName : ""), "", inner) + `<div class="sheet"><div class="wrap">
  ${aiBanner()}
  ${setupCard()}
  <section class="section"><div class="section-head"><h2>Reuniões</h2><span class="note">${SCENARIOS.length} cenários · nível 1–3</span></div>
    <div class="list">${SCENARIOS.map(scnRow).join("")}
      <button class="scn" data-act="free"><div class="avatar" style="background:var(--ipe-soft);color:var(--ipe)">${tiles(5, 2, 2, 4)}<span><em>+</em></span></div>
        <div class="scn-body"><span class="scn-title">Tema livre</span><span class="scn-sub">Describe any meeting and practice it.</span></div><div></div></button>
    </div></section>
</div></div>`;
}

/* ================= lessons tab ================= */
function lessonRow(l) {
  const st = (P.lessons || {})[l.id], hits = ((P.catHits || {})[l.id] || {}).n || 0;
  const acc = st && st.n ? Math.round(100 * st.ok / st.n) : null;
  return `<button class="lesson-row" data-act="lesson" data-id="${l.id}">
    <div style="min-width:0"><b>${esc(l.title)}</b><small>${esc(l.en)} · ${l.mins} min · ${l.drills.length} exercícios</small></div>
    <div class="lesson-meta">${hits ? `<span class="pill pill-bad">${hits} ${hits === 1 ? "erro" : "erros"}</span>` : ""}${acc !== null ? `<span class="pill ${acc >= 80 ? "pill-good" : "pill-warn"}">${acc}%</span>` : ""}</div>
  </button>`;
}
function viewLessons() {
  const ws = weakSpots().slice(0, 4);
  const plan = ws.length ? `<div class="card" style="display:grid;gap:14px">
      ${ws.map((w, i) => { const l = LESSON[CATS[w.cat].lesson]; return `<div class="plan-item"><div class="plan-rank">${i + 1}</div>
        <div style="min-width:0"><b style="font-family:var(--f-display)">${esc(l.title)}</b><div class="note">${w.n} ${w.n === 1 ? "tropeço" : "tropeços"} · último ${relAgo(w.last)}</div></div>
        <button class="btn btn-sm btn-primary" data-act="lesson" data-id="${l.id}">Estudar</button></div>`; }).join("")}
    </div>`
    : `<div class="card empty">${tiles(9, 4, 2, 2, "tiles").replace('class="tiles"', 'class="tiles" style="color:var(--azul)"')}
        <p><b style="color:var(--ink)">Your plan builds itself from your mistakes.</b><br>Have a conversation or do a drill. Whatever you get wrong moves to the top here.</p>
        <div class="chips" style="justify-content:center">${["subj-future", "portunhol", "vocabulary"].map(id => `<button class="pill pill-azul" data-act="lesson" data-id="${id}">${esc(LESSON[id].title)}</button>`).join("")}</div></div>`;
  return bandHTML("Aulas", "Grammar, Spanish traps and WWC vocabulary. Your plan builds itself from your mistakes.") + `<div class="sheet"><div class="wrap">
    <section class="section"><div class="section-head"><h2>Seu plano de estudo</h2><span class="note">from your errors</span></div>${plan}</section>
    ${GROUPS.map(g => `<section class="section"><div class="section-head"><h2>${esc(g.title)}</h2><span class="note">${esc(g.en)}</span></div>
      <div class="list">${LESSONS.filter(l => l.group === g.id).map(lessonRow).join("")}</div></section>`).join("")}
  </div></div>`;
}
function relAgo(ts) {
  if (!ts) return "";
  const d = Math.floor((Date.now() - ts) / DAY);
  return d <= 0 ? "hoje" : d === 1 ? "ontem" : "há " + d + " dias";
}

/* ================= cards tab ================= */
function cardList() {
  const q = deaccent(S.q.toLowerCase());
  const all = [...Store.cards.values()]
    .filter(c => S.deck === "all" || c.deck === S.deck)
    .filter(c => !q || deaccent((c.front + " " + c.back + " " + (c.note || "")).toLowerCase()).includes(q))
    .sort((a, b) => (a.due || 0) - (b.due || 0)).slice(0, 250);
  if (!Store.cards.size) return `<div class="card empty">${tiles(4, 4, 2, 3, "tiles").replace('class="tiles"', 'class="tiles" style="color:var(--azul)"')}<p><b style="color:var(--ink)">No cards yet.</b><br>Every mistake in a conversation or drill becomes a card here automatically. You can also add a starter collection below.</p></div>`;
  if (!all.length) return `<p class="note" style="text-align:center;padding:12px">Nenhum cartão encontrado.</p>`;
  return all.map(c => {
    const open = S.openCard === c.id;
    return `<div class="cardrow"><button data-act="card-open" data-id="${esc(c.id)}" aria-expanded="${open}">
      <div style="min-width:0"><div class="front">${esc(firstLine(c.front))}</div>
      <div class="meta"><span class="pill pill-azul">${DECKS[c.deck] ? DECKS[c.deck].label : "Cartão"}</span>${c.es ? '<span class="pill pill-warn">ES</span>' : ""}${(c.misses || 0) > 1 ? `<span class="pill pill-bad">${c.misses}× errado</span>` : ""}<span class="note">${(c.due || 0) <= Date.now() ? "revisar agora" : relDays(c.due)}</span></div></div>
    </button>
    ${open ? `<div class="open">
      ${c.front.includes("\n") ? `<div style="white-space:pre-line">${esc(c.front)}</div>` : ""}
      <div class="back">${esc(c.back)}</div>
      ${c.note ? `<div class="muted">${esc(c.note)}</div>` : ""}
      ${c.source ? `<div class="note">Você disse: “${esc(c.source)}”</div>` : ""}
      <div class="err-actions">${playBtn(speakable(c.back), "card-" + c.id)}
        ${c.lesson && LESSON[c.lesson] ? `<button class="btn btn-sm btn-soft" data-act="lesson" data-id="${c.lesson}">Aula</button>` : ""}
        ${S.confirmDel === c.id ? `<button class="btn btn-sm" style="background:var(--bad);color:#fff" data-act="card-del-yes" data-id="${esc(c.id)}">Apagar mesmo</button><button class="btn btn-sm btn-ghost" data-act="card-del-no">Cancelar</button>`
          : `<button class="btn btn-sm btn-ghost" data-act="card-del" data-id="${esc(c.id)}">${I.trash.replace("<svg ", '<svg width="16" height="16" ')} Apagar</button>`}
      </div></div>` : ""}
    </div>`;
  }).join("");
}
function viewCards() {
  const all = [...Store.cards.values()], due = dueCards();
  const per = k => ({ total: all.filter(c => c.deck === k).length, due: due.filter(c => c.deck === k).length });
  return bandHTML("Cartões", due.length ? `${due.length} para revisar agora` : "Tudo em dia. Every mistake you make becomes a card here.") + `<div class="sheet"><div class="wrap">
  <section class="section"><div class="card due-card">
    <div><p class="mono muted">Para revisar agora</p><div class="num">${due.length}</div><p class="note">${all.length} cartões no total</p></div>
    <button class="btn btn-primary" data-act="review" ${due.length ? "" : "disabled"}>Revisar ${S.deck !== "all" && DECKS[S.deck] ? DECKS[S.deck].label.toLowerCase() : ""}</button>
  </div>
  <div class="deck-row">${Object.entries(DECKS).map(([k, d]) => { const c = per(k); return `<button class="deck-btn" data-act="deck" data-id="${k}" aria-pressed="${S.deck === k}"><b>${c.due}<span style="font-size:13px;color:var(--muted);font-family:var(--f-body)"> / ${c.total}</span></b><span>${d.label}</span></button>`; }).join("")}</div>
  </section>
  <section class="section"><div class="section-head"><h2>Seus cartões</h2>${S.deck !== "all" ? `<button class="pill" data-act="deck" data-id="${S.deck}">${DECKS[S.deck].label} ✕</button>` : ""}</div>
    <input class="search" id="card-search" type="search" placeholder="Buscar cartões…" value="${esc(S.q)}" autocomplete="off">
    <div class="list" id="card-list">${cardList()}</div>
  </section>
  <section class="section"><div class="section-head"><h2>Coleções iniciais</h2><span class="note">10 new cards a day</span></div>
    <div class="list">${STARTERS.map(st => `<div class="card starter"><div style="min-width:0"><b>${esc(st.title)}</b><small>${esc(st.en)} · ${st.cards.length} cartões</small></div>
      ${P.starters && P.starters[st.id] ? `<span class="pill pill-good">${I.check.replace("<svg ", '<svg width="12" height="12" ')} Adicionada</span>` : `<button class="btn btn-sm btn-soft" data-act="starter-add" data-id="${st.id}">${I.plus.replace("<svg ", '<svg width="16" height="16" ')} Adicionar</button>`}</div>`).join("")}</div>
  </section>
</div></div>`;
}

/* ================= progress tab ================= */
function viewProgress() {
  const st = streak(), xp = todayXP(), due = dueCards().length;
  const sc = (P.scores || []).slice(-20);
  const avg = sc.length ? Math.round(sc.reduce((a, b) => a + b, 0) / sc.length) : null;
  const days = [];
  const base = new Date(); base.setHours(12, 0, 0, 0);
  for (let i = 13; i >= 0; i--) { const d = new Date(base.getTime() - i * DAY); days.push({ d, v: (P.days || {})[dayKey(d)] || 0 }); }
  const max = Math.max(GOAL, ...days.map(x => x.v));
  const maxIdx = days.reduce((m, x, i) => x.v > days[m].v ? i : m, 0);
  const initials = ["D", "S", "T", "Q", "Q", "S", "S"];
  const ws = weakSpots().slice(0, 8);
  const wmax = Math.max(1, ...ws.map(w => w.n));
  const syncTxt = { synced: "Saved to your Claude account and synced across devices.", syncing: "Connecting to your saved data…", slow: "Can't reach your saved data yet. New progress is kept and will sync.", error: "Sync stopped. Reload the page to reconnect.", local: STANDALONE_APP ? "Saved on this iPhone. API keys stay on this device." : "Saved on this device only (open inside Claude to sync)." }[Store.status] || "";
  const pv = Voice.list;
  const personas = [{ id: "coach", name: "Narrador (aulas e cartões)", gender: null }, ...SCENARIOS.map(s => s.persona)];
  return bandHTML("Progresso", st ? `${st} ${st === 1 ? "dia seguido" : "dias seguidos"} · ${P.xp || 0} XP no total` : "Practice today to start a streak.") + `<div class="sheet"><div class="wrap">
  <section class="section"><div class="tiles4">
    <div class="stat"><span class="mono">Sequência</span><b>${st}</b><small>${st === 1 ? "dia" : "dias"} seguidos</small></div>
    <div class="stat"><span class="mono">Hoje</span><b>${xp}</b><small>de ${GOAL} XP</small></div>
    <div class="stat"><span class="mono">Revisar</span><b>${due}</b><small>cartões</small></div>
    <div class="stat"><span class="mono">Nota média</span><b>${avg ?? "—"}</b><small>últimas ${sc.length || 0} respostas</small></div>
  </div></section>
  <section class="section"><div class="section-head"><h2>Últimos 14 dias</h2><span class="note">XP por dia · ${P.xp || 0} no total</span></div>
    <div class="card"><div class="bars" role="img" aria-label="XP por dia nos últimos 14 dias">
      ${days.map((x, i) => { const hgt = Math.round((x.v / max) * 100); const show = i === 13 || (i === maxIdx && x.v > 0) || S.barSel === i;
        return `<button class="bar ${x.v ? "" : "zero"} ${i === 13 ? "today" : ""}" data-act="bar" data-i="${i}" aria-label="${x.d.toLocaleDateString("pt-BR")}: ${x.v} XP" title="${x.d.toLocaleDateString("pt-BR")}: ${x.v} XP">
          ${show ? `<span class="val" style="bottom:calc(${Math.max(hgt, 2)}% + 3px)">${x.v}</span>` : ""}<i style="height:${Math.max(hgt, 2)}%"></i></button>`; }).join("")}
    </div><div class="bars-base"></div>
    <div class="bars-axis">${days.map(x => `<span>${initials[x.d.getDay()]}</span>`).join("")}</div></div>
  </section>
  <section class="section"><div class="section-head"><h2>Pontos fracos</h2><span class="note">mistakes by topic</span></div>
    <div class="card">${ws.length ? ws.map(w => `<button class="weak" data-act="lesson" data-id="${CATS[w.cat].lesson}"><span class="name">${esc(CATS[w.cat].label)}</span><span class="track"><i style="width:${Math.round(100 * w.n / wmax)}%"></i></span><span class="n">${w.n}</span></button>`).join("")
      : `<p class="note">Nothing yet. Topics you get wrong will be ranked here.</p>`}</div>
  </section>
  <section class="section"><div class="section-head"><h2>Conversas recentes</h2></div>
    <div class="card">${(P.sessions || []).length ? P.sessions.slice(0, 8).map(s => `<div class="session-row"><div><b>${esc(s.title)}</b><div class="note">${new Date(s.at).toLocaleDateString("pt-BR", { day: "numeric", month: "short" })} · ${s.turns} respostas</div></div><span class="score ${s.avg >= 90 ? "good" : s.avg >= 75 ? "mid" : "low"}">${s.avg ?? "—"}</span></div>`).join("")
      : `<p class="note">Your finished conversations appear here.</p>`}</div>
  </section>
  <section class="section"><div class="section-head"><h2>Ajustes</h2></div>
    <div class="card" style="padding-block:4px">
      ${connectionsSetting()}
      <div class="setting"><span class="s-label">Officials address you as</span>
        <div class="seg">${[["senhor", "o senhor"], ["senhora", "a senhora"], ["voce", "você"]].map(([k, l]) => `<button data-act="set-address" data-id="${k}" aria-pressed="${P.address === k}">${l}</button>`).join("")}</div></div>
      <div class="setting"><label for="set-name">Your name (optional)</label><input id="set-name" type="text" data-set="myName" value="${esc(P.myName)}" placeholder="Officials will use it in conversation" autocomplete="off"></div>
      <div class="setting"><label for="set-role">Your role in the role-plays</label><input id="set-role" type="text" data-set="myRole" value="${esc(P.myRole)}" autocomplete="off"><span class="s-help">The officials react to whoever you say you are.</span></div>
      <div class="setting"><span class="s-label">Explanations in</span>
        <div class="seg">${[["en", "English"], ["pt", "Português"]].map(([k, l]) => `<button data-act="set-lang" data-id="${k}" aria-pressed="${P.explainLang === k}">${l}</button>`).join("")}</div></div>
      <div class="setting"><span class="s-label">Feedback</span>
        <div class="seg">${[["thorough", "Completo"], ["fast", "Rápido"]].map(([k, l]) => `<button data-act="set-depth" data-id="${k}" aria-pressed="${P.depth === k}">${l}</button>`).join("")}</div>
        <span class="s-help">Completo is more precise and takes a few more seconds per answer.</span></div>
      <div class="setting"><label for="set-rate">Speech speed · <span id="rate-val">${Math.round((P.rate || 1) * 100)}%</span></label>
        <input id="set-rate" type="range" min="0.7" max="1.25" step="0.05" value="${P.rate || 1}" data-set="rate"></div>
      <div class="setting"><div class="toggle-row"><span><b>Listening mode</b><br><span class="s-help">Hide what officials say until you tap it.</span></span><button class="switch" role="switch" aria-checked="${!!P.hideText}" data-act="toggle" data-id="hideText" aria-label="Listening mode"></button></div></div>
      <div class="setting"><div class="toggle-row"><span><b>Play replies automatically</b></span><button class="switch" role="switch" aria-checked="${!!P.autoplay}" data-act="toggle" data-id="autoplay" aria-label="Play replies automatically"></button></div></div>
      ${voiceSettings()}
      ${dictationSetting()}
      <div class="setting"><span class="s-label">Data</span><span class="s-help">${esc(syncTxt)}</span>
        ${S.confirmReset ? `<div class="err-actions"><button class="btn btn-sm" style="background:var(--bad);color:#fff" data-act="reset-yes">Erase progress and cards</button><button class="btn btn-sm btn-ghost" data-act="reset-no">Cancel</button></div>`
          : `<div><button class="btn btn-sm btn-ghost" data-act="reset">Reset progress</button></div>`}</div>
    </div>
  </section>
</div></div>`;
}

/* ================= screens: native-style layers ================= */
const MODAL = new Set(["convo", "drill", "review", "summary", "free", "connect"]);
function topScreen() { return S.stack[S.stack.length - 1]; }
function screenHTML(sc) {
  return sc.type === "brief" ? screenBrief(sc) : sc.type === "convo" ? screenConvo() : sc.type === "summary" ? screenSummary() :
    sc.type === "lesson" ? screenLesson(sc.id) : sc.type === "drill" ? screenDrill() : sc.type === "review" ? screenReview() :
    sc.type === "free" ? screenFree() : sc.type === "connect" ? screenConnect() : "";
}
function liveLayers() { const root = $("#screen-root"); return root ? Array.from(root.children).filter(l => !l.classList.contains("leaving")) : []; }
function fillLayer(el, sc) {
  el.innerHTML = screenHTML(sc);
  if (sc.type === "convo") {
    renderMsgs(false);
    const ta = $("#answer");
    if (ta && S.convo && S.convo.draft) { ta.value = S.convo.draft; autoGrow(ta); const c = $("#composer"); if (c) c.classList.add("has-text"); }
    scrollConvo();
  }
}
function syncLayers(anim = true) {
  const root = $("#screen-root"); if (!root) return;
  const layers = liveLayers();
  for (let i = 0; i < layers.length; i++) {
    const want = S.stack[i];
    if (!want || layers[i].dataset.k !== want.k) { for (let j = i; j < layers.length; j++) layers[j].remove(); break; }
  }
  for (let i = liveLayers().length; i < S.stack.length; i++) {
    const sc = S.stack[i]; if (!sc.k) sc.k = uid();
    const el = document.createElement("div");
    el.className = "layer"; el.dataset.k = sc.k; el.style.zIndex = String(40 + i);
    if (anim && i === S.stack.length - 1 && !sc.noAnim) el.classList.add(MODAL.has(sc.type) ? "enter-modal" : "enter-push");
    root.appendChild(el);
    fillLayer(el, sc);
  }
}
function openScreen(sc) { Voice.stop(); sc.k = uid(); S.stack.push(sc); syncLayers(true); }
function renderScreen() {
  const sc = topScreen(); if (!sc) return;
  syncLayers(false);
  const el = $(`#screen-root .layer[data-k="${sc.k}"]`); if (!el) return;
  const body = el.querySelector(".screen-body"), st = body ? body.scrollTop : 0;
  fillLayer(el, sc);
  const nb = el.querySelector(".screen-body");
  if (nb && sc.type !== "convo" && sc.type !== "drill" && sc.type !== "review") nb.scrollTop = st;
}
function stopRecording() {
  if (S.rec) { clearInterval(recTimer); S.rec = null; }
  if (S.drill) S.drill.rec = null;
  if (Mic.state !== "idle") Mic.cancel();
}
function closeScreen() {
  Voice.stop(); stopRecording();
  const top = S.stack.pop(); if (!top) return;
  if (top.type === "drill") S.drill = null;
  if (top.type === "review") S.review = null;
  const el = $(`#screen-root .layer[data-k="${top.k}"]`);
  if (el) { el.classList.remove("enter-push", "enter-modal"); el.classList.add("leaving", MODAL.has(top.type) ? "leave-modal" : "leave-push"); setTimeout(() => el.remove(), 280); }
  const nt = topScreen();
  if (!nt) { render(); return; }
  if (nt.type !== "convo") renderScreen();
}
function closeAll() {
  Voice.stop(); stopRecording();
  S.stack = []; S.drill = null; S.review = null;
  liveLayers().forEach((el, i, arr) => {
    if (i === arr.length - 1) { el.classList.remove("enter-push", "enter-modal"); el.classList.add("leaving", "leave-modal"); setTimeout(() => el.remove(), 280); }
    else el.remove();
  });
  render();
}
function head(title, sub, extra = "", closeAct = "close", icon = I.back) {
  return `<div class="screen-head"><div class="wrap"><button class="icon-btn" data-act="${closeAct}" aria-label="Voltar">${icon}</button><div class="ttl"><b>${esc(title)}</b>${sub ? `<small>${esc(sub)}</small>` : ""}</div>${extra}</div></div>`;
}

/* ---------- briefing ---------- */
function screenBrief(sc) {
  const s = scenarioById(sc.id); if (!s) return "";
  const p = s.persona;
  return `<div class="screen">${head("Briefing", s.en)}
  <div class="screen-body"><div class="wrap">
    <div class="card" style="display:grid;gap:14px">
      <div style="display:flex;gap:14px;align-items:center">${avatar(p, "lg")}<div style="min-width:0"><h2 style="font-size:22px">${esc(s.title)}</h2><p class="muted">${esc(p.name)} · ${esc(p.role)}</p></div></div>
      <p>${esc(s.setup)}</p>
      <div><div class="lbl">Your goal</div><p>${esc(s.goal)}</p></div>
      <div><div class="lbl">Grammar focus</div><div class="chips">${(s.targets || []).filter(t => LESSON[t]).map(t => `<button class="pill pill-azul" data-act="lesson" data-id="${t}">${esc(LESSON[t].title)}</button>`).join("")}</div></div>
    </div>
    <div><div class="lbl" style="margin-bottom:8px">Vocabulário útil</div><div class="ex-list">${(s.vocab || []).map((v, i) => `<div class="ex"><div><p>${esc(v[0])}</p><small>${esc(v[1])}</small></div>${playBtn(v[0], "voc-" + i, "")}</div>`).join("")}</div></div>
    <div class="card" style="padding-block:4px">
      <div class="setting"><div class="toggle-row"><span><b>Listening mode</b><br><span class="s-help">Hear first, read only if you need to.</span></span><button class="switch" role="switch" aria-checked="${!!P.hideText}" data-act="toggle" data-id="hideText" aria-label="Listening mode"></button></div></div>
      <div class="setting"><div class="toggle-row"><span><b>Play replies automatically</b></span><button class="switch" role="switch" aria-checked="${!!P.autoplay}" data-act="toggle" data-id="autoplay" aria-label="Autoplay"></button></div></div>
    </div>
  </div></div>
  <div class="screen-foot"><div class="wrap"><button class="btn btn-primary btn-block" data-act="start" data-id="${esc(s.id)}">${I.chat.replace("<svg ", '<svg width="20" height="20" ')} Começar conversa</button></div></div>
</div>`;
}

/* ---------- free topic ---------- */
function screenFree() {
  const f = S.free;
  return `<div class="screen">${head("Tema livre", "Build your own meeting")}
  <div class="screen-body"><div class="wrap">
    <div class="card" style="display:grid;gap:14px">
      <div class="setting" style="border:0;padding:0"><label for="free-who">Who are you talking to?</label><input id="free-who" class="answer-input" type="text" value="${esc(f.who)}" placeholder="e.g. Secretária de Educação de Salvador"></div>
      <div class="setting" style="border:0;padding:0"><label for="free-what">What's the situation?</label><textarea id="free-what" class="answer-input" placeholder="e.g. She wants to use school data to cut dropout rates and asks how WWC could help.">${esc(f.what)}</textarea></div>
      <div class="setting" style="border:0;padding:0"><span class="s-label">Character</span><div class="seg">${[["f", "Mulher"], ["m", "Homem"]].map(([k, l]) => `<button data-act="free-gender" data-id="${k}" aria-pressed="${f.gender === k}">${l}</button>`).join("")}</div></div>
    </div>
    ${AI.ok || AI.status === "pending" ? "" : `<div class="banner">${I.warn}<div>${esc(errMsg({ code: AI.status === "denied" ? "not_granted" : "unavailable" }))}</div></div>`}
  </div></div>
  <div class="screen-foot"><div class="wrap"><button class="btn btn-primary btn-block" data-act="free-create" ${f.busy ? "disabled" : ""}>${f.busy ? "Criando o cenário…" : "Criar cenário"}</button></div></div>
</div>`;
}

/* ---------- conversation ---------- */
function startConvo(id) {
  const s = scenarioById(id); if (!s) return;
  S.convo = { sid: uid(), scenario: s, turns: [{ who: "npc", text: s.opening, state: "done", shown: false }], catCount: {}, nudged: {}, cardsAdded: 0, scores: [], hint: null, draft: "" };
  openScreen({ type: "convo" });
  if (P.autoplay) sayAs(s.opening, s.persona, "npc-0");
}
function screenConvo() {
  const c = S.convo, p = c.scenario.persona;
  return `<div class="screen" id="convo">
  <div class="screen-head"><div class="wrap">
    <button class="icon-btn" data-act="convo-exit" aria-label="Sair">${I.close}</button>
    ${avatar(p, "sm")}
    <div class="ttl"><b>${esc(p.name)}</b><small>${esc(p.role)}</small></div>
    <button class="icon-btn" data-act="toggle-hide" id="btn-hide" aria-label="${P.hideText ? "Mostrar textos" : "Ocultar textos"}">${P.hideText ? I.eyeOff : I.eye}</button>
    <button class="head-btn" data-act="convo-end">Encerrar</button>
  </div></div>
  <div class="screen-body" id="convo-body"><div class="wrap"><div class="msgs" id="msgs"></div></div></div>
  <div class="screen-foot"><div class="wrap composer ${Mic.mode() ? "can-mic" : ""}" id="composer">${composerInner()}</div></div>
</div>`;
}
function composerInner() {
  const m = Mic.mode();
  if (S.rec === "rec") return `<div class="composer-row"><div class="rec-bar" style="flex:1;min-width:0"><span class="rec-dot"></span><span class="rec-time" id="rec-time">0:00</span><div class="rec-wave" id="rec-wave">${"<i></i>".repeat(40)}</div><button class="rec-cancel" data-act="mic-cancel">Cancelar</button><button class="rec-stop" data-act="mic-stop" aria-label="Parar e enviar">${I.send}</button></div></div>
    <div class="dictate-hint">${I.mic}<span>Listening. Tap the arrow when you finish.</span></div>`;
  if (S.rec === "busy") return `<div class="composer-row"><div class="rec-bar" style="flex:1;border-color:var(--line)"><span class="typing"><i></i><i></i><i></i></span><span class="note">Transcrevendo…</span></div></div>
    <div class="dictate-hint">${I.mic}<span>Your exact words go to the coach, Spanish included.</span></div>`;
  const hint = m === "openai" ? "Tap the mic and speak, then tap the arrow. Or type."
    : m === "browser" ? "Tap the mic and speak, or type your answer."
    : IN_CLAUDE ? "Tap the box, then the microphone on the Portuguese keyboard, and speak."
    : "Type, or use the Portuguese keyboard's microphone. An OpenAI key in Conexões turns on the in-app mic.";
  return `<div class="composer-row">
      <button class="icon-btn" data-act="hint" aria-label="Dica: sugestões de resposta">${I.bulb}</button>
      <textarea id="answer" lang="pt-BR" rows="1" placeholder="Responda em português…" enterkeyhint="send" autocomplete="off" autocorrect="off" autocapitalize="sentences" spellcheck="false" aria-label="Sua resposta"></textarea>
      <button class="send" data-act="send" aria-label="Enviar">${I.send}</button>
      ${m ? `<button class="mic-btn" data-act="mic" aria-label="Falar">${I.mic}</button>` : ""}
    </div>
    <div class="dictate-hint">${I.mic}<span>${hint}</span></div>`;
}
function renderComposer() {
  const el = $("#composer"); if (!el) return;
  el.innerHTML = composerInner();
  el.classList.toggle("can-mic", !!Mic.mode());
  const ta = $("#answer");
  if (ta && S.convo && S.convo.draft) { ta.value = S.convo.draft; autoGrow(ta); }
  el.classList.toggle("has-text", !!(ta && ta.value.trim()));
}
let recTimer = null;
async function micStart() {
  if (S.rec) return;
  Voice.stop();
  try { await Mic.start(); } catch (e) { console.warn("mic start", e); toast(micErr(e)); return; }
  S.rec = "rec"; renderComposer();
  const wave = [];
  clearInterval(recTimer);
  recTimer = setInterval(() => {
    const secs = Math.floor((Date.now() - Mic.t0) / 1000), t = $("#rec-time"), w = $("#rec-wave");
    if (t) t.textContent = Math.floor(secs / 60) + ":" + String(secs % 60).padStart(2, "0");
    if (w) {
      wave.push(Mic.level()); while (wave.length > 40) wave.shift();
      const bars = w.children;
      for (let i = 0; i < bars.length; i++) { const v = wave[wave.length - bars.length + i]; bars[i].style.height = (v === undefined ? 12 : Math.max(12, Math.round(v * 100))) + "%"; }
    }
    if (secs >= 120) micStop();
  }, 100);
}
async function micStop() {
  if (S.rec !== "rec") return;
  clearInterval(recTimer);
  S.rec = "busy"; renderComposer();
  let text = "", failed = false;
  try { text = await Mic.stop(); } catch (e) { failed = true; console.warn("mic stop", e); toast(micErr(e)); }
  S.rec = null; renderComposer();
  if (!text) { if (!failed) toast("Não ouvi nada. Tente de novo."); return; }
  const ta = $("#answer"); if (ta) ta.value = text;
  if (S.convo) S.convo.draft = text;
  sendAnswer();
}
function micCancel() { clearInterval(recTimer); Mic.cancel(); S.rec = null; renderComposer(); }
function npcMsg(t, i, p) {
  const hidden = P.hideText && !t.shown && t.state === "done" && Voice.ok && Voice.list.length > 0;
  const body = t.state === "loading" && !t.text ? '<span class="typing" aria-label="digitando"><i></i><i></i><i></i></span>'
    : `<span class="txt ${hidden ? "hidden" : ""}" ${hidden ? `data-act="reveal" data-i="${i}" title="Tocar para mostrar"` : ""}>${esc(t.text)}</span>`;
  return `<div class="msg msg-npc" data-turn="${i}">${avatar(p, "sm")}<div style="min-width:0"><div class="bubble">${body}
    ${t.state === "error" ? `<p class="note" style="margin-top:6px">${esc(t.err)}</p>${isFatal({ code: t.code }) ? "" : `<div class="bubble-tools"><button class="tool" data-act="retry-npc" data-i="${i}">${I.refresh} Tentar de novo</button></div>`}` : ""}
    ${t.en ? `<p class="en-line">${esc(t.en)}</p>` : ""}
    ${t.state === "done" ? `<div class="bubble-tools">
      <button class="tool" data-act="play-npc" data-i="${i}" data-play-key="npc-${i}">${I.play} Ouvir</button>
      <button class="tool" data-act="slow-npc" data-i="${i}" data-play-key="npcs-${i}">${I.slow} Devagar</button>
      ${hidden ? `<button class="tool" data-act="reveal" data-i="${i}">${I.eye} Mostrar</button>` : ""}
      ${t.en ? "" : `<button class="tool" data-act="translate" data-i="${i}">${t.enBusy ? "…" : "EN"}</button>`}
    </div>` : ""}
  </div></div></div>`;
}
function coachCard(t, i) {
  if (t.fbState === "off") return "";
  if (t.fbState === "loading") return `<div class="coach" aria-busy="true"><div class="coach-head"><span class="mono">Coach</span><span class="note">checking your answer…</span></div><div class="skeleton"><i style="width:92%"></i><i style="width:68%"></i><i style="width:80%"></i></div></div>`;
  if (t.fbState === "error") return `<div class="coach"><p class="note">${esc(t.fbErr)}</p>${isFatal({ code: t.fbCode }) ? "" : `<div><button class="btn btn-sm btn-soft" data-act="retry-coach" data-i="${i}">${I.refresh} Tentar de novo</button></div>`}</div>`;
  const fb = t.fb; if (!fb) return "";
  const cls = fb.score >= 90 ? "good" : fb.score >= 75 ? "mid" : "low";
  const label = fb.score >= 90 ? "Excelente" : fb.score >= 75 ? "Quase lá" : "Vamos revisar";
  const same = norm(fb.corrected) === norm(t.text);
  const showNat = fb.natural && norm(fb.natural) !== norm(fb.corrected);
  const errs = fb.errors.map((e, k) => {
    const cat = CATS[e.cat] || CATS.other, l = cat.lesson && LESSON[cat.lesson];
    return `<div class="err">
      <div class="err-head"><span class="pill pill-azul">${esc(cat.label)}</span>${e.es ? '<span class="pill pill-warn">Espanhol</span>' : ""}</div>
      <p class="err-swap">${e.wrong ? `<s>${esc(e.wrong)}</s> → ` : ""}<b>${esc(e.right)}</b></p>
      ${e.why ? `<p class="err-why">${esc(e.why)}</p>` : ""}
      ${l ? `<details class="rule" ${k === 0 ? "open" : ""}><summary>${I.book.replace("<svg ", '<svg width="16" height="16" ')} The rule: ${esc(l.en)}</summary><ul>${l.core.map(x => `<li>${x}</li>`).join("")}</ul></details>
      <div class="err-actions"><button class="btn btn-sm btn-soft" data-act="lesson" data-id="${l.id}">Abrir aula</button><button class="btn btn-sm btn-ghost" data-act="drill" data-id="${l.id}">Treinar</button></div>` : ""}
    </div>`;
  }).join("");
  const nud = t.nudge && CATS[t.nudge] && LESSON[CATS[t.nudge].lesson];
  return `<div class="coach">
    <div class="coach-head"><span class="score ${cls}">${fb.score} · ${label}</span>${fb.praise ? `<span class="note" style="flex:1;min-width:150px">${esc(fb.praise)}</span>` : ""}</div>
    ${same ? `<p class="fixline"><ins>${I.check.replace("<svg ", '<svg width="15" height="15" style="vertical-align:-2px" ')} Gramática correta</ins></p>`
      : `<div><div class="lbl">Correção ${playBtn(fb.corrected, "fix-" + i, "")}</div><p class="fixline">${diffHTML(t.text, fb.corrected)}</p></div>`}
    ${showNat ? `<div class="natural"><div class="lbl">Mais natural ${playBtn(fb.natural, "nat-" + i, "")}</div><p>${esc(fb.natural)}</p></div>` : ""}
    ${errs}
    ${fb.spanish ? `<div class="banner" style="background:var(--warn-soft)">${I.warn}<div><b>Espanhol detectado.</b> ${esc(fb.spanish)}</div></div>` : ""}
    ${nud ? `<div class="nudge"><div><b>${esc(nud.title)}</b> tripped you up ${t.nudgeN}× in this conversation. A ${nud.mins}-minute lesson fixes it.</div><div class="err-actions"><button class="btn btn-sm btn-ipe" data-act="lesson" data-id="${nud.id}">Fazer a aula</button><button class="btn btn-sm btn-ghost" data-act="drill" data-id="${nud.id}">Só os exercícios</button></div></div>` : ""}
    ${t.cardsAdded ? `<div class="cards-added">${I.card1} ${t.cardsAdded} ${t.cardsAdded === 1 ? "cartão salvo" : "cartões salvos"} para revisão</div>` : ""}
  </div>`;
}
function hintBlock(c) {
  if (!c.hint) return "";
  if (c.hint.state === "loading") return `<div class="hint-box"><div class="lbl">${I.bulb.replace("<svg ", '<svg width="14" height="14" ')} Dica</div><div class="skeleton"><i style="width:85%"></i><i style="width:60%"></i></div></div>`;
  if (c.hint.state === "error") return `<div class="hint-box"><p class="note">${esc(c.hint.err)}</p></div>`;
  const d = c.hint.data || {};
  return `<div class="hint-box"><div class="lbl">${I.bulb.replace("<svg ", '<svg width="14" height="14" ')} Dica: ways to answer</div>
    ${(d.answers || []).map((a, k) => `<div style="display:grid;grid-template-columns:1fr auto;gap:6px;align-items:start"><div><p class="h-pt">${esc(a.pt)}</p><p class="h-en">${esc(a.en)}</p></div>${playBtn(a.pt, "hint-" + k, "")}</div>`).join("")}
    ${(d.phrases || []).length ? `<div class="chips">${d.phrases.map(ph => `<button class="pill" data-act="say" data-say="${esc(ph.pt)}" title="${esc(ph.en)}">${esc(ph.pt)}</button>`).join("")}</div>` : ""}
    <p class="note">Say it in your own words. Copying won't train you.</p></div>`;
}
function renderMsgs(scroll = true) {
  const c = S.convo, box = $("#msgs"); if (!c || !box) return;
  const p = c.scenario.persona;
  box.innerHTML = c.turns.map((t, i) => t.who === "npc" ? npcMsg(t, i, p) : `<div class="msg msg-me" data-turn="${i}"><div class="bubble">${esc(t.text)}</div>${coachCard(t, i)}</div>`).join("") + hintBlock(c);
  const hb = $("#btn-hide"); if (hb) hb.innerHTML = P.hideText ? I.eyeOff : I.eye;
  markPlaying(Voice.key);
  if (scroll) scrollConvo();
}
function scrollConvo() { const b = $("#convo-body"); if (b) b.scrollTop = b.scrollHeight; }
function nearBottom() { const b = $("#convo-body"); return !b || b.scrollHeight - b.scrollTop - b.clientHeight < 140; }
function autoGrow(ta) { ta.style.height = "auto"; ta.style.height = Math.min(160, ta.scrollHeight + 2) + "px"; }
function cleanLine(s, p) {
  let t = String(s || "").trim();
  const names = [p.name, p.name.split(" ").slice(-2).join(" "), p.name.split(" ").pop()];
  for (const n of names) t = t.replace(new RegExp("^\\**\\s*" + n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*\\**\\s*:\\s*", "i"), "");
  return t.replace(/^["“]+|["”]+$/g, "").trim();
}
/* word-level diff between what was said and the correction */
function diffHTML(a, b) {
  const A = String(a).split(/\s+/).filter(Boolean), B = String(b).split(/\s+/).filter(Boolean);
  const nA = A.map(w => norm(w)), nB = B.map(w => norm(w));
  const n = A.length, m = B.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = nA[i] === nB[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const out = []; let i = 0, j = 0;
  while (i < n && j < m) {
    if (nA[i] === nB[j]) { out.push(["s", B[j]]); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) out.push(["d", A[i++]]);
    else out.push(["i", B[j++]]);
  }
  while (i < n) out.push(["d", A[i++]]);
  while (j < m) out.push(["i", B[j++]]);
  let html = "", cur = null, buf = [];
  const flush = () => { if (!buf.length) return; const t = esc(buf.join(" ")); html += (cur === "d" ? `<del>${t}</del>` : cur === "i" ? `<ins>${t}</ins>` : t) + " "; buf = []; };
  for (const [k, w] of out) { if (k !== cur) { flush(); cur = k; } buf.push(w); }
  flush();
  return html.trim();
}
function sendAnswer() {
  const ta = $("#answer"), c = S.convo; if (!ta || !c) return;
  const text = ta.value.trim();
  if (!text) { toast("Fale ou digite sua resposta primeiro."); ta.focus(); return; }
  if (c.turns.some(t => t.who === "npc" && t.state === "loading")) { toast("Espere a resposta…"); return; }
  ta.value = ""; c.draft = ""; autoGrow(ta); ta.blur();
  const comp = $("#composer"); if (comp) comp.classList.remove("has-text");
  Voice.stop();
  const meIdx = c.turns.push({ who: "me", text, fbState: "loading" }) - 1;
  const npcIdx = c.turns.push({ who: "npc", text: "", state: "loading" }) - 1;
  c.hint = null;
  addXP(10);
  renderMsgs(true);
  runPersona(npcIdx);
  runCoach(meIdx);
}
async function runPersona(i) {
  const c = S.convo, t = c.turns[i], p = c.scenario.persona;
  t.state = "loading"; t.text = "";
  try {
    const res = await AI.text(personaPrompt(c, i), {
      modelTier: "quick", cache: false,
      onText: ({ text }) => { if (S.convo !== c) return; t.text = cleanLine(text, p); const el = $(`[data-turn="${i}"] .bubble`); if (el) { const nb = nearBottom(); el.innerHTML = `<span class="txt">${esc(t.text)}</span>`; if (nb) scrollConvo(); } }
    });
    if (S.convo !== c) return;
    t.text = cleanLine(res.text, p); t.state = "done";
    const nb = nearBottom(); renderMsgs(false); if (nb) scrollConvo();
    if (P.autoplay && topScreen() && topScreen().type === "convo") sayAs(t.text, p, "npc-" + i);
  } catch (e) {
    console.warn("persona failed", e);
    if (S.convo !== c) return;
    t.state = "error"; t.err = errMsg(e); t.code = e && e.code; renderMsgs(false);
  }
}
function sanitizeFb(fb, orig) {
  const o = fb && typeof fb === "object" ? fb : {};
  const errors = Array.isArray(o.errors) ? o.errors : [];
  return {
    score: clamp(Math.round(Number(o.score) || 0), 0, 100),
    corrected: typeof o.corrected === "string" && o.corrected.trim() ? o.corrected.trim() : orig,
    natural: typeof o.natural === "string" ? o.natural.trim() : "",
    praise: typeof o.praise === "string" ? o.praise.trim() : "",
    spanish: typeof o.spanish === "string" ? o.spanish.trim() : "",
    errors: errors.filter(e => e && typeof e === "object" && (e.right || e.wrong)).slice(0, 5).map(e => ({
      cat: CATS[e.cat] ? e.cat : "other", wrong: String(e.wrong || "").slice(0, 200), right: String(e.right || "").slice(0, 200),
      why: String(e.why || "").slice(0, 500), es: !!e.es,
      card: e.card && typeof e.card === "object" ? { front: String(e.card.front || "").slice(0, 300), back: String(e.card.back || "").slice(0, 300) } : null
    }))
  };
}
function cardFromError(e, src) {
  const cat = CATS[e.cat] || CATS.other;
  let front = (e.card && e.card.front || "").trim(), back = (e.card && e.card.back || "").trim();
  if (!front || !back) { front = `“${e.wrong}” → ?`; back = e.right; }
  const id = "c-" + hash(cat.deck + "|" + norm(front));
  const ex = Store.cards.get(id);
  if (ex) return { ...ex, misses: (ex.misses || 1) + 1, due: Date.now(), source: src.slice(0, 240) };
  return { id, deck: cat.deck, front, back, note: e.why.slice(0, 400), cat: e.cat, lesson: cat.lesson || "", source: src.slice(0, 240), es: e.es, origin: "conversa", created: Date.now(), due: Date.now(), interval: 0, ease: 2.5, reps: 0, lapses: 0, misses: 1 };
}
async function runCoach(i) {
  const c = S.convo, t = c.turns[i];
  t.fbState = "loading";
  try {
    const raw = await AI.json(coachPrompt(c, i), P.depth === "fast" ? { modelTier: "quick", cache: false } : { modelTier: "default", effort: "low", cache: false });
    const fb = sanitizeFb(raw, t.text);
    t.fb = fb; t.fbState = "done";
    let added = 0;
    for (const e of fb.errors) {
      if (e.cat !== "other" || e.right) { await Store.putCard(cardFromError(e, t.text)); added++; }
      catHit(e.cat);
      c.catCount[e.cat] = (c.catCount[e.cat] || 0) + 1;
      if (c.catCount[e.cat] >= 2 && !c.nudged[e.cat] && CATS[e.cat].lesson) { c.nudged[e.cat] = true; t.nudge = e.cat; t.nudgeN = c.catCount[e.cat]; }
    }
    t.cardsAdded = added; c.cardsAdded += added;
    c.scores.push(fb.score);
    P.scores = [...(P.scores || []), fb.score].slice(-50);
    if (fb.score >= 90) addXP(5); else Store.save();
    updateHeader();
    if (S.convo !== c) return;
    renderMsgs(false);
    const el = $(`[data-turn="${i}"] .coach`);
    if (el && topScreen() && topScreen().type === "convo") el.scrollIntoView({ block: "start", behavior: "smooth" });
  } catch (e) {
    console.warn("coach failed", e);
    if (S.convo !== c) return;
    t.fbState = "error"; t.fbErr = errMsg(e); t.fbCode = e && e.code; renderMsgs(false);
  }
}
async function askHint() {
  const c = S.convo; if (!c) return;
  if (c.hint && c.hint.state === "loading") return;
  c.hint = { state: "loading" }; renderMsgs(true);
  try { const d = await AI.json(hintPrompt(c), { modelTier: "quick" }); c.hint = { state: "done", data: d }; }
  catch (e) { c.hint = { state: "error", err: errMsg(e) }; }
  if (S.convo === c) renderMsgs(true);
}
async function translateTurn(i) {
  const c = S.convo, t = c.turns[i]; if (!t || t.enBusy) return;
  t.enBusy = true; t.shown = true; renderMsgs(false);
  try { const r = await AI.text("Translate this Brazilian Portuguese line into natural English. Reply with only the translation.\n\n" + t.text, { modelTier: "quick" }); t.en = r.text.trim(); }
  catch (e) { toast(errMsg(e)); }
  t.enBusy = false; if (S.convo === c) renderMsgs(false);
}
function endConvo() {
  const c = S.convo; if (!c) { closeAll(); return; }
  const answered = c.turns.filter(t => t.who === "me");
  if (!answered.length) { S.convo = null; closeAll(); return; }
  const avg = c.scores.length ? Math.round(c.scores.reduce((a, b) => a + b, 0) / c.scores.length) : null;
  if (!c.saved) {
    c.saved = true;
    P.sessions = [{ sid: c.sid, id: c.scenario.id, title: c.scenario.title, at: Date.now(), turns: answered.length, avg, cats: c.catCount }, ...(P.sessions || [])].slice(0, 30);
    Store.save();
  }
  Voice.stop();
  stopRecording();
  S.stack = [{ type: "summary", k: uid() }];
  syncLayers(true);
}
function screenSummary() {
  const c = S.convo; if (!c) return "";
  const answered = c.turns.filter(t => t.who === "me").length;
  const avg = c.scores.length ? Math.round(c.scores.reduce((a, b) => a + b, 0) / c.scores.length) : null;
  const cats = Object.entries(c.catCount).filter(([k]) => CATS[k]).sort((a, b) => b[1] - a[1]);
  const topL = cats.length && CATS[cats[0][0]].lesson ? LESSON[CATS[cats[0][0]].lesson] : null;
  return `<div class="screen">${head("Resumo", c.scenario.title, "", "summary-close", I.close)}
  <div class="screen-body"><div class="wrap">
    <div class="result-big">${avatar(c.scenario.persona, "lg")}<span class="mono muted">Nota média</span><span class="num">${avg ?? "—"}</span><span class="muted">${answered} ${answered === 1 ? "resposta" : "respostas"} · ${c.cardsAdded} ${c.cardsAdded === 1 ? "cartão novo" : "cartões novos"}</span></div>
    ${topL ? `<div class="nudge"><div><b>Next step: ${esc(topL.title)}</b> (${esc(topL.en)}) was your most frequent slip. Do the ${topL.mins}-minute lesson while it's fresh.</div><div class="err-actions"><button class="btn btn-sm btn-ipe" data-act="lesson" data-id="${topL.id}">Fazer a aula</button><button class="btn btn-sm btn-ghost" data-act="drill" data-id="${topL.id}">Exercícios</button></div></div>` : ""}
    <div class="card"><div class="lbl">Erros por tema</div>${cats.length ? `<div class="list" style="gap:4px;margin-top:6px">${cats.map(([k, n]) => `<button class="weak" ${CATS[k].lesson ? `data-act="lesson" data-id="${CATS[k].lesson}"` : ""}><span class="name">${esc(CATS[k].label)}</span><span class="track"><i style="width:${Math.round(100 * n / cats[0][1])}%"></i></span><span class="n">${n}</span></button>`).join("")}</div>` : `<p class="note" style="margin-top:6px">${c.scores.length ? "No mistakes. Excellent." : "Feedback wasn't available for this conversation."}</p>`}</div>
  </div></div>
  <div class="screen-foot"><div class="wrap" style="grid-template-columns:1fr 1fr">
    <button class="btn btn-ghost" data-act="again" data-id="${esc(c.scenario.id)}">Repetir</button>
    <button class="btn btn-primary" data-act="${dueCards().length ? "review-from-summary" : "summary-close"}">${dueCards().length ? "Revisar cartões" : "Concluir"}</button>
  </div></div>
</div>`;
}

/* ---------- lesson ---------- */
function renderTable(t) {
  const cols = t.head.length;
  const keep = []; for (let k = 0; k < cols; k++) if (t.head[k] || t.rows.some(r => r[k])) keep.push(k);
  return `<div class="tbl-wrap"><table><thead><tr>${keep.map(k => `<th>${t.head[k]}</th>`).join("")}</tr></thead><tbody>${t.rows.map(r => `<tr>${keep.map(k => `<td class="${String(r[k] || "").length > 24 ? "wrapcell" : ""}">${r[k] || ""}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
function renderBlock(b, li) {
  let h = "";
  if (b.h) h += `<h3>${b.h}</h3>`;
  if (b.p) h += `<p>${b.p}</p>`;
  if (b.list) h += `<ul>${b.list.map(x => `<li>${x}</li>`).join("")}</ul>`;
  if (b.table) h += renderTable(b.table);
  if (b.trap) h += `<div class="trap"><div class="lbl">${I.warn.replace("<svg ", '<svg width="14" height="14" ')} Spanish-speaker trap</div><div>${b.trap}</div></div>`;
  if (b.ex) h += `<div class="ex-list">${b.ex.map((x, k) => `<div class="ex"><div><p>${esc(x[0])}</p><small>${esc(x[1])}</small></div>${playBtn(x[0], "ex-" + li + "-" + k, "")}</div>`).join("")}</div>`;
  return `<div>${h}</div>`;
}
function screenLesson(id) {
  const l = LESSON[id]; if (!l) return "";
  const st = (P.lessons || {})[id];
  return `<div class="screen">${head(l.title, l.en)}
  <div class="screen-body"><div class="wrap">
    <div class="core">${tiles(seedOf(id), 4, 4, 0, "tiles-bg").replace('class="tiles-bg"', 'class="tiles-bg" style="position:absolute;right:-16px;top:-16px;width:120px;height:120px;opacity:.18;color:var(--on-azul)"')}
      <span class="mono">Regras essenciais · ${l.mins} min</span><ul>${l.core.map(x => `<li>${x}</li>`).join("")}</ul></div>
    <div class="lesson-body">${l.body.map((b, i) => renderBlock(b, i)).join("")}</div>
    ${st && st.n ? `<p class="note">You've done ${st.n} exercises here, ${Math.round(100 * st.ok / st.n)}% correct.</p>` : ""}
  </div></div>
  <div class="screen-foot"><div class="wrap" style="grid-template-columns:${AI.ok ? "1fr auto" : "1fr"}">
    <button class="btn btn-primary" data-act="drill" data-id="${id}">Praticar · ${l.drills.length} exercícios</button>
    ${AI.ok ? `<button class="btn btn-soft" data-act="gen" data-id="${id}" ${S.gen[id] ? "disabled" : ""} aria-label="More exercises written by Claude">${S.gen[id] ? "Gerando…" : I.spark.replace("<svg ", '<svg width="18" height="18" ') + " Mais"}</button>` : ""}
  </div></div>
</div>`;
}

/* ---------- drills ---------- */
function startDrill(lessonId, items) {
  const l = LESSON[lessonId]; if (!l) return;
  const list = items || shuffle(l.drills).slice(0, 10);
  S.drill = { lessonId, items: list, i: 0, results: [], phase: "ask", verdict: null, input: "", xp: 0, cards: 0, generated: !!items };
  const t = topScreen();
  if (t && t.type === "drill") S.stack[S.stack.length - 1] = { type: "drill", k: uid(), noAnim: true }; else S.stack.push({ type: "drill", k: uid() });
  Voice.stop(); syncLayers(true); autoplayShadow();
}
function autoplayShadow() {
  const d = S.drill; if (!d) return; const it = d.items[d.i];
  if (it && it.t === "shadow") sayAs(stripHtml(it.q), null, "shadow-" + d.i);
}
function validItems(arr) {
  if (!Array.isArray(arr)) return [];
  const out = [];
  for (const it of arr) {
    if (!it || typeof it !== "object" || !KIND[it.t] || typeof it.q !== "string") continue;
    const x = typeof it.x === "string" ? safeRich(it.x) : "";
    if (it.t === "mc") {
      if (!Array.isArray(it.o) || it.o.length < 2) continue;
      const a = Number(it.a); if (!Number.isInteger(a) || a < 0 || a >= it.o.length) continue;
      out.push({ t: "mc", q: safeRich(it.q), o: it.o.map(o => safeRich(String(o))), a, x });
    } else if (it.t === "shadow") out.push({ t: "shadow", q: esc(it.q), x });
    else {
      const a = (Array.isArray(it.a) ? it.a : [it.a]).filter(s => typeof s === "string" && s.trim()).map(s => s.trim());
      if (!a.length) continue;
      out.push({ t: it.t, q: safeRich(it.q), a, x });
    }
  }
  return out;
}
async function genDrills(id) {
  if (S.gen[id]) return;
  S.gen[id] = true; if (topScreen() && topScreen().type === "lesson") renderScreen();
  try {
    const arr = await AI.json(genPrompt(LESSON[id]), { modelTier: "default", effort: "low", cache: false });
    const items = validItems(arr);
    if (!items.length) throw { code: "invalid_json" };
    S.gen[id] = false;
    startDrill(id, items);
  } catch (e) {
    S.gen[id] = false; toast(errMsg(e));
    if (topScreen() && topScreen().type === "lesson") renderScreen();
  }
}
function matchAny(ans, accepted) {
  const a = norm(ans);
  for (const x of accepted) if (norm(x) === a) return { ok: true };
  for (const x of accepted) if (deaccent(norm(x)) === deaccent(a)) return { ok: true, accent: x };
  return { ok: false };
}
function shadowScore(ans, target) {
  const T = target.split(/\s+/).filter(Boolean), A = ans.split(/\s+/).filter(Boolean);
  const nT = T.map(w => deaccent(norm(w))), nA = A.map(w => deaccent(norm(w)));
  const n = T.length, m = A.length, dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = nT[i] && nT[i] === nA[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const hit = new Array(n).fill(false); let i = 0, j = 0;
  while (i < n && j < m) { if (nT[i] && nT[i] === nA[j]) { hit[i] = true; i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++; }
  const words = T.filter((w, k) => nT[k]).length || 1;
  const ratio = hit.filter((h, k) => h && nT[k]).length / words;
  return { ratio, html: T.map((w, k) => `<span class="${hit[k] || !nT[k] ? "hit" : "miss"}">${esc(w)}</span>`).join(" "), missed: T.filter((w, k) => !hit[k] && nT[k]) };
}
function drillCard(it, l) {
  const q = stripHtml(it.q);
  let front, back;
  if (it.t === "mc") { front = q + "\n" + it.o.map(stripHtml).join(" / "); back = stripHtml(it.o[it.a]); }
  else if (it.t === "fill") { front = q; back = it.a[0]; }
  else if (it.t === "fix") { front = "Corrija: " + q; back = it.a[0]; }
  else if (it.t === "say") { front = "Diga em português: " + q; back = it.a[0]; }
  else return null;
  const id = "d-" + hash(l.deck + "|" + norm(front));
  const ex = Store.cards.get(id);
  if (ex) return { ...ex, misses: (ex.misses || 1) + 1, due: Date.now() };
  return { id, deck: l.deck, front, back, note: stripHtml(it.x).slice(0, 400), cat: l.id, lesson: l.id, source: "", es: /spanish|espanhol|ES\b/i.test(stripHtml(it.x)) || /\b(el|la|los|pero|muy|hay|con)\b/i.test(q), origin: "exercício", created: Date.now(), due: Date.now(), interval: 0, ease: 2.5, reps: 0, lapses: 0, misses: 1 };
}
function finishItem(ok, extra = {}) {
  const d = S.drill, it = d.items[d.i], l = LESSON[d.lessonId];
  d.results.push(ok); d.phase = "answered"; d.verdict = { ok, ...extra };
  const xp = ok ? 5 : 1; d.xp += xp; addXP(xp);
  P.lessons = P.lessons || {};
  const st = P.lessons[l.id] || { n: 0, ok: 0, last: 0 };
  P.lessons[l.id] = { n: st.n + 1, ok: st.ok + (ok ? 1 : 0), last: Date.now() };
  if (!ok) {
    catHit(l.id);
    const card = drillCard(it, l);
    if (card) { Store.putCard(card); d.cards++; d.verdict.card = true; }
  }
  Store.save(); updateHeader(); renderScreen();
}
async function checkDrill(choice) {
  const d = S.drill; if (!d || d.phase !== "ask") return;
  const it = d.items[d.i];
  if (it.t === "mc") { d.verdict = null; finishItem(choice === it.a, { chosen: choice }); return; }
  const el = $("#drill-input"); const ans = (el ? el.value : "").trim();
  if (!ans) { toast("Responda primeiro: fale ou digite."); el && el.focus(); return; }
  d.input = ans;
  if (it.t === "fill") { const r = matchAny(ans, it.a); finishItem(r.ok, { accent: r.accent }); return; }
  if (it.t === "shadow") { const r = shadowScore(ans, stripHtml(it.q)); finishItem(r.ratio >= 0.8, { shadow: r }); return; }
  const r = matchAny(ans, it.a);
  if (r.ok) { finishItem(true, { accent: r.accent }); return; }
  if (AI.ok) {
    d.phase = "checking"; renderScreen();
    try {
      const g = await AI.json(gradePrompt(it, ans), { modelTier: "quick", cache: false });
      if (S.drill !== d) return;
      d.phase = "ask"; finishItem(!!(g && g.ok), { ai: { feedback: String(g && g.feedback || ""), fixed: String(g && g.fixed || "") } });
    } catch (e) { if (S.drill !== d) return; d.phase = "self"; d.aiErr = errMsg(e); renderScreen(); }
    return;
  }
  d.phase = "self"; renderScreen();
}
function verdictHTML(d, it) {
  const v = d.verdict;
  if (d.phase === "self") return `<div class="verdict close"><h3>Compare with the model answer</h3><p class="answer">${it.a.map(esc).join("<br>")}</p><p class="expl">${it.x}</p>${d.aiErr ? `<p class="note">${esc(d.aiErr)}</p>` : ""}</div>`;
  if (!v) return "";
  if (it.t === "shadow") {
    const r = v.shadow;
    return `<div class="verdict ${v.ok ? "ok" : "no"}"><h3>${v.ok ? "Muito bem!" : "Quase"} · ${Math.round(r.ratio * 100)}% reconhecido</h3>
      <p class="diffwords">${r.html}</p>
      ${r.missed.length ? `<p class="expl">The recognizer didn't catch: <b>${r.missed.map(esc).join(", ")}</b>. Listen again and exaggerate those sounds.</p>` : ""}
      <p class="note">Heard: “${esc(d.input)}”</p><p class="expl">${it.x}</p>
      <div>${playBtn(stripHtml(it.q), "shadow-again-" + d.i, "Ouvir de novo")}</div></div>`;
  }
  const answer = it.t === "mc" ? it.o[it.a] : it.a.map(esc).join(" · ");
  return `<div class="verdict ${v.ok ? (v.accent ? "close" : "ok") : "no"}">
    <h3>${v.ok ? (v.accent ? "Certo, mas cuidado com o acento" : "Correto!") : "Não foi dessa vez"}</h3>
    ${!v.ok || v.accent ? `<p class="answer">${v.accent ? esc(v.accent) : answer}</p>` : ""}
    ${v.ai && v.ai.feedback ? `<p class="expl">${esc(v.ai.feedback)}</p>` : ""}
    ${v.ai && !v.ok && v.ai.fixed && norm(v.ai.fixed) !== norm(d.input) ? `<p class="expl"><b>Your sentence, fixed:</b> ${esc(v.ai.fixed)}</p>` : ""}
    <p class="expl">${it.x}</p>
    ${v.card ? `<div class="cards-added">${I.card1} Saved as a flashcard</div>` : ""}
    ${it.t !== "mc" ? `<div>${playBtn(it.t === "fill" ? stripHtml(it.q).replace(/_{2,}/, it.a[0]).replace(/\s*\([^)]*\)/g, "") : it.a[0], "ans-" + d.i)}</div>` : ""}
  </div>`;
}
function screenDrill() {
  const d = S.drill; if (!d) return "";
  const l = LESSON[d.lessonId];
  if (d.i >= d.items.length) return drillResults();
  const it = d.items[d.i];
  const pct = Math.round(100 * d.i / d.items.length);
  const q = it.t === "fill" ? it.q.replace(/_{2,}/, '<span class="blank"></span>') : it.q;
  let input = "";
  if (it.t === "mc") input = `<div class="opts">${it.o.map((o, k) => { const cls = d.phase === "answered" ? (k === it.a ? "right" : (d.verdict && d.verdict.chosen === k ? "wrong" : "")) : ""; return `<button class="opt ${cls}" data-act="opt" data-i="${k}" ${d.phase === "answered" ? "disabled" : ""}>${o}</button>`; }).join("")}</div>`;
  else if (it.t === "fill") input = `<input id="drill-input" class="answer-input" type="text" lang="pt-BR" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" enterkeyhint="done" placeholder="Sua resposta" value="${esc(d.phase === "answered" ? d.input : "")}" ${d.phase !== "ask" ? "disabled" : ""}>`;
  else input = `<textarea id="drill-input" class="answer-input" lang="pt-BR" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="${it.t === "shadow" ? "Repita a frase em voz alta (ditado)…" : "Fale (ditado) ou digite…"}" ${d.phase !== "ask" ? "disabled" : ""}>${esc(d.phase !== "ask" ? d.input : "")}</textarea>
    <div class="dictate-hint">${I.mic}<span>Use the microphone on the Portuguese keyboard.</span></div>`;
  if (it.t !== "mc") {
    const micOn = !!Mic.mode() && (d.phase === "ask" || d.rec);
    input = input.replace(/\s*<div class="dictate-hint">[\s\S]*<\/div>\s*$/, "");
    input = micOn
      ? `<div class="answer-row">${input}<button class="mic-btn ${d.rec ? "rec" : ""}" id="drill-mic" data-act="drill-mic" aria-label="${d.rec ? "Parar" : "Falar"}" ${d.rec === "busy" ? "disabled" : ""}>${d.rec === "busy" ? '<span class="typing"><i></i><i></i><i></i></span>' : d.rec ? I.stop : I.mic}</button></div>
        <div class="dictate-hint">${I.mic}<span>${d.rec === "rec" ? "Listening. Tap the square when you finish." : d.rec === "busy" ? "Transcrevendo…" : "Tap the mic and say your answer, or type it."}</span></div>`
      : input + (it.t === "fill" || d.phase !== "ask" ? "" : `<div class="dictate-hint">${I.mic}<span>${IN_CLAUDE ? "Use the microphone on the Portuguese keyboard." : "Type, or use the Portuguese keyboard's microphone."}</span></div>`);
  }
  let foot;
  if (d.phase === "answered") foot = `<button class="btn btn-primary btn-block" data-act="next">Continuar</button>`;
  else if (d.phase === "checking") foot = `<button class="btn btn-primary btn-block" disabled>Verificando…</button>`;
  else if (d.phase === "self") foot = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><button class="btn btn-ghost" data-act="self" data-id="0">Errei</button><button class="btn btn-primary" data-act="self" data-id="1">Acertei</button></div>`;
  else foot = it.t === "mc" ? `<p class="note" style="text-align:center">Toque numa opção</p>` : `<button class="btn btn-primary btn-block" data-act="check">Verificar</button>`;
  return `<div class="screen">
  <div class="screen-head"><div class="wrap"><button class="icon-btn" data-act="close" aria-label="Fechar">${I.close}</button>
    <div class="progress" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div>
    <span class="mono" style="min-width:44px;text-align:right">${d.i + 1}/${d.items.length}</span></div></div>
  <div class="screen-body"><div class="wrap">
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><span class="mono drill-kind">${KIND[it.t]}</span><span class="pill">${esc(l.title)}</span>${d.generated ? `<span class="pill pill-ipe">${I.spark.replace("<svg ", '<svg width="12" height="12" ')} IA</span>` : ""}</div>
    <p class="drill-q">${q}</p>
    ${it.t === "shadow" ? `<div class="err-actions">${playBtn(stripHtml(it.q), "shadow-" + d.i, "Ouvir")}<button class="tool" data-act="say-slow" data-say="${esc(stripHtml(it.q))}" data-play-key="shadows-${d.i}">${I.slow} Devagar</button></div>` : ""}
    ${input}
    ${verdictHTML(d, it)}
  </div></div>
  <div class="screen-foot"><div class="wrap">${foot}</div></div>
</div>`;
}
function drillResults() {
  const d = S.drill, l = LESSON[d.lessonId];
  const ok = d.results.filter(Boolean).length, n = d.results.length || 1;
  const pct = Math.round(100 * ok / n);
  return `<div class="screen">${head(l.title, "Resultado", "", "close", I.close)}
  <div class="screen-body"><div class="wrap">
    <div class="result-big"><span class="mono muted">Acertos</span><span class="num">${pct}%</span><span class="muted">${ok} de ${d.results.length} · +${d.xp} XP${d.cards ? ` · ${d.cards} ${d.cards === 1 ? "cartão novo" : "cartões novos"}` : ""}</span></div>
    ${pct < 80 ? `<div class="nudge">Below 80%: reread the rules, then run it again. Your misses are already in your flashcards.</div>` : `<div class="nudge" style="background:var(--good-soft)">Solid. Try it live in a conversation to make it automatic.</div>`}
  </div></div>
  <div class="screen-foot"><div class="wrap" style="grid-template-columns:1fr 1fr">
    <button class="btn btn-ghost" data-act="drill-again">De novo</button>
    ${AI.ok ? `<button class="btn btn-primary" data-act="gen" data-id="${l.id}" ${S.gen[l.id] ? "disabled" : ""}>${S.gen[l.id] ? "Gerando…" : "Novos exercícios (IA)"}</button>` : `<button class="btn btn-primary" data-act="close">Concluir</button>`}
  </div></div>
</div>`;
}

/* ---------- review ---------- */
function startReview(deck) {
  const due = dueCards(deck).slice(0, 40);
  if (!due.length) { toast("Nada para revisar agora."); return; }
  S.review = { queue: due.map(c => c.id), i: 0, flipped: false, xp: 0, again: new Set(), counts: [0, 0, 0, 0] };
  openScreen({ type: "review" });
}
function screenReview() {
  const r = S.review; if (!r) return "";
  while (r.i < r.queue.length && !Store.cards.get(r.queue[r.i])) r.i++;
  if (r.i >= r.queue.length) {
    const tot = r.counts.reduce((a, b) => a + b, 0);
    return `<div class="screen">${head("Revisão concluída", "", "", "close", I.close)}<div class="screen-body"><div class="wrap">
      <div class="result-big"><span class="mono muted">Revisados</span><span class="num">${tot}</span><span class="muted">+${r.xp} XP · ${r.counts[0]} de novo · ${r.counts[2] + r.counts[3]} bem</span></div>
      ${dueCards().length ? `<div class="nudge">${dueCards().length} more ${dueCards().length === 1 ? "card is" : "cards are"} due.</div>` : `<div class="nudge" style="background:var(--good-soft)">All caught up. New cards appear as you practice.</div>`}
    </div></div><div class="screen-foot"><div class="wrap"><button class="btn btn-primary btn-block" data-act="close">Concluir</button></div></div></div>`;
  }
  const c = Store.cards.get(r.queue[r.i]);
  const pct = Math.round(100 * r.i / r.queue.length);
  const l = c.lesson && LESSON[c.lesson];
  return `<div class="screen">
  <div class="screen-head"><div class="wrap"><button class="icon-btn" data-act="close" aria-label="Fechar">${I.close}</button>
    <div class="progress"><i style="width:${pct}%"></i></div><span class="mono" style="min-width:44px;text-align:right">${r.i + 1}/${r.queue.length}</span></div></div>
  <div class="screen-body"><div class="wrap">
    <div class="flash"><div class="flash-inner" ${r.flipped ? "" : 'data-act="flip" role="button" tabindex="0" aria-label="Mostrar resposta"'}>
      ${tiles(seedOf(c.id), 3, 3, 1, "tiles-bg")}
      <div class="chips"><span class="pill pill-azul">${DECKS[c.deck] ? DECKS[c.deck].label : "Cartão"}</span>${c.es ? '<span class="pill pill-warn">ES</span>' : ""}${l ? `<span class="pill">${esc(l.title)}</span>` : ""}</div>
      <div class="flash-front">${esc(c.front)}</div>
      ${r.flipped ? `<div class="flash-back"><div class="ans">${esc(c.back)}</div>
        ${c.note ? `<div class="muted" style="font-size:14.5px">${esc(c.note)}</div>` : ""}
        ${c.source ? `<div class="src">Você disse: “${esc(c.source)}”</div>` : ""}
        <div class="err-actions">${playBtn(speakable(c.back), "rev-" + c.id)}${l ? `<button class="btn btn-sm btn-ghost" data-act="lesson" data-id="${l.id}">Aula</button>` : ""}</div></div>`
        : `<p class="note">Answer out loud, then tap to check.</p>`}
    </div></div>
  </div></div>
  <div class="screen-foot"><div class="wrap">${r.flipped
    ? `<div class="rate">${["De novo", "Difícil", "Bom", "Fácil"].map((lab, k) => `<button class="r${k}" data-act="rate" data-id="${k}">${lab}<small>${schedule(c, k, true)}</small></button>`).join("")}</div>`
    : `<button class="btn btn-primary btn-block" data-act="flip">Mostrar resposta</button>`}</div></div>
</div>`;
}

/* ---------- connections: API keys for the installed app ---------- */
function screenConnect() {
  const ks = S.keyStatus || {};
  const row = (id, name, what, placeholder, link, linkLabel) => {
    const st = ks[id];
    return `<div class="card" style="display:grid;gap:10px">
      <div><h2 style="font-size:19px">${name}</h2><p class="note">${what}</p></div>
      ${Keys.has(id) ? `<div class="status-line ok">${I.check} Saved: <span style="font-family:var(--f-mono);font-weight:500">${esc(Keys.masked(id))}</span></div>` : ""}
      <div class="key-row"><input id="key-${id}" type="password" class="answer-input" style="padding:11px 12px" placeholder="${Keys.has(id) ? "Paste a new key to replace it" : placeholder}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="${name} API key"><button class="btn btn-sm btn-primary" data-act="key-save" data-id="${id}">Salvar</button></div>
      ${st ? `<div class="status-line ${st.state}">${st.state === "ok" ? I.check : st.state === "bad" ? I.warn : ""}<span>${esc(st.msg)}</span></div>` : ""}
      <div style="display:flex;gap:6px 14px;flex-wrap:wrap;align-items:center"><a class="link-row" href="${link}" target="_blank" rel="noopener">${linkLabel} ${I.arrow.replace("<svg ", '<svg width="16" height="16" ')}</a>
        ${Keys.has(id) ? `<button class="tool" data-act="key-test" data-id="${id}">Testar</button><button class="tool" style="color:var(--bad)" data-act="key-del" data-id="${id}">Remover</button>` : ""}</div>
    </div>`;
  };
  return `<div class="screen">${head("Conexões", "Claude, voices and microphone", "", "close", I.close)}
  <div class="screen-body"><div class="wrap">
    <div class="banner info">${I.key}<div>Keys are stored only on this iPhone and are sent only to the company they belong to. Each one bills your own account.</div></div>
    ${row("anthropic", "Claude (Anthropic)", "Required for conversations. Plays the officials and writes the corrections, hints and new exercises. Roughly 3–5 US cents per answer.", "sk-ant-…", "https://console.anthropic.com/settings/keys", "Get an Anthropic API key")}
    ${row("openai", "OpenAI", "Recommended. Turns on the in-app microphone (your Spanish words are kept as you said them) and gives the officials natural Brazilian voices.", "sk-…", "https://platform.openai.com/api-keys", "Get an OpenAI API key")}
    ${row("elevenlabs", "ElevenLabs", "Optional. The most realistic voices. Brazilian voices you add from the ElevenLabs Voice Library appear under Progresso → Ajustes → Voices.", "ElevenLabs API key", "https://elevenlabs.io/app/settings/api-keys", "Get an ElevenLabs API key")}
    <details class="howto card"><summary>How to get an Anthropic key on your iPhone</summary><ol>
      <li>Open console.anthropic.com in Safari and sign in. It's separate from your Claude subscription.</li>
      <li>Under Billing, add a few dollars of credit.</li>
      <li>Under Settings → API Keys, tap Create Key and copy it.</li>
      <li>Come back here, paste it in the Claude box and tap Salvar.</li>
    </ol></details>
  </div></div>
</div>`;
}
function rerenderConnect() { const t = topScreen(); if (t && t.type === "connect") renderScreen(); }
async function testKey(id) {
  S.keyStatus[id] = { state: "wait", msg: "Testing…" }; rerenderConnect();
  try {
    if (id === "anthropic") {
      AI.refresh();
      const r = await AI.text("Responda apenas com a palavra: ok", { modelTier: "quick", cache: false });
      S.keyStatus[id] = { state: "ok", msg: "Connected. Claude answered “" + r.text.slice(0, 30) + "”." };
    } else if (id === "openai") {
      Cloud.initAudio();
      const url = await Cloud.fetchAudio("Olá! Esta é uma das vozes da OpenAI.", { provider: "openai", persona: null });
      Cloud.audio.src = url; Cloud.audio.play().catch(() => {});
      S.keyStatus[id] = { state: "ok", msg: "Connected. The microphone and OpenAI voices are on." };
    } else {
      const vs = await Cloud.loadElVoices(true);
      const br = vs.filter(v => Cloud.isBrazilian(v)).length;
      S.keyStatus[id] = { state: "ok", msg: `Connected. ${vs.length} voices in your account, ${br} Brazilian.` };
    }
  } catch (e) {
    console.warn("key test failed", e);
    S.keyStatus[id] = { state: "bad", msg: id === "anthropic" ? errMsg(e) : (e && e.status === 401 ? "The key was rejected. Check that you copied all of it." : cloudErr(e)) };
  }
  AI.refresh(); rerenderConnect(); updateHeader();
}

/* ---------- settings pieces ---------- */
function connectionsSetting() {
  if (IN_CLAUDE) return "";
  const st = k => Keys.has(k) ? "on" : "off";
  return `<div class="setting"><div class="toggle-row"><span><b>Conexões</b><br><span class="s-help">Claude ${st("anthropic")} · OpenAI ${st("openai")} · ElevenLabs ${st("elevenlabs")}</span></span><button class="btn btn-sm btn-soft" data-act="connect">Abrir</button></div></div>`;
}
function shortName(p) { return p.id === "coach" ? "Narrador" : p.name.replace(/^(Prefeita|Prefeito|Vereadora|Vereador|Dona)\s+/, "").split(" ").slice(0, 2).join(" "); }
function voiceAvatar(p) { return p.id === "coach" ? `<div class="avatar sm" style="background:var(--surface-2)">${tiles(2, 2, 2, 1)}</div>` : avatar(p, "sm"); }
function voiceSettings() {
  const prov = Cloud.provider();
  const personas = [{ id: "coach", name: "Narrador (aulas e cartões)", gender: null }, ...SCENARIOS.map(s => s.persona)];
  let html = `<div class="setting"><span class="s-label">Voices</span>`;
  if (!IN_CLAUDE) {
    const want = P.voiceProvider || "auto";
    html += `<div class="seg">${[["auto", "Automático", true], ["device", "iPhone", true], ["openai", "OpenAI", Keys.has("openai")], ["elevenlabs", "ElevenLabs", Keys.has("elevenlabs")]].map(([k, l, en]) => `<button data-act="set-vprov" data-id="${k}" aria-pressed="${want === k}" ${en ? "" : "disabled"}>${l}</button>`).join("")}</div>
      <span class="s-help">Playing now: <b>${{ device: "iPhone voices", openai: "OpenAI voices", elevenlabs: "ElevenLabs voices" }[prov]}</b>.${!Keys.has("openai") && !Keys.has("elevenlabs") ? ` Add an OpenAI or ElevenLabs key in <button class="tool" style="height:auto;padding:0" data-act="connect">Conexões</button> for natural Brazilian voices.` : ""}</span>`;
  }
  if (prov === "device") {
    const pv = Voice.list;
    html += !Voice.ok ? `<span class="s-help">This browser can't speak. Text is shown instead.</span>`
      : !pv.length ? `<span class="s-help">No Portuguese voice found on this device yet. On iPhone: Settings → Accessibility → Spoken Content → Voices → Portuguese (Brazil), download a voice, then reopen the app.</span>`
      : `<span class="s-help">${pv.length} Portuguese ${pv.length === 1 ? "voice" : "voices"} on this device${Voice.european ? " (European Portuguese only; download a Brazilian voice in iPhone Settings)" : ""}. Voices marked Enhanced or Premium sound most natural.</span>
        <div class="list" style="gap:8px">${personas.map(p => `<div class="voice-row">${voiceAvatar(p)}
          <select data-set="voice" data-prov="device" data-id="${p.id}" aria-label="Voz de ${esc(p.name)}"><option value="">${esc(shortName(p))} · automática</option>${pv.map(v => `<option value="${esc(v.voiceURI)}" ${P.voiceMap && P.voiceMap[p.id] === v.voiceURI ? "selected" : ""}>${esc(shortName(p))}: ${esc(Voice.label(v))}</option>`).join("")}</select>
          <button class="icon-btn" data-act="test-voice" data-id="${p.id}" data-play-key="test-${p.id}" aria-label="Testar voz">${I.play}</button></div>`).join("")}</div>`;
  } else {
    if (prov === "elevenlabs" && !Cloud.elVoices) {
      Cloud.loadElVoices().then(() => softRender()).catch(e => toast(cloudErr(e)));
      html += `<span class="s-help">Loading your ElevenLabs voices…</span>`;
    }
    const opts = Cloud.voiceOptions(prov), map = (P.voiceMaps && P.voiceMaps[prov]) || {};
    const labelOf = id => { const o = opts.find(x => x.id === id); return o ? o.label : id; };
    html += (prov === "elevenlabs"
      ? `<span class="s-help">Voices marked BR are Brazilian. Add more from the <a href="https://elevenlabs.io/app/voice-library" target="_blank" rel="noopener">ElevenLabs Voice Library</a>, then reopen this screen.</span>`
      : `<span class="s-help">Each official speaks with a different Brazilian voice. Change any of them here.</span>`) +
      `<div class="list" style="gap:8px">${personas.map(p => { const auto = Cloud.voiceId(prov, p.id, p.gender); return `<div class="voice-row">${voiceAvatar(p)}
        <select data-set="voice" data-prov="${prov}" data-id="${p.id}" aria-label="Voz de ${esc(p.name)}"><option value="">${esc(shortName(p))} · automática${auto ? " (" + esc(labelOf(auto)) + ")" : ""}</option>${opts.map(o => `<option value="${esc(o.id)}" ${map[p.id] === o.id ? "selected" : ""}>${esc(shortName(p))}: ${esc(o.label)}</option>`).join("")}</select>
        <button class="icon-btn" data-act="test-voice" data-id="${p.id}" data-play-key="test-${p.id}" aria-label="Testar voz">${I.play}</button></div>`; }).join("")}</div>`;
  }
  return html + `</div>`;
}
function dictationSetting() {
  const m = Mic.mode();
  if (m) return `<div class="setting"><span class="s-label">Microphone</span><span class="s-help">${m === "openai" ? "In-app microphone is on. Your answers are transcribed by OpenAI, which keeps Spanish words exactly as you said them so the coach can catch them." : "In-app microphone uses the iPhone's speech recognition. For more faithful transcripts (Spanish words included), add an OpenAI key in Conexões."}</span></div>`;
  return `<div class="setting"><span class="s-label">Dictation</span>
    <details class="howto"><summary>Set up Portuguese dictation on iPhone</summary><ol>
      <li>Settings → General → Keyboard → Keyboards → Add New Keyboard → <b>Português (Brasil)</b>.</li>
      <li>Turn on <b>Enable Dictation</b> on the same screen.</li>
      <li>Tap the answer box, switch keyboards with the globe key, tap the microphone, and speak. Tap it again to stop.</li>
      <li>Don't fix the transcript before sending. The coach reads Spanish words and Spanish-sounding pronunciation in it.</li>
    </ol></details>${IN_CLAUDE ? "" : `<span class="s-help">Add an OpenAI key in Conexões to talk with an in-app microphone instead.</span>`}</div>`;
}

/* ---------- drills: microphone ---------- */
async function drillMic() {
  const d = S.drill; if (!d) return;
  if (!d.rec) {
    if (d.phase !== "ask") return;
    Voice.stop();
    try { await Mic.start(); } catch (e) { console.warn("mic start", e); toast(micErr(e)); return; }
    if (S.drill !== d) { Mic.cancel(); return; }
    d.rec = "rec"; renderScreen();
  } else if (d.rec === "rec") {
    d.rec = "busy"; renderScreen();
    let text = "", failed = false;
    try { text = await Mic.stop(); } catch (e) { failed = true; console.warn("mic stop", e); toast(micErr(e)); }
    if (S.drill !== d) return;
    d.rec = null; renderScreen();
    if (!text) { if (!failed) toast("Não ouvi nada. Tente de novo."); return; }
    const el = $("#drill-input"); if (el) el.value = text;
    checkDrill();
  }
}
/* ================= actions ================= */
function personaById(id) {
  if (!id || id === "coach") return null;
  for (const s of SCENARIOS) if (s.persona.id === id) return s.persona;
  if (S.custom && S.custom.persona.id === id) return S.custom.persona;
  if (S.convo && S.convo.scenario.persona.id === id) return S.convo.scenario.persona;
  return null;
}
function sampleLine(p) { return `Bom dia! Aqui é ${p.name}, ${p.role.charAt(0).toLowerCase() + p.role.slice(1)}. Vamos conversar sobre a certificação?`; }
function refreshCardList() { const el = $("#card-list"); if (el) el.innerHTML = cardList(); else renderTab(); }
function rerenderHere() {
  const t = topScreen();
  if (!t) renderTab(); else if (t.type === "convo") renderMsgs(false); else renderScreen();
}
function saveFreeInputs() { const w = $("#free-who"), x = $("#free-what"); if (w) S.free.who = w.value; if (x) S.free.what = x.value; }
async function createFree() {
  saveFreeInputs();
  const f = S.free; if (f.busy) return;
  if (!f.who.trim() && !f.what.trim()) { toast("Describe who you're meeting first."); return; }
  f.busy = true; renderScreen();
  try {
    const d = await AI.json(freePrompt(f.who, f.what, f.gender), { modelTier: "quick", cache: false }) || {};
    const targets = (Array.isArray(d.targets) ? d.targets : []).filter(t => LESSON[t]).slice(0, 3);
    S.custom = {
      id: "livre-" + uid(), level: 2,
      title: "Tema livre: " + String(d.role || f.who || "reunião").slice(0, 60),
      en: (f.what || "Custom meeting").slice(0, 120),
      persona: { id: "livre-" + f.gender, name: String(d.name || (f.gender === "f" ? "Mariana Souza" : "Carlos Andrade")).slice(0, 60), role: String(d.role || f.who || "Gestor público").slice(0, 80), gender: f.gender, pitch: 1, rate: 1, tone: String(d.tone || "professional and courteous").slice(0, 300) },
      setup: String(d.setup || f.what || "").slice(0, 400), goal: "Hold the conversation on your own topic.",
      targets: targets.length ? targets : ["register", "subj-present"],
      vocab: (Array.isArray(d.vocab) ? d.vocab : []).filter(v => Array.isArray(v) && v.length >= 2).slice(0, 6).map(v => [String(v[0]), String(v[1])]),
      opening: String(d.opening || "Bom dia! Em que posso ajudar?").slice(0, 300)
    };
    f.busy = false;
    S.stack[S.stack.length - 1] = { type: "brief", id: S.custom.id };
    renderScreen();
  } catch (e) { f.busy = false; toast(errMsg(e)); renderScreen(); }
}
function addStarter(id) {
  const st = STARTERS.find(s => s.id === id); if (!st || (P.starters || {})[id]) return;
  P.starters = { ...(P.starters || {}), [id]: true }; Store.save();
  const now = Date.now();
  st.cards.forEach(([f, b], k) => {
    const cid = "s-" + id + "-" + k; if (Store.cards.has(cid)) return;
    Store.putCard({ id: cid, deck: st.deck, front: f, back: b, note: "", cat: st.lesson, lesson: st.lesson, source: "", es: /^ES /.test(f), origin: "coleção", created: now, due: now + Math.floor(k / 10) * DAY, interval: 0, ease: 2.5, reps: 0, lapses: 0, misses: 0 });
  });
  toast(`${st.cards.length} cartões adicionados (10 por dia).`);
  renderTab(); updateHeader();
}
function rateCard(k) {
  const r = S.review; if (!r) return;
  const c = Store.cards.get(r.queue[r.i]); if (!c) { r.i++; renderScreen(); return; }
  Store.putCard(schedule(c, k));
  r.counts[k]++; r.xp += 2; addXP(2);
  if (k === 0 && !r.again.has(c.id)) { r.again.add(c.id); r.queue.push(c.id); }
  r.i++; r.flipped = false; Voice.stop(); renderScreen();
}
function doReset() {
  for (const id of [...Store.cards.keys()]) Store.deleteCard(id);
  const keep = {}; ["address", "myName", "myRole", "explainLang", "depth", "rate", "hideText", "autoplay", "voiceMap", "setupDone"].forEach(k => keep[k] = P[k]);
  P = { ...JSON.parse(JSON.stringify(DEFAULT_PROFILE)), ...keep };
  Store.save(); S.confirmReset = false; toast("Progresso apagado."); render();
}
async function openPerms() {
  try {
    const p = await window.claude.use("permissions"); if (!p) throw 0;
    await p.manage();
    const st = await p.state("sample");
    if (st === "granted") toast("Allowed. Reload the page to turn the tutor back on.");
  } catch (e) { toast("Use this page's Permissions menu to allow Claude."); }
}
function act(a, el) {
  const id = el.dataset.id, i = el.dataset.i !== undefined ? Number(el.dataset.i) : null;
  const c = S.convo;
  switch (a) {
    case "tab": if (location.hash.slice(1) !== id) location.hash = id; else { S.tab = id; render(); } { const vw = $("#view"); if (vw) vw.scrollTop = 0; } break;
    case "brief": openScreen({ type: "brief", id }); break;
    case "free": openScreen({ type: "free" }); break;
    case "free-gender": saveFreeInputs(); S.free.gender = id; renderScreen(); break;
    case "free-create": createFree(); break;
    case "start":
      if (AI.kind === "api" && !AI.ok) { toast("Connect Claude first to start a conversation."); openScreen({ type: "connect" }); break; }
      startConvo(id); break;
    case "connect": openScreen({ type: "connect" }); break;
    case "key-save": {
      const inp = $("#key-" + id), val = inp ? inp.value.trim() : "";
      if (!val) { toast("Paste the key first."); break; }
      Keys.set(id, val); if (id === "elevenlabs") Cloud.elVoices = null;
      AI.refresh(); updateHeader(); testKey(id); break;
    }
    case "key-test": testKey(id); break;
    case "key-del": Keys.set(id, ""); S.keyStatus[id] = null; if (id === "elevenlabs") Cloud.elVoices = null; AI.refresh(); renderScreen(); updateHeader(); toast("Key removed."); break;
    case "set-vprov": P.voiceProvider = id; Store.save(); Voice.stop(); rerenderHere(); break;
    case "mic": micStart(); break;
    case "mic-stop": micStop(); break;
    case "mic-cancel": micCancel(); break;
    case "drill-mic": drillMic(); break;
    case "again": S.convo = null; S.stack = []; startConvo(id); break;
    case "close": closeScreen(); break;
    case "summary-close": S.convo = null; closeAll(); break;
    case "review-from-summary": S.convo = null; S.stack = []; syncLayers(false); render(); startReview("all"); break;
    case "convo-exit": case "convo-end": endConvo(); break;
    case "send": sendAnswer(); break;
    case "hint": askHint(); break;
    case "play-npc": if (c) sayAs(c.turns[i].text, c.scenario.persona, "npc-" + i); break;
    case "slow-npc": if (c) sayAs(c.turns[i].text, c.scenario.persona, "npcs-" + i, 0.75); break;
    case "reveal": if (c && c.turns[i]) { c.turns[i].shown = true; renderMsgs(false); } break;
    case "translate": if (c) translateTurn(i); break;
    case "retry-npc": if (c) { runPersona(i); renderMsgs(false); } break;
    case "retry-coach": if (c) { runCoach(i); renderMsgs(false); } break;
    case "toggle-hide": P.hideText = !P.hideText; Store.save(); renderMsgs(false); toast(P.hideText ? "Modo escuta: textos ocultos" : "Textos visíveis"); break;
    case "say": sayAs(el.dataset.say, personaById(el.dataset.persona), el.dataset.playKey || "say-" + hash(el.dataset.say || "")); break;
    case "say-slow": sayAs(el.dataset.say, null, el.dataset.playKey, 0.75); break;
    case "lesson": if (LESSON[id]) openScreen({ type: "lesson", id }); break;
    case "drill": startDrill(id); break;
    case "gen": genDrills(id); break;
    case "opt": checkDrill(i); break;
    case "check": checkDrill(); break;
    case "next": { const d = S.drill; if (!d) break; if (d.rec) { Mic.cancel(); d.rec = null; } d.i++; d.phase = "ask"; d.verdict = null; d.input = ""; d.aiErr = null; Voice.stop(); renderScreen(); autoplayShadow(); const b = $("#screen-root .screen-body"); if (b) b.scrollTop = 0; break; }
    case "self": { const d = S.drill; if (!d) break; d.phase = "ask"; finishItem(id === "1"); break; }
    case "drill-again": { const d = S.drill; if (d) startDrill(d.lessonId, d.generated ? shuffle(d.items) : undefined); break; }
    case "review": startReview(S.deck); break;
    case "flip": { const r = S.review; if (!r || r.flipped) break; r.flipped = true; renderScreen(); const cd = Store.cards.get(r.queue[r.i]); if (cd && P.autoplay) sayAs(speakable(cd.back), null, "rev-" + cd.id); break; }
    case "rate": rateCard(Number(id)); break;
    case "deck": S.deck = S.deck === id ? "all" : id; S.openCard = null; renderTab(); break;
    case "card-open": S.openCard = S.openCard === id ? null : id; S.confirmDel = null; refreshCardList(); break;
    case "card-del": S.confirmDel = id; refreshCardList(); break;
    case "card-del-no": S.confirmDel = null; refreshCardList(); break;
    case "card-del-yes": Store.deleteCard(id); S.confirmDel = null; S.openCard = null; toast("Cartão apagado."); renderTab(); updateHeader(); break;
    case "starter-add": addStarter(id); break;
    case "setup-done": P.setupDone = true; Store.save(); renderTab(); toast("Tudo pronto. Boa prática!"); break;
    case "set-address": P.address = id; Store.save(); rerenderHere(); break;
    case "set-lang": P.explainLang = id; Store.save(); rerenderHere(); break;
    case "set-depth": P.depth = id; Store.save(); rerenderHere(); break;
    case "toggle": P[id] = !P[id]; Store.save(); rerenderHere(); break;
    case "test-voice": { const p = personaById(id); sayAs(p ? sampleLine(p) : "Olá! Esta é a voz que lê as aulas e os cartões.", p, "test-" + id); break; }
    case "reset": S.confirmReset = true; renderTab(); break;
    case "reset-no": S.confirmReset = false; renderTab(); break;
    case "reset-yes": doReset(); break;
    case "perm": openPerms(); break;
    case "bar": S.barSel = S.barSel === i ? null : i; renderTab(); break;
  }
}

/* ================= events ================= */
document.addEventListener("click", e => {
  const el = e.target.closest("[data-act]");
  if (!el || el.disabled) return;
  act(el.dataset.act, el);
});
document.addEventListener("keydown", e => {
  const t = e.target;
  if (t.id === "answer" && e.key === "Enter" && !e.shiftKey && !e.isComposing) { e.preventDefault(); sendAnswer(); return; }
  if (t.id === "drill-input" && e.key === "Enter" && !e.shiftKey && !e.isComposing && S.drill && S.drill.phase === "ask") { e.preventDefault(); checkDrill(); return; }
  if ((e.key === "Enter" || e.key === " ") && t.matches && t.matches('[role="button"][data-act]')) { e.preventDefault(); act(t.dataset.act, t); }
});
document.addEventListener("input", e => {
  const t = e.target;
  if (t.id === "answer") { autoGrow(t); if (S.convo) S.convo.draft = t.value; const c = $("#composer"); if (c) c.classList.toggle("has-text", !!t.value.trim()); }
  else if (t.id === "card-search") { S.q = t.value; refreshCardList(); }
  else if (t.id === "set-rate") { const v = $("#rate-val"); if (v) v.textContent = Math.round(Number(t.value) * 100) + "%"; }
});
document.addEventListener("change", e => {
  const t = e.target, k = t.dataset && t.dataset.set; if (!k) return;
  if (k === "myName" || k === "myRole") { P[k] = t.value.trim().slice(0, 140) || (k === "myRole" ? DEFAULT_PROFILE.myRole : ""); Store.save(); }
  else if (k === "rate") { P.rate = clamp(Number(t.value) || 1, 0.7, 1.25); Store.save(); sayAs("Esta é a nova velocidade da fala.", null, "rate-test"); }
  else if (k === "voice") {
    const prov = t.dataset.prov || "device";
    if (prov === "device") { P.voiceMap = { ...(P.voiceMap || {}) }; if (t.value) P.voiceMap[t.dataset.id] = t.value; else delete P.voiceMap[t.dataset.id]; }
    else { P.voiceMaps = { ...(P.voiceMaps || {}) }; const m = { ...(P.voiceMaps[prov] || {}) }; if (t.value) m[t.dataset.id] = t.value; else delete m[t.dataset.id]; P.voiceMaps[prov] = m; }
    Store.save();
    const p = personaById(t.dataset.id);
    sayAs(p ? sampleLine(p) : "Olá! Esta é a voz do narrador.", p, "test-" + t.dataset.id);
  }
});
window.addEventListener("hashchange", () => {
  const h = location.hash.slice(1);
  if (TABS.some(x => x[0] === h)) { S.tab = h; if (S.stack.length && !S.stack.some(s => s.type === "convo")) closeAll(); else render(); { const vw = $("#view"); if (vw) vw.scrollTop = 0; } }
});

/* ================= boot ================= */
function boot(data) {
  shell();
  Store.loadLocal();
  const h = location.hash.slice(1);
  if (TABS.some(x => x[0] === h)) S.tab = h;
  render();
  Voice.init(() => { const t = topScreen(); if (t && t.type === "convo") renderMsgs(false); else if (!t) softRender(); });
  AI.init(() => { softRender(); const t = topScreen(); if (t && (t.type === "lesson" || t.type === "free")) renderScreen(); });
  Store.init(() => softRender());
  if (!IN_CLAUDE) Cloud.initAudio();
  if (Cloud.provider() === "elevenlabs") Cloud.loadElVoices().catch(() => {});
  document.addEventListener("visibilitychange", () => { if (document.hidden) { Voice.stop(); if (S.rec === "rec") micCancel(); } });
  if (data && data.convo && data.convo.scenario && Array.isArray(data.convo.turns)) {
    const cv = data.convo;
    cv.turns.forEach(t => {
      if (t.who === "npc" && t.state === "loading") { t.state = "error"; t.err = "Interrupted by an update. Tap Try again."; }
      if (t.who === "me" && t.fbState === "loading") { t.fbState = "error"; t.fbErr = "Interrupted by an update. Tap Try again."; }
    });
    S.convo = cv;
    if (String(cv.scenario.id).startsWith("livre-")) S.custom = cv.scenario;
    S.stack = [{ type: "convo", k: uid() }];
    syncLayers(false);
  }
}
try {
  const hot = window.claude && window.claude.hot;
  if (hot && typeof hot.snapshot === "function") hot.snapshot(() => ({ convo: S.convo && S.stack.some(s => s.type === "convo") ? JSON.parse(JSON.stringify(S.convo)) : null }));
} catch (e) { /* no hot reload */ }
(function start() {
  const hot = window.claude && window.claude.hot;
  if (hot && typeof hot.ready === "function") hot.ready(d => boot(d || {}));
  else boot((hot && hot.data) || {});
})();
