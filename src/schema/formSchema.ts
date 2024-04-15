import { z } from "zod";

const formSchema = (calculo: string) => {
  const capitalLength = calculo === "capital" ? 0 : 1;
  const taxaLength = calculo === "taxaJuros" ? 0 : 1;
  const tempoLength = calculo === "tempo" ? 0 : 1;
  const montanteLength = calculo === "montante" ? 0 : 1;
  return z.object({
    capital: z
      .string()
      .min(capitalLength, { message: "Campo obrigatório!" })
      .default(""),
    taxaJuros: z
      .string()
      .min(taxaLength, { message: "Campo obrigatório!" })
      .default(""),
    tempo: z
      .string()
      .min(tempoLength, { message: "Campo obrigatório!" })
      .default(""),
    montante: z
      .string()
      .min(montanteLength, { message: "Campo obrigatório!" })
      .default(""),
  });
};

export { formSchema };
