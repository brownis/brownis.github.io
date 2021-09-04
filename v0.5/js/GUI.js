class HUD {}
HUD.Stormlight = class {
	constructor(src_file, xy) {
		this.spritesheet = new Spritesheet(src_file, [128, 16]);//128 16 is the manual width and height of each img in sprtsht
	}
}