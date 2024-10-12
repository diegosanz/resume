# run it with `nix develop --impure`

{
  description = "example-node-js-flake";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };

        buildNodeJs = pkgs.callPackage "${<nixpkgs>}/pkgs/development/web/nodejs/nodejs.nix" {
          python = pkgs.python3;
        };

        nodejs = buildNodeJs {
          enableNpm = true;
          version = "20.18.0";
          sha256 = "sha256-fZQz6R/YjYK6jehucR7EGQdjjiJ5k9IulRJrAvbNcUo=";
        };
      in rec {
        flakedPkgs = pkgs;

        # enables use of `nix shell`
        devShell = pkgs.mkShell {
          # add things you want in your shell here
          buildInputs = with pkgs; [
            nodejs
          ];
        };
      }
    );
}