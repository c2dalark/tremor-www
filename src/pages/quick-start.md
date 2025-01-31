---
title: Usage Guide
description: Quick start guide to installing, running and testing Tremor.
draft: false
hide_table_of_contents: false
---

# Quick Start Guide

This page explains how to get Tremor running on a local system for development or testing. There are 2 ways of installing Tremor:

1. Installing Tremor on the system without Docker.
2. Using Docker.

## Without Docker

### Install Rust

Tremor can be run on any platform without using Docker by installing the Rust ecosystem. To install the Rust ecosystem, you can use [rustup](https://www.rust-lang.org/tools/install), which is a toolchain installer.

`rustup` will install all the necessary tools required for Rust, which includes `rustc` (the compiler) and `Cargo` (package manager).

Tremor is built using the latest stable toolchain, so when asked to select the toolchain during installation, select `stable`.

#### macOS/Linux

Run the following command and follow the on-screen instructions:

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Now, activate it by adding `source $HOME/.cargo/env` to your `.rc file`, and open a new console.

For building Tremor on macOS, you also need to install xcode and the commandline tools.

#### Windows

Pre-requisite: Rust requires the Microsoft C++ build tools for Visual Studio 2013 or later. You can get those from: https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2019. During installation, make sure Windows 10 SDK is selected (should be on by default).

Now, download the `rustup` installer by clicking [here](https://win.rustup.rs/x86_64). Run it, and follow the on-screen instructions.

### Additional Libraries

#### macOS

```bash
brew install cmake
```

#### Ubuntu

```bash
sudo apt install libssl-dev libclang-dev cmake
```

#### Windows

- [cmake](https://cmake.org/download/): choose the latest stable release (3.16 at the time of writing).
- [clang](https://releases.llvm.org/download.html): choose Windows pre-built binaries for the latest release that has it (9.0.0 at the time of writing).

Make sure the `cmake` and `llvm` binaries are added to the system path for at least the current user (if not all), as part of the installation process.

Since `openssl` does not provided official builds, you can get it via [vcpkg](https://github.com/microsoft/vcpkg).

First, set up `vcpkg`:

```
git clone https://github.com/Microsoft/vcpkg.git
cd vcpkg
.\bootstrap-vcpkg.bat
.\vcpkg integrate install # hook up user-wide integration
```

Now install `openssl` with:

```
.\vcpkg install openssl:x64-windows-static
```

To pick up the openssl libs during the Tremor build, you also have to set the `OPENSSL_DIR` environment variable right now. Example:

```
set OPENSSL_DIR=C:\Users\juju\TREMOR\vcpkg\installed\x64-windows-static
```

Technically, the Rust [openssl](https://docs.rs/openssl) crate will try to discover the` openssl` libs via vcpkg (as long as env var `VCPKGRS_DYNAMIC` is set), but that is not working for the recent `openssl` libs supplied by `vcpkg`. There's a [fix](https://github.com/sfackler/rust-openssl/pull/1238) for it and once that lands in a release for `rust-openssl` (and also starts getting used by Tremor dependencies), we won't have to rely on the `OPENSSL_DIR` var.

### Running Tremor

After installing Rust and cloning the repository, you can start the Tremor server by running the following from the root (`tremor-runtime`) directory:

```bash
cargo run -p tremor-cli -- server run
```

And to run the test suite, you can run:

```bash
cargo test
```

This will run all the tests in the suite, except those which are feature-gated and not needed to quickly test Tremor.

#### Rustfmt

`Rustfmt` is a tool for formatting Rust code according to style guidelines. It maintains consistency in the style in the entire project.

To install `rustfmt` run:

```bash
rustup component add rustfmt
```

To run `rustfmt` on the project, run the following command:

```bash
cargo fmt
```

#### Clippy

`Clippy` is a linting tool that catches common mistakes and improves the rust code. It is available as a toolchain component and can be installed by running:

```bash
rustup component add clippy
```

To run `clippy`, run the following command:

```bash
cargo clippy
```

#### Rustfix

`Rustfix` automatically applies suggestions made by `rustc`. There are two ways of using `rustfix`- either by adding it as a library to `Cargo.toml` or by installing it as a cargo subcommand by running:

```bash
cargo install cargo-fix
```

To run it, you can run:

```bash
cargo fix
```

#### Tree

`Cargo tree` is a subcommand that visualizes a crate's dependency-graph and display a tree structure of them. To install it:

```bash
cargo install cargo-tree
```

To run it:

```bash
cargo tree
```

#### Flamegraph

`Flamegraph` is a profiling tool that visualises where time is spent in a program. It generates a SVG image based on the current location of the code and the function that were called to get there.

To install it:

```bash
cargo install cargo-flamegraph
```

To run it:

```bash
cargo flamegraph
```

### Integration Tests

Tremor contains integration tests that test it from a user's perspective. To run the integration tests you can run:

```bash
make it
```

## With Docker

Tremor contains a `Dockerfile` which makes it easier to run and build using docker. It also contains a Makefile so that common Docker commands.

Make sure Docker has at least 4GB of memory.

To build Tremor, you can run:

```bash
make image
```

To run the images:

```bash
make demo
```
