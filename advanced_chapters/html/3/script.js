function updateURL() {
    var queryInput = document.getElementById('queryInput');
    var query = queryInput.value;

    // Update the URL with the query
    var newURL = window.location.pathname + "?query=" + encodeURIComponent(query);
    window.history.pushState({ path: newURL }, '', newURL);

    if (query.includes("<" && ">")) {
        document.getElementById('secret').innerText = "Spell averted!";
    }
    else {
        // Display the query underneath the input field
        if (query.includes("&lt;" && "&gt;")) {
            query = query.replace("&lt;", "<");
            query = query.replace("&gt;", ">");
            document.getElementById('secret').innerText = "Hidden Scripture: CTF{8B5B9DB0C13DB24256C829AA364AA90C6D2EBA318B9232A4AB9313B954D3555F}";
        }
        var outputDiv = document.getElementById('output');
        outputDiv.innerHTML = "<strong>Your Query:</strong> " + query;
        var shareDiv = document.getElementById('share');
        shareDiv.innerHTML = "<strong>Shareable Link:</strong> " + window.location.href;
    }



    // Clear the input field (optional, you can remove this line if you want to keep the query in the search bar)
    queryInput.value = '';
}
