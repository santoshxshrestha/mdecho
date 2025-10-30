# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-11-30

### Added

- wasm support for client-side rendering.
- dependencies: `wasm-bindgen`, `wasm-pack`.
- Formatter configuration
- converted crate into library crate.

### Fixed

- Refactored codebase for better modularity and maintainability .

### Removed

- webserver support.

---

## [0.1.0] - 2025-09-21

### Added

- Initial working state of the project.
- Core dependencies: `actix-web`, `actix-files`, `ammonia`, `askama`, `serde`, `pulldoown-cmark`
- Nix flake support for reproducible development environments.
- CI/CD pipeline using GitHub Actions.
- MIT License.
- README and project documentation.

[Unreleased]: https://github.com/santoshxshrestha/mdecho/compare/v0.1.1...HEAD
[0.1.0]: https://github.com/santoshxshrestha/mdecho/releases/tag/v0.1.0
