const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc#';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$ckocF6koOKhoya2DsHhOIubofODGrQhT33Ula3z7KUkjWU9lTuOpe';
bcrypt.compare(password,hashedPassword,(err,res)=>{
console.log(res);
});

// var data={
//     id:10
// };

// var token = jwt.sign(data,'123Abc');
// console.log(token);

// var decoded = jwt.verify(token,'123Abc');
// console.log('decoded',decoded);


// var message = 'hello world';
// console.log(`SHA256: ${SHA256(message).toString()}`);

// var data={
//     id:4
// };

// var token={
//     data,
//     hash:SHA256(JSON.stringify(data)+'mySecret').toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data)+'mySecret').toString();
// if(resultHash===token.hash){
//     console.log('Data was not changed');
// }else{
//     console.log('Data was changed. Do not truest them');

// }