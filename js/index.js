function getTime() {

  let startTime =  0;
  let randomNnm = Math.floor(Math.random() * 60) + 1;

 return function () {

  if ( startTime === 1 ) {

      console.log('Enabled')

  } else if ( startTime >= 2 ) {

      let timeGenerator = Math.floor(Math.random() * 60) + 1;
      
      let time = timeGenerator - randomNnm;
      
       console.log(`${time} seconds have passed`);
  }

    return startTime++;  

 }
}

let functionСall = getTime();

console.log(functionСall());
console.log(functionСall());
console.log(functionСall());







let element = document.querySelector('.count')

const timer = time => {

  let countdown = setInterval(function(){

      const minutes = Math.floor(time / 60);

      let сountdown = time % 60;

      сountdown = сountdown < 10 ? '0' + сountdown: сountdown;

      console.log(`${minutes} : ${сountdown}`);

      element.innerHTML = `${minutes} : ${сountdown}`;

      time--

      if ( time < 0 ) {

          console.log('Time End');

          element.innerHTML = 'Time End';
          
          clearInterval(countdown);
      }
      
  },1000);

 }

timer(10);