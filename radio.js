let musicas = [
    {titulo:'A BOYS IS A GUN', artista:'Tyler, The Creator', src:'A BOY IS A GUN__9JQDPjpfiGw.mp3', img:'1.png'},

    {titulo:'ARE WE STILL FRIENDS', artista:'The Creator', src:'ARE WE STILL FRIENDS__Gb76TgCUqAY.mp3', img:'1.png'},

    {titulo:'POTATO SALAD', artista:'Tyler, The Creator', src:'A_AP ROCKY X TYLER THE CREATOR - POTATO SALAD_93M1QtYDtpU.mp3', img:'5.png'},

    {titulo:'BEST INTEREST', artista:'Tyler, The Creator', src:'BEST INTEREST_NkMTKGM-efw.mp3', img:'radio/2.png'},

    {titulo:'EARFQUAKE', artista:'Tyler, The Creator', src:'EARFQUAKE_HmAsUQEFYGI.mp3', img:'radio/1.png'},

    {titulo:'I THINK', artista:'Tyler, The Creator', src:'I THINK_m91Vq-Yd3BA.mp3', img:'radio/4.png'},

    {titulo:'PUPPET', artista:'Tyler, The Creator', src:'PUPPET_OZzfUagtyPE.mp3', img:'radio/6.png'},

    {titulo:'RUNNING OUT OF TIME', artista:'Tyler, The Creator', src:'RUNNING OUT OF TIME_Uyf_lImpdRw.mp3', img:'1.png'},

    {titulo:'See You Again', artista:'Tyler, The Creator', src:'See You Again (Clean) - Tyler, The Creator_Kali Uchis_AhvkKR0ero8.mp3', img:'3.png'},

    {titulo:'435', artista:'Tyler, The Creator', src:'Tyler, the Creator - 435.mp3', img:'4.png'},

    {titulo:'911', artista:'Tyler, The Creator', src:'Tyler, the Creator - 911 _ Mr. Lonely [feat. Steve Lacy & Frank Ocean]_C5a3jC5dkXk.mp3', img:'3.png'},

    {titulo:'Boredom', artista:'Tyler, The Creator', src:'Tyler, the Creator - Boredom [feat. Anna of the North, Corinne Bailey & Rex Orange County]_Chy1oeTjgLA.mp3', img:'5.png'},

    {titulo:'GONE GONE', artista:'Tyler, The Creator', src:'Tyler, The Creator - GONE, GONE _ THANK YOU (feat. CeeLo Green, Cullen Omori & La Roux)_ceLyMb0MGLE.mp3', img:'1.png'},

    {titulo:'She', artista:'Tyler, The Creator', src:'Tyler, The Creator - She (Feat. Frank Ocean) - Goblin (HQ)_6l75clkAYFQ.mp3', img:'7.png'},

    {titulo:'Where This Flower', artista:'Tyler, The Creator', src:'Where This Flower Blooms_1gAHhLb6tjA.mp3', img:'6.png'},

];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 14;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 14){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}

// body

const ul = document.querySelector("ul");

const random = (min, max) => Math.random() * (max - min) + min;

const randomColors = ["#8400ff", "#40E0D0", "#eaff00"];

for (let i = 0; i < 50; i++) {
  const li = document.createElement("li");

  const size = Math.floor(random(50, 120));
  const position = random(1, 94);
  const delay = random(5, 1);
  const duration = random(10, 40);

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;

  li.style.backgroundColor = randomColors[Math.floor(random(0, 3))];

  li.style.left = `${position}%`;

  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;

  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, 
                                                   ${Math.random()}, ${Math.random()})`;

  ul.appendChild(li);
}
