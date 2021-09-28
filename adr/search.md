# Search / Filter the datasets

## Status

Implemented

## Context

For a better navigation in the directory tree a search feature is to be implemented to filter out some uneeded results that could be annoying for the user with a large number of files/directories

## Considered Options

* FuseJs
* Fuzzy
* Lunr.js
* List.js

## Decision

[FuseJs](https://fusejs.io/) was chosen over the other option , Fusejs will allow to perform a fuzzy search on the frontend side without the need to assign this task to the backend
Fusejs is straight forward to implement, performant and does not include any other dependencies




