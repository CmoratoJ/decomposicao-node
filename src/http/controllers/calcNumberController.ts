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

  return reply.status(200).send({
    number,
  })
}
