import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator(
    z.object({
      name: z.string().min(1),
      email: z.string().email(),
      subject: z.string().min(1),
      message: z.string().min(1),
    }),
  )
  .handler(async ({ data }) => {
    const { sendContactEmail } = await import("../contact-email.server");
    return sendContactEmail(data);
  });