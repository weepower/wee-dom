import $ from 'index';

describe('$', () => {
	before(() => {
		let div = document.createElement('div');

		div.textContent = 'test';
		div.classList = 'test';
		document.querySelector('body').appendChild(div);
	});

	after(() => {
		document.querySelector('body').innerHTML = '';
	});

	it('should return a new Wee selection object', () => {
		expect($('.test').sel).to.equal('.test');
		expect($('.test')[0].innerHTML).to.equal('test');
	});
});