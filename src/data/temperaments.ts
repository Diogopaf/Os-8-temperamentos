export interface Temperament {
  id: string;
  name: string;
  subtitle: string;
  characteristics: {
    emotivo: boolean;
    ativo: boolean;
    secundario: boolean;
  };
  description: string;
  positiveAspects: string[];
  negativeAspects: string[];
  education: string;
  color: string;
}

export const temperaments: Temperament[] = [
  {
    id: 'apaixonado',
    name: 'O APAIXONADO',
    subtitle: 'Emotivo, Ativo e Secundário',
    characteristics: { emotivo: true, ativo: true, secundario: true },
    color: 'hsl(0, 70%, 55%)',
    description: 'Trata-se de um temperamento emotivo (isto é, impressionável diante de qualquer tipo de estímulo), ativo (com uma tendência interior à ação, não importa se tem metas definidas ou não) e secundário (ou seja, guarda as impressões recebidas por um longo tempo e está muito ligado ao seu passado). O apaixonado, em geral, tem dificuldade em ser inativo, mas não é impulsivo, e sim enérgico, embora se exteriorize pouco. Portanto, quando transborda, é violento e avassalador. Sabe se lembrar das lições de experiências passadas e tirar proveito delas no futuro. Sua iniciativa e comprometimento são muito amplos, embora exteriormente calmos, exceto em casos excepcionais, e conscientemente direcionados para fins distantes e constantes. Seus sentimentos e paixões são fortes, se aprofundam firmemente e nele se enraízam, influenciando seu comportamento por um longo tempo. Diante das injúrias, sua raiva se acende internamente, ainda que não se exteriorize imediatamente; se elas se repetem, acaba explodindo em uma tempestade de ira duradoura que facilmente se transforma em rancor e desejo de vingança. Diante do perigo, ele primeiro reflete e depois toma uma decisão. Se decide atacar, continua com uma violência sem precedentes até vencer ou morrer; se julgar que deve adotar uma atitude passiva, é tenaz nessa postura. As faltas próprias e alheias causam-lhe um grande aborrecimento e se propõe corrigi-las firmemente. Ele é constante na ação, imutável em seus julgamentos, às vezes até à teimosia. Tem sentimentos estáveis de tal maneira que sua amizade é muito fiel mesmo depois de um longo tempo, mas também é difícil para ele esquecer uma ofensa e perdoar. Tem uma notável capacidade de organização e comando não tanto de modo simpático e atraente, mas eficaz, vigoroso e ordenado. Enérgico e sem grande perigo de dispersão; sabe ser firme, sistemático e orientado para um fim, ao qual se aproxima por etapas bem meditadas. Sua inteligência é ampla e bastante dedutiva. Sua imaginação é fecunda e costuma ter uma excelente memória. Está interessado em problemas sociais, morais, religiosos e filosóficos. Ele é naturalmente honrado e digno de confiança. Sabe ser fiel à sua palavra. Em relação aos menos dotados, adota espontaneamente uma atitude de proteção e ajuda compassiva. Na vida social é desordenado e simples, sem grande inclinação para a diplomacia sinuosa, nem tampouco para disputa repentina. Exteriormente é, em geral, correto, embora pouco efusivo.',
    positiveAspects: [
      'Quando canalizado para um grande ideal, é capaz de uma consagração, abnegação e atividade extraordinárias',
      'Rigor lógico no pensamento, memória, inventividade e eficiência na execução',
      'Habilita-se para grandes realizações, em cuja direção ou alta liderança pode alcançar objetivos notáveis',
      'Digno de confiança quando dá sua palavra ou promete alguma coisa',
      'Poder de previsão e senso de responsabilidade notável',
      'Diretor ou chefe nato, com tendência afetiva e fundada em grandes planos e objetivos'
    ],
    negativeAspects: [
      'Tem grandes paixões que não são facilmente apagadas',
      'Custa-lhe a submissão a um superior',
      'Pode ser suscetível, crítico, desconfiado, assim como tornar-se mal-humorado',
      'Tende, espontaneamente, ao rancor e à vingança',
      'Amor próprio notável, não aceita ser vencido ou superado por ninguém',
      'Na ação, peca devido ao excesso de energia que o leva a ser duro e exigente com os outros'
    ],
    education: 'É necessário ensinar-lhe a canalizar as suas energias na busca da santidade e das virtudes necessárias a seu temperamento, as quais são: Humildade: para vencer seu orgulho e amor próprio. Paciência e misericórdia: com os defeitos do próximo. Deve tratar a todos com suavidade e doçura. Juízo caridoso: sempre tentar pensar bem do próximo. É o remédio contra a sua disposição às críticas. Flexibilidade na opinião: para vencer a sua teimosia. Desapego de suas obras: que no fundo seria desapego de fazer a sua própria vontade (de impor seu modo de fazer as coisas). Deve fazer as obras sem colocar o coração nelas. Totalmente flexíveis para mudar o modo, e até a mesma obra, se o superior o pedir.'
  },
  {
    id: 'colerico',
    name: 'O COLÉRICO',
    subtitle: 'Emotivo, Ativo e Primário',
    characteristics: { emotivo: true, ativo: true, secundario: false },
    color: 'hsl(15, 80%, 50%)',
    description: 'É emotivo (isto é, impressionável diante de qualquer tipo de estímulo), ativo (com uma tendência interior à ação, não importa se tem metas definidas ou não) e primário (isto é, de reações imediatas, mas com um rápido retorno ao seu estado anterior, ou seja, fácil de acalmar). Como características gerais, apontemos antes de tudo sua atividade exuberante e modo impulsivo. Procura tarefas nas quais pode descarregar seu impulso vital. Ele é combativo e entusiasta; empreendedor e de grande iniciativa. Geralmente otimista e alegre e, embora passe fácil e rapidamente de um sentimento para outro, sua grande combatividade provoca continuamente entusiasmo e ardor pelo desenvolvimento de suas atividades. Muitas vezes essa atividade é febril, sem grande constância em uma mesma direção nem profundidade de seu trabalho. Seus sentimentos são abundantes, fortes, expansivos ao mais alto grau. Tem uma inclinação inata para comunicar o que pensa e sente, para o qual ajuda a sua notável facilidade de fala. Todas as suas paixões têm uma nuance extrema. É adequado para grandes empresas, pois não pode se resignar com vistas estreitas nem meios termos. Diante de insultos, reage violentamente pela palavra e vai às vias de fato sem esperar incitações repetidas. Em momentos de perigo, se exalta e se enche de entusiasmo, lançando-se ao ataque sem parar para calcular as consequências. Quando comete uma falta, se enche de indignação. Diante das falhas de outras pessoas, repreende e busca correção. Tem um instinto de comando e dominação e não se contenta com a posição de súdito. Sua inteligência é rápida e penetrante, intuitiva, não raramente de uma vasta capacidade. Sua aparência externa geralmente está de acordo com seu modo de ser: feições masculinas, olhar decidido, passo firme e movimentos enérgicos.',
    positiveAspects: [
      'Sua fortaleza natural, audácia e valentia o habilitam para grandes feitos',
      'É um homem de ideais elevados com capacidade para posições de importância na vida social',
      'Conta com uma vontade decidida e um escopo muito amplo',
      'Apto para política, para o ensino, para a direção, tem grande talento de improvisação e qualidades de orador',
      'Organiza adequadamente as atividades do grupo social ao qual pertence',
      'Aficionado por esportes e muito apto para eles'
    ],
    negativeAspects: [
      'Vive o momento presente exclusivamente interessado em resultados imediatos',
      'Corre grande perigo de dispersão e de desperdiçar seu grande fluxo vital',
      'Por ser impulsivo, pode facilmente tomar decisões arriscadas, sem prever as consequências',
      'Sua riqueza psicológica pode facilmente levá-lo ao orgulho ou à vaidade',
      'É difícil para ele reconhecer seus defeitos e facilmente critica os defeitos alheios',
      'Pode ser tão irascível que não admite a menor contradição sem que se desate em cólera'
    ],
    education: 'Têm que ser donos de si mesmos para poder controlar suas fortes paixões: sobretudo a ira e a sensualidade. Para isso será necessário que sejam pacientes e temperantes. Contra a superficialidade: devem habituar-se a pensar antes de agir, aprendendo a não agir precipitadamente e a desconfiar de seus primeiros impulsos. Também devem ser profundos, tentando chegar ao fundo do assunto, antes de julgar. Devem planejar bem as suas obras antes de começá-las e seguir com fidelidade e constância o plano traçado até terminá-lo, antes de começar uma outra obra. Devem ser humildes para não cair no orgulho ou na vanglória: evitando aparecer através de suas habilidades e destrezas. Ser prudentes e prever as consequências de suas decisões.'
  },
  {
    id: 'sentimental',
    name: 'O SENTIMENTAL',
    subtitle: 'Emotivo, Não Ativo e Secundário',
    characteristics: { emotivo: true, ativo: false, secundario: true },
    color: 'hsl(200, 60%, 45%)',
    description: 'É emotivo (isto é, impressionável diante de qualquer tipo de estímulo), não ativo (não tende interiormente à ação) e secundário (guarda as impressões recebidas por um longo tempo e está muito ligado ao seu passado). Como traços gerais, se destacam a profundidade e a perseverança dos sentimentos que, no entanto, pouco se manifestam exteriormente. É muito sensível a todos os tipos de emoções ou impressões externas, mas a reação íntima está concentrada nas profundezas da alma e ali é tenazmente gravada e ainda mais acentuada. Por exemplo, quando recebe uma ofensa não é incomum que pareça pouco impressionado exteriormente, mas, quando sozinho, saboreará seu ressentimento aumentando a ofensa em sua imaginação. Se os insultos forem repetidos, chegará um momento em que explodirá violentamente, tendo grande dificuldade em se reconciliar, devido à profundidade que a ferida toma em seu espírito. Por outro lado, na amizade ele é fiel e constante. Não costuma ter muitos amigos e prefere um pequeno grupo de pessoas íntimas. Lembra e agradece qualquer favor e atenção que recebe. Não muito propenso ao riso e à expansão, mas à seriedade, à melancolia e aos escrúpulos. Seu forte não é a atividade física ou intelectual, mas a afetividade. Facilmente comovido com os males dos outros e vendo tantas misérias no mundo, gostaria de remediá-las. Pode sofrer mais que os outros pelos defeitos alheios e pode se tornar suscetível. Ele é muito propenso à reflexão e análise de si mesmo. É indeciso, volta mil vezes sobre seus sentimentos e ações, o que, juntamente com seu profundo senso moral, o impede em muitas ocasiões de avançar e agir; ele sempre teme que não tenha feito bem as coisas e de modo reto. Na ação é bastante lento e geralmente não costuma empreender obras por sua própria iniciativa. Em momentos de perigo se mostra desconcertado e prefere uma atitude mais passiva do que ativa na defesa. Diante de suas próprias faltas, se desanima com facilidade e perde esperança em se corrigir. Diante das falhas alheias, se revolta interiormente, embora muitas vezes não consiga remediá-las. Não tem muito sentido prático; é sonhador e pode ter dons literários. É sensível a mudanças climáticas. Tem uma concepção séria da vida e geralmente ama tudo o que seja grande e profundo. Seu comportamento comum é de doçura e amabilidade exterior. Embora não se ofereça espontaneamente, ajuda quando requisitado. Muito apto para obras que exigem consagração, silêncio e caridade. Sua perseverança é uma característica marcante. Cumpridor de seu dever, percebe suas responsabilidades e tenta atendê-las com cuidado. É de aparência simples e pouco amigo de ostentação.',
    positiveAspects: [
      'Gentil e honrado, incapaz de ser cruel com outros',
      'Facilidade de oração e conforto em contato íntimo com Deus',
      'Simples, humilde e digno de confiança',
      'Perseverante, trabalhador profundo e responsável',
      'Propenso a ajudar os outros',
      'Abundam moralistas, pedagogos, psicólogos e escritores'
    ],
    negativeAspects: [
      'Pode pecar por indecisão',
      'Tende ao desânimo e a subestimar suas próprias qualidades',
      'Pode levar ao pessimismo, amargura ou timidez incômoda',
      'Perigo do orgulho e da soberba interior afetiva como compensação',
      'Encontra grande dificuldade em perdoar ofensas',
      'Corre o risco de azedar seu caráter se ceder excessivamente à solidão'
    ],
    education: 'Contra a insegurança e a indecisão é necessário infundir-lhes uma grande confiança em Deus e em si mesmos, ou seja, nas capacidades que Deus deu-lhes para realizar grandes empresas. Quando confiam em Deus e também nas suas próprias forças, tornam-se mais seguros e confiantes. Em seguida é necessário ensinar-lhes a tomar decisões, ainda que não tenham todos os dados que eles gostariam de ter antes de decidir. Finalmente para vencer a sua timidez, devem aprender a socializar-se e a divertir-se com seus amigos. Contra a susceptibilidade: deve-se aproveitar a sua inclinação à reflexão para fazer-lhes compreender que não é bom que sejam tão suscetíveis. Também devem encontrar um modo eficaz de exteriorizar seus sentimentos para poder desabafá-los e jamais chegar a cair na tristeza.'
  },
  {
    id: 'nervoso',
    name: 'O NERVOSO',
    subtitle: 'Emotivo, Não Ativo e Primário',
    characteristics: { emotivo: true, ativo: false, secundario: false },
    color: 'hsl(45, 70%, 55%)',
    description: 'É emotivo (isto é, impressionável frente a qualquer tipo de estímulo), não ativo (isto é, não tende internamente à ação) e primário (isto é, reage de imediato, mas também retorna rapidamente ao estado anterior). Em geral, tem grande variabilidade de sentimentos. Sua vitalidade é tumultuosa, pouco coerente e ordenada. Interessa-se, principalmente, por sua vida subjetiva, rica e complexa: homem de problemas interiores, tensões, alegrias intensas e sofrimentos que se sucedem e o fazem pensar muito em si mesmo. Pode manter as impressões por um longo tempo. Sua imaginação é vívida e seu engenho, vivaz; tem qualidades artísticas e talento musical. Mas, pela mesma razão, é extremamente sugestionável, curioso, ama o que lhe dá prazer momentâneo, o impressionante. Sente vivamente as injúrias e o mostra com alterações de gênio, embora passageiras. Essa excitabilidade pode torná-lo muito indisciplinado, rebelde e rude ao lidar com aqueles que o machucam (ou crê que o ofendem). Fica facilmente abatido quando falha e faz propósitos para se corrigir, mas logo os esquece. Tende, também, a se supervalorizar, enfatizando mentalmente suas boas qualidades e prestando pouca atenção aos seus defeitos. Sente necessidade de chamar a atenção, ser admirado e desabafar suas frequentes explosões ou impulsos. Inteligência mais intuitiva que dedutiva; mais concreta que abstrata. É ágil, seus nervos estão sempre tensos, mas não persevera muito em seu esforço contínuo e penoso. Altamente influenciável, tende rapidamente a pensar, sentir e agir como aqueles com os quais se relaciona, devido à sua grande capacidade de sintonia psíquica. Isso o torna muito adaptável a novos ambientes. Sabe exercer certa sedução nos outros, pois costuma ser muito simpático com quem se compatibiliza com ele.',
    positiveAspects: [
      'Coração muito sensível, inclinado à bondade e compaixão',
      'Extremamente generoso e atento às necessidades alheias',
      'Tato aguçado e sabe ser diplomático quando deseja',
      'Dócil e obediente com superiores que aprecia',
      'Espírito atencioso com graça especial para o trato',
      'Aptidão para confortar pessoas abatidas'
    ],
    negativeAspects: [
      'Sensibilidade excessiva como raiz dos defeitos',
      'Pode se tornar insuportável se dominado pelos sentimentos',
      'Inclinado à vaidade e sensualidade',
      'Vive de impressões e ímpetos momentâneos',
      'Inconsistência é seu principal defeito',
      'Muda facilmente de ideia e ocupação, escravo do momento'
    ],
    education: 'Tem que ser dono de si mesmo para não deixar-se dominar por seus sentimentos. Tem que aproveitar a sua emotividade para dar-se a si mesmo motivos de amor ou temor que o ajudem a realizar com fidelidade e constância aquelas atividades que planejara. Precisam adquirir as virtudes da humildade, contra a vanglória e o gosto por aparecer; E a temperança, contra a sensualidade.'
  },
  {
    id: 'fleumatico',
    name: 'O FLEUMÁTICO',
    subtitle: 'Não Emotivo, Ativo e Secundário',
    characteristics: { emotivo: false, ativo: true, secundario: true },
    color: 'hsl(120, 50%, 40%)',
    description: 'É não emotivo (isto é, não é facilmente impressionável), ativo (com uma tendência interna à ação, não importa se tem metas definidas ou não) e secundário (isto é, guarda as impressões recebidas por um longo tempo e está muito ligado ao seu passado). Como características gerais, digamos que ele apresenta uma personalidade vigorosamente estruturada, sem interrupções, com um fundo riquíssimo de energia ativa. Não possui sentimentos internos, mas sim constância e tenacidade na ação. Homem sem grandes paixões, dificilmente excitável, mantém-se em constante tranquilidade afetiva. Raramente violento e superexcitado na ação. Extremamente paciente. Pouco falante, quando se comunica faz isso com medida e Quase nunca levanta a voz. Reduz ao mínimo as expressões de afeto, geralmente dando muitas vezes a sensação de frieza. Continuamente ocupado, meticulosamente ordenado e metódico em toda conduta. Geralmente não gosta da vida social, embora seja fiel às amizades. Espírito claro e lógico, seus interesses preponderantes são mais intelectuais: estudos especulativos, matemática, direito, literatura. É simples em suas coisas e raramente vaidoso. É assíduo na ação, embora lento e calmo. Suas obras estão de acordo com suas ideias e princípios. Mostra grande retidão moral, quase inflexível. Reflexivo e extremamente prudente, não se decide por nenhum projeto até que as últimas probabilidades de sucesso sejam calculadas, pesando todas as dificuldades. Uma vez decidido, se dedica com seriedade e constância ao trabalho. Econômico, honesto e sincero, ele não se altera com as ofensas, não toma conhecimento ou as aceita com humor alegre. Em momentos de perigo é indeciso, embora não seja facilmente perturbado. Mantém sua serenidade, mas não age com prontidão. Se comete alguma falta, não se chateia demasiado. Sua inteligência está mais apta para aprofundar do que para pensar rapidamente. Se destaca por seu senso prático e conhecimento das pessoas. Bom organizador, objetivo e realista, tem pouco vigor imaginativo e não é muito inclinado à criação artística.',
    positiveAspects: [
      'Tranquilidade em receber todos os eventos',
      'Conserva equilíbrio entre pensar e agir',
      'Pensamento maduro e profundo em convicções',
      'Paciente em tolerar outros, sentimentos benevolentes',
      'Natural e simples, sem ambições exageradas',
      'Adequado para tudo que requer ordem e constância'
    ],
    negativeAspects: [
      'Tranquilidade pode degenerar em apatia',
      'Tendência a endurecer o coração, tornando-se frio',
      'Pode ser escravo de sua organização e método',
      'Exagera prudência a ponto de não começar nada',
      'Pode se acovardar e tornar-se preguiçoso',
      'Prefere sistematicamente o confortável e fácil'
    ],
    education: 'Contra a sua apatia e desinteresse: é necessário acender em seus corações a chama de um ideal, que dê motivo a suas atividades e sobretudo a suas iniciativas, já que o problema do fleumático não é a falta de atividade, mas sim a falta de empolgação. Contra o egoísmo: deve aprender a amar e a interessar-se pelos problemas de seus amigos e companheiros. Contra a lentidão: deve adquirir a capacidade de fazer as coisas rapidamente. Contra a timidez: deve aprender a ser mais sociável e a divertir-se com seus amigos. Contra a sua falta de iniciativa: é necessário ensinar-lhe a não exagerar em sua prudência e previsão e lançar-se à realização de seus projetos.'
  },
  {
    id: 'sanguineo',
    name: 'O SANGUÍNEO',
    subtitle: 'Não Emotivo, Ativo e Primário',
    characteristics: { emotivo: false, ativo: true, secundario: false },
    color: 'hsl(280, 60%, 55%)',
    description: 'É não-emotivo (isto é, não é facilmente impressionável), ativo (com uma tendência interna à ação, não importa se definiu objetivos ou não) e primário (isto é, reage de imediato, mas também retorna rapidamente ao estado anterior). Não pode estar inativo, embora normalmente não seja constante em continuar o que foi iniciado. Geralmente está sempre alegre, sorridente, loquaz, de conversa viva e animada. Gosta de exagerar, de fazer barulho, de animação. Sociável, atencioso e cortês; gosta do companheirismo e das amizades. Ama a liberdade. Na política e na religião, não se mostra um apaixonado; em geral, suas paixões não são muito fortes. Costuma ter disposição para a música e gosta de esportes. Sua imaginação é viva. Embora precise de ocupação contínua, prefere o mais agradável, aprazível e chamativo. Deixa-se levar facilmente pelas aparências e, por isso, frequentemente é superficial em seus julgamentos. Para perseverar em um trabalho iniciado, precisa sempre de novos estímulos, sempre quer variar e, portanto, em sua generosidade, dificilmente alcança a doação total. Expansivo e efusivo, tudo o que pensa comenta, discute e comunica com os outros. Não se irrita facilmente diante das ofensas e, se o faz, logo se lança sem reflexão. Não se acovarda facilmente. Quando comete alguma falta, se consola facilmente e renova os bons propósitos.',
    positiveAspects: [
      'Pessoa de bom trato na vida social',
      'Afável, bondoso, cheio de alegria e bom humor',
      'Percebe facilmente do que os outros precisam',
      'Compassivo e misericordioso com fraquezas alheias',
      'Notável sentido prático e inteligência intuitiva',
      'Muito dócil às indicações dos superiores'
    ],
    negativeAspects: [
      'Falta de reflexão, se deixa levar por primeiros impulsos',
      'É superficial e não tem muito discernimento',
      'Custa-lhe muito a disciplina e mortificação',
      'Seus apetites e imaginações transbordam facilmente',
      'Personalidade pouco sólida e séria',
      'Se deixa levar por qualquer um atraente à primeira vista'
    ],
    education: 'Deve incentivar as boas qualidades, e lutar contra os defeitos: Contra a superficialidade, deve trabalhar para adquirir o hábito da reflexão e ponderação de tudo o que faça. Pensar bem antes de agir. Contra a inconstância deve procurar ter um plano de vida, fazer bem o exame de consciência, pôr-se nas mãos do diretor espiritual e obedecer-lhe em tudo. Na oração deve lutar contra as distrações e a tendência aos consolos sensíveis. Contra a sensualidade, deve vigiar constantemente, ser disciplinado no comer, fugir das ocasiões perigosas, guardar a vista e o recolhimento interior.'
  },
  {
    id: 'apatico',
    name: 'O APÁTICO',
    subtitle: 'Não Emotivo, Não Ativo e Secundário',
    characteristics: { emotivo: false, ativo: false, secundario: true },
    color: 'hsl(210, 30%, 45%)',
    description: 'É não emotivo (não é facilmente impressionável), não ativo (não tende internamente à ação, e está mais para passivo) e secundário (ou seja, mantém as impressões recebidas por um longo tempo e está intimamente ligado ao seu passado). Entre suas características gerais, destaca-se a falta de vitalidade e isolamento. Evita envolver-se no trato e na atividade de outras pessoas. Não se aborrece com seus companheiros, porém estes não significam muito para ele, embora deva-se ter em mente que nisso existem muitos tipos intermediários. Também possui docilidade, mais é aparente, porque o que se observa é pouca força afetiva. Prefere a vida tranquila, independente da agitação social. Não mostra grande inclinação para o trabalho prático, mas antes tende para o teórico. É dócil e conformista, pelo que se adapta bem às regras de onde lhe corresponde viver.',
    positiveAspects: [
      'Persistência, firmeza e tenacidade',
      'Capaz de disciplina e regularidade',
      'Geralmente não entra em conflito com os demais',
      'Campo favorito é o da abstração',
      'Gosta mais de matemática que ciência experimental',
      'Adapta-se bem às regras do ambiente'
    ],
    negativeAspects: [
      'Falta de dinamismo psíquico',
      'Tende a não se preocupar consigo ou com colegas',
      'Vive passivamente',
      'Pode simular riqueza interior sendo apenas disfarce',
      'Interesse polarizado em egocentrismo fechado',
      'Evita atividades altruístas que exigem esforço'
    ],
    education: 'Contra a sua insensibilidade e passividade: é necessário acender em seus corações a chama de um ideal, que dê motivo à suas atividades. Devem ter convicções profundas e exigir-lhes esforços contínuos e ordenados para alcançar a santidade. Contra a insegurança e a indecisão: é necessário infundir-lhes uma grande confiança em Deus e em si mesmos. Contra o seu juízo próprio e a sua teimosia: é necessário mostrar-lhe que ele também pode errar e que por isso não deve confiar tanto em seu juízo próprio. Contra o apego a seus bens e a sua ordem: devem ser indiferentes aos bens materiais e aceitar com paciência todas aquelas circunstâncias que desfazem seus planos.'
  },
  {
    id: 'amorfo',
    name: 'O AMORFO',
    subtitle: 'Não Emotivo, Não Ativo e Primário',
    characteristics: { emotivo: false, ativo: false, secundario: false },
    color: 'hsl(30, 40%, 50%)',
    description: 'É não emotivo (não é facilmente impressionável), não ativo (não tende internamente à ação, e está mais para passivo) e primário (isto é, reage rapidamente, mas rapidamente retorna ao estado anterior). Embora essa figura temperamental não seja comum, indiquemos que, quando ocorre, tem, como características gerais, o ser muito influenciável pelo ambiente; é otimista, amável no trato, notavelmente sugestionável. Sociável, mas com tendência a evitar o esforço pessoal exigido por trabalhos comuns. É preguiçoso, mas em alguns a preguiça se disfarça de atividade fazendo coisas que gostam, apesar de fugir do que deveria fazer ou se contenta com o que é estritamente obrigatório. Rapidamente se cansa e tem pouco senso de realidade.',
    positiveAspects: [
      'Valentia que se manifesta na capacidade de resistir',
      'Imperturbável diante do perigo',
      'Entendimento prático e extrema sociabilidade',
      'Faz as coisas com prazer quando tem companhia',
      'Verdadeira aptidão para arte cênica',
      'Habilidades de execução musical'
    ],
    negativeAspects: [
      'Preguiça é o defeito mais notável',
      'Deixa esforço para último momento',
      'Frequentemente irresponsável e impontual',
      'Inábil para coisas que exigem ordem',
      'Negligente e descuidado na limpeza',
      'Facilmente influenciado pelo ambiente'
    ],
    education: 'Contra a sua apatia e desinteresse: é necessário acender em seus corações a chama de um ideal, que dê motivo a suas atividades. Contra a inconstância: deve procurar ter um plano de vida, fazer bem o exame de consciência, pôr-se nas mãos do diretor espiritual e obedecer-lhe em tudo.'
  }
];

