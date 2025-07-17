#![allow(unused)]
use actix_files::Files;
use actix_web::post;
use actix_web::web::Form;
use actix_web::{self, App, HttpResponse, HttpServer, Responder, get};
use ammonia::clean;
use askama;
use askama::Template;
use pulldown_cmark::Options;
use serde;
use serde::Deserialize;

#[derive(Template)]
#[template(path = "home.html")]
struct HelloTemplate {
    hello: String,
}

#[get("/")]
async fn home() -> impl Responder {
    let template = HelloTemplate {
        hello: "hello rust".to_string(),
    };

    HttpResponse::Ok().body(template.render().unwrap())
}

#[derive(Debug, Deserialize)]
struct FormData {
    content: String,
}

#[post("/submit")]
async fn submit_markdown(form: Form<FormData>) -> impl Responder {
    let options = Options::all();
    let parser = pulldown_cmark::Parser::new_ext(&form.content, options);
    let mut html_output = String::new();
    pulldown_cmark::html::push_html(&mut html_output, parser);
    html_output = clean(&html_output);

    HttpResponse::Ok()
        .content_type("text/html")
        .body(html_output)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(home)
            .service(submit_markdown)
            .service(Files::new("/static", "./static"))
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await
}
