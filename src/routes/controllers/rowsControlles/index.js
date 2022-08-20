import { prisma } from '../../../../prisma.js'

export const createRow = async (req, res) => {
  const { ...data } = req.body

  // console.log(req.body)
  // return res.send('')

  try {
    const row = await prisma.rows.create({
      data: {
        ...data,
        date: new Date(),
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
