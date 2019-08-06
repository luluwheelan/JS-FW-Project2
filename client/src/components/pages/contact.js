import React from "react";

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      contact: [
        {
          name: "Lu Chen",
          email: "luluwheelan@gmail.com",
          linkedInUrl: "https://www.linkedin.com/in/luluwheelan/"
        },
        {
          name: "Craig",
          email: "ayaanamirei629@gmail.com",
          linkedInUrl: "https://www.linkedin.com/in/yinggehu2018/"
        }
      ]
    };
  }

  render() {
    return (
      <div className="container ">
        {this.state.contact.map(contact => (
          <div className="card m-4 bg-info" style={{ width: "18rem", display: 'inline-block'}}>
            <div className="card-body text-white">
              <h5 className="card-title">{contact.name}</h5>
              <p className="card-text">{contact.email}</p>
              <a href={contact.linkedInUrl} className="btn btn-primary">
                Connect LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Contact;
