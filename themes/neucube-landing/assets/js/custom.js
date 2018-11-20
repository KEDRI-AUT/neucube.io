if (document.getElementById("search-input") != null) {
    search.addWidget(
        instantsearch.widgets.searchBox({
            container: '#search-input',
            placeholder: 'Search...',
            magnifier: false,
            reset: false
        })
    );
}

if (document.getElementById("hits") != null) {
    search.addWidget(
        instantsearch.widgets.hits({
            container: '#hits',
            templates: {
                empty: 'No results',
                item: '> <a class="gol-links" href="{{{uri}}}">{{{title}}}</a>'
            },
            escapeHits: true
        })
    );
}

if (document.getElementById("search-input-sidenav") != null) {
    search.addWidget(
        instantsearch.widgets.searchBox({
            container: '#search-input-sidenav',
            placeholder: 'Search...',
            magnifier: false,
            reset: false
        })
    );
}

if (document.getElementById("hits-sidenav") != null) {
    search.addWidget(
        instantsearch.widgets.hits({
            container: '#hits-sidenav',
            templates: {
                empty: 'No results',
                item: '> <a class="gol-links" href="{{{uri}}}">{{{title}}}</a>'
            },
            escapeHits: true
        })
    );
}


search.start();