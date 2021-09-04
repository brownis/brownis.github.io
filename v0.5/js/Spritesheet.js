class Spritesheet {
	constructor(src_file, wh) {//the source file and the width height of one sprite
		this.img = new Image(512, 112);
		this.img.onload = function() {
			//below makes a memory canvas
			var canvas = document.createElement('canvas');
			var cont = canvas.getContext('2d');
			canvas.width = this.w;
			canvas.height = this.h;
			
			this.imageList = []; //for storing all images from the spritesheet
			console.log(this.img.width);
			for (var y=0; y<this.img.height; y+=this.h) {
				for (var x=0; x<this.img.width; x+=this.w) {
					console.log(x, y);
					var tempimg = new Image(this.w, this.h);
					tempimg.crossOrigin = "Anonymous";
					console.log(this.img);
					console.log(tempimg);
					cont.drawImage(this.img, -x, -y);
					//cont.fillRect(0, 0, 50, 8);
					var data = canvas.toDataURL();
					console.log(data);
					tempimg.src = data;
					this.imageList.push(tempimg);
				}
			}
			console.log(this.imageList);
		}.bind(this);
		this.img.src = src_file;
		this.w = wh[0];
		this.h = wh[1];	
	}
}