let searchDebounce = null;
const fireSearch = () => u('#search_form button').nodes[0].click();

const fireSearchWithDebounce = () => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(fireSearch, 500);
}

u(document).on("change", "input[form=search_form]", fireSearch);
u(document).on("keyup", "input[form=search_form]", fireSearchWithDebounce);