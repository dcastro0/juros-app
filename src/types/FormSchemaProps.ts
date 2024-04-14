import { z } from "zod";
import { formSchema } from "../schema/formSchema";

type FormSchemaProps = z.infer<typeof formSchema>

export {FormSchemaProps}