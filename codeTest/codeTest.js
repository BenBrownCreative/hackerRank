'use strict';

// Complete the formattedFriendListForBabyStep function below.
function formattedFriendListForBabyStep(babyStep, friends) {
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
    const friendsOnMyStep = friendsList.filter(friend => friend.babyStep == babyStep);

    // sort friends by last name
    //friendsOnMyStep.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);

    friendsOnMyStep.sort(( a, b ) => {

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
console.log('formattedFriendListForBabyStep', formattedFriendListForBabyStep(6, [ [ 'Paul', 'Taylor', '2' ],
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