import { z } from "zod"

const formSchema = z.object({
  capital: z.string().default("0"),
  taxaJuros:  z.string().default(""),
  tempo: z.string().default(""),
  montante: z.string().default(""),

}).refine(data=> {
  const filledFieldsCount = Object.values(data).filter(value => value.trim() !== "").length;
  return filledFieldsCount >= 3;
})

export {formSchema}