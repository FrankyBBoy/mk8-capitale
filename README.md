# Mk8Capitale

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deploy
Run `ng build --prod`
Run `firebase deploy`

## Backup and restore database
Set project: `gcloud config set project mk8-capitale`

Export database: `gcloud firestore export gs://mk8-capitale-backup-bucket/2019-11-23 --collection-ids=challenge`

Import database: `gcloud firestore import gs://mk8-capitale-backup-bucket/2019-11-23 --collection-ids=challenge`

More informations: https://firebase.google.com/docs/firestore/manage-data/export-import
