import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Contact.module.scss";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(errors);
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.contactForm__heading}>Contact Us</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="First Name"
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          <input
            placeholder="Last Name"
            {...register("lastName", { required: true, maxLength: 20 })}
          />
          <input
            placeholder="Email"
            {...register("email", {
              required: true,
            })}
          />

          <input
            placeholder="Phone Number"
            {...register("phoneNumber", {
              required: true,
              valueAsNumber: true,
              maxLength: 10,
            })}
          />

          <textarea
            placeholder="Feel free to put your queries here.."
            ref={register("query", {
              required: true,
            })}
            rows={10}
          />

          <button type="submit">Submit </button>
        </form>
      </div>
    </div>
  );
}
