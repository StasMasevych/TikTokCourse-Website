import LineGradient from '../components/LineGradient';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
/* import JSConfetti from 'js-confetti'; */

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  /*   const jsConfetti = new JSConfetti(); */

  const onSubmit = async (e) => {
    console.log('~ e', e);
    /* fireConfetti(); */
    /* jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    }); */
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="контакт" className="contact pt-18 pb-18 mb-10">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex w-full justify-end"
      >
        <div>
          <p className="font-playfair text-4xl font-semibold">
            <span className="text-yellow">Отримай</span> безкоштовну
            консультацію ! 🙌
          </p>
          <div className="my-5 flex md:justify-end">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="mt-5 gap-16 md:flex md:justify-between">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex basis-1/2 justify-center"
        >
          <img
            className="contact__image"
            src="../assets/DALL·E 2024-08-25 13.08.35 - A realistic image for a TikTok course landing page featuring a fashionable young woman in a cool, modern flat. The woman is using an iPhone to create .webp"
            alt="contact"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-10 basis-1/2 md:mt-0"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/stasmasevych@gmail.com"
            /* action="https://getform.io/f/a8e2021d-a0e2-404c-bd75-b6db68e22d87" */
            method="POST"
          >
            <input
              className="w-full bg-blue p-3 font-semibold"
              type="text"
              placeholder="Ім'я та прізвище"
              {...register('name', {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-red">
                {errors.name.type === 'required' && 'This field is required.'}
                {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
              </p>
            )}

            <input
              className="mt-5 w-full bg-blue p-3 font-semibold"
              type="text"
              placeholder="Email"
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-red">
                {errors.email.type === 'required' && 'This field is required.'}
                {errors.email.type === 'pattern' && 'Invalid email address.'}
              </p>
            )}

            <PhoneInput
              className="mt-5 w-full bg-blue p-3 font-semibold"
              /* type="number" */
              defaultCountry="UA"
              placeholder="Номер телефону"
              {...register('name', {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-red">
                {errors.name.type === 'required' && 'This field is required.'}
                {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
              </p>
            )}

            <textarea
              className="mt-5 w-full bg-blue p-3 font-semibold"
              name="message"
              placeholder="Опишіть Ваше питання з якого потрібна консультація"
              rows="4"
              cols="50"
              {...register('message', {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="mt-1 text-red">
                {errors.message.type === 'required' &&
                  'This field is required.'}
                {errors.message.type === 'maxLength' &&
                  'Max length is 2000 char.'}
              </p>
            )}

            <button
              className="mt-5 bg-yellow p-5 font-semibold text-deep-blue transition duration-500 hover:bg-red hover:text-white"
              type="submit"
            >
              ВІДПРАВИТИ
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
