   // fetch('https://newsapi.org/v2/everything?q=antimicrobial resistance&apiKey=b0495b83a9274dfda5eaf729f7593a13').then((res) => {
    //    return res.json();
  //  }).then((data) => {

   //     let images = ['2-pseudomonas-aeruginosa-bacteria-cdcscience-photo-library.jpg', '1418859086_30426f75d2_z.jpgzz1_.jpeg', 'amr-1.jpg', 'amr-2.webp', 'amr-3.webp', 'iStock-1173815937.jpg', 'pseudomonas-aeruginosa-in-petri-dish.jpg', 'TEM-images-of-Pseudomonas-aeruginosa-with-30000x-magnification-a-without-any.png']
        //let news = document.getElementById('news');
     //   let content = [];
     //   for(let i = 0; i < images.length; i++){
      //      let container = document.createElement('div');
      //      container.classList.add('imgContainer');
        
       //     let img = document.createElement('img');
       //     img.setAttribute('src', images[i]);
      //      img.classList.add('newsImg');
        
        //    let link = document.createElement('a');
        //    link.classList.add('newsLink');
            //link.setAttribute('href', `${data.articles[i].url}`);
            //link.innerHTML = data.articles[i].title;
          //  link.innerHTML = 'Lorem Ipsum'
            
        //    container.appendChild(img);
       //     container.appendChild(link);
        
       //     content.push(container)
        
   //     if((i % 2 == 1) || ((i == images.length - 1) && (images.length % 2 == 1))){
    //        div = document.createElement('div');
     //       div.classList.add('img-row');
     //       for(let i = 0; i < content.length; i++){
      //          div.appendChild(content[i]);
      //      }
      //      content = [];
      //      news.appendChild(div);
    //    }
   //     }
//})


 let images = ['2-pseudomonas-aeruginosa-bacteria-cdcscience-photo-library.jpg', '1418859086_30426f75d2_z.jpgzz1_.jpeg', 'amr-1.jpg', 'amr-2.webp', 'amr-3.webp', 'iStock-1173815937.jpg', 'pseudomonas-aeruginosa-in-petri-dish.jpg', 'TEM-images-of-Pseudomonas-aeruginosa-with-30000x-magnification-a-without-any.png']
        //let news = document.getElementById('news');
        let content = [];
        for(let i = 0; i < images.length; i++){
            let container = document.createElement('div');
            container.classList.add('imgContainer');
        
            let img = document.createElement('img');
            img.setAttribute('src', images[i]);
            img.classList.add('newsImg');
        
            let link = document.createElement('a');
            link.classList.add('newsLink');
            //link.setAttribute('href', `${data.articles[i].url}`);
            //link.innerHTML = data.articles[i].title;
            link.innerHTML = 'Lorem Ipsum'
            
            container.appendChild(img);
            container.appendChild(link);
        
            content.push(container)
        
        if((i % 2 == 1) || ((i == images.length - 1) && (images.length % 2 == 1))){
            div = document.createElement('div');
            div.classList.add('img-row');
            for(let i = 0; i < content.length; i++){
                div.appendChild(content[i]);
            }
            content = [];
            news.appendChild(div);
        }
        }
