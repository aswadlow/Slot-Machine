
	/*----- constants -----*/
//array of strings - name them whatever the image is 
    const IMAGES = [1, 2, 3, 4, 5]
	/*----- state variables -----*/

    
    let result = [null, null, null, null, null]; 


	/*----- cached elements  -----*/ //getting reference to the DOM - link to the view
    const reel1 = document.getElementById('reel1')
    const reel2 = document.getElementById('reel2')
    const reel3 = document.getElementById('reel3')
    const win = document.getElementById('win-message')
    const spinButton = document.querySelector('.spin-button')

	/*----- event listeners -----*/
     spinButton.addEventListener('click', function(){

    })

	/*----- functions -----*/

    function initSpin(){
        const reel1Idx = getRandomNumber(0, IMAGES.length)
    
        render()
    }

// reder looks at state and updates view 
    function render(){
        reel1.innerHTML = result[0]; 
    }

    function getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min) + min)

    }