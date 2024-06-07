/// <reference types="bun-types" />

import { Glob } from "bun";
import * as Bun from "bun";
import { JSDOM } from "jsdom";

const glob = new Glob("**/*.html");

// Scans the current working directory and each of its sub-directories recursively
for await (const file of glob.scan(".")) {
	const text = await Bun.file(file).text();
	const dom = new JSDOM(text);
	dom.window.document.querySelectorAll("[href]").forEach((el) => {
		const href = el.getAttribute("href");

		if (href?.startsWith("/static")) {
			const newHRef = "/b2g-docs" + href;
			el.setAttribute("href", newHRef);
		}
	});
	Bun.write(file, dom.serialize());
}
