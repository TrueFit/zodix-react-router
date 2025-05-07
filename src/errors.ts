const DEFAULT_ERROR_MESSAGE = 'Bad Request';
const DEFAULT_ERROR_STATUS = 400;

export function createErrorResponse(
  options: {
    message?: string;
    status?: number;
  } = {}
): Response {
  const statusText = options?.message || DEFAULT_ERROR_MESSAGE;
  const status = options?.status || DEFAULT_ERROR_STATUS;
  const body = JSON.stringify({ message: statusText });
  return new Response(body, {
    status,
    statusText,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
