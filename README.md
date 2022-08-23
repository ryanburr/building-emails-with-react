# Building Emails with React

## Background

### Quick History Lesson

- 1971: The first email ever sent on the ARPANET system, though it wasn't called "email" yet.
- 1978: A computerized interoffice mail system was invented called, EMAIL.
- 1992: Multipurpose Internet Mail Extension (MIME) made email much more flexible, supporting text in character sets other than ASCII.
- 1996: Webmail clients starting to gain popularity, and with it came support for HTML in emails.
- 2010: iPhone 4 is released and responsive emails become necessary.

### HTML in Email

Even with emails supporting HTML since 1996, there are still only a subset of HTML tags that are supported by email clients. The support for certain tags and attributes even varies from one email client to another.

Check out [caniemail.com](https://www.caniemail.com/) to see what clients support which tags.

With inconsistent support, making responsive emails becomes a challenge.

### Making Emails Easy

Created in 2015 by Mailjet, [MJML](https://mjml.io/) had one objective, to abstract away the complexity of responsive emails.

MJML allows you to write high-level code with reusability and extensibility in mind.

The MJML engine is actually built in React for its high composability.

### Custom MJML Components

Much like React, MJML allows you to create custom components. The syntax is very similar to writing class components in React, but the developer experience is not great. For example, the `render` has to be written as a string:

```js
  public render(): string {
    return `
      <span ${this.htmlAttributes({ style: 'bubble' })}>
        ${this.getAttribute('number')}
      </span>
    `;
  }
```

Even trying to render other MJML components in your custom component is not straight forward.

```js
  public render(): string {
    return `
      ${this.renderMJML(`
        <mj-button 
          href="${this.getAttribute('href')}"
          border-radius="4px"
        >
          ${this.getContent()}
        </mj-button>
      `)}
    `;
  }
```

### MJML-React

In 2018, MJML published the first version of [mjml-react](https://github.com/wix-incubator/mjml-react), an npm package that made it even easier to work with their components.



### Limitations

`mjml` and `mjml-react` are meant to be run inside a node.

If you want to compile `mjml` from within a browser, try out [mjml-browser](https://www.npmjs.com/package/mjml-browser).

:warning: I'm not sure how `mjml-react` works with that library.


## Setup

### Install Deps

```bash
npm i mjml mjml-react
```

#### TypeScript

```bash
npm i -D @types/mjml-react
```

### Basic Structure

```html
<Mjml>
  <!-- Root of every template -->
  <MjmlHead>
    <!-- Similar to <head> HTML tag -->
  </MjmlHead>
  <MjmlBody>
    <!-- Similar o <body> HTML tag -->
  </MjmlBody>
</Mjml>
```

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
