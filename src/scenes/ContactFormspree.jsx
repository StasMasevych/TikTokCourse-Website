import { useForm as useFormFormspree, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';
import { FaTimes } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import contactImage from '../assets/DALL·E 2024-08-25 19.34.33 - A realistic and vibrant image designed for SEO and social media meta tags related to a TikTok course. The scene features a happy, stylish young woman .webp';
import { useState } from 'react';

function ContactForm() {
  /*  const [openModal, setOpenModal] = useState(true); */
  const [show, onClose] = useState(true);

  const [state, handleSubmit] = useFormFormspree('mjkbjqza');
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  /* function handleOnClose(e) {
    e.preventDefault(); 
    e.stopPropagation(); 
    onClose(false);
    window.location.reload();
  } */

  if (state.succeeded) {
    return (
      <div className="modal" onClick={onClose}>
        {show && (
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Дякуємо!🥰</h2>
              {/* <button onClick={handleOnClose} className="close-button">
                &times;
              </button> */}
            </div>
            <div className="modal-body">
              <p>Реєстрація на безкоштовну консультацію активна💥</p>
              <p>
                Скоро ми з вами звʼяжемося та узгодимо зручний час для
                проведення онлайн-зустрічі👩‍💻
              </p>
            </div>
          </div>
        )}
      </div>
    );

    /* <p>Дякую за запис!🥰 До скорої зустрічі!🥳</p> */
  }

  return (
    <section id="контакт" className="contact pt-18 pb-18 mb-10">
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
          <img className="contact__image" src={contactImage} alt="contact" />
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
          <form onSubmit={handleSubmit}>
            <input
              className="rounded-custom  w-full bg-blue p-3 font-semibold"
              type="text"
              placeholder="Ім'я"
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
              className="rounded-custom mt-5 w-full bg-blue p-3 font-semibold"
              type="email"
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

            {/* <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            /> */}

            <PhoneInput
              className="rounded-custom mt-5 w-full bg-blue p-3 font-semibold"
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
              className="rounded-custom mt-5 w-full bg-blue p-3 font-semibold"
              name="message"
              placeholder="Пропишіть своїми словами в чому проблема профілю на вашу думку та головне до якого результату бажаєте прийти ❤️"
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

            {/* <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            /> */}

            <button
              className="rounded-custom mt-5 bg-yellow p-5 font-semibold text-deep-blue transition duration-500 hover:bg-red hover:text-white"
              type="submit"
            >
              ВІДПРАВИТИ
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;
