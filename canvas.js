		let frame = 0;
		const canvas = document.querySelector(".canvas");
    	const ctx = canvas.getContext("2d");
    	const img = new Image();
    	img.src = "sprite2.png";
    	let leaveArray = [];
    	img.onload = function(){
    	 	canvas.width = window.innerWidth ;
       		canvas.height = window.innerHeight ;
       		class Leave{
      			constructor(){
	       			this.size = Math.random()*10 + 15;
           			this.speedX = -Math.random()*0.25 - 0.4;
           			this.speedY = Math.random()*0.25 + 0.4;
 					if (Math.random() < 0.5) {
                        this.x = canvas.width;
                        this.y = Math.random() * canvas.height;
                    } else {
                        this.x = Math.random() * canvas.width;
                        this.y = 0;
                    	}
           		}
				update(){
						this.x += this.speedX;
						this.y += this.speedY;
				}
				draw(){
		    			ctx.drawImage(img, frame*200, 0, 200, 100, this.x, this.y, this.size, this.size);
					}
           		}
           		
           	function adder(){
           		leaveArray.push(new Leave());
           		setTimeout(adder, 500);
           	}
           	adder();

           	function handle(){
            	ctx.clearRect(0,0,canvas.width,canvas.height);
            		
         		for(let i = 0; i < leaveArray.length; i++){
           			leaveArray[i].draw();
           			leaveArray[i].update();
           		}
           		requestAnimationFrame(handle);
           	}
    		requestAnimationFrame(handle);
    	};
