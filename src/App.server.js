/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {Suspense} from 'react';

// import Note from './Note.server';
// import NoteList from './NoteList.server';
// import EditButton from './EditButton.client';
// import SearchField from './SearchField.client';
// import NoteSkeleton from './NoteSkeleton';
// import NoteListSkeleton from './NoteListSkeleton';

export default function App({selectedId, isEditing, searchText}) {
  return (
    <div className="main">
      <Suspense fallback={<div>loading...</div>}>
        <div>Hello, test</div>
      </Suspense>
    </div>
  );
}
