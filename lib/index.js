import { $, $chain } from 'wee-core/lib/chain';
import * as W from './methods';

// Add chainable methods to $
$chain({
	/**
	 * Add classes to each matching selection
	 *
	 * @param {(function|string)} value
	 * @returns {$}
	 */
	addClass(value) {
		W.$addClass(this, value);

		return this;
	}
});

export default $;