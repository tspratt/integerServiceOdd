'use strict';

const randMS = () => {
	return Math.floor(Math.random() * 11) * 10;
};

const nextInt = (lastInt) => {
	return new Promise((resolve, reject) => {
		lastInt = lastInt || '0';
		lastInt = parseInt(lastInt);
		let nextInt = 0;
		if (lastInt === 0) {
			nextInt = 1;
		}
		else if (lastInt % 2 === 0) {
			nextInt = lastInt + 1;
		} else {
			nextInt = lastInt + 2;
		}
		const randDelay = randMS();
		setTimeout(() => {
			try {
				console.log('odd return:', 'nextInt', nextInt,'delay', randDelay);
				resolve(nextInt);
			}
			catch (err) {
				reject(err)
			}
		}, randDelay);
	});
};

exports.nextInt = nextInt;