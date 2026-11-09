// Contact form: there is no mail server behind this site, so instead of posting the form
// (which used to fail with "405 Method Not Allowed"), open the visitor's email app with
// the message already written. The address comes from the form's data-mail-to attribute.
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");
    if (!form) return;
    var status = document.querySelector(".status");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!form.reportValidity()) return;

        var value = function (id) { return document.getElementById(id).value.trim(); };
        var name = value("SenderName");
        var body =
            value("message") + "\n\n" +
            "-- \n" + name + "\n" + value("recipientEmail") + "\n" + value("phone");

        window.location.href =
            "mailto:" + form.dataset.mailTo +
            "?subject=" + encodeURIComponent("Portfolio enquiry from " + name) +
            "&body=" + encodeURIComponent(body);

        if (status) {
            status.innerHTML = "";
            var note = document.createElement("p");
            note.className = "text-success text-center";
            note.textContent = "Your email app should open with the message ready to send. " +
                "If it doesn't, email me at " + form.dataset.mailTo + ".";
            status.appendChild(note);
        }
    });
});
