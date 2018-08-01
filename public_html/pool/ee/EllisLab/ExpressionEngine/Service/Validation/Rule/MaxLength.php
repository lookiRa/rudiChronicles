<?php
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

namespace EllisLab\ExpressionEngine\Service\Validation\Rule;

use EllisLab\ExpressionEngine\Service\Validation\ValidationRule;

/**
 * Maximum Length Validation Rule
 */
class MaxLength extends ValidationRule {

	public function validate($key, $value)
	{
		list($length) = $this->assertParameters('length');

		$length = $this->numericOrConstantParameter($length);

		if ($length === FALSE)
		{
			return FALSE;
		}

		if (function_exists('mb_strlen'))
		{
			return (mb_strlen($value) > $length) ? FALSE : TRUE;
		}

		return (strlen($value) > $length) ? FALSE : TRUE;
	}

	public function getLanguageKey()
	{
		return 'max_length';
	}
}

// EOF
