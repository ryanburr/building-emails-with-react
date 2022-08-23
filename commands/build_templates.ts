import path from 'path';
import { render } from 'mjml-react';
import { Basic } from '../templates/1.basic';
import { writeFileRecursive } from '../utils/writeFileRecursive';

const OUT_DIR = 'build/templates'

async function main() {
  try {
    console.log("Building emails...");

    console.log("Building 1.basic");
    const basicOutput = render(Basic(), { validationLevel: "strict" });
    await writeFileRecursive(
      path.join(OUT_DIR, "1.basic.html"),
      basicOutput.html
    );

    console.log(`Emails built successfully to "${OUT_DIR}".`);
  
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();