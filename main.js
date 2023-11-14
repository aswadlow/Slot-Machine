
	/*----- constants -----*/
//array of strings - name them whatever the image is 
    const IMAGES = [1, 2, 3, 4, 5]
	/*----- state variables -----*/

    
    let result = [null, null, null]; 


	/*----- cached elements  -----*/ //getting reference to the DOM - link to the view
    const reel1 = document.getElementById('reel1')
    const reel2 = document.getElementById('reel2')
    const reel3 = document.getElementById('reel3')
    const win = document.getElementById('win-message')
    const spinButton = document.querySelector('.spin-button')

	/*----- event listeners -----*/
     spinButton.addEventListener('click', initSpin)

	/*----- functions -----*/

    function initSpin(){
        result = [];
        result.push(getRandomNumber(0, IMAGES.length))
        result.push(getRandomNumber(0, IMAGES.length))
        result.push(getRandomNumber(0, IMAGES.length))
        
        render()
        renderJackpot()
    }

// reder looks at state and updates view 
    function render(){
        reel1.innerHTML = result[0]; 
        reel2.innerHTML = result[1];
        reel3.innerHTML = result[2];
    }

    function renderJackpot(){
        if(result[0] !== result[1] || result[2]){
            win.innerText = "SPIN AGAIN"
        }else{
            win.innerText = "JACKPOT!"
        }
    }

    function getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min) + min)
    }

