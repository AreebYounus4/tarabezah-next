import { z } from 'zod';

export const addGuestSchema = z.object({
  name: z.string().min(1, { message: 'Client name is required' }),
  phone: z.string().min(1, { message: 'Client phone is required' }),
  email: z.string().optional(),
  birthday: z.string().optional(),
  sources: z.array(z.number()).optional(),
  tags: z.array(z.number()).optional(),
  clientNotes: z.string().optional(),
});

export const addReservationFormSchema = z.object({
  clientId: z.string().min(1, { message: 'Client is required' }),
  eventDate: z.string().optional(),
  eventTime: z.string().optional(),
  numberOfGuests: z.number({
    required_error: "Number of guests is required",
    invalid_type_error: "Please enter a valid number",
  }).min(1, { message: 'Must have at least 1 guest' }),
  shiftId: z.string().optional(),
  tags: z.array(z.number()).optional(),
  additionalNotes: z.string().optional(),
  reminderTime: z.string().optional(),
});
