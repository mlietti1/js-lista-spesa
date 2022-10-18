// Abbiamo un array di alimenti.
// Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
// Consegna:
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).

const groceriesOne = [
  'pane',
  'pasta',
  'riso',
  'latte',
  'passata di pomodoro',
  'carote',
  'pomodori',
  'zucchine',
  'insalata',
  'formaggio',
  'mele',
  'limoni',
  'birra',
  'vino bianco',
  'aceto',
  'gelato',
];

const containerOne = document.getElementById('first-container');
const listOne = document.createElement('ul');

for(i = 0; i < groceriesOne.length; i++){
  
  listOne.innerHTML += `<li>${groceriesOne[i]}</li>`;
}

containerOne.append(listOne);

const groceriesTwo = [
  'arance',
  'pere',
  'fette biscottate',
  'mozzarella',
  'tonno in scatola',
  'peperoni',
  'caffè',
  'zucchero',
  'limoncello',
  'maionese',
  'sedano'
]

const containerTwo = document.getElementById('second-container');
const listTwo = document.createElement('ul');
c = 0;

while(c < groceriesTwo.length){
  listTwo.innerHTML += `<li>${groceriesTwo[c]}</li>`;
  c++; 
}

containerTwo.append(listTwo);