import React from 'react';
import fs from 'fs';
import path from 'path';

const pathFile = path.resolve(__dirname, 'Hello.txt');
const txt = fs.readFileSync(pathFile, {encoding: 'utf8'}).toString();

const HelloServer = () => (
  <div>
    <h3>HelloServer</h3>
    <div>{txt}</div>
  </div>
);

export default HelloServer;
