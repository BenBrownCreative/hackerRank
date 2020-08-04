'use strict';
// first attempt

// Complete the formattedFriendListForBabyStep function below.
function formattedFriendListForBabyStep2(babyStep, friends) {
    if (isNaN(babyStep)) {
        return 'Not a Number!';
      }
    
    // arrange friends as objects for clarity
    const friendsList = friends.map(friend => {
        return {
            firstName: friend[0],
            lastName: friend[1],
            babyStep: friend[2]
        }
    });

    // select friends on same step
    const friendsOnMyStep = friendsList.filter(friend => friend.babyStep == babyStep)
    .sort(( a, b ) => {

        if ( a.lastName < b.lastName ){
          return -1;
        }
        else if ( a.lastName > b.lastName ){
          return 1;
        }
        else if ( a.lastName == b.lastName ){
            if ( a.firstName < b.firstName ){
                return -1;
              }
              if ( a.firstName > b.firstName ){
                return 1;
              }
          }
        return 0;
      });

    // create string to return
    let string = '';
    switch (friendsOnMyStep.length) {
        case 0: 
            string = `None of your friends is in Baby Step ${babyStep}.`
            break;
        case 1:
            string = `${friendsOnMyStep[0].firstName} ${friendsOnMyStep[0].lastName} is also in Baby Step ${babyStep}.`
            break;
        case 2:
            string = `${friendsOnMyStep[0].firstName} ${friendsOnMyStep[0].lastName} and ${friendsOnMyStep[1].firstName} ${friendsOnMyStep[1].lastName} are also in Baby Step ${babyStep}.`
            break;
        case 3:
            string = `${friendsOnMyStep[0].firstName} ${friendsOnMyStep[0].lastName}, ${friendsOnMyStep[1].firstName} ${friendsOnMyStep[1].lastName}, and 1 other friend are also in Baby Step ${babyStep}.`
            break;
        default:
            string = `${friendsOnMyStep[0].firstName} ${friendsOnMyStep[0].lastName}, ${friendsOnMyStep[1].firstName} ${friendsOnMyStep[1].lastName}, and ${friendsOnMyStep.length - 2} other friends are also in Baby Step ${babyStep}.`
            break;
    }
    console.log(friendsOnMyStep);
    return string;

}
// baby step and array of friends
console.log('formattedFriendListForBabyStep first attempt:', formattedFriendListForBabyStep2(6, [ [ 'Paul', 'Taylor', '2' ],
[ 'Sharon', 'Thomas', '3' ],
[ 'Thomas', 'Harris', '3' ],
[ 'Deborah', 'Lee', '4' ],
[ 'Mark', 'Young', '4' ],
[ 'Shirley', 'Perez', '4' ],
[ 'Joseph', 'Lee', '5' ],
[ 'Mary', 'White', '5' ],
[ 'Matthew', 'Garcia', '5' ],
[ 'Patricia', 'Allen', '5' ],
[ 'Larry', 'Robinson', '6' ],
[ 'Kimberly', 'Lopez', '6' ],
[ 'Jose', 'Martinez', '6' ],
[ 'Deborah', 'Walker', '6' ],
[ 'Joseph', 'Lopez', '6' ],
[ 'Dorothy', 'Moore', '7' ],
[ 'Jose', 'Jackson', '7' ],
[ 'Karen', 'Lee', '7' ],
[ 'Paul', 'Taylor', '7' ],
[ 'Amy', 'Gonzalez', '7' ],
[ 'Richard', 'Martinez', '7' ] ]));




// refactor

// Complete the formattedFriendListForBabyStep function below.
function formattedFriendListForBabyStep(babyStep, friends) {
  // check for possible error
  if (isNaN(babyStep)) {
    return 'Not a Number!';
  }

  // select friends on same step and sort by name
  const friendsOnMyStep = friends.filter(friend => friend[2] == babyStep)
  .sort(( a, b ) => { // sort by name
    let i = a[1] == b[1] ? 0 : 1; // check to see if last names are equal and change i to use first name to compare
    return a[i] < b[i] ? -1 : 1; 
  });

  // create string to return
  return (() => {
    if (friendsOnMyStep.length == 0) {
      return `None of your friends is in Baby Step ${babyStep}.`
    } 
    else if (friendsOnMyStep.length == 1) {
      return `${friendsOnMyStep[0][0]} ${friendsOnMyStep[0][1]} is also in Baby Step ${babyStep}.`
    } 
    else if (friendsOnMyStep.length == 2) {
      return `${friendsOnMyStep[0][0]} ${friendsOnMyStep[0][1]} and ${friendsOnMyStep[1][0]} ${friendsOnMyStep[1][1]} are also in Baby Step ${babyStep}.`
    } 
    else if (friendsOnMyStep.length == 3) {
      return `${friendsOnMyStep[0][0]} ${friendsOnMyStep[0][1]} and ${friendsOnMyStep[1][0]} ${friendsOnMyStep[1][1]}, and 1 other friend are also in Baby Step ${babyStep}`
    } 
    else if (friendsOnMyStep.length > 3) {
      return `${friendsOnMyStep[0][0]} ${friendsOnMyStep[0][1]} and ${friendsOnMyStep[1][0]} ${friendsOnMyStep[1][1]}, and ${friendsOnMyStep.length - 2} other friends are also in Baby Step ${babyStep}.`
    } 
  })();

}
// baby step and array of friends
console.log('formattedFriendListForBabyStep refactor:', formattedFriendListForBabyStep(6, [ [ 'Paul', 'Taylor', '2' ],
[ 'Sharon', 'Thomas', '3' ],
[ 'Thomas', 'Harris', '3' ],
[ 'Deborah', 'Lee', '4' ],
[ 'Mark', 'Young', '4' ],
[ 'Shirley', 'Perez', '4' ],
[ 'Joseph', 'Lee', '5' ],
[ 'Mary', 'White', '5' ],
[ 'Matthew', 'Garcia', '5' ],
[ 'Patricia', 'Allen', '5' ],
[ 'Larry', 'Robinson', '6' ],
[ 'Kimberly', 'Lopez', '6' ],
[ 'Jose', 'Martinez', '6' ],
[ 'Deborah', 'Walker', '6' ],
[ 'Joseph', 'Lopez', '6' ],
[ 'Dorothy', 'Moore', '7' ],
[ 'Jose', 'Jackson', '7' ],
[ 'Karen', 'Lee', '7' ],
[ 'Paul', 'Taylor', '7' ],
[ 'Amy', 'Gonzalez', '7' ],
[ 'Richard', 'Martinez', '7' ] ]));


