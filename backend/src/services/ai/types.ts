export interface AIProvider {
  generate(
    prompt: string
  ): Promise<any>;
}