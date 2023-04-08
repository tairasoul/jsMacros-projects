if (!FS.exists("./customLib")) {
    FS.makeDir("./customLib");
}

// scrapped version thing because i dont think it'll work too well
if (!FS.exists("./customLib/type.js")) {
    const req = Request.get("https://raw.githubusercontent.com/fheahdythdr/jsMacros-projects/main/paths.json");
    const parsed = JSON.parse(req.text());
    const basePath = "https://raw.githubusercontent.com/fheahdythdr/jsMacros-projects/main/";
    const typepath = parsed["type.js"];
    const verpath = parsed["versions.json"];
    const resPath = basePath + typepath;
    const versions = basePath + verpath;
    const data = Request.get(resPath);
    FS.open('./customLib/type.js').write(data.text());
    const verdata = Request.get(versions);
    FS.open("./customLib/versions.json").write(verdata.text())
}
if (!FS.exists("./killaura.js")) {
    const req = Request.get("https://raw.githubusercontent.com/fheahdythdr/jsMacros-projects/main/paths.json");
    const parsed = JSON.parse(req.text());
    const basePath = "https://raw.githubusercontent.com/fheahdythdr/jsMacros-projects/main/";
    const typepath = parsed["killaura.js"];
    const resPath = basePath + typepath;
    const data = Request.get(resPath);
    FS.open('./killaura.js').write(data.text());
}
const req = Request.get("https://raw.githubusercontent.com/fheahdythdr/jsMacros-projects/main/paths.json");
const parsed = JSON.parse(req.text());
const basePath = "https://raw.githubusercontent.com/fheahdythdr/jsMacros-projects/main/";
const verpath = parsed["versions.json"];
const resPath = basePath + verpath;
const data = Request.get(resPath);
const parsedversions = JSON.parse(data.text());
const ver = parsedversions;
const currentver = JSON.parse(FS.open("./customLib/versions.json").read());
if (currentver["type.js"] != ver["type.js"]) {
    const typepath = parsed["type.js"];
    const typedata = Request.get(basePath + typepath);
    FS.open('./customLib/type.js').write(typedata.text());
}
if (currentver["killaura.js"] != ver["killaura.js"]) {
    const typepath = parsed["killaura.js"];
    const typedata = Request.get(basePath + typepath);
    FS.open('./customLib/type.js').write(typedata.text());
}

JsMacros.runScript("./killaura.js")
