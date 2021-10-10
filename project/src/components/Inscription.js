import { useEffect, useState } from "react";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";



function Inscription() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const history = useHistory();
  
  useEffect(() => {
    const getUsername = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        console.log(response.data);
        setUsers(response.data.data);
        setLoading(false);
      } catch (error) {
        // setLoading2(false);

        setError(false);
      }
    };
    getUsername();
  }, []);
  return (
    <div>
      <Formik
        initialValues={{ name: "", username: "", email: "", password: "" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(50).required(),
          userName: Yup.string().required(),
          email: Yup.string().email().required(),
          phone: Yup.string().required(),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const response = await axios.post("http://localhost:5000/users", {
            email: values.email,
            name: values.name,
            username: values.username,
            password: values.password,
          });
          setUsers(response.data.data);
          console.log("values=", values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <div>
              <form onSubmit={handleSubmit}>
                {errors.email && touched.email && <div> {errors.email} </div>}
                {errors.name && touched.name && <div> {errors.name} </div>}
                {errors.username && touched.username && (
                  <div> {errors.username} </div>
                )}
                {errors.password && touched.password && <div> {errors.password} </div>}
                <label>Email : </label>
                <input
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />

                <label> Name : </label>
                <input
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <label> Username : </label>
                <input
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <label> Password : </label>
                <input
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
            
             <button  type="submit" > Submit </button>
             
              </form>
              
            </div>
          );
        }}
      </Formik>
      </div>
  )}

export default Inscription;