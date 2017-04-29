// function getTempCallback ( location, callback ) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback( 'Philidelphia', function(err, temp) {
//   if (err) {
//     console.log('Error', err);
//   } else {
//     console.log('Success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//
//   });
// }
//
// getTempPromise('Norge').then(function (temp) {
//   console.log('promise success', temp);
// }, function(error) {
//   console.log('promise error', error);
// });

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('Du har ikke to numeriske tall');
    }
  });
}

addPromise(4, 5).then(function (sum) {
  console.log('Utregning vellykket, sum = ', sum);
}, function(error) {
   console.log('Ops, noe gikk galt. Var det ikke to tall?');
});


addPromise(4, 'fem').then(function (sum) {
  console.log('Utregning vellykket, sum = ', sum);
}, function(error) {
   console.log('Ops, noe gikk galt. Var det ikke to tall?');
});
