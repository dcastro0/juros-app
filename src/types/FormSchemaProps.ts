import { z } from "zod";
import { formSchema } from "../schema/formSchema";

type FormSchemaType = ReturnType<typeof formSchema>;

type FormSchemaProps = z.infer<FormSchemaType>;

export { FormSchemaProps };
