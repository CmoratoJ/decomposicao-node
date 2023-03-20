export class InMemoryDivisorsRepository {
  public divisors: number[] = []

  async create(data: number) {
    this.divisors.push(data)
  }

  async findAllDivisors() {
    return this.divisors
  }
}
