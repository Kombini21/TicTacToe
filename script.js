(function() {


    var jogo = {
        jogadores: ["Player1", "Player2"],
        init: function() {
            this.fazerTabuleiro();
            this.quemComeca(); 
            this.colocarXeO();
            //this.finalizarJogo();
            //this.atualizarScore();
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

        colocarXeO: function() {

            let gameOn = 1;

            let primeiroJogadorVez = 1; 
            let segundoJogadorVez = 0; 

            let celulasTabuleiro = document.querySelectorAll('.box');

            function jogadaJogador1() {
                celulasTabuleiro.forEach( celula => {
                    celula.addEventListener('click', function(){
                        this.style.backgroundColor = '#DA4167';
                        jogadaJogador2();
                    })   
                })
            }

            function jogadaJogador2() {
                celulasTabuleiro.forEach( celula => {
                    celula.addEventListener('click', function(){
                        this.style.backgroundColor = '#F78764';
                        jogadaJogador1();
                    })   
                })
            }

            if (gameOn == 1) {
                
                jogadaJogador1()   //hora do git
            }

        }
    }
    










    jogo.init();

})()