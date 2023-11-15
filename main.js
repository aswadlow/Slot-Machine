
	/*----- constants -----*/
//array of strings - name them whatever the image is 
    const images = ['mac.webp', 'dennis.jpeg', 'frank.webp', 'charlie.avif', 'dee.webp' ]

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
        result.push(getRandomNumber(0, images.length))
        result.push(getRandomNumber(0, images.length))
        result.push(getRandomNumber(0, images.length))
        
        setTimeout(() => {
        render1()
    }, 500)
        setTimeout(() => {
        render2()
    }, 1500)
        setTimeout(() => {
        render3()
        renderJackpot()
    }, 2500)
        
    }

// reder looks at state and updates view 
    function render1(){
        //reel1.src = result[0];
        reel1.src = images[result[0]]
    }

    function render2(){ 
        reel2.src = images[result[1]];
    }

    function render3(){
        reel3.src = images[result[2]];
    }

    function renderJackpot(){
        if(result[0] === result[1] && result[0] === result[2]){
            win.innerText = "JACKPOT!"
        }else{
            win.innerText = "SPIN AGAIN"
        }
    }

    function getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min) + min)
    }

