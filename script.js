document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const formData = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value
    };
  
    const response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
  
    const result = await response.text();
    document.getElementById("response").textContent = result;
  });
  