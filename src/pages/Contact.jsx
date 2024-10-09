import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div>
        <h1>Admin</h1>
        <p>
          If you have any questions or need help, please don't hesitate to
          contact us.
        </p>
        <p>Email: admin@example.com</p>
        <p>Phone: 123-456-0000</p>
        <p>Address: 123 Main St, City, State, Zip Code</p>
        <p>Hours: 9:00 AM - 5:00 PM</p>
        <p>
          Email us at <a href="mailto:admin@example.com">admin@example.com</a>
        </p>
      </div>

      <div>
        <h1>Developer</h1>
        <p>Email: developer@example.com</p>
        <p>Phone: 123-456-3658</p>
      </div>

      <div>
        <h1>Tester</h1>
        <p>Email: tester@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>


     

    </div>
  );
};

export default Contact;
