function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function redirectToEmail(provider) {
    const email = getUrlParameter('mail');
    let subject = getUrlParameter('subject');
    if (!subject) {
        subject = "No Subject"; // Default subject if none is provided
    }

    let url = '';
    switch(provider) {
        case 'gmail':
            url = `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}`;
            break;
        case 'outlook':
            url = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${email}&subject=${subject}`;
            break;
        case 'yahoo':
            url = `https://compose.mail.yahoo.com/?to=${email}&subject=${subject}`;
            break;
        default:
            alert('Unsupported email provider');
            return;
    }
    window.location.href = url;
}
