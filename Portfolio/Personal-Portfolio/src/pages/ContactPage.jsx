import { useEffect, useRef } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";

function ContactPage() {
    const actionData = useActionData();
    const navigation = useNavigation();
    const formRef = useRef();
    const isSubmitting = navigation.state === 'submitting';

    const errors = actionData && actionData.errors ? actionData.errors : {};

    // Clear the fields once the message has been saved
    useEffect(() => {
        if (actionData && actionData.success)
            formRef.current.reset();
    }, [actionData]);

    return (
        <section>
            <h1>Contact Me</h1>
            <p>Send me a message and I will get back to you.</p>

            {actionData && actionData.success && (
                <p className="success-message">Thank you! Your message was sent.</p>
            )}
            {errors.form && <p className="error-message">{ errors.form }</p>}

            <Form method="post" ref={ formRef } noValidate>
                <p>
                    <label htmlFor="name">Your Name</label>
                    <input id="name" type="text" name="name" />
                    {errors.name && <span className="error-text">{ errors.name }</span>}
                </p>

                <p>
                    <label htmlFor="email">Your Email</label>
                    <input id="email" type="email" name="email" />
                    {errors.email && <span className="error-text">{ errors.email }</span>}
                </p>

                <p>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="6" />
                    {errors.message && <span className="error-text">{ errors.message }</span>}
                </p>

                <div>
                    <button disabled={ isSubmitting }>
                        { isSubmitting ? 'Sending...' : 'Send Message' }
                    </button>
                </div>
            </Form>
        </section>
    );
}

export default ContactPage;

export async function contactAction({ request }) {
    const data = await request.formData();

    const contactData = {
        name: data.get('name').trim(),
        email: data.get('email').trim(),
        message: data.get('message').trim(),
    };

    const errors = {};

    if (contactData.name === '')
        errors.name = 'Please enter your name.';

    //Used AI to get a valid Email tester
    if (!/^\S+@\S+\.\S+$/.test(contactData.email))
        errors.email = 'Please enter a valid email address.';

    if (contactData.message === '')
        errors.message = 'Please enter a message.';

    if (Object.keys(errors).length > 0)
        return { errors };

    try {
        const response = await fetch('https://portfolio-bd1f8-default-rtdb.firebaseio.com/messages.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...contactData, sentAt: new Date().toISOString() })
        });

        if (!response.ok)
            throw new Error('Request failed');
    } catch {
        return { errors: { form: 'Could not send your message. Please try again later.' } };
    }

    return { success: true };
}
