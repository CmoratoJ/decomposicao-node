export interface PrimesRepository {
  create(data: number): Promise<void>
  findAllPrimes(): Promise<number[]>
}
