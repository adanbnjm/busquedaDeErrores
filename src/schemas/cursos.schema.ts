import { z } from "zod";

export const cursoSchema = z.object({
  nombre: z
  .string({message: "El nombre es requerido",})
  .trim()
  .min(3, "El nombre debe tener más de 3 letras"),
  descripcion: z
  .string()
  .trim()
  .optional(),
});

export const actualizarCursoSchema = cursoSchema.partial();
