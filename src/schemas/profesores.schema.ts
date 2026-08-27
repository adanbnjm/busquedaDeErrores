import { z } from "zod";

export const profesorSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido"),
  email: z
    .string()
    .regex(/^\S+@\S+\.[a-zA-Z]{2,}$/, "Formato de email invalido")
    .min(1, "El email es requerido"),
  telefono: z.string().optional(),
});

export const actualizarProfesorSchema = profesorSchema.partial();
