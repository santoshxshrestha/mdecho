use ammonia::clean;
use pulldown_cmark::Options;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn parse_markdown(input: &str) -> String {
    let parser = pulldown_cmark::Parser::new_ext(input, Options::all());
    let mut html_output = String::new();
    pulldown_cmark::html::push_html(&mut html_output, parser);
    clean(&html_output)
}

#[cfg(test)]
pub mod test {
    use super::parse_markdown;

    #[test]
    fn test_parse_markdown() {
        let input = "# Hello World\nThis is a [link](http://example.com).";
        let expected_output = "<h1>Hello World</h1>\n<p>This is a <a href=\"http://example.com\" rel=\"noopener noreferrer\">link</a>.</p>\n";
        let output = parse_markdown(input);
        assert_eq!(output, expected_output);
    }
}
