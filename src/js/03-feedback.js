import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

function saveFeedback() {
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

const throttledSaveFeedback = throttle(saveFeedback, 500);

function loadFeedback() {
  try {
    const serializedFeedback = localStorage.getItem('feedback-form-state');
    if (serializedFeedback) {
      const feedback = JSON.parse(serializedFeedback);
      feedbackForm.elements.email.value = feedback.email;
      feedbackForm.elements.message.value = feedback.message
    }
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

feedbackForm.addEventListener('input', throttledSaveFeedback);

window.addEventListener('load', loadFeedback);

feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault('');

  const emailInput = feedbackForm.elements.email;
  const messageInput = feedbackForm.elements.message;

  const feedback = {
    email: emailInput.value,
    message: messageInput.value
  };

  console.log(feedback);

  emailInput.value = '';
  messageInput.value = '';

  localStorage.removeItem('feedback-form-state');
});
