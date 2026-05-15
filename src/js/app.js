/* ESPERA A PÁGINA CARREGAR */
document.addEventListener("DOMContentLoaded", function(){

    /* BOTÃO */
    const botao = document.getElementById("btnComecar");
    const botao2 = document.getElementById("botao2");
    if(botao || botao2){
        botao.addEventListener("click", function(){
            alert("Bem-vindo ao Interguide!");
            window.location.href = "login.html";
        });
        botao2.addEventListener("click", function(){
            alert("Bem-vindo ao Interguide!");
            window.location.href = "login.html";
        });
    }

    /* SLIDESHOW */
    const imagens = [
        "./src/images/slide1.png",
        // "./src/images/slide2.png",
        "./src/images/slide3.png",
        "./src/images/slide4.png",
        "./src/images/slide5.png",
        "./src/images/slide6.png",
        "./src/images/slide7.png",
        "./src/images/slide8.png"
    ];
    let imagemAtual = 0;
    const slide = document.getElementById("slide");
    function trocarImagem(){
        imagemAtual++;
        if(imagemAtual >= imagens.length){
            imagemAtual = 0;
        }
        slide.src = imagens[imagemAtual];
    }
    setInterval(trocarImagem, 3000);
});