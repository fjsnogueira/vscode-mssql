// The module 'assert' provides assertion methods from node
// import assert = require('assert');
// import * as vscode from 'vscode';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import { SqlOutputContentProvider } from '../src/models/sqlOutputContentProvider';
// import LocalWebService from '../src/controllers/localWebService';
// import Interfaces = require('../src/models/interfaces');
// import Constants = require('../src/models/constants');
// let results = require('./resources/results.json');
// let messages = require('./resources/messages.json');
// let metadata = [
//     {
//         "columnsUri":"/" + Constants.outputContentTypeColumns+ "?id=0",
//         "rowsUri":"/" + Constants.outputContentTypeRows + "?id=0"
//     }
// ]

// let fs = require('fs');
// let request = require('request');

// class TextContext implements vscode.ExtensionContext {
//     subscriptions: { dispose(): any }[];
//     workspaceState: vscode.Memento;
//     globalState: vscode.Memento;
//     extensionPath: string;
//     asAbsolutePath(relativePath: string): string {
//         return '';
//     }

//     constructor(path: string) {
//         this.extensionPath = path;
//     }
// }


// suite('SqlOutputProvider Tests', () => {

//     let contentProvider: SqlOutputContentProvider;
//     let path: string;
//     let port: string;
//     let file = '/out/test/resources/sqlTest.sql';

//     function openSQLFile(): Thenable<void> {
//         return vscode.workspace.openTextDocument(vscode.Uri.parse('file:' + path + file)).then( document => {
//             vscode.window.showTextDocument(document);
//         });
//     }

    // setup(() => {
    //     path = vscode.extensions.getExtension('microsoft.vscode-mssql').extensionPath;
    //     contentProvider = new SqlOutputContentProvider(new TextContext(path));
    //     port = LocalWebService._servicePort;
    //     return openSQLFile();
    // });

    // test("Initial Server Responses", () => {
    //     let uri = contentProvider.updateContent(messages, results);
    //     let url = 'http://localhost:' + port + '/' + Interfaces.ContentTypes[Interfaces.ContentType.Root] + '?uri=' + uri;
    //     let htmlbuf = fs.readFileSync(path +'/src/views/htmlcontent/sqlOutput.ejs')
    //     htmlbuf = htmlbuf.toString();
    //     htmlbuf = htmlbuf.replace('<%=uri%>', uri);
    //     return request.get(url, function(err, res, body){
    //         assert.equal(res.statusCode, 200);
    //         assert.equal(htmlbuf.toString(), body);
    //     });
    // });

    // test("Correctly Delievers MetaData", () => {
    //     let uri = contentProvider.updateContent(messages, results);
    //     let url = 'http://localhost:' + port + '/' + Interfaces.ContentTypes[Interfaces.ContentType.ResultsetsMeta] + '?uri=' + uri;
    //     return request.get(url, function(err, res, body){
    //         assert.equal(res.statusCode, 200);
    //         assert.equal(body, JSON.stringify(metadata));
    //     });
    // });

    // test("Correctly Delievers Messages", () => {
    //     let uri = contentProvider.updateContent(messages, results);
    //     let url = 'http://localhost:' + port + '/' + Interfaces.ContentTypes[Interfaces.ContentType.Messages] + '?uri=' + uri;
    //     return request.get(url, function(err, res, body){
    //         assert.equal(res.statusCode, 200);
    //         assert.equal(body, JSON.stringify(messages));
    //     });
    // });

    // test("Correctly Delivers Columns", () => {
    //     let uri = contentProvider.updateContent(messages, results);
    //     let url = 'http://localhost:' + port + '/' + Interfaces.ContentTypes[Interfaces.ContentType.Columns] + '?id=0&uri=' + uri;
    //     return request.get(url, function(err, res, body){
    //         assert.equal(res.statusCode, 200);
    //         assert.equal(body, JSON.stringify(results[0].columns));
    //     });
    // });

    // test("Correctly Delievers Rows", () => {
    //     let uri = contentProvider.updateContent(messages, results);
    //     let url = 'http://localhost:' + port + '/' + Interfaces.ContentTypes[Interfaces.ContentType.Rows] + '?id=0&uri=' + uri;
    //     return request.get(url,(err, res, body) => {
    //         assert.equal(res.statusCode, 200);
    //         assert.equal(body, JSON.stringify(results[0].rows));
    //     });
    // });
// });
