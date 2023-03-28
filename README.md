# Running the Application
## Install dependencies
```yarn install```

## Run development server
```yarn dev```

## Notes

I used Vite tooling for development of react + swc and typescript

I assumed the html wanted to be kept as .html files. I embedded an Iframe to load them in from the web, however i would have preferred to alter them to .jsx files and let react handle the rendering. The files were in a /storage folder which gave the assumtion they were not to be in a public folder, however without a backend to handle the emedding of html files i had move them into the /public folder

The typescript using ```as type``` in certain areas of the application without correct parsing and checking of types, this was due to time limitations

There is no jest tests, however I would normally add these in as well.

Here is a link to a document I've written on how i usually write jest tests: https://scratch-bone-0e6.notion.site/Testing-Components-bc9f24e24f794d0a99b1e48f5d2a1cb3

Here is a link to a document on my approach to writing components https://scratch-bone-0e6.notion.site/Components-b4c2bfe70f7245ac9a95c56b534a4aaf

## Packages used

Tailwindcss
React-router


# A Fake Document Service - mini-project

Hello! This README is to serve as instructions for this mini-project. All required information should be available below and provided as part of this package (if not, please contact us!) Please only spend a **maximum** of a few hours on this. We can discuss your approach as well as any un-implemented features in our second interview stage. To make sure this README is viewed as intended, please use a markdown viewer to view this document.

## Tools/Frameworks to use
As a purely frontend application (no backend should be nescessary nor implemented); we would like you to use **React** (typescript optionally) but **NOT** any fullstack frameworks (The application should use client side rendering)

**You may** use any tools to jumpstart your application (eg. create-react-app) and **you may** use any associated bundler to build/serve your application locally (eg. webpack). (Please use either **npm or yarn** as a dependency manager but feel free to use basic packages as you see fit). The application **should NOT** use any cloud based services or platforms (The built application should work without making any external network requests). The application needs only to run locally.
## The task
The task is to build a small frontend application to view and explore some fake documents served as chapters of html content. All data about the documents has been provided in the documents.json file and in the content of the chapters in the 'storage' directory. Both should be consumed by the application at runtime (No external requests should be nescessary; instead simply read from these files directly when required; for example using the fetch api to get the html files)

### The Data

When accessing the provided data (documents.json and html files), please imagine/treat them as both as a mock database and mock external data storage respectively. When fetching the data from either of these; please add a manual timeout of 1 second before returning the content (This is simply to mock some latency that would exist in a normal network request)

#### documents json
The provided documents.json file is intended to be used as a mock database. The schema is described below and is referred to in the above task specification:

```
  <Document ID> : {
    "title" : <Document Title>,
    "description : <Description>,
    "chapters" : [
      {
        "title" : <Chapter Title>,
        "content" : <Link to html content>
      },
      {
        "title" : <Chapter Title>,
        "content" : <Link to html content>
      }
    ]
  }
```

Each 'document' can be referred to by each ```Document ID``` key. Each 'document' contains a title, description and an array of chapters each with a chapter title and a reference to an HTML file containing it's content.

#### Storage html files directory
The storage folder contains all html content referred to in the documents.json data.
For example the document with Document ID **abc123** contains a chapter with the key **Lorum Ipsum** and the value **lorum_ipsum.html**. This html file exists in the storage directory and contains the html that should be displayed when at the path ```/abc123/Lorum Ipsum```. The html does not need any processing and there are no external resources such as images to worry about!

## Requirements

The application should contain the following pages:

- A simple search page accessed at path ```/```
  - This page should: Show all available documents from documents.json as clickable elements that display both the ```<Document Title>``` and the ```<Description>``` of the document. The clickable link should navigate to the document page a ```/<Document ID>``` (See [documents json](#documents-json) for schema)
- A document page that shows the content of the document - accessed at path ```/<Document ID>```
  - On the left: there should be a flatlist of all chapter titles (each ```title``` in the ```chapters``` array for that document) which should function as clickable links and should navigate to ```/<Document ID>/<Chapter Title>```.
  - On the right: there should be the html content contained in the refrerence html file for the current chapter. (For url ```/<Document ID>/<Chapter Title>``` you should show the html for ```<Chapter Title>```)
  - NOTE: ```/<Document ID>``` should redirect to show the first chapter in the document's ```chapters``` list. (eg. ```/102310``` should redirect to show the first chapter in the chapters object ```/102310/A guide to hats```.


### Example of use

The user loads the application at path ```/``` and is served a list of document titles and descriptions from **documents.json**. On clicking the document with title "**A guide to hats**" they are navigated to the first chapter of the respective document at ```/102310/What are hats``` which displays the list of chapters on the left and the content of the associated chapter on the right from **hats_spec.html**. From here, on the left, they go to the list of chapter titles and click on the second chapter ```Hats and how to use them``` which updated the URL to ```/102310/Hats and how to use them``` and on the right; shows the content of **using_hats.html**.


## What we DO NOT expect:
We do not expect any fancy styling or mobile responsiveness; we are simply looking for a basic featurefull UI that satisfies the requirements in a functional way on a standard 1920x1080 resolution.

## What we expect:
A ZIP of the working application codebase that provides the above described functionality; as well as a text file with a brief bried explanation on how to run the application locally as well as any assumtions made.

## Final bits
If you run into issues with any of the content provided (eg. documents.json); feel free to make your own decision on how to resolve the issue (you can mention any assumptions or workarounds made in your attached README). If you deem the content to be broken or unusable for any reason, feel free to fix it; but make sure to note what you had to change!