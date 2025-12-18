import { HttpStatus } from "../constants";

export type CommonError = {
  code: `${string}.${string}`,
  description: string,
  statusCode: HttpStatus,
}

export const CommonErrors = {
  ValidationError: {
    code: 'common.validation_error',
    description: 'The request data is invalid.',
    statusCode: HttpStatus.UnprocessableEntity,
  }
} satisfies Record<string, CommonError>;
