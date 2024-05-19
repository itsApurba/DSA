/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    const size = flowerbed.length;
    let current = 0;
	for(var i = 0; i <= size; i++) {
		if (i < size && flowerbed[i] == 0) {
			current++;
			if (i == 0) current++;
			if (i == size - 1) current++;
		} else {
			n -= Math.trunc((current - 1) / 2);
			if (n <= 0) return true;
			current = 0;
		}
	}
	return false;
};