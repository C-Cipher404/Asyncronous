'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `   <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 100000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

// ///////////////////////////////////////

// // const getCountryData = function (country) {
// //   const request = new XMLHttpRequest(); // this is the old way of how it use to work
// //   request.open(
// //     'GET',
// //     `https://countries-api-836d.onrender.com/countries/name/${country}`
// //   );
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     const html = `   <article class="country">
// //   <img class="country__img" src="${data.flag}" />
// //   <div class="country__data">
// //     <h3 class="country__name">${data.name}</h3>
// //     <h4 class="country__region">${data.region}</h4>
// //     <p class="country__row"><span>👫</span>${(
// //       +data.population / 100000
// //     ).toFixed(1)} people</p>
// //     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
// //     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// //   </div>
// // </article>
// // `;
// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };

// // getCountryData('portugal');
// // getCountryData('USA');
// // getCountryData('germany');

// // // AJAX call country 1
// // const getCountryAndneighbour = function (country) {
// //   const request = new XMLHttpRequest(); // this is the old way of how it use to work
// //   request.open(
// //     'GET',
// //     `https://countries-api-836d.onrender.com/countries/name/${country}`
// //   );
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //    // Render country 1
// //     renderCountry(data);

// //     // Get nighbor countryk (2)
// //     const [neighbour] = data.borders;

// //     if (!neighbour) return;

// //     //AJAX call country 2
// //     const request2 = new XMLHttpRequest();
// //     request2.open(
// //       'GET',
// //       `https:countries-api-836d.onrender.com/countries/alpha/${neighbour}`
// //     );
// //     request2.send();

// //     request2.addEventListener('load', function () {
// //       const data2 = JSON.parse(this.responseText);
// //       console.log(data2);

// //       renderCountry(data2, 'neighbour');
// //     });
// //   });
// // };

// // // getCountryAndneighbour('portugal');
// // getCountryAndneighbour('USA');

// // setTimeout(() => {
// //   console.log('1 second passed');
// //   setTimeout(() => {
// //     console.log('2 second passed');
// //     setTimeout(() => {
// //       console.log('3 second passed');
// //       setTimeout(() => {
// //         console.log('4 second passed');
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// // // OLD way of doing it
// // // const request = new XMLHttpRequest();
// // // request.open(
// // //   'GET',
// // //   `https://countries-api-836d.onrender.com/countries/name/${country}`
// // // );
// // // request.send();

// // // // New way
// // // const request = fetch(
// // //   'https://countries-api-836d.onrender.com/countries/name/portugal'
// // // );
// // // console.log(request);

// // // const getCountryData = function (country) {
// // //   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
// // //     .then(function (response) {
// // //       console.log(response);
// // //       return response.json();
// // //     })
// // //     .then(function (data) {
// // //       console.log(data);
// // //       renderCountry(data[0]);
// // //     });
// // // };
// // // getCountryData('portugal');

// const request = fetch(
//   'https://countries-api-836d.onrender.com/countries/name/portugal'
// );

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// }

//   const getCountryData = function (country) {
//     // country 1
//      getJSON(
//         `https://countries-api-836d.onrender.com/countries/name/${country}`,
//       'Country not found'

//       .then(data => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];

//         if (!neighbour) throw new Error('No neighbour found!');

//         // country 2
//         return getJSON(
//           `https:countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//         );
//       })
//       .then(response => response.json())
//       .then(data => renderCountry(data, 'neighbour'))
//       .catch(err => {
//         console.error(`${err} 💥 💥 💥`);
//         renderError(`Somthing went wrong 💥 💥 ${err.message}. Try again! `);
//       })
//       .finally(() => {
//         countriesContainer.style.opacity = 1;
//       })

// btn.addEventListener('click', function () {
//   getCountryData('Germany');
// });

/////////////////////////////////////////////////
// Coding Challenge #1

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city},${data.country}`);
//     })
//     .catch(err => console.error(`${err.message} `));)
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);

// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000; i++) {}
//   console.log(res);
// });

// console.log('Test End');

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening 🎉');

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 🙀');
    } else {
      reject(new Error('You lost your money 🤬'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Promisifying setTimout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));


navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.log(err)
);
console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => console.error(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city},${data.country}`);

      return fetch(
        `https://countries-api-836d.onrender.com/countries/name/${data.country}`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found(${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message}`));
};

btn.addEventListener('click', whereAmI);


/////////////////////////////////////////////////
// Coding Challenge #2
const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function (country) {
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

  const res = await fetch(`https://restcountries.eu/rest{/v2/name/${country}`);

  const data = await res.json();
  renderCountry(data[0])};
};
whereAmI();
console.log('FIRST');

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// // }
// 

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const [data1] = await getJSON(`https://restcountries.eu/rest/name/${c1}`);
//     const [data2] = await getJSON(`https://restcountries.eu/rest/name/${c2}`);
//     const [data3] = await getJSON(`https://restcountries.eu/rest/name/${c3}`);

   const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/name/${c3}`),
    ]);
    console.log(data.map(d => [0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('protugal', 'canada', 'tanzania');


//Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took to long!'));
    }, sec);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));

//Promsie.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.resolve('ERROR'),
  Promise.resolve(' Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.resolve('ERROR'),
  Promise.resolve(' Another success'),
]).then(res => console.log(res));

//Promise.any
Promise.any([
  Promise.resolve('Success'),
  Promise.resolve('ERROR'),
  Promise.resolve(' Another success'),
]).then(res => console.log(res));
*/

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.imgages');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// PART 1

const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load image 2
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
loadNPause();

// Part 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsEL = await Promise.all(imgs);
    console.log(imgsEL);

    imgsEL.forEach(img => img.classlist.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
