import SectionTitle from "../common/section-title";
import { changane } from "@/app/styles/font";
import styles from "./contact.module.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  destination: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  yourName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  selectDestination: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  selectCategory: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  textarea: Yup.string().required("Required"),
});

export default function Contact() {
  const handleSubmit = (values) => {
    console.log("form-submit", values);
  };

  return (
    <section
      className={styles.contact}
      style={{
        backgroundImage: ` url('/assets/images/contact-background.jpg')`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12 ">
            <SectionTitle
              customStyle={styles.center_title}
              restrictStyle={true}
              title="Join our next destination"
              subTitle="Let’s build a community"
            />
            <div className={styles.contact_form}>
              <h4 className={`${changane.className} mb-1`}>
                Share your travels
              </h4>
              <p>
                Suggest a new travel destination that you want to see and we
                will feature it in our blog.
              </p>
              <Formik
                initialValues={{
                  destination: "",
                  selectDestination: "",
                  yourName: "",
                  email: "",
                  selectCategory: "",
                  textarea: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className={styles.form_group}>
                      <Field
                        name="destination"
                        placeholder="Destination name"
                        className={`form-control ${styles.input_wrap}`}
                      />
                      {errors.destination && touched.destination && (
                        <div>{errors.destination}</div>
                      )}
                    </div>

                    <div className={styles.form_group}>
                      <Field
                        as="select"
                        className={`form-control ${styles.input_wrap}`}
                        name="selectDestination"
                      >
                        <option>Country of Destination</option>
                        <option>Iceland</option>
                        <option>Italy</option>
                        <option>Dubai</option>
                        <option>Patagonia</option>
                      </Field>
                      {errors.selectDestination && touched.selectDestination && (
                        <div>{errors.selectDestination}</div>
                      )}
                    </div>

                    <div className={styles.form_group}>
                      <Field
                        name="yourName"
                        placeholder="Your name"
                        className={`form-control ${styles.input_wrap}`}
                      />
                      {errors.yourName && touched.yourName && (
                        <div>{errors.yourName}</div>
                      )}
                    </div>

                    <div className={styles.form_group}>
                      <Field
                        as="select"
                        name="selectCategory"
                        className={`form-control ${styles.input_wrap}`}
                      >
                        <option>Shooting category</option>
                        <option>abc</option>
                        <option>def</option>
                      </Field>
                      {errors.selectCategory && touched.selectCategory && (
                        <div>{errors.selectCategory}</div>
                      )}
                    </div>

                    <div className={styles.form_group}>
                      <Field
                        name="email"
                        placeholder="Email address"
                        className={`form-control ${styles.input_wrap}`}
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                    </div>

                    <div className={styles.form_group}>
                      <Field
                        name="textarea"
                        as="textarea"
                        placeholder="Describe what kind of photos you want to focus on"
                        className={`form-control ${styles.input_wrap} ${styles.textarea}`}
                      />
                      {errors.textarea && touched.textarea && (
                        <div>{errors.textarea}</div>
                      )}
                    </div>

                    <button
                      className={`darkButton ${styles.submit_btn}`}
                      type="submit"
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
