// Types
export const VALIDATOR_TYPE_REQUIRE = "REQUIRE";
export const VALIDATOR_TYPE_MINLENGTH = "MINLENGTH";
export const VALIDATOR_TYPE_MAXLENGTH = "MAXLENGTH";
export const VALIDATOR_TYPE_MIN = "MIN";
export const VALIDATOR_TYPE_MAX = "MAX";
export const VALIDATOR_TYPE_EMAIL = "EMAIL";
export const VALIDATOR_TYPE_FILE = "FILE";

// Error messages
export const VALIDATOR_MSG_REQUIRE = "Required field";
export const VALIDATOR_MSG_EMAIL = "Please enter a valid email";

export const VALIDATOR = (type, msg, val = 0) => {
	return ({ type: type, msg: msg, val: val });
};

// Bundles
export const VALIDATOR_BUNDLE_REQUIRE = () =>
	VALIDATOR(VALIDATOR_TYPE_REQUIRE, VALIDATOR_MSG_REQUIRE);
export const VALIDATOR_BUNDLE_EMAIL = () =>
	VALIDATOR(VALIDATOR_TYPE_EMAIL, VALIDATOR_MSG_EMAIL);
export const VALIDATOR_BUNDLE_MINLENGTH = (val) =>
	VALIDATOR(VALIDATOR_TYPE_MINLENGTH, `Please enter at least ${val} characters`, val);
export const VALIDATOR_BUNDLE_MAXLENGTH = (val) =>
	VALIDATOR(VALIDATOR_TYPE_MAXLENGTH, `Too long. maximum of ${val} characters`, val);

export const validate = (value, validators) => {
	// [{type: '', err: ''}]
	let isValid = true;
	let errorMsg = "";
	for (const validator of validators) {
		if (validator.type === VALIDATOR_TYPE_REQUIRE) {
			isValid = isValid && value.trim().length > 0;
			errorMsg = validator.msg ? validator.msg : "Required field";
			if (!isValid) return [isValid, errorMsg];
		}
		if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
			isValid = isValid && value.trim().length >= validator.val;
			errorMsg = validator.msg ? validator.msg : "Not long enough";
			if (!isValid) return [isValid, errorMsg];
		}
		if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
			isValid = isValid && value.trim().length <= validator.val;
			errorMsg = validator.msg ? validator.msg : "too long";
			if (!isValid) return [isValid, errorMsg];
		}
		if (validator.type === VALIDATOR_TYPE_MIN) {
			isValid = isValid && +value >= validator.val;
			if (!isValid) return [isValid, errorMsg];
		}
		if (validator.type === VALIDATOR_TYPE_MAX) {
			isValid = isValid && +value <= validator.val;
			if (!isValid) return [isValid, errorMsg];
		}
		if (validator.type === VALIDATOR_TYPE_EMAIL) {
			isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
			errorMsg = validator.msg ? validator.msg : "Please enter a valid email";
			if (!isValid) return [isValid, errorMsg];
		}
	}
	return [isValid, errorMsg];
};
