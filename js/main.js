function gameLoop() {
	//Input handling
	player.handleInputs();
	//logic
	//	Update player positions
	player.updateY();
	platforms.forEach(function(plat) {
		player.playerCollideY(plat);
	});
	if (player.respawn_point[1]<200) {
		player.respawn();
		camera.center(player, platforms);
	}
	player.updateX();
	platforms.forEach(function(plat) {
		player.playerCollideX(plat);
	});
	//	attempt to move camera
	camera.reposition(player, platforms);
	//render
	ctx.clearRect(0, 0, _SIZE[0], _SIZE[1]);
	platforms.forEach(function(plat) {
		plat.draw();
	});
	player.draw();
}
setInterval(gameLoop, 16);