{
        let akey = '7a879ae248f24d79926ba69a6536e6fb';
        let url = `https://api.ipgeolocation.io/timezone?apiKey=${akey}&tz=Europe/Minsk`
        fetch(url)
        .then(respons => {
            return respons.json()
        })
        .then (function(data){
        console.log(data);
        time = data.time_24;
        transfomTime();
        console.log(time);
        });
        //СЕЙВИ
        
        
        let but = document.querySelector('.lefts');
        let rich = document.querySelector('.upscore');
        let mon = 0;
        let upg = 1;
        let ges = 1;
        let secm = 0;
        let arrt = [];
        let timeAn;
        
        function transfomTime(){
            for (let i = 0; i < time.length; i++) {
            if (time.charAt(i) != ':'){
                arrt.push(time.charAt(i));
                 }
            }

            timeAn = parseInt(arrt.join(''));
        }   
        setInterval(() => {
            mon += secm;
        }, 1000);
        
        but.addEventListener('mousedown', (e) => {
            e.preventDefault();
            mon += ges * upg;   
            rich.innerText = mon; 
        })
        
}