import path from "path";
import { render } from "mjml-react";
import { Basic } from "../templates/1.basic";
import { writeFileRecursive } from "../utils/writeFileRecursive";

const OUT_DIR = "public/templates";

async function main() {
  try {
    console.log("Building emails...");

    // TODO: 1.b switch to strict validation
    console.log("Building 1.basic");
    const basicOutput = render(Basic(), { validationLevel: "soft" });
    await writeFileRecursive(
      path.join(OUT_DIR, "1.basic.html"),
      basicOutput.html
    );

    // TODO: 2.c Compile custom template

    // TODO: 3.a Compile full template

    console.log(`Emails built successfully to "${OUT_DIR}".`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
