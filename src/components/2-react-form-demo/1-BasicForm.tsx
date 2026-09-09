import { useForm } from 'react-hook-form';

type FormValues = {
  username: string;
  email: string;
  password: string;
};

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register('username', {
          required: 'Username wajib diisi',
          minLength: {
            value: 3,

            message: 'Nama minimal 3 karakter',
          },
          maxLength: {
            value: 10,
            message: 'Nama maksimal 10 karakter',
          },
        })}
        placeholder="Masukkan username"
      />
      <input
        type="email"
        {...register('email', {
          required: 'email wajib diisi',
        })}
        placeholder="Masukkan email"
      />
      <input
        type="password"
        {...register('password', {
          required: 'password wajib diisi',
        })}
        placeholder="Masukkan password"
      />
      {errors.username && <p>{errors.username.message}</p>}
      {errors.email && <p>{errors.email.message}</p>}
      {errors.password && <p>{errors.password.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
