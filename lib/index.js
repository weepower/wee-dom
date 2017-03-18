import { _$, _win } from 'wee-core/lib/variables';
import { $toArray } from 'wee-core/lib/types';
import { $ } from 'wee-core/lib/dom';

/**
 * Cast selection as Wee object
 *
 * @private
 * @param {($|HTMLElement|string)} sel
 * @param {($|HTMLElement|string)} [context=document]
 */
let Get = function(sel, context) {
		if (sel) {
			var els = Array.isArray(sel) ?
					sel :
					$toArray($(sel, context)),
				i = 0;

			for (; i < els.length; i++) {
				var el = els[i];

				if (el) {
					[].push.call(this, el);
				}
			}

			this.sel = sel;
		}
	},
	$dom;

/**
 * Create chainable Wee object from selection
 *
 * @param {(HTMLElement|string)} sel
 * @param {object} [context=document]
 */
$dom = _win[_$] = function(sel, context) {
	return new Get(sel, context);
};



export default $dom;