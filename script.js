(function() {


    var jogo = {
        jogadores: ["Player1", "Player2"],
        init: function() {
            this.fazerTabuleiro();
            this.quemComeca(); 
            this.oJogo();
        },

        fazerTabuleiro: function() {

            for (i = 0; i < 3; i++) {
                this.row = document.createElement("div");
                this.row.className = "row";
                this.row.style.setProperty('--grid-rows', i);
                for ( j = 0; j < 3; j++) {
                    this.box = document.createElement("div");
                    this.box.className = "box";
                    this.box.setAttribute('id',`box${j}`);
                    this.box.style.setProperty('--grid-cols', j);
                    this.row.appendChild(this.box);
                }
                document.getElementById('tabuleiro').appendChild(this.row).setAttribute('id',`row${i}`);
            };
            
        },

        quemComeca: function() {

            let calculoDoJogador = Math.floor(Math.random() * 2);
            this.primeiroIndex = calculoDoJogador;
            this.primeiroJogador = jogo.jogadores[this.primeiroIndex];
            if (this.primeiroIndex == 1) {
                this.segundoJogador = jogo.jogadores[0];
            } else if (this.primeiroIndex == 0) {
                this.segundoJogador = jogo.jogadores[1];
            }
        },

        oJogo: function() {

            let celulasTabuleiro = document.querySelectorAll('.box');
            let switchColor = 1;
            jogadaJogadores();
            
            function jogadaJogadores() {
                celulasTabuleiro.forEach( celula => {
                    celula.addEventListener('click', function(){

                        if (celulasTabuleiro[0].style.backgroundColor == 'rgb(218, 65, 103)' &&
                            celulasTabuleiro[1].style.backgroundColor == 'rgb(218, 65, 103)' &&
                            celulasTabuleiro[2].style.backgroundColor == 'rgb(218, 65, 103)' ||
                            celulasTabuleiro[3].style.backgroundColor == 'rgb(218, 65, 103)' &&
                            celulasTabuleiro[4].style.backgroundColor == 'rgb(218, 65, 103)' &&
                            celulasTabuleiro[5].style.backgroundColor == 'rgb(218, 65, 103)' ||
                            celulasTabuleiro[6].style.backgroundColor == 'rgb(218, 65, 103)' &&
                            celulasTabuleiro[7].style.backgroundColor == 'rgb(218, 65, 103)' &&
                            celulasTabuleiro[8].style.backgroundColor == 'rgb(218, 65, 103)' ||
                            celulasTabuleiro[0].style.backgroundColor == 'rgb(218, 65, 103)' &&
                            celulasTabuleiro[3].style.backgroundColor == 'rgb(218, 65, 103)' &&
                            celulasTabuleiro[6].style.backgroundColor == 'rgb(218, 65, 103)' ||
                            celulasTabuleiro[1].style.backgroundColor == 'rgb(218, 65, 103)' &&
                            celulasTabuleiro[4].style.backgroundColor == 'rgb(218, 65, 103)' &&
                            celulasTabuleiro[7].style.backgroundColor == 'rgb(218, 65, 103)' ||
                            celulasTabuleiro[2].style.backgroundColor == 'rgb(218, 65, 103)' &&
                            celulasTabuleiro[5].style.backgroundColor == 'rgb(218, 65, 103)' &&
                            celulasTabuleiro[8].style.backgroundColor == 'rgb(218, 65, 103)' ||
                            celulasTabuleiro[0].style.backgroundColor == 'rgb(218, 65, 103)' &&
                            celulasTabuleiro[4].style.backgroundColor == 'rgb(218, 65, 103)' &&
                            celulasTabuleiro[8].style.backgroundColor == 'rgb(218, 65, 103)' ||
                            celulasTabuleiro[2].style.backgroundColor == 'rgb(218, 65, 103)' &&
                            celulasTabuleiro[4].style.backgroundColor == 'rgb(218, 65, 103)' &&
                            celulasTabuleiro[6].style.backgroundColor == 'rgb(218, 65, 103)'  ) { 

                                console.log("Voce venceu!!");

                                let tabuleiroNv = document.getElementById('container');

                                this.botaoNovamente = document.createElement('button');
                                this.vencedorText = document.createElement('div');

                                tabuleiroNv.appendChild(this.vencedorText);
                                tabuleiroNv.appendChild(this.botaoNovamente);

                                

                                this.vencedorText.className = 'jogadorTexto';
                                this.botaoNovamente.className = 'botaoVencedor';


                                this.vencedorText.textContent ='O Jogador venceu!';
                                this.botaoNovamente.textContent = 'JOGAR NOVAMENTE';

                        }

                        else if (
                        celulasTabuleiro[0].style.backgroundColor == 'rgb(65, 218, 180)' &&
                        celulasTabuleiro[1].style.backgroundColor == 'rgb(65, 218, 180)' &&
                        celulasTabuleiro[2].style.backgroundColor == 'rgb(65, 218, 180)' ||
                        celulasTabuleiro[3].style.backgroundColor == 'rgb(65, 218, 180)' &&
                        celulasTabuleiro[4].style.backgroundColor == 'rgb(65, 218, 180)' &&
                        celulasTabuleiro[5].style.backgroundColor == 'rgb(65, 218, 180)' ||
                        celulasTabuleiro[6].style.backgroundColor == 'rgb(65, 218, 180)' &&
                        celulasTabuleiro[7].style.backgroundColor == 'rgb(65, 218, 180)' &&
                        celulasTabuleiro[8].style.backgroundColor == 'rgb(65, 218, 180)' ||
                        celulasTabuleiro[0].style.backgroundColor == 'rgb(65, 218, 180)' &&
                        celulasTabuleiro[3].style.backgroundColor == 'rgb(65, 218, 180)' &&
                        celulasTabuleiro[6].style.backgroundColor == 'rgb(65, 218, 180)' ||
                        celulasTabuleiro[1].style.backgroundColor == 'rgb(65, 218, 180)' &&
                        celulasTabuleiro[4].style.backgroundColor == 'rgb(65, 218, 180)' &&
                        celulasTabuleiro[7].style.backgroundColor == 'rgb(65, 218, 180)' ||
                        celulasTabuleiro[2].style.backgroundColor == 'rgb(65, 218, 180)' &&
                        celulasTabuleiro[5].style.backgroundColor == 'rgb(65, 218, 180)' &&
                        celulasTabuleiro[8].style.backgroundColor == 'rgb(65, 218, 180)' ||
                        celulasTabuleiro[0].style.backgroundColor == 'rgb(65, 218, 180)' &&
                        celulasTabuleiro[4].style.backgroundColor == 'rgb(65, 218, 180)' &&
                        celulasTabuleiro[8].style.backgroundColor == 'rgb(65, 218, 180)' ||
                        celulasTabuleiro[2].style.backgroundColor == 'rgb(65, 218, 180)' &&
                        celulasTabuleiro[4].style.backgroundColor == 'rgb(65, 218, 180)' &&
                        celulasTabuleiro[6].style.backgroundColor == 'rgb(65, 218, 180)') {

                            console.log("Voce venceu!!");

                            let tabuleiroNv = document.getElementById('container');

                            this.botaoNovamente = document.createElement('button');
                            this.vencedorText = document.createElement('div');

                            tabuleiroNv.appendChild(this.vencedorText);
                            tabuleiroNv.appendChild(this.botaoNovamente);

                                

                            this.vencedorText.className = 'jogadorTexto';
                            this.botaoNovamente.className = 'botaoVencedor';


                            this.vencedorText.textContent ='O Computador venceu!';
                            this.botaoNovamente.textContent = 'JOGAR NOVAMENTE';
                        }

                        else if (switchColor == 1) {
                            this.style.backgroundColor = 'rgb(218, 65, 103)';
                            switchColor = 0;
                            console.log(celulasTabuleiro[0].style.backgroundColor);
                        }
                        else if (switchColor == 0) {

                            let index = Math.floor((Math.random() * 8));


                            if (celulasTabuleiro[index].style.backgroundColor == 'rgb(65, 218, 180)' ||
                                celulasTabuleiro[index].style.backgroundColor == 'rgb(218, 65, 103)') {

                                 while (celulasTabuleiro[index].style.backgroundColor == 'rgb(65, 218, 180)' ||
                                        celulasTabuleiro[index].style.backgroundColor == 'rgb(218, 65, 103)'){
                                    index = Math.floor((Math.random() * 8));
                                    }

                                celulasTabuleiro[index].style.backgroundColor = 'rgb(65, 218, 180)';
                                switchColor = 1;
                            }
                            else{ 
                                celulasTabuleiro[index].style.backgroundColor = 'rgb(65, 218, 180)';
                                switchColor = 1;
                            }
                            

                        }
                    })   
                })
            }
        }
    }
    
    jogo.init();

})()
