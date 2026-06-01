import * as z from "zod";

const Rules = {
  LoginRule: z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  }),

  ProductRules: z.object({
    pname: z.string().nonempty("Product name required*"),
    description: z.string().nonempty("Description required*"),

    price: z.coerce.number().min(0.01, "Price required*"),

    dprice: z.coerce.number().optional(),

    category: z.string().nonempty("Category required*"),
    brand: z.string().nonempty("Brand required*"),

    qty: z.coerce
      .number()
      .int("Quantity must be a whole number")
      .min(1, "required*"),

    size: z.string().nonempty("Size required*"),
    color: z.string().nonempty("Color required*"),
    gender: z.string().nonempty("Gender type required*"),
    material: z.string().nonempty("Material required*"),

    slug: z.string().optional(),
    sku: z.string().optional(),
    tag: z.string().optional(),
  }),
};

export default Rules;
