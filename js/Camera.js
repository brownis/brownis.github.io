class Camera {
	constructor(bounds) { //bounds min x min y max x max y
		this.minx = bounds[0];
		this.miny = bounds[1];
		this.maxx = bounds[2];
		this.maxy = bounds[3];
	}
	reposition(plyr, objects) {
		while (plyr.x<this.minx) {
			plyr.x++;
			objects.forEach(function(obj) {
				obj.x++;
			});
		} while (plyr.y<this.miny) {
			plyr.y++;
			objects.forEach(function(obj) {
				obj.y++;
			});
		} while (plyr.x+plyr.w>this.maxx) {
			plyr.x--;
			objects.forEach(function(obj) {
				obj.x--;
			});
		} while (plyr.y+plyr.h>this.maxy) {
			plyr.y--;
			objects.forEach(function(obj) {
				obj.y--;
			});
		}
	}
}