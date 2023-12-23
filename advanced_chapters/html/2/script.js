document.getElementById('postButton').addEventListener('click', function() {
    postMessage();
});

function postMessage() {
    var message = document.getElementById('messageInput').value;

    // Display the posted content
    document.getElementById('output').innerHTML = "Posted HTML content: " + message;

    // Check if the specific HTML content is posted
    if (message.includes("<" && ">")) {
        document.getElementById('secret').innerText = "Hidden Scripture: CTF{3FC4CCFE745870E2C0D99F71F30FF0656C8DEDD41CC1D7D3D376B0DBE685E2F3}";
    }
}
