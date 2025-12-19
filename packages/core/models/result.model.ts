import type { CommonError } from "../errors";

export type SuccessResult<T = void> = T extends void
	? {
			success: true;
		}
	: {
			success: true;
			data: T;
		};

export type FailureResult = {
	success: false | undefined;
	code: CommonError["code"];
	statusCode: CommonError["statusCode"];
	description: CommonError["description"];
	fieldErrors?: Record<string, string[]>;
};

export type Result<T = void> = SuccessResult<T> | FailureResult;

export function ok(): SuccessResult<void>;
export function ok<T>(data: T): SuccessResult<T>;
export function ok<T>(data?: T): SuccessResult<T> | SuccessResult<void> {
	if (data === undefined) {
		return {
			success: true,
		} as SuccessResult<void>;
	}
	return {
		success: true,
		data,
	} as SuccessResult<T>;
}

export function failure(
	error: CommonError,
	fieldErrors?: Record<string, string[]>,
): FailureResult {
	return {
		success: false,
		code: error.code,
		statusCode: error.statusCode,
		description: error.description,
		fieldErrors,
	};
}

const test1 = ok();
const test2 = ok({ bambang: 123 });
