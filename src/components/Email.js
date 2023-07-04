import { useState } from "react";
import emailjs from "@emailjs/browser";

(function () {
  emailjs.init("g2LBFNbXSAjDMYUaT");
})();

export default function Email({ items }) {
  const [emailTo, setEmailTo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function getMessage() {
    return items
      .map(
        (item) =>
          `${item.quantity} ${item.description}: ${
            item.packed ? "packed" : "to be packed"
          }`
      )
      .join("\r\n");
  }

  function handleSendEamil() {
    setIsLoading(true);
    emailjs
      .send("service_v62ligk", "template_5mm01pl", {
        message: getMessage(),
        toEmail: emailTo,
      })
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 1000);
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
    setEmailTo("");
  }

  return (
    <div className={`email ${isLoading || isSuccess ? "loading" : ""}`}>
      {isLoading ? <div className="loader"> </div> : null}
      {isSuccess ? (
        <div class="success-checkmark">
          <div class="check-icon">
            <span class="icon-line line-tip"></span>
            <span class="icon-line line-long"></span>
            <div class="icon-circle"></div>
            <div class="icon-fix"></div>
          </div>
        </div>
      ) : null}
      <input
        type="text"
        id="email"
        placeholder="Enter your email to get the list..."
        value={emailTo}
        onChange={(e) => setEmailTo(e.target.value)}
      />
      <button onClick={handleSendEamil}>send email</button>
    </div>
  );
}
