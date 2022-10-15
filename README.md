RELATÓRIO

link relatorio docs:
https://docs.google.com/document/d/10NuULodp2TPKBNid_ixK9k-f_-ahR9spgRuNrKvKkwg/edit?usp=sharing

Alexandre R. Bomfim Jr. - 1921241
José Lucas Teixeira Xavier - 1921254

O Jogo
Desenvolvemos o clássico jogo da forca, que consiste em falar letras do alfabeto, até acertar a palavra, tendo o foco na copa do mundo do Qatar, ou seja, as palavras que deverão ser descobertas são de alguns países que estão participando da copa do mundo do Qatar.

Requisitos pedidos para o jogo
✔ Pedir a identificação do usuário no formato de email utilizado em Priplanus e somente permitir ao jogador jogar se o email for válido (ver apêndice sobre o formato de email em Priplanus)
✔ Implemente a validação utilizando (também) uma expressão regular 
✔ Manipular no mínimo dois objetos do tipo imagem com duas imagens diferentes em cada objeto. 
✔ Ter no mínimo um array. 
✔ Ter no mínimo uma tomada de decisão (desvio condicional).
X  Ter pelo menos um parâmetro configurável por um campo usando repetição para determinar a opção escolhida. 
✔ Utilize arquivos HTML somente para código HTML
✔ Utilize arquivos Javascript somente para código Javascript
✔ Utilize arquivos CSS apenas para código CSS
✔ Pasta para arquivos Javascript
✔ Pasta para arquivos CSS 

Como jogar?
Primeiro o usuário deverá entrar no link: http://forcagame.ab65web.com/public_html
Então a primeira tela é a de Login, basta adentrar com o username \ddd[df|fd] por exemplo. Após o Login, será carregado a tela do jogo, na qual o nome de um país carregará aleatoriamente, para que o jogador possa descobrir, deve-se utilizar o teclado na página para as tentativas. Após escolher a letra, o jogador deve confirmar ou deletar caso deseje mudar de letra para a tentativa, ao todo o jogador tem 5 tentativas para acertar qual é o país. A cada tentativa errada, a tecla escolhida fica vermelha e inutilizável até uma nova rodada, quando a letra escolhida fizer parte da palavra a letra ficará verde.

O que deu e não deu certo
O Login funciona da forma solicitada, só é permitido seguir o padrão \ddd[df|fd], na qual, apenas podem ser consoantes e dentro dos colchetes pode haver quantos domínios forem contanto que sejam separados por | e compostos por consoantes. 
A TextaArea que aparece a letra que o usuário clicar no botão do teclado não está bloqueada para impedir que o usuário digite manualmente no seu teclado fisico, o que pode ocasionar um erro. Portanto, use apenas o botão do teclado do jogo.
Fora o detalhe acima, o jogo em si está inteiro funcionando, não encontrado nenhum detalhe que gere falha ou prejudique a jogabilidade ao jogar.

