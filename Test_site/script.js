document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleInfo");
    const additionalInfo = document.getElementById("additionalInfo");

    toggleButton.addEventListener("click", function() {
        if (additionalInfo.style.display === "none" || additionalInfo.style.display === "") {
            additionalInfo.style.display = "block";
            toggleButton.textContent = "Скрыть дополнительную информацию";
        } else {
            additionalInfo.style.display = "none";
            toggleButton.textContent = "Показать дополнительную информацию";
        }
    });
});

window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
/* customize formbutton below*/     
formbutton("create", {
  action: "https://formspree.io/f/mrgwoezg",
  title: "Как мы можем помочь?",
  fields: [
    { 
      type: "email", 
      label: "Email:", 
      name: "email",
      required: true,
      placeholder: "your@email.com"
    },
    {
      type: "textarea",
      label: "Сообщение:",
      name: "message",
      placeholder: "Что произошло?",
    },
    { type: "submit" }      
  ],
  styles: {
    title: {
      backgroundColor: "gray"
    },
    button: {
      backgroundColor: "gray"
    }
  }
});
