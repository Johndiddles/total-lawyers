const stage4Disclaimer = `<p>You should not send any sensitive or confidential information through this site. Any information sent through this site does not create an attorney-client relationship and may not be treated as privileged or confidential. The lawyer or law firm you are contacting is not required to, and may choose not to, accept you as a client. The Internet is not necessarily secure and emails sent through this site could be intercepted or read by third parties.</p>`;

const stage5Disclaimer = `<p>By submitting this form I agree to the <a href="https://www.internetbrands.com/ibterms/">Terms of Use</a> and <a href="https://www.internetbrands.com/privacy/privacy-main/">Privacy Policy</a> and consent to be contacted by Martindale-Nolo and its affiliates, and up to three attorneys regarding this request and to receiving relevant marketing messages by automated means, text and/or prerecorded messages at the number
provided. Consent is not required as a condition of service, <a href="#">Click Here</a> to agree without providing consent to be contacted by automated means, text and/or prerecorded messages. Rates may apply.</p>`;

const forms = document.getElementsByClassName("form");
const disclaimer_text = document.getElementById("disclaimer_text");

document.getElementById("signup_form").addEventListener("submit", (e) => {
  e.preventDefault();
});

let currentStep = 0;
const total_steps = 4;

function handleDisclaimer(index) {
  switch (index) {
    case 3:
      disclaimer_text.innerHTML = stage4Disclaimer;
      break;
    case 4:
      disclaimer_text.innerHTML = stage5Disclaimer;
      break;
    default:
      disclaimer_text.innerHTML = "";
      break;
  }
}

function toggleForms(index) {
  Array.from(forms).map((form) => {
    form.classList.remove("show_form");
    form.classList.add("hide_form");
  });
  forms[index].classList.remove("hide_form");
  forms[index].classList.add("show_form");
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function handleNext() {
  if (currentStep + 1 > total_steps) {
    return;
  }

  ++currentStep;
  toggleForms(currentStep);
  handleDisclaimer(currentStep);
  scrollToTop();
}

const formDetails = {
  age: "",
  out_of_work: "",
  treated_in_last_year: "",
  ft_job_in_last_year: "",
  ss_benefits: "",
  hired_attorney: "",
  zip_code: "",
  health_conditions: "",
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
};

function handleOnChange(event) {
  formDetails[event.target.name] = event.target.value;
}

Array.from(document.getElementsByTagName("input")).map((input) =>
  input.addEventListener("change", (event) => handleOnChange(event))
);

Array.from(document.getElementsByTagName("textarea")).map((input) =>
  input.addEventListener("change", (event) => handleOnChange(event))
);

Array.from(document.getElementsByTagName("select")).map((input) =>
  input.addEventListener("change", (event) => handleOnChange(event))
);

function handleSubmit() {
  console.log({ formDetails });
}
