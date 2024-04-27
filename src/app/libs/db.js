import { PrismaClient } from '@prisma/client'

// Función para crear una instancia única de PrismaClient
const prismaClientSingleton = () => {
  return new PrismaClient()
}

// Asigna el objeto global a una variable local
const globalForPrisma = globalThis

// Inicializa Prisma utilizando una instancia única o la instancia global existente
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

// Exporta la instancia de Prisma
export default prisma

// Si no estamos en un entorno de producción, asigna la instancia de Prisma a la variable global prismaGlobal
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
