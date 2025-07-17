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

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(home))
        .bind(("127.0.0.1", 8080))?
        .run()
        .await
}
