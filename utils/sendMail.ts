import emailjs from "emailjs-com";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

export const emailExp =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const isValid = ({ field, value }) => {
  if (field === "from_name") {
    if (value?.length) {
      return true;
    }
    return false;
  } else if (field === "message") {
    if (value?.length > 10) {
      return true;
    }
    return false;
  } else if (field === "email") {
    if (emailExp.test(value)) {
      return true;
    }
    return false;
  } else if (field === "contact_no") {
    if (value?.length >= 10) {
      return true;
    }
    return false;
  }
};

const sendMail = async ({ from_name, message, contact_no, email }) => {
  if (
    !isValid({ field: "from_name", value: from_name }) ||
    !isValid({ field: "email", value: email }) ||
    !isValid({ field: "message", value: message }) ||
    !isValid({ field: "contact_no", value: contact_no })
  ) {
    throw {
      message: "Please fill the form completely.",
      errors: {
        from_name: !from_name,
        email: !emailExp.test(email),
        message: !message || !message?.length,
        contact_no: !contact_no || contact_no?.length < 10,
      },
    };
    // throw new Error("Please fill the form completely.");
  }

  const emailData = {
    to_name: "Ayush Pandey",
    from_name,
    message,
    contact_no,
    email,
    reply_to: "ayushpandey0508@gmail.com",
  };

  try {
    const res = await emailjs.send(serviceId, templateId, emailData, userId);
    return res;
  } catch (e) {
    return e?.messgae || { messgae: "Sorry, Something went wrong." };
  }
};

export { sendMail };
