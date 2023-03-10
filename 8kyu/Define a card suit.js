// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'


//My solution
function defineSuit(card) {
    if (card.length == 2){//if there are only 2 characters
  return card[1]=='♣'? 'clubs' : card[1]=='♦'? 'diamonds': card[1]=='♥'? 'hearts' : 'spades'
    }
    else//if there are 3 characters
  return card[2]=='♣'? 'clubs' : card[2]=='♦'? 'diamonds': card[2]=='♥'? 'hearts' : 'spades' 
  } 


  //Other solution
  function defineSuit(card) {
    if(card.includes('♥')) return 'hearts'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♣')) return 'clubs'
    if(card.includes('♠')) return 'spades' 
    }