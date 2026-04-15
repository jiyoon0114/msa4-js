// user.name, user['name'] 둘 다 같은 뜻임

const url = "https://picsum.photos/v2/list?page=1&limit=10";

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  console.log(form);
  e.preventDefault();
  const baseUrl = "https://picsum.photos/v2/list";

  // user가 입력한 값이 value에 저장이 됨
  const pageInput = form['page'].value;
  const pagelimit = form['limit'].value;
  const url = `${baseUrl}?page=${pageInput}&limit=${pagelimit}`;

  axios.get(url)
  .then(res => {
  // response 객체를 받아와 처리하는 함수
    const container = document.querySelector('.container');
    container.replaceChildren();
    res.data.forEach(item => {
      const newCardImg = document.createElement('div');
      newCardImg.style.backgroundImage = `url('${item.download_url}')`;
      newCardImg.classList.add('card-img');

      const newAuthor = document.createElement('span');
      newAuthor.textContent = `${item.id} ${item.author}`;

      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.appendChild(newCardImg);
      newCard.appendChild(newAuthor);

      container.appendChild(newCard);
    });
  })
  .catch(error => {
    // error가 발생할 경우 실행하는 함수 
    // 처리중 예외가 발생 했을 때, 처리 작성 부분
    console.error(error);
  })
  .finally(() => {
    console.log('완료');
  });
});


/*
// 동기적인 코드이기 때문에 response를 받을때 실행하는 비동기적 처리가 필요함
axios.get(url)
.then(res => {
  // response 객체를 받아와 처리하는 함수
  console.log(res);
  const container = document.querySelector('.container');
  res.data.forEach(item => {
    const newCardImg = document.createElement('div');
    newCardImg.style.backgroundImage = `url('${item.download_url}')`;
    newCardImg.classList.add('card-img');

    const newAuthor = document.createElement('span');
    newAuthor.textContent = `${item.id} ${item.author}`;

    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.appendChild(newCardImg);
    newCard.appendChild(newAuthor);

    container.appendChild(newCard);
  });
})
.catch(error => {
  // error가 발생할 경우 실행하는 함수 
  // 처리중 예외가 발생 했을 때, 처리 작성 부분
  console.error(error);
})
.finally(() => {
  console.log('완료');
});
*/