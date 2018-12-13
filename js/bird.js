// 新建鸟对象
function initBird() {
	var geometry = new THREE.CylinderGeometry( 50, 50, 100, 32 );
	var material = new THREE.MeshPhongMaterial({
		color: 0xff0000
	});
	var bird = new THREE.Mesh(geometry, material);
	bird.position.y = 50;	
	global.bird.birdObject = bird;
	scene.add(bird);
}


// 装载鸟的模型
function loadBirdModel(file) {

}

// 根据新坐标（形态）装载对应模型（可能）
function refreshBrid() {

}
