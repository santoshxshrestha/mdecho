#![allow(unused)]
use actix_files::Files;
use actix_web::post;
use actix_web::web::Form;
use actix_web::{self, App, HttpResponse, HttpServer, Responder, get};
use askama;
use askama::Template;

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

#[post("/submit")]
async fn submit_markdown() -> impl Responder {
    println!("No data received — just a button click");

    HttpResponse::Ok().body("<p>Triggered without any data</p>")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(home)
            .service(submit_markdown)
            .service(Files::new("/static", "./static"))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
