import { useForm } from 'react-hook-form'; //https://react-hook-form.com/form-builder

export default function Contact(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({mode:"onBlur"});
    const onSubmit = data => {
        alert(JSON.stringify(data));
        console.log(data);
    }

    console.log(errors);

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName">First Name<span className="required-field">*</span> </label>
                    <input  id="firstName"
                            type="text" 
                            placeholder="First name" 
                            aria-invalid={errors.firstName ? "true" : "false"}
                            className={errors.firstName ? "input-invalid" : ""}
                            {...register("firstName", {required: true, maxLength: 80})} 
                        />
                    {errors.firstName && <p className="input-error">This is required</p>}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name<span className="required-field">*</span> </label>
                    <input  id="lastName"
                            type="text" 
                            placeholder="Last name" 
                            aria-invalid={errors.lastName ? "true" : "false"}
                            className={errors.lastName ? "input-invalid" : ""}
                            {...register("lastName", {required: true, maxLength: 100})} 
                        />
                    {errors.lastName && <p className="input-error">This is required</p>}
                </div>
                <div>
                    <label htmlFor="email">Email<span className="required-field">*</span> </label>
                    <input  id="email"
                            type="text" 
                            placeholder="Email" 
                            aria-invalid={errors.email ? "true" : "false"}
                            className={errors.email ? "input-invalid" : ""}
                            {...register("email", {required: true, pattern: /^\S+@\S+$/i})} 
                        />
                        {errors.email && <p className="input-error">This is required</p>}
                </div>
                <div>
                    <label htmlFor="subject">Subject:<span className="required-field">*</span> </label>
                    <input  id="subject"
                            type="text" 
                            placeholder="Subject" 
                            aria-invalid={errors.subject ? "true" : "false"}
                            className={errors.subject ? "input-invalid" : ""}
                            {...register("subject", {required: true, maxLength: 200})} 
                        />
                    {errors.subject && <p className="input-error">This is required</p>}
                </div>
                <div>
                    <label htmlFor="message">Message<span className="required-field">*</span> </label>
                    <textarea   id="message"
                                aria-invalid={errors.message ? "true" : "false"}
                                className={errors.message ? "input-invalid" : ""}
                                {...register("message", {required: true, maxLength: 600})} />
                    {errors.message && <p className="input-error">This is required</p>}
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
    );
  }