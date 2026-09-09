import { z } from 'zod';

const loginSchema = z.object({
  email: z.email('Email tidak validd!!'),
  password: z.string().min(8, 'Password minimal 8 karakter'),
});

type LoginType = z.infer<typeof loginSchema>;

export default function ZodDemo() {
  function handleValidation() {
    const data: LoginType = {
      email: 'ucup',
      password: '234',
    };

    const result = loginSchema.safeParse(data);

    if (result.success) {
      console.log('VALID :', result.data);
    } else {
      console.error('INVALID :', result.error.issues);
    }
  }
  return <button onClick={handleValidation}>Validate</button>;
}
