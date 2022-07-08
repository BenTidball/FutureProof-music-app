import react, {useEffect} from 'react';
import smoke from '../../img/smoke.PNG';
import smoke2 from '../../img/smoke2.PNG';
import smoke3 from '../../img/smoke3.PNG';
import smoke4 from '../../img/smoke4.PNG';

function Background(){
    const background = document.querySelector('body');
    background.style.backgroundImage = `url(${smoke3})`;
    let counter = 0;

    useEffect(() => { 
        let url;

        const interval = setInterval(() => { 

            switch (counter) {
                case 0: 
                    url = smoke;
                    break;
                case 1: 
                    url = smoke2;
                    break;
                case 2: 
                    url = smoke3;
                    break;
                case 3: 
                    url = smoke4;
                    break;
                default:
                    url = smoke;
                    break;
            }

            background.style.backgroundImage = `url(${url})`; 

            counter >= 3 ? counter = 0 : counter++;
        }, 1000 * 8); 
        return () => clearInterval(interval); 
    }, [])
}

export default Background;