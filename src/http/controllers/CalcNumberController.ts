import { makeDivisorsService } from '@/services/factories/MakeDividorsService'
import { makePrimesService } from '@/services/factories/MakePrimesService'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function calcNumberController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const calcNumberBodySchema = z.object({
    number: z.number(),
  })

  const { number } = calcNumberBodySchema.parse(request.body)

  try {
    const calcDivisorsService = makeDivisorsService()
    const calcPrimesService = makePrimesService()

    const divisors = await calcDivisorsService.execute({ number })
    const primes = await calcPrimesService.execute({ divisors })

    return reply.status(200).send({
      divisors,
      primes,
    })
  } catch (err) {
    return reply.status(409).send()
  }
}
