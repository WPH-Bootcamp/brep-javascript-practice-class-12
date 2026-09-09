import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  registerSchema,
  type RegisterFormValues,
} from '../../schemas/registerSchema';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function RegisterFormAnimate() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const [success, setSuccess] = useState<boolean>(false);

  async function onSubmit(data: RegisterFormValues) {
    console.log(data);
    setSuccess(true);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nama :</label>
        <input type="text" id="name" {...register('name')} />

        <AnimatePresence>
          {errors.name && (
            <motion.p
              key="name-error"
              initial={{
                opacity: 0,
                x: -5,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -5,
              }}
            >
              {errors.name.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input type="email" id="email" {...register('email')} />

        <AnimatePresence>
          {errors.email && (
            <motion.p
              key={'email-error'}
              initial={{
                opacity: 0,
                x: -5,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -5,
              }}
            >
              {errors.email.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div>
        <label htmlFor="password">Password :</label>
        <input type="password" id="password" {...register('password')} />

        <AnimatePresence>
          {errors.password && (
            <motion.p
              key={'password-error'}
              initial={{
                opacity: 0,
                x: -5,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -5,
              }}
            >
              {errors.password.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password :</label>
        <input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword')}
        />

        <AnimatePresence>
          {errors.confirmPassword && (
            <motion.p
              key={'confirmPassword-error'}
              initial={{
                opacity: 0,
                x: -5,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -5,
              }}
            >
              {errors.confirmPassword.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {success && (
          <motion.div
            key={'success'}
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            Registrasi Berhasil
          </motion.div>
        )}
      </AnimatePresence>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Loading' : 'Submit'}
      </button>
    </form>
  );
}
