module.exports = [ 
    {
      title: "Sobre a classificação de sistemas operacionais (SO), descreva os possı́veis tipos de SO quanto a:",
			respostas: '',
			url: '',
			enuns:{
				a: 'Número de usuários Um sistema operacional é dito monousuário se somente um único usuário puder acessar o sistema de uma vez, isto é, um outro usuário somente poderá usar o sistema quando o usuário atual deixar de usar o sistema. Já em um sistema multiusuário, vários usuários podem acessar simultaneamente o sistema opera- cional, isto é, um usuário não precisa esperar um outro usuário deixar de usar o sistema para usá-lo. ',
				b: 'Número de programas Um sistema monoprogramado permite que somente um programa seja executado por vez no sistema, isto é, um novo pro- grama somente poderá ser executado após o programa atualmente em execução terminar. Já em um sistema multiprogramado, pode- mos ter vários programas em execução no sistema, sendo que um programa não precisará esperar o término do outro para começar a ser executado (os programas poderão ou não executar simultanea- mente, dependendo do número de processadores do computador).'
			},
			questoes:[{
				item: {
					enunciado: 'Número de usuários:',
					res: 'Um sistema operacional é dito monousuário se somente um único usuário puder acessar o sistema de uma vez, isto é, um outro usuário somente poderá usar o sistema quando o usuário atual deixar de usar o sistema. Já em um sistema multiusuário, vários usuários podem acessar simultaneamente o sistema opera- cional, isto é, um usuário não precisa esperar um outro usuário deixar de usar o sistema para usá-lo. ',
					url: ''
				}
			},
			{
				item: {
					enunciado: 'Número de programas:',
					res: 'Um sistema monoprogramado permite que somente um programa seja executado por vez no sistema, isto é, um novo pro- grama somente poderá ser executado após o programa atualmente em execução terminar. Já em um sistema multiprogramado, pode- mos ter vários programas em execução no sistema, sendo que um programa não precisará esperar o término do outro para começar a ser executado (os programas poderão ou não executar simultanea- mente, dependendo do número de processadores do computador).',
					url: ''
				}
			}]
		},
	{
      	title: "Qual é o objetivo das chamadas ao sistema operacional? Dê uma descrição de como estas funcionam, evidenciando qual o papel das bi- bliotecas.",
		respostas: "As chamadas ao sistema operacional objetivam fornecer uma interface entre os processos executando no modo usuário e as diversas funções oferecidas pelo sistema operacional. -Quando um processo deseja fazer uma chamada ao sistema, este de- verá fazer uma chamada a uma das funções da biblioteca que tratam dos detalhes de executar esta chamada. O motivo de usarmos a biblio- teca é porque além de esta fornecer funções que facilitam ou estendem a funcionalidade de cada chamada ao sistema, esta também facilita a execução da própria chamada, pois o modo de implementar uma chamada depende do hardware em que o sistema operacional está exe- 2cutando. Antes de chamar a função da biblioteca, o processo deverá colocar na pilha os parâmetros requeridos por esta função. Depois de o processo chamar a função, esta determinará qual chamada ao sistema deverá ser executada, colocará os parâmetros desta chamada no local em que o sistema operacional espera que estes estejam (um identifica- dor para a chamada, e os parâmetros da chamada), e executará uma instrução TRAP (cuja implementação dependerá do hardware) para passar o controle ao sistema operacional (comutando o processador do modo usuário para o modo supervisor). Depois de o sistema operacional ser chamado, este determinará, através do identificador, o endereço da chamada que foi executada (usando este identificador como um ı́ndice em uma tabela com os endereços de todas as chamadas), e saltará para este endereço. O código para o qual o sistema saltou, chamado de o tratador da chamada, executará então as tarefas necessárias à execução desta chamada ao sistema, bloqueando o processo que fez a chamada à biblioteca se for necessário esperar a ocorrência de algum evento ex- terno. Caso este tratador termine sem bloquear o processo, o sistema operacional executará uma instrução de retorno de uma TRAP, que fará o processador retornar ao modo usuário, e continuar a execução a partir da instrução imediatamente posterior à instrução TRAP execu- tada. A função da biblioteca então devolverá o controle ao processo, que deverá remover os parâmetros da pilha para finalizar corretamente a chamada à função da biblioteca.",
	},
	{
      	title: "Qual é a principal vantagem do modelo de micronúcleo conside- rando múltiplos processadores",
		respostas: "No modelo de micronúcleo a maior parte das funcionalidades do sistema são implementadas no modo usuário, por processos servi- dores. O micronúcleo, que executa no modo supervisor, somente trata do acesso direto aos dispositivos de E/S (que não pode ser feito no modo usuário), e dos detalhes necessários à troca de mensagens en- tre os processos do sistema, pois os serviços do sistema operacional, como as chamadas ao sistema, devem ser solicitados através do envio de mensagens aos servidores que executam estes serviços. A vanta- gem é exatamente o fato de usarmos mensagens para que o sistema execute tarefas para os processos (chamados de clientes), pois nada impede que os servidores estejam em processadores ou computadores 3diferentes, sendo que no primeiro caso as mensagens podem ser troca- das por uma rede especializada que conecta todos os processadores, e no segundo caso por uma rede de computadores comum interligando os computadores."
	},
	{
      	title: "Descreva os estados de um processo e as ações levadas a cabo em cada uma das possı́veis transições entre estes estados como descrito na figura a seguir:",
		url: './static/img/os/ap1/processos.png',
			respostas: "Um processo pode estar em três estados: executando, quando este está sendo executado pelo processador; pronto, quando este pro- cesso está esperando para ser executado no processador (pois algum outro processo está em execução no processador); e bloqueado, quando o processo não pode executar no processador até a ocorrência de algum evento externo. A Transição 1, do estado executando para o bloque- ado, ocorre quando um processo em execução descobre que somente poderá continuar a executar após a ocorrência de um certo evento ex- terno à sua execução. A Transição 2, do estado executando para o pronto, ocorre quando o escalonador determinou que o processo atual- mente em execução já executou por muito tempo no processador. A Transição 3, do estado pronto para o executando, ocorre quando o es- calonador determinou que é a vez deste processo, que estava esperando pelo uso do processador, de executar no processador por algum tempo. Finalmente, a Transição 4, do estado bloqueado para o pronto, significa que o evento externo pelo qual este processo estava esperando ocorreu, e com isso, o processo poderá agora ser escolhido pelo escalonador para ser futuramente executado pelo processador.",
	},
	{
    	title: "Suponha que dois processos, A e B, se comunicam usando a pa- lavra da memória R, sendo que R é usada para transferir dados do processo A para o processo B, como descrito pela figura a seguir:",
		url: './static/img/os/ap1/ex0.png',
		respostas: '',
		enuns: {
			a: 'O acesso irrestrito à palavra R pelos processos A e B gera condições de corrida. Descreva estas condições As condições de corrida ocorrerão quando o processo A tentar escrever na palavra R quase ao mesmo tempo em que o processo B tentar ler um valor desta palavra. Temos dois casos: no primeiro, A pode escrever novamente na posição R antes de B ler o valor escrito anteriormente por A, o que fará com que este valor seja perdido; e no segundo, B tentará ler um valor da posição R antes que A coloque um novo valor nesta posição, o que fará com que B leia novamente o mesmo valor',
			b: 'Explique quais são os semáforos necessários para a correta implementação da comunicação entre os processos A e B. Dê os valores iniciais desses semáforos para o caso em que a palavra R está inicialmente ocupada por um dado e preencha as lacunas nos códigos abaixo indicando os nomes dos semáforos apropriados Precisamos de dois semáforos binários, dado disponivel e dado ja lido. O semáforo dado disponivel irá controlar o acesso do processo B à palavra R, somente permitindo o acesso quando R possuir um novo valor, colocado por A, a ser lido por B. Como inicialmente a palavra R está ocupada por um dado, o valor ini- cial do semáforo dado disponivel será 1. O semáforo dado ja lido irá controlar o acesso do processo A à palavra R, somente per- mitindo o acesso após B ler o valor atual de R. Como R está inicialmente ocupada, o valor inicial do semáforo dado ja lido de- verá ser 0. Para que a comunicação dos processos seja correta e sincronizada, o processo A deverá executar a operação P so- bre dado ja lido antes de escrever um valor em R, e executar a operação V sobre dado disponivel logo após colocar um novo va- lor em R. Por sua vez, o processo B deverá executar a operação P sobre dado disponivel antes de ler um valor de R, e deverá execu- tar a operação V sobre dado ja lido logo após ler um valor de R. A seguir damos o código obtido ao preencher as lacunas de acordo com o que foi descrito anteriormente'
		},
		questoes:[{
			item: {
				enunciado: 'O acesso irrestrito à palavra R pelos processos A e B gera condições de corrida. Descreva estas condições:',
				res: 'RESP =>: As condições de corrida ocorrerão quando o processo A tentar escrever na palavra R quase ao mesmo tempo em que o processo B tentar ler um valor desta palavra. Temos dois casos: no primeiro, A pode escrever novamente na posição R antes de B ler o valor escrito anteriormente por A, o que fará com que este valor seja perdido; e no segundo, B tentará ler um valor da posição R antes que A coloque um novo valor nesta posição, o que fará com que B leia novamente o mesmo valor.',
				url: ''
			}
		},
		{
			item: {
				enunciado: 'Explique quais são os semáforos necessários para a correta implementação da comunicação entre os processos A e B. Dê os valores iniciais desses semáforos para o caso em que a palavra R está inicialmente ocupada por um dado e preencha as lacunas nos códigos abaixo indicando os nomes dos semáforos apropriados:',
				res: 'Precisamos de dois semáforos binários, dado disponivel e dado ja lido. O semáforo dado disponivel irá controlar o acesso do processo B à palavra R, somente permitindo o acesso quando R possuir um novo valor, colocado por A, a ser lido por B. Como inicialmente a palavra R está ocupada por um dado, o valor ini- cial do semáforo dado disponivel será 1. O semáforo dado ja lido irá controlar o acesso do processo A à palavra R, somente per- mitindo o acesso após B ler o valor atual de R. Como R está inicialmente ocupada, o valor inicial do semáforo dado ja lido de- verá ser 0. Para que a comunicação dos processos seja correta e sincronizada, o processo A deverá executar a operação P so- bre dado ja lido antes de escrever um valor em R, e executar a operação V sobre dado disponivel logo após colocar um novo va- lor em R. Por sua vez, o processo B deverá executar a operação P sobre dado disponivel antes de ler um valor de R, e deverá execu- tar a operação V sobre dado ja lido logo após ler um valor de R. A seguir damos o código obtido ao preencher as lacunas de acordo com o que foi descrito anteriormente.',
				url: ''
			}
		}]
	},
	{
    	title: "Suponha que os processos A, B, C e D estão atualmente em execução no sistema, como na figura a seguir, onde são dados, para cada processo, o seu tempo total de execução e a sua prioridade. Quanto tempo será necessário para que cada processo termine a sua execução, se:",
		url: './static/img/os/ap1/ex1.png',
		respostas: '',
			enuns: {
				a: 'Usarmos o algoritmo de escalonamento por round robin, com um quantum igual a uma unidade de tempo. Na execução usando o algoritmo por round robin, cada um dos processos executará em seqüência, um após o outro, até o término do quantum, ou da sua execução. Supondo que os proces- sos estão na fila na ordem dada na figura, ou seja, na ordem A, B, C e D, teremos a seguinte seqüência de execução: A, B, C, D, A, B, C, D, A, B, C, D, A, B, C, B e C. Como cada quantum equilave a uma unidade de tempo, então A terminará a sua execução após 13 unidades de tempo, B terminará a sua execução após 16 uni- dades de tempo, C terminará a sua execução após 17 unidades de tempo, e D terminará a sua execução após 12 unidades de tempo.',
				b: 'Usarmos o algoritmo de escalonamento por prioridades, com redução de prioridades, supondo que as prioridades são sempre re- duzidas de 1, dentro de uma unidade de tempo? Como vimos na Aula 6 que o processo de maior prioridade executa até que a sua prioridade seja menor do que a do processo com a segunda maior prioridade, podemos ter as seguintes ordens de execução (para cada processo damos, entre parênteses, a prio- ridade que este processo possui ao ser executado) '
			},
			questoes:[{
				item: {
					enunciado: 'Usarmos o algoritmo de escalonamento por round robin, com um quantum igual a uma unidade de tempo.',
					res: 'RESP =>: Na execução usando o algoritmo por round robin, cada um dos processos executará em seqüência, um após o outro, até o término do quantum, ou da sua execução. Supondo que os proces- sos estão na fila na ordem dada na figura, ou seja, na ordem A, B, C e D, teremos a seguinte seqüência de execução: A, B, C, D, A, B, C, D, A, B, C, D, A, B, C, B e C. Como cada quantum equilave a uma unidade de tempo, então A terminará a sua execução após 13 unidades de tempo, B terminará a sua execução após 16 uni- dades de tempo, C terminará a sua execução após 17 unidades de tempo, e D terminará a sua execução após 12 unidades de tempo. Como vimos na Aula 6 que o processo de maior prioridade executa até que a sua prioridade seja menor do que a do processo com a segunda maior prioridade, podemos ter as seguintes ordens de execução (para cada processo damos, entre parênteses, a prio- ridade que este processo possui ao ser executado)',
					url: ''
				}
			},
			{
				item: {
					enunciado: 'Usarmos o algoritmo de escalonamento por prioridades, com redução de prioridades, supondo que as prioridades são sempre re- duzidas de 1, dentro de uma unidade de tempo?',
					res: 'Como vimos na Aula 6 que o processo de maior prioridade executa até que a sua prioridade seja menor do que a do processo com a segunda maior prioridade, podemos ter as seguintes ordens de execução (para cada processo damos, entre parênteses, a prio- ridade que este processo possui ao ser executado):',
					url: './static/img/os/ap1/ex2.png'
				}
			}]
	},
	{
      	title: "Por que a multiprogramação é importante para as últimas gerações de computadores?",
		respostas: "Com o passar das gerações, a velocidade de processamento dos computadores se tornou cada vez maior. A velocidade dos dispositi- vos fı́sicos também aumentou, mas muito mais lentamente do que a velocidade de processamento. Com isso, o tempo de ociosidade do pro- cessador quando o processo em execução fazia operações de E/S ficou, com o passar das gerações, cada vez maior, pois cada processo era exe- cutado até terminar, sem interrupções. Além disso, existia uma grande demora para se obter os resultados dos processos. Para evitar esses problemas, o conceito de multiprogramação, que permite que mais de um processo esteja em execução no sistema através da divisão do tempo de processamento entre os processos, foi definido a partir da terceira geração.",
	},
	{
    	title: "Descreva as seguintes hierarquias que podem ocorrer em um sis- tema operacional:",
		url: '',
		respostas: '',
			enuns: {
				a: 'Árvore de processos. Como vimos na Aula 2, um processo pode criar, durante a sua execução, outros processos. Uma árvore de processos é cri- ada quando um processo, chamado de pai, cria um outro processo, chamado de filho, que por sua vez pode criar outros processos. Nesta árvore, cada vértice representa um processo diferente, sendo que a raiz é um processo que foi criado pelo sistema operacional (na verdade todos os processos em execução no sistema formam uma única árvore), e uma aresta de um processo em um nı́vel para um outro no próximo nı́vel significa que este último foi criado pelo primeiro.',
				b: 'Hierarquia de diretórios. Quando estudamos o conceito de arquivos na Aula 2, vi- mos que um diretório é um arquivo especial que permite agrupar arquivos relacionados. Um diretório é composto por diversas en- tradas, sendo que cada uma delas está associada a um arquivo do sistema que pode ser um outro diretório. Como este diretório também pode possuir entradas associadas a outros diretórios, uma hierarquia de diretórios pode então ser formada. Nesta hierar- quia, que também define uma árvore, cada vértice representa um arquivo diferente, sendo que a raiz é o único diretório (chamado de diretório raiz) não associado a uma entrada de um outro di- retório. Já uma aresta entre um diretório de um nı́vel para um arquivo no próximo nı́vel significa que o último está associado a uma entrada do primeiro.'
			},
			questoes:[{
				item: {
					enunciado: 'Árvore de processos.',
					res: 'Como vimos na Aula 2, um processo pode criar, durante a sua execução, outros processos. Uma árvore de processos é cri- ada quando um processo, chamado de pai, cria um outro processo, chamado de filho, que por sua vez pode criar outros processos. Nesta árvore, cada vértice representa um processo diferente, sendo que a raiz é um processo que foi criado pelo sistema operacional (na verdade todos os processos em execução no sistema formam uma única árvore), e uma aresta de um processo em um nı́vel para um outro no próximo nı́vel significa que este último foi criado pelo primeiro.',
					url: ''
				}
			},
			{
				item: {
					enunciado: 'Hierarquia de diretórios.',
					res: 'Quando estudamos o conceito de arquivos na Aula 2, vi- mos que um diretório é um arquivo especial que permite agrupar arquivos relacionados. Um diretório é composto por diversas en- tradas, sendo que cada uma delas está associada a um arquivo do sistema que pode ser um outro diretório. Como este diretório também pode possuir entradas associadas a outros diretórios, uma hierarquia de diretórios pode então ser formada. Nesta hierar- quia, que também define uma árvore, cada vértice representa um arquivo diferente, sendo que a raiz é o único diretório (chamado de diretório raiz) não associado a uma entrada de um outro di- retório. Já uma aresta entre um diretório de um nı́vel para um arquivo no próximo nı́vel significa que o último está associado a uma entrada do primeiro.',
					url: ''
				}
			}]
	},
	{
      	title: "O conceito de máquina virtual permite que vários sistemas ope- racionais sejam executados na mesma máquina. Como isso é feito?",
		respostas: "Como vimos na Aula 3, uma máquina virtual é uma cópia exata do hardware do computador, tão complexa de ser usada quanto ele. Para permitir que vários sistemas operacionais executem na mesma máquina, uma máquina virtual é definida para cada um dos sistemas, dando a cada sistema a ilusão de que ele está usando exclusivamente a máquina real. Agora, quando um dos sistemas operacionais acessar o “hardware” da sua máquina virtual, este acesso será interceptado por um programa, em execução na máquina real, responsável pelo geren- ciamento das máquinas virtuais, e será mapeado para um acesso real ao hardware. Com isso, vários sistemas operacionais poderão executar simultaneamente na mesma máquina, sem interferirem uns com os ou- tros.",
	},
	{
    	title: "Suponha que um processo A executa uma seqüência de operações, sendo que cada operação pode ser uma dentre as duas possı́veis defi- nida pela palavra de memória R. De tempos em tempos, o processo A verifica a palavra R para determinar se deve continuar executando a operação atual, ou se deve passar a executar a outra operação. Supo- nha que dois processos, B e C, controlem, através da palavra R, qual operação A deverá executar. Responda:",
		url: '',
		respostas: '',
			enuns: {
				a: 'Temos condições de corrida. Quais são elas A existência de condições de corrida está intimamente ligada ao tipo de computação que está sendo realizada pelos pro- cessos envolvidos. Por exemplo, quando discutimos o assunto na 4Aula 5, havia uma condição de corrida entre os processos aces- sando a lista de arquivos a serem impressos porque querı́amos ga- rantir que todos os arquivos submetidos fossem de fato impressos. No caso da presente questão, a afirmação de que “temos condições de corrida” obriga-nos, antes de dar uma resposta, a fazer alguma hipótese sobre o funcionamento do processo A e sobre como B e C interferem nesse funcionamento. É possı́vel fazer hipóteses va- riadas, mas ilustraremos a resposta para apenas uma: a hipótese de que A tem que ler todos os valores escritos por B ou C. Feita essa hipótese, a condição de corrida presente na situação descrita ocorre entre o par de processos B, C e o processo A. Especifica- mente, dependendo de como se intercalem as escritas de B ou C com as leituras de A, valores escritos poderão jamais ser lidos por A.',
				b: 'quais são os semáforos necessários para evitar as condições de corrida? Justifique a sua resposta Como vimos no item anterior, as condições de corrida de- pendem de uma hipótese sobre o funcionamento do processo A e de como B e C interferem neste funcionamento. A seguir va- mos mostrar uma solução que resolve a condição de corrida para a hipótese ilustrada no item anterior. Neste caso, precisaremos de um semáforo binário dado ja lido para controlar a alteração da palavra R, de tal modo que o valor de R somente possa ser alte- rado após A ler este valor. O valor inicial deste semáforo deverá ser 0, pois como A já está em execução, R deverá ter o valor da operação inicial a ser executada. Para garantir que A possa ler o valor de R antes de B ou C alterá-lo novamente, B e C deverão executar a operação P sobre dado ja lido imediatamente antes de alterar o valor de R, e A deverá executar a operação V sobre dado ja lido imediatamente após ler o valor atual de R.'
			},
			questoes:[{
				item: {
					enunciado: 'Temos condições de corrida. Quais são elas?',
					res: 'A existência de condições de corrida está intimamente ligada ao tipo de computação que está sendo realizada pelos pro- cessos envolvidos. Por exemplo, quando discutimos o assunto na 4Aula 5, havia uma condição de corrida entre os processos aces- sando a lista de arquivos a serem impressos porque querı́amos ga- rantir que todos os arquivos submetidos fossem de fato impressos. No caso da presente questão, a afirmação de que “temos condições de corrida” obriga-nos, antes de dar uma resposta, a fazer alguma hipótese sobre o funcionamento do processo A e sobre como B e C interferem nesse funcionamento. É possı́vel fazer hipóteses va- riadas, mas ilustraremos a resposta para apenas uma: a hipótese de que A tem que ler todos os valores escritos por B ou C. Feita essa hipótese, a condição de corrida presente na situação descrita ocorre entre o par de processos B, C e o processo A. Especifica- mente, dependendo de como se intercalem as escritas de B ou C com as leituras de A, valores escritos poderão jamais ser lidos por A.',
					url: ''
				}
			},
			{
				item: {
					enunciado: 'quais são os semáforos necessários para evitar as condições de corrida? Justifique a sua resposta.',
					res: 'Como vimos no item anterior, as condições de corrida de- pendem de uma hipótese sobre o funcionamento do processo A e de como B e C interferem neste funcionamento. A seguir va- mos mostrar uma solução que resolve a condição de corrida para a hipótese ilustrada no item anterior. Neste caso, precisaremos de um semáforo binário dado ja lido para controlar a alteração da palavra R, de tal modo que o valor de R somente possa ser alte- rado após A ler este valor. O valor inicial deste semáforo deverá ser 0, pois como A já está em execução, R deverá ter o valor da operação inicial a ser executada. Para garantir que A possa ler o valor de R antes de B ou C alterá-lo novamente, B e C deverão executar a operação P sobre dado ja lido imediatamente antes de alterar o valor de R, e A deverá executar a operação V sobre dado ja lido imediatamente após ler o valor atual de R.',
					url: ''
				}
			}]
	},
]