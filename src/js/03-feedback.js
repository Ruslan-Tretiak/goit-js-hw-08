const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.elements.email;
const messageInput = feedbackForm.elements.message;


const saveFeedback = () => {
    const inputItems = {
        email: emailInput.value,
        massage: messageInput.value,
    };
localStorage.setItem("feedback-form-state", JSON.stringify(inputItems));
}   
const loadFeedback = () => {
  const feedbackData = localStorage.getItem("feedback-form-state");
  if (feedbackData) {
    const inputItems = JSON.parse(feedbackData);
    emailInput.value = inputItems.email;
    messageInput.value = inputItems.message;
  }
};

feedbackForm.addEventListener('input', saveFeedback);
loadFeedback();







