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
