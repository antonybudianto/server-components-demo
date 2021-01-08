/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {Suspense} from 'react';

import HelloServer from './Hello.server';
import HelloClient from './Hello.client';

export default function App({selectedId, isEditing, searchText}) {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <div>Hello, test</div>
        <HelloServer />
        <HelloClient />
      </Suspense>
    </div>
  );
}
