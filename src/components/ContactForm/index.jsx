import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm({ questions }) {
  const [answers, setAnswers] = useState({});
  const [userData, setUserData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleFieldChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const validateInput = () => {
    const newErrors = {};

    if (!userData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    }

    if (!userData.prenom.trim()) {
      newErrors.prenom = 'Le prénom est requis';
    }

    if (!userData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInput()) {
      console.log('Formulaire soumis avec succès');
      sendEmail();
      setIsSubmitted(true);
    } else {
      console.log('Validation a échoué. Le formulaire n\'a pas été soumis.');
    }
  };

  const sendEmail = () => {
    const emailParams = {
      to_email: 'contact@adlagencedigitale.fr',
      ...userData,
      message: userData.message || 'N/A',
    };

    questions.forEach((question) => {
      const answer = answers[question.id] || 'N/A';
      emailParams[`question_${question.id}`] = answer;
    });

    console.log('EmailParams:', emailParams);

    const emailUserId = process.env.REACT_APP_EMAILJS_USERID;
    const emailService = process.env.REACT_APP_EMAILJS_SERVICE;
    const emailTemplate = process.env.REACT_APP_EMAILJS_TEMPLATE;
    
    emailjs.send(emailService, emailTemplate, emailParams, emailUserId)
      .then((response) => {
        console.log('Email envoyé avec succès :', response);
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'email :', error);
        alert('Votre demande n\'a pas pu être envoyée');
      });
    setIsSubmitted(true);
  };

  return (
    <div className='contact__container-form'>
      {isSubmitted ? (
        <div className="confirmation-message">
          <h3>Merci !</h3>
          <p>Votre demande a bien été envoyée. Nous prendrons contact avec vous rapidement.</p>
        </div>
      ) : (
        <div>
          <form id='contact__form-anchor' className='form' onSubmit={handleSubmit}>
            {questions.map((question) => (
              <div className='contact__form-questions' key={question.id}>
                <label>{question.question}</label>
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <input
                      type="checkbox"
                      id={`question-${question.id}-${optionIndex}`}
                      value={option}
                      checked={answers[question.id]?.includes(option)}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        const optionValue = e.target.value;
                        let updatedAnswers = [...(answers[question.id] || [])];
                        if (isChecked) {
                          updatedAnswers.push(optionValue);
                        } else {
                          updatedAnswers = updatedAnswers.filter((value) => value !== optionValue);
                        }
                        handleAnswerChange(question.id, updatedAnswers);
                      }}
                    />
                    <label htmlFor={`question-${question.id}-${optionIndex}`}>{option}</label>
                  </div>
                ))}
              </div>
            ))}
            <div className='container__form'>
              <div className="form-group">
                <label htmlFor="nom">Nom :</label>
                <input
                  type="text"
                  id="nom"
                  className="form-control"
                  value={userData.nom || ''}
                  onChange={(e) => handleFieldChange('nom', e.target.value)}
                  required
                />
                {errors.nom && (
                  <div className="error-message">{errors.nom}</div>
                )}
              </div>
              {/* Ajoutez les autres champs ici */}
              <div className="form-group" id="contact__form-group">
          <label htmlFor="prenom">Prénom :</label>
          <input
          type="text"
          id="prenom"
          className="form-control"
          value={userData.prenom || ''}
          onChange={(e) => handleFieldChange('prenom', e.target.value)}
          required
          />
          {errors.prenom && (
            <div className="error-message">{errors.prenom}</div>
          )}
        </div>

        <div className="form-group" id="contact__form-group">
          <label htmlFor="email">E-mail :</label>
          <input
          type="email"
          id="email"
          className="form-control"
          value={userData.email || ''}
          onChange={(e) => handleFieldChange('email', e.target.value)}
          required
          />
          {errors.email && (
            <div className="error-message">{errors.email}</div>
          )}
        </div>

        <div className="form-group" id="contact__form-group">
          <label htmlFor="telephone">Numéro de téléphone :</label>
          <input
          type="tel"
          id="telephone"
          className="form-control"
          value={userData.telephone || ''}
          onChange={(e) => handleFieldChange('telephone', e.target.value)}
          required
          />
          {errors.telephone && (
            <div className="error-message">{errors.telephone}</div>
          )}
        </div>

        <div className="form-group" id="contact__form-group">
          <label htmlFor="message">Votre message :</label>
          <input
          type="text"
          id="message"
          className="form-control"
          value={userData.message || ''}
          onChange={(e) => handleFieldChange('message', e.target.value)}
          required
          />
          {errors.tmessage && (
            <div className="error-message">{errors.message}</div>
          )}
        </div>
      </div>
            <div className="buttons">
              <button className='form__button' type="submit">
                Valider
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ContactForm;



