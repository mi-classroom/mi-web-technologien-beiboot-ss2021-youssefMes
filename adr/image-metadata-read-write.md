# Read/Write images metadata

## Status

Implemented

## Context

For the images we should be able to read and write metadata

## Considered Options

* exifr
* node-exiftool
* exiftool-vendored

## Decision

[exifr](https://www.npmjs.com/package/exifr) will be used to read images metadata and return tags to the frontend it will be used on the server side.
as limitation of this library its is not possible to edit metadata on the image itself so for this task [node-exiftool](https://www.npmjs.com/package/node-exiftool) will be used

## Consequences

Exifr can read most important metadata of an image.
Node-exiftool can write on the orignal image and replace the tags with a new value provided from the user


