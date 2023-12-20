import { z } from "zod";


export const financialInfoSchema = z.object({

    additionalSavingInvestment: z.string().nonempty({ message: ' required!' }),
  });