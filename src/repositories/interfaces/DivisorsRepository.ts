export interface DivisorsRepository {
  create(data: number): Promise<void>
  findAllDivisors(): Promise<number[]>
}
