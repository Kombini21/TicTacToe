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
            console.log(celulasTabuleiro);
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
                        }

                        else if (switchColor == 1) {
                            this.style.backgroundColor = '#DA4167';
                            switchColor = 0;
                            console.log(celulasTabuleiro[0].style.backgroundColor);
                        }
                        else if (switchColor == 0) {
                            this.style.backgroundColor = '#41dab4';
                            switchColor = 1;
                        }
                    })   
                })
            }
        }
    }
    
    jogo.init();

})()
