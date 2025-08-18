export interface IUseCase<InputType, ReturnType> {
  execute(input: InputType): Promise<ReturnType>;
}
