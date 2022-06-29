(function() {


    var jogo = {
        jogadores: ["Player1", "Player2"],
        init: function() {
            this.fazerTabuleiro();
            this.quemComeca(); 
            this.colocarXeO();
            this.finalizarJogo();
            this.atualizarScore();
        },

        fazerTabuleiro: function() {

            for (i = 0; i < 3; i++) {
                this.row = document.createElement("div");
                this.row.className = "row";
                for ( j = 0; j < 3; j++) {
                    this.box = document.createElement("div");
                    this.box.className = "box";
                    this.box.setAttribute('id',`${j}box`);
                    this.row.appendChild(this.box);
                }
                document.getElementById('tabuleiro').appendChild(this.row).setAttribute('id',`${i}row`);
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

        colocarXeO: function() {

            let gameOn = 1;

            let primeiroJogadorVez = 1; 
            letsegundoJogadorVez = 0; 

            let celulasTabuleiro = document.querySelectorAll('.box');


            while (gameOn == 1) {

                while (primeiroJogadorVez == 1) {

                    celulasTabuleiro.forEach( celula => {
                        celula.addEventListener('click', function(){
                            this.style.backgroundColor = '#DA4167';
                            segundoJogadorVez = 1;
                            primeiroJogadorVez = 0;
                            
                        })   
                    })
                }

                while (segundoJogadorVez == 1) {

                    celulasTabuleiro.forEach( celula => {
                        celula.addEventListener('click', function(){
                            this.style.backgroundColor = '#F78764';
                            primeiroJogadorVez = 1;
                            segundoJogadorVez = 0;
                        })   
                    })

                    
                }


            }

        }
    }
    










    jogo.quemComeca();

})()