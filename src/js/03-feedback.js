const feedbackForm = document.querySelector('.feedback-form');

function saveFeedbackToLocalStorage() {
  const emailInput = feedbackForm.elements.email;
  const messageInput = feedbackForm.elements.message;

  const feedback = {
    email: emailInput.value,
    message: messageInput.value
  };

  try {
    const serializedFeedback = JSON.stringify(feedback);
    localStorage.setItem('feedback-form-state', serializedFeedback);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function loadFeedbackFromLocalStorage() {
  try {
    const serializedFeedback = localStorage.getItem('feedback-form-state');
    if (serializedFeedback) {
      const feedback = JSON.parse(serializedFeedback);
      feedbackForm.elements.email.value = feedback.email;
      feedbackForm.elements.message.value = feedback.message;
    }
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

function resetFeedbackForm() {
  feedbackForm.reset();
  saveFeedbackToLocalStorage();
}

feedbackForm.addEventListener('input', saveFeedbackToLocalStorage);
feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault();
  resetFeedbackForm();
});

loadFeedbackFromLocalStorage();




