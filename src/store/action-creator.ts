export const createAction = <TType, TPayload>(
  type: TType,
  payload: TPayload
) => ({ type, payload });
