import { Uri } from "vscode";
import { generateStructure } from "../utils/utils";
import * as template from "../templates/structure_template.json";

export const flutterNIStructure = async (uri: Uri) => {
    generateStructure(uri, template);
};