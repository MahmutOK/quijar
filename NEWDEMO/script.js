console.clear();

const characters = [
{
  name: "Johannes Gutenberg",
  id: "Gutenberg",
  imgSrc: 'http://ouijar.fr/img/1.png' },
{
  name: "Napolyon",
  id: "napolyon",
  imgSrc: 'http://ouijar.fr/img/2.png' },
{
  name: "Shadi",
  id: "shadi",
  imgSrc: 'http://ouijar.fr/img/3.png' },
{
  name: "For Premium",
  id: "locked",
  imgSrc: 'http://ouijar.fr/img/locked.png' },
{
  name: "For Premium",
  id: "locked",
  imgSrc: 'http://ouijar.fr/img/locked.png' },
{
  name: "For Premium",
  id: "locked",
  imgSrc: 'http://ouijar.fr/img/locked.png' },
{
  name: "For Premium",
  id: "locked",
  imgSrc: 'http://ouijar.fr/img/locked.png' },
{
  name: "For Premium",
  id: "locked",
  imgSrc: 'http://ouijar.fr/img/locked.png' },
{
  name: "For Premium",
  id: "locked",
  imgSrc: 'http://ouijar.fr/img/locked.png' },
{
  name: "For Premium",
  id: "locked",
  imgSrc: 'http://ouijar.fr/img/locked.png' },
{
  name: "For Premium",
  id: "locked",
  imgSrc: 'http://ouijar.fr/img/locked.png' },
{
  name: "For Premium",
  id: "locked",
  imgSrc: 'http://ouijar.fr/img/locked.png' },
{
  name: "For Premium",
  id: "locked",
  imgSrc: 'http://ouijar.fr/img/locked.png' },
{
  name: "For Premium",
  id: "locked",
  imgSrc: 'http://ouijar.fr/img/locked.png' },
{
  name: "For Premium",
  id: "locked",
  imgSrc: 'http://ouijar.fr/img/locked.png' },
{
  name: "For Premium",
  id: "locked",
  imgSrc: 'http://ouijar.fr/img/locked.png' }];

  function redirectchar() {
    
   
      window.location.href = "http://ouijar.fr/comingsoon";
    
        
        
     
      
  
 
  };
  let timeouttime
  function bekle(){
    timeouttime= setTimeout(redirectchar,3000)

  };
characters.forEach(character => {
  let newCharacter = document.createElement('button');
  newCharacter.classList = 'character';
  newCharacter.id = character.id;
  newCharacter.rel = character.name;
  newCharacter.innerHTML = `
		<img class="character__img" src="${character.imgSrc}" />
		<p class="character__name">${character.name}</p>
	`;
  newCharacter.addEventListener('click', () => {
    if (document.querySelector('.character.active')) {
      document.querySelector('.character.active').classList.remove('active');
    }
    newCharacter.classList.add('active');
    
    if (character.id=="Gutenberg") {
      
    bekle();

      
    }
    if (character.id=="napolyon") {
      
    bekle();

    }
    if (character.id=="shadi") {
      
    bekle();

    }
 

  });
  document.getElementById('selectContainer').appendChild(newCharacter);
});