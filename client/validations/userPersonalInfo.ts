import { z } from "zod";


export const personalInfoSchema = z.object({
//    gender: z.string().nonempty({ message: 'Gender is required!' }),
  fullName: z.string().nonempty({ message: 'Full name is required!' }),
  DOB: z.string().nonempty({message:'DOB is required'}),
  currentAddress: z.string().nonempty({ message: 'Current address is required!' }),
  durationAtAddress: z.string().nonempty({ message: 'Duration at address is required!' }),
  aboutYourSelf: z.string().nonempty({ message: 'About yourself is required!' }),
  });

