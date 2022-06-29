(function() {


    var jogo = {
        jogadores: ["Player1", "Player2"],
        init: function() {
            this.fazerTabuleiro();
            this.quemComeca(); 
            this.colocarX();
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
            calculoDoJogador = Math.floor(Math.random() * jogadores.lenght)
            this.primeiroJogador = jogadores[calculoDoJogador]
            this.segundoJogador = jogadores[calculoDoJogador + 1]
        },

        
    }
    










    //jogo.init();

})()