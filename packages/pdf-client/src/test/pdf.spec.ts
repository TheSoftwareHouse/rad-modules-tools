import "mocha";
import { PdfClient } from "../index";
import * as assert from "assert";

describe("Resource Pdf", () => {
  const pdfClient = new PdfClient({
    host: "localhost",
    port: 50080,
  });

  it("Should create pdf from url", async () => {
    const result = await pdfClient.pdf.create({
      from: "http://www.example.com",
      type: "uri",
      pdfOptions: {},
    });

    assert.deepStrictEqual(Object.keys(result ?? {}), ["url", "expiryAt"]);
  });
});
