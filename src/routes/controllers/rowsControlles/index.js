import { prisma } from '../../../../prisma.js'

export const createRow = async (req, res) => {
  const { ...data } = req.body

  // console.log(req.body)
  // return res.send('')

  try {
    const row = await prisma.rows.create({
      data: {
        ...data,
        createdAt: new Date(),
      },
    })

    return res.send(row)
  } catch (e) {
    console.log(e)
    throw new Error(
      'Falha ao conectar com o banco de dados, por favor tente novamente.'
    )
  }
}

export const getRows = async (req, res) => {
  try {
    const rows = await prisma.rows.findMany()
    return res.json(rows)
  } catch {
    throw new Error(
      'Falha ao conectar com o banco de dados, por favor tente novamente.'
    )
  }
}

export const toggleToUsedRow = async (req, res) => {
  const { id } = req.body

  try {
    await prisma.rows
      .update({
        where: {
          id,
        },
        data: {
          used: true,
          usedAt: new Date(),
        },
      })
      .then(par => res.send(par))

    return res.status(200)
  } catch (e) {
    console.log(e)
    throw new Error(
      'Falha ao conectar com o banco de dados, por favor tente novamente.'
    )
  }
}
