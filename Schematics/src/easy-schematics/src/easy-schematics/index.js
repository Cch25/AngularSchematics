"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.easySchematics = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const strings = require("@angular-devkit/core/src/utils/strings");
const config_1 = require("@schematics/angular/utility/config");
const parse_name_1 = require("@schematics/angular/utility/parse-name");
const project_1 = require("@schematics/angular/utility/project");
function easySchematics(_options) {
    return (tree, _context) => {
        const workspace = config_1.getWorkspace(tree);
        const projectName = _options.project || Object.keys(workspace.projects)[0];
        const project = project_1.getProject(workspace, projectName);
        const path = _options.path || project_1.buildDefaultPath(project);
        const parsedPath = parse_name_1.parseName(path, _options.name);
        _options.name = parsedPath.name;
        _options.path = parsedPath.path;
        const sourceTemplate = schematics_1.url('./files');
        const sourceParametrizeTemplate = schematics_1.apply(sourceTemplate, [
            schematics_1.template(Object.assign(Object.assign({}, _options), strings)),
            schematics_1.move(parsedPath.path)
        ]);
        tree = schematics_1.mergeWith(sourceParametrizeTemplate)(tree, _context);
        return tree;
    };
}
exports.easySchematics = easySchematics;
//# sourceMappingURL=index.js.map