export interface Question {
  id: number;
  text: string;
  optionA: string;
  optionB: string;
  dimension: 'emotivo' | 'ativo' | 'secundario';
}

export const questions: Question[] = [
  // Emotividade (Perguntas 1-10)
  {
    id: 1,
    text: "Quando algo não acontece como você deseja, ou 'sai pior' do que o previsto:",
    optionA: "Você fica interiormente muito nervoso (sem poder evitá-lo), embora nem sempre o demonstre externamente",
    optionB: "Pelo contrário, aceita com calma interior os contratempos, sem ter que fazer grande esforço para isso, porque você é naturalmente tranquilo",
    dimension: 'emotivo'
  },
  {
    id: 2,
    text: "Quando lhe corrigem, criticam, contradizem, ou zombam de você:",
    optionA: "Você sente-se ofendido em seu interior, experimentando impulsos de raiva ou de tristeza",
    optionB: "Instintivamente você não dá importância a estas coisas",
    dimension: 'emotivo'
  },
  {
    id: 3,
    text: "Seu humor e estado de ânimo:",
    optionA: "Você passa facilmente da alegria à tristeza, do entusiasmo ao desânimo, por coisas de pouca importância, e -às vezes- sem saber por que",
    optionB: "É sempre equilibrado, aconteça o que acontecer",
    dimension: 'emotivo'
  },
  {
    id: 4,
    text: "Quando você fica sabendo de notícias importantes (muito boas ou muito más) que acontecem no mundo:",
    optionA: "Você entusiasma-se ou se indigna facilmente? (Embora não o manifeste exteriormente)",
    optionB: "Geralmente você permanece tranquilo, exterior e interiormente",
    dimension: 'emotivo'
  },
  {
    id: 5,
    text: "Quando você experimenta uma emoção forte:",
    optionA: "Empalidece ou fica vermelho facilmente, sem poder evitá-lo",
    optionB: "Isso acontece só em alguma ocasião excepcional",
    dimension: 'emotivo'
  },
  {
    id: 6,
    text: "Quando você fala com seus amigos:",
    optionA: "Usa com frequência palavras expressivas: ('espetacular', 'fantástico', 'horroroso', 'horrível'); exageradas: ('isto é o melhor que aconteceu na minha vida', 'isso é a melhor coisa do mundo'); pouco finas; ou vulgares",
    optionB: "Não as usa quase nunca, porque você sempre se expressa de modo normal e moderado",
    dimension: 'emotivo'
  },
  {
    id: 7,
    text: "Quando você conta alguma coisa ou refere o que ouviu de outros:",
    optionA: "Exagera, inventando detalhes que engrandecem ou pioram o relatado",
    optionB: "Você menciona os dados assim como aconteceram ou como os ouviu",
    dimension: 'emotivo'
  },
  {
    id: 8,
    text: "Ante um barulho inesperado ou algum acontecimento surpreendente e repentino:",
    optionA: "Você impressiona-se ou sobressalta-se facilmente, sofrendo uma comoção interior",
    optionB: "Você não costuma sobressaltar-se, por ser de temperamento tranquilo",
    dimension: 'emotivo'
  },
  {
    id: 9,
    text: "Quando você não encontra a solução de um problema:",
    optionA: "Você sente-se angustiado e preocupado por isso",
    optionB: "Pode esperar tranquilamente e sem preocupação, até encontrar a solução desse problema",
    dimension: 'emotivo'
  },
  {
    id: 10,
    text: "Antes de uma prova ou de um evento importante:",
    optionA: "Você sente-se agitado, ansioso, nervoso (dorme mal, perde [ou aumenta] o apetite, fica inquieto)",
    optionB: "Se mantém tranquilo e sereno, sem mudar seus costumes ou modos de vida",
    dimension: 'emotivo'
  },
  
  // Atividade (Perguntas 11-20)
  {
    id: 11,
    text: "Quando não lhe agita alguma emoção:",
    optionA: "Você é naturalmente inquieto? (Gesticula, salta vivamente da cadeira, vai e vem em seu quarto, sem que a isso o mova uma emoção viva, mas sim por necessidade de mover-se)",
    optionB: "Você está geralmente quieto",
    dimension: 'ativo'
  },
  {
    id: 12,
    text: "Quando você tem uma ideia ou projeto para realizar:",
    optionA: "Executa imediatamente e sem dificuldade o que decidiu",
    optionB: "É-lhe necessário um esforço nítido para passar da ideia ao ato, da decisão à execução",
    dimension: 'ativo'
  },
  {
    id: 13,
    text: "Quando você tem que fazer uma tarefa ou trabalho:",
    optionA: "Faz o que tem para fazer imediatamente e sem que isso lhe custe muito (escrever uma carta, resolver um assunto, etc.)",
    optionB: "Instintivamente tende a atrasar, a 'esperar um momento', etc. (Embora consiga dominar essa tendência; porém a sente)",
    dimension: 'ativo'
  },
  {
    id: 14,
    text: "Quando você percebe que outras pessoas (amigos ou familiares) precisam de ajuda:",
    optionA: "Ajuda-os espontaneamente, sem que o peçam, e o faz com prazer",
    optionB: "Deixa que se virem sozinhos, enquanto você fica olhando",
    dimension: 'ativo'
  },
  {
    id: 15,
    text: "Depois de realizar suas obrigações:",
    optionA: "Não pode ficar quieto, ocupando-se sempre em alguma atividade, até mesmo em tempo de descanso",
    optionB: "Você aproveita os tempos livres 'descansando' plenamente",
    dimension: 'ativo'
  },
  {
    id: 16,
    text: "Em seus projetos e trabalhos:",
    optionA: "Tenta sempre melhorá-los, embora isso implique esforço e sacrifício",
    optionB: "Ante o esforço e sacrifício que essas melhoras implicam, tende instintivamente a deixar as coisas como estão",
    dimension: 'ativo'
  },
  {
    id: 17,
    text: "Frente a trabalhos cansativos, difíceis, longos e que aborrecem:",
    optionA: "Demonstra valor, decisão e perseverança até terminá-los",
    optionB: "Você se desanima com facilidade, ou inclusive renuncia antes de começar",
    dimension: 'ativo'
  },
  {
    id: 18,
    text: "Ao realizar seu trabalho ou quando estuda:",
    optionA: "Geralmente você trabalha mais rapidamente que outros, inclusive fazendo-o bem e com precisão",
    optionB: "Você acusa-se com frequência de ser lento, gastar muito tempo ou não terminar nunca",
    dimension: 'ativo'
  },
  {
    id: 19,
    text: "Quando você faz alguma atividade recreativa (esportes, jogos, etc.):",
    optionA: "Prefere os esportes que requerem movimento e fadiga física",
    optionB: "Pelo contrário, agradam-lhe os jogos tranquilos; ou inclusive diverte-se sozinho",
    dimension: 'ativo'
  },
  {
    id: 20,
    text: "Depois de um grande esforço físico:",
    optionA: "Você recupera-se com rapidez? (Depois de um descanso relativamente breve se sente com novas forças, 'disposto a recomeçar')",
    optionB: "Por constituição fisiológica, você precisa descansar por muito tempo para recuperar suas forças? (Embora você seja fisicamente robusto)",
    dimension: 'ativo'
  },

  // Ressonância/Secundário (Perguntas 21-30)
  {
    id: 21,
    text: "Se você se sentir ofendido por alguma injúria recebida:",
    optionA: "Esses sentimentos permanecem por algum tempo em seu interior, fazendo difícil a imediata reconciliação",
    optionB: "Esquece rapidamente os sentimentos produzidos por essas ofensas, de modo que pode reconciliar-se prontamente com a pessoa que o ofendeu",
    dimension: 'secundario'
  },
  {
    id: 22,
    text: "Quando tem que realizar alguma atividade ou trabalho:",
    optionA: "Sente instintivamente repulsa a toda improvisação, gosta de planejar seus projetos e em sua ação tenta ser fiel ao que previamente planejou",
    optionB: "Você é naturalmente improvisado, decidindo em cada momento o que deve ser feito, sem muitos planos prévios; ou, se fizer planos, depois no momento de atuar, não se sujeita a eles, pois sempre lhe ocorrem novas ideias ou projetos",
    dimension: 'secundario'
  },
  {
    id: 23,
    text: "Se você prometeu algo a outro, ou se tiver feito um propósito:",
    optionA: "Geralmente não esquece o que prometeu (Embora tarde em cumpri-lo, por qualquer outro motivo)",
    optionB: "Você esquece-o com facilidade",
    dimension: 'secundario'
  },
  {
    id: 24,
    text: "Em sua rotina habitual:",
    optionA: "Incomoda-lhe muito ter que trocar de horário e sair de sua habitual e ordenada distribuição do tempo",
    optionB: "Pelo contrário, não gosta de sujeitar-se a um horário ordenado",
    dimension: 'secundario'
  },
  {
    id: 25,
    text: "Se tiver tido um fracasso:",
    optionA: "Pensa nisso continuamente e fica um bom tempo magoado pela impressão negativa",
    optionB: "Esquece facilmente o que aconteceu e em pouco tempo já não pensa nisso",
    dimension: 'secundario'
  },
  {
    id: 26,
    text: "Se você tiver um projeto e não sai como esperava:",
    optionA: "Não se resigna e trata de realizá-lo, ainda que leve mais tempo",
    optionB: "Você resigna-se e começa a trabalhar em outro projeto",
    dimension: 'secundario'
  },
  {
    id: 27,
    text: "Quando lhe oferecem a possibilidade de mudar (casa, trabalho, grupo, etc.):",
    optionA: "Pelo contrário, lhe incomoda trocar, e gosta do usual e conhecido? (Agrada-lhe sua casa, seu lugar de trabalho, sua tarefa de cada dia; frequentar às mesmas pessoas, etc.)",
    optionB: "Você adora tudo o que implique novidade e mudança? (Novo domicílio, novas ocupações)",
    dimension: 'secundario'
  },
  {
    id: 28,
    text: "Quando você formou uma opinião:",
    optionA: "É difícil lhe convencer de outra coisa? você se mantém firme (pelo menos em seu interior) em relação ao que considera verdadeiro, embora de fato não goste de discutir",
    optionB: "Com facilidade (instintivamente) tende a concordar com a opinião dos outros",
    dimension: 'secundario'
  },
  {
    id: 29,
    text: "Em seus projetos e planos:",
    optionA: "Você é naturalmente constante e geralmente acaba o que começou",
    optionB: "Frequentemente sente o desejo de abandonar uma coisa antes de acabá-la, para começar outra mais fácil ou mais interessante, começando muitas coisas e acabando poucas",
    dimension: 'secundario'
  },
  {
    id: 30,
    text: "Em seus gostos:",
    optionA: "Você é constante? (Não gosta de mudar)",
    optionB: "Se cansa das mesmas coisas e prefere mudar",
    dimension: 'secundario'
  }
];

