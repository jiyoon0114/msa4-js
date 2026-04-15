// 클로저
(() => {
  let allowFlg = true; //디바운싱 제어용 플래그 
  const nextBtn = document.querySelector('.next');
  const resetBtn = document.querySelector('.reset');
  let page = 0;

  nextBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    page += 1;
    const container = document.querySelector('.container');
    // allwFlg가 true일 경우 해당 처리 시작
    if(allowFlg) {
      allowFlg = false;
      try {
        // 이렇게 파라미터 하나하나 쓸 필요는 없음
        const baseUrl = "https://picsum.photos/v2/list";
        // const url = `${baseUrl}?page=${page}&limit=3`;
          
        /*
        const response = await axios.get(baseUrl,{
          params: {
            limit: 3,
            page: page
            //  limit -> 만약 키와 변수명이 같다면 limit: limit과 같은거임
          }
        });
        */ 
        const config = {
          params: {
            limit: 3,
            page
          }
        }
        const response = await axios.get(baseUrl, config);
  
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
      catch(error) {
        console.log(error);
      }
      finally {
        allowFlg = true;
      }
    }
  });

  resetBtn.addEventListener('click', (e) => {
    const container = document.querySelector('.container');
    e.preventDefault();
    page = 0;
    container.replaceChildren();
  });
})()