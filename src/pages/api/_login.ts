import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

type Data = {
  email: string
  password: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body
  try {
    const newUser = await prisma.user.findFirst({
      where: {
        email: data.email,
        password: data.password,
      },
    })
    res.status(200).json({ msg: 'success', user: newUser })
  } catch (error) {
    console.log(error)
  }
}