export function calculateTemperament(answers: (number | 0.5)[]): string {
  const scores = calculateScores(answers);
  
  // Threshold de 50% = 5 pontos
  const threshold = 5;
  
  const isEmotivo = scores.emotivo >= threshold;
  const isAtivo = scores.ativo >= threshold;
  const isSecundario = scores.secundario >= threshold;
  
  // Encontra o temperamento correspondente
  return temperaments.find(temp => 
    temp.characteristics.emotivo === isEmotivo &&
    temp.characteristics.ativo === isAtivo &&
    temp.characteristics.secundario === isSecundario
  )?.id || 'sanguineo'; // Default para sanguíneo se não encontrar
}

export function calculateScores(answers: (number | 0.5)[]): { emotivo: number, ativo: number, secundario: number } {
  const scores = { emotivo: 0, ativo: 0, secundario: 0 };
  
  answers.forEach((answer, index) => {
    const question = questions[index];
    if (question) {
      if (answer === 1) {
        // Resposta A vale 1 ponto
        scores[question.dimension] += 1;
      } else if (answer === 0.5) {
        // Resposta ? vale 0.5 pontos
        scores[question.dimension] += 0.5;
      }
      // Resposta B vale 0 pontos (não adiciona nada)
    }
  });
  
  return scores;
}