const feedbackForm = document.querySelector('.feedback-form');

function saveFeedbackToLocalStorage() {
    const formData = new FormData(feedbackForm);
    const feedback = {};
    formData.forEach((value, name) => {
      feedback[name] = value;
    });
    const serializedFeedback = JSON.stringify(feedback);
    localStorage.setItem('feedback-form-state', serializedFeedback); 
}
function loadFeedbackFromLocalStorage() {
    const serializedFeedback = localStorage.getItem('feedback-form-state');
    if (serializedFeedback) {
        const feedback = JSON.parse(serializedFeedback);
        for (const name in feedback) {
            const input = feedbackForm.elements[name];
            if (input) {
                input.value = feedback[name];
            }
        }
    }
}
function resetFeedbackForm() {
  feedbackForm.reset();
  saveFeedbackToLocalStorage();
}

feedbackForm.addEventListener('input', saveFeedbackToLocalStorage);
feedbackForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  resetFeedbackForm();
});

loadFeedbackFromLocalStorage();




