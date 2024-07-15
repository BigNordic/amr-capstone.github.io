fetch('https://api.fda.gov/drug/enforcement.json?sort=report_date:desc&search=reason_for_recall:"microbial"&limit=8').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data.results);

        let images = ['2-pseudomonas-aeruginosa-bacteria-cdcscience-photo-library.jpg', '1418859086_30426f75d2_z.jpgzz1_.jpeg', 'amr-1.jpg', 'amr-2.webp', 'amr-3.webp', 'iStock-1173815937.jpg', 'pseudomonas-aeruginosa-in-petri-dish.jpg', 'TEM-images-of-Pseudomonas-aeruginosa-with-30000x-magnification-a-without-any.png']
        let news = document.getElementById('news');
        let content = [];
        for(let i = 0; i < data.results.length; i++){
            let container = document.createElement('div');
            container.classList.add('imgContainer');
        
            let img = document.createElement('img');
            img.setAttribute('src', images[i]);
            img.classList.add('newsImg');
        
            let p = document.createElement('div');
            p.classList.add('newsLink');
            let product_decription;
            let status = data.results[i].product_description;
                if(status.indexOf(',') > -1){
                    product_decription = status.split(',')[0] + status.split(',')[1];
                }

            let originalTime = data.results[i].recall_initiation_date;
            let firstSlash = originalTime.substring(0,4) + '/' + originalTime.substring(4)
            let time = firstSlash.substring(0,7) + '/' + firstSlash.substring(7)

                let newP;
                let br;


                newP = document.createElement('p');
                br = document.createElement('br');
                if(data.results[i].openfda.brand_name !== undefined){
                newP.innerHTML = `Product: ${data.results[i].openfda.brand_name}, ${product_decription}`
                } else {
                    newP.innerHTML = `Product: ${product_decription}`
                }
                p.appendChild(newP)
                p.appendChild(br)

                newP = document.createElement('p');
                br = document.createElement('br');
                newP.innerHTML = `Company: ${data.results[i].recalling_firm}`
                p.appendChild(newP)
                p.appendChild(br)
                
                newP = document.createElement('p');
                br = document.createElement('br');
                newP.innerHTML = `Reason: ${data.results[i].reason_for_recall}`
                p.appendChild(newP)
                p.appendChild(br)

                newP = document.createElement('p');
                br = document.createElement('br');
                newP.innerHTML = `Inital Recall: ${time}`
                p.appendChild(newP)
                p.appendChild(br)

                newP = document.createElement('p');
                br = document.createElement('br');
                newP.innerHTML = `Classification: ${data.results[i].classification}`
                p.appendChild(newP)
                p.appendChild(br)
            
            container.appendChild(img);
            container.appendChild(p);

        
            container.addEventListener('click', ()=>{
                let page = window.open(`https://www.fda.gov/drugs/drug-safety-and-availability/drug-recalls`)
                page.addEventListener('DOMContentLoaded', () => {
                    console.log(':(')
                    localStorage.setItem('edit-search-api-fulltext', data.results[i].openfda.brand_name)
                })
            })

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
    
})

let hideIncrement = 0;

function readMore(e){
    let parent = e.target.parentElement;

    if(hideIncrement % 2 == 0){
    parent.children[parent.children.length - 1].classList.remove('hide')
    } else {
    parent.children[parent.children.length - 1].classList.add('hide')
    }
    hideIncrement += 1;
}
