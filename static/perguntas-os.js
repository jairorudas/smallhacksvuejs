module.exports = [ 
    {
      title: "Sobre a classificação de sistemas operacionais (SO), descreva os possı́veis tipos de SO quanto a:",
			respostas: {
				a: "Número de usuários: Um sistema operacional é dito monousuário se somente um único usuário puder acessar o sistema de uma vez, isto é, um outro usuário somente poderá usar o sistema quando o usuário atual deixar de usar o sistema. Já em um sistema multiusuário, vários usuários podem acessar simultaneamente o sistema opera- cional, isto é, um usuário não precisa esperar um outro usuário deixar de usar o sistema para usá-lo. ",
				b: "Número de programas.: Um sistema monoprogramado permite que somente um programa seja executado por vez no sistema, isto é, um novo pro- grama somente poderá ser executado após o programa atualmente em execução terminar. Já em um sistema multiprogramado, pode- mos ter vários programas em execução no sistema, sendo que um programa não precisará esperar o término do outro para começar a ser executado (os programas poderão ou não executar simultanea- mente, dependendo do número de processadores do computador)."
			}
		},
		{
      title: "Qual é o objetivo das chamadas ao sistema operacional? Dê uma descrição de como estas funcionam, evidenciando qual o papel das bi- bliotecas.",
			respostas: {
				a: "As chamadas ao sistema operacional objetivam fornecer uma interface entre os processos executando no modo usuário e as diversas funções oferecidas pelo sistema operacional. -Quando um processo deseja fazer uma chamada ao sistema, este de- verá fazer uma chamada a uma das funções da biblioteca que tratam dos detalhes de executar esta chamada. O motivo de usarmos a biblio- teca é porque além de esta fornecer funções que facilitam ou estendem a funcionalidade de cada chamada ao sistema, esta também facilita a execução da própria chamada, pois o modo de implementar uma chamada depende do hardware em que o sistema operacional está exe- 2cutando. Antes de chamar a função da biblioteca, o processo deverá colocar na pilha os parâmetros requeridos por esta função. Depois de o processo chamar a função, esta determinará qual chamada ao sistema deverá ser executada, colocará os parâmetros desta chamada no local em que o sistema operacional espera que estes estejam (um identifica- dor para a chamada, e os parâmetros da chamada), e executará uma instrução TRAP (cuja implementação dependerá do hardware) para passar o controle ao sistema operacional (comutando o processador do modo usuário para o modo supervisor). Depois de o sistema operacional ser chamado, este determinará, através do identificador, o endereço da chamada que foi executada (usando este identificador como um ı́ndice em uma tabela com os endereços de todas as chamadas), e saltará para este endereço. O código para o qual o sistema saltou, chamado de o tratador da chamada, executará então as tarefas necessárias à execução desta chamada ao sistema, bloqueando o processo que fez a chamada à biblioteca se for necessário esperar a ocorrência de algum evento ex- terno. Caso este tratador termine sem bloquear o processo, o sistema operacional executará uma instrução de retorno de uma TRAP, que fará o processador retornar ao modo usuário, e continuar a execução a partir da instrução imediatamente posterior à instrução TRAP execu- tada. A função da biblioteca então devolverá o controle ao processo, que deverá remover os parâmetros da pilha para finalizar corretamente a chamada à função da biblioteca.",
			}
		},
		{
      title: "Qual é a principal vantagem do modelo de micronúcleo conside- rando múltiplos processadores",
			respostas: {
				a: "No modelo de micronúcleo a maior parte das funcionalidades do sistema são implementadas no modo usuário, por processos servi- dores. O micronúcleo, que executa no modo supervisor, somente trata do acesso direto aos dispositivos de E/S (que não pode ser feito no modo usuário), e dos detalhes necessários à troca de mensagens en- tre os processos do sistema, pois os serviços do sistema operacional, como as chamadas ao sistema, devem ser solicitados através do envio de mensagens aos servidores que executam estes serviços. A vanta- gem é exatamente o fato de usarmos mensagens para que o sistema execute tarefas para os processos (chamados de clientes), pois nada impede que os servidores estejam em processadores ou computadores 3diferentes, sendo que no primeiro caso as mensagens podem ser troca- das por uma rede especializada que conecta todos os processadores, e no segundo caso por uma rede de computadores comum interligando os computadores.",
			}
		},
		{
      title: "Descreva os estados de um processo e as ações levadas a cabo em cada uma das possı́veis transições entre estes estados como descrito na figura a seguir:",
			url: './static/img/os/ap1/processos.png',
			respostas: {
				a: "Um processo pode estar em três estados: executando, quando este está sendo executado pelo processador; pronto, quando este pro- cesso está esperando para ser executado no processador (pois algum outro processo está em execução no processador); e bloqueado, quando o processo não pode executar no processador até a ocorrência de algum evento externo. A Transição 1, do estado executando para o bloque- ado, ocorre quando um processo em execução descobre que somente poderá continuar a executar após a ocorrência de um certo evento ex- terno à sua execução. A Transição 2, do estado executando para o pronto, ocorre quando o escalonador determinou que o processo atual- mente em execução já executou por muito tempo no processador. A Transição 3, do estado pronto para o executando, ocorre quando o es- calonador determinou que é a vez deste processo, que estava esperando pelo uso do processador, de executar no processador por algum tempo. Finalmente, a Transição 4, do estado bloqueado para o pronto, significa que o evento externo pelo qual este processo estava esperando ocorreu, e com isso, o processo poderá agora ser escolhido pelo escalonador para ser futuramente executado pelo processador."
			}
		},
		{
      title: "Suponha que dois processos, A e B, se comunicam usando a pa- lavra da memória R, sendo que R é usada para transferir dados do processo A para o processo B, como descrito pela figura a seguir:",
			respostas: {
				a: "Um processo pode estar em três estados: executando, quando este está sendo executado pelo processador; pronto, quando este pro- cesso está esperando para ser executado no processador (pois algum outro processo está em execução no processador); e bloqueado, quando o processo não pode executar no processador até a ocorrência de algum evento externo. A Transição 1, do estado executando para o bloque- ado, ocorre quando um processo em execução descobre que somente poderá continuar a executar após a ocorrência de um certo evento ex- terno à sua execução. A Transição 2, do estado executando para o pronto, ocorre quando o escalonador determinou que o processo atual- mente em execução já executou por muito tempo no processador. A Transição 3, do estado pronto para o executando, ocorre quando o es- calonador determinou que é a vez deste processo, que estava esperando pelo uso do processador, de executar no processador por algum tempo. Finalmente, a Transição 4, do estado bloqueado para o pronto, significa que o evento externo pelo qual este processo estava esperando ocorreu, e com isso, o processo poderá agora ser escolhido pelo escalonador para ser futuramente executado pelo processador."
			}
		},
]