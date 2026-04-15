// user.name, user['name'] 둘 다 같은 뜻임

const url = "https://picsum.photos/v2/list?page=1&limit=10";
const form = document.querySelector('form');

form.addEventListener('submit', async(e) => {
  console.log(form);
  e.preventDefault();

  const baseUrl = "https://picsum.photos/v2/list";
  // user가 입력한 값이 value에 저장이 됨
  const pageInput = form['page'].value;
  const pagelimit = form['limit'].value;
  const url = `${baseUrl}?page=${pageInput}&limit=${pagelimit}`;
  console.log(url);

  try {
    const response = await axios.get(url);
    console.log(response);
    const container = document.querySelector('.container');
    container.replaceChildren();

    response.data.forEach(item => {
      const newCardImg = document.createElement('div');
      newCardImg.style.backgroundImage = `url('${item.download_url}')`;
      newCardImg.classList.add('card-img');

      const newAuthor = document.createElement('span');
      newAuthor.textContent = `${item.id}: ${item.author}`;

      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.appendChild(newCardImg);
      newCard.appendChild(newAuthor);

      container.appendChild(newCard);
    });
  }
  catch (error) {
    console.error(error);    
  }
  finally {
    console.log('완료');
  }
});